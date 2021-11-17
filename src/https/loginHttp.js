import http from 'utils/request'

// 登录
export const lc_login = (params) => http.post('/admin/login', { ...params })
