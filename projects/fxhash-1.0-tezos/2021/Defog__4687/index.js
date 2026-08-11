function rnd_btw(min, max) {return fxrand() * (max - min) + min;}
function rnd_btwexp(min, max) {return fxrand()**2 * (max - min) + min;}
function rnd_int(min, max) {min = Math.ceil(min);max = Math.floor(max);return Math.floor(fxrand() * (max - min + 1)) + min;}

//random function helpers
// fxrand() gives u a value between 0 and 1
// rnd_btw(a,b) gives u a value between a and b
// rnd_btwexp(a,b) gives u a value between a and b, but with an exponential slope (more probable to get the borders than the center)
// rnd_int(a,b) gives u an integer value between a and b

cor=rnd_btw(1,3)
cor1=rnd_btw(1,3)
cor2=rnd_btw(1,3)
vapo=rnd_btw(0.1,0.9)
osc1=rnd_btw(-0.1,-0.00001)
osc2=rnd_btw(2,5) 
osc3=rnd_btw(0.3,0.9)
modulate1=rnd_btw(1,6)


sdgwdgs=rnd_btw(0.1,0.9)
fdgse=rnd_btw(2,85)
adws=rnd_btw(0.2,1.5)
osc56fast=fxrand()
cor=rnd_btwexp(1,3)
cor2=rnd_btwexp(1,3)
osc532fast=fxrand()
cor1=rnd_btwexp(1,3)

osc(8,-0.003,-23).invert(vapo).color(cor,cor1,cor2).mult(osc(20,osc1,1).modulate(noise(osc2,osc3)).rotate(0.7)).posterize([127,7,0].fast(0.5).smooth(1)).out()
