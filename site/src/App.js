import React from 'react'
import {
  HashRouter as Router,
} from 'react-router-dom'
import HeaderContainer from '@/containers/Header'
import SidebarContainer from '@/containers/Sidebar'
import ContentContainer from '@/containers/Content'
import FooterContainer from '@/containers/Footer'
import {
  Container,
} from '~components'

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <HeaderContainer />
          <Container className="full-height p-t-70">
            <SidebarContainer />
            <ContentContainer />
          </Container>
          <FooterContainer />
        </div>
      </Router>
    )
  }
}

export default App
