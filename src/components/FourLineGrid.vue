<template>
  <div class="relative w-full h-full flex items-center justify-center overflow-hidden select-none">
    <!-- 四线三格辅助背景线 -->
    <div v-if="showLines" class="absolute inset-0 flex flex-col justify-between pointer-events-none py-1.5 opacity-75">
      <!-- 第一条线 -->
      <div class="w-full border-b border-red-300"></div>
      <!-- 第二条线 -->
      <div class="w-full border-b border-dashed border-sky-400"></div>
      <!-- 第三条线 -->
      <div class="w-full border-b border-dashed border-sky-400"></div>
      <!-- 第四条线 -->
      <div class="w-full border-b border-red-300"></div>
    </div>

    <!-- 字母插槽或内容 -->
    <div class="relative z-10 flex items-center justify-center font-bold tracking-tight">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
defineProps({
  showLines: {
    type: Boolean,
    default: true
  }
})
</script>
