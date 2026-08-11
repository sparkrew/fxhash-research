
//hecho por @aster1ai
//con la ayudita de @lilcode_
//en hydra videosynth




//helper functions for parametrizing
function rn(x=1) {return fxrand()*x;}
function btw(min, max) {return rn() * (max - min) + min;};
function intgr(min, max) {min = Math.ceil(min);max = Math.floor(max);return Math.floor(rn() * (max - min + 1)) + min;};
function chc(x){return x[Math.floor(btw(0, x.length * 0.99))];};
function bi(x=.5) {return rn()>x?1:-1};
function dbl(x=.5) {return rn()>x?1:2};
function hlf(x=.5) {return rn()>x?1:.5};
function bl(x=.5) {return rn()>x?1:0};


poto=rn()
fps=60
speed=.5
//setResolution(window.innerWidth/1,window.innerHeight/1)
if (poto<.25)
 {
shape(intgr(2,7),0.5,0.3)
.modulateScrollY(osc(btw(2,5),0.5*bi()).modulate(osc(btw(2,5),0.01*bi())))
.modulateScrollY(osc(btw(2,5),0.4*bi()).repeat(intgr(5,25)).scrollY(0,1*bi()).rotate(0,0.5*bi()).mult(osc(btw(2,4)).blend(src(o0))))
.mult(src(o0).rotate(Math.PI/350*bi()).scrollX(0.001*bi()).scale(()=>1+Math.abs(Math.sin(time/7)*0.015)).luma(btw(.1,.9),btw(0,.1)).invert())
//.modulatePixelate(src(o0).luma(0.4),intgr(9,width/4),intgr(3,16))
//.modulateScale(osc(2,0.1*bi(),0.2))
//.modulateScale(noise(4,0.1*bi()).scale(4,1,1,rn(),rn()).scale(1.5))
.add(shape(200,0.01,0.6).mult(osc(.2,0.2*bi(),btw(1,3))).repeat(intgr(1,2),intgr(1,4)).modulate(noise(4,0.1*bi()).scale(4,1,1,rn(),rn())).scale(2))
  .out()
}

else if (poto<.5)
 {
shape(intgr(2,7),0.5,0.3)
.modulateScrollY(osc(btw(2,5),0.5*bi()).modulate(osc(btw(2,5),0.01*bi())))
.modulateScrollY(osc(btw(2,5),0.4*bi()).repeat(intgr(5,25)).scrollY(0,1*bi()).rotate(0,0.5*bi()).mult(osc(btw(2,4)).blend(src(o0))))
.mult(src(o0).rotate(Math.PI/350*bi()).scrollX(0.001*bi()).scale(()=>1+Math.abs(Math.sin(time/7)*0.015)).luma(btw(.1,.9),btw(0,.1)).invert())
.modulatePixelate(src(o0).luma(0.4),intgr(9,width/4),intgr(3,16))
//.modulateScale(osc(2,0.1*bi(),0.2))
//.modulateScale(noise(4,0.1*bi()).scale(4,1,1,rn(),rn()).scale(1.5))
.add(shape(200,0.01,0.6).mult(osc(.2,0.2*bi(),btw(1,3))).repeat(intgr(1,2),intgr(1,4)).modulate(noise(4,0.1*bi()).scale(4,1,1,rn(),rn())).scale(2))
  .out()
 }

else if (poto<.75)
 {
shape(intgr(2,7),0.5,0.3)
.modulateScrollY(osc(btw(2,5),0.5*bi()).modulate(osc(btw(2,5),0.01*bi())))
.modulateScrollY(osc(btw(2,5),0.4*bi()).repeat(intgr(5,25)).scrollY(0,1*bi()).rotate(0,0.5*bi()).mult(osc(btw(2,4)).blend(src(o0))))
.mult(src(o0).rotate(Math.PI/350*bi()).scrollX(0.001*bi()).scale(()=>1+Math.abs(Math.sin(time/7)*0.015)).luma(btw(.1,.9),btw(0,.1)).invert())
//.modulatePixelate(src(o0).luma(0.4),intgr(9,width/4),intgr(3,16))
.modulateScale(osc(2,0.1*bi(),0.2))
//.modulateScale(noise(4,0.1*bi()).scale(4,1,1,rn(),rn()).scale(1.5))
.add(shape(200,0.01,0.6).mult(osc(.2,0.2*bi(),btw(1,3))).repeat(intgr(1,2),intgr(1,4)).modulate(noise(4,0.1*bi()).scale(4,1,1,rn(),rn())).scale(2))
  .out()
 }


else
 {
shape(intgr(2,7),0.5,0.3)
.modulateScrollY(osc(btw(2,5),0.5*bi()).modulate(osc(btw(2,5),0.01*bi())))
.modulateScrollY(osc(btw(2,5),0.4*bi()).repeat(intgr(5,25)).scrollY(0,1*bi()).rotate(0,0.5*bi()).mult(osc(btw(2,4)).blend(src(o0))))
.mult(src(o0).rotate(Math.PI/350*bi()).scrollX(0.001*bi()).scale(()=>1+Math.abs(Math.sin(time/7)*0.015)).luma(btw(.1,.9),btw(0,.1)).invert())
//.modulatePixelate(src(o0).luma(0.4),intgr(9,width/4),intgr(3,16))
//.modulateScale(osc(2,0.1*bi(),0.2))
.modulateScale(noise(4,0.1*bi()).scale(4,1,1,rn(),rn()).scale(1.5))
.add(shape(200,0.01,0.6).mult(osc(.2,0.2*bi(),btw(1,3))).repeat(intgr(1,2),intgr(1,4)).modulate(noise(4,0.1*bi()).scale(4,1,1,rn(),rn())).scale(2))
  .out()
 }

 
src(o0).scale(btw(1,4),1,1,rn(),rn())
.mask(src(o0).scale(8,1,1,rn(),rn()))
.out(o1)
render(o1)

document.addEventListener("keyup", (event) => {
  if (event.key === "s" || event.key === "S") {
    event.preventDefault();
    screencap();}
})
