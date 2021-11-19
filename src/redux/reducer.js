import { combineReducers } from 'redux'

import userInfoReducer from './reducers/userInfo/reducer'

const reducer = combineReducers({ userInfoReducer })
export default reducer
