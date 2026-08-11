// Sketch One
var shaderBG = function( p ) { // p could be any variable name
  // Rainbow Maffs!
  let w = 0
  let theShader
  let rndTimeAdjust = rndNum(100000)

  p.preload = function () {
    theShader = p.loadShader('uniform.vert', `${rndNum(5, 1)}.frag`)
  }

  p.setup = function () {
    p.pixelDensity(1)
    p.windowResized()
    
    p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL)
  }

  p.windowResized = function () {
    size = p.windowWidth > p.windowHeight ? p.windowHeight: p.windowWidth
    offset = size == 1000 ? { x: 0, y: 0 } : 
      p.windowWidth < p.windowHeight ? { x: 0, y: 0 } :
        { x: 0, y: 0 }

    p.resizeCanvas(p.windowWidth, p.windowHeight)
  }

  p.draw = function () {
    p.imageMode(p.CENTER)
    p.clear()
    p.shader(theShader)

    // pass the interactive information to the shader
    theShader.setUniform("iResolution", [p.width, p.height]);
    theShader.setUniform("iTime", (rndTimeAdjust + p.millis()) / 1000.0);
    theShader.setUniform("iFrame", p.frameRate());
    theShader.setUniform("iMouse", [p.xMouse, p.yMouse]);

    p.rect(0,0,p.width,p.height);
  }
};

var myp5 = new p5(shaderBG, 'c1');

let particles = []

// this class describes the properties of a single particle.
class Particle {
  // setting the co-ordinates, radius and the
  // speed of a particle in both the co-ordinates axes.
    constructor(p, pg){
      this.p = p // <-- p5 instance
      this.pg = pg
      this.antiClockwise = rndNum(5, 1) > 3
      this.rotationSpeed = rndNum(4, 1)
      this.size = triangleSize == 'Teeny!' ? rndNum(15, 3) : triangleSize == 'Hench!' ? rndNum(200, 70) : rndNum(100, 10)
      this.strokeWeight = rndNum(5, 2);
      this.color = rndNum(359)
      this.triangle = rndNum(10) > 5
      this.black = rndNum(5, 1) > 3
      this.angle = rndNum(359)
      this.x = rndNum(1000);
      this.y = rndNum(1000);
      this.r = rndNum(8, 1);
      this.xSpeed = rndNum(2,-2);
      this.ySpeed = rndNum(1.5,-1);
    }
  
  // creation of a particle.
    createParticle() {
      this.pg.strokeWeight(this.strokeWeight)
      this.pg.stroke(triangleHue, 100, this.black ? 0 : 100, 0.7);
      this.pg.noFill()
      
  
      let { x: x1, y: y1 } = rotate(this.x, this.y, this.x, this.y - this.size / 2, this.angle, this.antiClockwise)
      let { x: x2, y: y2 } = rotate(this.x, this.y, this.x - this.size / 2, this.y + (this.size / 4), this.angle, this.antiClockwise)
      let { x: x3, y: y3 } = rotate(this.x, this.y, this.x + this.size / 2, this.y + (this.size / 4), this.angle, this.antiClockwise)

      this.pg.triangle(x1, y1, x2, y2, x3, y3)
 
    }
  
  // setting the particle in motion.
    moveParticle() {
      if(this.x < 0 || this.x > this.p.width)
        this.xSpeed*=-1;
      if(this.y < 0 || this.y > this.p.height)
        this.ySpeed*=-1;
      this.x+=this.xSpeed;
      this.y+=this.ySpeed;

      this.color += 1
      if(this.color > 360) this.color = 0
      this.angle += this.rotationSpeed
    }
  
  // this function creates the connections(lines)
  // between particles which are less than a certain distance apart
    joinParticles(particles) {
      particles.forEach(element =>{
        let dis = this.p.dist(this.x,this.y,element.x,element.y);
        if(dis<85) {
          this.pg.stroke(255, 100, 100);
          this.pg.line(this.x,this.y,element.x,element.y);
        }
      });
    }
  }
  
/*
 CX @ Origin X  
 CY @ Origin Y
 X  @ Point X to be rotated
 Y  @ Point Y to be rotated  
 anticlock_wise @ to rotate point in clockwise direction or anticlockwise , default clockwise 
 return @ {x,y}  
*/
function rotate(cx, cy, x, y, angle, anticlock_wise = false) {
  if(angle == 0){
      return {x:parseFloat(x), y:parseFloat(y)};
  }if(anticlock_wise){
      var radians = (Math.PI / 180) * angle;
  }else{
      var radians = (Math.PI / -180) * angle;
  }
  var cos = Math.cos(radians);
  var sin = Math.sin(radians);
  var nx = (cos * (x - cx)) + (sin * (y - cy)) + cx;
  var ny = (cos * (y - cy)) - (sin * (x - cx)) + cy;
  return {x:nx, y:ny};
}

// Sketch Two
var t2 = function( p ) { // p could be any variable name
  // Rainbow Maffs!
  let w = 0
  let v = 0
  let eq1 = rndNum(5)
  let wisdomAlpha = 0
  // an array to add multiple particles

  let b, pg, ball, triangle, advice, bg, shadow

  let captured = false

  let size, offset


  p.preload = function () {
    ball = p.loadImage('img/8-Ball_Casing.png')
    triangle = p.loadImage('img/Triangle.png')
    advice = wisdom == 'Cock!' ? p.loadImage('img/Cock.png') : p.loadImage('img/advice/' + triangleMessage)
    bg = p.loadImage('img/8-Ball_Inner_Background.png')
    shadow = p.loadImage('img/8-ball_Central_Drop_Shadow_Overlay.png')
  }

  p.setup = function () {
    p.pixelDensity(1)
    p.windowResized()
    
    p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL);

    pg = p.createGraphics(1000, 1000)
    b = p.createGraphics(1000, 1000)

    pg.colorMode(p.HSB, 360, 100, 100)
    p.angleMode(p.DEGREES)

    for(let i = 0;i<p.width/10;i++){
      particles.push(new Particle(p, pg));
    }
  }

  p.windowResized = function () {
    size = p.windowWidth > p.windowHeight ? p.windowHeight: p.windowWidth
    offset = size == 1000 ? { x: 0, y: 0 } : 
      p.windowWidth < p.windowHeight ? { x: 0, y: 0 } :
        { x: 0, y: 0 }

    p.resizeCanvas(p.windowWidth, p.windowHeight)
  }

  p.draw = function () {
    p.imageMode(p.CENTER)
    p.clear()
    pg.clear()
    
    for(let i = 0;i<particles.length;i++) {
      particles[i].createParticle();
      particles[i].moveParticle();
    }

    pg.noTint()
    pg.image(shadow, 0, this.y, 1000, 1000)
    pg.image(bg, 0, this.y, 1000, 1000)

    pg.tint(triangleHue, 80, 80, wisdomAlpha)
    pg.image(triangle, this.x / 20, this.y + this.y / 8, 1000, 1000)
    pg.tint(0, 0, 100, wisdomAlpha)
    //pg.tint(triangleHue, 0, 100)
    pg.image(advice, this.x / 20, this.y + this.y / 8, 1000, 1000)
    pg.noTint()
    pg.image(ball, 0, this.y, 1000, 1000)

    xDir = rndNum(10) < 5 ? -1 : 1
    yDir = rndNum(10) < 5 ? -1 : 1
    pg.noTint()
    p.image(b, offset.x, offset.y, size, size)
    p.image(pg, offset.x, offset.y, size, size)

    if (wisdomAlpha < 1) wisdomAlpha += .01
    else {
      if (!captured) {
        try {
          fxpreview()
        } catch {}
        captured = true
      }
    }

    this.y =  w/2 + p.sin(p.frameCount) * 30
    this.x =  w/2 + p.sin(p.frameCount) * 30
  }
};
var myp5 = new p5(t2, 'c2');