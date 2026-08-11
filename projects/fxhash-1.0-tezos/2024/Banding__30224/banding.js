// BANDING by fauxjebus
// fxhash project 14

function setup() {

let seed = 10000 + $fx.rand() * 9999999;
noiseSeed(seed);
randomSeed(seed);

bgPick=int(random(2));

colorMode(HSB);

if(bgPick == 1){
bgcol= "Light";
lightcolours = [0, 35, 50, 80, 150, 180, 190, 210, 290, 310];
strokeCol1 = lightcolours[int(random(lightcolours.length))];

if(strokeCol1 == 0){
colourpick = "Red";}
if(strokeCol1 == 35){
colourpick = "Orange";}
if(strokeCol1 == 50){
colourpick = "Yellow";}
if(strokeCol1 == 80){
colourpick = "Lime";}
if(strokeCol1 == 150){
colourpick = "Emerald";}
if(strokeCol1 == 180){
colourpick = "Teal";}
if(strokeCol1 == 190){
colourpick = "Light Blue";}
if(strokeCol1 == 210){
colourpick = "Dark Blue";}
if(strokeCol1 == 290){
colourpick = "Purple";}
if(strokeCol1 == 310){
colourpick = "Pink";}
}

if(bgPick == 0){
bgcol= "Dark";
darkcolours = [0, 10, 50, 110, 135, 165, 205, 238, 270, 340];
strokeCol1 = darkcolours[int(random(darkcolours.length))];

if(strokeCol1 == 0){
colourpick = "Red";}
if(strokeCol1 == 10){
colourpick = "Orange";}
if(strokeCol1 == 50){
colourpick = "Yellow";}
if(strokeCol1 == 110){
colourpick = "Lime";}
if(strokeCol1 == 135){
colourpick = "Emerald";}
if(strokeCol1 == 165){
colourpick = "Teal";}
if(strokeCol1 == 205){
colourpick = "Light Blue";}
if(strokeCol1 == 238){
colourpick = "Dark Blue";}
if(strokeCol1 == 270){
colourpick = "Purple";}
if(strokeCol1 == 340){
colourpick = "Pink";}
}


canvasOrientation=int(random(2));
shiftPick=int(random(2));

if (canvasOrientation==0){
createCanvas(1500,2000);
canvastype = "Portrait"; //Portrait canvas
}

 if (canvasOrientation==1){
  createCanvas(2000,1500);
  canvastype = "Landscape"; //Landscape canvas
 }

bandsize = random(3,25);

thickness = "Thin";
if(bandsize >= 6 && bandsize <= 14){
thickness = "Medium";}
if(bandsize >= 15 && bandsize < 26 ){
thickness = "Thick";}


$fx.features({
  "Background": bgcol,
  "Colour": colourpick,
  "Orientation": canvastype,
  "Thickness": thickness,
});

  point1y = random(20,height-20);
  point2y = random(20,height-20);
  point1x = random(0,-100);
  point2x = random(width,width+100);
  handle1x = random(-500,width*1.2);
  handle1y = random(-500,height*1.2);
  handle2x = random(-500,width*1.2);
  handle2y = random(-500,height*1.2);

  if (bgPick==0){
background(strokeCol1,70,10); // DARK BACKGROUND COLOUR1
  }

  if (bgPick==1){
background(strokeCol1,7,97); // LIGHT BACKGROUND COLOUR1
  }

  blendPick=MULTIPLY;
  let blendRand;

}


function draw() {


function drawWavyBezier() {
  let x1 = point1x;   //placement of point 1
  let y1 = point1y;

  let x2 = handle1x;  // placement of handles 1
  let y2 = handle1y;

  let x3 = handle2x;  // placement of handles 2
  let y3 = handle2y;

  let x4 = point2x;  // placement of point 2
  let y4 = point2y;

  bezier(x1, y1, x2, y2, x3, y3, x4, y4);
}



  noFill();


 for (p = 0; p < 10; p++) {


   blendMode(MULTIPLY);
     // strokeWeight(random(0.1,1));
    stroke(strokeCol1,80,85);

     if (bgPick==0){
          blendMode(SCREEN);
     // strokeWeight(random(0.1,1));
    stroke(strokeCol1,95,30);
     }

   strokeWeight(bandsize*100-(p*(bandsize*10)));

    if(shiftPick==1){
   point1y=point1y-(p*5);
   point2y=point2y+(p*2);
 }

   drawWavyBezier();

 }

// Thank you Gorilla Sun //
function granulate(amount) {
    loadPixels();
    const d = pixelDensity();
    const pixelsCount = 4 * (width * d) * (height * d);
    for (let i = 0; i < pixelsCount; i += 4) {
        const grainAmount = random(-amount, amount);
        pixels[i] = pixels[i] + grainAmount;
        pixels[i+1] = pixels[i+1] + grainAmount;
        pixels[i+2] = pixels[i+2] + grainAmount;
    }
    updatePixels();
}

  granulate(10);

//Crop Marks
  margin = 20;
  stroke(strokeCol1,80,70);
  strokeWeight(1);
  blendMode(BLEND);
  line(margin*2,margin/2,margin*2,margin*1.5);
  line(width-margin*2,margin/2,width-margin*2,margin*1.5);
  line(margin*2,height-margin/2,margin*2,height-margin*1.5);
  line(width-margin*2,height-margin/2,width-margin*2,height-margin*1.5);
  line(margin/2,margin*2,margin*1.5,margin*2);
  line(width-margin/2,margin*2,width-margin*1.5,margin*2);
  line(margin/2,height-margin*2,margin*1.5,height-margin*2);
  line(width-margin/2,height-margin*2,width-margin*1.5,height-margin*2);

  noLoop();

}

function keyPressed(){
if(key ==="s"){save("Banding.jpg")}
// if (key ==="f"){let f=fullscreen();fullscreen(!f)}
}
