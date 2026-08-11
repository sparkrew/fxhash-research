function rnd_btw(min, max) {return fxrand() * (max - min) + min;}
function rnd_btwexp(min, max) {return fxrand()**2 * (max - min) + min;}
function rnd_int(min, max) {min = Math.ceil(min);max = Math.floor(max);return Math.floor(fxrand() * (max - min + 1)) + min;}



//random function helpers
// fxrand() gives u a value between 0 and 1
// rnd_btw(a,b) gives u a value between a and b
// rnd_btwexp(a,b) gives u a value between a and b, but with an exponential slope (more probable to get the borders than the center)
// rnd_int(a,b) gives u an integer value between a and b



y=rnd_btw(-0.002,0.002)
yy=rnd_btw(-0.002,0.002)
x=rnd_btw(0.1,2)
xx=rnd_btw(0.1,2)
xxx=rnd_btw(0.1,2)
r=rnd_btw(0.7,1)
f=rnd_btwexp(-0.00001,0.00001)
j=rnd_int(3, 28)

shape(j,0.5).color(x,xx,xxx).hue(({time}) => Math.sin(time)/2)
.modulate(o0,100)
.diff(o0,0.8)
.modulate(voronoi(58,2),0.007)
.scrollY(y).rotate( ()=> mouse.x * f)
.scrollX(yy).rotate( ()=> mouse.x * f)
.mult(shape(4,1),1)
.luma(0.05)
.out()

document.addEventListener("keyup", (event) => {
  if (event.key === "s" || event.key === "S") {
      event.preventDefault();
      screencap();
  }
})
