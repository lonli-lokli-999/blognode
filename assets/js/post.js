	'use strict';

	const post = new Vue({
		el: '.form-post',

		data: 
		{
			title: null,
			body: null
		},

		methods: 
		{
			enter: function( ev )
			{
				ev.preventDefault();

				let
					body = post.body,
					title= post.title,
					data = { body: body, title: title };

				if( !body || !title ) return false;

				post.body = post.title = null;
				
				axios.post(
					'./', 
					{ body: data }
				)
					.then( res => {
						console.log( res.data )
					} )
			},

			formMessege()
			{
			}
		}
	});
