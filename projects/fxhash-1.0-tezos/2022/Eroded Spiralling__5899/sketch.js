let r,g,b,u,l,o,rr;

function setup() {
  
  createCanvas(800,800);
  
  blendMode(ADD)
  
  r=int(fxrand()*(240-155)+155) //random(240,155))
  g=int(fxrand()*(255-150)+150)
  b=int(fxrand()*(240-135)+135)
  
  u=int(fxrand()*(165-50)+50) //random(40,155))
  l=int(fxrand()*(235-50)+50) //random(50,235))
  o=int(fxrand()*(255-150)+150)
  
}


function draw() {
   
  blendMode(MULTIPLY)

  background(0,0,0)

   blendMode(ADD)

  
  rr=int(fxrand()*(20-7)+7) //random(20,8))
  
  for(let i=01;i<width;i+=rr){ 
  
  strokeWeight(0.5)
  
  
  //   stroke(g,b,r)
  // line(0,height-i,width,i)
   
//     stroke(r,g,b)
//   line(i,height,width,height-i)
  
  //   stroke(b,r,g)
  // line(i,0,0,height-i)
  
    stroke(u,l,o)
  line(width,i,0,height-i)
   
   stroke(o,l,u)
  line(i,height,width-i,0)

//   stroke(u,o,l)
//   line(width,i,i,0)
    
//   stroke(u,l,o)
//   line(0,i,i,height)
    
} 
  
  let skip=int(fxrand()*(45-10)+10)//random(10,48))
  
  for(let i=0;i<=width;i+=skip){
  for(let j=0;j<=height;j+=skip){
    
    noFill()
    strokeWeight(0.5)

    noFill()

   stroke(r,b,g, 20)
   ellipse(width/2,height/2, i+j) //(i+j)/4)
  }
}
  
    let rrr=int(fxrand()*(15-2)+2) //random(2,14))
  
    for(let i=0;i<=width;i+=rrr){ 
  
      strokeWeight(0.5)
      noFill()
      stroke(r,g,b,150)
      rectMode(CENTER)
      rect(width/2,height/2,i+i,i+i,i/5)
      
    }
  
  
  noFill()
  noLoop()
  
  filter(DILATE)
  
  filter(ERODE)
  
  filter(BLUR,.5)
  
  filter(POSTERIZE,3)
  //filter(INVERT)
}
