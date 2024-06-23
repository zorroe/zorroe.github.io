import { defineConfig } from 'vitepress'
import { getPostLength, getPosts } from './theme/serverUtils'

// https://vitepress.dev/reference/site-config
export default async function () {
  return defineConfig({
    base: '/',
    lang: 'en-US',
    title: 'zorroe的博客',
    description: 'zorroe的博客',
    lastUpdated: true,
    ignoreDeadLinks: true,
    head: [
      ['link', { rel: 'icon', href: '/logo.svg' }],
      ['meta', { name: 'author', content: 'zorroe' }],
      ['meta', { property: 'og:title', content: 'zorroe' }],
      ['meta', { property: 'og:description', content: 'zorroe的博客' }],
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
      logo: '/logo.svg',
      // @ts-expect-error
      avatar: '/logo.svg',
      posts: await getPosts(),
      pageSize: 10,
      postLength: await getPostLength(),
      aside: false,
      nav: [
        { text: '🏡 首页', link: '/' },
        { text: '🔖 Tags', link: '/page/tags' },
        { text: '📃 Archive', link: '/page/archive' },
        { text: '🥗 真的是菜单', link: '/page/menu' },
      ],
      socialLinks: [
        { icon: 'github', link: 'https://github.com/zorroe/zorroe.github.io' },
      ],
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
              footer: {
                selectText: '选择',
                navigateText: '切换',
                closeText: '关闭',
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
}
