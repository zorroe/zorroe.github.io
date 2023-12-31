<template>
  <div class="w-full h-full overflow-y-hidden text-white text-opacity-70 flex justify-center app">
    <NuxtPage />
  </div>
</template>
<script lang="ts" setup></script>
<style>
@import url('~/assets/css/index.css');

.app {
  background: url('@/assets/background.png') rgba(0, 0, 0, .3) no-repeat;
  background-size: cover;
  background-blend-mode: multiply;
  min-width: 960px;
  min-height: 590px;
}
</style>
