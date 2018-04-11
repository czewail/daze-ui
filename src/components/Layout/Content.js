// @flow

/**
 * Copyright (c) 2018-present, Chan Zewail
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * Component
 * Layout.Content
 */

import React, { Component } from 'react'
import type { Node, Element } from 'react'
import classNames from 'classnames'
import { cssPrefix } from '../../constants/config'

const prefix = `${cssPrefix}layout-content`

type PropsType = {
  className?: ?string,
  style?: ?Object,
  children?: Element<any>
};

export default class Content extends Component<PropsType> {
  render(): Node {
    const { className, style, children, ...restProps } = this.props
    return (
      <div
        className={classNames(prefix, className)}
        style={{
          ...style,
        }}
        {...restProps}
      >
        {children}
      </div>
    )
  }
}
