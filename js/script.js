$(document).ready(function() {

	// Needed for SmoothScroll.js
	var scroll = new SmoothScroll('a[href*="#"]');

	// Needed for an edge case when Home is the active page
	$(window).scroll(function() {
		if ($(".active").length == 0) {
			$("#home-nav").addClass("active");
		}
	});

});
