import 'air-datepicker/dist/css/datepicker.min.css';
import 'air-datepicker';

class DatePickerCalendar {
  constructor($datepicker) {
    this.$datepicker = $datepicker;

    this.init();
  }

  init() {
    this.findDOMElements();
    this.initLanguage();
    this.createApplyButton();
    this.bindEventListeners();
    this.removeCommaFromTitle();
    this.replaceNavArrows();
  }

  findDOMElements() {
    this.$datepickerHTML = this.$datepicker.$datepicker;
    this.$calendarInput = this.$datepicker.$el;
    this.$title = this.$datepickerHTML.find('.datepicker--nav-title');
  }

  setApplyButtonText(text) {
    this.applyButtonText = text;
  }

  createApplyButton() {
    this.$buttonsContainer = this.$datepickerHTML.find('.datepicker--buttons');
    this.$applyButton = $('<span>', {
      text: this.applyButtonText,
      class: 'datepicker__apply-button',
    }).appendTo(this.$buttonsContainer);
  }

  bindEventListeners() {
    this.$applyButton.on('click', this.hideDatepicker.bind(this));
  }

  hideDatepicker() {
    this.$datepicker.hide();
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
      nextHtml: '<i class="datepicker__material-icons datepicker__material-icons_color_purple">arrow_forward</i>',
      prevHtml: '<i class="datepicker__material-icons datepicker__material-icons_color_purple">arrow_back</i>',
    });
  }
}

export default DatePickerCalendar;
