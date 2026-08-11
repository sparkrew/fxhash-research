function rnd_btw(min, max) {return fxrand() * (max - min) + min;}
function rnd_btwexp(min, max) {return fxrand()**2 * (max - min) + min;}
function rnd_int(min, max) {min = Math.ceil(min);max = Math.floor(max);return Math.floor(fxrand() * (max - min + 1)) + min;}

//random function helpers
// fxrand() gives u a value between 0 and 1
// rnd_btw(a,b) gives u a value between a and b
// rnd_btwexp(a,b) gives u a value between a and b, but with an exponential slope (more probable to get the borders than the center)
// rnd_int(a,b) gives u an integer value between a and b



osc1=rnd_btw(7,30)
osc1fast=fxrand()

osc1hue=rnd_btwexp(1,10)
osc2=rnd_btwexp(-0.1,0.1)

osc2fast=fxrand()
osc2hue=rnd_btwexp(0.1,10)

osc3=rnd_btw(1,10)
osc4=rnd_btw(0.1,0.9)
osc5=rnd_btwexp(4, 40)
osc6=rnd_btw(0.3,0.9)
osc7=rnd_btwexp(-0.08,0.08)
osc8=rnd_btw(7.01,7.05)

osc9=rnd_btw(0.05, 0.1)
osc10=rnd_btw(300,500)
osc101=rnd_btwexp(0.1,0.5)

osc11=rnd_btw(0.1, 1)
osc12=rnd_btw(0.1, 1)
osc14=rnd_btwexp(0.1, 1.5)


osc(2, 0,5, 1)
  .layer(osc(osc1, osc2, osc3)) //a3,30 b-0.1,0.1 c1,100
.luma(0.3,0.1)
  .hue(osc4) //0.1,0.9
.saturate(osc6) //0.3,0.9
  .kaleid(4)
.rotate(osc8,osc7) //a7.01,7.05-0.08,0.08

.mult(noise(osc10, osc101),osc9)

  .out()

