<template>
  <div class="w-full bg-white/90 backdrop-blur-md rounded-3xl p-3 sm:p-4 shadow-sm border border-amber-100 mb-6">
    <!-- 分类标签滚动条 -->
    <div class="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0 no-scrollbar">
      <button
        v-for="cat in categories"
        :key="cat.id"
        @click="$emit('select-category', cat.id)"
        class="flex-shrink-0 px-4 py-2.5 sm:px-5 sm:py-3 rounded-2xl font-bold text-sm sm:text-base transition-all duration-200 flex items-center gap-2 active:scale-95 cursor-pointer"
        :class="[
          activeCategory === cat.id
            ? 'bg-amber-500 text-white shadow-md shadow-amber-300 -translate-y-0.5'
            : 'bg-amber-50 hover:bg-amber-100 text-gray-700 hover:text-amber-800'
        ]"
      >
        <span>{{ cat.name }}</span>
      </button>
    </div>

    <!-- 底部辅助条：展示模式切换与搜索 -->
    <div class="mt-3 pt-3 border-t border-gray-100 flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm">
      <div class="flex items-center gap-2">
        <span class="text-gray-500">浏览视图:</span>
        <button
          @click="$emit('toggle-view-mode', 'grouped')"
          class="px-3 py-1 rounded-xl font-medium transition-all cursor-pointer"
          :class="viewMode === 'grouped' ? 'bg-amber-100 text-amber-800 font-bold' : 'text-gray-500 hover:bg-gray-100'"
        >
          📂 分类平铺
        </button>
        <button
          @click="$emit('toggle-view-mode', 'filtered')"
          class="px-3 py-1 rounded-xl font-medium transition-all cursor-pointer"
          :class="viewMode === 'filtered' ? 'bg-amber-100 text-amber-800 font-bold' : 'text-gray-500 hover:bg-gray-100'"
        >
          🎯 专属聚焦
        </button>
      </div>

      <div class="text-gray-500 text-xs sm:text-sm flex items-center gap-1.5">
        <span>💡 提示：点击任何卡片可听标准读音，点击放大镜 🔍 练习四声调！</span>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  categories: {
    type: Array,
    required: true
  },
  activeCategory: {
    type: String,
    required: true
  },
  viewMode: {
    type: String,
    default: 'grouped' // 'grouped' | 'filtered'
  }
})

defineEmits(['select-category', 'toggle-view-mode'])
</script>
