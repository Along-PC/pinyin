import test from 'node:test'
import assert from 'node:assert/strict'
import { existsSync } from 'node:fs'
import { PINYIN_LIST } from '../src/data/pinyinData.js'
const recordings = []
const utterances = []
globalThis.window = { speechSynthesis: {
  cancel() {}, getVoices() { return [{ name: '粤语', lang: 'zh-HK' }] },
  speak(value) { utterances.push(value) }, addEventListener() {},
} }
globalThis.SpeechSynthesisUtterance = class { constructor(text) { this.text = text } }
globalThis.Audio = class {
  constructor(src) { this.src = src; recordings.push(this) }
  play() { return Promise.resolve() }
  pause() { this.paused = true }
}
const { speakTone, speakPinyinItem, speakPinyin, stopSpeech } = await import('../src/utils/audio.js')

test('声调播放按带调拼音选录音，不朗读会变调的例词', async () => {
  await speakTone('yī', '一朵')
  assert.match(recordings.at(-1)?.src || '', /yi1\.mp3$/)
  assert.equal(utterances.length, 0)
  await speakTone('yìng', '应该')
  assert.match(recordings.at(-1).src, /ying4\.mp3$/)
})

test('全部卡片和声调都对应存在的本地录音', async () => {
  for (const item of PINYIN_LIST) {
    assert.equal(await speakPinyinItem(item), true, item.id)
    assert.ok(existsSync(`public${recordings.at(-1).src}`), item.id)
    for (const tone of item.tones || []) {
      assert.equal(await speakTone(tone.tone, tone.word), true, tone.tone)
      assert.ok(existsSync(`public${recordings.at(-1).src}`), tone.tone)
    }
  }
})

test('慢速播放保留音高，快速连点停止上一段', async () => {
  await speakPinyinItem(PINYIN_LIST[0], { rate: 0.6 })
  const previous = recordings.at(-1)
  assert.equal(previous.playbackRate, 0.7)
  assert.equal(previous.preservesPitch, true)
  await speakTone('ā')
  assert.equal(previous.paused, true)
  stopSpeech()
  assert.equal(recordings.at(-1).paused, true)
})

test('整词朗读不选择粤语引擎，使用自然音高', () => {
  speakPinyin('普通话')
  assert.equal(utterances.at(-1).lang, 'zh-CN')
  assert.equal(utterances.at(-1).voice, undefined)
  assert.equal(utterances.at(-1).pitch, 1)
})

test('移除虚构的整体认读声调，修正四声例词及鼻音示范', () => {
  const item = id => PINYIN_LIST.find(p => p.id === id)
  assert.deepEqual(item('ri').tones.map(t => t.tone), ['rì'])
  assert.ok(!item('si').tones.some(t => t.tone === 'sí'))
  assert.ok(!item('yue').tones.some(t => ['yué', 'yuě'].includes(t.tone)))
  assert.equal(item('ing').tones[3].word, '回应')
  assert.deepEqual(item('ong').tones.map(t => t.tone), ['dōng', 'dóng', 'dǒng', 'dòng'])
})

test('独立韵母保留音值，省写形式和分解形式的 ü 正确匹配', async () => {
  for (const [tone, file] of [
    ['ē', 'e1'], ['ō', 'o1'], ['ěng', 'eng3'], ['uǐ', 'wei3'],
    ['iù', 'you4'], ['ùn', 'wen4'], ['ǘn', 'yun2'], ['ǚ'.normalize('NFD'), 'yu3'],
  ]) {
    assert.equal(await speakTone(tone), true)
    assert.ok(recordings.at(-1).src.endsWith(`/${file}.mp3`), tone)
  }
  const count = recordings.length
  assert.equal(await speakTone('错误输入'), false)
  assert.equal(recordings.length, count)
})
