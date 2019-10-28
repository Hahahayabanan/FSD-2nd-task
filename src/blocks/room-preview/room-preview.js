import 'slick-carousel';
import 'slick-carousel/slick/slick-theme.scss';
import 'slick-carousel/slick/slick.scss';

class RoomPreview {
  constructor(preview) {
    this.$preview = $(preview);
    this.hasArrows = false;

    this.findDOMElements();
    this.checkArrows(this.$slider);
    this.initSlider();
  }

  findDOMElements() {
    this.$slider = this.$preview.find('.js-room-preview__slider');
  }

  checkArrows(element) {
    if ($(element).hasClass('room-preview__slider_with-arrows')) {
      this.hasArrows = true;
    }
  }

  initSlider() {
    this.$slider.slick({
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      arrows: this.hasArrows,
      useCSS: false,
    });
  }
}

export default RoomPreview;
