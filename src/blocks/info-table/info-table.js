class InfoTable{

  constructor(table){
    this.table = table;

    this.bindHTMLElements();
    this.getValues();
    this.setValuesToTable();
  }

  bindHTMLElements(){
    this.priceOfRoom = this.table.querySelector('.js-info-table__price-of-room');
    this.numberOfDays = this.table.querySelector('.js-info-table__number-of-days');
    this.summaryPriceOfRooms = this.table.querySelector('.js-info-table__summary-price-of-rooms');
    this.numberOfDiscount = this.table.querySelector('.js-info-table__number-of-discount');
    this.priceOfDiscount = this.table.querySelector('.js-info-table__price-of-discount');
    this.advancedServicesPrice = this.table.querySelector('.js-info-table__advanced-services-price');
    this.finalPrice = this.table.querySelector('.js-info-table__final-price :first-child');
  }

  getValues(){
    this.values = {
      priceOfRoom: '9 990',
      numberOfDays: 4,
      summaryPriceOfRooms: '39 960',
      numberOfDiscount: '2 179',
      priceOfDiscount: 0,
      advancedServicesPrice: 300,
      finalPrice: '38 081',
    }
  }

  setValuesToTable(){
    const {
      priceOfRoom,
      numberOfDays,
      summaryPriceOfRooms,
      numberOfDiscount,
      priceOfDiscount,
      advancedServicesPrice,
      finalPrice,
  } = this.values;

    this.priceOfRoom.textContent = priceOfRoom;
    this.numberOfDays.textContent = numberOfDays;
    this.summaryPriceOfRooms.textContent = summaryPriceOfRooms;
    this.numberOfDiscount.textContent = numberOfDiscount;
    this.priceOfDiscount.textContent = priceOfDiscount;
    this.advancedServicesPrice.textContent = advancedServicesPrice;
    this.finalPrice.textContent = finalPrice;
  }

}

const dropdownFurniture = document.querySelectorAll('.js-info-table');
dropdownFurniture.forEach((val) => new InfoTable(val));