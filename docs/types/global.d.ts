import 'vitepress'
import type { DefineComponent } from 'vue'

declare module '*.vue' {
  const component: DefineComponent<Record<string, never>, Record<string, never>, unknown>
  export default component
}

declare module 'vitepress' {
  namespace DefaultTheme {
    interface Config {
      avatar?: string
      posts?: PostInfo[]
      pageSize?: number
      postLength?: number
    }
  }
}
