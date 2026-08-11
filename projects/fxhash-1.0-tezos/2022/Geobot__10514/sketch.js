// FH_HASH p5 template | @visiophone_lab
// www.visiophone-lab.com

let seed = 0; //seed Hash
let col = 0; //color

let isFxpreviewCustom = false;

// Background
let colBackground11 = 0;
let colBackground12 = 0;
let colBackground13 = 0;
let colBackground21 = 0;
let colBackground22 = 0;
let colBackground23 = 0;

// Background images
let colBackgroundImg1 = 0;
let colBackgroundImg2 = 0;
let colBackgroundImg3 = 0;
let backgroundElements = [];
let angleOffset = 0;

// Body
let colBody1= 0; //color
let colBody2= 0; //color
let colBody3= 0; //color

// Neck
let colNeck1= 0; //color
let colNeck2= 0; //color
let colNeck3= 0; //color

// Eyes
let typeEyeRnd = 0; // Type eye (square, circle, cross)
let typeEyeRnd2 = 0; // Extra complement (glasses, monocle)
let typeEyeRnd3 = 0; // One eye types
let typeEye = 0;
let extraEye = 0;  // 0-Nothing, 1-Glasses, 2-Monocle Right, 3-Monocle Left
let typeOneEye = 0;
let numEye = 1;
let sizeEye = 0; // rect size
let sizeEye2 = 0; // rect size
let colEye11 = 0; //color
let colEye12 = 0; //color
let colEye13 = 0; //color
let colEye21 = 0; //color
let colEye22 = 0; //color
let colEye23 = 0; //color

// Mouth
let typeMouth = 0;
let sizeMouth = 0; // rect size
let colMouth = 0; //color
let roundMouth = 0;
let smileOffsetMouth = 0;

// Nose
let typeNose = 0;
let sizeNose = 0; // rect size
let colNose1= 0; //color
let colNose2= 0; //color
let colNose3= 0; //color

// Ears
let sizeEars = 0; // rect size
let colEars1= 0; //color
let colEars2= 0; //color
let colEars3= 0; //color
let typeEars = 0;

// Hair
let sizeHair = 0; // rect size
let colHair1= 0; //color
let colHair2= 0; //color
let colHair3= 0; //color

// Antenna
let numAntennas = 1; // % properties
let typeAntenna = 0;
let colorAntenna1 = 0;
let colorAntenna2 = 0;
let colorAntenna3 = 0;

// Screws
let colorScrew1 = 0;
let colorScrew2 = 0;
let colorScrew3 = 0;

// Indicators
let indicatorLeft = 0;
let indicatorRight = 0;

// Buttons
let buttonsElements = [];
let buttonsX = 10;
let buttonsY = 2;

// Lights
let buttonLightsColor11 = 0;
let buttonLightsColor12 = 0;
let buttonLightsColor13 = 0;
let buttonLightsColor21 = 0;
let buttonLightsColor22 = 0;
let buttonLightsColor23 = 0;
let buttonLightsColor31 = 0;
let buttonLightsColor32 = 0;
let buttonLightsColor33 = 0;

// Electro
let centerX;
let centerY;
let sectionLengthX;
let sectionLengthY;
let electroSectionsX = [];
let electroSectionsY = [];
let electroColor;


function setup() {
  
  let minWindowSize = min(windowWidth, windowHeight);
  
  createCanvas(minWindowSize, minWindowSize);
  rectMode(CENTER);
  angleMode(DEGREES);
  ellipseMode(CENTER);
  
  seed=int(fxrand() * 100000000); // FXHASH seed rand
  randomSeed(seed); 
  
  colBackground11=int(random(255));
  colBackground12=int(random(255));
  colBackground13=int(random(255));
  
  colBackground21=int(random(255));
  colBackground22=int(random(255));
  colBackground23=int(random(255));
  
  c1 = color(colBackground11,colBackground12,colBackground13);
  c2 = color(colBackground21,colBackground22,colBackground23);
  
  // Background images
  colBackgroundImg1=int(random(255));
  colBackgroundImg2=int(random(255));
  colBackgroundImg3=int(random(255));
  backgroundElementsSides = int(random(4,10));
  /*
  for (let i = 0; i < 250; i++)
  {   
    backgroundElements.push([random(0, 1), random(0, 1), random(0.02, 0.07)]);
  }*/
  for (let i = 0; i < 11; i++)
  {
    for (let j = 0; j < 11; j++)
    {   
      //backgroundElements.push([i*0.1, j*0.1, random(0.02, 0.07)]);
      //backgroundElements.push([i*0.1, j*0.1, random(0.01, 0.05)]);
      backgroundElements.push([i*0.1, j*0.1, random(0.01, 0.05), random(0, 360)]);
    }
  }
  
  // Body
  colBody1=int(random(255));
  colBody2=int(random(255));
  colBody3=int(random(255));
  
  // Neck
  colNeck1=int(random(255));
  colNeck2=int(random(255));
  colNeck3=int(random(255));

  // Face
  col1=int(random(255));
  col2=int(random(255));
  col3=int(random(255));
  faceRound = (random(0.01, 0.18));
  
  // Eyes
  typeEyeRnd = random();
  typeEyeRnd2 = random();
  typeEyeRnd3 = random();
  //typeEye = int(random([0, 1, 2])); // 0-Square, 1-Circle, 2-Cross
  extraEye = int(random([0, 1, 2, 3])); // 0-Nothing, 1-Glasses, 2-Monocle Right, 3-Monocle Left
  numEye = int(random([1, 2, 3]));
  colEye11=int(random(255));
  colEye12=int(random(255));
  colEye13=int(random(255));
  colEye21=int(random(255));
  colEye22=int(random(255));
  colEye23=int(random(255));
  sizeEye= (random(0.05, 0.1));
  sizeEye2= (random(0.02, 0.07));
  sizeGlass1= (random(0.08, 0.1));
  sizeGlass2= (random(0.06, 0.08));
  sizeMono1 = 0.1;
  sizeMono2 = 0.07;
  
  if (typeEyeRnd < 0.4)
    typeEye = 0;
  else if (typeEyeRnd < 0.8)
    typeEye = 1;
  else
    typeEye = 2;
  
  if (typeEye == 2) // Crosses eyes always have 2 eyes
    numEye = 2;
  
  if (typeEyeRnd2 < 0.6)
    extraEye = 0;
  else if (typeEyeRnd2 < 0.8)
    extraEye = 1;
  else if (typeEyeRnd2 < 0.9)
    extraEye = 2;
  else
    extraEye = 3;
  
  if (typeEyeRnd3 < 0.8)
    typeOneEye = 0;
  else
    typeOneEye = 1;
  
  // Mouth
  typeMouth = int(random([0, 1, 2, 3])); // 0-Rect, 1-Rect with curves, 2-Line with teeths, 3-Curves
  colMouth1=int(random(255));
  colMouth2=int(random(255));
  colMouth3=int(random(255));
  sizeMouth= (random(0.1, 0.2));
  roundMouth= (random(0.01, 0.08));
  smileOffsetMouth= (random(-0.12, 0.12));
  
  // Nose
  typeNose = int(random([0, 1])); // 0-Square, 1-Triangle
  colNose1=int(random(255));
  colNose2=int(random(255));
  colNose3=int(random(255));
  sizeNose=(random(0.02, 0.07));
  
  // Ears
  colEars1=int(random(255));
  colEars2=int(random(255));
  colEars3=int(random(255));
  sizeEars=(random(0.05, 0.12));
  typeEars=int(random([0, 1]));
  
  // Hair (not used)
  colHair1=int(random(255));
  colHair2=int(random(255));
  colHair3=int(random(255));
  sizeHair=(random(0.1, 0.3));
  
  // Antenna
  typeAntenna=int(random([0, 1]));
  
  antennaLong = 0.07;
  antennaDirection = int(random([-1, 1]));
  antenna1Angle = int(random(20, 70));
  antenna2Angle = int(random(20, 70));
  antenna3Angle = int(random(20, 70));  
  
  antennaPoint1X = antennaDirection*antennaLong*cos(antenna1Angle);
  antennaPoint1Y = antennaLong*sin(antenna1Angle);
  
  antennaPoint2X = -antennaDirection*antennaLong*cos(antenna2Angle);
  antennaPoint2Y = antennaLong*sin(antenna2Angle);
  
  antennaPoint3X = antennaDirection*antennaLong*cos(antenna3Angle);
  antennaPoint3Y = antennaLong*sin(antenna3Angle);
  
  colorAntenna1 = int(random(255));
  colorAntenna2 = int(random(255));
  colorAntenna3 = int(random(255));
  
  // Antenna ears
  antennaEarsLong = 0.09;
  antennaEars1Angle = int(random(5, 45));
  antennaEars2Angle = int(random(60, 90));
  antennaEarsPoint1X = 1*antennaEarsLong*cos(antennaEars1Angle);
  antennaEarsPoint1Y = antennaEarsLong*sin(antennaEars1Angle);
  antennaEarsPoint2X = 1*antennaEarsLong*cos(antennaEars2Angle);
  antennaEarsPoint2Y = antennaEarsLong*sin(antennaEars2Angle);
  
  // Screws
  colorScrew1 = int(random(255));
  colorScrew2 = int(random(255));
  colorScrew3 = int(random(255));
  
  // Buttons
  for (let i = 0; i < buttonsX; i++)
  {
    for (let j = 0; j < buttonsY; j++)
    {   
      buttonsElements.push(color(int(random(255)), int(random(255)), int(random(255))));
    }
  }
  
  // Indicator
  indicatorLeft = random([0,1]);
  indicatorRight = random([0,1]);
  
  // Indicator (arrow)
  indicatorLong = 0.06;
  indicatorAngle = int(random(10, 160));
  indicatorPoint1X = indicatorLong*cos(indicatorAngle);
  indicatorPoint1Y = indicatorLong*sin(indicatorAngle);
  
  // Indications (buttons)
  indicatorSectionLong = 0.065;
  indicatorPoint20X = indicatorSectionLong*cos(20);
  indicatorPoint20Y = indicatorSectionLong*sin(20);
  indicatorPoint40X = indicatorSectionLong*cos(40);
  indicatorPoint40Y = indicatorSectionLong*sin(40);
  indicatorPoint60X = indicatorSectionLong*cos(60);
  indicatorPoint60Y = indicatorSectionLong*sin(60);
  indicatorPoint80X = indicatorSectionLong*cos(80);
  indicatorPoint80Y = indicatorSectionLong*sin(80);
  indicatorPoint100X = indicatorSectionLong*cos(100);
  indicatorPoint100Y = indicatorSectionLong*sin(100);
  indicatorPoint120X = indicatorSectionLong*cos(120);
  indicatorPoint120Y = indicatorSectionLong*sin(120);
  indicatorPoint140X = indicatorSectionLong*cos(140);
  indicatorPoint140Y = indicatorSectionLong*sin(140);
  indicatorPoint160X = indicatorSectionLong*cos(160);
  indicatorPoint160Y = indicatorSectionLong*sin(160);
  
  // Indications (lights)
  buttonLightsColor11 = random(0,255);
  buttonLightsColor12 = random(0,255);
  buttonLightsColor13 = random(0,255);
  buttonLightsColor21 = random(0,255);
  buttonLightsColor22 = random(0,255);
  buttonLightsColor23 = random(0,255);
  buttonLightsColor31 = random(0,255);
  buttonLightsColor32 = random(0,255);
  buttonLightsColor33 = random(0,255);
  
  // Indications (electro)
  electroColor = random([0,1,2]);
  centerX = 0.625;
  centerY = 0.9125;
  sectionLengthX = 0.3;
  sectionLengthY = 0.06;
  
  electroSectionsX.push(centerX - 10*sectionLengthX/20);
  electroSectionsY.push(centerY);
  
  for (let i = -9; i < 11; i++)
  {
    let ranY = random([-0.8*sectionLengthY/2, -0.4*sectionLengthY/2, 0, 0.4*sectionLengthY/2, 0.8*sectionLengthY/2]);
    
    electroSectionsX.push(centerX + i*sectionLengthX/20);
    electroSectionsY.push(centerY + ranY);
  }

  
  // Properties
  
  // 0-Square, 1-Circle, 2-Cross
  let typeEyeProperty = "Square";
  if (typeEye == 0)
    typeEyeProperty = "Square";
  else if (typeEye == 1)
    typeEyeProperty = "Circle";
  else if (typeEye == 2)
    typeEyeProperty = "Cross";
  
  if (typeOneEye == 1 && numEye == 1 && typeEye == 1)
    typeEyeProperty = "Cyclop";
  
  // 0-Nothing, 1-Glasses, 2-Monocle Right, 3-Monocle Left
  let extraEyeProperty = "Nothing";
  
  if (extraEye == 0) 
    extraEyeProperty = "Nothing";
  else if (extraEye == 1 && numEye == 2 && typeEye != 2)
    extraEyeProperty = "Glasses";
  else if ((extraEye == 2 || extraEye == 3) && numEye == 2 && typeEye != 2)
    extraEyeProperty = "Monocle";
  
  // 0-1 antenna, 1-2 antennas
  if (typeAntenna == 0)
    numAntennas = 1;
  else if (typeAntenna == 1)
    numAntennas = 2;
  
  // typeEars
  let typeEarsProperty = "Rectangular";
  if (typeEars == 0)
    typeEarsProperty = "Rectangular";
  else if (typeEars == 1)
    typeEarsProperty = "Round";
  
  // typeNose // 0-Square, 1-Triangle
  let typeNoseProperty = "Square";
  if (typeNose == 0)
    typeNoseProperty = "Square";
  else if (typeNose == 1)
    typeNoseProperty = "Triangle";
  
  // typeMouth // 0-Rect, 1-Rect with curves, 2-Line with teeths, 3-Curves
  let typeMouthProperty = "Square";
  if (typeMouth == 0)
    typeMouthProperty = "Rectangular";
  else if (typeMouth == 1)
    typeMouthProperty = "Round";
  else if (typeMouth == 2)
    typeMouthProperty = "Line with teeth";
  else if (typeMouth == 3)
    typeMouthProperty = "Line";
  
  // backgroundElementsSides 4-10
  // square pentagon hexagon heptagon octagon nonagon decagon
  let backgroundProperty = "Square";
  if (backgroundElementsSides == 4)
    backgroundProperty = "Square";
  else if (backgroundElementsSides == 5)
    backgroundProperty = "Pentagon";
  else if (backgroundElementsSides == 6)
    backgroundProperty = "Hexagon";
  else if (backgroundElementsSides == 7)
    backgroundProperty = "Heptagon";
  else if (backgroundElementsSides == 8)
    backgroundProperty = "Octagon";
  else if (backgroundElementsSides == 9)
    backgroundProperty = "Nonagon";
  else if (backgroundElementsSides == 10)
    backgroundProperty = "Decagon";
  
  // indicatorLeft
  let indicatorLeftProperty = "Power indicator";
  if (indicatorLeft == 0)
    indicatorLeftProperty = "Power indicator";
  else if (indicatorLeft == 1)
    indicatorLeftProperty = "Lights";
  
  // indicatorRight
  let indicatorRightProperty = "Buttons";
  if (indicatorRight == 0)
    indicatorRightProperty = "Buttons";
  else if (indicatorRight == 1)
    indicatorRightProperty = "Wave";
  
  
// FX Features
  window.$fxhashFeatures = {
 "Background" : backgroundProperty,   
 "Number of antennas" : numAntennas,
 "Number of eyes" : numEye,
 "Eye type" : typeEyeProperty, 
 "Eye accessory" : extraEyeProperty,
 "Ear type" : typeEarsProperty,
 "Nose type" : typeNoseProperty,
 "Mouth type:" : typeMouthProperty,
 "Left body accesory" : indicatorLeftProperty,
 "Right body accesory" : indicatorRightProperty,
  };
  
  /*
  print("backgroundProperty " + backgroundProperty)
  print("numAntennas " + numAntennas)
  print("numEye " + numEye)
  print("typeEyeProperty " + typeEyeProperty)
  print("extraEyeType " + extraEyeProperty)
  print("typeEarsProperty " + typeEarsProperty)
  print("typeNoseProperty " + typeNoseProperty)
  print("typeMouthProperty " + typeMouthProperty)
  print("indicatorLeftProperty " + indicatorLeftProperty)
  print("indicatorRightProperty " + indicatorRightProperty)
*/
  
  //print(seed)

}

function draw() {
  
  // Background
  //background(color(colBackground11, colBackground12, colBackground13));
  
  for(let y=0; y<height; y++)
  {
    n = map(y,0,height,0,1);
    let newc = lerpColor(c1,c2,n);
    stroke(newc);
    line(0,y,width, y);
  }
  
  // Stroke
  stroke(0);
  strokeWeight(width*0.005)
  
  // Background images
  //drawPolygon(7, width*0.1, width*0.1, width*0.1, color(colBackgroundImg1, colBackgroundImg2, colBackgroundImg3))  
  for (let i of backgroundElements)
  {
    //drawPolygon(backgroundElementsSides, width*i[0], width*i[1], width*i[2], color(colBackgroundImg1, colBackgroundImg2, colBackgroundImg3))  
    drawPolygon(backgroundElementsSides, width*i[0], width*i[1], width*i[2], color(colBackgroundImg1, colBackgroundImg2, colBackgroundImg3), i[3]) 
  }
  
  // Stroke
  stroke(0);
  strokeWeight(width*0.01)
  
  // Neck
  fill(color(colNeck1, colNeck2, colNeck3));
  rect(width*0.5, height*0.85, width*0.2, width*0.2, width*0.0);
   
  // Body
  fill(color(colBody1, colBody2, colBody3));
  rect(width*0.5, height*1.0, width*0.8, width*0.4, width*0.15);
  
  // Ears
  fill(color(colEars1, colEars2, colEars3));
  if (typeEars == 0)
  {
    rect(width*0.25, height*0.45, width*sizeEars, width*sizeEars*2);
    rect(width*0.75, height*0.45, width*sizeEars, width*sizeEars*2);
  }
  else if (typeEars == 1)
  {
    ellipse(width*0.25, height*0.45, width*sizeEars, width*sizeEars*2)
    ellipse(width*0.75, height*0.45, width*sizeEars, width*sizeEars*2);
  }
  
  let ear1X = width*0.25-width*sizeEars/2;
  let ear1Y = height*0.45;
  
  let ear2X = width*0.75+width*sizeEars/2;
  let ear2Y = height*0.45;
  
  // Face
  fill(color(col1, col2, col3));
  rect(width/2, height/2, width*0.5, width*0.5, width*faceRound);
  //ellipse(width/2, height/2, width*0.5, width*0.55)
  
  // Eyes
  if (typeEye == 0)
  {
    if (numEye == 1)
    {
      fill(color(colEye11, colEye12, colEye13));
      rect(width*0.5, height*0.4, width*sizeEye, width*sizeEye);
      fill(color(colEye21, colEye22, colEye23));
      rect(width*0.5, height*0.4, width*sizeEye2, width*sizeEye2);
    }
    else if (numEye == 2)
    {
      if (extraEye == 0)
      {
        fill(color(colEye11, colEye12, colEye13));
        rect(width*0.4, height*0.4, width*sizeEye, width*sizeEye);
        rect(width*0.6, height*0.4, width*sizeEye, width*sizeEye);
        fill(color(colEye21, colEye22, colEye23));
        rect(width*0.4, height*0.4, width*sizeEye2, width*sizeEye2);
        rect(width*0.6, height*0.4, width*sizeEye2, width*sizeEye2);
      }
      else if (extraEye == 2) // Right monocle (left eye)
      {
        fill(color(colEye11, colEye12, colEye13));
        rect(width*0.4, height*0.4, width*sizeEye, width*sizeEye);
        fill(color(colEye21, colEye22, colEye23));
        rect(width*0.4, height*0.4, width*sizeEye2, width*sizeEye2);
      }
      else if (extraEye == 3) // Left monocle (right eye)
      {
        fill(color(colEye11, colEye12, colEye13));
        rect(width*0.6, height*0.4, width*sizeEye, width*sizeEye);
        fill(color(colEye21, colEye22, colEye23));
        rect(width*0.6, height*0.4, width*sizeEye2, width*sizeEye2);
      }
    }
    else if (numEye == 3)
    {
      fill(color(colEye11, colEye12, colEye13));
      rect(width*0.4, height*0.4, width*sizeEye*0.8, width*sizeEye*0.8);
      rect(width*0.6, height*0.4, width*sizeEye*0.8, width*sizeEye*0.8);
      rect(width*0.5, height*0.35, width*sizeEye*0.8, width*sizeEye*0.8);
      fill(color(colEye21, colEye22, colEye23));
      rect(width*0.4, height*0.4, width*sizeEye2*0.8, width*sizeEye2*0.8);
      rect(width*0.6, height*0.4, width*sizeEye2*0.8, width*sizeEye2*0.8);
      rect(width*0.5, height*0.35, width*sizeEye2*0.8, width*sizeEye2*0.8);     
    }
  }
  else if (typeEye == 1)
  {
    if (numEye == 1)
    {
      if (typeOneEye == 0)
      {
        fill(color(colEye11, colEye12, colEye13));
        ellipse(width*0.5, height*0.4, width*sizeEye, width*sizeEye);
        fill(color(colEye21, colEye22, colEye23));
        ellipse(width*0.5, height*0.4, width*sizeEye2, width*sizeEye2);
      }
      else if (typeOneEye == 1)
      {
        fill(color(colEye11, colEye12, colEye13));
        ellipse(width*0.5, height*0.4, width*sizeEye*2, width*sizeEye);
        fill(color(colEye21, colEye22, colEye23));
        ellipse(width*0.5, height*0.4, width*sizeEye2*2, width*sizeEye2);
      }
    }
    else if (numEye == 2)
    {
      if (extraEye == 0)
      {
        fill(color(colEye11, colEye12, colEye13));
        ellipse(width*0.4, height*0.4, width*sizeEye, width*sizeEye);
        ellipse(width*0.6, height*0.4, width*sizeEye, width*sizeEye);
        fill(color(colEye21, colEye22, colEye23));
        ellipse(width*0.4, height*0.4, width*sizeEye2, width*sizeEye2);
        ellipse(width*0.6, height*0.4, width*sizeEye2, width*sizeEye2);
      }
      else if (extraEye == 2) // Right monocle (left eye)
      {
        fill(color(colEye11, colEye12, colEye13));
        ellipse(width*0.4, height*0.4, width*sizeEye, width*sizeEye);
        fill(color(colEye21, colEye22, colEye23));
        ellipse(width*0.4, height*0.4, width*sizeEye2, width*sizeEye2);
      }
      else if (extraEye == 3) // Left monocle (right eye)
      {
        fill(color(colEye11, colEye12, colEye13));
        ellipse(width*0.6, height*0.4, width*sizeEye, width*sizeEye);
        fill(color(colEye21, colEye22, colEye23));
        ellipse(width*0.6, height*0.4, width*sizeEye2, width*sizeEye2);
      }
    }
    else if (numEye == 3)
    {
      fill(color(colEye11, colEye12, colEye13));
      ellipse(width*0.4, height*0.4, width*sizeEye*0.8, width*sizeEye*0.8);
      ellipse(width*0.6, height*0.4, width*sizeEye*0.8, width*sizeEye*0.8);
      ellipse(width*0.5, height*0.35, width*sizeEye*0.8, width*sizeEye*0.8);
      fill(color(colEye21, colEye22, colEye23));
      ellipse(width*0.4, height*0.4, width*sizeEye2*0.8, width*sizeEye2*0.8);
      ellipse(width*0.6, height*0.4, width*sizeEye2*0.8, width*sizeEye2*0.8);
      ellipse(width*0.5, height*0.35, width*sizeEye2*0.8, width*sizeEye2*0.8);     
    }
  }
  else if (typeEye == 2) // Cross always with 2 eyes
  {
    line (width*0.4-width*sizeEye*0.5, height*0.4-width*sizeEye*0.5, width*0.4+width*sizeEye*0.5, height*0.4+width*sizeEye*0.5);
    line (width*0.4+width*sizeEye*0.5, height*0.4-width*sizeEye*0.5, width*0.4-width*sizeEye*0.5, height*0.4+width*sizeEye*0.5);

    line (width*0.6-width*sizeEye*0.5, height*0.4-width*sizeEye*0.5, width*0.6+width*sizeEye*0.5, height*0.4+width*sizeEye*0.5);
    line (width*0.6+width*sizeEye*0.5, height*0.4-width*sizeEye*0.5, width*0.6-width*sizeEye*0.5, height*0.4+width*sizeEye*0.5);
  }
  
  // Glasses
  if (numEye == 2 && extraEye == 1 && typeEye != 2) // Don't put glasses with crosses
  {
    let sizeGlass = max(sizeGlass1, sizeGlass2);
    
    fill(color(0, 0, 0));
    ellipse(width*0.4, height*0.4, width*sizeGlass1, width*sizeGlass1);
    ellipse(width*0.6, height*0.4, width*sizeGlass1, width*sizeGlass1);
    fill(color(100, 100, 100));
    ellipse(width*0.4, height*0.4, width*sizeGlass2, width*sizeGlass2);
    ellipse(width*0.6, height*0.4, width*sizeGlass2, width*sizeGlass2);
    
    line(width*0.4 + width*sizeGlass/2, height*0.4, width*0.6 - width*sizeGlass/2, height*0.4);
    
    line(width/2 - width*0.25, height*0.4, width*0.4 - width*sizeGlass/2, height*0.4);
    line(width/2 + width*0.25, height*0.4, width*0.6 + width*sizeGlass/2, height*0.4);
  }
  
  // Monocle
  if (numEye == 2 && extraEye == 2 && typeEye != 2) // Right monocle (left eye)
  {
    let sizeGlass = max(sizeGlass1, sizeGlass2);
    
    // Gold color
    fill(color(255, 215, 0));
    ellipse(width*0.6, height*0.4, width*sizeMono1, width*sizeMono1);
    // Crystal color 
    fill(color(167, 216, 222));
    ellipse(width*0.6, height*0.4, width*sizeMono2, width*sizeMono2);
    
    // Chain
    let chainSize1 = 0.05;
    let chainSize2 = 0.04;
    let chainSize3 = 0.03;

    fill(color(255, 215, 0)); // Gold color
    let offsetChainX = width*0.6 + width*sizeMono1*0.5 + width*chainSize1*0.5;
    circle(offsetChainX, height*0.4, width*chainSize1);
    circle(offsetChainX, height*0.4 + width*chainSize1*0.5 + width*chainSize2*0.5, width*chainSize2);
    circle(offsetChainX, height*0.4 + width*chainSize1*0.5 + width*chainSize2 + width*chainSize3*0.5, width*chainSize3);
    circle(offsetChainX, height*0.4 + width*chainSize1*0.5 + width*chainSize2 + 1.5*height*chainSize3, width*chainSize3);
    circle(offsetChainX, height*0.4 + width*chainSize1*0.5 + width*chainSize2 + 2.5*height*chainSize3, width*chainSize3);
  }
  if (numEye == 2 && extraEye == 3 && typeEye != 2) // Left monocle (right eye)
  {
    let sizeGlass = max(sizeGlass1, sizeGlass2);
    
    // Gold color
    fill(color(255, 215, 0));
    ellipse(width*0.4, height*0.4, width*sizeMono1, width*sizeMono1);
    // Crystal color 
    fill(color(167, 216, 222));
    ellipse(width*0.4, height*0.4, width*sizeMono2, width*sizeMono2);   
    
    // Chain
    let chainSize1 = 0.05;
    let chainSize2 = 0.04;
    let chainSize3 = 0.03;

    fill(color(255, 215, 0)); // Gold color
    let offsetChainX = width*0.4 - width*sizeMono1*0.5 - width*chainSize1*0.5;
    circle(offsetChainX, height*0.4, width*chainSize1);
    circle(offsetChainX, height*0.4 + width*chainSize1*0.5 + width*chainSize2*0.5, width*chainSize2);
    circle(offsetChainX, height*0.4 + width*chainSize1*0.5 + width*chainSize2 + width*chainSize3*0.5, width*chainSize3);
    circle(offsetChainX, height*0.4 + width*chainSize1*0.5 + width*chainSize2 + 1.5*height*chainSize3, width*chainSize3);
    circle(offsetChainX, height*0.4 + width*chainSize1*0.5 + width*chainSize2 + 2.5*height*chainSize3, width*chainSize3);
  }

  // Mouth
  if (typeMouth == 0)
  {
    fill(color(colMouth1, colMouth2, colMouth3));
    rect(width*0.5, height*0.63, width*sizeMouth, width*sizeMouth*0.3);
    
    line(width*0.5 - width*sizeMouth/2, height*0.63, width*0.5 + width*sizeMouth/2, height*0.63);
    
    line(width*0.5 - width*sizeMouth*0.25, height*0.63 + width*sizeMouth*0.3*0.5, width*0.5 - width*sizeMouth*0.25, height*0.63 - width*sizeMouth*0.3*0.5);
    line(width*0.5 - width*sizeMouth*0.00, height*0.63 + width*sizeMouth*0.3*0.5, width*0.5 - width*sizeMouth*0.00, height*0.63 - width*sizeMouth*0.3*0.5);
    line(width*0.5 + width*sizeMouth*0.25, height*0.63 + width*sizeMouth*0.3*0.5, width*0.5 + width*sizeMouth*0.25, height*0.63 - width*sizeMouth*0.3*0.5);
  }
  else if (typeMouth == 1)
  {
    fill(color(colMouth1, colMouth2, colMouth3));
    rect(width*0.5, height*0.63, width*sizeMouth, width*sizeMouth*0.3, width*roundMouth);
    
    line(width*0.5 - width*sizeMouth/2, height*0.63, width*0.5 + width*sizeMouth/2, height*0.63);
    
    line(width*0.5 - width*sizeMouth*0.25, height*0.63 + width*sizeMouth*0.3*0.5, width*0.5 - width*sizeMouth*0.25, height*0.63 - width*sizeMouth*0.3*0.5);
    line(width*0.5 - width*sizeMouth*0.00, height*0.63 + width*sizeMouth*0.3*0.5, width*0.5 - width*sizeMouth*0.00, height*0.63 - width*sizeMouth*0.3*0.5);
    line(width*0.5 + width*sizeMouth*0.25, height*0.63 + width*sizeMouth*0.3*0.5, width*0.5 + width*sizeMouth*0.25, height*0.63 - width*sizeMouth*0.3*0.5);
  }
  else if (typeMouth == 2)
  {
    line(width*0.5-width*sizeMouth/2, height*0.63, width*0.5+width*sizeMouth/2, height*0.63)
    line(width*0.5-width*sizeMouth/2*0.50, height*0.63, width*0.5-width*sizeMouth/2*0.50, height*0.63 + height*0.02)
    line(width*0.5-width*sizeMouth/2*0.25, height*0.63, width*0.5-width*sizeMouth/2*0.25, height*0.63 - height*0.02)
    line(width*0.5+width*sizeMouth/2*0.25, height*0.63, width*0.5+width*sizeMouth/2*0.25, height*0.63 + height*0.02)
    line(width*0.5+width*sizeMouth/2*0.50, height*0.63, width*0.5+width*sizeMouth/2*0.50, height*0.63 - height*0.02)
  }
  else if (typeMouth == 3)
  {
    noFill();
    let x1 = width*0.5-width*sizeMouth/2;
    let y1 = height*0.63;
    let x2 = width*0.5+width*sizeMouth/2;
    let y2 = height*0.63;
        
    let x1c = x1;
    let y1c = height*(0.63+smileOffsetMouth);
    let x2c = x2;
    let y2c = height*(0.63+smileOffsetMouth);
    
    curve(x1c, y1c, x1, y1, x2, y2, x2c, y2c)
  }
  
  // Nose
  if (typeNose == 0)
  {
    fill(color(colNose1, colNose2, colNose3));
    rect(width*0.5, height*0.52, width*sizeNose, width*sizeNose);
  }
  else if (typeNose == 1)
  {
    fill(color(colNose1, colNose2, colNose3));
    drawPolygon(3, width*0.5, height*0.52, width*sizeNose, color(colMouth1, colMouth2, colMouth3), 30);
  }

  // Antennas
  if (typeAntenna == 0)
  {    
    // Antenna Head
    let p1X = width*0.5+width*antennaPoint1X;
    let p1Y = height*0.25-width*antennaPoint1Y;
    
    let p2X = p1X+width*antennaPoint2X;
    let p2Y = p1Y-width*antennaPoint2Y;
    
    let p3X = p2X+width*antennaPoint3X;
    let p3Y = p2Y-width*antennaPoint3Y;
    
    line(width*0.5, height*0.25, p1X, p1Y)
    line(p1X, p1Y, p2X, p2Y)
    line(p2X, p2Y, p3X, p3Y)
    
    fill(color(colorAntenna1, colorAntenna2, colorAntenna3));
    circle(p3X, p3Y, width*0.04);
  }
  else if (typeAntenna == 1)
  {
    
    // Antenna Ears
    let pE11X = ear1X-width*antennaEarsPoint1X;
    let pE11Y = ear1Y-width*antennaEarsPoint1Y;
    
    let pE12X = pE11X-width*antennaEarsPoint2X;
    let pE12Y = pE11Y-width*antennaEarsPoint2Y;
    
    let pE21X = ear2X+width*antennaEarsPoint1X;
    let pE21Y = ear2Y-width*antennaEarsPoint1Y;
    
    let pE22X = pE21X+width*antennaEarsPoint2X;
    let pE22Y = pE21Y-width*antennaEarsPoint2Y;
    
    line(ear1X, ear1Y, pE11X, pE11Y)
    line(pE11X, pE11Y, pE12X, pE12Y)
    
    line(ear2X, ear2Y, pE21X, pE21Y)
    line(pE21X, pE21Y, pE22X, pE22Y)
    
    fill(color(colorAntenna1, colorAntenna2, colorAntenna3));
    circle(pE12X, pE12Y, width*0.04);
    circle(pE22X, pE22Y, width*0.04);
  }
  
  // Screws
  strokeWeight(width*0.0075)
  strokeWeight(width*0.005)
  fill(color(colorScrew1, colorScrew2, colorScrew3));
  //circle(width*0.2, height*0.878, width*0.02);
  //circle(width*0.4, height*0.878, width*0.02);
  //circle(width*0.6, height*0.878, width*0.02);
  //circle(width*0.8, height*0.878, width*0.02);
  //drawPolygon(6, width*0.2, height*0.878, width*0.03, color(colorScrew1, colorScrew2, colorScrew3), 0);
  //drawPolygon(6, width*0.4, height*0.878, width*0.03, color(colorScrew1, colorScrew2, colorScrew3), 0);
  //drawPolygon(6, width*0.6, height*0.878, width*0.03, color(colorScrew1, colorScrew2, colorScrew3), 0);
  //drawPolygon(6, width*0.8, height*0.878, width*0.03, color(colorScrew1, colorScrew2, colorScrew3), 0);
  fill(color(0, 0, 0));
  circle(width*0.2, height*0.84, width*0.015);
  circle(width*0.4, height*0.84, width*0.015);
  circle(width*0.6, height*0.84, width*0.015);
  circle(width*0.8, height*0.84, width*0.015);
  circle(width*0.15, height*0.95, width*0.015);
  circle(width*0.85, height*0.95, width*0.015);
  
  // Right indicator
  if (indicatorRight == 0)
  {
    // Buttons
    let index = 0;
    let buttonSize = width*0.03;
    for (let i = 0; i < buttonsX; i++)
    {
      for (let j = 0; j < buttonsY; j++)
      {
        fill(color(buttonsElements[index]))
        rect(width*0.5+i*buttonSize, height*0.9+j*buttonSize, buttonSize, buttonSize)
        index++;
      }
    }
  }
  else if (indicatorRight == 1)
  {
    fill(230, 230, 230);
    let centerX = width*0.625;
    let centerY = width*0.9125;
    let sectionLengthX = width*0.3;
    let sectionLengthY = width*0.06;
    rect(centerX, centerY, sectionLengthX, sectionLengthY);
    
    push()
    stroke(128,128,128);
    line(centerX-sectionLengthX/2, centerY, centerX+sectionLengthX/2, centerY);
    pop()
    
    for (let i = 1; i < 21; i++)
    {
      push()
      if (electroColor == 0)
        stroke(0,0,255);
      else if (electroColor == 1)
        stroke(255,0,0);
      else if (electroColor == 2)
        stroke(255,0,255);
      
      line(width*electroSectionsX[i-1], width*electroSectionsY[i-1], width*electroSectionsX[i], width*electroSectionsY[i]);
      pop()
    }
      
    push()
    noFill();
    rect(centerX, centerY, sectionLengthX, sectionLengthY);
    pop()
  }
  
  // Left Indicator
  if (indicatorLeft == 0)
  {
    let indicatorCenterX = width*0.3;
    let indicatorCenterY = height*0.95;
    fill(200, 200, 200);
    arc(indicatorCenterX, indicatorCenterY, width*0.15, width*0.15, 180, 360);
    line(width*0.225, indicatorCenterY, width*0.375, indicatorCenterY);
    
    let pIX = indicatorCenterX+width*indicatorPoint1X;
    let pIY = indicatorCenterY-width*indicatorPoint1Y;
    
    line(indicatorCenterX, indicatorCenterY, pIX, pIY);
    fill(255,0,0);
    circle(indicatorCenterX, indicatorCenterY, width*0.02);
    
    // Indications
    let pI20X = indicatorCenterX+width*indicatorPoint20X;
    let pI20Y = indicatorCenterY-width*indicatorPoint20Y;
    let pI40X = indicatorCenterX+width*indicatorPoint40X;
    let pI40Y = indicatorCenterY-width*indicatorPoint40Y;
    let pI60X = indicatorCenterX+width*indicatorPoint60X;
    let pI60Y = indicatorCenterY-width*indicatorPoint60Y;
    let pI80X = indicatorCenterX+width*indicatorPoint80X;
    let pI80Y = indicatorCenterY-width*indicatorPoint80Y;
    let pI100X = indicatorCenterX+width*indicatorPoint100X;
    let pI100Y = indicatorCenterY-width*indicatorPoint100Y;
    let pI120X = indicatorCenterX+width*indicatorPoint120X;
    let pI120Y = indicatorCenterY-width*indicatorPoint120Y;
    let pI140X = indicatorCenterX+width*indicatorPoint140X;
    let pI140Y = indicatorCenterY-width*indicatorPoint140Y;
    let pI160X = indicatorCenterX+width*indicatorPoint160X;
    let pI160Y = indicatorCenterY-width*indicatorPoint160Y;
    
    fill(0);
    circle(pI20X, pI20Y, width*0.002);
    circle(pI40X, pI40Y, width*0.002);
    circle(pI60X, pI60Y, width*0.002);
    circle(pI80X, pI80Y, width*0.002);
    circle(pI100X, pI100Y, width*0.002);
    circle(pI120X, pI120Y, width*0.002);
    circle(pI140X, pI140Y, width*0.002);
    circle(pI160X, pI160Y, width*0.002);
  }
  else if (indicatorLeft == 1)
  {
    let indicatorCenter1X = width*0.225;
    let indicatorCenter2X = width*0.3;
    let indicatorCenter3X = width*0.375;
    let indicatorCenter1Y = height*0.9125;
    fill(200, 200, 200);
    circle(indicatorCenter1X, indicatorCenter1Y, width*0.04);
    circle(indicatorCenter2X, indicatorCenter1Y, width*0.04);
    circle(indicatorCenter3X, indicatorCenter1Y, width*0.04);
    fill(color(buttonLightsColor11, buttonLightsColor12, buttonLightsColor13));
    circle(indicatorCenter1X, indicatorCenter1Y, width*0.02);
    fill(color(buttonLightsColor21, buttonLightsColor22, buttonLightsColor23));
    circle(indicatorCenter2X, indicatorCenter1Y, width*0.02);
    fill(color(buttonLightsColor31, buttonLightsColor32, buttonLightsColor33));
    circle(indicatorCenter3X, indicatorCenter1Y, width*0.02);
    
  }

  stroke(0);
    
  // Trigger fx preview
  if (isFxpreviewCustom == false)
  {
    fxpreview();
    isFxpreviewCustom = true;
  }
}


function windowResized() {
  let minWindowSize = min(windowWidth, windowHeight);
  resizeCanvas(minWindowSize, minWindowSize);
  //print("RESIZE " + windowWidth)
}

function drawPolygon(sides, x, y, size, color, angleOffset){
  let angle = 360 / sides;
  beginShape();
  fill(color);
  for (let a = 0; a < 360; a += angle) {
    let sx = x + cos(a+angleOffset) * size/2;
    let sy = y + sin(a+angleOffset) * size/2;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}