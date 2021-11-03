import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { hasToken } from './handle_token'

/*
filter_page 返回一个加强版的Route  对逻辑处理之后 可以对有权限 无权限的页面进行操作

*/

export default function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) =>
        hasToken() ? (
          <Component {...props}></Component>
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: {
                from: props.location,
              },
            }}
          ></Redirect>
        )
      }
    ></Route>
  )
}
