import { type DefaultTheme } from 'vitepress'

export const awesomeCssSideBar: () => DefaultTheme.SidebarItem[] = () => {
  return [
    {
      text: '神奇css',
      items: [{ text: '简介', link: 'intro' }],
    },
  ]
}
