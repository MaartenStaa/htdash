var updateNotifier = require('update-notifier');
var yargs = require('yargs');
var run = require('./run');
var pkg = require('../../package.json');

module.exports = function() {
	updateNotifier({ pkg: pkg }).notify();

	var argv = yargs
		.options({
			port: {
				alias: 'p',
				default: 7070,
				description: 'Port number to listen on',
				requiresArg: true,
				type: 'number',
			},
			host: {
				alias: 'h',
				default: '0.0.0.0',
				description: 'IP address to listen on',
				requiresArg: true,
				type: 'string',
			},
			quiet: {
				alias: 'q',
				default: false,
				description: 'Suppress output',
				type: 'bool',
			},
			config: {
				alias: 'c',
				default: 'config.ini',
				description: 'Path to config INI file',
				requiresArg: true,
				type: 'string',
			},
			help: {
				alias: 'help',
				description: 'Show usage',
			}
		})
		.help('help')
		.epilog('https://github.com/MaartenStaa/htdash')
		.argv;

	run(argv);
};
