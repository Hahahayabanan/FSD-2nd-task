import DropdownCalendar from '../dropdown-calendar/dropdown-calendar.js';

class DropdownFilterDate {
  constructor(calendar) {
    this.calendar = calendar;
    this.input = calendar.querySelector('.dropdown-filter-date__input > input');
    this.initCalendar();

    this.setAdditionalClass();
  }

  initCalendar() {
    $(this.input).datepicker({
      range: true,
      multipleDatesSeparator: ' - ',
      language: 'ru',
      dateFormat: 'dd M',
      clearButton: true,
    })

    this.$dropdown = $(this.input).datepicker().data('datepicker');

    new DropdownCalendar(this.$dropdown);
  }

  setAdditionalClass() {
    this.$dropdown.$datepicker.addClass('datepicker--smaller');
  }
}




const calendars = document.querySelectorAll('.js-dropdown-filter-date');

calendars.forEach((val)=>{ new DropdownFilterDate(val) });