// 拼音教学标准完整数据集
export const CATEGORIES = [
  { id: 'all', name: '全部拼音', shortName: '全部', color: 'from-amber-400 to-orange-500', count: 63 },
  { id: 'shengmu', name: '声母 (23个)', shortName: '声母', color: 'from-blue-400 to-indigo-500', count: 23 },
  { id: 'dan-yunmu', name: '单韵母 (6个)', shortName: '单韵母', color: 'from-emerald-400 to-teal-500', count: 6 },
  { id: 'fu-yunmu', name: '复韵母 (9个)', shortName: '复韵母', color: 'from-rose-400 to-pink-500', count: 9 },
  { id: 'qian-yunmu', name: '前鼻韵母 (5个)', shortName: '前鼻韵母', color: 'from-violet-400 to-purple-500', count: 5 },
  { id: 'hou-yunmu', name: '后鼻韵母 (4个)', shortName: '后鼻韵母', color: 'from-fuchsia-400 to-pink-600', count: 4 },
  { id: 'zhengti', name: '整体认读音节 (16个)', shortName: '整体认读', color: 'from-amber-500 to-yellow-600', count: 16 },
]

export const PINYIN_LIST = [
  // ===================== 声母 (23个) =====================
  {
    id: 'b',
    letter: 'b',
    uppercase: 'B',
    category: 'shengmu',
    categoryName: '声母',
    sound: '玻',
    spokenText: 'bō',
    mnemonic: '右下半圆 b b b，听广播',
    icon: '📻',
    strokeCount: 2,
    words: [
      { char: '爸', pinyin: 'bà', word: '爸爸', icon: '👨' },
      { char: '笔', pinyin: 'bǐ', word: '铅笔', icon: '✏️' },
      { char: '白', pinyin: 'bái', word: '白兔', icon: '🐇' }
    ],
    tips: '发音时双唇紧闭，然后突然放开，气流冲出，发音较轻短。'
  },
  {
    id: 'p',
    letter: 'p',
    uppercase: 'P',
    category: 'shengmu',
    categoryName: '声母',
    sound: '坡',
    spokenText: 'pō',
    mnemonic: '右上半圆 p p p，爬山坡',
    icon: '⛰️',
    strokeCount: 2,
    words: [
      { char: '泼', pinyin: 'pō', word: '泼水', icon: '💦' },
      { char: '跑', pinyin: 'pǎo', word: '跑步', icon: '🏃' },
      { char: '苹', pinyin: 'píng', word: '苹果', icon: '🍎' }
    ],
    tips: '发音部位和方法与 b 相同，但冲出的气流较强。'
  },
  {
    id: 'm',
    letter: 'm',
    uppercase: 'M',
    category: 'shengmu',
    categoryName: '声母',
    sound: '摸',
    spokenText: 'mō',
    mnemonic: '两个门洞 m m m，捉迷藏摸一摸',
    icon: '🚪',
    strokeCount: 3,
    words: [
      { char: '妈', pinyin: 'mā', word: '妈妈', icon: '👩' },
      { char: '猫', pinyin: 'māo', word: '小猫', icon: '🐱' },
      { char: '米', pinyin: 'mǐ', word: '大米', icon: '🍚' }
    ],
    tips: '双唇闭合，软腭下降，气流振动声带从鼻腔透出。'
  },
  {
    id: 'f',
    letter: 'f',
    uppercase: 'F',
    category: 'shengmu',
    categoryName: '声母',
    sound: '佛',
    spokenText: 'fō',
    mnemonic: '一根拐棍 f f f，一尊大佛',
    icon: '🦯',
    strokeCount: 2,
    words: [
      { char: '风', pinyin: 'fēng', word: '大风', icon: '🪁' },
      { char: '飞', pinyin: 'fēi', word: '飞机', icon: '✈️' },
      { char: '房', pinyin: 'fáng', word: '房子', icon: '🏠' }
    ],
    tips: '上齿轻触下唇，气流从缝隙中挤出摩擦成音。'
  },
  {
    id: 'd',
    letter: 'd',
    uppercase: 'D',
    category: 'shengmu',
    categoryName: '声母',
    sound: '得',
    spokenText: 'dē',
    mnemonic: '左下半圆 d d d，马蹄踏踏得',
    icon: '🐴',
    strokeCount: 2,
    words: [
      { char: '大', pinyin: 'dà', word: '大树', icon: '🌳' },
      { char: '灯', pinyin: 'dēng', word: '台灯', icon: '💡' },
      { char: '弟', pinyin: 'dì', word: '弟弟', icon: '👦' }
    ],
    tips: '舌尖抵住上齿龈，突然放开，气流冲出成音。'
  },
  {
    id: 't',
    letter: 't',
    uppercase: 'T',
    category: 'shengmu',
    categoryName: '声母',
    sound: '特',
    spokenText: 'tē',
    mnemonic: '伞柄朝下 t t t，小雨滴答下',
    icon: '🌂',
    strokeCount: 2,
    words: [
      { char: '兔', pinyin: 'tù', word: '兔子', icon: '🐰' },
      { char: '天', pinyin: 'tiān', word: '天空', icon: '☁️' },
      { char: '糖', pinyin: 'táng', word: '糖果', icon: '🍬' }
    ],
    tips: '发音部位与 d 相同，舌尖抵住上牙龈后突然离开，吐出强气流。'
  },
  {
    id: 'n',
    letter: 'n',
    uppercase: 'N',
    category: 'shengmu',
    categoryName: '声母',
    sound: '讷',
    spokenText: 'nē',
    mnemonic: '一个门洞 n n n，小门小院',
    icon: '⛺',
    strokeCount: 2,
    words: [
      { char: '鸟', pinyin: 'niǎo', word: '小鸟', icon: '🐦' },
      { char: '奶', pinyin: 'nǎi', word: '牛奶', icon: '🥛' },
      { char: '牛', pinyin: 'niú', word: '小牛', icon: '🐮' }
    ],
    tips: '舌尖抵住上齿龈，气流由鼻孔出来，振动声带。'
  },
  {
    id: 'l',
    letter: 'l',
    uppercase: 'L',
    category: 'shengmu',
    categoryName: '声母',
    sound: '勒',
    spokenText: 'lē',
    mnemonic: '一根小棍 l l l，快乐木偶',
    icon: '🥢',
    strokeCount: 1,
    words: [
      { char: '梨', pinyin: 'lí', word: '雪梨', icon: '🍐' },
      { char: '绿', pinyin: 'lǜ', word: '绿叶', icon: '🍃' },
      { char: '路', pinyin: 'lù', word: '小路', icon: '🛣️' }
    ],
    tips: '舌尖抵住上齿龈，气流从舌头两边流出，振动声带。'
  },
  {
    id: 'g',
    letter: 'g',
    uppercase: 'G',
    category: 'shengmu',
    categoryName: '声母',
    sound: '哥',
    spokenText: 'gē',
    mnemonic: '9字加弯 g g g，白鸽天上飞',
    icon: '🕊️',
    strokeCount: 2,
    words: [
      { char: '哥', pinyin: 'gē', word: '哥哥', icon: '👦' },
      { char: '狗', pinyin: 'gǒu', word: '小狗', icon: '🐶' },
      { char: '果', pinyin: 'guǒ', word: '水果', icon: '🍇' }
    ],
    tips: '舌根抵住软腭，突然放开，气流冲出成音。'
  },
  {
    id: 'k',
    letter: 'k',
    uppercase: 'K',
    category: 'shengmu',
    categoryName: '声母',
    sound: '科',
    spokenText: 'kē',
    mnemonic: '蝌蚪戏水 k k k，一挺小机枪',
    icon: '🫧',
    strokeCount: 2,
    words: [
      { char: '渴', pinyin: 'kě', word: '口渴', icon: '🥤' },
      { char: '开', pinyin: 'kāi', word: '开门', icon: '🚪' },
      { char: '裤', pinyin: 'kù', word: '裤子', icon: '👖' }
    ],
    tips: '发音部位与 g 相同，但气流较强。'
  },
  {
    id: 'h',
    letter: 'h',
    uppercase: 'H',
    category: 'shengmu',
    categoryName: '声母',
    sound: '喝',
    spokenText: 'hē',
    mnemonic: '一把椅子 h h h，坐下喝口水',
    icon: '🪑',
    strokeCount: 2,
    words: [
      { char: '花', pinyin: 'huā', word: '花朵', icon: '🌸' },
      { char: '河', pinyin: 'hé', word: '河流', icon: '🌊' },
      { char: '红', pinyin: 'hóng', word: '红色', icon: '🔴' }
    ],
    tips: '舌根靠近软腭，留出窄缝，气流从缝中挤出摩擦成音。'
  },
  {
    id: 'j',
    letter: 'j',
    uppercase: 'J',
    category: 'shengmu',
    categoryName: '声母',
    sound: '基',
    spokenText: 'jī',
    mnemonic: '母鸡抬头 j j j，蝴蝶飞来舞',
    icon: '🐔',
    strokeCount: 2,
    words: [
      { char: '鸡', pinyin: 'jī', word: '小鸡', icon: '🐥' },
      { char: '金', pinyin: 'jīn', word: '金色', icon: '⭐' },
      { char: '家', pinyin: 'jiā', word: '温暖的家', icon: '🏡' }
    ],
    tips: '舌面前部抵住前硬腭，突然放开一条狭缝，气流挤出摩擦成音。'
  },
  {
    id: 'q',
    letter: 'q',
    uppercase: 'Q',
    category: 'shengmu',
    categoryName: '声母',
    sound: '欺',
    spokenText: 'qī',
    mnemonic: '左上半圆 q q q，气球飘呀飘',
    icon: '🎈',
    strokeCount: 2,
    words: [
      { char: '七', pinyin: 'qī', word: '数字七', icon: '7️⃣' },
      { char: '球', pinyin: 'qiú', word: '足球', icon: '⚽' },
      { char: '桥', pinyin: 'qiáo', word: '大桥', icon: '🌉' }
    ],
    tips: '发音部位与 j 相同，气流强。'
  },
  {
    id: 'x',
    letter: 'x',
    uppercase: 'X',
    category: 'shengmu',
    categoryName: '声母',
    sound: '西',
    spokenText: 'xī',
    mnemonic: '刀切西瓜 x x x，一个大大的叉',
    icon: '🍉',
    strokeCount: 2,
    words: [
      { char: '西', pinyin: 'xī', word: '西瓜', icon: '🍉' },
      { char: '星', pinyin: 'xīng', word: '星星', icon: '⭐' },
      { char: '雪', pinyin: 'xuě', word: '雪人', icon: '⛄' }
    ],
    tips: '舌面前部抬起靠近前硬腭，气流由缝隙中挤出。'
  },
  {
    id: 'zh',
    letter: 'zh',
    uppercase: 'ZH',
    category: 'shengmu',
    categoryName: '声母',
    sound: '知',
    spokenText: 'zhī',
    mnemonic: '织毛衣 zh zh zh，翘起舌头来',
    icon: '🧶',
    strokeCount: 3,
    words: [
      { char: '猪', pinyin: 'zhū', word: '小猪', icon: '🐷' },
      { char: '蛛', pinyin: 'zhū', word: '蜘蛛', icon: '🕷️' },
      { char: '纸', pinyin: 'zhǐ', word: '白纸', icon: '📄' }
    ],
    tips: '翘舌音。舌尖翘起抵住硬腭前部，然后松开一条微缝让气流透出。'
  },
  {
    id: 'ch',
    letter: 'ch',
    uppercase: 'CH',
    category: 'shengmu',
    categoryName: '声母',
    sound: '吃',
    spokenText: 'chī',
    mnemonic: '小刺猬坐椅子 ch ch ch，吃大苹果',
    icon: '🍎',
    strokeCount: 3,
    words: [
      { char: '车', pinyin: 'chē', word: '汽车', icon: '🚗' },
      { char: '吃', pinyin: 'chī', word: '吃饭', icon: '🥣' },
      { char: '尺', pinyin: 'chǐ', word: '尺子', icon: '📏' }
    ],
    tips: '翘舌音。发音动作与 zh 类似，但喷出气流较强。'
  },
  {
    id: 'sh',
    letter: 'sh',
    uppercase: 'SH',
    category: 'shengmu',
    categoryName: '声母',
    sound: '诗',
    spokenText: 'shī',
    mnemonic: '蚕儿坐椅子 sh sh sh，大狮子吼',
    icon: '🦁',
    strokeCount: 3,
    words: [
      { char: '水', pinyin: 'shuǐ', word: '清水', icon: '💧' },
      { char: '书', pinyin: 'shū', word: '看书', icon: '📖' },
      { char: '树', pinyin: 'shù', word: '大树', icon: '🌳' }
    ],
    tips: '翘舌音。舌尖翘起靠近硬腭前部，形成一条狭缝，气流摩擦而出。'
  },
  {
    id: 'r',
    letter: 'r',
    uppercase: 'R',
    category: 'shengmu',
    categoryName: '声母',
    sound: '日',
    spokenText: 'rì',
    mnemonic: '一株幼芽 r r r，太阳照大地',
    icon: '🌱',
    strokeCount: 2,
    words: [
      { char: '日', pinyin: 'rì', word: '太阳', icon: '☀️' },
      { char: '热', pinyin: 'rè', word: '天气热', icon: '🔥' },
      { char: '人', pinyin: 'rén', word: '人类', icon: '🧍' }
    ],
    tips: '翘舌音。发音部位与 sh 相同，但同时振动声带。'
  },
  {
    id: 'z',
    letter: 'z',
    uppercase: 'Z',
    category: 'shengmu',
    categoryName: '声母',
    sound: '资',
    spokenText: 'zī',
    mnemonic: '像个2字 z z z，小鸭写写字',
    icon: '✍️',
    strokeCount: 1,
    words: [
      { char: '字', pinyin: 'zì', word: '汉字', icon: '🔤' },
      { char: '早', pinyin: 'zǎo', word: '早上好', icon: '🌅' },
      { char: '走', pinyin: 'zǒu', word: '走路', icon: '🚶' }
    ],
    tips: '平舌音。舌尖抵住上门齿背，轻轻放开透出微风。'
  },
  {
    id: 'c',
    letter: 'c',
    uppercase: 'C',
    category: 'shengmu',
    categoryName: '声母',
    sound: '刺',
    spokenText: 'cī',
    mnemonic: '半个圆圈 c c c，小刺猬缩一团',
    icon: '🦔',
    strokeCount: 1,
    words: [
      { char: '草', pinyin: 'cǎo', word: '青草', icon: '🌿' },
      { char: '菜', pinyin: 'cài', word: '蔬菜', icon: '🥬' },
      { char: '彩', pinyin: 'cǎi', word: '彩虹', icon: '🌈' }
    ],
    tips: '平舌音。发音与 z 相同，但送气较强。'
  },
  {
    id: 's',
    letter: 's',
    uppercase: 'S',
    category: 'shengmu',
    categoryName: '声母',
    sound: '思',
    spokenText: 'sī',
    mnemonic: '半个8字 s s s，蚕儿吐丝丝',
    icon: '🐛',
    strokeCount: 1,
    words: [
      { char: '四', pinyin: 'sì', word: '数字四', icon: '4️⃣' },
      { char: '伞', pinyin: 'sǎn', word: '雨伞', icon: '☂️' },
      { char: '森', pinyin: 'sēn', word: '森林', icon: '🌲' }
    ],
    tips: '平舌音。舌尖接近上门齿背，气流从缝隙中挤出。'
  },
  {
    id: 'y',
    letter: 'y',
    uppercase: 'Y',
    category: 'shengmu',
    categoryName: '声母',
    sound: '衣',
    spokenText: 'yī',
    mnemonic: '像个树杈 y y y，衣服挂树上',
    icon: '👕',
    strokeCount: 2,
    words: [
      { char: '衣', pinyin: 'yī', word: '衣服', icon: '👔' },
      { char: '鸭', pinyin: 'yā', word: '鸭子', icon: '🦆' },
      { char: '月', pinyin: 'yuè', word: '月亮', icon: '🌙' }
    ],
    tips: '大 y，读音同小 i，但发音稍微用力，舌前部向上抬。'
  },
  {
    id: 'w',
    letter: 'w',
    uppercase: 'W',
    category: 'shengmu',
    categoryName: '声母',
    sound: '乌',
    spokenText: 'wū',
    mnemonic: '小屋屋顶 w w w，乌鸦归巢',
    icon: '🏠',
    strokeCount: 2,
    words: [
      { char: '乌', pinyin: 'wū', word: '乌鸦', icon: '🦅' },
      { char: '蛙', pinyin: 'wā', word: '青蛙', icon: '🐸' },
      { char: '我', pinyin: 'wǒ', word: '我们', icon: '👦' }
    ],
    tips: '大 w，读音同小 u，嘴唇突出圆拢。'
  },

  // ===================== 单韵母 (6个) =====================
  {
    id: 'a',
    letter: 'a',
    uppercase: 'A',
    category: 'dan-yunmu',
    categoryName: '单韵母',
    sound: '阿',
    spokenText: 'ā',
    mnemonic: '张大嘴巴 a a a，阿姨抱小宝',
    icon: '👧',
    strokeCount: 2,
    tones: [
      { tone: 'ā', mark: '一声平', word: '阿姨', char: '阿' },
      { tone: 'á', mark: '二声扬', word: '啊？（疑问）', char: '啊' },
      { tone: 'ǎ', mark: '三声拐弯', word: '啊！（明白）', char: '啊' },
      { tone: 'à', mark: '四声降', word: '啊！（赞叹）', char: '啊' }
    ],
    words: [
      { char: '爸', pinyin: 'bà', word: '爸爸', icon: '👨' },
      { char: '马', pinyin: 'mǎ', word: '小马', icon: '🐎' },
      { char: '鸭', pinyin: 'yā', word: '大鸭', icon: '🦆' }
    ],
    tips: '发音时嘴巴张大，舌位最低，舌面中部微微隆起。'
  },
  {
    id: 'o',
    letter: 'o',
    uppercase: 'O',
    category: 'dan-yunmu',
    categoryName: '单韵母',
    sound: '喔',
    spokenText: 'ō',
    mnemonic: '圆圆嘴巴 o o o，公鸡早起啼',
    icon: '🐓',
    strokeCount: 1,
    tones: [
      { tone: 'ō', mark: '一声平', word: '喔喔叫', char: '喔' },
      { tone: 'ó', mark: '二声扬', word: '哦？（惊讶）', char: '哦' },
      { tone: 'ǒ', mark: '三声拐弯', word: '我（同韵母）', char: '我' },
      { tone: 'ò', mark: '四声降', word: '哦！（答应）', char: '哦' }
    ],
    words: [
      { char: '波', pinyin: 'bō', word: '波浪', icon: '🌊' },
      { char: '坡', pinyin: 'pō', word: '山坡', icon: '⛰️' },
      { char: '摸', pinyin: 'mō', word: '抚摸', icon: '✋' }
    ],
    tips: '发音时双唇拢圆，舌面后部稍抬高。'
  },
  {
    id: 'e',
    letter: 'e',
    uppercase: 'E',
    category: 'dan-yunmu',
    categoryName: '单韵母',
    sound: '鹅',
    spokenText: 'ē',
    mnemonic: '扁扁嘴巴 e e e，白鹅水上游',
    icon: '🦢',
    strokeCount: 1,
    tones: [
      { tone: 'ē', mark: '一声平', word: '阿胶', char: '阿' },
      { tone: 'é', mark: '二声扬', word: '白鹅', char: '鹅' },
      { tone: 'ě', mark: '三声拐弯', word: '恶心', char: '恶' },
      { tone: 'è', mark: '四声降', word: '肚子饿', char: '饿' }
    ],
    words: [
      { char: '鹅', pinyin: 'é', word: '白鹅', icon: '🦢' },
      { char: '哥', pinyin: 'gē', word: '哥哥', icon: '👦' },
      { char: '渴', pinyin: 'kě', word: '口渴', icon: '💧' }
    ],
    tips: '嘴角向两边微展开呈扁平状，舌身后缩。'
  },
  {
    id: 'i',
    letter: 'i',
    uppercase: 'I',
    category: 'dan-yunmu',
    categoryName: '单韵母',
    sound: '衣',
    spokenText: 'ī',
    mnemonic: '牙齿对齐 i i i，一件新衣服',
    icon: '👕',
    strokeCount: 2,
    tones: [
      { tone: 'ī', mark: '一声平', word: '衣服', char: '衣' },
      { tone: 'í', mark: '二声扬', word: '阿姨', char: '姨' },
      { tone: 'ǐ', mark: '三声拐弯', word: '椅子', char: '椅' },
      { tone: 'ì', mark: '四声降', word: '容易', char: '易' }
    ],
    words: [
      { char: '米', pinyin: 'mǐ', word: '大米', icon: '🍚' },
      { char: '鸡', pinyin: 'jī', word: '小鸡', icon: '🐥' },
      { char: '雨', pinyin: 'yǔ', word: '细雨', icon: '🌧️' }
    ],
    tips: '上下齿对齐，嘴角向两边展开，舌尖抵住下齿背。标调时去掉上面的点。'
  },
  {
    id: 'u',
    letter: 'u',
    uppercase: 'U',
    category: 'dan-yunmu',
    categoryName: '单韵母',
    sound: '乌',
    spokenText: 'ū',
    mnemonic: '嘴巴突出 u u u，乌鸦飞呀飞',
    icon: '🦅',
    strokeCount: 1,
    tones: [
      { tone: 'ū', mark: '一声平', word: '乌鸦', char: '乌' },
      { tone: 'ú', mark: '二声扬', word: '芜湖', char: '芜' },
      { tone: 'ǔ', mark: '三声拐弯', word: '跳舞', char: '舞' },
      { tone: 'ù', mark: '四声降', word: '大雾', char: '雾' }
    ],
    words: [
      { char: '猪', pinyin: 'zhū', word: '小猪', icon: '🐷' },
      { char: '土', pinyin: 'tǔ', word: '泥土', icon: '🪴' },
      { char: '兔', pinyin: 'tù', word: '白兔', icon: '🐇' }
    ],
    tips: '双唇拢圆向前突出成小孔，舌面后部隆起。'
  },
  {
    id: 'ü',
    letter: 'ü',
    uppercase: 'Ü',
    category: 'dan-yunmu',
    categoryName: '单韵母',
    sound: '迂',
    spokenText: 'yū',
    mnemonic: '小鱼吐泡 ü ü ü，圆圆小嘴巴',
    icon: '🐟',
    strokeCount: 3,
    tones: [
      { tone: 'ǖ', mark: '一声平', word: '淤泥', char: '淤' },
      { tone: 'ǘ', mark: '二声扬', word: '金鱼', char: '鱼' },
      { tone: 'ǚ', mark: '三声拐弯', word: '下雨', char: '雨' },
      { tone: 'ǜ', mark: '四声降', word: '遇到', char: '遇' }
    ],
    words: [
      { char: '绿', pinyin: 'lǜ', word: '绿色', icon: '🟢' },
      { char: '女', pinyin: 'nǚ', word: '女孩', icon: '👧' },
      { char: '鱼', pinyin: 'yú', word: '小鱼', icon: '🐠' }
    ],
    tips: '发音舌位与 i 相同，双唇拢圆与 u 相同。小 ü 见 j q x，脱帽行个礼！'
  },

  // ===================== 复韵母 (9个) =====================
  {
    id: 'ai',
    letter: 'ai',
    uppercase: 'AI',
    category: 'fu-yunmu',
    categoryName: '复韵母',
    sound: '哀',
    spokenText: 'āi',
    mnemonic: '挨着挨着 ai ai ai，白菜青又白',
    icon: '🥬',
    tones: [
      { tone: 'āi', mark: '一声平', word: '挨着', char: '挨' },
      { tone: 'ái', mark: '二声扬', word: '矮小', char: '癌' },
      { tone: 'ǎi', mark: '三声拐弯', word: '高矮', char: '矮' },
      { tone: 'ài', mark: '四声降', word: '爱心', char: '爱' }
    ],
    words: [
      { char: '菜', pinyin: 'cài', word: '白菜', icon: '🥬' },
      { char: '带', pinyin: 'dài', word: '皮带', icon: '🎗️' },
      { char: '开', pinyin: 'kāi', word: '开心', icon: '😊' }
    ],
    tips: '先发 a 的音，接着滑向 i，气流不中断，读音轻短过渡。'
  },
  {
    id: 'ei',
    letter: 'ei',
    uppercase: 'EI',
    category: 'fu-yunmu',
    categoryName: '复韵母',
    sound: '诶',
    spokenText: 'ēi',
    mnemonic: '用力砍树 ei ei ei，累得流大汗',
    icon: '🪓',
    tones: [
      { tone: 'ēi', mark: '一声平', word: '诶（打招呼）', char: '诶' },
      { tone: 'éi', mark: '二声扬', word: '欸？', char: '欸' },
      { tone: 'ěi', mark: '三声拐弯', word: '欸（叹息）', char: '欸' },
      { tone: 'èi', mark: '四声降', word: '贝壳', char: '贝' }
    ],
    words: [
      { char: '杯', pinyin: 'bēi', word: '水杯', icon: '🥛' },
      { char: '黑', pinyin: 'hēi', word: '黑色', icon: '⬛' },
      { char: '妹', pinyin: 'mèi', word: '妹妹', icon: '👧' }
    ],
    tips: '先发 e 的音，再向 i 滑动。'
  },
  {
    id: 'ui',
    letter: 'ui',
    uppercase: 'UI',
    category: 'fu-yunmu',
    categoryName: '复韵母',
    sound: '微',
    spokenText: 'uī',
    mnemonic: '围上围巾 ui ui ui，不怕刮大风',
    icon: '🧣',
    tones: [
      { tone: 'uī', mark: '一声平', word: '微风', char: '微' },
      { tone: 'uí', mark: '二声扬', word: '围巾', char: '围' },
      { tone: 'uǐ', mark: '三声拐弯', word: '尾巴', char: '尾' },
      { tone: 'uì', mark: '四声降', word: '开会', char: '会' }
    ],
    words: [
      { char: '水', pinyin: 'shuǐ', word: '喝水', icon: '💧' },
      { char: '龟', pinyin: 'guī', word: '乌龟', icon: '🐢' },
      { char: '腿', pinyin: 'tuǐ', word: '大腿', icon: '🦵' }
    ],
    tips: 'u 和 i 的复韵母，标调在后面的 i 上。'
  },
  {
    id: 'ao',
    letter: 'ao',
    uppercase: 'AO',
    category: 'fu-yunmu',
    categoryName: '复韵母',
    sound: '熬',
    spokenText: 'āo',
    mnemonic: '穿上棉袄 ao ao ao，暖和不怕冷',
    icon: '🧥',
    tones: [
      { tone: 'āo', mark: '一声平', word: '棉袄', char: '袄' },
      { tone: 'áo', mark: '二声扬', word: '熬夜', char: '熬' },
      { tone: 'ǎo', mark: '三声拐弯', word: '棉袄', char: '袄' },
      { tone: 'ào', mark: '四声降', word: '骄傲', char: '傲' }
    ],
    words: [
      { char: '包', pinyin: 'bāo', word: '书包', icon: '🎒' },
      { char: '草', pinyin: 'cǎo', word: '青草', icon: '🌿' },
      { char: '猫', pinyin: 'māo', word: '小猫', icon: '🐱' }
    ],
    tips: '先发 a，然后舌头后缩嘴唇收圆滑向 o。'
  },
  {
    id: 'ou',
    letter: 'ou',
    uppercase: 'OU',
    category: 'fu-yunmu',
    categoryName: '复韵母',
    sound: '欧',
    spokenText: 'ōu',
    mnemonic: '海上飞过海鸥 ou ou ou，吃口莲藕',
    icon: '🪷',
    tones: [
      { tone: 'ōu', mark: '一声平', word: '海鸥', char: '鸥' },
      { tone: 'óu', mark: '二声扬', word: '欧洲', char: '欧' },
      { tone: 'ǒu', mark: '三声拐弯', word: '莲藕', char: '藕' },
      { tone: 'òu', mark: '四声降', word: '生偶', char: '怄' }
    ],
    words: [
      { char: '狗', pinyin: 'gǒu', word: '小狗', icon: '🐕' },
      { char: '猴', pinyin: 'hóu', word: '猴子', icon: '🐵' },
      { char: '手', pinyin: 'shǒu', word: '双手', icon: '✋' }
    ],
    tips: '先发 o，接着向 u 滑动，口形逐渐收紧。'
  },
  {
    id: 'iu',
    letter: 'iu',
    uppercase: 'IU',
    category: 'fu-yunmu',
    categoryName: '复韵母',
    sound: '优',
    spokenText: 'iū',
    mnemonic: '跳水游泳 iu iu iu，健美强壮',
    icon: '🏊',
    tones: [
      { tone: 'iū', mark: '一声平', word: '优秀', char: '优' },
      { tone: 'iú', mark: '二声扬', word: '油灯', char: '油' },
      { tone: 'iǔ', mark: '三声拐弯', word: '九月', char: '九' },
      { tone: 'iù', mark: '四声降', word: '秀丽', char: '秀' }
    ],
    words: [
      { char: '牛', pinyin: 'niú', word: '小牛', icon: '🐮' },
      { char: '球', pinyin: 'qiú', word: '皮球', icon: '⚽' },
      { char: '流', pinyin: 'liú', word: '流水', icon: '💧' }
    ],
    tips: 'i 和 u 的复韵母，标调标在最后的 u 上（i u 并列标在后）。'
  },
  {
    id: 'ie',
    letter: 'ie',
    uppercase: 'IE',
    category: 'fu-yunmu',
    categoryName: '复韵母',
    sound: '椰',
    spokenText: 'iē',
    mnemonic: '一棵椰树 ie ie ie，椰子水清甜',
    icon: '🥥',
    tones: [
      { tone: 'iē', mark: '一声平', word: '椰子', char: '椰' },
      { tone: 'ié', mark: '二声扬', word: '爷爷', char: '爷' },
      { tone: 'iě', mark: '三声拐弯', word: '野花', char: '野' },
      { tone: 'iè', mark: '四声降', word: '绿叶', char: '叶' }
    ],
    words: [
      { char: '蝶', pinyin: 'dié', word: '蝴蝶', icon: '🦋' },
      { char: '铁', pinyin: 'tiě', word: '铁道', icon: '🚂' },
      { char: '雪', pinyin: 'xuě', word: '下雪', icon: '❄️' }
    ],
    tips: '先发 i，气流不断，紧接着滑向 ê。'
  },
  {
    id: 'üe',
    letter: 'üe',
    uppercase: 'ÜE',
    category: 'fu-yunmu',
    categoryName: '复韵母',
    sound: '约',
    spokenText: 'yuē',
    mnemonic: '月亮弯弯 üe üe üe，挂在夜空里',
    icon: '🌙',
    tones: [
      { tone: 'üē', mark: '一声平', word: '约定', char: '约' },
      { tone: 'üé', mark: '二声扬', word: '月亮', char: '月' },
      { tone: 'üě', mark: '三声拐弯', word: '踊跃', char: '跃' },
      { tone: 'üè', mark: '四声降', word: '音乐', char: '乐' }
    ],
    words: [
      { char: '月', pinyin: 'yuè', word: '月儿', icon: '🌜' },
      { char: '雀', pinyin: 'què', word: '麻雀', icon: '🐦' },
      { char: '学', pinyin: 'xué', word: '学习', icon: '📚' }
    ],
    tips: '先发 ü，然后向 ê 滑动，口形逐渐展开。'
  },
  {
    id: 'er',
    letter: 'er',
    uppercase: 'ER',
    category: 'fu-yunmu',
    categoryName: '复韵母(特殊)',
    sound: '儿',
    spokenText: 'ér',
    mnemonic: '小小耳朵 er er er，听听大家说',
    icon: '👂',
    tones: [
      { tone: 'ēr', mark: '一声平', word: '儿话', char: '儿' },
      { tone: 'ér', mark: '二声扬', word: '儿童', char: '儿' },
      { tone: 'ěr', mark: '三声拐弯', word: '耳朵', char: '耳' },
      { tone: 'èr', mark: '四声降', word: '数字二', char: '二' }
    ],
    words: [
      { char: '儿', pinyin: 'ér', word: '儿子', icon: '👦' },
      { char: '耳', pinyin: 'ěr', word: '木耳', icon: '👂' },
      { char: '二', pinyin: 'èr', word: '二胡', icon: '2️⃣' }
    ],
    tips: '特殊韵母，不与声母相拼，单独成音节。舌头同时卷起。'
  },

  // ===================== 前鼻韵母 (5个) =====================
  {
    id: 'an',
    letter: 'an',
    uppercase: 'AN',
    category: 'qian-yunmu',
    categoryName: '前鼻韵母',
    sound: '安',
    spokenText: 'ān',
    mnemonic: '天安门前 an an an，红旗飘呀飘',
    icon: '🏛️',
    tones: [
      { tone: 'ān', mark: '一声平', word: '平安', char: '安' },
      { tone: 'án', mark: '二声扬', word: '鞍马', char: '鞍' },
      { tone: 'ǎn', mark: '三声拐弯', word: '俺们', char: '俺' },
      { tone: 'àn', mark: '四声降', word: '河岸', char: '岸' }
    ],
    words: [
      { char: '伞', pinyin: 'sǎn', word: '雨伞', icon: '☂️' },
      { char: '看', pinyin: 'kàn', word: '看书', icon: '📖' },
      { char: '蓝', pinyin: 'lán', word: '蓝天', icon: '💙' }
    ],
    tips: '先发 a，然后舌尖贴上齿龈，气流从鼻孔出来。'
  },
  {
    id: 'en',
    letter: 'en',
    uppercase: 'EN',
    category: 'qian-yunmu',
    categoryName: '前鼻韵母',
    sound: '恩',
    spokenText: 'ēn',
    mnemonic: '摁下门铃 en en en，叮咚欢迎客',
    icon: '🔔',
    tones: [
      { tone: 'ēn', mark: '一声平', word: '感恩', char: '恩' },
      { tone: 'én', mark: '二声扬', word: '嗯？', char: '嗯' },
      { tone: 'ěn', mark: '三声拐弯', word: '摁住', char: '摁' },
      { tone: 'èn', mark: '四声降', word: '摁铃', char: '摁' }
    ],
    words: [
      { char: '森', pinyin: 'sēn', word: '森林', icon: '🌲' },
      { char: '门', pinyin: 'mén', word: '大门', icon: '🚪' },
      { char: '本', pinyin: 'běn', word: '课本', icon: '📗' }
    ],
    tips: '先发 e 的音，再将舌尖移至上齿龈形成鼻音。'
  },
  {
    id: 'in',
    letter: 'in',
    uppercase: 'IN',
    category: 'qian-yunmu',
    categoryName: '前鼻韵母',
    sound: '因',
    spokenText: 'yīn',
    mnemonic: '树荫底下 in in in，凉爽好乘凉',
    icon: '🌳',
    tones: [
      { tone: 'īn', mark: '一声平', word: '音乐', char: '音' },
      { tone: 'ín', mark: '二声扬', word: '银牌', char: '银' },
      { tone: 'ǐn', mark: '三声拐弯', word: '引路', char: '引' },
      { tone: 'ìn', mark: '四声降', word: '印章', char: '印' }
    ],
    words: [
      { char: '金', pinyin: 'jīn', word: '金子', icon: '🪙' },
      { char: '林', pinyin: 'lín', word: '树林', icon: '🌲' },
      { char: '信', pinyin: 'xìn', word: '书信', icon: '✉️' }
    ],
    tips: '先发 i，接着舌尖上翘抵住上齿龈发前鼻音 n。'
  },
  {
    id: 'un',
    letter: 'un',
    uppercase: 'UN',
    category: 'qian-yunmu',
    categoryName: '前鼻韵母',
    sound: '温',
    spokenText: 'wēn',
    mnemonic: '蚊子嗡嗡 un un un，小鸭温水游',
    icon: '🦟',
    tones: [
      { tone: 'ūn', mark: '一声平', word: '温暖', char: '温' },
      { tone: 'ún', mark: '二声扬', word: '文字', char: '文' },
      { tone: 'ǔn', mark: '三声拐弯', word: '吻别', char: '吻' },
      { tone: 'ùn', mark: '四声降', word: '问好', char: '问' }
    ],
    words: [
      { char: '春', pinyin: 'chūn', word: '春天', icon: '🌱' },
      { char: '轮', pinyin: 'lún', word: '轮子', icon: '🛞' },
      { char: '军', pinyin: 'jūn', word: '军人', icon: '🎖️' }
    ],
    tips: '先发 u，随后舌尖抵上齿龈，软腭下垂出鼻音。'
  },
  {
    id: 'ün',
    letter: 'ün',
    uppercase: 'ÜN',
    category: 'qian-yunmu',
    categoryName: '前鼻韵母',
    sound: '晕',
    spokenText: 'yūn',
    mnemonic: '天上白云 ün ün ün，软绵绵飘飘',
    icon: '☁️',
    tones: [
      { tone: 'ǖn', mark: '一声平', word: '晕倒', char: '晕' },
      { tone: 'ǘn', mark: '二声扬', word: '白云', char: '云' },
      { tone: 'ǚn', mark: '三声拐弯', word: '允许', char: '允' },
      { tone: 'ǜn', mark: '四声降', word: '运动', char: '运' }
    ],
    words: [
      { char: '群', pinyin: 'qún', word: '羊群', icon: '🐑' },
      { char: '裙', pinyin: 'qún', word: '裙子', icon: '👗' },
      { char: '军', pinyin: 'jūn', word: '军舰', icon: '🚢' }
    ],
    tips: '发 ü 音时，舌位向 n 靠拢，气流从鼻腔透出。'
  },

  // ===================== 后鼻韵母 (4个) =====================
  {
    id: 'ang',
    letter: 'ang',
    uppercase: 'ANG',
    category: 'hou-yunmu',
    categoryName: '后鼻韵母',
    sound: '昂',
    spokenText: 'áng',
    mnemonic: '羚羊奔跑 ang ang ang，昂首挺胸膛',
    icon: '🐐',
    tones: [
      { tone: 'āng', mark: '一声平', word: '肮脏', char: '肮' },
      { tone: 'áng', mark: '二声扬', word: '昂贵', char: '昂' },
      { tone: 'ǎng', mark: '三声拐弯', word: '盎然', char: '盎' },
      { tone: 'àng', mark: '四声降', word: '盎司', char: '盎' }
    ],
    words: [
      { char: '羊', pinyin: 'yáng', word: '小羊', icon: '🐑' },
      { char: '黄', pinyin: 'huáng', word: '黄色', icon: '🟨' },
      { char: '放', pinyin: 'fàng', word: '放学', icon: '🎒' }
    ],
    tips: '先发 a，然后舌根后缩抵住软腭，气流由鼻孔流出。'
  },
  {
    id: 'eng',
    letter: 'eng',
    uppercase: 'ENG',
    category: 'hou-yunmu',
    categoryName: '后鼻韵母',
    sound: '鞥',
    spokenText: 'ēng',
    mnemonic: '点亮台灯 eng eng eng，夜晚放光明',
    icon: '💡',
    tones: [
      { tone: 'ēng', mark: '一声平', word: '哼唧', char: '哼' },
      { tone: 'éng', mark: '二声扬', word: '恒久', char: '恒' },
      { tone: 'ěng', mark: '三声拐弯', word: '整齐', char: '整' },
      { tone: 'èng', mark: '四声降', word: '硬蹦', char: '硬' }
    ],
    words: [
      { char: '风', pinyin: 'fēng', word: '微风', icon: '🍃' },
      { char: '等', pinyin: 'děng', word: '等待', icon: '⏳' },
      { char: '正', pinyin: 'zhèng', word: '立正', icon: '🧍' }
    ],
    tips: '先发 e 的音，再由舌根后部顶住软腭发后鼻音。'
  },
  {
    id: 'ing',
    letter: 'ing',
    uppercase: 'ING',
    category: 'hou-yunmu',
    categoryName: '后鼻韵母',
    sound: '英',
    spokenText: 'yīng',
    mnemonic: '雄鹰展翅 ing ing ing，蓝天任飞翔',
    icon: '🦅',
    tones: [
      { tone: 'īng', mark: '一声平', word: '英雄', char: '英' },
      { tone: 'íng', mark: '二声扬', word: '荧光', char: '荧' },
      { tone: 'ǐng', mark: '三声拐弯', word: '影子', char: '影' },
      { tone: 'ìng', mark: '四声降', word: '应该', char: '应' }
    ],
    words: [
      { char: '星', pinyin: 'xīng', word: '繁星', icon: '🌟' },
      { char: '冰', pinyin: 'bīng', word: '冰块', icon: '🧊' },
      { char: '静', pinyin: 'jìng', word: '安静', icon: '🤫' }
    ],
    tips: '先发 i，接着舌根后退顶住软腭，气流由鼻孔出。'
  },
  {
    id: 'ong',
    letter: 'ong',
    uppercase: 'ONG',
    category: 'hou-yunmu',
    categoryName: '后鼻韵母',
    sound: '轰',
    spokenText: 'hōng',
    mnemonic: '敲响闹钟 ong ong ong，清脆当当当',
    icon: '⏰',
    tones: [
      { tone: 'ōng', mark: '一声平', word: '嗡嗡', char: '嗡' },
      { tone: 'óng', mark: '二声扬', word: '红旗', char: '红' },
      { tone: 'ǒng', mark: '三声拐弯', word: '轰轰', char: '轰' },
      { tone: 'òng', mark: '四声降', word: '轰隆', char: '轰' }
    ],
    words: [
      { char: '红', pinyin: 'hóng', word: '红花', icon: '🌺' },
      { char: '冬', pinyin: 'dōng', word: '冬天', icon: '❄️' },
      { char: '龙', pinyin: 'lóng', word: '巨龙', icon: '🐉' }
    ],
    tips: '先发 o，双唇聚拢成小圆孔，舌根后缩抵软腭发鼻音。'
  },

  // ===================== 整体认读音节 (16个) =====================
  {
    id: 'zhi',
    letter: 'zhi',
    uppercase: 'ZHI',
    category: 'zhengti',
    categoryName: '整体认读音节',
    sound: '知',
    spokenText: 'zhī',
    mnemonic: '蜘蛛织网 zhi zhi zhi，直接读出知',
    icon: '🕷️',
    tones: [
      { tone: 'zhī', mark: '一声平', word: '一只', char: '只' },
      { tone: 'zhí', mark: '二声扬', word: '笔直', char: '直' },
      { tone: 'zhǐ', mark: '三声拐弯', word: '白纸', char: '纸' },
      { tone: 'zhì', mark: '四声降', word: '智力', char: '智' }
    ],
    words: [
      { char: '枝', pinyin: 'zhī', word: '树枝', icon: '🌿' },
      { char: '指', pinyin: 'zhǐ', word: '手指', icon: '👆' },
      { char: '字', pinyin: 'zhì', word: '通知', icon: '📢' }
    ],
    tips: '整体认读音节，不用拼，直接读出声，声调标在 i 上。'
  },
  {
    id: 'chi',
    letter: 'chi',
    uppercase: 'CHI',
    category: 'zhengti',
    categoryName: '整体认读音节',
    sound: '吃',
    spokenText: 'chī',
    mnemonic: '小猫吃鱼 chi chi chi，直接读出吃',
    icon: '🐟',
    tones: [
      { tone: 'chī', mark: '一声平', word: '吃饭', char: '吃' },
      { tone: 'chí', mark: '二声扬', word: '水池', char: '池' },
      { tone: 'chǐ', mark: '三声拐弯', word: '尺子', char: '尺' },
      { tone: 'chì', mark: '四声降', word: '翅膀', char: '翅' }
    ],
    words: [
      { char: '吃', pinyin: 'chī', word: '吃瓜', icon: '🍉' },
      { char: '齿', pinyin: 'chǐ', word: '牙齿', icon: '🦷' },
      { char: '池', pinyin: 'chí', word: '池塘', icon: '🪷' }
    ],
    tips: '翘舌整体认读音节，不用拼，直接读。'
  },
  {
    id: 'shi',
    letter: 'shi',
    uppercase: 'SHI',
    category: 'zhengti',
    categoryName: '整体认读音节',
    sound: '诗',
    spokenText: 'shī',
    mnemonic: '大狮子吼 shi shi shi，直接读出狮',
    icon: '🦁',
    tones: [
      { tone: 'shī', mark: '一声平', word: '狮子', char: '狮' },
      { tone: 'shí', mark: '二声扬', word: '石头', char: '石' },
      { tone: 'shǐ', mark: '三声拐弯', word: '历史', char: '史' },
      { tone: 'shì', mark: '四声降', word: '世界', char: '世' }
    ],
    words: [
      { char: '狮', pinyin: 'shī', word: '雄狮', icon: '🦁' },
      { char: '十', pinyin: 'shí', word: '数字十', icon: '🔟' },
      { char: '柿', pinyin: 'shì', word: '柿子', icon: '🍅' }
    ],
    tips: '翘舌整体认读音节，直接发音。'
  },
  {
    id: 'ri',
    letter: 'ri',
    uppercase: 'RI',
    category: 'zhengti',
    categoryName: '整体认读音节',
    sound: '日',
    spokenText: 'rì',
    mnemonic: '红日东升 ri ri ri，直接读出日',
    icon: '🌅',
    tones: [
      { tone: 'rī', mark: '一声平', word: '日（轻）', char: '日' },
      { tone: 'rí', mark: '二声扬', word: '日（扬）', char: '日' },
      { tone: 'rǐ', mark: '三声拐弯', word: '日（拐）', char: '日' },
      { tone: 'rì', mark: '四声降', word: '红日', char: '日' }
    ],
    words: [
      { char: '日', pinyin: 'rì', word: '日子', icon: '📅' },
      { char: '热', pinyin: 'rè', word: '热水', icon: '♨️' },
      { char: '入', pinyin: 'rù', word: '入口', icon: '🚪' }
    ],
    tips: '发音时声带振动，直接读出来。'
  },
  {
    id: 'zi',
    letter: 'zi',
    uppercase: 'ZI',
    category: 'zhengti',
    categoryName: '整体认读音节',
    sound: '姿',
    spokenText: 'zī',
    mnemonic: '小鸭写字 zi zi zi，直接读出字',
    icon: '📝',
    tones: [
      { tone: 'zī', mark: '一声平', word: '姿势', char: '姿' },
      { tone: 'zí', mark: '二声扬', word: '仔细', char: '仔' },
      { tone: 'zǐ', mark: '三声拐弯', word: '紫色', char: '紫' },
      { tone: 'zì', mark: '四声降', word: '文字', char: '字' }
    ],
    words: [
      { char: '子', pinyin: 'zǐ', word: '儿子', icon: '👦' },
      { char: '紫', pinyin: 'zǐ', word: '紫菜', icon: '🟣' },
      { char: '自', pinyin: 'zì', word: '自己', icon: '🧑' }
    ],
    tips: '平舌整体认读音节，舌尖平伸，直接读出。'
  },
  {
    id: 'ci',
    letter: 'ci',
    uppercase: 'CI',
    category: 'zhengti',
    categoryName: '整体认读音节',
    sound: '疵',
    spokenText: 'cī',
    mnemonic: '刺猬缩球 ci ci ci，直接读出刺',
    icon: '🦔',
    tones: [
      { tone: 'cī', mark: '一声平', word: '呲牙', char: '呲' },
      { tone: 'cí', mark: '二声扬', word: '瓷碗', char: '瓷' },
      { tone: 'cǐ', mark: '三声拐弯', word: '此时', char: '此' },
      { tone: 'cì', mark: '四声降', word: '一次', char: '次' }
    ],
    words: [
      { char: '刺', pinyin: 'cì', word: '刺猬', icon: '🦔' },
      { char: '词', pinyin: 'cí', word: '词语', icon: '📖' },
      { char: '磁', pinyin: 'cí', word: '磁铁', icon: '🧲' }
    ],
    tips: '平舌整体认读音节，送气较强。'
  },
  {
    id: 'si',
    letter: 'si',
    uppercase: 'SI',
    category: 'zhengti',
    categoryName: '整体认读音节',
    sound: '思',
    spokenText: 'sī',
    mnemonic: '春蚕吐丝 si si si，直接读出丝',
    icon: '🧵',
    tones: [
      { tone: 'sī', mark: '一声平', word: '吐丝', char: '丝' },
      { tone: 'sí', mark: '二声扬', word: '思考', char: '思' },
      { tone: 'sǐ', mark: '三声拐弯', word: '水死（罕）', char: '死' },
      { tone: 'sì', mark: '四声降', word: '四个', char: '四' }
    ],
    words: [
      { char: '丝', pinyin: 'sī', word: '雨丝', icon: '🌧️' },
      { char: '四', pinyin: 'sì', word: '四周', icon: '4️⃣' },
      { char: '司', pinyin: 'sī', word: '司机', icon: '🧑‍✈️' }
    ],
    tips: '平舌整体认读音节，不用拼，直接读丝。'
  },
  {
    id: 'yi',
    letter: 'yi',
    uppercase: 'YI',
    category: 'zhengti',
    categoryName: '整体认读音节',
    sound: '衣',
    spokenText: 'yī',
    mnemonic: '一件小衣 yi yi yi，大y带小i',
    icon: '👕',
    tones: [
      { tone: 'yī', mark: '一声平', word: '一朵', char: '一' },
      { tone: 'yí', mark: '二声扬', word: '阿姨', char: '姨' },
      { tone: 'yǐ', mark: '三声拐弯', word: '蚂蚁', char: '蚁' },
      { tone: 'yì', mark: '四声降', word: '用意', char: '意' }
    ],
    words: [
      { char: '一', pinyin: 'yī', word: '一个', icon: '1️⃣' },
      { char: '蚁', pinyin: 'yǐ', word: '蚂蚁', icon: '🐜' },
      { char: '医', pinyin: 'yī', word: '医生', icon: '👨‍⚕️' }
    ],
    tips: '大 y 站在小 i 前，直接读衣。'
  },
  {
    id: 'wu',
    letter: 'wu',
    uppercase: 'WU',
    category: 'zhengti',
    categoryName: '整体认读音节',
    sound: '乌',
    spokenText: 'wū',
    mnemonic: '乌鸦飞翔 wu wu wu，大w带小u',
    icon: '🦅',
    tones: [
      { tone: 'wū', mark: '一声平', word: '乌龟', char: '乌' },
      { tone: 'wú', mark: '二声扬', word: '蜈蚣', char: '蜈' },
      { tone: 'wǔ', mark: '三声拐弯', word: '跳舞', char: '舞' },
      { tone: 'wù', mark: '四声降', word: '大雾', char: '雾' }
    ],
    words: [
      { char: '五', pinyin: 'wǔ', word: '数字五', icon: '5️⃣' },
      { char: '屋', pinyin: 'wū', word: '房屋', icon: '🏠' },
      { char: '物', pinyin: 'wù', word: '动物', icon: '🦁' }
    ],
    tips: '大 w 站在小 u 前，直接读乌。'
  },
  {
    id: 'yu',
    letter: 'yu',
    uppercase: 'YU',
    category: 'zhengti',
    categoryName: '整体认读音节',
    sound: '迂',
    spokenText: 'yū',
    mnemonic: '小鱼戏水 yu yu yu，小ü脱帽大y带',
    icon: '🐠',
    tones: [
      { tone: 'yū', mark: '一声平', word: '迂回', char: '迂' },
      { tone: 'yú', mark: '二声扬', word: '游鱼', char: '鱼' },
      { tone: 'yǔ', mark: '三声拐弯', word: '下雨', char: '雨' },
      { tone: 'yù', mark: '四声降', word: '玉米', char: '玉' }
    ],
    words: [
      { char: '鱼', pinyin: 'yú', word: '金鱼', icon: '🐟' },
      { char: '雨', pinyin: 'yǔ', word: '雨水', icon: '🌧️' },
      { char: '玉', pinyin: 'yù', word: '玉米', icon: '🌽' }
    ],
    tips: '大 y 带小 ü，小 ü 脱帽两点抹去，读鱼。'
  },
  {
    id: 'ye',
    letter: 'ye',
    uppercase: 'YE',
    category: 'zhengti',
    categoryName: '整体认读音节',
    sound: '椰',
    spokenText: 'yē',
    mnemonic: '椰树摇曳 ye ye ye，直接读出椰',
    icon: '🌴',
    tones: [
      { tone: 'yē', mark: '一声平', word: '椰汁', char: '椰' },
      { tone: 'yé', mark: '二声扬', word: '爷爷', char: '爷' },
      { tone: 'yě', mark: '三声拐弯', word: '田野', char: '野' },
      { tone: 'yè', mark: '四声降', word: '树叶', char: '叶' }
    ],
    words: [
      { char: '爷', pinyin: 'yé', word: '爷爷', icon: '👴' },
      { char: '叶', pinyin: 'yè', word: '树叶', icon: '🍃' },
      { char: '夜', pinyin: 'yè', word: '夜晚', icon: '🌃' }
    ],
    tips: 'ie 变身，小 i 变成大 y，直接读出椰。'
  },
  {
    id: 'yue',
    letter: 'yue',
    uppercase: 'YUE',
    category: 'zhengti',
    categoryName: '整体认读音节',
    sound: '约',
    spokenText: 'yuē',
    mnemonic: '月光皎洁 yue yue yue，直接读出月',
    icon: '🌙',
    tones: [
      { tone: 'yuē', mark: '一声平', word: '约会', char: '约' },
      { tone: 'yué', mark: '二声扬', word: '月亮', char: '月' },
      { tone: 'yuě', mark: '三声拐弯', word: '跳跃', char: '跃' },
      { tone: 'yuè', mark: '四声降', word: '悦耳', char: '悦' }
    ],
    words: [
      { char: '月', pinyin: 'yuè', word: '明月', icon: '🌕' },
      { char: '乐', pinyin: 'yuè', word: '音乐', icon: '🎵' },
      { char: '跃', pinyin: 'yuè', word: '跳跃', icon: '🦘' }
    ],
    tips: 'üe 变身，前面加上大 y，ü 上两点省写。'
  },
  {
    id: 'yuan',
    letter: 'yuan',
    uppercase: 'YUAN',
    category: 'zhengti',
    categoryName: '整体认读音节',
    sound: '冤',
    spokenText: 'yuān',
    mnemonic: '圆圆汤圆 yuan yuan yuan，直接读出圆',
    icon: '⚪',
    tones: [
      { tone: 'yuān', mark: '一声平', word: '鸳鸯', char: '鸳' },
      { tone: 'yuán', mark: '二声扬', word: '圆圈', char: '圆' },
      { tone: 'yuǎn', mark: '三声拐弯', word: '远方', char: '远' },
      { tone: 'yuàn', mark: '四声降', word: '小院', char: '院' }
    ],
    words: [
      { char: '圆', pinyin: 'yuán', word: '圆形', icon: '⭕' },
      { char: '元', pinyin: 'yuán', word: '一元', icon: '🪙' },
      { char: '园', pinyin: 'yuán', word: '花园', icon: '🌷' }
    ],
    tips: 'ün 变身前鼻整体认读，ü 去掉两点加 y。'
  },
  {
    id: 'yin',
    letter: 'yin',
    uppercase: 'YIN',
    category: 'zhengti',
    categoryName: '整体认读音节',
    sound: '因',
    spokenText: 'yīn',
    mnemonic: '优美琴音 yin yin yin，直接读出因',
    icon: '🎵',
    tones: [
      { tone: 'yīn', mark: '一声平', word: '声音', char: '音' },
      { tone: 'yín', mark: '二声扬', word: '银行', char: '银' },
      { tone: 'yǐn', mark: '三声拐弯', word: '饮料', char: '饮' },
      { tone: 'yìn', mark: '四声降', word: '足印', char: '印' }
    ],
    words: [
      { char: '音', pinyin: 'yīn', word: '拼音', icon: '🔤' },
      { char: '银', pinyin: 'yín', word: '白银', icon: '🥈' },
      { char: '引', pinyin: 'yǐn', word: '吸引', icon: '🧲' }
    ],
    tips: '前鼻音 in 加上大 y，直接读音。'
  },
  {
    id: 'yun',
    letter: 'yun',
    uppercase: 'YUN',
    category: 'zhengti',
    categoryName: '整体认读音节',
    sound: '晕',
    spokenText: 'yūn',
    mnemonic: '朵朵白云 yun yun yun，直接读出云',
    icon: '☁️',
    tones: [
      { tone: 'yūn', mark: '一声平', word: '头晕', char: '晕' },
      { tone: 'yún', mark: '二声扬', word: '白云', char: '云' },
      { tone: 'yǔn', mark: '三声拐弯', word: '允许', char: '允' },
      { tone: 'yùn', mark: '四声降', word: '幸运', char: '运' }
    ],
    words: [
      { char: '云', pinyin: 'yún', word: '乌云', icon: '🌧️' },
      { char: '运', pinyin: 'yùn', word: '运动', icon: '🏃' },
      { char: '匀', pinyin: 'yún', word: '均匀', icon: '⚖️' }
    ],
    tips: 'ün 加上大 y，两点省略，直接读云。'
  },
  {
    id: 'ying',
    letter: 'ying',
    uppercase: 'YING',
    category: 'zhengti',
    categoryName: '整体认读音节',
    sound: '英',
    spokenText: 'yīng',
    mnemonic: '老鹰捉鸡 ying ying ying，直接读出鹰',
    icon: '🦅',
    tones: [
      { tone: 'yīng', mark: '一声平', word: '雏鹰', char: '鹰' },
      { tone: 'yíng', mark: '二声扬', word: '萤火虫', char: '萤' },
      { tone: 'yǐng', mark: '三声拐弯', word: '电影', char: '影' },
      { tone: 'yìng', mark: '四声降', word: '坚硬', char: '硬' }
    ],
    words: [
      { char: '鹰', pinyin: 'yīng', word: '雄鹰', icon: '🦅' },
      { char: '赢', pinyin: 'yíng', word: '赢了', icon: '🏆' },
      { char: '影', pinyin: 'yǐng', word: '身影', icon: '👤' }
    ],
    tips: '后鼻韵母 ing 加上大 y，直接读鹰。'
  }
]
