<template>
  <el-button
    class="absolute top-4 left-16"
    :icon="ArrowLeft"
    @click="$router.back()"
    color="rgba(0, 0, 0, 0.3)" />
  <div
    class="page-wrapper"
    v-loading.fullscreen.lock="loading"
    element-loading-background="rgba(0, 0, 0, 0.3)">
    <el-scrollbar>
      <div class="blog-title">
      {{ blog?.title }}
    </div>
    <div class="blog-time">
      {{ blog?.updateTime }}
    </div>
    <div class="blog-content">
      {{ blog?.content }}
    </div>
    </el-scrollbar>
    
  </div>
</template>

<script setup lang="ts">
import { ArrowLeft } from '@element-plus/icons-vue'
import { queryById } from '@/api/blog'

const id = ref<any>()
const loading = ref(false)

const blog = ref<any>()

const loadBlog = async () => {
  loading.value = true
  const route = useRoute()
  id.value = route.params.id
  const params = {
    id: id.value,
  }
  const res = await queryById(params)
  blog.value = res.data
  loading.value = false
}

onMounted(() => {
  loadBlog()
})
</script>

<style scoped>
.page-wrapper {
  width: 50%;
  height: 100vh;
  min-width: 800px;
}
</style>
