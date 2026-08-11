//Pixel Orb
//June 20th 2022
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

dir = fxrand();
pix = fxrand();
xDir = fxrand();
yDir = fxrand();
xRep = fxrand();
yRep = fxrand();
xDen = fxrand();
yDen = fxrand();
shp = fxrand();
let inverted;
var scaleZoom, scaleName;
let xD,yD,xR,yR,xDenA,yDenA,type

if (dir > 0.6) direction=rnd_btw(.12,.255), inverted=true
else  direction=rnd_btw(-.255,-.122), inverted=false

if (pix > 0.67) scaleZoom=140, scaleName = "Small"
else if (pix > 0.38) scaleZoom=50, scaleName = "Large"
else scaleZoom = 80, scaleName = "Normal"

if (xDir > 0.75) xD = 8
else if (xDir > 0.5) xD = 16
else if (xDir > 0.25) xD = 32
else xD = 64

if (yDir > 0.75) yD = 8
else if (yDir > 0.5) yD = 16
else if (yDir > 0.25) yD = 32
else yD = 64

if (xRep > 0.75) xR = 8
else if (xRep > 0.5) xR = 16
else if (xRep > 0.25) xR = 32
else xR = 64

if (yRep > 0.75) yR = 8
else if (yRep > 0.5) yR = 16
else if (yRep > 0.25) yR = 32
else yR = 64

if (xDen > 0.5) xDenA = 200
else if (xRep > 0.2) xDenA = 300
else xDenA = 400

if (yDen > 0.5) yDenA = 200
else if (yDen > 0.2) yDenA = 300
else yDenA = 400

if (shp > 0.9) type = 4
else if (yDen > 0.8) type = 6
else if (yDen > 0.7) type = 8
else type = 150

console.log("Pixel Size: " + scaleZoom + " " +  scaleName)
console.log("Inverted: " + inverted)

h1=rnd_btw(0.14,0.52)
h2=rnd_btw(0.25,0.75)
h3=rnd_btw(0.15,0.85)
h4=rnd_btw(0.6,0.95)
osc1=rnd_btw(6,16) //oscspeed
c1=rnd_btw(0,.85)
c2=rnd_btw(0.05,.58)
c3=rnd_btw(.05,.95)
p1=rnd_btw(.65,1.55)
scale=rnd_btw(0.05,0.0724)
mod=rnd_btw(-0.033,0.033)
col=rnd_btw(.125,0.825)
ln = shape(type,h1,0.15)
sq1 = shape(12,10,h2,h4).scrollX(fxrand())
sq2 = shape(4,10,h3,0.5)
osc(osc1,scale*direction,p1)
.modulatePixelate(ln ,Math.PI/3)
.luma(0.38)
.modulatePixelate(sq1,Math.PI)
.modulatePixelate(sq2,Math.PI)
.diff(shape(16,.15,0).scrollY(.65).rotate(90).color(.13,10,.75) )
.modulateRotate(shape(20,0.35,0.35).scrollX(fxrand()),Math.PI/4)
.modulatePixelate(shape(12,fxrand(),1).scrollX(fxrand()),Math.PI/8)
.modulateRotate(shape(8,mod,.225).scrollY(fxrand()),Math.PI/2)
.repeat(xD,yD)
.repeat(xR,yR)
.add(ln.color(c2,c1,c3))
.colorama(col)
.pixelate(xDenA,yDenA)
.out()
