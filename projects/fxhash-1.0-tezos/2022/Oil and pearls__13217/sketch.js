function rnd_btw(min, max) {return fxrand() * (max - min) + min;}
function rnd_btwexp(min, max) {return fxrand()**2 * (max - min) + min;}
function rnd_int(min, max) {min = Math.ceil(min);max = Math.floor(max);return Math.floor(fxrand() * (max - min + 1)) + min;}



os1=rnd_btwexp(5,126)
os4=rnd_btwexp(5,126)
os2=rnd_btwexp(5,126)
os3=rnd_btwexp(0.1,0.9)
m1=rnd_btwexp(5,1226)
m2=rnd_btwexp(5,1244)
ka=rnd_btwexp(1,3)
sc=rnd_btwexp(3,9)
sc2=rnd_btwexp(1,5)
os5=rnd_btwexp(2,22)
os6=rnd_btwexp(3,15)
os7=rnd_btwexp(1,10)
os8=rnd_btwexp(2,9)

speed = 0.01
src(o0)

  .modulate(
    noise(6,0,1.5).modulate(shape(43,2)))
  .layer(
  osc(os1,0.1,2).mask(voronoi(sc,0.3,0).rotate(180,2).luma(-222,11)
  )
)

  .layer(shape(3,0.5,0.1).repeat(os5,os5)
  .mult(osc(os4,1,2).mask(noise(sc2,2)))
  .rotate( ({time}) => time%360 )
  .scrollX(({time}) => time%360 )
  .mult(shape(os6,0.3,0.01)).scale(2).kaleid(os8))
.scrollX(0, () => Math.sin(time*0.005)*0.05 )
.kaleid(2)
.repeat(2,2)
.scrollX(({time}) => time%360 )
.rotate( ({time}) => time%360 )
.scale(1.5)
.modulate(
    noise(os8,0,1.5).modulate(shape(43,2)))
  .blend(
  osc(os2,0.1,2).mask(voronoi(4,3,2).rotate(180,2).luma(-222,11)
  )
)

.blend(shape(4,2)
.layer(shape(3,0.5,0.1).repeat(os5,os5)
  .mult(osc(os4,1,2).mask(noise(sc2,2)))
  .rotate( ({time}) => time%360 )
  .scrollX(({time}) => time%360 )
  .mult(shape(os6,0.3,0.01)).scale(2).kaleid(os8))
.scrollX(0, () => Math.sin(time*0.005)*0.05 )
.kaleid(2)
.repeat(2,2)
.scrollX(({time}) => time%360 )
.rotate( ({time}) => time%360 )
.scale(1.5)
.modulate(
    noise(os8,0,1.5).modulate(shape(43,2)))
  .blend(
  osc(os2,0.1,2).mask(voronoi(4,3,2).rotate(180,2).luma(-222,11)
  )
))
  .out(o0)