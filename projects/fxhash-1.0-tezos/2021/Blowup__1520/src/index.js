function rnd_btw(min, max) {return fxrand() * (max - min) + min;}
function rnd_btwexp(min, max) {return fxrand()**2 * (max - min) + min;}
function rnd_int(min, max) {min = Math.ceil(min);max = Math.floor(max);return Math.floor(fxrand() * (max - min + 1)) + min;}


//random function helpers
// fxrand() gives u a value between 0 and 1
// rnd_btw(a,b) gives u a value between a and b
// rnd_btwexp(a,b) gives u a value between a and b, but with an exponential slope (more probable to get the borders than the center)
// rnd_int(a,b) gives u an integer value between a and b


osc2=rnd_btwexp(3,10)

osc4=rnd_int(1,20)
osc5=rnd_int(1,20)
osc6=rnd_int(1,20)
osc7=rnd_int(1,10)
osc8=fxrand()


osc(osc5, 0.01, osc8).mult(osc(1, -osc8).modulate(osc(2).rotate(4,1), osc5))
.kaleid([osc4,4,5,7,8,9,10].fast(0.1))
.color(osc6,2.4,osc4)
.saturate(osc8)
.luma(1,osc8, (osc6, ()=> osc7 + a.fft[osc4]))
.scale(osc8, ()=> 0.7 + a.fft[osc4])
.diff(o0)// o0
.out(o0)// o1


