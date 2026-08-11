  var t = 0
var y = 400
var b =0

var v = rnd(t,t+600)

var sun = rnd(100,500)


var mot = rnd(0,240)

    var gg = rnd(0,100)


 
    
var cnv;

function centerCanvas() {
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
}

    
    
    
    
    
    
    
    var vv = rnd(0,100)

function setup() {
  cnv = createCanvas(550, 550);
  centerCanvas();
  
   noiseSeed(fxrand() *9999)
  randomSeed(fxrand() *9999)
  
  
  
  
  
  
  
  
  
  
  
}

function draw() {

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  //1
  if(mot<50){
    
    
    
    if(vv<50){
    
     background("#F9F9C5");
  fill("#F2D388")
    
    }
    
    else{
      
      background("#FFD1D1")
      fill("#FA7070")
      
    }
    
    
    
    
  
  noStroke()
  frameRate(1)

  circle(sun,280,300)
  
  
  
  
  noStroke()
  
  var f =rnd(0,110)
  
  for(g= 0 ; g<rnd(4,10) ; g++){
  var x = rnd(100,500)
  
  
  if(f<50){
  fill("#61481C")
  triangle(x,405-100,x+15+70,405-100,x,405-100-15)
  triangle(x,405-100,x+15+70,405-100,x+15+70,405-15-100)
  }
  
  }
  
  
  
  if(f>50&f<100){
   fill("#2C3333")
    
    
    for(o =0 ; o<3 ; o++){
  var xx = rnd(200,width-200)
    
  ellipse(xx,410-100,600,40)
    for(p =0 ; p<20 ; p++){
    ellipse(xx-rnd(-100,100),410-100 ,7,rnd(30,120))
    }
  }
  
  }
  
  
  
  push()
  
    
    
  frameRate(5)
for(i =0 ; i<400;i+=0.08){

if(gg<50){
  stroke(37,109,133,130)
}
  else{
  stroke(6,40,61,130)
  }
  line(rnd(t-200,t-200+600),y+i-100,rnd(t+200,t+200+600),y+i-100)
  
  
}  
  

  
  pop()
fill("#A97155")
    
  }//payan 1
  
  
  
  
  
 
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
   if(mot>50&mot<100){
    background("#1B2430")
    
    
    
    
    
    
  
  fill("#dfdedc")
  noStroke()
  frameRate(60)
  b=b+2
  circle(b+sun,380-100,300)
  
  
  
  
  noStroke()
  
  var f =rnd(0,110)
  
  for(g= 0 ; g<rnd(3,8) ; g++){
  var x = rnd(100,500)
  
  
  if(f<50){
  fill("#5C4033")
  triangle(x,405-100,x+15+70,405-100,x,405-100-15)
  triangle(x,405-100,x+15+70,405-100,x+15+70,405-15-100)
  }
  
  }
  
  
  
  if(f>50&f<100){
   fill("#0C090A")
    
   
  
  }
  
  
  
  push()
  
  frameRate(5)
for(i =0 ; i<400;i+=0.1){


  stroke(73,92,131,180)
  line(rnd(t-100,t-100+600),y+i-100,rnd(t+200,t+200+600),y+i-100)
  
  
}  
  

  
  pop()
fill("#5C4033")
    
  }
  
  
  //payan2
  
  
  
  
  //3;
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  if(mot>100&mot<180){
    
    
    if(vv<50){
    
     background("#F9F9C5");
  fill("#F2D388")
    
    }
    
    else{
      
      background("#FFD1D1")
      fill("#FA7070")
      
    }
  noStroke()
    
  circle(b+sun,180,300)
  
  
  
  
  
for(i =0 ; i<400;i+=0.1){



if(gg<50){
  stroke(95,111,148,130)
}
  else{
  stroke(15,52,96,130)
  }
  line(rnd(t-200,t+600-200),y+i-200,rnd(t+100,t+600+200),y+i-200)
  
 
}

  
  
    
    
    
     for(n =0 ; n<300 ; n++)
{
  fill(0)
  stroke(0)
  strokeWeight(0)
  ellipse(0+50*n,600,rnd(100,380),150)
  
  
  
}  
    
  
   
     let shoro = [500, 550];
  let tool = bein(50, 130);
  let weight = bein(10, 25);
  strokeWeight(weight);
  stroke(0);
  let zavieh = PI / 2;
 shakhe(shoro, weight, tool,zavieh);
  noLoop();
}

function shakhe(shoro, weight, tool, zav) {
  // 𝑥1=𝑥+𝑛cos𝜃
  // 𝑦1=𝑦+𝑛sin𝜃
  let x1 = shoro[0] + tool * cos(angle);
  let y1 = shoro[1] - tool * sin(angle);
  let endpoint = [x1, y1];

  strokeWeight(weight);
  line(shoro[0], shoro[1], endpoint[0], endpoint[1]);

  let MM = angle + (PI / 4);
  let NN = angle - PI / 4;
  let tafa = bein(0, MM - NN - (PI / 16));
  let angle1 = MM - tafa / 2;
  let angle2 = NN + tafa / 2;
  let jad = bein(weight * 0.6, weight * 0.8);
  let jadtool = bein(tool * 0.7, tool * 0.9);

  if (jadtool < 3) {
    return;
  }

 shakhe(endpoint, jad, jadtool, angle1);
 shakhe(endpoint, jad, jadtool, angle2);
}
    
    
  
  
  
  
  
  
  
  
   if(mot>0&mot<180){
     let shoro = [rnd(0,300),545];
  let tool = bein(70, 100);
  let weight = bein(15, 20);
  strokeWeight(weight);
  stroke(0);
  let zavieh = PI / 2;
 shakhe(shoro, weight, tool,zavieh);
  noLoop();
}

function shakhe(shoro, weight, tool, angle) {
  // 𝑥1=𝑥+𝑛cos𝜃
  // 𝑦1=𝑦+𝑛sin𝜃
  let x1 = shoro[0] + tool * cos(angle);
  let y1 = shoro[1] - tool * sin(angle);
  let endpoint = [x1, y1];

  strokeWeight(weight);
  line(shoro[0], shoro[1], endpoint[0], endpoint[1]);

  let MM = angle + (PI / 6);
  let NN = angle - PI / 6;
  let tafa = bein(0, MM - NN - (PI / 8));
  let angle1 = MM - tafa / 2;
  let angle2 = NN + tafa / 2;
  let jad = bein(weight * 0.6, weight * 0.8);
  let jadtool = bein(tool * 0.7, tool * 0.9);

  if (jadtool < 3) {
    return;
  }

 shakhe(endpoint, jad, jadtool, angle1);
 shakhe(endpoint, jad, jadtool, angle2);

}
  
  
 
  
 if(mot>180&mot<210){
   
   
   
   
   
   
   
   
   
   
   
   
   
   
 }
   
   
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  var dd =rnd(0,100)
  
  
   if(mot>180&mot<220){
     
     if(dd<80){
     background(0)
       fill(100)
       circle(rnd(0,600),rnd(0,200),250)
      stroke(255) 
      
     }
     
     else{
     background(255)
       strokeWeight(0)
     fill(100)
      circle(rnd(0,600),rnd(0,200),200)
     }
       
     
     for(cc =0 ; cc<rnd(1,4);cc++){
     
     
       
     let shoro = [rnd(0,600),553];
  let tool = bein(80, 100);
  let weight = bein(14, 16);
  strokeWeight(weight);
  
  let zavieh = PI / 2;
 shakhe(shoro, weight, tool,zavieh);
  noLoop();
}

function shakhe(shoro, weight, tool, angle) {
  // 𝑥1=𝑥+𝑛cos𝜃
  // 𝑦1=𝑦+𝑛sin𝜃
  let x1 = shoro[0] + tool * cos(angle);
  let y1 = shoro[1] - tool * sin(angle);
  let endpoint = [x1, y1];

  strokeWeight(weight);
  line(shoro[0], shoro[1], endpoint[0], endpoint[1]);

  let MM = angle + (PI / 8);
  let NN = angle - PI / 8;
  let tafa = bein(0, MM - NN - (PI / 16));
  let angle1 = MM - tafa / 2;
  let angle2 = NN + tafa / 2;
  let jad = bein(weight * 0.6, weight * 0.8);
  let jadtool = bein(tool * 0.7, tool * 0.9);

  if (jadtool < 3) {
    return;
  }

 shakhe(endpoint, jad, jadtool, angle1);
 shakhe(endpoint, jad, jadtool, angle2);

}
  
   }
   
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
   if(mot>210&mot<240){
     
     if(dd<80){
     background(0)
      stroke(100) 
       fill(255)
       circle(rnd(0,600),rnd(0,200),250)
      
     }
     
     else{
     background(255)
       strokeWeight(0)
     fill(100)
      circle(rnd(0,600),rnd(0,200),200)
     }
       
     
     for(cc =0 ; cc<rnd(1,4);cc++){
     
     
       
     let shoro = [rnd(0,600),553];
  let tool = bein(80, 100);
  let weight = bein(14, 16);
  strokeWeight(weight);
  
  let zavieh = PI / 2;
 shakhe(shoro, weight, tool,zavieh);
  noLoop();
}

function shakhe(shoro, weight, tool, angle) {
  // 𝑥1=𝑥+𝑛cos𝜃
  // 𝑦1=𝑦+𝑛sin𝜃
  let x1 = shoro[0] + tool * cos(angle);
  let y1 = shoro[1] - tool * sin(angle);
  let endpoint = [x1, y1];

  strokeWeight(weight);
  line(shoro[0], shoro[1], endpoint[0], endpoint[1]);

  let MM = angle + (PI /8);
  let NN = angle - PI / 8
;
  let tafa = bein(0, MM - NN - (PI / 10));
  let angle1 = MM - tafa / 2;
  let angle2 = NN + tafa / 2;
  let jad = bein(weight * 0.6, weight * 0.8);
  let jadtool = bein(tool * 0.7, tool * 0.9);

  if (jadtool < 3) {
    return;
  }

 shakhe(endpoint, jad, jadtool, angle1);
 shakhe(endpoint, jad, jadtool, angle2);


  
  
  
  
  
  
     
 

}
  
  
  
  
  
  
  
  
  
  
  
  
  
  
   }
   
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  noLoop()
  
   
 } 
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  

function rnd(min,max){
  return fxrand()*(max-min) + min;
}

function bein(low, high) {
  return random(high - low) + low;
}