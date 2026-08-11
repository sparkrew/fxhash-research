function rnd_btw(min, max) {return fxrand() * (max - min) + min;}
function rnd_btwexp(min, max) {return fxrand()**2 * (max - min) + min;}
function rnd_int(min, max) {min = Math.ceil(min);max = Math.floor(max);return Math.floor(fxrand() * (max - min + 1)) + min;}

//Variables
osc1=rnd_btw(5,47.248)
osc1color=fxrand(0.75,1.746)
rot=fxrand(1,-1)
vel=rnd_int(0.1,0.8)
oscscale=fxrand(0.5,2.5)


src(o0)
  .modulate(
    osc(osc1,0,1.5).modulate(noise(osc1).sub(gradient()),osc1).brightness(-0.5)
  ,0.003)
  .layer(osc(Math.PI*osc1,0.1,2).mask(shape(66,0.3,0.0001)))

.diff(src(o0).scale(0.9).mask(shape(osc1,0.9,0.01)).rotate(osc1))


.modulatePixelate(noise(osc1color).pixelate(osc1color,osc1color),1024,8)


  .out()
