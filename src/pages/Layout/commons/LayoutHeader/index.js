import React, { useState, useEffect } from 'react'
import { Button } from 'antd'
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons'
import styles from './index.module.scss'

const LayoutHeader = (props) => {
  const [toggle, setToggle] = useState(false)
  const { setCollapsed } = props
  const handleClick = () => {
    setToggle(!toggle)
    setCollapsed(!toggle)
  }
  return (
    <div className={styles.header}>
      <Button type="primary" onClick={handleClick}>
        {React.createElement(toggle ? MenuUnfoldOutlined : MenuFoldOutlined)}
      </Button>
    </div>
  )
}

export default LayoutHeader
