function rnd_btw(min, max) {return fxrand() * (max - min) + min;}
function rnd_btwexp(min, max) {return fxrand()**2 * (max - min) + min;}
function rnd_int(min, max) {min = Math.ceil(min);max = Math.floor(max);return Math.floor(fxrand() * (max - min + 1)) + min;}

//random function helpers
// fxrand() gives u a value between 0 and 1
// rnd_btw(a,b) gives u a value between a and b
// rnd_btwexp(a,b) gives u a value between a and b, but with an exponential slope (more probable to get the borders than the center)
// rnd_int(a,b) gives u an integer value between a and b

kaleid1=rnd_btw(2,100)
osc1=rnd_btw(1,0,100)
osc2=rnd_btw(80,0.4,34)
shape1=rnd_btw(22,0.5,12)

osc(24,0.1,12).kaleid(kaleid1, 2).modulateKaleid(noise(osc1, 1,0,50))
  .mask(shape(12,0.6,0.2))
  .modulateRotate(shape(16,0.4,1))
  .modulateRotate(shape(shape1, 8,0.1,0.9))
.modulateRotate(shape(12,0.1,0.9)).modulateScale(o0,1,)
  .scale(0.5788822).add(shape(16,0.1,0.1).color(0.2,1,1,0.1))
  .add(shape(8,0.1,0.1).color(0.8,1,1,0.5))
 .rotate(()=>time)

.out()



	.out()