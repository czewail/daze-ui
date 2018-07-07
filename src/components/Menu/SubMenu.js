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
import { spring, Motion } from 'react-motion'
import { cssPrefix } from '../../constants/config'
import Icon from '../Icon'
import { MenuContext } from './context'
import CollapseTransition from '../../lib/CollapseTransition'
// import warning from '../../utils/warning'

/** @type {string} 组件样式前缀 */
const prefix = `${cssPrefix}menu-submenu`

/**
 * Props
 * @property {Element} children 子节点
 * @property {String} className 样式名
 * @property {Object} style 内联样式
 * @property {String|Number|Element} title 菜单标题
 * @property {Boolean} noArrow 是否展示展开箭头
 * @property {Number|String} index 菜单的 key
 */
type PropsType = {
  children?: Element<any>,
  className?: string,
  style?: Object,
  title?: string | number | Element<any>,
  noArrow: boolean,
  index: number | string,
  icon?: Element<any> | string
};

/**
 * opened
 * 根据 Menu 组件的 openedKeys 参数（来自 Menu 的 State），判断当前节点是否默认展开
 * @param {array} openedKeys 展开的数组
 * @param {string|number} key 当前节点的标识
 */
function opened(openedKeys: Array<string | number>, key: string | number): boolean {
  return !!~openedKeys.indexOf(key)
}

/**
 * toggleArrow
 * 根据 isOpened 参数返回带动画的箭头图标
 * @param {*} isOpened 是否打开
 */
function toggleArrow(isOpened: boolean): Element<any> {
  return (
    <Motion style={{ deg: spring(isOpened ? 180 : 0) }}>
      {
        ({ deg }: Object): Element<any> => {
          return (
            <Icon
              style={{
                  transform: `rotate(${deg}deg)`,
              }}
              className={`${prefix}-title-arrow`}
              name="angle-down"
            />
          )
        }
      }
    </Motion>
  )
}

/**
 * toggleChildren
 * 根据 isOpened 参数返回带动画的子菜单
 * @param {*} isOpened 是否打开
 */
// function toggleChildren(isOpened: boolean, children?: Element<any>): Element<any> {
//   return (
//     <Motion
//       style={{
//         scaleY: spring(isOpened ? 1 : 0),
//         opacity: spring(isOpened ? 1 : 0),
//       }}
//     >
//       {
//         ({ scaleY, opacity }: Object): Element<any> => {
//           return (
//             <ul
//               className={classNames(`${cssPrefix}menu`, {
//                 [`${prefix}-open`]: isOpened,
//               })}
//               style={{
//                 transform: `scaleY(${scaleY})`,
//                 transformOrigin: '50% 0 0',
//                 opacity,
//               }}
//             >
//               {children}
//             </ul>
//           )
//         }
//       }
//     </Motion>
//   )
// }

export default class SubMenu extends Component<PropsType> {
  static defaultProps = {
    noArrow: false,
  };

  childrenBoxRef: any

  // constructor(props: PropsType) {
  //   super(props)
  // }

  render(): Node {
    const {
      children, className, style,
      index, title, noArrow, icon,
      ...restProps
    } = this.props
    return (
      <MenuContext.Consumer>
        {(menuProps: Object): Node => {
          const isOpened = opened(menuProps.openedKeys, index)
          return (
            <li
              className={classNames(prefix, {
                [`${prefix}__opened`]: isOpened,
              }, className)}
              style={{
                ...style,
              }}
              {...restProps}
            >
              <span
                className={`${prefix}-title`}
                onClick={(e: SyntheticEvent<HTMLSpanElement>) => {
                  menuProps.handleSubMenuClick(e, index)
                }}
              >
                {
                  icon ?
                  (
                    <span className={`${prefix}-title-icon`}>
                      {
                        Object.prototype.toString.call(icon) === '[object String]' ?
                          <Icon name={icon} /> :
                          icon
                      }
                    </span>
                  ) :
                  null
                }
                {title}
                {
                  noArrow || toggleArrow(isOpened)
                }
              </span>
              {/* {toggleChildren(isOpened, children)} */}
              <CollapseTransition show={isOpened}>
                <ul
                  className={classNames(`${cssPrefix}menu`)}
                >
                  {children}
                </ul>
              </CollapseTransition>
            </li>
          )
        }}
      </MenuContext.Consumer>
    )
  }
}
