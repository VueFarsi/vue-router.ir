import type { HeadConfig } from 'vitepress'

const META_URL = 'https://vue-router.ir'
const META_TITLE = 'Vue Router'
const META_DESCRIPTION = 'The official Router for Vue.js'

const config: HeadConfig[] = [
  ['meta', { property: 'og:url', content: META_URL }],
  ['meta', { property: 'og:description', content: META_DESCRIPTION }],
  ['meta', { property: 'twitter:url', content: META_URL }],
  ['meta', { property: 'twitter:title', content: META_TITLE }],
  ['meta', { property: 'twitter:description', content: META_DESCRIPTION }],
  ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
  ['link', { rel: 'icon', type: 'image/png', href: '/logo.png' }],
  [
    'meta',
    { name: 'wwads-cn-verify', content: '7e7757b1e12abcb736ab9a754ffb617a' },
  ],
  [
    'meta',
    {
      property: 'og:type',
      content: 'website',
    },
  ],
  [
    'meta',
    {
      property: 'twitter:card',
      content: 'summary_large_image',
    },
  ],
  [
    'script',
    {
      src: 'https://cdn.usefathom.com/script.js',
      'data-site': 'RENJQDQI',
      'data-spa': 'auto',
      defer: '',
    },
  ],

  // Vue School Top banner
  [
    'script',
    {
      src: 'https://vueschool.io/banner.js?affiliate=vuerouter&type=top',
      // @ts-expect-error: vitepress bug
      async: true,
      type: 'text/javascript',
    },
  ],
]

export default config
