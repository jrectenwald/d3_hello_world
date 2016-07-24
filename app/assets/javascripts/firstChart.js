$(document).ready(function() {

  var cupsOfCoffee = [1, 2, 2, 4, 7, 9, 0.5],
      margin = {top: 20, right: 30, bottom: 30, left: 40},
      barWidth = 35,
      innerBarPadding = 2,
      chartWidth = cupsOfCoffee.length * (barWidth + innerBarPadding - 1) + margin.left + margin.right,
      chartHeight = 500 - margin.top - margin.bottom;


  var chartScale = d3.scale.linear()
      .domain([0, d3.max(cupsOfCoffee)])
      .range([0, chartHeight]);

  var chart = d3.select("#coffeeChart")
                  .append("svg")
                  .attr("width", chartWidth)
                  .attr("height", chartHeight);
;
  
  var bar = chart.selectAll("g")
      .data(cupsOfCoffee)
      .enter()
      .append("g")
      .attr("width", barWidth)
      .attr("height", chartScale)
      .attr("transform", function(d, i) { return "translate(" + (i * (barWidth + innerBarPadding)) + "," + (chartHeight - chartScale(d)) + ")"; });

  bar.append("rect")
      .attr("width", function() { return barWidth - 2 })
      .attr("height", chartHeight );

   bar.append("text")
      .attr("x", (barWidth / 2 - 5))
      .attr("y", 10)
      .attr("dy", ".35em")
      .text(function(d) { return d; });


});