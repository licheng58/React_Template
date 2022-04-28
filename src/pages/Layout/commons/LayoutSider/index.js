import React from 'react'
import { Menu } from 'antd'
import { AppstoreOutlined } from '@ant-design/icons'
import styles from './index.module.scss'
import mgLogo from 'asserts/images/my-logo.gif'
const { SubMenu } = Menu

const renderTitle = (props) => {
	if (!props.collapsed) {
		return (
			<>
				<div className="logo-img">
					<img src={mgLogo} alt="" />
				</div>
				<div className="logo-title">
					L C <span>Admin</span>
				</div>
			</>
		)
	} else {
		return (
			<div className="logo-img">
				<img src={mgLogo} alt="" />
			</div>
		)
	}
}

const LayoutSider = (props) => {
	// let menus = JSON.parse(localStorage.getItem('SIDE_MENU')).menus
	let menus = []
	console.log(menus)
	return (
		<div className={styles.sider}>
			{/* logo图片 */}
			<div className="logo">{renderTitle(props)}</div>

			<Menu defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']} mode="inline" theme="dark">
				{menus.map((v) => {
					return (
						<SubMenu key="sub2" icon={<AppstoreOutlined />} title="Navigation Two">
							<SubMenu key="sub3" title="Submenu">
								<Menu.Item key="11">Option 11</Menu.Item>
							</SubMenu>
						</SubMenu>
					)
				})}
			</Menu>
		</div>
	)
}

export default LayoutSider
