import { type DefaultTheme } from 'vitepress'

export const halomusicSideBar: () => DefaultTheme.SidebarItem[] = () => {
  return [
    {
      text: 'Halo Music',
      items: [
        { text: '简介', link: 'intro' },
        { text: '更新日志', link: 'change' },
        { text: 'playerStore', link: 'playerStore' },
      ],
    },
  ]
}
