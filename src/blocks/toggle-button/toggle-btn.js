//$('input.cb-value').prop("checked", true);
$('.toggle-btn__cb').click(function() {
    var mainParent = $(this).parent('.toggle-btn');
    if($(mainParent).find('input.toggle-btn__cb').is(':checked')) {
      $(mainParent).addClass('active');
    } else {
      $(mainParent).removeClass('active');
    }
  
})