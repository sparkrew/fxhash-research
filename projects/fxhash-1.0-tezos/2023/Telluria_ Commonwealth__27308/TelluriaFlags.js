let compo, pop, name, seed;
let acc = 0;
let colors = ["#D4A463", "#794A1F", "#eee", "#90A944", "#236204", "#1098A6", "rgb(200,70,70)", "#aaa"];
let places = ["village", "township", "community", "Free society", "canton", "county", "province", "hamlet", "collective"];
let accents = ["none", "circle", "triangle", "bowl"];
/*let rules = {
  "start": "$comp.ucf | $comp.ucf $comp.ucf | $comp.ucf $part $comp.ucf | $syl.ucf$syl.nr()$syl.nr()$part",
  "comp": "$syl$part | $syl$syl.nr()$syl | $syl$syl.nr()\'$part",
  "syl": "ria | lo | tel | lob | pul | tu | lia | kel | bu | il | no | nu | plu | ur | mo | mu",
  "part": "ria | lo | tel | pul | lia | kel | il | no | ur | li",
}*/
let rules2 = {
  "start": "$comp.ucf | $comp.ucf $comp.ucf | $comp.ucf $end $comp.ucf | $syl.ucf$syl.nr()$syl.nr()$end",
  "comp": "$syl$end | $syl$syl.nr()$end | $syl$syl.nr()\'$end",
  "syl": "$c$v$c | $c$v | $v$c | $v",
  "c": "l | p | b | r | t | k | m | n | h | d | f",
  "v": "a | i | o | u",
  "end": "$c$v$d | $c$vd | $v$d | $vd",
  "d": "l | r | m | n | h",
  "vd": "a | i | o",
}

function preload() {
  compo = int($fx.rand() * 10);
  pop = int($fx.rand() * places.length);
  if($fx.rand() < 0.33) {
    acc = int($fx.rand() * accents.length-1) + 1;
  }
  //console.log(acc);
  if((compo == 7 || compo == 8 || compo == 6 || compo == 9)  && acc == 2) {acc = 1;}
  if(compo == 1 && acc == 1) {acc = 2;}
  if(compo == 0 && acc == 3) {acc = 2;}
  
  let gleam = false;
  if($fx.rand() < 0.1) {
    gleam = true;
    colors = ["#f0f", "#0ff", "#ff0", "#999"];
  }
  //if(compo == 4 && acc == 2) {acc = 3;}
  $fx.features({
    "composition": compo,
    "population": places[pop],
    "accent": accents[acc],
    "gleaming": gleam
  })
  console.log(window.$fx.getFeatures());
}

function setup() {
  createCanvas(100,100);
  windowResized();
  noLoop();
  noStroke();
  shuffleArray(colors);
  background("#fff");
  seed = int($fx.rand()*123456789);
}


function draw() {
  RiTa.randomSeed(seed);
  fill(colors[0]);
  rect(w(0),fh(0), w(), fh());
  
  //compo = 11;
  switch(compo) {
    case 0: // stripes
      fill(colors[1]);
      rect(0,0, w(), fh(0.33));
      fill(colors[2]);
      rect(0,fh(0.67), w(), fh(0.33));
    break;
    case 1: // bars
      fill(colors[1]);
      rect(0,0, w(0.33), fh());
      fill(colors[2]);
      rect(w(0.67),0, w(0.33), fh());
    break;
    case 2: // quads
      fill(colors[1]);
      rect(0,0, w(0.5), fh(0.5));
      rect(w(0.5), fh(0.5), w(0.5), fh(0.5));
    break;
    case 3: // many stripes
      let f = 1/11;
      let i = 0
      for(; i < 1-f; i += 2*f) {
      fill(colors[1]);
      rect(0,fh(i), w(), fh(f));
      fill(colors[2]);
      rect(0,fh(i+f), w(), fh(f));
      }
      fill(colors[1]);
      rect(0,fh(i), w(), fh(f));
    break;
    case 4: // wide stripe
      fill(colors[1]);
      rect(0,0, w(), fh(0.25));
      rect(0,fh(0.75), w(), fh(0.25));
    break;
    case 5: // multi stripe
      fill(colors[1]);
      rect(0,0, w(), fh(0.23));
      rect(0,fh(0.77), w(), fh(0.23));
      fill(colors[2]);
      rect(0,fh(0.23), w(), fh(0.1));
      rect(0,fh(0.67), w(), fh(0.1));
    break;
    case 6: // diamonds
    rectMode(CENTER);
    fill(colors[1]);
    let eve = 0;
    for(let c = 0; c <= 7/7; c += 1/7) {
      if(eve % 2 == 0) {
        rectMode(CENTER);
      } else {
        rectMode(CORNERS);
      }
      eve++;
      for(let r = 0; r <= 4/4; r += 1/4) {
        translate(w(c), fh(r));
        rotate(PI/4);
        rect(0,0, w(0.1), w(0.1));
        rotate(-PI/4);
        translate(-w(c), -fh(r));
      }
    }
    fill("white");
    rectMode(CORNERS);
    rect(0,fh(),w(),h());
    break;
    case 7: // slash
      fill(colors[1]);
      beginShape();
      vertex(0,0);
      vertex(0, fh(1-(0.1*5/3)));
      vertex(w(0.9), 0);
      endShape(CLOSE);
      beginShape();
      vertex(w(),fh());
      vertex(w(), fh(0.1*5/3));
      vertex(w(0.1), fh());
      endShape(CLOSE);
    break;
    case 8: // cross
      fill(colors[1]);
      beginShape();
      vertex(0, fh(1-(0.1*5/3)));
      vertex(0, fh());
      vertex(w(0.1), fh());
      vertex(w(), fh(0.1*5/3));
      vertex(w(), 0);
      vertex(w(0.9), 0);
      endShape(CLOSE);
      beginShape();
      vertex(0,0);
      vertex(0, fh((0.1*5/3)));
      vertex(w(0.9), fh());
      vertex(w(),fh());
      vertex(w(), fh(1-(0.1*5/3)));
      vertex(w(0.1), 0);
      endShape(CLOSE);
    break;
    case 9: // zigzag
    rectMode(CENTER);
    fill(colors[1]);
    for(let c = 0; c <= 7/7; c += 1/7) {
      for(let r = 0; r <= 4/4; r += 1/4) {
        translate(w(c), fh(r));
        rotate(PI/4);
        rect(0,0, w(0.1), w(0.1));
        rotate(-PI/4);
        translate(-w(c), -fh(r));
      }
    }
    fill("white");
    rectMode(CORNERS);
    rect(0,fh(),w(),h());
    break;
    case 10:
      fill(colors[1]);
      let oth = 0;
      for(let c = 0; c <= 7/7; c += 1/7) {
        for(let r = 0; r <= 4/4; r += 1/4) {
          if(oth % 2 == 0) {
                fill(colors[1]);
          } else {
                fill(colors[0]);
          }
          translate(w(c), fh(r));
          rect(0,0, w(0.15), w(0.15)); // 0.1
          translate(-w(c), -fh(r));
          oth++;
        }
      }
      fill("white");
      rect(0,fh(),w(),h());
    break;
    case 11:
      rectMode(CENTER);
      fill(colors[1]);
      for(let c = 0; c <= 7/7; c += 1/7) {
        for(let r = 0; r <= 4/4; r += 1/4) {
          translate(w(c), fh(r));
          rect(0,0, w(0.1), w(0.1)); // 0.1
          translate(-w(c), -fh(r));
        }
      }
      fill("white");
      rectMode(CORNERS);
      rect(0,fh(),w(),h());
    break;
  }

  //acc = 2;
  fill(colors[3]);
  switch(acc) {
    case 1: // circle
    ellipse(w(0.5), fh(0.5), w(0.33), w(0.33));
    break;
    //case 2: // pentagram
    //fill(colors[3]);
    //polygon(w(0.5), fh(0.5), w(0.15), 5);
    //break;
    case 2: // triangle
    beginShape();
    vertex(0,0);
    vertex(0, fh());
    vertex(w(0.33), fh(0.5));
    endShape(CLOSE);
    break;
    case 3: //boat
    crescent(w(0.5),fh(0.3),w(0),fh(0.4),100);
    break;
  }
  
  name = capitalize(places[pop]) + " of " + RiTa.grammar(rules2).expand();
  console.log(name);
  textAlign(CENTER);
  //textSize(h(0.05));
  textFont("Georgia", h(0.05));
  fill("#111");
  text(name, w(0.5), h(0.9));
  
  $fx.preview();
}
