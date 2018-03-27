import React, { Component } from 'react'
import CodeMirror from 'codemirror'

import 'codemirror/mode/jsx/jsx'
import 'codemirror/keymap/sublime'
import 'codemirror/addon/comment/comment'

import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/monokai.css'

import './style.less'

export default class Editor extends Component {
  componentDidMount() {
    const { onChange, value } = this.props

    this.cm = CodeMirror(this.editor, {
      mode: 'jsx',
      theme: 'monokai',
      keyMap: 'sublime',
      viewportMargin: Infinity,
      lineNumbers: true,
      dragDrop: false,
    })

    this.cm.setValue(value)

    this.cm.on('changes', (cm) => {
      if (onChange) {
        clearTimeout(this.timeout)

        this.timeout = setTimeout(() => {
          onChange(cm.getValue())
        }, 300)
      }
    })
  }

  render() {
    return <div className="editor" ref={(ref) => { this.editor = ref }} />
  }
}
