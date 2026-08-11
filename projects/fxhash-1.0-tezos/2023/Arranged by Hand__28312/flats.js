function fpebbles(){
  fdif=int(random(6,13));
  ffdif=fdif*12;
  newhig=random(0.5,1);
  choosecolours();
  pcolr=random();
  if(pcolr>0.55)pbs=pbd;
  if(pcolr>0.45 && pcolr<0.55)pbs=pbm;
  if(pcolr<0.45)pbs=pbl;
  fpwid=[];
  fphig=[];
  fxpa=[];
  fypa=[];
  fxpi=csw/2;
  fypi=csh*(0.5+sandv);
  fpwi=csw*random(0.7,0.95);
  fphi=fpwi*random(0.16,0.35);
  fpwid.push(fpwi);
  fphig.push(fphi);
  fxpa.push(fxpi);
  fypa.push(fypi);ns=0;
  for(let i=0;i<12;i++){
  if(fypi>fphi*3){
  fypi-=fphi*0.5;
  fpwi*=random(0.6,1.01);
  fphi=fpwi*random(0.18,0.35);
  fxpi+=fpwi*random(-0.1,0.1);
  fypi-=fphi*0.5;
  fpwid.push(fpwi);
  fphig.push(fphi);
  fxpa.push(fxpi);
  fypa.push(fypi);
    ns++;
  }
  }
    fill("#00000007");
    noStroke();
    for(let i=0;i<11;i++){
ellipse(fxpa[0],fypa[0]+fypa[0]*0.05,fpwid[0]+h[54-i*2],fphig[0]+h[64-i*3]);
    }
  al=fxpa.length;  
  fxp=fxpa[0];fyp=fypa[0];fwp=fpwid[0];fhp=fphig[0];
  flatpebble(fxp,fyp,fwp,fhp,0,0);
  for(let i=0;i<fxpa.length-1;i++){
    fwp=fpwid[i+1];fhp=fphig[i+1];fxp=fxpa[i+1];fyp=fypa[i+1];
    flatpebble(fxp,fyp,fwp,fhp,i,1);
  choosecolours();
  pcolr=random();
  if(pcolr>0.55)pbs=pbd;
  if(pcolr>0.45 && pcolr<0.55)pbs=pbm;
  if(pcolr<0.45)pbs=pbl;
  }
  }
function flatpebble(fxp,fyp,fwp,fhp,t,fn){
  fhp+=h[ffdif-t*fdif];
  if(random()<0.16){tt="Yes";}else{tt="No";}
  fl=createGraphics(fwp,fhp);
  //draw surface pattern
  fl.noStroke();
  grain=int(random(7,32));
  grains=int(120000/grain*(fwp/(cs*0.0005)*fhp/(cs*0.0005))/60000);
  bw=h[grain];    
  fl.background(pbs[int(random(40))]);
  for(let i=0; i<grains; i++){
  fl.fill(pbs[int(random(40))]);
  dots=new FDots(bw,random(fwp),random(fhp));dots.draw();
  } 
  esn=shuffle([0,1,1,1,1,2,2,3,3,3,3,3]);
  if(random()<0.1)esn=int(random(7,10));
  ebn=shuffle([0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,2]);
  escol=int(random(10));
  if(tt=="Yes"){
  ftwotone(fwp,fhp);
  fl.image(fl2,0,0);
  }else{
  for(let es=0;es<esn[0];es++){
  festripe(escol);}
  for(let eb=0;eb<ebn[0];eb++){
  feband(fwp,fhp);}}
  //cut out shape 
  p1x=fwp*random(0.4,0.6);
  b1x=p1x-fwp*random(0.2,0.4);
  c1x=p1x+fwp*random(0.2,0.4);
  p1y=0;b1y=0;c1y=0;
  p2x=fwp;b2x=fwp;c2x=fwp;
  p2y=fhp*random(0.4,0.6);
  b2y=p2y-fhp*random(0.2,0.4);
  c2y=p2y+fhp*random(0.2,0.4);
  p3x=fwp*random(0.4,0.6);
  b3x=p3x+fwp*random(0.2,0.4);
  c3x=p3x-fwp*random(0.2,0.4);
  p3y=fhp;b3y=fhp;c3y=fhp;
  p4x=0;b4x=0;c4x=0;
  p4y=fhp*random(0.4,0.6);
  b4y=p4y+fhp*random(0.2,0.4);
  c4y=p4y-fhp*random(0.2,0.4);
  fl.fill("#98989403");hinc=12
  if(pcolr<0.55){fl.fill("#Fff7EA03");hinc=10}
  if(pcolr<0.45){fl.fill("#FFF9E804");hinc=8}
  for(let i=0;i<18;i++){
  fl.ellipse(fwp/2,fhp/4,fwp*0.9-h[i]*hinc,fhp*0.7-h[i]*hinc);
  }
  fl.fill("#00000006");dinc=6;
  if(pcolr<0.55){fl.fill("#00000005");dinc=3.5;}
  if(pcolr<0.45){fl.fill("#00000004");dinc=3.5;}
  for(let i=0;i<50;i++){
  fl.beginShape();
  fl.vertex(p4x,p4y+h[i]*dinc);   
  fl.bezierVertex(b4x,b4y+h[i]*dinc,c2x,c2y+h[i]*dinc,p2x,p2y+h[i]*dinc);
  fl.vertex(fwp,fhp);
  fl.vertex(0,fhp);
  fl.endShape();
  }
  //shadow of one above
    fl.fill("#00000007");
    fl.noStroke();
  if(fn==0){
    for(let i=0;i<11;i++){
      fphnew=fphig[t+2]*newhig;
  fl.ellipse(fpwid[t]/2,fphig[t+1]*0.2,fpwid[t+1]+h[54-i*2],fphnew+h[64-i*3]);
    }}
  if(fn>0){
    for(let i=1;i<11;i++){
      fphnew=fphig[t+2]*newhig;
  fl.ellipse(fpwid[t+1]/2,fphig[t+1]*0.2,fpwid[t+2]+h[54-i*2],fphnew+h[64-i*3]);
    }}
  fl.fill(0);
  fl.erase();
  fl.beginShape();
  fl.vertex(0,0);
  fl.vertex(p1x,p1y);
  fl.bezierVertex(b1x,b1y,c4x,c4y,p4x,p4y);
  fl.vertex(0,0);
  fl.endShape();
  fl.beginShape();
  fl.vertex(fwp,0);
  fl.vertex(p2x,p2y);
  fl.bezierVertex(b2x,b2y,c1x,c1y,p1x,p1y);
  fl.vertex(fwp,0);
  fl.endShape();
  fl.beginShape();
  fl.vertex(fwp,fhp);
  fl.vertex(p3x,p3y);
  fl.bezierVertex(b3x,b3y,c2x,c2y,p2x,p2y);
  fl.vertex(fwp,fhp);
  fl.endShape();
  fl.beginShape();
  fl.vertex(0,fhp);
  fl.vertex(p4x,p4y);
  fl.bezierVertex(b4x,b4y,c3x,c3y,p3x,p3y);
  fl.vertex(0,fhp);
  fl.endShape();    
  fl.noErase();
  //place with shadow
  ppx=fxp;
  ppy=fyp;
  ppr=random(-PI/36,PI/36);
  translate(ppx,ppy);
  rotate(ppr);
    image(fl,-fwp/2,-fhp/2);
  rotate(-ppr); 
  translate(-ppx,-ppy); 
  }

function ftwotone(fwp,fhp){
  pcolr=random();
  if(pcolr>0.55)pbs=pbd;
  if(pcolr>0.45 && pcolr<0.55)pbs=pbm;
  if(pcolr<0.45)pbs=pbl;
  fl2=createGraphics(fwp,fhp);
  //draw surface pattern
  fl2.noStroke();
  fl2.background(pbs[int(random(40))]);
  for(let i=0; i<grains; i++){
  fl2.fill(pbs[int(random(40))]);
  dots=new FDots2(bw,random(fwp),random(fhp));dots.draw();
  }  
  fl2.noFill();
  fl2.stroke(0);
  sw=(random(h[12],h[30]));
  fl2.erase(40,40);
  ad=random(-fwp/4,fwp*5/4);
  ae=random(-fhp/4,fhp*5/4);
  af=random(fwp,fwp*2);
  ag=random(fhp,fhp*2);
  aa=false;bb=false;cc=random();
  if(cc<0.1){aa=true;bb=true;}
  if(cc<0.8 && cc>0.1)aa=true;
  if(cc>0.8)bb=true;
  if(bb){
  for(let i=0;i<12;i++){
  fl2.strokeWeight(sw-h[i]);
  fl2.ellipse(ad,ae,af,ag);
  }}
  if(aa){
  fl2.fill(0);
  fl2.noStroke();
  sdif=random(0.5,0.9);
  for(let i=0;i<12;i++){
  fl2.ellipse(ad,ae,af*sdif-h[i*2],ag*sdif-h[i*2]);
  }}
  fl2.noErase();
}
class FDots{
constructor(bw,dx,dy){
this.bw=bw;
this.sx=dx;
this.sy=dy;
this.h10=bw*0.1;
this.h20=bw*0.2;
this.h30=bw*0.3;
this.x1=this.sx-random(this.h20);
this.y1=this.sy+random(-this.h20,this.h20);
this.x2=this.x1+random(-this.h20,this.h20);
this.y2=this.y1+random(-this.h30);
this.x3=this.x2+random(this.h30);
this.y3=this.y2+random(-this.h20,this.h20);
this.x4=this.sx+random(this.h20);
this.y4=this.sy+random(-this.h20,this.h20);
}
draw(){
fl.beginShape()
fl.curveVertex(this.sx,this.sy);
fl.curveVertex(this.sx,this.sy);
fl.curveVertex(this.x1,this.y1);
fl.curveVertex(this.x2,this.y2);
fl.curveVertex(this.x3,this.y3);
fl.curveVertex(this.x4,this.y4);
fl.curveVertex(this.sx,this.sy);
fl.curveVertex(this.sx,this.sy);
fl.endShape();
}

}
class FPdots{
constructor(bw,dx,dy){
this.bw=bw;
this.h10=bw*0.1;
this.h20=bw*0.2;
this.h30=bw*0.3;
this.sx=dx;
this.sy=dy;
this.x1=this.sx-random(this.h20);
this.y1=this.sy+random(-this.h20,this.h20);
this.x2=this.x1+random(-this.h20,this.h20);
this.y2=this.y1+random(-this.h30);
this.x3=this.x2+random(this.h30);
this.y3=this.y2+random(-this.h20,this.h20);
this.x4=this.sx+random(this.h20);
this.y4=this.sy+random(-this.h20,this.h20);
}
draw(){
fl.beginShape()
fl.curveVertex(this.sx,this.sy);
fl.curveVertex(this.sx,this.sy);
fl.curveVertex(this.x1,this.y1);
fl.curveVertex(this.x2,this.y2);
fl.curveVertex(this.x3,this.y3);
fl.curveVertex(this.x4,this.y4);
fl.curveVertex(this.sx,this.sy);
fl.curveVertex(this.sx,this.sy);
fl.endShape();
}

}
class FDots2{
constructor(bw,dx,dy){
this.bw=bw;
this.h10=bw*0.1;
this.h20=bw*0.2;
this.h30=bw*0.3;
this.sx=dx;
this.sy=dy;
this.x1=this.sx-random(this.h20);
this.y1=this.sy+random(-this.h20,this.h20);
this.x2=this.x1+random(-this.h20,this.h20);
this.y2=this.y1+random(-this.h30);
this.x3=this.x2+random(this.h30);
this.y3=this.y2+random(-this.h20,this.h20);
this.x4=this.sx+random(this.h20);
this.y4=this.sy+random(-this.h20,this.h20);
}
draw(){
fl2.beginShape()
fl2.curveVertex(this.sx,this.sy);
fl2.curveVertex(this.sx,this.sy);
fl2.curveVertex(this.x1,this.y1);
fl2.curveVertex(this.x2,this.y2);
fl2.curveVertex(this.x3,this.y3);
fl2.curveVertex(this.x4,this.y4);
fl2.curveVertex(this.sx,this.sy);
fl2.curveVertex(this.sx,this.sy);
fl2.endShape();
}
}
function feband(fwp,fhp){
  //draw elliptical stripes 
  ebandr=random();
  bw=h[int(random(7,16))];
  a=fwp*random(0.6,2);b=fhp*random(0.6,1.5);
  ax=random(-fwp/2,fwp*3/2);ay=random(-fhp/2,0);
  th=0;
  if(ebandr<0.75){
  a=fwp*random(0.6,2);b=fhp*random(0.6,1.5);
  ax=random(-fwp/2,fwp*3/2);ay=random(fhp,fhp*3/2);
  th=PI;
}
  if(ebandr<0.5){
  a=fwp*random(0.6,1.5);b=fhp*random(0.6,2);
  ax=random(-fwp/2,0);ay=random(-fhp/2,fhp*3/2);
  th=PI*3/2;
}
  if(ebandr<0.25){
  a=fwp*random(0.6,1.5);b=fhp*random(0.6,2);
  ax=random(fwp,fwp*3/2);ay=random(-fhp/2,fhp*3/2);
  th=PI/2;
}
  ela=[];
  elap=[];
  elam=[];
  rr=random();
  dense=int(random(400,1500));
  for(let j=0;j<dense;j++){
    el=createVector(ax+a*random(0.97,1.03)*cos(th),ay+b*random(0.97,1.03)*sin(th));
    elp=createVector(ax+a*random(1,1.06)*cos(th),ay+b*random(1,1.08)*sin(th));
    elm=createVector(ax+a*random(0.94,1)*cos(th),ay+b*random(0.92,1)*sin(th));
    
    ela.push(el);
    elap.push(elp);
    elam.push(elm);
    th+=PI/dense;
  }
    sr=random();
    for(let e=0;e<ela.length;e++){
      if(ela[e].x<fwp && ela[e].x>0 && ela[e].y>0 && ela[e].y<fhp){
        fl.fill(pbc[int(random(0,30))]);
        if(sr<0.5)fl.fill(pbc[int(random(0,20))]);
        pdots=new FPdots(bw,elap[e].x,elap[e].y);
        pdots.draw();
        fl.fill(pbc[int(random(0,30))]);
        if(sr<0.5)fl.fill(pbc[int(random(0,20))]);
        pdots=new FPdots(bw,elam[e].x,elam[e].y);
        pdots.draw();
        fl.fill(pbc[int(random(20,40))]);
        if(sr<0.5)fl.fill(pbc[int(random(30,40))]);
        pdots=new FPdots(bw,ela[e].x,ela[e].y);
        pdots.draw();     
      }
    }
}
function festripe(escol){
 exx=random();eyx=random();ezx=random();
 exy=random();eyy=random();ezy=random();
 esr=random();esrr=random();
 eshor=[];eshor2=[];
 if(esrr<0.5){
 xr=random(fwp/2);
 yr=random(fhp/2);
 dir=0;dirp=random(h[10],h[56]);
 }else{
 yr=random(fhp/2,fhp);
 xr=random(fwp/2,fwp);
 dir=0;dirp=random(-h[10],-h[56]);}
 for(let i=0;i<30;i++){
 dx=map(noise(exx,eyx,ezx),0,1,0,fwp/4);
 dy=map(noise(eyx,eyy,ezy),0,1,0,fhp/4);
 plusy=map(noise(exx,ezy,eyy),0,1,-fhp/16,fhp/16);
 plusx=map(noise(exx,ezy,eyy),0,1,-fwp/16,fwp/16);
 if(esr>=0.5){
 cv=createVector(i*fhp/20,yr+dir+dy);
 cv2=createVector(i*fhp/20,yr+dir+dy+plusy);
 }
 if(esr<=0.5){
 cv=createVector(xr+dir+dx,i*fwp/20);
 cv2=createVector(xr+dir+dx+plusx,i*fwp/20);
 }
 eshor.push(cv);
 eshor2.push(cv2);
exx+=random(0.1);
eyx+=random(0.1);
ezx+=random(0.01);
exy+=random(0.1);
eyy+=random(0.1);
ezy+=random(0.1);
dir+=dirp;
}
   fl.fill(dandl[escol]);
   fl.beginShape();
   for(let i=0;i<eshor.length;i++){
   fl.vertex(eshor[i].x,eshor[i].y)
   }
   for(let i=eshor2.length-1;i>-1;i--){
   fl.vertex(eshor2[i].x,eshor2[i].y)
   }
   fl.endShape();

}
