// @flow

/**
 * Copyright (c) 2018-present, Chan Zewail
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * Component
 * View
 */

import React, { Component } from 'react'
import type { Node, Element } from 'react'
import classNames from 'classnames'
import { cssPrefix } from '../../constants/config'

/** @type {string} 组件样式前缀 */
const prefix: string = `${cssPrefix}`

type PropsType = {
  children?: Element<any>,
  color?: string,
  bgColor?: ?string,
  className?: string,
  style?: Object,
  tag: string,
  noTag: boolean
};

export default class View extends Component<PropsType> {
  static defaultProps = {
    tag: 'div',
    noTag: false,
  };

  render(): Node {
    const {
      children,
      color,
      bgColor,
      className,
      style,
      noTag,
      tag,
    } = this.props
    const ViewComponent = tag
    const nodeStyle = {}
    let isColorHex = false
    let isBgColorHex = false
    if (color && /^#[0-9a-fA-F]{3,6}$/.test(color)) {
      nodeStyle.color = color
      isColorHex = true
    }
    if (bgColor && /^#[0-9a-fA-F]{3,6}$/.test(bgColor)) {
      nodeStyle.backgroundColor = bgColor
      isBgColorHex = true
    }
    return (
      noTag ?
        React.Children.map(children, (node: Element<any>): Node => {
          return React.cloneElement(node, {
            className: classNames({
              [`${prefix}text-${color || ''}`]: color && !isColorHex,
              [`${prefix}bg-${bgColor || ''}`]: bgColor && !isBgColorHex,
            }, className, node.props.className),
            style: {
              ...nodeStyle,
              ...style,
              ...node.props.style,
            },
          })
        }) : (
          <ViewComponent
            className={classNames({
              [`${prefix}text-${color || ''}`]: color && !isColorHex,
              [`${prefix}bg-${bgColor || ''}`]: bgColor && !isBgColorHex,
            }, className)}
            style={{
              ...nodeStyle,
              ...style,
            }}
          >
            {children}
          </ViewComponent>
        )
    )
  }
}
