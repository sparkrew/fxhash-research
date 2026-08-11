function rnd_btw(min, max) {return fxrand() * (max - min) + min;}
function rnd_btwexp(min, max) {return fxrand()**2 * (max - min) + min;}
function rnd_int(min, max) {min = Math.ceil(min);max = Math.floor(max);return Math.floor(fxrand() * (max - min + 1)) + min;}

//random function helpers
// fxrand() gives u a value between 0 and 1
// rnd_btw(a,b) gives u a value between a and b
// rnd_btwexp(a,b) gives u a value between a and b, but with an exponential slope (more probable to get the borders than the center)
// rnd_int(a,b) gives u an integer value between a and b

  	


//começo=rnd_btw(0.01,0.99,0)



a=rnd_btw(1,30)
b=rnd_btw(0.01,1)
c=rnd_btw(1,10)
d=rnd_btw(1,10)
e=rnd_btw(0.1,0.4)
f=rnd_btw(1,2)
g=rnd_btw(1,10)
h=rnd_btw(2,4)
// z=rnd_btw(0.01,0.09)


voronoi(a,b,7).brightness(()=>Math.random()*0.2)
 .kaleid(c)
.rotate(1,0.01)
.modulateHue(src(o0).scale(5),1)
   .kaleid(d)
  .layer(osc(64,0.5,2).mask(shape(4,0.5,0.001)))
.modulatePixelate(noise(e,0.1),f)
.rotate(1000000,.07)
.modulateScale(osc(g,-0.1,0))
.scale(.2)
//.invert(2)
.thresh(.3,0.4)

  .kaleid()

  .out(o0)


