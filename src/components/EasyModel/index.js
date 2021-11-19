import React, { Component } from 'react'
import { Modal } from 'antd'
import Draggable from 'react-draggable'

class EasyModel extends Component {
  state = {
    visible: false,
    disabled: true,
    bounds: { left: 0, top: 0, bottom: 0, right: 0 },
  }

  draggleRef = React.createRef()

  // 打开弹框
  showModal = () => {
    this.setState({
      visible: true,
    })
  }

  // 确定
  handleOk = (e) => {
    console.log(e)
    this.setState({
      visible: false,
    })
  }

  // 取消
  handleCancel = (e) => {
    console.log(e)
    this.setState({
      visible: false,
    })
  }

  // 开始拖拽
  onStart = (event, uiData) => {
    const { clientWidth, clientHeight } = window?.document?.documentElement
    const targetRect = this.draggleRef?.current?.getBoundingClientRect()
    this.setState({
      bounds: {
        left: -targetRect?.left + uiData?.x,
        right: clientWidth - (targetRect?.right - uiData?.x),
        top: -targetRect?.top + uiData?.y,
        bottom: clientHeight - (targetRect?.bottom - uiData?.y),
      },
    })
  }

  render() {
    const { bounds, disabled, visible } = this.state
    return (
      <>
        {/* <Button onClick={this.showModal}>Open Draggable Modal</Button> */}
        <Modal
          title={
            <div
              style={{
                width: '100%',
                cursor: 'move',
              }}
              onMouseOver={() => {
                if (disabled) {
                  this.setState({
                    disabled: false,
                  })
                }
              }}
              onMouseOut={() => {
                this.setState({
                  disabled: true,
                })
              }}
              onFocus={() => {}}
              onBlur={() => {}}
            ></div>
          }
          visible={visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          modalRender={(modal) => (
            <Draggable
              disabled={disabled}
              bounds={bounds}
              onStart={(event, uiData) => this.onStart(event, uiData)}
            >
              <div ref={this.draggleRef}>{modal}</div>
            </Draggable>
          )}
        ></Modal>
      </>
    )
  }
}

export default EasyModel
