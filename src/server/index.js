var app = require('./app');

module.exports = {
	create: function() {
		return new app();
	}
};
