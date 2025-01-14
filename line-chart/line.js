// Sample data for the line chart
const data = [
    { date: new Date(2023, 0, 1), value: 10 },
    { date: new Date(2023, 1, 1), value: 20 },
    { date: new Date(2023, 2, 1), value: 15 },
    { date: new Date(2023, 3, 1), value: 25 },
    { date: new Date(2023, 4, 1), value: 30 }
];

const width = 500;
const height = 300;
const margin = { top: 20, right: 30, bottom: 30, left: 40 };

const x = d3.scaleTime()
    .domain(d3.extent(data, (d) => d.date))
    .range([margin.left, width - margin.right]);

const y = d3.scaleLinear()
    .domain([0, d3.max(data, (d) => d.value)])
    .range([height - margin.bottom, margin.top]);

const svg = d3
    .select("#line-chart-container")
    .append("svg")
    .attr("width", width)
    .attr("height", height);

svg.append("g")
    .call(d3.axisBottom(x).ticks(5))
    .attr("transform", `translate(0,${height - margin.bottom})`);

svg.append("g")
    .call(d3.axisLeft(y))
    .attr("transform", `translate(${margin.left},0)`);

const line = d3.line()
    .x((d) => x(d.date))
    .y((d) => y(d.value));

svg.append("path")
    .datum(data)
    .attr("fill", "none")
    .attr("stroke", "steelblue")
    .attr("stroke-width", 1.5)
    .attr("d", line);
