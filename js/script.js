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

    $('.arrow.arrow_right')[$('.arrow.arrow_right').length-1].disabled = true

    $('button.play').click(function(){
        $('.video-section').css('left', '0vw');
        $('video')[0].src = 'media/video/'+ $(this)[0].dataset.name +'.mp4';
        $('video')[0].poster = 'media/images/poster_'+ $(this)[0].dataset.name +'.png';
    })

    $('video').on('ended', function(){
        $('.video-section').css('left', '100vw');
        $(this)[0].currentTime = '0';
    })
    $('.video-section .close').click(function(){
        $(this).css('transform', 'rotate(360deg)');
        $(this).on('transitionend webkitTransitionEnd oTransitionEnd', function () {
            $('.video-section').css('left', '100vw');
            $(this)[0].currentTime = '0';
            $('.video-section .close').css('transform', 'rotate(0deg)');
        });
    })
})