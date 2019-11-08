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

  get$Element() {
    return this.$dateTextField;
  }

  eventListenerBind(type, fn) {
    if (this.$dateTextField) this.$dateTextField.on(type, fn);
  }

  setPadding() {
    this.$dateTextField.css('padding-right', '38px');
  }
}

export default DateTextField;
