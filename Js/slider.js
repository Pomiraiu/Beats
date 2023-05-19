const slider = $(".products").bxSlider({
pager: false,
controls: false,
});

$(".product--slider__arrow--direction--left").click((e) => {
  e.preventDefault();
  slider.goToPrevSlide();
});

$(".product--slider__arrow--direction--right").click((e) => {
  e.preventDefault();
  slider.goToNextSlide();
});