function rnd_btw(min, max) {return fxrand() * (max - min) + min;}
function rnd_btwexp(min, max) {return fxrand()**2 * (max - min) + min;}
function rnd_int(min, max) {min = Math.ceil(min);max = Math.floor(max);return Math.floor(fxrand() * (max - min + 1)) + min;}

//random function helpers
// fxrand() gives u a value between 0 and 1
// rnd_btw(a,b) gives u a value between a and b
// rnd_btwexp(a,b) gives u a value between a and b, but with an exponential slope (more probable to get the borders than the center)
// rnd_int(a,b) gives u an integer value between a and b

cor=rnd_btw(2,9)
cor1=rnd_btw(3.5,15)
cor2=rnd_btw(3,20)
vapo=rnd_btw(2,50)
osc1=rnd_btw(-0.1,-0.00001)
osc2=rnd_btw(2,5) 
osc3=rnd_btw(0.3,0.9)
modulate1=rnd_btw(1,6)


vapo=rnd_btwexp(2,50)
fdgse=rnd_btw(2,85)
adws=rnd_btw(0.2,1.5)
osc56fast=fxrand()
cor=rnd_btwexp(2,9)
cor2=rnd_btwexp(3,20)
osc532fast=fxrand()
cor1=rnd_btwexp(3.5,15)


osc(vapo,-0.080,1.2).diff(osc(35,0.02).rotate(Math.PI/36)).modulateScale(noise(2.4,0.3).modulateScale(osc(25).rotate(()=>Math.sin(time/2))),0.9).color(cor,cor1,cor2).contrast(1.5).add(src(o0).modulate(o0,.90),.3).invert().brightness(0.3).contrast(1.2).modulateScale(osc(2),-0.1).out()