import type { DefaultTheme } from 'vitepress'

const config: DefaultTheme.NavItem[] = [
  {
    text: 'Guide',
    link: '/guide/',
    activeMatch: '^/guide/',
  },
  { text: 'API', link: '/api/', activeMatch: '^/api/' },
  {
    text: 'v4.x',
    items: [{ text: 'v3.x', link: 'https://v3.router.vuejs.org' }],
  },
  {
    text: 'Links',
    items: [
      {
        text: 'Discussions',
        link: 'https://github.com/vuejs/router/discussions',
      },
      {
        text: 'Changelog',
        link: 'https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md',
      },
      {
        text: 'Vue.js Certification',
        link: 'https://certification.vuejs.org/?friend=VUEROUTER',
      },
    ],
  },
]

export default config
