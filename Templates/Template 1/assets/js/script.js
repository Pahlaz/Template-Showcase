(function() {
  'use strict';

  // Your custom JavaScript goes here
  $('.toggle-btn').on('click', function(){
		$(this).toggleClass('onclick');
		$('.mobile-nav ul').toggleClass('slide');
	});

})();
