<script lang="ts" setup>
import dayjs from 'dayjs'
import { useData, withBase } from 'vitepress'
import { computed, ref, watch } from 'vue'

const { theme } = useData()

const pageCurrent = ref(1)
const postsAll = computed<PostInfo[]>(() => theme.value.posts || [])
const pageSize = computed(() => Math.max(Number(theme.value.pageSize) || 10, 1))
const pagesNum = computed(() => Math.max(Math.ceil(postsAll.value.length / pageSize.value), 1))
const posts = computed(() => {
  const start = (pageCurrent.value - 1) * pageSize.value

  return postsAll.value.slice(start, start + pageSize.value)
})

watch(pagesNum, (total) => {
  if (pageCurrent.value > total) {
    pageCurrent.value = total
  }
})

function go(page: number) {
  pageCurrent.value = Math.min(Math.max(page, 1), pagesNum.value)
}

function transDate(date: string) {
  return dayjs(date).format('YYYY年MM月DD日')
}
</script>

<template>
  <div class="blogList my-8 flex flex-col items-center justify-center">
    <p v-if="posts.length === 0" class="empty">
      暂无文章
    </p>
    <a v-for="item in posts" :key="item.regularPath" class="blog flex flex-col md:flex-row md:items-center md:justify-between transition-all" :href="withBase(item.regularPath)">
      <div class="content">
        <div class="title text-xl font-bold md:max-w-[600px] md:overflow-hidden md:text-ellipsis md:whitespace-nowrap">
          {{ item.frontMatter.title }}
        </div>
        <p v-if="item.frontMatter.description" class="description">
          {{ item.frontMatter.description }}
        </p>
      </div>
      <div class="date min-w-[130px]">{{ transDate(item.frontMatter.date) }}</div>
    </a>
  </div>
  <nav v-if="postsAll.length > pageSize" class="pagination select-none" aria-label="文章分页">
    <button v-if="pageCurrent > 1" class="absolute left-0" type="button" aria-label="上一页文章" @click="go(pageCurrent - 1)">
      上一页
    </button>
    <div>
      {{ `${pageCurrent}/${pagesNum}` }}
    </div>
    <button v-if="pageCurrent < pagesNum" class="absolute right-0" type="button" aria-label="下一页文章" @click="go(pageCurrent + 1)">
      下一页
    </button>
  </nav>
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
.content {
  min-width: 0;
}
.title {
  color: var(--vp-c-brand-dark);
}
.description {
  margin-top: 6px;
  color: var(--vp-c-text-2);
  line-height: 1.6;
}
.date {
  color: var(--vp-c-text-2);
}

.empty {
  color: var(--vp-c-text-2);
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
