// @flow

/**
 * Copyright (c) 2018-present, Chan Zewail
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * Component
 * Switch
 */

import React from 'react'
import type { Node, Element } from 'react'
import classNames from 'classnames'
import { cssPrefix } from '../../constants/config'

const prefix = `${cssPrefix}switch`

type PropsType = {
  className?: string,
  disabled: boolean,
  checked?: ?boolean,
  size: 'tiny' | 'small' | 'default' | 'large',
  type: 'success' | 'info' | 'complete' | 'danger' | 'primary' | 'wanring',
  onChange?: (boolean) => void,
  onClick?: (Event) => void,
  checkedItem?: string | number | Element<any>,
  uncheckedItem?: string | number | Element<any>,
  defaultChecked: boolean
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

export default class Switch extends React.Component<PropsType, StateType> {
  static defaultProps = {
    disabled: false,
    type: 'success',
    size: 'default',
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
      className, disabled, type, size,
      checkedItem, uncheckedItem, checked,
      defaultChecked, onClick, onChange,
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
          {
            (uncheckedItem || !isNaN(uncheckedItem)) && (
              <div className={`${prefix}__item-checked`}>
                {checkedItem}
              </div>
            )
          }
          {
            (uncheckedItem || !isNaN(uncheckedItem)) && (
              <div className={`${prefix}__item-unchecked`}>
                {uncheckedItem}
              </div>
            )
          }
        </span>
      </label>
    )
  }
}
