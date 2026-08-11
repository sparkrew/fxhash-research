var points = []
var mult 


var r1
var r2
var g1
var g2
var b1
var b2


function setup() {
  createCanvas(windowWidth, windowHeight);
  background (0)
  angleMode(DEGREES)
  noiseDetail(10) 
  var density = random(12,18)
  var space = width / density
  
  for (var x = 0 ; x < width; x += space) {
    for (var y = 0; y < height; y += space)  {
      var p = createVector(x,y)
      points.push(p)
    }
  }
  
  shuffle(points,true)
  
  
  r1 = random(255)
  r2 = random(255)
  g1 = random(255)
  g2 = random(255)
  b1 = random(255)
  b2 = random(255)
  
  mult = random (0.002 , 0.01)
}

function draw() {
noStroke()



for (var i=0; i < points.length; i++) {
  var r = map(points[i].x,0,width,r1,r2)
  var g = map(points[i].y,5,height,g1,g2)
  var b = map(points[i].x,0,width/2,b1,b2)
  var alpha = map(dist(width/2, height/2, points[i].x , points[i].y),0,50,50,0)
  fill (r,g,b)
  
  var angle = map(noise(points[i].x*mult/2, points[i].y / mult/5), 0, 1, 0, random(650,750))
                 
                 points[i].add(createVector(cos(angle), sin(angle)))
  
  if (dist(width /2, height /2, points[i].x, points[i].y)<350) {
      ellipse(points[i].x, points[i].y,0.7)

  }
}}