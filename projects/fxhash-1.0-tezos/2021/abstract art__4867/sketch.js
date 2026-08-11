//A fork of a landscape by Richard Bourne// Fxhash Function by Cassio Dezotti// openprocessing CreativeCommons Attribution ShareAlike
 mover =1
rotater =1 

  var tk1 =0; 
  var tk2  =0;
  var tk3 =0;
  var tk4=0;

 


function setup() {
  print(fxhash[3])
  
   for(var x = 0; x < fxhash.length; x++){
    if(x<13){
      tk1 += unchar(fxhash[x]); 
    }
    if (x>13 && x < 27){
      tk2 += unchar(fxhash[x]);
    }
    if (x>27 && x < 40){
      tk3 += unchar(fxhash[x]);
    }
    if (x>40 ){
      tk4 += unchar(fxhash[x]);
    }
  }
  tk1 = map (tk1,850,1000,150,300);
  tk2 = map (tk2,900,9000,100,900);
  tk3 = map (tk3,850,8000,300,3000);
  tk4 = map (tk4,900,9000,60,400);
  print(tk1,tk2,tk3,tk4);
  
 createCanvas(windowWidth , windowHeight);
  rectMode(CENTER)
  angleMode(DEGREES)
  colorMode(RGB, 150)
}



function draw() {
  background(15)
  
  for (s=0; s<tk1-tk3+100; s+=50){ //fhash tamanho 
    for(i=0; i<380; i+=10){
      push()
      translate(width/2 + sin(mover+i) *s, height/2+ cos(mover+i) *s);    
      rotate(rotater);
      //noStroke()
      fill(abs(i)%tk2,tk4, tk4+tk4, tk2)  //fhash
      stroke(50,10,50);
      rect(0, 0, 40);
  
      rotater+=.3,5
      pop(7)
      mover+=.005
     
      
      
    }
  }
}


  
  

