let p0=[]
let simplex=[]
let dx;let dy;let dxn;let dyn
let poly=[]
let r
let noS=2700
let noShapes
let sha=[]
let noPoly //no of polygons
let maincol=[]
let noS2=9
let poly2=[]
let sha2=[]
let stripes=[]
let chooseShapes=[]
let d
let w
let mask1
let coff
let chooseDesign
let featuredD
function setup() {
  let seed=floor(999999*fxrand())
  randomSeed(seed);
  noiseSeed(seed);
  coff=10000000*fxrand()
  let can=createCanvas(1000,1000)
  can.parent('fullscreen')
  mask1=createGraphics(width,height)
  mask1.clear()
  makeMask()
  w=width
  stripes[0]=floor(5+2*floor(3*fxrand()))
  stripes[1]=PI*fxrand()
  colorMode(HSB);
  // let dd=75
  d=6
  for(let i=0;i<noS2;i++){
    poly2[i]=[]
    let check=true
    let count=0
    while(check){
      if(count>1000){
        count=0
        d++
      }
      r=w/d
      count++
      check=false
      sha2.push(new shap2(i))
      for(let j=0;j<sha2.length-1;j++){
        if(GJK2(j,i)){
          sha2.pop()
          poly2[i].length=0
          check=true
          break
        }
      }
    }
  }
  d=100
  choosingShapes()
  choosingDesign()
  print(chooseDesign)
  designFeature()

  maincol[0]=360*fxrand()
  maincol[1]=(maincol[0]+180)%360//(dd<maincol[0])?(maincol[0]+dd+(360-2*dd)*fxrand())%360:(maincol[0]+dd+(360-2*dd)*fxrand())%360
  print(maincol)

  for(let ii=0;ii<noS;ii++){
    poly[ii]=[]
    let check=true
    let count=0
    while(check){
      if(count>1000){
        count=0
        d++
      }
      r=w/d
      count++
      check=false
      sha.push(new shap(ii))
      for(let j=0;j<sha.length-1;j++){
        if ((sha[ii].r+sha[j].r)**2<((sha[ii].cx-sha[j].cx)**2 + (sha[ii].cy-sha[j].cy)))continue
        if(GJK(j,ii)){
          sha.pop()
          poly[ii].length=0
          check=true
          break
        }
      }
    }
  }
  noLoop()
}

function designFeature(){
  switch(chooseDesign){
    case 0:
      featuredD='Polygons of polygons'
      break;
    case 1:
      featuredD='Shattered Stripes'
      break
    case 2:
      featuredD='Chessboard Pattern'
      break
    case 3:
      featuredD='Zig-Zag'
      break
    case 4:
      featuredD='Circles'
      break
  }
}

function draw() {
  background(8)
  image(mask1,0,0)
  for(let jk=0;jk<sha.length;jk++)sha[jk].show(jk)
  window.$fxhashFeatures={
    "Polygons": noShapes,
    "Design": featuredD
  }
  print(noShapes,featuredD)
  print(chooseShapes)
  fxpreview()
}
function choosingShapes(){
  let t=fxrand()
  if(t<0.1)noShapes=4
  else if(t<0.3)noShapes=3
  else if(t<0.6)noShapes=2
  else noShapes=1
  let temparr=[3,4,5,6]
  for(let i=0;i<noShapes;i++){
    let t=floor((4-i)*fxrand())
    chooseShapes.push(temparr[t])
    temparr.splice(t,1)
  }
}
function choosingDesign(){
  let t=fxrand()
  let n=1/14
  if(t<n)chooseDesign=0
  else if(t<3*n)chooseDesign=1
  else if(t<6*n)chooseDesign=2
  else if(t<10*n)chooseDesign=3
  else chooseDesign=4
}
function makeMask(){
  // let mx=(.25+.5*fxrand())*width
  // let my=(.25+.5*fxrand())*height
  // let vis=.1
  mask1.colorMode(HSB)
  mask1.noFill()
  mask1.strokeWeight(3)
  // for (let k=0;k<500;k++){
  //   mask1.stroke(400,vis-k*vis/500)
  //   mask1.circle(mx,my,k)
  // }
  for(let i=0;i<width;i+=3){
    for(let j=0;j<height;j+=3){
      if((i+j)%2)mask1.stroke(0)
      else mask1.stroke(15)
      mask1.point(i,j)
      // mask1.circle(i,j,5)
    }
  }

  // for(let j=0;j<100;j++){
  //   let vis=0.2
  //   let tx=width*fxrand()
  //   let ty=height*fxrand()
  //   for(k=0;k<15;k++){
  //     mask1.stroke(400,vis-k*vis/15)
  //     mask1.circle(tx,ty,k)
  //   }
  // }
}
class shap{
  constructor(i){
    this.sides=chooseShapes[floor((noShapes)*fxrand())]
    this.cx=r+(width-2*r)*fxrand()
    this.cy=r+(height-2*r)*fxrand()
    this.r=r
    let theta=360*fxrand()
    for(let j=0;j<this.sides;j++)poly[i][j]=[this.cx+r*cos(theta+j*2*PI/this.sides),this.cy+r*sin(theta+j*2*PI/this.sides)]
    //for polygon

    //for chess and sine
    this.col=[0,80+20*randomGaussian(),80+20*randomGaussian(),1]
    let tempc=createDesign(this.cx,this.cy)
    if(tempc==-1)this.col[0]=maincol[0]+50*noise(coff+this.cx*0.002,coff+this.cy*0.002)//10*randomGaussian()+maincol[0]
    else this.col[0]=tempc

    //for stripes
    if(chooseDesign==1){
      let tempt=1/tan(stripes[1])
      if( stripes[1]<PI/2 &&    this.cy+this.cx*tempt-width*(sqrt(2/3))*sqrt(tempt) >0){
        let tempp=map(this.cy+this.cx*tempt-width*(sqrt(2/3))*sqrt(tempt),0,width*(1+tempt-(sqrt(2/3))*sqrt(tempt)),.1,1.1)
        if(fxrand()<tempp)this.col[3]=0
      }
      else if(this.cy-width*sqrt(-2*tempt/3)-width*tempt+this.cx*tempt>0 ){
        let tempp=map(this.cy-width*sqrt(-2*tempt/3)-width*tempt+this.cx*tempt,0,width*(1-sqrt(-2*tempt/3)-tempt),.1,1.1)
        if(fxrand()<tempp)this.col[3]=0
      }
    }

  }
  show(i){
    push()
    fill(this.col)
    noStroke()
    beginShape()
    for(let s of poly[i])vertex(s[0],s[1])
    endShape()
  }
}
class shap2{
  constructor(i){
    this.sides=2+ceil(4*fxrand())
    this.cx=r+(width-2*r)*fxrand()
    this.cy=r+(height-2*r)*fxrand()
    this.r=r
    let theta=360*fxrand()
    this.theta=theta
    for(let j=0;j<this.sides;j++){
      poly2[i][j]=[this.cx+r*cos(theta+j*2*PI/this.sides),this.cy+r*sin(theta+j*2*PI/this.sides)]
    }
    this.col=10*randomGaussian()+maincol
    if(fxrand()<0.033)this.col=(this.col+180)%360
  }
  show(i){
    push()
    fill(this.col,80,80)
    noStroke()
    beginShape()
    for(let s of poly2[i])vertex(s[0],s[1])
    endShape()
    pop()
  }
}

function createDesign(x,y){
  switch(chooseDesign){
    case 0:
      return polygonsInside(x,y)
      break
    case 1:
      return stripes1(x,y)
      break;
    case 2:
      return chess(x,y)
      break
    case 3:
      return sineWave(x,y)
      break
    case 4:
      return radial(x,y)
      break
  }
}
function polygonsInside(x,y){
  for(let j=0;j<sha2.length;j++){
    let theta=atan2(y-sha2[j].cy,x-sha2[j].cx)
    if(theta<0)theta+=2*PI
    let d=(y-sha2[j].cy)**2+(x-sha2[j].cx)**2
    if(d<(abc(sha2[j].r,sha2[j].theta+theta,sha2[j].sides))**2)return maincol[1]
  }
  return -1
}
function radial(x,y){
  // let tempc=map((x-width/2)**2+(y-height/2)**2,0,.5*width**2,0,200)
  let d=(x-width/2)**2+(y-height/2)**2
  let rrr=floor(d/(223.6068**2))
  let t= maincol[0]+30*rrr
  return t%360
}
function chess(x,y){
  let xx=floor(x*8/width)
  let yy=floor(y*8/width)
  if((xx+yy)%2)return maincol[0]
  else return maincol[1]
}
function sineWave(x,y){
  let nw=12
  let nh=6
  let tempy=width*sin(nw*2*x/width)/nw
  tempy-=y
  tempy=floor(tempy*nh/height)
  if(tempy%2)return maincol[0]
  else return maincol[1]
}
function stripes1(x,y){
  let theta=stripes[1]
  let c=y-tan(theta)*x
  if(theta>PI/4 && theta<=3*PI/4)c=x-tan(PI/2-theta)*y
  let temp=floor(c/(width/stripes[0]))
  if(temp%2)return maincol[0]
  else return maincol[1]
}
function scene1(x,y){
  let gr=[90,70,100]
  let bl=[219,35,100]
  if(y>height*.75)return [10*randomGaussian()+gr[0],gr[1],gr[2]]
  else return [bl[0],10*randomGaussian()+bl[1],10*randomGaussian()+bl[2]]
}

function abc(tempr,theta, n) {
  return (tempr * cos(PI / n)) / cos((theta % ((2 * PI) / n)) - PI / n);
}
function GJK2(i,j){
  dx=sha2[j].cx-sha2[i].cx
  dy=sha2[j].cy-sha2[i].cy
  let mag=sqrt(dx**2+dy**2)
  dxn=dx/mag
  dyn=dy/mag
  simplex.length=0
  simplex[0]=(support2(i,j,dxn,dyn))
  dx=-1*simplex[0][0]
  dy=-1*simplex[0][1]
  mag=sqrt(dx**2+dy**2)
  dxn=dx/mag
  dyn=dy/mag
  let cc=50
  while(true){
    let a=support2(i,j,dxn,dyn)
    if(a[0]*dxn+a[1]*dyn<-30) return false
    simplex.push(a)
    if (handleSimplex2(dxn,dyn))return true
  }
}
function handleSimplex2(dxn1,dyn1){
  if(simplex.length==2)return linecase2()
  return trianglecase2(dxn1,dyn1)
}
function linecase2(){
  let a=[simplex[simplex.length-1][0],simplex[simplex.length-1][1]]
  let b=[simplex[simplex.length-2][0],simplex[simplex.length-2][1]]
  let ab=[b[0]-a[0],b[1]-a[1]]
  let aO=[- a[0],- a[1]]
  let tempx=aO[0]*(ab[0]*ab[0]+ab[1]*ab[1])-ab[0]*(ab[0]*aO[0]+ab[1]*aO[1])
  let tempy=aO[1]*(ab[0]*ab[0]+ab[1]*ab[1])-ab[1]*(ab[0]*aO[0]+ab[1]*aO[1])
  let abPerp=[tempx,tempy]
  dx=abPerp[0]
  dy=abPerp[1]
  let mag=sqrt(dx**2+dy**2)
  dxn=dx/mag
  dyn=dy/mag
  return false
}
function trianglecase2(dxn1,dyn1){
  let c=[simplex[simplex.length-1][0],simplex[simplex.length-1][1]]
  let b=[simplex[simplex.length-2][0],simplex[simplex.length-2][1]]
  let a=[simplex[simplex.length-3][0],simplex[simplex.length-3][1]]
  let ab=[b[0]-a[0],b[1]-a[1]]
  let ac=[c[0]-a[0],c[1]-a[1]]
  let aO=[- a[0],- a[1]]
  let tempx=ab[0]*(ac[0]*ab[0]+ac[1]*ab[1])-ac[0]*(ab[0]*ab[0]+ab[1]*ab[1])
  let tempy=ab[1]*(ac[0]*ab[0]+ac[1]*ab[1])-ac[1]*(ab[0]*ab[0]+ab[1]*ab[1])
  let abPerp=[tempx,tempy]
  tempx=ac[0]*(ab[0]*ac[0]+ab[1]*ac[1])-ab[0]*(ac[0]*ac[0]+ac[1]*ac[1])
  tempy=ac[1]*(ab[0]*ac[0]+ab[1]*ac[1])-ab[1]*(ac[0]*ac[0]+ac[1]*ac[1])
  let acPerp=[tempx,tempy]
  if(abPerp[0]*aO[0]+abPerp[1]*aO[1] >100){
    simplex.splice(simplex.length-1,1)
    dx=abPerp[0]
    dy=abPerp[1]
    mag=sqrt(dx**2+dy**2)
    dxn=dx/mag
    dyn=dy/mag
    return false
  }
  else if(acPerp[0]*aO[0]+acPerp[1]*aO[1] >100){
    simplex.splice(simplex.length-2,1)
    dx=acPerp[0]
    dy=acPerp[1]
    mag=sqrt(dx**2+dy**2)
    dxn=dx/mag
    dyn=dy/mag
    return false
  }
  return true;
}
function support2(i,j,dxn2,dyn2){
  let temp1=furPoi2(i,dxn2,dyn2)
  let temp2=furPoi2(j,-dxn2,-dyn2)
  return [temp1[0]-temp2[0],temp1[1]-temp2[1]]
}
function furPoi2(i,dx1,dy1){
  let dot=-500000
  let farpoint=[]
  for(let k=0;k<poly2[i].length;k++){
    let temp=poly2[i][k][0]*dx1+poly2[i][k][1]*dy1
    if(temp>dot){
      dot=temp
      farpoint=[poly2[i][k][0],poly2[i][k][1]]
    }
  }
  return farpoint
}

function GJK(i,j){
  dx=sha[j].cx-sha[i].cx
  dy=sha[j].cy-sha[i].cy
  let mag=sqrt(dx**2+dy**2)
  dxn=dx/mag
  dyn=dy/mag
  simplex.length=0
  simplex[0]=(support(i,j,dxn,dyn))
  dx=-1*simplex[0][0]
  dy=-1*simplex[0][1]
  mag=sqrt(dx**2+dy**2)
  dxn=dx/mag
  dyn=dy/mag
  let cc=50
  while(true){
    let a=support(i,j,dxn,dyn)
    if(a[0]*dxn+a[1]*dyn<0) return false
    simplex.push(a)
    if (handleSimplex(dxn,dyn))return true
  }
}
function handleSimplex(dxn1,dyn1){
  if(simplex.length==2)return linecase()
  return trianglecase(dxn1,dyn1)
}
function linecase(){
  let a=[simplex[simplex.length-1][0],simplex[simplex.length-1][1]]
  let b=[simplex[simplex.length-2][0],simplex[simplex.length-2][1]]
  let ab=[b[0]-a[0],b[1]-a[1]]
  let aO=[- a[0],- a[1]]
  let tempx=aO[0]*(ab[0]*ab[0]+ab[1]*ab[1])-ab[0]*(ab[0]*aO[0]+ab[1]*aO[1])
  let tempy=aO[1]*(ab[0]*ab[0]+ab[1]*ab[1])-ab[1]*(ab[0]*aO[0]+ab[1]*aO[1])
  let abPerp=[tempx,tempy]
  dx=abPerp[0]
  dy=abPerp[1]
  let mag=sqrt(dx**2+dy**2)
  dxn=dx/mag
  dyn=dy/mag
  return false
}
function trianglecase(dxn1,dyn1){
  let c=[simplex[simplex.length-1][0],simplex[simplex.length-1][1]]
  let b=[simplex[simplex.length-2][0],simplex[simplex.length-2][1]]
  let a=[simplex[simplex.length-3][0],simplex[simplex.length-3][1]]
  let ab=[b[0]-a[0],b[1]-a[1]]
  let ac=[c[0]-a[0],c[1]-a[1]]
  let aO=[- a[0],- a[1]]
  let tempx=ab[0]*(ac[0]*ab[0]+ac[1]*ab[1])-ac[0]*(ab[0]*ab[0]+ab[1]*ab[1])
  let tempy=ab[1]*(ac[0]*ab[0]+ac[1]*ab[1])-ac[1]*(ab[0]*ab[0]+ab[1]*ab[1])
  let abPerp=[tempx,tempy]
  tempx=ac[0]*(ab[0]*ac[0]+ab[1]*ac[1])-ab[0]*(ac[0]*ac[0]+ac[1]*ac[1])
  tempy=ac[1]*(ab[0]*ac[0]+ab[1]*ac[1])-ab[1]*(ac[0]*ac[0]+ac[1]*ac[1])
  let acPerp=[tempx,tempy]
  if(abPerp[0]*aO[0]+abPerp[1]*aO[1] >0){
    simplex.splice(simplex.length-1,1)
    dx=abPerp[0]
    dy=abPerp[1]
    mag=sqrt(dx**2+dy**2)
    dxn=dx/mag
    dyn=dy/mag
    return false
  }
  else if(acPerp[0]*aO[0]+acPerp[1]*aO[1] >0){
    simplex.splice(simplex.length-2,1)
    dx=acPerp[0]
    dy=acPerp[1]
    mag=sqrt(dx**2+dy**2)
    dxn=dx/mag
    dyn=dy/mag
    return false
  }
  return true;
}
function support(i,j,dxn2,dyn2){
  let temp1=furPoi(i,dxn2,dyn2)
  let temp2=furPoi(j,-dxn2,-dyn2)
  return [temp1[0]-temp2[0],temp1[1]-temp2[1]]
}
function furPoi(i,dx1,dy1){
  let dot=-500000
  let farpoint=[]
  for(let k=0;k<poly[i].length;k++){
    let temp=poly[i][k][0]*dx1+poly[i][k][1]*dy1
    if(temp>dot){
      dot=temp
      farpoint=[poly[i][k][0],poly[i][k][1]]
    }
  }
  return farpoint
}
