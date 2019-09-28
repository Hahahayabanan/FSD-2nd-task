import DropdownCalendar from '../dropdown-calendar/dropdown-calendar.js';

const dropdownCalendar = document.querySelectorAll('.js-dropdown-filter-date');
dropdownCalendar.forEach((val) => {
  const inputs = val.querySelector('.dropdown-filter-date__input > input');
  return new DropdownCalendar(val, inputs);
});

