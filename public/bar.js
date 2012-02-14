var data = [{president: "truman",    awesomePoints: 159},
            {president: "obama",     awesomePoints: 150},
            {president: "kennedy",   awesomePoints: 133},
            {president: "jefferson", awesomePoints: 93},
            {president: "adams",     awesomePoints: 83},
            {president: "lincoln",   awesomePoints: 72},
            {president: "roosevelt", awesomePoints: 64},
            {president: "clinton",   awesomePoints: 60}];

var barWidth = 40;
var width = (barWidth + 20) * data.length;
var height = 200;

var x = d3.scale.linear().domain([0, data.length]).range([0, width]);
var y = d3.scale.linear().domain([0, d3.max(data, function(datum) { return datum.awesomePoints; })]).
  rangeRound([0, height]);

var padding = 30;
var barDemo = d3.select("#bar-demo-part3").
  append("svg:svg").
  attr("width", width).
  attr("height", height + padding);

barDemo.selectAll("rect").
  data(data).
  enter().
  append("svg:rect").
  attr("x", function(datum, index) { return x(index); }).
  attr("y", function(datum) { return height - y(datum.awesomePoints); }).
  attr("height", function(datum) { return y(datum.awesomePoints); }).
  attr("width", barWidth).
  attr("fill", "#2d578b");

barDemo.selectAll("text").
  data(data).
  enter().append("svg:text").
  attr("x", function(datum, index) { return x(index) + barWidth; }).
  attr("y", function(datum) { return height - y(datum.awesomePoints); }).
  attr("dx", -barWidth/2).
  attr("dy", "1.2em").
  attr("text-anchor", "middle").
  attr("style", "font-size: 12; font-family: Helvetica, sans-serif;").
  text(function(datum) { return datum.awesomePoints;}).
  attr("fill", "white");

barDemo.selectAll("text.yAxis").
  data(data).
  enter().append("svg:text").
  attr("x", function(datum, index) { return x(index) + barWidth; }).
  attr("y", height).
  attr("dx", -barWidth/2).
  attr("text-anchor", "middle").
  attr("style", "font-size: 12; font-family: Helvetica, sans-serif").
  text(function(datum) { return datum.president;}).
  attr("transform", "translate(0, 18)").
  attr("class", "yAxis");
