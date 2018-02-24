// top to bottom button
$('.top-to-bottom').on('click', function () {
	$('body, html').animate({
		scrollTop: $('nav').position().top
	}, 1000);
});

// bottom to top button
$('.bottom-to-top').on('click', function () {
	$('body, html').animate({
		scrollTop: '0'
	}, 1000);
});


$(window).scroll(function(){
		let scroll = $(window).scrollTop();

		$('header .logo').css({
	    	'transform' : 'translate(-50%, -50%) translateY('+ scroll /3 +'%)'
	  	});

		$('header .top-to-bottom').css({
	    	'transform' : 'translateX(-50%) translateY('+ scroll /19 +'%)'
	  	});

  	if(scroll >  400){
  		$('.bottom-to-top').show();
  	}else{
  		$('.bottom-to-top').hide();
  	}

});


// changing image
var change = function() {
	var current = $('.slider img.current');
	var previous = current.prev();

	if(!previous.length){
		previous = $('.slider img:last');
	}

	current.animate({opacity: 0}, 2000, function() {
		current.removeClass('current');
	});
	previous.animate({opacity: 1}, 2000, function() {
		previous.addClass('current');
	});
};
setInterval(change, 2000);
