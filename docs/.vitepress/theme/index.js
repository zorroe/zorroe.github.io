import DefaultTheme from "vitepress/theme"
import { onMounted } from "vue"
import mediumZoom from "medium-zoom"

import "./styles/vars.css"

export default {
  ...DefaultTheme,
  setup() {
    onMounted(() => {
        mediumZoom(".main img", { background: "var(--vp-c-bg)" })
    })
  },
}