/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
// Aura Pulses
// Rangga Purnama Aji, 2025
// https://linktr.ee/ranggapuraji

var hydra = new Hydra({
    canvas: document.getElementById("kampas1"),
    detectAudio: false
  })
    hydra.setResolution(window.innerWidth, window.innerHeight)
    window.addEventListener("resize",evt=>{hydra.setResolution(window.innerWidth, window.innerHeight)});
    document.addEventListener("keyup", (event) => {
    if (event.key === "c" || event.key === "S") {
    event.preventDefault();
    screencap();
}
})

shape(2,0.1,$fx.rand()).mult(osc($fx.rand()*15+3,1.5).modulateScale(gradient().g(2).rotate(0,0.5),0.5))
  .modulateScale(osc($fx.rand()*100+15).modulateScale(noise($fx.rand()*5+1)).kaleid(1).kaleid(2))
  .scale(0.85)
.add(
shape(2,0.1,$fx.rand()).mult(osc($fx.rand()*100+25,0,$fx.rand()*3))
  .modulateScale(osc($fx.rand()*50+15).modulateScale(noise($fx.rand()*3+1)).kaleid($fx.rand()*4+1).kaleid(2))
  .scale(0.85)
)
.diff(shape(4,0.985).luma())
.diff(shape(4,0.965))
.diff(shape(4,0.885).luma())
.diff(shape(4,0.865))
  .posterize(5)
.color(2,0.5,2.5)
.hue($fx.rand())
  .diff(o0)
.modulate(o0,0.0005)
.modulate(o0,-0.0005)
.scale(0.965)
  .out()



$fx.preview();
/******/ })()
;