let seed = 0; 

var angle = 1;
var offset = 500;
var scalar = 10;
var speedx = 0.5;
var qq = 1;
var kk = 1;

var angle2 = 1;
var offset2 = 500;
var scalar2 = 10;
var speedx2 = 0.5;
var qq2 = 1;
var kk2 = 1;
var circ = 1;



var colorss = {
  r: 255,
  g: 0,
  b: 0
};

let table;


function preload() {
  table = loadTable("color.csv", "csv", "header");
}

function setup() { 
seed = int(fxrand() * 999999);
randomSeed(seed); 

  createCanvas(1200, 1200);
  noStroke();
  background (random(210,255),random(230,230),random(210,255));
  circ = random(300, 950);
 
  qq = qq*random(-360,360)
  qq2 = qq2*random(-360,360)
  kk2 = kk2*random(-900,900)
  kk = kk*random(-1300,1200)
  //speedx2 = speedx2+random(0.1,0.2)
 // baris = baris*(random(1,676))
 // col = col*(random(1,15)) 
  
let baris = floor(random(676));

let col = floor(random(5));

 colorss.r = table.get(baris, col * 3);
 colorss.g = table.get(baris, col * 3 + 1);
 colorss.b = table.get(baris, col * 3 + 2);
} 

function draw() { 
randomSeed(seed);
noiseSeed(seed);

  //fill(250, 230,230);
strokeWeight(circ);
stroke(250, 230,230);
noFill();
  ellipse(width/2,height/2, 1500, 1500);
  
/*   ellipse(width/2,height/2, circ+50, circ+50);

  //ellipse(width/2,height/2, circ+90, circ+90);
  
  ellipse(width/2,height/2, circ+140, circ+140);
  
  //ellipse(width/2,height/2, circ+190, circ+190);
  
  ellipse(width/2,height/2, circ+240, circ+240);
  
  //ellipse(width/2,height/2, circ+290, circ+290);

  ellipse(width/2,height/2, circ+360, circ+360);
  
  //ellipse(width/2,height/2, circ+390, circ+390);
  
  ellipse(width/2,height/2, circ+430, circ+430);
  
  //ellipse(width/2,height/2, circ+470, circ+470);
  
  ellipse(width/2,height/2, circ+510, circ+510);
  //ellipse(width/2,height/2, circ+550, circ+550);
  ellipse(width/2,height/2, circ+590, circ+590);
  //ellipse(width/2,height/2, circ+630, circ+630);
  ellipse(width/2,height/2, circ+670, circ+670);
    ellipse(width/2,height/2, circ+1000, circ+1000);
    ellipse(width/2,height/2, circ+760, circ+760); */
	
 /*  fill(250, 230,230);
  
  
  rect(0,0,220,220);
  rect(1000,0,200,200);
  rect(0,1000,200,200);
  rect(1000,1000,200,200); */
  
//filter(BLUR,0.6)  
   /////test
 
       
     

 



  
  colorss.r = random(1, 255);
  colorss.g = random(1, 180);
  colorss.b = random(1, 190);

  var x = (offset2+kk2) + cos(angle2*qq2) * scalar2;
  var y = (offset2+kk2) + sin(angle2*qq2) * scalar2;
  fill(colorss.r, colorss.g, colorss.b, 95);
  noStroke();
  rect(x, y, random(5,10), random(5,12));
  angle2 += speedx2;
  scalar2 += speedx2;

  
  
  colorss.r = random(1, 255);
  colorss.g = random(1, 250);
  colorss.b = random(1, 250);
 
  var x = (offset2+kk) + cos(angle*qq) * scalar;
  var y = (offset2+kk) + sin(angle*qq) * scalar;
  fill(colorss.r, colorss.g, colorss.b, 105);
  noStroke();
  ellipse(x, y, random(3,10), random(3,12));
  angle += speedx;
  scalar2 += speedx2;
  
  
  colorss.r = random(1, 255);
  colorss.g = random(1, 180);
  colorss.b = random(1, 190);


  var x = (offset2+kk2) + cos(angle2*qq2) * scalar2;
  var y = (offset2+kk2) + sin(angle2*qq2) * scalar2;
  fill(colorss.r, colorss.g, colorss.b, 85);
  noStroke();
  rect(x, y, random(2,9), random(2,9));
  angle2 += speedx2;
  scalar2 += speedx2;
  
  colorss.r = random(1, 255);
  colorss.g = random(1, 250);
  colorss.b = random(1, 250);
 

  var x = (offset2+kk) + cos(angle*qq) * scalar;
  var y = (offset2+kk) + sin(angle*qq) * scalar;
  fill(colorss.r, colorss.g, colorss.b, 95);
  noStroke();
  rect(x, y, random(5,10), 10);
  angle += speedx;
  scalar += speedx;
  
  colorss.r = random(1, 255);
  colorss.g = random(1, 250);
  colorss.b = random(1, 250);
  
  var x = (offset2+kk2) + cos(angle2*qq2) * scalar2;
  var y = (offset2+kk2) + sin(angle2*qq2) * scalar2;
  fill(colorss.r, colorss.g, colorss.b, 85);
  noStroke();
  rect(x, y, random(9,16), 15);
  angle2 += speedx2;
  scalar2 += speedx2;
  

  i = 0;
  while (i != 1) 
    {
      if ((isFxpreview = true)) {fxpreview(); i = 1;}
    }
    
}