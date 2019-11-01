class DateTextField {
  constructor($container, type) {
    this.$container = $container;
    this.type = type;

    this.setDOMElements();
  }

  setDOMElements() {
    this.$dateTextField = this.$container.find(`.js-date-text-field__input-${this.type}-date > input`);
  }

  get$Element() {
    return this.$dateTextField;
  }

  eventListenerBind(type, fn) {
    if (this.$dateTextField) this.$dateTextField.on(type, fn);
  }
}

export default DateTextField;
