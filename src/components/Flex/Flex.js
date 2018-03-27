import React, { Component } from 'react'
import classNames from 'classnames'
import './style/index'
import { cssPrefix } from '../../constants/config'

const prefix = `${cssPrefix}flex`

export default class Flex extends Component {
  render() {
    return (
      <div className={classNames(prefix)}>
        {/**/}
      </div>
    )
  }
}
