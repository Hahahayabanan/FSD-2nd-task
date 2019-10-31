import 'air-datepicker/dist/css/datepicker.min.css';
import 'air-datepicker';

class DatePickerCalendar {
  constructor(datepicker) {
    this.datepickerPluginInstance = datepicker;
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
    this.parent = this.datepickerPluginInstance.$el.closest('.js-filter-date');
  }

  replaceCalendarToBlock() {
    this.$elementContainer = this.parent.find('.date-picker-calendar-container');
    if (this.$elementContainer.length > 0) {
      this.$elementContainer.append(this.$datepicker);
    }
  }

  setApplyButtonText(text) {
    this.applyButtonText = text;
  }

  createApplyButton() {
    this.$buttonsContainer = this.$datepicker.find('.datepicker--buttons');
    this.$applyButton = $('<span>', {
      text: this.applyButtonText,
      class: 'datepicker__apply-button',
    }).appendTo(this.$buttonsContainer);
  }

  bindEventListeners() {
    this.$applyButton.on('click', this.hideDatepicker.bind(this));
  }

  hideDatepicker() {
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
      classes: 'date-picker-calendar__inner',
    });
  }

  replaceNavArrows() {
    this.$calendarInput.datepicker({
      nextHtml: '<i class="datepicker__material-icons datepicker__material-icons_color_purple">arrow_forward</i>',
      prevHtml: '<i class="datepicker__material-icons datepicker__material-icons_color_purple">arrow_back</i>',
    });
  }

  addCustomClass() {
    this.$calendarInput.datepicker({
      classes: 'date-picker-calendar__inner',
    });
  }
}

export default DatePickerCalendar;
