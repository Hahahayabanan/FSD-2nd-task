class OptionButton {
  constructor(type, container) {
    this.type = type;
    this.containerHTML = container;

    this.init();
  }

  init() {
    this.buttonHTML = this.containerHTML.querySelector(`.js-option-button__${this.type}`);
  }

  getButton() {
    return this.buttonHTML;
  }

  hide() {
    if (this.buttonHTML) this.buttonHTML.classList.add('option-button_hidden');
  }

  show() {
    if (this.buttonHTML) this.buttonHTML.classList.remove('option-button_hidden');
  }

  eventListenerBind(type, fn) {
    if (this.buttonHTML) this.buttonHTML.addEventListener(type, fn);
  }
}

export default OptionButton;
