/**
 * Copyright (c) 2018-present, Chan Zewail
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * Component
 * Button
 */

import React from 'react'
import classNames from 'classnames'
import { cssPrefix } from '../../constants/config'
import Icon from '../Icon'
import ButtonGroup from './Group'

const prefix = `${cssPrefix}btn`

function getSizeClassName(size) {
  switch (size) {
    case 'large':
      return `${prefix}-lg`
    case 'small':
      return `${prefix}-sm`
    case 'tiny':
      return `${prefix}-xs`
    default:
      return ''
  }
}

function getIconSize(size) {
  switch (size) {
    case 'large':
      return 23
    case 'small':
      return 11
    case 'tiny':
      return 11
    default:
      return 14
  }
}

export default class Button extends React.Component {
  static defaultProps = {
    type: 'default',
    basic: false,
    size: 'default',
    disabled: false,
    htmlType: 'button',
    iconRight: false,
    loading: false,
    rounded: false,
    circle: false,
    block: false,
  }

  static Group = ButtonGroup

  constructor(props) {
    super(props)
    this.state = {
      loadingStatus: props.loading,
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      loadingStatus: nextProps.loading,
    })
  }

  render() {
    const {
      className, type, disabled, iconRight, rounded,
      circle, size, basic, block, loading,
      icon, htmlType, children,
      ...otherProps
    } = this.props
    const { loadingStatus } = this.state
    const sizeClassName = getSizeClassName(size)
    const iconSize = getIconSize(size)
    const classNamesString = classNames(prefix, {
      [`${sizeClassName}`]: sizeClassName,
      [`${prefix}-basic`]: basic,
      [`${prefix}-${type || 'default'}`]: true,
      [`${prefix}-rounded`]: rounded,
      [`${prefix}-circle`]: circle,
      [`${prefix}-block`]: block,
    }, className)
    return (
      <button
        type={htmlType}
        className={classNamesString}
        disabled={disabled || loadingStatus}
        {...otherProps}
      >
        {
          loadingStatus && !iconRight
          ?
            <Icon name="circle-o-notch" rotated size={iconSize} />
          :
          icon && !iconRight && (
            <Icon name={icon} size={iconSize} />
          )
        }
        {
          children && (
            <span>
              {children}
            </span>
          )
        }
        {
          loadingStatus && iconRight
          ?
            <Icon name="circle-o-notch" rotated size={iconSize} />
          :
          icon && iconRight && (
            <Icon name={icon} size={iconSize} />
          )
        }
      </button>
    )
  }
}
