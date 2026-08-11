function windowResized(){
   init();
   redraw();
}

function setup() {
  init();
}

function init(){
  setAttributes("alpha", false);
  setAttributes("antialias", true);
  setAttributes("depth", true);

   w = min(windowHeight, windowWidth);
   createCanvas(w, w, WEBGL);

   let seed=0;
   for(let i=0;i<fxhash.length-1;i++){
     seed += fxhash.charCodeAt(i) * (i-fxhash.length*0.5) *3.557 + 2.1;
   }

   randomSeed(seed);
   noiseSeed(seed);


   num = 20;

   fps = 24;
   frameRate(fps);

   togetoge = [];
   for(let i=0;i<num;i++){
     push();
     togetoge.push(new toge(i));
     pop();
   }

   colorMode(HSB);
   background(random(['#00BDAA', '#400082', '#FE346E', '#F1E7B6']));

   t = 0;
   flag = true;
}

function draw(){
  if(flag){
	 for(let l=0;l<8;l++){
    for(let i=0;i<num;i++){
     togetoge[i].draw();
     togetoge[i].update(t);
    }
		t += 1 / fps ;
	 }
	
	 let count = 0;
   for(let i=0;i<num;i++){
    if(togetoge[i].sy > height*0.5*1.2){count++}
   }
	 flag = (count != num);
  } else{noLoop();}
}

function toge(no){
  let hue_pat =[
     '#0CECDD', '#FFF338', '#FF67E7', '#C400FF'
  ];
  this.sx = width/num*no -width*0.5;
  this.sy = -height/2;
  this.size = width * 0.005 * random(0.75, 1);

  let rnum = 30;

  this.color = [];
  this.theta = [];
  this.phi = [];
  this.offset0 = 0;
  this.offset1 = 0;
	
	let colos = [random(hue_pat), random(hue_pat), '#e0e0e0']

  colorMode(HSB);
  for(let i=0;i<=rnum;i++){
    this.color.push(color(random(colos) + random(['08', '15', '10']) ) );
    this.theta.push(random(PI));
    this.phi.push(random(TAU));
  }

  this.draw = function(){
   push();
   translate(this.sx, this.sy);
   strokeWeight(0);
   let r = this.size * 5;
   for(let i=0;i<this.color.length;i++){
     push();
     fill( this.color[i] );
     let theta = (this.theta[i] + this.offset0)%PI;
     let phi = this.phi[i] + this.offset1;
     let x = r * sin(theta) * cos(phi);
     let y = r * sin(theta) * sin(phi);
     let z = r * cos(theta)
     translate(x, y, z);
     rotateZ(phi+PI/2);
     rotateX(theta+PI/2);
     cone(this.size*0.5, this.size*7.5, 4, 3);
     pop();
   }
   pop();
  }

  this.speedx = random(-1,1)*3;
  this.speedy = random(-1,1)*3;
  this.speedo0 = random(15,25) * random(-1,1);
  this.speedo1 = random(15,25) * random(-1,1);
  this.speeds = random(-1,1) * random(1,2);

  this.sp_off = [];
  for(let i=0;i<5;i++){
    this.sp_off.push(random(TAU));
  }

  this.update = function(t){
    this.sy += abs(2*sin(t/this.speedy + this.sp_off[1]) + 2*cos(t/this.speedx + this.sp_off[0]));
    this.offset0 = 2*PI*sin(t/this.speedo0 + this.sp_off[2]);
    this.offset1 = 2*PI*sin(t/this.speedo1 + this.sp_off[3]);
    this.size += 0.1*sin(t/this.speeds + this.sp_off[4]);
  }
}