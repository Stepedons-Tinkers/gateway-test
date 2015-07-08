'use strict';

var User = require( '../models' ).User;

module.exports = {
  up: function (queryInterface, Sequelize) {

		return User
			.create( {
				'first_name' : 'Gideon',
				'last_name'  : 'Rosales'
			} )
			.then( function () {
			} );
  },

  down: function (queryInterface, Sequelize) {

		return queryInterface.sequelize.query( 'delete from Users' );
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
