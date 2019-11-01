import 'air-datepicker/dist/css/datepicker.min.css';
import 'air-datepicker';

class DatePickerCalendar {
  constructor(datepicker, $containerOfTargetBlock) {
    this.datepickerPluginInstance = datepicker;
    this.$containerOfTargetBlock = $containerOfTargetBlock;
    this.init();
  }

  init() {
    this.findDOMElements();
    this.initLanguage();
    this.addCustomClass();
    this.createApplyButton();
    this.bindEventListeners();
    this.removeCommaFromTitle();
    this.replaceNavArrows();
    this.replaceCalendarToBlock();
  }

  findDOMElements() {
    this.$datepicker = this.datepickerPluginInstance.$datepicker;
    this.$calendarInput = this.datepickerPluginInstance.$el;
    this.$title = this.$datepicker.find('.datepicker--nav-title');
  }

  replaceCalendarToBlock() {
    this.$datepickerContainer = this.$containerOfTargetBlock.find('.date-picker-calendar-container');
    if (this.$datepickerContainer.length > 0) {
      this.$datepickerContainer.append(this.$datepicker);
    }
  }

  setApplyButtonText(text) {
    this.applyButtonText = text;
  }

  createApplyButton() {
    this.$buttonsContainer = this.$datepicker.find('.datepicker--buttons');
    this.$applyButton = $('<span>', {
      text: this.applyButtonText,
      class: 'date-picker-calendar__apply-button',
    }).appendTo(this.$buttonsContainer);
  }

  bindEventListeners() {
    this.$applyButton.on('click', this.handleApplyButtonClick.bind(this));
  }

  handleApplyButtonClick() {
    this.datepickerPluginInstance.hide();
  }

  initLanguage() {
    $.fn.datepicker.language.ru = {
      days: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
      daysShort: ['Вос', 'Пон', 'Вто', 'Сре', 'Чет', 'Пят', 'Суб'],
      daysMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
      months: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
      monthsShort: ['янв', 'фев', 'мар', 'апр', 'май', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'],
      today: 'Сегодня',
      clear: 'Очистить',
      dateFormat: 'dd.mm.yyyy',
      timeFormat: 'hh:ii',
      firstDay: 1,
    };
    this.setApplyButtonText('Применить');
  }

  removeCommaFromTitle() {
    this.$calendarInput.datepicker({
      navTitles: {
        days: 'MM <i>yyyy</i>',
      },
    });
  }

  replaceNavArrows() {
    this.$calendarInput.datepicker({
      nextHtml: '<i class="date-picker-calendar__material-icon date-picker-calendar__material-icon_color_purple">arrow_forward</i>',
      prevHtml: '<i class="date-picker-calendar__material-icon date-picker-calendar__material-icon_color_purple">arrow_back</i>',
    });
  }

  addCustomClass() {
    this.$calendarInput.datepicker({
      classes: 'date-picker-calendar__inner',
    });
  }
}

export default DatePickerCalendar;
