const MainSlide = new Swiper('.main_slide', {
    loop: true,
});

const leftArrow = document.querySelector('#MainVisual .arrows .left');
leftArrow.addEventListener('click', function () {
    MainSlide.slidePrev();
});
const rightArrow = document.querySelector('#MainVisual .arrows .right');
rightArrow.addEventListener('click', function () {
    MainSlide.slideNext();
});

const proSlide = new Swiper('.pro_slide', {
    loop: true,
    // 3개이상부터 루프안돌아
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
        el: ".sbar",
        type: "progressbar",
        clickable: true,
    },

    breakpoints: {
        540: {
            slidesPerView: 3,
        }
    }
});

const mobileBtn = document.querySelector('.mobile_btn');
const GNB = document.querySelector('#gnb');
const H1 = document.querySelector('h1');

mobileBtn.addEventListener('click', function () {
    GNB.classList.toggle('on');
    H1.classList.toggle('on');
});

GNB.addEventListener('wheel', function (e) {
    if (GNB.classList.contains('on')) {
        e.preventDefault();
    }
});