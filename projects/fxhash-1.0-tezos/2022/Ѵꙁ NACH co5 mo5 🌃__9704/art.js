const clmp = 1 + Math.floor(fxrand()*5);
const rows = 2 + Math.floor(fxrand()*5);
const oscfreq = clmp*200;
     // var hydra = new Hydra({ detectAudio: false, width: 1080, height: 1080 })
      var hydra = new Hydra({detectAudio: false, canvas: layer1})
    hydra.setResolution(window.innerWidth, window.innerHeight);
//    window.addEventListener("resize",evt=>{hydra.setResolution(window.innerWidth, window.innerHeight)})


      //nachos by @siberelis

     osc(clmp*200,0,0.99).rotate(5)
  .modulate(osc(20,0.05)).rotate(1)
.modulate(osc(5,0.01))
  .modulate(noise(1,0.01))
.rotate (1,0.01)
.modulate(shape(5,0.5,0.3)
        .rotate(1,1)
        .modulate(noise(1,0.01))
        .repeatX(rows).repeatY(rows))
      .diff(osc (1,1,0.5)
        .modulate(noise(2,0.5)).modulate(voronoi(100,2)))
.layer(gradient(1)
       .modulate(noise(500,2))
       .mask(shape(3,0.2)).rotate(1,1)
       .modulate(noise(1,0.01))
       .repeatX(rows).repeatY(rows))
.out()
