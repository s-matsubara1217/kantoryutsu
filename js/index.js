/*-------------------------------
  新着求人情報 swiper
-------------------------------*/
const newjobsSwiper = new Swiper('.newjobs__container', {

  slidesPerView: 1,
  spaceBetween: 12,
  loop: true,
  loopAdditionalSlides: 5,
  speed: 500,
  autoplay: {
    delay: 3000
  },

  pagination: {
    el: '.newjobs__pagination',
    type: 'bullets'
  },

  navigation: {
    nextEl: '.newjobs__button-next',
    prevEl: '.newjobs__button-prev',
  },

});
