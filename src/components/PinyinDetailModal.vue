<template>
  <div 
    v-if="item" 
    class="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/50 backdrop-blur-xs overflow-y-auto animate-fade-in"
    @click.self="$emit('close')"
  >
    <div class="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border-4 border-amber-300 overflow-hidden my-auto max-h-[92vh] flex flex-col">
      <!-- 弹窗顶栏 -->
      <div class="bg-gradient-to-r from-amber-400 via-orange-400 to-rose-400 px-5 py-3 sm:px-6 sm:py-4 flex items-center justify-between text-white">
        <div class="flex items-center gap-2">
          <span class="text-2xl">{{ item.icon }}</span>
          <span class="font-black text-lg sm:text-xl">{{ item.categoryName }} · 详细学习</span>
        </div>
        <button 
          @click="$emit('close')"
          class="w-9 h-9 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 text-white font-bold text-xl transition-all cursor-pointer"
        >
          ✕
        </button>
      </div>

      <!-- 弹窗内容主体 -->
      <div class="p-5 sm:p-6 overflow-y-auto space-y-6">
        <!-- 上方：超大四线三格展示与标准发音 -->
        <div class="flex flex-col sm:flex-row items-center gap-4 bg-amber-50/60 rounded-3xl p-4 sm:p-6 border border-amber-200">
          <!-- 字母四线三格区 -->
          <div class="w-48 h-32 sm:w-56 sm:h-36 bg-white rounded-2xl shadow-sm border border-amber-200 flex items-center justify-center relative overflow-hidden">
            <FourLineGrid :show-lines="true">
              <span class="text-7xl sm:text-8xl font-black text-amber-600">
                {{ item.letter }}
              </span>
            </FourLineGrid>
          </div>

          <!-- 发音控制与大小写 -->
          <div class="flex-1 flex flex-col items-center sm:items-start gap-2.5">
            <div class="flex items-center gap-2">
              <span class="text-xs font-bold px-2 py-0.5 rounded-md bg-white border border-amber-200 text-gray-600">
                大写: {{ item.uppercase }}
              </span>
              <span class="text-xs font-bold px-2 py-0.5 rounded-md bg-white border border-amber-200 text-gray-600">
                笔画: {{ item.strokeCount || 2 }} 笔
              </span>
            </div>

            <div class="text-xl sm:text-2xl font-black text-gray-800 flex items-center gap-2">
              <span>读音:</span>
              <span class="text-amber-600 text-3xl font-extrabold">{{ item.spokenText }}</span>
            </div>

            <!-- 发音按钮组 -->
            <div class="flex items-center gap-2 mt-1">
              <button
                @click="speakCurrent(0.85)"
                class="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-2xl shadow-md shadow-amber-200 text-sm flex items-center gap-1.5 transition-all active:scale-95 cursor-pointer"
              >
                <span>🔊</span>
                <span>{{ item.category === 'shengmu' ? '呼读示范' : '标准读音' }}</span>
              </button>
              <button
                @click="speakCurrent(0.6)"
                class="px-3.5 py-2 bg-orange-100 hover:bg-orange-200 text-orange-800 font-bold rounded-2xl text-sm flex items-center gap-1 transition-all active:scale-95 cursor-pointer"
              >
                <span>🐢</span>
                <span>慢速听</span>
              </button>
            </div>
          </div>
        </div>

        <p v-if="item.category === 'shengmu'" class="text-xs text-gray-600 leading-relaxed">
          这里播放声母的呼读示范。拼读时声母要轻、短，不要把后面的辅助元音一起拼进去。
        </p>

        <!-- 记忆口诀卡片 -->
        <div class="bg-sky-50 rounded-2xl p-4 border border-sky-200 flex items-center justify-between gap-3">
          <div class="flex items-center gap-3">
            <span class="text-3xl">💡</span>
            <div>
              <div class="text-xs font-bold text-sky-600 uppercase tracking-wider">助记口诀</div>
              <div class="text-base sm:text-lg font-black text-sky-900">{{ item.mnemonic }}</div>
            </div>
          </div>
          <button
            @click="speakMnemonicText"
            class="px-3 py-1.5 bg-sky-500 hover:bg-sky-600 text-white font-bold rounded-xl text-xs sm:text-sm flex items-center gap-1 shrink-0 cursor-pointer"
          >
            <span>🎙️</span>
            <span>读口诀</span>
          </button>
        </div>

        <!-- 四声调模块（若有） -->
        <div v-if="item.tones && item.tones.length" class="space-y-2.5">
          <div class="flex items-center justify-between">
            <h3 class="text-base font-black text-gray-800 flex items-center gap-1.5">
              <span>🎵</span>
              <span>声调练习 (点击单独发音)</span>
            </h3>
            <span class="text-xs text-amber-600 font-medium">一声平、二声扬、三声拐弯、四声降</span>
          </div>

          <p v-if="item.toneNote" class="text-xs text-gray-600 leading-relaxed">{{ item.toneNote }}</p>
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            <div
              v-for="t in item.tones"
              :key="t.tone"
              @click="speakToneItem(t)"
              class="bg-gradient-to-b from-orange-50 to-amber-50 hover:from-orange-100 hover:to-amber-100 rounded-2xl p-3 border border-amber-200 flex flex-col items-center justify-center cursor-pointer transition-all active:scale-95 group shadow-xs"
            >
              <span class="text-3xl font-black text-amber-600 group-hover:scale-110 transition-transform">
                {{ t.tone }}
              </span>
              <span class="text-xs font-bold text-gray-500 mt-1">{{ t.mark }}</span>
              <span class="text-xs font-bold text-gray-800 mt-0.5 bg-white/80 px-2 py-0.5 rounded-md border border-amber-200/50">
                {{ t.word }}
              </span>
            </div>
          </div>
        </div>

        <!-- 常用组词与生动图解 -->
        <div v-if="item.words && item.words.length" class="space-y-2.5">
          <h3 class="text-base font-black text-gray-800 flex items-center gap-1.5">
            <span>📚</span>
            <span>生活组词</span>
          </h3>

          <div class="grid grid-cols-3 gap-3">
            <div
              v-for="w in item.words"
              :key="w.word"
              @click="speakWord(w)"
              class="bg-emerald-50/70 hover:bg-emerald-100/80 rounded-2xl p-3 border border-emerald-200 flex flex-col items-center justify-center cursor-pointer transition-all active:scale-95 text-center group"
            >
              <span class="text-3xl mb-1 group-hover:scale-115 transition-transform">{{ w.icon }}</span>
              <span class="text-xs text-emerald-600 font-bold">{{ w.pinyin }}</span>
              <span class="text-base font-black text-gray-800">{{ w.word }}</span>
            </div>
          </div>
        </div>

        <!-- 发音要领口型贴士 -->
        <div v-if="item.tips" class="bg-gray-50 rounded-2xl p-3.5 border border-gray-200 text-xs sm:text-sm text-gray-600 leading-relaxed flex items-start gap-2.5">
          <span class="text-lg">👄</span>
          <div>
            <span class="font-bold text-gray-800">发音口型要领：</span>
            <span>{{ item.tips }}</span>
          </div>
        </div>
      </div>

      <!-- 弹窗底栏：上一字 / 下一字快捷导航 -->
      <div class="bg-gray-50 px-5 py-3 border-t border-gray-200 flex items-center justify-between">
        <button
          @click="$emit('prev')"
          class="px-4 py-2 rounded-xl text-xs sm:text-sm font-bold bg-white border border-gray-200 hover:bg-gray-100 text-gray-700 flex items-center gap-1 transition-all cursor-pointer"
        >
          <span>⬅️</span>
          <span>上一个</span>
        </button>

        <span class="text-xs text-gray-400 font-medium">按键盘左右箭头也可翻页</span>

        <button
          @click="$emit('next')"
          class="px-4 py-2 rounded-xl text-xs sm:text-sm font-bold bg-white border border-gray-200 hover:bg-gray-100 text-gray-700 flex items-center gap-1 transition-all cursor-pointer"
        >
          <span>下一个</span>
          <span>➡️</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onUnmounted, watch } from 'vue'
import FourLineGrid from './FourLineGrid.vue'
import { speakPinyin, speakPinyinItem, speakTone, speakMnemonic, stopSpeech } from '../utils/audio'

const props = defineProps({
  item: {
    type: Object,
    default: null
  }
})

defineEmits(['close', 'prev', 'next'])

watch(() => props.item, stopSpeech)
onUnmounted(stopSpeech)

function speakCurrent(rate = 0.85) {
  if (!props.item) return
  speakPinyinItem(props.item, { rate })
}

function speakMnemonicText() {
  if (!props.item) return
  speakMnemonic(props.item)
}

function speakToneItem(t) {
  speakTone(t.tone)
}

function speakWord(w) {
  speakPinyin(w.word, { rate: 0.85 })
}
</script>
