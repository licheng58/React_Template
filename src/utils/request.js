import axios from 'axios'
import { Router } from 'react-router'
import { getToken, clearToken } from './handle_token'

const http = axios.create({
  baseURL: 'http://admin-api.macrozheng.com',
  timeout: 50000
})

//请求发出前拦截
// http.interceptors.request.use(
//   function (config) {
//     // console.log(config)
//     if (getToken()) {
//       //已经登录的请求头配置，主要用于登录成功后后台返回的token,做权限
//       config.headers['Authorization'] = getToken()
//     } else {
//       // 未登录的请求头配置
//       console.log(Router)
//       Router.location.history('/login')
//       // clearToken()
//     }

//     return config
//   },

//   function (error) {
//     console.log(error)
//     return Promise.reject(error)
//   }
// )

// //请求响应拦截
http.interceptors.response.use(
  function (response) {
    console.log(response)
    return response.data
  },
  function (error) {
    return Promise.reject(error)
  }
)

// export function get(url, params) {
//   return instance.get(url, {
//     params,
//   })
// }

// export function post(url, data) {
//   return instance.post(url, data)
// }

export default http
