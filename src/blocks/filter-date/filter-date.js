import DatePickerCalendar from '../date-picker-calendar/date-picker-calendar';
import DateTextField from '../date-text-field/date-text-field';

class FilterDate {
  constructor(calendar) {
    this.$calendar = $(calendar);

    this.findDOMElements();
    this.initCalendar();
  }

  findDOMElements() {
    this.input = new DateTextField(this.$calendar, 'entire');
    this.$input = this.input.get$Element();
    this.isRange = false;

    if (this.$input.length === 0) {
      this.isRange = true;
      this.startInput = new DateTextField(this.$calendar, 'start');
      this.$startInput = this.startInput.get$Element();
      this.endInput = new DateTextField(this.$calendar, 'end');
      this.$endInput = this.endInput.get$Element();
      this.datepickerPluginInstance = this.$startInput.datepicker().data('datepicker');
    }
  }

  initCalendar() {
    if (this.isRange) {
      const { $startInput } = this;
      const { $endInput } = this;

      $startInput.datepicker({
        range: true,
        multipleDatesSeparator: ' - ',
        language: 'ru',
        clearButton: true,
      });

      $startInput.datepicker({
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
    this.endInput.eventListenerBind('click', this.handleEndInputClick.bind(this));
  }

  handleEndInputClick() {
    this.datepickerPluginInstance.show();
  }

  setAdditionalClass() {
    this.datepickerPluginInstance.$datepicker.addClass('datepicker--smaller');
  }
}

export default FilterDate;
