import InfoTable from './info-table';

document.addEventListener('DOMContentLoaded', () => {
  const values = {
    priceOfRoom: '9 990',
    numberOfDays: 4,
    summaryPriceOfRooms: '39 960',
    numberOfDiscount: '2 179',
    priceOfService: 0,
    priceOfAdditionalServices: 300,
    finalPrice: '38 081',
  };

  const tables = document.querySelectorAll('.js-info-table');
  tables.forEach((val) => new InfoTable(val, values));
});
