import React from 'react'
import ReactDOM from 'react-dom'
import marked from 'marked'
import { transform } from 'babel-standalone'
import langs from '@/lang'
import { Icon } from '~components'

import Editor from '../Editor'

class Demo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showBlock: false,
      lang: 'zh-CN',
    }
    this.demoId = `${parseInt(Math.random() * 10000000, 10).toString(36)}`
    this.document = props.document.match(/([^]*)\n?(```[^]+```)/)

    this.description = marked(this.document[1])
    this.source = this.document[2].match(/```(.*)\n([^]+)```/)
  }

  componentWillMount() {
    const lang = localStorage.getItem('DAZE_LANGUAGE') || 'zh-CN'
    this.setState({ lang }, () => {
      localStorage.setItem('DAZE_LANGUAGE', this.state.lang)
    })
  }

  componentDidMount() {
    this.renderSource(this.source[2])
  }
  componentDidUpdate() {
    this.renderSource(this.source[2])
  }


  getLang(key) {
    const map = langs[this.state.lang] || {}
    return key.split('.').reduce((pre, next) => {
      const parent = map[pre]
      if (next) {
        return (parent || {})[next] || next
      }
      return parent || pre
    })
  }

  blockControl = () => {
    this.setState({
      showBlock: !this.state.showBlock,
    })
  }
  renderSource = (value) => {
    // ReactDOM.render(<div/>, document.getElementById(`${this.demoId}`))

    import('~components').then((components) => {
      const args = ['context', 'React', 'ReactDOM']
      const argv = [this, React, ReactDOM]

      for (const key in components) {
        if (Object.prototype.hasOwnProperty.call(components, key)) {
          args.push(key)
          argv.push(components[key])
        }
      }

      return {
        args,
        argv,
      }
    }).then(({ args, argv }) => {
      const { code } = transform(`
        class SourceDemo extends React.Component {
          ${value}
        }
        ReactDOM.render(<SourceDemo {...context.props} />, document.getElementById('${this.demoId}'))
      `, {
        presets: ['es2015', 'stage-0', 'react'],
      })
      args.push(code)
      /* eslint no-new-func: 0 */
      /* eslint prefer-spread: 0 */
      new Function(...args).apply(null, argv)
      this.source[2] = value
    }).catch((error) => {
      console.log(error)
    })
  }

  render() {
    return (
      <div className="demo-box">
        <div className="demo-source" id={this.demoId} />
        {
          this.description && <div className="demo-description" dangerouslySetInnerHTML={{ __html: this.description }} />
        }
        {
          this.state.showBlock && (
            <div className="demo-code">
              <Editor
                value={this.source[2]}
                onChange={code => this.renderSource(code)}
              />
            </div>
          )
        }
        <div className="demo-control" onClick={this.blockControl}>
          {
            this.state.showBlock ? (
              <span>
                <Icon name="angle-up" />{this.getLang('misc.hide')}
              </span>
            ) : (
              <span>
                <Icon name="angle-down" />{this.getLang('misc.show')}
              </span>
            )
          }
        </div>
      </div>
    )
  }
}

export default Demo
