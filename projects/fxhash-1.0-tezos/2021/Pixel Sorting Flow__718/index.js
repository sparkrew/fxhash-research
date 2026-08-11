function rnd_btw(min, max) {return fxrand() * (max - min) + min;}
function rnd_btwexp(min, max) {return fxrand()**2 * (max - min) + min;}
function rnd_int(min, max) {min = Math.ceil(min);max = Math.floor(max);return Math.floor(fxrand() * (max - min + 1)) + min;}

//random function helpers
// fxrand() gives u a value between 0 and 1
// rnd_btw(a,b) gives u a value between a and b
// rnd_btwexp(a,b) gives u a value between a and b, but with an exponential slope (more probable to get the borders than the center)
// rnd_int(a,b) gives u an integer value between a and b



osc1=rnd_int(1,20)
osc1fast=fxrand(0,5)
osc3fast=fxrand(1,2.5)
osc1hue=rnd_btwexp(0.004,1)
osc2=rnd_btw(0.5,10)
osc2fast=fxrand(0,0.1)
osc2hue=rnd_btwexp(0.0004,0.004)
luma=rnd_btwexp(0.10,0.75)


src(o0)
  .modulateHue(src(o0).scale(1.01), 2)
  .layer(
    osc(Math.PI * osc1, 0.5, osc2)
  .hue(osc1hue)
      .modulate(
        noise(osc1fast, 0.01)
          .color(0,0)
          .saturate(5), -1)
          .rotate(0,osc2fast)
      .mask(noise(2, 0.01).color(0,2).scrollX([0.005, -0.005])
              .scrollY(0.005,0.1))
  .mult(o0,0)
.contrast(1.0).saturate(2.5).luma(luma,0.0)
.pixelate(1000,990)
.scrollY(-0.0005,-0.9)
  )
  .hue(osc2hue)
  .out(o0)
