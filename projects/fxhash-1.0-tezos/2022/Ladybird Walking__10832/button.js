function pgbutton(bx,by,bw,sewn,ccol){
  let buttonchoice=myRandom(0,1);
  let blend=[];
  if (buttonchoice>0.5)blend=["ab","bc","cd","de","ef","fg","gh","hi","ij","jk","ca","mm","mm","mm","eh","na","nh","ei","kn"];
  if (buttonchoice<0.5)blend=["ab","bc","cd","de","ef","fg","gh","hi","ij","jk","ca","eh","na","nh","ei","kn"];
  let blenda=myRandom(0,1);
  let blendch=myRandomA(blend);
  if (blendch=="ab"){
  bchd1=color(features.ad);
  bchd2=color(features.bd);
  bchl1=color(features.al);
  bchl2=color(features.bl);
  bchh11=color(features.ah1);
  bchh12=color(features.bh1);
  bchh21=color(features.ah2);
  bchh22=color(features.bh2);
  }
  if (blendch=="bc"){
  bchd1=color(features.bd);
  bchd2=color(features.cd);
  bchl1=color(features.bl);
  bchl2=color(features.cl);
  bchh11=color(features.bh1);
  bchh12=color(features.ch1);
  bchh21=color(features.bh2);
  bchh22=color(features.ch2);
  }
  if (blendch=="cd"){
  bchd1=color(features.cd);
  bchd2=color(features.dd);
  bchl1=color(features.cl);
  bchl2=color(features.dl);
  bchh11=color(features.ch1);
  bchh12=color(features.dh1);
  bchh21=color(features.ch2);
  bchh22=color(features.dh2);
  }
  if (blendch=="de"){
  bchd1=color(features.dd);
  bchd2=color(features.ed);
  bchl1=color(features.dl);
  bchl2=color(features.el);
  bchh11=color(features.dh1);
  bchh12=color(features.eh1);
  bchh21=color(features.dh2);
  bchh22=color(features.eh2);
  }
  if (blendch=="ef"){
  bchd1=color(features.ed);
  bchd2=color(features.fd);
  bchl1=color(features.el);
  bchl2=color(features.fl);
  bchh11=color(features.eh1);
  bchh12=color(features.fh1);
  bchh21=color(features.eh2);
  bchh22=color(features.fh2);
  }
  if (blendch=="fg"){
  bchd1=color(features.fd);
  bchd2=color(features.gd);
  bchl1=color(features.fl);
  bchl2=color(features.gl);
  bchh11=color(features.fh1);
  bchh12=color(features.gh1);
  bchh21=color(features.fh2);
  bchh22=color(features.gh2);
  }
  if (blendch=="gh"){
  bchd1=color(features.gd);
  bchd2=color(features.hd);
  bchl1=color(features.gl);
  bchl2=color(features.hl);
  bchh11=color(features.gh1);
  bchh12=color(features.hh1);
  bchh21=color(features.gh2);
  bchh22=color(features.hh2);
  }
  if (blendch=="hi"){
  bchd1=color(features.hd);
  bchd2=color(features.id);
  bchl1=color(features.hl);
  bchl2=color(features.il);
  bchh11=color(features.hh1);
  bchh12=color(features.ih1);
  bchh21=color(features.hh2);
  bchh22=color(features.ih2);
  }
  if (blendch=="ij"){
  bchd1=color(features.id);
  bchd2=color(features.jd);
  bchl1=color(features.il);
  bchl2=color(features.jl);
  bchh11=color(features.ih1);
  bchh12=color(features.jh1);
  bchh21=color(features.ih2);
  bchh22=color(features.jh2);
  }
  if (blendch=="jk"){
  bchd1=color(features.jd);
  bchd2=color(features.kd);
  bchl1=color(features.jl);
  bchl2=color(features.kl);
  bchh11=color(features.jh1);
  bchh12=color(features.kh1);
  bchh21=color(features.jh2);
  bchh22=color(features.kh2);
  }
  if (blendch=="ca"){
  bchd1=color(features.cd);
  bchd2=color(features.ads);
  bchl1=color(features.cl);
  bchl2=color(features.al);
  bchh11=color(features.ch1);
  bchh12=color(features.ah1);
  bchh21=color(features.ch2);
  bchh22=color(features.ah2);
  }
  if (blendch=="mm"){
  bchd1=color(features.md);
  bchd2=color(features.md);
  bchl1=color(features.ml);
  bchl2=color(features.ml);
  bchh11=color(features.mh1);
  bchh12=color(features.mh1);
  bchh21=color(features.mh2);
  bchh22=color(features.mh2);
  }
  if (blendch=="eh"){
  bchd1=color(features.ed);
  bchd2=color(features.hd);
  bchl1=color(features.el);
  bchl2=color(features.hl);
  bchh11=color(features.eh1);
  bchh12=color(features.hh1);
  bchh21=color(features.eh2);
  bchh22=color(features.hh2);
  }
  if (blendch=="na"){
  bchd1=color(features.nd);
  bchd2=color(features.ads);
  bchl1=color(features.nl);
  bchl2=color(features.al);
  bchh11=color(features.nh1);
  bchh12=color(features.ah1);
  bchh21=color(features.nh2);
  bchh22=color(features.ah2);
  }
  if (blendch=="nh"){
  bchd1=color(features.nd);
  bchd2=color(features.hd);
  bchl1=color(features.nl);
  bchl2=color(features.hl);
  bchh11=color(features.nh1);
  bchh12=color(features.hh1);
  bchh21=color(features.nh2);
  bchh22=color(features.hh2);
  }
  if (blendch=="ei"){
  bchd1=color(features.ed);
  bchd2=color(features.id);
  bchl1=color(features.el);
  bchl2=color(features.il);
  bchh11=color(features.eh1);
  bchh12=color(features.ih1);
  bchh21=color(features.eh2);
  bchh22=color(features.ih2);
  }
  if (blendch=="kn"){
  bchd1=color(features.kd);
  bchd2=color(features.nd);
  bchl1=color(features.kl);
  bchl2=color(features.nl);
  bchh11=color(features.kh1);
  bchh12=color(features.nh1);
  bchh21=color(features.kh2);
  bchh22=color(features.nh2);
  }
  bcd1=lerpColor(bchd1,bchd2,blenda);
  bcl1=lerpColor(bchl1,bchl2,blenda);
  bch1=lerpColor(bchh11,bchh12,blenda);
  bchh1=lerpColor(bchh21,bchh22,blenda);
  b1d1=color(bcd1);
  b1l1=color(bcl1);
  if (buttonchoice>0.5){
  let bnr=myRandom(0,1);
  let bn=2;
  let bdi=bw*1.1;
  if (bnr<0.5)bn=4;
  b1=createGraphics(bdi,bdi);
  b1.noStroke();
  b1.fill(features.cornshadow);
  b1.ellipse(b1.width/2+bw*0.016,b1.height/2+bw*0.024,bw);
  b1.fill(features.cornshadowa);
  b1.ellipse(b1.width/2+bw*0.024,b1.height/2+bw*0.032,bw*1.01);
  for (let l=0;l<bw/12;l+=0.402){
  let bg = lerpColor(b1d1, b1l1, l/(bw/12));
  b1.fill(bg);
  b1.ellipse(b1.width/2,b1.height/2,bw-l);
  }
  b1.fill(bch1);einc=bw*0.0048;
  for (let e=PI*4/5;e<PI*6/5;e+=PI/480){
  b1.ellipse(b1.width/2+(bw*0.46-einc/4)*cos(e),b1.height/2+(bw*0.46-einc/2)*sin(e),einc);
    einc+=bw*0.000135;
  }einc=bw*0.0048;
  for (let e=-PI*2/5;e>-PI*4/5;e-=PI/480){
  b1.ellipse(b1.width/2+(bw*0.46-einc/4)*cos(e),b1.height/2+(bw*0.46-einc/2)*sin(e),einc);
    einc+=bw*0.000135;
  }
  b1.fill(bchh1);einc=bw*0.0012;
  for (let e=PI*4/5;e<PI*6/5;e+=PI/480){
  b1.ellipse(b1.width/2+(bw*0.46-einc/4)*cos(e),b1.height/2+(bw*0.46-einc/2)*sin(e),einc);
    einc+=bw*0.00008;
  }einc=bw*0.0009;
  for (let e=-PI*2/5;e>-PI*4/5;e-=PI/480){
  b1.ellipse(b1.width/2+(bw*0.46-einc/4)*cos(e),b1.height/2+(bw*0.46-einc/2)*sin(e),einc);
    einc+=bw*0.00008;
  }  
  if (bn==2){
    let hpr=myRandom(0,PI*2);
    let hpl=PI+hpr;
    einch=bw*0.02;
    for (let eh=-PI*2/5;eh<PI/5;eh+=PI/480){
  b1.ellipse(b1.width/2+((bw/12)*cos(hpr))+(bw*0.04)*cos(eh),b1.height/2+((bw/12)*sin(hpr))+(bw*0.04)*sin(eh),einch/8);
    einch+=bw*0.0006;}
    einch=bw*0.02;
    for (let eh=PI*4/5;eh>PI/5;eh-=PI/480){
  b1.ellipse(b1.width/2+((bw/12)*cos(hpr))+(bw*0.04)*cos(eh),b1.height/2+((bw/12)*sin(hpr))+(bw*0.04)*sin(eh),einch/8);
    einch+=bw*0.0006;}
    einch=bw*0.02;
    for (let eh=-PI*2/5;eh<PI/5;eh+=PI/480){
  b1.ellipse(b1.width/2+((bw/12)*cos(hpl))+(bw*0.04)*cos(eh),b1.height/2+((bw/12)*sin(hpl))+(bw*0.04)*sin(eh),einch/8);
    einch+=bw*0.0006;}
    einch=bw*0.02;
    for (let eh=PI*4/5;eh>PI/5;eh-=PI/480){
  b1.ellipse(b1.width/2+((bw/12)*cos(hpl))+(bw*0.04)*cos(eh),b1.height/2+((bw/12)*sin(hpl))+(bw*0.04)*sin(eh),einch/8);
    einch+=bw*0.0006;}
  b1.erase();
  b1.ellipse(b1.width/2+((bw/12)*cos(hpr)),b1.height/2+((bw/12)*sin(hpr)),bw/12);
  b1.ellipse(b1.width/2+((bw/12)*cos(hpl)),b1.height/2+((bw/12)*sin(hpl)),bw/12);
  b1.noErase();
  b1.fill(features.cornshadowd);
  b1.ellipse(b1.width/2+((bw/12)*cos(hpr)),b1.height/2+((bw/12)*sin(hpr)),bw/12);
  b1.ellipse(b1.width/2+((bw/12)*cos(hpl)),b1.height/2+((bw/12)*sin(hpl)),bw/12);
    if (sewn=="sewn"){
    b1.stroke(features.cornshadow);
      b1.strokeWeight(int(bw/16));
      b1.line(b1.width/2+((bw/12)*cos(hpr)),b1.height/2+((bw/12)*sin(hpr)),b1.width/2+((bw/12)*cos(hpl)),b1.height/2+((bw/12)*sin(hpl)));
    b1.stroke(ccol);
      b1.strokeWeight(int(bw/18));
      b1.line(b1.width/2+((bw/12)*cos(hpr)),b1.height/2+((bw/12)*sin(hpr)),b1.width/2+((bw/12)*cos(hpl)),b1.height/2+((bw/12)*sin(hpl)));
    }
  }
  if (bn==4){
    let hp1=myRandom(0,PI*2);
    let hp2=PI/2+hp1;
    let hp3=PI+hp1;
    let hp4=PI*3/2+hp1;
    einch=bw*0.02;
    for (let eh=-PI*2/5;eh<PI/5;eh+=PI/480){
  b1.ellipse(b1.width/2+((bw/12)*cos(hp1))+(bw*0.04)*cos(eh),b1.height/2+((bw/12)*sin(hp1))+(bw*0.04)*sin(eh),einch/8);
    einch+=bw*0.0006;}
    einch=bw*0.02;
    for (let eh=PI*4/5;eh>PI/5;eh-=PI/480){
  b1.ellipse(b1.width/2+((bw/12)*cos(hp1))+(bw*0.04)*cos(eh),b1.height/2+((bw/12)*sin(hp1))+(bw*0.04)*sin(eh),einch/8);
    einch+=bw*0.0006;}
    einch=bw*0.02;
    for (let eh=-PI*2/5;eh<PI/5;eh+=PI/480){
  b1.ellipse(b1.width/2+((bw/12)*cos(hp2))+(bw*0.04)*cos(eh),b1.height/2+((bw/12)*sin(hp2))+(bw*0.04)*sin(eh),einch/8);
    einch+=bw*0.0006;}
    einch=bw*0.02;
    for (let eh=PI*4/5;eh>PI/5;eh-=PI/480){
  b1.ellipse(b1.width/2+((bw/12)*cos(hp2))+(bw*0.04)*cos(eh),b1.height/2+((bw/12)*sin(hp2))+(bw*0.04)*sin(eh),einch/8);
    einch+=bw*0.0006;}
    einch=bw*0.02;
    for (let eh=-PI*2/5;eh<PI/5;eh+=PI/480){
  b1.ellipse(b1.width/2+((bw/12)*cos(hp3))+(bw*0.04)*cos(eh),b1.height/2+((bw/12)*sin(hp3))+(bw*0.04)*sin(eh),einch/8);
    einch+=bw*0.0006;}
    einch=bw*0.02;
    for (let eh=PI*4/5;eh>PI/5;eh-=PI/480){
  b1.ellipse(b1.width/2+((bw/12)*cos(hp3))+(bw*0.04)*cos(eh),b1.height/2+((bw/12)*sin(hp3))+(bw*0.04)*sin(eh),einch/8);
    einch+=bw*0.0006;}
    einch=bw*0.02;
    for (let eh=-PI*2/5;eh<PI/5;eh+=PI/480){
  b1.ellipse(b1.width/2+((bw/12)*cos(hp4))+(bw*0.04)*cos(eh),b1.height/2+((bw/12)*sin(hp4))+(bw*0.04)*sin(eh),einch/8);
    einch+=bw*0.0006;}
    einch=bw*0.02;
    for (let eh=PI*4/5;eh>PI/5;eh-=PI/480){
  b1.ellipse(b1.width/2+((bw/12)*cos(hp4))+(bw*0.04)*cos(eh),b1.height/2+((bw/12)*sin(hp4))+(bw*0.04)*sin(eh),einch/8);
    einch+=bw*0.0006;}
  b1.erase();
  b1.ellipse(b1.width/2+((bw/12)*cos(hp1)),b1.height/2+((bw/12)*sin(hp1)),bw/12);
  b1.ellipse(b1.width/2+((bw/12)*cos(hp2)),b1.height/2+((bw/12)*sin(hp2)),bw/12);
  b1.noErase();
  b1.fill(features.cornshadowd);
  b1.ellipse(b1.width/2+((bw/12)*cos(hp1)),b1.height/2+((bw/12)*sin(hp1)),bw/12);
  b1.ellipse(b1.width/2+((bw/12)*cos(hp2)),b1.height/2+((bw/12)*sin(hp2)),bw/12);
  b1.erase();
  b1.ellipse(b1.width/2+((bw/12)*cos(hp3)),b1.height/2+((bw/12)*sin(hp3)),bw/12);
  b1.ellipse(b1.width/2+((bw/12)*cos(hp4)),b1.height/2+((bw/12)*sin(hp4)),bw/12);
  b1.noErase();
  b1.fill(features.cornshadowd);
  b1.ellipse(b1.width/2+((bw/12)*cos(hp3)),b1.height/2+((bw/12)*sin(hp3)),bw/12);
  b1.ellipse(b1.width/2+((bw/12)*cos(hp4)),b1.height/2+((bw/12)*sin(hp4)),bw/12);
    let cross=myRandom(0,1);
    if (sewn=="sewn" && cross<0.5){
      for(let s=0;s<4;s++){
    b1.stroke(features.cornshadowd);
      b1.strokeWeight(int(bw/16));
      b1.line(b1.width/2+((bw/12)*cos(hp1)),b1.height/2+((bw/12)*sin(hp1)),b1.width/2+((bw/12)*cos(hp4)),b1.height/2+((bw/12)*sin(hp4)));
      b1.line(b1.width/2+((bw/12)*cos(hp2)),b1.height/2+((bw/12)*sin(hp2)),b1.width/2+((bw/12)*cos(hp3)),b1.height/2+((bw/12)*sin(hp3)));
    b1.stroke(ccol);
      b1.strokeWeight(int(bw/18));
      b1.line(b1.width/2+((bw/12)*cos(hp1)),b1.height/2+((bw/12)*sin(hp1)),b1.width/2+((bw/12)*cos(hp4)),b1.height/2+((bw/12)*sin(hp4)));
      b1.line(b1.width/2+((bw/12)*cos(hp2)),b1.height/2+((bw/12)*sin(hp2)),b1.width/2+((bw/12)*cos(hp3)),b1.height/2+((bw/12)*sin(hp3)));
    }}
    if (sewn=="sewn" && cross>0.5){
      b1.strokeWeight(int(bw/16));
      b1.stroke(features.cornshadowd);
      b1.line(b1.width/2+((bw/12)*cos(hp1)),b1.height/2+((bw/12)*sin(hp1)),b1.width/2+((bw/12)*cos(hp3)),b1.height/2+((bw/12)*sin(hp3)));
      b1.stroke(ccol);
      b1.strokeWeight(int(bw/18));
      b1.line(b1.width/2+((bw/12)*cos(hp1)),b1.height/2+((bw/12)*sin(hp1)),b1.width/2+((bw/12)*cos(hp3)),b1.height/2+((bw/12)*sin(hp3)));
      b1.strokeWeight(int(bw/16));
      b1.stroke(features.cornshadowd);
      b1.line(b1.width/2+((bw/12)*cos(hp2)),b1.height/2+((bw/12)*sin(hp2)),b1.width/2+((bw/12)*cos(hp4)),b1.height/2+((bw/12)*sin(hp4)));
      b1.stroke(ccol);
      b1.strokeWeight(int(bw/18));
      b1.line(b1.width/2+((bw/12)*cos(hp2)),b1.height/2+((bw/12)*sin(hp2)),b1.width/2+((bw/12)*cos(hp4)),b1.height/2+((bw/12)*sin(hp4)));
    }
  }
pg.image(b1,bx-bw/2,by-bw/2);
  }
  if (buttonchoice<=0.5){
  let bnr=myRandom(0,1);
  let bn=2;
  let bdi=bw*1.1;
  if (bnr<0.5)bn=4;
  b2=createGraphics(bdi,bdi);
  b2.noStroke();
    let b2x=b2.width/2;
    let b2y=b2.height/2;
  b2.fill(features.cornshadow);
  b2.ellipse(b2.width/2+bw*0.016,b2.height/2+bw*0.024,bw);
  b2.fill(features.cornshadowa);
  b2.ellipse(b2.width/2+bw*0.024,b2.height/2+bw*0.032,bw*1.01);  
  for (let l=0;l<bw/12;l+=0.402){
  let bg = lerpColor(bcd1, bcl1, l/(bw/12));
  b2.fill(bg);
  b2.ellipse(b2.width/2,b2.height/2,bw-l);
  }
  b2.fill(bch1);einc=bw*0.0048;
  for (let e=PI*4/5;e<PI*6/5;e+=PI/480){
  b2.ellipse(b2x+(bw*0.46-einc/4)*cos(e),b2y+(bw*0.46-einc/2)*sin(e),einc);
    einc+=bw*0.000135;
  }einc=bw*0.0048;
  for (let e=-PI*2/5;e>-PI*4/5;e-=PI/480){
  b2.ellipse(b2x+(bw*0.46-einc/4)*cos(e),b2y+(bw*0.46-einc/2)*sin(e),einc);
    einc+=bw*0.000135;
  }
  b2.fill(bchh1);einc=bw*0.0012;
  for (let e=PI*4/5;e<PI*6/5;e+=PI/480){
  b2.ellipse(b2x+(bw*0.46-einc/4)*cos(e),b2y+(bw*0.46-einc/2)*sin(e),einc);
    einc+=bw*0.00008;
  }einc=bw*0.0009;
  for (let e=-PI*2/5;e>-PI*4/5;e-=PI/480){
  b2.ellipse(b2x+(bw*0.46-einc/4)*cos(e),b2y+(bw*0.46-einc/2)*sin(e),einc);
    einc+=bw*0.00008;
  } 
    let bcent=myRandom(bw/2,bw*5/6);
    let bcentsh=bcent+sqrt(2)*bw/42;
    let bcenthi=bcent+sqrt(2)*bw/24;
    b2.fill(features.bchh2a);
    b2.ellipse(b2x+bw/42,b2y+bw/42,bcenthi);
    b2.fill(bch1);
    b2.ellipse(b2x+bw/48,b2y+bw/48,bcenthi);
    b2.fill(bcd1);
    b2.ellipse(b2x,b2y,bcentsh);
    b2.fill(bcl1);
    b2.ellipse(b2x+bw/42,b2y+bw/42,bcent);
    let brand=myRandom(0,1);
    if(brand<0.3 && bcent>bw*2/3){    
  for (let l=0;l<bw/2;l+=0.402){
  let bg = lerpColor(bcl1, bch1, l/(bw/2.2));
  b2.fill(bg);
  b2.ellipse(b2.width/2,b2.height/2,bcent-l);
  }}
  if (bn==2){
    b2.fill(bchh1);
    let hpr=myRandom(0,PI*2);
    let hpl=PI+hpr;
    einch=bw*0.02;
    for (let eh=-PI*2/5;eh<PI/5;eh+=PI/480){
  b2.ellipse(b2.width/2+((bw/12)*cos(hpr))+(bw*0.04)*cos(eh),b2.height/2+((bw/12)*sin(hpr))+(bw*0.04)*sin(eh),einch/8);
    einch+=bw*0.0006;}
    einch=bw*0.02;
    for (let eh=PI*4/5;eh>PI/5;eh-=PI/480){
  b2.ellipse(b2.width/2+((bw/12)*cos(hpr))+(bw*0.04)*cos(eh),b2.height/2+((bw/12)*sin(hpr))+(bw*0.04)*sin(eh),einch/8);
    einch+=bw*0.0006;}
    einch=bw*0.02;
    for (let eh=-PI*2/5;eh<PI/5;eh+=PI/480){
  b2.ellipse(b2.width/2+((bw/12)*cos(hpl))+(bw*0.04)*cos(eh),b2.height/2+((bw/12)*sin(hpl))+(bw*0.04)*sin(eh),einch/8);
    einch+=bw*0.0006;}
    einch=bw*0.02;
    for (let eh=PI*4/5;eh>PI/5;eh-=PI/480){
  b2.ellipse(b2.width/2+((bw/12)*cos(hpl))+(bw*0.04)*cos(eh),b2.height/2+((bw/12)*sin(hpl))+(bw*0.04)*sin(eh),einch/8);
    einch+=bw*0.0006;}
  b2.erase();
  b2.ellipse(b2.width/2+((bw/12)*cos(hpr)),b2.height/2+((bw/12)*sin(hpr)),bw/12);
  b2.ellipse(b2.width/2+((bw/12)*cos(hpl)),b2.height/2+((bw/12)*sin(hpl)),bw/12);
  b2.noErase();
  b2.fill(features.cornshadowd);
  b2.ellipse(b2.width/2+((bw/12)*cos(hpr)),b2.height/2+((bw/12)*sin(hpr)),bw/12);
  b2.ellipse(b2.width/2+((bw/12)*cos(hpl)),b2.height/2+((bw/12)*sin(hpl)),bw/12);
    if (sewn=="sewn"){
    b2.stroke(features.cornshadow);
      b2.strokeWeight(int(bw/16));
      b2.line(b2.width/2+((bw/12)*cos(hpr)),b2.height/2+((bw/12)*sin(hpr)),b2.width/2+((bw/12)*cos(hpl)),b2.height/2+((bw/12)*sin(hpl)));
    b2.stroke(ccol);
      b2.strokeWeight(int(bw/18));
      b2.line(b2.width/2+((bw/12)*cos(hpr)),b2.height/2+((bw/12)*sin(hpr)),b2.width/2+((bw/12)*cos(hpl)),b2.height/2+((bw/12)*sin(hpl)));
    }
  }
  if (bn==4){
    b2.fill(bchh1);
    let hp1=myRandom(0,PI*2);
    let hp2=PI/2+hp1;
    let hp3=PI+hp1;
    let hp4=PI*3/2+hp1;
    einch=bw*0.02;
    for (let eh=-PI*2/5;eh<PI/5;eh+=PI/480){
  b2.ellipse(b2.width/2+((bw/12)*cos(hp1))+(bw*0.04)*cos(eh),b2.height/2+((bw/12)*sin(hp1))+(bw*0.04)*sin(eh),einch/8);
    einch+=bw*0.0006;}
    einch=bw*0.02;
    for (let eh=PI*4/5;eh>PI/5;eh-=PI/480){
  b2.ellipse(b2.width/2+((bw/12)*cos(hp1))+(bw*0.04)*cos(eh),b2.height/2+((bw/12)*sin(hp1))+(bw*0.04)*sin(eh),einch/8);
    einch+=bw*0.0006;}
    einch=bw*0.02;
    for (let eh=-PI*2/5;eh<PI/5;eh+=PI/480){
  b2.ellipse(b2.width/2+((bw/12)*cos(hp2))+(bw*0.04)*cos(eh),b2.height/2+((bw/12)*sin(hp2))+(bw*0.04)*sin(eh),einch/8);
    einch+=bw*0.0006;}
    einch=bw*0.02;
    for (let eh=PI*4/5;eh>PI/5;eh-=PI/480){
  b2.ellipse(b2.width/2+((bw/12)*cos(hp2))+(bw*0.04)*cos(eh),b2.height/2+((bw/12)*sin(hp2))+(bw*0.04)*sin(eh),einch/8);
    einch+=bw*0.0006;}
    einch=bw*0.02;
    for (let eh=-PI*2/5;eh<PI/5;eh+=PI/480){
  b2.ellipse(b2.width/2+((bw/12)*cos(hp3))+(bw*0.04)*cos(eh),b2.height/2+((bw/12)*sin(hp3))+(bw*0.04)*sin(eh),einch/8);
    einch+=bw*0.0006;}
    einch=bw*0.02;
    for (let eh=PI*4/5;eh>PI/5;eh-=PI/480){
  b2.ellipse(b2.width/2+((bw/12)*cos(hp3))+(bw*0.04)*cos(eh),b2.height/2+((bw/12)*sin(hp3))+(bw*0.04)*sin(eh),einch/8);
    einch+=bw*0.0006;}
    einch=bw*0.02;
    for (let eh=-PI*2/5;eh<PI/5;eh+=PI/480){
  b2.ellipse(b2.width/2+((bw/12)*cos(hp4))+(bw*0.04)*cos(eh),b2.height/2+((bw/12)*sin(hp4))+(bw*0.04)*sin(eh),einch/8);
    einch+=bw*0.0006;}
    einch=bw*0.02;
    for (let eh=PI*4/5;eh>PI/5;eh-=PI/480){
  b2.ellipse(b2.width/2+((bw/12)*cos(hp4))+(bw*0.04)*cos(eh),b2.height/2+((bw/12)*sin(hp4))+(bw*0.04)*sin(eh),einch/8);
    einch+=bw*0.0006;}
  b2.erase();
  b2.ellipse(b2.width/2+((bw/12)*cos(hp1)),b2.height/2+((bw/12)*sin(hp1)),bw/12);
  b2.ellipse(b2.width/2+((bw/12)*cos(hp2)),b2.height/2+((bw/12)*sin(hp2)),bw/12);
  b2.noErase();
  b2.fill(features.cornshadowd);
  b2.ellipse(b2.width/2+((bw/12)*cos(hp1)),b2.height/2+((bw/12)*sin(hp1)),bw/12);
  b2.ellipse(b2.width/2+((bw/12)*cos(hp2)),b2.height/2+((bw/12)*sin(hp2)),bw/12);
  b2.erase();
  b2.ellipse(b2.width/2+((bw/12)*cos(hp3)),b2.height/2+((bw/12)*sin(hp3)),bw/12);
  b2.ellipse(b2.width/2+((bw/12)*cos(hp4)),b2.height/2+((bw/12)*sin(hp4)),bw/12);
  b2.noErase();
  b2.fill(features.cornshadowd);
  b2.ellipse(b2.width/2+((bw/12)*cos(hp3)),b2.height/2+((bw/12)*sin(hp3)),bw/12);
  b2.ellipse(b2.width/2+((bw/12)*cos(hp4)),b2.height/2+((bw/12)*sin(hp4)),bw/12);
    let cross=myRandom(0,1);
    if (sewn=="sewn" && cross<0.5){
    b2.stroke(features.cornshadow);
      b2.strokeWeight(int(bw/16));
      b2.line(b2.width/2+((bw/12)*cos(hp1)),b2.height/2+((bw/12)*sin(hp1)),b2.width/2+((bw/12)*cos(hp4)),b2.height/2+((bw/12)*sin(hp4)));
      b2.line(b2.width/2+((bw/12)*cos(hp2)),b2.height/2+((bw/12)*sin(hp2)),b2.width/2+((bw/12)*cos(hp3)),b2.height/2+((bw/12)*sin(hp3)));
    b2.stroke(ccol);
      b2.strokeWeight(int(bw/18));
      b2.line(b2.width/2+((bw/12)*cos(hp1)),b2.height/2+((bw/12)*sin(hp1)),b2.width/2+((bw/12)*cos(hp4)),b2.height/2+((bw/12)*sin(hp4)));
      b2.line(b2.width/2+((bw/12)*cos(hp2)),b2.height/2+((bw/12)*sin(hp2)),b2.width/2+((bw/12)*cos(hp3)),b2.height/2+((bw/12)*sin(hp3)));
    }
    if (sewn=="sewn" && cross>0.5){
      b2.strokeWeight(int(bw/16));
      b2.stroke(features.cornshadow);
      b2.line(b2.width/2+((bw/12)*cos(hp1)),b2.height/2+((bw/12)*sin(hp1)),b2.width/2+((bw/12)*cos(hp3)),b2.height/2+((bw/12)*sin(hp3)));
      b2.stroke(ccol);
      b2.strokeWeight(int(bw/18));
      b2.line(b2.width/2+((bw/12)*cos(hp1)),b2.height/2+((bw/12)*sin(hp1)),b2.width/2+((bw/12)*cos(hp3)),b2.height/2+((bw/12)*sin(hp3)));
      b2.strokeWeight(int(bw/16));
      b2.stroke(features.cornshadow);
      b2.line(b2.width/2+((bw/12)*cos(hp2)),b2.height/2+((bw/12)*sin(hp2)),b2.width/2+((bw/12)*cos(hp4)),b2.height/2+((bw/12)*sin(hp4)));
      b2.stroke(ccol);
      b2.strokeWeight(int(bw/18));
      b2.line(b2.width/2+((bw/12)*cos(hp2)),b2.height/2+((bw/12)*sin(hp2)),b2.width/2+((bw/12)*cos(hp4)),b2.height/2+((bw/12)*sin(hp4)));
    }
  }
pg.image(b2,bx-bw/2,by-bw/2);
  }
}