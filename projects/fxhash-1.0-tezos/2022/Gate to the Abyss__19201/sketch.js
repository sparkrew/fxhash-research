//arrays

let frames = [];

let fonts = [];
let letter = ['A','B','C','D','E','F','G','H','I','J','K','L','N','O','P','Q','R','S','T','U','V','X','Y','Z']
let number = ['1','2','3','4','5','6','7','8','9','0']
 let forms = ["ellipse","rect"]

//layers

let firstLayer;
let secondLayer;
let thirdLayer;
let forthLayer;
let fifthLayer;

//Loading variables

// let totalColors = 33;
let totalFrames = 35;
// let totalCovers = 1;
let loading = true;

// let counterColors = 0;
let counterFrames = 0;
// let counterCovers = 0;

function loadFrame() {
  // fonts[0] = loadFont('./fonts/WatchFont.ttf')
  //fonts[1] = loadFont('./fonts/Inconsolata.otf')
  for (let i = 0; i < totalFrames; i++) {
    frames[i] = loadImage(`./frames/frame${i}.png`,loaded );
    console.log(`./frames/frame${i}.png`);
  }
 

  
  function loaded(color, covesr, frame ) {
      // frames.push(color);
      // counterColors++;
      // frames.push(cover);
      // counterCovers++;
      frames.push(frame);
      counterFrames++;
      // if (counterColors == totalColors) {
      //   loading = false; }
      // if (counterCovers == totalCovers) {
      //   loading = false;  }
      if (counterFrames == totalFrames) {
          loading = false;  }
      
  }
}


//random functions for fxhash

function randomOneNum(el){
  return Math.floor(fxrand()*el)
}
function randomArr(arr){
  return arr[Math.floor(fxrand()*arr.length)]
}
function randomTwoNums(num1,num2){
  let dif = Math.abs(num2 - num1);
  console.log(num2 - Math.floor(fxrand()*dif))
  return num2 - Math.floor(fxrand()*dif)
}
function randomTwoDec(dec1, dec2){
  let dif = Math.abs(dec1*10000 - dec2*10000);
  let result = (dec2*10000 - Math.floor(fxrand()*dif))
  console.log(result/10000)
  return result/10000
}
function randomTwoDecc(dec1, dec2){
  let dif = Math.abs(dec1*10 - dec2*10);
  let result = (dec2*10 - Math.floor(fxrand()*dif))
  console.log(result/10)
  return result/10
}
//random functions for fxhash










function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  loadFrame();
  background(255);
  imageMode(CENTER);

  bW = Math.round(fxrand()  ) * 255
  //bW = 0
  xoff = 0.0
  decPerelin = randomTwoDecc(0.0001, 0.15)


 

  red = Math.round(fxrand() + 0.2 ) * randomTwoNums(0,255);
  green = Math.round(fxrand() + 0.1  ) * randomTwoNums(0,255);
  blue = Math.round(fxrand() + 0.2  ) * randomTwoNums(0,255);

  sizeCircle = randomTwoNums(70,100);

  //let firstimage = randomArr(colors);
  let secondimage = randomArr(frames);
let thirdimage = randomArr(forms)




  firstLayer = new First(secondimage,red,green,blue,xoff, decPerelin,sizeCircle);
  secondLayer = new Second(thirdimage,red,green,blue,)

  // secondLayer = new Second(x, y, d, z,start,inc, xoff, firstimage);
  // thirdLayer = new Third(x, y, start, inc,bW )
  // forthLayer = new Forth(firstNum,secondNum,thirdNum,forthNum,fifthNum,sixthNum,xoff,n,colorRangePerelin,helvFont, firstLetter,secondLetter,thirdLetter, red,green,blue,bW)
  // fifthLayer = new Fifth(xoff,n,colorRangePerelin, fifthimage,red,green,blue);

  setFeatures();
  

  }

function draw() {
 //orbitControl();
  //cam.camera(0, 0, (windowWidth + windowHeight) / t , 0, 0, 0, 0, 1, 0)
  if (loading) {
    background(bW);
    if (bW == 0) {
      stroke(255);
      noFill();
    rect(-100, 0, 200, 20);
    noStroke();
    fill(255, 100);
    var w = (200 * counterFrames) / totalFrames;
    rect(-100, 0, w, 20);
    }
    else {
      stroke(0);
      noFill();
    rect(-100, 0, 200, 20);
    noStroke();
    fill(0, 100);
    var w = (200 * counterFrames) / totalFrames;
    rect(-100, 0, w, 20);
    }
    
  } else {
    translate(0,0,-50)
    background(bW,);
    
    push()
    
    firstLayer.calcWave()
    firstLayer.renderWave()
    
    pop()
    
    push()
    // firstLayer.outerLayer()
    secondLayer.circleLayer()
    secondLayer.rectLayer()
    
    pop()
  
  }
}


class First {
  constructor(secondimage, red,green,blue, xoff, decPerelin,sizeCircle) {

this.secondimage = secondimage

  this.red = red;
  this.green = green;
  this.blue = blue;

  this.xoff = xoff;
  this.decPerelin = decPerelin;
  this.sizeCircle = sizeCircle;

  this.xRotate = randomTwoNums(-360,360)
  this.yRotate = randomTwoNums(0,180)
  this.zRotate = randomTwoNums(0,360)

  this.xspacing = 5; // Distance between each horizontal location
  this.w; // Width of entire wave
  this.theta = 0.0; // Start angle at 0
  this.amplitude =randomTwoDecc(5.0,50.0)// Height of wave
  this.period = randomTwoDecc(300.0,600.0); // How many pixels before the wave repeats
  this.dx; // Value for incrementing x
  this.yvalues; // Using an array to store height values for the wave
  
  this.w = 550 ;
  this.dx = (TWO_PI / this.period) * this.xspacing  ;
  this.yvalues = new Array(floor(this.w/this.xspacing));
  this.invertyvalues = new Array(floor(this.w/this.xspacing));
  let randIncApm = round(randomTwoNums(1,101));
  if (randIncApm > 51) {
  this.incApm = -1
  } else{
    this.incApm = 1
  }

this.incColor = randomTwoDecc(0.001,0.09)
this.start = 0
noiseDetail(1.2,1)

}


  calcWave(){
translate(0,0,-110)


//translate(p5.Vector.fromAngle(millis() / 1000, 40),0);

//Increment theta (try different values for
  // 'angular velocity' here)
  this.theta += 0.1;
  // For every x value, calculate a y value with sine function
  let x = this.theta;
  for (let i = 0; i < this.yvalues.length; i++) {
    this.yvalues[i] = sin(x) * this.amplitude ;
    this.invertyvalues[i] =  cos(x) * this.amplitude * this.incApm;
    x += this.dx;
  }
  // angleMode(DEGREES)
  // rotateZ(this.zRotate / 45 )
  angleMode(RADIANS)
  translate(0, -sin(x) * this.amplitude,0)
  

  }

  renderWave(){
  this.xoff = this.xoff + this.decPerelin
      let f = noise(this.xoff) 
      this.n = 0
      this.n+= this.incColor
      let mappingColor = map(this.amplitude,5.0,45.0,1,3,)

      // var r = map(cos(this.x/mappingColor), -1, 1, 80, 255)
      // var g = map(cos(this.x/this.decPerelin), -1, 1, 50, 255)
      // var b = map(cos(this.x), -1, 1, 20, 255)
   
      // let redValue = map(sin(frameCount/r),-1,1,this.red ,255,)
      //  let greenValue = map(cos(frameCount/g),-1,1,this.green  ,255,)
      //  let blueValue = map(sin(frameCount/b),-1,1,this.blue  ,255,)
   
      
  for ( this.x = 0; this.x < this.yvalues.length; this.x ++) {
    for (this.y = 0; this.y < this.yvalues.length; this.y ++)
    for(this.z = 0; this.z < this.yvalues.length; this.z ++)

    var r = map(sin(this.x*this.n+mappingColor), -1, 1, this.red, 255)
      var g = map(cos(this.y*this.n-mappingColor ), -1, 1, this.green , 255)
      var b = map(tan(this.z*this.n/mappingColor), -1, 1, this.blue , 255)
   
      let redValue = map(sin(frameCount/r),-1,1,this.red ,255,)
       let greenValue = map(cos(frameCount/g),-1,1,this.green  ,255,)
       let blueValue = map(sin(frameCount/b),-1,1,this.blue  ,255,)

    translate(0,0,4.5)
    push()
    noStroke()
    //noFill()
   // stroke(255,  10,)
   
    fill(b, r, g,40)
    //rotateZ(this.incApm * this.yvalues[this.x]*this.decPerelin * 1.6 )
    translate(this.invertyvalues[this.x],this.yvalues[this.x], 8)
    ellipsoid(this.yvalues[this.x]*this.decPerelin * 1.3)
    pop()
    push()
    //stroke(255,  10,)
    //noFill()
    fill(this.red ,this.blue, this.green  , 20)
    translate(this.invertyvalues[this.x],this.yvalues[this.x],0,)
    //rotateZ(frameCount * this.decPerelin + n*2)
    ellipsoid(this.yvalues[this.x]*this.decPerelin * 2.6)
     //image(this.firstimage,-this.yvalues[this.x]*this.decPerelin,this.yvalues[this.x] , this.yvalues[this.x]*this.decPerelin,this.yvalues[this.x]*this.decPerelin )
    pop()
    //rotateX(sin(this.xoff) * n )
    //rotateY(height / 2 + this.yvalues[this.x])
    //rotateZ(frameCount * 0.00005)
   //rotateZ(sin(this.xoff) * this.decPerelin * 100 )
  
  if (bW == 0){
    tint(r, g, b,12)
   } else {
    tint(r, g, b,50)
   }

  
  //tint(redValue, greenValue, blueValue,10)
    image(this.secondimage,0,  this.yvalues[this.x], 200, 200 )
   

  }
}

outerLayer(){
  translate(0,0,390)
  this.n = 0
  this.n+= this.incColor
  let mappingColor = map(this.amplitude,5.0,45.0,1,3,)
    var r = map(sin(this.x*this.n+mappingColor), -1, 1, this.red, 255)
    var g = map(cos(this.y*this.n-mappingColor ), -1, 1, this.green , 255)
    var b = map(tan(this.z*this.n/mappingColor), -1, 1, this.blue , 255)

  
  var space = this.decPerelin*3
  
for(var i = 0; i < 360; i += space) {
  
  var xoff = map(cos(i), -1, 1, 0, 3)
  var yoff = map(sin(i), -1, 1, 0, 3)
  
  var n = noise(xoff + this.start, yoff + this.start)
  
  var h = map(n, 0, 1, -50, 150)
  
    fill(g, r, b,30)
    rotate(space)
    rect(50, h/2 ,h/2, 1)
    
  }

  this.start += this.decPerelin/4

  // textureMode(NORMAL);
  // texture(this.planelayer)
  // plane(10)
  
}
}


class Second {
constructor(thirdimage,red,green,blue,){
  this.thirdimage = thirdimage
  this.planelayer = createGraphics(700,700);
  this.planelayer2 = createGraphics(700,700);
  this.planelayer.translate(this.planelayer.width/2,this.planelayer.height/2)
  this.planelayer2.translate(this.planelayer.width/2,this.planelayer.height/2)
  this.planelayer.angleMode(DEGREES)
  this.planelayer2.angleMode(DEGREES)
  this.start = 0
  this.rotateRand = randomTwoDecc(0,360)
  this.randForForms = randomTwoNums(0,200)
  this.randForForms2 = randomTwoNums(0,200)
  this.sizeCircle = randomTwoNums(550,600)
  this.sizeRect = randomTwoNums(390,640)

  this.red = red;
  this.green = green;
  this.blue = blue;
}

circleLayer(){
  translate(0,0,400)
  for(var i = 0; i < 360; i += 0.1) {
    var xoff = map(cos(i), -1, 1, 0, 3)
     var yoff = map(sin(i), -1, 1, 0, 3)
     
     var n = noise(xoff +  this.start, yoff +  this.start)
     
     var h = map(n, 0, 1, -150, 150)
     
     var r = map(sin(i), -1, 1, 0, 100)
     var g = map(h, -150, 150, 0, 100)
     var b = map(n, 0, 1, 0, 100)
     
 
}
let redValue = map(sin(frameCount/r),-1,1,this.red ,255,)
let greenValue = map(cos(frameCount/g),-1,1,this.green  ,255,)
let blueValue = map(sin(frameCount/b),-1,1,this.blue  ,255,)

this.start += 0.1
  this.planelayer.noFill(255)
  if (bW == 0){
    this.planelayer.noFill()
    this.planelayer.stroke(redValue,greenValue,blueValue,2)
   } else {
    this.planelayer.stroke(redValue,greenValue,blueValue,4)
   }
  

if (this.randForForms >= 0 && this.randForForms <= 100){
  this.planelayer.circle(0,0,this.sizeCircle)
}
if (this.randForForms >= 100 && this.randForForms <= 200){
  this.planelayer.rectMode(CENTER)
  this.planelayer.rect(0,0,this.sizeRect)
}
// if (this.randForForms >= 200 && this.randForForms <= 300){
//   //rotate(this.rotateRand)
//   this.planelayer.triangle(0,-285,200,200,-200,200,)
// }
  

}

rectLayer(){
  for(var i = 0; i < 360; i += 0.1) {
    var xoff = map(cos(i), -1, 1, 0, 3)
     var yoff = map(sin(i), -1, 1, 0, 3)
     
     var n = noise(xoff +  this.start, yoff +  this.start)
     
     var h = map(n, 0, 1, -150, 150)
     
     var r = map(sin(i), -1, 1, 0, 100)
     var g = map(h, -150, 150, 0, 100)
     var b = map(n, 0, 1, 0, 100)    
}
let redValue = map(sin(frameCount/r),-1,1,this.red ,255,)
let greenValue = map(cos(frameCount/g),-1,1,this.green  ,255,)
let blueValue = map(sin(frameCount/b),-1,1,this.blue  ,255,)

this.planelayer2.rotate(this.rotateRand )
if (bW == 0){
  this.planelayer2.noFill()
  this.planelayer2.stroke(redValue,greenValue,blueValue,100)
 } else {
   // this.planelayer2.background(255,1)
  this.planelayer2.noStroke()
  this.planelayer2.fill(redValue,greenValue,blueValue,150)
 }


  
 if (this.randForForms2 >= 0 && this.randForForms2 <= 140){
  this.planelayer2.rect(290,0,h,3)
}
if (this.randForForms2 >= 100 && this.randForForms2 <= 200){
  this.planelayer2.circle(290,0,h/2)
}
  

  textureMode(NORMAL);
  texture(this.planelayer);
  plane(240)
  texture(this.planelayer2);
  plane(240)
  
}

  
}

function setFeatures() {
  let firstNum =  randomArr(number)
  let secondNum = randomArr(number)
  let thirdNum = randomArr(number)

  let forthLetter = randomArr(letter) 
  let fifthLetter = randomArr(letter) 
  let sixthLetter = randomArr(letter) 

  let firstLetter = randomArr(letter)
  let secondLetter = randomArr(letter)
  let thirdLetter = randomArr(letter)

  let cubeName = '';
  let blackWhite = '';
  cubeName = firstLetter + secondLetter + thirdLetter + forthLetter + fifthLetter + sixthLetter + '-' + firstNum + secondNum + thirdNum
if (this.bW == 255) {
blackWhite = 'WHITE'
} else {
blackWhite = 'BLACK'
}
return window.$fxhashFeatures = {
    "gate-serial-number":  cubeName,
    "version" : blackWhite
  
}

}






function windowResized() {
  // s = (windowWidth, windowHeight);
  // resizeCanvas(s, s,);
  resizeCanvas(windowWidth, windowHeight)
}