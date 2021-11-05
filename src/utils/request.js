import axios from 'axios'
import { getToken } from './handle_token'
const http = axios.create({
  baseURL: '/api',
  timeout: 50000,
})
http.defaults.headers = {
  Authorization: 'Basic cGxhdGZvcm1fbGljZW5zZV9hZG1pbjpod192ZGlfbGljZW5zZQ==',
}

//请求发出前拦截
// http.interceptors.request.use(
//   function (config) {
//     // console.log(config)
//     if (getToken()) {
//       //已经登录的请求头配置，主要用于登录成功后后台返回的token,做权限
//       config.headers['Content-Type'] = 'application/json;charset=UTF-8'
//     } else {
//       // 未登录的请求头配置
//     }

//     return config
//   },

//   function (error) {
//     return Promise.reject(error)
//   }
// )

// //请求响应拦截
// http.interceptors.response.use(
//   function (response) {
//     console.log(response)
//     return response
//   },
//   function (error) {
//     return Promise.reject(error)
//   }
// )

// export function get(url, params) {
//   return instance.get(url, {
//     params,
//   })
// }

// export function post(url, data) {
//   return instance.post(url, data)
// }

export default http
