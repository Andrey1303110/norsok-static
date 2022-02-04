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

    $('.arrow.arrow_right').last().css('display', 'none');

    let isPlayed = false;

    $('button.play').click(function(){
        isPlayed = true;
        $('.video-section').css('left', '0vw');
        $('video')[0].src = 'media/video/'+ $(this)[0].dataset.name +'.mp4';
        $('video')[0].poster = 'media/images/poster_'+ $(this)[0].dataset.name +'.png';
        $('.video-section').on('transitionend webkitTransitionEnd oTransitionEnd', function () {
            if (isPlayed) $('video')[0].play();
        })
    })

    $('video').on('ended', function(){
        isPlayed = false;
        $('.video-section').css('left', '100vw');
        $(this)[0].currentTime = '0';
    })
    $('.video-section .close').click(function(){
        isPlayed = false;
        $(this).css('transform', 'rotate(360deg)');
        $(this).on('transitionend webkitTransitionEnd oTransitionEnd', function () {
            $('.video-section').css('left', '100vw');
            $('video')[0].pause()
            $('video')[0].currentTime = '0';
            $('.video-section .close').css('transform', 'rotate(0deg)');
        });
    })

    var date = new Date(0);
    date.setSeconds(98); // specify value for SECONDS here
    var timeString = date.toISOString().substr(11, 8);
    console.log(timeString)
})