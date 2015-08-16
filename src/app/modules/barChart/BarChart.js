window.onload = function() {
    var data = [4, 8, 15, 16, 23, 42];
    var width = 10 * d3.max(data);

    var x = d3.scale.linear()
        .domain([0, d3.max(data)])
        .range([0, width]);

    /* Used for div chart */
    d3.select(".chart")
        .selectAll("div")
            .data(data)
        .enter().append("div")
            .style("width", function(d) { return x(d) + "px"; })
            .text(function (d) { return d; });

    /* Used for SVG chart */
    var barHeight = 20;

    var chart = d3.select(".svg-chart")
        .attr("width", width)
        .attr("height", barHeight * data.length);
    var bar = chart.selectAll("g")
            .data(data)
        .enter().append("g")
            .attr("transform", function(d,i) { return "translate(0," + i * barHeight + ")"; }); //d is data and i is index?
    bar.append("rect")
        .attr("width", x)
        .attr("height", barHeight - 1);
    bar.append("text")
        .attr("x", function(d) { return x(d) - 3; })
        .attr("y", barHeight / 2)
        .attr("dy", ".35em")
        .text(function(d) { return d; });
};