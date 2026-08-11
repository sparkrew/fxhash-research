
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
let i;
let o;
let p;
let k;
let l;
let m;
let v;
let y;
let n;
let mp;


function setup() {
  song = loadSound('Secondtree_2.mp3');
pixelDensity(1.2);
  randomSeed(int(fxrand()*987654321))
  windowWidth = windowHeight;
  createCanvas(windowWidth-10, windowHeight-10);


  
  button = createButton('Click to Play 🎧');
  button.size(300,48);
  button.position(j, height/11);
  button.style('color', i, o, p);
  button.style("font-family", "Courier, monospace");
  button.style("font-size", "27px");
  

  i = (random(20,40));
  o = (random(15,60));
  p = (random(20,120));
  j = random(width/1.7, width/1.2);
  k = (random(120,250));
  l = (random(120,250));
  m = (random(120,250));
  v = random(6000, 12000);
  mp = random(6000, 12000);
  y = random(2000,9000);
  n = j;
 

  axiom = 'X';
  rule1 = 'FF';
  rule2 = 'F+[[X]-X]-F[-FX]+X';      
  word = '';
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
  word = createWord(word,rule1,rule2);
  treeSize = treeSize * 0.5;
  leafSize = leafSize * 0.5;
  drawTree(word,j,windowHeight,treeSize);

  
  amp = new p5.Amplitude();
}



function draw() {

  /////////////////////Drawing space///////////////
  resetMatrix();

  background(i, o, p);

  //frame square
  noFill();
  frameRate(15);
  stroke(189, 202, 255) ;
  strokeWeight(1.8);
  rect(40, 40, width-80, height-80);
  

  


  //Curves
  stroke(217, 224, 255) ;
  strokeWeight(0.18);
if (frameCount < 1100){
  for (let i = 0; i < 60; i++) {
    curve(-v + frameCount, mp-5000, -100 + frameCount, 0, 0 + frameCount, windowHeight, v + frameCount, 0);
    curve(-mp+1000 + frameCount, v-6000, 100 + frameCount, 0, 0 + frameCount, windowHeight, 100 + frameCount, 0);
    curve(-v + frameCount, v-8000, 200 + frameCount, 0, 0 + frameCount, windowHeight, mp-100 + frameCount, 0);
   
    
    translate(0, 5);
    rotate(PI / 100.0);
    
  }
} else {
  frameCount = 10;
}


  drawTree(word,j,windowHeight,treeSize,leafSize);

  

  ////////////////////////////////////////////////


  if(amp.getLevel()*10 >= 2.9){
    once = true;
    lvl = lvl + 1;

  }

  if(once)
  {
    once = false;
    stroke(k, l, m) ;
    

    axiom = word;
    word = createWord(axiom,rule1,rule2);
    treeSize = treeSize * 0.5;
   leafSize = leafSize * 0.5;
    

    if(lvl == 8){
      lvl = 2;
      word = 'X';
      treeSize = windowHeight/2.8;
      leafSize = windowHeight/2.8;

    }
  }

}


function createWord(axiom,rule1,rule2){

  let word = '';

  for (let i= 0; i<axiom.length; ++i){

    if ( axiom[i] == 'F' ){
      word = word + rule1;
    }
    else if ( axiom[i] == 'X' ){
      word = word + rule2;
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
      
      strokeWeight(0.5);
      line(0,0,0,-len);
      translate(0,-len);
    }
    else if(word1[i] === '['){
      push();
    }
    else if(word1[i] === ']'){
      fill(k, l, m, 220);
      stroke(0, 51, 14);
      if(lvl > 5)
      {
        ellipse(0, 3, 5, 10);
        ellipse(0, 10, 4, 9);
        ellipse(0, 18, 4, 9);
        ellipse(2, 10, 4, 9);
      }
      else{
        ellipse(0, 3, 7, 24);
        ellipse(2,7,3,24);
        ellipse(0, 10, 4, 9);
      }
      pop();
    }
    else if(word1[i] === '+'){
      rotate(PI/10);
    }
    else if(word1[i] === '-'){
      rotate(-PI/7);
    }
  }

}


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


