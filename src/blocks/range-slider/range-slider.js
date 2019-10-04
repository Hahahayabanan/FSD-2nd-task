$(() => {
  const $slider = $('.js-range-slider__slider')
  const $amount = $('.js-range-slider__price')

  $slider.slider({
    range: true,
    min: 1000,
    max: 15000,
    values: [5000, 10000,],
    slide: function setAmountsChanged(event, ui) {
      $amount.val(`${ui.values[0]}₽ - ${  ui.values[1]}₽`);
    },
  });

  const value0 = $slider.slider('values', 0);
  const value1 = $slider.slider('values', 1);

  $amount.val(`${value0} ₽ - ${value1} ₽`);
});
