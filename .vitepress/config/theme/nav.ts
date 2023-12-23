import type { DefaultTheme } from 'vitepress'

const config: DefaultTheme.NavItem[] = [
  {
    text: 'راهنما',
    link: '/guide/',
    activeMatch: '^/guide/',
  },
  { text: '(API) میانجی‌های برنامه نویسی', link: '/api/', activeMatch: '^/api/' },
  {
    text: 'v4.x',
    items: [{ text: 'v3.x', link: 'https://v3.router.vuejs.org' }],
  },
  {
    text: 'پیوند‌ها',
    items: [
      {
        text: 'بحث‌ها (Discussions)',
        link: 'https://github.com/vuejs/router/discussions',
      },
      {
        text: 'تغییرات (changelog)',
        link: 'https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md',
      },
      {
        text: 'گواهی‌نامه Vue.js',
        link: 'https://certification.vuejs.org/?friend=VUEROUTER',
      },
    ],
  },
]

export default config
