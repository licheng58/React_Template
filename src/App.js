import React, { Component, Suspense } from 'react'
import { lc_getUserInfo } from 'https/userHttps'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

import Layout from './pages/Layout'
import Login from './pages/Login'
import NoFound from './pages/NoFound'

export default class App extends Component {
  render() {
    // console.log(PrivateRoute)
    return (
      <Router>
        <div className="app">
          <Suspense fallback={<div>loading...</div>}>
            <Switch>
              <Redirect exact from="/" to="/home"></Redirect>
              <Route path="/login" component={Login}></Route>
              <Route path="/" component={Layout}></Route>
              <Route component={NoFound}></Route>
            </Switch>
          </Suspense>
        </div>
      </Router>
    )
  }

  // componentDidMount() {
  //   if (window.location.pathname !== '/login') {
  //     this.getUserIndo()
  //   }
  // }

  // 获取用户信息
  getUserIndo = async () => {
    const res = await lc_getUserInfo()
    console.log(res)
  }
}
