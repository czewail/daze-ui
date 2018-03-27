// @flow

/**
 * Copyright (c) 2018-present, Chan Zewail
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * Component
 * WhiteSpace
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

export default function WhiteSpace({ children, className, style, size }: PropsType): Node {
  return (
    <div
      className={className}
      style={{
        height: checkUtil(size),
        ...style,
      }}
    >
      {children}
    </div>
  )
}

WhiteSpace.defaultProps = {
  size: 20,
}
