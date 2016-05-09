$(function() {
	var api = {
		blocks: 'api/blocks',
	};

	var views = {
		block: function(type) {
			return 'views/blocks/' + type + '.html';
		}
	}

	var $container = $('#blocks');

	var htd = {
		init: function() {
			$.get(api.blocks, function(result) {
				for (var i = 0; i < result.length; ++i) {
					htd.add(result[i]);
				}
			});
		},
		add: function(type) {
			var $elem = $('<div />').appendTo($container);

			$.get(views.block(type), function(result) {
				$elem.replaceWith(result);
			});
		}
	};

	htd.init();
});
