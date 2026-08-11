/*
Bubble flow
Daniel Oropeza, 2021
13/12/2021
*/
function rnd_btw(min, max) {return fxrand() * (max - min) + min;}
function rnd_btwexp(min, max) {return fxrand()**2 * (max - min) + min;}
function rnd_int(min, max) {min = Math.ceil(min);max = Math.floor(max);return Math.floor(fxrand() * (max - min + 1)) + min;}

document.addEventListener("keyup", (event) => {
    if (event.key === "s" || event.key === "S") {
        event.preventDefault();
        screencap();
    }
})


hue1=rnd_btwexp(0,2)
hue2=rnd_btwexp(0,2)
sat1=rnd_btw(0.0,1.5)
sat2=rnd_btw(1,1.5)
myrot1=rnd_btwexp(1,300)
myrot2=rnd_btwexp(1,300)
myrot3=rnd_btwexp(1,300)

B =.12; C=-.25; D=.34; E=.19; F=-.41; EASE= 'easeInOutCubic'; FST= .25; G =-.2; H=-.5; I=.14; J=.9; K=-.11; L= 0;

A = window.innerHeight/window.innerWidth

solid(0.2, 0.6, 0.9)
  .layer(
    osc(31.4, 0)
      .thresh(0.7)
      .luma(0.8,0.1)
      .modulate(osc(4, 1).rotate(myrot1), 0.05)
      .color(0,0,0)
  )
  .layer(
    osc(31.4, 0)
      .thresh(0.7)
      .luma()
      .modulate(osc(4, 1).rotate(myrot2), 0.1)
  )
  .layer(
    osc(31.4, 0)
      .thresh(0.7)
      .luma()
      .modulate(osc(4, 0.3).rotate(myrot3), 0.4)
  .color(0.5,1,0.3)
  .saturate(sat1)
  )
.modulateScale(gradient().r(-0.8).kaleid(300))
.hue(hue1)
.saturate(sat2)
.modulateRotate(shape(400,1,0).scale(1,A,1),50)//ESTA QUEDA ESTÁTICA
.modulateRotate(shape(400,0.8,0).scale(1,A,1).scroll(0.2,0).color(1,0.2,0.5).scrollX([G,J,D,B].ease(EASE).fast(FST/2))
       .scrollY([C,L,D].ease(EASE).fast(FST/3)),50)
.modulateRotate(shape(400,0.5,0).scale(1,A,1).scroll(-0.2,0.2).color(0.9,0.9,0.1).scrollX([G,J,D,B].ease(EASE).fast(FST/8))
       .scrollY([C,L,D].ease(EASE).fast(FST/3)),50)
.modulateRotate(shape(400,0.3,0).scale(1,A,1).scroll(-0.2,-0.3).color(0.3,0.1,0.9).scrollX([D,J,D,B].ease(EASE).fast(FST/5))
       .scrollY([C,L,D].ease(EASE).fast(FST/3)),50)
.hue(hue2)
  .out();
