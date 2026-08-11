
var a = Math.ceil(fxrand()*50+200);
var b = Math.ceil(fxrand()*100+150);
var c = Math.ceil(fxrand()*150+100);
 

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(c, a, a);
  for (let y = 400; y > 0; y -= 5) {
    for (let x = 400; x > 0; x -= 5) {
      if (x < 400) {
        noFill();
        stroke(random(0,a), random(0,a), random(0,a));
        rect(y, x, x, x);
      }
    }
  }
  for (let x = 600; x > 0; x -= 10) {
    noFill();
    stroke(random(0, b), random(0, a), random(0, a));
    ellipse(width / 2, height / 2, x, x);
  }
  noFill();
  stroke(a,b,c);
  textSize(100);
textAlign(CENTER);
text('FXHASH', width/2, height/2+34);
}
