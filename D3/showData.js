

// Your D3 code will go here



const svg = d3.select("svg");

//let data;


d3.csv("https://raw.githubusercontent.com/chumo/Data2Serve/master/transition_clusters.csv").then(function(loadedData) {
    data = loadedData;
    console.log(data); // You can remove this line if you don't need to log the data

    const circles = svg.selectAll("circle").data(data);

    circles.join("circle")
    .attr("cx", function(d) { return d.Xi; })
    .attr("cy", function(d) { return d.Yi; })
    .attr("r", 10)
    .attr("fill", function(d) { return d.color; })
    .transition().duration(3000)
    .ease(d3.easeElastic.period(0.4))
    .attr("cx", function(d) { return d.Xf; })
    .attr("cy", function(d) { return d.Yf; })

    d3.selectAll('circle').on('mouseover', function() {
        d3.select(this).attr('r', '20');
    })
    
    d3.selectAll('circle').on('mouseout', function() {
        d3.select(this).attr('r', '10');
    }
    )
      

}).catch(function(error) {
    console.error("Error loading the CSV file:", error);
});



