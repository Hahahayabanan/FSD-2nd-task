import DropdownCheckbox from './dropdown-checkbox';

document.addEventListener('DOMContentLoaded', () => {
  const checkboxesList = document.querySelectorAll('.js-dropdown-checkbox');
  checkboxesList.forEach((val) => new DropdownCheckbox(val));
});
