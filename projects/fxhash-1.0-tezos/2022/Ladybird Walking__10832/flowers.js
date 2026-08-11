class pgCornflower{
  constructor(diam,cx,cy){
    this.diam=diam;
    this.e=[];
    for (let i = 0; i < 10000; i++) {
    this.e.push(i * this.diam * 0.01);
  }    
    this.f=[];
    for (let i = 0; i < 10000; i++) {
    this.f.push(i * this.diam * 0.0085);
  }
    this.cx=cx;
    this.cy=cy;
    this.d2=myRandom(-this.e[70],this.e[70]);
    this.d3=this.diam+this.d2;
    pg.noStroke();
    var palchoice=myRandom(0,1);
    noiseSeed(myRandom(0,1000));
  ccol="blue";
  dark=color("#140931aa");
  darka=color("#14093155");
  light=color("#818bea1a");
  mid=color("#3e45d488");
    midn=color("#3e45d4");
  if (palchoice<0.9){
  ccol="dark purple";
  dark=color("#22082faa");
  darka=color("#22082f55");
  light=color("#691b8a1f");
  mid=color("#400e5588");
    midn=color("#400e55");
  }
  if (palchoice<0.85){
  ccol="dark maroon";
  dark=color("#13020faa");
  darka=color("#13020f55");
  light=color("#964a851f");
  mid=color("#580e4388");
    
  }
  if (palchoice<0.80){
  ccol="white pink";
  dark=color("#4a3b42aa");
  darka=color("#4a3b4255");
  light=color("#dce7ed1a");
  mid=color("#efbbde88");
  }
  if (palchoice<0.75){
  ccol="lilac";
  dark=color("#46065daa");
  darka=color("#46065d55");
  light=color("#dba4ff1a");
  mid=color("#a466c788");
  }
    if (palchoice<0.7){
  ccol="pink";
  dark=color("#870d49aa");
  darka=color("#8d104f55");
  light=color("#f6a2ba1a");
  mid=color("#ee7ba288");
    }
    if (palchoice<0.65){
  ccol="white";
  dark=color("#755369aa");
  darka=color("#75536955");
  light=color("#fefefe1f");
  mid=color("#f5f3de88");
    }
    if (palchoice<0.6){
  ccol="white pink/pink";
  let d1=color("#4a3b42aa");
  let d2=color("#870d49aa");
  let d1a=color("#4a3b4255");
  let d2a=color("#870d4955");
  let l1=color("#dce7ed1f");
  let l2=color("#f6a2ba1f");
  let m1=color("#efbbde88");
  let m2=color("#ee7ba288");
  dark=lerpColor(d1,d2,myRandom(0.6,1));
  darka=lerpColor(d1a,d2a,myRandom(0.6,1));
  light=lerpColor(l1,l2,myRandom(0,0.5));
  mid=lerpColor(m1,m2,myRandom(0,1));
    }
    if (palchoice<0.5){
  ccol="lilac/white pink";
  let d1=color("#46065daa");
  let d2=color("#4a3b42aa");
  let d1a=color("#46065d55");
  let d2a=color("#4a3b4255");
  let l1=color("#dba4ff88");
  let l2=color("#dce7ed1a");
  let m1=color("#a466c788");
  let m2=color("#efbbde88");
  dark=lerpColor(d1,d2,myRandom(0,1));
  darka=lerpColor(d1a,d2a,myRandom(0,1));
  light=lerpColor(l1,l2,myRandom(0.5,1));
  mid=lerpColor(m1,m2,myRandom(0,1));
    }
    if (palchoice<0.4){
  ccol="purple/maroon";
  let d1=color("#22082faa");
  let d2=color("#13020faa");
  let d1a=color("#22082f55");
  let d2a=color("#13020f55");
  let l1=color("#691b8a1f");
  let l2=color("#964a851f");
  let m1=color("#400e5588");
  let m2=color("#580e4388");
  dark=lerpColor(d1,d2,myRandom(0,1));
  darka=lerpColor(d1a,d2a,myRandom(0,1));
  light=lerpColor(l1,l2,myRandom(0,1));
  mid=lerpColor(m1,m2,myRandom(0,1));
    }
    if (palchoice<0.3){
  ccol="purple/blue";
  let d1=color("#22082faa");
  let d2=color("#140931aa");
  let d1a=color("#22082f55");
  let d2a=color("#14093155");
  let l1=color("#691b8a1f");
  let l2=color("#818bea1a");
  let m1=color("#400e5588");
  let m2=color("#3e45d488");
  dark=lerpColor(d1,d2,myRandom(0,1));
  darka=lerpColor(d1a,d2a,myRandom(0,1));
  light=lerpColor(l1,l2,myRandom(0,1));
  mid=lerpColor(m1,m2,myRandom(0,1));
    }
    if (palchoice<0.12){
  ccol="white pink/blue";
  let d1=color("#4a3b42aa");
  let d2=color("#140931aa");
  let d1a=color("#4a3b4255");
  let d2a=color("#14093155");
  let l1=color("#dce7ed1a");
  let l2=color("#818bea1a");
  let m1=color("#efbbde88");
  let m2=color("#3e45d488");
  dark=lerpColor(d1,d2,myRandom(0.5,1));
  darka=lerpColor(d1a,d2a,myRandom(0.5,1));
  light=lerpColor(l1,l2,myRandom(0,0.5));
  mid=lerpColor(m1,m2,myRandom(0,1));
    }
csh=dark;
csha = darka;
cc=lerpColor(dark,mid,0.15);
cch1 = lerpColor(dark,mid,0.5);
cch2 = lerpColor(dark,mid,0.9);
cpk = lerpColor(dark,mid,0.6);
cpkha =lerpColor(darka,mid,0.85);
cdpk =lerpColor(dark,mid,0.4);
cdpka = lerpColor(darka,mid,0.1);
cdpet = lerpColor(dark,mid,0.6);
cpetha=lerpColor(mid,light,0.8);
cpeta=lerpColor(mid,light,0.1);
cring=lerpColor(dark,mid,1);
cst = lerpColor(dark,mid,0.19);
cstpet=lerpColor(dark,mid,0.7);
cddpk =lerpColor(dark,mid,0.3);
cornshadow="#00000044";
}
draw(){
pg.noFill();
pg.push();   
pg.translate(this.cx,this.cy);
  //petals
  pg.fill(cpetha);
  pg.stroke(cdpet);
  for (let j=0;j<2;j++){
  for (let i=0; i<12; i++){
    pg.rotate(PI/6+myRandom(-PI/30,PI/30));
    rpx1=pg.map(noise(myRandom(0,1)),0,1,-this.e[48],-this.e[16]);
    rpy1=pg.map(noise(myRandom(0,1)),0,1,this.e[120],this.e[168]);
    rix1=pg.map(noise(myRandom(0,1)),0,1,-this.e[16],-this.e[8]);
    riy1=pg.map(noise(myRandom(0,1)),0,1,this.e[88],this.e[128]);
    rpx2=pg.map(noise(myRandom(0,1)),0,1,-this.e[24],this.e[0]);
    rpy2=pg.map(noise(myRandom(0,1)),0,1,this.e[128],this.e[172]);
    rix2=pg.map(noise(myRandom(0,1)),0,1,-this.e[12],this.e[12]);
    riy2=pg.map(noise(myRandom(0,1)),0,1,this.e[88],this.e[120]);
    rpx3=pg.map(noise(myRandom(0,1)),0,1,this.e[0],this.e[24]);
    rpy3=pg.map(noise(myRandom(0,1)),0,1,this.e[120],this.e[172]);
    rix3=pg.map(noise(myRandom(0,1)),0,1,this.e[8],this.e[16]);
    riy3=pg.map(noise(myRandom(0,1)),0,1,this.e[88],this.e[120]);
    rpx4=pg.map(noise(myRandom(0,1)),0,1,this.e[16],this.e[48]);
    rpy4=pg.map(noise(myRandom(0,1)),0,1,this.e[120],this.e[168]);
    rcyout=myRandom(this.e[96],this.e[124]);
    rcyin=myRandom(this.e[112],this.e[120]);
    rcx1=myRandom(-this.e[32],this.e[8]);
    rcxright=myRandom(this.e[8],this.e[24]);
    rcxleft=myRandom(-this.e[24],-this.e[8]);
    rcx2=myRandom(this.e[8],this.e[32])
    stc1=myRandom(this.e[114],this.e[120]);
    stc2=myRandom(this.e[114],this.e[120]);
    pg.push();
    pg.translate(myRandom(-this.e[16],this.e[16]),myRandom(-this.e[16],this.e[16]));
    pg.fill(cornshadow);
    pg.noStroke();
    pg.beginShape();
    pg.vertex(-this.e[2],0);
    pg.bezierVertex(-this.e[2],stc1,rpx1+rcx1,rcyout,rpx1,rpy1);//origin left to first point
    pg.bezierVertex(rpx1+rcxright,rcyin,rix1,riy1,rix1,riy1);//first point to first inner
    pg.bezierVertex(rix1,riy1,rcxleft,rcyin,rpx2,rpy2);//first inner to second point
    pg.bezierVertex(rpx2+rcxright,rcyin,rix2,riy2,rix2,riy2);//second point to second inner
    pg.bezierVertex(rix2,riy2,rpx3+rcxleft,rcyin,rpx3,rpy3);//second inner to third point
    pg.bezierVertex(rpx3+rcxright,rcyin,rix3,riy3,rix3,riy3);//third point to third inner
    pg.bezierVertex(rix3,riy3,rpx4+rcxleft,rcyin,rpx4,rpy4);//third inner to fourth point
    pg.bezierVertex(rpx4+rcxright,rcyout,this.e[2],stc2,this.e[2],this.e[10]);//fourth point to originright
    pg.endShape(CLOSE);
    pg.pop();
    pg.fill(cpeta);
    pg.stroke(cdpet);
    pg.beginShape();
    pg.vertex(-this.e[2],0);
    pg.bezierVertex(-this.e[2],stc1,rpx1+rcx1,rcyout,rpx1,rpy1);//origin left to first point
    pg.bezierVertex(rpx1+rcxright,rcyin,rix1,riy1,rix1,riy1);//first point to first inner
    pg.bezierVertex(rix1,riy1,rcxleft,rcyin,rpx2,rpy2);//first inner to second point
    pg.bezierVertex(rpx2+rcxright,rcyin,rix2,riy2,rix2,riy2);//second point to second inner
    pg.bezierVertex(rix2,riy2,rpx3+rcxleft,rcyin,rpx3,rpy3);//second inner to third point
    pg.bezierVertex(rpx3+rcxright,rcyin,rix3,riy3,rix3,riy3);//third point to third inner
    pg.bezierVertex(rix3,riy3,rpx4+rcxleft,rcyin,rpx4,rpy4);//third inner to fourth point
    pg.bezierVertex(rpx4+rcxright,rcyout,this.e[2],stc2,this.e[2],this.e[10]);//fourth point to originright
    pg.endShape(CLOSE);
    pg.noFill();
    pg.stroke(cdpet);
    pg.strokeCap(SQUARE);
    pg.strokeWeight(myRandom(this.e[1]*0.6,this.e[1]*0.9));
    pg.bezier(0,0,0,stc1,rpx1,rcyout,rpx1,rpy1);
    pg.bezier(0,0,0,stc1,rpx2,rcyin,rpx2,rpy2);
    pg.bezier(0,0,0,stc2,rpx3,rcyin,rpx3,rpy3);
    pg.bezier(0,0,0,stc2,rpx4,rcyout,rpx4,rpy4);
    rcx1=rcx1+this.e[10];
    rcx2=rcx2-this.e[10];
    rpy1=rpy1-this.e[25];
    riy1=riy1-this.e[15];
    rpy2=rpy2-this.e[25];
    riy2=riy2-this.e[15];
    rpy3=rpy3-this.e[25];
    riy3=riy3-this.e[15];
    rpy4=rpy4-this.e[25];
    rpx1=rpx1+this.e[10];
    rpx4=rpx4-this.e[10];
    rcyout=rcyout-this.e[15];
    rcyin=rcyin-this.e[15];
    pg.fill(cpetha);
    pg.beginShape();
    pg.vertex(-this.e[2],0);
    pg.bezierVertex(-this.e[2],stc1,rpx1+rcx1,rcyout,rpx1,rpy1);//origin left to first point
    pg.bezierVertex(rpx1+rcxright,rcyin,rix1,riy1,rix1,riy1);//first point to first inner
    pg.bezierVertex(rix1,riy1,rcxleft,rcyin,rpx2,rpy2);//first inner to second point
    pg.bezierVertex(rpx2+rcxright,rcyin,rix2,riy2,rix2,riy2);//second point to second inner
    pg.bezierVertex(rix2,riy2,rpx3+rcxleft,rcyin,rpx3,rpy3);//second inner to third point
    pg.bezierVertex(rpx3+rcxright,rcyin,rix3,riy3,rix3,riy3);//third point to third inner
    pg.bezierVertex(rix3,riy3,rpx4+rcxleft,rcyin,rpx4,rpy4);//third inner to fourth point
    pg.bezierVertex(rpx4+rcxright,rcyout,this.e[2],stc2,this.e[2],this.e[10]);//fourth point to originright
    pg.endShape(CLOSE);
    }pg.rotate((PI/12)+myRandom(-PI/5,PI/5));}
  for (let j=0;j<1;j++){
  for (let i=0; i<12; i++){
    pg.rotate(PI/6+myRandom(-PI/30,PI/30));
    rpx1=pg.map(noise(myRandom(0,1)),0,1,-this.f[48],-this.f[16]);
    rpy1=pg.map(noise(myRandom(0,1)),0,1,this.f[120],this.f[168]);
    rix1=pg.map(noise(myRandom(0,1)),0,1,-this.f[16],-this.f[8]);
    riy1=pg.map(noise(myRandom(0,1)),0,1,this.f[88],this.f[128]);
    rpx2=pg.map(noise(myRandom(0,1)),0,1,-this.f[24],this.f[0]);
    rpy2=pg.map(noise(myRandom(0,1)),0,1,this.f[128],this.f[172]);
    rix2=pg.map(noise(myRandom(0,1)),0,1,-this.f[12],this.f[12]);
    riy2=pg.map(noise(myRandom(0,1)),0,1,this.f[88],this.f[120]);
    rpx3=pg.map(noise(myRandom(0,1)),0,1,this.f[0],this.f[24]);
    rpy3=pg.map(noise(myRandom(0,1)),0,1,this.f[120],this.f[172]);
    rix3=pg.map(noise(myRandom(0,1)),0,1,this.f[8],this.f[16]);
    riy3=pg.map(noise(myRandom(0,1)),0,1,this.f[88],this.f[120]);
    rpx4=pg.map(noise(myRandom(0,1)),0,1,this.f[16],this.f[48]);
    rpy4=pg.map(noise(myRandom(0,1)),0,1,this.f[120],this.f[168]);
    rcyout=myRandom(this.f[96],this.f[124]);
    rcyin=myRandom(this.f[112],this.f[120]);
    rcx1=myRandom(-this.f[32],this.f[8]);
    rcxright=myRandom(this.f[8],this.f[24]);
    rcxleft=myRandom(-this.f[24],-this.f[8]);
    rcx2=myRandom(this.f[8],this.f[32])
    stc1=myRandom(this.f[114],this.f[120]);
    stc2=myRandom(this.f[114],this.f[120]);
    pg.push();
    pg.translate(myRandom(-this.f[7],this.f[7]),myRandom(-this.f[7],this.f[7]));
    pg.fill(cornshadow);
    pg.noStroke();
    pg.beginShape();
    pg.vertex(-this.f[2],0);
    pg.bezierVertex(-this.f[2],stc1,rpx1+rcx1,rcyout,rpx1,rpy1);//origin left to first point
    pg.bezierVertex(rpx1+rcxright,rcyin,rix1,riy1,rix1,riy1);//first point to first inner
    pg.bezierVertex(rix1,riy1,rcxleft,rcyin,rpx2,rpy2);//first inner to second point
    pg.bezierVertex(rpx2+rcxright,rcyin,rix2,riy2,rix2,riy2);//second point to second inner
    pg.bezierVertex(rix2,riy2,rpx3+rcxleft,rcyin,rpx3,rpy3);//second inner to third point
    pg.bezierVertex(rpx3+rcxright,rcyin,rix3,riy3,rix3,riy3);//third point to third inner
    pg.bezierVertex(rix3,riy3,rpx4+rcxleft,rcyin,rpx4,rpy4);//third inner to fourth point
    pg.bezierVertex(rpx4+rcxright,rcyout,this.f[2],stc2,this.f[2],this.f[10]);//fourth point to originright
    pg.endShape(CLOSE);
    pg.pop();
    pg.fill(cpeta);
    pg.beginShape();
    pg.vertex(-this.f[2],0);
    pg.bezierVertex(-this.f[2],stc1,rpx1+rcx1,rcyout,rpx1,rpy1);//origin left to first point
    pg.bezierVertex(rpx1+rcxright,rcyin,rix1,riy1,rix1,riy1);//first point to first inner
    pg.bezierVertex(rix1,riy1,rcxleft,rcyin,rpx2,rpy2);//first inner to second point
    pg.bezierVertex(rpx2+rcxright,rcyin,rix2,riy2,rix2,riy2);//second point to second inner
    pg.bezierVertex(rix2,riy2,rpx3+rcxleft,rcyin,rpx3,rpy3);//second inner to third point
    pg.bezierVertex(rpx3+rcxright,rcyin,rix3,riy3,rix3,riy3);//third point to third inner
    pg.bezierVertex(rix3,riy3,rpx4+rcxleft,rcyin,rpx4,rpy4);//third inner to fourth point
    pg.bezierVertex(rpx4+rcxright,rcyout,this.f[2],stc2,this.f[2],this.f[10]);//fourth point to originright
    pg.endShape(CLOSE);
    pg.noFill();
    pg.stroke(cdpet);
    pg.strokeCap(SQUARE);
    pg.strokeWeight(myRandom(this.f[1]*0.6,this.f[1]*0.9));
    pg.bezier(0,0,0,stc1,rpx1,rcyout,rpx1,rpy1);
    pg.bezier(0,0,0,stc1,rpx2,rcyin,rpx2,rpy2);
    pg.bezier(0,0,0,stc2,rpx3,rcyin,rpx3,rpy3);
    pg.bezier(0,0,0,stc2,rpx4,rcyout,rpx4,rpy4);
    pg.noStroke();
    rcx1=rcx1+this.f[10];
    rcx2=rcx2-this.f[10];
    rpy1=rpy1-this.f[25];
    riy1=riy1-this.f[15];
    rpy2=rpy2-this.f[25];
    riy2=riy2-this.f[15];
    rpy3=rpy3-this.f[25];
    riy3=riy3-this.f[15];
    rpy4=rpy4-this.f[25];
    rpx1=rpx1+this.f[10];
    rpx4=rpx4-this.f[10];
    rcyout=rcyout-this.f[15];
    rcyin=rcyin-this.f[15];
    pg.fill(cpetha);
    pg.beginShape();
    pg.vertex(-this.f[2],0);
    pg.bezierVertex(-this.f[2],stc1,rpx1+rcx1,rcyout,rpx1,rpy1);//origin left to first point
    pg.bezierVertex(rpx1+rcxright,rcyin,rix1,riy1,rix1,riy1);//first point to first inner
    pg.bezierVertex(rix1,riy1,rcxleft,rcyin,rpx2,rpy2);//first inner to second point
    pg.bezierVertex(rpx2+rcxright,rcyin,rix2,riy2,rix2,riy2);//second point to second inner
    pg.bezierVertex(rix2,riy2,rpx3+rcxleft,rcyin,rpx3,rpy3);//second inner to third point
    pg.bezierVertex(rpx3+rcxright,rcyin,rix3,riy3,rix3,riy3);//third point to third inner
    pg.bezierVertex(rix3,riy3,rpx4+rcxleft,rcyin,rpx4,rpy4);//third inner to fourth point
    pg.bezierVertex(rpx4+rcxright,rcyout,this.f[2],stc2,this.f[2],this.f[10]);//fourth point to originright
    pg.endShape(CLOSE);
    
    pg.noFill();
    pg.stroke(cdpet);
    pg.strokeCap(SQUARE);
    pg.strokeWeight(myRandom(this.f[1]*0.6,this.f[1]*0.9));
    pg.bezier(0,0,0,stc1,rpx1,rcyout,rpx1,rpy1);
    pg.bezier(0,0,0,stc1,rpx2,rcyin,rpx2,rpy2);
    pg.bezier(0,0,0,stc2,rpx3,rcyin,rpx3,rpy3);
    pg.bezier(0,0,0,stc2,rpx4,rcyout,rpx4,rpy4);
    pg.noStroke();
    
    }pg.rotate((PI/12)+myRandom(-PI/5,PI/5));}
  pg.fill(cc);//inner core
  pg.noStroke();
  pg.ellipse(0,0,myRandom(this.e[34]*0.95,this.e[34]*1.05));
  pg.fill(csh);
  pg.ellipse(0,0,this.e[6]);
  for (let i=0; i<8; i++){
    pg.rotate(PI/4);
    pg.push();
  pg.rotate(PI/14); 
  pg.fill(cc); 
  pg.ellipse(this.e[0],myRandom(this.e[12]*0.9,this.e[12]*1.1),this.e[4],this.e[7]);
  pg.fill(csh);
  pg.ellipse(this.e[0],myRandom(this.e[8]*0.9,this.e[8]*1.1),this.e[3],this.e[11]);
   pg.rotate(-PI*2/14);  
  pg.fill(cc); 
  pg.ellipse(this.e[0],myRandom(this.e[12]*0.9,this.e[12]*1.1),this.e[4],this.e[7]);
  pg.fill(csh);
  pg.ellipse(this.e[0],myRandom(this.e[8]*0.9,this.e[8]*1.1),this.e[3],this.e[11]);
  pg.rotate(PI/14);
  pg.fill(cc);
pg.beginShape();
  pg.vertex(this.e[0],this.e[4]);
  pg.bezierVertex(this.e[1],this.e[4],this.e[6],this.e[17],0,this.e[17]);
  pg.bezierVertex(-this.e[6],this.e[17],-this.e[1],this.e[4],this.e[0],this.e[4]);
  pg.endShape(CLOSE);
  pg.fill(cch1);
  pg.ellipse(this.e[0],myRandom(this.e[8]*0.9,this.e[8]*1.1),this.e[3],this.e[11]);
  pg.fill(cch2);
  pg.ellipse(this.e[0],myRandom(this.e[7]*0.9,this.e[7]*1.1),this.e[2],this.e[8]);
    pg.pop();
  }
pg.rotate(PI/8);//pink inner parts
  for (let i=0;i<8;i++){
    let rr=myRandom(-PI/60,PI/60);
    pg.rotate(PI/4+rr);
  pg.push();
    let r=myRandom(this.e[12],this.e[14]);
    let r2=myRandom(this.e[27],this.e[33]);
    pg.fill (csha);
    pg.beginShape();//inner translucent shadow on edge of inner
  pg.vertex(0,r-this.e[2]);
  pg.bezierVertex(this.e[1],r-this.e[2],this.e[7],this.e[14],this.e[7],this.e[15]);
  pg.bezierVertex(this.e[7],this.e[18],this.e[5],this.e[18],this.e[3],this.e[18]);
  pg.vertex(-this.e[3],this.e[18]);
  pg.bezierVertex(-this.e[5],this.e[18],-this.e[7],this.e[18],-this.e[7],this.e[15]);
  pg.bezierVertex(-this.e[6],this.e[14],-this.e[1],r-this.e[2],this.e[0],r-this.e[2]);
  pg.endShape();
  pg.fill(csh);
  pg.beginShape();//outer translucent shadow on edge of inner
  pg.vertex(0,r);
  pg.bezierVertex(this.e[1],r,this.e[7],this.e[15],this.e[7],this.e[16]);
  pg.bezierVertex(this.e[7],this.e[18],this.e[5],this.e[18],this.e[3],this.e[18]);
  pg.vertex(-this.e[3],this.e[18]);
  pg.bezierVertex(-this.e[5],this.e[18],-this.e[7],this.e[18],-this.e[7],this.e[16]);
  pg.bezierVertex(-this.e[6],this.e[15],-this.e[1],r,this.e[0],r);
  pg.endShape();
  pg.fill(cdpk);
  pg.beginShape();//dark shadow around inner
  pg.vertex(0,r+this.e[4]);
  pg.bezierVertex(this.e[1],r+this.e[4],this.e[7],this.e[15],this.e[7],this.e[16]);
  pg.bezierVertex(this.e[7],this.e[18],this.e[5],this.e[24],this.e[3],r2);
  pg.vertex(-this.e[3],r2);
  pg.bezierVertex(-this.e[5],this.e[24],-this.e[7],this.e[18],-this.e[7],this.e[16]);
  pg.bezierVertex(-this.e[6],this.e[15],-this.e[1],r+this.e[4],this.e[0],r+this.e[4]);
  pg.endShape(CLOSE);
  pg.fill(cpk);
  pg.beginShape();//main pink shape in dark
  pg.vertex(0,r+this.e[1]);
  pg.bezierVertex(this.e[1],r+this.e[1],this.e[6],this.e[15],this.e[6],this.e[16]);
  pg.bezierVertex(this.e[6],this.e[17],this.e[5],this.e[23],this.e[2],r2-this.e[1]);
  pg.vertex(myRandom(this.e[1]*0.2,this.e[1]*1.2),r2-this.e[1]);
  pg.vertex(this.e[0],myRandom(this.e[14],this.e[16]));
  pg.vertex(-myRandom(this.e[1]*0.2,this.e[1]*1.2),r2-this.e[1]);
  pg.vertex(-this.e[2],r2-this.e[1]);
  pg.bezierVertex(-this.e[5],this.e[23],-this.e[6],this.e[17],-this.e[6],this.e[16]);
  pg.bezierVertex(-this.e[6],this.e[15],-this.e[1],r+this.e[1],this.e[0],r+this.e[1]);
  pg.endShape(CLOSE);    
    pg.fill(cdpka);
  pg.fill(cdpka);
  pg.beginShape();//translucent shadow base of pink1               
  pg.vertex(0,r+this.e[1]);
  pg.bezierVertex(this.e[1],r+this.e[1],this.e[7],this.e[15],this.e[7],this.e[16]);
  pg.bezierVertex(this.e[7],this.e[17],this.e[6],this.e[17],this.e[1]*5.6,r2-this.e[11]);
  pg.bezierVertex(this.e[3],this.e[17],this.e[2],this.e[17],this.e[0],r+this.e[4]);               
  pg.bezierVertex(-this.e[2],this.e[17],-this.e[3],this.e[17],-this.e[1]*5.6,r2-this.e[11]);
  pg.bezierVertex(-this.e[6],this.e[17],-this.e[7],this.e[17],-this.e[7],this.e[16]);
  pg.bezierVertex(-this.e[7],this.e[15],-this.e[1],r+this.e[1],0,r+this.e[1]);
  pg.endShape(CLOSE);            
  pg.beginShape();//translucent shadow base of pink2                   
  pg.vertex(0,r+this.e[1]);
  pg.bezierVertex(this.e[1],r+this.e[1],this.e[7],this.e[15],this.e[7],this.e[16]);
  pg.bezierVertex(this.e[7],this.e[17],this.e[6],this.e[17],this.e[1]*5.6,r2/2+this.e[3]);
  pg.bezierVertex(this.e[3],this.e[15],this.e[2],this.e[15],this.e[0],r+this.e[3]);             
  pg.bezierVertex(-this.e[2],this.e[15],-this.e[3],this.e[15],-this.e[1]*5.6,r2/2+this.e[3]);
  pg.bezierVertex(-this.e[6],this.e[17],-this.e[7],this.e[17],-this.e[7],this.e[16]);
  pg.bezierVertex(-this.e[7],this.e[15],-this.e[1],r+this.e[1],0,r+this.e[1]);
  pg.endShape(CLOSE);
    
    pg.fill(cpkha);
    let r3=myRandom(this.e[3]*0.9,this.e[3]*1.1)
  pg.beginShape();//highlights on pink
  pg.vertex(this.e[1],r+this.e[5]);
  pg.bezierVertex(this.e[2],r+this.e[5],this.e[5],r+this.e[5],this.e[5],r+this.e[7]);
  pg.bezierVertex(this.e[5],r+this.e[8],this.e[4],r2-this.e[6],this.e[3],r2-this.e[3]);
  pg.bezierVertex(this.e[2],r2-this.e[2],this.e[2],r2-this.e[2],this.e[1]*0.8,r2-this.e[3]);
  pg.bezierVertex(this.e[1],r+this.e[7],this.e[1],r+this.e[6],this.e[1],r+this.e[5]);
  pg.endShape(CLOSE);
  pg.beginShape();//highlights on pink
  pg.vertex(-this.e[1],r+this.e[5]);
  pg.bezierVertex(-this.e[2],r+this.e[5],-this.e[5],r+this.e[5],-this.e[5],r+this.e[7]);
  pg.bezierVertex(-this.e[5],r+this.e[8],-this.e[4],r2-this.e[6],-this.e[3],r2-this.e[3]);
  pg.bezierVertex(-this.e[2],r2-this.e[2],-this.e[2],r2-this.e[2],-this.e[1]*0.8,r2-this.e[3]);
  pg.bezierVertex(-this.e[1],r+this.e[7],-this.e[1],r+this.e[6],-this.e[1],r+this.e[5]);
  pg.endShape(CLOSE);
    pg.push();
    pg.translate(0,r2);
    pg.rotate(myRandom(PI/40,PI/20));
    pg.fill (cring);
    pg.stroke(cdpk);
    pg.strokeWeight(myRandom(this.e[1]*0.3,this.e[1]*0.5));
    let r4=myRandom(this.e[7]*0.9,this.e[7]*1.1);
    let r5=myRandom(this.e[4]*0.9,this.e[4]*1.1);
    let r6=myRandom(this.e[26]*0.8,this.e[26]*1.2);
    pg.ellipse(0,this.e[1]*0.9,r4,r5);
    pg.noStroke();
    pg.fill(cstpet);//first stamen petal
     x1=this.e[1];
     y1=this.e[1];
    
     x1c=myRandom(this.e[2],this.e[20]);
     y1c=myRandom(this.e[8],this.e[20]);
     x2=x1-myRandom(this.e[2],this.e[20]);
     y2=myRandom(this.e[12],this.e[42]);
     x2c=x2+myRandom(this.e[3],this.e[7]);
     y2c=y2+myRandom(this.e[2],this.e[12]);
     x2c2=x2c+myRandom(this.e[2],this.e[3]);
     y2c2=y2c+myRandom(this.e[2],this.e[8]);
     x3=x1+myRandom(this.e[3]*0.9,this.e[3]*1.1);
     y3=y1;
     x3c=x1c+this.e[3];
     y3c=y1c;    
    pg.stroke(cddpk);
    pg.beginShape()
    pg.vertex(x1,y1);
    pg.bezierVertex(x1c,y1c,x2c,y2c,x2,y2);
    pg.bezierVertex(x2c2,y2c2,x3c,y3c,x3,y3);
    pg.endShape(CLOSE);
    pg.noFill();
    pg.bezier(x1+(x3-x1)/2,y1,x1c+(x3c-x1c)/2,y1c,x2c2-(x2c2-x2c)/2,y2c+(y2c2-y2c)/2,x2,y2);
    pg.fill(cstpet);
     x1=-this.e[2];//second stamen petal
     y1=this.e[2];
     x1c=myRandom(this.e[2],this.e[20]);
     y1c=myRandom(this.e[8],this.e[20]);
     x2=x1-myRandom(this.e[2],this.e[20]);
     y2=myRandom(this.e[12],this.e[42]);
     x2c=x2+myRandom(this.e[3],this.e[7]);
     y2c=y2+myRandom(this.e[2],this.e[12]);
     x2c2=x2c+myRandom(this.e[2],this.e[3]);
     y2c2=y2c+myRandom(this.e[2],this.e[8]);
     x3=-x1+myRandom(this.e[3]*0.9,this.e[3]*1.1);
     y3=y1;
     x3c=x1c+this.e[3];
     y3c=y1c;
    pg.beginShape()
    pg.vertex(x1,y1);
    pg.bezierVertex(-x1c,y1c,-x2c,y2c,-x2,y2);
    pg.bezierVertex(-x2c2,y2c2,-x3c,y3c,-x3,y3);
    pg.endShape(CLOSE);
    pg.noFill();
    pg.bezier(-(x1+(x3-x1)/2),y1,-(x1c+(x3c-x1c)/2),y1c,-(x2c2-(x2c2-x2c)/2),y2c+(y2c2-y2c)/2,-x2,y2);
    pg.fill(cst);
    pg.noStroke();
    pg.rect(-this.e[2],this.e[1],myRandom(this.e[4]*0.9,this.e[4]*1.1),r6,this.e[3]);
    pg.stroke(cddpk);
    pg.fill(cstpet);
     x1=this.e[2];//third stamen petal
     y1=this.e[2];
     x1c=myRandom(this.e[2],this.e[20]);
     y1c=myRandom(this.e[8],this.e[20]);
     x2=x1-myRandom(this.e[2],this.e[20]);
     y2=myRandom(this.e[12],this.e[42]);
     x2c=x2+myRandom(this.e[3],this.e[7]);
     y2c=y2+myRandom(this.e[2],this.e[12]);
     x2c2=x2c+myRandom(this.e[2],this.e[3]);
     y2c2=y2c+myRandom(this.e[2],this.e[8]);
     x3=-x1+myRandom(this.e[3]*0.9,this.e[3]*1.1);
     y3=y1;
     x3c=x1c+this.e[3];
     y3c=y1c;    
    pg.beginShape()
    pg.vertex(x1,y1);
    pg.bezierVertex(x1c,y1c,x2c,y2c,x2,y2);
    pg.bezierVertex(x2c2,y2c2,x3c,y3c,x3,y3);
    pg.endShape(CLOSE);
    pg.noFill();
    pg.bezier(x1+(x3-x1)/2,y1,x1c+(x3c-x1c)/2,y1c,x2c2-(x2c2-x2c)/2,y2c+(y2c2-y2c)/2,x2,y2);
    pg.fill(cstpet);
     x1=-this.e[2];//fourth stamen petal
     y1=this.e[2];
     x1c=myRandom(this.e[2],this.e[20]);
     y1c=myRandom(this.e[8],this.e[20]);
     x2=x1-myRandom(this.e[2],this.e[20]);
     y2=myRandom(this.e[12],this.e[42]);
     x2c=x2+myRandom(this.e[3],this.e[7]);
     y2c=y2+myRandom(this.e[2],this.e[12]);
     x2c2=x2c+myRandom(this.e[2],this.e[3]);
     y2c2=y2c+myRandom(this.e[2],this.e[8]);
     x3=-x1+myRandom(this.e[3]*0.9,this.e[3]*1.1);
     y3=y1;
     x3c=x1c+this.e[3];
     y3c=y1c;
    pg.beginShape()
    pg.vertex(x1,y1);
    pg.bezierVertex(-x1c,y1c,-x2c,y2c,-x2,y2);
    pg.bezierVertex(-x2c2,y2c2,-x3c,y3c,-x3,y3);
    pg.endShape(CLOSE);
    pg.noFill();
    pg.bezier(-(x1+(x3-x1)/2),y1,-(x1c+(x3c-x1c)/2),y1c,-(x2c2-(x2c2-x2c)/2),y2c+(y2c2-y2c)/2,-x2,y2);
    pg.fill(cdpet);
    pg.noStroke();
    pg.pop();
  pg.pop();
  }
pg.pop();
}}