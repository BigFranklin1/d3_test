const w = 500;
const h = 500;

const viz = d3.select('#viz');

const svg = viz.append('svg')
    .attr('width', w)
    .attr('height', h)

let faceGroup = svg.append('g')
    .attr('transform', `translate(${w/2},${h/2})`)

let circle = faceGroup.append('circle')
    .attr("r", w / 2)
    .attr('fill', 'yellow')
    .attr('stroke', 'black')
    .attr('stroke-width', 1)

let eyeSpacing = 100;
let eyeOffset = -100;

let eyeGroup = faceGroup.append('g')
    .attr('transform', `translate(0,${eyeOffset}) scale(1,1.5) rotate(40)`)
    .attr('fill', 'black')

let leftEye = eyeGroup.append('circle')
    .attr("r", 20)
    .attr('cx', -eyeSpacing)

let rightEye = eyeGroup.append('circle')
    .attr("r", 20)
    .attr('cx', eyeSpacing)

let eyebrowWidth = 80;
let eyebrowHeight = 15;
let eyebrowOffset = -50;

let eyebrowGroup = eyeGroup.append('g')
    .attr('transform', `translate(0,${eyebrowOffset})`)

let leftEyebrow = eyebrowGroup.append('rect')
    .attr('width', eyebrowWidth)
    .attr('height', eyebrowHeight)
    .attr('x', -eyeSpacing - eyebrowWidth * 0.5)

let rightEyebrow = eyebrowGroup.append('rect')
    .attr('width', eyebrowWidth)
    .attr('height', eyebrowHeight)
    .attr('x', eyeSpacing - eyebrowWidth * 0.5)

let mouth = faceGroup.append('path')
    .attr('d', d3.arc()({
        innerRadius: 125,
        outerRadius: 150,
        startAngle: Math.PI / 2,
        endAngle: Math.PI * 3 / 2
    }))


function moveEyebrow() {
    eyebrowGroup.transition().duration(2000)
        .attr('transform', `translate(0,${-100})`)
}

d3.select('#button').on('click', () => {
    eyebrowGroup.transition().duration(2000)
        .attr('transform', `translate(0,${-100})`)
})