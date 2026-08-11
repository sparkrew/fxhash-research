
//code by @dev_subjective

let pp1,pp2,pp3,pp4,pp5,pp6,fund,invasionR,invasion;

let  r51,r52,r53,r54,r55,r56,r57;


  function rnd_int(min, max) {min = Math.ceil(min);max = Math.floor(max);return     Math.floor(fxrand() * (max - min + 1)) + min;}
    
  
  r51=rnd_int(1,10)
  r52=rnd_int(1,10)
  r53=rnd_int(1,10)
  r54=rnd_int(1,10)
  r55=rnd_int(1,10)
  r56=rnd_int(1,10)
  r57=rnd_int(1,3)

invasionR=rnd_int(0,10)

function preload(){
  
   fund = loadImage(`img/fundo${(r57)}.png`);
  
  invasion =loadImage(`img/alien1.png`)

   
   pp1 = loadImage(`img/a${(r51)}.png`);

    pp2 = loadImage(`img/b${(r52)}.png`);

     pp3 = loadImage(`img/c${(r53)}.png`);

    pp4 = loadImage(`img/d${(r54)}.png`);

     pp5 = loadImage(`img/e${(r55)}.png`);

     pp6 = loadImage(`img/f${(r56)}.png`);
 
     
}

function setup() {
  createCanvas(windowWidth, windowHeight)
  
}

function draw(){
  image(fund,0,0,windowWidth, windowHeight)
  
  if(invasionR == 1){
  image(invasion,0,0,windowWidth, windowHeight)
  }
  
  image(pp1,0,0,windowWidth, windowHeight)
  image(pp2,0,0,windowWidth, windowHeight)
  image(pp3,0,0,windowWidth, windowHeight)
  image(pp4,0,0,windowWidth, windowHeight)
  image(pp5,0,0,windowWidth, windowHeight)
  image(pp6,0,0,windowWidth, windowHeight)
 
     
  noLoop()
}

switch (r51) {
    
  case 1: rr51 = "Blue Office"; break;
  case 2: rr51 = "Chinaw"; break;
  case 3: rr51 = "Weed Store"; break;
  case 4: rr51 = "GreenTower"; break;
  case 5: rr51 = "House G"; break; 
  case 6: rr51 = "Banner"; break;
  case 7: rr51 = "Seed"; break;
  case 8: rr51 = "Garage"; break;
  case 9: rr51 = "Papa House"; break;
  case 10: rr51 = "Vague"; break;
}

switch (r52) {
    
  case 1: rr52 = "Blue Office"; break;
  case 2: rr52 = "Chinaw"; break;
  case 3: rr52 = "Weed Store"; break;
  case 4: rr52 = "GreenTower"; break;
  case 5: rr52 = "House G"; break; 
  case 6: rr52 = "Banner"; break;
  case 7: rr52 = "Seed"; break;
  case 8: rr52 = "Garage"; break;
  case 9: rr52 = "Papa House"; break;
  case 10: rr52 = "Vague"; break;
}
switch (r53) {
    
  case 1: rr53 = "Blue Office"; break;
  case 2: rr53 = "Chinaw"; break;
  case 3: rr53 = "Weed Store"; break;
  case 4: rr53 = "GreenTower"; break;
  case 5: rr53 = "House G"; break; 
  case 6: rr53 = "Banner"; break;
  case 7: rr53 = "Seed"; break;
  case 8: rr53 = "Garage"; break;
  case 9: rr53 = "Papa House"; break;
  case 10: rr53 = "Vague"; break;
}
switch (r54) {
    
  case 1: rr54 = "Blue Office"; break;
  case 2: rr54 = "Chinaw"; break;
  case 3: rr54 = "Weed Store"; break;
  case 4: rr54 = "GreenTower"; break;
  case 5: rr54 = "House G"; break; 
  case 6: rr54 = "Banner"; break;
  case 7: rr54 = "Seed"; break;
  case 8: rr54 = "Garage"; break;
  case 9: rr54 = "Papa House"; break;
  case 10: rr54 = "Vague"; break;
}
switch (r55) {
    
  case 1: rr55 = "Blue Office"; break;
  case 2: rr55 = "Chinaw"; break;
  case 3: rr55 = "Weed Store"; break;
  case 4: rr55 = "GreenTower"; break;
  case 5: rr55 = "House G"; break; 
  case 6: rr55 = "Banner"; break;
  case 7: rr55 = "Seed"; break;
  case 8: rr55 = "Garage"; break;
  case 9: rr55 = "Papa House"; break;
  case 10: rr55 = "Vague"; break;
}
switch (r56) {
    
  case 1: rr56 = "Blue Office"; break;
  case 2: rr56 = "Chinaw"; break;
  case 3: rr56 = "Weed Store"; break;
  case 4: rr56 = "GreenTower"; break;
  case 5: rr56 = "House G"; break; 
  case 6: rr56 = "Banner"; break;
  case 7: rr56 = "Seed"; break;
  case 8: rr56 = "Garage"; break;
  case 9: rr56 = "Papa House"; break;
  case 10:rr56 = "Vague"; break;

}

switch (r57) {    
  case 1: rr57 = "Desert"; break;
  case 2: rr57 = "Blood Sky"; break;
  case 3: rr57 = "Summer"; break;
}

if(invasionR == 1){
 rr57 = "INVASION"
  }

console.log(rr51)
console.log(rr52)
console.log(rr53)
console.log(rr54)
console.log(rr55)
console.log(rr56)
console.log(rr57)


window.$fxhashFeatures = {
neighbor1: rr51,
neighbor2: rr52,
neighbor3: rr53,
neighbor4: rr54,
neighbor5: rr55,
neighbor6: rr56,
Local: rr57,
  
};
