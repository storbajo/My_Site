$(document).ready(function(){
	var body = $("body"),
		w = window.innerWidth,
		bodyWidth = body.width();

	$(window).on("resize", function() {
		scrollNavi();

		if( bodyWidth > 1024 && body.hasClass("open")) {
			body.toggleClass("open");
		}

		if(bodyWidth < 1024) {
			$(".main").moveTo(1);
			$('.main').off('touchstart swipeDown swipeUp');
		}
	});

	$(".nav-anchor").on('click', function(){
		if(bodyWidth < 1024 && body.hasClass("open")) {
			$(this).parents().find(body).removeClass('open');
		}
	});

	$("section, .scroll-down").on("mouseenter mouseleave click", function() {
		if(bodyWidth < 1024) {
			$('.main').off('touchstart swipeDown swipeUp');
		}
	});


	$("#nav-icon").click(function(){
		$(this).parents().find("body").toggleClass("open");
	});

	$(".nav-anchor").on('click', function() {
		$(".nav-anchor").removeClass('active');
		var currentTarget = $(this).attr('data-index');
		$(this).moveTo(currentTarget);
		$(this).addClass("active");
		$(".onepage-wrapper .section").scrollTop(0);
	});

	$(".logo").on('click', function() {
		$(this).moveTo(1);
		body.removeClass("open");
	});

	$(".work-item .image").each(function(){
   		var bgImg = $(this).data("image");
   		if($("html").hasClass("ie8")){
   			$(this).append("<img src='" + bgImg  +"'>")
   		} else{
			$(this).css("background-image", "url('" + bgImg + "')");
		}
	});

	function scrollNavi() {
		if (w > 500) {
			$('.scroll-down').on('click', function() {
				$('.main').moveDown();
			});

			$(".main").onepage_scroll();
		}
	};

	scrollNavi();

});





