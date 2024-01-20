import { type DefaultTheme } from 'vitepress'

export const elementplusSideBar: () => DefaultTheme.SidebarItem[] = () => {
  return [
    {
      text: 'Element Plus',
      items: [{ text: '简介', link: 'intro' }],
    },
  ]
}
