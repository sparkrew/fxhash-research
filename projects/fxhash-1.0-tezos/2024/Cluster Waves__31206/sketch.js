//starting from the e = 500 then pix = 1 


cnvsize = Math.min(innerWidth, innerHeight);
 pix = cnvsize * 0.002;


//let cnvsize = 500;


let pg;
let res = 2;
let c1, c2;

let x, y, z;
let s = 40;
let seed;
let rw;

let i;
let j;

let fps = 12;

let blocks;
let glscale;

let colorhue = [8.5,17,25.5,34,42.5,51,59.5,68,76.5,85,93.5,102,110.5,119,127.5,136,144.5,153,161.5,170,178.5,187,195.5,204,212.5,221,229.5,238,246.5,255];
let colorsat = [25,30,35,40,45,50,55,60,65,70,75];
let colorBGsat = [60,65,70,75,80];
let colorBGlight = [50,55,60,65,70,75];

let clr1sat = [10,15,20,25,30];
let clr1light = [5,10,15,20];
let clr2sat = [10,15,20,25,30];
let clr2light = [80,85,90,95];
let clr3sat = [35,40,45,50,55,60,65];
let clr3light = [35,40,45,50,55,60,65];
let clr4sat = [85,90,95,100];
let clr4light = [85,90,95,100];
let clr5sat = [85,90,95,100];
let clr5light = [85,90,95,100];
let colorWVsat = [10,15,20,25,30,35,40,45];
let colorWVlight = [15,20,25,30,35,40,45,50,55,60,65,70,75,80,85];

let clr1 = [];
let clr2 = [];
let clr3 = [];
let clr4 = [];
let clr5 = [];

let faders = [];
let frotation =[0,90];

let wavespacing;
let wavespacingF;
let colorWV = [];
let elevate;
let elevateF;
let WVrot = [0,90,180,270];

let BGclr;
let SunX;
let SunY;

let additivesyn = [];
let modernAmixolydian = [20, 22, 24, 26, 28, 29, 31, 33, 34, 36, 38, 40, 41, 43, 45, 46, 48, 50, 52, 53, 55, 57, 58, 60, 62, 64, 65, 67, 69, 70, 72, 74, 76, 77, 79, 81, 82, 84, 86, 88, 89, 91, 93, 94, 96, 98,100,101,103,105,106,108,110,112,113,115,117,118,120,122,124,125,127];

let modernAmixolydianR = [76, 77, 79, 81, 82, 84, 86, 88, 89, 91, 93, 94, 96, 98,100,101,103,105,106,108,110,112,113,115,117,118,120,122,124,125,127,20, 22, 24, 26, 28, 29, 31, 33, 34, 36, 38, 40, 41, 43, 45, 46, 48, 50, 52, 53, 55, 57, 58, 60, 62, 64, 65, 67, 69, 70, 72, 74,];

let oscWaveTypes = ['sine','square','triangle','sawtooth'];
//let note; 

let globalseed = ($fx.rand()*1000000);
//let globalseed = 0.62222;

function setup() {
    //globalseed = random(1, 2)*100000;
    randomSeed(globalseed);
    noiseSeed(globalseed);
  
  createCanvas(cnvsize, cnvsize);
  colorMode(HSB)
  
  frameRate(fps);
  pg = createGraphics(s, s, WEBGL);
  pg.frameRate(fps);
  pg.lights();

  
  glscale = cnvsize / s;
  
  SunX = (random(500/4,500/2))+500/8;
  SunY = (random(500/8,500/4))+500/4;
  
  Frotate = (random(frotation));
  BGWrotate = (random(WVrot));
  
  clr1 = [random(colorhue),random(clr1sat),random(clr1light)];
  clr2 = [random(colorhue),random(clr2sat),random(clr2light)];
  clr3 = [random(colorhue),random(clr3sat),random(clr3light)];
  clr4 = [random(colorhue),random(clr4sat),random(clr4light)];
  clr5 = [random(colorhue),random(clr5sat),random(clr5light)];
  clr6 = [random(colorhue),random(clr3sat),random(clr3light)];
  clr7 = [random(colorhue),random(clr5sat),random(clr5light)];  
  
  wavespacing = random(0.25, 0.5);
  wavespacingF = random(0.33, 0.99);
  
  //wavespacing = random(0.25, 0.5);
  //wavespacingF = random(1.5, 3);
  //elevate = random(500/4,500/8);
  elevate = random(20,30);
  elevateF = random(38,44);
  colorWV = [random(colorhue),random(colorWVsat),random(colorWVlight)];
  
    BGclr = [random(colorhue), random(colorBGsat), random(colorBGlight)];  
  S1clr = [random(colorhue), random(colorBGsat), random(colorBGlight)];  
  S2clr = [random(colorhue), random(colorBGsat), random(colorBGlight)];  
  
    colorWV = [random(colorhue),random(colorWVsat),random(colorWVlight)];
  frontWVstroke = random(colorWV);
  bgWVstroke = random(colorWV);
  
  //sound synthesys 
  
  oscTypes = random(oscWaveTypes);
  
    for (let i=0; i<12; i++) {
    additivesyn[i] = new Addsynt();
  }
    userStartAudio();
  
}


  let tick = 0.0;

function draw() {
      userStartAudio();
  scale(glscale);
  randomSeed (globalseed);
  noStroke();
  background(BGclr[0],BGclr[1],BGclr[2],0); 
  
      //Sun1 design
      push();
      noFill();
      stroke(S1clr[0],S1clr[1]-5,S1clr[2]+5);
      strokeWeight((400*pix)/240/glscale);
  
  for (let i = 0; i < 100; i+=1) {
    ellipse((cos(frameCount+random(-10,10))+SunX/(500/40)+random(-0.1,0.1)),(sin(frameCount+random(-10,10))+SunY/(500/40)+random(-0.1,0.1)),i,i);
  }
      pop();
  
        //Sun2 design
      push();
      noFill();
      stroke(S2clr[0],S2clr[1]-5,S2clr[2]+5);
      strokeWeight((400*pix)/240/glscale);
  
  for (let i = 0; i < 100; i+=1) {
    rectMode(CENTER);
    rect((cos(frameCount+random(-10,10))+SunX/(500/40)+random(-0.1,0.1)),(sin(frameCount+random(-10,10))+SunY/(500/40)+random(-0.1,0.1)),i,i);
  }
      pop();
    
  

  
  
  

  //cluster1
  
   push();
  
  pg.noStroke();
  pg.background(0,0,0,0.5);
  pg.scale(2);
  pg.randomSeed (globalseed);
     
      pg.scale(0.5);
      pg.fill(random(90, 120));
    for (let x = random (-s/4, s/4); x < s/4; x += s/4.44) {
    for (let y = random (-s/4, s/4); y < s/4; y += s/4.44) {
    for (let z = random (-s/4, s/4); z < s/4; z += s/4.44) {
      for (let rw = random (-s/3, s/3); rw < s/3; rw += s/4.44 ) {
      pg.push();
      pg.translate(x, y, z);
      pg.rotateX(frameCount * x * 0.001);
      pg.rotateY(frameCount * y * 0.001);
      pg.rotateZ(frameCount * z * 0.001);
      pg.box(rw*2);
      pg.pop();
      }
    }
  }
}

  c1 = color(0);
  c2 = color(255);
        pop();

  

  
  
  
//Background waves 
  
      push();
      angleMode(DEGREES);
      //translate(cnvsize/2/glscale, cnvsize/2/glscale);
        translate(20, 20);
      rotate(BGWrotate);
      noFill();
      stroke(bgWVstroke);
      strokeWeight((400*pix)/320/glscale);
  
  
      for (let start = -40; start < 0.3125; start += wavespacing) {
        beginShape();
    for (let x = 1; x < 40; x += 2){
      let y = map(noise(x/6, tick/2), 0, 1, start, start+12);
        vertex(x-20, y+elevate-20);
    }
  endShape();
  }
  
  
      //for (let start = -100*pix*12.5/glscale; start < cnvsize*12.5/glscale; start += wavespacing*pix*12.5/glscale) {
        //beginShape();
    //for (let x = 0; x < cnvsize*12.5/glscale; x += 2){
      //let y = map(noise( x / 200, 0), 0, 1, start, start + 200*pix*12.5/glscale);
        //vertex(x*pix*12.5/glscale, y);
    //}
  //endShape();
  //}
  
  
  //for (let start = 0; start < 200*pix/glscale; start += wavespacing/12*pix) {
      //beginShape();
    //for (let x = 1; x < (cnvsize-2*pix)/glscale; x += 1){
      //let y = (map(noise(x*0.25, 0)/glscale, 0, 1, start, start + 200))+(elevate*pix/20);
      //vertex(x-cnvsize/2/glscale, y-cnvsize/2/glscale);
    //}
      //endShape();
  //}
  
      pop();

  
  // faderslider
  
    push();
    angleMode(DEGREES);
    translate(cnvsize/2/glscale, cnvsize/2/glscale);
    rotate(Frotate);
  
    for (let i = 0; i < cnvsize; i+=random(1,0.25)) {
    faders = new FaderSlider((i*s/20+s/40) - cnvsize/2/glscale, (s/40) - cnvsize/2/glscale, (i*s/20+s/40) - cnvsize/2/glscale, (cnvsize/glscale-(s/40)) - cnvsize/2/glscale, clr6,clr7);
        faders.display();
    }
    pop();
  
  
// Blocks
    for (let i = 0; i < pg.width; i+=res) { 
      for (let j = 0; j < pg.height; j+=res) {
         let index = ((j * pg.width) + i)*4;
        //let index = (j * pg.width) + i;
          
      let rr = pg.pixels[index + 0];
      let gg = pg.pixels[index + 1];
      let bb = pg.pixels[index + 2];
      let aa = pg.pixels[index + 3];
          
        let b = (rr + gg + bb) / 3;  
        //let b = rr; 
        let r = map(b,0, 100, 0, res);

        blocks = new Block(i, j, r, clr1, clr2, clr3, clr4, clr5);
        blocks.update();
        blocks.display();
          //print(blocks.length);
        }

      }
   // }
  
  
  //Frontal waves 
  
      push();
      //angleMode(DEGREES);
      //translate(cnvsize/2/glscale, cnvsize/2/glscale);
    //rotate(random(WVrot));
      noFill();
      stroke(frontWVstroke);
      strokeWeight((400*pix)/240/glscale);
   
  
  
    for (let start = -25; start < 0.4125; start += wavespacingF) {
        beginShape();
    for (let x = 0; x < 62.5; x += 1){
      let y = map(noise(x/60, tick/4), 0, 1, start, start+10);
        vertex(x, y+elevateF);
    }
  endShape();
  }
  
  
  //for (let start = 0; start < 400*pix/glscale; start += wavespacingF/6*pix) {
      //beginShape();
    //for (let x = 0; x < (cnvsize+1*pix)/glscale; x +=1){
      //let y = (map(noise(x*0.0125, 0)/glscale, 0, 1, start, start + 200))+(elevateF*pix/12);
      //vertex(x-cnvsize/2/glscale, y-cnvsize/2/glscale);     
    //}
      //endShape();
  //}
      
  pop();
  
  
  
  
  //frame design 
    push(); 
    noStroke();
    fill(BGclr[0],BGclr[1],BGclr[2]);
    rect(0, 0, s/40, cnvsize ); 
    rect(cnvsize/glscale-(s/40), 0, cnvsize/glscale-(s/40), cnvsize/glscale ); 
    rect(0, 0, cnvsize, (s/40) ); 
    rect(0, cnvsize/glscale-(s/40), cnvsize/glscale, s/40 ); 
    pop();
  
  //sound
  
    for (let i=0; i<12; i++) { 
    additivesyn[i].update();
    }
  
    tick += 0.01;
}


 function windowResized(){
   cnvsize = Math.min(innerWidth, innerHeight);
    pix = cnvsize * 0.002;
    glscale = cnvsize / s;
   resizeCanvas(cnvsize, cnvsize);
 }

function keyPressed() {
 if (key === '4') {
    res = 4;
  }
	 else if (key === '3') {
    res = 3;
  }
		 else if (key === '2') {
    res = 2;
  }
			 else if (key === '1') {
    res = 1;
  }
	else  if (key === 's') {
    saveCanvas('Pixel Cluster', 'png');
  }
}


