let i=0; 
let j=0;
let c, r, g,b;
function setup(){
  noLoop()
  noStroke();
  //strokeWeight(2)
  //stroke(255,255,255)
  //blendMode(OVERLAY)
  c= createCanvas(windowWidth,windowHeight);
  background(50)
}


function draw() {
//randomSeed()
  let size=fxrand()*(100-15)+15//random(20,100)
  
  for(i=0; i<=width;i+=size){
    
    for(j=0;j<=height;j+=size){
     fill(150,100)
      //fill(random(255),random(255),random(255),100);
    rect(i,j,size,size,size/10);
      rect(i,j,size,size,size-2);
      rect(i,j,size,size,size-1);
      rect(i,j,size,size,size-3);
      rect(i,j,size-2,size-2,size-2);
      rect(i,j,size-4,size-4,size-2);
      rect(i,j,size-5,size-5,size-2);
      rect(i,j,size-6,size-6,size-2);
      
   
}
}
 for(i=0; i<=width;i+=size){
    
    for(j=0;j<=height;j+=size){
      let m=fxrand()*(175-120)+120
    fill(m,150)
     //noStroke()
     //fill(random(255),random(255),random(255),200);
    rect(i,j,size,size);
    } 
  }

}