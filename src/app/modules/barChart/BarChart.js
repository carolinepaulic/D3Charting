window.onload = function() {
    d3.json("modules/data/1ValueData.json", function(error, response) {
        var data = response.data;
        console.info(data);

        var width = 10 * d3.max(data);

        var x = d3.scale.linear()
            .domain([0, d3.max(data)])
            .range([0, width]);

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
    });
};