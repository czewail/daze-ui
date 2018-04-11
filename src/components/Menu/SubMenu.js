// @flow

/**
 * Copyright (c) 2018-present, Chan Zewail
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * Component
 * SubMenu
 */
import React, { Component } from 'react'
import type { Node, Element } from 'react'
import classNames from 'classnames'
import { cssPrefix } from '../../constants/config'
import Icon from '../Icon'

const prefix = `${cssPrefix}menu-submenu`

type PropsType = {
  children?: Element<any>,
  className?: string,
  style?: Object,
  title?: string | Element<any>
};

export default class SubMenu extends Component<PropsType> {
  render(): Node {
    const { children, className, style, title } = this.props
    return (
      <li
        className={classNames(prefix, className)}
        style={{
          ...style,
        }}
      >
        <div className={`${prefix}-title`}>
          {title}
          <Icon name="angle-right" />
        </div>
      </li>
    )
  }
}
