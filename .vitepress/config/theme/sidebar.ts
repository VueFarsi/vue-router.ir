import type { DefaultTheme } from 'vitepress'

const config: DefaultTheme.Sidebar = {
  // catch-all fallback
  '/': [
    {
      text: 'Setup',
      items: [
        {
          text: 'Introduction',
          link: '/introduction.html',
        },
        {
          text: 'Installation',
          link: '/installation.html',
        },
      ],
    },
    {
      text: 'Essentials',
      items: [
        {
          text: 'Getting Started',
          link: '/guide/',
        },
        {
          text: 'Dynamic Route Matching',
          link: '/guide/essentials/dynamic-matching.html',
        },
        {
          text: "Routes' Matching Syntax",
          link: '/guide/essentials/route-matching-syntax.html',
        },
        {
          text: 'Nested Routes',
          link: '/guide/essentials/nested-routes.html',
        },
        {
          text: 'Programmatic Navigation',
          link: '/guide/essentials/navigation.html',
        },
        {
          text: 'Named Routes',
          link: '/guide/essentials/named-routes.html',
        },
        {
          text: 'Named Views',
          link: '/guide/essentials/named-views.html',
        },
        {
          text: 'Redirect and Alias',
          link: '/guide/essentials/redirect-and-alias.html',
        },
        {
          text: 'Passing Props to Route Components',
          link: '/guide/essentials/passing-props.html',
        },
        {
          text: 'Different History modes',
          link: '/guide/essentials/history-mode.html',
        },
      ],
    },
    {
      text: 'Advanced',
      items: [
        {
          text: 'Navigation guards',
          link: '/guide/advanced/navigation-guards.html',
        },
        {
          text: 'Route Meta Fields',
          link: '/guide/advanced/meta.html',
        },
        {
          text: 'Data Fetching',
          link: '/guide/advanced/data-fetching.html',
        },
        {
          text: 'Composition API',
          link: '/guide/advanced/composition-api.html',
        },
        {
          text: 'RouterView slot',
          link: '/guide/advanced/router-view-slot.html',
        },
        {
          text: 'Transitions',
          link: '/guide/advanced/transitions.html',
        },
        {
          text: 'Scroll Behavior',
          link: '/guide/advanced/scroll-behavior.html',
        },
        {
          text: 'Lazy Loading Routes',
          link: '/guide/advanced/lazy-loading.html',
        },
        {
          text: 'Typed Routes',
          link: '/guide/advanced/typed-routes.html',
        },
        {
          text: 'Extending RouterLink',
          link: '/guide/advanced/extending-router-link.html',
        },
        {
          text: 'Navigation Failures',
          link: '/guide/advanced/navigation-failures.html',
        },
        {
          text: 'Dynamic Routing',
          link: '/guide/advanced/dynamic-routing.html',
        },
      ],
    },
    {
      items: [
        {
          text: 'Migrating from Vue 2',
          link: '/guide/migration/index.html',
        },
      ],
    },
  ],

  '/api/': [
    {
      text: 'packages',
      items: [{ text: 'vue-router', link: '/api/' }],
    },
  ],
}

export default config
