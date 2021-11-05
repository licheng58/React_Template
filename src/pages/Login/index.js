import React, { useState, useEffect } from 'react'
import { Form, Input, Button, Spin } from 'antd'
import { lc_login } from 'https/loginHttp'
import { setToken } from 'utils/handle_token'

import Lc_Message from 'utils/message'
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
const Login = (props) => {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    // console.log('useEffect执行')
    window.localStorage.setItem('isSwipe', 0)
  }, [])

  const onFinish = (values) => {
    setLoading(true)
    // console.log(window.localStorage.getItem('isSwipe'))
    if (JSON.parse(window.localStorage.getItem('isSwipe')) === 0) {
      setLoading(false)
      Lc_Message('error', '提交失败', 2)
    } else {
      lc_login().then((res) => {
        console.log(res.data.token)
        setLoading(false)
        setToken(res.data.token)
        props.history.push('/home')
      })
    }
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

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

            {/* <Form.Item
              name="remember"
              valuePropName="checked"
              {...FormItemConfig}
            >
              <Checkbox>Remember me</Checkbox>
            </Form.Item> */}

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
