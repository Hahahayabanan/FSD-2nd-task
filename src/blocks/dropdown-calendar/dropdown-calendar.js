if(document.querySelector('.dropdown-calendar')){

const calendar = $('.dropdown-date_wrapper');



$(function() {
    calendar.each(function(index, each_calendar_old){

      each_calendar = $(each_calendar_old).find('.dropdown-calendar');

     
      
    $(each_calendar).datepicker({
      range: 'period', // режим - выбор периода
      numberOfMonths: 1,
      selectOtherMonths: true,
      showOtherMonths: true,
      dateFormat: "dd.mm.yy",
      dayNames: [ "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье" ],
      dayNamesMin: [ "Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс" ],
      dayNamesShort: [ "Пон", "Втр", "Срд", "Чтв", "Птн", "Суб", "Вос" ],
      monthNames: [ "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь" ],
      monthNamesShort: [ "Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек" ],
      
      onSelect: function(dateText, inst, extensionRange) {
        // extensionRange - объект расширения
        $(each_calendar_old).find('[name=startDate]').val(extensionRange.startDateText);
        $(each_calendar_old).find('[name=endDate]').val(extensionRange.endDateText);
        
        
      }
      
    });
  

    $(each_calendar).datepicker('setDate', ['+1d', '+5d']);
    
        
    // объект расширения (хранит состояние календаря)
    var extensionRange = $(each_calendar).datepicker('widget').data('datepickerExtensionRange');
    if(extensionRange.startDateText) $(each_calendar).find('[name=startDate]').val(extensionRange.startDateText);
    if(extensionRange.endDateText) $(each_calendar).find('[name=endDate]').val(extensionRange.endDateText);

    $(each_calendar_old).find('.dropdown-calendar-buttons__clear').on('click', function() {
      $(each_calendar).datepicker('setDate', [null, null]);
      $(each_calendar).find('[name=startDate]').val(null);
      $(each_calendar).find('[name=endDate]').val(null);
      $(each_calendar).find('.dropdown-calendar-buttons__clear').css('visibility', 'hidden');
    });


  

    $(each_calendar_old).find('.dropdown_date__input').each(function(index, elem) {
      $(elem).on('click', function() {
          if($(each_calendar).css('visibility') == 'visible'){
            $(each_calendar).css('visibility', 'hidden');
            $(each_calendar).find('.dropdown-calendar-buttons__clear').css('visibility', 'hidden');
          } else {
   
            $(each_calendar).css('visibility', 'visible');
            $(each_calendar).find('.dropdown-calendar-buttons__clear').css('visibility', 'visible');
          }
    
        
      });
    });
    
    $(each_calendar_old).find('.option-button__apply').each(function(index, elem) {
      $(elem).on('click', function() {
          $(each_calendar).css('visibility', 'hidden');
          $(each_calendar).find('.dropdown-calendar-buttons__clear').css('visibility', 'hidden');
           
      });
    });

    
});

});































}










  
  // Метод "setDate" теперь может принимать массив: 2 элемента при range="period" или более элементов при range="multiple" 
  // $('#date_range').datepicker('setDate', ['+2d', '+1w']);
  
  // рекомендуется использовать событие "onSelect" для изменение значений полей формы (или переменых вашего скрипта)
  // однако для более гибкого управления, можно получить объект расширения и работать с информацией о выбранных датах
//   var extensionRange = $('#date_range').datepicker('widget').data('datepickerExtensionRange');
  
//   console.log(extensionRange.datesText); // массив дат (дата в формате, использующимся в datepicker)
//   console.log(extensionRange.startDateText); // начало периода (дата в формате, использующимся в datepicker)
//   console.log(extensionRange.endDateText); // окончание периода (дата в формате, использующимся в datepicker)
  
//   console.log(extensionRange.dates); // массив дат (объект даты)
//   console.log(extensionRange.startDate); // начало периода (объект даты)
//   console.log(extensionRange.endDate); // окончание периода (объект даты)










