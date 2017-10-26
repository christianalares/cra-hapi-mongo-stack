const mongoose = require('mongoose')
const Message = mongoose.model('messages')

module.exports = (server) => {
	
	server.route({
		method: 'GET',
		path: '/api/messages',
		handler: async (request, reply) => {
			try {
				const messages = await Message.find()
				reply(messages).code(200)
			} catch(error) {
				reply(error).code(500)
			}
		}
	})

	server.route({
		method: 'POST',
		path: '/api/message',
		handler: async (request, reply) => {

			const result = request.payload

			const newMessage = new Message({
				message: result
			})

			try {
				const messageThatWasSaved = await newMessage.save()

				reply(messageThatWasSaved).code(200)
			} catch(error) {
				reply(error).code(500)
			}
		}
	})

	server.route({
		method: 'PUT',
		path: '/api/message/{id}',
		handler: async (request, reply) => {
			
			const result = request.payload

			try {
				const messageThatWasUpdated = await Message.findOneAndUpdate(
					{ _id: request.params.id },
					{ $set: { message: result.message, isArchived: result.isArchived } },
					{ new: true }
				)

				reply(messageThatWasUpdated).code(200)
			} catch(error) {
				reply(error).code(500)
			}
		}
	})

	server.route({
		method: 'DELETE',
		path: '/api/message/{id}',
		handler: async (request, reply) => {
			try {
				const messageThatWasDeleted = await Message.findByIdAndRemove(request.params.id)
				reply(messageThatWasDeleted).code(200)
			} catch (error) {
				reply(error).code(500)
			}
		}
	})

}