import * as d3 from 'd3';

class DonutChart {
  constructor(element) {
    this.donutChart = element;

    this.init();
  }

  init() {
    this.setStyleClass();
    this.initDonutChart();
    this.setGradients();
    this.createPaths();
    this.setStartText();
  }

  setStyleClass() {
    this.styleClass = {
      PIE: 'donut-chart__pie',
      PATH: 'donut-chart__path',
      VALUE: 'donut-chart__value',
      TEXT: 'donut-chart__text',
    };
  }

  getConstants() {
    const data = [
      { name: 'голосов', value: 260 },
      { name: 'голосов', value: 260 },
      { name: 'голосов', value: 520 },
    ];

    const width = 120;
    const height = 120;
    const thickness = 5;
    const radius = Math.min(width, height) / 2;
    return {
      data, width, height, thickness, radius,
    };
  }

  initDonutChart() {
    const {
      data, width, height, thickness, radius,
    } = this.getConstants();

    const d3DonutChart = d3.select(this.donutChart)
      .append('svg')
      .attr('class', this.styleClass.PIE)
      .attr('width', width)
      .attr('height', height);
    this.svgObject = d3DonutChart.append('g')
      .attr('transform', `translate(${width / 2},${height / 2})`);
    this.outerArc = d3.arc()
      .innerRadius(radius - thickness)
      .outerRadius(radius);
    this.innerArc = d3.arc()
      .innerRadius(radius - 10)
      .outerRadius(radius);
    this.pie = d3.pie()
      .value((d) => d.value)
      .sort(null)
      .padAngle(0.02);
    this.defs = d3DonutChart.append('svg:defs');
    this.data = data;
  }

  onPieClick(dataObject) {
    const { data, index } = dataObject;

    this.valueTextField.style('fill', `url(#gradient${index})`)
      .text(`${data.value}`);
    this.descriptionTextField.style('fill', `url(#gradient${index})`)
      .text(`${data.name}`);
  }

  onPieClickColor(data, currentPath, paths) {
    d3.selectAll('path')
      .attr('d', this.outerArc);
    d3.select(paths[currentPath])
      .attr('d', this.innerArc);
  }

  createPaths() {
    this.svgObject.selectAll('path')
      .data(this.pie(this.data))
      .enter()
      .append('g')
      .on('click', this.onPieClick.bind(this))
      .style('fill', (d, index) => `url(#gradient${index})`)
      .append('path')
      .attr('d', this.outerArc)
      .attr('fill', (d, index) => `url(#gradient${index})`)
      .attr('class', this.styleClass.PATH)
      .on('click', this.onPieClickColor.bind(this));
    this.svgObject.select('path').attr('d', this.innerArc);
  }

  setStartText(valueNumber = 0) {
    this.valueTextField = this.svgObject.append('text')
      .text(`${this.data[valueNumber].value}`)
      .attr('class', this.styleClass.VALUE)
      .attr('text-anchor', 'middle')
      .attr('dy', '-0.1em')
      .style('fill', `url(#gradient${valueNumber})`);
    this.descriptionTextField = this.svgObject.append('text')
      .text('голосов')
      .attr('class', this.styleClass.PIE)
      .attr('text-anchor', 'middle')
      .attr('dy', '1.3em')
      .style('fill', `url(#gradient${valueNumber})`);
  }

  setGradients() {
    this.purpleGradient = this.createGradient({ id: 0, startColor: '#BC9CFF', endColor: '#8BA4F9' });
    this.greenGradient = this.createGradient({ id: 1, startColor: '#6FCF97', endColor: '#66D2EA' });
    this.yellowGradient = this.createGradient({ id: 2, startColor: '#FFE39C', endColor: '#FFBA9C' });
  }

  createGradient(parameters) {
    const { startColor, endColor, id } = parameters;
    const gradient = this.defs.append('svg:linearGradient')
      .attr('id', `gradient${id}`)
      .attr('x1', '0%')
      .attr('y1', '0%')
      .attr('x2', '0%')
      .attr('y2', '100%')
      .attr('spreadMethod', 'pad');
    gradient.append('svg:stop')
      .attr('offset', '0%')
      .attr('stop-color', startColor)
      .attr('stop-opacity', 1);
    gradient.append('svg:stop')
      .attr('offset', '100%')
      .attr('stop-color', endColor)
      .attr('stop-opacity', 1);
    return gradient;
  }
}

export default DonutChart;
