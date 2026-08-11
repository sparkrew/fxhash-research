function rnd_btw(min, max) {return fxrand() * (max - min) + min;}
function rnd_btwexp(min, max) {return fxrand()**2 * (max - min) + min;}
function rnd_int(min, max) {min = Math.ceil(min);max = Math.floor(max);return Math.floor(fxrand() * (max - min + 1)) + min;}

//random function helpers
// fxrand() gives u a value between 0 and 1
// rnd_btw(a,b) gives u a value between a and b
// rnd_btwexp(a,b) gives u a value between a and b, but with an exponential slope (more probable to get the borders than the center)
// rnd_int(a,b) gives u an integer value between a and b

src(o0)
.layer(
osc(rnd_btwexp(1,10))
	.modulatePixelate(gradient(rnd_btwexp(1,10)).kaleid(rnd_btwexp(0,5)))
	.color(rnd_btwexp(.01,.05), rnd_btwexp(.01,.05),rnd_btwexp(.1,.5))
	.colorama(rnd_btwexp(1,5))
	.pixelate(rnd_btwexp(1,30))
	.blend(noise(1000), 0.1)
	.scale(rnd_btwexp(.1,.5))
    .luma(.2)
    .invert()
    .kaleid([rnd_btwexp(1,3), rnd_btwexp(1,5),rnd_btwexp(1,7)])
    .rotate(rnd_btwexp(1,5), rnd_btwexp(.1,.5))
    .contrast(rnd_btwexp(1,3))
    .scrollX(.1, -.01)
    .scrollY(rnd_btwexp(.1,.5)))		
  .modulatePixelate(src(o0), [250, 500, 1000])
	
	.out()