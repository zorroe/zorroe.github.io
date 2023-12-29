<template>
  <div class="flex w-full h-full justify-between">
    <div class="flex gap-4 pl-8 justify-start pt-4">
      <el-tooltip content="返回" placement="right" effect="dark">
        <img
          class="link"
          @click="$router.go(-1)"
          src="@/assets/svg/left.svg" />
      </el-tooltip>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

onMounted(() => {})
</script>

<style scoped></style>
