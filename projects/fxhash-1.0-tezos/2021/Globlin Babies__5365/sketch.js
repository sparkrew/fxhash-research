// Globlin Babies by p1x3lboy
// Made for FXhash
// @p1x3lboy

console.log(fxhash)

let CHEIGHT;
let CWIDTH;
let myround;
let bgr;
let bgg;
let bgb;
let eyes;
let size;
let emotion;

eyes = fxrand() < 0.9 ? ( fxrand() < 0.2 ? 1 : 2 ) : 0;
emotion = fxrand() < 0.75 ? ( fxrand() < 0.5 ? 1 : 2 ) : 0;

console.log(eyes)

function getEyes(eyes) {
  if (eyes == 1) return "Small"
  if (eyes == 2) return "Normal"
  else return "Long"
}

function getEmotion(emotion) {
  if (emotion == 1) return "Happy"
  if (emotion == 2) return "Sad"
  else return "Content"
}

function preload() {
  bgr = window.$fxhashFeatures["Red level (20-240)"],
  bgg = window.$fxhashFeatures["Green level (20-240)"],
  bgb = window.$fxhashFeatures["Blue level (20-240)"],
  myround = window.$fxhashFeatures["Rounded Edges (0-30)"]
  eyes = window.$fxhashFeatures["Eyes"]
  emotion = window.$fxhashFeatures["Emotion"]


  console.log("ROUNDING "+myround)
  console.log("RED "+bgr)
  console.log("GREEN "+bgg)
  console.log("BLUE "+bgb)
  console.log(eyes)
  console.log(emotion)
  if (eyes == "Small") {size = .38}
  if (eyes == "Long") {size = .52}
  if (eyes == "Normal") {size = .44}
}

function setup() {
  noFill();
  CHEIGHT = windowHeight;
  CWIDTH = windowWidth;
  createCanvas(CWIDTH, CHEIGHT);
  background(bgr, bgg, bgb);
}

function draw() {
  var rand_x = fxrand()*CWIDTH;
  var rand_y = fxrand()*CHEIGHT;
  var rand_z = fxrand()*800;
  var x_pos = fxrand()*2000-20;
  var y_pos = fxrand()*1100-20;
  var width = fxrand()*40+40;
  var height = fxrand()*40+40;
  var weight = fxrand()*3+3;

  noStroke();
  strokeWeight(weight);
  stroke(5);
  smooth();

  fill(map(rand_y,0,800,180,235),
       map(rand_z,0,800,180,235),
       map(rand_x,0,800,180,235)
      );

  rect((x_pos), (y_pos), (width), (height), (myround));
  bezier((x_pos+width*0.5), (y_pos+height*0.1), (x_pos+width*0.4), (y_pos+height*.001), (x_pos+width*0.6), (y_pos+height*-0.1), (x_pos+width*0.5), (y_pos+height*-0.2));
  line((x_pos+width*0.3), (y_pos+height*0.3), (x_pos+width*0.3), (y_pos+height*size));
  line((x_pos+width*0.7), (y_pos+height*0.3), (x_pos+width*0.7), (y_pos+height*size));

  if (emotion == "Sad") bezier((x_pos+width*0.3), (y_pos+height/1.4), (x_pos+width*0.45), (y_pos+height/1.6), (x_pos+width*0.55), (y_pos+height/1.6), (x_pos+width*0.7), (y_pos+height/1.4));
  if (emotion == "Happy") bezier((x_pos+width*0.3), (y_pos+height/1.4), (x_pos+width*0.45), (y_pos+height/1.2), (x_pos+width*0.55), (y_pos+height/1.2), (x_pos+width*0.7), (y_pos+height/1.4));
  if (emotion == "Content") line((x_pos+width*0.4), (y_pos+height/1.4), (x_pos+width*0.6), (y_pos+height/1.4));
}


window.$fxhashFeatures = {
  "Red level (20-240)": Math.floor(fxrand()*220+20),
  "Green level (20-240)": Math.floor(fxrand()*220+20),
  "Blue level (20-240)": Math.floor(fxrand()*220+20),
  "Rounded Edges (0-30)": Math.floor(fxrand()*30),
  "Eyes": getEyes(eyes),
  "Emotion": getEmotion(emotion)
};

function keyPressed() {
	if (key == "s") save('babygloblins.png');
}

function windowResized() {
  resizeCanvas(CWIDTH, CHEIGHT);
  background(bgr, bgg, bgb);
  }
