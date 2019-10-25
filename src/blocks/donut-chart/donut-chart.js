import * as d3 from 'd3';

class DonutChart {
  constructor(element) {
    this.donutChart = element;
    this.getConstants();
    this.initDonutChart();
    this.setGradients();
    this.createPaths();
    this.setStartText()
  }

  getConstants() {
    const data = [
      { name: 'голосов', value: 260, },
      { name: 'голосов', value: 260, },
      { name: 'голосов', value: 520, },
    ];
  
    const width = 120;
    const height = 120;
    const thickness = 5;
    const radius = Math.min(width, height) / 2;
    return { data, width, height, thickness, radius, }
  }

  initDonutChart() {
    const { data, width, height, thickness, radius, } =  this.getConstants();
    const svg = d3.select(this.donutChart)
      .append('svg')
      .attr('class', 'donut-chart__pie')
      .attr('width', width)
      .attr('height', height);

    this.g = svg.append('g')
      .attr('transform', `translate(${width / 2},${height / 2})`);
    this.arc = d3.arc()
      .innerRadius(radius - thickness)
      .outerRadius(radius);
    this.arc2 = d3.arc()
      .innerRadius(radius - 10)
      .outerRadius(radius);
    this.pie = d3.pie()
      .value((d) => d.value)
      .sort(null)
      .padAngle(0.02);
    this.defs = svg.append('svg:defs');
    this.data = data;
  }

  onPieClick(d) {
    const {data,} = d;
    d3.selectAll('.text-group').remove();
    d3.selectAll('.value-text').remove();
    d3.selectAll('.name-text').remove();

    const g = d3.select(this)
      .style('cursor', 'pointer')
      .append('g')
      .attr('class', 'donut-chart__text-group');

    g.append('text')
      .attr('class', 'donut-chart__value')
      .text(`${data.value}`)
      .attr('text-anchor', 'middle')
      .attr('dy', '-0.1em');
    g.append('text')
      .attr('class', 'donut-chart__text')
      .text(`${data.name}`)
      .attr('text-anchor', 'middle')
      .attr('dy', '1.3em');
  }

  onPieClickColor(d,i,paths) {
    d3.selectAll('path')
      .attr('d', this.arc);
    d3.select(paths[i])
      .attr('d', this.arc2);
  }

  onPieColorMouseOver() {
    d3.select(this)
      .style('cursor', 'pointer');
  }
  
  createPaths() {
    this.g.selectAll('path')
      .data(this.pie(this.data))
      .enter()
      .append('g')
      .on('click',  this.onPieClick)
      .style('fill', (d, i) => {
        if (i === 0) return 'url(#gradient1)';
        if (i === 1) return 'url(#gradient2)';
        if (i === 2) return 'url(#gradient3)';
      })
      .append('path')
      .attr('d', this.arc)
      .attr('fill', (d, i) => {
        if (i === 0) return 'url(#gradient1)';
        if (i === 1) return 'url(#gradient2)';
        if (i === 2) return 'url(#gradient3)';
      })
      .on('click',  this.onPieClickColor.bind(this))
      .on('mouseover', this.onPieColorMouseOver)
      .each(function eachColor (i) { this._current = i; });

      this.g.select('path').attr('d', this.arc2);
  }

  setStartText() {
    this.g.append('text')
      .attr('text-anchor', 'middle')
      .attr('dy', '.35em')
      .text('');

    this.g.append('text')
      .attr('class', 'donut-chart__value')
      .text(`${this.data[0].value}`)
      .attr('text-anchor', 'middle')
      .attr('dy', '-0.1em')
      .style('fill', 'url(#gradient1)');
    this.g.append('text')
      .attr('class', 'donut-chart__text')
      .text('голосов')
      .attr('text-anchor', 'middle')
      .attr('dy', '1.3em')
      .style('fill', 'url(#gradient1)');
  }

  setGradients() {
    const yellowGradient = this.defs.append('svg:linearGradient')
      .attr('id', 'gradient3')
      .attr('x1', '0%')
      .attr('y1', '0%')
      .attr('x2', '0%')
      .attr('y2', '100%')
      .attr('spreadMethod', 'pad');
    // first dark yellow color
    yellowGradient.append('svg:stop')
      .attr('offset', '0%')
      .attr('stop-color', '#FFE39C')
      .attr('stop-opacity', 1);
    // second light yellow color
    yellowGradient.append('svg:stop')
      .attr('offset', '100%')
      .attr('stop-color', '#FFBA9C')
      .attr('stop-opacity', 1);
    const greenGradient = this.defs.append('svg:linearGradient')
      .attr('id', 'gradient2')
      .attr('x1', '0%')
      .attr('y1', '0%')
      .attr('x2', '0%')
      .attr('y2', '100%')
      .attr('spreadMethod', 'pad');
    greenGradient.append('svg:stop')
      .attr('offset', '0%')
      .attr('stop-color', '#6FCF97')
      .attr('stop-opacity', 1);
    greenGradient.append('svg:stop')
      .attr('offset', '100%')
      .attr('stop-color', '#66D2EA')
      .attr('stop-opacity', 1);
    const purpleGradient = this.defs.append('svg:linearGradient')
      .attr('id', 'gradient1')
      .attr('x1', '0%')
      .attr('y1', '0%')
      .attr('x2', '0%')
      .attr('y2', '100%')
      .attr('spreadMethod', 'pad');
    purpleGradient.append('svg:stop')
      .attr('offset', '0%')
      .attr('stop-color', '#BC9CFF')
      .attr('stop-opacity', 1);
    purpleGradient.append('svg:stop')
      .attr('offset', '100%')
      .attr('stop-color', '#8BA4F9')
      .attr('stop-opacity', 1);
  }
}

const donutChart = document.querySelectorAll('.donut-chart');
donutChart.forEach((val)=>{ new DonutChart(val) });