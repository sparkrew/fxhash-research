

let seedPoints = [];
let delaunay;


cnvsize = Math.min(innerWidth, innerHeight);
pix = cnvsize * 0.002;

let divBy; 

let XPoints1 = [];
let YPoints1 = [];
let XYPoints1 = [];
let XYchkPoints1 = [];
let XYinsPoints1 = [];

let seedPointsX = [];
let seedPointsY = [];

let cclStep;
let numPnts;
let cntrShift;
let cntrShiftX;
let cntrShiftY;


let r;
let rRand;
let angle = 0;
let period = 36;




let DarkPastelCLRS = [
  '#748873','#748DAE','#555879','#898AC4','#687FE5','#819A91',
  '#AF3E3E','#7F55B1','#6F826A','#604652','#8E7DBE','#735557',
  '#504B38','#5C7285','#B5828C','#574964','#8D77AB','#7C444F'];

let LightPastelCLRS = [
  '#FBF3D5','#FAF9EE','#FFF9BD','#F8F8F8','#FFF2E0','#FEEBF6',
  '#F4EBD3','#FEEBF6','#FFF2EB','#EAEBD0','#EEEFE0','#ECFAE5',
  '#F0F1C5','#FFE1E0','#F4F8D3','#FFF1D5','#EDE8DC','#EEF1DA'];

let MiddlePastelCLRS = [
  '#CAE8BD','#9ECAD6','#A3DC9A','#C0C9EE','#CDC1FF','#F49BAB',
  '#A6D6D6','#F2E2B1','#FDB7EA','#FFCDB2','#FADA7A','#BAD8B6',
  '#EFB6C8','#C1BAA1','#F0C1E1','#D4F6FF','#BFECFF','#FFB0B0'];

  let NEONCLRS = [
    '#090040','#471396','#B13BFF','#FFCC00','#FFEAD8','#E8988A','#9B177E','#2A1458',
    '#78B9B5','#0F828C','#065084','#320A6B','#FF2DD1','#FDFFB8','#4DFFBE','#63C8FF',
    '#000000','#9929EA','#CC66DA','#FAEB92','#F5F7B2','#1CC5DC','#890596','#CF0000',
    '#E2DFD0','#DBAFA0','#F2613F','#FF204E','#FBF3C1','#64E2B7','#DC8BE0','#DC8BE0',
    '#309898','#FF9F00','#F4631E','#CB0404','#FFB200','#EB5B00','#D91656','#640D5F',
    '#FF8000','#4C1F7A','#219B9D','#EEEEEE','#180161','#4F1787','#EB3678','#FB773C',
    '#000000','#CF0F47','#FF0B55','#FFDEDE','#0065F8','#A5D7E8','#00CAFF','#00FFDE',
    '#410445','#A5158C','#FF2DF1','#F6DC43','#00FF9C','#D2FF72','#54C392','#15B392',
    '#900C3F','#C70039','#F94C10','#F8DE22','#793FDF','#7091F5','#97FFF4','#FFFD8C'];


let PaletteCLRS1;
let PaletteCLRS2;
let PaletteCLRS3;
let PaletteCLRS4;
let PaletteCLRS5;
let PaletteCLRS6;
let PaletteCLRS7;

let PaletteCLRS8;
let PaletteCLRS9;
let PaletteCLRS10;
let PaletteCLRS11;

let PaletteCLRS12;
let PaletteCLRS13;
let PaletteCLRS14;
let PaletteCLRS15;

let PaletteCLRS16;
let PaletteCLRS17;
let PaletteCLRS18;
let PaletteCLRS19;

let PaletteCLRS20;
let PaletteCLRS21;
let PaletteCLRS22;
let PaletteCLRS23;


let CLRSWITCH = [0,1];
let CLRSWTCHR;

let FG; 
let FGsize;

let FrRate = 10;
let CELLsize;


let waveangle1;
let waveangle2;
let waveangle3;

let PerList1 = [2.044,2.294,2.575,2.728,3.062,3.438,3.858,4.088,4.589,5.150,5.457,6.125,6.875,7.717];
let PerList2 = [2.044,2.294,2.575,2.728,3.062,3.438,3.858,4.088,4.589,5.150,5.457,6.125,6.875,7.717];
let PerList3 = [2.044,2.294,2.575,2.728,3.062,3.438,3.858,4.088,4.589,5.150,5.457,6.125,6.875,7.717];

let per1Sc;
let per2Sc;
let per3Sc;
let per1Sc1;
let per2Sc1;
let per3Sc1;

let per1ScB;
let per2ScB;
let per3ScB;
let per1Sc1B;
let per2Sc1B;
let per3Sc1B;

let per1ScC;
let per2ScC;
let per3ScC;
let per1Sc1C;
let per2Sc1C;
let per3Sc1C;

let per1ScD;
let per2ScD;
let per3ScD;
let per1Sc1D;
let per2Sc1D;
let per3Sc1D;

let shift;

let amplsc1;
let amplsc1B;
let amplsc1C;
let amplsc1D;
let fiAnmpList = [13,21];

let F1x1;
let F1x2;
let F1x3;
let F1x4;

let F2x1;
let F2x2;
let F2x3;
let F2x4;

let F3x1;
let F3x2;
let F3x3;
let F3x4;

let F4x1;
let F4x2;
let F4x3;
let F4x4;

let frsize;

let BGpatSelectorA = [1,2,3];
let BGpatSelectorB = [1,2,3];

let GpatAXYSL;
let GpatBXYSL;

let BGpatAx;
let BGpatAy;
let BGpatBx;
let BGpatBy;

let globalseed = ($fx.rand()*1000000);

function setup() {
  //createCanvas(400, 400);

    randomSeed(globalseed);
    noiseSeed(globalseed);


GpatAXYSL = random(BGpatSelectorA);
  if (GpatAXYSL == 1) {
      BGpatAx = random((cnvsize/32), (cnvsize/2));
      BGpatAy = (cnvsize/32);
  } 
  if (GpatAXYSL == 2) {
      BGpatAx = (cnvsize/32);
      BGpatAy = random((cnvsize/32), (cnvsize/2));
  } 
  if (GpatAXYSL == 3) {
      BGpatAx = (cnvsize/32);
      BGpatAy = random((cnvsize/32), (cnvsize/2)-(cnvsize/24))+(cnvsize/2);
  } 

GpatBXYSL = random(BGpatSelectorB);
  if (GpatBXYSL == 1) {
      BGpatBx = cnvsize-(cnvsize/32);
      BGpatBy = random((cnvsize/32), (cnvsize/2));
  } 
  if (GpatBXYSL == 2) {
      BGpatBx = cnvsize-(cnvsize/32);
      BGpatBy = random(0, (cnvsize/2)-(cnvsize/32))+(cnvsize/2);
  } 
  if (GpatBXYSL == 3) {
      BGpatBx = random(0, (cnvsize/2)-(cnvsize/32))+(cnvsize/2);
      BGpatBy = cnvsize-(cnvsize/32);
  } 



  frsize = 4;

  per1Sc =  random(PerList1); 
  per2Sc =  random(PerList2); 
  per3Sc =  random(PerList3); 

  per1Sc1 =  random(PerList1); 
  per2Sc1 =  random(PerList2); 
  per3Sc1 =  random(PerList3); 

  amplsc1 = random(fiAnmpList)*0.5;

  per1ScB =  random(PerList1); 
  per2ScB =  random(PerList2); 
  per3ScB =  random(PerList3); 

  per1Sc1B =  random(PerList1); 
  per2Sc1B =  random(PerList2); 
  per3Sc1B =  random(PerList3); 

  amplsc1B = random(fiAnmpList)*0.5;

  per1ScC =  random(PerList1); 
  per2ScC =  random(PerList2); 
  per3ScC =  random(PerList3); 

  per1Sc1C =  random(PerList1); 
  per2Sc1C =  random(PerList2); 
  per3Sc1C =  random(PerList3); 

  amplsc1C = random(fiAnmpList)*0.5;

  per1ScD =  random(PerList1); 
  per2ScD =  random(PerList2); 
  per3ScD =  random(PerList3); 

  per1Sc1D =  random(PerList1); 
  per2Sc1D =  random(PerList2); 
  per3Sc1D =  random(PerList3); 

  amplsc1D = random(fiAnmpList)*0.5;

  F1x1 = random(0.1,0.4);
  F1x2 = random(0.7,0.9);
  F1x3 = random(0.1,0.4);
  F1x4 = random(0.7,0.9);

  F2x1 = random(0.1,0.4);
  F2x2 = random(0.7,0.9);
  F2x3 = random(0.1,0.4);
  F2x4 = random(0.7,0.9);

  F3x1 = random(0.1,0.4);
  F3x2 = random(0.7,0.9);
  F3x3 = random(0.1,0.4);
  F3x4 = random(0.7,0.9);

  F4x1 = random(0.1,0.4);
  F4x2 = random(0.7,0.9);
  F4x3 = random(0.1,0.4);
  F4x4 = random(0.7,0.9);

  angleMode(RADIANS);


  createCanvas(cnvsize, cnvsize);
  frameRate(FrRate);
  pixelDensity(1);

  FGsize = 50;
  FG = createGraphics(FGsize, FGsize);
  FG.background(255);
  FG.frameRate(FrRate);
  FG.pixelDensity(1);

  
  rRand = random(FGsize*0.3, FGsize*0.4);
  //r = rRand*pix;
  r = rRand*2;
  cntrShift = FGsize/2;
  cntrShiftX = FGsize*random(0.1,0.9);
  cntrShiftY = FGsize*random(0.1,0.9);
  divBy = random (10, 22);

  CELLsize = cnvsize/FGsize;
  
  //numPnts = 75;
  numPnts = random (5,20);
  period = random(3,100);

  CLRSWTCHR = random(CLRSWITCH);

  if (CLRSWTCHR == 0) {
  PaletteCLRS1 = random(DarkPastelCLRS);
  PaletteCLRS2 = random(LightPastelCLRS);
  } else if (CLRSWTCHR == 1) {
  PaletteCLRS1 = random(LightPastelCLRS);
  PaletteCLRS2 = random(DarkPastelCLRS);
  }
  //PaletteCLRS3 = random(DarkPastelCLRS);
  //PaletteCLRS4 = random(MiddlePastelCLRS);
  //PaletteCLRS5 = random(MiddlePastelCLRS);
  //PaletteCLRS6 = random(DarkPastelCLRS);
  //PaletteCLRS7 = random(LightPastelCLRS);

  PaletteCLRS3 = random(NEONCLRS);
  PaletteCLRS4 = random(NEONCLRS);
  PaletteCLRS5 = random(NEONCLRS);
  PaletteCLRS6 = random(NEONCLRS);
  PaletteCLRS7 = random(NEONCLRS);

  PaletteCLRS8 = random(NEONCLRS);
  PaletteCLRS9 = random(NEONCLRS);
  PaletteCLRS10 = random(NEONCLRS);
  PaletteCLRS11 = random(NEONCLRS);

  PaletteCLRS12 = random(NEONCLRS);
  PaletteCLRS13 = random(NEONCLRS);
  PaletteCLRS14 = random(NEONCLRS);
  PaletteCLRS15 = random(NEONCLRS);

  PaletteCLRS16 = random(NEONCLRS);
  PaletteCLRS17 = random(NEONCLRS);
  PaletteCLRS18 = random(NEONCLRS);
  PaletteCLRS19 = random(NEONCLRS);

  PaletteCLRS20 = random(NEONCLRS);
  PaletteCLRS21 = random(NEONCLRS);
  PaletteCLRS22 = random(NEONCLRS);
  PaletteCLRS23 = random(NEONCLRS);


	shift = FGsize / 4.5;

	
}

function draw() {

  background(PaletteCLRS3);

  angleMode(RADIANS);
  FG.background(255);
  frameRate(FrRate);
  
  angle -= 1;
  
XPoints1 = [];
YPoints1 = [];
XYPoints1 = [];
XYchkPoints1 = [];
seedPoints = [];
XYinsPoints1 = [];
seedPointsX = [];
seedPointsY = [];





stroke(PaletteCLRS22);
strokeWeight((FGsize*0.002)*8);
let exislines = 15;
for (let i = 0; i <= exislines; i++) {
//line(BGpatAx,BGpatAy+(i*(cnvsize/16)),BGpatBx,BGpatBy+(i*(cnvsize/16)));
}

stroke(PaletteCLRS23);
strokeWeight((FGsize*0.002)*3);
let exislinesUp = 10;
for (let i = 0; i <= exislinesUp; i++) {
//line(BGpatAx,BGpatAy-(i*(cnvsize/8)),BGpatBx,BGpatBy-(i*(cnvsize/8)));
}


stroke(PaletteCLRS21);
strokeWeight((FGsize*0.002)*21);
//line(BGpatAx,BGpatAy,BGpatBx,BGpatBy);
noStroke();
fill(PaletteCLRS21);
//square(BGpatAx-(pix*5),BGpatAy-(pix*5),pix*10);
//square(BGpatBx-(pix*5),BGpatBy-(pix*5),pix*10);

  
    for (let i = 0; i <= numPnts; i++) {


    let PTx = map(i, 0, numPnts, -r, r);
    let PTamplitude = r * sqrt(1 - pow((PTx/r), 2)); 
    //let y = amplitude*sin((i + angle)*period);
    let PTy = PTamplitude*sin(((i)*period)+(PI*2*(angle/200))); //angle devide depends  on recorder duration multiplied on fps to get 100 steps equal 1
    

    if(sin(i) > 0) {
    //ellipse(PTx+(cnvsize/2),PTy+(cnvsize/2),3*pix,3*pix);
    }
      
    XPoints1[i] = PTx+(cntrShiftX);
    YPoints1[i] = PTy+(cntrShiftY);
       XYPoints1[i] = createVector(XPoints1[i],YPoints1[i]);
      
      seedPoints = XYPoints1.filter(function(xyz,i) { return sin(i) > 0 }); // [5, 3, 1]
      
      //seedPointsX = XPoints1.filter(function(xyz,i) { return sin(i) > 0 });
      //seedPointsY = YPoints1.filter(function(xyz,i) { return sin(i) > 0 });

      
      
  }



  delaunay = calculateDelaunay(seedPoints);

  for (let v of seedPoints) {

    FG.noFill();
    //FG.fill(PaletteCLRS4);
    FG.stroke(PaletteCLRS3);
    FG.strokeWeight((FGsize*0.002)*5);
    //point(v.x, v.y);
    //FG.rect((v.x)-(21*(FGsize*0.002)/2),(v.y)-(13*(FGsize*0.002)/2),21*(FGsize*0.002),13*(FGsize*0.002));
  }


  

  FG.noFill();
  FG.stroke(0);
  FG.strokeWeight((FGsize*0.002)*24);
  console.log(delaunay.triangles);
  let { points, triangles } = delaunay;
  for (let i = 0; i < triangles.length; i += 3) {
    let a = 2 * delaunay.triangles[i];
    let b = 2 * delaunay.triangles[i + 1];
    let c = 2 * delaunay.triangles[i + 2];
    FG.triangle(
      points[a],
      points[a + 1],
      points[b],
      points[b + 1],
      points[c],
      points[c + 1]
    );
  }


push();
 scale(cnvsize/FGsize);
 //translate(cnvsize/25, cnvsize/25);
  let voronoi2 = delaunay.voronoi([FGsize/12,FGsize/12,FGsize-((FGsize/12)),FGsize-((FGsize/12))]);
  let polygons2 = voronoi2.cellPolygons();

  let Lpoints1 = 40;
  let Lpoints2 = 20;


  for (let poly of polygons2) {

    noFill();

    //strokeCap(ROUND);
    //strokeWeight((FGsize*0.002)*30);
    //stroke(PaletteCLRS7);
    //beginShape();
    //for (let i = 0; i < poly.length; i++) {
      //vertex(poly[i][0],poly[i][1])
    //}
   // endShape();

/*
    strokeCap(ROUND);
    strokeWeight((FGsize*0.002)*4);
    stroke(PaletteCLRS7);
    line(poly[0][0], poly[0][1], poly[2][0], poly[2][1]);


    strokeWeight((FGsize*0.002)*2);
    stroke(PaletteCLRS6);
    line(poly[0][0], poly[0][1], poly[2][0], poly[2][1]);

    strokeWeight((FGsize*0.002)*1);
    stroke(PaletteCLRS5);
    line(poly[0][0], poly[0][1], poly[2][0], poly[2][1]);

    */

    //strokeWeight((FGsize*0.002)*1);
    //stroke(PaletteCLRS5);
    noStroke();
    fill(PaletteCLRS5);
    for (let p = 0; p <= Lpoints1; p++) {
rect(
  poly[0][0]+(poly[2][0]-poly[0][0]) * (1/Lpoints1*p), 
  poly[0][1]+(poly[2][1]-poly[0][1]) * (1/Lpoints1*p), 
  ((FGsize*0.002)*3),
  ((FGsize*0.002)*3)
)
}


/*
    strokeCap(PROJECT);
    strokeWeight((FGsize*0.002)*3);
    stroke(PaletteCLRS2);
    line(poly[1][0], poly[0][1], poly[2][0], poly[2][1]);


    strokeWeight((FGsize*0.002)*2);
    stroke(PaletteCLRS3);
    line(poly[1][0], poly[0][1], poly[2][0], poly[2][1]);

    strokeWeight((FGsize*0.002)*1);
    stroke(PaletteCLRS4);
    line(poly[1][0], poly[0][1], poly[2][0], poly[2][1]);

*/


    //strokeWeight((FGsize*0.002)*1);
    //stroke(PaletteCLRS4);
    noStroke();
    fill(PaletteCLRS4);
    for (let p = 0; p <= Lpoints2; p++) {
rect(
  poly[1][0]+(poly[2][0]-poly[1][0]) * (1/Lpoints2*p), 
  poly[0][1]+(poly[2][1]-poly[0][1]) * (1/Lpoints2*p), 
  ((FGsize*0.002)*3),
  ((FGsize*0.002)*3)
)
}


  }
pop();

  //FG.noFill();
  //FG.strokeWeight((FGsize*0.002)*8);
  //FG.stroke(PaletteCLRS2);
  
  let voronoi = delaunay.voronoi([-100,-100,FGsize+200,FGsize+200]);
  let polygons = voronoi.cellPolygons();
  for (let poly of polygons) {




    //console.log(poly);
    //FG.beginShape();
    //for (let i = 0; i < poly.length; i++) {
      //vertex(poly[i][0],poly[i][1])
   // }
    //FG.endShape();



    FG.noFill();

    FG.strokeCap(ROUND);
    FG.strokeWeight((FGsize*0.002)*64);
    FG.stroke(0);
    FG.beginShape();
    for (let i = 0; i < poly.length; i++) {
      vertex(poly[i][0],poly[i][1])
    }
    FG.endShape();

/*
    FG.strokeCap(ROUND);
    FG.strokeWeight((FGsize*0.002)*56);
    FG.stroke(55);
    FG.beginShape();
    for (let i = 0; i < poly.length; i++) {
      vertex(poly[i][0],poly[i][1])
    }
    FG.endShape();


    FG.strokeCap(ROUND);
    FG.strokeWeight((FGsize*0.002)*48);
    FG.stroke(255);
    FG.beginShape();
    for (let i = 0; i < poly.length; i++) {
      vertex(poly[i][0],poly[i][1])
    }
    FG.endShape();

    FG.strokeCap(ROUND);
    FG.strokeWeight((FGsize*0.002)*24);
    FG.stroke(120);
    FG.beginShape();
    for (let i = 0; i < poly.length; i++) {
      vertex(poly[i][0],poly[i][1])
    }
    FG.endShape();

    FG.strokeCap(ROUND);
    FG.strokeWeight((FGsize*0.002)*6);
    FG.stroke(0);
    FG.beginShape();
    for (let i = 0; i < poly.length; i++) {
      vertex(poly[i][0],poly[i][1])
    }
    FG.endShape();

*/






  }
	
FG.filter(BLUR, 0.5);
//FG.filter(INVERT);
FG.filter(THRESHOLD, 0.5);
FG.filter(BLUR, 1.2);
FG.filter(DILATE);
//FG.filter(POSTERIZE, 3);
//FG.filter(BLUR, 0.5);

//image(FG, 0, 0, FGsize, FGsize);


angleMode(DEGREES);

  FG.loadPixels();
  
    for (let i = 1; i < FGsize; i++) {
      for (let j = 1; j < FGsize; j++) {
        //img.set(i+FGsize, j+FGsize, color (0,90,102));
        let FGpix = FG.get(i, j);
        let BR = brightness(FGpix);
        let RECsize = map(BR,0, 100, 0, (cnvsize/FGsize)*1);







        
        
        
 push();

if (
       j > frsize && 
       j < FGsize -frsize &&
       i > frsize && 
       i < FGsize -frsize 
) {

    if (
      j > (cos(i*(per1Sc*1.3)+(angle*(360/200)))*cos(i*(per2Sc*1.3)+(angle*(360/200)))*cos(i*(per3Sc*1.3)+(angle*(360/200)))*amplsc1)+shift && 
      j < (cos(i*(per1Sc1*1.3)-(angle*(360/200)))*cos(i*(per2Sc1*1.3)-(angle*(360/200)))*cos(i*(per3Sc1*1.3)-(angle*(360/200)))*amplsc1)+(FGsize-shift )&& 
       //i > 3 && 
       i > (FGsize*F1x1)+((FGsize*F1x3)-(FGsize*F1x1))*(j/FGsize) && 
       i < ((FGsize*F1x2))+(((FGsize*F1x4))-((FGsize*F1x2)))*(j/FGsize)
  ) {
        //fill(FGpix);
        fill(PaletteCLRS4);
        noStroke();
        //rect(i*(cnvsize/FGsize)-((cnvsize/FGsize)/4)+((cnvsize/FGsize)/2),j*(cnvsize/FGsize)-((cnvsize/FGsize)/2),(cnvsize/FGsize)/4,RECsize);
      
        //let ANGL = 45;
        translate(-CELLsize*1.5, -CELLsize/3);
        quad(
               i*(CELLsize)                    +((RECsize/3)*2)      +((CELLsize/3)*( floor (j -(floor((j/3)-0.499)*3)))),
               j*(CELLsize)                    -((RECsize/3)*1),
               i*(CELLsize)+((CELLsize/3)*2)                         +((CELLsize/3)*( floor (j -(floor((j/3)-0.499)*3)))),
               j*(CELLsize)-((CELLsize/3)*1),
               i*(CELLsize)+((CELLsize/3)*2)                         +((CELLsize/3)*( floor (j -(floor((j/3)-0.499)*3)))),
               j*(CELLsize)+((CELLsize/3)*1)   -(((CELLsize/3)*1.5)-((RECsize/3)*1.5)),
               i*(CELLsize)                    +((RECsize/3)*2)      +((CELLsize/3)*( floor (j -(floor((j/3)-0.499)*3)))),  //  +(033*( floor (j -(floor((j/3)-0.499)*3))))  // +((CELLsize*(abs(sin(j*ANGL)))))
               j*(CELLsize)+((CELLsize/3)*2)   -((RECsize/3)*1) -(((CELLsize/3)*1.5)-((RECsize/3)*1.5))
      )
      
        fill(PaletteCLRS5);
        noStroke();
        quad(
               i*(CELLsize)+((CELLsize/3)*2)              +((CELLsize/3)*( floor (j -(floor((j/3)-0.499)*3)))),
               j*(CELLsize)-((CELLsize/3)*1),
               i*(CELLsize)+((CELLsize/3)*3)              +((CELLsize/3)*( floor (j -(floor((j/3)-0.499)*3)))),
               j*(CELLsize),
               i*(CELLsize)+((CELLsize/3)*3)              +((CELLsize/3)*( floor (j -(floor((j/3)-0.499)*3)))),
               j*(CELLsize)+((CELLsize/3)*2)-(((CELLsize/3)*1.5)-((RECsize/3)*1.5)),
               i*(CELLsize)+((CELLsize/3)*2)              +((CELLsize/3)*( floor (j -(floor((j/3)-0.499)*3)))),
               j*(CELLsize)+((CELLsize/3)*1)-(((CELLsize/3)*1.5)-((RECsize/3)*1.5))
      )

        fill(PaletteCLRS7);
        noStroke();
        quad(
               i*(CELLsize)+((CELLsize/3)*1)   +((RECsize/3)*2)            +((CELLsize/3)*( floor (j -(floor((j/3)-0.499)*3)))),
               j*(CELLsize)+((CELLsize/3)*1)   -((RECsize/3)*1),
               i*(CELLsize)+((CELLsize/3)*3)                               +((CELLsize/3)*( floor (j -(floor((j/3)-0.499)*3)))),
               j*(CELLsize),
               i*(CELLsize)+((CELLsize/3)*3)                               +((CELLsize/3)*( floor (j -(floor((j/3)-0.499)*3)))),
               j*(CELLsize)+((CELLsize/3)*2)-(((CELLsize/3)*1.5)-((RECsize/3)*1.5)),
               i*(CELLsize)+((CELLsize/3)*1)   +((RECsize/3)*2)            +((CELLsize/3)*( floor (j -(floor((j/3)-0.499)*3)))),
               j*(CELLsize)+((CELLsize/3)*3)   -((RECsize/3)*1)-(((CELLsize/3)*1.5)-((RECsize/3)*1.5))
      )

        fill(PaletteCLRS6);
        noStroke();
        quad(
               i*(CELLsize)                    +((RECsize/3)*2)              +((CELLsize/3)*( floor (j -(floor((j/3)-0.499)*3)))),
               j*(CELLsize)                    -((RECsize/3)*1),
               i*(CELLsize)+((CELLsize/3)*1)   +((RECsize/3)*2)              +((CELLsize/3)*( floor (j -(floor((j/3)-0.499)*3)))),
               j*(CELLsize)+((CELLsize/3)*1)   -((RECsize/3)*1),
               i*(CELLsize)+((CELLsize/3)*1)   +((RECsize/3)*2)              +((CELLsize/3)*( floor (j -(floor((j/3)-0.499)*3)))),
               j*(CELLsize)+((CELLsize/3)*3)   -((RECsize/3)*1)-(((CELLsize/3)*1.5)-((RECsize/3)*1.5)),
               i*(CELLsize)                    +((RECsize/3)*2)              +((CELLsize/3)*( floor (j -(floor((j/3)-0.499)*3)))),    //+(0.666*(CELLsize*((abs(sin(j*(90)))+1)/2))),
               j*(CELLsize)+((CELLsize/3)*2)   -((RECsize/3)*1)-(((CELLsize/3)*1.5)-((RECsize/3)*1.5))
      )

      }

/////////////////////

 if (
      j > (cos(i*(per1ScB*1.3)+(angle*(360/200)))*cos(i*(per2ScB*1.3)+(angle*(360/200)))*cos(i*(per3ScB*1.3)+(angle*(360/200)))*amplsc1B)+shift && 
      j < (cos(i*(per1Sc1B*1.3)-(angle*(360/200)))*cos(i*(per2Sc1B*1.3)-(angle*(360/200)))*cos(i*(per3Sc1B*1.3)-(angle*(360/200)))*amplsc1B)+(FGsize-shift )&& 
       //i > 3 && 
       i > (FGsize*F2x1)+((FGsize*F2x3)-(FGsize*F2x1))*(j/FGsize) && 
       i < ((FGsize*F2x2))+(((FGsize*F2x4))-((FGsize*F2x2)))*(j/FGsize)
  ) {
        //fill(FGpix);
        fill(PaletteCLRS8);
        noStroke();
        //rect(i*(cnvsize/FGsize)-((cnvsize/FGsize)/4)+((cnvsize/FGsize)/2),j*(cnvsize/FGsize)-((cnvsize/FGsize)/2),(cnvsize/FGsize)/4,RECsize);
      
        //let ANGL = 45;
        translate(-CELLsize*1.5, -CELLsize/3);
        quad(
               i*(CELLsize)                    +((RECsize/3)*2)      +((CELLsize/3)*( floor (j -(floor((j/3)-0.499)*3)))),
               j*(CELLsize)                    -((RECsize/3)*1),
               i*(CELLsize)+((CELLsize/3)*2)                         +((CELLsize/3)*( floor (j -(floor((j/3)-0.499)*3)))),
               j*(CELLsize)-((CELLsize/3)*1),
               i*(CELLsize)+((CELLsize/3)*2)                         +((CELLsize/3)*( floor (j -(floor((j/3)-0.499)*3)))),
               j*(CELLsize)+((CELLsize/3)*1)   -(((CELLsize/3)*1.5)-((RECsize/3)*1.5)),
               i*(CELLsize)                    +((RECsize/3)*2)      +((CELLsize/3)*( floor (j -(floor((j/3)-0.499)*3)))),  //  +(033*( floor (j -(floor((j/3)-0.499)*3))))  // +((CELLsize*(abs(sin(j*ANGL)))))
               j*(CELLsize)+((CELLsize/3)*2)   -((RECsize/3)*1) -(((CELLsize/3)*1.5)-((RECsize/3)*1.5))
      )
      
        fill(PaletteCLRS9);
        noStroke();
        quad(
               i*(CELLsize)+((CELLsize/3)*2)              +((CELLsize/3)*( floor (j -(floor((j/3)-0.499)*3)))),
               j*(CELLsize)-((CELLsize/3)*1),
               i*(CELLsize)+((CELLsize/3)*3)              +((CELLsize/3)*( floor (j -(floor((j/3)-0.499)*3)))),
               j*(CELLsize),
               i*(CELLsize)+((CELLsize/3)*3)              +((CELLsize/3)*( floor (j -(floor((j/3)-0.499)*3)))),
               j*(CELLsize)+((CELLsize/3)*2)-(((CELLsize/3)*1.5)-((RECsize/3)*1.5)),
               i*(CELLsize)+((CELLsize/3)*2)              +((CELLsize/3)*( floor (j -(floor((j/3)-0.499)*3)))),
               j*(CELLsize)+((CELLsize/3)*1)-(((CELLsize/3)*1.5)-((RECsize/3)*1.5))
      )

        fill(PaletteCLRS10);
        noStroke();
        quad(
               i*(CELLsize)+((CELLsize/3)*1)   +((RECsize/3)*2)            +((CELLsize/3)*( floor (j -(floor((j/3)-0.499)*3)))),
               j*(CELLsize)+((CELLsize/3)*1)   -((RECsize/3)*1),
               i*(CELLsize)+((CELLsize/3)*3)                               +((CELLsize/3)*( floor (j -(floor((j/3)-0.499)*3)))),
               j*(CELLsize),
               i*(CELLsize)+((CELLsize/3)*3)                               +((CELLsize/3)*( floor (j -(floor((j/3)-0.499)*3)))),
               j*(CELLsize)+((CELLsize/3)*2)-(((CELLsize/3)*1.5)-((RECsize/3)*1.5)),
               i*(CELLsize)+((CELLsize/3)*1)   +((RECsize/3)*2)            +((CELLsize/3)*( floor (j -(floor((j/3)-0.499)*3)))),
               j*(CELLsize)+((CELLsize/3)*3)   -((RECsize/3)*1)-(((CELLsize/3)*1.5)-((RECsize/3)*1.5))
      )

        fill(PaletteCLRS11);
        noStroke();
        quad(
               i*(CELLsize)                    +((RECsize/3)*2)              +((CELLsize/3)*( floor (j -(floor((j/3)-0.499)*3)))),
               j*(CELLsize)                    -((RECsize/3)*1),
               i*(CELLsize)+((CELLsize/3)*1)   +((RECsize/3)*2)              +((CELLsize/3)*( floor (j -(floor((j/3)-0.499)*3)))),
               j*(CELLsize)+((CELLsize/3)*1)   -((RECsize/3)*1),
               i*(CELLsize)+((CELLsize/3)*1)   +((RECsize/3)*2)              +((CELLsize/3)*( floor (j -(floor((j/3)-0.499)*3)))),
               j*(CELLsize)+((CELLsize/3)*3)   -((RECsize/3)*1)-(((CELLsize/3)*1.5)-((RECsize/3)*1.5)),
               i*(CELLsize)                    +((RECsize/3)*2)              +((CELLsize/3)*( floor (j -(floor((j/3)-0.499)*3)))),    //+(0.666*(CELLsize*((abs(sin(j*(90)))+1)/2))),
               j*(CELLsize)+((CELLsize/3)*2)   -((RECsize/3)*1)-(((CELLsize/3)*1.5)-((RECsize/3)*1.5))
      )

      }


////////////////////////////

 if (
      j > (cos(i*(per1ScC*1.3)+(angle*(360/200)))*cos(i*(per2ScC*1.3)+(angle*(360/200)))*cos(i*(per3ScC*1.3)+(angle*(360/200)))*amplsc1C)+shift && 
      j < (cos(i*(per1Sc1C*1.3)-(angle*(360/200)))*cos(i*(per2Sc1C*1.3)-(angle*(360/200)))*cos(i*(per3Sc1C*1.3)-(angle*(360/200)))*amplsc1C)+(FGsize-shift )&& 
       //i > 3 && 
       i > (FGsize*F3x1)+((FGsize*F3x3)-(FGsize*F3x1))*(j/FGsize) && 
       i < ((FGsize*F3x2))+(((FGsize*F3x4))-((FGsize*F3x2)))*(j/FGsize)
  ) {
        //fill(FGpix);
        fill(PaletteCLRS12);
        noStroke();
        //rect(i*(cnvsize/FGsize)-((cnvsize/FGsize)/4)+((cnvsize/FGsize)/2),j*(cnvsize/FGsize)-((cnvsize/FGsize)/2),(cnvsize/FGsize)/4,RECsize);
      
        //let ANGL = 45;
        translate(-CELLsize*1.5, -CELLsize/3);
        quad(
               i*(CELLsize)                    +((RECsize/3)*2)      +((CELLsize/3)*( floor (j -(floor((j/3)-0.499)*3)))),
               j*(CELLsize)                    -((RECsize/3)*1),
               i*(CELLsize)+((CELLsize/3)*2)                         +((CELLsize/3)*( floor (j -(floor((j/3)-0.499)*3)))),
               j*(CELLsize)-((CELLsize/3)*1),
               i*(CELLsize)+((CELLsize/3)*2)                         +((CELLsize/3)*( floor (j -(floor((j/3)-0.499)*3)))),
               j*(CELLsize)+((CELLsize/3)*1)   -(((CELLsize/3)*1.5)-((RECsize/3)*1.5)),
               i*(CELLsize)                    +((RECsize/3)*2)      +((CELLsize/3)*( floor (j -(floor((j/3)-0.499)*3)))),  //  +(033*( floor (j -(floor((j/3)-0.499)*3))))  // +((CELLsize*(abs(sin(j*ANGL)))))
               j*(CELLsize)+((CELLsize/3)*2)   -((RECsize/3)*1) -(((CELLsize/3)*1.5)-((RECsize/3)*1.5))
      )
      
        fill(PaletteCLRS13);
        noStroke();
        quad(
               i*(CELLsize)+((CELLsize/3)*2)              +((CELLsize/3)*( floor (j -(floor((j/3)-0.499)*3)))),
               j*(CELLsize)-((CELLsize/3)*1),
               i*(CELLsize)+((CELLsize/3)*3)              +((CELLsize/3)*( floor (j -(floor((j/3)-0.499)*3)))),
               j*(CELLsize),
               i*(CELLsize)+((CELLsize/3)*3)              +((CELLsize/3)*( floor (j -(floor((j/3)-0.499)*3)))),
               j*(CELLsize)+((CELLsize/3)*2)-(((CELLsize/3)*1.5)-((RECsize/3)*1.5)),
               i*(CELLsize)+((CELLsize/3)*2)              +((CELLsize/3)*( floor (j -(floor((j/3)-0.499)*3)))),
               j*(CELLsize)+((CELLsize/3)*1)-(((CELLsize/3)*1.5)-((RECsize/3)*1.5))
      )

        fill(PaletteCLRS14);
        noStroke();
        quad(
               i*(CELLsize)+((CELLsize/3)*1)   +((RECsize/3)*2)            +((CELLsize/3)*( floor (j -(floor((j/3)-0.499)*3)))),
               j*(CELLsize)+((CELLsize/3)*1)   -((RECsize/3)*1),
               i*(CELLsize)+((CELLsize/3)*3)                               +((CELLsize/3)*( floor (j -(floor((j/3)-0.499)*3)))),
               j*(CELLsize),
               i*(CELLsize)+((CELLsize/3)*3)                               +((CELLsize/3)*( floor (j -(floor((j/3)-0.499)*3)))),
               j*(CELLsize)+((CELLsize/3)*2)-(((CELLsize/3)*1.5)-((RECsize/3)*1.5)),
               i*(CELLsize)+((CELLsize/3)*1)   +((RECsize/3)*2)            +((CELLsize/3)*( floor (j -(floor((j/3)-0.499)*3)))),
               j*(CELLsize)+((CELLsize/3)*3)   -((RECsize/3)*1)-(((CELLsize/3)*1.5)-((RECsize/3)*1.5))
      )

        fill(PaletteCLRS15);
        noStroke();
        quad(
               i*(CELLsize)                    +((RECsize/3)*2)              +((CELLsize/3)*( floor (j -(floor((j/3)-0.499)*3)))),
               j*(CELLsize)                    -((RECsize/3)*1),
               i*(CELLsize)+((CELLsize/3)*1)   +((RECsize/3)*2)              +((CELLsize/3)*( floor (j -(floor((j/3)-0.499)*3)))),
               j*(CELLsize)+((CELLsize/3)*1)   -((RECsize/3)*1),
               i*(CELLsize)+((CELLsize/3)*1)   +((RECsize/3)*2)              +((CELLsize/3)*( floor (j -(floor((j/3)-0.499)*3)))),
               j*(CELLsize)+((CELLsize/3)*3)   -((RECsize/3)*1)-(((CELLsize/3)*1.5)-((RECsize/3)*1.5)),
               i*(CELLsize)                    +((RECsize/3)*2)              +((CELLsize/3)*( floor (j -(floor((j/3)-0.499)*3)))),    //+(0.666*(CELLsize*((abs(sin(j*(90)))+1)/2))),
               j*(CELLsize)+((CELLsize/3)*2)   -((RECsize/3)*1)-(((CELLsize/3)*1.5)-((RECsize/3)*1.5))
      )

      }


      ////////////////////////


       if (
      j > (cos(i*(per1ScD*1.3)+(angle*(360/200)))*cos(i*(per2ScD*1.3)+(angle*(360/200)))*cos(i*(per3ScD*1.3)+(angle*(360/200)))*amplsc1D)+shift && 
      j < (cos(i*(per1Sc1D*1.3)-(angle*(360/200)))*cos(i*(per2Sc1D*1.3)-(angle*(360/200)))*cos(i*(per3Sc1D*1.3)-(angle*(360/200)))*amplsc1D)+(FGsize-shift )&& 
       //i > 3 && 
       i > (FGsize*F4x1)+((FGsize*F4x3)-(FGsize*F4x1))*(j/FGsize) && 
       i < ((FGsize*F4x2))+(((FGsize*F4x4))-((FGsize*F4x2)))*(j/FGsize)
  ) {
        //fill(FGpix);
        fill(PaletteCLRS16);
        noStroke();
        //rect(i*(cnvsize/FGsize)-((cnvsize/FGsize)/4)+((cnvsize/FGsize)/2),j*(cnvsize/FGsize)-((cnvsize/FGsize)/2),(cnvsize/FGsize)/4,RECsize);
      
        //let ANGL = 45;
        translate(-CELLsize*1.5, -CELLsize/3);
        quad(
               i*(CELLsize)                    +((RECsize/3)*2)      +((CELLsize/3)*( floor (j -(floor((j/3)-0.499)*3)))),
               j*(CELLsize)                    -((RECsize/3)*1),
               i*(CELLsize)+((CELLsize/3)*2)                         +((CELLsize/3)*( floor (j -(floor((j/3)-0.499)*3)))),
               j*(CELLsize)-((CELLsize/3)*1),
               i*(CELLsize)+((CELLsize/3)*2)                         +((CELLsize/3)*( floor (j -(floor((j/3)-0.499)*3)))),
               j*(CELLsize)+((CELLsize/3)*1)   -(((CELLsize/3)*1.5)-((RECsize/3)*1.5)),
               i*(CELLsize)                    +((RECsize/3)*2)      +((CELLsize/3)*( floor (j -(floor((j/3)-0.499)*3)))),  //  +(033*( floor (j -(floor((j/3)-0.499)*3))))  // +((CELLsize*(abs(sin(j*ANGL)))))
               j*(CELLsize)+((CELLsize/3)*2)   -((RECsize/3)*1) -(((CELLsize/3)*1.5)-((RECsize/3)*1.5))
      )
      
        fill(PaletteCLRS17);
        noStroke();
        quad(
               i*(CELLsize)+((CELLsize/3)*2)              +((CELLsize/3)*( floor (j -(floor((j/3)-0.499)*3)))),
               j*(CELLsize)-((CELLsize/3)*1),
               i*(CELLsize)+((CELLsize/3)*3)              +((CELLsize/3)*( floor (j -(floor((j/3)-0.499)*3)))),
               j*(CELLsize),
               i*(CELLsize)+((CELLsize/3)*3)              +((CELLsize/3)*( floor (j -(floor((j/3)-0.499)*3)))),
               j*(CELLsize)+((CELLsize/3)*2)-(((CELLsize/3)*1.5)-((RECsize/3)*1.5)),
               i*(CELLsize)+((CELLsize/3)*2)              +((CELLsize/3)*( floor (j -(floor((j/3)-0.499)*3)))),
               j*(CELLsize)+((CELLsize/3)*1)-(((CELLsize/3)*1.5)-((RECsize/3)*1.5))
      )

        fill(PaletteCLRS18);
        noStroke();
        quad(
               i*(CELLsize)+((CELLsize/3)*1)   +((RECsize/3)*2)            +((CELLsize/3)*( floor (j -(floor((j/3)-0.499)*3)))),
               j*(CELLsize)+((CELLsize/3)*1)   -((RECsize/3)*1),
               i*(CELLsize)+((CELLsize/3)*3)                               +((CELLsize/3)*( floor (j -(floor((j/3)-0.499)*3)))),
               j*(CELLsize),
               i*(CELLsize)+((CELLsize/3)*3)                               +((CELLsize/3)*( floor (j -(floor((j/3)-0.499)*3)))),
               j*(CELLsize)+((CELLsize/3)*2)-(((CELLsize/3)*1.5)-((RECsize/3)*1.5)),
               i*(CELLsize)+((CELLsize/3)*1)   +((RECsize/3)*2)            +((CELLsize/3)*( floor (j -(floor((j/3)-0.499)*3)))),
               j*(CELLsize)+((CELLsize/3)*3)   -((RECsize/3)*1)-(((CELLsize/3)*1.5)-((RECsize/3)*1.5))
      )

        fill(PaletteCLRS19);
        noStroke();
        quad(
               i*(CELLsize)                    +((RECsize/3)*2)              +((CELLsize/3)*( floor (j -(floor((j/3)-0.499)*3)))),
               j*(CELLsize)                    -((RECsize/3)*1),
               i*(CELLsize)+((CELLsize/3)*1)   +((RECsize/3)*2)              +((CELLsize/3)*( floor (j -(floor((j/3)-0.499)*3)))),
               j*(CELLsize)+((CELLsize/3)*1)   -((RECsize/3)*1),
               i*(CELLsize)+((CELLsize/3)*1)   +((RECsize/3)*2)              +((CELLsize/3)*( floor (j -(floor((j/3)-0.499)*3)))),
               j*(CELLsize)+((CELLsize/3)*3)   -((RECsize/3)*1)-(((CELLsize/3)*1.5)-((RECsize/3)*1.5)),
               i*(CELLsize)                    +((RECsize/3)*2)              +((CELLsize/3)*( floor (j -(floor((j/3)-0.499)*3)))),    //+(0.666*(CELLsize*((abs(sin(j*(90)))+1)/2))),
               j*(CELLsize)+((CELLsize/3)*2)   -((RECsize/3)*1)-(((CELLsize/3)*1.5)-((RECsize/3)*1.5))
      )

      }

    }

pop();




 push();
        
        

if ( 
i*(CELLsize)>(cnvsize/6)*1 && i*(CELLsize)<(cnvsize/6)*5 && 
j*(CELLsize)>(cnvsize/6)*1 && j*(CELLsize)<(cnvsize/6)*5
) {

  
  fill(PaletteCLRS20);
  noStroke();
  rect(i*(CELLsize),j*(RECsize)+((cnvsize/12)*1),RECsize*0.618,RECsize*0.618 );
  //rect(i*(CELLsize),j*(RECsize)+((cnvsize/12)*1),RECsize*0.618,RECsize*0.618 );
  //fill(PaletteCLRS9);
  //rect(i*(RECsize)+((cnvsize/12)*1),j*(CELLsize),RECsize*0.618,RECsize*0.618 );
  //fill(PaletteCLRS10);
  //rect(i*(CELLsize),j*(CELLsize-RECsize)+((cnvsize/12)*1),(CELLsize-RECsize)*0.618,(CELLsize-RECsize)*0.618 );
  //fill(PaletteCLRS11);
  //rect(i*(CELLsize-RECsize)+((cnvsize/12)*1),j*(CELLsize),(CELLsize-RECsize)*0.618,(CELLsize-RECsize)*0.618 );


}
pop();






    }
    }
    
  
	//image(FG, 0, 0, FGsize, FGsize);

/*

    noStroke();
    for (let i=0; i<this.num; i++) {
    this.angle = i/(this.num-1) * 360 * this.period;
	  this.angle2 = i/(this.num-1) * 360 * this.period2;
	  this.angle3 = i/(this.num-1) * 360 * this.period3;
      this.y[i] = this.amplitude*cos(this.angle + this.shift)*cos(this.angle2 + this.shift)*cos(this.angle3 + this.shift)*(mainCnvs/1024);
      this.x[i] = i*this.sizeW;
      fill(this.clr1);
      //rect(this.x[i]+this.offset, this.y[i], this.sizeW/2, this.sizeH/2); 
      
quad(
  proportionGrid+this.x[i]+this.offset+this.sizeW/2,
  this.y[i],
  proportionGrid+this.x[i]+this.offset+this.sizeW/2,
  this.y[i]+this.sizeH/2-this.sizeD,
  proportionGrid+this.x[i]+this.offset+this.sizeW/2-this.sizeD,
  this.y[i]+this.sizeH/2,
  proportionGrid+this.x[i]+this.offset+this.sizeW/2-this.sizeD, 
  this.y[i]+this.sizeD
)


*/






}

function calculateDelaunay(points) {
  let pointsArray = [];
  for (let v of points) {
    pointsArray.push(v.x, v.y);
  }
  return new d3.Delaunay(pointsArray);
}


 function windowResized(){
	 
	cnvsize = Math.min(innerWidth, innerHeight);
  pix = cnvsize * 0.002;
  resizeCanvas(cnvsize, cnvsize); 
	cntrShift = FGsize/2;
  r = rRand*2;
  CELLsize = cnvsize/FGsize;

 }

function keyPressed() {
  if (key === 'g') {
		saveGif('Abstraction Interference_anim.gif',20);
  }  else if (key === 's') {
    saveCanvas('Abstraction Interference_image', 'png');
  }
}