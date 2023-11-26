const mongoose = require( 'mongoose' )
const logger = require( '../utility/logger' )

const DB_URI = process.env.MONGODB_URI

// configs
// mongoose.set('debug', true);
mongoose.set( 'strictQuery', true )
mongoose.connect( "mongodb://127.0.0.1:27017/telaupload", { useNewUrlParser: true, useUnifiedTopology: true, autoIndex: true } )


mongoose.connection.once( 'open', () => logger.msg( 'info', [ 'MongoDB' ], 'Connected to DB.' ) )
mongoose.connection.on( 'error', ( error ) => logger.msg( 'error', [ 'MongoDB' ], error ) )
mongoose.connection.on( 'disconnect', () => logger.msg( 'error', [ 'MongoDB' ], 'Disconnected from DB.' ) )
mongoose.connection.on( 'close', () => logger.msg( 'info', [ 'MongoDB' ], 'Connection closed.' ) )

module.exports = mongoose
