DecisionBlob pinPoint;
DecisionBlob[] pivots;

int soManyWays;
int soManyDecisions;



  //seeder = fxrand();
  //randomSeed(seeder * 999999);
  
  
  //color from = color(int(random(255)),int(random(255)),int(random(255)));
  //color to = color(int(random(255)),int(random(255)),int(random(255)));


void setup() {
  size(2048, 2048);
  seeder = fxrand();
  randomSeed(seeder * 999999);
  color from = color(int(random(255)),int(random(255)),int(random(255)));
  color to = color(int(random(255)),int(random(255)),int(random(255)));  
  makeBG(0,0, width, height, from, to);  
  soManyDecisions = int(random(150,550));
  pinPoint = new DecisionBlob(width/2, height/2);
  pivots = new DecisionBlob[soManyDecisions];
  for (int i=0; i < pivots.length; i++ ) {
    pivots[i] = new DecisionBlob(random(width), random(height) );
   }
}



void draw() {
  pinPoint.gogogo();
  for (int i=0; i < pivots.length; i++ ) {
    pivots[i].gogogo();
  }

    strokeWeight(1);
  if (frameCount > (int(random(75, 300))))
  {
    translate(0, 0);
    int stW = 0;
    if (width <= height) {
      stW = (width/50);
    }
    else {
      stW = (height/50);
    }
    strokeWeight(stW);
    stroke(random(255), random(255), random(255), random(64, 128));
    noFill();
    rect(width/2, height/2, width-stW, height-stW);
    fxpreview();
    noLoop();
    //exit();
}
}

void makeBG(int x, int  y,int  w, int h, color c1, color c2) {
    int hOrv = (int(random(0,4)));
  switch (hOrv) {

    case(0):
    background(int(random(0, 96)));
    break;

    case (1):
    //top to bottom
    for (int i = x; i <= x+h; i++) {
      float inter = map(i, x, x+h, 0, 1);
      color c = lerpColor(c1, c2, inter);
      stroke(c);
      line(y, i, y+w, i);
    }
    break;

    case (2):
    //left to right
    for (int i = y; i <= y+w; i++) {
      float inter = map(i, y, y+w, 0, 1);
      color c = lerpColor(c1, c2, inter);
      stroke(c);
      line( i, x, i, x+h);
    }
    break;

    case (3):

    //top left
    for (int i = x; i <= x+(w/2); i++) {
      float inter = map(i, x, x+(w/2), 0, 1);
      color c = lerpColor(c1, c2, inter);
      stroke(c);
      line(i, x/2, i, h/2);
    }

    //bottom left
    for (int i = (h/2); i <= h; i++) {
      float inter = map(i, h/2, h, 0, 1);
      color c = lerpColor(c2, c1, inter);
      stroke(c);
      line( x, i, x+(w/2), i);
    }

    //top right
    for (int i = x; i <= h/2; i++) {
      float inter = map(i, y, h/2, 0, 1);
      color c = lerpColor(c1, c2, inter);
      stroke(c);
      line(w/2, i, w, i);
    }

    //bottom right
    for (int i = (w/2); i <= w; i++) {
      float inter = map(i, w/2, w, 0, 1);
      color c = lerpColor(c2, c1, inter);
      stroke(c);
      line( i, h/2, x+i, h);
    }
    break;
  }
}




class DecisionBlob {

  float x, y;        // position
  float tx, ty;      // target in x and y
  float step, inc;
  float radius;
  float mfx;
  float mfy;
  int direction;


  // create a moving ball at the supplied position (x_, y_)
  DecisionBlob(float x_, float y_) {
    x = x_;
    y = y_;
    reset();
  }

  // gogogopivots
  // calls move() followed by display()
  void gogogo() {
    this.move();    // this refers to the current object
    this.display();
  }

  // move
  // move the ball in the desired direction
  void move() {

    step -= inc;

    if (step < 0) {
      x = tx;
      y = ty;
      reset();
    }

      x = lerp(tx, x, sin(step));
      y = lerp(ty, y, (step));

    withInner();
  }

  // withInner
  // checks that the ball is within the display window.
  // If it reaches the edge, move in the opposite direction
  void withInner() {
    if (x <= 0 || x >= width || y <= 0 || y >= height) {
      x = x--;
      y = y--;
      reset();
    }
  }

  void reset() {
    step = 1;
    inc = random(0.01);
    radius = random(100, 300);

    soManyWays = int(random(36));

    float degreesToTurn = TWO_PI/soManyWays;
    direction = (int) random(soManyWays);
    tx =  x + (int(radius*cos(direction * degreesToTurn)));
    ty = y + (int(radius*sin(direction * degreesToTurn)));
  }

  void display() {
    mfx = int(random(1, width));
    mfy = int(random(1, height));
    stroke(int(random(255)));
    rectMode(CENTER);

    fill (map(mfx+tx, 0, mfy+ty, 0, 255), map(mfy+ty, 0, mfx+tx, 0, 255), random(0, 255), random(0, 255));
    rect(tx, ty, random(5, 20), random(5, 25));
    noStroke();
    fill(map(mfx+tx, 0, mfy+ty, 0, 255), map(mfy+ty, 0, mfx+tx, 0, 255), random(0, 255), random(0, 255));
    ellipse(x, y, random(2, 10), random(2, 10));

    if  (this.tx == pivots.length-100) {
      for (int j=0; j < pivots.length+1; j++ ) {
        fill(map(mfx+tx, 0, mfy+ty, 0, pivots.length - j), map(mfy+ty, 0, mfx+tx, 0, pivots.length - j), random(0, 255), -j);
        ellipse(tx, ty, j, j);
      }
    }
  }
}
