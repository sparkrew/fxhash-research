function rnd_btw(min, max) {return fxrand() * (max - min) + min;}
function rnd_btwexp(min, max) {return fxrand()**2 * (max - min) + min;}
function rnd_int(min, max) {min = Math.ceil(min);max = Math.floor(max);return Math.floor(fxrand() * (max - min + 1)) + min;}

//Variables
osc1=rnd_btw(5,47.248)
osc1color=fxrand(0.75,1.746)
rot=fxrand(1,-1)
vel=rnd_int(0.1,0.8)
oscscale=fxrand(0.5,2.5)

osc(osc1, 0.1, osc1color)
.kaleid(0.1)
.rotate(rot)
.rotate(0.1, vel)
.scrollX(0.1, 0.1)
.blend(o0, 0.1)
.modulateHue(o0, 0.1)
.saturate(1.853)
.contrast(0.712)
.scale(oscscale)
.layer (osc(osc1,0.1,2)
.mask(shape(4)))
.out()