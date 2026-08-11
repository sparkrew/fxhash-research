function rnd_btw(min, max) {return fxrand() * (max - min) + min;}
function rnd_btwexp(min, max) {return fxrand()**2 * (max - min) + min;}
function rnd_int(min, max) {min = Math.ceil(min);max = Math.floor(max);return Math.floor(fxrand() * (max - min + 1)) + min;}



b1=rnd_btwexp(3,9)
b2=rnd_btwexp(3,13)
b3=rnd_btwexp(3,13)
b4=rnd_btwexp(5,11)
b5=rnd_btwexp(0.1,2)
b6=rnd_btwexp(0.01,0.9)
b7=rnd_btwexp(-0.001,-0.01)
b8=rnd_btwexp(0.1,2)
b9=rnd_btwexp(3,20)
b8=rnd_btwexp(3,107)
b9=rnd_btwexp(25,50)


src(o0)
  .modulate(voronoi(b1),0.005)
  .add(shape(b2, 0.05),0.01)
.blend(shape(b3, 0.01),0.01)
.colorama(b7)
.diff(shape(b5, 0.3),0.001)
 .blend(shape(-3, 0.1),0.001)
  .out(o0)
