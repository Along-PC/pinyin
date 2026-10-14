// 语音合成与交互音效工具

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

  // 成功/答对音效（欢快双音）
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

// 获取最佳中文语音
let cachedZhVoice = null
function getChineseVoice() {
  if (typeof window === 'undefined' || !window.speechSynthesis) return null
  if (cachedZhVoice) return cachedZhVoice
  const voices = window.speechSynthesis.getVoices()
  // 优先选取普通话/中文女声（适合儿童教学）
  cachedZhVoice = voices.find(v => (v.lang === 'zh-CN' || v.lang === 'zh_CN') && (v.name.includes('Tingting') || v.name.includes('Xiaoxiao') || v.name.includes('Yaoyao') || v.name.includes('Mei-Jia') || v.name.includes('Chinese'))) 
    || voices.find(v => v.lang.startsWith('zh'))
  return cachedZhVoice
}

if (typeof window !== 'undefined' && window.speechSynthesis) {
  window.speechSynthesis.onvoiceschanged = () => {
    cachedZhVoice = null
    getChineseVoice()
  }
}

/**
 * 朗读拼音/字母/汉字
 * @param {string} text 要朗读的文本
 * @param {Object} options 选项 { rate: 0.85, pitch: 1.1 }
 */
export function speakPinyin(text, options = {}) {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
    console.warn('当前浏览器不支持语音合成功能')
    return
  }

  try {
    // 停止当前正在说的语音
    window.speechSynthesis.cancel()

    const utterance = new SpeechSynthesisUtterance(text)
    utterance.lang = 'zh-CN'
    // 适合儿童教学的语速（稍慢、清晰）和音调（稍高、亲和）
    utterance.rate = options.rate || 0.85
    utterance.pitch = options.pitch || 1.1
    utterance.volume = 1

    const voice = getChineseVoice()
    if (voice) {
      utterance.voice = voice
    }

    window.speechSynthesis.speak(utterance)
  } catch (err) {
    console.error('语音朗读失败:', err)
  }
}

/**
 * 朗读拼音字母卡片（优先读发音谐音，确保汉语声母、韵母准确性）
 * @param {Object} item 拼音数据项
 */
export function speakPinyinItem(item) {
  soundEffects.playPop()
  // 如果是声母或具有指定发音字，朗读其教学标准发音
  const readText = item.sound || item.spokenText || item.letter
  speakPinyin(readText, { rate: 0.8 })
}

/**
 * 朗读记忆口诀
 * @param {Object} item 拼音数据项
 */
export function speakMnemonic(item) {
  soundEffects.playPop()
  speakPinyin(item.mnemonic, { rate: 0.9 })
}

/**
 * 朗读声调
 * @param {string} tone 拼音声调符号，如 'ā'
 * @param {string} word 关联词语，如 '阿姨'
 */
export function speakTone(tone, word) {
  soundEffects.playPop()
  const text = word ? `${word}` : tone
  speakPinyin(text, { rate: 0.85 })
}
