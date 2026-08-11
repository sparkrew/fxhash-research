function rnd_btw(min, max) {return fxrand() * (max - min) + min;}
function rnd_btwexp(min, max) {return fxrand()**2 * (max - min) + min;}
function rnd_int(min, max) {min = Math.ceil(min);max = Math.floor(max);return Math.floor(fxrand() * (max - min + 1)) + min;}

//random function helpers
// fxrand() gives u a value between 0 and 1
// rnd_btw(a,b) gives u a value between a and b
// rnd_btwexp(a,b) gives u a value between a and b, but with an exponential slope (more probable to get the borders than the center)
// rnd_int(a,b) gives u an integer value between a and b


a=rnd_btw(33,314)
b=fxrand(0.1,1)
c=rnd_btw(0.1,1)
d=rnd_btw(3,9)
e=fxrand(0.3,0.6)
f=rnd_btw(4,44)
g=rnd_btwexp(0,1)

osc(a).add(noise(f, e)).color(a, 0, 0)
  .colorama([0.1, 0.2, 0.4].fast(b))
  .rotate(d, a)
  .pixelate(f, a)
  .modulateKaleid(osc(a),f,g)
  .mult(osc(f, e).thresh(c).rotate(d, -0.02))
  .modulateRotate(osc(a, 0).thresh(0.3, 0.6), () => 0.314 + mouse.y * 0.00314)
  .out(o0)
