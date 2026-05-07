import 'vitepress'

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
