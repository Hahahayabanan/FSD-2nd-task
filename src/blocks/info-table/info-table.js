class InfoTable {
  constructor(table) {
    this.table = table;

    this.findHTMLElements();
    this.getValues();
    this.setValuesToTable();
  }

  findHTMLElements() {
    this.priceOfRoom = this.table.querySelector('.js-info-table__price-of-room');
    this.numberOfDays = this.table.querySelector('.js-info-table__number-of-days');
    this.summaryPriceOfRooms = this.table.querySelector('.js-info-table__summary-price-of-rooms');
    this.numberOfDiscount = this.table.querySelector('.js-info-table__number-of-discount');
    this.priceOfService = this.table.querySelector('.js-info-table__price-of-service');
    this.priceOfAdditionalServices = this.table.querySelector('.js-info-table__price-of-additional-services');
    this.finalPrice = this.table.querySelector('.js-info-table__final-price :first-child');
  }

  getValues() {
    this.values = {
      priceOfRoom: '9 990',
      numberOfDays: 4,
      summaryPriceOfRooms: '39 960',
      numberOfDiscount: '2 179',
      priceOfService: 0,
      priceOfAdditionalServices: 300,
      finalPrice: '38 081',
    };
  }

  setValuesToTable() {
    const {
      priceOfRoom,
      numberOfDays,
      summaryPriceOfRooms,
      numberOfDiscount,
      priceOfService,
      priceOfAdditionalServices,
      finalPrice,
    } = this.values;

    this.priceOfRoom.textContent = priceOfRoom;
    this.numberOfDays.textContent = numberOfDays;
    this.summaryPriceOfRooms.textContent = summaryPriceOfRooms;
    this.numberOfDiscount.textContent = numberOfDiscount;
    this.priceOfService.textContent = priceOfService;
    this.priceOfAdditionalServices.textContent = priceOfAdditionalServices;
    this.finalPrice.textContent = finalPrice;
  }
}

export default InfoTable;
