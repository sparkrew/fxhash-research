let hash = fxhash;
let sz, szref; 

let features = {};

const nodes = [];
const lines = [];

let bg;
let shapeSize;
let sig;

// determine node color
let nodeColorNonce = fxrand() * 100;
if (nodeColorNonce < 10) {
  features.ColoredNodes = true;
}
else {
  features.ColoredNodes = false;
}


// determine shape
let shapeNonce = fxrand() * 100;
shapeSize = fxrand(); 


if (shapeNonce < 5) {
  features.Shape = "Groovy Circle";
}
else if (shapeNonce < 10) {
  features.Shape = "Groovy Triangle";
}
else if (shapeNonce < 40) {
  features.Shape = "Circle";
}
else if (shapeNonce < 70) {
  features.Shape = "Square";
}
else {
  features.Shape = "Triangle";
}



// determine line color
let linecolornonce = fxrand() * 100;
if (linecolornonce < 1) {
  features.LineColor = "Party Magenta :]";
}
else if (linecolornonce < 10) {
  features.LineColor = "Rainbow";
}
else {
  features.LineColor = "White";
}



// determine node count and generate nodes
let nodecount = Math.floor(fxrand() * 1000); 
for (let i = 0; i < nodecount; i++) {
  let node = {};
  node.x = fxrand(); 
  node.y = fxrand(); 
  node.wobble = fxrand() * fxrand();  
  nodes.push(node);
}


// determine line count and create line details
let linecount = Math.floor(fxrand() * 10);
features.LinePower = linecount;
for (let l = 0; l < linecount; l++) {
  let line = {};
  line.slope = (fxrand() * 500) - (250);  
  line.yint = fxrand();
  lines.push(line);
}




// determine node type
let nodeTypeNonce = fxrand() * 100;
if (nodeTypeNonce < 10) {
  features.NodeType = "Granite";
}
else if (nodeTypeNonce < 30) {
  features.NodeType = "Horizontal";
}
else if (nodeTypeNonce < 50) {
  features.NodeType = "Vertical";
}
else if (nodeTypeNonce < 99) {
  features.NodeType = "Block Clusters";
}
else {
  features.NodeType = "None";
}


features.Special = "";
if (features.ColoredNodes == true && features.LineColor == "Rainbow") {
  features.Special = "Double Rainbow";
}
if ((features.Shape == "Groovy Circle" || features.Shape == "Groovy Triangle") && features.LineColor == "Rainbow") {
  if (features.Special == "Double Rainbow") {
    features.Special = "Groovy Double Rainbow";
  }
  else {
    features.Special = "Groovy Rainbow";  
  }
}
if (features.Shape == "Triangle" && shapeSize < .25 && shapeSize > .1 && features.LineColor == "Rainbow") {  
  if (features.Special != "") {
    features.Special += " ";
  }
  features.Special += "Dysfunctional Prism";
}

if (features.Special == "") {
  features.Special = "None";
}


// determine background type / color
let bgnonce = fxrand() * 100;
if (bgnonce < 1) {
  features.Background = "Party Magenta :]";
  bg = "#FF00FF";
}
else if (bgnonce < 5) {
  features.Background = "Stripey";
}
else if (bgnonce < 50) {
  features.Background = "Black"; 
  bg = 0;
}
else {
  features.Background = "White";
  bg = 255;
}


// determine if signed
let signedNonce = fxrand() * 100;
if (signedNonce < 5) {
  features.Signed = true;
}
else {
  features.Signed = false;
}

window.$fxhashFeatures = features;
window.addEventListener("resize", setup);

function preload() {
  if (features.Signed) {
    sig = loadImage("./sig.png");
  }
}

function setup(e) {
  if (e) {
    sz = e.target.outerWidth < e.target.outerHeight ? e.target.outerWidth : e.target.outerHeight;
  }
  else {
    sz = windowWidth < windowHeight ? windowWidth : windowHeight;
    szref = sz;
  }

  sz *= .98;
 
  createCanvas(sz, sz, WEBGL);

  // DRAW BACKGROUND
  if (features.Background == "Stripey") {
    let toggle = 1;
    for (let x = 0-sz/2; x < sz/2; x += sz/16) {
      push();
        if (toggle == 1) {
          fill(0);
          toggle = -1;
        }
        else {
          fill(255);
          toggle = 1;
        }
        rect(x, 0-sz/2, x + sz/16, sz);
      pop();
    }
  }
  else {
    background(bg);
  }

}

function draw() {

for (let n = 0; n < nodes.length; n++) {
      let node = nodes[n];
      push();
        
        let nodex = (node.x * sz) - (sz/2); 
        let nodey = (node.y * sz) - (sz/2); 

        let nodewobble = node.wobble * (sz/16); 

        strokeWeight(Math.floor(fxrand()*2));
        
        if (features.ColoredNodes) {
          stroke(Math.floor(fxrand() * 256), Math.floor(fxrand() * 256), Math.floor(fxrand() * 256));
        }
        else {
          stroke(Math.floor(fxrand() * 256));
        }
       
        fill(Math.floor(fxrand() * 256));

        if (features.NodeType == "Granite") {
          rotate(fxrand() * 360);
          point(nodex + (fxrand() * nodewobble), nodey + (fxrand() * nodewobble));     
        }
        else if (features.NodeType == "Horizontal") {
          point(nodex + (fxrand() * nodewobble * 4), nodey + (fxrand() * (nodewobble/4)));     
        }
        else if (features.NodeType == "Vertical") {
          point(nodex + (fxrand() * (nodewobble / 4)), nodey + (fxrand() * nodewobble * 4));      
        }
        else if (features.NodeType == "Block Clusters") {
          point(nodex + (fxrand() * nodewobble), nodey + (fxrand() * nodewobble));    
        }
        
        
        
        
      pop();

      

    }
  for (let l = 0; l < lines.length; l++) {
    let yint = (lines[l].yint * sz) - (sz/2); 
    let y1 = lines[l].slope * (0-sz/2) + yint;
    let y2 = lines[l].slope * (sz/2) + yint;

    push();
      if (features.LineColor == "Party Magenta :]") {
        stroke("#FF00FF");
      }
      else if (features.LineColor == "Rainbow") {
        let colors = ["#FF0000", "#FFA500", "#FFFF00", "#00FF00", "#0000FF", "#4B0082"];
        stroke(colors[Math.floor(fxrand() * 6)]);
      }
      else {
        stroke(255);
      }
      angleMode(DEGREES);
      rotate(Math.floor(fxrand()*360));
      line(0-sz/2, y1, sz/2, y2);
    pop();
  }
  fill(0);

  push();
    let shapeOffset = (shapeSize * sz) / 2;

    if (features.Shape == "Groovy Circle") {
      circle(0, 0, fxrand()*sz); 
    }
    else if (features.Shape == "Circle") {
      circle(0, 0, shapeSize * sz); 
    }
    else if (features.Shape == "Groovy Triangle") {
      shapeOffset = (fxrand() * sz) / 2;  
      triangle (0, 0 - shapeOffset, 0 - shapeOffset, 0 + shapeOffset, 0 + shapeOffset, 0 + shapeOffset);
    }
    else if (features.Shape == "Triangle") {
      triangle (0, 0 - shapeOffset, 0 - shapeOffset, 0 + shapeOffset, 0 + shapeOffset, 0 + shapeOffset);
    }
    else if (features.Shape == "Square") {
      square (0 - shapeOffset, 0 - shapeOffset, shapeSize * sz); 
    }
  pop();

  if (features.Signed) {
    push();
      let sigwidth = sz * .03;
      let sigheight = sigwidth * .678;
      let sigx = 0 - sigwidth / 2;
      let sigy = 0 - sigheight / 2;
      image(sig, sigx, sigy, sigwidth, sigheight);
    pop();  
  }
  
}

