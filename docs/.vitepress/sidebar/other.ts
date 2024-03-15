import { type DefaultTheme } from 'vitepress'

export const otherSideBar: () => DefaultTheme.SidebarItem[] = () => {
  return [
    {
      text: '记',
      items: [
        { text: 'MySQL同步数据到ES', link: 'mysql2es' },
        { text: '一些代码切片', link: 'codeSnippet'}
      ],
    },
  ]
}
