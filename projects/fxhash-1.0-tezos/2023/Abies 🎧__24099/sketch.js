
let axiom;
let rule1;
let rule2;
let word;
let treeSize;
let leafSize;
let once;
let lvl;
let randomFruit;

let song;
let amp;
let j;
let jk;
let o;
let p;
let k;
let l;
let m;
let v;
let y;
let n;
let mp;
let cs;
let cs2;
let cs3;
let tt;
let tt2;
let tt3;
let jjk;


var quantity = 700;
var xPosition = [];
var yPosition = [];
var flakeSize = [];
var direction = [];
var minFlakeSize = 0.2;
var maxFlakeSize = 1.5;
let snowColor = (k,l,m,140);





function setup() {
  song = loadSound('4emetree.mp3');
  pixelDensity(1);
  
  randomSeed(int(fxrand()*987654321))
  window.innerWidth = window.innerHeight;
  createCanvas(window.innerWidth-10, window.innerHeight-10);
 
 
 

  noStroke();
  
  for(var i = 0; i < quantity; i++) {
    flakeSize[i] = round(random(minFlakeSize, maxFlakeSize));
    xPosition[i] = random(0, width);
    yPosition[i] = random(0, height);
    direction[i] = round(random(0, 1));
  }
  
  
  


  jk = (random(10,40));
  o = (random(10,40));
  p = (random(10,40));
  j = random(width/3, width/1.6);
  jj = random(width/3, width/1.6);
  k = (random(120,180));
  l = (random(120,180));
  m = (random(120,180));
  kk = (random(120,180));
  ll = (random(120,180));
  mm = (random(120,180));
  v = random(600, 1200);
  mp = random(600, 1200);
  y = random(2000,9000);
  n = j;
  cs = random(100,600);
  cs2 = random(200,600);
  cs3 = random(300,600);
  tt = random(-200,-150);
  tt2 = random(-150,100);
  tt3 = random(100,200);
  tt4 = random(200,250);
  ts = random(1.2,1.6);
  ts1 = random(1.5,2.6);
  ts2 = random(1.2,2.3);
  ts3 = random(1.2,1.6);
  ts4 = random(1.5,2.7);

  
  let col = color(k, l, m, 80);
  let col2 = color(k+40, l+40, m+40);
  button = createButton('Play music');
  button.size(280,70);
  button.position('center', height/11);
  
  button.style("font-family", "Courier, monospace");
  button.style("font-size", "36px");
  button.style("color", col2);
  
  button.style('background-color', col);






  axiom = 'F';
  rule1 = 'F[+F]F[+F][F[-F]F]';
     
  word = '';
  word1 = 'FF';
  treeSize = windowHeight/2.8;
  leafSize = windowHeight/2.8;
  lvl = 7;
 


  

  word = createWord(axiom,rule1,rule2);
  treeSize = treeSize * 0.5;
  leafSize = leafSize * 0.5;
  word = createWord(word,rule1,rule2);
  treeSize = treeSize * 0.5;
  leafSize = leafSize * 0.5;
  word = createWord(word,rule1,rule2);
  treeSize = treeSize * 0.5;
  leafSize = leafSize * 0.5;
  word = createWord(word,rule1,rule2);
  treeSize = treeSize * 0.5;
  leafSize = leafSize * 0.5;
  
  
  drawTree(word,j,windowHeight,treeSize);

  
  amp = new p5.Amplitude();
}



function draw() {

  /////////////////////Drawing space///////////////
  resetMatrix();

  background(jk, o, p);


  fill(255);
  text(mouseX + "," + mouseY, 20,20);

  



  //frame square
  noFill();
  frameRate(20);
  
 
  


  push();
  background(jk, o, p);
  noStroke();
  fill(snowColor);
  drawSnow();

pop();


  





//Mountain curve
strokeWeight(0.8);
stroke(k+30,l+30,m+30,250);
rect(40, 40, width-80, height-80);
rect(45, 45, width-90, height-90);
rect(35, 35, width-70, height-70);

//Curves
stroke(k-20, l-20, m+20) ;
strokeWeight(0.2); 
if (frameCount < width-width/3){
for (let i = 0; i < 120; i++) {
  curve(-v + frameCount, mp-5000, cs + frameCount, 100, 1000 + frameCount, windowHeight, v + frameCount, 0);
  curve(-mp+1000 + frameCount, v-6000, cs2 + frameCount, 150, 500 + frameCount, windowHeight, 100 + frameCount, 0);
  curve(-v + frameCount, v-8000, cs3 + frameCount, 50, 400 + frameCount, windowHeight, mp-100 + frameCount, 0);
  curve(mp + frameCount, v-7000, cs + frameCount, 0, 200 + frameCount, windowHeight, mp-200 + frameCount, 0);
  curve(-v + frameCount, v-8000, cs3 + frameCount, 300, 1300 + frameCount, windowHeight, mp-100 + frameCount, 0);
  
  translate(1, 2);
  rotate(PI / 280.0);
  
}
} else {
frameCount = 10;
}



stroke(k+40, l+40, m+40,260);
  drawTree(word,j,windowHeight,treeSize/ts);
  drawTree(word,jj+tt,windowHeight,treeSize/ts1);
  drawTree(word,j+tt2,windowHeight,treeSize/ts2);
  drawTree(word,jj+tt3,windowHeight,treeSize/ts3);
  drawTree(word,j+tt4,windowHeight,treeSize/ts4);
  
  
 
  
  

  

  ////////////////////////////////////////////////


  if(amp.getLevel()*10 >= 2.7){
    once = true;
    lvl = lvl + 1;

  }

  if(once)
  {
    once = false;
    stroke(k, l, m) ;
    

    axiom = word;
    word = createWord(axiom,rule1);
    treeSize = treeSize * 0.5;
   leafSize = leafSize * 0.5;
    

    if(lvl == 8){
      lvl = 3;
      word = 'F';
      treeSize = windowHeight/2.8;
      leafSize = windowHeight/2.8;

    }
  }




}

function createWord(axiom,rule1){

  let word = '';

  for (let i= 0; i<axiom.length; ++i){

    if ( axiom[i] == 'F' ){
      word = word + rule1;
    }
   
    else{
      word = word + axiom[i];
    }
  }

  return word;


}


function drawTree(word1,xPos,yPos,len,leafSize){

  resetMatrix();
  translate(xPos,yPos);

  //draw tree
  for (let i= 0; i<word1.length; ++i){

    if(word1[i] === 'F'){
      
      strokeWeight(0.22);
      line(0,0,0,-len);
      translate(0,-len);
    }
    else if(word1[i] === '['){
      push();
    }
    else if(word1[i] === ']'){
      
      
     
      pop();
    }
    else if(word1[i] === '+'){
      rotate(PI/7);
    }
    else if(word1[i] === '-'){
      rotate(-PI/12);
    }
  }

}



push();
noStroke();
function drawSnow() {
	for(var i = 0; i < xPosition.length; i++) {
    
    ellipse(xPosition[i], yPosition[i], flakeSize[i], flakeSize[i]);
    
    if(direction[i] == 0) {
      xPosition[i] += map(flakeSize[i], minFlakeSize, maxFlakeSize, .1, .5);
    } else {
      xPosition[i] -= map(flakeSize[i], minFlakeSize, maxFlakeSize, .1, .5);
    }
    
    yPosition[i] += flakeSize[i] + direction[i]; 
    
    if(xPosition[i] > width + flakeSize[i] || xPosition[i] < -flakeSize[i] || yPosition[i] > height + flakeSize[i]) {
      xPosition[i] = random(0, width);
      yPosition[i] = -flakeSize[i];
    } 
  }
}
pop();



function mousePressed() {
  once = true;
  lvl = lvl + 1;

  if (song.isPlaying()) {
    song.stop();
  } else {
    
song.loop();
  }
  if (mousePressed){
    button.hide();
  }
 

}


