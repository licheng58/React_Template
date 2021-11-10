import React, { useState, useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import PrivateRoute from 'utils/filter_page'
import { Layout } from 'antd'
import styles from './index.module.scss'
import LayoutHeader from './commons/LayoutHeader'
import LayoutSider from './commons/LayoutSider'

import Home from './Home'
const { Header, Footer, Sider, Content } = Layout

const Layout_ = (props) => {
  return (
    <div className={styles.layout}>
      <Layout>
        <Sider>{LayoutSider()}</Sider>

        <Layout>
          <Header>{LayoutHeader()}</Header>
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
