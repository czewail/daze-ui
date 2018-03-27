import Markdown from '@/components/Markdown'

export default class QuickStart extends Markdown {
  markdown = (lang) => {
    /* eslint import/no-dynamic-require: 0 */
    return require(`@/docs/${lang}/quick-start.md`)
  }
}
