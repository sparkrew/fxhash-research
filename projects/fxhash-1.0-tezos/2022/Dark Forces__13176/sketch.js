function rnd_btw(min, max) {return fxrand() * (max - min) + min;}
function rnd_btwexp(min, max) {return fxrand()**2 * (max - min) + min;}
function rnd_int(min, max) {min = Math.ceil(min);max = Math.floor(max);return Math.floor(fxrand() * (max - min + 1)) + min;}



os1=rnd_btwexp(12,35)
os4=rnd_btwexp(0.1,0.9)
os2=rnd_btwexp(0.01,1)
os3=rnd_btwexp(2,9)
m1=rnd_btwexp(5,150)
m2=rnd_btwexp(1,23)
ka=rnd_btwexp(5,16)
sc=rnd_btwexp(1,25)
sc2=rnd_btwexp(12,121)
os5=rnd_btwexp(0.1,0.5)
os6=rnd_btwexp(1,55)
os7=rnd_btwexp(2,11)
os8=rnd_btwexp(3,39)
os9=rnd_btwexp(1,232)
os11=rnd_btwexp(0.1,0.6)
os12=rnd_btwexp(2,31)
os13=rnd_btwexp(0.1,0.9)

voronoi()
  .mult(osc(os1,os4,os2))
.kaleid(os3)
  .pixelate([m1,m2,ka,sc])
  .modulateRotate(src(o0).scale(sc2),0.2)

  .diff(src(o0).rotate([-2,2].fast(0.05)))
  .contrast( 2 )
  
    .out(o0)



  
  .out()