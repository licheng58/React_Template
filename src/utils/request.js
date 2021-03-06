import axios from 'axios'
// import { getToken } from './handle_token'
import { message, Modal } from 'antd'
import { ExclamationCircleOutlined } from '@ant-design/icons'
import store from 'redux/store'

const { confirm } = Modal

const http = axios.create({
  baseURL: 'http://admin-api.macrozheng.com',
  timeout: 50000
})

//请求发出前拦截
http.interceptors.request.use(
  (config) => {
    // console.log(store.getState().TOKEN)
    const token = store.getState().TOKEN
    if (token) {
      // console.log(token)
      config.headers['Authorization'] = token
    }
    return config
  },
  (error) => {
    console.log(error)
    Promise.reject(error)
  }
)

//请求响应拦截
http.interceptors.response.use(
  (response) => {
    const res = response.data
    if (res.code !== 200) {
      // 提示错误信息
      message.error(res.message, [3])

      // 401-未登录
      if (res.code === 401) {
        confirm({
          title: '提示',
          icon: <ExclamationCircleOutlined />,
          content:
            "你已被登出，可以取消继续留在该页面，或者重新登录', '确定登出",
          okText: '重新登录',
          onOk() {
            //  重新登录逻辑
            window.location.reload() //实例化项目
          },
          onCancel() {}
        })
        return Promise.reject('error')
      } else {
        return response.data
      }
    }
    return res
  },
  (error) => {
    console.log('err' + error)
    // 提示错误信息
    message.error(error.message, [3])
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
