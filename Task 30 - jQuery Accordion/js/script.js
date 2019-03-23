$(document).ready(function(){
	$(".showenBox").click(function(){
		$(this).next().slideToggle();
		$(".showenBox").not(this).next().slideUp();
	})
})