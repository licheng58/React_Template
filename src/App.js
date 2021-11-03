import React, { Component, Suspense } from 'react'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import PrivateRoute from './utils/filter_page'
import Home from './pages/Home'
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
              <Route path="/login" component={Login}></Route>
              <PrivateRoute path="/home" exact component={Home}></PrivateRoute>
              <Route component={NoFound}></Route>
            </Switch>
          </Suspense>
        </div>
      </Router>
    )
  }
}
