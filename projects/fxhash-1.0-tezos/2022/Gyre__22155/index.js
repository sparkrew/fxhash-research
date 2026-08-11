let pos;
let prev;
let lineArr=[]
let points=[]
let angleLineNum=[]
let linesActive=[]
let boundsPoly=[]
let boundScaleFactor;
let scaleFacotrArr=[]
let skeletonPoints=[]
let shadowHits=[]
let shadowMin=[]
let shadowMax=[]

function isValid(i, j) {
  if (i < 0 || i >= cols || j < 0 || j >= rows) {
    return false;
  }
  return !grid[i][j].visited;
}

p5.disableFriendlyErrors = true;

function make2DArray(cols, rows) {
  let gridArr = new Array(cols);
  for (var i = 0; i < gridArr.length; i++) {
    gridArr[i] = new Array(rows);
  }
  return gridArr;
}

function setup() {
  rndSeed=fxrand()*9999999
  rndSeed2=fxrand()*9999999
  randomSeed(rndSeed)
  noiseSeed(rndSeed2)
  hitMaxNum=0  
  colorsOneChoice=fxrand()
  colorStyle=fxrand()
  colorStyleLim=0.15

  if(colorStyle<colorStyleLim){
    if(colorsOneChoice<0.25){
      colorsMix=["#7FA56B","green"]
    } else if(colorsOneChoice<0.65){
      colorsMix=["#8C8C8C","gray"]
    } else if(colorsOneChoice<0.85){
      colorsMix=["#DCC790","tan"]
    } else if(colorsOneChoice<0.99){
      colorsMix=["#A32919","red"]
    } else if(colorsOneChoice<1){
      colorsMix=["#6790B8","blue"]
    }
    mode="light"

  } else {
    if(colorsOneChoice<0.25){
      colorsMix=["#7C8F73","green"]
    } else if(colorsOneChoice<0.65){
      colorsMix=["#828181","gray"]
    } else if(colorsOneChoice<0.85){
      colorsMix=["#A2966A","tan"]
    } else if(colorsOneChoice<0.99){
      colorsMix=["#99665F","red"]
    } else if(colorsOneChoice<1){
      colorsMix=["#5F7A99","blue"]
    }
    mode="dark"

  }

  colorScheme=fxrand()
  complexityScheme=fxrand()

  if(complexityScheme<0.18){
    hitLimit=3
    rotAngleInc=0.25
    countLimit=round(maxminrand(9,11))
    complexity="low"
  } else {
    hitLimit=5
    rotAngleInc=0.25
    countLimit=round(maxminrand(11,20))
    complexity="high"
  }

  colorTwoChoice=fxrand()

  if(colorStyle<colorStyleLim){
    colors=[[colorsMix[0],"#726E6C"]]
  } else {
    colors=[[colorsMix[0],"#C7C1AE"]]
  }

  if(colorStyle<colorStyleLim){
    backgroundColors=[
      ["#D1D1D1","neutral"],
      ["#e1d5be","warm"],
      ["#C9DEE9","cool"]
    ]  
  floorAlphaInc=(maxminrand(1.45,1.95))
  alphaStart=maxminrand(36,42)

  } else {
    backgroundColors=[
      ["#1F1F1E","neutral"],
      ["#241E1E","warm"],
      ["#202224","cool"]
    ]    
  floorAlphaInc=maxminrand(1.45,1.95)
  alphaStart=maxminrand(30,36)

  }

  floorWeightInc=round(maxminrand(0.93,1.6),2)
  mainWghtInc=maxminrand(0.8,1.07)
  mainWghtStart=maxminrand(3,6)
  floorDiv=maxminrand(0.71,1.2)
  alphaValInc=maxminrand(12,19)

  stepMult=[[16,25],[20,25],[25,30],[35,40]]
  step2Mult=[[40,45],[45,50],[50,55]]
  step2Vec=[[16,20],[20,24],[24,28],[28,32],[32,34]]

  weightChoice=fxrand()
  weightChoice=0.9

  randStepChoice=fxrand()
  uOffset=maxminrand(0.02,0.03)

  if(randStepChoice<0.5){
    stepVal=maxminrand(0.5,1)
    stepValTwo=maxminrand(0.5,1)
  } else {
    stepVal=1
    stepValTwo=1
  }

  shapeThickness=[round(maxminrand(18,23))]
  rSwitch=[round(maxminrand(42,58)),round(maxminrand(42,58)),round(maxminrand(42,58)),round(maxminrand(42,58)),round(maxminrand(42,58)),round(maxminrand(42,58)),round(maxminrand(42,58)),round(maxminrand(42,58)),round(maxminrand(42,58)),0,1]
  shuffle(rSwitch,true)
  shuffle(colors,true)
  shuffle(backgroundColors,true)
  shuffle(shapeThickness,true)
  shuffle(stepMult,true)
  shuffle(step2Mult,true)
  shuffle(step2Vec,true)

  finalRatio=0

  while(hitMaxNum<hitLimit||finalRatio<0.43||finalRatio>1.78){

  angleMode(DEGREES)
  canvas = createCanvas(2800, 2800);
  frameRate(60)
  hitMaxNum=0  
  pos = createVector(width/2, height/2);
  prev = pos.copy();
  count=0

  gridLineToggle=0

  while(count<countLimit){
    lineArr.push([pos.x, pos.y, prev.x, prev.y])
    points.push([pos.x, pos.y], [prev.x, prev.y])
    prev.set(pos);
    var step = createVector(maxminrand(-stepVal,stepVal),maxminrand(-stepValTwo,stepValTwo))
    noiseAng=noise(prev.x) * TWO_PI * maxminrand(3,12);
    var step2= p5.Vector.fromAngle(noiseAng)
    var r = fxrand(100);
    if (r < rSwitch[0]) {
      step.mult(maxminrand(stepMult[0][0],stepMult[0][1]));//////////
    } else {
      step.setMag(stepMult[0][0]);//
    }
    step2.add(step)
    step2.mult(maxminrand(step2Mult[0][0]),maxminrand(step2Mult[0][1]))
    pos.add(step2);
    count++
  }   

  countTwo=0
  rotAngle=0
  alphaVal=alphaStart
  hitMaxNum=0

    while(rotAngle<360){
      noFill()
      noStroke()
      polyCentroid=geometric.polygonMean(lineArr)
      rotPoly=geometric.polygonRotate(lineArr, rotAngle, polyCentroid)

      bounds = bounding_box(rotPoly);
      bound_points = [[bounds[0],bounds[1]],
                      [bounds[0],bounds[3]],
                      [bounds[2],bounds[3]],
                      [bounds[2],bounds[1]]
                    ];

      beginShape();
      for(m=0;m<rotPoly.length-1;m++){
        ellipse(rotPoly[m][0], rotPoly[m][1],10)
        vertex(rotPoly[m][0], rotPoly[m][1]);
      }
      endShape();
      linesActive=[]
      hitCount=0
      centroidLineDistMod=0.9

      p2=[(bound_points[2][0] + bound_points[1][0]) / 2, (bound_points[2][1] + bound_points[1][1]) / 2];    
      centroidLineDist=dist(polyCentroid[0],polyCentroid[1],p2[0],p2[1])
      polyLineLengthTotal=0
      for(t=0;t<rotPoly.length-1;t++){
        secondPoint=t+1
        if(secondPoint==rotPoly.length){
          secondPoint=0
        }
        polyLineLengthTotal+=polyLineDist=dist(rotPoly[m][0], rotPoly[m][1], rotPoly[secondPoint][0], rotPoly[secondPoint][1])
        polyLineAvg=polyLineLengthTotal/rotPoly.length
      }
      
      for(m=0;m<rotPoly.length-1;m++){
        secondPoint=m+1
        if(secondPoint==rotPoly.length){
          secondPoint=0
        }

        hit = collideLineLine(rotPoly[m][0], rotPoly[m][1], rotPoly[secondPoint][0], rotPoly[secondPoint][1], 
                              0, polyCentroid[1]+centroidLineDist*centroidLineDistMod, width, polyCentroid[1]+centroidLineDist*centroidLineDistMod);
        
        polyLineDist=dist(rotPoly[m][0], rotPoly[m][1], rotPoly[secondPoint][0], rotPoly[secondPoint][1])

        if(hit&&polyLineDist>polyLineAvg*0.47){
          hitCount++
        }

      }

      linesActive.push([hitCount,rotAngle])
      angleLineNum.push(linesActive)
      rotAngle+=rotAngleInc

    }

    angleLineNum.sort();
    angleLineNum.reverse(); 
    hitMaxNum=angleLineNum[0][0][0]

    rotPolyRatio = geometric.polygonRotate(lineArr, angleLineNum[0][0][1], polyCentroid)
    boundsRatio = bounding_box(rotPolyRatio);
    bound_points_Ratio = [[boundsRatio[0],boundsRatio[1]], [boundsRatio[0],boundsRatio[3]],
                          [boundsRatio[2],boundsRatio[3]], [boundsRatio[2],boundsRatio[1]]
                          ];
    topSide=dist(boundsRatio[0],boundsRatio[1],boundsRatio[0],boundsRatio[3])           
    bottomSide=dist(boundsRatio[0],boundsRatio[1],boundsRatio[2],boundsRatio[1])
    finalRatio=topSide/bottomSide      

    if(hitMaxNum<hitLimit||finalRatio<0.43||finalRatio>1.78){
      lineArr=[]
      points=[]
      linesActive=[]
      angleLineNum=[]
      intersectionCount=0
      finalRatio=0
      prev = createVector(width/2, height/2);
      clear()
    }
        
  }

}


function bounding_box(points) {
  const min_x = points.reduce((min, p) => p[0] < min ? p[0] : min, points[0][0]);
  const max_x = points.reduce((max, p) => p[0] > max ? p[0] : max, points[0][0]);
  const min_y = points.reduce((min, p) => p[1] < min ? p[1] : min, points[0][1]);
  const max_y = points.reduce((max, p) => p[1] > max ? p[1] : max, points[0][1]);
  
  return [min_x, min_y, max_x, max_y];
}
function draw() {
  
    clear()

    if(colorStyle<colorStyleLim){
      backClrChroma=chroma(backgroundColors[0][0]).desaturate(0.25).hex()
    } else {
      backClrChroma=chroma(backgroundColors[0][0]).hex()
      backClrChroma=chroma(backClrChroma).hex()
    }

    background(backClrChroma);

    push()

    if(colorStyle<colorStyleLim){
      floorAlphVal=(round(maxminrand(13,20)))
    } else {
      floorAlphVal=round(maxminrand(5,12))
    }

    floorAlphVal=-40

    if(colorStyle<colorStyleLim){
      floorAlpha=chroma(colors[0][0]).darken(2.8).hex()
    } else {
      floorAlpha=chroma(colors[0][0]).hex()
    }

    floorAlpha=color(floorAlpha)
    floorWeight=-round(maxminrand(8,10))
    prev=0
    uInc=round(maxminrand(0.48,0.52),2)
    fxePow=maxminrand(9,25)
    fxePow=25
    fxeWPow=maxminrand(0.1,0.2)

    for(u=0;u<200;u+=uInc){
      fxeW = pow(fxeWPow, u*0.048)
      floorWeight=u
      strokeWeight(floorWeight)
      fxe = pow(fxePow, u*uOffset)
      floorAlphVal+=floorAlphaInc
      prev=u
      fxeA = map(((height/1.9)+fxe),0,height,-150,120)
      floorAlpha.setAlpha(fxeA*0.8)
      stroke(floorAlpha)
      line(0,(height/2)+fxe,width,(height/2)+fxe)
    }

    pop()
    rotPoly = geometric.polygonRotate(lineArr, angleLineNum[0][0][1], polyCentroid)
    rotPoly = geometric.polygonScale(rotPoly, 0.2);
    bounds = bounding_box(rotPoly);
    bound_points = [[bounds[0],bounds[1]],
                    [bounds[0],bounds[3]],
                    [bounds[2],bounds[3]],
                    [bounds[2],bounds[1]]
                   ];
    
    polyCentroid=geometric.polygonMean(bound_points)
      
    var angleBetween = Math.atan2((height/2) - polyCentroid[1], (width/2) - polyCentroid[0]) * 180 / Math.PI;
    moveDist=dist(polyCentroid[0],polyCentroid[1],width/2,height/2)

    translated = geometric.polygonTranslate(rotPoly, angleBetween, moveDist);
    translatedCalc = geometric.polygonTranslate(rotPoly, angleBetween, moveDist);

    bounds = bounding_box(translated);
    bound_points = [[bounds[0],bounds[1]],
                    [bounds[0],bounds[3]],
                    [bounds[2],bounds[3]],
                    [bounds[2],bounds[1]]
                  ];
    
    boundsCalc = bounding_box(translatedCalc);
    bound_pointsCalc = [[boundsCalc[0],boundsCalc[1]],
                        [boundsCalc[0],boundsCalc[3]],
                        [boundsCalc[2],boundsCalc[3]],
                        [boundsCalc[2],boundsCalc[1]]
                      ];    
    
    boundVal=width/7
    boundScaleFactor=1
    scaleLoopNumber=0

    while(bound_pointsCalc[0][0]>boundVal&&bound_pointsCalc[0][1]>boundVal&&
          bound_pointsCalc[3][0]<width-boundVal&&bound_pointsCalc[3][1]>boundVal&&
          bound_pointsCalc[1][0]>boundVal&&bound_pointsCalc[1][1]<height-boundVal&&
          bound_pointsCalc[2][0]<width-boundVal&&bound_pointsCalc[2][1]<height-boundVal
         ){

    bound_pointsCalc = geometric.polygonScaleArea(bound_pointsCalc, boundScaleFactor,[width/2,height/2]);    

    if(weightChoice<0.33){
      boundScaleFactor=boundScaleFactor*1.00029     
    } else if (weightChoice<0.66) {
      boundScaleFactor=boundScaleFactor*1.00020    
    } else if(weightChoice<1) {
      boundScaleFactor=boundScaleFactor*1.0001     
    }


    translatedCalc = geometric.polygonScaleArea(translatedCalc, boundScaleFactor,[width/2,height/2]);
    scaleLoopNumber++
    scaleFacotrArr.push([scaleLoopNumber,boundScaleFactor])
    }

  
    translatedSHDW = geometric.polygonScaleArea(translatedCalc, scaleFacotrArr[scaleFacotrArr.length-1][1],[width/2,height/2]);
    boundsCalc = bounding_box(translatedSHDW);
    bound_pointsCalc = [[boundsCalc[0],boundsCalc[1]],
                        [boundsCalc[0],boundsCalc[3]],
                        [boundsCalc[2],boundsCalc[3]],
                        [boundsCalc[2],boundsCalc[1]]
                        ];  
    p3=[(boundsCalc[0] + boundsCalc[0]) / 2, (boundsCalc[1] + boundsCalc[3]) / 2];    
    p4=[(boundsCalc[2] + boundsCalc[2]) / 2, (boundsCalc[1] + boundsCalc[3]) / 2];    

  shadowRange=dist(p3[0],p3[1],boundsCalc[0],boundsCalc[3])

  orbitMap=map(shadowRange,10,width/2,10,3)

  for(bb=p3[1]+(shadowRange*0.7);bb<boundsCalc[3];bb+=0.2){
    
      for(m=0;m<translatedSHDW.length;m++){
        secondPoint=m+1
        if(secondPoint==translatedSHDW.length){
          secondPoint=0
        }
        hitTwo=intersect(translatedSHDW[m][0], translatedSHDW[m][1], translatedSHDW[secondPoint][0], translatedSHDW[secondPoint][1], 
                        p3[0],bb,p4[0],bb)
        if(hitTwo){          
          shadowHits.push([hitTwo.x,hitTwo.y])
        }
      }    
  }

  shadowMin=shadowHits.sort(function(a, b) {
    return a[0] - b[0];
  });

  shadowBackLimit=map(shapeThickness[0],15,30,7,20)

  lineRepeater=shapeThickness[0]*1.25
  lineRepeater=shapeThickness[0]*2.25

  shadowDepthMap=map(shadowRange,50,width/2,1,45)
  genDist=dist(p3[0],p3[1],p4[0],p4[1])
  genDistTwo=dist(boundsCalc[2],height/2,boundsCalc[2],boundsCalc[3])
  genAlpha=map(genDist,100,1900,13,19)

  shadowSpreadY=map(shadowRange,0,width/2,15,45)
  midRangeDist=dist(shadowMin[0][0],height/2,shadowMin[shadowMin.length-1][0],height/2)

  if(colorStyle<colorStyleLim){
    ffLim=16
    genAlphaTwo=map(genDistTwo,80,height/2.2,15,18)
  } else {
    ffLim=18
    genAlphaTwo=map(genDistTwo,60,height/2.2,21,22)
  }

  for(ff=0;ff<ffLim;ff++){
    moveShadow=0
    shrinkShadow=0
    shrinkVal=0
    shrinkMap=25
    shrinkMapTwo=25 
    spreadFactorY=shadowSpreadY*1.75

    if(colorStyle<colorStyleLim){
      darkC=chroma(colors[0][1]).darken(3).hex()
      genMult=2.2
    } else {
      darkC=chroma(backgroundColors[0][0]).desaturate().hex()
      genMult=2.7
    }

    for(ee=0;ee<shadowDepthMap*0.9;ee++){

      for(dd=0;dd<shadowHits.length;dd+=30){
       if(shadowHits[dd][0]<width/2){
          shrinkMult=map(shadowHits[dd][0],boundsCalc[0]-100,width/2,maxminrand(-3.2,3.2),0.01)
          shrinkShadow=shrinkMap*shrinkMult-100
        } 
        if(shadowHits[dd][0]>width/2){
          shrinkMult=map(shadowHits[dd][0],width/2,boundsCalc[2]+100,0.01,maxminrand(-3.2,3.2))
          shrinkShadow=-shrinkMapTwo*shrinkMult+100

        } 

        if(shadowHits[dd][0]<midRangeDist){
          spreadFactorX=map(shadowHits[dd][0],shadowMin[0][0]-50,midRangeDist,300,600)
        }
        if(shadowHits[dd][0]>midRangeDist){
          spreadFactorX=map(shadowHits[dd][0],midRangeDist,shadowMin[shadowMin.length-1][0]+50,600,300)          
        }

        shadowMap=map(shadowHits[dd][1], p3[1], boundsCalc[3], 18, 20)
        push()
        strength=shadowMap
        strMapTwo=map(midRangeDist,width/8,width,7,23)
        translate(shadowHits[dd][0]+shrinkShadow+maxminrand(-spreadFactorX,spreadFactorX),boundsCalc[3]-moveShadow+maxminrand(-spreadFactorY*1.6,spreadFactorY*1.6))
        generate(strMapTwo*0.8,orbitMap,genAlphaTwo);
        pop()
      }    
        shrinkVal+=25
        moveShadow+=18
        shrinkMap+=30
        shrinkMapTwo+=30 
    }    
  }

    translated.unshift(translated[0])
    translated.push(translated[translated.length-1])
    scaleLoopFactor=scaleLoopNumber-(scaleLoopNumber*0.3)
    mainWght=mainWghtStart


    if(colorStyle<colorStyleLim){
      clr=chroma(colors[0][1]).darken(2.4).hex()
    } else {
      clr=chroma(colors[0][1]).hex()
    }

    clr=color(clr)
    horzAlphDist=dist(p3[0],p3[1],boundsCalc[0],boundsCalc[3])
    stroke(255)
    horizonAlpha=map(horzAlphDist,25,height/2,alphaVal*0.33,alphaVal*2.7)

    moveVal=0
    for(s=0;s<scaleFacotrArr.length;s++){
    clr.setAlpha(horizonAlpha)
    stroke(clr)
    bound_points = geometric.polygonScaleArea(bound_points, scaleFacotrArr[s][1],[width/2,height/2]);
    translated = geometric.polygonScaleArea(translated, scaleFacotrArr[s][1],[(width/2),(height/2)]);
      if(s>scaleFacotrArr.length-lineRepeater){

        if(weightChoice<0.33){
          strokeWeight(mainWght*1.15)
        } else if(weightChoice<0.67) {
          strokeWeight(mainWght*0.79)
        } else if(weightChoice<1){
          strokeWeight(mainWght*1.2)
          strokeWeight(mainWght*0.52)
        }
      beginShape();
        for(m=0;m<translated.length;m++){
          secondPoint=m+1
          if(secondPoint==translated.length){
            secondPoint=0
          }
          curveVertex(translated[m][0]-25, translated[m][1]);
          if(m==translated.length-1){
            curveVertex(translated[m][0]-25, translated[m][1]);
          }
        }   
      endShape(); 
      mainWght+=mainWghtInc*1.1
      alphaVal+=alphaValInc*1.1
      }  
    scaleLoopNumber++
    }  


    window.$fxhashFeatures={
      "Mode": getMode(mode),
      "Background": getbackground(backgroundColors),
      "Ground": getGround(colorsMix),
      "Complexity": getComplexity(complexity),
    }


    noLoop()
}

function getMode(mode) {
  return mode
}

function getComplexity(complexity) {
  return complexity
}

function getbackground(backgroundColors) {
  return backgroundColors[0][1]
}

function getGround(colorsMix) {
  return colorsMix[1]
}

function draw_shape(points) {
  beginShape();
  points.forEach(function(point) {
    vertex(point[0], point[1]);
  });
  endShape(CLOSE);
}

function generate(strength,orbit,genAlpha) {
    const num_circles = strength*1.2
    for (let i = 0; i < num_circles; i++) {
        const angle = 360 * PI * fxrand();
        const r = width * 0.5 * fxrand();
        const x = (r * cos(angle)/maxminrand(orbit,15))*2.5;
        const y = (r * sin(angle)/maxminrand(orbit,15))*0.75;
        const c = color(darkC)
        c.setAlpha(genAlpha*genMult*0.9)
        noStroke()
        fill(c);
        ellipse(x, y, 1.8);        
    }
}

function maxminrand(min, max) {
  return fxrand() * (max - min) + min;
}

function get_noise_color(x, y, num_sides_symmetry, num_decimals=3, scale=1, center_y=0, center_x=0) {
    const angle = Math.atan2(y - center_y, x - center_x) % (2 * PI / num_sides_symmetry) / 2;
    const r = dist(x, y, center_x, center_y) / (width / 4);
  

    return noise(angle.toFixed(num_decimals) * scale, r.toFixed(num_decimals) * scale);
}

function intersect(x1, y1, x2, y2, x3, y3, x4, y4) {

	if ((x1 === x2 && y1 === y2) || (x3 === x4 && y3 === y4)) {
		return false
	}

	denominator = ((y4 - y3) * (x2 - x1) - (x4 - x3) * (y2 - y1))

	if (denominator === 0) {
		return false
	}

	let ua = ((x4 - x3) * (y1 - y3) - (y4 - y3) * (x1 - x3)) / denominator
	let ub = ((x2 - x1) * (y1 - y3) - (y2 - y1) * (x1 - x3)) / denominator

	if (ua < 0 || ua > 1 || ub < 0 || ub > 1) {
		return false
	}

	let x = x1 + ua * (x2 - x1)
	let y = y1 + ua * (y2 - y1)

	return {x, y}
}
function getMin(arr, n) {
    res = arr[0];
    for (i = 1; i < n; i++)
      res = min(res, arr[i]);
    return res;
}
