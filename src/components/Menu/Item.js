// @flow

/**
 * Copyright (c) 2018-present, Chan Zewail
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * Component
 * Menu.Item
 */

import React, { Component } from 'react'
import type { Node, Element } from 'react'
import classNames from 'classnames'
import { cssPrefix } from '../../constants/config'

/** @type {string} 组件样式前缀 */
const prefix = `${cssPrefix}menu-item`

type PropsType = {
  children?: Element<any>,
  className?: string,
  style?: Object
};

export default class Item extends Component<PropsType> {
  render(): Node {
    const { children, className, style, ...restProps } = this.props
    return (
      <li
        className={classNames(prefix, className)}
        style={{
          ...style,
        }}
        {...restProps}
      >
        {children}
      </li>
    )
  }
}
