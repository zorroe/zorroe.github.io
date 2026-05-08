<script lang="ts" setup>
import type { PageData } from 'vitepress'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import { onContentUpdated, useData } from 'vitepress'
import { ref } from 'vue'
import 'dayjs/locale/zh-cn'

dayjs.extend(relativeTime)
dayjs.locale('zh-cn')

const pageData: PageData = useData().page.value
const publishDate = ref('')
const description = ref('')
onContentUpdated(() => {
  const { frontmatter } = pageData
  publishDate.value = dayjs(frontmatter.date || Date.now()).format('YYYY年MM月DD日')
  description.value = typeof frontmatter.description === 'string' ? frontmatter.description : ''
})
</script>

<template>
  <h1 class="title">
    {{ pageData.title }}
  </h1>
  <p v-if="description" class="description">
    {{ description }}
  </p>
  <div class="date">
    🕒 发布于 {{ publishDate }}
  </div>
</template>

  <style scoped>
  .title {
  color: var(--vp-c-text-1);
  font-weight: 600;
  font-size: 2.25em;
  margin-top: 0.3em;
  margin-bottom: 0.3em;
  line-height: 1.3;
  font-family:
    Dosis,
    ui-sans-serif,
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    'Noto Sans',
    sans-serif,
    'Apple Color Emoji',
    'Segoe UI Emoji',
    'Segoe UI Symbol',
    'Noto Color Emoji';
}
.dark .title {
  color: var(--vp-c-brand-lighter);
}
.description {
  margin: 0 0 0.75rem;
  color: var(--vp-c-text-2);
  line-height: 1.7;
}
.date {
  font-size: 0.875rem;
  line-height: 1.25rem;
  margin-bottom: 1em;
  padding-bottom: 1em;
  border-bottom: 1px dashed #c7c7c7;
}
</style>
