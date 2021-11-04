// 登录滑块

import React, { Component } from 'react'
import styles from './index.module.scss'
import classNames from 'classnames'

class SlidingBlock extends Component {
  constructor(props) {
    super(props)
    this.state = {
      beginClientX: 0 /*距离屏幕左端距离*/,
      mouseMoveStata: false /*触发拖动状态  判断*/,
      maxwidth: '' /*拖动最大宽度，依据滑块宽度算出来的*/,
      confirmWords: '拖动滑块验证' /*滑块文字*/,
      confirmSuccess: false /*验证成功判断*/
    }
    this.dragDiv = React.createRef()
    this.moveDiv = React.createRef()
  }

  render() {
    const { confirmWords, confirmSuccess } = this.state
    return (
      <div className={styles.slidingBlock} ref={this.dragDiv}>
        <div className="drag_bg"></div>
        <div className="drag_text">{confirmWords}</div>
        <div
          ref={this.moveDiv}
          className={classNames('handler', 'handler_bg', {
            handler_ok_bg: confirmSuccess
          })}
          onMouseDown={this.mousedownFn}
          style={{ position: 'absolute', top: ' 0px', left: ' 0px' }}
        ></div>
      </div>
    )
  }

  componentDidMount() {
    // console.log(this.dragDiv.current.clientWidth)
    this.setState({
      maxwidth:
        this.dragDiv.current.clientWidth - this.moveDiv.current.clientWidth
    })

    document
      .getElementsByTagName('html')[0]
      .addEventListener('mousemove', this.mouseMoveFn)
    document
      .getElementsByTagName('html')[0]
      .addEventListener('mouseup', this.moseUpFn)
  }

  mousedownFn = (e) => {
    // console.log(e.clientX)
    if (!this.state.confirmSuccess) {
      e.preventDefault && e.preventDefault() //阻止文字选中等 浏览器默认事件
      this.setState({
        mouseMoveStata: true,
        beginClientX: e.clientX
      })
    }
  }

  successFunction = () => {
    this.setState({
      confirmSuccess: true,
      confirmWords: '验证通过'
    })

    if (window.addEventListener) {
      document
        .getElementsByTagName('html')[0]
        .removeEventListener('mousemove', this.mouseMoveFn)
      document
        .getElementsByTagName('html')[0]
        .removeEventListener('mouseup', this.moseUpFn)
    } else {
      document
        .getElementsByTagName('html')[0]
        .removeEventListener('mouseup', () => {})
    }
    document.getElementsByClassName('drag_text')[0].style.color = '#fff'
    document.getElementsByClassName('handler')[0].style.left =
      this.maxwidth + 'px'
    document.getElementsByClassName('drag_bg')[0].style.width =
      this.maxwidth + 'px'
    window.localStorage.setItem('isSwipe', 1)
  }

  mouseMoveFn = (e) => {
    if (this.state.mouseMoveStata) {
      let width = e.clientX - this.state.beginClientX
      if (width > 0 && width <= this.state.maxwidth) {
        document.getElementsByClassName('handler')[0].style.left = width + 'px'
        document.getElementsByClassName('drag_bg')[0].style.width = width + 'px'
      } else if (width > this.state.maxwidth) {
        this.successFunction()
      }
    }
  }

  moseUpFn = (e) => {
    this.setState({
      mouseMoveStata: false
    })
    var width = e.clientX - this.state.beginClientX
    if (width < this.state.maxwidth) {
      document.getElementsByClassName('handler')[0].style.left = 0 + 'px'
      document.getElementsByClassName('drag_bg')[0].style.width = 0 + 'px'
    }
  }
}

export default SlidingBlock
