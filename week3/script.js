const w = 500;
 const h = 500;
 const viz = d3.select('#viz');

 const svg = viz.append('svg')
     .attr('width', w)
     .attr('height', h)
const xValue = d=>d["Test1"]

const xScale = d3.scaleLinear()
  .domain([0, d3.max(data, xValue)])
  .range([0, width])

const visualize = data=>{

  let xScale = d3.scaleLinear()
    // .domain()
  svg.selectAll("rect").data(data)
    .enter().append("rect")
    // .attr().append("rect")
    .attr("y",(d,i)=> i*30)
    // .attr("width", d=>d["Test1"])
    .attr("width", d => xScale(xValue(d)))
    .attr("height",100)
    .attr("fill", "steelblue")
}
d3.csv("data.csv").then(data=>{
  console.log(data);
  data = data.map(d=>{
    d["Test1"] = Number(d["Test1"]);
    return d;
  })
  visualize(data);
})
