function rnd_btw(min, max) {return fxrand() * (max - min) + min;}
function rnd_btwexp(min, max) {return fxrand()**2 * (max - min) + min;}
function rnd_int(min, max) {min = Math.ceil(min);max = Math.floor(max);return Math.floor(fxrand() * (max - min + 1)) + min;}





e1=rnd_btwexp(3,11)
e2=rnd_btwexp(1,5)
e3=rnd_btwexp(1,5)
e4=rnd_btwexp(1,5)
e5=rnd_btwexp(0.125,0.225)
e6=rnd_btwexp(3,9)
e7=rnd_btwexp(3,9)
e8=rnd_btwexp(2,22)
e9=rnd_btwexp(2,25)
e10=rnd_btwexp(22,222)
e11=rnd_btwexp(22,222)
e12=rnd_btwexp(1,9)
e13=rnd_btwexp(0.1,1.9)
e14=rnd_btwexp(0.1,1.9)




e1=rnd_btwexp(1,22)
e2=rnd_btwexp(1,11)
e3=rnd_btwexp(1,22)
e4=rnd_btwexp(1,222)
e5=rnd_btwexp(2,5)
e6=rnd_btwexp(3,11)
e7=rnd_btwexp(3,9)
e8=rnd_btwexp(1,4)
e9=rnd_btwexp(1,4)
e10=rnd_btwexp(1,4)
e11=rnd_btwexp(2,22)
e12=rnd_btwexp(2,22)
e13=rnd_btwexp(3,11)
e14=rnd_btwexp(3,11)
e15=rnd_btwexp(0.1,0.9)
e16=rnd_btwexp(0.02,2)
e17=rnd_btwexp(3,53)
e18=rnd_btwexp(0.1,1.5)
e19=rnd_btwexp(0.1,1.5)
e20=rnd_btwexp(0.001,2)




speed=2
noise(e11,0.3,0.3)
.layer(voronoi(e12).luma(0.2).pixelate(e13,e14).kaleid(e17))
.colorama(e16)
.hue(e15)
.out(o0)

