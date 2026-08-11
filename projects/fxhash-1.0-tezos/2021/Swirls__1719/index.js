function rnd_btw(min, max) {return fxrand() * (max - min) + min;}
function rnd_btwexp(min, max) {return fxrand()**2 * (max - min) + min;}
function rnd_int(min, max) {min = Math.ceil(min);max = Math.floor(max);return Math.floor(fxrand() * (max - min + 1)) + min;}

//random function helpers
// fxrand() gives u a value between 0 and 1
// rnd_btw(a,b) gives u a value between a and b
// rnd_btwexp(a,b) gives u a value between a and b, but with an exponential slope (more probable to get the borders than the center)
// rnd_int(a,b) gives u an integer value between a and b


//2020-11-29
// Swirls
//@Brunewnhoous
n=rnd_int(5, 10)
m=rnd_int(3, 6)
cor = rnd_btw(0, 1)
cor1 = rnd_btw(0, 1)
cor2 = rnd_btw(0, 1)
s=()=> shape(m,0.5,0.001)
.color(()=>((Math.sin(time/3)+1+cor)/3)
  ,()=>((Math.sin(time/2)+1+cor1)/3)
  ,()=>((Math.sin(time/4)+1+cor2)/3))
// .color(()=>(Math.sin(time/3)+1)
// ,()=>(Math.sin(time/2)+1)
// ,()=>(Math.sin(time/4)+1))
t=rnd_int(1, 3)
s().scale(1,innerHeight/innerWidth).rotate(()=>((Math.sin(time)/t))/Math.PI)
.diff(s().invert().scale(0.9,innerHeight/innerWidth).rotate(()=>((Math.sin(time+0.5)/t))/Math.PI))
.diff(s().scale(0.8,innerHeight/innerWidth).rotate(()=>((Math.sin(time+1)/t))/Math.PI))
.diff(s().invert().scale(0.7,innerHeight/innerWidth).rotate(()=>((Math.sin(time+1.5)/t))/Math.PI))
.diff(s().scale(0.6,innerHeight/innerWidth).rotate(()=>((Math.sin(time+2)/t))/Math.PI))
.diff(s().invert().scale(0.5,innerHeight/innerWidth).rotate(()=>((Math.sin(time+2.5)/t))/Math.PI))
.diff(s().scale(0.4,innerHeight/innerWidth).rotate(()=>((Math.sin(time+3)/t))/Math.PI))
.diff(s().invert().scale(0.3,innerHeight/innerWidth).rotate(()=>((Math.sin(time+3.5)/t))/Math.PI))
.diff(s().scale(0.2,innerHeight/innerWidth).rotate(()=>((Math.sin(time+4)/t))/Math.PI))
.invert()
.modulateScale(src(o0).scale(0.99))
.modulateScrollX(osc(n).thresh(0.9).rotate(Math.PI/2),0.05)
.modulateScrollX(osc(n).invert().thresh(0.9).rotate(Math.PI/2).invert(1),-0.05)
.modulateScrollY(osc(n).thresh(0.9),0.05)
.modulateScrollY(osc(n).invert().thresh(0.9).invert(1),-0.05)
.scrollX(0.025)
.scrollY(0.025)

.out()



