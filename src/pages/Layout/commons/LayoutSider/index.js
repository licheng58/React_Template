import React, { useState, useEffect } from 'react'
import { Menu } from 'antd'
import {
  AppstoreOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
} from '@ant-design/icons'
import styles from './index.module.scss'
import mgLogo from '../../../../asserts/images/my-logo.gif'
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
  // console.log(props)
  const { collapsed } = props
  return (
    <div className={styles.sider}>
      <div className="logo">{renderTitle(props)}</div>
      <Menu
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        theme="dark"
      >
        <Menu.Item key="1" icon={<PieChartOutlined />}>
          Option 1
        </Menu.Item>
        <Menu.Item key="2" icon={<DesktopOutlined />}>
          Option 2
        </Menu.Item>
        <Menu.Item key="3" icon={<ContainerOutlined />}>
          Option 3
        </Menu.Item>

        <SubMenu key="sub1" icon={<MailOutlined />} title="Navigation One">
          <Menu.Item key="5">Option 5</Menu.Item>
          <Menu.Item key="6">Option 6</Menu.Item>
          <Menu.Item key="7">Option 7</Menu.Item>
          <Menu.Item key="8">Option 8</Menu.Item>
        </SubMenu>

        <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Navigation Two">
          <Menu.Item key="9">Option 9</Menu.Item>
          <Menu.Item key="10">Option 10</Menu.Item>
          <SubMenu key="sub3" title="Submenu">
            <Menu.Item key="11">Option 11</Menu.Item>
            <Menu.Item key="12">Option 12</Menu.Item>
          </SubMenu>
        </SubMenu>
      </Menu>
    </div>
  )
}

export default LayoutSider
