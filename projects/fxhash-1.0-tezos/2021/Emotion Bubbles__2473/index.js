function rnd_btw(min, max) {return fxrand() * (max - min) + min;}
function rnd_btwexp(min, max) {return fxrand()**2 * (max - min) + min;}
function rnd_int(min, max) {min = Math.ceil(min);max = Math.floor(max);return Math.floor(fxrand() * (max - min + 1)) + min;}

//random function helpers
// fxrand() gives u a value between 0 and 1
// rnd_btw(a,b) gives u a value between a and b
// rnd_btwexp(a,b) gives u a value between a and b, but with an exponential slope (more probable to get the borders than the center)
// rnd_int(a,b) gives u an integer value between a and b


osc1=rnd_btw(4,50)
rotate1=rnd_btw(-3,30000)
noise3=rnd_btw(.10,.00250)
noise4=rnd_btw(.010,00250)
osc2=rnd_btw(.1,6)
osc3=rnd_btw(1,9)
osc4=rnd_btw(1,5)

noise(osc3,.05,.1)
.colorama( osc2, 1, 1)
.mult(osc(1,1,1000))
.rotate(()=>time/osc4)

.out()
