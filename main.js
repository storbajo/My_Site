$(document).ready(function(){
	var body = $("body"),
		bodyWidth = body.width();

	$(window).on("resize", function() {
		if( bodyWidth > 1024 && body.hasClass("open")) {
			body.toggleClass("open");
		}
	});

	$("#nav-icon").click(function(){
		$(this).parents().find("body").toggleClass("open");
	});
});



