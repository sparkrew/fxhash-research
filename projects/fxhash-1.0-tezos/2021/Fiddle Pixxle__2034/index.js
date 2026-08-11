function rnd_btw(min, max) {return fxrand() * (max - min) + min;}
function rnd_btwexp(min, max) {return fxrand()**2 * (max - min) + min;}
function rnd_int(min, max) {min = Math.ceil(min);max = Math.floor(max);return Math.floor(fxrand() * (max - min + 1)) + min;}

//Variables
osc1=rnd_btw(5,0.01,3)
osc1color=fxrand(0.75,0.01,4)
rot=fxrand(1,0.01,7)
vel=rnd_int(0.1,0.01,8)
oscscale=fxrand(0.5,0.01,4)

src(o0)
  .modulateHue(src(o0).scale(osc1color),osc1color)
  .layer(osc(osc1color,osc1color,osc1color).mask(shape(osc1color)))
  .pixelate(osc1, osc1, osc1)
  .colorama(osc1)
  .modulateRepeat(osc(osc1), osc1, osc1, osc1, osc1)
  .modulateHue(src(o0).scale(osc1),osc1)
  .modulateRotate(shape(osc1,osc1,osc1),osc1)
  .out(o0)
