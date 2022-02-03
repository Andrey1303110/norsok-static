$(document).ready(function(){
    $('.main-section').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 650,
        arrows: true,
        dots: true,
        infinite: false,
        prevArrow: $('.prev'),
        nextArrow: $('.next'),
    })
})