<script lang="ts" setup>
import DefaultTheme from 'vitepress/theme'
import { useData } from 'vitepress'
import { nextTick, provide } from 'vue'
import PostList from './Posts.vue'
import Title from './Title.vue'
import Category from './Category.vue'
import CopyWright from './CopyRight.vue'
import Hero from './Hero.vue'

const { Layout } = DefaultTheme
const { isDark } = useData()

function enableTransitions() {
  return 'startViewTransition' in document
    && window.matchMedia('(prefers-reduced-motion: no-preference)').matches
}

provide('toggle-appearance', async ({ clientX: x, clientY: y }: MouseEvent) => {
  if (!enableTransitions()) {
    isDark.value = !isDark.value
    return
  }

  // @ts-expect-error
  await document.startViewTransition(async () => {
    isDark.value = !isDark.value
    await nextTick()
  }).ready

  document.documentElement.animate(
    {
      duration: 300,
      easing: 'ease-in',
      pseudoElement: `::view-transition-${isDark.value ? 'old' : 'new'}(root)`,
    },
  )
})
function back() {
  history.back()
}
</script>

<template>
  <Layout>
    <template #doc-before>
      <Title />
      <Category />
    </template>
    <template #doc-after>
      <div>
        <button @click="back">
          返回
        </button>
      </div>
    </template>
    <!-- Home slot -->
    <template #home-hero-before>
      <Hero />
    </template>
    <template #home-features-after>
      <PostList />
    </template>
    <!-- footer -->
    <template #layout-bottom>
      <CopyWright />
    </template>
  </Layout>
</template>

<style scoped lang="scss">
button {
  display: inline-block;
  position: relative;
  color: var(--vp-c-brand-dark);
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
  background-color: var(--vp-c-brand-dark);
  transform-origin: bottom right;
  transition: transform 0.25s ease-out;
}

.dark {
  button {
    color: var(--vp-c-brand-light);
  }

  button::after {
    background-color: var(--vp-c-brand-light);
  }
}

button:hover::after {
  transform: scaleX(1);
  transform-origin: bottom left;
}
</style>
