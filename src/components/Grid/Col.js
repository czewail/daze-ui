// @flow

/**
 * Copyright (c) 2018-present, Chan Zewail
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * Component
 * Col
 */

import React, { Component } from 'react'
import type { Node, Element } from 'react'
import classNames from 'classnames'
import { cssPrefix } from '../../constants/config'

/** @type {string} 组件样式前缀 */
const prefix: string = `${cssPrefix}col`

type PropsType = {
  span: number | string,
  offset: number | string,
  push: number | string,
  pull: number | string,
  xs?: number | string | { [string]: number | string },
  sm?: number | string | { [string]: number | string },
  md?: number | string | { [string]: number | string },
  lg?: number | string | { [string]: number | string },
  children?: Element<any>,
  className?: string
};

export default class Col extends Component<PropsType> {
  static defaultProps = {
    span: 24,
    offset: 0,
    push: 0,
    pull: 0,
  };

  render(): Node {
    let sizeClassNameObject = {}
    const { span, offset, pull, push, children, className, ...restProps } = this.props
    ;['xs', 'sm', 'md', 'lg'].forEach((size: string) => {
      let sizeProps = {}
      if (typeof this.props[size] === 'object') {
        sizeProps = this.props[size] || {}
      } else if (typeof this.props[size] === 'number' || typeof this.props[size] === 'string') {
        sizeProps.span = Number(this.props[size])
      }
      sizeClassNameObject = {
        ...sizeClassNameObject,
        [`${prefix}-${size}-${sizeProps.span}`]: +sizeProps.span > 0,
        [`${prefix}-${size}-offset-${sizeProps.offset}`]: +sizeProps.offset > 0,
        [`${prefix}-${size}-push-${sizeProps.push}`]: +sizeProps.push > 0,
        [`${prefix}-${size}-pull-${sizeProps.pull}`]: +sizeProps.pull > 0,
      }
      delete restProps[size]
    })
    const colClassNameString = classNames(prefix, {
      [`${prefix}-${span}`]: +span > 0,
      [`${prefix}-offset-${offset}`]: +offset > 0,
      [`${prefix}-push-${push}`]: +push > 0,
      [`${prefix}-pull-${pull}`]: +pull > 0,
    }, className, sizeClassNameObject)

    return (
      <div {...restProps} className={colClassNameString}>
        {children}
      </div>
    )
  }
}
