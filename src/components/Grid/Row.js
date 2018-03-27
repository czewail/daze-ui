// @flow

/**
 * Copyright (c) 2018-present, Chan Zewail
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * Component
 * Row
 */

import React, { Component } from 'react'
import type { Node, Element } from 'react'
import classNames from 'classnames'
import { cssPrefix } from '../../constants/config'
import './style/index.less'

/** @type {string} 组件样式前缀 */
const prefix: string = `${cssPrefix}row`

/**
 * 根据组件的type属性返回样式名
 * @param {string} type 组件的type属性
 * @returns {string} 样式名
 */
function getTypeClassName(type: ?string): string {
  switch (type) {
    case 'flex':
      return `${prefix}-flex`
    default:
      return prefix
  }
}

type PropsType = {
  type?: ?string,
  style?: ?{ [string]: mixed },
  gutter?: ?number,
  className?: string,
  align: 'top' | 'middle' | 'bottom',
  justify: 'start' | 'end' | 'center' | 'space-around' | 'space-between',
  [string]: mixed
};

export default class Row extends Component<PropsType> {
  static defaultProps = {
    justify: 'start',
    align: 'top',
  };

  render(): Node {
    const { type, style, gutter, justify, align, className, ...restProps } = this.props
    const typeClassName = getTypeClassName(type)
    const rowClassNameStrings = classNames(typeClassName, {
      [`${prefix}-${type || ''}-${justify}`]: type && justify,
      [`${prefix}-${type || ''}-${align}`]: type && align,
    }, className)
    const rowStyles = +gutter > 0 ? {
      marginLeft: +gutter / -2,
      marginRight: +gutter / -2,
      ...style,
    } : style

    return (
      <div {...restProps} className={rowClassNameStrings} style={rowStyles}>
        {
          React.Children.map(this.props.children, (col: Element<any>): Node => {
            if (col && col.props && +gutter > 0) {
              const colStyles = {
                paddingLeft: +gutter / 2,
                paddingRight: +gutter / 2,
                ...col.props.style,
              }
              return React.cloneElement(col, {
                style: colStyles,
              })
            }
            return col
          })
        }
      </div>
    )
  }
}
