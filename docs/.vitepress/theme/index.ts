
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './styles/vars.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {},
} satisfies Theme
