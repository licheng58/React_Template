import React, { Component } from 'react'
import { Button } from 'antd'
import logoImg from 'asserts/images/logo.png'

class Login extends Component {
  render() {
    return (
      <div className="login">
        <img src={logoImg} alt="" />
        <Button type="primary">Primary Button</Button>
      </div>
    )
  }
}

export default Login
