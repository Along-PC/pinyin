// 录音使用完整普通话音节编号；声母采用教学呼读音，韵母按独立发音匹配。
export const PINYIN_RECORDINGS = {
  b: 'bo1', p: 'po1', m: 'mo1', f: 'fo1',
  d: 'de1', t: 'te1', n: 'ne1', l: 'le1',
  g: 'ge1', k: 'ke1', h: 'he1', j: 'ji1', q: 'qi1', x: 'xi1',
  zh: 'zhi1', ch: 'chi1', sh: 'shi1', r: 'ri1', z: 'zi1', c: 'ci1', s: 'si1', y: 'yi1', w: 'wu1',
  a: 'a1', o: 'o1', e: 'e1', i: 'yi1', u: 'wu1', ü: 'yu1',
  ai: 'ai1', ei: 'ei1', ui: 'wei1', ao: 'ao1', ou: 'ou1', iu: 'you1', ie: 'ye1', üe: 'yue1', er: 'er2',
  an: 'an1', en: 'en1', in: 'yin1', un: 'wen1', ün: 'yun1',
  ang: 'ang1', eng: 'eng1', ing: 'ying1', ong: 'dong1',
  zhi: 'zhi1', chi: 'chi1', shi: 'shi1', ri: 'ri4', zi: 'zi1', ci: 'ci1', si: 'si1',
  yi: 'yi1', wu: 'wu1', yu: 'yu1', ye: 'ye1', yue: 'yue1', yuan: 'yuan1', yin: 'yin1', yun: 'yun1', ying: 'ying1',
}

const FINAL_SYLLABLES = {
  i: 'yi', u: 'wu', ü: 'yu', ui: 'wei', iu: 'you', ie: 'ye', üe: 'yue',
  in: 'yin', un: 'wen', ün: 'yun', ing: 'ying',
}

export function getToneRecording(pinyin) {
  if (typeof pinyin !== 'string') return null
  const decomposed = pinyin.trim().toLowerCase().normalize('NFD')
  const marks = ['\u0304', '\u0301', '\u030c', '\u0300']
  const tones = marks.filter(mark => decomposed.includes(mark))
  if (tones.length !== 1) return null
  const tone = marks.indexOf(tones[0]) + 1
  const base = decomposed.replace(/[\u0304\u0301\u030c\u0300]/g, '').normalize('NFC')
  const syllable = FINAL_SYLLABLES[base] || base
  // 只允许项目内已知音节，防止把未知拼音或中文误当文件路径。
  const known = new Set(Object.values(PINYIN_RECORDINGS).map(value => value.slice(0, -1)))
  return known.has(syllable) ? `${syllable}${tone}` : null
}
