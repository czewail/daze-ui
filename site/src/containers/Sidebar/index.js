import React from 'react'
import {
  NavLink,
} from 'react-router-dom'

import langs from '@/lang'
import pages from '@/pages'

class SidebarContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      lang: 'zh-CN',
    }
  }

  componentWillMount() {
    const lang = localStorage.getItem('DAZE_LANGUAGE') || 'zh-CN'
    this.setState({ lang }, () => {
      localStorage.setItem('DAZE_LANGUAGE', this.state.lang)
    })
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

  render() {
    return (
      <div className="secondary-sidebar">
        <div className="sidebar">
          <ul className="navbar">
            <li>
              <h5>{this.getLang('menus.guides')}</h5>
              <ul className="navbar">
                {
                  Object.keys(pages.guides).map((page, index) => {
                    return (
                      <li key={index}>
                        <NavLink activeClassName="navbar-selected" to={`/${this.state.lang}/${page}`}>{this.getLang(`menus.${page}`)}</NavLink>
                      </li>
                    )
                  })
                }
              </ul>
            </li>
            <li>
              <h5>{this.getLang('menus.components')}</h5>
              {
                Object.keys(pages.components).map((group, index) => {
                  return (
                    <div className="navbar-group" key={index}>
                      <h6>{this.getLang(`menus.${group}`)}</h6>
                      <ul className="navbar">
                        {
                          Object.keys(pages.components[group]).map((page, key) => {
                            return (
                              <li key={key}>
                                <NavLink activeClassName="navbar-selected" to={`/${this.state.lang}/${page}`}>{this.getLang(`menus.${page}`)}</NavLink>
                              </li>
                            )
                          })
                        }
                      </ul>
                    </div>
                  )
                })
              }
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default SidebarContainer
