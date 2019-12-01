	'use strict';

// require lib
//=====================================
const express		= require('express');
const ejs			= require('ejs');
const ejsLocales	= require('ejs-locals');
const bp			= require('body-parser');

// settings express
//=====================================
const
	app = express();

// settings ejs
//=====================================
app.engine('ejs', ejsLocales );
app.set('views', __dirname + '/templates');
app.set( 'view engine', 'ejs' );

// run body parser
//=====================================
app.use( bp() );

// settings assets
//=====================================
app.use( '/img', express.static( __dirname + '/assets/img') );
app.use( '/js', express.static( __dirname + '/assets/js') );
app.use( '/css', express.static( __dirname + '/assets/css') );
app.use( '/storage', express.static( __dirname + '/storage') );

// models require
//=====================================
const Post = require( './models/post' );

// routing
//=====================================

// front page
app.get('/', (req, res) => {
	let dataFrontPage = require( './configs/front-page-config.js' );
	
	Post.find({})
		.then( posts => {
			dataFrontPage.posts = posts;
			res.render( 'index', dataFrontPage )	
		} )
});

app.post('/', (req, res) => {
	let { title, body } = req.body.body;

	Post.create({
		title: title,
		body: body,
	})
});

// export app
//=====================================
module.exports = app;
