import DropdownCalendar from '../dropdown-calendar/dropdown-calendar.js';

class DropdownDate {
  constructor(calendar) {
    this.calendar = calendar;
    this.$startInput = $(this.calendar).find('.dropdown-date-item__input-start-date > input');
    this.$endInput = $(this.calendar).find('.dropdown-date-item__input-end-date > input');
    
    this.initCalendar();
    this.$datepicker = this.$startInput.datepicker().data('datepicker');
    this.initEndInput();
  }

  initCalendar() {
    this.$startInput.datepicker({
      range: true,
      multipleDatesSeparator: ' - ',
      language: 'ru',
      clearButton: true,
    })

    const {$startInput,} = this;
    const {$endInput,} = this;

    this.$startInput.datepicker({ 
      onSelect (formattedDate) { 
        $startInput.val(formattedDate.split("-")[0]);
        $endInput.val(formattedDate.split("-")[1]);
      },
    });

    new DropdownCalendar(this.$startInput.datepicker().data('datepicker'));
  }

  initEndInput() {
    this.$endInput.on('click', () => {
      this.$datepicker.show();
    })
  }
}




const calendars = document.querySelectorAll('.js-dropdown-date');

calendars.forEach((val)=>{ new DropdownDate(val) });