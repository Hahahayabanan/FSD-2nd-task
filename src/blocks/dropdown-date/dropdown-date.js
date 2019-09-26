/* eslint-disable import/no-named-as-default */
// eslint-disable-next-line import/extensions
import DropdownCalendar from '../dropdown-calendar/dropdown-calendar.js';

const dropdownCalendar = document.querySelectorAll('.js-dropdown-date');

if (dropdownCalendar) {
  const dropdownCalendarArray = Array.from(dropdownCalendar, (val) => {
    const inputs = [];
    inputs.push(val.querySelector('.dropdown-date__input-start-date > input'));
    inputs.push(val.querySelector('.dropdown-date__input-end-date > input'));
    return new DropdownCalendar(val, inputs);
  });
}
