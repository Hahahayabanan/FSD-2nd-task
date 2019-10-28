import FilterDate from './filter-date';

const calendars = document.querySelectorAll('.js-filter-date');
calendars.forEach((val) => {
  new FilterDate(val);
});
