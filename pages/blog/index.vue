<template>
  <div class="flex w-full h-full justify-between">
    <div class="flex gap-4 pl-8 justify-start pt-4">
      <img
        class="link"
        @click="$router.push('/')"
        src="@/assets/svg/left.svg" />
    </div>
    <div
      class="page-wrapper"
      v-loading.fullscreen.lock="loading"
      element-loading-background="rgba(0, 0, 0, 0.3)">
      <el-scrollbar>
        <div
          class="flex flex-col justify-center page-content gap-4 py-4 px-6"
          id="ding">
          <div
            v-for="(blog, idx) in blogList"
            @click="$router.push(`/blog/${blog.id}`)"
            class="w-full h-20 bg-black bg-opacity-30 rounded-2xl px-4 flex items-center hover:scale-105 transition-all duration-300 cursor-pointer">
            <div
              class="text-3xl flex-1 overflow-hidden text-ellipsis whitespace-nowrap">
              {{ blog.title }}
            </div>
            <div>
              {{ blog.updateTime }}
            </div>
          </div>

          <div
            class="inline-flex items-center justify-center gap-3"
            v-show="blogList.length > 1">
            <el-button
              :icon="ArrowLeft"
              :disabled="pageNum === 1"
              @click="prevPage"
              color="rgba(0, 0, 0, 0.3)"
              circle />
            <p class="text-xs text-white-900">
              {{ pageNum }}
              <span class="mx-0.25">/</span>
              {{ totalPage }}
            </p>
            <el-button
              :icon="ArrowRight"
              :disabled="pageNum === totalPage"
              @click="nextPage"
              color="rgba(0, 0, 0, 0.3)"
              circle />
          </div>
        </div>
        <el-backtop
          target="#ding"
          :right="100"
          :bottom="100" />
      </el-scrollbar>
    </div>
    <div class="flex flex-col gap-4 pr-8 pt-4">
      <img
        v-show="searchKey.length > 0"
        class="link"
        @click="refresh"
        src="@/assets/svg/refresh.svg" />
      <img
        class="link"
        @click="openSearch"
        src="@/assets/svg/search.svg" />
      <img
        class="link"
        @click="$router.push('/addblog')"
        src="@/assets/svg/edit.svg" />
    </div>
  </div>
  <ClientOnly>
    <el-dialog
      style="background: rgba(0, 0, 0, 0); box-shadow: none"
      v-model="searchDialogVisible"
      width="30%"
      :show-close="false"
      :before-close="handleCloseSearch">
      <el-input
        ref="searchRef"
        v-model="searchKey"
        class="w-50 h-12"
        placeholder="搜索..."
        @input="handleInput"
        @keyup.enter.native="handleSearch"
        :suffix-icon="Search" />
    </el-dialog>
  </ClientOnly>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { listAll, listByKey } from '@/api/blog'
import { useLocalStorage } from '@vueuse/core'
import {
  ArrowLeft,
  ArrowRight,
  Edit,
  Search,
  Refresh,
} from '@element-plus/icons-vue'

const loading = ref(false)
const pageNum = useLocalStorage('pageNum', 1)
const totalPage = ref(1)
const blogList = ref<any[]>([])
const searchDialogVisible = ref(false)
const searchKey = ref('')
const searchRef = ref()

const list = async () => {
  loading.value = true
  const params = {
    pageNum: pageNum.value,
    pageSize: 10,
  }
  const res = await listAll(params)
  console.log(res)
  blogList.value = res.data.records
  pageNum.value = res.data.current
  totalPage.value = res.data.pages
  loading.value = false
}

const openSearch = () => {
  searchDialogVisible.value = true
  setTimeout(() => {
    searchRef.value.focus()
  }, 0)
}

const prevPage = () => {
  pageNum.value = pageNum.value - 1
  list()
}

const nextPage = () => {
  pageNum.value = pageNum.value + 1
  list()
}

const handleCloseSearch = () => {
  searchDialogVisible.value = false
}

const handleSearch = () => {
  let key = searchKey.value
  key = key.replace(/\s*/g, '')
  if (key.length === 0) {
    handleCloseSearch()
    list()
  } else {
    handleCloseSearch()
    searchByKey(key)
  }
}

const refresh = () => {
  searchKey.value = ''
  list()
}

const handleInput = () => {
  searchKey.value = searchKey.value.replace(/\s*/g, '')
}

const searchByKey = async (key: string) => {
  loading.value = true
  const params = {
    key,
  }
  try {
    const res = (await listByKey(params)) as any
    if (res.code === 200) {
      blogList.value = res.data
      ElMessage({
        message: `共搜索到${res.data.length}条数据`,
        type: 'success',
      })
      pageNum.value = 1
      totalPage.value = 1
    } else {
      ElMessage({
        message: res.message,
        type: 'error',
      })
    }
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  list()
})
</script>

<style scoped>
.el-dialog .el-dialog__body {
  display: none;
}
.el-dialog .el-dialog__header {
  display: none;
}
</style>
