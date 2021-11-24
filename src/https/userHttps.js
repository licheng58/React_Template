import http from 'utils/request'
import store from '../redux/store'
// import {  } from 'https/userHttps'
// 侧边栏数据
export const lc_getUserInfo = () => {
	return new Promise((resolve, reject) => {
		http
			.get('/admin/info')
			.then((res) => {
				resolve(res)
				const action = { type: 'SET_USERINFO', data: res.data }
				store.dispatch(action)
				window.localStorage.setItem('SIDE_MENU', JSON.stringify(res.data))
			})
			.catch((err) => {
				reject(err)
			})
	})
}
