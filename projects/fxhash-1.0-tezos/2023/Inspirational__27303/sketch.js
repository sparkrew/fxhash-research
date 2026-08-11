var v1=rnd(0,100)
var yys
var b =90
var oo =rnd(0,100)
var variation =rnd(0,110)

var qu=rnd(0,100)
var canvas

function setup() {
  // var x=
  canvas=createCanvas(rnd(1700,3500), rnd(1900,3500));
  angleMode(DEGREES)
   randomSeed(fxrand()*99999);
  
  noiseSeed(fxrand()*99999);
   canvas.addClass("fxhash");
}

function draw() {
  yys = rnd(height-600,height-1100)
  
  if(qu>20&qu<60){
    var bc ="#0C134F"
  }
     
    else{
      var bc =255
    } 
     
     
  background(bc);

   
  for(pp=0;pp<1500;pp++){
   if(qu>20&qu<60){
     strokeWeight(0.5)
    stroke(255)
      fill("#0C134F")
  }
  else{
    strokeWeight(2)
    stroke(0)
    fill(255)
  }
    strokeWeight(0.5)
    line(-200,-height+3*pp+500,width+200,-height+6*pp-500)
    line(-200+3*pp,-height+500,-200+8*pp,height+500)
  
  }
  
  
  
  
  
  // window
    
  var rr2=width/2
  strokeWeight(6)
 var g3 =rnd(100,300)
 var xw=rnd(rr2,width-rr2)
 if(qu>20&qu<60){
 fill("#1D267D")
 }
  else{
    fill("#FDF4F5") 
  }
  rect(xw,g3,rr2,rr2/2)
  
    noStroke()
  if(qu>20&qu<60){
   fill(255)
  arc(xw+rnd(rr2/8,rr2-rr2/8),g3+rr2/8,rr2/8,rr2/8,40,240,PIE)
  
  for(qw=0 ;qw<100;qw++){
  fill(255)
  circle(rnd(xw+5,xw+rr2-5),rnd(g3+5,g3+rr2/2-5),5)
  }
  }
  else{
    
    fill(255)
        stroke(0)
    strokeWeight(6)
    circle(xw+rnd(rr2/8,rr2-rr2/8),g3+rr2/8,rr2/6)
   
    for(m3=0;m3<rr2/5;m3=m3+18){
    for(m2=0;m2<rr2;m2++){
      strokeWeight(6)
      stroke(0)
      line(xw+m2,g3+rr2/6+noise(m2/100)*110+m3,xw+m2,g3+rr2/6+noise(m2/100)*110+m3)
      
    }
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
  }
  stroke(0)
  strokeWeight(5)
  line(xw,g3+rr2/4,xw+rr2,g3+rr2/4)
    line(xw+rr2/2,g3,xw+rr2/2,g3+rr2/2)
  
 
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
//   light
  if(qu>20&qu<60){
   strokeWeight(10)
  for(h1=0;h1<rnd(1,3);h1++){
  var xl =rnd(200,width-200)
  
  var g2 =height/4-rnd(-300,100)
   stroke(254, 255, 134,30)
for(o2=0;o2<300;o2++) { 
  line(xl,g2+55,xl+rnd(-width/2,width/2),rnd(height-300,height-500))
}
  stroke(0)
  line(xl,0,xl,g2)
  noStroke()
  fill("#FCE22A")
  ellipse(xl,g2,40*2,2*90)
  ellipse(xl,g2+90/2,60*2,2*80)
  }
  }

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  if(oo<50){
    qq=4
  }
  else{
    qq=8
  }
  
  if(variation<50){
    
    
    if(qu>20&qu<60){
    stroke(255)
      fill("#0C134F")
  }
  else{
    stroke(0)
    fill(255)
  }
    
    
  var d=rnd(350,height/2)

 
  // plant0

  
  for(j2=0;j2<190;j2++){
  var x2=rnd(0,width)
  var y2=rnd(4*height/6,height)
  
  for(i2=0;i2<40;i2++){
    push()
    translate(x2,y2)
    rotate(rnd(2,360))
        rotate(rnd(2,360))
        rotate(rnd(2,360))
       translate(-x2,-y2)
    
  var g =10
  var f =rnd(0,120)
  if(f<80){
  var g2 =30
  }
    else{
      var g2 =rnd(-10,20)
    }
  beginShape()
  strokeWeight(1)
    if(v1<30){
  fill("#9eb599")
    }
    if(v1>30&v1<70){
      fill("#9eb599")
    }
     if(v1>70){
      fill(205,206,192,275)
    }
    
  curveVertex(x2,y2);
curveVertex(x2,y2);
   curveVertex(x2+180/2,y2-5);
    curveVertex(x2+180, y2+20);
curveVertex(x2+180, y2+20);
  
  
   curveVertex(x2+180, y2+20+3);
curveVertex(x2+180, y2+20+3);
  
   curveVertex(x2+180/2,y2+25-g2);
  
  curveVertex(x2,y2+g);
curveVertex(x2,y2+g);
  
  
  
  
    endShape()
    
    
  strokeWeight(1)
  beginShape()
   curveVertex(x2+120, y2+10-g2/3.5);
curveVertex(x2+120, y2+10-g2/3.5);
  
   curveVertex(x2+120/2,y2+g/2+4-g2/2);
  
  curveVertex(x2,y2+g/2);
curveVertex(x2,y2)+g/2;
  endShape()
  
  
  pop()
  
  }
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
// plant tavil
  for(j=0;j<rnd(110,200);j++){
    
 var rot=rnd(-25,15)
    
  var x =rnd(0,width)
  var y=height-500
  var r=rnd(50,100)
  push()
  
   translate(x,y)
    
  rotate(rnd(-26,8))
     translate(-x,-y)
  var rx =rnd(12,35)
  
for(i=0 ; i<rnd(4,22);i++){
  noFill()
   beginShape();
  strokeWeight(3)
  // fill(0)
curveVertex(x+10*i, y-r*i);
curveVertex(x+10*i, y-r*i);
    curveVertex(x+10*i, y-r/2-r*i);
    curveVertex(x+10+10*i,y-r-r*i);
curveVertex(x+10+10*i,y-r-r*i);
    
    endShape()

    if(qu>20&qu<60){
    stroke(255)
      fill("#0C134F")
  }
  else{
    stroke(0)
    fill(255)
  }
  
  strokeWeight(1)
  ellipse(x+rx/2+10*i-i,y-r*i,rx-2*i,rx/2)
  ellipse(x-rx/2+10*i+i,y-10-r*i,rx-2*i,rx/2)
   ellipse(x+rx/2+10*i-i,y-rx-r*i,rx-2*i,rx/2)
   ellipse(x-rx/2.9+10*i+i,y-30-r*i,rx-2*i,rx/2)
  ellipse(x+rx/1.4+10*i-i,y-40-r*i,rx-2*i,rx/2)
  
}
pop()
    
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
      // flower
    
 for(e= 0 ; e<14 ;e++){
   push()
  strokeWeight(8)
  var d =rnd(0,width)
    var f1 =0
  var a =rnd(180,350)
  var a2 =rnd(a,2*a)
  var d1=height-500-a-a2
  
  noFill()
  beginShape()
  curveVertex(d,d1)
   curveVertex(d,d1)
  
  curveVertex(d+rnd(-70,70),d1+a/2+a2/2)
  
   curveVertex(d+f1,d1+a+a2)
   curveVertex(d+f1,d1+a+a2)
  endShape()
  
  var flo =a/3
  
  for(u=0 ; u<260/2 ;u++){
  push()

    if(qu>20&qu<60){
    stroke(255)
      fill("#0C134F")
  }
  else{
    stroke(0)
    fill(255)
  }
  
      
      
      
      
      translate(d,d1)
    rotate(rnd(0,360))
      translate(-d,-d1)
    
    
    var v =rnd(20,flo)
  beginShape()
  strokeWeight(4)
  
  curveVertex(d,d1)
    curveVertex(d,d1)
  
   curveVertex(d+v/2,d1-8/10*v)
  
  
    curveVertex(d+v,d1-v)
  
     curveVertex(d+v/2,d1-1/10*v)
  
  curveVertex(d,d1)
    curveVertex(d,d1)
  
  
  
  
  endShape()

    pop()
  }
  
      fill(10)
    circle(d,d1,v/1.1)
   pop()
  }
  
  
  
  
  
  
  
  
   
  
  // grass
  
  
  
  for(l=0 ;l<100;l++){
    push()
    translate(0,50)
    var n =rnd(40,80)
  var xg =50+170*l
  var yg =height-500
  var q =rnd(2,10)
  
  
  for(p=0 ; p<q ;p++){
  var h=rnd(8,10)*p
  
  var ww=rnd(0,100)
  if(ww<50){
    fill(255)
  }
  if(ww>50){
    fill("#7AA874")
  }
  
  beginShape()
    
  curveVertex(xg+h,yg)
  curveVertex(xg+h,yg)
  
  
    curveVertex(xg+n/5+h,yg-100)
  
  curveVertex(xg+rnd(n,120)+h,yg-rnd(150,200))
  
  
  
  curveVertex(xg+n*2/6+h,yg-100)
  
  
   curveVertex(xg+n/12+h,yg)
  curveVertex(xg+n/12+h,yg)
  endShape()
    
  }
  
   for(p=0 ; p<q ;p++){
  var h=rnd(6,10)*p
  beginShape()
    
  curveVertex(xg-h,yg)
  curveVertex(xg-h,yg)
  
  
    curveVertex(xg+n/5-h,yg-n)
  
  curveVertex(xg-rnd(n/2,120/2)-h,yg-rnd(150,200))
  
  
  
  curveVertex(xg+n*2/6-h,yg-n)
  
  
   curveVertex(xg+n/12-h,yg)
  curveVertex(xg+n/12-h,yg)
  endShape()
    
  }
  pop()
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  // toys
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  for(c1= 0 ;c1<420;c1=c1+1){
    var k =rnd(0,100)
    
  for(c=0 ;c<width;c=c+5){
  strokeWeight(6)
    if(k<b){
    stroke("#FFFAF4")
    }
    else{
        stroke(0)
    }
  line(0+c,height-500+noise(c/300)*500-c1,0+c,height-500+noise(c/300)*500-c1)
      stroke("#FFFAF4")
     line(0+c,height-500+noise(c/300)*500+c1,0+c,height-500+noise(c/300)*500+c1)
    
    strokeWeight(6)
    if(c%qq==0){
     stroke(0)
  line(0+c,height-500+noise(c/300)*500,c,height+900)
    }
  }
  }
  
    if(qu>20&qu<60){
    stroke(255)
      fill("#0C134F")
  }
  else{
    stroke(0)
    fill(255)
  }
  
  strokeWeight(3)
  
  
  
  
  for(j=0 ; j<10;j++){
  var xs =rnd(300,width-300)
  var rs =rnd(60,80)
  
  var i2 =rnd(8,19)
  
  for(i=0 ; i<i2;i++){
    
    
    
  var to = rnd(0,100)
  if(qu>80&qu<100){
  if(to<20){
    fill(0)
  }
   
  if(to>20&to<40){
    fill("#df6e6d")
  }
    if(to>40&to<60){
    fill("##7e94b4")
  }
    if(to>60&to<80){
    fill("#ead4a5")
  }
    if(to>80&to<100){
    fill(255)
  }
  
  }

    
    
    var yazid=rnd(0,180)
    
    if(i<i2-1){
    if(yazid<70){
    // makhroot
  var x =xs+rnd(-20,20)
  var r =rs
   var y =height-500-rs-i*rs
    push()
   
  beginShape()

  translate(x,y+r/2)
  rotate(180)
   translate(-x,-y-r/2)
  
  ellipse(x,y,r,r/3)
  
  curveVertex(x+r/2,y)
   curveVertex(x+r/2,y)
  
   curveVertex(x+r/2,y+r)
   curveVertex(x+r/2,y+r+r/15)
  
   
   curveVertex(x,y+r+r/6)
  
   curveVertex(x-r/2,y+r+r/15)
  
  
   curveVertex(x-r/2,y+r+r/55)
   curveVertex(x-r/2,y)
    curveVertex(x-r/2,y)
  endShape()
  ellipse(x,y+r,r,r/3)
  pop()
  
  
  }
  
    
    
  
   if(yazid>70&yazid<140){
  // mokaab
  var rm =rs
  var tm=1
  var xm =xs-rs/1.2+rnd(-20,20)
  var ym =height-500-rs-i*rs
  rect(xm,ym,rm,tm*rm)
  quad(xm,ym,xm+rm,ym,xm+rm+rm/2,ym-rm/4,xm+rm/2,ym-rm/4)
  quad(xm+rm,ym,xm+rm+rm/2,ym-rm/4,xm+rm+rm/2,ym-rm/4+tm*rm,xm+rm,ym+tm*rm)
   }
      
      
      
         if(yazid>140&yazid<180){
      
      //  tunel
  var rm =rs*1
  var tm=1
  var xm =xs-rs/1.2+rnd(-20,20)
  var ym =height-500-i*rs-rs
  rect(xm,ym,rm,tm*rm)
  quad(xm,ym,xm+rm,ym,xm+rm+rm/4,ym-rm/8,xm+rm/4,ym-rm/8)
  quad(xm+rm,ym,xm+rm+rm/4,ym-rm/8,xm+rm+rm/4,ym-rm/8+tm*rm,xm+rm,ym+tm*rm)
  
  push()

    if(qu>20&qu<60){
    stroke(255)
      fill("#0C134F")
  }
  else{
    stroke(0)
    fill(bc)
  }
  
  translate(xm+rm/2,ym+rm)
  rotate(180)
   translate(-xm-rm/2,-ym-rm)
  strokeWeight(3)
     fill(100)
  arc(xm+rm/2,ym+rm,rm*0.8,rm*1.4,0,180,PIE)
       
    if(qu>20&qu<60){
    stroke(255)
      fill("#0C134F")
  }
  else{
    stroke(0)
    fill(bc)
  }
  
         arc(xm+rm/2,ym+rm,rm*0.6,rm*1.2,0,180,PIE)
  pop()
      }
      
      
      
      
      
      
      
      
      
      
      
    }
    
    
    else{
    
      
  
  var to = rnd(0,100)
  if(qu>80&qu<100){
  if(to<20){
    fill(0)
  }
   
  if(to>20&to<40){
    fill("#df6e6d")
  }
    if(to>40&to<60){
    fill("##7e94b4")
  }
    if(to>60&to<80){
    fill("#ead4a5")
  }
    if(to>80&to<100){
    fill(255)
  }
  
  }
      if(yazid<10){
        
  
  var to = rnd(0,100)
  if(qu>80&qu<100){
  if(to<20){
    fill(0)
  }
   
  if(to>20&to<40){
    fill("#df6e6d")
  }
    if(to>40&to<60){
    fill("##7e94b4")
  }
    if(to>60&to<80){
    fill("#ead4a5")
  }
    if(to>80&to<100){
    fill(255)
  }
  
  }
    // makhroot
  var x =xs+rnd(-20,20)
  var r =rs
   var y =height-500-rs-i*rs
    push()
   
  beginShape()

  translate(x,y+r/2)
  rotate(180)
   translate(-x,-y-r/2)
  
  ellipse(x,y,r,r/3)
  
  curveVertex(x+r/2,y)
   curveVertex(x+r/2,y)
  
   curveVertex(x+r/2,y+r)
   curveVertex(x+r/2,y+r+r/15)
  
   
   curveVertex(x,y+r+r/6)
  
   curveVertex(x-r/2,y+r+r/15)
  
  
   curveVertex(x-r/2,y+r+r/55)
   curveVertex(x-r/2,y)
    curveVertex(x-r/2,y)
  endShape()
  ellipse(x,y+r,r,r/3)
  pop()
  
  
  }
  
    
    
  
   if(yazid>10&yazid<20){
     
  
  var to = rnd(0,100)
  if(qu>80&qu<100){
  if(to<20){
    fill(0)
  }
   
  if(to>20&to<40){
    fill("#df6e6d")
  }
    if(to>40&to<60){
    fill("##7e94b4")
  }
    if(to>60&to<80){
    fill("#ead4a5")
  }
    if(to>80&to<100){
    fill(255)
  }
  
  }
  // mokaab
  var rm =rs
  var tm=1
  var xm =xs-rs/2+rnd(-20,20)
  var ym =height-500-rs-i*rs
  rect(xm,ym,rm,tm*rm)
  quad(xm,ym,xm+rm,ym,xm+rm+rm/2,ym-rm/4,xm+rm/2,ym-rm/4)
  quad(xm+rm,ym,xm+rm+rm/2,ym-rm/4,xm+rm+rm/2,ym-rm/4+tm*rm,xm+rm,ym+tm*rm)
   }
      
      
      
      
      
      
      
      
      
      
      
      
  
  
  if(yazid>20&yazid<60){
    
  
  var to = rnd(0,100)
  if(qu>80&qu<100){
  if(to<20){
    fill(0)
  }
   
  if(to>20&to<40){
    fill("#df6e6d")
  }
    if(to>40&to<60){
    fill("##7e94b4")
  }
    if(to>60&to<80){
    fill("#ead4a5")
  }
    if(to>80&to<100){
    fill(255)
  }
  
  }
  var rt =rs
  var xt =xs-rs/1.5+rnd(-20,20)
  var yt =height-500-i*rs
  triangle(xt,yt,xt+8/10*rt,yt-rt,xt+rt,yt)
  
   triangle(xt+rt,yt,xt+8/10*rt,yt-rt,xt+rt+rt/3,yt-rt/3)
  
  }
  
  if(yazid>60&yazid<100){
    
  
  var to = rnd(0,100)
  if(qu>80&qu<100){
  if(to<20){
    fill(0)
  }
   
  if(to>20&to<40){
    fill("#df6e6d")
  }
    if(to>40&to<60){
    fill("##7e94b4")
  }
    if(to>60&to<80){
    fill("#ead4a5")
  }
    if(to>80&to<100){
    fill(255)
  }
  
  }
  // heram2
  var t =rnd(2,6)
  var rt2 =rs
  xt2 =xs-rs+rnd(-20,20)
  yt2=height-500-i*rs
  triangle(xt2,yt2,xt2+rt2/t,yt2-rt2,xt2+rt2,yt2)
  
  quad(xt2+rt2/t,yt2-rt2,xt2+rt2,yt2,xt2+rt2+rt2,yt2-rt2/4,xt2+rt2/t+rt2,yt2-rt2-rt2/4)
  
  
  }
  
      
      
     if(yazid>100&yazid<140){ 
       push()
       
  
  var to = rnd(0,100)
  if(qu>80&qu<100){
  if(to<20){
    fill(0)
  }
   
  if(to>20&to<40){
    fill("#df6e6d")
  }
    if(to>40&to<60){
    fill("##7e94b4")
  }
    if(to>60&to<80){
    fill("#ead4a5")
  }
    if(to>80&to<100){
    fill(255)
  }
  
  }
       var ya =height-500-i*rs
  var xa =xs+rnd(-20,20)
  var ra =1.5*rs
  translate(xa ,ya)
  rotate(180)
    translate(-xa ,-ya)
  
  arc(xa,ya,ra,ra,0,180,PIE)
    arc(xa,ya-ra/10,ra,ra,0,180,PIE)
  
circle(xa,ya,10)
                             pop()
     }  
      
      
      
      
      if(yazid>140&yazid<180){
      
      //  tunel
  var rm =rs*1
  var tm=1
 var xm =xs-rs/1.5+rnd(-20,20)
  var ym =height-500-i*rs-rs
  rect(xm,ym,rm,tm*rm)
  quad(xm,ym,xm+rm,ym,xm+rm+rm/4,ym-rm/8,xm+rm/4,ym-rm/8)
  quad(xm+rm,ym,xm+rm+rm/4,ym-rm/8,xm+rm+rm/4,ym-rm/8+tm*rm,xm+rm,ym+tm*rm)
  
  push()

  translate(xm+rm/2,ym+rm)
  rotate(180)
   translate(-xm-rm/2,-ym-rm)
  strokeWeight(3)
        fill(0)
  arc(xm+rm/2,ym+rm,rm*0.8,rm*1.4,0,180,PIE)
          fill(bc)
         arc(xm+rm/2,ym+rm,rm*0.6,rm*1.2,0,180,PIE)
  pop()
      }
      
      
      
      
    }
  
  
  }
  }
 
  
  
  
  
  
  
  
  // toys end
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  // part2
  
  
  
  
  
  
  
  
// plant tavil
  for(j=0;j<rnd(20,50);j++){
    
 var rot=rnd(-25,15)
    
  var x =rnd(0,width)
  var y=height-500
  var r=rnd(50,100)
  push()
  
   translate(x,y)
    
  rotate(rnd(-26,8))
     translate(-x,-y)
  var rx =rnd(12,35)
  
for(i=0 ; i<rnd(4,22);i++){
  noFill()
   beginShape();
  strokeWeight(3)
  // fill(0)
curveVertex(x+10*i, y-r*i);
curveVertex(x+10*i, y-r*i);
    curveVertex(x+10*i, y-r/2-r*i);
    curveVertex(x+10+10*i,y-r-r*i);
curveVertex(x+10+10*i,y-r-r*i);
    
    endShape()
  if(v1<30){
  fill("#854954")
    }
    if(v1>30&v1<70){
   
    if(qu>20&qu<60){
    stroke(255)
      fill("#0C134F")
  }
  else{
    stroke(0)
    fill(255)
  }
  
    }
     if(v1>70){
          
    if(qu>20&qu<60){
    stroke(255)
      fill("#0C134F")
  }
  else{
    stroke(0)
    fill(255)
  }
  
    }
  strokeWeight(1)
  ellipse(x+rx/2+10*i-i,y-r*i,rx-2*i,rx/2)
  ellipse(x-rx/2+10*i+i,y-10-r*i,rx-2*i,rx/2)
   ellipse(x+rx/2+10*i-i,y-rx-r*i,rx-2*i,rx/2)
   ellipse(x-rx/2.9+10*i+i,y-30-r*i,rx-2*i,rx/2)
  ellipse(x+rx/1.4+10*i-i,y-40-r*i,rx-2*i,rx/2)
  
}
pop()
    
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
      // flower
    
 for(e= 0 ; e<4 ;e++){
   push()
  strokeWeight(8)
  var d =rnd(0,width)
    var f1 =0
  var a =rnd(180,350)
  var a2 =rnd(a,2*a)
  var d1=height-500-a-a2
  
  noFill()
  beginShape()
  curveVertex(d,d1)
   curveVertex(d,d1)
  
  curveVertex(d+rnd(-70,70),d1+a/2+a2/2)
  
   curveVertex(d+f1,d1+a+a2)
   curveVertex(d+f1,d1+a+a2)
  endShape()
  
  var flo =a/3
  
  for(u=0 ; u<260/2 ;u++){
  push()
  
    if(qu>20&qu<60){
    stroke(255)
      fill("#0C134F")
  }
  else{
    stroke(0)
    fill(255)
  }
  
      
      
      
      
      translate(d,d1)
    rotate(rnd(0,360))
      translate(-d,-d1)
    
    
    var v =rnd(20,flo)
  beginShape()
  strokeWeight(4)
  
  curveVertex(d,d1)
    curveVertex(d,d1)
  
   curveVertex(d+v/2,d1-8/10*v)
  
  
    curveVertex(d+v,d1-v)
  
     curveVertex(d+v/2,d1-1/10*v)
  
  curveVertex(d,d1)
    curveVertex(d,d1)
  
  
  
  
  endShape()

    pop()
  }
  
      fill(10)
    circle(d,d1,v/1.1)
   pop()
  }
  
  
  
  
  
  
  
  
   
  
  // grass
  
  
  
  for(l=0 ;l<60;l++){
    push()
    translate(0,rnd(-30,110))
    var n =rnd(40,80)
  var xg =50+rnd(40,80)*l
  var yg =height-500
  var q =rnd(2,10)
  
  strokeWeight(3/2)
  
  for(p=0 ; p<q ;p++){
  var h=rnd(8,10)*p
   var ww=rnd(0,100)
  if(ww<50){
    fill(255)
  }
  if(ww>50){
    fill("#7AA874")
  }
  beginShape()
    
  curveVertex(xg+h,yg)
  curveVertex(xg+h,yg)
  
  
    curveVertex(xg+n/5+h,yg-100)
  
  curveVertex(xg+rnd(n,120)+h,yg-rnd(150,200))
  
  
  
  curveVertex(xg+n*2/6+h,yg-100)
  
  
   curveVertex(xg+n/12+h,yg)
  curveVertex(xg+n/12+h,yg)
  endShape()
    
  }
  
   for(p=0 ; p<q ;p++){
  var h=rnd(6,10)*p
  beginShape()
    
  curveVertex(xg-h,yg)
  curveVertex(xg-h,yg)
  
  
    curveVertex(xg+n/5-h,yg-n)
  
  curveVertex(xg-rnd(n/2,120/2)-h,yg-rnd(150,200))
  
  
  
  curveVertex(xg+n*2/6-h,yg-n)
  
  
   curveVertex(xg+n/12-h,yg)
  curveVertex(xg+n/12-h,yg)
  endShape()
    
  }
  pop()
  }
  
  
    
    
    
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  if(variation>50){
  
  
    if(qu>20&qu<60){
    stroke(255)
      fill("#0C134F")
  }
  else{
    stroke(0)
    fill(255)
  }
  
  
  
  var xxs =rnd(200,width-200)
  
  var d=rnd(350,height/2)

  
  var d=rnd(350,height/2)

 
  // plant0

  
  for(j2=0;j2<190;j2++){
  var x2=rnd(0,xxs)
  var y2=rnd(4*height/6,height)
  
  for(i2=0;i2<40;i2++){
    push()
    translate(x2,y2)
    rotate(rnd(2,360))
        rotate(rnd(2,360))
        rotate(rnd(2,360))
       translate(-x2,-y2)
    
  var g =10
  var f =rnd(0,120)
  if(f<80){
  var g2 =30
  }
    else{
      var g2 =rnd(-10,20)
    }
  beginShape()
  strokeWeight(1)
    if(v1<30){
  fill("#9eb599")
    }
    if(v1>30&v1<70){
      fill("#9eb599")
    }
     if(v1>70){
      fill(205,206,192,275)
    }
    
  curveVertex(x2,y2);
curveVertex(x2,y2);
   curveVertex(x2+180/2,y2-5);
    curveVertex(x2+180, y2+20);
curveVertex(x2+180, y2+20);
  
  
   curveVertex(x2+180, y2+20+3);
curveVertex(x2+180, y2+20+3);
  
   curveVertex(x2+180/2,y2+25-g2);
  
  curveVertex(x2,y2+g);
curveVertex(x2,y2+g);
  
  
  
  
    endShape()
    
    
  strokeWeight(1)
  beginShape()
   curveVertex(x2+120, y2+10-g2/3.5);
curveVertex(x2+120, y2+10-g2/3.5);
  
   curveVertex(x2+120/2,y2+g/2+4-g2/2);
  
  curveVertex(x2,y2+g/2);
curveVertex(x2,y2)+g/2;
  endShape()
  
  
  pop()
  
  }
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
// plant tavil
  for(j=0;j<rnd(110,200);j++){
    
 var rot=rnd(-25,15)
    
  var x =rnd(0,xxs)
  var y=height-500
  var r=rnd(50,100)
  push()
  
   translate(x,y)
    
  rotate(rnd(-26,8))
     translate(-x,-y)
  var rx =rnd(12,35)
  
for(i=0 ; i<rnd(4,22);i++){
  noFill()
   beginShape();
  strokeWeight(3)
  // fill(0)
curveVertex(x+10*i, y-r*i);
curveVertex(x+10*i, y-r*i);
    curveVertex(x+10*i, y-r/2-r*i);
    curveVertex(x+10+10*i,y-r-r*i);
curveVertex(x+10+10*i,y-r-r*i);
    
    endShape()
  if(v1<30){
  fill("#854954")
    }
    if(v1>30&v1<70){
    
    if(qu>20&qu<60){
    stroke(255)
      fill("#0C134F")
  }
  else{
    stroke(0)
    fill(255)
  }
  
    }
     if(v1>70){
     
    if(qu>20&qu<60){
    stroke(255)
      fill("#0C134F")
  }
  else{
    stroke(0)
    fill(255)
  }
  
    }
  strokeWeight(1)
  ellipse(x+rx/2+10*i-i,y-r*i,rx-2*i,rx/2)
  ellipse(x-rx/2+10*i+i,y-10-r*i,rx-2*i,rx/2)
   ellipse(x+rx/2+10*i-i,y-rx-r*i,rx-2*i,rx/2)
   ellipse(x-rx/2.9+10*i+i,y-30-r*i,rx-2*i,rx/2)
  ellipse(x+rx/1.4+10*i-i,y-40-r*i,rx-2*i,rx/2)
  
}
pop()
    
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
      // flower
    
 for(e= 0 ; e<14 ;e++){
   push()
  strokeWeight(8)
  var d =rnd(0,xxs)
    var f1 =0
  var a =rnd(180,350)
  var a2 =rnd(a,2*a)
  var d1=height-500-a-a2
  
  noFill()
  beginShape()
  curveVertex(d,d1)
   curveVertex(d,d1)
  
  curveVertex(d+rnd(-70,70),d1+a/2+a2/2)
  
   curveVertex(d+f1,d1+a+a2)
   curveVertex(d+f1,d1+a+a2)
  endShape()
  
  var flo =a/3
  
  for(u=0 ; u<260/2 ;u++){
  push()
 
    if(qu>20&qu<60){
    stroke(255)
      fill("#0C134F")
  }
  else{
    stroke(0)
    fill(255)
  }
  
      
      
      
      
      translate(d,d1)
    rotate(rnd(0,360))
      translate(-d,-d1)
    
    
    var v =rnd(20,flo)
  beginShape()
  strokeWeight(4)
  
  curveVertex(d,d1)
    curveVertex(d,d1)
  
   curveVertex(d+v/2,d1-8/10*v)
  
  
    curveVertex(d+v,d1-v)
  
     curveVertex(d+v/2,d1-1/10*v)
  
  curveVertex(d,d1)
    curveVertex(d,d1)
  
  
  
  
  endShape()

    pop()
  }
  
      fill(10)
    circle(d,d1,v/1.1)
   pop()
  }
  
  
  
  
  
  
  
  
   
  
  // grass
  
  
  
  for(l=0 ;l<100;l++){
    push()
    translate(0,50)
    var n =rnd(40,80)
  var xg =50+170*l
  var yg =height-500
  var q =rnd(2,10)
  
  
  for(p=0 ; p<q ;p++){
  var h=rnd(8,10)*p
  beginShape()
    
  curveVertex(xg+h,yg)
  curveVertex(xg+h,yg)
  
  
    curveVertex(xg+n/5+h,yg-100)
  
  curveVertex(xg+rnd(n,120)+h,yg-rnd(150,200))
  
  
  
  curveVertex(xg+n*2/6+h,yg-100)
  
  
   curveVertex(xg+n/12+h,yg)
  curveVertex(xg+n/12+h,yg)
  endShape()
    
  }
  
   for(p=0 ; p<q ;p++){
  var h=rnd(6,10)*p
  beginShape()
    
  curveVertex(xg-h,yg)
  curveVertex(xg-h,yg)
  
  
    curveVertex(xg+n/5-h,yg-n)
  
  curveVertex(xg-rnd(n/2,120/2)-h,yg-rnd(150,200))
  
  
  
  curveVertex(xg+n*2/6-h,yg-n)
  
  
   curveVertex(xg+n/12-h,yg)
  curveVertex(xg+n/12-h,yg)
  endShape()
    
  }
  pop()
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  // toys
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  for(c1= 0 ;c1<420;c1=c1+1){
    var k =rnd(0,100)
    
  for(c=0 ;c<xxs;c=c+5){
  strokeWeight(6)
    if(k<b){
    stroke("#FFFAF4")
    }
    else{
        stroke(0)
    }
  line(0+c,height-500+noise(c/300)*500-c1,0+c,height-500+noise(c/300)*500-c1)
      stroke("#FFFAF4")
     line(0+c,height-500+noise(c/300)*500+c1,0+c,height-500+noise(c/300)*500+c1)
    
    strokeWeight(4)
 if(c%qq==0){
     stroke(0)
  line(0+c,height-500+noise(c/300)*500,c,height+900)
    }
  }
  }
  
   
    if(qu>20&qu<60){
    stroke(255)
      fill("#0C134F")
  }
  else{
    stroke(0)
    fill(255)
  }
  
  strokeWeight(3)
  
  
  
  
  for(j=0 ; j<8;j++){
  var xs =rnd(300,xxs-300)
  var rs =rnd(60,80)
  
  var i2 =rnd(5,15)
  
  for(i=0 ; i<i2;i++){
    var to = rnd(0,100)
      if(qu>80&qu<100){
  if(to<20){
    fill(0)
  }
   
  if(to>20&to<40){
    fill("#df6e6d")
  }
    if(to>40&to<60){
    fill("##7e94b4")
  }
    if(to>60&to<80){
    fill("#ead4a5")
  }
    if(to>80&to<100){
    fill(255)
  }
  
  }
    var yazid=rnd(0,180)
    
    if(i<i2-1){
    if(yazid<70){
    // makhroot
  var x =xs+rnd(-20,20)
  var r =rs
   var y =height-500-rs-i*rs
    push()
   
  beginShape()

  translate(x,y+r/2)
  rotate(180)
   translate(-x,-y-r/2)
  
  ellipse(x,y,r,r/3)
  
  curveVertex(x+r/2,y)
   curveVertex(x+r/2,y)
  
   curveVertex(x+r/2,y+r)
   curveVertex(x+r/2,y+r+r/15)
  
   
   curveVertex(x,y+r+r/6)
  
   curveVertex(x-r/2,y+r+r/15)
  
  
   curveVertex(x-r/2,y+r+r/55)
   curveVertex(x-r/2,y)
    curveVertex(x-r/2,y)
  endShape()
  ellipse(x,y+r,r,r/3)
  pop()
  
  
  }
  
    
    
  
   if(yazid>70&yazid<140){
  // mokaab
  var rm =rs
  var tm=1
  var xm =xs-rs/1.2+rnd(-20,20)
  var ym =height-500-rs-i*rs
  rect(xm,ym,rm,tm*rm)
  quad(xm,ym,xm+rm,ym,xm+rm+rm/2,ym-rm/4,xm+rm/2,ym-rm/4)
  quad(xm+rm,ym,xm+rm+rm/2,ym-rm/4,xm+rm+rm/2,ym-rm/4+tm*rm,xm+rm,ym+tm*rm)
   }
      
      
      
         if(yazid>140&yazid<180){
      
      //  tunel
  var rm =rs*1
  var tm=1
  var xm =xs-rs/1.2+rnd(-20,20)
  var ym =height-500-i*rs-rs
  rect(xm,ym,rm,tm*rm)
  quad(xm,ym,xm+rm,ym,xm+rm+rm/4,ym-rm/8,xm+rm/4,ym-rm/8)
  quad(xm+rm,ym,xm+rm+rm/4,ym-rm/8,xm+rm+rm/4,ym-rm/8+tm*rm,xm+rm,ym+tm*rm)
  
  push()
  fill(255)
  translate(xm+rm/2,ym+rm)
  rotate(180)
   translate(-xm-rm/2,-ym-rm)
  strokeWeight(3)
     fill(100)
  arc(xm+rm/2,ym+rm,rm*0.8,rm*1.4,0,180,PIE)
          fill(bc)
         arc(xm+rm/2,ym+rm,rm*0.6,rm*1.2,0,180,PIE)
  pop()
      }
      
      
      
      
      
      
      
      
      
      
      
    }
    
    
    else{
    
      
  
  var to = rnd(0,100)
  if(qu>80&qu<100){
  if(to<20){
    fill(0)
  }
   
  if(to>20&to<40){
    fill("#df6e6d")
  }
    if(to>40&to<60){
    fill("##7e94b4")
  }
    if(to>60&to<80){
    fill("#ead4a5")
  }
    if(to>80&to<100){
    fill(255)
  }
  
  }
      if(yazid<10){
        
  
  var to = rnd(0,100)
  if(qu>80&qu<100){
  if(to<20){
    fill(0)
  }
   
  if(to>20&to<40){
    fill("#df6e6d")
  }
    if(to>40&to<60){
    fill("##7e94b4")
  }
    if(to>60&to<80){
    fill("#ead4a5")
  }
    if(to>80&to<100){
    fill(255)
  }
  
  }
    // makhroot
  var x =xs+rnd(-20,20)
  var r =rs
   var y =height-500-rs-i*rs
    push()
   
  beginShape()

  translate(x,y+r/2)
  rotate(180)
   translate(-x,-y-r/2)
  
  ellipse(x,y,r,r/3)
  
  curveVertex(x+r/2,y)
   curveVertex(x+r/2,y)
  
   curveVertex(x+r/2,y+r)
   curveVertex(x+r/2,y+r+r/15)
  
   
   curveVertex(x,y+r+r/6)
  
   curveVertex(x-r/2,y+r+r/15)
  
  
   curveVertex(x-r/2,y+r+r/55)
   curveVertex(x-r/2,y)
    curveVertex(x-r/2,y)
  endShape()
  ellipse(x,y+r,r,r/3)
  pop()
  
  
  }
  
    
    
  
   if(yazid>10&yazid<20){
     
  
  var to = rnd(0,100)
  if(qu>80&qu<100){
  if(to<20){
    fill(0)
  }
   
  if(to>20&to<40){
    fill("#df6e6d")
  }
    if(to>40&to<60){
    fill("##7e94b4")
  }
    if(to>60&to<80){
    fill("#ead4a5")
  }
    if(to>80&to<100){
    fill(255)
  }
  
  }
  // mokaab
  var rm =rs
  var tm=1
  var xm =xs-rs/2+rnd(-20,20)
  var ym =height-500-rs-i*rs
  rect(xm,ym,rm,tm*rm)
  quad(xm,ym,xm+rm,ym,xm+rm+rm/2,ym-rm/4,xm+rm/2,ym-rm/4)
  quad(xm+rm,ym,xm+rm+rm/2,ym-rm/4,xm+rm+rm/2,ym-rm/4+tm*rm,xm+rm,ym+tm*rm)
   }
      
      
      
      
      
      
      
      
      
      
      
      
  
  
  if(yazid>20&yazid<60){
    
  
  var to = rnd(0,100)
  if(qu>80&qu<100){
  if(to<20){
    fill(0)
  }
   
  if(to>20&to<40){
    fill("#df6e6d")
  }
    if(to>40&to<60){
    fill("##7e94b4")
  }
    if(to>60&to<80){
    fill("#ead4a5")
  }
    if(to>80&to<100){
    fill(255)
  }
  
  }
  var rt =rs
  var xt =xs-rs/1.5+rnd(-20,20)
  var yt =height-500-i*rs
  triangle(xt,yt,xt+8/10*rt,yt-rt,xt+rt,yt)
  
   triangle(xt+rt,yt,xt+8/10*rt,yt-rt,xt+rt+rt/3,yt-rt/3)
  
  }
  
  if(yazid>60&yazid<100){
  // heram2
    
  
  var to = rnd(0,100)
  if(qu>80&qu<100){
  if(to<20){
    fill(0)
  }
   
  if(to>20&to<40){
    fill("#df6e6d")
  }
    if(to>40&to<60){
    fill("##7e94b4")
  }
    if(to>60&to<80){
    fill("#ead4a5")
  }
    if(to>80&to<100){
    fill(255)
  }
  
  }
  var t =rnd(2,6)
  var rt2 =rs
  xt2 =xs-rs+rnd(-20,20)
  yt2=height-500-i*rs
  triangle(xt2,yt2,xt2+rt2/t,yt2-rt2,xt2+rt2,yt2)
  
  quad(xt2+rt2/t,yt2-rt2,xt2+rt2,yt2,xt2+rt2+rt2,yt2-rt2/4,xt2+rt2/t+rt2,yt2-rt2-rt2/4)
  
  
  }
  
      
      
     if(yazid>100&yazid<140){ push()
                             
  
  var to = rnd(0,100)
  if(qu>80&qu<100){
  if(to<20){
    fill(0)
  }
   
  if(to>20&to<40){
    fill("#df6e6d")
  }
    if(to>40&to<60){
    fill("##7e94b4")
  }
    if(to>60&to<80){
    fill("#ead4a5")
  }
    if(to>80&to<100){
    fill(255)
  }
  
  }
       var ya =height-500-i*rs
  var xa =xs+rnd(-20,20)
  var ra =1.5*rs
  translate(xa ,ya)
  rotate(180)
    translate(-xa ,-ya)
  
  arc(xa,ya,ra,ra,0,180,PIE)
    arc(xa,ya-ra/10,ra,ra,0,180,PIE)
  
circle(xa,ya,10)
                             pop()
     }  
      
      
      
      
      if(yazid>140&yazid<180){
      
      //  tunel
  var rm =rs*1
  var tm=1
 var xm =xs-rs/1.5+rnd(-20,20)
  var ym =height-500-i*rs-rs
  rect(xm,ym,rm,tm*rm)
  quad(xm,ym,xm+rm,ym,xm+rm+rm/4,ym-rm/8,xm+rm/4,ym-rm/8)
  quad(xm+rm,ym,xm+rm+rm/4,ym-rm/8,xm+rm+rm/4,ym-rm/8+tm*rm,xm+rm,ym+tm*rm)
  
  push()

  translate(xm+rm/2,ym+rm)
  rotate(180)
   translate(-xm-rm/2,-ym-rm)
  strokeWeight(3)
        fill(0)
  arc(xm+rm/2,ym+rm,rm*0.8,rm*1.4,0,180,PIE)
          fill(bc)
         arc(xm+rm/2,ym+rm,rm*0.6,rm*1.2,0,180,PIE)
  pop()
      }
      
      
      
      
    }
  
  
  }
  }
 
  
  
  
  
  
  
  
  // toys end
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  // part2
  
  
  
  
  
  
  
  
// plant tavil
  for(j=0;j<rnd(20,50);j++){
    
 var rot=rnd(-25,15)
    
  var x =rnd(0,xxs)
  var y=height-500
  var r=rnd(50,100)
  push()
  
   translate(x,y)
    
  rotate(rnd(-26,8))
     translate(-x,-y)
  var rx =rnd(12,35)
  
for(i=0 ; i<rnd(4,22);i++){
  noFill()
   beginShape();
  strokeWeight(3)
  // fill(0)
curveVertex(x+10*i, y-r*i);
curveVertex(x+10*i, y-r*i);
    curveVertex(x+10*i, y-r/2-r*i);
    curveVertex(x+10+10*i,y-r-r*i);
curveVertex(x+10+10*i,y-r-r*i);
    
    endShape()
  if(v1<30){
  fill("#854954")
    }
    if(v1>30&v1<70){
   
    if(qu>20&qu<60){
    stroke(255)
      fill("#0C134F")
  }
  else{
    stroke(0)
    fill(255)
  }
  
    }
     if(v1>70){
   
    if(qu>20&qu<60){
    stroke(255)
      fill("#0C134F")
  }
  else{
    stroke(0)
    fill(255)
  }
  
    }
  strokeWeight(1)
  ellipse(x+rx/2+10*i-i,y-r*i,rx-2*i,rx/2)
  ellipse(x-rx/2+10*i+i,y-10-r*i,rx-2*i,rx/2)
   ellipse(x+rx/2+10*i-i,y-rx-r*i,rx-2*i,rx/2)
   ellipse(x-rx/2.9+10*i+i,y-30-r*i,rx-2*i,rx/2)
  ellipse(x+rx/1.4+10*i-i,y-40-r*i,rx-2*i,rx/2)
  
}
pop()
    
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
      // flower
    
 for(e= 0 ; e<4 ;e++){
   push()
  strokeWeight(8)
  var d =rnd(0,xxs)
    var f1 =0
  var a =rnd(180,350)
  var a2 =rnd(a,2*a)
  var d1=height-500-a-a2
  
  noFill()
  beginShape()
  curveVertex(d,d1)
   curveVertex(d,d1)
  
  curveVertex(d+rnd(-70,70),d1+a/2+a2/2)
  
   curveVertex(d+f1,d1+a+a2)
   curveVertex(d+f1,d1+a+a2)
  endShape()
  
  var flo =a/3
  
  for(u=0 ; u<260/2 ;u++){
  push()

    if(qu>20&qu<60){
    stroke(255)
      fill("#0C134F")
  }
  else{
    stroke(0)
    fill(255)
  }
  
      
      
      
      translate(d,d1)
    rotate(rnd(0,360))
      translate(-d,-d1)
    
    
    var v =rnd(20,flo)
  beginShape()
  strokeWeight(4)
  
  curveVertex(d,d1)
    curveVertex(d,d1)
  
   curveVertex(d+v/2,d1-8/10*v)
  
  
    curveVertex(d+v,d1-v)
  
     curveVertex(d+v/2,d1-1/10*v)
  
  curveVertex(d,d1)
    curveVertex(d,d1)
  
  
  
  
  endShape()

    pop()
  }
  
      fill(10)
    circle(d,d1,v/1.1)
   pop()
  }
  
  
  
  
  
  
  
  
   
  
  // grass
  
  
  
  for(l=0 ;l<60;l++){
    push()
    translate(0,rnd(-30,110))
    var n =rnd(40,80)
  var xg =50+rnd(40,80)*l
  var yg =height-500
  var q =rnd(2,10)
  
  strokeWeight(1.3)
  
  for(p=0 ; p<q ;p++){
  var h=rnd(8,10)*p
   var ww=rnd(0,100)
  if(ww<50){
    fill(255)
  }
  if(ww>50){
    fill("#7AA874")
  }
  beginShape()
    
  curveVertex(xg+h,yg)
  curveVertex(xg+h,yg)
  
  
    curveVertex(xg+n/5+h,yg-100)
  
  curveVertex(xg+rnd(n,120)+h,yg-rnd(150,200))
  
  
  
  curveVertex(xg+n*2/6+h,yg-100)
  
  
   curveVertex(xg+n/12+h,yg)
  curveVertex(xg+n/12+h,yg)
  endShape()
    
  }
  
   for(p=0 ; p<q ;p++){
  var h=rnd(6,10)*p
  beginShape()
    
  curveVertex(xg-h,yg)
  curveVertex(xg-h,yg)
  
  
    curveVertex(xg+n/5-h,yg-n)
  
  curveVertex(xg-rnd(n/2,120/2)-h,yg-rnd(150,200))
  
  
  
  curveVertex(xg+n*2/6-h,yg-n)
  
  
   curveVertex(xg+n/12-h,yg)
  curveVertex(xg+n/12-h,yg)
  endShape()
    
  }
  pop()
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
 
  // plant0

  
  for(j2=0;j2<190;j2++){
  var x2=rnd(xxs+200,width)
  var y2=rnd(yys-600,height)
  
  for(i2=0;i2<40;i2++){
    push()
    translate(x2,y2)
    rotate(rnd(2,360))
        rotate(rnd(2,360))
        rotate(rnd(2,360))
       translate(-x2,-y2)
    
  var g =10
  var f =rnd(0,120)
  if(f<80){
  var g2 =30
  }
    else{
      var g2 =rnd(-10,20)
    }
  beginShape()
  strokeWeight(1)
    if(v1<30){
  fill("#9eb599")
    }
    if(v1>30&v1<70){
      fill("#9eb599")
    }
     if(v1>70){
      fill(205,206,192,275)
    }
    
  curveVertex(x2,y2);
curveVertex(x2,y2);
   curveVertex(x2+180/2,y2-5);
    curveVertex(x2+180, y2+20);
curveVertex(x2+180, y2+20);
  
  
   curveVertex(x2+180, y2+20+3);
curveVertex(x2+180, y2+20+3);
  
   curveVertex(x2+180/2,y2+25-g2);
  
  curveVertex(x2,y2+g);
curveVertex(x2,y2+g);
  
  
  
  
    endShape()
    
    
  strokeWeight(1)
  beginShape()
   curveVertex(x2+120, y2+10-g2/3.5);
curveVertex(x2+120, y2+10-g2/3.5);
  
   curveVertex(x2+120/2,y2+g/2+4-g2/2);
  
  curveVertex(x2,y2+g/2);
curveVertex(x2,y2)+g/2;
  endShape()
  
  
  pop()
  
  }
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
// plant tavil
  for(j=0;j<rnd(110,200);j++){
    
 var rot=rnd(-25,15)
    
  var x =rnd(xxs,width)
  var y=yys
  var r=rnd(50,100)
  push()
  
   translate(x,y)
    
  rotate(rnd(-26,8))
     translate(-x,-y)
  var rx =rnd(12,35)
  
for(i=0 ; i<rnd(4,22);i++){
  noFill()
   beginShape();
  strokeWeight(3)
  // fill(0)
curveVertex(x+10*i, y-r*i);
curveVertex(x+10*i, y-r*i);
    curveVertex(x+10*i, y-r/2-r*i);
    curveVertex(x+10+10*i,y-r-r*i);
curveVertex(x+10+10*i,y-r-r*i);
    
    endShape()
  if(v1<30){
  fill("#854954")
    }
    if(v1>30&v1<70){
     
    if(qu>20&qu<60){
    stroke(255)
      fill("#0C134F")
  }
  else{
    stroke(0)
    fill(255)
  }
  
    }
     if(v1>70){
   
    if(qu>20&qu<60){
    stroke(255)
      fill("#0C134F")
  }
  else{
    stroke(0)
    fill(255)
  }
  
    }
  strokeWeight(1)
  ellipse(x+rx/2+10*i-i,y-r*i,rx-2*i,rx/2)
  ellipse(x-rx/2+10*i+i,y-10-r*i,rx-2*i,rx/2)
   ellipse(x+rx/2+10*i-i,y-rx-r*i,rx-2*i,rx/2)
   ellipse(x-rx/2.9+10*i+i,y-30-r*i,rx-2*i,rx/2)
  ellipse(x+rx/1.4+10*i-i,y-40-r*i,rx-2*i,rx/2)
  
}
pop()
    
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
      // flower
    
 for(e= 0 ; e<14 ;e++){
   push()
  strokeWeight(8)
  var d =rnd(xxs,width)
    var f1 =0
  var a =rnd(180,350)
  var a2 =rnd(a,2*a)
  var d1=yys-a-a2
  
  noFill()
  beginShape()
  curveVertex(d,d1)
   curveVertex(d,d1)
  
  curveVertex(d+rnd(-70,70),d1+a/2+a2/2)
  
   curveVertex(d+f1,d1+a+a2)
   curveVertex(d+f1,d1+a+a2)
  endShape()
  
  var flo =a/3
  
  for(u=0 ; u<260/2 ;u++){
  push()
 
    if(qu>20&qu<60){
    stroke(255)
      fill("#0C134F")
  }
  else{
    stroke(0)
    fill(255)
  }
  
      
      
      
      
      translate(d,d1)
    rotate(rnd(0,360))
      translate(-d,-d1)
    
    
    var v =rnd(20,flo)
  beginShape()
  strokeWeight(4)
  
  curveVertex(d,d1)
    curveVertex(d,d1)
  
   curveVertex(d+v/2,d1-8/10*v)
  
  
    curveVertex(d+v,d1-v)
  
     curveVertex(d+v/2,d1-1/10*v)
  
  curveVertex(d,d1)
    curveVertex(d,d1)
  
  
  
  
  endShape()

    pop()
  }
  
      fill(10)
    circle(d,d1,v/1.1)
   pop()
  }
  
  
  
  
  
  
  
  
   
  
  // grass
  
  
  
  for(l=0 ;l<100;l++){
    push()
    translate(0,50)
    var n =rnd(40,80)
  var xg =xxs+170*l
  var yg =yys
  var q =rnd(2,10)
  
  
  for(p=0 ; p<q ;p++){
  var h=rnd(8,10)*p
  beginShape()
    
  curveVertex(xg+h,yg)
  curveVertex(xg+h,yg)
  
  
    curveVertex(xg+n/5+h,yg-100)
  
  curveVertex(xg+rnd(n,120)+h,yg-rnd(150,200))
  
  
  
  curveVertex(xg+n*2/6+h,yg-100)
  
  
   curveVertex(xg+n/12+h,yg)
  curveVertex(xg+n/12+h,yg)
  endShape()
    
  }
  
   for(p=0 ; p<q ;p++){
  var h=rnd(6,10)*p
  beginShape()
    
  curveVertex(xg-h,yg)
  curveVertex(xg-h,yg)
  
  
    curveVertex(xg+n/5-h,yg-n)
  
  curveVertex(xg-rnd(n/2,120/2)-h,yg-rnd(150,200))
  
  
  
  curveVertex(xg+n*2/6-h,yg-n)
  
  
   curveVertex(xg+n/12-h,yg)
  curveVertex(xg+n/12-h,yg)
  endShape()
    
  }
  pop()
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  // toys
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  for(c1= 0 ;c1<420;c1=c1+1){
    var k =rnd(0,100)
    
  for(c=0 ;c<width;c=c+5){
  strokeWeight(7)
    if(k<b){
    stroke("#FFFAF4")
    }
    else{
        stroke(0)
    }
  line(xxs+c,yys+noise(c/300)*500-c1,xxs+c,yys+noise(c/300)*500-c1)
      stroke("#FFFAF4")
     line(xxs+c,yys+noise(c/300)*500+c1*7,xxs+c,yys+noise(c/300)*500+c1*7)
    
    strokeWeight(6)
    if(c%8==0){
     stroke(0)
  line(xxs+c,yys+noise(c/300)*500,xxs+c,height+900)
    }
  }
  }
  
    if(qu>20&qu<60){
    stroke(255)
      fill("#0C134F")
  }
  else{
    stroke(0)
    fill(255)
  }
  
  
  strokeWeight(3)
  
  
  
  
  for(j=0 ; j<8;j++){
  var xs =rnd(xxs,width)
  var rs =rnd(60,80)
  
  var i2 =rnd(5,15)
  
  for(i=0 ; i<i2;i++){
      if(qu>80&qu<100){
        var to = rnd(0,100)
  if(to<20){
    fill(0)
  }
   
  if(to>20&to<40){
    fill("#df6e6d")
  }
    if(to>40&to<60){
    fill("##7e94b4")
  }
    if(to>60&to<80){
    fill("#ead4a5")
  }
    if(to>80&to<100){
    fill(255)
  }
  
  }
    var yazid=rnd(0,180)
    
    if(i<i2-1){
    if(yazid<70){
    // makhroot
  var x =xs+rnd(-20,20)
  var r =rs
   var y =yys-rs-i*rs
    push()
   
  beginShape()

  translate(x,y+r/2)
  rotate(180)
   translate(-x,-y-r/2)
  
  ellipse(x,y,r,r/3)
  
  curveVertex(x+r/2,y)
   curveVertex(x+r/2,y)
  
   curveVertex(x+r/2,y+r)
   curveVertex(x+r/2,y+r+r/15)
  
   
   curveVertex(x,y+r+r/6)
  
   curveVertex(x-r/2,y+r+r/15)
  
  
   curveVertex(x-r/2,y+r+r/55)
   curveVertex(x-r/2,y)
    curveVertex(x-r/2,y)
  endShape()
  ellipse(x,y+r,r,r/3)
  pop()
  
  
  }
  
    
    
  
   if(yazid>70&yazid<140){
  // mokaab
  var rm =rs
  var tm=1
  var xm =xs-rs/1.2+rnd(-20,20)
  var ym =yys-rs-i*rs
  rect(xm,ym,rm,tm*rm)
  quad(xm,ym,xm+rm,ym,xm+rm+rm/2,ym-rm/4,xm+rm/2,ym-rm/4)
  quad(xm+rm,ym,xm+rm+rm/2,ym-rm/4,xm+rm+rm/2,ym-rm/4+tm*rm,xm+rm,ym+tm*rm)
   }
      
      
      
         if(yazid>140&yazid<180){
      
      //  tunel
  var rm =rs*1
  var tm=1
  var xm =xs-rs/1.2+rnd(-20,20)
  var ym =yys-i*rs-rs
  rect(xm,ym,rm,tm*rm)
  quad(xm,ym,xm+rm,ym,xm+rm+rm/4,ym-rm/8,xm+rm/4,ym-rm/8)
  quad(xm+rm,ym,xm+rm+rm/4,ym-rm/8,xm+rm+rm/4,ym-rm/8+tm*rm,xm+rm,ym+tm*rm)
  
  push()
  fill(bc)
  translate(xm+rm/2,ym+rm)
  rotate(180)
   translate(-xm-rm/2,-ym-rm)
  strokeWeight(3)
     fill(100)
  arc(xm+rm/2,ym+rm,rm*0.8,rm*1.4,0,180,PIE)
          fill(255)
         arc(xm+rm/2,ym+rm,rm*0.6,rm*1.2,0,180,PIE)
  pop()
      }
      
      
      
      
      
      
      
      
      
      
      
    }
    
    
    else{
    
      
  
  var to = rnd(0,100)
  if(qu>80&qu<100){
  if(to<20){
    fill(0)
  }
   
  if(to>20&to<40){
    fill("#df6e6d")
  }
    if(to>40&to<60){
    fill("##7e94b4")
  }
    if(to>60&to<80){
    fill("#ead4a5")
  }
    if(to>80&to<100){
    fill(255)
  }
  
  }
      if(yazid<10){
        
  
  var to = rnd(0,100)
  if(qu>80&qu<100){
  if(to<20){
    fill(0)
  }
   
  if(to>20&to<40){
    fill("#df6e6d")
  }
    if(to>40&to<60){
    fill("##7e94b4")
  }
    if(to>60&to<80){
    fill("#ead4a5")
  }
    if(to>80&to<100){
    fill(255)
  }
  
  }
    // makhroot
  var x =xs+rnd(-20,20)
  var r =rs
   var y =yys-rs-i*rs
    push()
   
  beginShape()

  translate(x,y+r/2)
  rotate(180)
   translate(-x,-y-r/2)
  
  ellipse(x,y,r,r/3)
  
  curveVertex(x+r/2,y)
   curveVertex(x+r/2,y)
  
   curveVertex(x+r/2,y+r)
   curveVertex(x+r/2,y+r+r/15)
  
   
   curveVertex(x,y+r+r/6)
  
   curveVertex(x-r/2,y+r+r/15)
  
  
   curveVertex(x-r/2,y+r+r/55)
   curveVertex(x-r/2,y)
    curveVertex(x-r/2,y)
  endShape()
  ellipse(x,y+r,r,r/3)
  pop()
  
  
  }
  
    
    
  
   if(yazid>10&yazid<20){
     
  
  var to = rnd(0,100)
  if(qu>80&qu<100){
  if(to<20){
    fill(0)
  }
   
  if(to>20&to<40){
    fill("#df6e6d")
  }
    if(to>40&to<60){
    fill("##7e94b4")
  }
    if(to>60&to<80){
    fill("#ead4a5")
  }
    if(to>80&to<100){
    fill(255)
  }
  
  }
  // mokaab
  var rm =rs
  var tm=1
  var xm =xs-rs/2+rnd(-20,20)
  var ym =yys-rs-i*rs
  rect(xm,ym,rm,tm*rm)
  quad(xm,ym,xm+rm,ym,xm+rm+rm/2,ym-rm/4,xm+rm/2,ym-rm/4)
  quad(xm+rm,ym,xm+rm+rm/2,ym-rm/4,xm+rm+rm/2,ym-rm/4+tm*rm,xm+rm,ym+tm*rm)
   }
      
      
      
      
      
      
      
      
      
      
      
      
  
  
  if(yazid>20&yazid<60){
    
  
  var to = rnd(0,100)
  if(qu>80&qu<100){
  if(to<20){
    fill(0)
  }
   
  if(to>20&to<40){
    fill("#df6e6d")
  }
    if(to>40&to<60){
    fill("##7e94b4")
  }
    if(to>60&to<80){
    fill("#ead4a5")
  }
    if(to>80&to<100){
    fill(255)
  }
  
  }
  var rt =rs
  var xt =xs-rs/1.5+rnd(-20,20)
  var yt =yys-i*rs
  triangle(xt,yt,xt+8/10*rt,yt-rt,xt+rt,yt)
  
   triangle(xt+rt,yt,xt+8/10*rt,yt-rt,xt+rt+rt/3,yt-rt/3)
  
  }
  
  if(yazid>60&yazid<100){
    
  
  var to = rnd(0,100)
  if(qu>80&qu<100){
  if(to<20){
    fill(0)
  }
   
  if(to>20&to<40){
    fill("#df6e6d")
  }
    if(to>40&to<60){
    fill("##7e94b4")
  }
    if(to>60&to<80){
    fill("#ead4a5")
  }
    if(to>80&to<100){
    fill(255)
  }
  
  }
  // heram2
  var t =rnd(2,6)
  var rt2 =rs
  xt2 =xs-rs+rnd(-20,20)
  yt2=yys-i*rs
  triangle(xt2,yt2,xt2+rt2/t,yt2-rt2,xt2+rt2,yt2)
  
  quad(xt2+rt2/t,yt2-rt2,xt2+rt2,yt2,xt2+rt2+rt2,yt2-rt2/4,xt2+rt2/t+rt2,yt2-rt2-rt2/4)
  
  
  }
  
      
      
     if(yazid>100&yazid<140){ push()
                             
  
  var to = rnd(0,100)
  if(qu>80&qu<100){
  if(to<20){
    fill(0)
  }
   
  if(to>20&to<40){
    fill("#df6e6d")
  }
    if(to>40&to<60){
    fill("##7e94b4")
  }
    if(to>60&to<80){
    fill("#ead4a5")
  }
    if(to>80&to<100){
    fill(255)
  }
  
  }
       var ya =yys-i*rs
  var xa =xs+rnd(-20,20)
  var ra =1.5*rs
  translate(xa ,ya)
  rotate(180)
    translate(-xa ,-ya)
  
  arc(xa,ya,ra,ra,0,180,PIE)
    arc(xa,ya-ra/10,ra,ra,0,180,PIE)
  
circle(xa,ya,10)
                             pop()
     }  
      
      
      
      
      if(yazid>140&yazid<180){
      
      //  tunel
  var rm =rs*1
  var tm=1
 var xm =xs-rs/1.5+rnd(-20,20)
  var ym =yys-i*rs-rs
  rect(xm,ym,rm,tm*rm)
  quad(xm,ym,xm+rm,ym,xm+rm+rm/4,ym-rm/8,xm+rm/4,ym-rm/8)
  quad(xm+rm,ym,xm+rm+rm/4,ym-rm/8,xm+rm+rm/4,ym-rm/8+tm*rm,xm+rm,ym+tm*rm)
  
  push()

  translate(xm+rm/2,ym+rm)
  rotate(180)
   translate(-xm-rm/2,-ym-rm)
  strokeWeight(3)
        fill(0)
  arc(xm+rm/2,ym+rm,rm*0.8,rm*1.4,0,180,PIE)
          fill(bc)
         arc(xm+rm/2,ym+rm,rm*0.6,rm*1.2,0,180,PIE)
  pop()
      }
      
      
      
      
    }
  
  
  }
  }
 
  
  
  
  
  
  
  
  // toys end
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  // part2
  
  
  
  
  
  
  
  
// plant tavil
  for(j=0;j<rnd(20,50);j++){
    
 var rot=rnd(-25,15)
    
  var x =rnd(xxs,width)
  var y=yys
  var r=rnd(50,100)
  push()
  
   translate(x,y)
    
  rotate(rnd(-26,8))
     translate(-x,-y)
  var rx =rnd(12,35)
  
for(i=0 ; i<rnd(4,22);i++){
  noFill()
   beginShape();
  strokeWeight(3)
  // fill(0)
curveVertex(x+10*i, y-r*i);
curveVertex(x+10*i, y-r*i);
    curveVertex(x+10*i, y-r/2-r*i);
    curveVertex(x+10+10*i,y-r-r*i);
curveVertex(x+10+10*i,y-r-r*i);
    
    endShape()
  if(v1<30){
  fill("#854954")
    }
    if(v1>30&v1<70){
    
    if(qu>20&qu<60){
    stroke(255)
      fill("#0C134F")
  }
  else{
    stroke(0)
    fill(255)
  }
  
    }
     if(v1>70){
   
    if(qu>20&qu<60){
    stroke(255)
      fill("#0C134F")
  }
  else{
    stroke(0)
    fill(255)
  }
  
    }
  strokeWeight(1)
  ellipse(x+rx/2+10*i-i,y-r*i,rx-2*i,rx/2)
  ellipse(x-rx/2+10*i+i,y-10-r*i,rx-2*i,rx/2)
   ellipse(x+rx/2+10*i-i,y-rx-r*i,rx-2*i,rx/2)
   ellipse(x-rx/2.9+10*i+i,y-30-r*i,rx-2*i,rx/2)
  ellipse(x+rx/1.4+10*i-i,y-40-r*i,rx-2*i,rx/2)
  
}
pop()
    
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
      // flower
    
 for(e= 0 ; e<4 ;e++){
   push()
  strokeWeight(8)
  var d =rnd(xxs,width)
    var f1 =0
  var a =rnd(180,350)
  var a2 =rnd(a,2*a)
  var d1=yys-a-a2
  
  noFill()
  beginShape()
  curveVertex(d,d1)
   curveVertex(d,d1)
  
  curveVertex(d+rnd(-70,70),d1+a/2+a2/2)
  
   curveVertex(d+f1,d1+a+a2)
   curveVertex(d+f1,d1+a+a2)
  endShape()
  
  var flo =a/3
  
  for(u=0 ; u<260/2 ;u++){
  push()
 
    if(qu>20&qu<60){
    stroke(255)
      fill("#0C134F")
  }
  else{
    stroke(0)
    fill(255)
  }
  
      
      
      
      translate(d,d1)
    rotate(rnd(0,360))
      translate(-d,-d1)
    
    
    var v =rnd(20,flo)
  beginShape()
  strokeWeight(4)
  
  curveVertex(d,d1)
    curveVertex(d,d1)
  
   curveVertex(d+v/2,d1-8/10*v)
  
  
    curveVertex(d+v,d1-v)
  
     curveVertex(d+v/2,d1-1/10*v)
  
  curveVertex(d,d1)
    curveVertex(d,d1)
  
  
  
  
  endShape()

    pop()
  }
  
      fill(10)
    circle(d,d1,v/1.1)
   pop()
  }
  
  
  
  
  
  
  
  
   
  
  // grass
  
  
  
  for(l=0 ;l<60;l++){
    push()
    translate(0,rnd(-20,110))
    var n =rnd(40,80)
  var xg =xxs+100+rnd(40,80)*l
  var yg =yys
  var q =rnd(2,10)
  
  strokeWeight(1.3)
  
  for(p=0 ; p<q ;p++){
  var h=rnd(8,10)*p
   var ww=rnd(0,100)
  if(ww<50){
    fill(255)
  }
  if(ww>50){
    fill("#7AA874")
  }
  beginShape()
    
  curveVertex(xg+h,yg)
  curveVertex(xg+h,yg)
  
  
    curveVertex(xg+n/5+h,yg-100)
  
  curveVertex(xg+rnd(n,120)+h,yg-rnd(150,200))
  
  
  
  curveVertex(xg+n*2/6+h,yg-100)
  
  
   curveVertex(xg+n/12+h,yg)
  curveVertex(xg+n/12+h,yg)
  endShape()
    
  }
  
   for(p=0 ; p<q ;p++){
  var h=rnd(6,10)*p
  beginShape()
    
  curveVertex(xg-h,yg)
  curveVertex(xg-h,yg)
  
  
    curveVertex(xg+n/5-h,yg-n)
  
  curveVertex(xg-rnd(n/2,120/2)-h,yg-rnd(150,200))
  
  
  
  curveVertex(xg+n*2/6-h,yg-n)
  
  
   curveVertex(xg+n/12-h,yg)
  curveVertex(xg+n/12-h,yg)
  endShape()
    
  }
  pop()
  }
  
  
  

  
  }

  strokeWeight(6)
  if(qu<20){
    // zeresh
  fill(229,203,199,80)
  rect(0,0,width,height)
  }
  
   if(qu>20&qu<40){
     // abi
  fill(103,144,205,80)
  rect(0,0,width,height)
  }
  
  
   if(qu>40&qu<60){
     // zreshkitire
  fill(164,82,82,120)
  rect(0,0,width,height)
  }
   if(qu>60&qu<180){
     // sabz
  fill(146,167,142,80)
  rect(0,0,width,height)
  }
   if(qu>80&qu<100){
     // toosi
  fill(206,206,206,30)
  rect(0,0,width,height)
  }
  
  
  
  
  
  
  
  
  fxpreview()
  noLoop()
}

function rnd(min,max){
  return fxrand()*(max-min) + min;
}

