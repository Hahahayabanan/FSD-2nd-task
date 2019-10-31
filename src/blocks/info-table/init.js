import InfoTable from './info-table';

document.addEventListener('DOMContentLoaded', () => {
  const tables = document.querySelectorAll('.js-info-table');
  tables.forEach((val) => new InfoTable(val));
});
