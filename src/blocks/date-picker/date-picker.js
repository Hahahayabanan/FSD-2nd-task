import 'jquery';

class DatePicker {
  constructor($datepicker) {
    this.$datepicker = $datepicker;
    this.$datepickerHTML = this.$datepicker.$datepicker;
    this.$calendarInput = $datepicker.$el;
    this.$title = this.$datepickerHTML.find('.datepicker--nav-title');
    this.applyButtonText = 'Применить';
    this.createApplyButton();
    this.bindEventListeners();
    this.removeCommaFromTitle();
    this.replaceNavArrows();
  }

  createApplyButton() {
    this.$buttonsContainer = this.$datepickerHTML.find('.datepicker--buttons');
    this.applyButton = document.createElement('a');
    this.applyButton.textContent = this.applyButtonText;
    this.applyButton.classList.add('datepicker__apply-button');
    this.$buttonsContainer.append(this.applyButton);
  }

  bindEventListeners() {
    this.applyButton.addEventListener('click', this.hideDatepicker.bind(this));
  }

  hideDatepicker() {
    this.$datepicker.hide();
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
export default DatePicker;


$.fn.datepicker.language.ru =  {
  days: ['Воскресенье','Понедельник','Вторник','Среда','Четверг','Пятница','Суббота',],
  daysShort: ['Вос','Пон','Вто','Сре','Чет','Пят','Суб',],
  daysMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб',],
  months: ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь',],
  monthsShort: ['янв','фев','мар','апр','май','июн','июл','авг','сен','окт','ноя','дек',],
  today: 'Сегодня',
  clear: 'Очистить',
  dateFormat: 'dd.mm.yyyy',
  timeFormat: 'hh:ii',
  firstDay: 1,
};
