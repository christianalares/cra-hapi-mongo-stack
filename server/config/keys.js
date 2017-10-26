/*
    The dev.js file has to be created in the config folder looking like:
    module.exportes = {
        mongoURI: 'mongodb://<dbuser>:<dbpassword>@ds133004.mlab.com:33004/forfestspelet'
    }
*/

module.exports = (process.env.NODE_ENV === 'production')
    ? require('./prod')
    : require('./dev') // See above comment