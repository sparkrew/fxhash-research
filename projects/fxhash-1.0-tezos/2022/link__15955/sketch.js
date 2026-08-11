let minW;

let palettes = [["#1e2328", "#F5A302"],
                ["#2a2e34", "#f5b301"],
                ["#3b3f46", "#fed053"],
                ["#101820", "#fee715"],
                ["#090907", "#fdcd01"],
                ["#090907", "#dea000"]];

let palette;

let seed = fxrand()*100000;

function setup() {
  pixelDensity(5);
  minW = min(windowWidth, windowHeight);
  createCanvas(minW, minW);
  rectMode(CENTER);

  randomSeed(seed);

  shuffle(palettes, true);
  palette = palettes[0];
  shuffle(palette, true);

  noLoop();
}

function windowResized(){
  minW = min(windowWidth, windowHeight);
  resizeCanvas(minW, minW);
  randomSeed(seed);
}

function keyPressed() {
  if(key=="s")
    save("name" + ".png");
}


function draw(){
  randomSeed(seed);

  let back = color(palette[0]);
  let main = color(palette[1]);

  background(back);

  let offsetW, offsetH;
  let nW = Math.floor(random(4, 8));
  let nH = Math.floor(random(4, 8));
  let s;

  if(nW>nH){
    offsetW = width/4;
    s = (width-offsetW*2)/nW;
    offsetH = (height-nH*s)/2;
  }else{
    offsetH = height/4;
    s = (height-offsetH*2)/nH;
    offsetW = (height-nW*s)/2;
  }

  let x=offsetW;
  let y=offsetH;

  // 点
  let rand = Math.floor(random(0, 4));

  y = offsetH;
  for(let ny=0; ny<nH; ny++){
    x = offsetW;
    for(let nx=0; nx<nW; nx++){
      push();
      translate(x+s/2, y+s/2);
      // 丸
      if(random()<0.5){
        // noStroke();
        stroke(main);
        strokeWeight(s/20);
        fill(main);
      }else{
        stroke(main);
        strokeWeight(s/20);
        fill(back);
      }

      switch (rand) {
        case 0:
          rect(0, 0, s*.7);
          break;
        case 1:
          ellipse(0, 0, s*.7);
          break;
        default:
          if(random()<0.5)
            rect(0, 0, s*.7);
          else
            ellipse(0, 0, s*.7);
          break;
      }

      let ew = 0;
      let eh = 0;

      if(random()<0.5)
        ew = (Math.floor(random(0, nW-1)-nx)+1)*s;
      else
        eh = (Math.floor(random(0, nH-1)-ny)+1)*s;
      if(random()<0.75)
        line(0, 0, ew, eh);

      pop();
      x += s;
    }
    y += s;
  }
}
