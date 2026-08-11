let x = 1;

let y = 1;

let inc = 0.01;

let start = 1;

let noiseScale = 150;

let frameSize = 30;

let seed = 0

function preload()  

{
  
  seed = int(fxrand() * 999999);
colorMode(HSB, 360, 100, 100, 100);
  
  }
  
function setup() {

  createCanvas(720, 720);

  background(0);

}

function draw() {

 randomSeed(seed);

  noiseSeed(seed);

  fill(0, 10);

  rect(0, 0, width, height);


  stroke(255);



  strokeWeight(1);


  beginShape();


i = 0;

  while (i != 1) 

    {

      if ((isFxpreview = true)) {fxpreview(); i = 1;}

    }






  for (let i = 0; i < width; i++) {


    let noiseVal = noise(x, y);

    let yPos = map(noiseVal, 0, 1, 0, height);


    vertex(i, yPos);


    x += inc;

    y += inc;

  }


  endShape();



  if (y > height) {



    noLoop();

  }



  stroke(255);

  strokeWeight(frameSize);

  noFill();

  rect(frameSize / 2, frameSize / 2, width - frameSize, height - frameSize);

}




