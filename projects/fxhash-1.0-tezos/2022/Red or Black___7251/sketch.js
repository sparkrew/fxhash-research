let w,h,pt,r;

let xv=[],yv=[],rv=[],nv=[];
let x=[],y=[],ang=[];
let N = 2000;

function setup(){
  let wh = min(windowWidth,windowHeight);
  w = wh;
  h = wh;
  pt = w/1000;
  r = w/3;
  createCanvas(w,h);
  colorMode(RGB);
  v1 = 255;
  v2 = 180;
  let cores = (v1,v2)
  let cor = random(cores);
  background(cor,0,0);
  //background(231,40,40);
  //background(random(1, 100));
  strokeCap(SQUARE)
  noStroke();
  fill(10,10,90);
  for (let i=0; i<N; i++){
    xn = random();
    x[i] = w*(xn)
    y[i] = h*(random())
    ang[i] = random()*2*PI;
  }
}

R=(a=1)=>random()*a;
let i=0;
function draw(){

  let S = 100+R(50)|0;
  sw = (2+R(40)|0)*pt/2;
  noFill();
  let dir = R()<.5?1:-1
  nst = 5;
  xo = x[i];
  yo = y[i];
  strokeWeight(sw)
  //stroke(10,10,90)
  stroke(random(10, 100));
  beginShape();
  for (let j=0;j<S;j++){
    n = noise(xo/w*nst,yo/h*nst);
    angle = n*2*PI;
    dx = dir*2*cos(angle);
    dy = dir*2*sin(angle);
    xo+=dx;
    yo+=dy;
   // if (check(xo,yo,sw/2,i,xv,yv,rv,nv)) break;
    //if (sqrt(sq(xo-w/2)+sq(yo-h/2))<r) break;
    xv.push(xo);
    yv.push(yo);
    rv.push(sw/2);
    nv.push(i);
    vertex(xo,yo)
  }
  endShape();

  i++
  if (i>=N) noLoop();

}

function check(x,y,r,n,xv,yv,rv,nv){
  flag = false;
  for (let i=0;i<xv.length; i++){
    let dist = sqrt(sq(x-xv[i])+sq(y-yv[i]));
    if (dist < (r+rv[i]+1*pt) && n!=nv[i]) flag = true;
  }
  return flag;
}