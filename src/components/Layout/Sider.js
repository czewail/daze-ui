// @flow

/**
 * Copyright (c) 2018-present, Chan Zewail
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * Component
 * Layout.Sider
 */

import React, { Component } from 'react'
import type { Node, Element } from 'react'
import classNames from 'classnames'
import { cssPrefix } from '../../constants/config'

const prefix = `${cssPrefix}layout-sider`

type PropsType = {
  className?: ?string,
  style?: ?Object,
  children?: Element<any>,
  width: number | string
};

function checkUtil(size: number | string): string {
  if (typeof size === 'number') {
    return `${size}px`
  }
  return size
}

export default class Sider extends Component<PropsType> {
  static defaultProps = {
    width: 200,
  };

  render(): Node {
    const { className, style, children, width, ...restProps } = this.props
    const widthWithUtil = checkUtil(width)
    return (
      <div
        className={classNames(prefix, className)}
        style={{
          flex: `0 0 ${widthWithUtil}`,
          maxWidth: widthWithUtil,
          minWidth: widthWithUtil,
          width: widthWithUtil,
          ...style,
        }}
        {...restProps}
      >
        {children}
      </div>
    )
  }
}
