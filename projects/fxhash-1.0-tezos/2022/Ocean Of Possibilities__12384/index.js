function rnd_btw(min, max) {return fxrand() * (max - min) + min;}
function rnd_btwexp(min, max) {return fxrand()**2 * (max - min) + min;}
function rnd_int(min, max) {min = Math.ceil(min);max = Math.floor(max);return Math.floor(fxrand() * (max - min + 1)) + min;}

//random function helpers
// fxrand() gives u a value between 0 and 1
// rnd_btw(a,b) gives u a value between a and b
// rnd_btwexp(a,b) gives u a value between a and b, but with an exponential slope (more probable to get the borders than the center)
// rnd_int(a,b) gives u an integer value between a and b

  	


//começo=rnd_btw(0.01,0.99,0)

 

 
noise()
.rotate(1,0.01,1)
.color(() => a.fft[2]*2,0.5,.6)
.modulate(noise(() => a.fft[0]*10))
.scale(()=> a.fft[2]*5)
.layer(
  src(o0)
  .mask(osc(10).modulateRotate(osc(),90,0))
  .scale(() => a.fft[0]*2)
  .luma(2000,3000)
)
.blend(o0)
.out(o0)

osc(73)
.modulate(noise(() => a.fft[1]+5))
.color(0.2,0.5,7)
.out(o1)

src(o0)
.modulate(o1)
.layer(
  src(o1)
  .mask(o1)
  .saturate(5)
)
.modulateRotate(o1)
.rotate(({time}) => time%360*0.01)
.scale(2)
.out(o2)
render(o2)
