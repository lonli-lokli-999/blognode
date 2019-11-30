// require lib
//=====================================
var 
	express = require('express'),
	ejs= require('ejs'),
	ejsLocales = require('ejs-locals'),
	bp = require('body-parser');

// settings express
//=====================================
const
	app = express();

// settings ejs
//=====================================
app.engine('ejs', ejsLocales );
app.set('views', __dirname + '/templates');
app.set( 'view engine', 'ejs' );

// settings body parser
//=====================================
app.use( bp.urlencoded( { estended: true } ) );

// settings assets
//=====================================
app.use( '/img', express.static( __dirname + '/assets/img'));
app.use( '/js', express.static( __dirname + '/assets/js'));
app.use( '/css', express.static( __dirname + '/assets/css'));
app.use( '/storage', express.static( __dirname + '/storage'));

// routing
//=====================================
app.get('/', (req, res) => {
	var dataFrontPage = require( './configs/front-page-config.js' );
	res.render( 'index', dataFrontPage )
});

// export app
//=====================================
module.exports = app;
