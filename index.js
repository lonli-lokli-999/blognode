	'use strict';

var
	app = require('./app'),
	db = require('./db'),
	port = 4000;


db()
	.then( ( info ) => {
		console.log( `${info.host} / ${info.name} :: Connecting to db done!` );

		app.listen( port, () => {
			console.log(  '\x1b[36m%s\x1b[0m', `http://localhost:${port}` );
		} );
	} )
	.catch( (error) => {
		console.log( error )
	} );
