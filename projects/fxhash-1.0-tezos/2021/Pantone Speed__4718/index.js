function rnd_btw(min, max) {return fxrand() * (max - min) + min;}
function rnd_btwexp(min, max) {return fxrand()**2 * (max - min) + min;}
function rnd_int(min, max) {min = Math.ceil(min);max = Math.floor(max);return Math.floor(fxrand() * (max - min + 1)) + min;}

//random function helpers
// fxrand() gives u a value between 0 and 1
// rnd_btw(a,b) gives u a value between a and b
// rnd_btwexp(a,b) gives u a value between a and b, but with an exponential slope (more probable to get the borders than the center)
// rnd_int(a,b) gives u an integer value between a and b


//Variables

function rnd_int(min, max) {min = Math.ceil(min);max = Math.floor(max);return Math.floor(fxrand() * (max - min + 1)) + min;}

var a=rnd_int(1.0,5.0)
var b=rnd_btw(0.1,0.9)
var c=rnd_btw(0.5,3)


//cuadros

shape(a,0.4)
osc(a,0.0006,0.6)
.rotate(2,0.5)
.repeatY(2,2)
.scale(0.5)


//orbe
.diff(
       shape(a,0.1,0.01)
       .scale(1,a)
       .scrollX(1,b)
       .color(b,0,0)
       
  )

.diff(
       shape(a,0.1,0.01)
       .scale(1,a)
       .scrollY(1,b)
       .color(1,b,0)
  )

.add(
       shape(a,0.1,0.01)
       .rotate(1,b)
       .scale(1,a)
       .repeat(2,2)
       .color(b,0,0)
       
  )
.repeat(3,3)
.kaleid(4)
.diff(solid(0,0,b))
.mult(
  shape(4,0.5,0.001).scale(1,0.6)
  
)
.rotate(3,0.5)
.modulatePixelate(osc(c,b,0.1))
.out(o0)