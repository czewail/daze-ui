// @flow

/**
 * Copyright (c) 2018-present, Chan Zewail
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * Component
 * Icon
 */

import React, { Component } from 'react'
import type { Node } from 'react'
import classNames from 'classnames'
import { cssPrefix } from '../../constants/config'

const prefix = 'fa'

type PropsType = {
  style: ?Object,
  name: string,
  size: ?number | ?string,
  rotated: boolean,
  color: ?string,
  className: ?string,
  prefix: ?string,
  tag: string
};

function getSizeStyle(size: ?string | ?number): Object {
  return size ? {
    fontSize: `${size}px`,
  } : {}
}

export default class Icon extends Component<PropsType> {
  static defaultProps = {
    name: 'home',
    tag: 'i',
    rotated: false,
  }

  render(): Node {
    let classNamesString : ?string
    let styles : Object = {}
    const {
      name, size, tag: CustomComponent, style,
      rotated, color, className, prefix: iconPrefix,
      ...restProps
    } = this.props
    const iconClassName : ?string = iconPrefix ? iconPrefix + name : `${prefix}-${name}`
    const sizeStyle : Object = getSizeStyle(size)

    if (color && ['primary', 'success', 'complete', 'info', 'warning', 'danger', 'default'].includes(color)) {
      classNamesString = classNames({
        fa: !iconPrefix,
        [`${cssPrefix}text-${color}`]: true,
        [`${prefix}-spin`]: rotated,
      }, iconClassName, className)
      styles = {
        ...style,
        ...sizeStyle,
      }
    } else {
      classNamesString = classNames({
        fa: !iconPrefix,
        [`${prefix}-spin`]: rotated,
      }, iconClassName, className)

      styles = color ? {
        ...style,
        ...sizeStyle,
        color: `${color || ''}`,
      } : {
        ...style,
        ...sizeStyle,
      }
    }

    return (
      <CustomComponent {...restProps} style={styles} className={classNamesString} />
    )
  }
}

