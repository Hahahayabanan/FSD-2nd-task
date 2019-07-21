let dropdown_exp = document.querySelector('.expandable-checkbox-select');
let dropdownOption_exp = document.querySelector('.expandable-checkbox-option');
let keyboard_arrow_exp = document.querySelector('.expandable-checkbox__arrow');

dropdown_exp.addEventListener('click', function() {
    dropdown_exp.classList.toggle('dropdown-select_active');
    dropdownOption_exp.style.visibility = (dropdownOption_exp.style.visibility == 'visible') ? 'hidden' : 'visible';
    keyboard_arrow_exp.innerHTML = (keyboard_arrow.innerHTML == 'keyboard_arrow_down' ) ? 'keyboard_arrow_up' : 'keyboard_arrow_down';
});