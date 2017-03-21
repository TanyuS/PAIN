var main =
webpackJsonp_name_([0,3],[
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
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
		$(document).on("scroll.head", stickHeaderOnScroll);
	}
	stickHeaderOnScroll();
};

/***/ }),
/* 1 */,
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//import "../../app/less/base.less";

var stickymenu = __webpack_require__(0);

stickymenu();
exports.stickymenu = stickymenu;

/***/ })
],[2]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9hcHAvc2NyaXB0cy9zdGlja3ltZW51LmpzIiwid2VicGFjazovLy9hcHAvc2NyaXB0cy9tYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XHJcblx0dmFyIHMgPSAkKFwiI2FkZGl0aW9uYWwtbWVudVwiKTtcclxuXHRmdW5jdGlvbiBzdGlja0hlYWRlck9uU2Nyb2xsKCkge1xyXG5cdFx0dmFyIHBvcyA9ICQoXCIuYmxvY2tfaGVhZFwiKS5vZmZzZXQoKSxcclxuXHRcdFx0d2luZG93cG9zID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xyXG5cclxuXHRcdGlmIChwb3MgJiYgd2luZG93cG9zID4gcG9zLnRvcCkge1xyXG5cdFx0XHRzLmFkZENsYXNzKFwic3RpY2tcIik7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRzLnJlbW92ZUNsYXNzKFwic3RpY2tcIik7XHJcblx0XHR9XHJcblx0fVxyXG5cdGlmIChzLmxlbmd0aCkge1xyXG5cdFx0JChkb2N1bWVudCkub24oXCJzY3JvbGwuaGVhZFwiLHN0aWNrSGVhZGVyT25TY3JvbGwpO1xyXG5cdH1cclxuXHRzdGlja0hlYWRlck9uU2Nyb2xsKCk7XHJcblxyXG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBhcHAvc2NyaXB0cy9zdGlja3ltZW51LmpzIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuLy9pbXBvcnQgXCIuLi8uLi9hcHAvbGVzcy9iYXNlLmxlc3NcIjtcclxuXHJcbnZhciBzdGlja3ltZW51ID0gcmVxdWlyZShcIi4vc3RpY2t5bWVudVwiKTtcclxuXHJcbnN0aWNreW1lbnUoKTtcclxuZXhwb3J0cy5zdGlja3ltZW51ID0gc3RpY2t5bWVudTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gYXBwL3NjcmlwdHMvbWFpbi5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OzsiLCJzb3VyY2VSb290IjoiIn0=