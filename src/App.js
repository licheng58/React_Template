import React, { Component } from 'react'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import NoFound from './pages/NoFound'

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Switch>
            <Route path="/login" component={Login}></Route>
            <Route path="/home" component={Home}></Route>
            <Route component={NoFound}></Route>
          </Switch>
        </div>
      </Router>
    )
  }
}
