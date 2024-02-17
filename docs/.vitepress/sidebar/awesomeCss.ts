import { type DefaultTheme } from 'vitepress'

export const awesomeCssSideBar: () => DefaultTheme.SidebarItem[] = () => {
  return [
    {
      text: '神奇css',
      items: [
        { text: '简介', link: 'intro' },
        {
          text: '左边框的多种实现方式',
          link: 'css001',
        },
      ],
    },
  ]
}
