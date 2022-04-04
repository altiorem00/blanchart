new Swiper('.swiper--gallery', {
    speed: 400,
    spaceBetween: 38,
    slidesPerView: 1,
    slidesPerGroup: 1,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 38,
            slidesPerGroup: 2,
        },
        1024: {
            slidesPerView: 2,
            spaceBetween: 34,
            slidesPerGroup: 2,
        },
        1440: {
            slidesPerView: 3,
            spaceBetween: 50,
            slidesPerGroup: 3,
        },
    },
});
