import Markdown from '@/components/Markdown'
import icons from './icons'

export default class Icon extends Markdown {
  markdown = (lang) => {
    /* eslint import/no-dynamic-require: 0 */
    return require(`@/docs/${lang}/icon.md`)
  }
}


Icon.defaultProps = {
  icons,
}

