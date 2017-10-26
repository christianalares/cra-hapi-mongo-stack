'use strict'

const Hapi = require('hapi')
const mongoose = require('mongoose')
const keys = require('./config/keys')

require('./models/Message')

mongoose.connect(keys.mongoURI)

const server = new Hapi.Server()
server.connection({
    port: 3001,
    host: 'localhost'
})

require('./api/messages')(server)

server.start( (err) => {
    if(err) throw err

    console.log( `Server is running at: ${server.info.uri}` )
} )