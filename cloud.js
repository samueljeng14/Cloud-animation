jQuery(document).ready(function($) {

	$("#white, #black").click(function() {
		$("#white").toggleClass('hide');
		$("#black").toggleClass('show');
		$(".reBackground").toggleClass('show');
		$("#sign1, #sign2").toggleClass('strokeBlack');
	});


	$('.full').click(function() {
		if (screenfull.enabled) {
		    screenfull.request();
		}
		$(".full").toggleClass('hide');
		$(".notFull").toggleClass('show');
		$(".full").css('zIndex', '1');		
	});


	$('.notFull').click(function() {
		if (screenfull.enabled) {
		    screenfull.exit();
		}
	$(".full").toggleClass('hide');
	$(".notFull").toggleClass('show');
	$(".full").css('zIndex', '5');
	});

});

