function rnd_btw(min, max) {return fxrand(90)* (max - min) + min;}
function rnd_btwexp(min, max) {return fxrand()**30 * (max - min) + min;}
function rnd_int(min, max) {min = Math.ceil(min);max = Math.floor(max);return Math.floor(fxrand() * (max - min + 1)) + min;}

//random function helpers
// fxrand() gives u a value between 0 and 1
// rnd_btw(a,b) gives u a value between a and b
// rnd_btwexp(a,b) gives u a value between a and b, but with an exponential slope (more probable to get the borders than the center)
// rnd_int(a,b) gives u an integer value between a and b


//

r = rnd_btw(-3, 3);
	g = rnd_btw(-1,.05);
	b = rnd_btw(-1, 3);
	tam = rnd_btw(0.1, 0.8);
	speed = rnd_btw(2, 0.2);
	sc = rnd_btw(0.3, 4);
	br = rnd_btw(0.1, 0.9)
cu = rnd_btw(0.1, 0.2);
s= rnd_btw(0.9, 2)






var myImage = document.createElement('img');
myImage.crossOrigin = 'anonymous'
myImage.onload = ()=> s0.init({src:myImage, dynamic:false})
myImage.src = 'https://i.imgur.com/SxAodk7.jpg'

src(s0)
.diff(
    noise(8,0.05)
  
.color(r,g,b)
  .mult(solid(),0.15)
.contrast(-1)
.kaleid(5)
  .modulateKaleid(osc(0.6,0.4,0.01),50)
 )

.posterize(5)
.blend(o0)
.mask(shape(900, cu, s))
  .mult(osc(20, 0.05, 2.4).kaleid(5), 0.25)
  .scale(1,0.5, 0.6)
  .modulate(noise(0.1))
  .saturate(1)
.out()



