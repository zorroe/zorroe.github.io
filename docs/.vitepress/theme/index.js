import Theme from 'vitepress/theme'
import MyLayout from './components/MyLayout.vue'
import './styles/vars.css'

export default {
  extends: Theme,
  Layout: MyLayout,
  enhanceApp({ app }) {
  },
}
