$(document).ready(function(){
	$(".map-img").click(function(){
		$(".map").addClass("show");
	});
	$(".form-close").click(function(){
		$(".map").removeClass("show");
	});


	$(".write-to-us").click(function(){
		$(".form").slideDown();
	});
	$(".form-close").click(function(){
		$(".form").slideUp();
	});


	$(".buy").click(function(){
		$(".add-product-form").addClass("show");
	});

	$(".form-close, .add-product-block-2 a:last-child").click(function(){
		$(".add-product-form").removeClass("show");
	
	});
});