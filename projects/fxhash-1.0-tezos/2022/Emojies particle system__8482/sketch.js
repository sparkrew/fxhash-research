var system;
var lifespan = window.$fxhashFeatures['Max lifespan'];
var max_size = window.$fxhashFeatures['Max Size'];
var em = window.$fxhashFeatures['Emoji'];

function setup() {
  createCanvas(600, 600);
  if(window.$fxhashFeatures['Glitch']){
    background(42);
  }
  system = new ParticleSystem(createVector(width/2, height/2));
}

function draw() {
  if(!window.$fxhashFeatures['Glitch']){
    background(42);
  }
  system.addParticle();
  system.run();
}

// A simple Particle class
var Particle = function(position) {
  this.acceleration = createVector(0, 0);
  this.velocity = createVector(0, 0);
  this.position = position.copy();
  this.lifespan = 255;
  this.random = randomFx(5,max_size);
  this.size = createVector(this.random,this.random);
};

Particle.prototype.run = function() {
  this.update();
  this.display();
};

// Method to update position
Particle.prototype.update = function(){
  this.acceleration = p5.Vector.fromAngle(randomFx(TWO_PI), randomFx(TWO_PI));
  
  //this.acc.normalize();
  this.acceleration.div(10);
  this.velocity.add(this.acceleration);
  this.position.add(this.velocity);
  
  // this.velocity.add(this.acceleration);
  // this.position.add(this.velocity);
  this.lifespan -= lifespan;
};

// Method to display
Particle.prototype.display = function() {
  textSize(this.size.x * 2);
  text(em, this.position.x, this.position.y);
  fill(255, 255, 255, this.lifespan);
};

// Is the particle still useful?
Particle.prototype.isDead = function(){
  if (this.lifespan < 0) {
    return true;
  } else {
    return false;
  }
};

var ParticleSystem = function(position) {
  this.origin = position.copy();
  this.particles = [];
};

ParticleSystem.prototype.addParticle = function() {
  this.particles.push(new Particle(this.origin));
};

ParticleSystem.prototype.run = function() {
  for (var i = this.particles.length-1; i >= 0; i--) {
    var p = this.particles[i];
    p.run();
    if (p.isDead()) {
      this.particles.splice(i, 1);
    }
  }
};