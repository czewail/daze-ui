// @flow

/**
 * Copyright (c) 2018-present, Chan Zewail
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * Component
 * Menu
 */
import React, { Component } from 'react'
import type { Node, Element } from 'react'
import classNames from 'classnames'
import { cssPrefix } from '../../constants/config'
import SubMenu from './SubMenu'

const prefix = `${cssPrefix}menu`

type PropsType = {
  children?: Element<any>,
  mode: 'horizontal' | 'vertical',
  theme: 'dark' | 'light',
  className?: string,
  style?: Object
};

export default class Menu extends Component<PropsType> {
  static defaultProps = {
    theme: 'light',
    mode: 'vertical',
  };

  static SubMenu = SubMenu

  render(): Node {
    const { children, mode, theme, className, style, ...restProps } = this.props
    return (
      <ul
        className={classNames(prefix, {
          [`${prefix}-horizontal`]: mode === 'horizontal',
          [`${prefix}-dark`]: theme === 'dark',
        }, className)}
        style={{
          ...style,
        }}
        {...restProps}
      >
        {children}
      </ul>
    )
  }
}
