// @flow

/**
 * Copyright (c) 2018-present, Chan Zewail
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * Component
 * SwitchIOS
 */

import React, { Component, type Node } from 'react'
import classNames from 'classnames'
import { cssPrefix } from '../../constants/config'

const prefix = `${cssPrefix}switchIOS`

type PropsType = {
  className?: string,
  disabled: boolean,
  checked?: boolean,
  defaultChecked: boolean,
  size: 'tiny' | 'small' | 'default' | 'large',
  type?: 'success' | 'info' | 'complete' | 'danger' | 'primary' | 'wanring',
  onChange?: (boolean) => void,
  onClick?: (Event) => void
};

type StateType = {
  checked: boolean
};

function getSizeCls(size: ?string): string {
  switch (size) {
    case 'tiny':
      return `${prefix}-xs`
    case 'small':
      return `${prefix}-sm`
    case 'large':
      return `${prefix}-lg`
    default:
      return ''
  }
}

export default class SwitchIOS extends Component<PropsType, StateType> {
  static defaultProps = {
    disabled: false,
    size: 'default',
    type: 'success',
    defaultChecked: false,
  }

  constructor(props: PropsType) {
    super(props)
    this.state = {
      checked: typeof props.checked === 'boolean' ? props.checked : props.defaultChecked,
    }
  }

  componentWillReceiveProps(nextProps: PropsType) {
    if (typeof nextProps.checked === 'boolean') {
      if (this.props.checked !== nextProps.checked) {
        this.setState({
          checked: nextProps.checked,
        }, () => {
          if (this.props.onChange) {
            this.props.onChange(!!nextProps.checked)
          }
        })
      }
    }
  }

  handleOnChange(event: any) {
    const { checked } = event.target
    // 未设置 checked 属性， 设置 state
    if (typeof this.props.checked !== 'boolean') {
      this.setState({ checked }, () => {
        if (this.props.onChange) {
          this.props.onChange(checked)
        }
      })
    }
  }

  handleOnClick(event: any) {
    if (this.props.onClick) {
      this.props.onClick(event)
    }
  }

  render(): Node {
    const {
      className, disabled, type,
      size, checked, defaultChecked,
      onClick, onChange,
      ...restProps
    } = this.props
    const switchSizeCls = getSizeCls(size)
    const switchBoxCls = classNames(prefix, {
      [`${prefix}-${type || ''}`]: type,
    }, switchSizeCls, className)
    return (
      <label className={switchBoxCls} {...restProps}>
        <input type="checkbox" disabled={disabled} checked={this.state.checked} onChange={this.handleOnChange.bind(this)} onClick={this.handleOnClick.bind(this)} />
        <span className={`${prefix}__display`}>
          <small className={`${prefix}__inner`} />
        </span>
      </label>
    )
  }
}
