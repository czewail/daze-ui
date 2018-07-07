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
import Icon from '../Icon'
import { cssPrefix } from '../../constants/config'

/** @type {string} 组件样式前缀 */
const prefix = `${cssPrefix}menu-item`

/**
 * Props
 * @property {Element} children 子节点
 * @property {String} className 样式名
 * @property {Object} style 内联样式
 */
type PropsType = {
  children?: Element<any>,
  className?: string,
  style?: Object,
  icon?: Element<any> | string
};

export default class Item extends Component<PropsType> {
  render(): Node {
    const { children, className, style, icon, ...restProps } = this.props
    return (
      <li
        className={classNames(prefix, className)}
        style={{
          ...style,
        }}
        {...restProps}
      >
        <span className={`${prefix}-title`}>
          {
            icon ?
            (
              <span className={`${prefix}-title-icon`}>
                {
                  Object.prototype.toString.call(icon) === '[object String]' ?
                    <Icon name={icon} /> :
                    icon
                }
              </span>
            ) :
            null
          }
          {children}
        </span>
      </li>
    )
  }
}
