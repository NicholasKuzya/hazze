$(function($){
    $(window).on('load', function () {
        $(".preloader-item").fadeOut();
        $("#preload").delay(200).fadeOut("slow");
    
    $('.b-gallery-controls li').on('click', function () {
        $('.b-gallery-controls li').removeClass('active');
        $(this).addClass('active');
    });
    $('.b-counter-info-numbers').each(function(){
        $(this).prop('Counter', 0).animate({
            Counter:$(this).text()
        },
        {
           duration: 5000,
           easing: "swing",
           step:function(now){
               $(this).text(Math.ceil(now));
           } 
        });
    });
    if ($('.b-gallery-filter').length > 0) {
        var containerEl = document.querySelector('.b-gallery-filter');
        var mixer = mixitup(containerEl);
    }
    $(".testimonial-slider").owlCarousel({
    items: 2,
    dots: true,
    autoplay: true,
    loop: true,
    smartSpeed: 1200,
    margin: 0,
    responsive: {
        320: {
            items: 1,
        },
        480: {
            items: 1,
        },
        992: {
            items: 2,
        }
    }
});
});

});



