$(function () {


    //====  sticky menu ====// 
    $(window).on('scroll', function (event) {
        var scroll = $(window).scrollTop();
        if (scroll < 800) {
            $(".nav_menu").removeClass("sticky");
        } else {
            $(".nav_menu").addClass("sticky");
        }
    });


    //====  slick slider ====/
    $('.slider_wrapper').slick({
        dots: true,
        vertical: false,
        infinite: false,
        speed: 1000,
        fade: false,
        autoplay: true,
        arrows: false,
        pauseOnHover: true,

    })

    //====  venobox video ====/ 
    $('.st_player').venobox();



    //====  mixitup ====/
    var mixer = mixitup('#work_area');



    //====  slick slider ====/
    $('.slider2nd_wrapper').slick({
        dots: true,
        vertical: false,
        infinite: false,
        speed: 1000,
        fade: false,
        autoplay: true,
        arrows: false,
        pauseOnHover: true,

    })


    //    mobile menu
    $(".navbar-toggler").on('click', function () {
        $(this).toggleClass("active");
    });









    //====  banner text wrap ====/
    $('.btext_wrap').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 4000,
        dots: false,
    });


    //====  SmoothScroll ====/
    var scroll = new SmoothScroll('a[href*="#"]', {
        speed: 300
    });





    //====  counterUp ====/ 
    $('.counter').counterUp({
        delay: 10,
        time: 1000,
    });


    //====  venobox image ====/ 
    $('.venobox').venobox({
        framewidth: '300px',
        spinner: 'wave'
    });





    //====  sticky menu ====/  
    $(window).on('scroll', function (event) {
        if ($(this).scrollTop() > 600) {
            $('.back-to-top').fadeIn(200)
        } else {
            $('.back-to-top').fadeOut(200)
        }
    });


    //====  back-to-top ====/ 
    $('.back-to-top').on('click', function (event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: 0,
        }, 1500);
    });


    //====  preloader ====/ 
    $(window).on('load', function (event) {
        $('.preloader').delay(500).fadeOut(500);
    });


    //====  close btn ====/ 
    $(".nav_btn").click(function () {
        $(".cart").toggleClass("nav_active");
    });
});
