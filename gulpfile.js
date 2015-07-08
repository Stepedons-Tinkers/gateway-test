'use strict';

/* eslint no-process-exit:0 */

// Load third party modules
var gulp  = require( 'gulp' );
var mocha = require( 'gulp-mocha' );

var paths = {
	'test'     : [ 'test/**/*.js' ]
};

gulp.task( 'test', function () {
	var mochaOptions = {
		'ui'       : 'bdd',
		'reporter' : 'spec',
		'bail'     : true,
		'timeout'  : 5000
	};

	return gulp.src( paths.test, { 'read' : true } )

				.pipe( mocha( mochaOptions ) )

				.once( 'error', function () {
					process.exit( 1 );
				} )

				.once( 'end', function () {
					process.exit();
				} );

} );
