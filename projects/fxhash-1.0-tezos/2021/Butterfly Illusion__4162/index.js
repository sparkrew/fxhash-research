function rnd_btw(min, max) {return fxrand() * (max - min) + min;}
function rnd_btwexp(min, max) {return fxrand()**2 * (max - min) + min;}
function rnd_int(min, max) {min = Math.ceil(min);max = Math.floor(max);return Math.floor(fxrand() * (max - min + 1)) + min;}

//random function helpers
// fxrand() gives u a value between 0 and 1
// rnd_btw(a,b) gives u a value between a and b
// rnd_btwexp(a,b) gives u a value between a and b, but with an exponential slope (more probable to get the borders than the center)
// rnd_int(a,b) gives u an integer value between a and b

osc6=rnd_btw(9,100)
osc3=rnd_btw(-100,100)
osc4=rnd_btw(0.01,0.03)
osc5=rnd_btw(0.1,0.9)
cor2=rnd_btw(8,-8)
velo1=rnd_btw(-0.5,1)
velo=rnd_btw(0.18,0.48)
cor=rnd_btw(0.2,2.2)


osc1=rnd_btw(20,60)
osc1a=rnd_btw(0.01,0.9)
osc1b=rnd_btw(-5,0.9)
osc1fast=fxrand()
osc1hue=rnd_btwexp(1,10)
osc2=rnd_btw(1,100)
osc2fast=fxrand()
osc2hue=rnd_btwexp(1,10)

osc(30,velo,cor).modulateScale(osc(40,0,1).kaleid(8)).repeat(1,2).modulate(o0,0.005).modulateKaleid(shape(3,0.1,1)).out(o0)