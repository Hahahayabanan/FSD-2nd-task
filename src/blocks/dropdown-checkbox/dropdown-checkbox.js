class DropdownCheckbox {
  constructor(elem) {
    this.checkbox = elem;
    this.initCheckBoxes();
    this.bindEventListeners();
  }

  initCheckBoxes() {
    this.dropdownOption = this.checkbox.querySelector('.js-dropdown-checkbox__option');
    this.dropdownSelect = this.checkbox.querySelector('.js-dropdown-checkbox__select');
    this.keyboardArrow = this.checkbox.querySelector('.js-dropdown-checkbox__keyboard-arrow');
    this.keyboardArrowMaterialIcon = this.keyboardArrow.querySelector('i');
  }

  bindEventListeners() {
    this.dropdownSelect.addEventListener('click', () => {
      this.dropdownOption.classList.toggle('dropdown-checkbox__option_invisible');
      this.keyboardArrowMaterialIcon.innerHTML = this.keyboardArrowMaterialIcon.innerHTML === 'keyboard_arrow_down' ? 'keyboard_arrow_up' : 'keyboard_arrow_down';
    });
  }
}

export default DropdownCheckbox;
