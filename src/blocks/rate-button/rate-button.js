class RateButton{
  
  constructor(htmlElem){
    this.isEnoughFullStars = false;
    this.elem = htmlElem;
    this.labels = this.elem.querySelectorAll('.rate-button__label');

    this.initFullStars = (label)=>{
      if(!this.isEnoughFullStars){
        let input = label.querySelector('.rate-button__input');
        const starIcon = 'star';
        const isChecked = input.getAttribute('checked') === 'checked'; 
        const materialIcon = label.querySelector('.material-icons');

        materialIcon.textContent = starIcon;
        
        if(isChecked){
          this.isEnoughFullStars = true;
        }
      }
    }

    this.inputs = Array.from(this.labels, this.initFullStars);
  }
}


const rateButtonLabel = document.querySelectorAll('.js-rate-button');

if(rateButtonLabel){
  const rateButtons = Array.from(rateButtonLabel, (val)=>{
    return new RateButton(val);
  });
}