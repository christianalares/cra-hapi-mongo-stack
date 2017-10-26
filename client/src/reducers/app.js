import { handleActions } from 'redux-actions'

export default handleActions({
	
	SET_MESSAGES: (state, action) => {
		console.timeEnd('getMessages')

		return ({
			...state,
			messages: action.payload
		})
	},

	POST_MESSAGE: (state, action) => {
		return ({
			...state,
			messages: [...state.messages, action.payload]
		})
	}
	
}, {
	messages: []
})