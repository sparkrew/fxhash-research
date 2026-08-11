new p5();
const pallete1 = ["#FFF600", "#FF005C", "#810034", "#26001B"];
const pallete2 = ["#0CECDD", "#FFF338", "#FF67E7", "#C400FF"];
const pallete3 = ["#FFED99", "#F6B8B8", "#AC66CC", "#3B14A7"];
const pallete4 = ["#00EAD3", "#FFF5B7", "#FF449F", "#005F99"];
const pallete5 = ["#E8F044", "#DC2ADE", "#323EDD", "#4D089A"];
const pallete6 = ["#F0A500", "#334756", "#082032", "#000000"];

const palletes = [pallete1, pallete2, pallete3, pallete4, pallete5, pallete6];
var selector = randomInt(6);
var corrupt = randomInt(9);
var corruptPalette = randomIntRange(500, 999);
var myColor, myColor2;
var spacer = randomIntRange(10, 1000 * 1.00001);

function setup() {
  createCanvas(1000, 1000);
  noLoop();
  for (var i = 0; i < pallete1.length; i++) {
    myColor = color(palletes[selector][randomInt(pallete1.length)]);
  }
}

function draw() {
  background(myColor);

  noFill();

  strokeCap(SQUARE);
  strokeJoin(MITER);
  strokeWeight(spacer);
  for (let i = 0; i < width; i++) {
    for (var j = 0; j < pallete1.length; j++) {
      myColor2 = color(palletes[selector][randomInt(pallete1.length)]);
    }
    stroke(myColor2);

    drawingContext.setLineDash([
      randomInt(5),
      randomInt(5),
      randomInt(10),
      randomInt(10),
      randomInt(15),
      randomInt(15),
      randomInt(20),
      randomInt(20),
      randomInt(25),
      randomInt(25),
      randomInt(30),
      randomInt(30),
      randomInt(35),
      randomInt(35),
      randomInt(40),
      randomInt(40),
      randomInt(45),
      randomInt(45),
      randomInt(50),
      randomInt(50),
    ]);

    rect(
      i,
      -10,
      randomIntRange(10, spacer % i),
      randomRange(100, height + 300)
    );

    push();
    translate(width, height);
    rotate(radians(180));
    rect(
      i,
      -10,
      randomIntRange(10, spacer % i),
      randomRange(100, height + 300)
    );
    pop();

    shadow1(randomRange(-10, 10), randomRange(-10, 10), 0, myColor2);

    if (corrupt >= 2) {
      console.log("clean data");
    } else {
      console.log("bad data");
      blendMode(DIFFERENCE);
    }
    drawingContext.globalAlpha = 0.9;
    drawingContext.filter = "blur (2px)";
  }

  gorillate(6);
  console.log("IBS Data Stream Identifier: " + fxhash);
  fxpreview();
}

function mousePressed() {
  save("DGA_Compression.png");
}

function gorillate(gA) {
  loadPixels();
  let d = pixelDensity();
  let halfImage = 4 * (width * d) * (height * d);
  for (let i = 0; i < halfImage; i += 4) {
    grainAmount = randomIntRange(-gA, gA);
    pixels[i] = pixels[i] + grainAmount;
    pixels[i + 1] = pixels[i + 1] + grainAmount;
    pixels[i + 2] = pixels[i + 2] + grainAmount;
    pixels[i + 3] = pixels[i + 3] + gA * 2;
  }
  updatePixels();
}

function shadow1(xoff, yoff, sblur, scolor) {
  return (
    (drawingContext.shadowOffsetX = randomIntRange(-xoff, xoff)),
    (drawingContext.shadowOffsetY = randomIntRange(-yoff, yoff)),
    (drawingContext.shadowBlur = sblur),
    (drawingContext.shadowColor = scolor)
  );
}

function randomIntRange(min, max) {
  min = ceil(min);
  max = floor(max);
  return floor(fxrand() * (max - min + 1) + min);
}

function randomRange(min, max) {
  return fxrand() * (max - min) + min;
}

function randomInt(max) {
  return floor(fxrand() * max);
}

function compress(val) {
  return floor(val * 0.1) + "%";
}

function getColor(value) {
  if (value === 0 && corrupt >= 2) {
    return "currywurst on a sunny day";
  } else if (value === 0 && corrupt < 2) {
    return "rotten currywurst";
  }
  if (value === 1 && corrupt >= 2) {
    return "neon candy";
  } else if (value === 1 && corrupt < 2) {
    return "tainted neon candy";
  }
  if (value === 2 && corrupt >= 2) {
    return "creamsicle sunrise";
  } else if (value === 2 && corrupt < 2) {
    return "poisoned creamsicle surprise";
  }
  if (value === 3 && corrupt >= 2) {
    return "unicorn milk";
  } else if (value === 3 && corrupt < 2) {
    return "spoiled unciorn milkshake";
  }
  if (value === 4 && corrupt >= 2) {
    return "betamax won the war";
  } else if (value === 4 && corrupt < 2) {
    return "the world as it is today";
  }
  if (value === 5 && corrupt >= 2) {
    return "squid ink burger with fries";
  } else if (value === 5 && corrupt < 2) {
    return "squid ink burger air fried for 3 hours";
  }
}

function dataCorruption() {
  if (corrupt >= 2) {
    return "no corruption detected";
  } else {
    return "your data has been corrupted";
  }
}

function compressionTime(a) {
  return nfc(a * 0.0099, 2) + " " + "hours";
}

window.$fxhashFeatures = {
  "Compression Level": compress(spacer),
  "Elapsed Time": compressionTime(spacer),
  "Data Corruption": dataCorruption(corrupt),
  "Data Pallete Interpolation": getColor(selector),
};
