var ill = rnd(0,120)
var myFont;
function preload (){
  myFont=loadFont('Liquearth Regular.ttf')
}
function setup() {
  
  createCanvas(620, 650);
  randomSeed(fxrand()*999)
   s = new Scribble();
}

function draw() {
  
  var p = rnd(0,100)
  if(p>0 & p<20){
  var b = "#F2DEBA"
  }
  if(p>20 & p<40){
  var b = "#FFFBAC"
  }
    if(p>40 & p<60){
  var b = "#D7E9B9"
  }
   if(p>60 & p<80){
  var b = "#FFD4B2"
  }
   if(p>80 & p<100){
  var b = "#EFF5F5"
  }
  
  
  
  
  
  
  background(b);
  strokeCap(ROUND)
  strokeWeight(10)
  

 textFont(myFont)
  // variation1
  if(rnd(0,100)<50){
  stroke("#10A19D")
  }
  else{
    stroke("#001253")
  }
  
  
  for(i=0 ; i<560;i=i+80){
  
var y=rnd(40,120)
   s.scribbleLine(30+rnd(0,30)+i,30+rnd(-6,10),60+i,y)
   s.scribbleLine(60+i,y,30+rnd(0,30)+i,130-rnd(-6,10))
  
   s.scribbleLine(100-rnd(5,20)+i,30+rnd(-6,10),70+i,y)
   s.scribbleLine(70+i,y,100-rnd(5,20)+i,130-rnd(0-6,10))
  
  point(65+i,y)
  
    
    
  }
  stroke(0)
  strokeWeight(1)
  fill(0)
  textSize(15);
text("1", 65-10, 155);
  text("2", 65-10+80, 155);
   text("3", 65-10+80+80, 155);
  text("4", 65-10+80+80+160+80, 155);
  
    text("5", 65-10+80+80+160+80+80, 155);
  
  strokeWeight(0)
  fill(b)
  rect(265,10,160,140)
  
  //variation2
  var r= rnd(0,100)
  for(h= 0 ; h<560;h=h+80){
  strokeWeight(7)
  var yt=rnd(180,230)
  if(r<50){
  stroke("#820000")
  }
    else{
      stroke("#FF1E1E")
    }
    s.scribbleLine(30+rnd(0,30)+h,170+rnd(-6,10),60+h,yt)
   s.scribbleLine(60+h,yt,30+rnd(0,30)+h,250-rnd(-6,10))
  
   s.scribbleLine(100-rnd(5,20)+h,170+rnd(-6,10),70+h,yt)
   s.scribbleLine(70+h,yt,100-rnd(5,20)+h,250-rnd(0-6,10))
  
  strokeWeight(5)
  fill(0)
    ellipse(65+h,yt,5,2)
     textSize(15);
    strokeWeight(1)
    stroke(0)
text(h/80+6, 65+h-10, 275);
  }
  
  //variation3
  var z= rnd(0,100)
  for(k=0 ; k<560 ; k=k+80){
  strokeWeight(5)
    if(z<50){
    stroke("#224B0C")
    }
    else{
      stroke("#FF0063")
    }
  var ytt=rnd(300,330)
    s.scribbleLine(30+rnd(0,30)+k,290+rnd(-6,6),60+k,ytt)
   s.scribbleLine(60+k,ytt,30+rnd(0,30)+k,340-rnd(-6,6))
  
     s.scribbleLine(100-rnd(5,20)+k,290+rnd(-6,6),70+k,ytt)
   s.scribbleLine(70+k,ytt,100-rnd(5,20)+k,340-rnd(0-6,6))
  
  strokeWeight(4)
   ellipse(65+k,ytt,10,2)
  }
    
  strokeWeight(0)
  fill(b)
  rect(265,277,80,140)
  
  fill(0)
  stroke(0)
  strokeWeight(1)
  
   textSize(15);
text("13", 65-10, 365);
  text("14", 65-10+80, 365);
   text("15", 65-10+80+80, 365);
  text("16", 65-10+80+80+160, 365);
  
    text("17", 65-10+80+80+160+80, 365);
   text("18", 65-10+80+80+160+80+80, 365);
  
    
  
  // variation4
  var a = rnd(0,100)
  for(l = 0 ; l<400 ; l=l+80){
   var yttt=rnd(385,415)
   strokeWeight(5)
    if(a<50){
      
    stroke("#FF6D28")
    }
    else{
      stroke("#C70A80")
    }
      s.scribbleLine(30+rnd(0,30)+l,380+rnd(-6,3),60+l,yttt)
   s.scribbleLine(60+l,yttt,30+rnd(0,30)+l,420-rnd(-6,3))
  
     s.scribbleLine(100-rnd(5,20)+l,380+rnd(-6,6),70+l,yttt)
   s.scribbleLine(70+l,yttt,100-rnd(5,20)+l,420-rnd(0-6,3))
  
   ellipse(65+l,yttt,12,1)
    
     strokeWeight(0)
    stroke(0)
  fill(b)
  rect(265-80,370,80,140)
  
  }
    
    
   fill(0)
  stroke(0)
  strokeWeight(1)
   textSize(15);
text("19", 65-10, 440);
  text("20", 65-10+80, 440);
   text("21", 65-10+80+80+80, 440);
  text("22", 65-10+80+80+160, 440);
  
  strokeWeight(5)
  fill(0)
   textSize(15);
  fill(255)

  var yttt = rnd(390,450)
    var l = 400
    stroke(0)
    s.scribbleLine(45+rnd(0,30)+l,380+rnd(-6,3),60+l,yttt)
   s.scribbleLine(60+l,yttt,45+rnd(0,30)+l,460-rnd(-6,3))
   textSize(15);
  fill(0)
    stroke(b)
  text("X", 65-10+80+80+160+80, 490);
  if(ill>0&ill<20){
    // male
  yttt=rnd(405+15,415+15)
    stroke(0)
     s.scribbleLine(85+20-rnd(5,20)+l,400+rnd(-6,6)+15,70+l+20,yttt+15)
   s.scribbleLine(70+l+20,yttt+15,85-rnd(5,20)+l+20,420-rnd(0-6,3)+35)
     textSize(15);
  fill(0)
    noStroke()
   text("Y", 65-10+80+80+160+80+30, 490);
  }
  
 if(ill>20&ill<40){ 
  // female
    var yttt = rnd(390,450)
    var l = 400
    stroke(0)
    s.scribbleLine(85+rnd(0,30)+l,380+rnd(-6,3),40+60+l,yttt)
   s.scribbleLine(60+l+40,yttt,45+rnd(0,30)+l+40,460-rnd(-6,3))
    textSize(15);
    noStroke()
   
  fill(0)
  text("X", 65-10+80+80+160+80+40, 490);
 }
   
  if(ill>40&ill<60){ 
  // klinefelter
    var yttt = rnd(390,450)
    var l = 400
    stroke(0)
    s.scribbleLine(85+rnd(0,30)+l,380+rnd(-6,3),40+60+l,yttt)
   s.scribbleLine(60+l+40,yttt,45+rnd(0,30)+l+40,460-rnd(-6,3))
     textSize(15);
    noStroke()
  fill(0)
  text("X", 65-10+80+80+160+80+40, 490);
    yttt=rnd(405+15,415+15)
    stroke(0)
     s.scribbleLine(85+20+30-rnd(5,20)+l,400+rnd(-6,6)+15,70+l+20+30,yttt+15)
   s.scribbleLine(70+l+20+30,yttt+15,85+30-rnd(5,20)+l+20,420-rnd(0-6,3)+35)
     textSize(15);
  fill(0)
    noStroke()

    text("Y", 65-10+80+80+160+80+30+30, 490);
    
 }
    
  
  
  
  if(ill>60&ill<80){ 
  //supermale
    var yttt = rnd(390,450)
    var l = 400
 yttt=rnd(405+15,415+15)
    stroke(0)
     s.scribbleLine(85+20-rnd(5,20)+l,400+rnd(-6,6)+15,70+l+20,yttt+15)
   s.scribbleLine(70+l+20,yttt+15,85-rnd(5,20)+l+20,420-rnd(0-6,3)+35)
     textSize(15);
  fill(0)
    noStroke()
    
   text("Y", 65-10+80+80+160+80+30, 490);
    yttt=rnd(405+15,415+15)
    stroke(0)
     s.scribbleLine(85+20+30-rnd(5,20)+l,400+rnd(-6,6)+15,70+l+20+30,yttt+15)
   s.scribbleLine(70+l+20+30,yttt+15,85+30-rnd(5,20)+l+20,420-rnd(0-6,3)+35)
     textSize(15);
  fill(0)
    noStroke()
    
   text("Y", 65-10+80+80+160+80+30+30, 490);
    
 }
   
   
   
   
  
   if(ill>80&ill<100){ 
  //superfemale
    var yttt = rnd(390,450)
    var l = 400
    stroke(0)
    s.scribbleLine(85+rnd(0,30)+l,380+rnd(-6,3),40+60+l,yttt)
   s.scribbleLine(60+l+40,yttt,45+rnd(0,30)+l+40,460-rnd(-6,3))
      textSize(15);
    noStroke()
  
     fill(0)
  text("X", 65-10+80+80+160+80+40, 490);
     stroke(0)
      s.scribbleLine(85+30+rnd(0,30)+l,380+rnd(-6,3),30+40+60+l,yttt)
   s.scribbleLine(60+l+40+30,yttt,45+rnd(0,30)+l+40+30,460-rnd(-6,3))
      textSize(15);
  
    noStroke()
     fill(0)
  text("X", 65-10+80+80+160+80+40+30, 490);
    
 }
  
  // turner syndrome
  
  
  if(ill>100&ill<120){ 
  
    
    
    
    
  }
  
  
  
  
  
  
  
textSize(30)
  fill(0)
   text("Situation:", 50, 545);
  fill(255)
  stroke(0)
  strokeWeight(2)
  rect(180,510,220,50)
  stroke(b)
  if(ill>0&ill<20){
  fill(0)
  text("male", 215, 545);
  }
  if(ill>20&ill<40){
  fill(0)
  text("female", 215, 545);
  }
  if(ill>40&ill<60){
  fill(0)
  text("Klinefelter", 215, 545);
  }
    if(ill>60&ill<80){
  fill(0)
  text("super-male", 215, 545);
  }
  
   if(ill>80&ill<100){
  fill(0)
  text("super-female", 215, 545);
  }
  
   if(ill>100&ill<120){
  fill(0)
     textSize(25)
  text("Turner-syndrome", 190, 545);
  }
  
  
  
  
  
  
  
  
  
  
   
   
   fxpreview()
   
   
  noLoop()
}


function rnd(min,max){
  return fxrand()*(max-min) + min;
}
