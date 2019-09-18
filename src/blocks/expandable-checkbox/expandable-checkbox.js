const checkboxesList = document.querySelectorAll('.expandable-checkbox');

if (checkboxesList) {
  // eslint-disable-next-line array-callback-return
  const checkboxes = Array.from(checkboxesList, (val) => {
    const dropdownOption = val.querySelector('.expandable-checkbox__option');
    const keyboardArrow = val.querySelector('.expandable-checkbox__keyboard-arrow');
    const materialIcons = keyboardArrow.querySelector('.material-icons');
    val.addEventListener('click', () => {
      dropdownOption.classList.toggle('expandable-checkbox__option_unvisible');
      materialIcons.innerHTML = materialIcons.innerHTML === 'keyboard_arrow_down' ? 'keyboard_arrow_up' : 'keyboard_arrow_down';
    });
  });
}
