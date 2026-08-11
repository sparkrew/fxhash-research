function rnd_btw(min, max) {return fxrand() * (max - min) + min;}
function rnd_btwexp(min, max) {return fxrand()**2 * (max - min) + min;}
function rnd_int(min, max) {min = Math.ceil(min);max = Math.floor(max);return Math.floor(fxrand() * (max - min + 1)) + min;}



b1=rnd_btwexp(3,9)
b2=rnd_btwexp(3,30)
b3=rnd_btwexp(2,5)
b4=rnd_btwexp(5,11)
b5=rnd_btwexp(0.1,0.9)
b6=rnd_btwexp(0.1,0.9)
b7=rnd_btwexp(0.001,0.01)
b8=rnd_btwexp(2,180)
b9=rnd_btwexp(3,20)
b8=rnd_btwexp(3,107)
b9=rnd_btwexp(25,50)


src(o0)
.blend(shape(b1),0.01)

   .modulate(shape(b2))
  .blend(osc(b4))
  .rotate(b5, -0.5)
  .thresh(b7,0.4)
            .modulate(shape(b9, 0.2))
.hue(b5)
.scale(2)
.saturate(2)
.colorama(0.00002)

  .out(o0)

