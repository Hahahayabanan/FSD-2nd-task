let dropdown_guests = document.querySelector('.dropdown-select_guests');
let dropdownOption_guests = document.querySelector('.dropdown-option_guests');

dropdown_guests.addEventListener('click', function() {
    dropdown_guests.classList.toggle('dropdown-select_active');
    dropdownOption_guests.style.visibility = (dropdownOption_guests.style.visibility == 'visible') ? 'hidden' : 'visible';
});