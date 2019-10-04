class DropdownCalendar {
  constructor(dropdownHtmlElem, inputHtmlElem) {
    this.dropdown = dropdownHtmlElem;
    this.$dropdown = $(dropdownHtmlElem);
    this.$calendar = this.$dropdown.find('.dropdown-calendar');
    this.input = inputHtmlElem;
    this.$input = $(inputHtmlElem);
    this.$clearButton = this.$dropdown.find('.option-button__clear');
    this.initCalendar();
  }

  initCalendar() {
    this.$calendar.datepicker(this.getOptions());

    // объект расширения (хранит состояние календаря)
    const extensionRange = this.$calendar.datepicker('widget').data('datepickerExtensionRange')

    if ($.isArray(this.input)) {
      this.$calendar.datepicker('option', 'dateFormat', 'dd.mm.yy');
    }

    this.$calendar.datepicker('setDate', ['+1d', '+5d',]);

    if (extensionRange.startDateText || extensionRange.endDateText) {
      this.changePositions(extensionRange);
    }

    this.bindEventListeners();
  }

  bindEventListeners() {
    this.$input.on('click', this.showCalendar.bind(this));
  }

  clearAll() {
    this.$calendar.datepicker('setDate', [null, null,]);
    this.$clearButton.parent().toggleClass('option-button_hidden');

    if ($.isArray(this.input)) {
      this.$input.val('ДД.ММ.ГГГГ');
    } else {
      this.$input.val('ДД МЕС - ДД МЕС');
    }
  }

  showCalendar() {
    this.$calendar.addClass('dropdown-calendar_active');
    $(document).on('click', this.outsideClickListener.bind(this));
    this.$clearButton.on('click', this.clearAll.bind(this));
    this.$input.off('click');
    this.$input.on('click', this.hideCalendar.bind(this));
  }

  hideCalendar() {
    this.$calendar.removeClass('dropdown-calendar_active');
    $(document).off('click');
    this.$clearButton.off('click');
    this.$input.off('click');
    this.$input.on('click', this.showCalendar.bind(this));
  }

  outsideClickListener(event) {
    const { target, } = event;
    const itsMenu = target === this.dropdown || this.dropdown.contains(target);
    if (!itsMenu) {
      this.hideCalendar(event);
    }
  }

  changePositions(extensionRange) {
    if ($.isArray(this.input)) {
      $(this.$input[0]).val(extensionRange.startDateText);
      $(this.$input[1]).val(extensionRange.endDateText);
    } else {
      $(this.$input).val(`${extensionRange.startDateText  } - ${  extensionRange.endDateText}`);
    }

    this.$clearButton.parent().removeClass('option-button_hidden');
  }

  getOptions() {
    return {
      range: 'period', // режим - выбор периода
      numberOfMonths: 1,
      selectOtherMonths: true,
      showOtherMonths: true,
      dateFormat: 'dd M',
      dayNames: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье',],
      dayNamesMin: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс',],
      dayNamesShort: ['Пон', 'Втр', 'Срд', 'Чтв', 'Птн', 'Суб', 'Вос',],
      monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май',
        'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь',],
      monthNamesShort: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек',],

      onSelect: (dateText, inst, extensionRange) => {
        this.changePositions(extensionRange);
      },
    }
  }
}

export default DropdownCalendar;
