export const postMessage = (incomingMessage) => async (dispatch) => {
	// console.time('postMessage')

	const message = await fetch('/api/message', {
		headers: {
			'Content-Type': 'application/json'
		},
		method: 'POST',
		body: JSON.stringify(incomingMessage)
	}).then( response => response.json() )

	dispatch({
		type: 'POST_MESSAGE',
		payload: message
	})
}

export const getMessages = () => async (dispatch) => {
	console.time('getMessages')

	const messages = await fetch('/api/messages', {
		method: 'GET'
	}).then( response => response.json() )

	dispatch({
		type: 'SET_MESSAGES',
		payload: messages
	})
}