import type { DefaultTheme } from 'vitepress'

const config: DefaultTheme.Sidebar = {
  // catch-all fallback
  '/': [
    {
      text: 'آغاز',
      items: [
        {
          text: 'معرفی',
          link: '/introduction.html',
        },
        {
          text: 'نصب و راه‌اندازی',
          link: '/installation.html',
        },
      ],
    },
    {
      text: 'الزامات',
      items: [
        {
          text: 'شروع شدن',
          link: '/guide/',
        },
        {
          text: 'تطبیق مسیر به صورت پویا',
          link: '/guide/essentials/dynamic-matching.html',
        },
        {
          text: "نحو تطبیق مسیرها",
          link: '/guide/essentials/route-matching-syntax.html',
        },
        {
          text: 'مسیرهای تو در تو',
          link: '/guide/essentials/nested-routes.html',
        },
        {
          text: 'مسیریابی به صورت برنامه‌ای',
          link: '/guide/essentials/navigation.html',
        },
        {
          text: 'مسیرهای نام‌گذاری‌شده',
          link: '/guide/essentials/named-routes.html',
        },
        {
          text: 'View های نام‌گذاری‌شده',
          link: '/guide/essentials/named-views.html',
        },
        {
          text: 'ریدایرکت و الیاس',
          link: '/guide/essentials/redirect-and-alias.html',
        },
        {
          text: 'ارسال پراپ‌ها به کامپوننت مسیرها',
          link: '/guide/essentials/passing-props.html',
        },
        {
          text: 'حالت‌های متفاوت هیستوری',
          link: '/guide/essentials/history-mode.html',
        },
      ],
    },
    {
      text: 'پیشرفته',
      items: [
        {
          text: 'گاردهای مسیریابی',
          link: '/guide/advanced/navigation-guards.html',
        },
        {
          text: 'فیلدهای متا',
          link: '/guide/advanced/meta.html',
        },
        {
          text: 'واکشی داده (Data Fetching)',
          link: '/guide/advanced/data-fetching.html',
        },
        {
          text: 'Composition API',
          link: '/guide/advanced/composition-api.html',
        },
        {
          text: 'RouterView اسلات',
          link: '/guide/advanced/router-view-slot.html',
        },
        {
          text: 'ترنزیشن‌ها',
          link: '/guide/advanced/transitions.html',
        },
        {
          text: 'رفتار اسکرول',
          link: '/guide/advanced/scroll-behavior.html',
        },
        {
          text: 'مسیرهای تنبل(Lazy Loading)',
          link: '/guide/advanced/lazy-loading.html',
        },
        {
          text: 'مسیرهای تایپ‌گذاری‌شده',
          link: '/guide/advanced/typed-routes.html',
        },
        {
          text: 'گسترش RouterLink',
          link: '/guide/advanced/extending-router-link.html',
        },
        {
          text: 'خطاهای مسیریابی',
          link: '/guide/advanced/navigation-failures.html',
        },
        {
          text: 'مسیریابی پویا',
          link: '/guide/advanced/dynamic-routing.html',
        },
      ],
    },
    {
      items: [
        {
          text: 'مهاجرت از Vue 2',
          link: '/guide/migration/index.html',
        },
      ],
    },
  ],

  '/api/': [
    {
      text: 'پکیج‌ها',
      items: [{ text: 'vue-router', link: '/api/' }],
    },
  ],
}

export default config
