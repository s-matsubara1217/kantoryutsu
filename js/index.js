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
