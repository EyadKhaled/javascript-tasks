$(function(){

	$("a").click(function(){

		$("html, body").animate({

			scrollTop: $("#" + $(this).data("smooth")).offset().top

		}, 1000)

	});

	$("html").niceScroll();

});