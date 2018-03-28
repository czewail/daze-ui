// @flow

/**
 * Copyright (c) 2018-present, Chan Zewail
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * Component
 * Container
 */

import * as React from 'react'
import classNames from 'classnames'
import { cssPrefix } from '../../constants/config'
import './style/index.less'

type PropsType = {
  fluid: boolean,
  className?: string,
  style?: Object,
  align?: 'left' | 'center' | 'right',
  children: React.Element<any>,
  [string]: mixed
};

function Container(props: PropsType): React.Node {
  const { fluid, className, align, ...restProps } = props
  return (
    <div
      className={classNames({
        [`${cssPrefix}container`]: !fluid,
        [`${cssPrefix}container-fluid`]: fluid,
        [`${cssPrefix}align-${align || ''}`]: align,
      }, className)}
      {...restProps}
    >
      {props.children}
    </div>
  )
}

Container.defaultProps = {
  fluid: false,
}

export default Container
