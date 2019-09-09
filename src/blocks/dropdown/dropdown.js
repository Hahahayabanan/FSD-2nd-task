
class DropdownGuests{
  constructor(htmlElem){
    this.dropdown = htmlElem;
    this.minusButtons = [];
    this.plusButtons = [];
    this.guestsNumber = 0;
    this.childrenNumber = 0;
    this.babiesNumber = 0;
    this.clearButton = this.getClearButton();
    this.getMinusAndPlusButtons();
    this.bindEventListeners();
  }

  bindEventListeners(){
    const select = this.dropdown.querySelector('.dropdown__select');
    select.addEventListener('click', this.showHideDropdown.bind(this));  

    this.minusButtons.map((item)=>{
      item.addEventListener('click', this.calcMinus.bind(this));
    });
    this.plusButtons.map((item)=>{
      item.addEventListener('click', this.calcPlus.bind(this));
    });
    if(this.clearButton) this.clearButton.addEventListener('click', this.clearOptions.bind(this));
  }

  showHideDropdown(event){
    event.stopPropagation();
    const select = this.dropdown.querySelector('.dropdown__select');
    select.classList.toggle('dropdown__select_active');
    const dropdown = select.parentNode;
    const selectOptions = dropdown.querySelector('.dropdown__options');
    selectOptions.classList.toggle('dropdown__options_active');

    document.addEventListener('click', this.outsideClickListener.bind(this));
    /** в макете стрелка не переворачивается, но должна же, наверное
    const selectArrow = dropdown.querySelector('.dropdown__arrow'); 
    const materialIconArrow = selectArrow.querySelector('.material-icons');
    materialIconArrow.innerHTML = (materialIconArrow.innerHTML == 'keyboard_arrow_down' ) ? 'keyboard_arrow_up' : 'keyboard_arrow_down';
    */
  }


  outsideClickListener(event) {
    const target = event.target;
    const its_menu = target === this.dropdown || this.dropdown.contains(target);
    if (!its_menu) {
      this.showHideDropdown(event);
      document.removeEventListener('click' ,this.outsideClickListener);
    }
  }

  calcMinus(event){
    const minusButton = event.currentTarget;
    const optionContainer = minusButton.parentNode;
    const currentValueElem = optionContainer.querySelector('.dropdown-option__item_number');
    let currentValue = currentValueElem.textContent;

    if(parseInt(currentValue, 10) > 0){
      currentValue = Number(currentValue) - Number(1);
    }
    if(parseInt(currentValue, 10) === 0){
      this.deactivateMinus(minusButton);
    }
    currentValueElem.textContent = currentValue;
    this.setSelectTexts(minusButton, currentValue)
  }

  calcPlus(event){
    const plusButton = event.currentTarget;
    const optionContainer = plusButton.parentNode;
    const currentValueElem = optionContainer.querySelector('.dropdown-option__item_number');
    const minusButton = currentValueElem.previousElementSibling;
    let currentValue = currentValueElem.textContent;

    if(parseInt(currentValue, 10) === 0){
      this.activateMinus(minusButton);
      this.activateClear();
    }
    currentValue = Number(currentValue) + Number(1);

    currentValueElem.textContent = currentValue;
    this.setSelectTexts(plusButton, currentValue);
  }

  activateMinus(minusButton){
    minusButton.classList.remove('dropdown-option__item_un-active');
  }
  deactivateMinus(minusButton){
    minusButton.classList.add('dropdown-option__item_un-active');
  }
  getMinusAndPlusButtons(){
    Array.from(this.dropdown.querySelectorAll('.dropdown-option__item_circle'), (val)=>{
      if(val.textContent === '-'){
        this.minusButtons.push(val);
      }
      if(val.textContent === '+'){
        this.plusButtons.push(val);
      }
    });
  }

  activateClear(){
    if(this.clearButton) this.clearButton.classList.remove('option-button_hidden');
  }
  deactivateClear(){
    if(this.clearButton) this.clearButton.classList.add('option-button_hidden');
  }
  getClearButton(){
    return this.dropdown.querySelector('.option-button_clear');
  }
  

  clearOptions(){
    this.deactivateClear();

    const guestsNumber = this.dropdown.querySelector('.dropdown__guests-num');
    const guestsText = this.dropdown.querySelector('.dropdown__guests-text');
    const babyNumber = this.dropdown.querySelector('.dropdown__baby-num');
    const babyText = this.dropdown.querySelector('.dropdown__baby-text');

    guestsNumber.innerHTML = 'Cколько '
    guestsText.innerHTML = 'гостей'
    babyNumber.innerHTML = '';
    babyText.innerHTML = '';

    Array.from(this.dropdown.querySelectorAll('.dropdown-option__item_number'), (val)=>{
      val.textContent = 0;
    });
  }


  setSelectTexts(target, number){
    const guestsNumber = this.dropdown.querySelector('.dropdown__guests-num');
    const guestsText = this.dropdown.querySelector('.dropdown__guests-text');
    const babyNumber = this.dropdown.querySelector('.dropdown__baby-num');
    const babyText = this.dropdown.querySelector('.dropdown__baby-text');

    const titles = {
      'гостей' : ['гость', 'гостя', 'гостей' ],
      'младенцев' : ['младенец', 'младенца', 'младенцев'],
    }

    const typeOfGuest = target.parentNode.previousElementSibling;

    if(typeOfGuest.textContent.toLowerCase() === 'младенцы'){
      this.babiesNumber = number;
      babyNumber.textContent = ', ' + this.babiesNumber + ' ';
      babyText.textContent = titles['младенцев'][this.checkPad(number)];
    }else{
      if(typeOfGuest.textContent.toLowerCase() === 'взрослые') this.guestsNumber = number;
      if(typeOfGuest.textContent.toLowerCase() === 'дети') this.childrenNumber = number;
      guestsNumber.textContent = +this.childrenNumber + +this.guestsNumber + ' ';
      guestsText.textContent = titles['гостей'][this.checkPad(number)];
    }
        
  }

  checkPad(num){
    let lastOne = num.toString().split('').pop();
    let tmp;
    if(Number(lastOne) == 1) tmp = 0;
        else if (Number(lastOne) > 1 && Number(lastOne) < 5) tmp = 1;
        else tmp = 2;
    if(Number(num) > 9 && Number(num) < 21){
        tmp = 2;
    }
    return tmp;
  }
}




class DropdownFurniture extends DropdownGuests{
  constructor(htmlElem){
    super(htmlElem);
  }

  setSelectTexts(target, number){
    const bedroomNumber = this.dropdown.querySelector('.dropdown__bedroom-num');
    const bedroomText = this.dropdown.querySelector('.dropdown__bedroom-text');
    const bedNumber = this.dropdown.querySelector('.dropdown__bed-num');
    const bedText = this.dropdown.querySelector('.dropdown__bed-text');
    const bathroomNumber = this.dropdown.querySelector('.dropdown__bathroom-num ');
    const bathroomText = this.dropdown.querySelector('.dropdown__bathroom-text');

    const titles = {
      'спальни' : ['спальня, ', 'спальни, ', 'спален, ' ],
      'кровати' : ['кровать, ', 'кровати, ', 'кроватей, '],
      'ванные комнаты' : ['ванная комната ', 'ванные комнаты ', 'ванных комнат ']
    }

    const typeOfGuest = target.parentNode.previousElementSibling;
    switch(typeOfGuest.textContent.toLowerCase()){
      case 'спальни': 
        bedroomNumber.textContent = number + ' ';
        bedroomText.textContent = titles['спальни'][this.checkPad(number)];
        break;
      case 'кровати': 
        bedNumber.textContent = number + ' ';
        bedText.textContent = titles['кровати'][this.checkPad(number)];
        break;
      case 'ванные комнаты': 
        bathroomNumber.textContent = number + ' ';
        bathroomText.textContent = titles['ванные комнаты'][this.checkPad(number)];
        break;
      default:
    }    
  }
}




const dropdownGuests = document.querySelectorAll('.js-dropdown');

if(dropdownGuests){
  const dropdownGuestsArray = Array.from(dropdownGuests, (val)=>{
    return new DropdownGuests(val);
  });
}

const dropdownFurniture = document.querySelectorAll('.js-dropdown_furniture');

if(dropdownFurniture){
  const dropdownFurnitureArray = Array.from(dropdownFurniture, (val)=>{
    return new DropdownFurniture(val);
  });
}