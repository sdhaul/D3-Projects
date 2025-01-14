// Sample data for the bar chart
const data = [10, 15, 20, 25, 30];

const width = 500;
const height = 300;
const barWidth = width / data.length;

const svg = d3
    .select("#bar-chart-container")
    .append("svg")
    .attr("width", width)
    .attr("height", height);

svg
    .selectAll("rect")
    .data(data)
    .enter()
    .append("rect")
    .attr("x", (d, i) => i * barWidth)
    .attr("y", (d) => height - d * 10)
    .attr("width", barWidth - 2)
    .attr("height", (d) => d * 10)
    .attr("fill", "teal");
