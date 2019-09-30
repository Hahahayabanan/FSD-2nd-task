import DropdownGuests from '../dropdown.js';

class DropdownFurniture extends DropdownGuests {

  setSelectTexts(target, number) {
    const bedroomNumber = this.dropdown.querySelector('.dropdown__bedroom-num');
    const bedroomText = this.dropdown.querySelector('.dropdown__bedroom-text');
    const bedNumber = this.dropdown.querySelector('.dropdown__bed-num');
    const bedText = this.dropdown.querySelector('.dropdown__bed-text');
    const bathroomNumber = this.dropdown.querySelector('.dropdown__bathroom-num ');
    const bathroomText = this.dropdown.querySelector('.dropdown__bathroom-text');

    const titles = {
      спальни: ['спальня, ', 'спальни, ', 'спален, ',],
      кровати: ['кровать, ', 'кровати, ', 'кроватей, ',],
      'ванные комнаты': ['ванная комната ', 'ванные комнаты ', 'ванных комнат ',],
    };
    const furniture = {
      BEDROOMS: 'спальни',
      BEDS: 'кровати',
      BATHROOMS: 'ванные комнаты',
    };

    const typeOfGuest = target.parentNode.previousElementSibling;
    switch (typeOfGuest.textContent.toLowerCase()) {
      case furniture.BEDROOMS:
        bedroomNumber.textContent = `${number} `;
        bedroomText.textContent = titles[furniture.BEDROOMS][this.checkPad(number)];
        break;
      case furniture.BEDS:
        bedNumber.textContent = `${number} `;
        bedText.textContent = titles[furniture.BEDS][this.checkPad(number)];
        break;
      case furniture.BATHROOMS:
        bathroomNumber.textContent = `${number} `;
        bathroomText.textContent = titles[furniture.BATHROOMS][this.checkPad(number)];
        break;
      default:
    }
  }
}

const dropdownFurniture = document.querySelectorAll('.js-dropdown_with-furniture');
dropdownFurniture.forEach((val) => new DropdownFurniture(val));

