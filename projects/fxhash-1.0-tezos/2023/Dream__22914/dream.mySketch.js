//
// tierraSANTA "dream"
// carlos nieves
// #cNieves
// morelia, mich. mex. dic 2022


////////////////////////////////////////////////////////////////// for PARTICLES
let particles = []; /// position x hrz and y ver for each particule
let prtSze = [] ; /// particule size
let rangPos = 0 ; /// positive range
let rangNeg = 0 ; /// negative range
let sclePrtc = 2 ; /// scale particle

/////////////////////////////////////////////////////////////////////// ANOMALLY
let anomally = [] ; /// position x(hrz) and y(vert)
let anmlSze = [] ; // anomally size
let scleAnly = 6 ; /// scale anomally

/////////////////////////////////////////////////////////// for the COMPOSSITION
let   myNoise = 0 ; /// size moving incrementest
const noiseScale = 0.01/3; // bigger = complex

let xH = 0 ;
let yV = 0 ;
let i = 0 ;

let spkIncl = 20  ; // this is a percentage
let spkFinl =110  ; // this is a percentage
let xIncal = 0 ;
let yIncal = 0 ;
let xFinal = 0 ;
let yFinal = 0 ;

//#################################################### V A R I A B L E for hash
let prtcRnge = 50 ; // seed for the range size (prtcRnge,prtcRnge*sclePrtc)
let anmlRnge = 200 ; // seed for the range size (anmlRnge,anmlRnge*scleAnml)
let numSpikes = 18 ;
let amntAnly = 4 ; /// anomally instances from fxrand()
let amntPrtc = 15 ; // particles instances from fxrand()
let numCicles = 0 ; // number of times the program has run

//////////////////////////////////////////////////////////////////   COLOR

let colPletSet  = [] ;
let indexPalet  = 1 ;
let prtColBase  = 1 ;
let prtColCntr  = 1 ; // mint/turcoise
let anml1Ring   = 1 ;
let anml1ColBase= 1 ;
let anml2ColBase= 1 ;
let spkCol      = 1 ;
let somBra      = 4 ; // anomally shadow

let saTur = 0 ; // modifier for saturation to create scarcityTOKEN

/////////////////////////////////////////////////////////////// COLOR PALLETS

let prtColBse = 360 ; // particle color base. this is the INDEX to read the color palett.

////////////// pB  pC a1R a1B a2B  sC
colPletSet = [200,203, 45, 30, 30,120, //1 "Arizona & Co."
               70, 35, 29, 36, 36,105, //2 "atole"
              170,300,170, 60, 47,170, //3 "Bonito "
               15, 60, 60, 60, 60,344, //4 "egg"
              122,132,100,100, 77,215, //5 "ya le voy entendiendo"
              139, 60,145,145,145, 52, //6 "CORAZONverde"
               15,290,190,190,160, 30, //7 "menta & berries"
              294,290,273,190,180,203, //8 "human"
              191,192,193,194,195,196, //9 "it's a babayBoy"
              288,287,286,285,284,283, //10 "agua de Chia"
              290, 45,346,336,320,184, //11 "Mx: bandrea y cielo"
              270, 60,230,230,230,230, //12 "Mariana trench"
              ] ;


function preload() {
  colorMode(HSB,360,360,360,360) ;

  seed = int(fxrand() * 999999); // set SEED to control PRNG function required by fx(hash).
  randomSeed(seed);
  noiseSeed(seed);


  if (random(1000)<5) {  //___________________ scarcity TOKEN
    saTur=300; //_____________________________ reduces density
    }

  somBra=int(random(14));

  amntAnly =int(random(0, 5))+1; /// anomally instances from fxrand()
  amntPrtc =int(random(3,17))+1; // particles instances from fxrand()

  scleAnly = int(random(4, 6))+1; ///
  sclePrtc = int(random(0, 2))+1; ///

  indexPalet=int(random(0,12))+1; //range 1~n
  prtcCol= (indexPalet-1)*6; // to HSB values 1~360

    prtColBase  =colPletSet[prtcCol+0] ;
    prtColCntr  =colPletSet[prtcCol+1] ;
    anml1Ring   =colPletSet[prtcCol+2] ;
    anml1ColBase=colPletSet[prtcCol+3] ;
    anml2ColBase=colPletSet[prtcCol+4] ;
    spkCol      =colPletSet[prtcCol+5] ;

  }


function setup() { //###########################################################  SETUP

  colorMode(HSB,360);
  pixelDensity(1);
  noSmooth() ;
  ///////////////////
  windowResized();
  screenGrain() ;

  for(let i = 0; i < amntPrtc; i ++) { ; //_____________________________________ create PARTICLE'S array
    particles.push(createVector(int(random(1,width+50)), int(random(1,height+50)))); // position
    prtSze[i]= int(random(prtcRnge,prtcRnge*sclePrtc)) ; //
    }

  for(let i = 0; i < amntAnly; i ++) { ; //_____________________________________ create ANOMALIE'S array
    anomally.push(createVector(int(random(1,width+300)), int(random(1,height+300)))); //// position
    anmlSze[i]= int(random(anmlRnge,anmlRnge*scleAnly)) ;  //___________________ anomally size
    }

  window.$fxhashFeatures = { // ________________________________________________ populating FEATURES object
    "Amount of particles " : amntPrtc ,
    "Amount of anomallies ": amntAnly ,
    "Particle scale (/3)" : sclePrtc ,
    "Anomally scale (/6)" : scleAnly ,
    "Palette Num.(out of 12)"  : indexPalet ,
    "shadow intensity ou of 14" : somBra ,
    }


}

function draw() { //############################################################  DRAW
  //randomSeed(seed);
  //noiseSeed(seed);
  colorMode(HSB);
  image(Grn,0,0) ; //___________________________________________________________  grain for the texture of the screen
  blendMode(BLEND);
  background(0,0,360,somBra); //_____________________________________________________ "errase" the background litle by litle.




  for( let i = 0; i < amntPrtc; i ++) { //###################################### loop/counter to draw all PARTICLES
  //###############################################################################################################
		let xH = particles[i].x ; //________________________________________________ save position from array to Xh and yV
		let yV = particles[i].y ;

		pSize = prtSze[i] ; //______________________________________________________ keep actual particle size.

    rangPos=prtSze[i]/8 ; //____________________________________________________ range (in pixels) to randomize center
		rangNeg=prtSze[i]/8*-1 ;

    let myNoise = noise(frameCount, frameCount, frameCount);
		particles[i].x += cos((i) * (1.5 * myNoise));  //___________________________ newPOSITION x horizontal (2 pi)
    particles[i].y += sin((i) * (1.5 * myNoise));  //___________________________ newPOSITION y vertical

    if (random(1000)<1){ //_____________________________________________________ LIFE lenght of particles randomized jump to a new position
        particles[i].x = random(-100,width +100);
        particles[i].y = random(-100,height+100);
        background(0,0,0,3); //_________________________________________________ black the background litle by litle.
        }


    blendMode(BLEND) ;
    noStroke() ; //_____________________________________________________________ PARTICLE
    fill(prtColBase,360,360-saTur,10);circle(xH+random(-5,5),yV+random(-5,5),prtSze[i]+random(15)); //color base
    fill(prtColCntr,360,360-saTur,60) ; circle(xH,yV,(prtSze[i]*.30)+random(10)) ; // center color

    blendMode(BLEND) ;
    spkIncl = 20  ; // % of prtSze[i]
    spkFinl = 100 ; // % of prtSze[i]
    numSpikes = 425 ; // 425
    stroke(170,360,360,70) ; strokeWeight(.1); //_______________________________ spikes lighter blue DO NOT CHANGE
    drawSpikes(xH,yV,numSpikes);

    spkIncl = 20+random(6) ; //_________________________________________________ spikes white
    spkFinl = 147 ;
    numSpikes = 60 ; //60
    stroke(0,0,360) ;
    drawSpikes(xH,yV,numSpikes);

    spkIncl = 80+random(6) ;
    spkFinl = 110 ;
    drawSpikes(xH,yV,numSpikes);

    if (random(1000)<3){ //____________________________________________________ GLITCHY
      background(0,0,0,somBra); //__________________________________________________ black the background litle by litle.
      }

    }

  for( let i = 0; i < amntAnly ; i ++) { //##################################### loop to draw all ANOMALIES
  //############################################################################
   let xH = anomally[i].x ;
   let yV = anomally[i].y ;

   pSize = anmlSze[i] ;

   spkIncl = 75 ;
   spkFinl = 135 ;

   rangPos=anmlSze[i]/8 ;     /////////// range for the randomice the x,y center.
   rangNeg=anmlSze[i]/8*-1 ;  //

   let myNoise = noise(xH * noiseScale, yV * noiseScale, frameCount * noiseScale); // calculate my noise (x.y,z)
   anomally[i].x += cos((i) * (1.5 * myNoise));  //_____________________________  newPOSITION x horizontal
   anomally[i].y += sin((i) * (1.5 * myNoise));  // ____________________________  newPOSITION y vertical 6.283185307179586
   if (random(400)<1){ //_______________________________________________________  LIFE of anomallies randomized
     anomally[i].x = random(-300,width +300);
     anomally[i].y = random(-300,height+300);
     numCicles=numCicles+1 ;
     //if (numCicles>4) { console.log(numCicles) ; saveCanvas('tierraSANTA:dream', 'jpg'); noLoop() }
     if (numCicles>4) { fxpreview () }
    }

   blendMode(BLEND);
   noFill() ;
   strokeWeight(anmlSze[i]*.36) ;stroke(anml1Ring,60,300-saTur,110) ; //______________  anomally 1st RING
   circle(xH+(int(random(-18,18))),yV+(int(random(-18,18))),anmlSze[i]+random(12));

   blendMode(SOFT_LIGHT);   //__________________________________________________  anomally 1st color base
   strokeWeight(anmlSze[i]*.34) ; stroke(anml1ColBase,360-saTur,360,10) ;
   circle(xH,yV,anmlSze[i]*1.2);

   strokeWeight(anmlSze[i]*.32) ; stroke(350,300,30,somBra*2) ; //_____________________  dark red (sepia?)
   circle(xH+random(-12,12),yV+random(-12,12),(anmlSze[i]*1.7)) ; //____________  DARK halo/ring

   blendMode(BLEND);
   strokeWeight(anmlSze[i]*.25) ; stroke(anml2ColBase,360-saTur,360,40) ; //__________  anomally 2nd color base
   circle(xH+(int(random(-18,18))),yV+(int(random(-18,18))),anmlSze[i]*1.1);



   spkIncl = 95 ;
   spkFinl = 125 ;

   stroke(0,0,360,50) ; strokeWeight(.2) ; numSpikes = 40 ; //40_____________  NEST white
   drawNest(xH,yV,numSpikes);

   stroke(0,0,360,13) ; strokeWeight(4) ; numSpikes = 90 ; //90______________  NEST white
   drawNest(xH,yV,numSpikes);

   spkIncl = 98 ;
   spkFinl = 105 ;

   stroke(0,0,360,40) ; strokeWeight(.2) ; numSpikes = 100 ; //100____________   MORE white NEST
   drawNest(xH,yV,numSpikes);

   stroke(0,0,360,40) ; strokeWeight(.2) ; numSpikes = 100 ; //100____________   MORE white NEST
   drawNest(xH,yV,numSpikes);

   blendMode(OVERLAY) ;

   spkIncl =85 ;
   spkFinl = 120 ;

   numSpikes = 40 ; //40
   drawNest(xH,yV,numSpikes);

   stroke(0,0,360,360) ; strokeWeight(.4) ; numSpikes = 200 ; //200___________  SPIKES white
   drawSpikes(xH,yV,numSpikes);

   stroke(spkCol,360,360,360); strokeWeight(1) ; numSpikes = 100 ; //100_____  SPIKES COLOR
   drawSpikes(xH,yV,numSpikes);

   }

}

//############################################################################################  F U N C T I O N S
//###############################################################################################################

function drawSpikes(xH,yV,numSpikes) { ; //#####################################  spikes  F U N C T I O N
    //strokeWeight(.1) ;

    for (t=0 ; t < numSpikes ; t++) {

      angle  = int(random(1,360));

      xIncal = xH + cos(angle) * (pSize * random(spkIncl/200,(spkIncl+7)/200));
      yIncal = yV + sin(angle) * (pSize * random(spkIncl/200,(spkIncl+7)/200));

      xFinal = xH + cos(angle) * (pSize * random(spkFinl/200,(spkFinl+25)/200));
      yFinal = yV + sin(angle) * (pSize * random(spkFinl/200,(spkFinl+25)/200));


      line(xIncal,yIncal,xFinal,yFinal) ;

      }
      numSpikes = 0 ;

      }



function drawNest(xH,yV,numSpikes) { ; //#####################################  nest  F U N C T I O N
      push();

      blendMode(OVERLAY) ;
      strkNst=map(pSize,anmlRnge,(anmlRnge*scleAnly),0.4,3) ; //__________________ stroke NEST
      strokeWeight(strkNst) ;
      //console.log (anmlRnge + " "+ anmlRnge*scleAnly);

      noFill() ;

      rngRndm=pSize*.08 ; // the range to randomize the center is a percentage of the particleSize

      for (t=0 ; t < numSpikes ; t++) {
        circle(xH+random(-rngRndm,+rngRndm),yV+random(-rngRndm,rngRndm), pSize*random(spkIncl/100,spkFinl/100)) ;

        }
      pop();
      numSpikes = 0 ;
      }


function screenGrain(){ //###################################################### grain for the texture of the screen

  Grn = createGraphics(width,height); ///////// grain SCREEN
  Grn.background(0,0);
  Grn.colorMode(HSB,360) ;
  Grn.blendMode(OVERLAY);

  for ( let x=0 ; x<width ; x=x+3.5 ){  //////////////////////////// texture
    for ( let y=0 ; y<height ; y=y+9 ){

    Grn.stroke(230,100,110,15);
    Grn.strokeWeight(.1) ;
    Grn.line(x+int(random(-3,2)),y-random(4),x+int(random(-3,3)),y+random(6));

    Grn.strokeWeight(.3);
    Grn.stroke(230,360,290);
    Grn.point(x+random(3),y+random(3));
        }
      }

    }



function keyReleased() {  //####################################################  save canvas

  if (key == 's' || key == 'S') {
    saveCanvas('tierraSANTA:dream', 'jpg');
    //console.log ("saved");
    }

  }

function windowResized() {   //#################################################  rezise window

    resizeCanvas(windowWidth,windowHeight);
    //screenGrain() ;
    background(0,0,360) ;
}
