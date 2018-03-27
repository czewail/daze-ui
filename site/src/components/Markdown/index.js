import React from 'react'
import ReactDOM from 'react-dom'
import marked from 'marked'
import prism from 'prismjs'

import Demo from '@/components/Markdown/demo'

class Markdown extends React.Component {
  constructor(props) {
    super(props)

    this.components = new Map()
    this.renderer = new marked.Renderer()
    this.renderer.table = (header, body) => {
      return `<table class="grid"><thead>${header}</thead><tbody>${body}</tbody></table>`
    }
  }

  componentDidMount() {
    this.renderDOM()
    prism.highlightAll()
  }
  //
  componentDidUpdate() {
    this.renderDOM()
    prism.highlightAll()
  }

  renderDOM() {
    for (const [id, component] of this.components) {
      const div = document.getElementById(id)

      if (div instanceof HTMLElement) {
        ReactDOM.render(component, div)
      }
    }
  }

  render() {
    const lang = localStorage.getItem('DAZE_LANGUAGE') || 'zh-CN'
    const markdown = this.markdown(lang)
    this.components.clear()
    const markdownResult = markdown.replace(/:::\s?demo\s?([^]+?):::/g, (match, d1, offset) => {
      // 生成不重复的id
      const id = offset.toString(36)
      //
      this.components.set(id, React.createElement(Demo, Object.assign({
        document: d1,
      }, this.props)))
      return `<div id=${id}></div>`
    })

    const html = marked(markdownResult, { renderer: this.renderer })

    return (
      <div dangerouslySetInnerHTML={{
          __html: html,
        }}
      />
    )
  }
}

export default Markdown
