import DatePickerCalendar from '../date-picker-calendar/date-picker-calendar';

class FilterDate {
  constructor(calendar) {
    this.$calendar = $(calendar);

    this.findDOMElements();
    this.initCalendar();
  }

  findDOMElements() {
    this.$input = this.$calendar.find('.date-text-field__input-entire-date > input');
    this.isRange = false;

    if (this.$input.length === 0) {
      this.isRange = true;
      this.$startInput = this.$calendar.find('.date-text-field__input-start-date > input');
      this.$endInput = this.$calendar.find('.date-text-field__input-end-date > input');
      this.datepickerPluginInstance = this.$startInput.datepicker().data('datepicker');
    }
  }

  initCalendar() {
    if (this.isRange) {
      this.$startInput.datepicker({
        range: true,
        multipleDatesSeparator: ' - ',
        language: 'ru',
        clearButton: true,
      });

      const { $startInput } = this;
      const { $endInput } = this;
      this.$startInput.datepicker({
        onSelect(formattedDate) {
          $startInput.val(formattedDate.split('-')[0]);
          $endInput.val(formattedDate.split('-')[1]);
        },
      });
      new DatePickerCalendar(this.$startInput.datepicker().data('datepicker'), this.$calendar);
      this.initEndInput();
    } else {
      this.$input.datepicker({
        range: true,
        multipleDatesSeparator: ' - ',
        language: 'ru',
        dateFormat: 'dd M',
        clearButton: true,
      });
      this.datepickerPluginInstance = this.$input.datepicker().data('datepicker');
      new DatePickerCalendar(this.datepickerPluginInstance, this.$calendar);
      this.setAdditionalClass();
    }
  }

  initEndInput() {
    this.$endInput.on('click', () => {
      this.datepickerPluginInstance.show();
    });
  }

  setAdditionalClass() {
    this.datepickerPluginInstance.$datepicker.addClass('datepicker--smaller');
  }
}

export default FilterDate;
