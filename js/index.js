/*-------------------------------
  新着求人情報 swiper
-------------------------------*/
const newjobsSwiper = new Swiper('.newjobs__container', {

  slidesPerView: 1,
  spaceBetween: 12,
  loop: true,

  pagination: {
    el: '.newjobs__pagination',
    type: 'bullets'
  },

  navigation: {
    nextEl: '.newjobs__button-next',
    prevEl: '.newjobs__button-prev',
  },

});