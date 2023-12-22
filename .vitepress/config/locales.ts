import type { DefaultTheme, LocaleConfig } from 'vitepress'

const config: LocaleConfig<DefaultTheme.Config> = {
  root: {
    label: 'فارسی',
    lang: 'fa-IR',
    link: '/',
  },
  en: {
    label: 'English',
    lang: 'en-US',
    link: 'https://router.vuejs.org',
  },
  zh: {
    label: '简体中文',
    lang: 'zh-CN',
    link: 'https://router.vuejs.org/zh',
  },
  ko: { label: '한국어', lang: 'ko-KR', link: 'https://router.vuejs.kr' },
  pt: {
    label: 'Português',
    lang: 'pt-PT',
    link: 'https://vue-router-docs-pt.netlify.app',
  },
  ru: {
    label: 'Русский',
    lang: 'ru-RU',
    link: 'https://vue-router-ru.netlify.app',
  },
}

export default config
