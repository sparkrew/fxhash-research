//// Witch Doctor
//// by Ed Cavett
//// June 2022

//// fxhash 1.0 Compliant NFT
//// 22 names;
//// 16 types;


let xloc = 0;
let yloc = 500;
let advancex = 0;
let advancey = 0;
let term;
let myFont;

function preload() {
  myFont = loadFont('avFont.ttf');
}


function setup() {
  createCanvas(800, 800);
  textFont(myFont);
  let hashGen = fxrand()*10000;
  randomSeed(hashGen);
  noiseSeed(hashGen);
  let p1 = floor(random(10));
  let p2 = floor(random(10));
  backColors(p1,p2);

  rectMode(CENTER);
  advancex = 250;
  advancey = 500;
  term = random(10,50);
}

function draw() {
  xloc += advancex;
  if (xloc > width-(advancex*0.5)) {
    yloc += advancey;
    xloc = advancex;
    if (yloc > height-(advancey*0.5)) {
      // noLoop();
      yloc = 500;
    }
  }
  push();
  translate(width/2,height*0.62);
  // tubing();
  // translate(xloc,yloc);
      if (random() < 0.35) {
  for (let n = 0; n < 15; n++) {
    if (random() < 0.65) {
        beaker();
      }
    }
  }
  pop();
  if (frameCount > term) {
    translate(width*0.5,height*0.92);
    nameMaker();
    fxpreview();
    noLoop();
  }
}

function beaker() {
  let colrStyle = floor(random()*4);
  let size = random(1,1.5);
  let level = random(0,QUARTER_PI);
  // advancex = 200*size;
  // advancey = 400*size;
  let colr = random(255);
  let colg = random(255);
  let colb = random(255);
  push();
  stroke(0,240,255,100);
  // fill(0,240,255,65);
  fill(colr,colg,colb,65);
  ellipse(0,0,200*size,200*size);
  rect(0,-195*size,66*size,200*size);

  if (colrStyle === 0) {
    fill(0,255,0,128);
    stroke(0,175,0,128);
  }
  if (colrStyle === 1) {
    fill(255,0,0,128);
    stroke(175,0,0,128);
  }
  if (colrStyle === 2) {
    fill(255,150,0,128);
    stroke(175,80,0,128);
  }
  if (colrStyle === 3) {
    fill(255,128);
    stroke(175,128);
  }
    arc(0,0,195*size,195*size,level,PI-level,CHORD);
  
  strokeWeight(10);
  line(-50*size,100*size,50*size,100*size);
  for (let n = 0; n < 25; n++) {
    let pos = p5.Vector.random2D();
    pos.mult((random(195*size)-5)*0.5);
    let z = random(15*size)+1;
    strokeWeight(2);
    ellipse(pos.x,pos.y,z,z);
    
    pos = createVector(random(-66*size*0.4,66*size*0.4),
                       random(-200*size*0.5,200*size*0.5));
    z = random(15*size)+1;
    ellipse(pos.x,pos.y-(100*size),z,z);
    
  }
  pop();
}


function nameMaker() {
  let type = [];
  let name = [];
  type.push('Potion');
  type.push('Elixir');
  type.push('Compound');
  type.push('Antidote');
  type.push('Catalyst');
  type.push('Reagent');
  type.push('Tonic');
  type.push('Brew');
  type.push('Crack');
  type.push('Restoritive');
  type.push('Serum');
  type.push('Antiserum');
  type.push('Powder');
  type.push('Liquid');
  type.push('Tincture');
  type.push('Regia');
  type.push('Paste');
  type.push('Snort');
  type.push('Ooh-Ah-Aah');
  type.push('Flatulence');
  
  
  name.push('Ooh-Eeh');
  name.push('Love');
  name.push('Truth');
  name.push('Freaky Friday');
  name.push('Doppleganger');
  name.push('Beauty');
  name.push('Wisdom');
  name.push('Immortality');
  name.push('Invulnerability');
  name.push('Memory');
  name.push('Revenge');
  name.push('Secret');
  name.push('Diet');
  name.push('Curse');
  name.push('AntiCurse');
  name.push('Hex');
  name.push('Antihex');
  name.push('The Everything');
  name.push('The Nothing');
  name.push('Flight');
  name.push('Ghost');
  name.push('Rain');
  name.push('Blood');
  name.push('Bile');
  name.push('Humors');
  name.push('Laughing');
  name.push('Crying');
  name.push('Sneezing');
  name.push('Sleeping');
  name.push('Zombie');
  name.push('Voodoo');
  
  let typePick = floor(random(type.length));
  let namePick = floor(random(name.length));
  textAlign(CENTER);
  textSize(60);
  let num = "";
  let label =name[namePick]+" "+type[typePick];
  if (random() < 0.1) {
    numWhat = floor(random(9))+1;
    num = "#"+numWhat;
    label += " "+num;
  }
  let labelWide = textWidth(label+"  ");
  push();
  rectMode(CENTER);
  stroke(255,200,0,255);
  fill(0,128);
  rect(0,0,labelWide+textWidth(" "),110,20);
  noStroke();
  fill(255,255);
  translate(0,15);
  text(label,0,0);  
  pop();
  
}


function backColors(bstyle,sstyle){
  let xloc = random(width);
  let yloc = random(height);
  if (bstyle === 0) {
    background(50,50,50,255); /// light black
  }
  if (bstyle === 1) {
    background(128,128,128,255); /// gray
  }
  if (bstyle === 2) {
    background(255,255,0,255); /// yellow
  }
  if (bstyle === 3) {
    background(255,155,0,255); /// orangne
  }
  if (bstyle === 4) {
    background(255,0,0,255); /// red
  }
  if (bstyle === 5) {
    background(150,0,255,255); /// purple
  }  
  if (bstyle === 6) {
    background(0,200,255,255); /// blue
  }
  if (bstyle === 7) {
    background(0,255,55,255); /// green
  }
  if (bstyle === 8) {
    background(255,155,55,255); /// brown
  }
  if (bstyle === 9) {
    background(255,255,255,255); /// white
  }
  for (let r = 1; r < width; r++) {
    let a = map(r,0,width,175,0);

    if (sstyle === 0) {
      stroke(0,0,0,a);
    }
    if (sstyle === 1) {
      stroke(75,75,75,a);
    }
    if (sstyle === 2) {
      stroke(150,150,0,a);
    }
    if (sstyle === 3) {
      stroke(150,75,0,a);
    }
    if (sstyle === 4) {
      stroke(150,0,0,a);
    }
    if (sstyle === 5) {
      stroke(25,0,75,a);
    }
    if (sstyle === 6) {
      stroke(0,25,75,a);
    }
    if (sstyle === 7) {
      stroke(0,50,25,a);
    }
    if (sstyle === 8) {
      stroke(150,75,40,a);
    }
    if (sstyle === 9) {
      stroke(175,160,160,a);
    }
    
    noFill();
    strokeWeight(3);
    circle(xloc,yloc,r);
  }
  let off1 = random(10000);
  let off2 = random(10000);
  let pick = floor(random(10));
  let bstyleAdj = bstyle+1;
  if (bstyleAdj === 10) {
    bstyleAdj === 9;
  }
  for (let y = -height*0.1; y < height; y ++) {
    let a = map(y,0,height,128,0);
    strokeWeight(5);
    lineColors(bstyleAdj,a);
    let y1 = noise(off1,y*0.01)*(height*0.1);
    let y2 = noise(off2,y*0.01)*(height*0.1);
    line(0,y1+y,width,y+y2);
  }
  for (let size = width; size > width*0.9; size--) {
    push();
    noFill();
    rectMode(CENTER);
    let a = map(size,width,width*0.9,32,0);
    stroke(0,a);
    let ysize = map(size,width,width*0.9,height,height*0.9);
    rect(width*0.5,height*0.5,size,ysize);
    pop();
  }
}

function lineColors(sstyle,a) {
    if (sstyle === 0) {
      stroke(0,0,0,a);
    }
    if (sstyle === 1) {
      stroke(75,75,75,a);
    }
    if (sstyle === 2) {
      stroke(150,150,0,a);
    }
    if (sstyle === 3) {
      stroke(150,75,0,a);
    }
    if (sstyle === 4) {
      stroke(150,0,0,a);
    }
    if (sstyle === 5) {
      stroke(25,0,75,a);
    }
    if (sstyle === 6) {
      stroke(0,25,75,a);
    }
    if (sstyle === 7) {
      stroke(0,50,25,a);
    }
    if (sstyle === 8) {
      stroke(150,75,40,a);
    }
    if (sstyle === 9) {
      stroke(175,160,160,a);
    }  
}



function keyPressed(){
  if (keyCode === DOWN_ARROW) {
    saveCanvas('ed_cavett_witchDoctor','png');
  }
}



function mousePressed() {
  if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
    let fs = fullscreen();
    fullscreen(!fs);
  }
}
