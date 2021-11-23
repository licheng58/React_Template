const defaultState = {
	TOKEN: ''
	// USER_INFO: {}
}

const userInfoReducer = (state = defaultState.TOKEN, action) => {
	// console.log(action)
	switch (action.type) {
		case 'SAVE_TOKEN':
			return action.token

		default:
			return state
	}
}

export default userInfoReducer
