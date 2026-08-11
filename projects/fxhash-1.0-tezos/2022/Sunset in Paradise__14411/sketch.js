// Sunset in Paradise
// @P1x3lboy - June 2022

const w = 3200;
const h = 3200;

var sunCol, bgCol, pal, numWalkers, numReflection, numSea, wt, wName, matchingB, bd, sky, skyNum, bgColName;
let cl = []
let walkers = []
let seaWalkers = []
let sunWalkers = []

var bgCol = rnd_int(2, 6);
var strkW = rnd_btw(0, 10);
if (strkW > 2.5) wt = .35, wName ="Medium-Point"
else wt = .18, wName ="Fine"

var borderHash = rnd_btw(0,10);
if (borderHash > 6) bd = 0, matchingB ="Sun Color"
else bd = 1, matchingB ="Sea Color"

var skyHash = rnd_btw(0,10);
if (skyHash > 7.5) sky = 6, skyNum ="Complex"
else if (skyHash > 2.5) sky = 5, skyNum ="Normal"
else sky = 4, skyNum ="Refined"

var hash = rnd_btw(0, 32);
if (hash > 31) cl[0]='#fca311', cl[1]='#44313d', cl[2]='#222222', cl[3]='#aaaaaa', cl[4]='#eeeeee', cl[5]='#000000', cl[6]='#FFFFFF', pal="Charlotte"
else if (hash > 30) cl[0]='#f0df99', cl[1]='#1a748e', cl[2]='#55c4d7', cl[3]='#d38e31', cl[4]='#992915', cl[5]='#000000', cl[6]='#FFFFFF', pal="Tamsin"
else if (hash > 29) cl[0]='#fde74c', cl[1]='#9bc53d', cl[2]='#5bc0eb', cl[3]='#e55934', cl[4]='#fa7921', cl[5]='#000000', cl[6]='#FFFFFF', pal="Henrietta"
else if (hash > 28) cl[0]='#e0ff4f', cl[1]='#0b3954', cl[2]='#bfd7ea', cl[3]='#ff6663', cl[4]='#dddddd', cl[5]='#000000', cl[6]='#FFFFFF', pal="Lillian"
else if (hash > 27) cl[0]='#fbb13c', cl[1]='#d81159', cl[2]='#8f2d56', cl[3]='#218380', cl[4]='#73d2de', cl[5]='#000000', cl[6]='#FFFFFF', pal="Frankie"
else if (hash > 26) cl[0]='#ffc600', cl[1]='#2b2d42', cl[2]='#edf2f4' ,cl[3]='#ef233c', cl[4]='#b2c2c9', cl[5]='#000000', cl[6]='#FFFFFF', pal="Sienna"
else if (hash > 25) cl[0]='#da8c2f', cl[1]='#d7bc8a', cl[2]='#d16a65', cl[3]='#8fdccd', cl[4]='#51c8be', cl[5]='#000000', cl[6]='#FFFFFF', pal="Tabitha"
else if (hash > 24) cl[0]='#f49d37', cl[1]='#d72638', cl[2]='#3f88c5', cl[3]='#5a576c', cl[4]='#f22b29', cl[5]='#000000', cl[6]='#FFFFFF', pal="Eleanor"
else if (hash > 23) cl[0]='#efbcd5', cl[1]='#2e294e', cl[2]='#be97c6', cl[3]='#8661c1', cl[4]='#4b5267', cl[5]='#000000', cl[6]='#FFFFFF', pal="Elizabeth"
else if (hash > 22) cl[0]='#E3E8EA', cl[1]='#9BA8AE', cl[2]='#222222', cl[3]='#707A7E', cl[4]='#495054', cl[5]='#000000', cl[6]='#FFFFFF', pal="Belle"
else if (hash > 21) cl[0]='#91f5ad', cl[1]='#c2e812', cl[2]='#8b9eb7', cl[3]='#745296', cl[4]='#632a50', cl[5]='#000000', cl[6]='#FFFFFF', pal="Coraline"
else if (hash > 20) cl[0]='#fffd98', cl[1]='#b9e3c6', cl[2]='#59c9a5', cl[3]='#d81e5b', cl[4]='#23395b', cl[5]='#000000', cl[6]='#FFFFFF', pal="Emme"
else if (hash > 19) cl[0]='#fed0bb', cl[1]='#582936', cl[2]='#8c2f39', cl[3]='#b23a48', cl[4]='#fcb9b2', cl[5]='#000000', cl[6]='#FFFFFF', pal="Rose"
else if (hash > 18) cl[0]='#ddb771', cl[1]='#073b3a', cl[2]='#0b6e4f', cl[3]='#6bbf59', cl[4]='#08a045', cl[5]='#000000', cl[6]='#FFFFFF', pal="Lisa"
else if (hash > 17) cl[0]='#bfdbf7', cl[1]='#022b3a', cl[2]='#1f7a8c', cl[3]='#e1e5f2', cl[4]='#eeeeee', cl[5]='#000000', cl[6]='#FFFFFF', pal="Olivia"
else if (hash > 16) cl[0]='#f7b538', cl[1]='#780116', cl[2]='#db7c26', cl[3]='#d8572a', cl[4]='#c32f27', cl[5]='#000000', cl[6]='#FFFFFF', pal="Jessica"
else if (hash > 15) cl[0]='#d1e44a', cl[1]='#9dd946', cl[2]='#fbebde', cl[3]='#fb580d', cl[4]='#c73601', cl[5]='#000000', cl[6]='#FFFFFF', pal="Ruby"
else if (hash > 14) cl[0]='#fbc646', cl[1]='#ee8005', cl[2]='#88ab13', cl[3]='#a50239', cl[4]='#282820', cl[5]='#000000', cl[6]='#FFFFFF', pal="Amelia"
else if (hash > 13) cl[0]='#e9ae38', cl[1]='#fed9ad', cl[2]='#187999', cl[3]='#be1124', cl[4]='#770c16', cl[5]='#000000', cl[6]='#FFFFFF', pal="Poppy"
else if (hash > 12) cl[0]='#FDC264', cl[1]='#F75820', cl[2]='#E1351F', cl[3]='#4E1C39', cl[4]='#170E2D', cl[5]='#000000', cl[6]='#FFFFFF', pal="Ava"
else if (hash > 11) cl[0]='#fed9ad', cl[1]='#b7711b', cl[2]='#ca9b53', cl[3]='#01b2d4', cl[4]='#024369', cl[5]='#000000', cl[6]='#FFFFFF', pal="Hannah"
else if (hash > 10) cl[0]='#eaaa3c', cl[1]='#e79969', cl[2]='#ba4613', cl[3]='#81808e', cl[4]='#1a1b20', cl[5]='#000000', cl[6]='#FFFFFF',  pal="Darcy"
else if (hash > 9) cl[0]='#ff9c37', cl[1]='#eb5f00', cl[2]='#d6a779', cl[3]='#fed9ad', cl[4]='#ececec', cl[5]='#000000', cl[6]='#FFFFFF', pal="Mia"
else if (hash > 8) cl[0]='#f85e28', cl[1]='#e1331b', cl[2]='#ccfcee', cl[3]='#3e6c61', cl[4]='#7bd1b8', cl[5]='#000000', cl[6]='#FFFFFF', pal="Sophia"
else if (hash > 7) cl[0]='#ffd600', cl[1]='#71706E', cl[2]='#ac006c', cl[3]='#555ca2', cl[4]='#3a0028', cl[5]='#000000', cl[6]='#FFFFFF', pal="Loretta"
else if (hash > 6) cl[0]='#d85c02', cl[1]='#02a3cf', cl[2]='#50ae02', cl[3]='#d20001', cl[4]='#75468a', cl[5]='#000000', cl[6]='#FFFFFF', pal="Zillah"
else if (hash > 5) cl[0]='#ff9501', cl[1]='#ede6d6', cl[2]='#599a02', cl[3]='#c82425', cl[4]='#f55428', cl[5]='#000000', cl[6]='#FFFFFF', pal="Flora"
else if (hash > 4) cl[0]='#ffed17', cl[1]='#b2c303', cl[2]='#c0cfe6', cl[3]='#7074bd', cl[4]='#da293d', cl[5]='#000000', cl[6]='#FFFFFF', pal="Luna"
else if (hash > 3) cl[0]='#f5efd9', cl[1]='#a0af14', cl[2]='#bd701e', cl[3]='#766440', cl[4]='#3b2a18', cl[5]='#000000', cl[6]='#FFFFFF', pal="Penelope"
else if (hash > 2) cl[0]='#a41322', cl[1]='#f8c7cc', cl[2]='#03d4ad', cl[3]='#025537', cl[4]='#b7c402', cl[5]='#000000', cl[6]='#FFFFFF', pal="Jasmin"
else if (hash > 1) cl[0]='#70ffdf', cl[1]='#ff4df0', cl[2]='#045ded', cl[3]='#1d269b', cl[4]='#9d4dff', cl[5]='#000000', cl[6]='#FFFFFF', pal="Patricia"
else cl[0]='#fcf300', cl[1]='#072ac8', cl[2]='#1e96fc', cl[3]='#a2d6f9', cl[4]='#ffc600', cl[5]='#000000', cl[6]='#FFFFFF', pal="Julia"

borderCol = rnd_int(0, 1);
numWalkers = rnd_int(28, 54);
numReflection = rnd_int(28, 54);
numSea = rnd_int(95, 140);
bgColName = pal + " " + bgCol

function setup() {
    createCanvas(w, h);
    strokeWeight(wt);
    pixelDensity([1])
    background(cl[bgCol]);
    sunCol=0
    createWalkers(numWalkers);
    createReflection(numReflection);
    createSea(numSea);
    console.log(bgColName)
    console.log("numSkyWalkers " + numWalkers);
    console.log("numReflection " + numReflection);
    console.log("numSea " + numSea);
    console.log("Border matches " + matchingB)
    console.log("strokeWeight " + wt + " " + wName)
    console.log("sky Complexity " + sky, skyNum)
}

function createWalkers(num) {
    for (let i = 0; i < num; i++) {
      let pos = createVector(
          (rnd_int(50, 200)),
          (rnd_int(50, 200))
        );
      walkers.push(
        new Walker(pos, createVector(0, 2))
      );
    }
}

function createReflection(num) {
    for (let i = 0; i < num; i++) {
      let pos = createVector(
        (rnd_int(1312, 1322)),
        (rnd_int(1080, 1120))
        );
      sunWalkers.push(
        new Walker(pos, createVector(0, 4.75))
      );
    }
}

function createSea(num) {
    for (let i = 0; i < num; i++) {
      let pos = createVector(
          (rnd_int(50, 200)),
          (rnd_int(1100, 1220))
        );
      seaWalkers.push(
        new Walker(pos, createVector(0, 4.75))
      );
    }
}

function preload() {
  pal = window.$fxhashFeatures["Palette Name"]
  numWalkers = window.$fxhashFeatures["Number of Sky Walkers"]
  numReflection = window.$fxhashFeatures["Number of Reflection Walkers"]
  numSea = window.$fxhashFeatures["Number of Sea Walkers"]
  bgColName = window.$fxhashFeatures["Background Color"]
  wName = window.$fxhashFeatures["Stroke Type"]
  matchingB = window.$fxhashFeatures["Border Color"]
  skyNum = window.$fxhashFeatures["Sky Color Complexity"]
}

function draw() {
    if (frameCount >1400) {
    for (let i = walkers.length-1; i >=0; i--) {
      walkers.splice(i,1);
    }
    for (let i = seaWalkers.length-1; i >=0; i--) {
      seaWalkers.splice(i,1);
    }
    for (let i = sunWalkers.length-1; i >=0; i--) {
      sunWalkers.splice(i,1);
    }
    } else

    walkers.forEach(
        walker => {
            if (!walker.isOut()) {
                walker.utVelocity();
                walker.move();
                stroke(cl[rnd_int(2, sky)]);
                walker.draw();
            }
        }
        );

    seaWalkers.forEach(
        seaWalker => {
            if (!seaWalker.isOut()) {
                seaWalker.utVelocity();
                seaWalker.move();
                stroke(cl[1]);
                seaWalker.draw();
            }
        }
        );

    sunWalkers.forEach(
        sunWalker => {
            if (!sunWalker.isOut()) {
                sunWalker.utVelocity();
                sunWalker.move();
                stroke(cl[sunCol]);
                sunWalker.draw();
            }
        }
        );

      stroke(cl[sunCol]);
      fill(cl[sunCol]);
      arc(1607, 1120, 600, 600, PI , TWO_PI);
      strokeWeight(24)
      stroke(cl[bgCol]);
      fill(cl[bgCol]);
      rect(0,3170,3200)
      stroke(cl[bd]);
      noFill()
      rect(45,45,3110,3110,20)
      strokeWeight(wt);
}

class Walker {
    constructor(pos, v) {
        this.pos = pos;
        this.prevPos = pos;
        this.v = v;
    }
    isOut() {
        return (
            this.pos.x < 0.5
            || this.pos.x > width
            || this.pos.y < 0.5
            || this.pos.y > height
        );
    }
    utVelocity() {
        this.prevPos = createVector(this.pos.x, this.pos.y);
        this.v.x += 200*Math.sin(this.pos.x/512);
        this.v.y += 0.01*Math.sin(this.pos.y/512);
    }
    move() {
        this.pos = p5.Vector.add(this.pos, this.v);
    }
    draw() {
        line(this.prevPos.x, this.prevPos.y, this.pos.x, this.pos.y);
        this.prevPos = createVector(this.pos.x, this.pos.y);
    }
}

function rnd_btw(min, max) {
    return fxrand() * (max - min) + min;
}

function rnd_int(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(fxrand() * (max - min + 1)) + min;
}

window.$fxhashFeatures = {
"Palette Name": pal,
"Border Color": matchingB,
"Background Color": bgColName,
"Stroke Type": wName,
"Number of Sky Walkers": numWalkers,
"Number of Reflection Walkers": numReflection,
"Number of Sea Walkers": numSea,
"Sky Color Complexity": skyNum
}

function keyPressed() {
	if (key == "s") save('sunset-p1x3lboy.png');
}
