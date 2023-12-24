<template>
  <NuxtLink to="/blog">
    <el-button
      class="absolute top-4 left-16"
      :icon="ArrowLeft"
      color="rgba(0, 0, 0, 0.3)" />
  </NuxtLink>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { ArrowLeft } from '@element-plus/icons-vue'

onMounted(() => {})
</script>

<style scoped>
.page-wrapper {
  width: 50%;
  height: 100vh;
  min-width: 800px;
}
</style>
