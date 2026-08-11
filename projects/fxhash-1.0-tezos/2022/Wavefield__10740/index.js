function rnd_btw(min, max) {return fxrand() * (max - min) + min;}
function rnd_btwexp(min, max) {return fxrand()**2 * (max - min) + min;}
function rnd_int(min, max) {min = Math.ceil(min);max = Math.floor(max);return Math.floor(fxrand() * (max - min + 1)) + min;}

//random function helpers
// fxrand() gives u a value between 0 and 1
// rnd_btw(a,b) gives u a value between a and b
// rnd_btwexp(a,b) gives u a value between a and b, but with an exponential slope (more probable to get the borders than the center)
// rnd_int(a,b) gives u an integer value between a and b

  	


//começo=rnd_btw(0.01,0.99,0)



 


 

 

 
solid(0.2,0.6,9).layer(osc(37,0.03).thresh(0.99).luma()
.modulate(osc(-28.3,0.3).rotate(-1000),0.1).color(10,20,30)).layer(osc(37,0.09)
.color(0.1,0.1,9)
.thresh(0.7).luma().modulate(osc(10,0.3).rotate(10,1),0.5))
.modulateScale(osc(19,0.125,0.05).kaleid(500))
.mult(osc(4.6,0.055,2.1).kaleid(1000),37).rotate(0.1,0.1,1)
.invert(0.99)
.blend(o0)
.color(0.7,0.94,0.99)
.modulateScale(osc(0.1),-0.5)
.contrast(0.5)
  .out()