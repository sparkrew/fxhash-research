function rnd_btw(min, max) {return fxrand() * (max - min) + min;}
function rnd_btwexp(min, max) {return fxrand()**2 * (max - min) + min;}
function rnd_int(min, max) {min = Math.ceil(min);max = Math.floor(max);return Math.floor(fxrand() * (max - min + 1)) + min;}

//random function helpers
// fxrand() gives u a value between 0 and 1
// rnd_btw(a,b) gives u a value between a and b
// rnd_btwexp(a,b) gives u a value between a and b, but with an exponential slope (more probable to get the borders than the center)
// rnd_int(a,b) gives u an integer value between a and b



osc1=rnd_btw(0.01, 0.5)
osc1fast=fxrand()

osc1hue=rnd_btwexp(1,10)
osc2=rnd_btw(0.01, 1)

osc2fast=fxrand()
osc2hue=rnd_btwexp(1,100)

osc3=rnd_btw(0.01, 1)
osc4=rnd_btw(0.5, 8)

gradient(osc1,osc1fast,osc1hue)
.modulate(noise(osc2,osc2fast,osc2hue))
.out()

osc(osc1fast, osc2)
.add(noise(osc4, 0.2))
.color(0.2, 0.55, 0.08)
.colorama(osc1)

.out()

