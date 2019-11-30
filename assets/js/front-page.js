	'use strict';
		
	const nav = new Vue({
		el: '.page-content',
		data: {
			trash: null
		},
		created: function() {
			axios.get( './storage/front-page.json' )
				.then( ( response ) => {
					let response_data = response.data,
					_nav = this;
					Object.keys( response_data )
						.forEach( ( param ) => {
							_nav[ param ] = response_data[ param ]; 
						} )
					
				} );
		}
	});

	
