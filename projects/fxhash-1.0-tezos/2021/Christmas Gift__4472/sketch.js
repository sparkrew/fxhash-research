
//random function helpers
// fxrand() gives u a value between 0 and 1
// rnd_btw(a,b) gives u a value between a and b
// rnd_btwexp(a,b) gives u a value between a and b, but with an exponential slope (more probable to get the borders than the center)
// rnd_int(a,b) gives u an integer value between a and b
console.log(fxrand())



colorbck = ["#cdb4db","#ff8800", "#125969", "#fae1dd", "#80b918"]


colorSergio =["#124e78","#b0b030","#f2bb05","#d74e09","#6e0e0a"]

colorPink = ["#d7c0d0","#f7c7db","#f79ad3","#c86fc9","#8e518d"]

colorVivo = ["#fc440f","#1effbc","#7c9299","#1f01b9","#b4e33d"]

ColorBlueCoffe = ["#3c3744","#090c9b","#3d52d5","#b4c5e4","#fbfff1"]

ColorVioleta = ["#4c5b5c","#ff715b","#f9cb40","#bced09","#2f52e0"]

ColorReds = ["#660708","#ba181b","#e5383b","#d3d3d3","#f5f3f4"]

ColorRnbw = ["#e6c229","#f17105","#d11149","#6610f2","#1a8fe3"]

ColorEst = ["#586ba4","#324376","#f5dd90","#f68e5f","#f76c5e"]

ColorMagna = ["#3c1642","#086375","#1dd3b0","#affc41","#b2ff9e"]


OpcoesCor = [colorSergio, colorPink, colorVivo, ColorBlueCoffe, ColorVioleta, ColorReds, ColorRnbw, ColorEst, ColorMagna]

NPaleta = parseInt(rnd_btw(0,9))


function setup(){
  
   
  corbacgrnd = rnd_int(0, 4)
  
  plaetabkg = colorbck[corbacgrnd]
  
  Paleta = OpcoesCor[NPaleta];
  
  corbgk = Paleta[rnd_int(0,4)];
  
  
  createCanvas(800, 800);
fullscreen();
background(color(plaetabkg));
textSize(50);
textAlign(CENTER,CENTER);
	

}


function draw() {

text("🎁 ", rnd_int(0,width),rnd_int(0,height));
text("🎅", rnd_int(0,width),rnd_int(0,height));
text("🎄 ", rnd_int(0,width),rnd_int(0,height));
}




