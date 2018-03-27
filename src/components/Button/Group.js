// @flow

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
import type { Node, Element } from 'react'
import classNames from 'classnames'
import { cssPrefix } from '../../constants/config'

const prefix = `${cssPrefix}btn-group`

function getSizeClassName(size: string): string {
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

type PropsType = {
  children?: Element<any>,
  size: 'large' | 'default' | 'small' | 'tiny',
  className?: string
};

export default class ButtonGroup extends Component<PropsType> {
  static defaultProps = {
    size: 'default',
  }
  render(): Node {
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

