function rnd_btw(min, max) {return fxrand() * (max - min) + min;}
function rnd_btwexp(min, max) {return fxrand()**2 * (max - min) + min;}
function rnd_int(min, max) {min = Math.ceil(min);max = Math.floor(max);return Math.floor(fxrand() * (max - min + 1)) + min;}



e1=rnd_btwexp(2,22)
e2=rnd_btwexp(3,9)
e3=rnd_btwexp(2,22)
e4=rnd_btwexp(2,22)
e5=rnd_btwexp(1,1.09)
e6=rnd_btwexp(3,9)
e7=rnd_btwexp(3,9)
e8=rnd_btwexp(3,9)
e9=rnd_btwexp(3,9)
e10=rnd_btwexp(0.1,0.9)
e11=rnd_btwexp(0.1,0.9)
e12=rnd_btwexp(0.1,0.9)
e13=rnd_btwexp(0.1,0.9)
e14=rnd_btwexp(0.1,0.9)


speed=0.02
src(o0).modulate(voronoi(e1),0.005).colorama(0.001).blend(shape(e2),0.001)
.layer(src(o0).modulate(noise(e3),0.005).colorama(0.01).add(noise(e4),0.001))  
.scale(e5)
  .out(o0)
