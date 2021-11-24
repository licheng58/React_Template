export const TOKEN = (state = '', action) => {
	//   console.log(action)
	switch (action.type) {
		case 'SAVE_TOKEN':
			return action.val.tokenHead + action.val.token
		default:
			return state
	}
}

export const USER_INFO = (state = {}, action) => {
	// console.log(action)
	switch (action.type) {
		case 'SET_USERINFO':
			return action

		default:
			return state
	}
}
