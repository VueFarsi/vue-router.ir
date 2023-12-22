import type { MarkdownOptions } from 'vitepress'

const rControl = /[\u0000-\u001f]/g
const rSpecial = /[\s~`!@#$%^&*()\-_+=[\]{}|\\;:"'“”‘’<>,.?/]+/g
const rCombining = /[\u0300-\u036F]/g

/**
 * Default slugification function
 */
export const slugify = (str: string): string =>
  str
    .normalize('NFKD')
    // Remove accents
    .replace(rCombining, '')
    // Remove control characters
    .replace(rControl, '')
    // Replace special characters
    .replace(rSpecial, '-')
    // ensure it doesn't start with a number
    .replace(/^(\d)/, '_$1')

const config: MarkdownOptions = {
  theme: {
    dark: 'one-dark-pro',
    light: 'github-light',
  },

  attrs: {
    leftDelimiter: '%{',
    rightDelimiter: '}%',
  },

  anchor: {
    slugify,
  },
}

export default config
