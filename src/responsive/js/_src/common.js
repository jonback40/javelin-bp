(function() {
	
	
	'use strict';
	
	
	var $win = $(window),
		$body = $('body'),
		$navControls = $('.toggle-nav'),
		$navBody = $('.page-nav-body'),
		
		scrollTop = 0;
	
	
	// Register event listeners
	$navControls.click(toggleNavigation);
	
	
	// ----------------------------------------------------------------------------------------------------
	
	
	// Handle window scroll events
	function onScroll() {
		scrollTop = $win.scrollTop();
	}
	
	
	// Toggle navigation menu for smaller
	function toggleNavigation(event) {
		event.preventDefault();
		
		if ($body.hasClass('nav-is-active')) {
			$body.removeClass('nav-is-active');
		} else {
			$body.addClass('nav-is-active');
			$navBody.scrollTop(0);
		}
	}
	
	
})();