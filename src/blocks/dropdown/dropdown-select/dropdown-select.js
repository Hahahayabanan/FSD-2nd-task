dropdown = document.querySelector('.dropdown-select');
dropdownOption = document.querySelector('.dropdown-option');

dropdown.addEventListener('click', function() {
    dropdown.classList.toggle('dropdown-select_active');
    dropdownOption.style.visibility = (dropdownOption.style.visibility == 'visible') ? 'hidden' : 'visible';
    
});