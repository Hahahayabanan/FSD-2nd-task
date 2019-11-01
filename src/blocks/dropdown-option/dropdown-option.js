class DropdownOption {
  constructor(elem) {
    this.option = elem;
    this.name = '';

    this.getHTMLElements();
    this.getValues();
    this.bindEventListeners();
  }

  getHTMLElements() {
    const signs = {
      PLUS: '+',
      MINUS: '-',
    };
    this.option.querySelectorAll('.js-dropdown-option__circle').forEach((val) => {
      if (val.textContent === signs.MINUS) {
        this.minusButton = val;
      }
      if (val.textContent === signs.PLUS) {
        this.plusButton = val;
      }
    });

    this.number = this.option.querySelector('.js-dropdown-option__number');
  }

  getValues() {
    this.value = parseInt(this.number.textContent, 10);
    if (this.value === '') this.value = 0;
    if (this.value > 0) this.activateMinus();
    this.name = this.option.querySelector('.js-dropdown-option__header > .heading').textContent;
    if (this.option.hasAttribute('data-group')) {
      const { group } = this.option.dataset;
      if (group) {
        this.group = group;
      }
    }
  }

  bindEventListeners() {
    this.minusButton.addEventListener('click', this.handleMinusButtonClick.bind(this));
    this.plusButton.addEventListener('click', this.handlePlusButtonClick.bind(this));
  }

  handleMinusButtonClick() {
    if (this.value > 0) {
      this.value -= 1;
    }
    if (this.value === 0) {
      this.deactivateMinus();
    }
    this.number.textContent = this.value;

    document.dispatchEvent(
      new CustomEvent('changeOption', {
        bubbles: true,
        detail: this,
      }),
    );
  }

  handlePlusButtonClick() {
    if (this.value === 0) {
      this.activateMinus(this.minusButton);
    }
    this.value += Number(1);
    this.number.textContent = this.value;

    document.dispatchEvent(
      new CustomEvent('changeOption', {
        bubbles: true,
        detail: this,
      }),
    );
  }

  activateMinus() {
    this.minusButton.classList.remove('dropdown-option__circle_inactive');
  }

  deactivateMinus() {
    this.minusButton.classList.add('dropdown-option__circle_inactive');
  }

  clear() {
    this.deactivateMinus();
    this.value = 0;
    this.number.textContent = this.value;
  }
}

export default DropdownOption;
