import TextField from '../text-field/text-field';

class DateTextField {
  constructor($container, type) {
    this.$container = $container;
    this.type = type;

    this.setDOMElements();
    this.setPadding();
  }

  setDOMElements() {
    this.$dateTextFieldContainer = this.$container.find(`.js-date-text-field__input-${this.type}-date`);
    this.textField = new TextField(this.$dateTextFieldContainer);
    this.$dateTextField = this.textField.getElement();
  }

  getElement() {
    return this.$dateTextField;
  }

  eventListenerBind(type, fn) {
    if (this.$dateTextField) this.textField.eventListenerBind(type, fn);
  }

  setPadding() {
    this.textField.setPaddingOnRight();
  }
}

export default DateTextField;
