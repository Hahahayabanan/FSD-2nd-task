class RateButton {
  constructor(htmlElem) {
    this.isEnoughFullStars = false;
    this.rateButton = htmlElem;

    this.findDOMElements();
    this.init();
  }

  findDOMElements() {
    this.stars = this.rateButton.querySelectorAll('.rate-button__label');
  }

  init() {
    this.inputs = Array.from(this.stars, this.initFullStars.bind(this));
  }

  initFullStars(label) {
    if (!this.isEnoughFullStars) {
      const input = label.querySelector('.rate-button__input');
      const starIcon = 'star';
      const isChecked = input.getAttribute('checked') === 'checked';
      const materialIcon = label.querySelector('.material-icons');

      materialIcon.textContent = starIcon;

      if (isChecked) {
        this.isEnoughFullStars = true;
      }
    }
  }
}

export default RateButton;
