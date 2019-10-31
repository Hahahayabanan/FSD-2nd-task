import DonutChart from './donut-chart';

$(() => {
  const $donutChart = $('.js-donut-chart');
  $donutChart.each((index, val) => {
    new DonutChart(val);
  });
});
