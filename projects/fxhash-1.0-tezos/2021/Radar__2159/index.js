function rnd_btw(min, max) {return fxrand() * (max - min) + min;}
function rnd_btwexp(min, max) {return fxrand()**2 * (max - min) + min;}
function rnd_int(min, max) {min = Math.ceil(min);max = Math.floor(max);return Math.floor(fxrand() * (max - min + 1)) + min;}

//random function helpers
// fxrand() gives u a value between 0 and 1
// rnd_btw(a,b) gives u a value between a and b
// rnd_btwexp(a,b) gives u a value between a and b, but with an exponential slope (more probable to get the borders than the center)
// rnd_int(a,b) gives u an integer value between a and b


//2020-
// 
//@Brunewnhoous

if ( fxrand()<0.5 ) { y = 0 } else { y = 0.5 }
r=rnd_btw(1,4)
r2=rnd_btw(1,2)
x=rnd_int(1,6)/10
  cor = rnd_btw(0, 1)
  cor1 = rnd_btw(0, 1)
  cor2 = rnd_btw(0, 1)
p=rnd_int(80, 120)

n=()=>shape(100)
m=()=>n().scale(()=>(Math.sin(time*3)+2)*0.01)
  .scrollX(0.151).rotate(()=>(time)/r2)
  .scrollX(()=>Math.sin(time*r)/10)

n()
  .diff(n().scale(0.98))
  .add(n().scale(0.1))
  .add(m())
  .add(m().rotate((Math.PI/x)+(Math.PI/x)*x/(x/0)))
  .add(m().rotate((Math.PI/x)+(Math.PI/x)*x/(x/1)))
  .add(m().rotate((Math.PI/x)+(Math.PI/x)*x/(x/2)))
  .add(m().rotate((Math.PI/x)+(Math.PI/x)*x/(x/3)))
  .add(m().rotate((Math.PI/x)+(Math.PI/x)*x/(x/4)))
  .thresh()
  .pixelate(p,p)
  .scale(1.5,innerHeight/innerWidth)
  .add(o0)
  .color(()=>((Math.sin(time/2)+1+cor)/2)
  ,()=>((Math.sin(time/2.5)+1+cor1)/2)
  ,()=>((Math.sin(time/3)+1+cor2)/2))
  .saturate(0.5).colorama(0.001)
.out()
