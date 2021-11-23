import http from 'utils/request'
// import {  } from 'https/userHttps'
// 侧边栏数据
export const lc_getUserInfo = () => http.get('/admin/info')
