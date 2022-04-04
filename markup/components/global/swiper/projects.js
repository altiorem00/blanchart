new Swiper('.swiper--projects', {
    speed: 400,
    spaceBetween: 38,
    slidesPerView: 1,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 34,
        },
        1024: {
            slidesPerView: 2,
            spaceBetween: 50,
        },
        1440: {
            slidesPerView: 3,
        },
    },
});
