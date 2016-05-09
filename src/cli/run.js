var art = require('./art');
var chalk = require('chalk');
var ini = require('ini');
var fs = require('fs');
var server = require('../server');

module.exports = function(argv) {
	// Disable output if quiet was set.
	if (argv.quiet) {
		console.log = function() {};
	}

	// Set debug function.
	console.debug = argv.debug ? console.log : function() {};

	// Welcome screen.
	console.log(chalk.yellow(art));

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

	// Add the options passed via CLI.
	config.debug = argv.debug;
	config.host = argv.host;
	config.port = argv.port;

	// Start the server.
	var app = server.create();
	app.configure(config);
	app.run();
};
