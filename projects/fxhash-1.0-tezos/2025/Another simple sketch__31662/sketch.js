pal=[
  ['rgb(14,91,14)','rgb(142,169,142)','rgb(67,135,67)','rgb(91,118,91)','rgb(119,165,119)','rgb(79,181,79)','#8BC34A','#648A37','#6C834F'],
   ['rgb(14,91,14)','rgb(142,169,142)','rgb(67,135,67)','rgb(91,118,91)','rgb(119,165,119)','rgb(79,181,79)','#8BC34A','#648A37','#6C834F'],
  ['orange','blue','purple'],
  ['black','#2A4451','rgb(100,13,13)'],
  ['darkgrey','#B17A43','rgb(209,177,6)'],
  
  ['green','red','rgb(156,156,207)'],
  ['rgb(6,161,212)','rgb(13,0,0)','blue','#027584','rgb(2,42,106)']
]


function setup() {
  createCanvas(1000, 1200);
  
  seed = floor($fx.rand() * 123456789)
           randomSeed(seed)
          noiseSeed(seed)
  
  pixelDensity(1)
  rectMode(CENTER);
  angleMode(DEGREES);
  
 // background('#CFCABA');
 //background('#EFECCF');
  
  colbg=random(['#F4ECD5'])
  background(colbg)
  
  colstr=random(['darkred','darkgreen','#265A83',0])
  t=random(5,15)
  iikf=random([15,25,35,45,55,65])
  
  cc=random(pal)
  
  col=random(cc)
  
 // col=colstr
  
  
  //col=0
  
  x=random([150,200,250,300,350,400,450,500,550,600,650,750,700,800])
  y=200
  dg=90
  pp=100
  xkf=1
  
  
  pppp=7
  
  px=0
  py=0
  pyy=0
  for(py=0; py<1200; py+=12.5){
    //pyy=0
  for(px=0; px<1000; px+=1){
  //  pyy=pyy+random(-1,1)
  stroke(colstr)
    strokeWeight(0.25)
  //  line(px,py, px,py-random(-12.5))
  strokeWeight(random(1,3))
  point(px,py+pyy)  
  }
  }
  
  
  
}

function draw() {
  pp=random(50,150)
   t=random([5,15])
  
  for(ii=0; ii<iikf; ii++){
  push();
  translate(x,y);
  rotate(dg);
  
    stroke(colbg);
    strokeWeight(3)
    line(0,0,0,pp+t)
  for(i=0; i<100; i++){
  stroke(col);
  strokeWeight(random(3))
  point(0,0+random(pp));}
  
  pop();
 
  dg+=random(1)
  
  x+=xkf}
  
  if(dg>=260){
    iikf=random([15,20,5,10,25,30,35,40,45,50,65])
 col=random(cc)
    
    //col=colstr
    
  //  col=col+4
    
    dg=random([90,95,100])
    x=random([-50,-100,-150,0,50,100,150,200,250,300,350,400,450,500,550,600,650,750,700,800])
    y=y+25
    //xkf=1
  }
  //noLoop();
  
  
  if(y>=1250){
    
    
    noLoop();
    
    
    
    noFill();
    strokeWeight(300);
    stroke(colbg);
    rect(500,600,1000,1200,0)
    
    loadPixels();
    for (g = 0; g < window.innerHeight*4; g++) {
      for (f = 0; f < width; f++) {
        var rgbs = (f + g * width) * pppp;
        pixels[rgbs + 0] = pixels[rgbs + 0] - random(30);
        pixels[rgbs + 1] = pixels[rgbs + 1] - random(30);
        pixels[rgbs + 2] = pixels[rgbs + 2] - random(30);
        pixels[rgbs + 3] = pixels[rgbs + 3] - random(30);
      }
    }
      updatePixels();
  }
}

function keyTyped() {
        if (key === 's') {
        saveCanvas('another simple sketch', 'png');
        }
        }