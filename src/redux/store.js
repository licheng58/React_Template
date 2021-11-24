import { createStore, applyMiddleware, compose } from 'redux'

import reducer from './reducer' //引入总reducer

// import thunk from 'redux-thunk'
// const composeEnhancers =
// 	typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
// 		? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
// 		: compose
// //compose函数需要从redux中引出来

// const enhancer = composeEnhancers(
// 	applyMiddleware(thunk) //在创建store的时候，这个方法表示：使用thunk这个中间件
// )

const store = createStore(
	reducer,
	// enhancer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store
