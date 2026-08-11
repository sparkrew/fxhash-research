function design(){
if (features.design=="Fairy Circle")design1();
if (features.design=="Pile of Buttons")design2();
if (features.design=="Framed Flower")design3();
if (features.design=="Sewing Buttons in a Line")design4();
if (features.design=="Stripes")design5();
if (features.design=="Mesh")design6();
if (features.design=="Button Heart Flower")design7();
if (features.design=="Sandbox")design8();
if (features.design=="Many Buttons")design9();
}
function design1(){
let fabch=[pgfabric1,pgfabric2,pgfabric3];
let fabcha=pgshuffleArray(fabch);
let di=myRandom(h[240],h[275]);
let des1a=myRandom(0,PI);
let des2a=PI+des1a;
let des1gap=des1a;
let des2gap=des2a;
fabcha[0](h[40],h[10],h[790],h[780]);
fabcha[1](h[90],h[60],h[670],h[650]);
fabcha[2](h[300],h[270],h[270],h[270]);
if (fabch[1]==pgfabric1)cordc1=features.f1h;
if (fabch[1]==pgfabric2)cordc1=features.fab2vert;
if (fabch[1]==pgfabric3)cordc1=features.denim1;
pgdaisy(h[455],h[455],myRandom(2.1,4.2));
for(let j=0;j<30;j++){
bdia.push(myRandom(h[30],h[85]));
}
let butnum=int(myRandom(6,11));
for(let i=0;i<butnum;i++){
pgbutton(h[455]+di*pg.cos(des1a),h[455]+di*pg.sin(des1a),bdia[i],"sewn",cordc1);
des1a+=h[1]*0.01+2*pg.sin(((bdia[i]/2+bdia[i+1]/2)/2)/di);
}
for(let i=0;i<butnum;i++){
pgbutton(h[455]+di*pg.cos(des2a),h[455]+di*pg.sin(des2a),bdia[i],"sewn",cordc1);
des2a+=(h[1]*0.01+2*pg.sin(((bdia[i]/2+bdia[i+1]/2)/2)/di));
}
pgcornflower=new pgCornflower(myRandom(h[55],h[70]),h[455]+di*pg.cos(((2*PI-des2a-(h[1]*0.01+2*pg.sin(((bdia[butnum]/2+bdia[butnum+1]/2)/2)/di))+des1gap)/2)+des2a),h[455]+di*pg.sin(((2*PI-des2a-(h[1]*0.01+2*pg.sin(((bdia[butnum]/2+bdia[butnum+1]/2)/2)/di))+des1gap)/2)+des2a));
pgcornflower.draw();
pgcornflower=new pgCornflower(myRandom(h[55],h[70]),h[455]+di*pg.cos(PI+((2*PI-des2a-(h[1]*0.01+2*pg.sin(((bdia[butnum]/2+bdia[butnum+1]/2)/2)/di))+des1gap)/2)+des2a),h[455]+di*pg.sin(PI+((2*PI-des2a-(h[1]*0.01+2*pg.sin(((bdia[butnum]/2+bdia[butnum+1]/2)/2)/di))+des1gap)/2)+des2a));
pgcornflower.draw();
}
function design2(){
let fabch=[pgfabric1,pgfabric2,pgfabric3];
let fabcha=pgshuffleArray(fabch);
fabcha[0](h[250],h[80],myRandom(h[470],h[650]),myRandom(h[700],h[750]));
fabcha[1](h[100],h[120],myRandom(h[380],h[500]),myRandom(h[470],h[650]));
fabcha[2](h[50],h[220],myRandom(h[260],h[380]),myRandom(h[420],h[520]));
  for(let i = 0; i<52;i++){
  pgbutton(h[200]+(myRandom(h[10],h[180]))*pg.cos(myRandom(0,2*PI)),h[455]+(myRandom(h[10],h[180]))*pg.sin(myRandom(0,2*PI)),myRandom(h[45],h[75]),"notsewn",0);
  }
  for(let j=0;j<5;j++){
  pgcornflower=new pgCornflower(myRandom(h[57],h[67]),myRandom(h[500],h[900]),myRandom(h[220],h[800]));
  pgcornflower.draw();
  }
  for(let k=0;k<3;k++){
  pgdaisy(myRandom(h[410],h[900]),myRandom(h[170],h[800]),myRandom(1.8,2.2));
  }}
function design3(){
let fabch=[pgfabric1,pgfabric2,pgfabric3];
let fabcha=pgshuffleArray(fabch);
fabcha[0](h[150],h[110],h[570],h[560]);
fabcha[1](-h[60],h[80],h[980],h[100]);
fabcha[1](-h[60],h[620],h[980],h[100]);
fabcha[2](h[110],-h[130],h[100],h[1100]);
fabcha[2](h[630],-h[130],h[100],h[1100]);
if (fabch[2]==pgfabric1)cordc1=features.f1h;
if (fabch[2]==pgfabric2)cordc1=features.fab2vert;
if (fabch[2]==pgfabric3)cordc1=features.denim1;
let flowerch=myRandom(0,1);
if (flowerch>0.5){
pgcornflower=new pgCornflower(myRandom(h[100],h[120]),h[455],h[455]);
pgcornflower.draw();
pgbutton(h[190],h[160],myRandom(h[70],h[100]),"sewn",cordc1);
pgbutton(h[710],h[160],myRandom(h[70],h[100]),"sewn",cordc1);
pgbutton(h[190],h[710],myRandom(h[70],h[100]),"sewn",cordc1);
pgbutton(h[710],h[710],myRandom(h[70],h[100]),"sewn",cordc1);  
let dpos=int(myRandom(1,5));
if (dpos==1){pgdaisy(h[710],h[160],myRandom(2.2,2.7));}
if (dpos==2){pgdaisy(h[190],h[160],myRandom(2.2,2.7));}
if (dpos==3){pgdaisy(h[190],h[710],myRandom(2.2,2.7));}
if (dpos==4){pgdaisy(h[710],h[710],myRandom(2.2,2.7));}
}
if (flowerch<=0.5){
let dpos=int(myRandom(1,5));
if (dpos==1){
pgcornflower=new pgCornflower(myRandom(h[65],h[75]),h[190],h[710]);
pgcornflower.draw();
pgbutton(h[190],h[160],myRandom(h[70],h[100]),"sewn",cordc1);
pgbutton(h[710],h[160],myRandom(h[70],h[100]),"sewn",cordc1);
pgbutton(h[710],h[710],myRandom(h[70],h[100]),"sewn",cordc1);
}
if (dpos==2){
pgcornflower=new pgCornflower(myRandom(h[65],h[75]),h[190],h[160]);
pgcornflower.draw();
pgbutton(h[710],h[160],myRandom(h[70],h[100]),"sewn",cordc1);
pgbutton(h[190],h[710],myRandom(h[70],h[100]),"sewn",cordc1);
pgbutton(h[710],h[710],myRandom(h[70],h[100]),"sewn",cordc1);
}
if (dpos==3){
pgcornflower=new pgCornflower(myRandom(h[65],h[75]),h[710],h[160]);
pgcornflower.draw();
pgbutton(h[190],h[160],myRandom(h[70],h[100]),"sewn",cordc1);
pgbutton(h[190],h[710],myRandom(h[70],h[100]),"sewn",cordc1);
pgbutton(h[710],h[710],myRandom(h[70],h[100]),"sewn",cordc1);
}
if (dpos==4){
pgcornflower=new pgCornflower(myRandom(h[65],h[75]),h[710],h[710]);
pgcornflower.draw();
pgbutton(h[190],h[160],myRandom(h[70],h[100]),"sewn",cordc1);
pgbutton(h[710],h[160],myRandom(h[70],h[100]),"sewn",cordc1);
pgbutton(h[190],h[710],myRandom(h[70],h[100]),"sewn",cordc1);
}
pgdaisy(h[455],h[455],myRandom(4.2,4.7));
}}
function design4(){
pg.push();
pg.translate(h[455],h[455]);
pg.rotate(PI/4);
let fabch=[pgfabric1,pgfabric2,pgfabric3];
let fabcha=pgshuffleArray(fabch);
fabcha[1](-h[270],-h[270],h[500],h[500]);
fabcha[2](-h[90],-h[950],h[120],h[1700]);
if (fabch[1]==pgfabric1)cordc1=features.f1h;
if (fabch[1]==pgfabric2)cordc1=features.fab2vert;
if (fabch[1]==pgfabric3)cordc1=features.denim1;
pgbutton(0,-h[120],myRandom(h[45],h[52]),"sewn",cordc1);
pgbutton(0,-h[60],myRandom(h[52],h[59]),"sewn",cordc1);
pgbutton(0,h[10],myRandom(h[59],h[66]),"sewn",cordc1);
pgbutton(0,h[90],myRandom(h[66],h[73]),"sewn",cordc1);
pgbutton(0,h[180],myRandom(h[73],h[80]),"sewn",cordc1);
for (let i=0;i<5;i++){
let flowerch=myRandom(0,1);
if (flowerch<0.5)pgdaisy(myRandom(-h[405],-h[140]),myRandom(-h[405],h[405]),myRandom(2.3,2.9));
if (flowerch>=0.5){
pgcornflower=new pgCornflower(myRandom(h[65],h[75]),myRandom(-h[405],-h[140]),myRandom(-h[405],h[405]));
pgcornflower.draw();
}
}for (let i=0;i<5;i++){
let flowerch=myRandom(0,1);
if (flowerch<0.5)pgdaisy(myRandom(h[140],h[405]),myRandom(-h[405],h[405]),myRandom(2.3,2.9));
if (flowerch>=0.5){
pgcornflower=new pgCornflower(myRandom(h[65],h[75]),myRandom(h[140],h[405]),myRandom(-h[405],h[405]));
pgcornflower.draw();
}}
pg.pop();
}
function design5(){
let bdiam=[];
let ddiam=[];
let d1diam=[];
pg.push();
pg.translate(h[455],h[455]);
pg.rotate(-PI/4);
let fabch=[pgfabric1,pgfabric2,pgfabric3];
let fabcha=pgshuffleArray(fabch);
fabcha[1](-h[526],-h[950],h[120],h[1700]);
fabcha[2](-h[222],-h[950],h[120],h[1700]);
fabcha[2](h[62],-h[950],h[120],h[1700]);
fabcha[1](h[326],-h[950],h[120],h[1700]);
for(let j=0;j<30;j++){
bdiam.push(myRandom(h[50],h[100]));
}
bstart=-h[650]
for(let i=0;i<25;i++){
pgbutton(0,bstart,bdiam[i],"not sewn",features.fab2vert);
bstart+=(bdiam[i]+bdiam[i+1])/2;
}
for(let j=0;j<3;j++){
ddiam.push(myRandom(h[130],h[170]));
}
dstart=-(ddiam[1]+ddiam[2])/2
for(let i=0;i<3;i++){
pgdaisy(-h[284],dstart,ddiam[i]/h[75]);
dstart+=(ddiam[i]+ddiam[i+1])/2;
}
for(let j=0;j<3;j++){
d1diam.push(myRandom(h[130],h[170]));
}
d1start=-(d1diam[1]+d1diam[2])/2
for(let i=0;i<3;i++){
pgdaisy(h[284],d1start,d1diam[i]/h[75]);
d1start+=(d1diam[i]+d1diam[i+1])/2;
}
pgcornflower=new pgCornflower(myRandom(h[65],h[80]),h[568],0);
pgcornflower.draw();
pgcornflower=new pgCornflower(myRandom(h[65],h[80]),-h[568],0);
pgcornflower.draw();
pg.pop();
}
function design6(){
let fabch=[pgfabric1,pgfabric2,pgfabric3,pgfabric1,pgfabric2,pgfabric3,pgfabric1,pgfabric2,pgfabric3,pgfabric1,pgfabric2,pgfabric3,pgfabric1,pgfabric2,pgfabric3,pgfabric1,pgfabric2,pgfabric3];
let fabcha=pgshuffleArray(fabch);
let order=[fh1,fh2,fh3,fh4,fh5,fh6,fh7,fh8];
let ordersh=pgshuffleArray(order);
ordersh[1] ();
ordersh[2] ();
ordersh[3] ();
ordersh[4] ();
ordersh[5] ();
ordersh[6] ();
ordersh[7] ();
ordersh[0] ();
function fh1(){
pg.push();
pg.translate(h[455],h[455]);
pg.rotate(-PI/4);  
fabcha[0](-h[506],-h[400],h[80],h[800]);
pg.pop();
}
function fh2(){
pg.push();
pg.translate(h[455],h[455]);
pg.rotate(-PI/4);  
fabcha[1](-h[202],-h[750],h[80],h[1500]);
pg.pop();
}
function fh3(){
pg.push();
pg.translate(h[455],h[455]);
pg.rotate(-PI/4);  
fabcha[2](h[82],-h[750],h[80],h[1500]);
pg.pop();
}
function fh4(){
pg.push();
pg.translate(h[455],h[455]);
pg.rotate(-PI/4);  
fabcha[3](h[346],-h[400],h[80],h[800]);
pg.pop();
}
function fh5(){
pg.push();
pg.translate(h[455],h[455]);
pg.rotate(PI/4);
fabcha[4](-h[506],-h[400],h[80],h[800]);
pg.pop();
}
function fh6(){
pg.push();
pg.translate(h[455],h[455]);
pg.rotate(PI/4);  
fabcha[5](-h[202],-h[750],h[80],h[1500]);
pg.pop();
}
function fh7(){
pg.push();
pg.translate(h[455],h[455]);
pg.rotate(PI/4);  
fabcha[6](h[82],-h[750],h[80],h[1500]);
pg.pop();
}
function fh8(){
pg.push();
pg.translate(h[455],h[455]);
pg.rotate(PI/4);  
fabcha[7](h[346],-h[400],h[80],h[800]);
pg.pop();
}
pg.push();
pg.translate(h[455],h[455]);
pg.rotate(-PI/4);  
let bflch=["daisy","daisy","daisy","daisy","daisy","cornflower","cornflower","cornflower","cornflower","button","button","button","button","button","button","button"];
let bflsh=pgshuffleArray(bflch);
if (bflsh[0]=="button")pgbutton(-h[568],0,myRandom(h[70],h[120]));
if (bflsh[0]=="daisy")pgdaisy(-h[568],0,myRandom(1.8,2.4));
if (bflsh[0]=="cornflower"){pgcornflower=new pgCornflower(myRandom(h[60],h[70]),-h[568],0);
                            pgcornflower.draw();}
if (bflsh[1]=="button")pgbutton(-h[284],0,myRandom(h[70],h[120]));
if (bflsh[1]=="daisy")pgdaisy(-h[284],0,myRandom(1.8,2.4));
if (bflsh[1]=="cornflower"){pgcornflower=new pgCornflower(myRandom(h[60],h[70]),-h[284],0);
                            pgcornflower.draw();}
if (bflsh[2]=="button")pgbutton(0,0,myRandom(h[70],h[120]));
if (bflsh[2]=="daisy")pgdaisy(0,0,myRandom(1.8,2.4));
if (bflsh[2]=="cornflower"){pgcornflower=new pgCornflower(myRandom(h[60],h[70]),0,0);
                            pgcornflower.draw();}
if (bflsh[3]=="button")pgbutton(h[284],0,myRandom(h[70],h[120]));
if (bflsh[3]=="daisy")pgdaisy(h[284],0,myRandom(1.8,2.4));
if (bflsh[3]=="cornflower"){pgcornflower=new pgCornflower(myRandom(h[60],h[70]),h[284],0);
                            pgcornflower.draw();}
if (bflsh[4]=="button")pgbutton(h[568],0,myRandom(h[70],h[120]));
if (bflsh[4]=="daisy")pgdaisy(h[568],0,myRandom(1.8,2.4));
if (bflsh[4]=="cornflower"){pgcornflower=new pgCornflower(myRandom(h[60],h[70]),h[568],0);
                            pgcornflower.draw();}
if (bflsh[5]=="button")pgbutton(-h[284],-h[284],myRandom(h[70],h[120]));
if (bflsh[5]=="daisy")pgdaisy(-h[284],-h[284],myRandom(1.8,2.4));
if (bflsh[5]=="cornflower"){pgcornflower=new pgCornflower(myRandom(h[60],h[70]),-h[284],-h[284]);
                            pgcornflower.draw();}
if (bflsh[6]=="button")pgbutton(0,-h[284],myRandom(h[70],h[120]));
if (bflsh[6]=="daisy")pgdaisy(0,-h[284],myRandom(1.8,2.4));
if (bflsh[6]=="cornflower"){pgcornflower=new pgCornflower(myRandom(h[60],h[70]),0,-h[284]);
                            pgcornflower.draw();}
if (bflsh[7]=="button")pgbutton(h[284],-h[284],myRandom(h[70],h[120]));
if (bflsh[7]=="daisy")pgdaisy(h[284],-h[284],myRandom(1.8,2.4));
if (bflsh[7]=="cornflower"){pgcornflower=new pgCornflower(myRandom(h[60],h[70]),h[284],-h[284]);
                            pgcornflower.draw();}
if (bflsh[8]=="button")pgbutton(-h[284],h[284],myRandom(h[70],h[120]));
if (bflsh[8]=="daisy")pgdaisy(-h[284],h[284],myRandom(1.8,2.4));
if (bflsh[8]=="cornflower"){pgcornflower=new pgCornflower(myRandom(h[60],h[70]),-h[284],h[284]);
                            pgcornflower.draw();}
if (bflsh[9]=="button")pgbutton(0,h[284],myRandom(h[70],h[120]));
if (bflsh[9]=="daisy")pgdaisy(0,h[284],myRandom(1.8,2.4));
if (bflsh[9]=="cornflower"){pgcornflower=new pgCornflower(myRandom(h[60],h[70]),0,h[284]);
                            pgcornflower.draw();}
if (bflsh[10]=="button")pgbutton(h[284],h[284],myRandom(h[70],h[120]));
if (bflsh[10]=="daisy")pgdaisy(h[284],h[284],myRandom(1.8,2.4));
if (bflsh[10]=="cornflower"){pgcornflower=new pgCornflower(myRandom(h[60],h[70]),h[284],h[284]);
                            pgcornflower.draw();}
if (bflsh[11]=="button")pgbutton(0,-h[568],myRandom(h[70],h[120]));
if (bflsh[11]=="daisy")pgdaisy(0,-h[568],myRandom(1.8,2.4));
if (bflsh[11]=="cornflower"){pgcornflower=new pgCornflower(myRandom(h[60],h[70]),0,-h[568]);
                            pgcornflower.draw();}
if (bflsh[12]=="button")pgbutton(0,h[568],myRandom(h[70],h[120]));
if (bflsh[12]=="daisy")pgdaisy(0,h[568],myRandom(1.8,2.4));
if (bflsh[12]=="cornflower"){pgcornflower=new pgCornflower(myRandom(h[60],h[70]),0,h[568]);
                            pgcornflower.draw();}
pg.pop();
}
function design7(){
var cordc,cordc1;
let fabch=[pgfabric2,pgfabric1,pgfabric3];
let fabcha=pgshuffleArray(fabch);
let di=myRandom(h[240],h[275]);
let des1a=myRandom(0,PI);
let des2a=PI+des1a;
let des1gap=des1a;
let des2gap=des2a;
fabcha[0](h[40],h[10],h[790],h[780]);
fabcha[1](h[120],h[90],h[640],h[620]);
pg.push();
pg.translate(h[455],h[455]);
pg.rotate(PI/4);
fabcha[2](-h[175],-h[185],h[270],h[270]);
pg.pop();
if (fabch[1]==pgfabric2)cordc1=features.fab2vert;
if (fabch[1]==pgfabric3)cordc1=features.denimd2;
if (fabch[1]==pgfabric1)cordc1=features.f1h;
if (fabch[2]==pgfabric2)cordc=features.fab2vert;
if (fabch[2]==pgfabric3)cordc=features.denimd2;
if (fabch[2]==pgfabric1)cordc=features.f1h;
pgbutton(h[185],h[185],h[80],"sewn",cordc1);
pgbutton(h[725],h[185],h[80],"sewn",cordc1);
pgbutton(h[185],h[725],h[80],"sewn",cordc1);
pgbutton(h[725],h[725],h[80],"sewn",cordc1);
let blinch=[h[49],h[50],h[67],h[53],h[45],h[59],h[79],h[62]];
let blincha=pgshuffleArray(blinch);
let blinc=h[225]+blincha[0]/2;
for (let i=0;i<8;i++){
pgbutton(blinc,h[185],blincha[i],"sewn",cordc1);
blinc+=blincha[i]/2+blincha[i+1]/2;}
  
let blinch1=[h[44],h[58],h[48],h[73],h[80],h[55],h[59],h[46]];
let blincha1=pgshuffleArray(blinch1);
let blinc1=h[225]+blincha1[0]/2;
for (let i=0;i<8;i++){
pgbutton(h[185],blinc1,blincha1[i],"sewn",cordc1);
blinc1+=blincha1[i]/2+blincha1[i+1]/2;
}
let blinch2=[h[53],h[44],h[56],h[76],h[47],h[68],h[66],h[50]];
let blincha2=pgshuffleArray(blinch2);
let blinc2=h[225]+blincha2[0]/2;
for (let i=0;i<8;i++){
pgbutton(h[725],blinc2,blincha2[i],"sewn",cordc1);
blinc2+=blincha2[i]/2+blincha2[i+1]/2;
}  
let blinch3=[h[53],h[44],h[56],h[76],h[47],h[68],h[66],h[50]];
let blincha3=pgshuffleArray(blinch3);
let blinc3=h[225]+blincha3[0]/2;
for (let i=0;i<8;i++){
pgbutton(blinc3,h[725],blincha3[i],"sewn",cordc1);
blinc3+=blincha3[i]/2+blincha3[i+1]/2;
}
for(let i=0;i<16;i++){
pgcornflower=new pgCornflower(myRandom(h[55],h[65]),myRandom(h[270],h[630]),myRandom(h[270],h[640]));
pgcornflower.draw();
}
pgdaisy(h[455],h[455],myRandom(3,3.7));
pgbutton(h[450],h[450],h[95],"sewn",cordc);
}
function design8(){
let fabch=[pgfabric2,pgfabric1,pgfabric3];
let fabcha=pgshuffleArray(fabch);
pg.push();
pg.translate(myRandom(h[400],h[500]),myRandom(h[400],h[500]));
pg.rotate(myRandom(PI/18,PI*35/18));
fabcha[2](myRandom(-h[100],-h[600]),myRandom(-h[100],-h[600]),myRandom(h[120],h[500]),myRandom(h[120],h[500]));
pg.pop();
pg.push();
pg.translate(myRandom(h[400],h[500]),myRandom(h[400],h[500]));
pg.rotate(myRandom(PI/18,PI*35/18));
fabcha[1](myRandom(-h[100],-h[600]),myRandom(-h[100],-h[600]),myRandom(h[120],h[500]),myRandom(h[120],h[500]));
pg.pop();
pg.push();
pg.translate(myRandom(h[400],h[500]),myRandom(h[400],h[500]));
pg.rotate(myRandom(PI/18,PI*35/18));
fabcha[0](myRandom(-h[100],-h[600]),myRandom(-h[100],-h[600]),myRandom(h[120],h[500]),myRandom(h[120],h[500]));
pg.pop();
pg.push();
pg.translate(myRandom(h[400],h[500]),myRandom(h[400],h[500]));
pg.rotate(myRandom(PI/18,PI*35/18));
fabcha[2](myRandom(-h[100],-h[600]),myRandom(-h[100],-h[600]),myRandom(h[120],h[500]),myRandom(h[120],h[500]));
pg.pop();
pg.push();
pg.translate(myRandom(h[400],h[500]),myRandom(h[400],h[500]));
pg.rotate(myRandom(PI/18,PI*35/18));
fabcha[1](myRandom(-h[100],-h[600]),myRandom(-h[100],-h[600]),myRandom(h[120],h[500]),myRandom(h[120],h[500]));
pg.pop();
pg.push();
pg.translate(myRandom(h[400],h[500]),myRandom(h[400],h[500]));
pg.rotate(myRandom(PI/18,PI*35/18));
fabcha[0](myRandom(-h[100],-h[600]),myRandom(-h[100],-h[600]),myRandom(h[120],h[500]),myRandom(h[120],h[500]));
pg.pop();
for(let i=0;i<9;i++){
pgcornflower=new pgCornflower(myRandom(h[55],h[65]),myRandom(h[0],h[920]),myRandom(h[0],h[920]));
pgcornflower.draw();
pgcornflower=new pgCornflower(myRandom(h[55],h[65]),myRandom(h[0],h[920]),myRandom(h[0],h[920]));
pgcornflower.draw();
pgdaisy(myRandom(h[0],h[920]),myRandom(h[0],h[920]),myRandom(1.8,2.6));
pgbutton(myRandom(h[0],h[920]),myRandom(h[0],h[920]),myRandom(h[50],h[92]),"not sewn",0);
pgbutton(myRandom(h[0],h[920]),myRandom(h[0],h[920]),myRandom(h[50],h[92]),"not sewn",0);
}}
function design9(){
let fw1=myRandom(h[800],h[900]);
pg.push();
pg.translate(h[455],h[655]);
pg.rotate(myRandom(PI/18,PI*17/18));
pgfabric1(-fw1/2+h[120],-fw1/2+h[120],fw1,fw1);
pg.pop();
for(let i=0;i<2;i++){
pgbutton(myRandom(h[0],h[920]),myRandom(h[0],h[100]),myRandom(h[33],h[81]),"not sewn",0);
}
for(let i=0;i<4;i++){
pgbutton(myRandom(h[0],h[920]),myRandom(h[100],h[200]),myRandom(h[33],h[81]),"not sewn",0);
}
for(let i=0;i<8;i++){
pgbutton(myRandom(h[0],h[920]),myRandom(h[200],h[300]),myRandom(h[33],h[81]),"not sewn",0);
}
for(let i=0;i<15;i++){
pgbutton(myRandom(h[0],h[920]),myRandom(h[300],h[400]),myRandom(h[33],h[81]),"not sewn",0);
}
for(let i=0;i<24;i++){
pgbutton(myRandom(h[0],h[920]),myRandom(h[400],h[500]),myRandom(h[33],h[81]),"not sewn",0);
}
for(let i=0;i<37;i++){
pgbutton(myRandom(h[0],h[920]),myRandom(h[500],h[600]),myRandom(h[33],h[81]),"not sewn",0);
}
for(let i=0;i<54;i++){
pgbutton(myRandom(h[0],h[920]),myRandom(h[600],h[700]),myRandom(h[33],h[81]),"not sewn",0);
}
for(let i=0;i<76;i++){
pgbutton(myRandom(h[0],h[920]),myRandom(h[700],h[800]),myRandom(h[33],h[81]),"not sewn",0);
}
for(let i=0;i<102;i++){
pgbutton(myRandom(h[0],h[920]),myRandom(h[800],h[900]),myRandom(h[33],h[81]),"not sewn",0);
}
for(let i=0;i<1;i++){
pgcornflower=new pgCornflower(myRandom(h[55],h[65]),myRandom(h[0],h[920]),myRandom(h[0],h[320]));
pgcornflower.draw();
pgcornflower=new 
pgdaisy(myRandom(h[0],h[920]),myRandom(h[0],h[320]),myRandom(1.8,2.6));
}
for(let i=0;i<3;i++){
pgcornflower=new pgCornflower(myRandom(h[55],h[65]),myRandom(h[0],h[920]),myRandom(h[320],h[620]));
pgcornflower.draw();
pgcornflower=new 
pgdaisy(myRandom(h[0],h[920]),myRandom(h[320],h[620]),myRandom(1.8,2.6));
}
for(let i=0;i<4;i++){
pgcornflower=new pgCornflower(myRandom(h[55],h[65]),myRandom(h[0],h[920]),myRandom(h[620],h[920]));
pgcornflower.draw();
pgcornflower=new 
pgdaisy(myRandom(h[0],h[920]),myRandom(h[620],h[920]),myRandom(1.8,2.6));
}
}



