class DropdownCheckBox{
  constructor(elem){
    this.checkbox = elem;
    this.initCheckBoxes();
  }

  initCheckBoxes(){
    const dropdownOption = this.checkbox.querySelector('.dropdown-checkbox__option');
    const dropdownSelect = this.checkbox.querySelector('.dropdown-checkbox__select');
    const keyboardArrow = this.checkbox.querySelector('.dropdown-checkbox__keyboard-arrow');
    const materialIcons = keyboardArrow.querySelector('.material-icons');
    this.bindEventListeners({ dropdownOption, materialIcons, dropdownSelect, });
  }

  bindEventListeners(options){
    const { dropdownOption, materialIcons, dropdownSelect, } = options;
    dropdownSelect.addEventListener('click', () => {
      dropdownOption.classList.toggle('dropdown-checkbox__option_unvisible');
      materialIcons.innerHTML = materialIcons.innerHTML === 'keyboard_arrow_down' ? 'keyboard_arrow_up' : 'keyboard_arrow_down';
    });
  }
}

const checkboxesList = document.querySelectorAll('.dropdown-checkbox');
checkboxesList.forEach((val) => new DropdownCheckBox(val));
