<template>
  <div class="flex w-full h-full justify-between">
    <div class="flex gap-4 pl-8 justify-start pt-4">
      <img
        class="link"
        @click="$router.go(-1)"
        src="@/assets/svg/left.svg" />
    </div>
    <div
      class="page-wrapper py-4"
      v-loading.fullscreen.lock="loading"
      element-loading-background="rgba(0, 0, 0, 0.3)">
      <el-scrollbar>
        <div class="text-4xl font-bold">
          {{ blog?.title }}
        </div>
        <div class="mt-4">
          {{ dayjs(blog?.update_time).format('YYYY-MM-DD HH:mm:ss') }}
        </div>
        <div class="mt-4 text-lg">
          {{ blog?.content }}
        </div>
      </el-scrollbar>
    </div>
    <div class="flex flex-col gap-4 pr-8 pt-4">
      <img
        class="link"
        @click="handleEdit"
        src="@/assets/svg/edit.svg" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ArrowLeft, Edit } from '@element-plus/icons-vue'
import { queryById } from '@/api/blog'
import dayjs from 'dayjs'

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

const handleEdit = () => {
  console.log('handleEdit')
}

onMounted(() => {
  loadBlog()
})
</script>

<style scoped></style>
