function pgdaisy(dx, dy, dd) {
  daisyinout=myRandom(0,1);
  pg.push();
  let size=dd/10000;
  f.splice(0,f.length);
  for (let i = 0; i < 10000; i++) {
    f.push(i * h[900] * size);
  }
  pg.translate(dx, dy);
  var pach=[];
  var petsh=[];
for (let parr=0;parr<37;parr++){
let parrch=((parr*PI)/(myRandom(17.8,18.2)));
  pach.push(parrch);
}  
    petsh = pgshuffleArray(pach);
  for (let i=0;i<37;i++){
    pg.push();
    pg.rotate(petsh[i]);
    pgdpetal();
     pg.pop();
  }
   pg.noStroke();
  let psh1 = color("#00000000");
  let psh2 = color("#0000001c");
  let incpsh = 0.004;
  for (let da = f[1]; da < f[300]; da += f[1]) {
    let dg = lerpColor(psh1, psh2, incpsh);
     pg.fill(dg);
     pg.ellipse(0, 0, f[310] - da);
    incpsh += 0.004;
  }  
   pg.strokeWeight(f[2]);
   pg.stroke("#974f2022");
  let indai = color("#e47301");
  let outdai = color("#211901");
  let incd = 0.004;
  for (let da = f[1]; da < f[230]; da += f[1]) {
    let dg = lerpColor(indai, outdai, incd);
     pg.fill(dg);
     pg.ellipse(0, 0, f[230] - da);
    incd += 0.004;
  }  
   pg.fill("#eba002");
  let sinch = f[120] * 0.01;
  let phi = 0;
  for (let n = f[100]; n < f[125]; n += f[1] * 0.12) {
    pgfluff(n * cos(phi), n * sin(phi), f[1] + sinch);
    phi += 2.3999632;
    sinch += f[1] * 0.01;
  }
  let sinc = 0;
  for (let n = f[5]; n < f[100]; n += f[1] * 0.12) {
     pg.fill("#de8900");
     pg.ellipse(n * cos(phi), n * sin(phi), f[2] + sinc);
     pg.fill("#eba002");
     pg.ellipse(n * cos(phi), n * sin(phi), f[1] * 0.07 + sinc*0.8);
     pg.fill("#f9ac08");//(255,0,0);//
     pg.ellipse(n * cos(phi), n * sin(phi), f[1] * 0.01 + sinc*0.3);
    phi += 2.3999632;
    sinc += f[1] * 0.01;
  }
  pg.pop();
}
function pgfluff(x, y) {
   pg.fill("#cb800288");
  let dio = f[1] * 0.12 * 110;
  let dii = f[1] * 0.12 * 70;
   pg.noStroke();
   pg.beginShape();
   pg.vertex(
    x + dio * cos(myRandom(PI * -0.08, PI * 0.08)),
    y + dio * sin(myRandom(PI * -0.08, PI * 0.08))
  );
   pg.curveVertex(
    x + dii * cos(myRandom(PI * 0.08, PI * 0.25)),
    y + dii * sin(myRandom(PI * 0.08, PI * 0.25))
  );
   pg.vertex(
    x + dio * cos(myRandom(PI * 0.25, PI * 0.42)),
    y + dio * sin(myRandom(PI * 0.25, PI * 0.42))
  );
   pg.curveVertex(
    x + dii * cos(myRandom(PI * 0.42, PI * 0.58)),
    y + dii * sin(myRandom(PI * 0.42, PI * 0.58))
  );
   pg.vertex(
    x + dio * cos(myRandom(PI * 0.58, PI * 0.75)),
    y + dio * sin(myRandom(PI * 0.58, PI * 0.75))
  );
   pg.curveVertex(
    x + dii * cos(myRandom(PI * 0.75, PI * 0.91)),
    y + dii * sin(myRandom(PI * 0.75, PI * 0.91))
  );
   pg.vertex(
    x + dio * cos(myRandom(PI * 0.91, PI * 1.08)),
    y + dio * sin(myRandom(PI * 0.91, PI * 1.08))
  );
   pg.curveVertex(
    x + dii * cos(myRandom(PI * 1.08, PI * 1.25)),
    y + dii * sin(myRandom(PI * 1.08, PI * 1.25))
  );
   pg.vertex(
    x + dio * cos(myRandom(PI * 1.25, PI * 1.42)),
    y + dio * sin(myRandom(PI * 1.25, PI * 1.42))
  );
   pg.curveVertex(
    x + dii * cos(myRandom(PI * 1.42, PI * 1.58)),
    y + dii * sin(myRandom(PI * 1.42, PI * 1.58))
  );
   pg.vertex(
    x + dio * cos(myRandom(PI * 1.58, PI * 1.75)),
    y + dio * sin(myRandom(PI * 1.58, PI * 1.75))
  );
   pg.curveVertex(
    x + dii * cos(myRandom(PI * 1.75, PI * 1.91)),
    y + dii * sin(myRandom(PI * 1.75, PI * 1.91))
  );
   pg.endShape(CLOSE);
   pg.fill("#73420277");
   pg.ellipse(x + myRandom(0, f[5]), y + myRandom(0, f[5]), myRandom(f[10], f[16]));
   pg.fill("#eba00277");
   pg.ellipse(x + myRandom(0, f[5]), y + myRandom(0, f[5]), myRandom(f[10], f[15]));
   pg.fill("#974f2088");
   pg.ellipse(x + myRandom(0, f[5]), y + myRandom(0, f[5]), myRandom(f[5], f[10]));
  }
function pgdpetal(){
   pg.noStroke();
pg.translate(0,-f[100]);
  let pm51=myRandom(-f[5],f[5]);
  let pm52=myRandom(-f[15],f[15]);
  let pm53=myRandom(-f[5],f[5]);
  let pm54=myRandom(-f[5],f[5]);
  let dp1=myRandom(-f[15],-f[20]);
  let dp1cx=myRandom(-f[30],-f[35]);
  let dp1cy=myRandom(-f[50],-f[70]);
  let dp2x=myRandom(-f[30],-f[40]);
  let dp2y=myRandom(-f[130],-f[150])
  let dp2c1x=dp2x+pm51;
  let dp2c1y=dp2y+f[20];
  let dp2c2x=dp2x-pm51;
  let dp2c2y=dp2y-f[60];
  let dp3x=myRandom(-f[10],f[10]);
  let dp3c1x=dp3x+myRandom(-f[20],-f[60]);
  let dp3y=myRandom(-f[290],-f[320]);
  let dp3c1y=dp3y+pm52;
  let dp3c2x=dp3x+myRandom(f[20],f[60]);
  let dp3c2y=dp3y-pm52;
  let dp4x=myRandom(f[30],f[40]);
  let dp4y=myRandom(-f[130],-f[150])
  let dp4c1x=dp4x+pm53;
  let dp4c1y=dp4y-f[60];
  let dp4c2x=dp4x-pm53;
  let dp4c2y=dp4y+f[20];
  let dp5c1x=(f[30],f[35]);
  let dp5c1y=myRandom(-f[50],-f[70]);
  let dp5=myRandom(f[15],f[20]);
  pg.push();
  pg.translate(myRandom(-f[12],f[12]),myRandom(-f[12],f[12]));
   pg.fill(features.cornshadowa);
   pg.beginShape();
   pg.vertex(dp1,0);
   pg.bezierVertex(dp1cx,dp1cy,dp2c1x,dp2c1y,dp2x,dp2y);
   pg.bezierVertex(dp2c2x,dp2c2y,dp3c1x,dp3c1y,dp3x,dp3y);
   pg.bezierVertex(dp3c2x,dp3c2y,dp4c1x,dp4c1y,dp4x,dp4y);
   pg.bezierVertex(dp4c2x,dp4c2y,dp5c1x,dp5c1y,dp5,0);
   pg.endShape(CLOSE);
  pg.translate(myRandom(0,f[12]),myRandom(0,f[12]));
   pg.fill(features.cornshadowa);
   pg.beginShape();
   pg.vertex(dp1,0);
   pg.bezierVertex(dp1cx,dp1cy,dp2c1x,dp2c1y,dp2x,dp2y);
   pg.bezierVertex(dp2c2x,dp2c2y,dp3c1x,dp3c1y,dp3x,dp3y);
   pg.bezierVertex(dp3c2x,dp3c2y,dp4c1x,dp4c1y,dp4x,dp4y);
   pg.bezierVertex(dp4c2x,dp4c2y,dp5c1x,dp5c1y,dp5,0);
   pg.endShape(CLOSE);
   pg.pop();
   pg.fill("#ebf3f7f2");
   pg.beginShape();
   pg.vertex(dp1,0);
   pg.bezierVertex(dp1cx,dp1cy,dp2c1x,dp2c1y,dp2x,dp2y);
   pg.bezierVertex(dp2c2x,dp2c2y,dp3c1x,dp3c1y,dp3x,dp3y);
   pg.bezierVertex(dp3c2x,dp3c2y,dp4c1x,dp4c1y,dp4x,dp4y);
   pg.bezierVertex(dp4c2x,dp4c2y,dp5c1x,dp5c1y,dp5,0);
   pg.endShape(CLOSE);
   let dpetalch=[features.daisy1,features.daisy2,features.daisy3,features.daisy4,features.daisy5];
   let dpetalach=myRandomA(dpetalch);
   let ppetal1=pg.color(dpetalach);
   let ppetal2=pg.color(features.daisyw);
   let pcolcount=0.07;
   if (features.daisyinout<0.5){
   for(let df=120;df>50;df-=5){
   let ppetal=pg.lerpColor(ppetal2,ppetal1,pcolcount);
   pg.fill(ppetal);
   pg.beginShape();
   pg.vertex(dp2x,dp2y);
   pg.bezierVertex(dp2c2x,dp2c2y,dp3c1x,dp3c1y,dp3x,dp3y);
   pg.bezierVertex(dp3c2x,dp3c2y,dp4c1x,dp4c1y,dp4x,dp4y);  
   pg.bezierVertex(dp4x-f[7],dp4y+f[df]+myRandom(f[0],f[5]),dp2x+f[7],dp2y+f[df]+myRandom(f[0],f[5]),dp2x,dp2y);
   pg.endShape();
   pcolcount+=0.07 }}
   if (features.daisyinout>=0.5){
   for(let df=70;df<210;df+=5){
   let ppetal=pg.lerpColor(ppetal2,ppetal1,pcolcount);
   pg.fill(ppetal);
   pg.beginShape();
   pg.vertex(dp2x,dp2y);
   pg.bezierVertex(dp2c2x,dp2c2y,dp3c1x,dp3c1y,dp3x,dp3y);
   pg.bezierVertex(dp3c2x,dp3c2y,dp4c1x,dp4c1y,dp4x,dp4y);  
   pg.bezierVertex(dp4x-f[7],dp4y-f[df]-myRandom(f[0],f[5]),dp2x+f[7],dp2y-f[df]-myRandom(f[0],f[5]),dp2x,dp2y);
   pg.endShape();
   pcolcount+=0.04 }
   }
   pg.fill("#00000033");
   pg.beginShape();
   pg.vertex(dp1,0);
   pg.vertex(dp1-f[10],-f[40]);  
   pg.curveVertex(dp1+f[5],-f[20]);
   pg.vertex(-f[10],-f[60]);  
   pg.curveVertex(0,-f[20]);
   pg.vertex(f[10],-f[40]);  
   pg.curveVertex(dp5-f[5],-f[20]);
   pg.vertex(dp5+f[10],-f[40]); 
   pg.vertex(dp5,0);
   pg.endShape(CLOSE);
  let rp1=myRandom(0,1);
  if(rp1<0.4){
   pg.fill("#0000000a");
   pg.beginShape();
   pg.vertex(-f[7],-f[15]);
   pg.bezierVertex(-f[20],-f[30],-f[25],-f[120],-f[25],-f[140]);
   pg.bezierVertex(-f[25],-f[160],dp3x-f[20],dp3y+f[30],dp3x-f[7],dp3y+f[15]);
   pg.bezierVertex(dp3x-f[7],dp3y+f[30],-f[10],-f[160],-f[10],-f[140]);
   pg.bezierVertex(-f[10],-f[120],-f[7],-f[25],-f[7],-f[15]);
   pg.endShape();
  }
  let rp2=myRandom(0,1);
  if(rp2<0.4){
   pg.fill("#0000000a");
   pg.beginShape();
   pg.vertex(f[7],-f[15]);
   pg.bezierVertex(f[20],-f[30],f[25],-f[120],f[25],-f[140]);
   pg.bezierVertex(f[25],-f[160],dp3x+f[20],dp3y+f[30],dp3x+f[7],dp3y+f[15]);
   pg.bezierVertex(dp3x+f[7],dp3y+f[30],f[10],-f[160],f[10],-f[140]);
   pg.bezierVertex(f[10],-f[120],f[7],-f[25],f[7],-f[15]);
   pg.endShape();
  }
  let rp3=myRandom(0,1);
  if(rp3<0.3){
   pg.fill("#0000000a");
   pg.beginShape();
   pg.vertex(-f[7],-f[15]);
   pg.bezierVertex(-f[20],-f[30],-f[20],-f[120],-f[20],-f[140]);
   pg.bezierVertex(-f[20],-f[160],dp3x-f[20],dp3y+f[30],dp3x-f[7],dp3y+f[15]);
   pg.bezierVertex(dp3x-f[7],dp3y+f[30],-f[10],-f[160],-f[10],-f[140]);
   pg.bezierVertex(-f[10],-f[120],-f[7],-f[25],-f[7],-f[15]);
   pg.endShape();
  }
  let rp4=myRandom(0,1);
  if(rp4<0.3){
   pg.fill("#0000000a");
   pg.beginShape();
   pg.vertex(f[7],-f[15]);
   pg.bezierVertex(f[20],-f[30],f[20],-f[120],f[20],-f[140]);
   pg.bezierVertex(f[20],-f[160],dp3x+f[20],dp3y+f[30],dp3x+f[7],dp3y+f[15]);
   pg.bezierVertex(dp3x+f[7],dp3y+f[30],f[10],-f[160],f[10],-f[140]);
   pg.bezierVertex(f[10],-f[120],f[7],-f[25],f[7],-f[15]);
   pg.endShape();
  }
  let rp5=myRandom(0,1);
  if(rp5<0.2){
   pg.fill("#0000000a");
   pg.beginShape();
   pg.vertex(-f[7],-f[15]);
   pg.bezierVertex(-f[15],-f[30],-f[15],-f[120],-f[15],-f[140]);
   pg.bezierVertex(-f[15],-f[160],dp3x-f[20],dp3y+f[30],dp3x-f[7],dp3y+f[15]);
   pg.bezierVertex(dp3x-f[7],dp3y+f[30],-f[10],-f[160],-f[10],-f[140]);
   pg.bezierVertex(-f[10],-f[120],-f[7],-f[25],-f[7],-f[15]);
   pg.endShape();
  }
  let rp6=myRandom(0,1);
  if(rp6<0.2){
   pg.fill("#0000000a");
   pg.beginShape();
   pg.vertex(f[7],-f[15]);
   pg.bezierVertex(f[15],-f[30],f[15],-f[120],f[15],-f[140]);
   pg.bezierVertex(f[15],-f[160],dp3x+f[20],dp3y+f[30],dp3x+f[7],dp3y+f[15]);
   pg.bezierVertex(dp3x+f[7],dp3y+f[30],f[10],-f[160],f[10],-f[140]);
   pg.bezierVertex(f[10],-f[120],f[7],-f[25],f[7],-f[15]);
   pg.endShape();
  }
   pg.stroke("#00000005")
  }
function pgshuffleArray(a) {
   for (let i = a.length - 1; i > 0; i--) {
     const j = Math.floor(fxrand() * (i + 1));
     let temp = a[i];
     a[i] = a[j];
     a[j] = temp;
   }
   return a;
}