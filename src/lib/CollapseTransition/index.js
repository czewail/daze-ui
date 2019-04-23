/* @flow */

import React, { Component } from 'react'
import type { Element, Node } from 'react'

import './index.less'

const DURATION = 300

type PropsType = {
  show: boolean,
  children?: Element<any>
};

type StateType = {
  prevPropsShow: boolean
};

export default class CollapseTransition extends Component<PropsType, StateType> {
  refCache: any;
  enterTimer: any;
  leaveTimer: any;

  // constructor(props: PropsType) {
  //   super(props)
  //   this.state = {
  //     prevPropsShow: props.show,
  //   }
  // }

  componentDidMount(): ?void {
    this.beforeEnter()
    if (this.props.show) {
      this.enter()
    }
  }

  // static getDerivedStateFromProps(nextProps: any, prevState) {
  //   if (prevState.prevPropsShow !== nextProps.show) this.triggerChange(nextProps.show)
  // }

  componentWillReceiveProps(nextProps: any): ?void {
    if (this.props.show !== nextProps.show) this.triggerChange(nextProps.show)
  }

  componentWillUnmount(): ?void {
    this.beforeLeave()
    this.leave()
  }

  triggerChange(show: boolean): ?void {
    clearTimeout(this.enterTimer)
    clearTimeout(this.leaveTimer)
    if (show) {
      this.beforeEnter()
      this.enter()
    } else {
      this.beforeLeave()
      this.leave()
    }
  }

  beforeEnter(): ?void {
    const el = this.refCache
    el.style.height = '0'
  }

  enter(): ?void {
    const el = this.refCache
    el.style.display = 'block'
    if (el.scrollHeight !== 0) {
      el.style.height = `${el.scrollHeight}px`
    } else {
      el.style.height = ''
    }
    this.enterTimer = setTimeout(() => this.afterEnter(), DURATION)
  }

  afterEnter(): ?void {
    const el = this.refCache
    el.style.display = 'block'
    el.style.height = ''
  }

  beforeLeave(): ?void {
    const el = this.refCache
    el.style.display = 'block'
    if (el.scrollHeight !== 0) {
      el.style.height = `${el.scrollHeight}px`
    }
  }

  leave(): ?void {
    const el = this.refCache
    if (el.scrollHeight !== 0) {
      el.style.height = 0
    }
    this.leaveTimer = setTimeout(() => this.afterLeave(), DURATION)
  }

  afterLeave(): ?void {
    const el = this.refCache
    if (!el) return

    el.style.display = 'none'
    el.style.height = ''
  }

  render(): Node {
    return (
      <div
        className="collapse-transition"
        style={{ overflow: 'hidden' }}
        ref={(e: any) => {
          if (e) {
            this.refCache = e
          }
        }}
      >
        {this.props.children}
      </div>
    )
  }
}

