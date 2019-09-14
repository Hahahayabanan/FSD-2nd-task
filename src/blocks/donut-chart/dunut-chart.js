import * as d3 from "d3";

const donutChart = document.querySelectorAll('.donut-chart');
if(donutChart){

  const donutChartArray = Array.from(donutChart, (val)=>{

    var data = [
      {name: "голосов", value: 260},
      {name: "голосов", value: 260},
      {name: "голосов", value: 520},
    ];
    var text = "";

    var width = 120;
    var height = 120;
    var thickness = 5;
    var duration = 750;

    var radius = Math.min(width, height) / 2;
    var color = d3.scaleOrdinal(d3.schemeAccent);

    var svg = d3.select(val)
    .append('svg')
    .attr('class', 'pie')
    .attr('width', width)
    .attr('height', height);

    var g = svg.append('g')
    .attr('transform', 'translate(' + (width/2) + ',' + (height/2) + ')');

    var arc = d3.arc()
    .innerRadius(radius - thickness)
    .outerRadius(radius);
    var arc2 = d3.arc()
    .innerRadius(radius - 10)
    .outerRadius(radius);

    var pie = d3.pie()
    .value(function(d) { return d.value; })
    .sort(null)
    .padAngle(.02);
        

    // append a defs tag to SVG, This holds all our gradients and can be used
    //by any element within the SVG we append it to
    var defs = svg.append("svg:defs")

    //next we append a linear gradient 
    var yellow_gradient = defs.append("svg:linearGradient")
      .attr("id", "gradient3")
      .attr("x1", "0%")
      .attr("y1", "0%")
      .attr("x2", "0%")
      .attr("y2", "100%")
      .attr("spreadMethod", "pad");
    //first dark yellow color
    yellow_gradient.append("svg:stop")
      .attr("offset", "0%")
      .attr("stop-color", "#FFE39C")
      .attr("stop-opacity", 1);
  //second light yellow color
    yellow_gradient.append("svg:stop")
      .attr("offset", "100%")
      .attr("stop-color", "#FFBA9C")
      .attr("stop-opacity", 1);
    var green_gradient = defs.append("svg:linearGradient")
      .attr("id", "gradient2")
      .attr("x1", "0%")
      .attr("y1", "0%")
      .attr("x2", "0%")
      .attr("y2", "100%")
      .attr("spreadMethod", "pad");

    green_gradient.append("svg:stop")
      .attr("offset", "0%")
      .attr("stop-color", "#6FCF97")
      .attr("stop-opacity", 1);

    green_gradient.append("svg:stop")
      .attr("offset", "100%")
      .attr("stop-color", "#66D2EA")
      .attr("stop-opacity", 1);
    var purple_gradient = defs.append("svg:linearGradient")
      .attr("id", "gradient1")
      .attr("x1", "0%")
      .attr("y1", "0%")
      .attr("x2", "0%")
      .attr("y2", "100%")
      .attr("spreadMethod", "pad");

    purple_gradient.append("svg:stop")
      .attr("offset", "0%")
      .attr("stop-color", "#BC9CFF")
      .attr("stop-opacity", 1);

    purple_gradient.append("svg:stop")
      .attr("offset", "100%")
      .attr("stop-color", "#8BA4F9")
      .attr("stop-opacity", 1);

          
    var path = g.selectAll('path')
    .data(pie(data))
    .enter()
    .append("g")
    .on("click", function(d) {
      d3.selectAll(".text-group").remove();
      d3.selectAll(".value-text").remove();
      d3.selectAll(".name-text").remove();

      let 
      g = d3.select(this)
        .style("cursor", "pointer")
        .append("g")
        .attr("class", "text-group");

      g.append("text")
        .attr("class", "value-text")
        .text(`${d.data.value}`)
        .attr('text-anchor', 'middle')
        .attr('dy', '-0.1em');
      g.append("text")
        .attr("class", "name-text")
        .text(`${d.data.name}`)
        .attr('text-anchor', 'middle')
        .attr('dy', '1.3em');
    })
    .style('fill', (d,i) => {
      if(i == 0) return 'url(#gradient1)'
      if(i == 1) return 'url(#gradient2)'
      if(i == 2) return 'url(#gradient3)'
    }) 

    .append('path')
    .attr('d', arc) //(d,i) => color(i))
    .attr('fill', (d,i) => {
      if(i == 0) return 'url(#gradient1)'
      if(i == 1) return 'url(#gradient2)'
      if(i == 2) return 'url(#gradient3)'
    }) 
    .on("click", function(d) {
        d3.selectAll("path")
          .style("cursor", "none")  
          .attr('d', arc);
        
        d3.select(this)     
          .attr('d', arc2)
    })
    .on("mouseover", function(d) {
        d3.select(this)     
          .style("cursor", "pointer")
    })

    .each(function(d, i) { this._current = i; });
    
    g.select('path').attr('d', arc2);

    g.append('text')
      .attr('text-anchor', 'middle')
      .attr('dy', '.35em')
      .text(text);
      
    g.append("text")
      .attr("class", "value-text")
      .text(`${data[0].value}`)
      .attr('text-anchor', 'middle')
      .attr('dy', '-0.1em')
      .style('fill', 'url(#gradient1)');
    g.append("text")
      .attr("class", "name-text")
      .text("голосов")
      .attr('text-anchor', 'middle')
      .attr('dy', '1.3em')
      .style('fill', 'url(#gradient1)');


  });
}
