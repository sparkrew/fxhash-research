function rnd_btw(min, max) {return fxrand() * (max - min) + min;}
function rnd_btwexp(min, max) {return fxrand()**2 * (max - min) + min;}
function rnd_int(min, max) {min = Math.ceil(min);max = Math.floor(max);return Math.floor(fxrand() * (max - min + 1)) + min;}

//random function helpers
// fxrand() gives u a value between 0 and 1
// rnd_btw(a,b) gives u a value between a and b
// rnd_btwexp(a,b) gives u a value between a and b, but with an exponential slope (more probable to get the borders than the center)
// rnd_int(a,b) gives u an integer value between a and b



osc1=rnd_btw(0.1,0.5)

osc3=rnd_btwexp(-0.05,0.05)
osc4=rnd_btw(-0.05,0.05)
osc5=rnd_btwexp(0.01,0.05)
osc6=rnd_btw(20,50)
osc7=rnd_btwexp(-100,100)
osc8=rnd_btw(0.1,1)

osc9=rnd_btwexp(0.1,0.9)
osc10=rnd_btw(1,90)
osc101=rnd_btwexp(-0.4, -0.1)

osc11=rnd_btw(-3, 3)
osc12=rnd_btw(-3, 3)
osc14=rnd_btw(-3, 3)

rtt1=rnd_btw(0.1,5)
rtt2=rnd_btw(0.1,5)
rtt4=rnd_btwexp(0.1,5)

shape(2, osc1) //b0.1,0.5

.repeat(40,40).modulate(osc(50,osc3) 
.modulateScale(osc(5,osc4))
.kaleid(4),osc5)

  .rotate(osc7) //-100,100
.pixelate(100,100)

    .color(rtt1,rtt2,rtt4) //0.1,5
.colorama(0.1) //0.08,0.25

  .out(o0)



