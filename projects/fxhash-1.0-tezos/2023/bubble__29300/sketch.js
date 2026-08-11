let colorArray = ["#4881fa", "#c2dcfc"]; // 我的莓果泡泡色票
let colorArray1 = ["#bddaff", "#9ad4fc", "#45b0f7", "#2345cf", "#0070bf"]; // 我的色票
let bgcArray = ["#25d6fa", "#739dba"]; // 背景色票

let xcount,xspan;
let ycount,yspan;
let R;
let features_hshift;
let features_size;
let featuresObj = {};
let bgclr;

function RJ_setFeature(){

let bgSeed = $fx.rand();
  if (bgSeed<0.3){
    bgclr = bgcArray[0];
    console.log("there");
    //features_hshift = -140;
    featuresObj["Weather"] = "Sunny"
  } else {
    //features_hshift = 0;
    bgclr = bgcArray[1];

    featuresObj["Weather"] = "cloudy"
  }

  console.log(featuresObj);
  $fx.features(featuresObj);
}

function setup() {
  
  randomSeed($fx.rand() * 1000000000);
  noiseSeed($fx.rand() * 1000000000);
  RJ_setFeature();
  
  createCanvas(600, 600);
  // let bgclr = random(bgcArray);
  background(bgclr);
  
   R = 5;
  
   xcount = 120;
   xspan = width/(xcount - 1);
  
   ycount = 20;
   yspan = 10;

   let tempheight;
   let totalheight = 0;
   for (let i = 0; i < 15; i++){
    ycount = floor(random(3, 10));
    RJrect(0, totalheight,xcount, ycount);
    tempheight = ycount * yspan;
    totalheight = totalheight + tempheight

   }
  } 
  
function RJrect(_x, _y, _w, _h){
  
  let clr = random(colorArray1)
  let noisestep = 0.9
  let noiseamp = 100

  let chessseed = random()
  let secclr = random(colorArray1)
  
  for(let j = 0; j < _h; j++){
    for (let i = 0; i < _w; i++){
      let x = i * xspan + _x;
      let y = j * yspan + _y - 50;
      let r = R * random(2)

      let off = noise(x * noisestep, y * noisestep) * noiseamp
      
      fill(clr);
      noStroke()
      
      if (chessseed < 0.5){
        if ((i + j) % 2 == 0) fill(secclr)
      }
      circle(x, y + off, r);
    }
  }
  for(let d = 0; d < 7; d++){
    let x1 = random(-100, width);
    let y1 = random(-100, height);
    let r1 = random(40, 70);
    let cc = random(colorArray);

  push();
  for(let a = 0; a < 10; a++){
    translate(0, 0);
    
    r1 = r1 - 5

    let c1 = color(colorArray[0]);
    let c2 = color(colorArray[1]);
    let amt = a / 10;
    let gradientClr = lerpColor(c1, c2, amt);

    gradientClr.setAlpha(255);

    fill(gradientClr);
    stroke(255);
    strokeWeight(0.3);
    
    circle(x1, y1, r1);
    
  }   
  pop()
  }
}



