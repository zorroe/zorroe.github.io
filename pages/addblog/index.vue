<template>
  <span class="flex-1 flex gap-4 pl-4 justify-start mt-2">
    <el-button
      @click="$router.go(-1)"
      :icon="ArrowLeft"
      color="rgba(0, 0, 0, 0.3)" />
  </span>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { ArrowLeft } from '@element-plus/icons-vue'

onMounted(() => {})
</script>

<style scoped>
</style>
