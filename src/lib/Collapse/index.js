import React, { Component } from 'react'
import classNames from 'classnames'
import { spring, Motion } from 'react-motion'


class Collapse extends Component {

  constructor(props) {
    super(props)
    this.state = {
      prevPropsShow: props.show,
      height: 0,
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.show !== prevState.prevPropsShow) {
      return {
        prevPropsShow: nextProps.show,
      }
    }
    return null
  }

  componentDidMount() {
    this.setState({
      height: this.height,
    })
  }

  render() {
    return (
      <div
        style={{
          overflow: 'hidden',
        }}
      >
        <Motion style={{
          height: spring(this.state.prevPropsShow ? this.state.height : 0),
        }}
        >
          {
            ({ height }) => {
              return (
                <div
                  ref={(e) => {
                    if (e) {
                      this.height = e.scrollHeight
                    }
                  }}
                  style={{
                    height: `${height || 0}px`,
                    display: 'block',
                  }}
                >
                  {this.props.children}
                </div>
              )
            }
          }
        </Motion>
      </div>
    )
  }
}

export default Collapse
