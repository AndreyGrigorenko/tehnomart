$(document).ready(function(){
	$(".map-img").click(function(){
		$(".map").addClass("show");
	});
	$(".map-close").click(function(){
		$(".map").removeClass("show");
	});

	$(".write-to-us").click(function(){
		$(".form").slideDown();
	});
	$(".form-close").click(function(){
		$(".form").slideUp();
	});
});