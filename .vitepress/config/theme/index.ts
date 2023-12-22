import type { DefaultTheme } from 'vitepress'
import nav from './nav'
import sidebar from './sidebar'

const themeConfig: DefaultTheme.Config = {
  logo: '/logo.svg',
  outline: [2, 3],

  socialLinks: [
    { icon: 'x', link: 'https://twitter.com/posva' },
    {
      icon: 'github',
      link: 'https://github.com/VueFarsi/vue-router.ir',
    },
    {
      icon: 'discord',
      link: 'https://chat.vuejs.org',
    },
  ],

  footer: {
    copyright: 'Copyright © 2014-present Evan You, Eduardo San Martin Morote',
    message: 'Released under the MIT License.',
  },

  algolia: {
    appId: 'BTNTW3I1XP',
    apiKey: '771d10c8c5cc48f7922f15048b4d931c',
    indexName: 'next_router_vuejs',
  },

  carbonAds: {
    code: 'CEBICK3I',
    // custom: 'CEBICK3M',
    placement: 'routervuejsorg',
  },

  editLink: {
    pattern: 'https://github.com/vuejs/router/edit/main/packages/docs/:path',
    text: 'Suggest changes to this page',
  },
  nav,
  sidebar,
}

export default themeConfig
