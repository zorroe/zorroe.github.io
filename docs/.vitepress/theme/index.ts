import DefaultTheme from 'vitepress/theme'
import type { App } from 'vue'
import './styles/index.scss'
import 'shiki-magic-move/style.css'
import { onMounted } from 'vue'
import dynamicBackground from './background'
import MyLayout from './components/MyLayout.vue'
import Tags from './components/Tags.vue'
import Archive from './components/Archive.vue'

export default {
  extends: DefaultTheme,
  Layout: MyLayout,
  async enhanceApp({ app }: { app: App }) {
    // 注册全局组件
    app.component('Tags', Tags)
    app.component('Archive', Archive)
  },
  setup() {
    onMounted(() => {
      dynamicBackground()
    })
  },
}
