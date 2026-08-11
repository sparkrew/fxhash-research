voronoi(fxrand()*30,1)
.mult(osc(fxrand()*10, 0.1, () => Math.sin(time) * 3)
.saturate(4.900))
.modulate(o0, 0.5)
.pixelate(fxrand()*40,fxrand()*40)
.scroll(
  () => -mouse.x / width,
  () => -mouse.y / height)
.out()
