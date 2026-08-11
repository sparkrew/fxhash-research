let bg_palette = ["#EDE6DA"];
let palette = ["#3c815e","#e8c943","#376da5","#d24234", "#e09142", "#00000"];

let minW;
let seed = fxrand()*100000;

function setup() {
  randomSeed(seed);

  minW = min(windowWidth, windowHeight);
  createCanvas(minW, minW*2/3);

  rectMode(CENTER);
  shuffle(palette, true);

  noLoop();
}

function windowResized(){
  randomSeed(seed);
  minW = min(windowWidth, windowHeight);
  resizeCanvas(minW, minW*2/3);
}

function draw(){
  randomSeed(seed);
  background(bg_palette[0]);

  let offset = width/5;
  let nX = Math.floor(random(3, 8));
  let nY;

  let s = (width-offset*2)/nX;
  let tmpS = s;

  while(1){
    nY = Math.floor(random(1, 8));
		if(nY*tmpS <= height*3/4)
			break;
  }

  strokeWeight(tmpS/50);

  let round = [s/2, s/2, s/2, 0];

  let x = offset;
  let y = (height-nY*s)/2;

  let fpX = Math.floor(random(0, nX));
  let fpY = Math.floor(random(0, nY));

  for(let ny=0; ny<nY; ny++){
    x = offset;
    for(let nx=0; nx<nX; nx++){
      let k = Math.floor(random(1, 5));
      noFill();
      shuffle(round, true);
      if(nx==fpX && ny==fpY)
        fill(palette[0]);
      for(let i=0; i<k; i++){
        stroke(palette[0]);
        rect(x+tmpS/2, y+tmpS/2, s, s, round[0], round[1], round[2], round[3]);
        s -= tmpS/k;
      }
      s = tmpS;
      x += s;
    }
    y += s;
  }
}
