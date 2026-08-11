let w=3000
let mainC
let noP//no of partitions
let noB//no of buildings
let pCol=[]
function setup() {
  let seed=floor(999999*fxrand())
  randomSeed(seed);
  noiseSeed(seed);

  do {
    noP=4+floor(fxrand()*9)
    noB=floor(fxrand()*250)
  } while (noP/noB>0.12);

  // print(noP,noB,noP/noB)
  mainC=360*fxrand()
  let tempcan=createCanvas(w, w);
  tempcan.parent('fullscreen');
  angleMode(DEGREES);
  colorMode(HSB);
  rectMode(CENTER)
  noLoop()
}
function draw() {
  background(0)
  noStroke()
  for(let i=0;i<noP;i++){
    push()
    let gradient = drawingContext.createLinearGradient(0,(i+1)*width/noP, 0,(i)*width/noP)
    let tempc=360*fxrand()
    pCol.push(tempc)
    // gradient.addColorStop(0, color((mainC+i*360/noP)%360,100,0));
    // gradient.addColorStop(1, color((mainC+i*360/noP)%360,75,100));
    gradient.addColorStop(0, color(tempc,100,0));
    gradient.addColorStop(1, color(tempc,75,100));
    drawingContext.fillStyle = gradient;
    rect(width/2,(2*i+1)*width/(2*noP),width,width/noP)
    pop()
  }
  genBuilds()
  fxpreview()
}

function genBuilds(){
  let sideL=width/noB
  for(let i=0;i<noP;i++){
    let decide=fxrand()
    for(let j=0;j<noB;j++){
      // let n=floor((fxrand()*(width/noP)/sideL)*.8)
      let n=width
      while(n>width/(noP*sideL))n=abs(floor((randomGaussian()*0.4*(width/noP)/(2*sideL)+(width/noP)/(2*sideL))*.8))
      // fill((180+(i+1)*360/noP)%360,100,100)
      // let c=(mainC+180+(i+1)*360/noP)%360
      let c=(pCol[i]+180)%360
      genSquare((i+1)*width/noP-sideL/2,(2*j+1)*height/(2*noB),n,sideL,c,decide)
      // square((2*j+1)*height/(2*noB),(2*i+1)*width/(2*noP),sideL)
    }
  }
}
function genSquare(y,x,n,s,c,d){
  // if(d>0.5){
    for(let k=0;k<n;k++){
      push()
      translate(x,y-k*s)
      // if(k)rotate(10*fxrand())
      fill((c+randomGaussian()*10)%360,80,100,0.9)
      // stroke((c+randomGaussian()*10)%360,80,100)
      if(fxrand()<0.01)fill(90)
      // else if(fxrand()<0.005)fill((c+90+randomGaussian()*10)%360,80,100)
      // square(x,y-k*s,s)
      square(0,0,s*1.05)
      translate(-x,-y+k*s)
      pop()
    }
  // }
  // else{
  //   for(let k=0;k<n;k++){
  //     push()
  //     fill((c+randomGaussian()*10)%360,80,100)
  //     if(fxrand()<0.01)fill(90)
  //     // else if(fxrand()<0.005)fill((c+90+randomGaussian()*10)%360,80,100)
  //     // square(x,y-k*s,s)
  //     circle(x,y-k*s,s)
  //     pop()
  //   }
  // }
}
function regpoi(a, r) {
  return [r/2 * cos(a), r/2 * sin(a)];
}
function regpol(tx,ty,col) {
  let i;
  for (i = 0; i < arr.length - 1; i++)
    lin.push(
      new linee(arr[i][0], arr[i][1], arr[i + 1][0], arr[i + 1][1],tx,ty, col)
    );
  lin.push(new linee(arr[i][0], arr[i][1], arr[0][0], arr[0][1], tx,ty,col));
}
