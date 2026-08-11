//coded by lilcode en julio-agosto 2023. buenos aires, argentina
//-//-//-//-//-//-//-//-//-//-//-//-//-//-//-//-//-//-//
/*
apunte de ideas desarrolladas:

pensar en señal, no canvas
videosintesis modular
darle movimiento a las imagenes, imaginar movimiento, flujo
buscar lo organico a traves de simples procesos encadenados retroalimentados
el feedback como *lo mas importante*
tanto en la sintesis modular de video como de sonido

excusar mi practica desde referencias; expresionismo digital (robado de kim asendorf tw descripcion)
ojack - kim asendorf - andreas gysin - zach lieberman - photoevaporation - galo - pixelform - d0nxyz - leander herzog - dedmarcelo

mi acercamiento a la practica de videosintesis digital / webgl animation

references:
videoart
glitch
livecoding

no es glitch en el sentido de tener error o romper el programa;
el sistema de feedback esta meticulosamente calculado y afinado, 
cada detalle fue ajustado a la perfeccion; no hay *error*
si bien muchos artistas se acercan a 'esta estetica' desde la improisacion, 
el stacking code y encadenar feedbacks sin mucha reflexion; 
tambien se puede trabajar desde la precision, el plantear la vision imaginada de manera precisa.

expresionismo digital (no esqueumorfico, plantea nuevos imaginarios)

mi practica viene alineada ideologicamente desde las bases de processing foundation, entregadas early por Aaron Montoya-Moraga.
desfetichizacion de la tecnologia, no hypear-se, no grift. si ves algo que te gusta, puedes lograrlo.
desmitificacion de los procesos generativos, del mito de la tecnologia de punta inalcanzable,
del mito del artista genio
no hay genios. hay escenas-comunidades nutritivas para el desarrollo personal y estetico.
el arte nace desde las comunidades, las comunidades son las genias. permiten florecer talento

acercamientos generativos desde lo folk, el computador como espacio personal de busquedas imaginatorias

gracias, saludos
lilcode.hph@gmail.com
*/

function rn(x=1) {return fxrand()*x;}
function btw(min, max, x=1) {return (rn()**x) * (max - min) + min;};
function intgr(min, max, x=1) {min = Math.ceil(min);max = Math.floor(max)*1.01;return Math.floor((rn()**x) * (max - min + 1)) + min;};
function chc(x,y=1){return x[Math.floor(btw(0, x.length * 0.99, y))];};
function bi(x=.5) {return rn()>x?1:-1};
function dbl(x=.5) {return rn()>x?1:2};
function hlf(x=.5) {return rn()>x?1:.5};
function bl(x=.5) {return rn()>x?1:0};


let divgrl=1
var hydra = new Hydra({detectAudio: false, enableStreamCapture: false, numSources: 0, numOutputs: 5});
hydra.setResolution(Math.floor(window.innerWidth/divgrl), Math.floor(window.innerHeight/divgrl));
window.addEventListener("resize",evt=>{hydra.setResolution(Math.floor(window.innerWidth/divgrl), Math.floor(window.innerHeight/divgrl));})

speed=.25
fps=60

//A=height/width
ww=width>height?height/width:1
hh=height>width?width/height:1
flspdpx=btw(1,2)*bi()*bl()*bl()
pxxx=intgr(6,12)
pxo0x=pxxx/ww
pxo0y=pxxx/hh
bipolr=bl()
flspedbfrx=intgr(1,3)*bi()*bl()*bl()
flspedbfry=intgr(1,3)*bi()*bl()*bl()
unidir=bi()
unipos=unidir>0?0:1

ns1x=rn()
ns1y=rn()
ns2x=rn()
ns2y=rn()
ns3x=rn()
ns3y=rn()
ns4x=rn()
ns4y=rn()
ns5x=rn()
ns5y=rn()
ns6x=rn()
ns6y=rn()
ns7x=rn()
ns7y=rn()
ns8x=rn()
ns8y=rn()
ns9x=rn()
ns9y=rn()
ns10x=rn()
ns10y=rn()
nsfreq=35
nsmaskfreq=13

//this creates a noise, with a random section picked, effectively randomizing the noise (we dont have seed for noises in hydra)
noiseloopnx=(freq=35,vel=.25,rad=.8,scl=4,posx=rn(),posy=rn())=>noiseloop(freq,vel,rad).scale(scl,ww,hh,posx,posy)

solid().diff(o0)
.modulate(solid()
  .add(noiseloopnx(nsfreq,.25,2,4,ns1x,ns1y)//.pixelate(pxo0x,pxo0y)
    .color(1/width,0,0)
    .mask(noiseloopnx(nsmaskfreq,.5,2,4,ns2x,ns2y).thresh(.125,.25))
    ,1)
  .add(noiseloopnx(nsfreq,.25,2,4,ns3x,ns3y)//.pixelate(pxo0x,pxo0y)
    .color(0,1/height,0)
    .mask(noiseloopnx(nsmaskfreq,.5,2,4,ns4x,ns4y).thresh(.375,.25))
    ,1)
  .scrollY(0,flspdpx/height)
  .pixelate(pxo0x*2,pxo0y*2)
  .add(gradient().brightness(-.5).rotate(Math.PI/2).repeat(pxo0x,pxo0y).color(1/width,1/height)
    .mask(noiseloopnx(nsfreq/2,.05,2,4,.75,.75).thresh(.875,.025).pixelate(pxo0x,pxo0y)),5)
  .modulate(osc(modosco01=Math.PI*btw(1,10),modosco02=btw(.01,.25)).brightness(-.5).thresh(0,0).pixelate(pxo0x*2,1).color(0,1)
    .mask(noiseloopnx(13,.5,2,4,.7,.3)),modosco03=btw(0,.25))
  .scrollY(0,-flspdpx/height)
,25)
.modulateScale(noiseloopnx(33,1,2,4,ns10x,ns10y).pixelate(width,1).brightness(-.5).rotate(.25).thresh(.125,0).pixelate(pxo0x,pxo0y)
.mult(noiseloopnx(33,1,2,4,ns10x,ns10y).pixelate(pxo0x/2,pxo0y/2)
).color(0,1,0),5)
.layer(shape(4,.5,0).scroll(bi()*.25,bi()*.25,0).repeat(width/2,height/2)
    .mask(noiseloopnx(23,.25,2,4,ns5x,ns5y).thresh(.75,0)
      .pixelate(pxo0x*2,pxo0y*2)
      )
    )
.out()



src(o1)
.modulate(solid()
  .add(shape(4,1,0),2*bipolr)
  .add(noiseloopnx(nsfreq,.025,2,4,ns6x,ns6y).thresh(.05,.1).brightness((1-bipolr)*-.5))
  .add(noiseloopnx(nsfreq,.025,2,4,ns7x,ns7y).thresh(.05,.1).brightness((1-bipolr)*-.5))
  .color(1/width,0/height)
  .mask(noiseloopnx(nsmaskfreq,.1,2,4,ns8x,ns8y).thresh(0,.5))
  .scrollY(0,flspdpx/height).pixelate(1,pxo0y)
  .scrollY(0,-flspdpx/height)
,-unidir*(2-bipolr)*2)
.layer(src(o0).scroll(rn(),rn(),flspedbfrx/width,flspedbfry/height)
  .mask(shape(4,1,0).scale(1,2*(2-bipolr)/width,1,unipos)
    .scrollX(2*(1-bipolr)*unidir/width)
    .mask(noiseloopnx(5,.25,2,4,rn(),rn()).thresh(0,0).pixelate(1,height))
    ))
.out(o1)


solid().diff(src(o1)).out(o2)
render(o2)




variation=()=>{

ww=width>height?height/width:1
hh=height>width?width/height:1
flspdpx=btw(1,2)*bi()*bl()*bl()
pxxx=intgr(6,12)
pxo0x=pxxx/ww
pxo0y=pxxx/hh
bipolr=bl()
flspedbfrx=intgr(1,3)*bi()*bl()*bl()
flspedbfry=intgr(1,3)*bi()*bl()*bl()
unidir=bi()
unipos=unidir>0?0:1

ns1x=rn()
ns1y=rn()
ns2x=rn()
ns2y=rn()
ns3x=rn()
ns3y=rn()
ns4x=rn()
ns4y=rn()
ns5x=rn()
ns5y=rn()
ns6x=rn()
ns6y=rn()
ns7x=rn()
ns7y=rn()
ns8x=rn()
ns8y=rn()
ns9x=rn()
ns9y=rn()
ns10x=rn()
ns10y=rn()
nsfreq=35
nsmaskfreq=13

//this creates a noise, with a random section picked, effectively randomizing the noise (we dont have seed for noises in hydra)
noiseloopnx=(freq=35,vel=.25,rad=.8,scl=4,posx=rn(),posy=rn())=>noiseloop(freq,vel,rad).scale(scl,ww,hh,posx,posy)

solid().diff(o0)
.modulate(solid()
  .add(noiseloopnx(nsfreq,.25,2,4,ns1x,ns1y)//.pixelate(pxo0x,pxo0y)
    .color(1/width,0,0)
    .mask(noiseloopnx(nsmaskfreq,.5,2,4,ns2x,ns2y).thresh(.125,.25))
    ,1)
  .add(noiseloopnx(nsfreq,.25,2,4,ns3x,ns3y)//.pixelate(pxo0x,pxo0y)
    .color(0,1/height,0)
    .mask(noiseloopnx(nsmaskfreq,.5,2,4,ns4x,ns4y).thresh(.375,.25))
    ,1)
  .scrollY(0,flspdpx/height)
  .pixelate(pxo0x*2,pxo0y*2)
  .add(gradient().brightness(-.5).rotate(Math.PI/2).repeat(pxo0x,pxo0y).color(1/width,1/height)
    .mask(noiseloopnx(nsfreq/2,.05,2,4,.75,.75).thresh(.875,.025).pixelate(pxo0x,pxo0y)),5)
  .modulate(osc(modosco01=Math.PI*btw(1,10),modosco02=btw(.01,.25)).brightness(-.5).thresh(0,0).pixelate(pxo0x*2,1).color(0,1)
    .mask(noiseloopnx(13,.5,2,4,.7,.3)),modosco03=btw(0,.25))
  .scrollY(0,-flspdpx/height)
,25)
.modulateScale(noiseloopnx(33,1,2,4,ns10x,ns10y).pixelate(width,1).brightness(-.5).rotate(.25).thresh(.125,0).pixelate(pxo0x,pxo0y)
.mult(noiseloopnx(33,1,2,4,ns10x,ns10y).pixelate(pxo0x/2,pxo0y/2)
).color(0,1,0),rn()*5)
.layer(shape(4,.5,0).scroll(bi()*.25,bi()*.25,0).repeat(width/2,height/2)
    .mask(noiseloopnx(23,.25,2,4,ns5x,ns5y).thresh(.75,0)
      .pixelate(pxo0x*2,pxo0y*2)
      )
    )
.out()



src(o1)
.modulate(solid()
  .add(shape(4,1,0),2*bipolr)
  .add(noiseloopnx(nsfreq,.025,2,4,ns6x,ns6y).thresh(.05,.1).brightness((1-bipolr)*-.5))
  .add(noiseloopnx(nsfreq,.025,2,4,ns7x,ns7y).thresh(.05,.1).brightness((1-bipolr)*-.5))
  .color(1/width,0/height)
  .mask(noiseloopnx(nsmaskfreq,.1,2,4,ns8x,ns8y).thresh(0,.5))
  .scrollY(0,flspdpx/height).pixelate(1,pxo0y)
  .scrollY(0,-flspdpx/height)
,-unidir*(2-bipolr)*2)
.layer(src(o0).scroll(rn(),rn(),flspedbfrx/width,flspedbfry/height)
  .mask(shape(4,1,0).scale(1,2*(2-bipolr)/width,1,unipos)
    .scrollX(2*(1-bipolr)*unidir/width)
    .mask(noiseloopnx(5,.25,2,4).thresh(btw(-.5,.5),0).pixelate(1,height))
    ))
.out(o1)
}


feedbackbuffer1_debug=()=>{
      solid()

.add(solid()
  .add(noiseloopnx(nsfreq,.25,2,4,ns1x,ns1y)//.pixelate(pxo0x,pxo0y)
    .brightness(1).color(1,0,0)//.color(1/width,0)
    .mask(noiseloopnx(nsmaskfreq,.5,2,4,ns2x,ns2y).thresh(.125,.25))
    ,1)
  .add(noiseloopnx(nsfreq,.25,2,4,ns3x,ns3y)//.pixelate(pxo0x,pxo0y)
    .brightness(1).color(0,1,0)//.color(0,1/height)
    .mask(noiseloopnx(nsmaskfreq,.5,2,4,ns4x,ns4y).thresh(.375,.25))
    ,1)  
  .scrollY(0,flspdpx/height)
  .pixelate(pxo0x*2,pxo0y*2)
  .add(gradient().brightness(-.5).rotate(Math.PI/2).repeat(pxo0x,pxo0y)//.color(1/width,1/height)
    .mask(noiseloopnx(nsfreq/2,.05,2,4,.75,.75).thresh(.875,.025).pixelate(pxo0x,pxo0y)),5)
  .modulate(osc(modosco01,modosco02).brightness(-.5).thresh(0,0).pixelate(pxo0x*2,1).color(0,1)
    .mask(noiseloopnx(13,.5,2,4,.7,.3)),modosco03).scrollY(0,-flspdpx/height)
  ,2)
.modulateScale(noiseloopnx(33,1,2,4,ns10x,ns10y).pixelate(width,1).brightness(-.5).rotate(.25).thresh(.125,0).pixelate(pxo0x,pxo0y)
.mult(noiseloopnx(33,1,2,4,ns10x,ns10y).pixelate(pxo0x/2,pxo0y/2)
).color(0,1,0),5)
.out(o2)


solid()
.add(solid()
  .add(src(o2).r().color(1,0,0)
  .mask(shape(4,1,0).scale(1,1,.125).repeatY(height/16))
  )
  .add(src(o2).g().color(0,1,0)
  .mask(shape(4,1,0).scale(1,.125,1).repeatX(width/16))
  )
  )
.blend(o3,.25)
//.modulate(noiseloop(1000,.01).scale(2,1,1,0,0).color(1/width,0).add(noiseloop(1000,.01).scale(2,1,1,1,1).color(0,1/height)),5)
.out(o3)
render(o3)

src(o3)
.layer(src(o0).luma(.5,0))
.out(o4)
render(o4)
}

feedbackbuffer2_debug=()=>{
  solid()

.add(solid()
  .add(shape(4,1,0),2)
  .add(noiseloopnx(nsfreq,.025,2,4,ns6x,ns6y).thresh(.05,.1).brightness(-.5))
  .add(noiseloopnx(nsfreq,.025,2,4,ns7x,ns7y).thresh(.05,.1).brightness(-.5))
  .mask(noiseloopnx(nsmaskfreq,.1,2,4,ns8x,ns8y).thresh(.025,.25))
.scrollY(0,flspdpx/height).pixelate(1,pxo0y).scrollY(0,-flspdpx/height)
  .diff(solid(1,1,1)).color(1,0,0).r().color(0,0,-1).b().color(0,0,1)
    ,(1-bipolr))

.add(solid()
  .add(shape(4,1,0),2*bipolr)
  .add(noiseloopnx(nsfreq,.025,2,4,ns6x,ns6y).thresh(.05,.1).brightness((1-bipolr)*-.5))
  .add(noiseloopnx(nsfreq,.025,2,4,ns7x,ns7y).thresh(.05,.1).brightness((1-bipolr)*-.5))
  .mask(noiseloopnx(nsmaskfreq,.1,2,4,ns8x,ns8y).thresh(.025,.25))
.scrollY(0,flspdpx/height).pixelate(1,pxo0y).scrollY(0,-flspdpx/height)
  .r().color(1,0,0).r().color(1,0,0))

.out(o2)


solid()
.add(solid()
  .add(src(o2).r().color(1,0,0))
  .add(src(o2).b().color(0,0,1))
  .mask(shape(4,1,0).scale(1,1,.125).repeatY(height/16))
  )
.blend(o3,.25)
.out(o3)
render(o3)

src(o3)
.layer(src(o1).luma(.5,0))
.out(o4)
render(o4)
}


feedbackbuffer2=()=>{
    solid().diff(src(o1)).out(o2)
    render(o2)
}

feedbackbuffer1=()=>{
    solid().diff(src(o0)).out(o2)
    render(o2)
}

let debug = false;
let currentFeedbackBuffer = 2;

document.addEventListener("keyup", (event) => {
  if (event.key === "s") {
    event.preventDefault();
    screencap();
  }

  if (event.key === "b") {
    event.preventDefault();
    // Toggle between feedback buffers 1 and 2
    currentFeedbackBuffer = currentFeedbackBuffer === 1 ? 2 : 1;
    executeFeedbackBuffer();
  }

  if (event.key === "d") {
    event.preventDefault();
    debug = !debug; // Toggle debug mode
    executeFeedbackBuffer(); // Execute the current feedback buffer with the updated debug state
  }

  if (event.key === "v") {
    event.preventDefault();
    variation(); // Apply variation to parameterized values
    executeFeedbackBuffer(); // Re-execute the current feedback buffer to reload parameters
  }
});

function executeFeedbackBuffer() {
  const functionSuffix = debug ? currentFeedbackBuffer + "_debug" : currentFeedbackBuffer;
  window['feedbackbuffer' + functionSuffix]();
}

