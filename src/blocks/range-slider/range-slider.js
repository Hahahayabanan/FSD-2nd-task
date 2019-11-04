import 'ion-rangeslider/css/ion.rangeSlider.min.css';
import 'ion-rangeslider/js/ion.rangeSlider.min';

class RangeSlider {
  constructor(elem) {
    this.$sliderContainer = $(elem);
    this.findDOMElements();
    this.initSlider();
  }

  findDOMElements() {
    this.$slider = this.$sliderContainer.find('.js-range-slider__slider');
    this.$amount = this.$sliderContainer.find('.js-range-slider__price');
  }

  initSlider() {
    const { $amount } = this;
    this.$slider.ionRangeSlider({
      onStart(data) {
        const { from, to } = data;
        $amount.val(`${from}₽ - ${to}₽`);
      },
      onChange(data) {
        const { from, to } = data;
        $amount.val(`${from}₽ - ${to}₽`);
      },
    });
  }
}

export default RangeSlider;
