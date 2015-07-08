'use strict';

var User = require( '../models' ).User;

require( 'should' );

describe( 'Query gideon rosales', function() {

	var response;

	before( function( done ) {

		User.find( {
			'where' : {
				'first_name' : 'Gideon'
			}
		} )
			.then( function( user ) {
				response = user;
				done();
			} )
			.catch( function( error ) {
			} );

	} );

	it( 'Successfull query gideon', function() {
		response.dataValues.should.be.an.instanceOf( Object );
		var user = response.dataValues;
		user.should.have.property( 'id' );
	} );

} );
