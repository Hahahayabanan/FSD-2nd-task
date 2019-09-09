// if(document.querySelector('.dropdown-calendar')){
// const calendar = $('.dropdown-date_wrapper');

// $(function() {
//     calendar.each(function(index, each_calendar_old){

//       each_calendar = $(each_calendar_old).find('.dropdown-calendar');
     
//     $(each_calendar).datepicker({
//       range: 'period', // режим - выбор периода
//       numberOfMonths: 1,
//       selectOtherMonths: true,
//       showOtherMonths: true,
//       dateFormat: 'dd.mm.yy',
//       dayNames: [ 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье' ],
//       dayNamesMin: [ 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс' ],
//       dayNamesShort: [ 'Пон', 'Втр', 'Срд', 'Чтв', 'Птн', 'Суб', 'Вос' ],
//       monthNames: [ 'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь' ],
//       monthNamesShort: [ 'Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек' ],
      
//       onSelect: function(dateText, inst, extensionRange) {
//         // extensionRange - объект расширения
//         $(each_calendar_old).find('[name=startDate]').val(extensionRange.startDateText);
//         $(each_calendar_old).find('[name=endDate]').val(extensionRange.endDateText);
                
//       }
//     });
  
//     $(each_calendar).datepicker('setDate', ['+1d', '+5d']);
            
//     // объект расширения (хранит состояние календаря)
//     var extensionRange = $(each_calendar).datepicker('widget').data('datepickerExtensionRange');
//     if(extensionRange.startDateText) $(each_calendar).find('[name=startDate]').val(extensionRange.startDateText);
//     if(extensionRange.endDateText) $(each_calendar).find('[name=endDate]').val(extensionRange.endDateText);

//     $(each_calendar_old).find('.dropdown-calendar-buttons__clear').on('click', function() {
//       $(each_calendar).datepicker('setDate', [null, null]);
//       $(each_calendar).find('[name=startDate]').val(null);
//       $(each_calendar).find('[name=endDate]').val(null);
//       $(each_calendar).find('.dropdown-calendar-buttons__clear').css('visibility', 'hidden');
//     });

    
//     $(each_calendar_old).find('.dropdown_date__input').each(function(index, elem) {
//       $(elem).on('click', function() {
//         each_calendar = $(each_calendar_old).find('.dropdown-calendar');
//           if($(each_calendar).css('visibility') == 'visible'){
//             $(each_calendar).css('visibility', 'hidden');
//             $(each_calendar).find('.dropdown-calendar-buttons__clear').css('visibility', 'hidden');
//           } else {
//             $(each_calendar).css('visibility', 'visible');
//             $(each_calendar).find('.dropdown-calendar-buttons__clear').css('visibility', 'visible');
//           }
    
        
//       });
//     });
    

//     $(each_calendar_old).find('.option-button__apply').each(function(index, elem) {
//       $(elem).on('click', function() {
//           $(each_calendar).css('visibility', 'hidden');
//           $(each_calendar).find('.dropdown-calendar-buttons__clear').css('visibility', 'hidden');
           
//       });
//     });

    
// });

// });

// }



class DropdownCalendar{
  constructor(dropdownHtmlElem, inputHtmlElem){
    this.dropdown = dropdownHtmlElem;
    this.$dropdown = $(dropdownHtmlElem);
    this.$calendar = this.$dropdown.find('.dropdown-calendar');
    this.input = inputHtmlElem;
    this.$input = $(inputHtmlElem);
    this.$clearButton = this.$calendar.find('.option-button_clear');
    this.initCalendar();
  }

  initCalendar(){
    this.$calendar.datepicker(this.getOptions());

    // объект расширения (хранит состояние календаря)
    let extensionRange = this.$calendar.datepicker('widget').data('datepickerExtensionRange')
    
    if($.isArray(this.input)){
      this.$calendar.datepicker('option', 'dateFormat', 'dd.mm.yy');
    }

    this.$calendar.datepicker('setDate', ['+1d', '+5d']);

    if(extensionRange.startDateText || extensionRange.endDateText){
      this.changePositions(extensionRange);
    }

    this.bindEventListeners();
  }


  bindEventListeners(){
    this.$clearButton.on('click', this.clearAll.bind(this));
    this.$input.on('click', this.showHideCalendar.bind(this));
  }

  clearAll(){
    this.$calendar.datepicker('setDate', [null, null]);
    this.$clearButton.toggleClass('option-button_hidden');
    
    if($.isArray(this.input)){
      this.$input.val('ДД.ММ.ГГГГ');
    }else{
      this.$input.val('ДД МЕС - ДД МЕС' );
    }
  }

  showHideCalendar(){
    this.$calendar.toggleClass('dropdown-calendar_active')
  }

  changePositions(extensionRange){
    if($.isArray(this.input)){
      console.log(extensionRange.startDateText)
      console.log(extensionRange.endDateText)
      $(this.$input[0]).val(extensionRange.startDateText);
      $(this.$input[1]).val(extensionRange.endDateText);
    }else{
      $(this.$input).val(extensionRange.startDateText + ' - ' + extensionRange.endDateText);
    }
    
    this.$clearButton.removeClass('option-button_hidden');
  }

  getOptions(){
    return {
      range: 'period', // режим - выбор периода
      numberOfMonths: 1,
      selectOtherMonths: true,
      showOtherMonths: true,
      dateFormat: 'dd M',
      dayNames: [ 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье' ],
      dayNamesMin: [ 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс' ],
      dayNamesShort: [ 'Пон', 'Втр', 'Срд', 'Чтв', 'Птн', 'Суб', 'Вос' ],
      monthNames: [ 'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь' ],
      monthNamesShort: [ 'Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек' ],
      
      onSelect: (dateText, inst, extensionRange)=>{
        this.changePositions(extensionRange);
      }
    }
  }
  
}

export default DropdownCalendar;