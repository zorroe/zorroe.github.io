import type { App } from 'vue'
import TwoslashFloatingVue from '@shikijs/vitepress-twoslash/client'
import { onContentUpdated, useData } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { nextTick, onMounted, watch } from 'vue'
import dynamicBackground from './background'
import Archive from './components/Archive.vue'
import MyLayout from './components/MyLayout.vue'
import Tags from './components/Tags.vue'
import { renderMermaidDiagrams } from './mermaid'
import '@shikijs/vitepress-twoslash/style.css'
import './styles/index.scss'

export default {
  extends: DefaultTheme,
  Layout: MyLayout,
  async enhanceApp({ app }: { app: App }) {
    app.use(TwoslashFloatingVue)
    // 注册全局组件
    app.component('Tags', Tags)
    app.component('Archive', Archive)
  },
  setup() {
    const { isDark } = useData()

    const updateMermaid = async () => {
      await nextTick()
      await renderMermaidDiagrams(isDark.value)
    }

    onMounted(() => {
      dynamicBackground()
      void updateMermaid()
    })
    onContentUpdated(() => {
      void updateMermaid()
    })
    watch(isDark, () => {
      void updateMermaid()
    })
  },
}
