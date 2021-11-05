import http from 'utils/request'

// 登录
export const lc_login = () => http.get('/user/login')
