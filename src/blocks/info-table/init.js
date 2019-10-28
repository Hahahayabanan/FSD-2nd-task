import InfoTable from './info-table';

document.addEventListener('DOMContentLoaded', () => {
  const dropdownFurniture = document.querySelectorAll('.js-info-table');
  dropdownFurniture.forEach((val) => new InfoTable(val));
});
