var compression = require('compression');
var express = require('express');
var routes = require('./routes');

var App = function() {
	function App() {
		this.express = express();
	}

	App.prototype.configure = function(config) {
		this.config = config;

		// Register all routes.
		routes.register(this.express, config);

		// Use GZip compression.
		this.express.use(compression());

		// Disable advertising ourselves in the HTTP header.
		this.express.set('x-powered-by', false);
	};

	App.prototype.run = function() {
		var self = this;

		this.express.listen(this.config.port, this.config.host, function() {
			console.log('Now listening at ' + self.config.host + ':' + self.config.port);
		});
	};

	return App;
}();

module.exports = App;
