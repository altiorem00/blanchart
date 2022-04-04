document.addEventListener('DOMContentLoaded', function () {
    const menu = {
            node: document.querySelector('.header__toggle'),
            show() {
                menu.node.classList.add('active');
                document.body.classList.add('overflow--hidden');
            },
            hide() {
                menu.node.classList.remove('active');
                document.body.classList.remove('overflow--hidden');
            },
        },
        burger = document.querySelector('.header__burger'),
        close = document.querySelector('.header__toggle-close'),
        search = document.querySelector('.header__search'),
        searchMenu = document.querySelector('.header__menu'),
        links = document.querySelectorAll('a');

    burger.addEventListener('click', menu.show);
    close.addEventListener('click', menu.hide);
    search.addEventListener('click', () => searchMenu.classList.toggle('active'));
    links.forEach((link) => link.addEventListener('click', menu.hide));
});
