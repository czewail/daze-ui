import React from 'react'
import {
  Route,
} from 'react-router-dom'
import pages from '@/pages'
// import { Container } from '../../../../dist/index'

class Content extends React.Component {
  render() {
    const lang = localStorage.getItem('DAZE_LANGUAGE') || 'zh-CN'
    this.components = this.components ||
      Object.assign(Object.values(pages.components).reduce((prev, next) => {
        return Object.assign(prev, next)
      }, {}), pages.guides)

    return (
      <div className="inner-content full-height">
        {/* <Container>123</Container> */}
        {
          Object.keys(this.components).map((component, index) => {
            return <Route key={index} path={`/${lang}/${component}`} component={this.components[component]} />
          })
        }
      </div>
    )
  }
}

export default Content
