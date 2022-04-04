document.addEventListener('DOMContentLoaded', function () {
    const data = [
        {
            id: 'p1',
            img: '/static/img/content/catalog/catalog.jpg',
            desc: 'Один из ведущих флорентийских художников Кватроченто, основатель художественной династии, которую продолжили его брат Давид и сын Ридольфо. Глава художественной мастерской, где юный Микеланджело в течение года овладевал профессиональными навыками. Автор фресковых циклов, в которых выпукло, со всевозможными подробностями показана домашняя жизнь библейских персонажей (в их роли выступают знатные граждане Флоренции в костюмах того времени).',
            date: '2 июня 1448 — 11 января 1494.',
            name: 'Доменико Гирландайо',
        },
        {
            id: 'p2',
            img: '/static/img/content/catalog/catalog2.jpg',
            desc: 'Бенедетто ди Биндо Бергоньоне, Амброджо Биссоло, Франческо Больтраффио, Джованни Бонсиньори, Франческо Боттичини, Рафаэлло Брамантино Бреа, Людовико Бьяджо д’Антонио Туччи',
            date: '20 июня 1448 — 1 января 1494123.',
            name: 'Гирландайо Гирландайо',
        },
    ];
    const info = document.querySelector('.catalog__info');
    const img = document.querySelector('.catalog__info-img');
    const date = document.querySelector('.catalog__info-date');
    const desc = document.querySelector('.catalog__info-desc');
    const name = document.querySelector('.catalog__info-name');

    document.querySelectorAll('.catalog__items-link').forEach((link) => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const { target } = link.dataset;
            const currentData = data.find((el) => el.id === target);
            if (document.body.clientWidth < 1024) {
                info.scrollIntoView({behavior: "smooth", block: "center"});
            }
            if (currentData) {
                document.querySelector('.catalog__slug--large').classList.add('d-none');
                document.querySelector('.catalog__info').classList.remove('d-none');
                img.src = currentData.img;
                img.alt = currentData.name;
                date.innerHTML = currentData.date;
                desc.innerHTML = currentData.desc;
                name.innerHTML = currentData.name;
            } else {
                document.querySelector('.catalog__slug--large').classList.remove('d-none');
                document.querySelector('.catalog__info').classList.add('d-none');
            }
        });
    });
});
