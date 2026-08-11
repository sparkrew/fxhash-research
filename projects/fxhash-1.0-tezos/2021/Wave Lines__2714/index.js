function rnd_btw(min, max) {return fxrand() * (max - min) + min;}
function rnd_btwexp(min, max) {return fxrand()**2 * (max - min) + min;}
function rnd_int(min, max) {min = Math.ceil(min);max = Math.floor(max);return Math.floor(fxrand() * (max - min + 1)) + min;}

//random function helpers
// fxrand() gives u a value between 0 and 1
// rnd_btw(a,b) gives u a value between a and b
// rnd_btwexp(a,b) gives u a value between a and b, but with an exponential slope (more probable to get the borders than the center)
// rnd_int(a,b) gives u an integer value between a and b



osc1=rnd_btwexp(0.01,0.9)

osc3=rnd_btwexp(0,0.95)
osc4=rnd_btw(40,60)
osc5=rnd_btw(2,4)
osc6=rnd_btw(0,0.9)
osc7=rnd_btwexp(2,4)
osc8=rnd_btw(0.03,0.2)

osc9=rnd_btw(0,90)
osc10=rnd_btw(1,90)
osc101=rnd_btwexp(-0.4, -0.1)

osc11=rnd_btw(-3, 3)
osc12=rnd_btw(-3, 3)
osc14=rnd_btw(-3, 3)

rtt1=rnd_btw(1, 4)
rtt2=rnd_btw(1, 7)
rtt4=rnd_btwexp(0, 180)

shape(2, osc1, 0.1) //b0.01,0.9
  .colorama(osc3) //0,0.95
  .scrollY(0.5,0.05)
  

  .repeat(1, osc4) //b40,60
  .blend(gradient(0).kaleid(osc5)) //b2,4
.hue(()=>Math.sin(time)*0.05)
  .hue(osc6) //0,0.9
  .modulate(noise(osc7, osc8, 0)) //a2,4 b0.03,0.2
  .rotate(osc9) //0,90
  
  .out(o0)



