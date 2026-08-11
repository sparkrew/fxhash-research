/*///////////////////////////////////
////       R O O T S - v2        ////
////       Creator: Kukuti       ////
////    @kukuti89 | kukuti.xyz   ////
/////////////////////////////////////
////   Original: December 2021   ////
////   Re-issue: November 2022   ////
////       NFT 2.0 License       ////
/////////////////////////////////////

//A special thanks to GFreedom who helped me a lot in the beginning o/

Glad to be part of BRxHash Community!
*/

// SETTING GENERAL VARIABLES =====================================================================
p5.disableFriendlyErrors = true;
let seed = fxrand();
let wid, hei, widRefer, heiRefer;
let pad = 20;
let ratio = 1

let projectName = "R o o t s - v2";
var particles_1 = [],
    particles_2 = [],
    particles_3 = [],
    myObj = {
        nums: 0,
        scale: 0,
        colors_bg: [],
        colors_line: [],
        colorLineName: "",
        colorBgName: "",
        colorSelected: "",
    };

// RANDOM ELEMENTS FUNCTIONS ====================================================================

function setNum(e) {
  var o;
  return (
    (o =
      e <= 0.14
        ? 50
        : e <= 0.28
        ? 100
        : e <= 0.42
        ? 150
        : e <= 0.7
        ? 200
        : e <= 0.84
        ? 250
        : e <= 0.98
        ? 300
        : 500),
    (myObj.nums = o),
    myObj.nums
  );
}
function setScale(e) {
  var o;
  return (
    (o =
      e <= 0.17
        ? 500
        : e <= 0.34
        ? 600
        : e <= 0.51
        ? 700
        : e <= 0.68
        ? 800
        : e <= 0.85
        ? 900
        : 1000),
    (myObj.scale = o),
    myObj.scale
  );
}

// RANDOM COLOR FUNCTIONS =======================================================================

function setColorBg(e) {
  (myObj.colors_bg = "#000000,#340101,#070231,#1d0322,#091e00,#212121"
    .split(",")
    .map((e) => e)),
      e <= 0.16
      ? ((myObj.colorSelected = myObj.colors_bg[0]),
        (myObj.colorBgName = "Black"))
      : e <= 0.32
      ? ((myObj.colorSelected = myObj.colors_bg[1]),
        (myObj.colorBgName = "Blood"))
      : e <= 0.48
      ? ((myObj.colorSelected = myObj.colors_bg[2]),
        (myObj.colorBgName = "Deep Ocean"))
      : e <= 0.64
      ? ((myObj.colorSelected = myObj.colors_bg[3]),
        (myObj.colorBgName = "Wine"))
      : e <= 0.82
      ? ((myObj.colorSelected = myObj.colors_bg[4]),
        (myObj.colorBgName = "Swamp"))
      : ((myObj.colorSelected = myObj.colors_bg[5]),
        (myObj.colorBgName = "Steel"));
}

function setColorLines(e) {
    e <= 0.25
    ? ((myObj.colors_line = "#fc0214,#259000,#ffea00,#6cff00,#f7ff73,#ff7373"
        .split(",")
        .map((e) => e)),
      (myObj.colorLineName = "Reggae"))
    : e <= 0.5
    ? ((myObj.colors_line = "#bffaff,#7200ff,#00ff90,#001eff,#c2c2c2,#01845a"
        .split(",")
        .map((e) => e)),
      (myObj.colorLineName = "Cold"))
    : e <= 0.75
    ? ((myObj.colors_line = "#00fff6,#40ff64,#f95dff,#fff25d,#ee00f1,#ff9600"
        .split(",")
        .map((e) => e)),
      (myObj.colorLineName = "Neon"))
    : ((myObj.colors_line = "#00ff2a,#00baff,#ffffff,#00712d,#4482ff,#dc8c02"
        .split(",")
        .map((e) => e)),
      (myObj.colorLineName = "Nature"));
}

    setColorBg(fxrand());
    setNum(fxrand());
    setScale(fxrand());
    setColorLines(fxrand());    

// SETUP ========================================================================================

function setup() {
  randomSeed(seed);
  noiseSeed(seed);
  wid = 0;
  hei = 0;
  widRefer = windowWidth;
  heiRefer = windowHeight;

  widRefer >= heiRefer
    ? ((hei = heiRefer), (wid = hei / ratio))
    : ((wid = widRefer), (hei = wid * ratio));

  createCanvas(wid - pad, hei - pad);
  background(color(myObj.colorSelected));
     
  for (var e = 0; e < myObj.nums; e++){
    (particles_1[e] = new Particle(random(0, width), random(0, height))),
    (particles_2[e] = new Particle(random(0, width), random(0, height))),
    (particles_3[e] = new Particle(random(0, width), random(0, height)));
  }
}

// DRAW =========================================================================================

function draw() {
  noStroke();
  smooth();
  for (var e = 0; e < myObj.nums; e++) {
    var o = map(e, 0, myObj.nums, 1, 2);
    var l = map(e, 0, myObj.nums, 0, 250);
      (s = color(particles_1[e].color)).setAlpha(l);
      fill(s);
      particles_1[e].move();
      particles_1[e].display(o);
      particles_1[e].checkCanvas();
      (s = color(particles_2[e].color)).setAlpha(l);
      fill(s);
      particles_2[e].move();
      particles_2[e].display(o);
      particles_2[e].checkCanvas();
      (s = color(particles_3[e].color)).setAlpha(l);
      fill(s);
      particles_3[e].move();
      particles_3[e].display(o);
      particles_3[e].checkCanvas();
  }
if (frameCount > 1000) noLoop(), fxpreview();
}

// FEATURES ======================================================================================

window.$fxhashFeatures = {
    Particles: myObj.nums,
    Scale: myObj.scale,
    "Lines Colors": myObj.colorLineName,
    "Background Color": myObj.colorBgName,
  };
  console.table(window.$fxhashFeatures)
  console.log(projectName)
  console.log('HASH: ' + fxhash);

  // SAVE =========================================================================================
  function keyTyped() {
    if (key === "s" || key === "S") {
      saveCanvas(projectName + " - " + fxhash, "png");
    }
  }
