import DropdownCalendar from '../dropdown-calendar/dropdown-calendar.js';

class DropdownFilterDate {
  constructor(calendar) {
    this.calendar = calendar;
    this.input = calendar.querySelector('.dropdown-filter-date__input > input');
    this.initCalendar();
  }

  initCalendar() {
    $(this.input).datepicker({
      range: true,
      multipleDatesSeparator: ' - ',
      language: 'ru',
      dateFormat: 'dd M',
      clearButton: true,
    })

    new DropdownCalendar($(this.input).datepicker().data('datepicker'));
  }
}




const calendars = document.querySelectorAll('.js-dropdown-filter-date');

calendars.forEach((val)=>{ new DropdownFilterDate(val) });