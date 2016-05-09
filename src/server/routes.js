var api = require('./api');
var express = require('express');

module.exports = {
	register: function(app, config) {
		// Register static files directories.
		app.use('/lib/bootstrap', express.static(__dirname + '/../../node_modules/bootstrap/dist'));
		app.use('/lib/jquery', express.static(__dirname + '/../../node_modules/jquery/dist'));
		app.use(express.static(__dirname + '/public'));

		// Create a new API.
		api = new api(config);

		// Register API routes.
		app.get('/api/blocks', function(req, res) {
			res.send(api.blocks());
		});
	}
};
