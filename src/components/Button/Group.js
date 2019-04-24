/**
 * Copyright (c) 2018-present, Chan Zewail
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * Component
 * Button.Group
 */

import React, { Component } from 'react'
import classNames from 'classnames'
import { cssPrefix } from '../../constants/config'

const prefix = `${cssPrefix}btn-group`

function getSizeClassName(size) {
  switch (size) {
    case 'large':
      return `${prefix}-lg`
    case 'small':
      return `${prefix}-sm`
    case 'tiny':
      return `${prefix}-xs`
    default:
      return ''
  }
}

export default class ButtonGroup extends Component {
  static defaultProps = {
    size: 'default',
  }
  render() {
    const { className, size, ...restProps } = this.props
    const sizeCls = getSizeClassName(size)
    const buttonGroupClassNames = classNames(prefix, {
      [`${sizeCls}`]: sizeCls,
    }, className)
    return (
      <div className={buttonGroupClassNames} {...restProps}>
        {this.props.children}
      </div>
    )
  }
}

