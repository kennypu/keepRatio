(function($) {
	$.fn.keepRatio = function(options) {
		var defaults = {
			width: 560,
			height: 315,
			useELementDimensions : false
		}
		var settings = {};
		var el = this;
		settings = $.extend({}, defaults, options);

		if(settings.useELementDimensions) {
			settings.width = this.attr('width');
			settings.height = this.attr('height');
		}
		settings.ratio = settings.width / settings.height;

		//setEvents
		setRatio();

		$(window).on('resize',setRatio);

		function setRatio() {
			var current_width, new_height;
			current_width = el.parent().width(); 
			el.width(current_width);

			new_height = current_width / settings.ratio;
			el.height(new_height);
		}

	}
})(jQuery);