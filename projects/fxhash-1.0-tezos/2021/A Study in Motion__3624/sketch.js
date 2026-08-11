var canvas

function setup() {
  canvas = createCanvas(2000, 2000)
  colorMode(HSB)
  angleMode(DEGREES)
  noLoop()
}

function draw() {
  background(0,0,90)
  
  var hueChoices = [0,35,120,170,220,285]
  var num = floor(map(fxrand(),0,1,0,5.99))
  var hueStart = hueChoices[num]
  
  var sqsz = 4
  var rws = width/sqsz
  var cols = height/sqsz
  noStroke()
  for(var r = 0; r<rws; r++)
    {
      for(var c = 0; c<cols; c++)
        {
          fill(hueStart,6,map(fxrand(),0,1,80,85),0.15)
          square(-4+c*sqsz,-4+r*sqsz,sqsz*5)
        }
    }
  
  var shapeCount = 35
  var shapeCount1 = 15
  var shapeCount2 = 10
  var shapeCount3 = 20
  
  for(var s = 0; s < shapeCount; s++)
    {
      push()
        translate(map(fxrand(),0,1,-width/4,(width*5)/4), map(fxrand(),0,1,-height/4,(height*5)/4))
        rotate(map(fxrand(),0,1,0,360))
        var amp = map(fxrand(),0,1,500,550)
        var spac = 4
        var period = 2
        var slices = floor(amp/5)
        var hue = map(fxrand(),0,1,hueStart -25,hueStart+25)
        var sat = map(fxrand(),0,1,40,100)
        var brightness = map(fxrand(),0,1,40,80)
        var alpha = 0.15
        var weight = spac
        var xspeed = map(fxrand(),0,1,-50,50)
        var yspeed = map(fxrand(),0,1,-50,50)
        var tail = floor(map(fxrand(),0,1,3,6.99))
        var rot = map(fxrand(),0,1,-5,5)
        drawLinearWave(amp,spac,period,slices,hue,sat,brightness,alpha,weight,xspeed,yspeed,tail,rot)
      pop()
    }
  
  for(var s1 = 0; s1 < shapeCount1; s1++)
    {
      push()
        translate(map(fxrand(),0,1,-width/4,(width*5)/4), map(fxrand(),0,1,-height/4,(height*5)/4))
        rotate(map(fxrand(),0,1,0,360))
        var amp1 = map(fxrand(),0,1,400,450)
        var spac1 = 4
        var period1 = 2
        var slices1 = floor(amp1/5)
        var hue1 = map(fxrand(),0,1,hueStart -25,hueStart+25)
        var sat1 = map(fxrand(),0,1,40,100)
        var brightness1 = map(fxrand(),0,1,40,80)
        var alpha1 = 0.3
        var weight1 = spac1
        var xspeed1 = map(fxrand(),0,1,-75,75)
        var yspeed1 = map(fxrand(),0,1,-75,75)
        var tail1 = floor(map(fxrand(),0,1,3,8.99))
        var rot1 = map(fxrand(),0,1,-8,8)
        drawLinearWave(amp1,spac1,period1,slices1,hue1,sat1,brightness1,alpha1,weight1,xspeed1,yspeed1,tail1,rot1)
      pop()
    }
  
  for(var s2 = 0; s2 < shapeCount2; s2++)
    {
      push()
        translate(map(fxrand(),0,1,-width/4,(width*5)/4), map(fxrand(),0,1,-height/4,(height*5)/4))
        rotate(map(fxrand(),0,1,0,360))
        var amp2 = map(fxrand(),0,1,300,350)
        var spac2 = 4
        var period2 = 2
        var slices2 = floor(amp2/5)
        var hue2 = map(fxrand(),0,1,hueStart -25,hueStart+25)
        var sat2 = map(fxrand(),0,1,40,100)
        var brightness2 = map(fxrand(),0,1,40,80)
        var alpha2 = 0.5
        var weight2 = spac2
        var xspeed2 = map(fxrand(),0,1,-100,100)
        var yspeed2 = map(fxrand(),0,1,-100,100)
        var tail2 = floor(map(fxrand(),0,1,3,10.99))
        var rot2 = map(fxrand(),0,1,-10,10)
        drawLinearWave(amp2,spac2,period2,slices2,hue2,sat2,brightness2,alpha2,weight2,xspeed2,yspeed2,tail2,rot2)
      pop()
    }
  
  for(var s3 = 0; s3 < shapeCount3; s3++)
    {
      push()
        translate(map(fxrand(),0,1,-width/4,(width*5)/4), map(fxrand(),0,1,-height/4,(height*5)/4))
        rotate(map(fxrand(),0,1,0,360))
        var amp3 = map(fxrand(),0,1,150,200)
        var spac3 = 4
        var period3 = 2
        var slices3 = floor(amp3/5)
        var hue3 = map(fxrand(),0,1,hueStart -25,hueStart+25)
        var sat3 = map(fxrand(),0,1,40,100)
        var brightness3 = map(fxrand(),0,1,40,80)
        var alpha3 = 0.8
        var weight3 = spac3
        var xspeed3 = map(fxrand(),0,1,-150,150)
        var yspeed3 = map(fxrand(),0,1,-150,150)
        var tail3 = floor(map(fxrand(),0,1,3,12.99))
        var rot3 = map(fxrand(),0,1,-15,15)
        drawLinearWave(amp3,spac3,period3,slices3,hue3,sat3,brightness3,alpha3,weight3,xspeed3,yspeed3,tail3,rot3)
      pop()
    }
  
}

function drawLinearWave(a, s, p, sl, hue, sat, bgt, al, we, xspd, yspd, tail, rot)
{
  push()
  
    for (var t = 0; t<tail;t++)
      {
        push()
          strokeWeight(we*((t+1)/tail))
          for (var c = 0; c<p; c++)
            {
              if(c%2 == 0)
              {
                for (var i = 0; i <= sl; i++)
                {
                  stroke(map(fxrand(),0,1,hue-5,hue+5),map(fxrand(),0,1,sat-6,sat+6),bgt*(((t+6)/(tail+5))),al*((t+1)/tail))
                  line(0,0,0,(a/sl)*i)
                  if(i < sl){translate(s,-(a/2)/sl)}
                  if(i == sl){translate(s,0)}
                }
              }
              if(c%2 == 1)
              {
                 for (var d = sl; d > -1; d--)
                 {
                  stroke(map(fxrand(),0,1,hue-5,hue+5),map(fxrand(),0,1,sat-6,sat+6),bgt*(((t+6)/(tail+5))),al*((t+1)/tail))
                  line(0,0,0,(a/sl)*d)
                  if(d != 0 ){translate(s,(a/2)/sl)}
                 } 
              }
            }
        pop()
        rotate(rot)
        translate(xspd*(1.2-((t+1)/tail)),yspd*(1.2-((t+1)/tail)))
      }
  pop()
}

