<script lang="ts" setup>
import { useData, withBase } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { nextTick, provide } from 'vue'
import Category from './Category.vue'
import CopyWright from './CopyRight.vue'
import Hero from './Hero.vue'
import PostList from './Posts.vue'
import Title from './Title.vue'

const { Layout } = DefaultTheme
const { isDark } = useData()

interface ViewTransitionDocument extends Document {
  startViewTransition?: (callback: () => Promise<void> | void) => { ready: Promise<void> }
}

function enableTransitions() {
  return !!(document as ViewTransitionDocument).startViewTransition
    && window.matchMedia('(prefers-reduced-motion: no-preference)').matches
}

provide('toggle-appearance', async ({ clientX: x, clientY: y }: MouseEvent) => {
  if (!enableTransitions()) {
    isDark.value = !isDark.value
    return
  }

  const transition = (document as ViewTransitionDocument).startViewTransition?.(async () => {
    isDark.value = !isDark.value
    await nextTick()
  })

  await transition?.ready

  const radius = Math.hypot(
    Math.max(x, window.innerWidth - x),
    Math.max(y, window.innerHeight - y),
  )

  document.documentElement.animate(
    {
      clipPath: [
        `circle(0px at ${x}px ${y}px)`,
        `circle(${radius}px at ${x}px ${y}px)`,
      ],
    },
    {
      duration: 300,
      easing: 'ease-in',
      pseudoElement: `::view-transition-${isDark.value ? 'old' : 'new'}(root)`,
    },
  )
})
function back() {
  const isSameOriginReferrer = document.referrer
    ? new URL(document.referrer).origin === window.location.origin
    : false

  if (window.history.length > 1 && isSameOriginReferrer) {
    history.back()
    return
  }

  window.location.href = withBase('/')
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
        <button type="button" @click="back">
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
