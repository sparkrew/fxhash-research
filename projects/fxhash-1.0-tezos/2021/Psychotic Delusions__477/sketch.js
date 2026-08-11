var rows, cols

var scl = 3 + (fxrand() * 10)
var inc = .1
var startcolor = fxrand() * 360
var endcolor = (startcolor + 180) % 360
var rotateDeg = fxrand() * 360
var lineScl = 2 + (fxrand() * 4)


function setup() {
  let cnv = createCanvas(1000, 1000)
  cnv.id('mycanvas')
  rows = floor((height) / scl)
  cols = floor((width) / scl)
  noLoop()
  angleMode(DEGREES)
  colorMode(HSB, 360, 100, 100, 1)
  noiseSeed(fxrand())
}

function draw() {
  background(0, 0, fxrand()*100 - 20)
  translate(500,500)

  var yoff = 0
  for (var y = 0; y < rows; y++)
    {
      var xoff = 0
      for (var x = 0; x < cols; x++)
        {
          var color = 0
             if(startcolor > endcolor)
              {
                color = (map(noise(xoff, yoff), 0, 1, endcolor, startcolor) + 180) % 360
              }
             else
              {
                color = map(noise(xoff, yoff), 0, 1, startcolor, endcolor) //(startcolor + (noise(xoff, yoff) * endcolor) + 30)
             }
          
             rotateDeg = round(rotateDeg)
             
             if(rotateDeg == 0 || rotateDeg == 90 || rotateDeg == 180 || rotateDeg == 360)
             {
                rotateDeg += 1 
             }
             rotate(rotateDeg)
             stroke(color, 80, 80)
             strokeWeight(1 + (fxrand() * 5))
             
             line(x*scl, y*scl, x * scl+(scl*lineScl), y * scl+(scl*lineScl))

           xoff += inc
        }
      yoff += inc
    }

}

function windowResized() {
  resizeCanvas(1000, 1000)
}