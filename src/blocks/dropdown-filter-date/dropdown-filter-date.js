if(document.querySelector('.dropdown-filter-date-calendar')){

$(function() {
    $('.dropdown-filter-date-calendar').datepicker({
      range: 'period', // режим - выбор периода
      numberOfMonths: 1,
      selectOtherMonths: true,
      showOtherMonths: true,
      dateFormat: "dd M",
      dayNames: [ "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье" ],
      dayNamesMin: [ "Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс" ],
      dayNamesShort: [ "Пон", "Втр", "Срд", "Чтв", "Птн", "Суб", "Вос" ],
      monthNames: [ "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь" ],
      monthNamesShort: [ "Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек" ],
      
      onSelect: function(dateText, inst, extensionRange) {
        // extensionRange - объект расширения
   
        
        $('[name=main-date]').val(extensionRange.startDateText + ' - ' + extensionRange.endDateText);

      }
      
    });
  

    $('.dropdown-filter-date-calendar').datepicker('setDate', ['+1d', '+5d']);
       
    
    // объект расширения (хранит состояние календаря)
    var extensionRange = $('.dropdown-filter-date-calendar').datepicker('widget').data('datepickerExtensionRange')
    if(extensionRange.startDateText || extensionRange.endtDateText) $('[name=main-date]').val(extensionRange.startDateText + ' - ' + extensionRange.endDateText);

    $('.dropdown-filter-calendar-buttons__clear').on('click', function() {
      $('.dropdown-filter-date-calendar').datepicker('setDate', [null, null]);
      $('[name=startDate]').val(null);
      $('[name=endDate]').val(null);
      $('.dropdown-filter-calendar-buttons__clear').css('visibility', 'hidden');
      $('[name=main-date]').val('ДД МЕС - ДД МЕС' );
    });
    

});



document.querySelectorAll('.dropdown-filter__input').forEach(function(elem) {
    
  elem.addEventListener("click", function() {
    if(document.querySelector('.dropdown-filter-date-calendar').style.visibility == 'visible'){
      document.querySelector('.dropdown-filter-date-calendar').style.visibility = 'hidden';
      $('.dropdown-filter-calendar-buttons__clear').css('visibility', 'hidden');
    } else {
      document.querySelector('.dropdown-filter-date-calendar').style.visibility = 'visible';
      $('.dropdown-filter-calendar-buttons__clear').css('visibility', 'visible');
    }
   
  }, true);


  $('.main-date').on('keypress', function(event){
    event.preventDefault()
})


});



}








