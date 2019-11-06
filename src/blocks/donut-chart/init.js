import DonutChart from './donut-chart';

$(() => {
  const $donutChart = $('.js-donut-chart');
  const data = [
    { name: 'голосов', value: 260 },
    { name: 'голосов', value: 260 },
    { name: 'голосов', value: 520 },
  ];
  const width = 120;
  const height = 120;

  $donutChart.each((index, val) => {
    new DonutChart(val, { data, width, height });
  });
});
