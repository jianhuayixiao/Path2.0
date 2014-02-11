
/*! path-menu by Tunghsiao Liu, 2013-04-12 */

$(function(){
	$(".flyout-btn").click(function(e){
		$(this).toggleClass("btn-rotate");
		$(".flyout").show().toggleClass("expand").removeClass("fade");		
		$(".flyout li a").removeClass("clicked");
	});
	$(".flyout li a").click(function(){
		$(".flyout-btn").removeClass("btn-rotate");
		$(this).parents("ul").addClass("fade").removeClass("expand");
		$(this).addClass("clicked");
	});
});
