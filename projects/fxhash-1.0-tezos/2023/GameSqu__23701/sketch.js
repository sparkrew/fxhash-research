let ang 

let pal = ["#795548", "#a7dbd8", "#e0e4cc", "#f38630", "#fa6900","#fe4365", "#fc9d9a", "#f9cdad", "#c8c8a9", "#83af9b","#ecd078", "#d95b43", "#c02942", "#542437", "#53777a",
"#556270", "#9C27B0", "#c7f464", "#ff6b6b", "#c44d58","#774f38", "#e08e79", "#f1d4af", "#ece5ce", "#c5e0dc","#e8ddcb", "#cdb380", "#036564", "#033649", "#031634","#490a3d", "#bd1550", "#e97f02", "#f8ca00", "#8a9b0f"]
function setup(){
  createCanvas(windowWidth,windowHeight)
  ang = 0
  colorMode(random(pal))
  Math.random = fxrand;
  randomSeed(fxrand()*999999);
  noiseSeed(fxrand()*999999);

}


function draw(){
  noStroke()
  translate(width/2, height/2)
  rotate(frameCount*0.2)
  translate(frameCount, 0)
  if(frameCount%5 <= 3){
    fill((ang * 100 )%120+random(-50,50), 90,90)
  }else{
    fill(100*sin(ang),30+random(-30,30),30)
  }
  scale(1/log(frameCount)*8*sin(ang))
  rect(0,0,50,50)
  ang ++
  
  
}