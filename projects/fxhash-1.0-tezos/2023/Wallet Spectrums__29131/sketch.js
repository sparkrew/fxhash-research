

var walletColors;
var speed = 60;
var colorsDivisions;
var rotationIndex = 0;

function keyPressed() {
  if (key === "f") {

    speed = (speed === 60) ? 260 : 60;
    frameRate(speed);
  }
}
function setup() {
  randomSeed(fxrand()*9999);
  Math.random = fxrand;
  canvas = createCanvas(600,600);
  canvas.addClass("canvasCSS");
  pixelDensity(2);
  background(244);
  angleMode(DEGREES);
  convertWalletHash($fx.minter);
  colorsDivisions = random([12,24,24,36,36,36,36,42]);
  rotationIndex = round(random(-90,90));
  frameRate(speed);
}

function draw(){
  background(244);
  drawDividedCircle(width/2,height/2,width/0.5,false,colorsDivisions);
  drawDividedCircle(width/2,height/2,width/2.5*map(sin(frameCount),-1,1,1,1.2),true,colorsDivisions);
  if (frameCount==1) {
    $fx.preview();
  }
}

function convertWalletHash(walletHash) {

   const trimmedHash = walletHash;


   const groups = trimmedHash.match(/.{1,1}/g);
   print(groups);

   const hexValues = groups.map(group => {
     const hexValue = group.split('').map(char => char.charCodeAt(0).toString(16)).join('');
     return hexValue;
   });


  walletColors = hexValues;

  let joinedColors = walletColors.reduce((result, color2, index) => {
  if (index % 3 === 0) {
    result.push("#"+color2);
  } else {
    let lastIndex = result.length - 1;
    result[lastIndex] += color2;
  }
  return result;
}, []);

walletColors = joinedColors;

}

function drawDividedCircle(x, y, r, circleAnimation, divisions) {
  push();
  translate(x,y);

  if (circleAnimation==true) {
    rotate(-180+40);
    rotate(frameCount);
  }else{
    rotate(-45+40+rotationIndex);
    rotate(sin(frameCount/4)*frameCount%1440/4);
  }
  translate(-x,-y);
  noStroke();
  const angle = 360 / divisions;
  for (let i = 0; i < divisions; i++) {
    const startAngle = (i+1) * angle;
    const endAngle = startAngle + angle+1;
    fill(color(walletColors[i%walletColors.length]));

    arc(x, y, r * 2, r * 2, startAngle, endAngle, PIE);
  }
  pop();
}
