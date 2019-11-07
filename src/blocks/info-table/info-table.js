class InfoTable {
  constructor(table, values) {
    this.table = table;
    this.values = values;
    this.findHTMLElements();
    if (this.values) this.setValuesToTable();
  }

  findHTMLElements() {
    this.priceOfRoom = this.table.querySelector('.js-info-table__price-of-room');
    this.numberOfDays = this.table.querySelector('.js-info-table__number-of-days');
    this.totalPriceOfRooms = this.table.querySelector('.js-info-table__total-price-of-rooms');
    this.numberOfDiscount = this.table.querySelector('.js-info-table__number-of-discount');
    this.priceOfService = this.table.querySelector('.js-info-table__price-of-service');
    this.priceOfAdditionalServices = this.table.querySelector('.js-info-table__price-of-additional-services');
    this.finalPrice = this.table.querySelector('.js-info-table__final-price :first-child');
  }

  setValuesToTable() {
    const {
      priceOfRoom,
      numberOfDays,
      totalPriceOfRooms,
      numberOfDiscount,
      priceOfService,
      priceOfAdditionalServices,
      finalPrice,
    } = this.values;

    this.priceOfRoom.textContent = priceOfRoom;
    this.numberOfDays.textContent = numberOfDays;
    this.totalPriceOfRooms.textContent = totalPriceOfRooms;
    this.numberOfDiscount.textContent = numberOfDiscount;
    this.priceOfService.textContent = priceOfService;
    this.priceOfAdditionalServices.textContent = priceOfAdditionalServices;
    this.finalPrice.textContent = finalPrice;
  }
}

export default InfoTable;
