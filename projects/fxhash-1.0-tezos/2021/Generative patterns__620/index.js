function rnd_btw(min, max) {return fxrand() * (max - min) + min;}
function rnd_btwexp(min, max) {return fxrand()**2 * (max - min) + min;}
function rnd_int(min, max) {min = Math.ceil(min);max = Math.floor(max);return Math.floor(fxrand() * (max - min + 1)) + min;}

//random function helpers
// fxrand() gives u a value between 0 and 1
// rnd_btw(a,b) gives u a value between a and b
// rnd_btwexp(a,b) gives u a value between a and b, but with an exponential slope (more probable to get the borders than the center)
// rnd_int(a,b) gives u an integer value between a and b



osc1=rnd_btw(10,40)
osc2=rnd_btw([20],[25],[30])
osc3=rnd_btw([1],[5],[10])
osc4=rnd_btw([1],[2],[3],[4],[5])
rotate1=rnd_btw(-90,90)
osc1fast=fxrand(0.1,0.2)
osc2fast=fxrand(0.02,0.04)
osc3fast=fxrand(0.1,0.3)

osc1hue=rnd_btw([10],[25],[35],[45],[55])
osc2hue=rnd_btw([1],[2],[3],[4],[5])

noise1scale=fxrand(0.5,1)
noise1offset=fxrand(0.1,0.5)

osc(osc1,osc1fast,osc1hue).saturate().rotate(rotate1)
.diff(osc(osc1,osc1fast,osc1hue).rotate( ({time}) => time%360 ))
.modulate(osc(osc2,osc2fast,osc1hue).rotate( ({time}) => time%360 ))
.diff(osc(osc2,osc2fast,osc1hue).saturate().rotate(rotate1))
.modulate(osc(osc3,osc3fast,osc1hue)).diff(osc(osc4,osc3fast,osc2hue))
.out()
