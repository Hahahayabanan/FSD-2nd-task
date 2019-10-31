import FilterDate from './filter-date';

const $calendars = $('.js-filter-date');
$calendars.each((index, val) => {
  new FilterDate(val);
});
