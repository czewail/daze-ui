// @flow

/**
 * Copyright (c) 2018-present, Chan Zewail
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * Util
 * warning
 */

import warning from 'warning'

const hasWarning: { [message: string]: boolean} = {}

export default (effect: boolean, message: string) => {
  if (!effect && !hasWarning[message]) {
    warning(false, message)
    hasWarning[message] = true
  }
}
