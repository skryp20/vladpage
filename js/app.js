// ======== Додаємо бургер меню

const nav = document.querySelector('.nav');
const navToggle = document.querySelector('.navToggle');

navToggle.addEventListener('click', function () {
    nav.classList.toggle('header__show')
})

// ====== Показуємо шапку при скролі

let header = document.querySelector('.header');

window.addEventListener('scroll', function () {
    let scroll = scrollY;

    if (scroll > 765) {
        header.classList.add('header--fixed')
    } else {
        header.classList.remove('header--fixed')
    }
})

// ======== Додаємо слайдер та налаштовуємо його

const swiper = new Swiper('.home__slider', {
    loop: true,

    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    effect: "fade",

    pagination: {
        el: '.swiper-pagination',
    },

});