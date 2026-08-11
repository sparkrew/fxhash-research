/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
// [Crowded Maximal]
// [linxirwengi, 2024]
// [https://linktr.ee/sudutalien]

var hydra = new Hydra({
    canvas: document.getElementById("canvas1"),
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

alas = () => noise($fx.rand()*5+0.1,0.2).modulate(shape(99,0.7,0.2).repeat($fx.rand()*9+1,$fx.rand()*5+3)).color($fx.rand()*2.314,0,$fx.rand()*3.234+1).hue($fx.rand()*1.9+1).colorama($fx.rand()*0.8+0.05)
//
alas()
  
  .modulate(shape(2,0.4,0.1))
  .modulate(shape(99,0.4,0.5))


.diff(alas(noise($fx.rand()*5+0.2,$fx.rand()*12+-18)))
.diff(shape(4,$fx.rand()*0.8+0.1,$fx.rand()*0.5+0.08))

.modulate(alas())

.modulate(shape(99,0.3,0.06).modulateRepeat(osc($fx.rand()*20+1,$fx.rand()*7+-0.1)))
  .out()


$fx.preview();
/******/ })()
;