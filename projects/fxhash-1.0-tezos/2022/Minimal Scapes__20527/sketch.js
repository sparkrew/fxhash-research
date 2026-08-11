let imageSize;
let myCanvas;
originalImageSize=[3200,1800];
numberSeed=0;

backgroundColorArray = {
  "Mountain": ["#ff4800","#ff9148","#ababab","#757575","#555555","#454545","#323232"],
  "Dawn": ["#ccabfa", "#fd9e98", "#f64e43", "#c02417", "#6d224b", "#671618", "#471618"],
  "Canyon": ["#ff4800","#ff9148","#9c6644","#7f5539","#b08968","#c09868","#ddb892"],
  "Desert": ["#03071e","#370617","#6a040f","#9d0208","#d00000","#dc2f02","#e85d04","#f48c06","#faa307","#ffba08"],
  "Night": ["#001219","#005f73","#0a9396","#94d2bd","#e9d8a6","#ee9b00","#ca6702","#bb3e03","#ae2012","#9b2226"],
  "Dark Night":["#231942","#5e548e","#9f86c0","#be95c4","#e0b1cb","#f7cad0", "#fae0e4"],
  "Soft Night": ["#1a1423","#372549","#eacdc2","#b74d49","#b75d69","#b75d49","#774c60"],
  "Ocean": ["#f72585","#b5179e","#7209b7","#560bad","#480ca8","#3a0ca3","#3f37c9","#4361ee","#4895ef","#4cc9f0"]
};

backgroundColorSetName=Object.keys(backgroundColorArray)[Math.floor(rrnd(0,Object.keys(backgroundColorArray).length))];
backgroundColor=backgroundColorArray[backgroundColorSetName];

sky=[];astro="";
window.$fxhashFeatures = {}

function calculateY(y_) {
  value=y_;
  if (imageSize[0]==imageSize[1])
    value=y_ + (imageSize[0]/2-imageSize[1]/2);
  return value;
}

function preload() {}

function setup() {
    angleMode(DEGREES);
    randomSeed(999999 * fxrand()),
    noiseSeed(999999 * fxrand()),

    mixedMountains=rrnd()<0.5? true: false;
    singleMountainValue=rrnd(0.995,1.005);
    
    window.$fxhashFeatures = {
      "Color Set" : backgroundColorSetName,
      "Mountain" : mixedMountains ? "Mixed Type" : "Single Type",
    };


    noiseX=rrnd(0,10);
    noiseY=rrnd(0,10);

    let minImageSize=min(windowWidth,originalImageSize[0]);
    imageSize=[minImageSize, minImageSize*originalImageSize[1]/originalImageSize[0]]
    createCanvas(imageSize[0], imageSize[1]);
    console.log(imageSize)
    background(backgroundColor[0]);
    let astroR=rrnd(imageSize[1]/5,imageSize[1]/5.5);

    let maxM=imageSize[1]*rrnd(.55,.65)
    let minM=imageSize[1]*.95

    x=rrnd(astroR*0.5,imageSize[0]-astroR*0.75);
    y=rrnd(astroR*0.5,imageSize[1]*.4-astroR*0.75)
    astro = new Astro(x, y, astroR, "#DADADA", backgroundColor[0], astroR*.1, 0.01);
    sky.push(new MountainClass(backgroundColor[1], backgroundColor[0], 1, imageSize[1]*.15, imageSize[1]*.15, 0, 0, 0.0015, 1,true));
    for (let i = 2; i < backgroundColor.length; i++) {
        let y=map(i,2,backgroundColor.length, maxM,minM)
        let kP=mixedMountains? 3 : 8;
        let deltaY=rrnd(kP,0.5)*(maxM-minM)/(backgroundColor.length);
        let decreasingY=rrnd(1,7);
        let increasingY=rrnd(1,7);
        let z=rrnd(0.01,1);
        if (z>0.25) increasingY=0;
        iRev=backgroundColor.length-i;

        let mountainType=mixedMountains ? rrnd(0.995,1.005): singleMountainValue;
        
        sky.push(new MountainClass(backgroundColor[i], backgroundColor[i-1], i, y, deltaY, increasingY, decreasingY, rrnd(0.15*iRev,0.05*iRev), mountainType));
    }
}

function drawframe(strokeW_=25, color_ = "#FFEAEA") {

  stroke(color_);
  strokeWeight(strokeW_);
  noFill();
  rect(0,0,imageSize[0],imageSize[1])
  
}

function draw() {
    sky[0].draw();
    astro.draw();
    for (let i = 1; i < sky.length; i++) {
            sky[i].draw();
    };

    drawframe();
    noLoop();
    console.log(window.$fxhashFeatures);
    const myTimeout = setTimeout(fxpreview, 15000);
  }
  
  function keyPressed(event) {
    if (event.key.toLowerCase() == 's') {
      saveAsPNG()
    }
  }
  
  function saveAsPNG() {
      console.log("Saving PNG...")
      let link = document.getElementById("saveImg");
      link.setAttribute("download", document.title+".PNG");
      link.setAttribute("href",canvas.toDataURL("image/PNG").replace("image/PNG", "image/octet-stream"));
      link.click();
  }