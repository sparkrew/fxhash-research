let pallet=[
[[44,91,99], [58,52,78], [83,63,82], [138,73,75],  [143,79,51]],
[[188,100,45], [181,97,65], [147,10,84], [32,88,91],  [92,100,72]],
[[40,52,99],  [43,89,99], [21,82,95], [12,77,65], [221,62,71]],
[[201,62,71],  [216,78,55], [351,99,44], [349,84,70], [51,54,98]],
[[214,64,33], [183,99,45], [166,76,40], [175,74,33], [146,63,56] ],
[[19,86,91], [29,90,92], [41,93,94], [47,87,93], [48,37,93]],
[[19,86,70], [29,90,80], [30,93,90], [33,95,100],  [29,90,80]],
[[316,70,67], [274,63,55], [230,68,27], [237,65,42], [220,67,64]],
[[87,67,69], [352,55,79], [0,85,74], [353,84,45], [278,60,49]],
[[53,42,94], [56,87,93], [29,88,90], [21,80,73], [241,54,58]],
[[138,73,75], [143,79,51], [352,93,57], [347,92,76],  [349,58,95]]]
function getPallet(value) {
      if      (value < 0.3) return 1
      else if (value < 0.35) return 2
      else if (value < 0.4) return 3
      else if (value < 0.45) return 4
      else if (value < 0.5) return 5
      else if (value < 0.55) return 6
      else if (value < 0.6) return 7
      else if (value < 0.65) return 8
      else if (value < 0.7) return 9
      else if (value < 0.75) return 10
      else  return 0
}

let pg = [];
let ww, _mode, _rows;
let c1=0,c1d=1, _landDirection, _surfaceTickness

function getSurfaceTickness(value) {
      if      (value < 0.2) return 1
      else if (value < 0.4) return 2
      else if (value < 0.6) return 3
      else if (value < 0.8) return 4
      else  return 5
}
function getMode(value) {
      if      (value < 0.2) return 1
      else if (value < 0.55) return 2
      else if (value < 0.65) return 3
      else if (value < 0.8) return 4
      else  return 5
}

function getThick(value) {
      if      (value < 0.2) return 1
      else if (value < 0.4) return 2
      else if (value < 0.6) return 3
      else if (value < 0.8) return 4
      else  return 5
}

window.$fxhashFeatures = {
      "_surfaceTickness": getSurfaceTickness(fxrand()),
      "_thick": getThick(fxrand()),
      "_mode": getMode(fxrand()),
      "_pallet_ind": getPallet(fxrand()),
}
function setup() {
      _surfaceTickness = window.$fxhashFeatures._surfaceTickness
      _mode = window.$fxhashFeatures._mode
      _thick = window.$fxhashFeatures._thick
      _pallet_ind=window.$fxhashFeatures._pallet_ind
      colorMode(HSB)
      blendMode(DODGE)
      frameRate(130)
      createCanvas(800, 800);
      pixelDensity(2)
      randomSeed(_thick + _mode)
      noiseSeed(_mode*_pallet_ind)
      noiseDetail(_mode*_pallet_ind, 0.45)
      angleMode(RADIANS)
	background(map( noise(_thick + _mode + _pallet_ind), 0, 1, 10, 90));
      nums = map( _mode, 1, 5, 300, 800)
      pw = map(_surfaceTickness, 1, 5, 250, 800)
	for(var i = 0; i < nums; i++){
		particles_a[i] = new Particle(random(0, width),random(0,height), i);
		particles_b[i] = new Particle(random(0, width),random(0,height), i);
		particles_c[i] = new Particle(random(0, width),random(0,height), i);
	}
      let t = 0
      for (let i =0; i < 3; i++){
            let h = random(300, 700)
            sections[i] = createGraphics(pw, h)
            sections[i].pixelDensity(2)
            sections[i].blendMode(DODGE)
            sectionsH[i] = t
            t += h
            sectionsCount++
      }
}

var particles_a = [];
var particles_b = [];
var particles_c = [];
var nums = 200; 
var noiseScale = 800;
let sections = [], sectionsH = [], sectionsCount=0, pw

function draw(){
      let fr = floor(130 - map (millis(), 0, 10000, 0, 130))
      frameRate(fr)
	noStroke();
	smooth();
      for (let i =0; i < 3; i++){
            randomSeed(fxrand()*100 * (i+1))

            painter(i)
      }
      for (let i =0; i < 3; i++){
            if (millis() >= 10000)
                  sections[i].rotate(i * PI)
            image(sections[i], (800 - pw)/2, sectionsH[i])
      }
      if (millis() >= 10000){
            noLoop()
      }
}

function painter(space){
      for(var i = 0; i < nums; i++){
 
            var radius = map(i,0,nums,1,2);
            var alpha = 1//map(i,0,nums,20,25);
            let  grow = map(_mode * _thick, 1, 20, 0.06, 0.2), up = 5 + (_thick + _mode)/2  , gap = 5 * _thick, interv = 15 * space
            let dvd, delta = 0

            //if (floor(_mode % 2) == 0)
            dvd = i + random(interv, interv + 20 * space)
            // else
            //       dvd = interv
            let clr = []
            sections[space].noStroke()
            let pid = floor(noise(_pallet_ind + space+_mode)*12 % 10)
            clr[0] = color(pallet[pid][floor((i)%4)][0] - 5*space, pallet[pid][floor((i)%4)][1], random(pallet[pid][floor((i)%4)][2]-30, 100), alpha)
            clr[1] = color(pallet[pid][floor((i )%4)][0]- 7*space, pallet[pid][floor((i )%4)][1], random(pallet[pid][floor((i )%4)][2]-30, 100), alpha)
            clr[2] = color(pallet[pid][floor((i  )%4)][0]- 10*space, pallet[pid][floor((i  )%4)][1], random(pallet[pid][floor((i  )%4)][2]-30, 100), alpha)
            if (frameCount%(dvd) <= gap || _mode <= 3){
                  sections[space].fill(0)
            }
            else
                  sections[space].fill(clr[0]);
            if ((frameCount%(dvd) <= gap || _mode == 2) && (space == 1)){
                  sections[space].fill(clr[0]);
            }
            if ((frameCount%(dvd) <= gap || _mode == 3) && (i % (13 + _surfaceTickness) == 0)){
                  sections[space].fill(clr[0]);
            }
            particles_a[i].thick += grow * particles_a[i].thickd;
            if (particles_a[i].thick < 1 || particles_a[i].thick > up)
                  particles_a[i].thickd *= -1
            particles_a[i].move();
            particles_a[i].display(radius, space);
            particles_a[i].checkEdge();

            if (frameCount%(dvd) <= gap || _mode <= 3){
                  delta = 0
                  sections[space].fill(0)
            }
            else{
                  delta = -1
                  sections[space].fill(clr[1]);
            }
            if ((frameCount%(dvd) <= gap || _mode == 2) && (space == 1)){
                  sections[space].fill(clr[0]);
            }
            if ((frameCount%(dvd) <= gap || _mode == 3) && (i % (13 + _surfaceTickness) == 0)){
                  sections[space].fill(clr[0]);
            }
            particles_b[i].thick += (grow + map(_thick+_mode + space, 2, 10, 0.1, 0.6)) * particles_b[i].thickd;
            if (particles_b[i].thick< 1 || particles_b[i].thick > up)
                  particles_b[i].thickd *= -1
            particles_b[i].move();
            particles_b[i].display(radius, space);
            particles_b[i].checkEdge();

            if (frameCount%(dvd) <= gap || _mode <= 3){
                  delta = 0
                  sections[space].fill(0)
            }
            else{}{
                  delta = -1
                  sections[space].fill(clr[2]);
            }
            if ((frameCount%(dvd) <= gap || _mode == 2) && (space == 1)){
                  sections[space].fill(clr[0]);
            }
            if ((frameCount%(dvd) <= gap || _mode == 3) && (i % (13 + _surfaceTickness) == 0)){
                  sections[space].fill(clr[0]);
            }
            particles_c[i].thick += (grow + map(_thick+_mode + space, 2, 10, 0.3, 0.95)) * particles_c[i].thickd;
            if (particles_c[i].thick< 1 || particles_c[i].thick > up)
                  particles_c[i].thickd *= -1
}        
}

function Particle(x, y, no){
	this.dir = createVector(0, 0);
	this.vel = createVector(0, 0);
	this.pos = createVector(x, y);
      this.thick = 1
      this.thickd = 1
	this.speed = 0.6;
      this.no = no

	this.move = function(){
		var angle = (this,no%2==0)?noise(this.pos.x/noiseScale, this.pos.y/noiseScale)*TWO_PI*0.3*noiseScale:noise(this.pos.y/noiseScale, this.pos.x/noiseScale)*QUARTER_PI*0.8*noiseScale;

		this.dir.x = (this,no%2==0)?cos(angle):sin(PI+1.4*angle);
		this.dir.y = (this,no%2==0)?sin(angle):cos(TWO_PI+0.9*angle);
		this.vel = this.dir.copy();
		this.vel.mult(this.speed);
		this.pos.add(this.vel);
	}

	this.checkEdge = function(){
		if(this.pos.x > width || this.pos.x < 0 || this.pos.y > height || this.pos.y < 0){
			this.pos.x = random(50, width);
			this.pos.y = random(50, height);
		}
	}

	this.display = function(r, s){
		sections[s].ellipse(this.pos.x, this.pos.y, this.thick + s, this.thick - s);
	}
}