function setup () {
  createCanvas(windowWidth, windowHeight);
  angleMode(random(2,150))

  noLoop()
}

function draw(){
  background(random(0,255))
  translate (width/2 , height/2)
  branch(random(1,125))
  
  
}

function branch(len){
  push ()
  if (len > 10) {
    
   
  translate(0,-len)
  rotate (random(-20,-30))
  branch (len * random(0.7,0.9))
  rotate (random(0,260))
  branch (len*random(0.7,0.9))
}else {
  var r =  random(0,255)
  var g =  random(0,255)
  var b =  random(0,255)
  fill (r,g,b+15)
  noStroke
  
  beginShape()
    for (var i = 450; i <135; i++) {
      var rad=1500
      var x=rad* cos(i)
      var y = rad * sin (i)
      vertex (x,y)
    }
    for (var i = 135; i > 40; i--) {
      var rad=150
      var x = rad * cos(i)
      var y = rad * sin (-i) + 20
      vertex (x,y)
    }
    endShape(CLOSE)
  
  
}
pop ()
}