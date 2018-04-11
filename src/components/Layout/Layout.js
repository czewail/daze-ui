// @flow

/**
 * Copyright (c) 2018-present, Chan Zewail
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * Component
 * Layout
 */

import React, { Component } from 'react'
import type { Node, Element } from 'react'
import classNames from 'classnames'
import { cssPrefix } from '../../constants/config'
import Header from './Header'
import Sider from './Sider'
import Footer from './Footer'
import Content from './Content'
import SubLayout from './SubLayout'

const prefix = `${cssPrefix}layout`

type PropsType = {
  className?: ?string,
  style?: ?Object,
  children?: Element<any>
};

export default class Layout extends Component<PropsType> {
  static Header = Header;
  static Sider = Sider;
  static Footer = Footer;
  static Content = Content;
  static SubLayout = SubLayout;

  render(): Node {
    const { children, className, style } = this.props
    return (
      <div
        className={classNames(prefix, className)}
        style={{
          ...style,
        }}
      >
        {children}
      </div>
    )
  }
}
