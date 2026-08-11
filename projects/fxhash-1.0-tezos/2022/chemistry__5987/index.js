function rnd_btw(min, max) {return fxrand() * (max - min) + min;}
function rnd_btwexp(min, max) {return fxrand()**2 * (max - min) + min;}
function rnd_int(min, max) {min = Math.ceil(min);max = Math.floor(max);return Math.floor(fxrand() * (max - min + 1)) + min;}

//random function helpers
// fxrand() gives u a value between 0 and 1
// rnd_btw(a,b) gives u a value between a and b
// rnd_btwexp(a,b) gives u a value between a and b, but with an exponential slope (more probable to get the borders than the center)
// rnd_int(a,b) gives u an integer value between a and b


a=rnd_btw(3,43)
b=fxrand(0.5,1)
c=rnd_btw(0.0001,0.0004)
d=rnd_btw(0.3,0.6)
e=fxrand(0.3,0.9)
f=rnd_btw(0,5)
g=rnd_btwexp(0,1)
h=rnd_btw(100,300)
i=rnd_btw(100,300)

noise(a,f).pixelate(h,i)
  .colorama(f)
  .modulate(o0, () => mouse.x * c)
  .scale(f)
  .saturate( ({time}) => Math.sin(time) * f )
  .modulateHue(src(o0).scale(f),g)
  .luma([b,d,e,g].fast(b),e).out(o0)
    
