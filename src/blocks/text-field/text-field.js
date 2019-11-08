import 'inputmask/dist/jquery.inputmask.bundle';

class TextField {
  constructor(container) {
    const isThatElement = $(container).hasClass('js-text-field');
    if (isThatElement) this.$textField = $(container);
    else this.$textField = $(container).find('input.js-text-field');
    this.setMasks();
  }

  setMasks() {
    const isMaskedTextField = this.$textField.hasClass('text-field_masked');
    if (isMaskedTextField) {
      this.$textField.inputmask({
        alias: 'datetime',
        inputFormat: 'dd.mm.yyyy',
        placeholder: 'ДД.ММ.ГГГГ',
      });
    }
  }

  getElement() {
    return this.$textField;
  }

  eventListenerBind(type, fn) {
    if (this.$textField) this.$textField.on(type, fn);
  }

  setPaddingOnRight() {
    this.$textField.addClass('text-field_with-padding-on-right');
  }
}

export default TextField;
