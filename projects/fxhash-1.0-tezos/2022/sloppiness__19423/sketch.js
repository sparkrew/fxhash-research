function setup() {
 var cnv = createCanvas(600, 600);
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
  noiseSeed(fxrand() *9999)
  randomSeed(fxrand() *9999)
}

function draw() {
 background(150);

  
  
  
  
  
    for(p=0;p<70000;p++)
  {
    stroke(165)
    strokeWeight(1)
  point(rnd(0,width),rnd(0,height))
  
  
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  var v = rnd(0,100)
  
  
  
  
 if(30<v& v<90){
  for(k = 0 ; k <1 ; k++){
  var ff = rnd(450,500)
  var f = rnd(250,300)
   strokeWeight(rnd(30,40))
  arc(ff, f, 20, 20, 0, PI);
 if(rnd(1,100)<50){
   stroke(0)
 }
   else{
     stroke(255)
   }
    for(l =0 ; l<20 ; l++){
   var b = rnd(10,90)}
   stroke(rnd(0,255))
  arc(ff, f, 20, 20, PI, 0);
  
  stroke(rnd(0,255))
    
  arc(ff, f, 95, 95, PI / 6, PI * 5 / 6);
 stroke(rnd(0,255))
  arc(ff, f, 95, 95, PI * 5 / 6, PI * 3 / 2);
  stroke(rnd(0,255))
  arc(ff, f, 95, 95, PI * 3 / 2, PI / 6);
  
 stroke(rnd(0,255))
  arc(ff, f, 70, 70, 0, PI / 2);
 stroke(rnd(0,255))
  arc(ff, f, 70, 70, PI / 2, PI);
 stroke(rnd(0,255))
  arc(ff, f, 70, 70, PI, PI * 3 / 2);
  stroke(rnd(0,255))
  arc(ff, f, 70, 70, PI * 3 / 2, 0);
  
  stroke(rnd(0,255))
  arc(ff, f, 105, 105, PI * 3 / 10, PI * 7 / 10);
 stroke(rnd(0,255))
  arc(ff, f, 105, 105, PI * 7 / 10, PI * 11 / 10);
 stroke(rnd(0,255))
  arc(ff, f, 105, 105, PI * 11 / 10, PI * 3 / 2);
  stroke(rnd(0,255))
  arc(ff, f, 105, 105, PI * 3 / 2, PI * 19 / 10)
 stroke(rnd(0,255))
  arc(ff, f, 105, 105, PI * 19 / 10, PI * 3 / 10)
  
    }
  }
  
   
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
   if(v<30){
  translate(0,-50)
  var rec = rnd(380,400)
    var recc = rnd(250,280)
  var n = rnd(50,100)
  strokeWeight(0)
  fill(0,0,0)
  
  rect(rec,recc,n,2*n)
  fill(255)
  rect(rec+n,recc,n,2*n)
  
   }
  
  
  
  
   
  
  
  
  
  
  
  
//   for(o = 0 ; o<500 ; o++){
//   stroke(0,0,010)
//    strokeWeight(0.1)
//   line(rnd(0,width),rnd(0,width),rnd(0,height),rnd(0,height))
//   }
     var xx = rnd(-0.0028,0.00205)
  
  var p = rnd(-10,100)
 var t = rnd(20,30)
  for(j=0 ; j<15;j+=1.2){
    for(i=0 ; i<rnd(1,30);i++){
      
    
      
      
      
 rotate(xx);
   stroke(rnd(0,4),rnd(0,4),rnd(0,4))
  strokeWeight(t)
      strokeWeight(4)
    var y =rnd(-100,100)
       var yy =rnd(-150,10)
  strokeCap(ROUND)
  line(200+yy,100+t*j,200+y,100+t*j)
      stroke(0)
      // strokeWeight(rnd(2,50))
      strokeWeight(rnd(1,3))
      var r = rnd(5,20)
      // fill(255)
      // stroke(0)
      // circle(rnd(300+yy,300+y),100+t*j,r)
      fill(0)
      stroke(255)
            circle(rnd(200+yy,200+y),100+t*j+rnd(-5,5),r-r/5)
      rect(rnd(200+yy,200+y),100+t*j+rnd(-10,0),r-r/5)
      
     
  
    }
    
    
    
  }
  
  stroke(0)

  strokeWeight(0.5)
  translate(width/2,height/2)
  var c = rnd(-1000,width+100)
  for(u = 0 ; u<900 ; u+=5){
  line(c+u,rnd(-400,300),c+u,rnd(-400,300))
    
    
  
    
  
  
  }
  
  
    // for(q= 0 ; q<2 ; q++){
    //   strokeWeight(4)
    //    line(-50+yy+rnd(-100,100) , -400 , -50+yy+rnd(-100,50)  , -150)
    //   }
 
  
  
  
  
  
  
  
  
  
  noLoop()
}

function rnd(min,max){
  return fxrand()*(max-min) + min;
}