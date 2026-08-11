let gen = [];

let back_gen = [];
let back_gen2 = [];
let rand, rand1, rand2, rand3, rand4;

let pg, pg2;

let w, h, scaling;

let condition;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  background(220);
  pg2 = createGraphics(width, height);
  
  rand = int(fxrand() * 100);
  rand1 = int(fxrand() * 100);
  rand2 = int(fxrand() * 100);
  rand3 = int(fxrand() * 100);
  rand4 = int(fxrand() * 100);
  
  noiseSeed(rand);
  randomSeed(rand);
  
  w = width;
  h = height;
  scaling = 1;
  
  condition = 0;
  
  
  if(rand4 > 50){
  for(let i = 0; i < width; i += 5){
    pg2.stroke(0);
    pg2.line(i, 0, i, height);
  }
  }
  else{
    for(let i = 0; i < height; i += 5){
    pg2.stroke(0);
    pg2.line(0, i, width, i);
  }
  }
  
  pg2.fill(150);
  
  if(rand > 80)
  pg2.circle(width / 2, height, width);
  
  pg2.fill(0);
  pg2.noStroke();
  pg2.rect(0, 0, width / 4, height);
  pg2.rect((3 * width) / 4, 0, width / 3, height);
  
  
  pg2.fill(255);
  pg2.rect(0, 0, width / 4 - 30, height);
  pg2.rect((3 * width) / 4 + 30, 0, width / 3, height);
  
  pg2.noStroke();
  
  
  gen.push(new tree(0, height / 2, 35, -90));
  // if (random(100) >= 0 && random(100) <= 80) {
  //   gen.push(new tree(0, height / 2, 23, -90));
  // } else if (rand1 > 80 && rand1 <= 100) {
  //   gen.push(new tree(-width / 10, height / 2, 35, -90));
  //   gen.push(new tree(width / 10, height / 2, 35, -90));
  // }
  
  back_gen.push(new tree_back(-width / 4, height / 2 + random(-height / 2, height / 2) , 15, -90));
  
  
  if(rand1 > 50)
  back_gen.push(new tree_back(-width / 4, height * 3 / 4 + random(-height / 2, height / 2), 15, -90));
  
  
  if(rand2 > 50)
  back_gen2.push(new tree_back2(width / 4, height / 2 + random(-height / 2, height / 2), 15, -90));
  
  
  if(rand3 > 50)
  back_gen2.push(new tree_back2(width / 4, height * 3 / 4 + random(-height / 2, height / 2), 15, -90));
  
}

function draw() {
  
  for (let i = 0; i < back_gen.length; i++) {
    back_gen[i].update();
    print("back_gen.length" + back_gen.length);

  }
  for (let i = 0; i < back_gen.length; i++) {
    if (back_gen[i].r < 2) {
      back_gen.splice(i, 1);
    }
  }
  
  for (let i = 0; i < back_gen2.length; i++) {
    back_gen2[i].update();
    print("back_gen.length" + back_gen2.length);

  }
  for (let i = 0; i < back_gen2.length; i++) {
    if (back_gen2[i].r < 2) {
      back_gen2.splice(i, 1);
    }
  }
  
  if(gen.length != 0){
  print(gen.length);
  }

  for (let i = 0; i < gen.length; i++) {
    gen[i].update();
  }
  for (let i = 0; i < gen.length; i++) {
    if (gen[i].r < 4) {
      gen.splice(i, 1);
    }
  }
  
  if (gen.length == 0) {
    //pot(x, y, r, 0, 60, 120);
    condition = 1;
  }
  if (condition == 1) {
    image(pg2, -width / 2, -height / 2);
    //image(pg, -width / 2, -height / 2);
    condition = 0;
  }
}

class tree {
  constructor(_x, _y, _r, _theta) {
    this.x = _x;
    this.y = _y;
    this.r = _r;
    this.theta = _theta;
  }

  update() {
    fill(0);
    noStroke();
    fill(map(this.r, 35, 4, 0, 255));
    circle(this.x, this.y, this.r);
    
    pg2.fill(map(this.r, 35, 4, 0, 255));
    pg2.noStroke();
    pg2.circle(width / 2 + this.x, height / 2 + this.y, this.r);

    this.x = this.x + this.r * 0.2 * cos(radians(this.theta));
    this.y = this.y + this.r * 0.2 * sin(radians(this.theta));
    this.r *= 0.99;
    this.theta = this.theta + random(-3, 3);

    if (this.r > 15) {
      //pot(x, y, r, 0, 60, 120);
    }
    if (this.r < 18) {
      if (random(30) > 28.6) {
        let newtheta;
        if (random(2) > 1) {
          newtheta = this.theta + random(30, 60);
        } else {
          newtheta = this.theta - random(30, 60);
        }
        gen.push(new tree(this.x, this.y, this.r, newtheta));
      }
    }
  }
}

class tree_back {
  constructor(_x, _y, _r, _theta) {
    this.x = _x;
    this.y = _y;
    this.r = _r;
    this.theta = _theta;
  }

  update() {
    // fill(0);
    // noStroke();
    // fill(map(this.r, 35, 4, 0, 255));
    // circle(this.x, this.y, this.r);
    
    pg2.fill(0);
    pg2.noStroke();
    pg2.circle(width / 2 + this.x - 20, this.y, this.r);

    this.x = this.x + this.r * 0.2 * cos(radians(this.theta));
    this.y = this.y + this.r * 0.2 * sin(radians(this.theta));
    this.r *= 0.99;
    this.theta = this.theta + random(0, 1);


    if (this.r < 6) {
      if (random(30) > 29) {
        let newtheta;
        if (random(2) > 1) {
          newtheta = this.theta + random(30, 60);
        } else {
          newtheta = this.theta + random(30, 60);
        }
        back_gen.push(new tree_back(this.x, this.y, this.r, newtheta));
      }
    }
  }
}

class tree_back2 {
  constructor(_x, _y, _r, _theta) {
    this.x = _x;
    this.y = _y;
    this.r = _r;
    this.theta = _theta;
  }

  update() {
    // fill(0);
    // noStroke();
    // fill(map(this.r, 35, 4, 0, 255));
    // circle(this.x, this.y, this.r);
    
    pg2.fill(0);
    pg2.noStroke();
    pg2.circle(width / 2 + this.x + 20, this.y, this.r);

    this.x = this.x + this.r * 0.2 * cos(radians(this.theta));
    this.y = this.y + this.r * 0.2 * sin(radians(this.theta));
    this.r *= 0.99;
    this.theta = this.theta + random(-1, 0);


    if (this.r < 6) {
      if (random(30) > 29) {
        let newtheta;
        if (random(2) > 1) {
          newtheta = this.theta - random(30, 60);
        } else {
          newtheta = this.theta - random(30, 60);
        }
        back_gen2.push(new tree_back2(this.x, this.y, this.r, newtheta));
      }
    }
  }
}