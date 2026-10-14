<template>
  <header class="w-full bg-white/95 backdrop-blur-md sticky top-0 z-40 border-b border-amber-100 shadow-xs px-4 py-3 sm:px-6 sm:py-4">
    <div class="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
      <!-- Logo与标语 -->
      <div class="flex items-center gap-3">
        <div class="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-tr from-amber-400 to-orange-400 flex items-center justify-center text-2xl shadow-md shadow-orange-200">
          🎒
        </div>
        <div>
          <h1 class="text-xl sm:text-2xl font-black bg-gradient-to-r from-amber-600 via-orange-500 to-rose-500 bg-clip-text text-transparent flex items-center gap-2">
            拼音乐园
            <span class="text-xs sm:text-sm font-bold px-2 py-0.5 rounded-full bg-amber-100 text-amber-700">
              儿童启蒙
            </span>
          </h1>
          <p class="text-xs text-gray-500 font-medium">大字清晰 · 真实标准发音 · 四声调口诀</p>
        </div>
      </div>

      <!-- 工具选项栏 -->
      <div class="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
        <!-- 趣味测验/听音小游戏 -->
        <button
          @click="$emit('open-quiz')"
          class="px-3.5 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white rounded-2xl text-xs sm:text-sm font-bold shadow-md shadow-pink-200 flex items-center gap-1.5 transition-all active:scale-95 cursor-pointer"
        >
          <span>🎮</span>
          <span>听音小测验</span>
        </button>

        <!-- 连续磨耳朵播放/停止 -->
        <button
          @click="$emit('toggle-autoplay')"
          class="px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-2xl text-xs sm:text-sm font-bold flex items-center gap-1.5 transition-all active:scale-95 cursor-pointer border"
          :class="isAutoplaying 
            ? 'bg-amber-500 text-white border-amber-600 shadow-md animate-pulse'
            : 'bg-white hover:bg-amber-50 text-amber-700 border-amber-200'"
        >
          <span>{{ isAutoplaying ? '⏸️' : '🎧' }}</span>
          <span>{{ isAutoplaying ? '停止磨耳朵' : '磨耳朵轮播' }}</span>
        </button>

        <!-- 四线三格显示开关 -->
        <button
          @click="$emit('toggle-grid')"
          class="px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-2xl text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 cursor-pointer border"
          :class="showGrid 
            ? 'bg-sky-50 text-sky-700 border-sky-300' 
            : 'bg-gray-50 text-gray-500 border-gray-200'"
          title="切换拼音四线三格参考线"
        >
          <span>📏</span>
          <span>拼音格: {{ showGrid ? '开启' : '关闭' }}</span>
        </button>

        <!-- 字号调节 -->
        <div class="flex items-center bg-gray-100 rounded-2xl p-1 border border-gray-200">
          <button
            v-for="size in fontSizes"
            :key="size.key"
            @click="$emit('change-font-size', size.key)"
            class="px-2.5 py-1 rounded-xl text-xs font-bold transition-all cursor-pointer"
            :class="fontSize === size.key ? 'bg-white text-amber-600 shadow-xs' : 'text-gray-500 hover:text-gray-900'"
          >
            {{ size.label }}
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
defineProps({
  showGrid: {
    type: Boolean,
    default: true
  },
  fontSize: {
    type: String,
    default: 'large'
  },
  isAutoplaying: {
    type: Boolean,
    default: false
  }
})

defineEmits(['toggle-grid', 'change-font-size', 'open-quiz', 'toggle-autoplay'])

const fontSizes = [
  { key: 'normal', label: '大' },
  { key: 'large', label: '很大' },
  { key: 'huge', label: '特大' }
]
</script>
