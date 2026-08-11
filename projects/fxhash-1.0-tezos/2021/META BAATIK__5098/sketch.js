let i=5; 
let j=5;
let c, r, g,b;
function setup(){
  //noLoop()

  noFill()
  c= createCanvas(windowWidth,windowHeight);
  background( 255 )
  strokeWeight( 3 )
  stroke ( 250 , fxrand()*255 , fxrand()*255 ) //random(255),random(255),random(255))
  ellipseMode(CENTER)
 
}


function draw() {

  let max = 200
  let min = 50

  size = fxrand()*(max-min)+min 
  
   for(i=width+size; i>=-width/2; i-=size/5){    
    for(j=height+size; j>=-height/2; j-=size/5){
      let pos=25
      let neg=-25

     // fill ( fxrand()*(200-100)+100 , fxrand()*(150-100)+100,150,80) 
     // ellipse( i+fxrand()*(pos-neg)+neg , j+fxrand()*(pos-neg)+neg , fxrand()*(size-size/4)+size/4 ) 

      fill( fxrand()*(200-50)+50 , 150 , fxrand()*(200-100)+100,200) 
      rect(i,j,fxrand()*(size-size/4)+size/4) 
      
      // fill( fxrand()*(200-50)+50 , 150 , fxrand()*(150-100)+100,80) 
      // ellipse(i,j,fxrand()*(size-size/2)+size/2) 
      
    } 
  }
  
  for(i=0; i>=width+size; i+=size){    
    for(j=0; j>=height+size; j+=size){
      let pos=5
      let neg=-5

     fill ( fxrand()*(200-100)+100 , fxrand()*(150-100)+100,150,80) 
     ellipse( i+fxrand()*(pos-neg)+neg , j+fxrand()*(pos-neg)+neg , fxrand()*(size-size/4)+size/4 ) 

//       fill( fxrand()*(200-50)+50 , 150 , fxrand()*(200-100)+100,80) 
//       ellipse(i,j,fxrand()*(size-size/4)+size/4) 
      
//       fill( fxrand()*(200-50)+50 , 150 , fxrand()*(150-100)+100,80) 
//       ellipse(i,j,fxrand()*(size-size/2)+size/2) 
      
    } 
  }
 
 
  filter(DILATE)
   filter(POSTERIZE,5)
}
     