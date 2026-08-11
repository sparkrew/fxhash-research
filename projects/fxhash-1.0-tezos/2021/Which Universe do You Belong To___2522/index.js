function rnd_btw(min, max) {return fxrand() * (max - min) + min;}
function rnd_btwexp(min, max) {return fxrand()**2 * (max - min) + min;}
function rnd_int(min, max) {min = Math.ceil(min);max = Math.floor(max);return Math.floor(fxrand() * (max - min + 1)) + min;}

//random function helpers
// fxrand() gives u a value between 0 and 1
// rnd_btw(a,b) gives u a value between a and b
// rnd_btwexp(a,b) gives u a value between a and b, but with an exponential slope (more probable to get the borders than the center)
// rnd_int(a,b) gives u an integer value between a and b


osc1=rnd_btw(4,50)
rotate1=rnd_btw(.2,20)
noise3=rnd_btw(.10,.00250)
noise4=rnd_btw(0,20)
osc2=rnd_btw(.1,6)
osc3=rnd_btw(1,9)
osc4=rnd_btw(1,10)

voronoi(6, 1, 10)

.mult( shape(240,.5,0).scrollX(.05).rotate( ()=>time/10 ).mult(gradient(9)) )
.add( shape(240,.5,0).scrollX(.05).rotate( ()=>time/.010 ).mult(gradient(9)) )
.mult( shape(240,.5,0).scrollX(.05).rotate( ()=>time/.010 ).mult(gradient(9)) )
.pixelate(noise4)
.color(osc4,osc3,1)
.mult( shape(240,.5,0).scrollX(.05).rotate( ()=>time/.010 ).mult(gradient(9)) )
.add( shape(240,.5,0).scrollX(.05).rotate( ()=>time/.010 ).mult(gradient(9)) )
.modulateScale(
  shape(.240,.5,rotate1).scrollX(.05).rotate( ()=>time/1 )
  , ()=>(Math.sin(time/3)*10)+.02 )
.rotate(()=>time/2000).out()
