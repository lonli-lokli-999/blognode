var
	app = require('./app');
	db = require('./db');


db()
	.then( ( info ) => {
		console.log( `${info.host} / ${info.name} :: Connecting to db done!` );

		app.listen( 4000, () => {
			console.log( `Listening Port http://localhost:` );
		} );
	} )
	.catch( (error) => {
		console.log( error )
	} );
