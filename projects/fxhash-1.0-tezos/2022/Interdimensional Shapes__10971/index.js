
function rnd_btw(min, max) {return fxrand() * (max - min) + min;}
function rnd_btwexp(min, max) {return fxrand()**2 * (max - min) + min;}
function rnd_int(min, max) {min = Math.ceil(min);max = Math.floor(max);return Math.floor(fxrand() * (max - min + 1)) + min;}

//random function helpers
// fxrand() gives u a value between 0 and 1
// rnd_btw(a,b) gives u a value between a and b
// rnd_btwexp(a,b) gives u a value between a and b, but with an exponential slope (more probable to get the borders than the center)
// rnd_int(a,b) gives u an integer value between a and b


//Variables

A = ()=> window.innerHeight/window.innerWidth


hue1 = rnd_btwexp(0,200);
hue2 = rnd_btwexp(0,200);
hue3 = rnd_btwexp(0,200);
hue4 = rnd_btwexp(0,200);
hue5 = rnd_btwexp(0,200);
hue6 = rnd_btwexp(0,-200);
myRot = fxrand()*900
myX = fxrand()*0.15


AR1 = [3,4,400];
R12 = AR1[Math.floor(fxrand() * AR1.length)]
RT5 = fxrand()*(.75-.25)+.25

fps=10;
line = () => shape(4,0.5,0.0)
	.scale(1.1, 0.01, [2, 1.5, 1, 1.3, 1, 1.4, 2, 1.7, 1, 2])
	.scale(1.1)
	.rotate(myRot)
cir = () => shape(R12, [0.22, 0.11, 0.25, 0.15, 0.24, 0.12, 0.05, 0.24], 0.0)
	.scale(1, A, 1)

solid()
	.add(line()
		.color(2, 0, 2)
		.hue(hue1)
    .scroll(({
			time
		}) => Math.random(time * 0.001) * innerHeight, ({
			time
		}) => Math.random(time * 0.001) * innerWidth)
		.scrollX(0.05, -0.1))
	.add(cir()
		.color(2, 0, 0)
		.hue(hue2)
    .scroll(({
			time
		}) => Math.random(time * 0.001)* innerHeight, ({
			time
		}) => Math.random(time * 0.001) * innerWidth)
)
	.add(line()
		.rotate(11)
    .scroll(({
  			time
  		}) => Math.random(time * 0.001) * innerHeight, ({
  			time
  		}) => Math.random(time * 0.001) * innerWidth)
		.scrollY(0.05, -0.1))
	.add(line()
		.color(2, 0, 2)
		.hue(hue3)
    .scroll(({
			time
		}) => Math.random(time * 0.001) * innerHeight, ({
			time
		}) => Math.random(time * 0.001) * innerWidth)
)
	.add(line()
		.rotate(11)
		.color(2, 0, 2)
		.hue(hue4)
    .scroll(({
  			time
  		}) => Math.random(time * 0.001)* innerHeight, ({
  			time
  		}) => Math.random(time * 0.001) * innerWidth)
		.scrollY(0.05, -0.1))
	.add(line()
		.color(0, 1, 2)
		.hue(hue5)
    .scroll(({
			time
		}) => Math.random(time * 0.001)* innerHeight, ({
			time
		}) => Math.random(time * 0.001) * innerWidth)
)
	.scrollX(0, ({
		time
	}) => Math.sin(time / 2000) * 0.1)
	.scrollY(0, ({
		time
	}) => Math.sin(time / 2000) * 0.05)
	.diff(
  shape(4,0.61,0.0).scale(1,innerHeight/innerWidth).rotate().pixelate(4,4).thresh(RT5).thresh().invert().luma()
  .modulate(noise(0.13,0.03))
  .mask(
    shape(2,0.61,0.005)
    .scrollY(0.25)
    .rotate(fxrand()*Math.PI)

  ).color(fxrand()*1.7,fxrand()*.333,fxrand()*1.5)
  .modulate(noise(0.11,0.04).scrollX(myX))
)
	.modulateScale(gradient()
		.g()
		.rotate(fxrand()*900))
.add(noise(innerWidth,0).modulateRotate(noise(100,0)),.25)
	.add(o0, 0.19)
  .scale(0.93)
.hue(hue6)
	.out()
