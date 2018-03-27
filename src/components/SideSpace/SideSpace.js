// @flow

/**
 * Copyright (c) 2018-present, Chan Zewail
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * Component
 * SideSpace
 */

import React from 'react'
import type { Node, Element } from 'react'

function checkUtil(size: string | number): string | number {
  if (typeof size === 'number') {
    return `${size}px`
  }
  return size
}

type PropsType = {
  children: Element<any>,
  className?: string,
  style?: Object,
  size: string | number
};

export default function SideSpace({ children, style, size, ...restProps }: PropsType): Node {
  const realSize = checkUtil(size)
  return (
    <div
      style={{
        paddingLeft: realSize,
        paddingRight: realSize,
        width: '100%',
        ...style,
      }}
      {...restProps}
    >
      {children}
    </div>
  )
}

SideSpace.defaultProps = {
  size: 20,
}

