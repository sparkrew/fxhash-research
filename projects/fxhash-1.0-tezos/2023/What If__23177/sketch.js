let title = "What If";
let author = "Wanda Oliver";
let builtIn = "Jan., 2023";


// CONTROLS

//+++++++++++ Exposed Controls ++++++++++

let aspectRatio = 0;  // to hold aspect ratio
let pHue = 0;         // to hold primary, or initial,  hue
let backgrnd = 0;     // 0 = white, 1 = black
let polyOmono = 0;    // 0 = gentle, 1 = riotous color
let minimalistic = 0; // 0 = minimalistic, 1 = many layers
let resM = 1;         // multiplier to scale drawing for hiRes download


//+++++++++++ Derived Controls ++++++++++
let hMin = 0;         // min distance to consider around color wheel when varying hue
let hMax = 0;         // max distance to consider around color wheel when varying hue
                      // determined in setup based on polyOmono value
let numLayers = 0;    // determined in setup based on density value


// these values limit the upper and lower range of color values used
// will be derived from polyOmono and density settings
let sat1 = 0;    // saturation - upper and lower bounds
let sat2 = 0;
let brt1 = 0;    // brightness - upper and lower bounds
let brt2 = 0;
let trn1 = 0;    // transparency - upper and lower bounds
let trn2 = 0;


// PREPARE A COLOR SYSTEM
let hue = 0;     // to hold working hue
let sat = 0;     // to hold working saturation
let brt = 0;     // to hold working brightness
let trn = 0;     // to hold working transparency
let pType = "";  // to use generalized color system


//PREPARE A TEXT SYSTEM
let fScale = 1;  // will hold value for exaggerating size of text
let phrases = [];


// PREPARE OBJECT COMPONENT SYSTEM
let layr = [];      // array to hold constructed layers - a buffer
let layerCnt = 0;   // counter used in layering process
let fonts = [];     // array to hold font objects
let palettes = [];  // array to hold color objects
let palTypes = [];  // array to hold palette types
let pnts = [];      // array to hold point ojbects


// PREPARE FEATURES
aspectRatioText = "";        
backgroundText = "";
minimalisticText = "";
colorText = "";

window.$fxhashFeatures = 
{
  "Background": backgroundText,
  "Palette": colorText,
  "AspectRatio": aspectRatioText,
  "Style": minimalisticText
  }

//+++++++++++++++ REQUIRED FOR FX(HASH) ++++++++++++++++
// PREPARE FOR PRNG FUNCTIONALITY
let seed = 0; // to hold random seed
//++++++++++++++++++++++++++++++++++++++++++++++++++++++


// PRE-LOAD
function preload()  
{
  // +++++++++++++++++++ DO NOT CHANGE +++++++++++++++++
  // SET SEED TO CONTROL PRNG FUNCTION REQUIRED BY fx(hash)
  seed = int(fxrand() * 999999);
  // +++++++++++++++++++++++++++++++++++++++++++++++++++

  // Initialize color system
  colorMode(HSB, 360, 100, 100, 100);

  loadFonts();
  loadPalettes();
  loadPhrases();
}


function setup() 
{
  // ++++++++++++ DO NOT CHANGE ++++++++++++++++++++++++++
  // Initialize PRNG environment required by fx(hash)
  randomSeed(seed);  // normal condition - generating new work
  noiseSeed(seed);
  //randomSeed(431739);  // reproducing a previous work from it's seed
  //noiseSeed(431739);   

  // +++++++++++++++++++++++++++++++++++++++++++++++++++++
  // DO NOT call any random functionm prior to this point!
  // +++++++++++++++++++++++++++++++++++++++++++++++++++++

  initialize(); // sets up environment and builds component layers
}

function draw() // adds layers to canvas to create final image
{

  if (layerCnt == layr.length) // all layers consumed
    {
      fxpreview();
      noLoop();
    }
  else
    {
      drawImage(layerCnt);
      layerCnt = layerCnt + 1;
    }
  }


//####### FUNCTIONS ####################################
// +++++++++++++++++++++++++++++++++++++++++++++++++++++
// FUNCIONS - THIS SKETCH
// +++++++++++++++++++++++++++++++++++++++++++++++++++++

function loadFonts()
{
  fonts[0] = new Font(loadFont('./wandaOliver_chemigram6.otf'), "chemi6", "glyph",1);
  fonts[1] = new Font(loadFont('./wandaOliver_chemigram5.otf'), "chemi5", "glyph",1);
  fonts[2] = new Font(loadFont('./wandaOliver_chemigram4.otf'), "chemi4", "glyph",1)
  fonts[3] = new Font(loadFont('./wandaOliver_morsecode.otf'), "morse", "code", 1);
  fonts[4] = new Font(loadFont('./wandaOliver_handwriting.otf'), "hand", "script", .7);
  fonts[5] = new Font(loadFont('./wandaOliver_print.otf'), "print", "script", 1);
  fonts[6] = new Font(loadFont('./wandaOliver_loops.otf'), "loops", "code", 1);
  fonts[7] = new Font(loadFont('./wandaOliver_asemic3.otf'), "asemic", "code", 1.3);
}

function loadPalettes()
{
  palTypes[0] = "VanGogh";
  palTypes[1] = "afKlint";
  palTypes[2] = "Kliimt";
  palTypes[3] = "Matisse";
  palTypes[4] = "Warhol";
  palTypes[5] = "Kusama";
  palTypes[6] = "Kahlo";
  palTypes[7] = "Hoch";

  palettes[0] = new Palette("blue", "VanGogh", 211, 65, 69);
  palettes[1] = new Palette("blue", "VanGogh", 215, 59, 22);
  palettes[2] = new Palette("blue", "VanGogh", 212, 60, 61);
  palettes[3] = new Palette("blue", "VanGogh", 207, 35, 75);
  palettes[4] = new Palette("yellow", "VanGogh", 44, 48, 86);
  palettes[5] = new Palette("yellow", "VanGogh", 45, 62, 80);
  palettes[6] = new Palette("yellow", "VanGogh", 48, 47, 86);
  palettes[7] = new Palette("yellow", "VanGogh", 40, 40, 87);
  palettes[8] = new Palette("green", "VanGogh", 91, 40, 67);
  palettes[9] = new Palette("green", "VanGogh", 71, 35, 63);
  palettes[10] = new Palette("green", "VanGogh", 95, 39, 47);
  palettes[11] = new Palette("green", "VanGogh", 105, 47, 22);
  palettes[12] = new Palette("red", "VanGogh", 14, 52, 65);
  palettes[13] = new Palette("red", "VanGogh", 18, 55, 80);
  palettes[14] = new Palette("red", "VanGogh", 33, 47, 56);
  palettes[15] = new Palette("red", "VanGogh", 24, 52, 61);

  palettes[16] = new Palette("blue", "afKlint", 213, 17, 68);
  palettes[17] = new Palette("blue", "afKlint", 217,6,76);
  palettes[18] = new Palette("blue", "afKlint", 221, 66, 14);
  palettes[19] = new Palette("blue", "afKlint", 220, 55, 39);
  palettes[20] = new Palette("yellow", "afKlint", 42, 54, 84);
  palettes[21] = new Palette("yellow", "afKlint", 39, 68, 88);
  palettes[22] = new Palette("yellow", "afKlint", 37, 30, 85);
  palettes[23] = new Palette("yellow", "afKlint", 36, 77, 71);
  palettes[24] = new Palette("green", "afKlint", 58, 55, 60);
  palettes[25] = new Palette("green", "afKlint", 48, 52, 71);
  palettes[26] = new Palette("green", "afKlint", 143, 18, 48);
  palettes[27] = new Palette("green", "afKlint", 69, 25, 60);
  palettes[28] = new Palette("red", "afKlint", 7, 63, 72);
  palettes[29] = new Palette("red", "afKlint", 18, 62, 75);
  palettes[30] = new Palette("red", "afKlint", 4, 54, 73);
  palettes[31] = new Palette("red", "afKlint", 18, 85, 55);

  palettes[32] = new Palette("blue", "Kliimt", 224,80,67);
  palettes[33] = new Palette("blue", "Kliimt", 214,26,79);
  palettes[34] = new Palette("blue", "Kliimt", 237, 88, 90);
  palettes[35] = new Palette("blue", "Kliimt", 239, 86, 95);
  palettes[36] = new Palette("yellow", "Kliimt", 48, 37, 96);
  palettes[37] = new Palette("yellow", "Kliimt", 39, 68, 81);
  palettes[38] = new Palette("yellow", "Kliimt", 41, 70, 83);
  palettes[39] = new Palette("yellow", "Kliimt", 53, 87, 88);
  palettes[40] = new Palette("green", "Kliimt", 86, 59, 81);
  palettes[41] = new Palette("green", "Kliimt", 82, 56, 75);
  palettes[42] = new Palette("green", "Kliimt", 75, 36, 70);
  palettes[43] = new Palette("green", "Kliimt", 91, 56, 74);
  palettes[44] = new Palette("red", "Kliimt", 11, 81, 82);
  palettes[45] = new Palette("red", "Kliimt", 9, 84, 89);
  palettes[46] = new Palette("red", "Kliimt", 8, 79, 45);
  palettes[47] = new Palette("red", "Kliimt", 3, 95, 25);

  palettes[48] = new Palette("blue", "Matisse", 237,56,60);
  palettes[49] = new Palette("blue", "Matisse", 221,25,82);
  palettes[50] = new Palette("blue", "Matisse", 177, 21, 75);
  palettes[51] = new Palette("blue", "Matisse", 251, 80, 30);
  palettes[52] = new Palette("yellow", "Matisse", 58, 46, 91);
  palettes[53] = new Palette("yellow", "Matisse", 62, 57, 89);
  palettes[54] = new Palette("yellow", "Matisse", 47, 60, 87);
  palettes[55] = new Palette("yellow", "Matisse", 42, 24, 83);
  palettes[56] = new Palette("green", "Matisse", 83, 58, 61);
  palettes[57] = new Palette("green", "Matisse", 93, 36, 76);
  palettes[58] = new Palette("green", "Matisse", 163, 26, 51);
  palettes[59] = new Palette("green", "Matisse", 92, 42, 41);
  palettes[60] = new Palette("red", "Matisse", 359, 69, 68);
  palettes[61] = new Palette("red", "Matisse", 6, 57, 87);
  palettes[62] = new Palette("red", "Matisse", 5, 79, 83);
  palettes[63] = new Palette("red", "Matisse", 359, 68, 54);

  palettes[64] = new Palette("blue", "Warhol", 239,86,36);
  palettes[65] = new Palette("blue", "Warhol", 227,88,52);
  palettes[66] = new Palette("blue", "Warhol", 196, 38, 81);
  palettes[67] = new Palette("blue", "Warhol", 199, 65, 64);
  palettes[68] = new Palette("yellow", "Warhol", 54, 69, 95);
  palettes[69] = new Palette("yellow", "Warhol", 44, 73, 94);
  palettes[70] = new Palette("yellow", "Warhol", 36, 75, 89);
  palettes[71] = new Palette("yellow", "Warhol", 50, 60, 98);
  palettes[72] = new Palette("green", "Warhol", 152, 54, 82);
  palettes[73] = new Palette("green", "Warhol", 173, 54, 79);
  palettes[74] = new Palette("green", "Warhol", 89, 57, 57);
  palettes[75] = new Palette("green", "Warhol", 175, 20, 85);
  palettes[76] = new Palette("red", "Warhol", 8, 85, 74);
  palettes[77] = new Palette("red", "Warhol", 5, 89, 52);
  palettes[78] = new Palette("red", "Warhol", 331, 77, 77);
  palettes[79] = new Palette("red", "Warhol", 341, 31, 91);

  palettes[80] = new Palette("blue", "Kusama", 212,38,97);
  palettes[81] = new Palette("blue", "Kusama", 241,45,67);
  palettes[82] = new Palette("blue", "Kusama", 268, 37, 74);
  palettes[83] = new Palette("blue", "Kusama", 218, 36, 75);
  palettes[84] = new Palette("yellow", "Kusama", 48, 64, 97);
  palettes[85] = new Palette("yellow", "Kusama", 23, 72, 94);
  palettes[86] = new Palette("yellow", "Kusama", 48, 69, 93);
  palettes[87] = new Palette("yellow", "Kusama", 40, 63, 95);
  palettes[88] = new Palette("green", "Kusama", 132, 36, 85);
  palettes[89] = new Palette("green", "Kusama", 148, 53, 61);
  palettes[90] = new Palette("green", "Kusama", 127, 35, 81);
  palettes[91] = new Palette("green", "Kusama", 145, 53, 64);
  palettes[92] = new Palette("red", "Kusama", 5, 77, 81);
  palettes[93] = new Palette("red", "Kusama", 359, 62, 64);
  palettes[94] = new Palette("red", "Kusama", 2, 69, 86);
  palettes[95] = new Palette("red", "Kusama", 332, 55, 76);

  palettes[96] = new Palette("blue", "Kahlo", 220,49,27);
  palettes[97] = new Palette("blue", "Kahlo", 215,21,79);
  palettes[98] = new Palette("blue", "Kahlo", 258, 26, 44);
  palettes[99] = new Palette("blue", "Kahlo", 280, 32, 31);
  palettes[100] = new Palette("yellow", "Kahlo", 38, 52, 83);
  palettes[101] = new Palette("yellow", "Kahlo", 36, 56, 95);
  palettes[102] = new Palette("yellow", "Kahlo", 36, 67, 93);
  palettes[103] = new Palette("yellow", "Kahlo", 50, 42, 98);
  palettes[104] = new Palette("green", "Kahlo", 66, 50, 54);
  palettes[105] = new Palette("green", "Kahlo", 61, 51, 69);
  palettes[106] = new Palette("green", "Kahlo", 97, 15, 82);
  palettes[107] = new Palette("green", "Kahlo", 101, 20, 82);
  palettes[108] = new Palette("red", "Kahlo", 6, 83, 50);
  palettes[109] = new Palette("red", "Kahlo", 10, 85, 76);
  palettes[110] = new Palette("red", "Kahlo", 4, 79, 86);
  palettes[111] = new Palette("red", "Kahlo", 9, 80, 38);

  palettes[112] = new Palette("blue", "Hoch", 216, 64, 45);
  palettes[113] = new Palette("blue", "Hoch", 208, 31, 80);
  palettes[114] = new Palette("blue", "Hoch", 193,49, 44);
  palettes[115] = new Palette("blue", "Hoch", 210, 53, 46);
  palettes[116] = new Palette("yellow", "Hoch", 46, 62, 82);
  palettes[117] = new Palette("yellow", "Hoch", 46, 64, 95);
  palettes[118] = new Palette("yellow", "Hoch", 37, 31, 82);
  palettes[119] = new Palette("yellow", "Hoch", 32, 62, 73);
  palettes[120] = new Palette("green", "Hoch", 67, 6, 60);
  palettes[121] = new Palette("green", "Hoch", 203, 52, 48);
  palettes[122] = new Palette("green", "Hoch", 137, 13, 51);
  palettes[123] = new Palette("green", "Hoch", 33, 19, 31);
  palettes[124] = new Palette("red", "Hoch", 3, 73, 57);
  palettes[125] = new Palette("red", "Hoch", 17, 60, 78);
  palettes[126] = new Palette("red", "Hoch",30, 49, 88);
  palettes[127] = new Palette("red", "Hoch", 4, 73, 56);
}

function loadPhrases()
{
    phrases[0] = "what if you slept";
    phrases[1] = "and what if";
    phrases[2] = "in your sleep";
    phrases[3] = "you dreamed";
    phrases[4] = "and what if";
    phrases[5] = "in your dream";
    phrases[6] = "you went to heaven";
    phrases[7] = "and there plucked a strange and beautiful flower";
    phrases[8] = "and what if";
    phrases[9] = "when you awoke";
    phrases[10] = "you had that flower in your hand";
}

function loadPoints()
{
  push();
    var dW = 10.0;
    var dH = .10;
    var w = floor(width/(dW));
    var h = floor(height*dH);
    var x = w/2 *-1;  
    var y = 0;
    pIndx = 0;
    noStroke();
    for(numRows=0; numRows<50; numRows++)
    {
      h = floor((height-y)*dH); // calc height for next round
      for(j=0; j<dW+1; j++)
      {
        pnts[pIndx] = new Point(x,y);
        pIndx++;
        x = x+w;
      }
    y = y+h;
    x = w/2 *-1; // reset x for next row
  }
  pop();
}

function initialize()
{
  setControls();
  setupCanvas(resM);
  prepareBase(backgrnd, polyOmono);
  loadPoints();
  buildLayers(numLayers);  //  to ensure determinism, all content buffered in a single draw iteration
  drawTitlePage(backgrnd);
}

function setControls()
{
  // set external controls - called external because I intend for them to be fx(params)
  aspectRatio = random([0, 1, 2]);  // 0 square, 1 = rectanglar horizontal, 1 = rectangular protrait      
  backgrnd = random([0,1]);         // 0 = white, 1 = black
  polyOmono = random([0, 1]);       // 0 = gentle color variations, 1 = riotous color varations
  pHue = randomInt(0, 360);         // primary hue - base hue from which drawing proceeds
  minimalistic = random([0, 1]);    // 0 = minimalistic, 1 = many layered
  palChoice = random([0,1]);       // 0 = generalized color system, 1 = artist palette 
  
  // set derived controls - changes in hue
  if(palChoice==0) {pType="Random"}
  else {pType = palTypes[randomInt(0, palTypes.length-1)]};

  // set derived controls - changes in hue
  if (polyOmono ==0) // favor gentler color combos
  {
    hMin = 4;   // minimun distance around color wheel to consider when varying hue
    hMax = 8;  // maximum distance to consider
  }
  else // favor more riotous color combos
  {
    hMin = 20;
    hMax = 60;
  }

  // set derived controls - range of saturation, brightness, & transparency
  sat1 = 10;  sat2 = 100; brt1 = 20; brt2 = 100; trn1 = 20; trn2 = 70;  // defaults
  if (minimalistic == 0) // fewer layers, denser color
  { 
    numLayers = randomInt(10,20);
    trn1 = 50; trn2 = 80;
  }
  else
  { 
    numLayers = randomInt(30, 40);
    trn1 = 20; trn2 = 50;
  } 

  // set internal controls
  resM = 5;  // resolution multiplier 
  frameRate(1); // slow things down so that building can be experienced
  layerCnt=0;

  // set features
  setFeatures();

  // display major control values for testing purposes
  console.log("poly=", polyOmono, "minimalistic=", minimalistic, "pHue=", pHue, "palChoice =" , palChoice, "pType=", pType, "numLayrs=", numLayers);
  console.log(backgroundText, colorText, aspectRatioText, minimalisticText);
}

function setFeatures()
{
  switch(aspectRatio)
  {
    case 0:
      aspectRatioText = "Square";
      break;
    case 1:
      aspectRatioText = "2:3 Horizontal";
      break;
    case 2:
      aspectRatioText = "16:9 Portrait";
      break
  }
  switch(backgrnd)
  {
    case 0:
      backgroundText = "White";
      break;
    case 1:
      backgroundText = "Black";
      break;
  }
  switch(minimalistic)
  {
    case 0:
      minimalisticText = "Sparse";
      break;
    case 1:
      minimalisticText = "Dense";
      break;
  }
  if (pType == "Random")
  {
    if (polyOmono == 0)
    {
      colorText = "Random Monochrome";
    }
    else
    {
      colorText = "Random Polychrome";
    }

  }
  else
  {
    colorText = pType;
  }
}

function prepareBase(backgrnd, polyOmono) // set background & base color
{
  switch (backgrnd)
  {
    case 0:
      background(0, 0, 100, 100);  // white background
      break;
    case 1:
      background(0, 100, 0, 100);  // black background
      break;
  }
  setWorkingColor(pHue, pType);  // initialize color controls
}

function buildLayers(numLayers)
{
  let pArray = [];
  let x = 0;
  let y = 0;
  if (minimalistic == 0)
  {
    x = random(width * .2, width * .6)
    y = random(height *.2, height * .6)
  }
  else
  {
    x = random(width*.1, width*.9);
    y = random(width*.1, height*.9);
  }
  for (i=0; i<numLayers; i++)
  { 
    paintFlower1(x,y);
    paintPhrase(x-(width*.2), y, 'code'); 
    paintPhrase(x-(width*.2), y, 'script');
    paintFlower2();
    layr[i]=get();  // store results
    pArray = randomWalk(x, y); // get next set of coordinates
    x = pArray[0];
    y = pArray[1];
  } 
}

function paintPhrase(x, y, fType)
{
  push();
    let pIndx = randomInt(0, phrases.length-1);
    if (randomInt(0, 1000)%2 == 0) {rotateRight(90)}
    let fScale = random(width*.06, width*.09);
    textAlign(CENTER, CENTER);
    setWorkingColor(hue, pType);
    fill(hue, sat, brt, trn);  
    noStroke();
    chooseFontByType(fType, fScale);
    text(phrases[pIndx], x, y);
  pop();
}

function paintFlower1(x,y)
{
  push();
    setWorkingColor(hue, pType);
    fill(hue, sat, brt, trn);  
    noStroke();
    let radius = random(min(width, height)*.05,min(width, height)*.2);
    let roughness = random(min(width, height)*.1,min(width, height)*.5); // larger multiplier = more petals
    translate(x, y); 
    beginShape(); 
      let off = 0;
      let change = 0;
      for (var j = 0; j < TWO_PI; j += 0.1) 
      {
        angle = j*random(90); 
        rotate(angle+change); 
        var offset = map(noise(off, change), 0, 1, -roughness, roughness);
        var r = radius + offset;
        var x = r * cos(j);
        var y = r * sin(j);
        vertex(x, y);
        off += 0.1;
        change += random(0.5, 0.8);
      }
    endShape(); 
  pop();
}

function paintFlower2()
{
  push();
    pIndx = randomInt(0, pnts.length-1);
    x = pnts[pIndx].x;
    y = pnts[pIndx].y;
    setWorkingColor(hue, pType);
    fill(hue, sat, brt, trn);  
    noStroke();
    let radius = random(min(width, height)*.05,min(width, height)*.2);
    let roughness = random(min(width, height)*.1,min(width, height)*.5); // larger multiplier = more petals
    translate(x, y); 
    beginShape(); 
      let off = 0;
      let change = 0;
      for (var j = 0; j < TWO_PI; j += 0.1) 
      {
        angle = j*random(90); 
        rotate(angle+change); 
        var offset = map(noise(off, change), 0, 1, -roughness, roughness);
        var r = radius + offset;
        var x = r * cos(j);
        var y = r * sin(j);
        vertex(x, y);
        off += 0.1;
        change += random(0.5, 0.8);
      }
    endShape(); 
  pop();
}

function drawTitlePage(backgrnd)
{
  push();
    switch(backgrnd)
    {
      case 0: // white
        background(0, 0, 100, 100);
        fill(0, 100, 0, 100); 
        break;
      case 1: // black
        background(0, 100, 0, 100);
        fill(0, 0, 100, 100); 
        break;
    }
    translate(0,0);
    chooseFontByName("print", 1);
    noStroke();

    // title
    var tLen = title.length;
    textSize(width/title.length*.8); 
    let x = (width-textWidth(title))/2;
    let y = height*.42;
    text(title, x, y);

    // author
    textSize(width/author.length*.6); 
    x = (width-textWidth(author))/2;
    y = height*.54;
    text(author, x, y);

    // creation date
    textSize(width/builtIn.length*.4); 
    x = (width-textWidth(builtIn))/2;
    y = height*.6;
    text(builtIn, x, y);
  pop();
}

function drawImage(layerCnt) 
{
  // Add layers to canvas
  blend(layr[layerCnt], 0, 0, width, height, 0, 0, width, height*1.05, BLEND); 
  // slight exageration of height due to odd problem of a line of unpainted pixels
  // along the bottom that appeared only on the horizontal aspectratio 
}

// +++++++++++++++++++++++++++++++++++++++++++++++++++++
// FUNCIONS -FONT SYSTEM COMPONENTS
// +++++++++++++++++++++++++++++++++++++++++++++++++++++

function chooseFontByName(fName, fScale)
{
  let i=0;
  let found = 0;
  while(found == 0 && i<fonts.length)
  {
    if(fonts[i].name == fName)
    {
      fonts[i].selectFont(fScale); // set textFont and textSize
      found = 1;
    }
    i= i+1;
  }
  if(found==0) {fonts[randomInt(0, fonts.length-1)].selectFont(fScale)} // catchall
}

function chooseFontByType(fType, fScale)
{
  let i=0;
  let found = 0;
  while(found == 0)
  {
    i = randomInt(0, fonts.length-1); // random font selection
    if(fonts[i].type == fType) // use only if of correct type
    {
      fonts[i].selectFont(fScale); // set textFont and textSize
      found = 1;
    }
  }
}

// +++++++++++++++++++++++++++++++++++++++++++++++++++++
// FUNCIONS - COLOR SYSTEM COMPONENTS
// +++++++++++++++++++++++++++++++++++++++++++++++++++++

function setWorkingColor(hc, pType)  // pass in starting hue
{
  if(pType=="Random")
  {
    hue = varyHue(hc); 
    sat = randomInt(sat1, sat2); // saturation              
    brt = randomInt(brt1, brt2);  // brightness
    trn = randomInt(trn1, trn2);  // transparency
  }
  else
  {
    shuffle(palettes, true);
    choosePalette(pType);
  }
}

function varyHue(hc)  // adjust hue by distance & direction 
{
  let d1 = randomInt(hMin, hMax); // distance on color wheel to use to vary
  let d2 = randomInt(1, 1000)%2; // direction on color wheel
  switch(d2)
    {
      case 0:
        hue = int((hc + d1)) % 360;
        break;
      case 1:
        hue = (int(hc - d1) + 360) % 360;
        break;
    }
  return(hue);
}

function varyBrightness(brt)  // adjust hue by distance & direction 
{
  let d1 = randomInt(brt1, brt2); // distance on color wheel to use to vary
  let d2 = randomInt(1, 1000)%2; // direction 
  switch(d2)
    {
      case 0:
        brt = int((brt + d1)) % 100;
        break;
      case 1:
        brt = (int(brt - d1) + 100) % 100;
        break;
    }
  return(brt);
}

function varyTransparency(trn)  // adjust hue by distance & direction 
{
  let t1 = randomInt(trn1, trn2); // distance on color wheel to use to vary
  let t2 = randomInt(1, 1000)%2; // direction 
  switch(t2)
    {
      case 0:
        trn = int((trn + t1)) % 100;
        break;
      case 1:
        trn = (int(brt - t1) + 100) % 100;
        break;
    }
  return(trn);
}

function invertColor(hc)  // replace working hue with its complementary
{
  hue = (hc + 180) % 360; 
  return hue;
}

function averageColor(hc1, hc2) // replace working hue with average of inputs
{
  hue = (hc1 + abs((hc1-hc2)/ 2))%360;
  return hue;
}

function choosePalette(pType)
{
  let i=0;
  let found = 0;
  while(found == 0 && i<palettes.length-1)
  {
    if(palettes[i].type == pType)
    {
      palettes[i].selectColor(); 
      found = 1;
    }
    i= i+1;
  }
  if(found==0) {palettes[randomInt(0, palettes.length-1)].selectColor()} // catchall
}

// +++++++++++++++++++++++++++++++++++++++++++++++++++++
// STANDARD TEMPLATE AND UTILITY FUNCTIONS - INCLUDE IN ALL PROJECTS
// +++++++++++++++++++++++++++++++++++++++++++++++++++++
function setupCanvas(m)
{
  let w = 0;
  let h = 0;
  switch(aspectRatio)
  {
    case 0: // square
      h = min(windowWidth, windowHeight) * m;
      w = h;
      break;
    case 1: // rectangular horizontal
      w = windowWidth * m;
      h = w*2/3;  //2:3 ratio
      break;
    case 2: // rectangular portrait
      h = windowHeight * m;
      w = h*.5625;  
      break;
  }
  createCanvas(w,h);
}

function randomInt(min, max) 
{

  return floor(random() * (max - min + 1)) + min;
}

function randomWalk (x, y)
{
  if(random(-100, 100)> 0) {xDir = 1} else {xDir = -1};
  if(random(-100, 100)> 0) {yDir = 1} else {yDir = -1};
  x = x + (random(width * .1, width *.2) * xDir);
  y = y + (random(height * .1, height * .2) * yDir);
  if (x<0 || x>width) {x = random(0, width)};
  if (y<0 || y>height) {y = random(0, height)};
  return [x, y];
}

function keyPressed()
{  
   if (key == 'd' || key == 'D') // download full res output
   {
    saveCanvas('wandaOliver_' + seed, 'png');
   }
}

function checkPreviewStatus()
{
  // +++++++++++++++++++ DO NOT CHANGE +++++++++++++++++
  // REQUIRED BY FXHASH
  // call fxpreview once confirmation that preview is ready
  i = 0;
  while (i != 1) 
    {
      if ((isFxpreview = true)) {fxpreview(); i = 1;}
    }
  // +++++++++++++++++++++++++++++++++++++++++++++++++++
}

function rotateRight(d)
{
  translate(width, 0);
  rotate(radians(d));
}

function rotateLeft(d)
{
  translate(0, width);
  rotate(radians(-d));
}

function flipHorizontal()
{
  translate(width, 0);
  scale(-1,1); 
}

function flipVertical()
{
  translate(0, height);
  scale(-1,1); 
}

function testPos(x, y, hue)
{
  push();
    fill(hue, 100, 100, 100); 
    ellipse(x,y, 30); 
  pop();     
}


//####### CLASSES ####################################

class Font 
{
  //The constructor (note no variable declarations above the constructor)  
  constructor(font, name, type, scalar) 
  { 
    this.font = font;
    this.name = name;
    this.type = type;
    this.scalar = scalar;
  } 

  selectFont(fScale)
  {
    textFont(this.font, this.scalar * fScale)
  }
}

class Palette 
{
  //The constructor (note no variable declarations above the constructor)  
  constructor(n, t, h, s, b) 
  { 
    this.name = n;
    this.type = t;
    this.hue = h;
    this.sat = s,
    this.brt = b;
  } 

  selectColor()
  {
    hue = this.hue;
    sat = this.sat;
    brt = this.brt;
    trn = randomInt(trn1, trn2);  // transparency
  }
}

class Point
{
  //The constructor (note no variable declarations above the constructor)  
  constructor(x, y) 
  { 
    this.x = x;
    this.y = y;
  } 
}
