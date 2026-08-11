//arrays

let frames = [];
let colors = [];
let covers = [];
let fonts = [];
let letter = ['A','B','C','D','E','F','G','H','I','J','K','L','N','O','P','Q','R','S','T','U','V','X','Y','Z']
let number = ['1','2','3','4','5','6','7','8','9','0']

//layers

let firstLayer;
let secondLayer;
let thirdLayer;
let forthLayer;
let fifthLayer;

//Loading variables

let totalColors = 33;
let totalFrames = 43;
let totalCovers = 1;
let loading = true;

let counterColors = 0;
let t = 2.3
let cam;
// let counterFrames = 0;
// let counterCovers = 0;

function mouseClicked() {
  if (t === 2.3) {
    t = 3;
  } else if (t === 3) {
    t = 2.3;
  }
}

function loadFrame() {
  fonts[0] = loadFont('./fonts/WatchFont.ttf')
  //fonts[1] = loadFont('./fonts/Inconsolata.otf')
  for (let i = 0; i < totalFrames; i++) {
    frames[i] = loadImage(`./frames/frame${i}.png` );
    console.log(`./frames/frame${i}.png`);
  }
  for (let i = 0; i < totalCovers; i++) {
    covers[i] = loadImage(`./covers/cover${i}.png`  );
  }
  for (let i = 0; i < totalColors; i++) {
    colors[i] = loadImage(`./colors/color${i}.png` , loaded);
    console.log(`./colors/color${i}.png`)
  }

  
  function loaded(color, covesr, frame ) {
      frames.push(color);
      counterColors++;
      // frames.push(cover);
      // counterCovers++;
      // frames.push(frame);
      // counterFrames++;
      if (counterColors == totalColors) {
        loading = false; }
      // if (counterCovers == totalCovers) {
      //   loading = false;  }
      // if (counterFrames == totalFrames) {
      //     loading = false;  }
      
  }
}
//Loading functions for test

// function loadColor() {
//   for (let i = 0; i < totalColors; i++) {
//     colors[i] = loadImage(`./colors/color${i}.png` , colorLoaded);
//     console.log(`./colors/color${i}.png`)
//   } 

//   function colorLoaded(color) {
     
//       frames.push(color);
//       counterColors++;
//       if (counterColors == totalColors) {
//         loading = false;
//     }
//   }
// }

// function loadCover() {
//   for (let i = 0; i < totalCovers; i++) {
//     covers[i] = loadImage(`./covers/cover${i}.png` , coverLoaded );
//   }

//   function coverLoaded(cover) {
//       //console.log(filename);
//       frames.push(cover);
//       counterCovers++;
//       if (counterCovers == totalCovers) {
//         loading = false;
//     }
//   }
// }

//Loading functions for test



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
  //createCanvas(windowWidth, windowHeight, WEBGL);
  s = (windowWidth, windowHeight);
  createCanvas(s, s, WEBGL);
  loadFrame();
  cam = createCamera();
 
  //ortho();

  background(255);
  
  imageMode(CENTER);

  inc = randomTwoDec(-0.15,0.15);
  start = 0;
  x = 1;
  y = 1;
  z = 0;
  s =  randomTwoDecc(-0.5,0.5);
  d = randomTwoNums(-5,5)
  xoff = 0.0
  n = randomTwoNums(170,255);
  decPerelin = randomTwoDecc(0.03, 1.5)
  r = randomTwoDec(-0.0100,0.0100);
  colorRangePerelin = randomTwoDecc(-0.06,0.06)
  bW = Math.round(fxrand() + 0.3 ) * 255

  red = Math.round(fxrand() + 0.5 ) * randomTwoNums(70,255);
  green = Math.round(fxrand() + 0.3  ) * randomTwoNums(90,255);
  blue = Math.round(fxrand() + 0.2  ) * randomTwoNums(110,255);


  let firstimage = randomArr(colors);
  let secondimage = randomArr(frames);
  let fifthimage = randomArr(covers);
  let helvFont = randomArr(fonts);


  let firstNum =  randomArr(number)
  let secondNum = randomArr(number)
  let thirdNum = randomArr(number)
  let forthNum = randomArr(number) 
  let fifthNum = randomArr(number) 
  let sixthNum = randomArr(number) 


  let firstLetter = randomArr(letter)
  let secondLetter = randomArr(letter)
  let thirdLetter = randomArr(letter)
  

  firstLayer = new First(x, y, z, s, r, xoff,decPerelin, firstimage, secondimage, red,green,blue);
  secondLayer = new Second(x, y, d, z,start,inc, xoff, firstimage);
  thirdLayer = new Third(x, y, start, inc,bW )
  forthLayer = new Forth(firstNum,secondNum,thirdNum,forthNum,fifthNum,sixthNum,xoff,n,colorRangePerelin,helvFont, firstLetter,secondLetter,thirdLetter, red,green,blue,bW)
  fifthLayer = new Fifth(xoff,n,colorRangePerelin, fifthimage,red,green,blue);

  forthLayer.setFeatures();


  

  }

function draw() {
 // orbitControl();

  cam.camera(0, 0, (windowWidth + windowHeight) / t , 0, 0, 0, 0, 1, 0)
  translate(0,0,-10)
  if (loading) {
    background(bW);
    if (bW == 0) {
      stroke(255);
      noFill();
    rect(-100, 0, 200, 20);
    noStroke();
    fill(255, 100);
    var w = (200 * counterColors) / totalColors;
    rect(-100, 0, w, 20);
    }
    else {
      stroke(0);
      noFill();
    rect(-100, 0, 200, 20);
    noStroke();
    fill(0, 100);
    var w = (200 * counterColors) / totalColors;
    rect(-100, 0, w, 20);
    }
    
   
  } else {
  background(bW,);
  push();
  firstLayer.colorPlane() ;
  firstLayer.framePlane() ;
  firstLayer.move();
  secondLayer.moveSphere();
  secondLayer.show();
  pop();

  push();
  translate(0,0,50)
  firstLayer.move();
  translate(0,0,-109)
  firstLayer.showLine();
  firstLayer.showBox()
  pop();

  push();
  thirdLayer.showPerlinPlane()
  pop();

  push();
  forthLayer.textNumbers();
  forthLayer.setFeatures();
  pop();

  push();
  fifthLayer.showPlane();
  pop();
  } 
}

class First {
  constructor(x, y, z, s, r, xoff, decPerelin, firstimage, secondimage, red,green,blue) {
   this.x = x;
   this.y = y;
   this.z = z;
   this.s = s;
   this.r = r;
   this.xoff = xoff;
   this.decPerelin = decPerelin;
   this.firstimage = firstimage;
   this.secondimage = secondimage
   this.sizer = randomTwoNums(100,200);
   this.sizet =  randomTwoNums(12,24);
   this.planelayer = createGraphics(400,400);

  //  this.red = Math.round(fxrand() + 0.2 ) * randomTwoNums(110,255);
  //  this.green = Math.round(fxrand() + 0.2) * randomTwoNums(110,255);
  //  this.blue = Math.round(fxrand() + 0.1) * randomTwoNums(110,255);

  this.red = red;
  this.green = green;
  this.blue = blue;
  
   this.BoxRed = Math.round(fxrand() + 0.1 ) * randomTwoNums(50,255);
   this.BoxGreen = Math.round(fxrand() + 0.2 ) *  randomTwoNums(70,255);
   this.BoxBlue = Math.round(fxrand() + 0.3 ) * randomTwoNums(110,255);
   


  }
  move(){
    angleMode(DEGREES);
     if (this.z > 65 || this.z < -65 ) {
      this.s = this.s * -1
     }
     this.z = this.z + this.s
      rotateY( this.z  );
     
  }
  showLine() {
    this.xoff = this.xoff + this.decPerelin
      let f = noise(this.xoff) * 25.0
      let n = f + sin(this.xoff) * 35.0  ;
    for ( this.x = 0; this.x <= 200   ; this.x += 10) {
        translate(0,0,10);
        //scale(frameCount * this.r)
        tint(this.red , this.green  ,this.blue , n  )
        image(this.firstimage, 0, 0, 200, 200 );
        push()
        translate(0,0,1)
        // tint(0,0,0,20)
        // image(this.secondimage, 0, 0, 200, 200 );
       this.planelayer.image(this.secondimage, 0, 0, 400, 400 );
       textureMode(NORMAL);
       texture(this.planelayer);
       noStroke();
       if (bW == 0) {
        tint(242, 0, 0,30)
      }
      else {
       tint(0, 30)
      }
       plane(this.sizer)
      // torus(this.sizer)
      //plane(sin(this.xoff) * this.sizer)
      //sphere(sin(this.xoff) * this.sizet)
      //torus(sin(this.xoff) * this.sizet,this.sizet,this.sizet,this.sizet);
        //noLoop();
        pop()
    }
  }


showBox() {
  this.xoff = this.xoff + this.decPerelin
  let f = noise(this.xoff) * 30
  let n = f + sin(this.xoff) * 35.0  ;
  translate(0,0,-101)
 // fill(this.BoxRed,this.BoxBlue,this.BoxGreen,  n - 20 )
  fill(this.red , this.green  ,this.blue , n - 20 )
  //tint(this.red, this.blue, this.green,256)
  box(200)

}

framePlane() {
  push()
  translate(-86,152,250);
  // tint(this.red , this.green  ,this.blue , n  )
  if (bW == 0) {
    tint(242, 0, 0,200)
   // rotateZ( this.z  );
  }
  else {
    //tint(randomTwoNums(50,255),randomTwoNums(50,255),randomTwoNums(50,255),randomTwoNums(50,255))
    tint(0, 150)
  }
  image(this.secondimage, 0, 0, 35, 35);
  pop()

}

colorPlane() {
  push()
  translate(0,152,250);
  if (bW == 0) {
    tint(242, 0, 0,200)
    //rotateZ( this.z  );
  }
  else {
   // tint(randomTwoNums(50,255),randomTwoNums(50,255),randomTwoNums(50,255),randomTwoNums(50,255))
   tint(this.red , this.green  ,this.blue , 150 )
  }
  texture(this.firstimage);
  plane(33);
  //image(this.secondimage, 0, 0, 47, 47);
  pop()


}
}

class Second {
  constructor(x,y,d,z, start, inc, xoff, firstimage) {
    this.x = x;
    this.y = y;
    this.d = d
    this.z = z
    this.start = start;
    this.inc = inc;
    this.xoff = xoff
    this.firstimage = firstimage
    this.n = randomTwoNums(30,150);
    this.spherelayer = createGraphics(this.n,this.n,);
    this.spherelayer.background(0)
    this.perelin = randomTwoDecc(-0.01,0.01)
    
  }

moveSphere() {
  if (this.z > 95 || this.z < -95 ) {
    this.d = this.d * -1
   }
   this.z = this.z + this.d
    translate( 0,0,this.z  );
    // rotateX(this.n  * frameCount * 0.01)
     rotateY(this.n * frameCount * 0.01)
    // rotateZ(this.n * frameCount * 0.01)

}

show() {
  this.xoff = this.xoff + this.perelin
      //let n = noise(this.xoff) * this.n * sin(this.xoff);
      let f = noise(this.xoff) * 30
      let n = f + sin(this.xoff) * this.n

      if (bW == 0) {
        this.spherelayer.background(0,100)
        this.spherelayer.stroke(242, 0, 0,200)
      }
      else {
        this.spherelayer.background(0,100)
        this.spherelayer.stroke(255)
      }
  this.spherelayer.noFill(0);
  this.spherelayer.beginShape();
  let per = this.start;
  for (this.x = 0; this.x < this.n; this.x++) {
    //this.spherelayer.stroke(randomOneNum(255),randomOneNum(255),randomOneNum(255),randomOneNum(255));
    this.y = noise(per) * this.n;
    this.spherelayer.vertex(this.x,this.y);
    per += this.inc ;
  }
  this.spherelayer.endShape();
  this.start += this.inc
  texture(this.spherelayer);
  // /stroke(randomOneNum(255),randomOneNum(255),randomOneNum(255),randomOneNum(255), 100);
//   tint(0,200);
//  push();
//  rotateX(n  * frameCount * 0.01);
//  torus(n + 10, 5);
// pop();
// push();
//  rotateY(n  * frameCount * 0.01);
//  torus(n + 25, 5);
// pop();
// push();
//  rotateZ(n  * frameCount * 0.01);
//  torus(n + 40, 5);
// pop();
// stroke(randomOneNum(255),randomOneNum(255),randomOneNum(255),randomOneNum(255), 10);
//  rotateX(this.n  * frameCount * 0.1)
//     rotateY(this.n * frameCount * 0.1)
//     rotateZ(this.n * frameCount * 0.1)

sphere(this.n / 3.5);
//torus(n - 5, 5)
  //cylinder(n, n);
  //plane(n)
}

}

class Third {
constructor (x, y, start, inc,bW ) {
  this.x = x;
  this.y = y;
  this.start = start;
  this.inc = inc;
  this.bW = bW;
  this.planeLayer = createGraphics(35,35);
  //this.planeLayer.background(0)

  }
showPerlinPlane() {
translate(0,0,250)
this.planeLayer.background(this.bW)
  this.planeLayer.noFill(0);
  //this.spherelayer.noStroke();
  this.planeLayer.beginShape();
  let per = this.start;
  for (this.x = 0; this.x < 35; this.x++) {
    this.planeLayer.stroke(randomTwoNums(50,255),randomTwoNums(50,255),randomTwoNums(50,255),randomTwoNums(50,255));
    this.y = noise(per) * 35;
    this.planeLayer.vertex(this.x,this.y);
    per += this.inc ;
  }
  this.planeLayer.endShape();
  this.start += this.inc

  texture(this.planeLayer);
  noStroke();
  translate(86,152,0)
  //tint(255,55,);
  plane(35)


}

}

class Forth {
  constructor(firstNum,secondNum,thirdNum,forthNum,fifthNum,sixthNum, xoff,n,colorRangePerelin,helvFont,firstLetter,secondLetter,thirdLetter,red,green,blue,bW) {
    this.firstNum =  firstNum
    this.secondNum = secondNum
    this.thirdNum = thirdNum
    this.forthNum = forthNum
    this.fifthNum = fifthNum 
    this.sixthNum = sixthNum



    this.xoff = xoff
    this.n = n
    this.colorRangePerelin = colorRangePerelin
    this.helvFont = helvFont

    this.firstLetter = firstLetter;
    this.secondLetter = secondLetter;
    this.thirdLetter = thirdLetter

    this.red = red;
    this.green = green;
    this.blue = blue;

    this.bW = bW

    // this.redNum = Math.round(fxrand()   ) * randomTwoNums(110,255);
    // this.greenNum = Math.round(fxrand() + 0.1  ) * randomTwoNums(110,255);
    // this.blueNum = Math.round(fxrand() + 0.2  ) * randomTwoNums(110,255);

    textFont(this.helvFont)
    textSize(35);
    textAlign(CENTER, CENTER);
  

  }

textNumbers() {

  this.xoff = this.xoff + this.colorRangePerelin
      let n = noise(this.xoff) * this.n 

  translate(-10,-158,250);
  //fill(242, 0, 0,200);
  if (bW == 0) {
    //fill(this.redNum,this.greenNum,this.blueNum , n + 30);,
    fill(242, 0, 0,200);
  }
  else {
   fill(0)
  }
  text(this.firstLetter + this.secondLetter + this.thirdLetter, -65, 0,);
  text('-',-27, 0,);
  text('-',49, 0,);

  //fill(this.redNum,this.greenNum,this.blueNum , n + 30);
  fill(this.red , this.green  ,this.blue, n + 30) 
  text(this.firstNum + this.secondNum + this.thirdNum, 11, 0,);
  translate(86,0,0)
  text(this.forthNum + this.fifthNum + this.sixthNum, 1, 0,)

//fill each number
  // fill(this.redNum,this.greenNum,this.blueNum , n + 10)
  // text(this.firstNum, -4, 0,)
  // fill(this.redNum,this.greenNum,this.blueNum , n + 10)
  // text(this.secondNum, 11, 0,)
  // fill(this.redNum,this.greenNum,this.blueNum , n + 10)
  // text(this.thirdNum, 26, 0,)
  // fill(this.redNum,this.greenNum,this.blueNum , n + 10)
  // translate(86,0,0)
  // text(this.forthNum, -14, 0,)
  // fill(this.redNum,this.greenNum,this.blueNum , n + 10)
  // text(this.fifthNum, 1, 0,)
  // fill(this.redNum,this.greenNum,this.blueNum , n + 10)
  // text(this.sixthNum, 16, 0,)
  // fill(this.redNum,this.greenNum,this.blueNum , n + 10)

  }

  setFeatures() {
    let cubeName = '';
    let blackWhite = '';
    cubeName = this.firstLetter + this.secondLetter + this.thirdLetter + '-' + this.firstNum + this.secondNum + this.thirdNum + '-' + this.forthNum + this.fifthNum + this.sixthNum
if (this.bW == 255) {
  blackWhite = 'WHITE'
} else {
  blackWhite = 'BLACK'
}
  return window.$fxhashFeatures = {
      "cubename":  cubeName,
      "version" : blackWhite
    
  }
  
  }


}

class Fifth {
  constructor (xoff,n, colorRangePerelin, fifthimage, red,green,blue) {
    this.xoff = xoff
    this.fifthimage = fifthimage;
    this.n = n
    this.colorRangePerelin = colorRangePerelin
    this.red = red;
    this.green = green;
    this.blue = blue;
    }
  showPlane() {
    this.xoff = this.xoff + this.colorRangePerelin
      let n = noise(this.xoff) * this.n 
  translate(0,0,250)
  noStroke();
  if (bW == 0) {
    tint(this.red, this.green,this.blue,255)
    
  }
  else {
   tint(0)
  }
  textureMode(NORMAL);
  texture(this.fifthimage)
  plane(400,400)
  
  
  }
  
  }

 1

// function mousePressed() {
//   noLoop();
// }
// function mouseReleased() {
//   loop();
// }
function windowResized() {
  s = (windowWidth, windowHeight);
  resizeCanvas(s, s,);
}