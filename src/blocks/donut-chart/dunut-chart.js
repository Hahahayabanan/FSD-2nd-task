/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
import * as d3 from 'd3';

const donutChart = document.querySelectorAll('.donut-chart');
if (donutChart) {
  Array.from(donutChart, (val) => {
    const data = [
      { name: 'голосов', value: 260 },
      { name: 'голосов', value: 260 },
      { name: 'голосов', value: 520 },
    ];
    const text = '';

    const width = 120;
    const height = 120;
    const thickness = 5;
    // const duration = 750;

    const radius = Math.min(width, height) / 2;
    // const color = d3.scaleOrdinal(d3.schemeAccent);

    const svg = d3.select(val)
      .append('svg')
      .attr('class', 'pie')
      .attr('width', width)
      .attr('height', height);

    const g = svg.append('g')
      .attr('transform', `translate(${width / 2},${height / 2})`);

    const arc = d3.arc()
      .innerRadius(radius - thickness)
      .outerRadius(radius);
    const arc2 = d3.arc()
      .innerRadius(radius - 10)
      .outerRadius(radius);

    const pie = d3.pie()
      .value((d) => d.value)
      .sort(null)
      .padAngle(0.02);


    // append a defs tag to SVG, This holds all our gradients and can be used
    // by any element within the SVG we append it to
    const defs = svg.append('svg:defs');

    // next we append a linear gradient
    const yellowGradient = defs.append('svg:linearGradient')
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
    const greenGradient = defs.append('svg:linearGradient')
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
    const purpleGradient = defs.append('svg:linearGradient')
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


    // eslint-disable-next-line no-unused-vars
    const path = g.selectAll('path')
      .data(pie(data))
      .enter()
      .append('g')
      .on('click', function onPieClick(d) {
        d3.selectAll('.text-group').remove();
        d3.selectAll('.value-text').remove();
        d3.selectAll('.name-text').remove();

        // eslint-disable-next-line no-shadow
        const g = d3.select(this)
          .style('cursor', 'pointer')
          .append('g')
          .attr('class', 'text-group');

        g.append('text')
          .attr('class', 'value-text')
          .text(`${d.data.value}`)
          .attr('text-anchor', 'middle')
          .attr('dy', '-0.1em');
        g.append('text')
          .attr('class', 'name-text')
          .text(`${d.data.name}`)
          .attr('text-anchor', 'middle')
          .attr('dy', '1.3em');
      })
      .style('fill', (d, i) => {
        if (i === 0) return 'url(#gradient1)';
        if (i === 1) return 'url(#gradient2)';
        if (i === 2) return 'url(#gradient3)';
      })

      .append('path')
      .attr('d', arc) // (d,i) => color(i))
      .attr('fill', (d, i) => {
        if (i === 0) return 'url(#gradient1)';
        if (i === 1) return 'url(#gradient2)';
        if (i === 2) return 'url(#gradient3)';
      })
      .on('click', function onPieColorClick(d) {
        d3.selectAll('path')
          .style('cursor', 'none')
          .attr('d', arc);

        d3.select(this)
          .attr('d', arc2);
      })
      .on('mouseover', function onPieColorMouseOver(d) {
        d3.select(this)
          .style('cursor', 'pointer');
      })
      .each(function eachColor(d, i) { this._current = i; });

    g.select('path').attr('d', arc2);

    g.append('text')
      .attr('text-anchor', 'middle')
      .attr('dy', '.35em')
      .text(text);

    g.append('text')
      .attr('class', 'value-text')
      .text(`${data[0].value}`)
      .attr('text-anchor', 'middle')
      .attr('dy', '-0.1em')
      .style('fill', 'url(#gradient1)');
    g.append('text')
      .attr('class', 'name-text')
      .text('голосов')
      .attr('text-anchor', 'middle')
      .attr('dy', '1.3em')
      .style('fill', 'url(#gradient1)');
  });
}
