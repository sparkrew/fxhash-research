// 如果不了解愛，終究不能擁抱彼此。
let workName = "cycl"   // workName show on saveframe filename by press 's'

let mainSceneSizeW = 1200;  // the width of the mainscene
let mainSceneSizeH = 1200;	// the height of the mainscene
let sceneSizeScale = 0.93;		// the size of the mainscene in cnv (input 0~1 for adjust size in cnv)

let finishedStep = 5;    		// count for finish painting and call fxpreview

let cnv,mainScene,processScene;
let cnvBG;

function setup() {
  mainSceneSizeW = mainSceneSizeW * random(0.63,1);
  mainSceneSizeH = mainSceneSizeH * random(0.63,1);
  sceneSizeScale = random(0.72,0.93);
  setupBat();
  setupPaint();

  finishedLog("state: init finished.");
  print("----------------------");
  print($fxhashFeatures); 

  cnvBG = cycl_bg;

  for(let i =0;i<maxStep*3;i+=0.5){
    paint(mainScene, i/6);
    paint(mainScene, (maxStep*6-i)/6);
  }
  for(let i =0;i<maxStep*3;i++){
    paintAdd(mainScene, i/6);
    paintAdd(mainScene, (maxStep*6-i)/6);
  }

  finishedLog("state: mainScene finished.");
  print("----------------------");
  
  imageMode(CENTER);
  rectMode(CENTER);
  noStroke();
  fill(222);

  drawingContext.shadowOffsetX = 0;
  drawingContext.shadowOffsetY = 0;
  drawingContext.shadowBlur = 36;
  let _light = color(random(120,150),random(120,150),random(120,150));
  drawingContext.shadowColor = _light;
  finishedLog("state: setup finished.");
  print("----------------------");
}
let alphaCount = 0;
let alphaCountFadeTime = 0;

function draw(){
    //display the mainScene
		drawMainScene();
    if(processFinised){
      background(cnvBG);
      alphaCount = (alphaCount < 255) ? alphaCount+1.5:255;
      drawingContext.globalAlpha = alphaCount/255.0;
      // let ert = map(alphaCount,0,255,0,100);
      // drawingContext.filter = 'opacity('+str(ert)+'%)';
      rect(width/2,height/2,mainSceneDisplay.x+width*0.0012,mainSceneDisplay.y+width*0.0012);
      image(mainScene,width/2,height/2,mainSceneDisplay.x,mainSceneDisplay.y);
      if(alphaCount == 255 && alphaCountFadeTime < finishedStep){
        alphaCountFadeTime ++;
        if(alphaCountFadeTime == finishedStep){finishedLog("state: alphaCountFadeTime " + finishedStepCount + " time finished.")};
      }
    }
}


let cost= 121.6132;
let objSize= 23.9751;
let level = 1;
let cost2,objSize2,level2;

let maxStep = 360;
let count =0.0;
let processFinised = false;

function drawMainScene(){
  if(!processFinised){
    if(count < maxStep*3){
      background(color(9));
      count = (count < maxStep*3) ? count+1.5:maxStep*3;
      paint(processScene, count/6);
      paint(processScene, (maxStep*6-count)/6);
      paintAdd(processScene, count/6);
      paintAdd(processScene, (maxStep*6-count)/6);

      image(processScene,width/2,height/2,mainSceneDisplay.x,mainSceneDisplay.y);

    }else if(count == maxStep*3){
      processFinised = true;
      drawingContext.filter = 'contrast(117%)';
      finishedLog("state: processFinised " + finishedStepCount + " time finished.");
    }
  }
}


function paint(_pg,_step){
  if(noise(_step/9.0)>0.3){
    if(cycl_snow){
      _pg.stroke(252,noise(_step/27)*30);
    }else if(cycl_ocean){
      _pg.stroke(random(0,255),random(0,255),252,noise(_step/54.0)*24);
    }else if(cycl_blood){
      _pg.stroke(252,random(0,255),random(0,255),noise(_step/54.0)*24);
    }
  }

  _pg.beginShape();  
  
  for(let i=0;i<4;i++){
      let m = (objSize - i*cost) * sin(radians(0 - (_step+1) * pow(i,level)));
      let n = (objSize - i*cost) * cos(radians(0 - (_step+1) * pow(i,level)));
      _pg.curveVertex(m+_pg.width/2,n+_pg.height/2); 
      
       m = (objSize2) * sin(radians(0 - (_step+1) * pow(level2,i)));
       n = (objSize2) * cos(radians(0 - (_step+1) * pow(level2,i)));
      _pg.curveVertex(m+_pg.width/2,n+_pg.height/2); 
  }
  _pg.endShape();
}

function paintAdd(_pg,_step){
  _pg.stroke(189,noise(_step/27)*9);

  _pg.beginShape();  
  
  for(let i=0;i<4;i++){
      let m = (objSize - i*cost2) * sin(radians(2* (_step+1) * pow(level/1.8,i)));
      let n = (objSize - i*cost2) * sin(radians(2* (_step+1) * pow(level/1.8,i))) * cos(radians(2* (_step+1) * (i)));
      _pg.curveVertex(m+_pg.width/2,n+_pg.height/2); 
  }
  _pg.endShape();
}

function setupPaint(){
  mainScene.noFill();
  mainScene.strokeWeight(1);
  mainScene.background(color(3)); 

  processScene = createGraphics(mainSceneSizeW,mainSceneSizeH);
  processScene.noFill();
  processScene.strokeWeight(1);
  processScene.background(9,random(0,9),random(0,9));

  //objSize:100-300
  objSize = random(100,300)*random(1,3);
  objSize2 = random(100,300)*random(1,3);

  //cost:0-300 _r:0-1
  cost = (objSize - 300)*random(1,3);
  cost2 = (objSize - 300)*random(1,3);

  //level:1-6 
  level = (random(1,6));
  level2 = (random(1,6));

}

