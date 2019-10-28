import DonutChart from './donut-chart';

$(() => {
  const $donutChart = $('.js-donut-chart');
  $donutChart.each((val) => {
    new DonutChart(val);
  });
});
