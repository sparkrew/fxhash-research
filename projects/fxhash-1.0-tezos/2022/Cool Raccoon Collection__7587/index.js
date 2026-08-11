//####################### Hi dear! #############################//
//#I send you a little love and good luck with this mr Raccoon.#//
//#################### Take care of yourself! ##################//
//#################### Created by Wasntmeow ####################//
//################# twitter.com/WasntMeowDraw ##################//

function getN(max) {
  return Math.floor(fxrand() * (max));
}

function setup(){
const body = document.getElementById("body"); 
const shirt = document.getElementById("shirt");
const gls = document.getElementById("gls"); 
const nose = document.getElementById("nose"); 
const hat = document.getElementById("hat"); 
const hand = document.getElementById("hand");

 
const bodyN = getN(1); 
const shirtN = getN(5);
const glsN = getN(7); 
const noseN = getN(4); 
const hatN = getN(9);
const handN = getN(7);

 
body.src = `./body-${bodyN}.svg`; 
shirt.src = `./shirt-${shirtN}.svg`; 
gls.src = `./gls-${glsN}.svg`; 
nose.src = `./nose-${noseN}.svg`; 
hat.src = `./hat-${hatN}.svg`; 
hand.src = `./hand-${handN}.svg`; 


 
 //Features list

bodyStyle = [
  "Cute fur body",
 
 ];


shirtStyle = [
  "Hot shirt",
  "Multicolor shirt",
  "Flower shirt",
  "Green timberjack",
  "Red timberjack",
  
];


glsStyle = [
  "Cool glasses",
  "Green glasses",
  "Pink glasses",
  "Hearts",
  "Blush",
  "Scarf",
  "Bandana",
  
];

noseStyle = [
  "Long tongue",
  "Tiny tongue",
  "Hehe",
  "Not hehe",
   
];



hatStyle = [
  "Russian hat",
  "Yellow knitted hat",
  "Pink knitted hat",
  "Blue knitted hat",
  "Pumpkin happy",
  "Banana hat",
  "Fried egg",
  "Very big flower",
  "Daisies",
];


handStyle = [
  "Red cup",
  "Froggbucks",
  "Cards",
  "Daisies",
  "Cookies",
  "Pipe",
  "Lollipop",

];







window.$fxhashFeatures = { 
  "body": bodyStyle[bodyN], 
  "shirt": shirtStyle[shirtN],  
  "gls": glsStyle[glsN], 
  "nose": noseStyle[noseN], 
  "hat": hatStyle[hatN], 
  "hand": handStyle[handN], 
  
  
};
}
setup();