function rnd_btw(min, max) {return fxrand() * (max - min) + min;}
function rnd_btwexp(min, max) {return fxrand()**2 * (max - min) + min;}
function rnd_int(min, max) {min = Math.ceil(min);max = Math.floor(max);return Math.floor(fxrand() * (max - min + 1)) + min;}

//random function helpers
// fxrand() gives u a value between 0 and 1
// rnd_btw(a,b) gives u a value between a and b
// rnd_btwexp(a,b) gives u a value between a and b, but with an exponential slope (more probable to get the borders than the center)
// rnd_int(a,b) gives u an integer value between a and b


osc1=rnd_btw(69.834,200)
noise2=rnd_btw(-30,-90)
noise3=rnd_btw(.10,.00250)
noise4=rnd_btw(.010,00250)

osc(108.638, 0.098, 0.403)
.rotate(() => time / 2790.527)
.diff(osc(osc1, 0.042, 0.417).rotate(4.939 / 1.86))
.diff(osc(60, 0.079, 0.701).rotate(1.112 / noise4))
.diff(osc(90, 0.08, noise3).rotate(6.224 / 4.006))
.out()
