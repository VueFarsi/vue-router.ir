import { defineConfig } from 'vitepress'
import locales from './locales'
import head from './head'
import markdown from './markdown'
import themeConfig from './theme'

export default defineConfig({
  srcDir: 'src',
  outDir: 'dist',

  title: 'Vue Router',
  description: 'The official Router for Vue.js',
  appearance: 'dark',
  markdown,
  head,
  themeConfig,
  locales,
})
