$(document).ready(function(){
    var body = $("body"),
        w = window.innerWidth,
        bodyWidth = body.width();

    $(window).on("resize", function() {
        scrollNavi();

        if ( bodyWidth > 1024 && body.hasClass("open")) {
            body.toggleClass("open");
        }

        if (bodyWidth < 1024) {
            $(".main").moveTo(1);
            $('.main').off('touchstart swipeDown swipeUp');
        }

        if (bodyWidth > 500) {
            body.removeClass("disabled-onepage-scroll");
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
        $(body).toggleClass("disabled-onepage-scroll");
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
        $('.scroll-down').on('click', function() {
            $('.main').moveDown();
        });

        $(".main").onepage_scroll();
    };

    if (bodyWidth > 500) {
        body.removeClass("disabled-onepage-scroll");
    }

    scrollNavi();

    $(".work-item .anchor").on('click', function(e){
        $('.work-content').find('.content').html('');

        var index = $(this).closest('.work-item').attr("data-id");

        $.ajax({
            type:'GET',
            dataType: 'json',
            url: 'source/json/works.json',
            success: function(data) {
                var reference = data.works[index],
                    title = '<p>' + reference.title + '</p>',
                    featured = '<p>' + reference.featured + '</p>',
                    description = '<p>' + reference.description + '</p>',
                    images,
                    tags;

                $.each(data.works[index].images, function(index, value) {
                    images += '<img src="' + value + '"/>';
                });

                $.each(data.works[index].tags, function(index, value) {
                    tags += '<span>' + value + '</span>';
                });

                html = title + featured + description + images + tags;

                $(".work-content").find(".content").append(html);
            },
            error: function (xhr, ajaxOptions, thrownError) {
                alert(xhr.status);
                alert(thrownError);
            }
        })
    });
});





