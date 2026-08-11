function rnd_btw(min, max) {return fxrand() * (max - min) + min;}
function rnd_btwexp(min, max) {return fxrand()**2 * (max - min) + min;}
function rnd_int(min, max) {min = Math.ceil(min);max = Math.floor(max);return Math.floor(fxrand() * (max - min + 1)) + min;}

document.addEventListener("keyup", (event) => {
  if (event.key === "s" || event.key === "S") {
      event.preventDefault();
      screencap();
  }
})

//s0.initCam()
speed=rnd_btw(0.0111, 0.0333)
osc(48,-.1,0).thresh([.3,.7].fast(.75),0).color(0,0,1)
.add(
    osc(rnd_btw(24, 32),.1,0).thresh([.3,.7].fast(.75),0).rotate(3.14/4)
    .color(1,0,0)
    .modulateScale( osc(rnd_btw(54, 74),-.01,0).thresh([.3,.7].fast(.75),0) )
)
.diff(
    osc(28,.1,0).thresh([.3,.7].fast(.5),0).rotate(3.14/2)
    .color(rnd_btwexp(-1,1),0,rnd_btwexp(-1,1))
    .modulateScale(
      osc(rnd_btw(54, 74),-.015,0)
      .thresh([rnd_btwexp(.2,.4),rnd_btwexp(.6,.8)].fast(.5),0)
    )
)
.modulateRotate(
  osc(rnd_btw(44, 64),-.005,0)
  .thresh([.3,.7].fast(.25),0)
)
.modulateScale(
  osc(rnd_btw(34, 54),-.020,0)
  .thresh([rnd_btwexp(.2,.4),rnd_btwexp(.6,.8)].fast(.25),0)
)
.colorama( fxrand()*.01222+9.89)
.scale(rnd_btw(2.7,3.333))
// .diff(
//   src(s0).contrast(1.5).saturate(1.5)
//   //.color(rnd_btw(0,1),rnd_btw(0,1),rnd_btw(0,1))
//   .modulateScale(
//     osc(rnd_btw(34, 54),-.020,0)
//     .thresh([rnd_btwexp(.2,.4),rnd_btwexp(.6,.8)].fast(.25),0)
//   )
// )
.out()