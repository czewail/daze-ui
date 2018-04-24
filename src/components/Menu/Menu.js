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
import Item from './Item'
import { MenuContext } from './context'

/** @type {string} 组件样式前缀 */
const prefix = `${cssPrefix}menu`

/**
 * Props
 * @property {Element} children 子节点
 * @property {String} mode 模式 - 水平或垂直
 * @property {String} theme 主题 - 亮色主题或暗色主题
 * @property {String} className 样式名
 * @property {Object} style 内联样式
 * @property {Array} defaultOpenKeys 默认展开的节点 key 的集合
 * @property {Array} openKeys 展开的节点 key 的集合, 受控属性
 */
type PropsType = {
  children?: Element<any>,
  mode: 'horizontal' | 'vertical',
  theme: 'dark' | 'light',
  className?: string,
  style?: Object,
  defaultOpenKeys?: Array<string | number>,
  openKeys?: Array<string | number>
};

/**
 * State
 *  @property {Array} openedKeys 展开的节点 key 的集合
 */
type StateType = {
  openedKeys: Array<string | number>
};

export default class Menu extends Component<PropsType, StateType> {
  static defaultProps = {
    theme: 'light',
    mode: 'vertical',
  };

  static SubMenu = SubMenu
  static Item = Item

  constructor(props: PropsType) {
    super(props)
    let openedKeys: ?Array<string | number>
    if ('defaultOpenKeys' in props) {
      openedKeys = props.defaultOpenKeys
    } else if ('openKeys' in props) {
      openedKeys = props.openKeys
    }
    this.state = {
      openedKeys: openedKeys || [],
    }
  }

  /**
   * setOpenedKeys
   * 设置需要展开的节点的 keys
   * @param {*} openedKeys 展开菜单的 keys
   */
  setOpenedKeys(openedKeys: Array<string | number>): ?void {
    // 不存在受控属性 openKeys 时触发
    if (!('openKeys' in this.props)) {
      this.setState({ openedKeys })
    }
  }

  /**
   * openMenu
   * 展开 key 对应的菜单
   * @param {string|number} key 菜单的 key值
   */
  openMenu(key: string | number): ?void {
    const { openedKeys } = this.state
    // 对应节点已展开，结束方法
    if (!!~openedKeys.indexOf(key)) return
    openedKeys.push(key)
    this.setOpenedKeys(openedKeys)
  }

  /**
   * closeMenu
   * 闭合 key 对应的菜单
   * @param {string|number} key 菜单的 key值
   */
  closeMenu(key: string | number): ?void {
    const { openedKeys } = this.state
    openedKeys.splice(openedKeys.indexOf(key), 1)
    this.setOpenedKeys(openedKeys)
  }

  /**
   * handleSubMenuClick
   * 监听子菜单点击事件
   * @param {event} e SyntheticEvent
   * @param {string|number} key 子菜单对应的 key
   */
  handleSubMenuClick(e: SyntheticEvent<HTMLDivElement>, key: string | number): ?void {
    e.preventDefault()
    const isOpened = !!~this.state.openedKeys.indexOf(key)
    if (isOpened) {
      this.closeMenu.bind(this)(key)
    } else {
      this.openMenu.bind(this)(key)
    }
  }

  render(): Node {
    const {
      children, mode, theme, defaultOpenKeys,
      openKeys, className, style,
      ...restProps
    } = this.props
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
        <MenuContext.Provider
          value={{
            mode,
            theme,
            openedKeys: this.state.openedKeys,
            handleSubMenuClick: this.handleSubMenuClick.bind(this),
          }}
        >
          {children}
        </MenuContext.Provider>
      </ul>
    )
  }
}
