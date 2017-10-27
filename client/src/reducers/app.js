import { handleActions } from 'redux-actions'

export default handleActions({
	
	SET_MESSAGES: (state, action) => {
		return ({
			...state,
			messages: [...state.messages, ...action.payload]
		})
	}
	
}, {
	messages: []
})