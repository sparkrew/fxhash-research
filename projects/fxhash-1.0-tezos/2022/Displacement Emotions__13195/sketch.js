function rnd_btw(min, max) {return fxrand() * (max - min) + min;}
function rnd_btwexp(min, max) {return fxrand()**2 * (max - min) + min;}
function rnd_int(min, max) {min = Math.ceil(min);max = Math.floor(max);return Math.floor(fxrand() * (max - min + 1)) + min;}



os1=rnd_btwexp(2,44)
os4=rnd_btwexp(3,55)
os2=rnd_btwexp(3,46)
os3=rnd_btwexp(2,52)
m1=rnd_btwexp(5,46)
m2=rnd_btwexp(1,6)
ka=rnd_btwexp(1,3)
sc=rnd_btwexp(3,9)
sc2=rnd_btwexp(1,5)
os5=rnd_btwexp(1,77)
os6=rnd_btwexp(1,90)
os7=rnd_btwexp(1,10)
os8=rnd_btwexp(0.1,0.9)

src(o0)
  

  .modulateHue(src(o0).scale(1.01),7)
.layer(osc(os1,0.5,2).mask(shape(os4,0.5,0.001)) ) .modulatePixelate(osc(os2,0.05,0.01),os3).rotate(180,-0.002)
  .out(o0)


