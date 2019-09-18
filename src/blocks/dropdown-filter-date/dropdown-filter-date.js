// eslint-disable-next-line import/extensions
import DropdownCalendar from '../dropdown-calendar/dropdown-calendar.js';


const dropdownCalendar = document.querySelectorAll('.js-dropdown-filter-date');

if (dropdownCalendar) {
  const dropdownCalendarArray = Array.from(dropdownCalendar, (val) => {
    const inputs = val.querySelector('.dropdown-filter-date__input');
    return new DropdownCalendar(val, inputs);
  });
}
