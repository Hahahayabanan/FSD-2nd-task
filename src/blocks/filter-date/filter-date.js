import DatePicker from '../date-picker/date-picker';

class FilterDate {
  constructor(calendar) {
    this.calendar = calendar;
    this.input = calendar.querySelector('.date-text-field__input-entire-date > input');
    this.range = false;

    if(!this.input) {
      this.range = true;
      this.$startInput = $(this.calendar).find('.date-text-field__input-start-date > input');
      this.$endInput = $(this.calendar).find('.date-text-field__input-end-date > input');
      this.$datepicker = this.$startInput.datepicker().data('datepicker');
    }
    this.initCalendar();
  }

  initCalendar() {
    if(this.range) {
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
      new DatePicker(this.$startInput.datepicker().data('datepicker'));
      this.initEndInput();
      
    } else {
      $(this.input).datepicker({
        range: true,
        multipleDatesSeparator: ' - ',
        language: 'ru',
        dateFormat: 'dd M',
        clearButton: true,
      })
      this.$dropdown = $(this.input).datepicker().data('datepicker');
      new DatePicker(this.$dropdown);
      this.setAdditionalClass();
    }
    
  }

  initEndInput() {
    this.$endInput.on('click', () => {
      this.$datepicker.show();
    })
  }

  setAdditionalClass() {
    this.$dropdown.$datepicker.addClass('datepicker--smaller');
  }
}


const calendars = document.querySelectorAll('.js-filter-date');

calendars.forEach((val)=>{ new FilterDate(val) });