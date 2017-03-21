'use strict';

module.exports = function() {
	var s = $("#additional-menu");
	function stickHeaderOnScroll() {
		var pos = $(".block_head").offset(),
			windowpos = $(window).scrollTop();

		if (pos && windowpos > pos.top) {
			s.addClass("stick");
		} else {
			s.removeClass("stick");
		}
	}
	if (s.length) {
		$(document).on("scroll.head",stickHeaderOnScroll);
	}
	stickHeaderOnScroll();

};