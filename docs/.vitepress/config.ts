import { defineConfig } from 'vitepress'
import { transformerTwoslash } from '@shikijs/vitepress-twoslash'
import { getPostLength, getPosts } from './theme/serverUtils.js'

export default async function () {
  return defineConfig({
    base: '/',
    lang: 'en-US',
    title: 'zorroe',
    description: 'zorroe',
    lastUpdated: true,
    ignoreDeadLinks: true,
    head: [
      ['link', { rel: 'icon', href: '/logo.svg' }],
      ['meta', { name: 'author', content: 'zorroe' }],
      ['meta', { property: 'og:title', content: 'zorroe' }],
      ['meta', { property: 'og:description', content: 'zorroe' }],
      ['meta', { name: 'theme-color', content: '#ffa8a8' }],
    ],
    markdown: {
      theme: {
        light: 'vitesse-light',
        dark: 'vitesse-dark',
      },
      config(md) {
        const defaultFenceRenderer = md.renderer.rules.fence
        md.renderer.rules.fence = (tokens, idx, options, env, self) => {
          const token = tokens[idx]
          const info = token.info.trim().split(/\s+/u)[0]

          if (info === 'mermaid') {
            const source = token.content.trim()
            const encodedSource = md.utils
              .escapeHtml(source)
              .replace(/\r?\n/gu, '&#10;')

            return `<div class="mermaid-wrapper"><div class="mermaid" data-mermaid-source="${encodedSource}">${source}</div></div>`
          }

          return defaultFenceRenderer
            ? defaultFenceRenderer(tokens, idx, options, env, self)
            : self.renderToken(tokens, idx, options)
        }
      },
      image: {
        lazyLoading: true,
      },
      codeTransformers: [
        transformerTwoslash(),
      ],
      codeCopyButtonTitle: '复制',
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
