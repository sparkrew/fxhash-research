// 你希望設定的畫布大小
let originCanvasWidth = 800;
let originCanvasHeight = 800;

// 最終的畫布大小
let canvasWidth = 800;
let canvasHeight = 800;

let canvasRatio=1.0;
function setupCanvasRatio () {
  let originRatio = originCanvasWidth / originCanvasHeight;
  let screenRatio = windowWidth / windowHeight;
  console.log(originRatio);
  console.log(screenRatio);

  // 如果螢幕的比例比作品比例寬，就以螢幕高度來當畫布高度
  if(screenRatio > originRatio)
  {
    canvasHeight = windowHeight;
    canvasWidth = canvasHeight * originRatio;
  }
  // 如果螢幕的比例比較窄，就以螢幕寬度來當畫布寬度
  else
  {
    canvasWidth = windowWidth;
    canvasHeight = canvasWidth / originRatio;
  }
  canvasRatio= canvasWidth /originCanvasWidth;
}
 let hue
 let sat 
 let bright 

function setup() {
  setupCanvasRatio ()
  createCanvas(canvasWidth, canvasHeight);
  noiseSeed(-10000,10000)
  background(color(0, 0, 0));
  fill("black")
  rect(0,360*canvasRatio,800*canvasRatio,800*canvasRatio)

  let hue = fxRandom(0, 360);
  let sat = fxRandom(30, 80);
  let bright = fxRandom(50, 80);

  console.log(fxhash)
  for (let i = 0; i < fxRandom(0,200); i++) {
    let drawX = fxRandom(0, 800*canvasRatio);
    let drawY = fxRandom(0, 350*canvasRatio);
    let w=fxRandom(100,300);
    
    blendMode(ADD)
    colorMode(HSB);

    fill(200,100,50,0.05)

  
    circle(drawX, drawY, w*canvasRatio);
   
  }
  






  for (let i = 0; i < fxRandom(50,200); i++) {
    let drawX = fxRandom(0, 800*canvasRatio);
    let drawY = fxRandom(0, 350*canvasRatio);
    let w=fxRandom(2,7);
    
    blendMode(ADD)
    colorMode(HSB);

    fill("white")

  
    circle(drawX, drawY, w*canvasRatio);
   
  }
  









 


  for (let i = 0; i <700; i++) {
    let drawX = fxRandom(0, 800*canvasRatio);
    let drawY = fxRandom(350*canvasRatio,500*canvasRatio);
    let w=fxRandom(7,12);
  
    blendMode(ADD)
    colorMode(HSB);

    fill(hue+fxRandom(-50, 50), sat, bright, 0.3)
    circle(drawX, drawY, w*canvasRatio);
   
  }

  






  for (let i = 0; i <500; i++) {
    let drawX = fxRandom(0, 800*canvasRatio);
    let drawY = fxRandom(400*canvasRatio,600*canvasRatio);
    let w=fxRandom(13,20);
  
    blendMode(ADD)
    colorMode(HSB);

    fill(hue+fxRandom(-50, 50), sat, bright, 0.35)
    circle(drawX, drawY, w*canvasRatio);
   
  }
  for (let i = 0; i < fxRandom(0,100); i++) {
    let h = fxRandom(0,360);
    sat = 100;
    bright = 100;
    let drawX = fxRandom(0, 800*canvasRatio);
    let drawY = fxRandom(350*canvasRatio,600*canvasRatio);
    let w=fxRandom(7,20);
  
    blendMode(ADD)
    colorMode(HSB);

    fill(h, sat, bright, 0.8)
    circle(drawX, drawY, w*canvasRatio);
   
  }
 




  for (let i = 0; i <150; i++) {
    let drawX = fxRandom(0, 800*canvasRatio);
    let drawY = fxRandom(500*canvasRatio,700*canvasRatio);
    let w=fxRandom(17,25);
  
    blendMode(ADD)
    colorMode(HSB);

    fill(hue+fxRandom(-50, 50), sat, bright, 0.4)
    circle(drawX, drawY, w*canvasRatio);
   
  }

  for(let i=0; i< fxRandom(0,15); i++)
  {
  
    let xPos = fxRandom(0, width);
    let yPos = fxRandom(400*canvasRatio, height);

    let rectWidth = fxRandom(0.05, 0.1) * width;
    let rectHeight = fxRandom(0.2, 0.6) * rectWidth;

    colorMode(HSB);
    blendMode(ADD);
    let h = fxRandom(0, 360);
    let s = fxRandom(50, 90);
    let b = fxRandom(60, 100);
    
    stroke(h, s, b, 0.4);
    fill(h, s, b, 0.4);

    strokeWeight(2);
    


    push();

      translate(xPos, yPos);
    
      rect(-0.5 * rectHeight, -0.5 * rectWidth, rectHeight, rectWidth);
      // circle(0, 0, rectWidth);
    
    pop();
    blendMode(ADD);
    strokeWeight(0);
  }


  let time=fxRandom(5,15)
  for(let i=0; i<time;i++){
    drawRoad1(fxRandom(390*canvasRatio,800*canvasRatio),fxRandom(50,200))
  }

  for (let i = 0; i <80; i++) {
    let drawX = fxRandom(0, 800*canvasRatio);
    let drawY = fxRandom(600*canvasRatio,800*canvasRatio);
    let w=fxRandom(21,30);
  
    blendMode(ADD)
    colorMode(HSB);

    fill(hue+fxRandom(-50, 50), sat, bright, 0.45)
    circle(drawX, drawY, w*canvasRatio);
   
  }

  
  for (let i = 0; i <fxRandom(0,100); i++) {
    let h = fxRandom(0,360);
    sat = 100;
    bright = 100;

    let drawX = fxRandom(0, 800*canvasRatio);
    let drawY = fxRandom(350*canvasRatio,800*canvasRatio);
    let w=fxRandom(17,30);
  
    blendMode(ADD)
    colorMode(HSB);

    fill(h, sat, bright, 1)
    circle(drawX, drawY, w*canvasRatio);
   

  }
 





  
  
  for (let i = 0; i < 120; i++) {
    let drawX = fxRandom(0, 800*canvasRatio);
    let drawY = fxRandom(400*canvasRatio, 800*canvasRatio);
    let w=fxRandom(100,500);
    
    blendMode(ADD)
    colorMode(HSB);

    fill(hue, sat, bright, 0.02)

  
    circle(drawX, drawY, w*canvasRatio);
   
  }

  for (let i = 0; i < 150; i++) {
    let drawX = fxRandom(0, 800*canvasRatio);
    let drawY = fxRandom(350*canvasRatio, 800*canvasRatio);
    let w=fxRandom(20, 100);
    
    blendMode(ADD)
    colorMode(HSB);

    fill(hue, sat, bright, 0.05)

  
    circle(drawX, drawY, w*canvasRatio);
   
  }



  let noiseScale = fxRandom(0.0001, 0.001);
  console.log('noise Scale: ' + noiseScale);
 


  // stroke lines
  for(let i=0; i< fxRandom(0,300); i++)
  {
    
    
    let xPos =fxRandom(0, width);
    let yPos =fxRandom(450*canvasRatio, height);
    
    let lineHeight = fxRandom(0.3, 0.4) * height;
    let rotAngle = noise(xPos * noiseScale, yPos * noiseScale) * 180 ;
    colorMode(HSB);
    blendMode(ADD);
    
    stroke(hue, sat, bright, 0.3);
    fill(hue, sat, bright, 0.3);

    strokeWeight(fxRandom(2, 5)*canvasRatio);
    

    

    push();

      translate(xPos, yPos);
      rotate(radians(rotAngle));
      line(0, -0.5 * lineHeight, 0, 0.5 * lineHeight);
    
    pop();

  }






  /*for (let y = 250; y < height; y += 3) {
    for (let x = 0; x < width; x += 3) {

      // let landBri = random(40, 80);
     
      if (random() < 0.0004) {


          leafColor = color(hue,sat,bright);
          fill(leafColor);
          drawTree(x, y, 0, random(10,25), 10);
      }

    }
  }*/

    

  

    
 
    






   
   
    



    drawMountain(fxRandom(650,700)*canvasRatio,300*canvasRatio);
}
















function draw() {


}

function drawMountain(_y, _height) {
  let noiseY = fxRandom(-1000, 1000);
  let noiseScale = fxRandom(0.03,0.02);

 
  for (let x = 0; x < width; x++) {
    
    let x1 = x;
    let y1 = _y + noise(x * noiseScale, noiseY) * _height;

    let x2 = x1;
    let y2 = y1 + _height;


    
    blendMode(MULTIPLY);
    noFill();
    strokeWeight(200*canvasRatio);
    stroke('black');
    point(x1, y1);
  }
}



function drawTree(_x, _y, _startDir, height, width) {
  let posX = _x;
  let posY = _y;
  
  for (let i = 0; i < height; i++) {
    posX +=  0;
    posY +=  width;

    push()
  
    translate(posX, posY);
    
      

      for(let i= 0; i < 3; i++)
      {
        
        let xPos = i*10*floor(fxRandom(0,2));
        let rPos = i*10
        let yPos = 0;
        blendMode(MULTIPLY);
        strokeWeight(0)
        fill("black")
        //rect(rPos-10,yPos-10,20,20)

     
        blendMode(ADD);
        fill(color(fxRandom(0,255),fxRandom(0,100),fxRandom(0,100)));
        circle(xPos, yPos, 10*canvasRatio);
      }
     
    pop();
    
  }

}




function drawRoad1(_y, _height) {

  let rom=fxRandom(-0.1,0.3)
  for (let x = 0; x < width; x+=20) {
    let x1 = x;
    let y1 = _y + x*rom;
    let x2 = x1;
    let y2 = y1 + _height;

    let posX = x1;
    let posY = y1;
    posX +=  10;
    posY +=  0;

    
    

    push()
  
    translate(posX,posY);
    
      

      for(let i= 0; i < 1; i++)
      {
        let xPos =0 ;
        let yPos =10;
        
      
        fill(color(hue,sat,bright));
        
        circle(xPos, yPos, y1/30*canvasRatio);
      }
     
    pop();
  }
}





function drawRoad2(_x, _y, _startDir, height, width) {
  let nowDir = _startDir;
  let posX = _x;
  let posY = _y;
  
  for (let i = 0; i < height; i++) {
    posX += sin(radians(nowDir)) * width;
    posY += cos(radians(nowDir)) * width;

    push();

    translate(posX, posY);
    rotate(radians(-nowDir));
   

    

    
      let leafCount = 3;

      for(let leafInedx = 0; leafInedx < leafCount; leafInedx++)
      {
        let xPos = 0 ;
        let yPos = 0;

        fill(color(hue,sat,bright));
        circle(xPos, yPos, 15);
      }
      if (fxRandom() < 0.2) {
        let splitDir = fxRandom(-60.0, 60.0);
    }

    pop();


    
    nowDir += noise(posX * 0.001, posY * 0.006, 3000) * 10 - 5;
    
  }

}

