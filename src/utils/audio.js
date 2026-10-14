// 语音合成与交互音效工具

// 拼音到标准普通话发音汉字的最优映射字典（确保100%按中文拼音发音，杜绝被误读为英文字母）
export const PINYIN_AUDIO_MAP = {
  // 声母 (23个)
  'b': '玻',
  'p': '坡',
  'm': '摸',
  'f': '佛',
  'd': '得',
  't': '特',
  'n': '讷',
  'l': '勒',
  'g': '哥',
  'k': '科',
  'h': '喝',
  'j': '鸡',
  'q': '七',
  'x': '西',
  'zh': '知',
  'ch': '吃',
  'sh': '狮',
  'r': '日',
  'z': '资',
  'c': '疵',
  's': '思',
  'y': '衣',
  'w': '乌',

  // 单韵母 (6个) - 特别注意：a必须映射为“啊”，不能用多音字“阿”或英文“a”
  'a': '啊',
  'o': '喔',
  'e': '鹅',
  'i': '衣',
  'u': '乌',
  'ü': '迂',

  // 复韵母 (9个)
  'ai': '挨',
  'ei': '诶',
  'ui': '威',
  'ao': '熬',
  'ou': '欧',
  'iu': '优',
  'ie': '椰',
  'üe': '约',
  'er': '儿',

  // 前鼻韵母 (5个)
  'an': '安',
  'en': '恩',
  'in': '因',
  'un': '温',
  'ün': '晕',

  // 后鼻韵母 (4个)
  'ang': '昂',
  'eng': '鞥',
  'ing': '英',
  'ong': '轰',

  // 整体认读音节 (16个)
  'zhi': '知',
  'chi': '吃',
  'shi': '狮',
  'ri': '日',
  'zi': '资',
  'ci': '疵',
  'si': '思',
  'yi': '衣',
  'wu': '乌',
  'yu': '迂',
  'ye': '椰',
  'yue': '约',
  'yuan': '冤',
  'yin': '因',
  'yun': '晕',
  'ying': '鹰'
}

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
 * 朗读文本（强制使用中文引擎）
 * @param {string} text 要朗读的文本
 * @param {Object} options 选项
 */
export function speakPinyin(text, options = {}) {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
    console.warn('当前浏览器不支持语音合成功能')
    return
  }

  try {
    window.speechSynthesis.cancel()

    // 强化过滤：如果传入的是纯英文字符，通过字典映射为标准发音汉字
    let cleanText = text
    if (typeof text === 'string') {
      const lower = text.toLowerCase().trim()
      if (PINYIN_AUDIO_MAP[lower]) {
        cleanText = PINYIN_AUDIO_MAP[lower]
      }
    }

    const utterance = new SpeechSynthesisUtterance(cleanText)
    utterance.lang = 'zh-CN'
    utterance.rate = options.rate || 0.82
    utterance.pitch = options.pitch || 1.05
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
 * 朗读拼音字母卡片
 * @param {Object} item 拼音数据项
 */
export function speakPinyinItem(item) {
  soundEffects.playPop()
  // 核心修复：优先从 PINYIN_AUDIO_MAP 中取最权威的汉语发音字（如 a 绝对读“啊”）
  const key = item.letter ? item.letter.toLowerCase() : item.id
  const readText = PINYIN_AUDIO_MAP[key] || item.sound || item.spokenText || item.letter
  speakPinyin(readText, { rate: 0.8 })
}

/**
 * 朗读记忆口诀
 * @param {Object} item 拼音数据项
 */
export function speakMnemonic(item) {
  soundEffects.playPop()
  speakPinyin(item.mnemonic, { rate: 0.85 })
}

/**
 * 朗读声调（配例字保证音调精准）
 * @param {string} tone 拼音声调符号，如 'ā'
 * @param {string} word 关联词语，如 '阿姨'
 */
export function speakTone(tone, word) {
  soundEffects.playPop()
  // 避免将带调拉丁字符直接交给TTS导致被按英文读，优先读中文例字或带标点的情感汉字
  const text = word || tone
  speakPinyin(text, { rate: 0.82 })
}
