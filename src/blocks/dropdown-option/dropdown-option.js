class DropdownOption {
  constructor(elem){
    this.option = elem;
    this.name = '';
    this.group = undefined;
    this.minusButton = undefined;
    this.plusButton = undefined;
    this.number = undefined;
    this.value = undefined;
    this.getHTMLElements();
    this.getValues();
    this.bindEventListeners();
  }

  getHTMLElements() {
    const signs = {
      PLUS: '+',
      MINUS: '-',
    };
    this.option.querySelectorAll('.dropdown-option__item_circle').forEach((val) => {
      if (val.textContent === signs.MINUS) {
        this.minusButton = val;
      }
      if (val.textContent === signs.PLUS) {
        this.plusButton = val;
      }
    });

    this.number = this.option.querySelector('.dropdown-option__item_number');
  }

  getValues() {
    this.value = parseInt(this.number.textContent, 10);
    if(this.value === '') this.value = 0;
    if(this.value > 0) this.activateMinus();
    this.name = this.option.querySelector('.js-dropdown-option__header > p.heading').textContent;
    if(this.option.hasAttribute('data-group')) {
      const { group, } = this.option.dataset;
      if(group) {
        this.group = group;
      }
    }    
  }

  bindEventListeners() {
    this.minusButton.addEventListener('click', this.calcMinus.bind(this));
    this.plusButton.addEventListener('click', this.calcPlus.bind(this));
  }

  calcMinus(event) {
    if (this.value > 0) {
      this.value -= 1;
    }
    if (this.value === 0) {
      this.deactivateMinus();
    }
    this.number.textContent = this.value;

    this.option.dispatchEvent(
      new CustomEvent('changeOption', {
        bubbles: true,
        detail: this,
      }),
    );
  }

  calcPlus(event) {
    if (this.value === 0) {
      this.activateMinus(this.minusButton);
    }
    this.value += Number(1);
    this.number.textContent = this.value;

    this.option.dispatchEvent(
      new CustomEvent('changeOption', {
        bubbles: true,
        detail: this,
      }),
    );
  }

  activateMinus() {
    this.minusButton.classList.remove('dropdown-option__item_un-active');
  }

  deactivateMinus() {
    this.minusButton.classList.add('dropdown-option__item_un-active');
  }

  clear() {
    this.deactivateMinus();
    this.value = 0;
    this.number.textContent = this.value;
  }
}

export default DropdownOption;