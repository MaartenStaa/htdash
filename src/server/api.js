var Api = function() {
	function Api(config) {
		this.config = config;
	}

	Api.prototype.blocks = function() {
		return this.config.blocks;
	};

	return Api;
}();

module.exports = Api;
