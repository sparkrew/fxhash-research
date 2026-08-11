// TODO
// - random colors
// - line width based on proximity
// - line color as a gradient
// - fade colors with age

class Node {
  constructor(x, y, neighbors=[]){
    this.x=x
    this.y=y
    this.neighbors = neighbors
    this.direction = fxrand()*Math.PI*2
    this.speed =  (0.1+fxrand())*0.005*400/windowWidth
  }
  
  update_pos(){
    this.x += Math.cos(this.direction)*this.speed
    this.y += Math.sin(this.direction)*this.speed
    
    if ((this.x-0.5)**2 +(this.y-0.5)**2 > 0.3**2){
      let d_to_center = Math.atan2((this.y-0.5), (this.x-0.5))
      this.direction  -=0.2*fxrand()*(Math.PI-d_to_center+this.direction)
      if (this.x < 0.1){
        this.direction = 0
      }
      
    }
    
    // Warp to 0, hopefully not needed
    if ((this.x-0.5)**2 +(this.y-0.5)**2 > 0.5**2){
      this.x = 0.5
      this.y = 0.5
      this.neighbors = [sample(nodes), sample(nodes)]
    }
  }
}

function sample(array) {
  return array[Math.floor(fxrand() * array.length)];
}

let nodes = []
let cx = 0.5
let cy = 0.5
let startn=20+parseInt(fxrand()*30)

function setup() {
  createCanvas(400, 400);
  windowResized()
  
  for (let i = 0; i < startn; i++){
    let r = fxrand()*0.3
    let a = fxrand()*Math.PI*2
    n = new Node(0.5+r*Math.sin(a), 0.5+r*Math.cos(a))
    nodes.push(n)
  }
  
  // Add neighbors
  for (let i = 0; i < startn; i++){
    nodes[i].neighbors.push(sample(nodes))
  }
  
  // remove singletons
  singles = nodes.filter(n => n.neighbors.includes(n))
  nodes = nodes.filter(n => ( n.neighbors.includes(n) == false))
  nodes.map(function(n){
    if (singles.includes(n.neighbors[0])){
      n.neighbors=[sample(nodes)]
    }
  })
  console.log(startn, nodes.length)
  
  // Center things
  let sumx = nodes.map(function (n){return n.x}).reduce((a, b) => a + b, 0);
  cx = (sumx / nodes.length) || 0;
  nodes.map(function (n){n.x -= cx-0.5})
  let sumy = nodes.map(function (n){return n.y}).reduce((a, b) => a + b, 0);
  cy = (sumy / nodes.length) || 0;
  nodes.map(function (n){n.y -= cy-0.5})
}

function draw() {
  
  // Background
  // background(20);
  
  drawingContext.filter = 'blur(2px) brightness(95%)'; //hue-rotate(10deg)
  drawingContext.drawImage(canvas, 0, 0);
  drawingContext.filter = "none"
  
  // Update positions
  nodes.map(function (n){
    n.update_pos();
  })
  
  // Move towards center
  let sumx = nodes.map(function (n){return n.x}).reduce((a, b) => a + b, 0);
  cx = (sumx / nodes.length) || 0;
  nodes.map(function (n){n.x -= Math.max(-0.001, Math.min((cx-0.5), 0.001))})
  let sumy = nodes.map(function (n){return n.y}).reduce((a, b) => a + b, 0);
  cy = (sumy / nodes.length) || 0;
  nodes.map(function (n){n.y -= Math.max(-0.001, Math.min((cy-0.5), 0.001))})
  
  // Randomly change things
  if (fxrand()<0.005){
    nodes.sort(() => fxrand() - 0.5);
    oldn = nodes.pop() //nodes.splice(Math.floor(fxrand()*nodes.length), 1)//
    // console.log(oldn)
    nodes.map(function (n){
      if (n.neighbors.includes(oldn)){
        n.neighbors = [sample(nodes)]
        while (n.neighbors[0] == n){n.neighbors = [sample(nodes)]} 
      }
    })
    n = new Node(0.4+0.2*fxrand(), 0.4+0.2*fxrand())
    n.neighbors = [sample(nodes), sample(nodes)]
    nodes.push(n)
    
  }
  
  // Edges
  for (let i = 0; i < nodes.length; i++){
    x = nodes[i].x*windowWidth
    y = nodes[i].y*windowHeight
    for (let ni = 0; ni < nodes[i].neighbors.length; ni++){
      xn = nodes[i].neighbors[ni].x*windowWidth
      yn = nodes[i].neighbors[ni].y*windowHeight
      dist = ((nodes[i].x - nodes[i].neighbors[ni].x)**2 + (nodes[i].y - nodes[i].neighbors[ni].y)**2)**0.5
      strokeWeight(2 + 5*(0.6-dist));
      stroke(150-100*dist)
      line(x, y, xn, yn)
    }
  } 
  
  // Nodes
  stroke(200)
  strokeWeight(3);
  fill(80)
  for (let i = 0; i < nodes.length; i++){
    x = nodes[i].x*windowWidth
    y = nodes[i].y*windowHeight
    ellipse(x, y, 25, 25)
  } 
  
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}