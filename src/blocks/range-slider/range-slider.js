$(() => {
  const $slider = $('.js-range-slider__slider')
  const $amount = $('.js-range-slider__price')

  $slider.ionRangeSlider({
    onStart (data) {
      $amount.val(`${data.from}₽ - ${data.to}₽`);
    },
    onChange (data) {
      $amount.val(`${data.from}₽ - ${data.to}₽`);
    },
  });

})
