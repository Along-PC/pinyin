// 语音合成与交互音效工具

import { PINYIN_RECORDINGS, getToneRecording } from '../data/pinyinAudio.js'

// 播放交互音效（利用Web Audio API生成可爱的儿童音效，无需外部音频资源）
class SoundEffect {
  constructor() {
    this.ctx = null
  }

  init() {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioContext = window.AudioContext || window.webkitAudioContext
      if (AudioContext) {
        this.ctx = new AudioContext()
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume()
    }
  }

  // 泡泡点击音效（可爱）
  playPop() {
    try {
      this.init()
      if (!this.ctx) return
      const osc = this.ctx.createOscillator()
      const gain = this.ctx.createGain()
      osc.type = 'sine'
      const now = this.ctx.currentTime
      osc.frequency.setValueAtTime(400, now)
      osc.frequency.exponentialRampToValueAtTime(800, now + 0.08)
      gain.gain.setValueAtTime(0.3, now)
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.08)
      osc.connect(gain)
      gain.connect(this.ctx.destination)
      osc.start(now)
      osc.stop(now + 0.08)
    } catch {
      // 忽略音频异常
    }
  }

  // 成功/答对音效（欢快三连音）
  playSuccess() {
    try {
      this.init()
      if (!this.ctx) return
      const now = this.ctx.currentTime
      const notes = [523.25, 659.25, 783.99] // C5, E5, G5
      notes.forEach((freq, idx) => {
        const osc = this.ctx.createOscillator()
        const gain = this.ctx.createGain()
        osc.type = 'triangle'
        osc.frequency.setValueAtTime(freq, now + idx * 0.08)
        gain.gain.setValueAtTime(0.25, now + idx * 0.08)
        gain.gain.exponentialRampToValueAtTime(0.01, now + idx * 0.08 + 0.15)
        osc.connect(gain)
        gain.connect(this.ctx.destination)
        osc.start(now + idx * 0.08)
        osc.stop(now + idx * 0.08 + 0.15)
      })
    } catch {
      // 忽略音频异常
    }
  }

  // 答错/重试音效（柔和低音）
  playWrong() {
    try {
      this.init()
      if (!this.ctx) return
      const now = this.ctx.currentTime
      const osc = this.ctx.createOscillator()
      const gain = this.ctx.createGain()
      osc.type = 'sawtooth'
      osc.frequency.setValueAtTime(260, now)
      osc.frequency.linearRampToValueAtTime(180, now + 0.2)
      gain.gain.setValueAtTime(0.2, now)
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.2)
      osc.connect(gain)
      gain.connect(this.ctx.destination)
      osc.start(now)
      osc.stop(now + 0.2)
    } catch {
      // 忽略音频异常
    }
  }
}

export const soundEffects = new SoundEffect()

// 获取最佳中文普通话语音
let cachedZhVoice = null
function getChineseVoice() {
  if (typeof window === 'undefined' || !window.speechSynthesis) return null
  if (cachedZhVoice) return cachedZhVoice
  const voices = window.speechSynthesis.getVoices()
  if (!voices || voices.length === 0) return null

  // 优先选取高质量中文普通话女声（支持中文名“婷婷”或“Tingting”等）
  cachedZhVoice = voices.find(v => 
    (v.lang === 'zh-CN' || v.lang === 'zh_CN') && 
    (v.name.includes('婷婷') || v.name.includes('Tingting') || v.name.includes('Google 普通话') || v.name.includes('Xiaoxiao') || v.name.includes('Yaoyao'))
  ) 
  || voices.find(v => v.lang === 'zh-CN' || v.lang === 'zh_CN')
  || voices.find(v => /^cmn(?:[-_]|$)/i.test(v.lang))

  return cachedZhVoice
}

if (typeof window !== 'undefined' && window.speechSynthesis) {
  window.speechSynthesis.addEventListener('voiceschanged', () => {
    cachedZhVoice = null
    getChineseVoice()
  })
}

// 拼音录音与整词朗读共用一个播放通道，避免快速点击时声音叠加。
let activeAudio = null

export function stopSpeech() {
  if (activeAudio) {
    activeAudio.pause()
    activeAudio.currentTime = 0
    activeAudio = null
  }
  if (typeof window !== 'undefined') window.speechSynthesis?.cancel()
}

function playRecording(recording, options = {}) {
  stopSpeech()
  if (typeof Audio === 'undefined') return Promise.resolve(false)
  const base = import.meta.env?.BASE_URL || '/'
  const audio = new Audio(`${base}audio/pinyin/${recording}.mp3`)
  activeAudio = audio
  // 浏览器保留音高，只改变时长，不通过升降音高模拟声调。
  audio.preservesPitch = true
  audio.webkitPreservesPitch = true
  audio.mozPreservesPitch = true
  audio.playbackRate = options.rate < 0.8 ? 0.7 : 1
  audio.onended = () => { if (activeAudio === audio) activeAudio = null }
  try {
    return Promise.resolve(audio.play()).then(() => true).catch(error => {
      if (activeAudio !== audio) return false
      activeAudio = null
      console.error('拼音录音播放失败，请重试：', error)
      return false
    })
  } catch (error) {
    activeAudio = null
    console.error('拼音录音播放失败，请重试：', error)
    return Promise.resolve(false)
  }
}

/** 朗读中文例词和口诀；拼音输入优先匹配独立录音。 */
export function speakPinyin(text, options = {}) {
  if (typeof text !== 'string' || !text.trim()) return
  const key = text.trim().toLowerCase().normalize('NFC')
  const recording = getToneRecording(key) || PINYIN_RECORDINGS[key]
  if (recording) return playRecording(recording, options)
  // 未知拉丁拼音不能交给中文文本引擎猜读。
  if (!/[\u3400-\u9fff]/u.test(text)) return
  if (typeof window === 'undefined' || !window.speechSynthesis) {
    console.warn('当前浏览器不支持语音合成功能')
    return
  }
  stopSpeech()
  try {
    const utterance = new SpeechSynthesisUtterance(text)
    utterance.lang = 'zh-CN'
    utterance.rate = options.rate ?? 0.85
    utterance.pitch = 1
    utterance.volume = 1
    const voice = getChineseVoice()
    if (voice) utterance.voice = voice
    window.speechSynthesis.speak(utterance)
  } catch (error) {
    console.error('语音朗读失败：', error)
  }
}

/** 朗读卡片，列表、详情和听音测验使用同一套录音。 */
export function speakPinyinItem(item, options = {}) {
  const key = (item?.letter || item?.id || '').toLowerCase().normalize('NFC')
  const recording = PINYIN_RECORDINGS[key]
  if (!recording) return Promise.resolve(false)
  return playRecording(recording, options)
}

/** 朗读口诀时将拉丁字母替换为中文读音提示，避免英文逐字母朗读。 */
export function speakMnemonic(item) {
  const pronunciation = item.sound || ''
  const text = item.mnemonic.replace(/[a-zü]+/gi, () => pronunciation)
  speakPinyin(text, { rate: 0.85 })
}

/** 按带调拼音播放独立录音，例词仅作展示，不参与声调匹配。 */
export function speakTone(tone) {
  const recording = getToneRecording(tone)
  if (!recording) return Promise.resolve(false)
  return playRecording(recording)
}
