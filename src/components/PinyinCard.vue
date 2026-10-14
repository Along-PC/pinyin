<template>
  <div 
    class="group relative flex flex-col justify-between rounded-3xl p-4 sm:p-5 transition-all duration-200 cursor-pointer border-2 select-none active:scale-95"
    :class="[
      themeStyles.bg,
      themeStyles.border,
      themeStyles.hoverBorder,
      isSpeaking ? 'ring-4 ring-amber-400 scale-102 shadow-xl' : 'card-shadow hover:-translate-y-1 hover:shadow-lg'
    ]"
    @click="handleClick"
  >
    <!-- 顶部状态栏：分类标识与放大详情入口 -->
    <div class="flex items-center justify-between w-full mb-1">
      <span class="text-xs sm:text-sm font-semibold px-2 py-0.5 rounded-full" :class="themeStyles.tag">
        {{ item.categoryName }}
      </span>

      <!-- 放大详情按钮 -->
      <button 
        @click.stop="$emit('detail', item)"
        class="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-full bg-white/80 hover:bg-white text-gray-600 hover:text-amber-600 shadow-sm transition-all"
        title="详细学习与四声调"
      >
        <span class="text-sm">🔍</span>
      </button>
    </div>

    <!-- 字母核心展示区（超大字号） -->
    <div 
      class="my-2 sm:my-3 rounded-2xl flex items-center justify-center transition-colors min-h-[96px] sm:min-h-[120px]"
      :class="showGrid ? 'bg-amber-50/70 border border-amber-200/50' : 'bg-white/60'"
    >
      <FourLineGrid :show-lines="showGrid">
        <span 
          class="font-black tracking-normal transition-all"
          :class="[
            fontClass,
            themeStyles.textColor,
            isSpeaking ? 'animate-bounce text-amber-500' : ''
          ]"
        >
          {{ item.letter }}
        </span>
      </FourLineGrid>
    </div>

    <!-- 底部区域：发音谐音与形象口诀 -->
    <div class="flex flex-col items-center justify-center pt-1 border-t border-black/5 gap-1">
      <!-- 读音按钮与发音提示 -->
      <div class="flex items-center gap-1.5 text-sm sm:text-base font-bold text-gray-700">
        <span class="text-base sm:text-lg">{{ item.icon }}</span>
        <span>读作:</span>
        <span class="px-2 py-0.5 bg-white/90 rounded-lg text-amber-600 border border-amber-200 shadow-xs font-black">
          {{ item.spokenText }}
        </span>
        <span class="text-xs text-amber-500 group-hover:scale-125 transition-transform">🔊</span>
      </div>

      <!-- 趣味短口诀 -->
      <p class="text-xs sm:text-sm text-gray-500 font-medium text-center line-clamp-1 mt-0.5">
        {{ item.mnemonic }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import FourLineGrid from './FourLineGrid.vue'
import { speakPinyinItem } from '../utils/audio'

const props = defineProps({
  item: {
    type: Object,
    required: true
  },
  showGrid: {
    type: Boolean,
    default: true
  },
  fontSize: {
    type: String,
    default: 'large' // 'normal', 'large', 'huge'
  }
})

const emit = defineEmits(['detail'])

const isSpeaking = ref(false)

// 针对不同字号设置的 class
const fontClass = computed(() => {
  if (props.fontSize === 'huge') {
    return 'text-6xl sm:text-7xl lg:text-8xl'
  }
  if (props.fontSize === 'large') {
    return 'text-5xl sm:text-6xl lg:text-7xl'
  }
  return 'text-4xl sm:text-5xl lg:text-6xl'
})

// 根据分类匹配不同柔和活泼的儿童主题色
const themeStyles = computed(() => {
  switch (props.item.category) {
    case 'shengmu':
      return {
        bg: 'bg-gradient-to-b from-blue-50/90 to-sky-100/60',
        border: 'border-sky-200',
        hoverBorder: 'hover:border-sky-400',
        textColor: 'text-sky-700',
        tag: 'bg-sky-100 text-sky-800'
      }
    case 'dan-yunmu':
      return {
        bg: 'bg-gradient-to-b from-emerald-50/90 to-teal-100/60',
        border: 'border-emerald-200',
        hoverBorder: 'hover:border-emerald-400',
        textColor: 'text-emerald-700',
        tag: 'bg-emerald-100 text-emerald-800'
      }
    case 'fu-yunmu':
      return {
        bg: 'bg-gradient-to-b from-rose-50/90 to-pink-100/60',
        border: 'border-pink-200',
        hoverBorder: 'hover:border-pink-400',
        textColor: 'text-pink-700',
        tag: 'bg-pink-100 text-pink-800'
      }
    case 'qian-yunmu':
      return {
        bg: 'bg-gradient-to-b from-purple-50/90 to-violet-100/60',
        border: 'border-purple-200',
        hoverBorder: 'hover:border-purple-400',
        textColor: 'text-purple-700',
        tag: 'bg-purple-100 text-purple-800'
      }
    case 'hou-yunmu':
      return {
        bg: 'bg-gradient-to-b from-fuchsia-50/90 to-rose-100/60',
        border: 'border-fuchsia-200',
        hoverBorder: 'hover:border-fuchsia-400',
        textColor: 'text-fuchsia-700',
        tag: 'bg-fuchsia-100 text-fuchsia-800'
      }
    case 'zhengti':
      return {
        bg: 'bg-gradient-to-b from-amber-50/90 to-orange-100/60',
        border: 'border-amber-200',
        hoverBorder: 'hover:border-amber-400',
        textColor: 'text-amber-800',
        tag: 'bg-amber-100 text-amber-900'
      }
    default:
      return {
        bg: 'bg-gradient-to-b from-slate-50 to-gray-100',
        border: 'border-gray-200',
        hoverBorder: 'hover:border-gray-400',
        textColor: 'text-gray-800',
        tag: 'bg-gray-100 text-gray-800'
      }
  }
})

function handleClick() {
  isSpeaking.value = true
  speakPinyinItem(props.item)
  setTimeout(() => {
    isSpeaking.value = false
  }, 1000)
}
</script>
