//Chipped Dogtooth
//July 24 2022
//@Hicpunks

function rnd_btw(min, max) {
    return fxrand() * (max - min) + min;
}
function rnd_btwexp(min, max) {
    return fxrand() ** 2 * (max - min) + min;
}
function rnd_int(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(fxrand() * (max - min + 1)) + min;
}

colHash = fxrand();

if (colHash > 0.8) col=rnd_btw(2.03,2.78)
else if (colHash > 0.6) col=rnd_btw(11,13)
else if (colHash > 0.4) col=rnd_btw(25.1,25.8)
else if (colHash > 0.2) col=rnd_btw(5.18,5.34)
else  col=rnd_btw(29.04,29.45)

shpHash = fxrand();

if (shpHash > 0.8) shp=3
else if (shpHash > 0.6) shp=4
else if (shpHash > 0.45) shp=5
else if (shpHash > 0.3) shp=6
else if (shpHash > 0.15) shp=8
else shp=60

osc2=rnd_btw(.45,.812)
osc3=rnd_btw(.2021,.72057)
vor1=rnd_btw(.03,.24)
vor2=rnd_btw(.04,.18)
vor3=rnd_btw(.2,.8)
shape1=rnd_int(3,8)
shape2=rnd_int(3,16)
shapeS=rnd_int(3,8)
shapeV=rnd_int(3,8)
scale=rnd_btw(0.15,0.60)
mod=rnd_btw(.03,0.13)
scroll=rnd_btw(.05,0.15)
rep=rnd_btw(120,250)
r=rnd_btw(.04,.88)
g=rnd_btw(.04,.88)
b=rnd_btw(.04,.88)
pic=rnd_btw(.03,.5)
pic2=rnd_btw(.03,.98)
n=rnd_btw(.4,.9)
n2=rnd_btw(.015,026)

voronoi(vor1, vor2, vor3)
	solid()
  .add(shape(shape1, scale + mod ))
  .modulate(voronoi(vor1, vor2, vor3))
  .repeat(rep,scroll)
  .add(shape(shapeV, pic, pic2)
  .modulate(voronoi(1, .15))
  .repeat(16, 16)
  .modulatePixelate(shape(shp, .5, .6)
  .repeat(192, 432)))
  .color(r,g,b)
  .pixelate(1200,2000)
  .colorama(col)
  .out();
