function rnd_btw(min, max) {return fxrand() * (max - min) + min;}
function rnd_btwexp(min, max) {return fxrand()**2 * (max - min) + min;}
function rnd_int(min, max) {min = Math.ceil(min);max = Math.floor(max);return Math.floor(fxrand() * (max - min + 1)) + min;}

//random function helpers
// fxrand() gives u a value between 0 and 1
// rnd_btw(a,b) gives u a value between a and b
// rnd_btwexp(a,b) gives u a value between a and b, but with an exponential slope (more probable to get the borders than the center)
// rnd_int(a,b) gives u an integer value between a and b



osc1=rnd_btwexp(10,100)

osc3=rnd_btwexp(-0.05,0.05)
osc4=rnd_btw(1,5 )
osc5=rnd_btwexp(-0.2,0.2)
osc6=rnd_btw(20,50)
osc7=rnd_btwexp(1,350)
osc8=rnd_btw(0.1,1)

osc9=rnd_btwexp(0.1,0.9)
osc10=rnd_btw(1,90)
osc101=rnd_btwexp(-0.4, -0.1)

osc11=rnd_btw(-3, 3)
osc12=rnd_btw(-3, 3)
osc14=rnd_btw(-3, 3)

rtt1=rnd_btw(1, 4)
rtt2=rnd_btw(1, 7)
rtt4=rnd_btwexp(0, 180)

s = ()=>Math.sin(time*1)*0.1/2

shape(4, 0.5, 0.001)
  .repeat(osc1, osc1, 0.0, 0.0) //10,100
.scrollX(0, osc3) //-0.05,0.05
.modulate(noise(osc4, osc5, 1)) //a1,5 b-0.2,0.2
.blend(gradient(0).color(osc11,osc12,osc14)) 
.hue(s)
.rotate(osc7) //1,350

  
  .out()



