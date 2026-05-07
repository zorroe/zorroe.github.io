import { transformerTwoslash } from '@shikijs/vitepress-twoslash'
import { defineConfig } from 'vitepress'
import type { HeadConfig, PageData } from 'vitepress'
import { getPostLength, getPosts } from './theme/serverUtils.js'

const siteDescription = 'zorroe 的个人博客与知识库，记录编程实践、部署经验和日常思考。'

export default async function () {
  const posts = await getPosts()

  return defineConfig({
    base: '/',
    lang: 'zh-CN',
    title: 'GiGi空间',
    description: siteDescription,
    lastUpdated: true,
    ignoreDeadLinks: [
      './BACKEND-API',
      './INTEGRATION-GUIDE',
      './TECHNICAL-DESIGN',
      './DESIGN-PATTERNS',
      './USER-MANUAL',
      './../sql/halo-job-full.sql',
    ],
    head: [
      ['link', { rel: 'icon', href: '/logo.svg' }],
      ['meta', { name: 'author', content: 'zorroe' }],
      ['meta', { property: 'og:title', content: 'GiGi空间' }],
      ['meta', { property: 'og:description', content: siteDescription }],
      ['meta', { property: 'og:type', content: 'website' }],
      ['meta', { name: 'theme-color', content: '#ffa8a8' }],
    ],
    transformHead({ pageData }) {
      return getPostHead(pageData, posts)
    },
    vite: {
      build: {
        chunkSizeWarningLimit: 700,
        rollupOptions: {
          output: {
            manualChunks(id) {
              if (id.includes('@shikijs') || id.includes('shiki') || id.includes('twoslash')) {
                return 'vendor-code'
              }
              if (id.includes('node_modules/vitepress')) {
                return 'vendor-vitepress'
              }
            },
          },
        },
      },
    },
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
      avatar: '/logo.svg',
      posts,
      pageSize: 10,
      postLength: getPostLength(posts),
      aside: false,
      nav: [
        { text: '🏡 首页', link: '/' },
        { text: '🔖 标签', link: '/page/tags' },
        { text: '📃 归档', link: '/page/archive' },
        { text: '🥗 菜单', link: '/page/menu' },
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

function getPostHead(pageData: PageData, posts: PostInfo[]): HeadConfig[] {
  if (!pageData.relativePath.startsWith('posts/')) {
    return []
  }

  const regularPath = `/${pageData.relativePath.replace(/\.md$/u, '.html')}`
  const post = posts.find(item => item.regularPath === regularPath)
  const frontmatter = post?.frontMatter
  const title = frontmatter?.title || pageData.title || 'GiGi空间'
  const description = frontmatter?.description || siteDescription
  const head: HeadConfig[] = [
    ['meta', { property: 'og:title', content: `${title} | GiGi空间` }],
    ['meta', { property: 'og:description', content: description }],
    ['meta', { name: 'description', content: description }],
  ]

  if (frontmatter?.date) {
    head.push(['meta', { property: 'article:published_time', content: frontmatter.date }])
  }

  if (frontmatter?.cover) {
    head.push(['meta', { property: 'og:image', content: frontmatter.cover }])
  }

  return head
}
