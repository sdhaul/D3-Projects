// Visualization pages and titles
const pages = [
    { name: "Bar Chart", link: "bar-chart/bar.html" },
    { name: "Line Chart", link: "line-chart/line.html" },
    // Add more visualizations here
];

// Select the container and add buttons
const container = d3.select("#buttons-container");

pages.forEach((page) => {
    container
        .append("button")
        .text(page.name)
        .on("click", () => {
            window.location.href = page.link;
        })
        .style("margin", "10px")
        .style("padding", "10px 20px")
        .style("font-size", "16px")
        .style("cursor", "pointer")
        .style("background-color", "#007bff")
        .style("color", "white")
        .style("border", "none")
        .style("border-radius", "5px")
        .style("transition", "background-color 0.3s")
        .on("mouseover", function () {
            d3.select(this).style("background-color", "#0056b3");
        })
        .on("mouseout", function () {
            d3.select(this).style("background-color", "#007bff");
        });
});
