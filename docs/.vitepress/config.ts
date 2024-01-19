import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/',
  title: 'zorroe',
  description: "zorroe's space",
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: 'logo.svg',
    nav: [
      { text: '首页', link: '/' },
      { text: '案例', link: '/markdown-examples' },
    ],
    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' },
        ],
      },
    ],
    socialLinks: [{ icon: 'github', link: 'https://github.com/zorroe' }],
    search: {
      provider: 'local',
      options: {
        translations: {
              
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档',
          },
          modal: {
            noResultsText: '无法找到相关结果',
            resetButtonTitle: '清除查询条件',
            backButtonTitle: '返回',
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeText: '关闭'
            },
          },
        },
      },
    },
    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium',
      },
    },
    returnToTopLabel: '回到顶部',
    darkModeSwitchTitle: '切换到深色模式',
    lightModeSwitchTitle: '切换到浅色模式',
    docFooter: {
      prev: '上一页',
      next: '下一页',
    },
    outline: {
      label: '页面导航',
    },
    editLink: {
      pattern:
        'https://github.com/zorroe/zorroe.github.io/edit/main/docs/:path',
      text: '在Github上编辑此页',
    },
  },
})
