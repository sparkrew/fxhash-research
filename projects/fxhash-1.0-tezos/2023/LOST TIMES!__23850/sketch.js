//LOST TIMES!

//NFT Art & Code © by MASK! ' Pedro.Soares
//https://twitter.com/themask_art
//https://www.fxhash.xyz/u/MASK!
//https://www.instagram.com/fallen.mask/
//https://themask.myportfolio.com/

// LOST TIMES! by MASK!, January 2023

const mainSeed = fxrand() * 99999999
function rnd_inter(min, max) {return fxrand() * (max - min) + min;}
function rnd_inteiros(min, max) {min = Math.ceil(min);max = Math.floor(max);return     Math.floor(fxrand() * (max - min + 1)) + min;}
var xx=rnd_inteiros(500,2000)
var yy=rnd_inteiros(250,2000)
let numCells
let bmode = rnd_inteiros(0,2);

function getrows () {
  return rnd_inteiros(10,200);
}

function getcols () {
  return rnd_inteiros(10,200);
}

let versions=rnd_inteiros(1,11)
//let versions=11
//Thank you to aleks for helping me with the randomized color palette!
function getPalette() {
  if (fxrand() > .90) return "Vintage"
  if (fxrand() > .85) return "Mostard"
  if (fxrand() > .80) return "Gums"  
  if (fxrand() > .75) return "Dreams"  
  if (fxrand() > .70) return "Olive"
  if (fxrand() > .65) return "Sun Flower"
  if (fxrand() > .60) return "Sun Burn"
  if (fxrand() > .55) return "Bagget"
  if (fxrand() > .50) return "Lime"
  if (fxrand() > .45) return "Bones"
  if (fxrand() > .40) return "Green Pastel"
  if (fxrand() > .35) return "Rainbow Rare"
  if (fxrand() > .30) return "Classy Rare"
  if (fxrand() > .25) return "Cakes"
  if (fxrand() > .20) return "Green"
  if (fxrand() > .10) return "EVA-01"
  return "Chocolat Rare"
}

let palettes = [

  {
      name: "Cakes",
      colors: ['#264653', '#2a9d8f', '#e9c46a', '#f4a261'],
      bgcolors: ['#e76f51'],
    },
  
    {
      name: "Vintage",
      colors: ['#B08BBB', '#ECA869', '#F5F5DC'],
      bgcolors: ['#B5D5C5'],
    },
  
    {
      name: "Sun Flower",
      colors: ['#fb8500', '#ffb703', '#8ecae6', '#023047'],
      bgcolors: ['#CC3636'],
    },
  
    {
      name: "Bones",
      colors: ['#d5bdaf', '#e3d5ca', '#f5ebe0', '#d6ccc2', '#000000', '#edede9'],
      bgcolors: ['#3b3b39'],
    },
  
    {
      name: "Green Pastel",
      colors: ['#d4a373', '#faedcd', '#fefae0', '#ccd5ae'],
      bgcolors: ['#9ea189'],
    },
  
    {
      name: "Bagget",
      colors: ['#1d3557', '#a8dadc', '#f1faee', '#e63946'],
      bgcolors: ['#457b9d'],
    },
  
    {
      name: "Sun Burn",
      colors: ['#003049', '#d62828', '#f77f00', '#fcbf49'],
      bgcolors: ['#bfb995'],
    },
  
    {
      name: "Chocolat Rare",
      colors: ['#CEAB93', '#E3CAA5', '#FFFBE9'],
      bgcolors: ['#AD8B73'],
    },
  
    {
      name: "Mostard",
      colors: ['#61481C', '#BF9742', '#E6B325'],
      bgcolors: ['#A47E3B'],
    },
  
    {
      name: "Classy Rare",
      colors: ['#001219', '#005f73', '#0a9396', '#94d2bd', '#ee9b00', '#ca6702', '#bb3e03', '#ae2012', '#9b2226'],
      bgcolors: ['#c9bb8f'],
    },
  
    {
      name: "Gums",
      colors: ['#0081a7', '#00afb9', '#fdfcdc', '#f07167'],
      bgcolors: ['#c49d7a'],
    },
  
    {
      name: "Dreams",
      colors: ['#181D31', '#E6DDC4', '#F0E9D2'],
      bgcolors: ['#678983'],
    },
  
    {
      name: "Green",
      colors: ['#E8C07D', '#CC704B', '#614124'],
      bgcolors: ['#9FC088'],
    },
  
    {
      name: "Rainbow Rare",
      colors: ['#f94144', '#f3722c', '#f8961e', '#f9844a', '#90be6d', '#43aa8b', '#4d908e', '#577590', '#277da1'],
      bgcolors: ['#FF7B54'],
    },


    {
      name: "Olive",
      colors: ['#582f0e', '#7f4f24', '#936639', '#a68a64', '#b6ad90', '#43aa8b', '#a4ac86', '#656d4a', '#414833'],
      bgcolors: ['#c2c5aa'],
    },

    {
      name: "EVA-01",
      colors: ['#000000', '#100113', '#26bd32', '#80ef89'],
      bgcolors: ['#41065c'],
    },

    {
      name: "Lime",
      colors: ['#367E18', '#F57328', '#CC3636'],
      bgcolors: ['#FFE9A0'],
    },
];


window.$fxhashFeatures = {
  "Palette": getPalette(),
  "Rows": getrows(),
  "Columns": getcols(),
  "Version": versions,
  "BlendMode": bmode,

};


let paletteIndex = function(paletteName) {
  for (let i = 0; i < palettes.length; i++) {
    if (palettes[i].name === paletteName)
      return i;
  }
  return -1;
}

let randomPalette = Math.floor(fxrand() * palettes)
let palette = paletteIndex(window.$fxhashFeatures["Palette"]);


function keyPressed(){
  if(keyCode === 83){
    saveCanvas(canvas,"lost times","png");
  }
}


function setup() {
  Math.random = fxrand,
  randomSeed(int(mainSeed)),
  noiseSeed(int(mainSeed)),

  pixelDensity(2);
  a=xx
  b=yy
  createCanvas(a, b);

}


function draw(){ 
  push();
  background(random(palettes[palette].bgcolors))
  let lit = 0.0003;
  let lb = 0
  noStroke();
  for(o = rnd_inteiros(0,50); o < b; o+=50){
    for(k = 20; k < a; k+=50){
      var noi = noise(o*lit,k*lit, lb)
      var noi1 = noise(k*lit, lb, o*lit)
      var noi2 = noise(lb,k*lit,o*lit)
      fill(noi*150, noi1*150, noi2*150)
     
      rect(o,k,50)
    }
    lb += 0.0003
  }

  let cols = getcols();
  let rows = getrows();
  let numCells = cols * rows;
  let cellSize = width / numCells;

  //grid
  let gw = width * 0.8;
  let gh = height * 0.8;
  //cell
  let cw = gw / cols;
  let ch = gh / rows;
  //margin
  let mx = (width - gw) * 0.5;
  let my = (height - gh) * 0.5;

  let x, y;
  let xoff = 0;
  let yoff = 0;

  noFill();
  translate (mx, my);
    nx = map(noise(xoff), 0, 1, 0, a);
    ny = map(noise(yoff), 0, 1, 0, b);
    xoff += 0.01;
    yoff += 0.01;


if( bmode == 0 ){
  blendMode(BLEND);
} else if( bmode == 1 ){
  blendMode(BURN);
} else if( bmode == 2 ){
  blendMode(MULTIPLY);
}



if(versions==1){  

  for (let i = 0; i < numCells; i++){
    x = (i % cols) * cw;
    y = Math.floor(i%rows) * ch;
    
    stroke(random(palettes[palette].colors));
    strokeWeight(1);
    noFill();
    beginShape();
    ellipse(random(x),random(y),cellSize,cellSize);
    vertex(x,x)
    quadraticVertex(x,nx,ny,y);
    square(x,y,random(3,10))
    endShape();
  }
}

if(versions==2){  

  for (let i = 0; i < numCells; i++){
    x = (i % cols) * cw;
    y = Math.floor(i/cols) * ch;
    
    stroke(random(palettes[palette].colors));
    strokeWeight(1);
    noFill();
    beginShape();
    ellipse(random(x),random(y),cellSize,cellSize);
    vertex(y,y)
    quadraticVertex(x,nx,ny,y);
    circle(x,y,random(3,10))
    endShape();
  }
}  

if(versions==3){  

  for (let i = 0; i < numCells; i++){
    x = (i % cols) * cw;
    y = Math.floor(i/cols) * ch;

    stroke(random(palettes[palette].colors));
    strokeWeight(1);
    noFill();
    beginShape();
    ellipse(random(x),random(y),cellSize,cellSize);
    vertex(x,y)
    quadraticVertex(x,nx,ny,y);
    square(x,y,random(3,10))
    endShape();
  }
}  
  
if(versions==4){  

  for (let i = 0; i < numCells; i++){
    x = (i % cols) * cw;
    y = Math.floor(i/cols) * ch;

    stroke(random(palettes[palette].colors));
    strokeWeight(1);
    noFill();
    beginShape();
    ellipse(random(x),random(y),cellSize,cellSize);
    vertex(x,y)
    quadraticVertex(x,x,y,y);
    circle(x,y,random(3,10))
    endShape();
  }
} 
  
if(versions==5){  

  for (let i = 0; i < numCells; i++){
    x = (i % cols) * cw;
    y = Math.floor(i/cols) * ch;

    stroke(random(palettes[palette].colors));
    strokeWeight(1);
    noFill();
    beginShape();
    ellipse(random(x),random(y),cellSize,cellSize);
    vertex(x,y)
    quadraticVertex(nx,nx,y,y);
    circle(x,y,random(3,10))
    endShape();
  }
} 

if(versions==6){  

  for (let i = 0; i < numCells; i++){
    x = (i % cols) * cw;
    y = Math.floor(i/cols) * ch;
        
    stroke(random(palettes[palette].colors));
    strokeWeight(1);
    noFill();
    beginShape();
    ellipse(random(x),random(y),cellSize,cellSize);
    vertex(x,y)
    quadraticVertex(x,x,ny,ny);
    square(x,y,random(3,10))
    endShape();
  }
} 

if(versions==7){  

  for (let i = 0; i < numCells; i++){
    x = (i % cols) * cw;
    y = Math.floor(i/cols) * ch;
          
    stroke(random(palettes[palette].colors));
    strokeWeight(1);
    noFill();
    beginShape();
    ellipse(random(x),random(y),cellSize,cellSize);
    vertex(nx,ny)
    quadraticVertex(x,x,ny,y);
    square(x,y,random(3,10))
    endShape();
  }
} 
    
if(versions==8){  

  for (let i = 0; i < numCells; i++){
    x = (i % cols) * cw;
    y = Math.floor(i/cols) * ch;
            
    stroke(random(palettes[palette].colors));
    strokeWeight(1);
    noFill();
        
    beginShape();
    ellipse(random(x),random(y),cellSize,cellSize);
    vertex(x,ny)
    quadraticVertex(x,x,nx,ny);
    circle(x,y,random(3,10))
    endShape();
  }
} 

if(versions==9){  

  for (let i = 0; i < numCells; i++){
    x = (i % cols) * cw;
    y = Math.floor(i/cols) * ch;
              
    stroke(random(palettes[palette].colors));
    strokeWeight(1);
    noFill();
    beginShape();
    ellipse(random(x),random(y),cellSize,cellSize);
    vertex(x,ny)
    quadraticVertex(x,y,nx,ny);
    circle(x,y,random(3,10))
    endShape();
  }
} 

if(versions==10){  

  for (let i = 0; i < numCells; i++){
    x = (i % cols) * cw;
    y = Math.floor(i/cols) * ch;

    stroke(random(palettes[palette].colors));
    strokeWeight(1);
    noFill();
    beginShape();
    ellipse(random(x),random(y),cellSize,cellSize);
    vertex(y,y)
    quadraticVertex(y,ny,nx,ny);
    circle(x,y,random(3,10))
    endShape();
  }
} 

if(versions==11){  

  for (let i = 0; i < numCells; i++){
    x = (i % cols) * cw;
    y = Math.floor(i/cols) * ch;
  
    stroke(random(palettes[palette].colors));
    strokeWeight(1);
    noFill();
    beginShape();
    ellipse(random(x),random(y),cellSize,cellSize);
    vertex(y,x)
    quadraticVertex(x,x,ny,cos(ny));
    circle(x,y,random(3,10))
    endShape();
  }
} 

noLoop();


//Grain base on Gorilla Sun Article @ https://www.fxhash.xyz/article/all-about-that-grain
function addGrain(gA) {
loadPixels();
  let d = pixelDensity();
  let halfImage = 4 * (width * d) * (height * d);
    for (let ii = 0; ii < halfImage; ii += 4) {
      grain = map(fxrand(),2,1,-gA, gA);
      if(pixels[ii] < 12 && pixels[ii+1] < 12 && pixels[ii+2] < 12){
        pixels[ii] = pixels[ii] + grain/2;
        pixels[ii + 1] = pixels[ii + 1] + grain/2;
        pixels[ii + 2] = pixels[ii + 2] + grain/2;
     
      }else{
        pixels[ii] = pixels[ii] + grain/2;
        pixels[ii + 1] = pixels[ii + 1] + grain/2;
        pixels[ii + 2] = pixels[ii + 2] + grain/2;
      }
    }
    updatePixels();
  }
 addGrain(35); 
}

 
console.log(window.$fxhashFeatures);
console.log("LOST TIMES!")
console.log("A generative work by MASK! your hash is "+fxhash);
console.log("Press 's' to Save")


fxpreview();

