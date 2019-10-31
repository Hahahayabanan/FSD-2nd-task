import 'inputmask/dist/jquery.inputmask.bundle';

class TextField {
  constructor(element) {
    this.$textField = $(element);

    this.init();
  }

  init() {
    this.$textField.inputmask({
      alias: 'datetime',
      inputFormat: 'dd.mm.yyyy',
      placeholder: 'ДД.ММ.ГГГГ',
    });
  }
}

export default TextField;
