// Auxiliar Functions 
function rnd_btw(min, max) {return fxrand() * (max - min) + min}
function rnd_btwexp(min, max) {return fxrand() ** 2 * (max - min) + min}
function rnd_int(min, max) {min = Math.ceil(min);max = Math.floor(max);return Math.floor(fxrand() * (max - min + 1)) + min}

// Gradients | CREATIVEGURU97
// https://github.com/Creativeguru97/YouTube_tutorial/tree/master/p5_hacks/Gradient_effect
function Lgradient (){
 let gradient = drawingContext.createLinearGradient(x1,y1,x2,y2);
  gradient.addColorStop(0,color(cor[cor1])); 
  gradient.addColorStop(0.35,color(cor[cor2])); 
  gradient.addColorStop(0.7,color(cor[cor3])); 
  gradient.addColorStop(1,color(cor[cor4])); 
  drawingContext.fillStyle = gradient; 
}
