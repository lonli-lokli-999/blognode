var
	mongoose = require( 'mongoose' ),
	db_host = `mongodb://localhost/test`;

module.exports = () => {
	return new Promise( ( resolve, reject ) => {
		mongoose.Promise = global.Promise;
		mongoose.set( 'debug', true );

		mongoose.connection
			.on( 'error',  error => reject( error ) )
			.on( 'close', () => ( console.log( 'Db close!' ) ) )
			.once( 'open', res => resolve( mongoose.connections[0] ) );

		mongoose.connect( db_host );
	} );
};

// mongo --host mongodb0.localhost --port 3000
// 	2:28:30
