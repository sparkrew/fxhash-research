function rnd_btw(min, max) {return fxrand() * (max - min) + min;}
function rnd_btwexp(min, max) {return fxrand()**2 * (max - min) + min;}
function rnd_int(min, max) {min = Math.ceil(min);max = Math.floor(max);return Math.floor(fxrand() * (max - min + 1)) + min;}



e1=rnd_btwexp(50,200)
e2=rnd_btwexp(1,9)
e3=rnd_btwexp(1,9)
e4=rnd_btwexp(1,9)
e5=rnd_btwexp(1,9)
e6=rnd_btwexp(3,9)
e7=rnd_btwexp(3,9)
e8=rnd_btwexp(3,9)
e9=rnd_btwexp(3,9)
e10=rnd_btwexp(0.1,0.9)
e11=rnd_btwexp(0.1,0.9)
e12=rnd_btwexp(0.1,0.9)
e13=rnd_btwexp(0.1,0.9)
e14=rnd_btwexp(0.1,0.9)


speed = 1
setResolution(e1,1080)
osc(e2,0,2)
  .modulate(shape(e5).add(voronoi(),-1),1)


  .modulate(osc(e3,0.1,2).mask(shape(e6)).scroll(e10,e14))
.modulate(osc(e4,0.1,2).mask(shape(e7)).scroll(e11,e13))
.modulate(osc(e5,0.1,2).mask(shape(e8)).scroll(e12,e12))
.modulate(src(o0).mask(shape(e9)).scroll(e13,e10))

  .out(o0)

src(o0).modulate(src(o1).add(voronoi(e5),-1),1).luma(0.3).hue(e10).out(o1)

render(o1)