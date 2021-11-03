import React, { useState, useEffect } from 'react'
import { Form, Input, Button, Checkbox, Spin } from 'antd'
import logoImg from 'asserts/images/my-logo.gif'
import styles from './index.module.scss'
import SlidingBlock from 'components/Sliding_block/index'
const FormConfig = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },

  // 提供默认值
  initialValues: {
    remember: true,
    username: 'admin',
    password: 'admin',
  },
}

const FormItemConfig = {
  wrapperCol: {
    // offset: 8,
    span: 24,
  },
}

// login组件
const Login = () => {
  const [loading, setLoading] = useState(false)

  const onFinish = (values) => {
    if (window.localStorage.getItem('isSwipe') !== 1) {
      alert('hahah')
    }
    console.log('Success:', values)
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  useEffect(() => {
    window.localStorage.setItem('isSwipe', 0)
  })

  return (
    <div className={styles.login}>
      <div className="login-form">
        <Spin tip="登录中..." spinning={!!loading} className="login-spin">
          <div className="title">
            <img src={logoImg} alt="" style={{ width: '70px' }} />
            <p>REACT 模板</p>
          </div>
          <Form
            {...FormConfig}
            name="basic"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            size={'large'}
          >
            <Form.Item
              {...FormItemConfig}
              label=""
              name="username"
              rules={[
                {
                  required: true,
                  message: 'Please input your username!',
                },
              ]}
            >
              <Input placeholder="用户名 admin" />
            </Form.Item>

            <Form.Item
              label=""
              name="password"
              {...FormItemConfig}
              rules={[
                {
                  required: true,
                  message: 'Please input your password!',
                },
              ]}
            >
              <Input.Password placeholder="密码 admin" />
            </Form.Item>

            <Form.Item
              name="remember"
              valuePropName="checked"
              {...FormItemConfig}
            >
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <SlidingBlock />

            <Form.Item {...FormItemConfig}>
              <Button
                type="primary"
                htmlType="submit"
                style={{ width: '100%', marginTop: '10px' }}
              >
                登 录
              </Button>
            </Form.Item>
          </Form>
        </Spin>
      </div>
    </div>
  )
}

export default Login
