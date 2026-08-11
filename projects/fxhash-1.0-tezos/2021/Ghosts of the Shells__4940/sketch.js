var Objects = [];
var NB = 2000;

var NB_FRAMES = 100;

var frame_count = 0;

var r = 255;
var g = 255;
var b = 255;

function activation(t) {
    return ((1-cos(2*PI*t))/2)**1;
}

function setup() {
  seed = int(fxrand() * 1000000);
  noiseSeed(seed);
  randomSeed(seed);

  createCanvas(windowWidth, windowHeight);
  strokeWeight(1);
  noFill();

  background(0);

  for(var i = 0; i < NB; i++) {
    Objects[i] = new object(i);
  }
  noLoop();
}

function object(id) {
    this.id = id;

    this.draw = function() {
      var t = ((frame_count)%NB_FRAMES)/NB_FRAMES;

      var x0 = lerp(0, windowWidth, 0.5);

      theta = PI/2;

      var xx = x0;
      var yy = 20;
      var Nt = 75;
      var step = windowHeight/Nt;
      var turn = lerp(0.3,0.7,activation((0+0*t)%1));

      stroke(r, g, b, 50);
      strokeWeight(1);
      xs1 = [xx];
      ys = [yy];
      for(var i=0; i<=Nt; i++){
        theta += turn*sin(100*noise(1000)+2*PI*(15*noise(0.2*this.id/NB,0.02*i)+t));
        xx += step*cos(theta);
        var xx2 = lerp(xx,x0,(i/Nt)*(i/Nt)*(i/Nt));
        xs1[i+1] = xx2;
        yy += step*sin(theta);
        var yy2 = lerp(yy,lerp(20, windowHeight-20,i/Nt), max((i/Nt),1-sqrt(i/Nt)));
        ys[i+1] = yy2;
      }
      beginShape();
      for(var i=0; i<=Nt+1; i++){
        vertex(xs1[i], ys[i]);
      }
      endShape();
    }
}

function draw() {
  background(int(fxrand()*50), int(fxrand()*50), int(fxrand()*50));
  var t = (frame_count % NB_FRAMES) / NB_FRAMES;

  for(var i=0; i < NB; i++) {
    if (i % 5 == 0) {
      r += fxrand()*10 - 5;
      g += fxrand()*10 - 5;
      b += fxrand()*10 - 5;
      r = constrain(r, 0, 255);
      g = constrain(g, 0, 255);
      b = constrain(b, 0, 255);
    }
    Objects[i].draw();
  }

  noStroke();
  frame_count++;
  fxpreview();
}
