// @flow

/**
 * Copyright (c) 2018-present, Chan Zewail
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * Component
 * SubLayout
 */

import React, { Component } from 'react'
import type { Node, Element } from 'react'
import classNames from 'classnames'
import { cssPrefix } from '../../constants/config'
import Layout from './Layout'

const prefix: string = `${cssPrefix}layout-sub-layout`

type PropsType = {
  children?: Element<any>,
  className?: string,
  style?: Object
};

export default class SubLayout extends Component<PropsType> {
  render(): Node {
    const { children, className, style, ...restProps } = this.props
    return (
      <Layout
        className={classNames(prefix, className)}
        style={{
          ...style,
        }}
        {...restProps}
      >
        {children}
      </Layout>
    )
  }
}
