function getN(max) {
  return Math.floor(fxrand() * (max));
}

function setup(){
const btm = document.getElementById("btm"); 
const green = document.getElementById("green"); 
const lig = document.getElementById("lig"); 
const one = document.getElementById("one"); 
const two = document.getElementById("two"); 
const three = document.getElementById("three"); 
const four = document.getElementById("four"); 
const verh = document.getElementById("verh"); 
const gift = document.getElementById("gift"); 
 
 
const btmN = getN(5); 
const greenN = getN(10); 
const ligN = getN(9); 
const oneN = getN(6); 
const twoN = getN(6);
const threeN = getN(6); 
const fourN = getN(6);
const verhN = getN(5); 
const giftN = getN(5); 
 
btm.src = `./btm-${btmN}.png`; 
green.src = `./green-${greenN}.png`; 
lig.src = `./lig-${ligN}.png`; 
one.src = `./one-${oneN}.png`; 
two.src = `./two-${twoN}.png`; 
three.src = `./three-${threeN}.png`; 
four.src = `./four-${fourN}.png`; 
verh.src = `./verh-${verhN}.png`; 
gift.src = `./gift-${giftN}.png`; 
 
 
 //Features list

btmStyle = [
  "Lime pot",
  "Pink pot",
  "Blue pot",
  "Nature pot", 
  "White pot",
 ];

greenStyle = [
  "Simple tree",
  "Star tree",
  "Cascade tree",
  "Classic tree",
  "Strange tree",  
  "Fat tree",  
  "Sick tree",  
  "Love tree",  
  "Spiral tree",  
  "Mustache tree",

];

ligStyle = [
  "Love ligth",
  "Star light", 
  "Yellow light",
  "Colorful light",
  "Colorful light2",
  "Flag",
  "Mix",
  "White light",
  "Snowflakes",
];


oneStyle = [
  "Pink ornament",
  "Orange ornament",
  "House ornament",
  "White ornament",
  "Blue ornament",
  "Yellow  ornament",
];

twoStyle = [
  "Ginger star",
  "Ginger man",
    "Red ornament",
  "Boot ornament",
  "Sun ornament",
  "Snowflake",

  
];

threeStyle = [
  "Glove ornament",
  "Blue spiral ornament",
  "Hat ornament",
  "Santa ornament",
  "Deep blue ornament2",
  "Snowman ornament",
  
];

fourStyle = [
  "Heart ornament",
  "Dindon ornament",
  "Deep blue ornament",
  "Little star ornament",
  "Candy ornament",
  "Gift ornament",
  
];

verhStyle = [
  "Hat",
  "Big star",
  "Love",
  "Star2",
  "Big red bow",
   
];

giftStyle = [
  "Two ornaments",
  "Gift box",
  "Santa",
  "Bow",
  "None",
   
];


window.$fxhashFeatures = { 
  "btm": btmStyle[btmN], 
  "green": greenStyle[greenN], 
  "lig": ligStyle[ligN], 
  "one": oneStyle[oneN], 
  "two": twoStyle[twoN], 
  "three": threeStyle[threeN],
  "four":fourStyle[fourN],
  "verh": verhStyle[verhN],
  "gift": giftStyle[giftN],
};
}
setup();