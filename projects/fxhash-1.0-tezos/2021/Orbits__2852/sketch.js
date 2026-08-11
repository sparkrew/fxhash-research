function setup() {
  let cnv = createCanvas(1080, 1080)
  cnv.id('canvas')
  colorMode(HSB)
  angleMode(DEGREES)
  noLoop()
  noStroke()
  strokeWeight(0.25)
}

function draw() {
  background(0,0,80)
  var sqsz = 2
  var rws = width/sqsz
  var cols = height/sqsz
  for(var r = 0; r<rws; r++)
    {
      for(var c = 0; c<cols; c++)
        {
          fill(0,0,map(fxrand(),0,1,80,85),0.2)
          square(-4+c*sqsz,-4+r*sqsz,sqsz*5)
        }
    }
  
  var cirNum = map(fxrand(),0,1,10,15)
  var hues = [15,30,60,90,120,150,180,210,240,260]
  var rh = floor(map(fxrand(),0,1,0,9.99))
  var hue = hues[rh]
  
  for (var n = 0;n<cirNum;n++)
    {
      push()
      translate(map(fxrand(),0,1,-width/4, (5*width)/4), map(fxrand(),0,1,-height/4,(5*height)/4))
      createOrbit(map(fxrand(),0,1,100,500), hue+((100/cirNum)*n))
      pop()
    }

}

function createOrbit(rad, hue){
  var sat = map(fxrand(),0,1,50,80)
  var brightness = map(fxrand(),0,1,50,90)
  var numCir = rad * 0.5
  for(var i = 0; i<numCir; i++)
    {
      fill(map(fxrand(),0,1,hue-5,hue+5),map(fxrand(),0,1,sat-5,sat+5), map(fxrand(),0,1,brightness-10,brightness+10),0.8)
      rotate(map(fxrand(),0,1,0,360))
      var dist = map(fxrand(),0,1,rad/1.1,rad)
      var size = map(fxrand(),0,1,dist/20,dist/16)
      circle(dist, 0, size)
      fill(map(fxrand(),0,1,hue-5,hue+5),map(fxrand(),0,1,sat-5,sat+5), map(fxrand(),0,1,brightness-10,brightness+10),0.6)
      circle(dist, 0, map(fxrand(),0,1,size/4,size/2))
      stroke(map(fxrand(),0,1,hue-5,hue+5),map(fxrand(),0,1,sat-5,sat+5), map(fxrand(),0,1,brightness-10,brightness+10),0.4)
      line(0,0,dist,0)
    }
  
  push()
  noFill()
  stroke(0,0,0,0.15)
  for(var a =0;a<numCir;a++)
    {
       strokeWeight(map(fxrand(),0,1,0.2,0.5))
       rotate(map(fxrand(),0,1,0,360))
       arc(0,0,rad*map(fxrand(),0,1,1.5,1.75),rad*map(fxrand(),0,1,1.2,1.4),0,map(fxrand(),0,1,5,10))
       rotate(map(fxrand(),0,1,0,360))
       arc(0,0,rad*map(fxrand(),0,1,2,2.4),rad*map(fxrand(),0,1,1.5,1.75),0,map(fxrand(),0,1,5,10))
    }
  pop()
  
}