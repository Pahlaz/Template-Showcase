$(function(){
	var windowWidth = window.innerWidth;
	
	if(windowWidth > 600){
		$('nav ul').show();
	}

	// Menu Button
	$('.toggle-btn').on('click', function(){
		$(this).toggleClass('onclick');
		$('nav ul').toggleClass('visible');
	});

	$(window).scroll(function(){
		var yscroll = $(window).scrollTop();
		
		// Landing Elements
		if(yscroll > $('.container').offset().top - ($(window).height() / 1.4)) {

		    $('.container .item').each(function(i){
		      setTimeout(function(){
		        $('.container .item').eq(i).animate({
					'opacity': '1'
				}, 500);
		      }, (700 * (Math.exp(i * 0.14))) - 700);
		    });
		    
		}
	});

	// Image Slider
	var leftarrow = $('.slider .left');
	var rightarrow = $('.slider .right');

	leftarrow.click(function(){
	    var left = $(this).siblings('.container').css('margin-left').replace('px', '');
	    
	    left = parseInt(left)+310;
	    if(left <=  50)
	    	$('.container').animate({'margin-left': left},500);
	});
	rightarrow.click(function(){
		var total = $(this).siblings('.container').children('.item').length;
	    var left = $(this).siblings('.container').css('margin-left').replace('px', '') - 310;
	    
	    if(left >= -(total-4)*310)
	    	$('.container').animate({'margin-left': left},500);
	});



});