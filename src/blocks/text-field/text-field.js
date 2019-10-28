import 'inputmask/dist/jquery.inputmask.bundle';

class TextField {
  constructor(element) {
    this.$field = $(element);

    this.init();
  }

  init() {
    this.$field.inputmask({
      alias: 'datetime',
      inputFormat: 'dd.mm.yyyy',
      placeholder: 'ДД.ММ.ГГГГ',
    });
  }
}

export default TextField;
