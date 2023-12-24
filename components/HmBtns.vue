<template>
  <div class="flex gap-4 mt-4">
    <div class="button">首页</div>
    <NuxtLink to="/blog">
      <div class="button">博客</div>
    </NuxtLink>
    <div class="button">简历</div>
    <div class="button">关于</div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.button {
  @apply text-[rgba(255,255,255,0.8)] border-[rgba(255,255,255,0.8)] border-2 rounded-full px-6 py-1 flex justify-center items-center cursor-pointer hover:border-white hover:text-white hover:bg-[rgba(255,255,255,0.3)] transition-all duration-300;
}
</style>
