import DefaultTheme from 'vitepress/theme'
import type { App } from 'vue'
import './styles/index.scss'
import { onMounted } from 'vue'
import dynamicBackground from './background'
import MyLayout from './components/MyLayout.vue'

export default {
  extends: DefaultTheme,
  Layout: MyLayout,
  async enhanceApp({ app }: { app: App }) {
    // 注册全局组件
  },
  setup() {
    onMounted(() => {
      dynamicBackground()
    })
  },
}
