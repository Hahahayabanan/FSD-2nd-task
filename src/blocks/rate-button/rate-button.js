import MaterialIcons from '../material-icons/material-icons';

class RateButton {
  constructor(htmlElem) {
    this.isEnoughFullStars = false;
    this.rateButton = htmlElem;

    this.findDOMElements();
    this.init();
  }

  findDOMElements() {
    this.stars = this.rateButton.querySelectorAll('.js-rate-button__label');
  }

  init() {
    this.inputs = Array.from(this.stars, this.initFullStars.bind(this));
  }

  initFullStars(label) {
    if (!this.isEnoughFullStars) {
      const input = label.querySelector('.js-rate-button__input');
      const starIcon = 'star';
      const isChecked = input.getAttribute('checked') !== null || input.getAttribute('checked') === 'checked';
      const materialIcon = new MaterialIcons(label);

      materialIcon.setTextContent(starIcon);

      if (isChecked) {
        this.isEnoughFullStars = true;
      }
    }
  }
}

export default RateButton;
