

function preload(){
  myFont = "/font.otf"
}

var colorPalettes = [

  {bg:"#181818",colors:["#fdc2d8","#fca65e","#ff7983","#041282"]},
  {bg:"#181818",colors:["#ff8e44","#f91362","#35126a"]},
  {bg:"#181818",colors:["#37A6F9","#0CE1B3","#75E813","#FC1D36"]},
  {bg:"#181818",colors:["#D74119","#B7E947","magenta","#2F31E9","#269FF0"]},
  {bg:"#181818",colors:["#01FEFF","#8de3f8","#417BFF","#CC00FF"]},
  {bg:"#05054D",colors:["#F3FCFA","#E6223F","#032AB4","#007EE2","#F3FCFA"]},
  {bg:"#1D1D1D",colors:["#FFC778","#FF718D","#EE498D","#DDA100"]},
  {bg:"#000000",colors:["#0F0450","#76088F","#FFAF00","#FFAF00","#FDFEFE"]},
  {bg:"#1D1D1B",colors:["#B1862C","#EDD05C","#FFEB9B","#F7CD77","#B38A3A"]},



  {bg:"#F6F6F6",colors:["#3391CB","#2ECB49","#F3D005","#AA0BB3","#E67A37","#E01E8B","#2E8BC7"]},
  {bg:"#D6D4B1",colors:["#0091CD","#292478","#A70D41","#DA6B09","#E8D705","#292478"]},
  {bg:"#FBF7EB",colors:["#D2C4A7","#78D5C2","#F6C64A","#FCA347","#FD9789","#B62EB4"]},
  {bg:"#F1F1F1",colors:["#035A8F","#2CB0AC","#E950FF","#9b0e40"]},
  {bg:"#FEE8EA",colors:["#FAB3D1","#F9A148","#F67A81","#b84445"]},
  {bg:"#FEE8EA",colors:["#FBD388","#F7569A","#9A2E6B","#BC3265","#D85574","#40D89F"]},

];
var colorPalette;
var bg;
var gradientColors = [];
let currentIndex = 0;
var gradientIndex = 15;
var words = [
  "HOPE","Love", "Fear", "Time", "Life", "Mind", "Soul", "Fate", "Lucid", "Trust", "Dream", "Truth", "Joy", "Pain", "Risk", "Calm", "Wise", "Bold", "Free", "Rise", "Seek", "Give", "Open", "Pure", "Gift", "Dare", "Echo", "Glow", "Zone", "Grace", "Peace", "Bliss", "Ease", "Hero", "Myth", "Dusk", "Dawn", "Grit", "Hush", "Lift", "Muse", "Nest", "Omen", "Path", "Quest", "Rest", "Sage", "Tide", "Vast", "Whim", "Zen",
  "Vanish", "Bliss", "Evoke", "Space", "Quell", "Zesty", "Graci", "Tryst", "Glowy", "Zoned", "Dream", "Fxhash", "Whims", "Spark", "Serex", "Haven", "Quirk", "Bloom", "Mirth", "Quest",
  "Honest", "Valid", "Clear", "Proof", "Trust", "Ethic", "Valid", "Logic", "Ideal"];
var textWord;
var outline = false;
var outlineSize;
var grainAmount;

function setup(){
  noiseSeed(round(fxrand()*9999));
  randomSeed(round(fxrand()*9999));
  Math.random = fxrand;
  canvas = createCanvas(600,600);
  pixelDensity(2);
  canvas.addClass("saveCSS");
  colorPalette = random(colorPalettes);
  bg = colorPalette.bg;
  gradientColors = colorPalette.colors;
  if (random(0,100)<20) {
    shuffle(gradientColors,true);
  }
  frameRate(60);
  gradientIndex = random([5,10,15,15,20,20,20,25,30]);
  textWord = random(words);
  if (random(0,100)<10) {
    outline = true;
  }
  outlineSize = round(random(1,4));
  grainAmount = random([5,10,10,10,10,10,15,20]);
  background(bg);
  textWord = textWord.toUpperCase();
}

function draw(){
  background(bg);

  if (frameCount==0) {
    push();
    noStroke();
    textSize(142);
    textAlign(CENTER);
    textFont(myFont);
    for (var i = 0; i < 255; i++) {
      fill(gradientFromArray(gradientColors,i));
      text(textWord,width/2,(height-height/10.5)-i*1.5);
      if (outline==true) {
        if (i==254) {
          noFill();
          stroke(255);
          strokeWeight(outlineSize)
          text(textWord,constrain(mouseX,width*0.5-55,width*0.5+55),constrain(mouseY+height/2,height*0.9-25,height*0.9+25)-i*1.5);
        }
      }

    }
    pop();
  }else if (frameCount==1) {
    push();
    noStroke();
    textSize(142);
    textAlign(CENTER);
    textFont(myFont);
    for (var i = 0; i < 255; i++) {
      fill(gradientFromArray(gradientColors,i));
      text(textWord,width/2,(height-height/10.5)-i*1.5);
      if (outline == true) {
        if (i == 254) {
          noFill();
          stroke(255);
          strokeWeight(outlineSize)
          text(textWord, width / 2, (height - height / 10.5) - i * 1.5);
        }
      }
    }
    applyGrainEffect(grainAmount);
    pop();
    fxpreview();
  }else if (frameCount>1) {
    if (frameCount%gradientIndex==0) {
      shiftColors(frameCount);
    }
    push();
    noStroke();
    textSize(142);
    textAlign(CENTER);
    textFont(myFont);
    for (var i = 0; i < 255; i++) {
      fill(gradientFromArray(gradientColors,i));
      text(textWord,constrain(mouseX,width*0.5-55,width*0.5+55),constrain(mouseY+height/2,height*0.9-25,height*0.9+25)-i*1.5);
      if (outline == true) {
        if (i == 254) {
          noFill();
          stroke(255);
          strokeWeight(outlineSize)
          text(textWord, constrain(mouseX, width * 0.5 - 55, width * 0.5 + 55), constrain(mouseY + height / 2, height * 0.9 - 25, height * 0.9 + 25) - i * 1.5);
        }
      }
    }
    pop();
  }


}

function gradientFromArray(colors, value) {

  let numSegments = colors.length - 1;


  let segmentIndex = value / 255 * numSegments;
  let remainder = segmentIndex % 1;


  let startIndex = Math.floor(segmentIndex);
  let endIndex = Math.ceil(segmentIndex);


  if (endIndex >= numSegments) {
    endIndex = numSegments;
    startIndex = numSegments - 1;
  }


  let startColor = color(colors[startIndex]);
  let endColor = color(colors[endIndex]);
  return lerpColor(startColor, endColor, remainder);
}

function shiftColors() {
  let firstColor = gradientColors[0];
    for (let i = 0; i < gradientColors.length - 1; i++) {
      gradientColors[i] = gradientColors[i + 1];
    }
    gradientColors[gradientColors.length - 1] = firstColor;
}


function applyGrainEffect(amount) {
    loadPixels();
    const density = pixelDensity();
    const totalCount = 4 * (width * density) * (height * density);
    for (let i = 0; i < totalCount; i += 4) {
        const randomAmount = random(-amount, amount);
        pixels[i] = pixels[i] + randomAmount;
        pixels[i+1] = pixels[i+1] + randomAmount;
        pixels[i+2] = pixels[i+2] + randomAmount;
    }
    updatePixels();
}
