function rnd_btw(min, max) {return fxrand() * (max - min) + min;}
function rnd_btwexp(min, max) {return fxrand()**2 * (max - min) + min;}
function rnd_int(min, max) {min = Math.ceil(min);max = Math.floor(max);return Math.floor(fxrand() * (max - min + 1)) + min;}

//random function helpers
// fxrand() gives u a value between 0 and 1
// rnd_btw(a,b) gives u a value between a and b
// rnd_btwexp(a,b) gives u a value between a and b, but with an exponential slope (more probable to get the borders than the center)
// rnd_int(a,b) gives u an integer value between a and b



ns=rnd_btw(2,5)
tm=rnd_btw(0.05, 1)

rtt=rnd_btw(-0.4,0.4)
clr=rnd_btw(0.1, 0.9)
hhu=rnd_btw(0.1, 0.9)
nss=rnd_btw(0.8, 4)
rttt=rnd_btw(0, 90)

noise(ns, tm, 10) //c0.1,100

  .rotate(0.1) //-0.4,0.4
  .modulate(src(o0).rotate(0.2), 0.25) 
  .scale(1.0) 
  .colorama(clr)
.hue(hhu)

    .modulate(noise(nss).rotate(rttt)) //0.8,4 b0,90

  .out(o0)

