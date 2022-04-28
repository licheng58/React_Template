/*eslint-disable */
import React, { useState } from 'react'
import { Switch } from 'react-router-dom'
import PrivateRoute from 'utils/filter_page'
import { Layout } from 'antd'
import styles from './index.module.scss'
import LayoutHeader from './commons/LayoutHeader'
import LayoutSider from './commons/LayoutSider'

import Home from './Home'
const { Header, Sider, Content } = Layout

const Layout_ = (props) => {
  const [collapsed, setCollapsed] = useState(false) //收起状态
  const [theme, setTheme] = useState('light') //主题
  const [trigger, setTrigger] = useState(null) //默认收起触发器  null-隐藏
  const [width, setWidth] = useState('250') //展开的width

  const onCollapse = (val) => {
    console.log('fuzujian' + val)
    setCollapsed(!collapsed)
  }

  return (
    <div className={styles.layout}>
      <Layout className="sider">
        <Sider
          collapsible
          collapsed={collapsed}
          collapsedWidth={60}
          theme={theme}
          width={width}
          trigger={trigger}
          onCollapse={onCollapse}
          style={{ height: '100%', backgroundColor: '#30363e' }}
        >
          <LayoutSider collapsed={collapsed} />
        </Sider>

        <Layout>
          <Header>
            <LayoutHeader setCollapsed={setCollapsed} />
          </Header>
          <Content>
            <Switch>
              {/* <Route path="/home" component={Home}></Route> */}
              <PrivateRoute path="/home" exact component={Home}></PrivateRoute>
            </Switch>
          </Content>

          {/* <Footer>Footer</Footer> */}
        </Layout>
      </Layout>
    </div>
  )
}

export default Layout_
