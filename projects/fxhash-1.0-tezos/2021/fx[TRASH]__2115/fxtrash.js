let hash = fxhash;
let sz; 
let features = {};
let bgcode;
let bgimage;
let subjectimage;
let cyan, magenta, white;
let tripcount;
let imgx, imgy;
let bgcolors = ["#FFFFFF", "#000000", "#FF00FF", "#00FFFF", "#00FF00", "#F7DC6F", "#FF8633", "#FF0000", "#0000FF", "#C0C0C0"];
let strokecolor;
let flipflop = -1;
let trash, doubletrash;
let dechash = "";
for (let i = 6; i < hash.length; i++) {
  dechash += hash.substring(i, i + 1).charCodeAt();
}

bgcode = parseInt(dechash.substring(20, 22));
if (bgcode < 5) {
  features.Background = "hyperglitch";
} 
else if (bgcode < 15) {
  features.Background = "disruption";
}
else if (bgcode < 25) {
  features.Background = "dumpster hash";
}
else if (bgcode < 45) {
  features.Background = "rainbow";
}
else if (bgcode < 65) {
  features.Background = "trashed";
}
else {
  features.Background = "solid";
}

bordercode = parseInt(dechash.substring(22, 24));
if (bordercode < 5) {
  features.Border = "woozy";
}
else if (bordercode < 35) {
  features.Border = "striped";
}
else {
  features.Border = "none";
}

subjectcode = parseInt(dechash.substring(24, 26));

if (subjectcode < 2) {
  features.Type = "super extendo toter";
}
else if (subjectcode < 7) {
  features.Type = "toter trip";
  tripcount = 0;
}
else if (subjectcode < 12) {
  features.Type = "trash o lantern";
}
else if (subjectcode < 22) {
  features.Type = "cypher toter";
}
else if (subjectcode < 32) {
  features.Type = "high amplitude toter";
}
else if (subjectcode < 66) {
  features.Type = "chameleon toter";
}
else {
  features.Type = "trash bag";
}

signedcode = parseInt(dechash.substring(26, 28));
if (signedcode < 5) {
  features.Signed = "yes";
}
else {
  features.Signed = "no";
}

if (features.Background == "hyperglitch" && features.Border == "woozy" && features.Type == "super extendo toter" && features.Signed == "yes") {
  features.Special = "HOLY GRAIL";
}
else {
  features.Special = "none";
}

window.$fxhashFeatures = features;

function preload() {
  if (features.Background == "disruption") {
    bgimage = loadImage("./bg/disruption.jpg");
  }
  if (features.Background == "dumpster hash") {
    bgimage = loadImage("./bg/vision.jpg");
  }
  if (features.Background == "trashed") {
    trash = loadImage("./trash.png");
    doubletrash = loadImage("./doubletrash.png");
  }

  if (features.Type == "super extendo toter") {
    subjectimage = loadImage("./subjects/extendo.png");
  }
  if (features.Type == "trash o lantern") {
    subjectimage = loadImage("./subjects/trasholantern.png");
  }
  if (features.Type == "cypher toter") {
    subjectimage = loadImage("./subjects/cypher.png");
  }
  if (features.Type == "high amplitude toter") {
    subjectimage = loadImage("./subjects/highamp.png");
  }
  if (features.Type == "chameleon toter") {
    subjectimage = loadImage("./subjects/chameleon.png");
  }
  if (features.Type == "trash bag") {
    subjectimage = loadImage("./subjects/trashbag.png");
  }
  if (features.Type == "toter trip") {
    cyan = loadImage("./subjects/cyan.png");
    magenta = loadImage("./subjects/magenta.png");
    white = loadImage("./subjects/white.png");
  }

  if (features.Signed == "yes") {
    if (features.Background == "solid" && parseInt(dechash.substring(6, 7)) == 0) {
      sig = loadImage("./sigblack.png");
    }
    else {
      sig = loadImage("./sigwhite.png");
    }
  }
}

function setup() {
  createCanvas(1080, 1080);

  scale(1.8);
  
  background(0);

  drawBackground();

  frameRate(16);
  
  if (features.Border == "striped") {
    drawStripedBorder();
  }

  if (features.Type != "toter trip") {
    imgx = 300 - subjectimage.width / 2;
    imgy = 300 - subjectimage.height / 2;
    image(subjectimage, imgx, imgy);
  }
  else {
    imgx = 300 - cyan.width / 2;
    imgy = 300 - cyan.height / 2;
  }

}

function playvideo() {
  bgvideo.size(600, 600);
  bgvideo.volume(0);
  bgvideo.play();
  bgvideo.loop();
  bgvideo.hide();
}

function draw() {
  scale(1.8);
  if (features.Background == "hyperglitch") {
    image(bgvideo, 0, 0);
    if (features.Border == "striped") {
      drawStripedBorder();  
    }
    if (features.Type != "toter trip") {
      image(subjectimage, imgx, imgy);
    }
  }

  if (features.Border == "woozy") {
    push();
      if (flipflop == -1) {
        strokecolor = 0;
      }
      else if (flipflop == 1) {
        strokecolor = 255;
      }
      strokeWeight(3);
      noFill();
      stroke(strokecolor);
      square(2, 2, 596);
      toggleStroke();
      square(5, 5, 590);
      toggleStroke();
      square(8, 8, 584);
      toggleStroke();
      square(11, 11, 578);
      toggleStroke();
      square(14, 14, 572);
      toggleStroke();
      square(17, 17, 566);
      toggleStroke();
      square(20, 20, 560);
      toggleStroke();
    pop();
  }

  if (features.Type == "toter trip") {
    if (tripcount == 0) {
      image(cyan, imgx, imgy);
      tripcount++;
    }
    else if (tripcount == 1) {
      image(magenta, imgx, imgy);
      tripcount++;
    }
    else {
      image(white, imgx, imgy);
      tripcount = 0;
    }
  }

  if (features.Signed == "yes") {
    image(sig, 520, 530);

  }

  flipflop *= -1;
}

function drawBackground() {
  if (features.Background == "hyperglitch") {
    bgvideo = createVideo(['./bg/hyperglitch.mp4'], playvideo);
  }
  else if (features.Background == "disruption") {
    image(bgimage, 0, 0);
  }
  else if (features.Background == "dumpster hash") {
    image(bgimage, 0, 0);
  }
  else if (features.Background == "rainbow") {
    for (let i = 0; i < 10; i++) {
      fill("#FF0000");
      rect(0 + i*60, 0, 10, 600);
      fill("#FFA500");
      rect(10 + i*60, 0, 10, 600);
      fill("#FFFF00");
      rect(20 + i*60, 0, 10, 600);
      fill("#00FF00");
      rect(30 + i*60, 0, 10, 600);
      fill("#0000FF");
      rect(40 + i*60, 0, 10, 600);
      fill("#FF00FF");
      rect(50 + i*60, 0, 10, 600);
    }
  }
  else if (features.Background == "trashed") {
    for (let i = 0; i < 10 + parseInt(dechash.substring(4, 6)); i++) {
      let x = ((parseInt(dechash.substring(6 + i*2, 7 + i*2)) / 10) * 600);
      let y = ((parseInt(dechash.substring(7 + i*2, 8 + i*2)) / 10) * 600);
      push();
        translate(300, 300);
        rotate(parseInt(dechash.substring(8 + i*2, 9 + i*2)));
        image(trash, x - 300, y - 300, 87, 30);
      pop();
    }
    for (let i = 0; i < 10; i++) {
      let y = i * 60;
      if(parseInt(dechash.substring(8 + i*2, 8 + i*2)) < 4) {
        dtcount = parseInt(dechash.substring(8 + i*2, 9 + i*2));
      }
      else {
        dtcount = 0;
      }
      for (let j = 0; j < dtcount; j++) {
        let x = (parseInt(dechash.substring(9 + i*2 + j, 10 + i*2 + j)) / 10) * 600;  
        image(doubletrash, x, y);
      }
    }
  }
  else if (features.Background == "solid") {
    background(bgcolors[parseInt(dechash.substring(6, 7))]);
  }
}

function drawStripedBorder() {
  push();
    noStroke();
    for (let i = 0; i < 30; i++) {
      if (i % 2) {
        fill(255);
      }
      else {
        fill(0);
      }
      square(i * 20, 0, 20);
    }
    for (let i = 1; i < 30; i++) {
      if (i % 2) {
        fill(0);
      }
      else {
        fill(255);
      }
      square(580, i*20, 20);
    }
    for (let i = 29; i > 0; i--) {
      if (i % 2) {
        fill(0);
      }
      else {
        fill(255);
      }
      square(i*20, 580, 20);
    }
    for (let i = 29; i > 0; i--) {
      if (i % 2) {
        fill(255);
      }
      else {
        fill(0);
      }
      square(0, i * 20, 20);
    }

  pop();
}

function toggleStroke() {
  if (strokecolor == 0) {
    strokecolor = 255;
    stroke(255);
  }
  else if (strokecolor == 255) {
    strokecolor = 0;
    stroke(0);
  }
}


