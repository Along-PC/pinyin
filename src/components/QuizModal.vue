<template>
  <div 
    class="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-xs overflow-y-auto"
    @click.self="$emit('close')"
  >
    <div class="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border-4 border-pink-300 overflow-hidden my-auto flex flex-col">
      <!-- 顶栏 -->
      <div class="bg-gradient-to-r from-pink-400 via-rose-400 to-amber-400 px-5 py-3 sm:px-6 sm:py-4 flex items-center justify-between text-white">
        <div class="flex items-center gap-2">
          <span class="text-2xl">🎮</span>
          <span class="font-black text-lg sm:text-xl">听音辨字母 · 快乐挑战</span>
        </div>
        <button 
          @click="$emit('close')"
          class="w-9 h-9 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 text-white font-bold text-xl cursor-pointer"
        >
          ✕
        </button>
      </div>

      <!-- 积分与连击展示 -->
      <div class="px-6 py-3 bg-pink-50 flex items-center justify-between border-b border-pink-100">
        <div class="flex items-center gap-1.5">
          <span class="text-sm font-bold text-gray-600">小星星:</span>
          <span class="text-amber-500 font-black text-lg">⭐ {{ stars }}</span>
        </div>
        <div class="text-xs sm:text-sm font-bold text-pink-600">
          连对: {{ streak }} 题
        </div>
      </div>

      <!-- 测验内容 -->
      <div v-if="currentQuestion" class="p-6 sm:p-8 flex flex-col items-center">
        <p class="text-base sm:text-lg font-black text-gray-700 mb-4">
          请仔细听发音，找出对应的字母：
        </p>

        <!-- 播放发音大按钮 -->
        <button
          @click="playTargetSound"
          class="w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-gradient-to-tr from-amber-400 to-orange-400 hover:from-amber-500 hover:to-orange-500 text-white shadow-xl shadow-orange-200 flex flex-col items-center justify-center gap-1 transition-transform active:scale-90 cursor-pointer animate-cute-bounce mb-6"
        >
          <span class="text-4xl sm:text-5xl">📢</span>
          <span class="text-xs sm:text-sm font-black">再听一次</span>
        </button>

        <!-- 选项大卡片 -->
        <div class="grid grid-cols-2 gap-4 w-full">
          <button
            v-for="opt in currentQuestion.options"
            :key="opt.id"
            @click="handleSelect(opt)"
            :disabled="answered"
            class="h-28 sm:h-32 rounded-3xl font-black text-5xl sm:text-6xl flex items-center justify-center transition-all duration-200 shadow-md border-3 active:scale-95 cursor-pointer relative"
            :class="getOptionClass(opt)"
          >
            <span>{{ opt.letter }}</span>

            <!-- 正确或错误标志 -->
            <span v-if="answered && opt.id === currentQuestion.target.id" class="absolute top-2 right-3 text-2xl">
              ✅
            </span>
            <span v-else-if="answered && selectedOpt && selectedOpt.id === opt.id && opt.id !== currentQuestion.target.id" class="absolute top-2 right-3 text-2xl">
              ❌
            </span>
          </button>
        </div>

        <!-- 反馈提示 -->
        <div class="mt-6 min-h-[32px] text-center">
          <div v-if="feedback === 'correct'" class="text-emerald-600 font-black text-lg flex items-center justify-center gap-1.5 animate-bounce">
            <span>🎉</span>
            <span>答对啦！你真棒！读作: {{ currentQuestion.target.spokenText }} ({{ currentQuestion.target.mnemonic }})</span>
          </div>
          <div v-else-if="feedback === 'wrong'" class="text-rose-500 font-bold text-base flex items-center justify-center gap-1">
            <span>💪</span>
            <span>再听一次，不要气馁哦！</span>
          </div>
          <div v-else class="text-gray-400 text-xs">
            点击上方大喇叭可以重复听声音哦
          </div>
        </div>
      </div>

      <!-- 底栏重开 -->
      <div class="bg-gray-50 px-6 py-3 border-t border-gray-100 flex items-center justify-between">
        <button
          @click="resetQuiz"
          class="px-4 py-2 rounded-xl text-xs font-bold text-gray-600 hover:bg-gray-200 transition-colors cursor-pointer"
        >
          🔄 重新开始
        </button>
        <button
          @click="nextQuestion"
          class="px-5 py-2 bg-pink-500 hover:bg-pink-600 text-white rounded-xl text-xs sm:text-sm font-bold shadow-xs transition-colors cursor-pointer"
        >
          跳过 / 下一题 ➡️
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { soundEffects, speakPinyinItem, stopSpeech } from '../utils/audio'

const props = defineProps({
  list: {
    type: Array,
    required: true
  }
})

defineEmits(['close'])

const stars = ref(0)
const streak = ref(0)
const currentQuestion = ref(null)
const selectedOpt = ref(null)
const answered = ref(false)
const feedback = ref(null)
const pendingTimers = new Set()

function schedule(callback, delay) {
  const timer = setTimeout(() => {
    pendingTimers.delete(timer)
    callback()
  }, delay)
  pendingTimers.add(timer)
}

function clearPendingSounds() {
  pendingTimers.forEach(clearTimeout)
  pendingTimers.clear()
  stopSpeech()
}

onUnmounted(clearPendingSounds)

function generateQuestion() {
  clearPendingSounds()
  if (!props.list || props.list.length < 4) return
  answered.value = false
  selectedOpt.value = null
  feedback.value = null

  // 随机取1个目标
  const targetIndex = Math.floor(Math.random() * props.list.length)
  const target = props.list[targetIndex]

  // 取3个不同选项
  const options = [target]
  while (options.length < 4) {
    const rand = props.list[Math.floor(Math.random() * props.list.length)]
    if (!options.some(o => o.id === rand.id)) {
      options.push(rand)
    }
  }

  // 打乱选项顺序
  options.sort(() => Math.random() - 0.5)

  currentQuestion.value = {
    target,
    options
  }

  // 延迟自动发音
  schedule(() => {
    playTargetSound()
  }, 300)
}

function playTargetSound() {
  if (currentQuestion.value) {
    speakPinyinItem(currentQuestion.value.target)
  }
}

function handleSelect(opt) {
  if (answered.value) return
  answered.value = true
  selectedOpt.value = opt

  if (opt.id === currentQuestion.value.target.id) {
    feedback.value = 'correct'
    stars.value += 1
    streak.value += 1
    soundEffects.playSuccess()

    schedule(() => {
      generateQuestion()
    }, 1800)
  } else {
    feedback.value = 'wrong'
    streak.value = 0
    soundEffects.playWrong()

    // 允许孩子再次选择
    schedule(() => {
      answered.value = false
      feedback.value = null
    }, 1200)
  }
}

function getOptionClass(opt) {
  if (!answered.value) {
    return 'bg-amber-50 hover:bg-amber-100 text-amber-900 border-amber-200 hover:border-amber-400'
  }
  if (opt.id === currentQuestion.value.target.id) {
    return 'bg-emerald-500 text-white border-emerald-600 scale-105'
  }
  if (selectedOpt.value && selectedOpt.value.id === opt.id) {
    return 'bg-rose-100 text-rose-600 border-rose-400'
  }
  return 'bg-gray-50 text-gray-400 border-gray-200'
}

function nextQuestion() {
  generateQuestion()
}

function resetQuiz() {
  stars.value = 0
  streak.value = 0
  generateQuestion()
}

onMounted(() => {
  generateQuestion()
})
</script>
