function rnd_btw(min, max) {return fxrand() * (max - min) + min;}
function rnd_btwexp(min, max) {return fxrand()**2 * (max - min) + min;}
function rnd_int(min, max) {min = Math.ceil(min);max = Math.floor(max);return Math.floor(fxrand() * (max - min + 1)) + min;}

//random function helpers
// fxrand() gives u a value between 0 and 1
// rnd_btw(a,b) gives u a value between a and b
// rnd_btwexp(a,b) gives u a value between a and b, but with an exponential slope (more probable to get the borders than the center)
// rnd_int(a,b) gives u an integer value between a and b

cor=rnd_btw(1,3)
cor1=rnd_btw(4,8)
cor2=rnd_btw(-1,-3)
vapo=rnd_btw(10,50)
osc1=rnd_btw(-0.1,-0.00001)
osc2=rnd_btw(2,5) 
osc3=rnd_btw(0.1,0.5)
modulate1=rnd_btw(1,6)


sdgwdgs=rnd_btw(0.1,0.9)
fdgse=rnd_btw(2,85)
adws=rnd_btw(0.2,1.5)
osc56fast=fxrand()
cor=rnd_btwexp(1,3)
cor2=rnd_btwexp(1,3)
osc532fast=fxrand()
cor1=rnd_btwexp(1,3)

osc(vapo,osc3,0).colorama(cor,cor1,cor2).saturate(2).pixelate(25).kaleid(()=>(Math.sin(time/8)*9+3)).rotate(0,1.125)
  .modulateRotate(shape(3).scale(()=>(Math.sen(time)*2)).rotate(0,2.125))
  .mask(gradient(10))
	.diff(shape(3,0.4,0.001)
		.rotate(-1 ,2)
		.color(cor,cor1,cor2)
		.colorama([cor,5,0,0,5].fast(5))
		.scrollX(-1,0.1))
		.modulateRotate(shape(3).scale(()=>(Math.cos(time)*6)))
			.diff(shape(3,0.2,0.001)
				.rotate(1,-2)
    				.scrollX(1,-0.1)
    				.color(cor,cor1,6)
				.scale(()=>(Math.cos(time))).rotate(-1,0.5)
            			.colorama([0,05,5,0,0,5].fast(10)
            ))
  .out()