var dcount = 0;
var dsm = 2.4;
var dsm2 = 0.4;
var dzf = 0.002;
var dzf2 = 0.002;
var dfr = 0;
var dwave1 = [];
var dwave2 = [];
var dfbi = [];
var dfbj = [];
var drcount=0;
var pgdenim=[];
var pgdenimd=[];
function pgfabric3(df1x, df1y, df1w, df1h) {
  pgdenim =[features.denim1, features.denim2, features.denim3, features.denim4, features.denim5, features.denim6, features.denim7];
  pgdenimh =[features.denimh1, features.denimh2, features.denimh3, features.denimh4, features.denimh5, features.denimh6, features.denimh7];
  pgdenimd=[features.denimd1,features.denimd2,features.denimd3];
  dsm = 2.8;
  dsm2 = 1.4;
  dzf = 0.001;
  dzf2 = 0.001;
  dfr = 0;
  pg.noiseSeed(myRandom(0, 1000));
  pg.noFill();
  pg.noStroke();
  pg.fill(255);
  let drows = df1h + df1y;
  let dcolumns = df1w + df1x;
    for (let j = df1y; j < drows; j += k[18]) {
    dfc = 0;
    dwave1[j] = [];
    dwave2[j] = [];
    for (let da = 0; da < PI * 2; da += PI / 640) {
      let dxf = pg.map(cos(da), -1, 1, 0, dsm);
      let dyf = pg.map(sin(da), -1, 1, 0, dsm);
      let dxf2 = pg.map(cos(da), -1, 1, 0, dsm2);
      let dyf2 = pg.map(sin(da), -1, 1, 0, dsm2);
      dr = pg.map(noise(dxf, dyf, dzf), 0, 1, k[0], k[210]);
      dr2 = pg.map(noise(dyf2, dxf2, dzf2), 0, 1, k[0], k[100]);
      dwave2[j].push(dr2);
      dwave1[j].push(dr);
      dsm += 0.00001;
      dsm2 += 0.000007;
    }
    dzf += 0.00001;
    for (let i = df1x; i < dcolumns; i += k[18]) {
      if (dfr < 1) pgdfraytop(i + dwave2[j][dcount], j + dwave1[j][dcount]);
      if (dfc < 1) pgdfrayleft(i + dwave2[j][dcount], j + dwave1[j][dcount]);
      pgdweave(i + dwave2[j][dcount], j + dwave1[j][dcount],df1w,df1h);
      dcount += 1;rcount+=1;
      
      if (j > df1y + df1h - k[18])pgdfraybottom(i + dwave2[j][dcount], j + dwave1[j][dcount] + k[16]);
      dfc = 1;
      dcount += 1;
    }
    pgdfrayright(df1x + df1w + dwave2[j][dcount], j + dwave1[j][dcount]);
    dfr = 1;
    dcount = 0;
  }
}
function pgdweave(i, j,df1w,df1h) {
  let dx = i;
  let dy = j;
  pg.noStroke();
  textSize(h[10]);
  //vertical thread
  pg.fill(pgdenim[int(map(noise(1000),0,1,0,7))]);
  pg.rect(i+k[3],j+k[0],k[3],k[12]);//u1
  pg.fill(pgdenim[int(map(noise(1000),0,1,0,7))]);
  pg.rect(i+k[0],j+k[3],k[3],k[12]);//u2
  pg.fill(pgdenim[int(map(noise(1000),0,1,0,7))]);
  pg.rect(i+k[9],j+k[12],k[3],k[15]);//u3
  pg.fill(pgdenim[int(map(noise(1000),0,1,0,7))]);
  pg.rect(i+k[3],j+k[15],k[6],k[15]);//u4
  pg.fill(pgdenim[int(map(noise(1000),0,1,0,7))]);
  pg.rect(i+k[15],j+k[6],k[6],k[15]);//u5
  pg.fill(pgdenim[int(map(noise(1000),0,1,0,7))]);
  pg.rect(i+k[12],j+k[9],k[3],k[15]);//u6
  //horizontal thread
  pg.fill(pgdenimd[int(myRandom(0,3))]);
  pg.rect(i+k[15],j+k[0],k[6],k[3]);//v1
  pg.fill(pgdenimd[int(myRandom(0,3))]);
  pg.rect(i+k[12],j+k[3],k[12],k[3]);//v2
  pg.fill(pgdenimd[int(myRandom(0,3))]);
  pg.rect(i+k[9],j+k[6],k[6],k[3]);//v3
  pg.fill(pgdenimd[int(myRandom(0,3))]);
  pg.rect(i+k[6],j+k[9],k[6],k[3]);//v4
  pg.fill(pgdenimd[int(myRandom(0,3))]);
  pg.rect(i+k[3],j+k[12],k[6],k[3]);//v5
  pg.fill(pgdenimd[int(myRandom(0,3))]);
  pg.rect(i+k[0],j+k[15],k[6],k[6]);//v6
  pg.fill(features.cornshadow);
  pg.rect(i+k[0],j+k[18],k[6],k[3]);//v6
  pg.rect(i+k[18],j+k[3],k[6],k[3]);//v2
  pg.beginShape();//v1
  pg.vertex(i+k[16],j+k[0]);
  pg.vertex(i+k[15],j+k[0]);
  pg.vertex(i+k[15],j+k[3]);
  pg.vertex(i+k[21],j+k[3]);
  pg.vertex(i+k[21],j+k[0]);
  pg.vertex(i+k[20],j+k[0]);
  pg.bezierVertex(i+k[20],j+k[2],i+k[16],j+k[2],i+k[16],j+k[0]);
  pg.endShape();
  pg.beginShape();//v2
  pg.vertex(i+k[13],j+k[3]);
  pg.vertex(i+k[12],j+k[3]);
  pg.vertex(i+k[12],j+k[6]);
  pg.vertex(i+k[18],j+k[6]);
  pg.vertex(i+k[18],j+k[3]);
  pg.vertex(i+k[17],j+k[3]);
  pg.bezierVertex(i+k[17],j+k[5],i+k[13],j+k[5],i+k[13],j+k[3]);
  pg.endShape();
  pg.beginShape();//v3
  pg.vertex(i+k[10],j+k[6]);
  pg.vertex(i+k[9],j+k[6]);
  pg.vertex(i+k[9],j+k[9]);
  pg.vertex(i+k[15],j+k[9]);
  pg.vertex(i+k[15],j+k[6]);
  pg.vertex(i+k[14],j+k[6]);
  pg.bezierVertex(i+k[14],j+k[8],i+k[10],j+k[8],i+k[10],j+k[6]);
  pg.endShape();
  pg.beginShape();//v4
  pg.vertex(i+k[7],j+k[9]);
  pg.vertex(i+k[6],j+k[9]);
  pg.vertex(i+k[6],j+k[12]);
  pg.vertex(i+k[12],j+k[12]);
  pg.vertex(i+k[12],j+k[9]);
  pg.vertex(i+k[11],j+k[9]);
  pg.bezierVertex(i+k[11],j+k[11],i+k[7],j+k[11],i+k[7],j+k[9]);
  pg.endShape();  
  pg.beginShape();//v5
  pg.vertex(i+k[4],j+k[12]);
  pg.vertex(i+k[3],j+k[12]);
  pg.vertex(i+k[3],j+k[15]);
  pg.vertex(i+k[9],j+k[15]);
  pg.vertex(i+k[9],j+k[12]);
  pg.vertex(i+k[8],j+k[12]);
  pg.bezierVertex(i+k[8],j+k[14],i+k[4],j+k[14],i+k[4],j+k[12]);
  pg.endShape();  
  pg.beginShape();//v6
  pg.vertex(i+k[1],j+k[15]);
  pg.vertex(i+k[0],j+k[15]);
  pg.vertex(i+k[0],j+k[18]);
  pg.vertex(i+k[6],j+k[18]);
  pg.vertex(i+k[6],j+k[15]);
  pg.vertex(i+k[5],j+k[15]);
  pg.bezierVertex(i+k[5],j+k[17],i+k[1],j+k[17],i+k[1],j+k[15]);
  pg.endShape();  
  pg.fill(pgdenimh[int(myRandom(0,7))]);
  pg.ellipse(i+k[1]*4.5,j+k[6],k[4],k[16]);//u1 
  pg.ellipse(i+k[1]*16.5,j+k[12],k[3],k[8]); 
  pg.fill(pgdenimh[int(myRandom(0,7))]);
  pg.ellipse(i+k[1]*1.5,j+k[9],k[4],k[16]);
  pg.ellipse(i+k[1]*13.5,j+k[15],k[3],k[8]);
  pg.fill(pgdenimh[int(myRandom(0,7))]);
  pg.ellipse(i+k[1]*10.5,j+k[18],k[4],k[16]);
  pg.ellipse(i+k[1]*4.5,j+k[6],k[3],k[8]);
  pg.fill(pgdenimh[int(myRandom(0,7))]);
  pg.ellipse(i+k[1]*7.5,j+k[21],k[4],k[16]);
  pg.ellipse(i+k[1]*1.5,j+k[9],k[3],k[8]);
  pg.fill(pgdenimh[int(myRandom(0,7))]);
  pg.ellipse(i+k[1]*16.5,j+k[12],k[4],k[16]);
  pg.ellipse(i+k[1]*10.5,j+k[18],k[3],k[8]);
  pg.fill(pgdenimh[int(myRandom(0,7))]);
  pg.ellipse(i+k[1]*13.5,j+k[15],k[4],k[16]);
  pg.ellipse(i+k[1]*7.5,j+k[21],k[3],k[8]);
  //top shadow
  pg.fill(features.cornshadow);  
  pg.rect(i+k[3],j+k[15],k[3],k[15]);//u4
  pg.rect(i+k[18],j+k[6],k[3],k[15]);//u5
  pg.beginShape();//u1
  pg.vertex(i+k[3],j+k[0]);
  pg.vertex(i+k[6],j+k[0]);
  pg.vertex(i+k[6],j+myRandom(k[2],k[6]));
  pg.bezierVertex(i+k[5],j+k[2],i+k[4],j+k[1]*1.5,i+k[3],j+myRandom(k[1],k[2]));
  pg.endShape(CLOSE);
  pg.rect(i+k[9],j+k[24],k[3],k[3]);
  pg.beginShape();//u2
  pg.vertex(i+k[0],j+k[3]);
  pg.vertex(i+k[3],j+k[3]);
  pg.vertex(i+k[3],j+myRandom(k[5],k[9]));
  pg.bezierVertex(i+k[2],j+k[5],i+k[1],j+k[1]*4.5,i+k[0],j+myRandom(k[4],k[5]));
  pg.endShape(CLOSE);
  pg.beginShape();//u3
  pg.vertex(i+k[9],j+k[12]);
  pg.vertex(i+k[12],j+k[12]);
  pg.vertex(i+k[12],j+myRandom(k[14],k[18]));
  pg.bezierVertex(i+k[11],j+k[14],i+k[10],j+k[1]*13.5,i+k[9],j+myRandom(k[13],k[14]));
  pg.endShape(CLOSE);
  pg.beginShape();//u4
  pg.vertex(i+k[6],j+k[15]);
  pg.vertex(i+k[9],j+k[15]);
  pg.vertex(i+k[9],j+myRandom(k[17],k[21]));
  pg.bezierVertex(i+k[8],j+k[17],i+k[7],j+k[1]*16.5,i+k[6],j+myRandom(k[16],k[17]));
  pg.endShape(CLOSE);
  pg.beginShape();//u5
  pg.vertex(i+k[15],j+k[6]);
  pg.vertex(i+k[18],j+k[6]);
  pg.vertex(i+k[18],j+myRandom(k[8],k[12]));
  pg.bezierVertex(i+k[17],j+k[8],i+k[16],j+k[1]*7.5,i+k[15],j+myRandom(k[7],k[8]));
  pg.endShape(CLOSE);
  pg.beginShape();//u6
  pg.vertex(i+k[12],j+k[9]);
  pg.vertex(i+k[15],j+k[9]);
  pg.vertex(i+k[15],j+myRandom(k[11],k[15]));
  pg.bezierVertex(i+k[14],j+k[11],i+k[13],j+k[1]*10.5,i+k[12],j+myRandom(k[10],k[11]));
  pg.endShape(CLOSE);
  //bottom shadow
  pg.beginShape();//u1
  pg.vertex(i+k[3],j+k[12]);
  pg.vertex(i+k[6],j+k[12]);
  pg.vertex(i+k[6],j+myRandom(k[10],k[11]));
  pg.bezierVertex(i+k[5],j+k[10],i+k[4],j+k[9],i+k[3],j+myRandom(k[8],k[10]));
  pg.endShape(CLOSE);
  pg.beginShape();//u2
  pg.vertex(i+k[0],j+k[15]);
  pg.vertex(i+k[3],j+k[15]);
  pg.vertex(i+k[3],j+myRandom(k[13],k[14]));
  pg.bezierVertex(i+k[2],j+k[13],i+k[1],j+k[12],i+k[0],j+myRandom(k[11],k[13]));
  pg.endShape(CLOSE);
  pg.beginShape();//u3
  pg.vertex(i+k[9],j+k[24]);
  pg.vertex(i+k[12],j+k[24]);
  pg.vertex(i+k[12],j+myRandom(k[22],k[23]));
  pg.bezierVertex(i+k[11],j+k[22],i+k[10],j+k[21],i+k[9],j+myRandom(k[20],k[22]));
  pg.endShape(CLOSE);
  pg.beginShape();//u4
  pg.vertex(i+k[6],j+k[27]);
  pg.vertex(i+k[9],j+k[27]);
  pg.vertex(i+k[9],j+myRandom(k[25],k[26]));
  pg.bezierVertex(i+k[8],j+k[25],i+k[7],j+k[24],i+k[6],j+myRandom(k[23],k[25]));
  pg.endShape(CLOSE);
  pg.beginShape();//u5
  pg.vertex(i+k[15],j+k[18]);
  pg.vertex(i+k[18],j+k[18]);
  pg.vertex(i+k[18],j+myRandom(k[16],k[17]));
  pg.bezierVertex(i+k[17],j+k[16],i+k[16],j+k[15],i+k[15],j+myRandom(k[14],k[16]));
  pg.endShape(CLOSE);
  pg.beginShape();//u6
  pg.vertex(i+k[12],j+k[21]);
  pg.vertex(i+k[15],j+k[21]);
  pg.vertex(i+k[15],j+myRandom(k[19],k[20]));
  pg.bezierVertex(i+k[14],j+k[19],i+k[13],j+k[18],i+k[12],j+myRandom(k[17],k[19]));
  pg.endShape(CLOSE);
  //pg.lines
  pg.stroke(features.cornshadowa);
  pg.strokeWeight(k[1]);  
  li=myRandom(k[0],k[4]);lj=myRandom(k[4],k[7]);
  pg.line(i+k[6],j+li,i+k[3],j+lj);
  pg.line(i+k[6],j+li+h[4],i+k[3],j+lj+h[4]);
  li=myRandom(k[3],k[7]);lj=myRandom(k[7],k[10]);
  pg.line(i+k[3],j+li,i+k[0],j+lj);
  pg.line(i+k[3],j+li+h[4],i+k[0],j+lj+h[4]);
  li=myRandom(k[12],k[16]);lj=myRandom(k[16],k[19]);
  pg.line(i+k[12],j+li,i+k[9],j+lj);
  pg.line(i+k[12],j+li+h[4],i+k[9],j+lj+h[4]);
  li=myRandom(k[15],k[19]);lj=myRandom(k[19],k[22]);
  pg.line(i+k[9],j+li,i+k[6],j+lj);
  pg.line(i+k[9],j+li+h[4],i+k[6],j+lj+h[4]);
  li=myRandom(k[6],k[10]);lj=myRandom(k[10],k[13]);
  pg.line(i+k[18],j+li,i+k[15],j+lj);
  pg.line(i+k[18],j+li+h[4],i+k[15],j+lj+h[4]);
  li=myRandom(k[9],k[13]);lj=myRandom(k[13],k[16]);
  pg.line(i+k[15],j+li,i+k[12],j+lj);
  pg.line(i+k[15],j+li+h[4],i+k[12],j+lj+h[4]);
  pg.noStroke();
}
function pgdfrayleft(i, j) {
  pg.fill(features.cornshadow);
  pg.noStroke();
  let dx = i;
  let dy = j;  
     pg.fill(features.denimf);
  pg.rect(dx,dy,k[3],k[6]);
  pg.fill(features.cornshadow);
  pg.rect(dx,dy+k[3],k[3],k[9]);
  for(fl=0; fl<6;fl++){
  let p1x=dx;
  let p1y=dy;
  let c1x=myRandom(dx-k[1],dx-k[5]);
  let c1y=myRandom(dy-k[4],dy+k[4]);
  let p2x=myRandom(dx-k[18],dx-k[26]);
  let p2y=myRandom(dy-k[4],dy+k[4]);
  let c2rx=p2x+k[3];
  let c2ry=p2y;
  let c2lx=p2x-k[3];
  let c2ly=p2y;
  let p3x=myRandom(dx-k[36],dx-k[53]);
  let c3x=p3x+k[3];
  let p3y=myRandom(dy-k[2],dy+k[2]);
  let c3y=myRandom(dy-k[1],dy+k[1]);
  let p3ax=p3x+myRandom(-k[3],-k[12]);
  let p3ay=p3y+k[1]*1.5;
  let p4x=p3x;
  let p4y=p3y+k[3];
  let c4x=p4x+k[3];
  let c4y=c3y+k[3];
  let p5x=p2x;
  let p5y=p2y+k[3];
  let c5lx=p5x-k[3];
  let c5ly=p5y;
  let c5rx=p5x+k[3];
  let c5ry=p5y; 
  let c6x=c1x;
  let c6y=c1y+k[3];    
  pg.fill(features.cornshadow);
  pg.push();
  pg.beginShape();
  pg.vertex(dx, dy);
  pg.bezierVertex(c1x,c1y,c2rx,c2ry,p2x,p2y);
  pg.bezierVertex(c2lx,c2ly,c3x,c3y,p3x,p3y);
  pg.vertex(p3ax,p3ay);
  pg.vertex(p4x,p4y);
  pg.bezierVertex(c4x,c4y,c5lx,c5ly,p5x,p5y);
  pg.bezierVertex(c5rx,c5ry,c6x,c6y,dx,dy+k[3]);
  pg.endShape(CLOSE);
  pg.pop();
  pg.fill(features.denimf);
  pg.beginShape();
  pg.vertex(dx, dy);
  pg.bezierVertex(c1x,c1y,c2rx,c2ry,p2x,p2y);
  pg.bezierVertex(c2lx,c2ly,c3x,c3y,p3x,p3y);
  pg.vertex(p3ax,p3ay);
  pg.vertex(p4x,p4y);
  pg.bezierVertex(c4x,c4y,c5lx,c5ly,p5x,p5y);
  pg.bezierVertex(c5rx,c5ry,c6x,c6y,dx,dy+k[3]);
  pg.endShape(CLOSE);
  pg.fill(features.cornshadow);
  pg.beginShape();
  pg.vertex(dx, dy + k[3]);
  pg.bezierVertex(c1x,c1y+k[3],c2rx,c2ry+k[3],p2x,p2y+k[3]);
  pg.bezierVertex(c2lx,c2ly+k[3],c3x,c3y+k[3],p3x,p3y+k[3]);
  pg.vertex(p4x,p4y);
  pg.bezierVertex(c4x,c4y,c5lx,c5ly,p5x,p5y);
  pg.bezierVertex(c5rx,c5ry,c6x,c6y,dx,dy+k[3]);
  pg.endShape(CLOSE);
  dy=dy+k[5];
  pg.stroke(features.cornshadowa);
  pg.strokeWeight(k[1]);  
  pg.line(p1x,p1y,p5x,p5y);
  pg.strokeWeight(k[2]);
  pg.line(p1x,p1y,p5x,p5y);
  pg.strokeWeight(k[1]);  
  pg.line(p2x,p2y,p4x,p4y);
  pg.strokeWeight(k[2]);
  pg.line(p2x,p2y,p4x,p4y);
  pg.noStroke();
  }
}function pgdfrayright(i, j) {
  pg.fill(features.cornshadow);
  pg.noStroke();
  let dx = i;
  let dy = j;  
  pg.fill(features.denimf);
  pg.rect(dx,dy,k[3],k[6]);
  pg.fill(features.cornshadow);
  pg.rect(dx,dy+k[3],k[3],k[9]);
  for(fl=0; fl<6;fl++){
  let p1x=dx;
  let p1y=dy;
  let c1x=myRandom(dx+k[1],dx+k[5]);
  let c1y=myRandom(dy-k[3],dy+k[2]);
  let p2x=myRandom(dx+k[18],dx+k[26]);
  let p2y=myRandom(dy-k[2],dy+k[3]);
  let c2rx=p2x-k[3];
  let c2ry=p2y;
  let c2lx=p2x+k[3];
  let c2ly=p2y;
  let p3x=myRandom(dx+k[36],dx+k[53]);
  let c3x=p3x-k[3];
  let p3y=myRandom(dy-k[2],dy+k[2]);
  let c3y=myRandom(dy-k[1],dy+k[1]);
  let p3ax=p3x-myRandom(+k[3],+k[12]);
  let p3ay=p3y+k[1]*1.5;
  let p4x=p3x;
  let p4y=p3y+k[3];
  let c4x=p4x-k[3];
  let c4y=c3y+k[3];
  let p5x=p2x;
  let p5y=p2y+k[3];
  let c5lx=p5x+k[3];
  let c5ly=p5y;
  let c5rx=p5x-k[3];
  let c5ry=p5y; 
  let c6x=c1x;
  let c6y=c1y+k[3];    
  pg.fill(features.cornshadow);
  pg.push();
  pg.translate(myRandom(-k[2],k[7]),myRandom(-k[2],k[7]));
  pg.beginShape();
  pg.vertex(dx, dy);
  pg.bezierVertex(c1x,c1y,c2rx,c2ry,p2x,p2y);
  pg.bezierVertex(c2lx,c2ly,c3x,c3y,p3x,p3y);
  pg.vertex(p3ax,p3ay);
  pg.vertex(p4x,p4y);
  pg.bezierVertex(c4x,c4y,c5lx,c5ly,p5x,p5y);
  pg.bezierVertex(c5rx,c5ry,c6x,c6y,dx,dy+k[3]);
  pg.endShape(CLOSE);
  pg.pop();
  pg.fill(features.denimf);
  pg.beginShape();
  pg.vertex(dx, dy);
  pg.bezierVertex(c1x,c1y,c2rx,c2ry,p2x,p2y);
  pg.bezierVertex(c2lx,c2ly,c3x,c3y,p3x,p3y);
  pg.vertex(p3ax,p3ay);
  pg.vertex(p4x,p4y);
  pg.bezierVertex(c4x,c4y,c5lx,c5ly,p5x,p5y);
  pg.bezierVertex(c5rx,c5ry,c6x,c6y,dx,dy+k[3]);
  pg.endShape(CLOSE);
  pg.fill(features.cornshadow);
  pg.beginShape();
  pg.vertex(dx, dy + k[3]);
  pg.bezierVertex(c1x,c1y+k[3],c2rx,c2ry+k[3],p2x,p2y+k[3]);
  pg.bezierVertex(c2lx,c2ly+k[3],c3x,c3y+k[3],p3x,p3y+k[3]);
  pg.vertex(p4x,p4y);
  pg.bezierVertex(c4x,c4y,c5lx,c5ly,p5x,p5y);
  pg.bezierVertex(c5rx,c5ry,c6x,c6y,dx,dy+k[3]);
  pg.endShape(CLOSE);
  dy=dy+k[5];
  pg.stroke(features.cornshadowa);
  pg.strokeWeight(k[1]);  
  pg.line(p1x,p1y,p5x,p5y);
  pg.strokeWeight(k[2]);
  pg.line(p1x,p1y,p5x,p5y);
  pg.strokeWeight(k[1]);  
  pg.line(p2x,p2y,p4x,p4y);
  pg.strokeWeight(k[2]);
  pg.line(p2x,p2y,p4x,p4y);
  pg.noStroke();
  }
}
function pgdfraytop(i, j) {
  pg.noStroke();
  let dx = i;
  let dy = j;
  for(fl=0; fl<6;fl++){
  let p1x=dx+k[3];
  let p1y=dy+k[3];
  let c1x=myRandom(dx+k[1],dx+k[5]);
  let c1y=myRandom(dy+k[0],dy+k[4]);
  let p2x=myRandom(dx+k[1],dx+k[5]);
  let p2y=myRandom(dy-k[18],dy-k[26]);
  let c2rx=p2x;
  let c2ry=p2y+k[3];
  let c2lx=p2x;
  let c2ly=p2y-k[3];
  let p3x=myRandom(dx+k[1],dx+k[5]);
  let c3x=p3x+myRandom(-k[1],k[1]);
  let p3y=myRandom(dy-k[36],dy-k[53]);
  let c3y=p3y+myRandom(k[3],k[7]);
  let p3ax=p3x-k[1]*1.5;
  let p3ay=p3y-myRandom(k[3],k[12]);
  let p4x=p3x-k[3];
  let p4y=p3y;
  let c4x=c3x-k[3];
  let c4y=c3y;
  let p5x=p2x-k[3];
  let p5y=p2y;
  let c5lx=c2lx-k[3];
  let c5ly=c2ly;
  let c5rx=c2rx-k[3];
  let c5ry=c2ry; 
  let c6x=c1x-k[3];
  let c6y=c1y;    
  pg.fill(features.cornshadow);
  pg.push();
  pg.translate(myRandom(-k[2],k[7]),myRandom(-k[2],k[7]));
  pg.beginShape();
  pg.vertex(dx+k[5], dy+k[5]);
  pg.bezierVertex(c1x,c1y,c2rx,c2ry,p2x,p2y);
  pg.bezierVertex(c2lx,c2ly,c3x,c3y,p3x,p3y);
  pg.vertex(p3ax,p3ay);
  pg.vertex(p4x,p4y);
  pg.bezierVertex(c4x,c4y,c5lx,c5ly,p5x,p5y);
  pg.bezierVertex(c5rx,c5ry,c6x,c6y,dx,dy+k[5]);
  pg.endShape(CLOSE);
  pg.pop();
  pg.fill(pgdenim[int(myRandom(0,7))]);
  pg.rect(dx+k[5], dy+k[5],k[6],k[6]);
  pg.beginShape();
  pg.vertex(dx+k[5], dy+k[5]);
  pg.bezierVertex(c1x,c1y,c2rx,c2ry,p2x,p2y);
  pg.bezierVertex(c2lx,c2ly,c3x,c3y,p3x,p3y);
  pg.vertex(p3ax,p3ay);
  pg.bezierVertex(c4x,c4y,c5lx,c5ly,p5x,p5y);
  pg.bezierVertex(c5rx,c5ry,c6x,c6y,dx,dy+k[5]);
  pg.endShape(CLOSE);
  pg.fill(features.cornshadow);
  pg.beginShape();
  pg.vertex(dx+k[5], dy + k[5]);
  pg.bezierVertex(c1x,c1y,c2rx,c2ry,p2x,p2y);
  pg.bezierVertex(c2lx,c2ly,c3x,c3y,p3x,p3y);
  pg.vertex(p4x+k[3],p4y);
  pg.bezierVertex(c4x+k[3],c4y,c5lx+k[3],c5ly,p5x+k[3],p5y);
  pg.bezierVertex(c5rx+k[3],c5ry,c6x+k[3],c6y,dx+k[3],dy+k[5]);
  pg.endShape(CLOSE);
  dx=dx+k[5];
  pg.stroke(features.cornshadowa);
  pg.strokeWeight(k[1]);  
  pg.line(p1x,p1y,p5x,p5y);
  pg.strokeWeight(k[2]);
  pg.line(p1x,p1y,p5x,p5y);
  pg.strokeWeight(k[1]);  
  pg.line(p2x,p2y,p4x,p4y);
  pg.strokeWeight(k[2]);
  pg.line(p2x,p2y,p4x,p4y);
  pg.noStroke();
  }
}
function pgdfraybottom(i, j) {
  pg.noStroke();
  let dx = i;
  let dy = j;
  for(fl=0; fl<6;fl++){
  let p1x=dx+k[3];
  let p1y=dy-k[3];
  let c1x=myRandom(dx+k[1],dx+k[5]);
  let c1y=myRandom(dy+k[2],dy+k[8]);
  let p2x=myRandom(dx+k[1],dx+k[5]);
  let p2y=myRandom(dy+k[18],dy+k[26]);
  let c2rx=p2x;
  let c2ry=p2y-k[6];
  let c2lx=p2x;
  let c2ly=p2y+k[6];
  let p3x=myRandom(dx+k[1],dx+k[5]);
  let c3x=p3x+myRandom(-k[1],k[1]);
  let p3y=myRandom(dy+k[36],dy+k[53]);
  let c3y=p3y-myRandom(k[3],k[7]);
  let p3ax=p3x-k[1]*1.5;
  let p3ay=p3y+myRandom(k[3],k[12]);
  let p4x=p3x-k[3];
  let p4y=p3y;
  let c4x=c3x-k[3];
  let c4y=c3y;
  let p5x=p2x-k[3];
  let p5y=p2y;
  let c5lx=c2lx-k[3];
  let c5ly=c2ly;
  let c5rx=c2rx-k[3];
  let c5ry=c2ry; 
  let c6x=c1x-k[3];
  let c6y=c1y;    
  pg.fill(features.cornshadow);
  pg.push();
  pg.translate(myRandom(-k[2],k[7]),myRandom(-k[2],k[7]));
  pg.beginShape();
  pg.vertex(p1x, p1y);
  pg.bezierVertex(c1x,c1y,c2rx,c2ry,p2x,p2y);
  pg.bezierVertex(c2lx,c2ly,c3x,c3y,p3x,p3y);
  pg.vertex(p3ax,p3ay);
  pg.vertex(p4x,p4y);
  pg.bezierVertex(c4x,c4y,c5lx,c5ly,p5x,p5y);
  pg.bezierVertex(c5rx,c5ry,c6x,c6y,dx,dy-k[3]);
  pg.endShape(CLOSE);
  pg.pop();
     pg.fill(pgdenim[int(myRandom(0,7))]);
  pg.beginShape();
  pg.vertex(p1x, p1y);
  pg.bezierVertex(c1x,c1y,c2rx,c2ry,p2x,p2y);
  pg.bezierVertex(c2lx,c2ly,c3x,c3y,p3x,p3y);
  pg.vertex(p3ax,p3ay);
  pg.bezierVertex(c4x,c4y,c5lx,c5ly,p5x,p5y);
  pg.bezierVertex(c5rx,c5ry,c6x,c6y,dx,dy-k[3]);
  pg.endShape(CLOSE);
  pg.fill(features.cornshadow);
  pg.beginShape();
  pg.vertex(p1x, p1y);
  pg.bezierVertex(c1x,c1y,c2rx,c2ry,p2x,p2y);
  pg.bezierVertex(c2lx,c2ly,c3x,c3y,p3x,p3y);
  pg.vertex(p4x+k[3],p4y);
  pg.bezierVertex(c4x+k[3],c4y,c5lx+k[3],c5ly,p5x+k[3],p5y);
  pg.bezierVertex(c5rx+k[3],c5ry,c6x+k[3],c6y,dx+k[3],dy-k[3]);
  pg.endShape(CLOSE);
  dx=dx+k[3];
  pg.stroke(features.cornshadowa);
  pg.strokeWeight(k[1]);  
  pg.line(p1x,p1y,p5x,p5y);
  pg.strokeWeight(k[2]);
  pg.line(p1x,p1y,p5x,p5y);
  pg.strokeWeight(k[1]);  
  pg.line(p2x,p2y,p4x,p4y);
  pg.strokeWeight(k[2]);
  pg.line(p2x,p2y,p4x,p4y);
  pg.noStroke();
  }
}