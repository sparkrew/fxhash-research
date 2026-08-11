



function setup() {
    var cnv = createCanvas(600, 600);
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
  noiseSeed(fxrand() *9999)
  randomSeed(fxrand() *9999)
  
  
 
  
}

function draw() {
  background(220);
 
  
  for(i=0;i<200;i++){
    fill(255)
  var rec=rnd(0,width)
   var recc=rnd(0,height)
  rectMode(CENTER);
   
    var b =rnd(width/12,2*width/6)
    var bb=rnd(width/12,2*width/6)
     strokeWeight(5)
   
  rect(rec,recc,b,bb)
   
     strokeWeight(0.8)
    rect(rec,recc,b-b/8,bb-bb/8)
    strokeWeight(rnd(0.1,0.5))
    for(y=0;y<4;y++){
        var ki = rnd(b/5,2*b/3)
          var na = rnd(bb/5,2*bb/3)
       rectMode(CENTER);
         for(l=0;l<50;l++){
 var  fg = rnd(220,255)
          
  var fgg = rnd(220,255)
        
 var  fggg = rnd(220,255)
      bg = 255
    }
    if(rnd(0,100)<30){
    fill(fg,fgg,fggg)
  }else{
    fill(bg)
  }
 rect(rec,recc,ki,na)
    
    }
    for(e=0;e<rnd(-2,2);e++){
       strokeWeight(rnd(0.1,0.5))
    var v = rnd(rec-b/5,rec+b/5)
    var vv = rnd(recc-bb/5,recc+bb/5)
    
    
   
     
   
    
    ellipse(v,vv,b/2,bb/2)
    }
     
    
    
   // point(rec,recc)
  }
  rectMode(CORNER);
  fill(0,0,0,0)
  stroke(255)
strokeWeight(80)
  rect(0,0,width,height)
  stroke(0)
  strokeWeight(rnd(15,50))

  fill(0,0,0,0)
  rect(0,0,width,height)
  strokeWeight(10)
   rect(35,35,width-70,height-70)
  
  
  
  noLoop();
  
}
function rnd(min,max){
  return fxrand()*(max-min) + min;
}