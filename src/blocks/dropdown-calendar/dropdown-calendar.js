if(document.querySelector('.dropdown-calendar')){

$(function() {
    $('.dropdown-calendar').datepicker({
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
        $('[name=startDate]').val(extensionRange.startDateText);
        $('[name=endDate]').val(extensionRange.endDateText);
        
        
      }
      
    });
  

    $('.dropdown-calendar').datepicker('setDate', ['+1d', '+5d']);
    
      
    
  
    // объект расширения (хранит состояние календаря)
    var extensionRange = $('.dropdown-calendar').datepicker('widget').data('datepickerExtensionRange');
    if(extensionRange.startDateText) $('[name=startDate]').val(extensionRange.startDateText);
    if(extensionRange.endDateText) $('[name=endDate]').val(extensionRange.endDateText);

    $('.dropdown-calendar-buttons__clear').on('click', function() {
      $('.dropdown-calendar').datepicker('setDate', [null, null]);
      $('[name=startDate]').val(null);
      $('[name=endDate]').val(null);
      $('.dropdown-calendar-buttons__clear').css('visibility', 'hidden');
    });

    

});

document.querySelectorAll('.dropdown_date__input').forEach(function(elem) {
  elem.addEventListener("click", function() {
    if(document.querySelector('.dropdown-calendar').style.visibility== 'visible'){
      document.querySelector('.dropdown-calendar').style.visibility = 'hidden';
      $('.dropdown-calendar-buttons__clear').css('visibility', 'hidden');
    } else {
      document.querySelector('.dropdown-calendar').style.visibility = 'visible';
      $('.dropdown-calendar-buttons__clear').css('visibility', 'visible');
    }

    
  }, true);


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










