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


/*-------------------------------
  固定ヘッダー 表示 / 非表示
-------------------------------*/
function FixedAnime() {
  const mainVisualH = $('.mainVisual').outerHeight(true);
  const scroll = $(window).scrollTop();
  if (scroll >= mainVisualH) {
    $('.header').addClass('visible');
  } else {
    $('.header').removeClass('visible');
  }
}
$(window).scroll(function () {
	FixedAnime();
});
