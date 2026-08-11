let p=[]
let m=0.03;
let r,g,b

function setup() {
  let hi=0.03
  let lw=0.009
  m=fxrand()*(hi-lw)+lw
  r=fxrand()*(255-200)+200
  g=fxrand()*(255-150)+150 
  b=fxrand()*(255-150)+150 
  
  createCanvas(windowWidth,windowHeight)
  background(10)
  
  let d=540
  let s=width/d
  let ff= fxrand()*((s*1.25)-(s*0.85))+(s*0.85)
  
  let max=10
  let min=-10
  let re=fxrand()*(max-min)+min
  for(let x=-50;x<=width+50;x+=s){
    for(let y=270;y<height+200;y+=ff){
      let v=createVector(x+re,y+re)
      p.push(v);
    }
}

sun()
moon()
ll()
}

function ll(){
  
  noiseSeed(fxrand()*100)
  ellipseMode(CENTER)

  for(let i=0;i<p.length;i++){
    
    fill(r,g-50,b-60,100)
   
    let a= map (noise(p[i].x*m , p[i].y*m), 0,1,PI,2*PI)
   
    p[i].add(createVector(sin(a),cos(a)/m))

    ellipse(p[i].x,p[i].y,1.85)

  }
}

function lll(){
  
    noiseSeed(fxrand()*100)
  ellipseMode(CENTER)

  for(let i=0;i<p.length;i++){


    fill(r-5,g-55,b-70,20)
   noStroke()
   
    let a= map (noise(p[i].x*m , p[i].y*m), 0,1,0,PI*(i+50)*10)

    p[i].add(createVector(sin(a)/m,sin(a)/m))
    ellipse(p[i].x,p[i].y,1)
  }
if(frameCount>1)
 noLoop()
}
function sun(){
  
   noStroke()

  fill(250)
  
  let e=width-100
  
  let mm=45
  let mn=-5
  
  ellipse(fxrand()*(e-80)+80,50+fxrand()*(mm-mn)+m,80)
}

function moon(){
 
  for(let i=10;i<=width+10;i+=fxrand()*(45-22)+22){
   for(let j=0;j<=230;j+=fxrand()*(45-12)+12)
      {
        let mix=fxrand()*200
        fill(255,255,255,10+mix)
        noStroke()
          let mx=15
  let mn=-15
  let rx=fxrand()*(mx-mn)+mn
        ellipse(i+rx,j+rx,fxrand()*(6-2)+2)
    
      }
  }
}