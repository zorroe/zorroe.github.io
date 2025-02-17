<script lang="ts" setup>
import { ref } from 'vue'
import { useData, withBase } from 'vitepress'
import dayjs from 'dayjs'

const { theme } = useData()

// get posts
let postsAll: PostInfo[] = theme.value.posts || []
console.log(postsAll)
postsAll = postsAll.filter(post => !post.frontMatter.hidden)
// get postLength
const postLength = postsAll.length
// get pageSize
const pageSize = theme.value.pageSize
console.log("pageSize: ", pageSize, "postLength: ", postLength)
//  pagesNum
let pagesNum = postLength % pageSize === 0 ? postLength / pageSize : postLength / pageSize + 1
pagesNum = Number.parseInt(pagesNum.toString())
// pageCurrent
const pageCurrent = ref(1)
// filter index PostInfo
postsAll = postsAll.filter((item: PostInfo) => {
  return !item.frontMatter.hidden
})
postsAll = postsAll.filter((item: PostInfo) => {
  return !item.regularPath.includes('index')
})
// pagination
const allMap: { [k: string]: PostInfo[] } = {}
for (let i = 0; i < pagesNum; i++) {
  allMap[i] = []
}
let index = 0
for (let i = 0; i < postsAll.length; i++) {
  if (allMap[index].length > pageSize - 1) {
    index += 1
  }
  allMap[index].push(postsAll[i])
}
// set posts
const posts = ref<PostInfo[]>([])
posts.value = allMap[pageCurrent.value - 1]

// click pagination
function go(i: number) {
  pageCurrent.value = i
  posts.value = allMap[pageCurrent.value - 1]
}
// timestamp transform
function transDate(date: string) {
  return dayjs(date).format('YYYY年MM月DD日')
  // return dayjs(date).format('YYYY-MM-DD')
}
</script>

<template>
  <div class="blogList my-8 flex flex-col items-center justify-center">
    <a v-for="(item, idx) in posts" :key="idx" class="blog flex flex-col md:flex-row md:items-center md:justify-between transition-all" :href="withBase(item.regularPath)">
      <div class="title text-xl font-bold md:max-w-[600px] md:overflow-hidden md:text-ellipsis md:whitespace-nowrap">
        {{ item.frontMatter.title }}
      </div>
      <div class="min-w-[130px]">{{ transDate(item.frontMatter.date) }}</div>
    </a>
  </div>
  <div class="pagination select-none">
    <button v-if="pageCurrent > 1" class="absolute left-0" @click="go(pageCurrent - 1)">
      上一页
    </button>
    <div v-if="pagesNum > 1">
      {{ `${pageCurrent}/${pagesNum}` }}
    </div>
    <button v-if="pageCurrent < pagesNum" class="absolute right-0" @click="go(pageCurrent + 1)">
      下一页
    </button>
  </div>
</template>

<style scoped lang="scss">
.blog {
  width: 85%;
  border-radius: 10px;
  padding: 14px 20px;
  margin: 10px;
  background: var(--vp-c-bg);
  max-width: 800px;
  box-shadow: 6px 6px var(--vp-c-brand);
  border: 4px solid #3f4e4f;
  cursor: pointer;
}
.blog:hover {
  text-decoration: none;
  transform: translate(-2px, -2px);
  box-shadow: 10px 10px var(--vp-c-brand);
}
.title {
  color: var(--vp-c-brand-dark);
}

.pagination {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 85%;
  max-width: 800px;
  margin: 0 auto;
  position: relative;
}

button {
  display: inline-block;
  color: var(--vp-c-color-d);
  cursor: pointer;
  font-size: 1.2em;
  font-weight: bold;
}

button::after {
  content: '';
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: var(--vp-c-color-d);
  transform-origin: bottom right;
  transition: transform 0.25s ease-out;
}
button:hover::after {
  transform: scaleX(1);
  transform-origin: bottom left;
}

.dark {
  .blog {
    box-shadow: 6px 6px var(--vp-c-brand-light);
    &:hover {
      box-shadow: 10px 10px var(--vp-c-brand-light);
    }
  }
  .title {
    color: var(--vp-c-brand-light);
  }
  button {
    color: var(--vp-c-brand-light);
    &::after {
      background-color: var(--vp-c-brand-light);
    }
  }
}
</style>
