function rnd_int(min, max) {min = Math.ceil(min);max = Math.floor(max);return Math.floor(fxrand() * (max - min + 1)) + min;}
function rnd_btw(min, max) {return fxrand() * (max - min) + min;}

var randomShape = rnd_int(2, 25)
if (randomShape >= 15) randomShape=25

var randomK = rnd_int(1, 8)
var randomR = rnd_int(0, 15)
var randomCB = rnd_int(0,1)
 

var colorA=rnd_btw(1,15)
var colorB=rnd_btw(1,3)
var colorC=rnd_btw(1,2)

var colorT = rnd_int(0,2)
var colorP = rnd_int(0,1.5)

 noise()
  .add(osc(10,0.25,1))
  .modulateRotate(noise().scale(5),0.125)
  .scale(2, 2)
  .repeatX(10, 10)
      .mult(osc( [0.5,5].fast(0.5) ))
      .scrollX(5,-0.50)
      .mult(solid())
  
      
  //BARRA DO MEIO 

  .diff(voronoi().layer(gradient([1,2,4]).color(colorA, colorB, colorC).mult(shape(2))))
  .mult(voronoi()
  .scrollX(10, -0.7)
  .modulateScale(noise(),
     () => time%1*0.1, 0.1)
  .scale(1, 2 ,2) 
  .kaleid(randomK))
 
// BACKGROUND COM XIADO E ESTRELINHAS

.diff(noise (500,2) .thresh(1.2,2))
.blend(voronoi(500,1,5).color(colorT, colorP).thresh(0.5,0.04))

// SHAPE DO MEIO

.diff(shape(randomShape).modulate(gradient(2.5).hue(), 0.05)
.rotate( ({time}) => time%360 ))

// .saturate( ({time}) => Math.sin(time),()=>Math.cos(time)/500)


// SHAPE BRANCO

.diff(shape(4).modulate(noise().color(1.5,randomCB).repeat(randomR).kaleid(randomK),
    () => time%1*0.1, 0.1)
    .scale(1,2.5,1))
    //  .rotate( ({time}) => time%360 )
     
.out()




