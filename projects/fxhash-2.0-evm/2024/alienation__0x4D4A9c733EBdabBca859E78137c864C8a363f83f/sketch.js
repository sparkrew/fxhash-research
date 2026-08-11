TV=[['#46211A','#693D3D','#BA5536','#A43820'],
['#8D230F','#1E434C','#9B4F0F','#C99E10'],
['#2E2300','#6E6702','#C05805','#DB9501'],
['#AF4425','#662E1C','#EBDCB2','#C9A66B'],
['#FEF2E4','#FD974F','#C60000','#805A3B'],
['#7F152E','#D61800','#EDAE01','#E94F08'],
['#301B28','#523634','#B6452C','#DDC5A2'],

['#1E0000','#500805','#9D331F','#BC6D4F'],

['#42313A','#6C2D2C','#9F4636','#F1DCC9'],
['#444C5C','#CE5A57','#78A5A3','#E1B16A'],
['#003B46','#07575B','#66A5AD','#C4DFE6'],
['#04202C','#3040404','#5B7065','#C9D1C8'],
['#004D47','#128277','#52958B','#B9C4C9'],
['#2C4A52','#537072','#8E9B97','#F4EBDB'],
['#FFCCBB','#6EB5C0','#006C84','#E2E8E4'],
['#F1F1F2','#BCBABE','#A1D6E2','#1995AD'],
['#505160','#68829E','#AEBD38','#598234'],
['#2E4600','#486B00','#A2C523','#7D4427'],
['#0F1B07','#FFFFFF','#5C821A','#C6D166'],
['#021C1E','#004445','#2C7873','#6FB98F'],
['#324851','#86AC41','#34675C','#7DA3A1'],

['#265C00','#68A225','#B3DE81','#FDFFFF'],
['#919636','#524A3A','#FFFAE1','#5A5F37'],

['#363237','#2D4262','#73605B','#D09683'],
    
    
    
['#4B4345','#102A49','#F79B77','#755248'],
['#335252','#D4DDE1','#AA4B41','#2D3033'],
    
    
    
['#90AFC5','#336B87','#2A3132','#763626'],
    
    
 
['#1E1F26','#283655','#4D648D','#D0E1F9'],
    

    
    
 ['#95DBE5FF','#078282FF','#339E66FF'],
    ['#FF3EA5FF','#EDFF00FF','#00A4CCFF'],
    ['#963CBDFF','#FF6F61FF','#C5299BFF','#FEAE51FF'],
    ['#0A5E2AFF','#6DAC4FFF','#EFEFE8FF','#FE0000FF'],
    ['#2460A7FF','#85B3D1FF','#B3C7D6FF','#D9B48FFF'],
    ['#FFDDE2FF','#FAA094FF','#9ED9CCFF','#008C76FF'],
    ['#93385FFF','#9F6B99FF','#4F3466FF','#301728FF'],
    ['#F1F3FFFF','#F7CED7FF','#F99FC9FF','#EF6079FF'],
    ['#ED254EFF','#F9DC5CFF','#F4FFFDFF','#011936FF'],
    ['#95DBE5FF','#078282FF','#339E66FF'],
    ['#FF3EA5FF','#EDFF00FF','#00A4CCFF'],
    ['#963CBDFF','#FF6F61FF','#C5299BFF','#FEAE51FF'],
    ['#0A5E2AFF','#6DAC4FFF','#EFEFE8FF','#FE0000FF'],
    ['#2460A7FF','#85B3D1FF','#B3C7D6FF','#D9B48FFF'],
    ['#FFDDE2FF','#FAA094FF','#9ED9CCFF','#008C76FF'],
    ['#93385FFF','#9F6B99FF','#4F3466FF','#301728FF'],
    ['#F1F3FFFF','#F7CED7FF','#F99FC9FF','#EF6079FF'],
    ['#ED254EFF','#F9DC5CFF','#F4FFFDFF','#011936FF'],
    
    
['#DDDEDE','#232122','#A5C05B','#7BA4A8'],
    

['#98DBC6','#5BC8AC','#E6D72A','#F18D9E'],
    

['#A49592','#727077','#EED8C9','#E99787'],
    
    
['#488A99','#DBAE58','#4D585B','#B4B4B4'],
['#011A27','#063852','#F0810F','#E6DF44'],
['#16253D','#002C54','#EFB509','#CD7213'],
['#50312F','#CB0000','#E4EA8C','#3F6C45'],
['#000B29','#D70026','#F8F5F2','#EDB83D'],
['#B3DBC0','#FE0000','#FDF6F6','#67BACA'],
['#F9BA32','#426E86','#F8F1E5','#2F3131'],
['#756867','#D5D6D2','#353C3F','#FF8D3F'],
['#31A2AC','#AF1C1C','#F0EFFE','#2F2F28'],
['#F4CC70','#DE7A22','#20948B','#6AB187'],
['#2988BC','#2F496E','#F4EADE','#ED8C72'],
['#257985','#5EA8A7','#FFFFFF','#FF4447']];


function setup() {
  createCanvas(1000, 1200);
  
  
   seed = floor($fx.rand() * 123456789)
      randomSeed(seed)
     noiseSeed(seed)
  
  
  pixelDensity(1);
  rectMode(CENTER);
  angleMode(DEGREES);
  
  
 
  frameRate(10);
  rer=random([75,100,125,150,175])
  heh=rer
  col=random(TV)
  ki=0
  x=random([250,500,750]);
  y=random([250,600,950])
  //sc=5
  //dg=random([0,45,90,135,180,225,270,315,360]);
  dg=random([-45,0,90,45]);
  dg0=dg
  dg1=dg+180;
  kf=random([50,75,100,125,150,175,200,225,250])
  
  x1=random(-kf,kf)
  x2=random(-kf,kf)
  x3=random(-kf,kf)
  x4=random(-kf,kf)
  x5=random(-kf,kf)
  
  c1=random(col)
  c2=random(col)
  c3=random(col)
  c4=col[3]
  c5=col[2]
  c6=random(col)
   background(c6);
    noStroke();
     fill(c6)
     quad(0,0,rer,heh,1000-rer,heh,1000,0)
     quad(0,0,rer,heh,rer,1200-heh,0,1200)
     quad(0,1200,rer,1200-heh,1000-rer,1200-heh,1000,1200)
     quad(1000,1200,1000-rer,1200-heh,1000-rer,heh,1000,0)
     
     fill(255,255,255,55)
      quad(0,0,rer,heh,1000-rer,heh,1000,0)
  fill(255,255,255,65)
     quad(0,0,rer,heh,rer,1200-heh,0,1200)
  fill(255,255,255,15)
   quad(0,1200,rer,1200-heh,1000-rer,1200-heh,1000,1200)
  fill(255,255,255,25)
     quad(1000,1200,1000-rer,1200-heh,1000-rer,heh,1000,0)
     
  
  xxx=500
  yyy=600
  
  m=random([12.5,25,50,100])
  
  rot=random([0,45,-45,90])
  for(yyy=300; yyy<950; yyy+=m*2){
  for(xxx=300; xxx<750; xxx+=m*2){
    c6=random(col)
  for(i=0; i<500; i++){
  push();
  translate(xxx,yyy);
  rotate(0+rot);
  noStroke();
    fill(c6);
  circle(0+random(-5,5),random(-m,m),random(3));
  pop();
  }
  }
  }
  
}

function draw() {
  
  
  ////////////////////////////
  
   kf=random([50,75,100])
  
//  col=random(TV)
  x=random([300,400,500,600,700]);
  y=random([300,500,700,900,400,600,800])
  //sc=5
  //dg=random([90])
  dg0=dg
  dg1=dg+180
  
  x1=random(-kf,kf)
  x2=random(-kf,kf)
  x3=random(-kf,kf)
  x4=random(-kf,kf)
  x5=random(-kf,kf)
  
  c1=random(col)
  c2=random(col)
  c3=random(col)
  c4=col[3]
  c5=col[2]
 
   for(i=0; i<10; i++){
  for(dg=dg0; dg<dg1; dg+=1){
   
    d1=random(5);
  d2=random(5);
  d3=random(5);
  d4=random(5);
  d5=random(5);
  
    
  push();
  translate(x,y);
  //scale(sc)
  rotate(dg);
  noStroke();
  fill(c1);
  circle(x1+ki,0,d1);
  fill(c2);
  circle(x2+ki,0,d2);
  fill(c3);
  circle(x3+ki,0,d3);
  fill(c4);
  circle(x4+ki,0,d4);
  fill(c5);
  circle(x5+ki,0,d5);
  
  
  pop();
  
 
    
  }
     
      stroke(255)
  strokeWeight(0.25)
    push();
  translate(x,y);
    rotate(dg);
    line(-kf,0,kf,0)
    pop();
  
  
  if(dg==dg1){
   dg=dg0
    dg1=dg+180
  x1=random(-kf,kf)
  x2=random(-kf,kf)
  x3=random(-kf,kf)
  x4=random(-kf,kf)
  x5=random(-kf,kf)
    
  }
   }
  
  ////
  
  stroke(255)
  strokeWeight(0.5)
 // line(100,0,100,1200)
  //line(200,0,200,1200)
  //line(300,0,300,1200)
  //line(400,0,400,1200)
  //line(500,0,500,1200)
  //line(600,0,600,1200)
  //line(700,0,700,1200)
  //line(800,0,800,1200)
  //line(900,0,900,1200)

  //noLoop();
  
   if(frameCount==20){
     noFill();
     stroke(c6);
     strokeWeight(15)
    // rect(500,600,800,1100)
   
    noLoop();
     
   }
     
}

function keyTyped() {
if (key === 's') {
saveCanvas('alienation', 'jpg');
}
}