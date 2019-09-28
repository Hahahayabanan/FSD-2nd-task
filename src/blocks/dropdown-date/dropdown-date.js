import DropdownCalendar from '../dropdown-calendar/dropdown-calendar.js';

const dropdownCalendar = document.querySelectorAll('.js-dropdown-date');
dropdownCalendar.forEach((val) => {
  const inputs = [];
  inputs.push(val.querySelector('.dropdown-date__input-start-date > input'));
  inputs.push(val.querySelector('.dropdown-date__input-end-date > input'));
  return new DropdownCalendar(val, inputs);
});

