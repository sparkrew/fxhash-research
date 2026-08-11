var scol=[];
var scolch=[];
var saw;
function sticker(){
  choosecolor();  scol=[features.l1,features.l2,features.l3,features.l4,features.l5,features.l6,features.l7,features.l8];
  scolch=shuffleArray(scol);
  saw=cs*myRandom(0.04,0.06);
  sa = createGraphics(saw, saw);
  translate(-saw/2,-saw/2);
  sa.translate(saw/2,saw/2);
let stch=int(myRandom(0,3));
  if (stch==0)stick0();
  if (stch==1)stick1();
  if (stch==2)stick2();
}
function stick0(){
  sa.strokeCap(SQUARE);
  sa.fill(scolch[0]);
  sa.stroke(features.ddcol);
  sa.strokeWeight(h[5]);
  sa.ellipse(0,0,saw-h[6]);
  sa.fill(scolch[2]);
  sa.noStroke();
  sa.arc(0,0,saw-h[6],saw-h[6],PI/4,PI/2);
  sa.fill(scolch[4]);
  sa.arc(0,0,saw-h[6],saw-h[6],PI/2,PI*3/4);
  sa.fill(scolch[3]);
  sa.arc(0,0,saw-h[6],saw-h[6],PI*3/4,PI*3/2);
  sa.stroke(features.ddcol);
  sa.line(0,-saw/2,0,saw/2);
  sa.line(0,0,(saw/2)*cos(PI/4),(saw/2)*sin(PI/4));
  sa.line(0,0,(saw/2)*cos(PI*3/4),(saw/2)*sin(PI*3/4));
  sa.stroke(features.ddcol);
  sa.noFill();
  sa.ellipse(0,0,saw-h[6]);
  }
function stick1(){
  sa.strokeCap(SQUARE);
  sa.fill(scolch[0]);
  sa.stroke(features.ddcol);
  sa.strokeWeight(h[5]);
  sa.ellipse(0,0,saw-h[6]);
  sa.noStroke();
  sa.fill(features.ddcol)
  sa.ellipse(-saw/6,-saw/6,saw/6);
  sa.ellipse(saw/6,-saw/6,saw/6);
  sa.stroke(features.ddcol);
  sa.strokeWeight(h[4]);
  let a=PI/7
  for(let i=0;i<20;i++){
    sa.point((saw/4)*cos(a),(saw/4)*sin(a));
    a+=5*PI/140;
  }
  sa.line(saw*0.15*cos(PI/7),saw*0.2*sin(PI/7),saw*0.3*cos(PI/7),saw*0.35*sin(PI/7));
  sa.line(saw*0.15*cos(PI*6/7),saw*0.2*sin(PI*6/7),saw*0.3*cos(PI*6/7),saw*0.35*sin(PI*6/7));
}
function stick2(){
  sa.noStroke();
  let saw2=saw-h[6];
  sa.fill(features.ddcol);
  sa.ellipse(0,0,saw2);
  sa.fill(scolch[1]);
  sa.arc(0,0,saw2,saw2,0,PI);
  sa.arc(-saw2/4,0,saw2/2,saw2/2,PI,PI*2);
  sa.fill(features.ddcol);
  sa.arc(saw2/4,0,saw2/2,saw2/2,0,PI);
  sa.ellipse(-saw2/4,0,saw2/4);
  sa.fill(scolch[1]);
  sa.ellipse(saw2/4,0,saw2/4);
}