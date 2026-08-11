//Title: 2023 - 2063
//@Luz Amelia Santana, August 2022


let canvas;
let canvasholderTag;
let margin, marginA, marginB;
let prob = 0.85;
let hy, wx;
let innerX,innerY;
let heights, widths;
let heightsI, widthsI;
let polaroidHR;
let h, s, l;
let scaleRatio = 1;
let outputScale = 10;
let dateFont;
let printDate;
let sizeH, sizeW;
let cells;
let min_dist;


function preload(){ 
  dateFont = loadFont("./ShareTechMono-Regular.ttf")
}

function setup(){

  //randomSeed(fxrand()*9999999)

  if(windowHeight<=570){
    sizeH = 550;
  } if(windowHeight>570 && windowHeight<=900){
    sizeH = 550;
  } else {
    sizeH = 550;
  }

  sizeW = Math.floor(sizeH / 3 * 2);

  canvasSetup();

  canvas = createCanvas(widths[widthsI],heights[heightsI]);
  //canvas.id("canvas")
  canvasholderTag = document.querySelector('div.canvas-holder')
  canvas.parent(canvasholderTag);

  polaroidHR = createGraphics(widths[widthsI],heights[heightsI]);
  polaroidHR.class("polaroid");
  polaroidHR.parent(canvasholderTag);
  
  margins();
  
  polaroidHR.colorMode(HSL);
  content();
  image(polaroidHR, 0, 0, width, height); 
  
}

function canvasSetup(){
  
  widths = [Math.floor(sizeW), Math.floor(sizeH)]
  widthsI = Math.floor(fxrand()* widths.length)
  heights = [Math.floor(sizeW), Math.floor(sizeH)]
  heightsI = Math.floor(fxrand()* heights.length)

  if(widthsI === 0){
    heightsI = 1;
  } else {
    heightsI = 0;
  }
  
}

function margins(){

  //To add probability of suns overtaking the whole polaroid
  marginA = 20;
  marginB = 0;
  
  if(fxrand() < 1 - prob){
    margin = marginB;
  } else {
    margin = marginA;
  }
  
  //To establish inner height and width of polaroid dependent on landscape or portrait format
  innerX = 5;
  innerY = 5;

  if (heightsI === 0){
    hy = Math.floor(height) - margin + 1;
  } else {
    hy = Math.floor(height) - innerY * margin + 1;
  }
  
  if (widthsI === 0){
    wx = Math.floor(width) - margin + 1;
  } else {
    wx = Math.floor(width) - innerX * margin + 1;
  }
}

function content(){

  polaroidHR.clear();
  polaroidHR.push();
  polaroidHR.scale(scaleRatio);
  changeBg();
  backgroundC2();

  //color
  h = 25 + fxrand() * 65;
  s = 65 + fxrand() * 20;
  l = 50 + fxrand() * 10;

  //Create lines
  let numLines = 5 + Math.floor(fxrand() * 9);
  
  if(margin === 0){
    numLines = 10 + Math.floor(fxrand() * 9);
  }

  for (let i = 0; i < numLines; i++){
    let a = createVector((fxrand() * wx), fxrand() * hy)
    let b = createVector((fxrand() * width - (innerX * margin)), fxrand() * height - (innerY * margin))
    
    if(heightsI === 0){
      b = createVector((fxrand() * width - margin), fxrand() * height - margin)
    }
    if(widthsI === 0){
      a = createVector((fxrand() * width - margin), fxrand() * height - margin)
    }

    let vc = p5.Vector.sub(b,a)
    let c = p5.Vector.div(vc,2)
    
    c.add(a)
  
    let step = 5;
    let cell_size = 1;
    min_dist = 10 + fxrand() * 10;
    cells = 420;
    let cellW = wx / cells;
    let cellH = hy / cells;
    

    

    polaroidHR.noStroke();
  
    for (let x = margin; x < cells + 1; x += step){
      for (let y = margin; y < cells + 1; y += step){
          
          let R = createVector(x * cell_size * cellW, y * cell_size * cellH)
          let distance = dist(R.x,R.y,c.x,c.y)
          
          if (distance < min_dist){
            distance = min_dist
          }
          let vecSum = p5.Vector.div(vc,distance)
          let F = p5.Vector.add(R,vecSum)
    
          polaroidHR.strokeWeight(0.8 + fxrand() * 1);
          polaroidHR.stroke(h, s, l);
          //polaroidHR.line(a.x,a.y,b.x,b.y)
          polaroidHR.line(R.x,R.y,F.x,F.y)
      
      } 
    }
    
  }
  polaroidDate();
  polaroidHR.pop();
  //console.log(width, height, sizeH, sizeW, innerX, innerY, heightsI, widthsI, hy, wx, h1, l1, s1, min_dist);
  
}

function polaroidDate(){
    let day = 1 + Math.floor(fxrand() * 31);
    let month = 1 + Math.floor(fxrand() * 12);
    let year = Math.floor(2023 + fxrand() * 30);
    let hour = Math.floor(fxrand() * 24);
    let min = Math.floor(fxrand() * 60);
    let bisiestos = [2024, 2028, 2032, 2036, 2040, 2044, 2048, 2052];
    let bisI = Math.floor(fxrand() * bisiestos.length)
    
    if (year === bisiestos[bisI] && month ==="2"){
      day = Math.floor(fxrand() * 30);
    } else if(month === "2"){
      day = Math.floor(fxrand() * 29);
    }
    
    if(s1 < 55 && l1 < 40){
      hour = Math.floor(fxrand() * 4);
    } else if (s1 < 70 && l1 < 78){
      hour = 7 + Math.floor(fxrand() * 17);
    } else{
      hour = 3 + Math.floor(fxrand() * 4);
    }

    if(day < 10){
      day = "0" + day;
    }

    if(month < 10){
      month = "0" + month;
    }

    if(month === "4" || month === "6" || month ==="9" || month ==="11"){
      day = Math.floor(fxrand() * 31);
    }

    if(hour < 10){
      hour = "0" + hour;
    }

    if(min < 10){
      min = "0" + min;
    }

    polaroidHR.textFont(dateFont);
    polaroidHR.fill("#333");
    polaroidHR.strokeWeight(0.6);
    polaroidHR.textSize(13);
    printDate = day + "-" + month + "-" + year + " " + hour + ":" + min;

    if(widthsI === 0){
      polaroidHR.text(printDate, width - 132, height - innerY * marginA + 6);
    } else {
      polaroidHR.text(printDate, width - innerX * marginA - 114, height - 14); 
    }

    if(margin === 0 && s1 < 50){
      polaroidHR.strokeWeight(1.2);
    }

  
}

function keyPressed(){

  if (key === "s"  || key === "S"){
    saveCanvas(polaroidHR, "2023-2053", "png")
  }

  if (key ==="h" || key === "H"){
    scaleRatio = outputScale;
    polaroidHR = createGraphics(widths[widthsI] * scaleRatio, heights[heightsI] * scaleRatio);
    polaroidHR.colorMode(HSL);
    
    fxrand = sfc32(...hashes); 
    canvasSetup();
    margins();
    content();
    saveCanvas(polaroidHR, '2023-2053hr' +  '.png');
  
    scaleRatio = 1;
    polaroidHR = createGraphics(widths[widthsI] * scaleRatio, heights[heightsI] * scaleRatio);
    polaroidHR.colorMode(HSL);
    fxrand = sfc32(...hashes); 
    canvasSetup();
    margins();
    content();
    image(polaroidHR, 0, 0);
  }

}


function windowResized() {
  background(250);
  resizeCanvas(widths[widthsI], heights[heightsI]);
  image(polaroidHR, 0, 0, width, height);
}