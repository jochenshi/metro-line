let path = d3.path();

path.moveTo(1,2);
path.lineTo(30,40);
path.closePath()

let svgArea = d3.select("#wrapper");

svgArea.append("path")
    .attr("d", path)
    .attr("stroke", "#000")