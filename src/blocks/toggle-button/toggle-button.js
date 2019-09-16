//$('input.cb-value').prop('checked', true);
$('.toggle-button__cb').click(function() {
    var mainParent = $(this).parent('.toggle-button');
    if($(mainParent).find('input.toggle-button__cb').is(':checked')) {
      $(mainParent).addClass('toggle-button_active');
    } else {
      $(mainParent).removeClass('toggle-button_active');
    }
  
})