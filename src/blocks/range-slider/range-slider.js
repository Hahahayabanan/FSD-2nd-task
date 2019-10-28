import 'ion-rangeslider/css/ion.rangeSlider.min.css';
import 'ion-rangeslider/js/ion.rangeSlider.min';

class RangeSlider {
  constructor(elem) {
    this.$elem = $(elem);
    this.findDOMElements();
    this.initSlider();
  }

  findDOMElements() {
    this.$slider = this.$elem.find('.js-range-slider__slider');
    this.$amount = this.$elem.find('.js-range-slider__price');
  }

  initSlider() {
    const { $amount } = this;
    this.$slider.ionRangeSlider({
      onStart(data) {
        $amount.val(`${data.from}₽ - ${data.to}₽`);
      },
      onChange(data) {
        $amount.val(`${data.from}₽ - ${data.to}₽`);
      },
    });
  }
}

export default RangeSlider;
