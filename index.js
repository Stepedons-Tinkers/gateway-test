'use strict';

var http     = require( 'http' );
var wascally = require( 'wascally' );
var lapin    = require( 'lapin' )( wascally );
var fs       = require( 'fs' );

fs.writeFileSync( './node.pid', process.pid, 'utf-8' );

console.log( 'Go now Stepedons' );
wascally
	.configure( {
		'connection' : {
			'server' : 'rabbitmq',
			'port' : 5672,
			'user' : 'guest',
			'pass' : 'guest'
		}
	} )
	.done( function () {

		console.log( 'Rabbitmq started' );

		http
			.createServer( function ( request, response ) {

				var message = {
					'data' : 'Hello World'
				};

				lapin.requestPromise( 'v1.test.test', message )
					.then( function ( result ) {
						return response.end( result.data );
					} )
					.catch( function ( error ) {
						return response.end( 'Something went wrong' );
					} );

			} ).listen( 3333 );

		console.log( 'Server started listening on 3333' );

	} );
