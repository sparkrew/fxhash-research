// this code writes the values to the DOM as an example
window.$fxhashFeatures=
{
  "fSky" : getBGColor(fxrand()),
  "fRank" : getRankString(fxrand()),
  "fEntry" : getDoorString(fxrand()),
  "fWallW" : getWallWString(fxrand()),
  "fWallE" : getWallEString(fxrand()),
  "fTower" : getTowerString(fxrand()),
  "fSteps" : getStairString(fxrand()),
  "fItem" : getItemString(fxrand()),
  "fStone" : getStoneString(fxrand()),
  "fHealth" : getHealthString(fxrand())

}
console.log(window.$fxhashFeatures.fSky);
console.log(window.$fxhashFeatures.fRank);
console.log(window.$fxhashFeatures.fEntry);
console.log(window.$fxhashFeatures.fWallE);
console.log(window.$fxhashFeatures.fWallW);
console.log(window.$fxhashFeatures.fItem);
console.log(window.$fxhashFeatures.fSteps);
console.log(window.$fxhashFeatures.fTower);
console.log(window.$fxhashFeatures.fStone);
console.log(window.$fxhashFeatures.fHealth);


line0 = new Image();
line0.src = "line.png";

sun = new Image();
sun.src = "sun.png";


function getStoneString(value) {

  if (value < 0.2) return "PINK"
  if (value < 0.3) return "LIGHT BLUE"
  if (value < 0.5) return "LIGHT GREEN"
  if (value < 0.6) return "YELLOW"
  if (value < 0.8) return "ORANGE"
  if (value < 0.9) return "LIGHT GREY"
  else return "AQUA"//PINK
}


function getBGColor(value) {

  if (value < 0.2) return "PURPLE"
  if (value < 0.3) return "DARK BLUE"
  if (value < 0.5) return "NAVY"
  if (value < 0.6) return "DARK GREEN"
  if (value < 0.8) return "FOREST"
  if (value < 0.9) return "RED"
  else return "BLUE"
}

function getRankString(value) {
  if (value < 0.25) return "LOVE"
  if (value < 0.40) return "HEALTH"
  if (value < 0.55) return "PROSPERITY"
  if (value < 0.60) return "PEACE"
  if (value < 0.75) return "JUSTICE"
  if (value < 0.90) return "SIN"
  if (value < 0.98) return "DEATH"
  else return "ERROR"
}

function getDoorString(value) {
  if (value < 0.2) return "HIGH DOOR"
  if (value < 0.4) return "OLD DOOR"
  if (value < 0.6) return "DAMAGED DOOR"
  if (value < 0.7) return "FIRM DOOR"
  if (value < 0.8) return "CRACKED DOOR"
  if (value < 0.9) return "SAFE DOOR"
  else return "STRONG DOOR"
}

function getWallWString(value) {
  if (value < 0.2) return "POOR WALL"
  if (value < 0.4) return "LOST WALL"
  if (value < 0.6) return "BURIED WALL"
  if (value < 0.7) return "STANDING WALL"
  if (value < 0.8) return "BAD WALL"
  else return "TALL WALL"
}

function getWallEString(value) {
  if (value < 0.2) return "RUBBLE"
  if (value < 0.4) return "PRISON"
  if (value < 0.6) return "KEEP"
  if (value < 0.8) return "MESA"
  else return "CHAMBERS"
}

function getItemString(value) {  
  if (value < 0.2) return "EXCLAIM"
  if (value < 0.4) return "EYE"
  if (value < 0.6) return "Rx"
  if(value < 0.8) return "HEART"
  if(value < 0.9) return "KEY"
  else return "SKULL"
}

function getStairString(value) {
  if (value < 0.15) return "DESCENDING"
  if (value < 0.3) return "ESCAPE"
  if (value < 0.45) return "WINDING"
  if (value < 0.6) return "BROKEN STEPS"
  if (value < 0.75) return "WANDERING"
  if(value < 0.9) return "FALLING"
  if(value < 0.95) return "MARCHING"
  else return "RUN"
}

function getTowerString(value) {
  if (value < 0.2) return "FALLEN TOWER"//YELLOW
  if (value < 0.35) return "BROKEN TOWER"//RED
  if (value < 0.5) return "ABANDONED TOWER"
  if (value < 0.6) return "LOOKING TOWER"
  if (value < 0.7) return "STANDING TOWER"
  else return "WATCH TOWER"//PINK
}

function getHealthString(value) {
  if (value < 0.20) return "PERFECT"//YELLOW
  if (value < 0.40) return "GOOD"//RED
  if (value < 0.60) return "DECENT"
  if (value < 0.80) return "NOT GOOD"
  if (value < 0.9) return "BAD"
  else return "DEAD"//PINK
}

function getBGImage(value) {
  if (value < 0.5) return "square"
  if (value < 0.9) return "diamond"
  else return "hearts"
}


function stringToValue(s){
  var value = "";


  
  switch(s){
          
                 //BG IMAGE
      case "square":
        return "bg0.png";
      case "diamond":
        return "bg1.png";
      case "hearts":
        return "bg2.png";
          
    
    //COLORS
      case "PINK":
        return "#fe48de";
      case "LIGHT BLUE":
        return "#27badb";
      case "LIGHT GREEN":
        return "#a4f022";
      case "YELLOW":
        return "#e8ea4a";
      case "ORANGE":
        return "#FF6600";
      case "LIGHT GREY":
        return "#c8c8c8";
      case "AQUA":
        return "#58f5b1";
      case "PURPLE":
        return "#340058";
      case "DARK BLUE":
        return "#000099";
      case "NAVY":
        return "#4430ba";
      case "DARK GREEN":
        return "#008456";
      case "FOREST":
        return "#003d10";
      case "RED":
        return "#991515";
     case "BLUE":
        return "#006ab4";
          
          

    //WALL W
      case "POOR WALL":
        return "wall0.png";
      case "LOST WALL":
        return "wall1.png";
      case "BURIED WALL":
        return "wall2.png";
      case "STANDING WALL":
        return "wall3.png";
      case "BAD WALL":
        return "wall4.png";
      case "TALL WALL":
        return "wall5.png";
          
    //WALL E
      case "LOOKOUT":
        return "wall6.png";
      case "RUBBLE":
        return "wall7.png";
      case "PRISON":
        return "wall8.png";
      case "KEEP":
        return "wall9.png";
      case "MESA":
        return "wall10.png";
      case "CHAMBERS":
        return "wall11.png";
  
    //TOWER
      case "FALLEN TOWER":
        return "tower0.png";
      case "BROKEN TOWER":
        return "tower1.png";
      case "ABANDONED TOWER":
        return "tower2.png";
      case "LOOKING TOWER":
        return "tower3.png";
      case "STANDING TOWER":
        return "tower4.png";
      case "WATCH TOWER":
        return "tower5.png";


    //STAIRS
      case "DESCENDING":
        return "stair0.png";
      case "ESCAPE":
        return "stair1.png";
      case "WINDING":
        return "stair2.png";
      case "BROKEN STEPS":
        return "stair3.png";
      case "WANDERING":
        return "stair4.png";
      case "FALLING":
        return "stair5.png";
      case "MARCHING":
        return "stair6.png";
      case "RUN":
        return "stair7.png";

    //DOOR
    case "HIGH DOOR":
      return "door0.png";
    case "OLD DOOR":
      return "door1.png";
    case "DAMAGED DOOR":
      return "door2.png";
    case "FIRM DOOR":
      return "door3.png";
    case "CRACKED DOOR":
      return "door4.png";
    case "SAFE DOOR":
      return "door5.png";
    case "STRONG DOOR":
      return "door6.png";

    //ITEM
    case "EXCLAIM":
      return "item0.png";
    case "EYE":
      return "item1.png";
    case "Rx":
      return "item2.png";
    case "HEART":
      return "item3.png";
    case "KEY":
      return "item4.png";
    case "SKULL":
      return "item5.png";
          
    //HEALTH
    case "PERFECT":
      return "health5.png";
    case "GOOD":
      return "health4.png";
    case "DECENT":
      return "health3.png";
    case "NOT GOOD":
      return "health2.png";
    case "BAD":
      return "health1.png";
    case "DEAD":
      return "health0.png";
          
          
        //RANK
    case "LOVE":
      return "LOVE.png";
    case "HEALTH":
      return "HEALTH.png";
    case "PROSPERITY":
      return "PROSPERITY.png";
    case "PEACE":
      return "PEACE.png";
    case "JUSTICE":
      return "JUSTICE.png";
    case "SIN":
      return "SIN.png";
    case "DEATH":
      return "DEATH.png";
    case "ERROR":
      return "ERROR.png";
  }
  return s;
}

document.body.setAttribute( "style","background-color:"+ stringToValue(window.$fxhashFeatures.fSky));

var c=document.getElementById("canvas");
var ctx=c.getContext("2d");
var imageObj1 = new Image();
var imageObj2 = new Image();
var imageObj3 = new Image();
var imageObj4 = new Image();
var imageObj5 = new Image();
var imageObj6 = new Image();
var imageObj7 = new Image();
var imageObj8 = new Image();
ctx.fillStyle = stringToValue(window.$fxhashFeatures.fSky);
ctx.fillRect(0, 0, canvas.width, canvas.height);



  imageObj1.src = stringToValue(window.$fxhashFeatures.fWallW);
  imageObj1.onload = function() {
     
      
     ctx.drawImage(imageObj1,(Math.floor(fxrand()*25)*3+75)+75,108)
      
  imageObj2.src = stringToValue(window.$fxhashFeatures.fWallE);
  imageObj2.onload = function() {
      ctx.drawImage(imageObj2,(Math.floor(fxrand()*50)*3+75)+75,108)
  imageObj3.src = stringToValue(window.$fxhashFeatures.fTower);
  imageObj3.onload = function() {
      ctx.drawImage(imageObj3,(Math.floor(fxrand()*50)*3+75)+75,108)
  imageObj4.src = stringToValue(window.$fxhashFeatures.fSteps);
  imageObj4.onload = function() {
      ctx.drawImage(imageObj4,(Math.floor(fxrand()*50)*3+75)+75,309)
  imageObj5.src = stringToValue(window.$fxhashFeatures.fEntry);
  imageObj5.onload = function() {
      ctx.drawImage(imageObj5,(Math.floor(fxrand()*50)*3+75)+75,108)
      ctx.drawImage(line0,75,306)
      ctx.drawImage(sun,75,75)
      setMetalColor() 
      imageObj7.src = stringToValue(window.$fxhashFeatures.fHealth);
      imageObj7.onload = function() {
      ctx.drawImage(imageObj7,(Math.floor(fxrand()*50*3)+120),282)
      imageObj6.src = stringToValue(window.$fxhashFeatures.fItem);
      imageObj6.onload = function() {
      ctx.drawImage(imageObj6,(Math.floor(fxrand()*60)*3+99+88),(Math.floor(fxrand()*32))+88)
            imageObj8.src = stringToValue(window.$fxhashFeatures.fRank);
  imageObj8.onload = function() {
     
      ctx.drawImage(imageObj8,75,75)
      
      setTimeout(function() {
        fxpreview();
      },100)

  }
  } 
  }   
  }   
  }
  }
  }
  
  
  

}

  

function setMetalColor() {
  imageData = ctx.getImageData(0, 0, 512, 512);
  for (var i = 0; i < imageData.data.length; i += 4) {


      // is this pixel the old rgb?
      if (imageData.data[i] > 255 &&
        imageData.data[i + 1] > 255 &&
        imageData.data[i + 2] > 255
      ) {
        // change to your new rgb
        imageData.data[i] = 200;
        imageData.data[i + 1] = 10;
        imageData.data[i + 2] = 20;
      }
      // is this pixel the old rgb?
      else if (imageData.data[i] == 255 &&
        imageData.data[i + 1] == 255 &&
        imageData.data[i + 2] == 255
      ) {
        // change to your new rgb
        imageData.data[i] = hexToRgb(stringToValue(window.$fxhashFeatures.fStone)).r;
        imageData.data[i + 1] = hexToRgb(stringToValue(window.$fxhashFeatures.fStone)).g;
        imageData.data[i + 2] = hexToRgb(stringToValue(window.$fxhashFeatures.fStone)).b;

    }
  }
  // put the altered data back on the canvas
  ctx.putImageData(imageData, 0, 0);

}

function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

