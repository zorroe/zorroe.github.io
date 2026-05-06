import DefaultTheme from 'vitepress/theme'
import { onContentUpdated, useData } from 'vitepress'
import type { App } from 'vue'
import './styles/index.scss'
import 'shiki-magic-move/style.css'
import '@shikijs/vitepress-twoslash/style.css'
import { nextTick, onMounted, watch } from 'vue'
import TwoslashFloatingVue from '@shikijs/vitepress-twoslash/client'
import dynamicBackground from './background'
import { renderMermaidDiagrams } from './mermaid'
import MyLayout from './components/MyLayout.vue'
import Tags from './components/Tags.vue'
import Archive from './components/Archive.vue'

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
