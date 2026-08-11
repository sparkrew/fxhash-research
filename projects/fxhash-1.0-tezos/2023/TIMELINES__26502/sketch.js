// Flocking
// Daniel Shiffman
// https://thecodingtrain.com/CodingChallenges/124-flocking-boids.html
// https://youtu.be/mhjuuHl6qHM
const rand_seed = (size) =>
  [...Array(size)]
    .map(() => Math.floor(Math.random() * 16).toString(16))
    .join("");
var tempHash = "0x" + rand_seed(64);


tokenData = {
  hash: tempHash,
  tokenId: "123000456",
};

let hash = tokenData.hash;
let seed = parseInt(tokenData.hash.slice(0, 16), 16);

// class Random {
//   constructor() {
//     this.useA = false;
//     let sfc32 = function (uint128Hex) {
//       let a = parseInt(uint128Hex.substr(0, 8, 16));
//       let b = parseInt(uint128Hex.substr(8, 8, 16));
//       let c = parseInt(uint128Hex.substr(16, 8, 16));
//       let d = parseInt(uint128Hex.substr(24, 8, 16));
//       return function () {
//         a |= 0; b |= 0; c |= 0; d |= 0;
//         let t = (((a + b) | 0) + d) | 0;
//         d = (d + 1) | 0;
//         a = b ^ (b >>> 9);
//         b = (c + (c << 3)) | 0;
//         c = (c << 21) | (c >>> 11);
//         c = (c + t) | 0;
//         return (t >>> 0) / 4294967296;
//       };
//     };
//     this.prngA = new sfc32(tokenData.hash.substr(2, 32));
//     this.prngB = new sfc32(tokenData.hash.substr(34, 32));
//     for (let i = 0; i < 1e6; i += 2) {
//       this.prngA();
//       this.prngB();
//     }
//   }
//   random_dec() {
//     this.useA = !this.useA;
//     return this.useA ? this.prngA() : this.prngB();
//   }
//   random_num(a, b) {
//     return a + (b - a) * this.random_dec();
//   }
//   random_int(a, b) {
//     return Math.floor(this.random_num(a, b + 1));
//   }
//   random_bool(p) {
//     return this.random_dec() < p;
//   }
//   random_choice(list) {
//     return list[this.random_int(0, list.length - 1)];
//   }
// }

// let R = new Random(seed);

var DEFAULT_SIZE = 1000;
var WIDTH = window.innerWidth;
var HEIGHT = window.innerHeight;
var DIM = Math.min(WIDTH, HEIGHT);
var M = DIM / DEFAULT_SIZE;

var rows = [];
// var hr, mint, sc;
let bcol, scol;
var refr = true;
var refr2 = true;
let lastMinute = -1;
let lastSecond = -1;

let hours
let minutes;
let seconds;

let r1, r2;

function setup() {
  createCanvas(WIDTH, HEIGHT, WEBGL);
  // alignSlider = createSlider(0, 2, 1.5, 0.1);
  // cohesionSlider = createSlider(0, 2, 1, 0.1);
  // separationSlider = createSlider(0, 2, 2, 0.1);

  rectMode(CENTER)
  // scale(0.8)
  // if(hour()>12) {
  //   hr = hour() - 12;
  //   bcol = color(255)
  //   scol = color(0)
  
  // }
  // else {
  //   hr = hour();
  //   bcol = color(0)
  //   scol = color(255)
  
  // }

  // r1 = R.random_num(0.1,4);
  // r2 = R.random_num(1,8);

  hours = hour();
  minutes = minute();
  seconds = second();
  

  setMinute();
  setHour();
  

  
  // setInterval(setMinute, (60-currSec)*1000);
  // setInterval(setHour, (60-currMin)*60*1000 + (60-currSec)*1000);


 

}

function draw() {
  // bcol.setAlpha(1)
  
  // frameRate(1)
  // background(bcol);
  smooth();

  // ambientLight(100);
  // directionalLight(255, 255, 255, 0, 0, -DIM*2);

  // translate(WIDTH/2, HEIGHT/2)
  
  scale(0.8)
  translate(-WIDTH/2, -HEIGHT/2)
  // if(frameCount%10 == 0 && frameCount%5){
  // hours = R.random_int(0,23)//hour();
  // minutes = R.random_int(0,60)//minute();
  // seconds = R.random_int(0,12)//second();
  hours = hour();
  minutes = minute();
  seconds = second();
  // }
  // else if(frameCount%10 == 0){
  //   hours = R.random_int(12,23)//hour();
  //   minutes = R.random_int(0,60)//minute();
  //   seconds = R.random_int(0,12)//second();
  //   }

  background(bcol);
  // // Increment the seconds variable by 1 every frame
  // if(frameCount%60==0) seconds++;

  // // If the seconds variable reaches 60, increment the minutes variable and reset the seconds variable to 0
  // if (seconds === 60) {
  //   minutes++;
  //   seconds = 0;
  // }

  // // If the minutes variable reaches 60, increment the hours variable and reset the minutes variable to 0
  // if (minutes === 60) {
  //   hours++;
  //   minutes = 0;
  // }

  // Display the current time as a string
  let timeString = nf(hours, 2) + ":" + nf(minutes, 2) + ":" + nf(seconds, 2);
  // console.log(timeString); // Print the time string to the console
  // Your code here..
  

  // if(minute() == 0) setHour();
  if(minutes === 0 && seconds%2 == 0){
    // noStroke()
    // let hcol = scol;
    fill(scol)
    // hcol.setAlpha(!(seconds%2) ? 255 : 0);
    
    for( let j = 0; j < hr; j++){
      
      rect(WIDTH/2, j*HEIGHT/hr + HEIGHT/hr/2, WIDTH, HEIGHT/hr-15*M);
    }
  } 

  for(let j = 0; j < hr; j++){
    // for (let i = 0; i < minute(); i++) {
    //   flock.push(new Boid());
    // }
    // rows[j].setup();
    rows[j].anim();

    // print(hour(),";", minute(), ";", second(),";", frameRate())  
  }

  // if(minute() ==  0 && second()%2 == 0){
  //   for( let j = 0; j < hr; j++){
  //     fill(scol)
  //     rect(WIDTH/2, j*HEIGHT/hr + HEIGHT/hr/2, WIDTH, HEIGHT/hr-15*M);
  //   }
  // }
  
  // for (let boid of flock) {
  //   boid.edges();
  //   boid.flock(flock);
  //   if(frameCount%60<50 && frameCount%60>10){
  //     boid.update();
  //   }
  //   boid.show();
  // } 

  // if(minute() == 0 && ){
  //   setTimeout(setHour(), 0);
  //   // setTimeout(setMinute(), 0);

  //   print("sethour")
  //   // break;
  // }

  if (minutes === 0 && minutes !== lastMinute) {
    // Execute the code only if the current minute is 0 and it's a new minute
    console.log("It's a new hour!");
    // Your code here...
    setHour();
    
    // setMinute();
    
    // Update the lastMinute variable to avoid executing the code again until the next hour
    lastMinute = 0;
  } else if (minutes !== lastMinute) {
    // Update the lastMinute variable if it's a new minute
    lastMinute = minutes;
  }

  //  if(second() == 0 && frameCount % 60==0){
  //   setMinute();
  //   print("eureka")
  //   // break;
  // }

  if (seconds === 0 && seconds !== lastSecond) {
    // Execute the code only if the current second is 0 and it's a new second
    // console.log("It's a new minute!");
    // Your code here...
    setMinute();
    
    // Update the lastSecond variable to avoid executing the code again until the next minute
    lastSecond = 0;
  } else if (seconds !== lastSecond) {
    // Update the lastSecond variable if it's a new second
    lastSecond = seconds;
  }

  
  
}

function setHour(){

  // refr2 = true;
  // hr = hours;
  
  if(hours>12) {
    hr = hours - 12;
    bcol = color(255)
    scol = color(0)
  
  }
  else if(hours==12) {
    hr = hours;
    bcol = color(255)
    scol = color(0)
  
  }
  else if(hours==0){
    hr = 12;
    bcol = color(0);
    scol = color(255);
  }
  else {
    hr = hours;
    bcol = color(0)
    scol = color(255)
  
  }

  

  rows = [];

  for(let j = 0; j < hr; j++){
    rows.push(new Row(j))
    
  }

  // for (let row of rows) {
  //   row.setup();
  // }

 
}

function setMinute(){
  // refr = true;
  // mint = minutes;

  
  for (let row of rows) {

    

    if(minutes != 0) {
      
    //   row.setup();
    //   row.anim();
    //   print("no")
    // }
    // else {
      row.addmin();
      // print("wha")      
    }

    // print(row.flock.length)
  }

}

// function mousePressed(){
//   save("frame-######.png");
// }

// Flocking
// Daniel Shiffman
// https://thecodingtrain.com/CodingChallenges/124-flocking-boids.html
// https://youtu.be/mhjuuHl6qHM

class Row {
  constructor(j) {
    // this.minutes = minute()
    this.flock = [];
    this.j = j;
    // this.minutes = minute();
    // for(let j = 0; j <= hour(); j++){
      this.setup();
      
  }

  setup(){
    this.flock = [];
    for (let i = 0; i < minutes; i++) {
      this.flock.push(new Boid(this.j));
    // }

    // startHour = hour();
    }
  }

  addmin(){
    // if(minute!=0){
    this.flock.push(new Boid(this.j));
    // }
  }

  anim() {
    for (let boid of this.flock) {
      boid.edges();
      // boid.flock(this.flock);
      // if(int(frameCount)%60<40 && int(frameCount)%60>30){
        boid.flock(this.flock);
        boid.update();
        // boid.velo = averageAmplitude;
      // }
      boid.show();
    }  
  }



  update() {

    
   
  }

  // show() {
  //   strokeWeight(0);
  //   stroke(255);
  //   push()
  //   translate(this.position.x, this.position.y)
  // //   rotate(sin(frameCount/200)/10)
  //   rect(0, 0, 1, 100);
  //   pop()
  // }
}

// Flocking
// Daniel Shiffman
// https://thecodingtrain.com/CodingChallenges/124-flocking-boids.html
// https://youtu.be/mhjuuHl6qHM

class Boid {
  constructor(j) {
    this.position = createVector(random(width), 175);
    this.velocity = createVector(1,0);
    this.ran_velocity = createVector(1,0);
    this.velocity.setMag(random(-1*M, 1*M));
    this.acceleration = createVector();
    this.maxForce = 0.2;
    this.maxSpeed = 1*M;
    this.j = j;
    // this.velo = averageAmplitude;

    this.rs = fxrand();//R.random_num(0,1);
    this.rsv = fxrand()*2;//R.random_num(1, 2);
    this.rsvb = 10+ fxrand()*100;//R.random_num(10, 100);
    // this.minutes = minute();
  }

  edges() {
    if (this.position.x > WIDTH-20*M) {
      this.position.x = 0 + 20*M;
    } else if (this.position.x <= 0 + 20*M) {
      this.position.x = WIDTH - 20*M;
    }
    if (this.position.y > DIM - 20*M) {
      this.position.y = 0;
    } else if (this.position.y < 0 + 20*M) {
      this.position.y = height - 20*M;
    }
  }

  // align(boids) {
  //   let perceptionRadius = 20;
  //   let steering = createVector();
  //   let total = 0;
  //   for (let other of boids) {
  //     let d = dist(this.position.x, this.position.y, other.position.x, other.position.y);
  //     if (other != this && d < perceptionRadius) {
  //       steering.add(other.velocity);
  //       total++;
  //     }
  //     // line(this.position.x, this.position.y, other.position.x, other.position.y)
  //     // ellipse(this.position.x, other.position.y, 10*M)
  //   }
  //   if (total > 0) {
  //     steering.div(total);
  //     steering.setMag(this.maxSpeed);
  //     steering.sub(this.velocity);
  //     steering.limit(this.maxForce);
  //   }
  //   return steering;
  // }

  // separation(boids) {
  //   let perceptionRadius = 24;
  //   let steering = createVector();
  //   let total = 0;
  //   for (let other of boids) {
  //     let d = dist(this.position.x, this.position.y, other.position.x, other.position.y);
  //     if (other != this && d < perceptionRadius) {
  //       let diff = p5.Vector.sub(this.position, other.position);
  //       diff.div(d * d);
  //       steering.add(diff);
  //       total++;
  //     }
  //   }
  //   if (total > 0) {
  //     steering.div(total);
  //     steering.setMag(this.maxSpeed);
  //     steering.sub(this.velocity);
  //     steering.limit(this.maxForce);
  //   }
  //   return steering;
  // }

  // cohesion(boids) {
  //   let perceptionRadius = 50;
  //   let steering = createVector();
  //   let total = 0;
  //   for (let other of boids) {
  //     let d = dist(this.position.x, this.position.y, other.position.x, other.position.y);
  //     if (other != this && d < perceptionRadius) {
  //       steering.add(other.position);
  //       total++;
  //     }
  //   }
  //   if (total > 0) {
  //     steering.div(total);
  //     steering.sub(this.position);
  //     steering.setMag(this.maxSpeed);
  //     steering.sub(this.velocity);
  //     steering.limit(this.maxForce);
  //   }
  //   return steering;
  // }

  flock(boids) {
    // let alignment = this.align(boids);
    // let cohesion = this.cohesion(boids);
    // let separation = this.separation(boids);

    // alignment.mult(alignSlider.value());
    // cohesion.mult(cohesionSlider.value());
    // separation.mult(separationSlider.value());

    // this.acceleration.add(alignment);
    // this.acceleration.add(cohesion);
    // this.acceleration.add(separation);
    // for (let other of boids) {
    //   this.x = lerp(this.x, this.position.x, 0.1);
    // }
  }

  update() {

  
    this.position.add(this.velocity);
    this.velocity.add(this.acceleration);
    this.velocity.limit(this.maxSpeed);
    // this.acceleration.mult(0);
  }

  show() {

    if (this.rs <= 0.9) var fsw = this.rsv;
    else var fsw = this.rsvb;

    
    

    // else this.velocity.mult(1)
    
    // var aff = map((millis()/1000) % 60, 0, 60, 0, fsw )

    // fsw = aff;

    
    // strokeWeight(1*M);
    // stroke(scol)
    noStroke();
    fill(scol);
    push()
    translate(this.position.x, this.j*(HEIGHT/hr) + HEIGHT/hr/2)
    var r = map(noise(this.position.x/(30*M),this.position.y/(30*M), seconds/100), 0, 1, -PI/30, PI/30)
    rotate(r)

    rect(0, 0, 3*M + noise(this.j/(100*M) + this.position.x/(100*M))*fsw*M, HEIGHT/hr-15*M);
    pop()

    // for(var i = 0; i < 10; i++){
    //   push()
    //   translate(this.position.x, this.j*(HEIGHT/hr)+HEIGHT/hr/10*i);
    //   rotate((noise(this.position.x/10,this.position.y/10, frameCount/300)*r1 -1)/r2)

    //   sphere(HEIGHT/hr/20)
    //   pop()
    // }

  }
}



