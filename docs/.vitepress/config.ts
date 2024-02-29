import { defineConfig } from 'vitepress'
import { halomusicSideBar } from './sidebar/haloMusic'
import { elementplusSideBar } from './sidebar/elementPlus'
import { otherSideBar } from './sidebar/other'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/',
  lang: 'zh-Hans',
  title: 'zorroe',
  description: "zorroe's space",
  lastUpdated: true,
  ignoreDeadLinks: true,
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
    // ['link', { rel: 'icon', type: 'image/png', href: '/vitepress-logo-mini.png' }],
    ['meta', { name: 'theme-color', content: '#ffa8a8' }],
  ],
  markdown: {
    theme: { light: 'github-light', dark: 'github-dark' },
    image: {
      lazyLoading: true,
    },
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: 'logo.svg',
    nav: [
      { text: '首页', link: '/' },
      {
        text: '项目',
        items: [
          {
            text: 'HaloMusic',
            link: '/project/halomusic/intro',
            activeMatch: '/project/halomusic/',
          },
        ],
      },
      {
        text: '源码',
        items: [
          {
            text: 'ElementPlus源码',
            link: '/src/elementplus/intro',
            activeMatch: '/src/elementplus/',
          },
        ],
      },
      {
        text: '记',
        link: '/other/',
      },
    ],
    sidebar: {
      '/project/halomusic/': {
        base: '/project/halomusic/',
        items: halomusicSideBar(),
      },
      '/src/elementplus/': {
        base: '/src/elementplus/',
        items: elementplusSideBar(),
      },
      '/other/': {
        base: '/other/',
        items: otherSideBar(),
      },
    },
    socialLinks: [{ icon: 'github', link: 'https://github.com/zorroe' }],
    search: {
      provider: 'algolia',
      options: {
        appId: 'LPO1O504MN',
        apiKey: 'aa2cd3f7f4aebb27636846adffa11871',
        indexName: 'zorroeio',
        placeholder: '搜索文档',
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档',
          },
          modal: {
            searchBox: {
              resetButtonTitle: '清除查询条件',
              resetButtonAriaLabel: '清除查询条件',
              cancelButtonText: '取消',
              cancelButtonAriaLabel: '取消',
            },
            startScreen: {
              recentSearchesTitle: '搜索历史',
              noRecentSearchesText: '没有搜索历史',
              saveRecentSearchButtonTitle: '保存至搜索历史',
              removeRecentSearchButtonTitle: '从搜索历史中移除',
              favoriteSearchesTitle: '收藏',
              removeFavoriteSearchButtonTitle: '从收藏中移除',
            },
            errorScreen: {
              titleText: '无法获取结果',
              helpText: '你可能需要检查你的网络连接',
            },
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeText: '关闭',
              searchByText: '搜索提供者',
            },
            noResultsScreen: {
              noResultsText: '无法找到相关结果',
              suggestedQueryText: '你可以尝试查询',
              reportMissingResultsText: '你认为该查询应该有结果？',
              reportMissingResultsLinkText: '点击反馈',
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
    darkModeSwitchLabel: '外观',
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
