new Swiper('.swiper--news', {
    speed: 400,
    spaceBetween: 38,
    slidesPerView: 1,
    slidesPerGroup: 1,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 34,
            slidesPerGroup: 2,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 27,
            slidesPerGroup: 3,
        },
        1440: {
            slidesPerView: 3,
            spaceBetween: 50,
            slidesPerGroup: 3,
        },
    },
});
