var art = require('./art');
var chalk = require('chalk');
var ini = require('ini');
var fs = require('fs');

module.exports = function(argv) {
	// Disable output if quiet was set.
	if (argv.quiet) {
		console.log = function() {};
	}

	// Set debug function.
	console.debug = argv.debug ? console.log : function() {};

	// Welcome screen.
	console.log(art);

	// If asking for the version, quit here (art includes the version number).
	if (argv.version) {
		return;
	}

	// Load configuration file.
	try {
		var config = ini.parse(fs.readFileSync(argv.config, 'utf-8'));
	} catch (err) {
		console.error(chalk.red('Failed to read configuration file.'));
		throw err;
	}
};
