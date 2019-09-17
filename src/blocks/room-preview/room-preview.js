import 'slick-carousel'
import 'slick-carousel/slick/slick-theme.scss'
import 'slick-carousel/slick/slick.scss'

$(document).ready(function(){

  const $slider = $('.js-room-preview__slider');

  $slider.map((i, val)=>{
    let isArrows = false;
    if($(val).hasClass('room-preview__slider_with-arrows')){
      isArrows = true;
    }
    $(val).slick({
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      arrows: isArrows,
      useCSS: false,
    });
  })
  
})
