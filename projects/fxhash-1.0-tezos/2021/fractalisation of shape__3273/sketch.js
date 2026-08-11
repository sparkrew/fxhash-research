let p=[]
let m=0.001;
let mk=fxrand(0.005,0.0065);
function setup() {
  
  createCanvas(600,600);
  background(15)
  
    if(dist(width/2,height/2,100,300)<250){
    let d1=80;
  let s1=width/d1
  for(let x=0;x<=width;x+=s1){
    for(let y=0;y<height;y+=s1){
      let v=createVector(x+fxrand(-15,15)*15,y+fxrand(-15,15)*15)
      p.push(v);
    }
}
}
  else{
    let d=50;
  let s=width/d
  for(let x1=0;x1<=width;x1+=s){
    for(let y1=0;y1<height;y1+=s){
      let v2=createVector(x+fxrand(-5,5)*5,y+fxrand(-5,+5)*5)
      p.push(v2);
    }
}
}
 
}
function draw() {
 noiseSeed(fxrand()*100)
  ellipseMode(CENTER)

  
  for(let i=0;i<p.length;i++){
  let r=map (p[i].x,0,width,60,250)
  let g=map (p[i].y,0,width,80,220)
  let b1=map (p[i].x,0,width,250,25)
  //stroke(10,200);
   // strokeWeight(.1)
    //noFill()
    //stroke(g,b,r,250)
    let a= map (noise(p[i].x*m , p[i].y*m), 0,1,0,500)
    let b= map (noise(p[i].x*mk , p[i].y*mk), 0,1,0,120)
   
    
    if(dist(width/2,height/2,p[i].x,p[i].y)<200){
      p[i].add(createVector(sin(a),sin(a)))
   noStroke()
      fill(r,g,b1,200)
      ellipse(p[i].x,p[i].y,1)
    }
    else{
      p[i].add(createVector((cos(a)),sin(b)))
    fill(b1,r,g)
      noStroke()
    ellipse(p[i].x,p[i].y,.3)
  }
  }
  //frameRate(1)
  if(frameCount>1200)
  noLoop()
}