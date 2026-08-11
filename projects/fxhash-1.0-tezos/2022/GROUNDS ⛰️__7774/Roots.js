function createRoots() {
  for (let i=0; i<numRoots; i++) {
    //x value start slightly outside the right of canvas, z value how close to viewer
    var loc = createVector((i/numRoots) * wWidth*1.02  , heightStep + noise(((i/numRoots))*noiseScale*1000, 0, noiseStep) * displaceStep );//-_offsetY);
    var angle = 0; //any value to initialize
    var dir = createVector(cos(angle), sin(angle));
    var speed = 1.5;
    // var speed = random(5,map(mouseX,0,width,5,20));   // faster
    roots[i]= new Root(loc, dir, speed, i);
    // print(noise(i));
  }
  rootsCreated = 1;
}

function drawRoots() {

  for (let i=0; i<roots.length; i++) {
    roots[i].run();
  }
}

function clearRoots() {

  for (let i=0; i<roots.length; i++) {
    roots[i].destroy();
  }
}


class Root {
  constructor(_loc, _dir, _speed, _id) {
    this.loc = _loc;
    this.dir = _dir;
    this.speed = _speed;
    this.id = _id;
    this.life = 0;
    // var col;
  }
  run() {
    this.move();
    this.checkRoot();
    this.update();
  }
  move() {

    this.dir.x = 0;
    this.dir.y = 1* masterScaleY;

    var vel = this.dir.copy();
    var d =(this.life/rootsLength);  //direction change
    vel.mult(this.speed * d ); //vel = vel * (speed*d)
    vel.add(0, 1* masterScaleY);
    this.loc.add(vel); //loc = loc + vel
    this.life = this.life - noise(this.id*0.1)*3;
  }
  checkRoot() {
    //float distance = dist(width/2, height/2, loc.x, loc.y);
    //if (distance>150) {
    if ( this.loc.y > wHeight || this.life < 0) {
      let r = noise(this.id+step)*3-0.4;
      this.loc = createVector((r) * wWidth*1.02  , heightStep + noise(((r))*noiseScale*1000, 0, noiseStep) * displaceStep );
      this.life = rootsLength;
    }
  }
  destroy() {
    //float distance = dist(width/2, height/2, loc.x, loc.y);
    //if (distance>150) {
    if ( 0 < 1) {
      let r = noise(this.id+step)*3-0.4;
      this.loc = createVector((r) * wWidth*1.02  , heightStep + noise(((r))*noiseScale*1000, 0, noiseStep) * displaceStep );
      this.life = 0;
    }
  }
  update() {
    under.noStroke();
    let s =  3 * (1-this.life/rootsLength);
    under.fill(0, 50);
    under.ellipse(this.loc.x + s* masterScaleX, this.loc.y+s* masterScaleX, (s + 2) * masterScaleX);

    let co = colors[this.id % samples];
    let hu = hue(co);
    let sa = saturation(co);
    let br = brightness(co);
    
    sa = sa - 100 * (this.life/rootsLength);
    br = br + 100 * (this.life/rootsLength);
    
    under.fill(color(hu,sa,br));
    //under.fill(colors[this.id % samples]);



    //if (noise(this.id) > 0.2)
    //under.fill(222);
    //else
    //under.fill(modeColor);
    //   under.fill(colors[int(samples/2)]);
    //  under.fill(colors[0]);
    under.ellipse(this.loc.x, this.loc.y+masterScaleX * 6, (s + 2) * masterScaleX);
  }
}
