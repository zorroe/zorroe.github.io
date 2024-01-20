import { type DefaultTheme } from 'vitepress'

export const halomusicSideBar: () => DefaultTheme.SidebarItem[] = () => {
  return [
    {
      text: 'Halo Music',
      items: [
        { text: '简介', link: 'intro' },
        { text: '关于', link: 'about' },
      ],
    },
  ]
}
