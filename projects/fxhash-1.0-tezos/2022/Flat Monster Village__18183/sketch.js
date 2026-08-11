var noiseCount1 = 0;
var noiseCount2 = 0;
var windowCenter = 0;
var windowSize = 0;
var eyeCent = 0;
var eyeLy = 0;
var eyeLx = 0;
var eyeRy = 0;
var eyeRx = 0;
var eyeSizel = 0;
var eyeSizer = 0;
var i = 0;
var formResolution = 18;
var x = [];
var y = [];
var stepSize = 40;
var centerX;
var centerY;
var initRadius = 2.8;
var z = 0;
var mx =0;
var my =0;


function setup() {
  colorMode(HSB, 360.0, 100.0, 100.0, 100.0);
  noiseCount1 = noise(random())*10;
  noiseCount2 = noise(random())*10;
  windowSize = min(windowWidth,windowHeight);
  windowCenter = windowSize / 2;
  eyeCentx = random(noiseCount1*10,-noiseCount1*10);
  eyeCenty = noiseCount1+150;
  eyeSizel = random(windowSize*0.1,windowSize*0.05);
  eyeSizer = random(windowSize*0.1,windowSize*0.05);
  eyeLy = noiseCount1;
  eyeLx = -eyeSizel-random(-eyeCentx,-eyeCentx*2);
  eyeRy = noiseCount1;
  eyeRx = eyeSizer+random(eyeCentx,eyeCentx*2);
  centerX = windowCenter * 2; 
  centerY = windowCenter * 100;
  initRadius = windowSize/initRadius;
  
  
  createCanvas(windowSize, windowSize);
  background(random(0,360),100,50,100);
  
  
  
  //translate(windowCenter, windowCenter);
  
    centerX = width / 2.0; 
  centerY = height / 2.5; 
  var angle = radians(360 / formResolution); 
  for (var i = 0; i < formResolution; i++) {
    x.push(cos(angle * i) * initRadius);
    y.push(sin(angle * i) * initRadius);
    

  } 
      noLoop();
}

function draw() {
  
  //drawingContext.shadowOffsetX = 5;
  //drawingContext.shadowOffsetY = -5;
  drawingContext.shadowBlur = 50;
  drawingContext.shadowColor = 'black';
  
 fill(250,0,0,100);
  noStroke();
  if(200 > z){
  //strokeWeight(10);
  //stroke(10)
  //line(0,0,windowCenter,windowCenter)

  for (var i = 0; i < formResolution; i++) {
    x[i] += random(-stepSize, stepSize);
    y[i] += random(-stepSize, stepSize*1.1);

  }
  beginShape();

  curveVertex(x[formResolution - 1] + centerX, y[formResolution - 1] + centerY);
  for (var i = 0; i < formResolution; i++) {
    curveVertex(x[i] + centerX, y[i] + centerY);
  }
  curveVertex(x[0] + centerX, y[0] + centerY);
  curveVertex(x[1] + centerX, y[1] + centerY);
  curveVertex(x[2] + centerX, y[2] + centerY);
  
  endShape();

  //stroke(noise(random(0))*360,noise(0)*100,noise(0)*100,100)
  //strokeWeight(10);
  
  
z++;
  }
  
  noFill();
  stroke(0)
  strokeWeight(15)
  
  //rightleg
   line(windowCenter,windowCenter*0.6,(windowCenter+eyeRx)*1.2,(windowCenter+eyeRy)*1.4);
  line((windowCenter+eyeRx)*1.2,(windowCenter+eyeRy)*1.4,windowCenter+eyeRx,(windowCenter)*1.8);
  fill(0)
  ellipse((windowCenter+eyeRx)+(50/2),(windowCenter)*1.8,50,35);
  
  //leftleg
   line(windowCenter,windowCenter*0.6,windowCenter+eyeLx,(windowCenter)*1.8);
  ellipse((windowCenter+eyeLx)-(50/2),(windowCenter)*1.8,50,35);
  
  
  drawingContext.shadowBlur = 30;
  drawingContext.shadowColor = 'white';
  //text("windowCenter*eyeLx/"+eyeLx, 20, 180);
  noStroke();
  fill(360)
   ellipse(windowCenter+eyeLx,(windowCenter-eyeLy)*0.6,eyeSizel);
   ellipse(windowCenter+eyeRx,(windowCenter-eyeRy)*0.6,eyeSizer);
  
  
  

  
  drawingContext.shadowBlur = 0;
  //mouth
    noFill();
  stroke(360)
  strokeWeight(15)
  mx = windowCenter+eyeLx;
  my = windowCenter*0.8,
   line(mx,my,mx=mx*1.1,my=my*1.1);
   line(mx,my,mx=mx*1.1,my=my/1.1);
   line(mx,my,mx=mx*1.1,my=my*1.1);
   line(mx,my,mx=mx*1.1,my=my/1.1);
  
  //lefthand
  
  
  noFill();
  stroke(360)
  strokeWeight(15)
  
  //lefthand
   line(windowCenter+eyeLx-((windowCenter+eyeRx)*0.2),windowCenter*0.8,windowCenter+eyeLx-((windowCenter+eyeRx)*0.4),(windowCenter+eyeRy)*1.02);
  line(windowCenter+eyeLx-((windowCenter+eyeRx)*0.4),(windowCenter+eyeRy)*1.02,windowCenter+eyeLx-((windowCenter+eyeRx)*0.2),(windowCenter)*1.2);
  
  
  
  noStroke();
  fill(360);
  push();  // ここから
  translate(windowCenter+eyeLx-((windowCenter+eyeRx)*0.2),windowCenter*1.2);
rotate(45);
  ellipse(0,18,35,50);
pop(); 
  
  redraw();

}



