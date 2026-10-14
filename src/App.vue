<template>
  <div class="min-h-screen flex flex-col bg-slate-50 text-slate-800">
    <!-- 顶部导航栏 -->
    <HeaderBar
      :show-grid="showGrid"
      :font-size="fontSize"
      :is-autoplaying="isAutoplaying"
      @toggle-grid="showGrid = !showGrid"
      @change-font-size="fontSize = $event"
      @open-quiz="isQuizOpen = true"
      @toggle-autoplay="toggleAutoplay"
    />

    <!-- 主体内容区域 -->
    <main class="flex-1 max-w-7xl w-full mx-auto px-4 py-5 sm:px-6 sm:py-6">
      <!-- 分类标签导航 -->
      <CategoryNav
        :categories="CATEGORIES"
        :active-category="activeCategory"
        :view-mode="viewMode"
        @select-category="handleCategorySelect"
        @toggle-view-mode="viewMode = $event"
      />

      <!-- 磨耳朵播放状态横幅 -->
      <div 
        v-if="isAutoplaying" 
        class="mb-6 p-4 rounded-2xl bg-gradient-to-r from-amber-400 to-orange-400 text-white flex items-center justify-between shadow-lg animate-pulse"
      >
        <div class="flex items-center gap-3">
          <span class="text-2xl">🎧</span>
          <div>
            <div class="font-bold text-sm">磨耳朵连读中...</div>
            <div class="text-xs opacity-90">当前正在播放: {{ currentAutoplayItem?.letter }} (读作: {{ currentAutoplayItem?.sound }})</div>
          </div>
        </div>
        <button 
          @click="toggleAutoplay"
          class="px-4 py-1.5 bg-white text-orange-600 rounded-xl font-bold text-xs shadow-xs hover:bg-orange-50 cursor-pointer"
        >
          停止播放
        </button>
      </div>

      <!-- 浏览模式 1: 分组平铺 (展示所有分类大板块) -->
      <div v-if="viewMode === 'grouped'" class="space-y-10">
        <section 
          v-for="cat in filteredSections" 
          :key="cat.id" 
          :id="'section-' + cat.id"
          class="scroll-mt-24"
        >
          <!-- 分类大标题栏 -->
          <div class="flex items-center justify-between mb-4 pb-2 border-b-2 border-amber-200">
            <div class="flex items-center gap-2.5">
              <span class="w-3.5 h-8 rounded-full bg-gradient-to-b" :class="cat.color"></span>
              <h2 class="text-xl sm:text-2xl font-black text-gray-800 flex items-center gap-2">
                {{ cat.name }}
              </h2>
            </div>
            <span class="text-xs sm:text-sm font-bold px-3 py-1 bg-amber-100 text-amber-800 rounded-full">
              共 {{ getListByCategory(cat.id).length }} 个字母
            </span>
          </div>

          <!-- 字母网格列表 -->
          <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3.5 sm:gap-4 lg:gap-5">
            <PinyinCard
              v-for="item in getListByCategory(cat.id)"
              :key="item.id"
              :item="item"
              :show-grid="showGrid"
              :font-size="fontSize"
              @detail="openDetail(item)"
            />
          </div>
        </section>
      </div>

      <!-- 浏览模式 2: 专属聚焦 (仅展示当前选中的分类) -->
      <div v-else>
        <div class="flex items-center justify-between mb-4 pb-2 border-b-2 border-amber-200">
          <div class="flex items-center gap-2.5">
            <span class="w-3.5 h-8 rounded-full bg-amber-500"></span>
            <h2 class="text-xl sm:text-2xl font-black text-gray-800">
              {{ currentCategoryObj?.name }}
            </h2>
          </div>
          <span class="text-xs sm:text-sm font-bold px-3 py-1 bg-amber-100 text-amber-800 rounded-full">
            共 {{ currentFilteredList.length }} 个字母
          </span>
        </div>

        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3.5 sm:gap-4 lg:gap-5">
          <PinyinCard
            v-for="item in currentFilteredList"
            :key="item.id"
            :item="item"
            :show-grid="showGrid"
            :font-size="fontSize"
            @detail="openDetail(item)"
          />
        </div>
      </div>
    </main>

    <!-- 底部页脚 -->
    <footer class="mt-12 bg-white border-t border-amber-100 py-6 text-center text-xs sm:text-sm text-gray-500">
      <div class="max-w-7xl mx-auto px-4 flex flex-col items-center gap-2">
        <p class="font-bold text-amber-700 flex items-center gap-1.5">
          <span>🌟</span>
          <span>爸爸给宝贝的专属拼音小乐园 · 每天快乐读一读，写一写</span>
          <span>🎈</span>
        </p>
        <p class="text-gray-400">
          纯静态打包设计 · 支持离线浏览 · 完美适配 Cloudflare Pages 免费部署
        </p>
      </div>
    </footer>

    <!-- 详情弹窗 -->
    <PinyinDetailModal
      v-if="selectedItem"
      :item="selectedItem"
      @close="selectedItem = null"
      @prev="navigateItem(-1)"
      @next="navigateItem(1)"
    />

    <!-- 听音小测验弹窗 -->
    <QuizModal
      v-if="isQuizOpen"
      :list="currentFilteredList.length >= 4 ? currentFilteredList : PINYIN_LIST"
      @close="isQuizOpen = false"
    />
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import HeaderBar from './components/HeaderBar.vue'
import CategoryNav from './components/CategoryNav.vue'
import PinyinCard from './components/PinyinCard.vue'
import PinyinDetailModal from './components/PinyinDetailModal.vue'
import QuizModal from './components/QuizModal.vue'
import { CATEGORIES, PINYIN_LIST } from './data/pinyinData'
import { speakPinyinItem } from './utils/audio'

// 状态
const activeCategory = ref('all')
const viewMode = ref('grouped') // 'grouped' | 'filtered'
const showGrid = ref(true)
const fontSize = ref('large') // 'normal' | 'large' | 'huge'
const selectedItem = ref(null)
const isQuizOpen = ref(false)

// 磨耳朵自动轮播
const isAutoplaying = ref(false)
const currentAutoplayItem = ref(null)
let autoplayTimer = null

// 分类列表过滤
const currentCategoryObj = computed(() => {
  return CATEGORIES.find(c => c.id === activeCategory.value) || CATEGORIES[0]
})

const currentFilteredList = computed(() => {
  if (activeCategory.value === 'all') {
    return PINYIN_LIST
  }
  return PINYIN_LIST.filter(item => item.category === activeCategory.value)
})

// 分组平铺展示的分类模块
const filteredSections = computed(() => {
  const sections = CATEGORIES.filter(c => c.id !== 'all')
  if (activeCategory.value === 'all') {
    return sections
  }
  return sections.filter(c => c.id === activeCategory.value)
})

function getListByCategory(categoryId) {
  return PINYIN_LIST.filter(item => item.category === categoryId)
}

function handleCategorySelect(catId) {
  activeCategory.value = catId
  if (viewMode.value === 'grouped' && catId !== 'all') {
    // 平滑滚动至对应的分组锚点
    const el = document.getElementById(`section-${catId}`)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }
}

function openDetail(item) {
  selectedItem.value = item
}

// 弹窗翻页（上一个、下一个）
function navigateItem(offset) {
  if (!selectedItem.value) return
  const currentList = PINYIN_LIST
  const index = currentList.findIndex(i => i.id === selectedItem.value.id)
  if (index === -1) return
  let newIndex = index + offset
  if (newIndex < 0) newIndex = currentList.length - 1
  if (newIndex >= currentList.length) newIndex = 0
  selectedItem.value = currentList[newIndex]
}

// 磨耳朵功能：按顺序每隔 2.5 秒朗读下一个拼音
function toggleAutoplay() {
  if (isAutoplaying.value) {
    stopAutoplay()
  } else {
    startAutoplay()
  }
}

function startAutoplay() {
  isAutoplaying.value = true
  const list = currentFilteredList.value.length ? currentFilteredList.value : PINYIN_LIST
  let idx = 0

  const playNext = () => {
    if (!isAutoplaying.value) return
    const item = list[idx]
    currentAutoplayItem.value = item
    speakPinyinItem(item)
    idx = (idx + 1) % list.length
    autoplayTimer = setTimeout(playNext, 2500)
  }

  playNext()
}

function stopAutoplay() {
  isAutoplaying.value = false
  currentAutoplayItem.value = null
  if (autoplayTimer) {
    clearTimeout(autoplayTimer)
    autoplayTimer = null
  }
}

// 键盘快捷键监听
function handleKeydown(e) {
  if (selectedItem.value) {
    if (e.key === 'ArrowLeft') {
      navigateItem(-1)
    } else if (e.key === 'ArrowRight') {
      navigateItem(1)
    } else if (e.key === 'Escape') {
      selectedItem.value = null
    } else if (e.key === ' ') {
      e.preventDefault()
      speakPinyinItem(selectedItem.value)
    }
  } else if (isQuizOpen.value) {
    if (e.key === 'Escape') {
      isQuizOpen.value = false
    }
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
  stopAutoplay()
})
</script>
