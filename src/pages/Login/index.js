import React, { Component } from 'react'
import { Form, Input, Button, Spin, message } from 'antd'
import { lc_login } from 'https/loginHttp'
import { lc_getUserInfo } from 'https/userHttps'
import { setToken } from 'utils/handle_token'
import { saveToken } from 'redux/action'
import { connect } from 'react-redux'
import openNotificationWithIcon from 'utils/Lc_Natification'
import logoImg from 'asserts/images/my-logo.gif'
import styles from './index.module.scss'
import SlidingBlock from 'components/Sliding_block/index'

const FormConfig = {
	labelCol: {
		span: 8
	},
	wrapperCol: {
		span: 16
	},

	// 提供默认值
	initialValues: {
		remember: true,
		username: 'admin',
		password: 'macro123'
	}
}

const FormItemConfig = {
	wrapperCol: {
		// offset: 8,
		span: 24
	}
}

// login组件
class Login extends Component {
	constructor(props) {
		super(props)
		this.state = {
			loading: false
		}
	}

	render() {
		const { loading } = this.state
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
							onFinish={this.onFinish}
							onFinishFailed={this.onFinishFailed}
							autoComplete="off"
							size={'large'}>
							<Form.Item
								{...FormItemConfig}
								label=""
								name="username"
								rules={[
									{
										required: true,
										message: 'Please input your username!'
									}
								]}>
								<Input placeholder="用户名 admin" />
							</Form.Item>

							<Form.Item
								label=""
								name="password"
								{...FormItemConfig}
								rules={[
									{
										required: true,
										message: 'Please input your password!'
									}
								]}>
								<Input.Password placeholder="密码 admin" />
							</Form.Item>

							<SlidingBlock />

							<Form.Item {...FormItemConfig}>
								<Button type="primary" htmlType="submit" style={{ width: '100%', marginTop: '10px' }}>
									登 录
								</Button>
							</Form.Item>
						</Form>
					</Spin>
				</div>
			</div>
		)
	}

	componentDidMount() {
		window.localStorage.setItem('isSwipe', 0)
	}

	// 登录
	onFinish = async (values) => {
		const { dispatchSetToken } = this.props
		this.setState({ loading: true })
		if (JSON.parse(window.localStorage.getItem('isSwipe')) === 0) {
			this.setState({ loading: false })
			message.error('提交失败', [1])
		} else {
			const res = await lc_login(values)
			await dispatchSetToken(res.data)
			this.setState({ loading: false })
			setToken(res.data.token)
			this.props.history.push('/home')
			openNotificationWithIcon('success', res.data.name, '欢迎登录!')
			lc_getUserInfo() // 获取用户信息
		}
	}

	// 登录失败
	onFinishFailed = (errorInfo) => {
		console.log('Failed:', errorInfo)
	}
}

const mapStateToProps = (state) => ({
	token: () => state.TOKEN
})

const mapActionToProps = (dispatch) => ({
	dispatchSetToken: (val) => dispatch(saveToken(val))
})

export default connect(mapStateToProps, mapActionToProps)(Login)
