<template>
  <div class="flex w-full h-full justify-between">
    <Aside :data="leftIcon"> </Aside>
    <div
      class="page-wrapper py-4"
      v-loading.fullscreen.lock="loading"
      element-loading-background="rgba(0, 0, 0, 0.3)">
      <el-scrollbar>
        <div class="text-4xl font-bold">
          {{ blog?.title }}
        </div>
        <div class="mt-4">
          {{ updateTime }}
        </div>
        <div class="mt-4 text-lg">
          {{ blog?.content }}
        </div>
      </el-scrollbar>
    </div>
    <Aside :data="[]"> </Aside>
  </div>
</template>

<script setup lang="ts">
import { queryById } from '@/api/blog'
import dayjs from 'dayjs'

const router = useRouter()

const leftIcon = [
  {
    tooltip: '返回',
    placement: 'right',
    fun: () => router.go(-1),
    icon: '/svg/left.svg',
  },
]

const id = ref<any>()
const loading = ref(false)

const blog = ref<any>()

const updateTime = computed(() => {
  if (blog.value?.update_time) {
    return dayjs(blog.value?.update_time).format('YYYY-MM-DD HH:mm:ss')
  }
  return ''
})

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

<style scoped></style>
