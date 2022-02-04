$(document).ready(function(){
    $('.main-section').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1000,
        arrows: true,
        dots: false,
        infinite: false,
        prevArrow: $('.arrow.arrow_left'),
        nextArrow: $('.arrow.arrow_right'),
    })

    $('button.play').click(function(){
        $('.video-section').css('left', '0vw');
    })
    $('video').on('ended', function(){
        $('.video-section').css('left', '100vw');
        $(this)[0].currentTime = '0';
    })
})