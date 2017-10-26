const mongoose = require('mongoose')
const { Schema } = mongoose

const messageSchema = new Schema({
    message: String,
    isArchived: {
        type: Boolean,
        default: false
    }
})

mongoose.model('messages', messageSchema)