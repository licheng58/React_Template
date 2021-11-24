import { combineReducers } from 'redux'

import { TOKEN, USER_INFO } from './reducers/user'

const reducer = combineReducers({ TOKEN, USER_INFO })
export default reducer
