class DropdownGuests {
  constructor(htmlElem) {
    this.dropdown = htmlElem;
    this.minusButtons = [];
    this.plusButtons = [];
    this.guestsNumber = 0;
    this.childrenNumber = 0;
    this.babiesNumber = 0;
    this.clearButton = this.getClearButton();
    this.getMinusAndPlusButtons();
    this.bindEventListeners();
  }

  bindEventListeners() {
    const select = this.dropdown.querySelector('.dropdown__select');
    select.addEventListener('click', this.showHideDropdown.bind(this));

    this.minusButtons.forEach((item) => {
      item.addEventListener('click', this.calcMinus.bind(this));
    });
    this.plusButtons.forEach((item) => {
      item.addEventListener('click', this.calcPlus.bind(this));
    });
    if (this.clearButton) this.clearButton.addEventListener('click', this.clearOptions.bind(this));
  }

  showHideDropdown() {
    const select = this.dropdown.querySelector('.dropdown__select');
    if (select.classList.contains('dropdown__select_active')) {
      this.hideDropdown();
    } else {
      this.showDropdown();
    }
  }

  showDropdown() {
    const select = this.dropdown.querySelector('.dropdown__select');
    select.classList.add('dropdown__select_active');
    const dropdown = select.parentNode;
    const selectOptions = dropdown.querySelector('.dropdown__options');
    selectOptions.classList.add('dropdown__options_active');
    $(document).on('click', this.outsideClickListener.bind(this));
  }

  hideDropdown() {
    const select = this.dropdown.querySelector('.dropdown__select');
    select.classList.remove('dropdown__select_active');
    const dropdown = select.parentNode;
    const selectOptions = dropdown.querySelector('.dropdown__options');
    selectOptions.classList.remove('dropdown__options_active');
    $(document).off('click');
  }

  outsideClickListener(event) {
    const { target, } = event;
    const itsMenu = target === this.dropdown || this.dropdown.contains(target);
    if (!itsMenu) {
      this.hideDropdown(event);
    }
  }

  calcMinus(event) {
    const minusButton = event.currentTarget;
    const optionContainer = minusButton.parentNode;
    const currentValueElem = optionContainer.querySelector('.dropdown-option__item_number');
    let currentValue = currentValueElem.textContent;

    if (parseInt(currentValue, 10) > 0) {
      currentValue = Number(currentValue) - Number(1);
    }
    if (parseInt(currentValue, 10) === 0) {
      this.deactivateMinus(minusButton);
    }
    currentValueElem.textContent = currentValue;
    this.setSelectTexts(minusButton, currentValue);
  }

  calcPlus(event) {
    const plusButton = event.currentTarget;
    const optionContainer = plusButton.parentNode;
    const currentValueElem = optionContainer.querySelector('.dropdown-option__item_number');
    const minusButton = currentValueElem.previousElementSibling;
    let currentValue = currentValueElem.textContent;

    if (parseInt(currentValue, 10) === 0) {
      this.activateMinus(minusButton);
      this.activateClear();
    }
    currentValue = Number(currentValue) + Number(1);

    currentValueElem.textContent = currentValue;
    this.setSelectTexts(plusButton, currentValue);
  }

  activateMinus(minusButton) {
    minusButton.classList.remove('dropdown-option__item_un-active');
  }

  deactivateMinus(minusButton) {
    minusButton.classList.add('dropdown-option__item_un-active');
  }

  getMinusAndPlusButtons() {
    const signs = {
      PLUS: '+',
      MINUS: '-',
    };
    this.dropdown.querySelectorAll('.dropdown-option__item_circle').forEach((val) => {
      if (val.textContent === signs.MINUS) {
        this.minusButtons.push(val);
      }
      if (val.textContent === signs.PLUS) {
        this.plusButtons.push(val);
      }
    });
  }

  activateClear() {
    if (this.clearButton) this.clearButton.parentNode.classList.remove('option-button_hidden');
  }

  deactivateClear() {
    if (this.clearButton) this.clearButton.parentNode.classList.add('option-button_hidden');
  }

  getClearButton() {
    return this.dropdown.querySelector('.option-button__clear');
  }


  clearOptions() {
    this.deactivateClear();

    const guestsNumber = this.dropdown.querySelector('.dropdown__guests-num');
    const guestsText = this.dropdown.querySelector('.dropdown__guests-text');
    const babyNumber = this.dropdown.querySelector('.dropdown__baby-num');
    const babyText = this.dropdown.querySelector('.dropdown__baby-text');

    guestsNumber.innerHTML = 'Сколько ';
    guestsText.innerHTML = 'гостей';
    babyNumber.innerHTML = '';
    babyText.innerHTML = '';

    this.dropdown.querySelectorAll('.dropdown-option__item_number').forEach((val) => {
      const number = val;
      number.textContent = 0;
    });
  }


  setSelectTexts(target, number) {
    const guestsNumber = this.dropdown.querySelector('.dropdown__guests-num');
    const guestsText = this.dropdown.querySelector('.dropdown__guests-text');
    const babyNumber = this.dropdown.querySelector('.dropdown__baby-num');
    const babyText = this.dropdown.querySelector('.dropdown__baby-text');

    const titles = {
      гостей: ['гость', 'гостя', 'гостей',],
      младенцев: ['младенец', 'младенца', 'младенцев',],
    };

    const typeOfGuest = target.parentNode.previousElementSibling;
    const guestsList = {
      BABIES: 'младенцы',
      ADULT: 'взрослые',
      CHILDREN: 'дети',
    };

    if (typeOfGuest.textContent.toLowerCase() === guestsList.BABIES) {
      this.babiesNumber = number;
      babyNumber.textContent = `, ${this.babiesNumber} `;
      babyText.textContent = titles['младенцев'][this.checkPad(number)];
    } else {
      if (typeOfGuest.textContent.toLowerCase() === guestsList.ADULT) this.guestsNumber = number;
      if (typeOfGuest.textContent.toLowerCase() === guestsList.CHILDREN) this.childrenNumber = number;
      guestsNumber.textContent = `${+this.childrenNumber + +this.guestsNumber} `;
      guestsText.textContent = titles['гостей'][this.checkPad(number)];
    }
  }

  checkPad(num) {
    const lastOne = num.toString().split('').pop();
    const isNumBetweenOneAndFive = Number(lastOne) > 1 && Number(lastOne) < 5;
    const isNumBetweenNineAndTwentyOne = Number(num) > 9 && Number(num) < 21;
    let tmp;
    if (Number(lastOne) === 1) tmp = 0;
    else if (isNumBetweenOneAndFive) tmp = 1;
    else tmp = 2;
    if (isNumBetweenNineAndTwentyOne) {
      tmp = 2;
    }
    return tmp;
  }
}

export default DropdownGuests;

const dropdownGuests = document.querySelectorAll('.js-dropdown');
dropdownGuests.forEach((val) => new DropdownGuests(val));
