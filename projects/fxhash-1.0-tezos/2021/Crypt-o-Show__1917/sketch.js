//Crypt-o-Show by M Plummer-Fernandez
//created for fxhash

//The saddest thing you'll see today is, once again, brought to you by Christie's. - https://twitter.com/MPtherealmvp/status/1442917552871526401

let gradient;
let wallgradient;
let ceilinggradient;
let sidegradient;
let tvgradient;
let scheme;
let p1,p2,p3,p4,b1,b2,b3,b4;
let p1t,p2t,p3t,p4t,b1t,b2t,b3t,b4t;
let ab1t, ab2t,ab3t,ab4t,ab5t, ab6t;
//features
let mode;
let squigWidth;
let title;
let totalart;

function setup() {
  createCanvas(min(window.innerWidth,window.innerHeight),min(window.innerWidth,window.innerHeight));
  pixelDensity(2);
  
  angleMode(DEGREES);
  textFont('Georgia');
  textSize(height/22);  
  
  let schemes = ['Salmon','Cool','Hectic','Gold']
  scheme = schemes[Math.floor(fxrand() *fxrand()*1.1* schemes.length)];
  
  let colors = []
  
  switch(scheme){
    case 'Salmon':
      colors = ['lightsalmon','thistle']
      break;
    case 'Cool':
      colors = ['powderblue','skyblue']
      break;
    case 'Hectic':
      colors = ['palegoldenrod','mediumorchid']
      break;
    case 'Gold':
      colors = ['lemonchiffon','gold']
      break;
  }
  
  // artmaker
  totalart = 0;
  ab1t=0;
  ab2t=0;
  ab3t=0;
  ab4t=0;
  ab5t=0;
  ab6t=0;
  
  //pos1
  if(fxrand()<0.8){
    p1 = true;
    p1t = artselector();
    totalart++
  }
  if(fxrand()<0.7){
    p2 = true;
    p2t = artselector();
    totalart++
  }
  if(fxrand()<0.8){
    p3 = true;
    p3t = artselector();
    totalart++
  }
  if(fxrand()<0.8){
    p4 = true;
    p4t = artselector();
    totalart++
  }
  if(fxrand()<0.7){
    b1 = true;
    b1t = artselector();
    totalart++
  }
  if(fxrand()<0.7){
    b2 = true;
    b2t = artselector();
    totalart++
  }
  if(fxrand()<0.7){
    b3 = true;
    b3t = artselector();
    totalart++
  }
  if(fxrand()<0.5){
    b4 = true;
    b4t = artselector();
    totalart++
  }

  gradient = createLinearGradient(30, width);
  gradient.colors(0.1, "grey", 0.5, "orange", 1, "yellow");
  
  wallgradient  = createLinearGradient(70, width);
  wallgradient.colors(0.1, colors[0], 0.3, "white",0.7, "white", 1, colors[1]);
  
  ceilinggradient  = createLinearGradient(90, width);
  ceilinggradient.colors(0.1, colors[1], 0.9, colors[0], 1, "white");
  
  sidegradient  = createLinearGradient(90, width);
  sidegradient.colors(0.1, colors[1], 1, "grey");
  
  tvgradient  = createLinearGradient(45, width/3);
  tvgradient.colors(0.1, "black",0.3, "black", 0.5, "silver",0.7, "black",1, "black");

  // Features
  let anagrams = ['THE CRISIS','ETHICS SIR','SHIT RICES','SHIT CRIES', 'RICH SITES','ITCH RISES','RICE SHITS','ICE SHIRTS','ICE SHIRTS', 'ITS RICHES', 'THRICE SIS', 'ITCHES SIR', 'IRIS CHEST','THIS CRIES','THIS CRIES','IRISH SECT', 'SHIRE TICS', 'SISTER CHI','CHRIS SITE','ISIS RETCH', 'RESIST CHI','CHITS RISE','HIC RESIST','HEIRS TICS','HI-RES TICS'];
  
  title = anagrams[Math.floor(fxrand() *anagrams.length)];
 
  mode = fxrand()>0.2?'Normal':'Fat';
  
  if(fxrand()>0.95){
    mode = 'Whalefat';
  }
  
   let features = {
    "Anagram":title,
    "Squiggly":mode,
     "Scheme":scheme,
     "Artworks":totalart,
     "AB Grids":ab1t,
     "AB Wrongers":ab2t,
     "AB Fakenzas":ab3t,
     "AB Singles":ab4t,
     "AB Dalolz":ab5t,
     "AB Perlins":ab6t 
  }
  
  console.log(features);
  window.$fxhashFeatures = features;
  
}

function artselector(){
  if(fxrand()>0.75){
    ab1t++;
  return "ab1";
    
  }else if(fxrand()>0.7){
    ab2t++;
  return "ab2";
  }else if(fxrand()>0.7){
    ab3t++;
  return "ab3";
  }else if(fxrand()>0.6){
    ab5t++;
  return "ab5";
  }else if(fxrand()>0.6){
    ab6t++;
  return "ab6";
}else{
  ab4t++;
  return "ab4";
}
  
}


function draw() {
  // features stuff
  if(mode=="Normal"){
    squigWidth = (height+width)/35;
    }else if(mode=="Fat"){
    //fat squiggle
    squigWidth = (height+width)/20;
    }else if(mode=="Whalefat"){
    //fat squiggle
    squigWidth = (height+width)/15;
    }
  
  push();
  background(240);
  noStroke();
  
  //floor
  fillGradient(gradient);
  rect(0,0,width,height);
  
  //left wall
  push();
  fillGradient(sidegradient);
  shearY(-15);
  rect(-width/80,0,width,height/1.333);
  pop();
  
  //ceiling
  push();
  fillGradient(ceilinggradient);
  shearY(15);
  translate(0,-height/1.95);
  rect(0,0,width,height/2);
  pop();
  
  //main wall
  fillGradient(wallgradient);
  
  shearY(15);
  rect(width/20,-width/55,width,height/1.35);

  // wall text 
  push();
  translate(width/8,height/8);

  fill(60);
  // gallery title
  text("THE CRYPT GALLERY X "+ title,0,0);
  pop();
  //
  
  translate(0,height/5);
  scale(1.3);
  
  //squiggle
  squiggle();
  translate(0,-height/10);
  
  //artworks

  //s1
  if(p1==true){
  generateArt(map(fxrand(),0,1,10,13),map(fxrand(),0,1,5,6),0,7,map(fxrand(),0,1,14,17),p1t);
  }
  //s2
  if(p2==true){
  generateArt(map(fxrand(),0,1,3.8,4),map(fxrand(),0,1,7,9),1,7,map(fxrand(),0,1,14,17),p2t);
  }
  //s3
  if(p3==true){
  generateArt(2.8,map(fxrand(),0,1,6,6.5),0,6,map(fxrand(),0,1,14,17),p3t);
  }
  //s4
  if(p4==true){
  generateArt(1.85,map(fxrand(),0,1,5.5,7),0,7,map(fxrand(),0,1,16,18),p4t);
  }
  //b1
  if(b1==true){
  generateArt(map(fxrand(),0,1,12,16),15,0,7,map(fxrand(),0,1,14,17),b1t);
  }
  //b2
  if(b2==true){
  generateArt(4,randr(42,150),0,7,randr(14,17),b2t);
  }
  //b3
  if(b3==true){
  generateArt(randr(2.3,2.5),150,1,7,randr(14,17),b3t);
  }
  //b4
 if(b4==true){ generateArt(randr(1.7,1.9),randr(18,30),0,6,randr(14,17),b4t);
}
  
  pop();
  // last task
  colorMode(RGB);
  noStroke();
  
  for (y=0; y<height; y+=4) {
    for (x=0; x<width; x+=4) {

      if(fxrand()>0.97){
        fill(randr(60,200),20);
        let di = randr(1,3);
        ellipse(x,y,di,di);
      }
    }
  }
  addGrain(random_int(10,14));
  noLoop();
}

function generateArt(ax, ay, orient, scr, artH, arttype){
  //artwork section
  push();
  //artwork position
  translate(height/ax*1,height/ay);  // spread things more X here
  //artwork
  let screensize = height/scr; //7
  let screenW = screensize*16/16;
  let screenH = screensize*9/16;
  
  if(orient != 0){
    screenH = screensize*16/16;
    screenW = screensize*9/16;
  }
  
  let screenX = 0;
  let screenY = height/10;
  let artworkH = height/artH; //14 to 16
  
  //tv fake shadow
  push();
  translate(2,2);
  fill(20,70);
  noStroke();
  rect(screenX,screenY,screenW, screenH,2,2);
  pop();
  
  //tv
  strokeWeight(2);
  stroke(220);
  //fill(80);
  fillGradient(tvgradient);
  rect(screenX,screenY,screenW, screenH);
  
  //nft
  colorMode(HSB);
  noStroke();
  fill(randr(0,255),randr(10,30),255);
  rect(screenX+(screenW - artworkH)/2,screenY+(screenH-artworkH)/2,artworkH,artworkH);
  translate(screenX+(screenW - artworkH/2)/2,screenY+(screenH-artworkH/2)/2);
  
  //AB SELECTOR
  switch(arttype){
    case 'ab1':
      ab1(artworkH*0.5,Math.floor(randr(3,10)));
      break;
    case 'ab2':
      ab2(artworkH*0.5,Math.floor(randr(6,9)));
      break;
    case 'ab3':
      ab3(artworkH*0.5,Math.floor(randr(4,6)));
      break;
    case 'ab4':
      ab4(artworkH*0.5,Math.floor(randr(2,6)));
      break;
    case 'ab5':
      ab5(artworkH*0.5,Math.floor(randr(4,10)));
      break;
    case 'ab6':
      ab6(artworkH*0.5,Math.floor(randr(3,10)));
      break;
  }
  
  pop();  
}

function squiggle(){
  
  colorMode(HSB);
  noStroke();

  push();
  
  translate(height/8,height/5);
   
  fill(200,245,245);
  
  let rs= randr(0,200);
  //let rf= randr(0,255);
  let rf= map(randr(0,255)+rs,0,300,0,255);

  let sa= randr(1.2,2.2);
  let sf= randr(3,9);
 
  for (let i = 0; i < 200; i++) { 
    fill(map(i,0,200,rs,rf),245,sin(i*5)*60+170);
   ellipse(map(i,0,200,0,(height+width)/4),(sin(i*sf)*40)*sin(i*sa)*1.5,squigWidth,squigWidth);  
  }
  
  pop();
  
  colorMode(RGB);
  strokeWeight(1);
}

//grids
function ab1(windowSize,gridSize){
  
  let bri = randr(150,200);
  let hu =  randr(0,150);
  let accentcolor = color(randr(0,255),randr(0,100),255);

  for (y=0; y<windowSize; y+=gridSize) {
    for (x=0; x<windowSize; x+=gridSize) {
      push();
      translate(x,y);
      
      colorMode(HSB);
      fill(hu+randr(0,105),randr(100,255),bri+randr(0,50));
      if(fxrand()>0.9){
        fill(randr(0,255),randr(100,255),50);
      }
      rect(0,0,gridSize,gridSize);
      
      if(fxrand()>0.2){
        fill(accentcolor);
        rect(0,0,gridSize,gridSize/2);
      }
      
      colorMode(HSB);
      pop();
      
    }
  }
}

//pegs
function ab2(windowSize,gridSize){
  
  windowSize = windowSize*0.95;
  let initx = gridSize-1;
  let inity = gridSize-1;
  
  
  for (y=0; y<windowSize-gridSize; y+=gridSize) {
    for (x=0; x<windowSize-gridSize; x+=gridSize) {
      push();
      translate(x,y);
      colorMode(HSB);
      
      if((fxrand()>0.4)){
        noStroke();
        fill(randr(0,255),200,225);
        ellipse(0,0,gridSize*0.8,gridSize*0.8);
        stroke(50,30);
        noFill();
        strokeWeight(1);
        line(0,0,initx,inity);
        
        noStroke();
        fill(randr(0,255),200,255);
        ellipse(initx,inity,gridSize*0.8,gridSize*0.8);
        initx = x;
        inity = y;
      }
      
      fill(randr(0,255),randr(0,255),255);
      if(fxrand()>0.4){
        ellipse(0,0,gridSize/1.5,gridSize/1.5);
      }
      if(fxrand()>0.3){
        ellipse(0,0,gridSize/2,gridSize/2);
      }
      colorMode(HSB);
      pop();
      
    }
  }
}
//fakenzas
function ab3(windowSize,gridSize){
  noFill();
  let flowdir = randr(0,90);
  let initthick = 1/gridSize;
  for (y=0; y<windowSize; y+=gridSize) {
    for (x=0; x<windowSize; x+=gridSize) {
      push();
      translate(x,y);
      
      colorMode(HSB);
      stroke(randr(0,255),randr(0,255),map(y+randr(0,30),0,windowSize,50,150),90);
      strokeWeight(randr(1,30)/10+initthick);

      rotate(flowdir);
      rotate(map(noise(x,y),0,1,0,55));
      if(fxrand()>0.4){
        
         line(0,0,0,gridSize*0.9);
      }
      colorMode(HSB);
      pop();
    }
  }
  noStroke();
}

//singles
function ab4(windowSize,gridSize){
  
  push();
  colorMode(HSB);
  fill(randr(20,240),40,20);
  rect(0,0,windowSize,windowSize);
  translate(windowSize/2, windowSize/2,-2);
  noFill();
  strokeWeight(randr(0.1,0.7));
  stroke(255);
  let circs = Math.floor(randr(9,20));
  for (x=0; x<circs; x++) {
    let diameter = randr(windowSize*0.8, windowSize*0.1);
    let offset = randr(-1,1);
    ellipse(offset,offset,diameter,diameter);
  }
    
  pop();
  
}

function ab5(windowSize,gridSize){
  
  for (y=0; y<windowSize; y+=gridSize) {
    for (x=0; x<windowSize; x+=gridSize) {
      push();
      translate(x,y,-1);
      
      colorMode(RGB);
      fill(20);
      if(fxrand()>0.5){
        stroke(255);
        strokeWeight(randr(0.1,1));
      }else{noStroke();}
      rect(0,0,gridSize,gridSize);
      colorMode(RGB);
      pop();
      
    }
  }
}

function ab6(windowSize,gridSize) {
  
  noStroke();
  let picWidth = windowSize*0.9;
  let choppyness = picWidth/(gridSize*8);
  let h = randr(10,180);
  let s = 20;
  let b = 255;
  fill(h,10,b,30);
  rect(0,0,picWidth,picWidth);
  
  strokeWeight(0.1);
  stroke(20,20);
  
  push();
  
  for(let i = 0; i<10; i++){
    h =h+2;
    s = s+6;
    b = b-20;
    fill(h,s,b);
    drawMountainShape(i*5, i*4, picWidth, choppyness); //change starting point
  }
  pop();

}

function drawMountainShape(xoffstart, yoffstart, picWidth, choppyness){
   // draw a polygon out of the wave points
  translate(0,picWidth/20);
  beginShape();
  for (let x = 0; x <= picWidth; x += choppyness) {
     let y = map(noise(xoffstart), 0, 1, 1,picWidth*1.2);
    // Set the vertex
    vertex(x, y);
    // Increment x dimension for noise
    xoffstart += 0.05;
  }
  vertex(picWidth, picWidth);
  vertex(0, picWidth);
  endShape(CLOSE);
}

function randr(min, max){
  let o = map(fxrand(),0,1,min,max);
  return o;
}

function random_num(a, b) {
    return a+(b-a)*fxrand()
  }

function random_int(a, b) {
  return Math.floor(random_num(a, b+1))
}


function addGrain(amount){
  loadPixels()

  for(let i=0;i<(width*pixelDensity())*(height*pixelDensity())*4;i+=4){
    let noise = map(fxrand(),0,1,-amount,amount)
    pixels[i] = pixels[i]+noise
    pixels[i+1] = pixels[i+1]+noise
    pixels[i+2] = pixels[i+2]+noise
    pixels[i+3] = pixels[i+3]+noise
  }

  updatePixels()
}


