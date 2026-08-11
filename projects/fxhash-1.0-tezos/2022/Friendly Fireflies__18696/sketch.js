//firefly 4


let walls=[]

function setup() {
     if(windowWidth>windowHeight){
        canvasSize=windowHeight;
    }else{
        canvasSize=windowWidth;
    }
  createCanvas(canvasSize, canvasSize,WEBGL);

 cs=canvasSize;
   
  particle4=new Particle4()    
  particle=new Particle()
  particle2=new Particle2()
  particle3=new Particle3()

}
	function getR3(value){
	  if (value<0.11){
		  r3=1;
		  return "YES"
	  }else{
		  r3=2;
		  return "NO"	  
	  }
	}  
	
		function getAf3(value){
	  if (value<0.33){
		  af=15;
		  return "15"
	  }	else  if (value<0.66){
		  af=30;
		  return "30"	  
	  }else{
		  af=45;
		  return "45"	  
	  }
	} 

class Ray {
  constructor(pos, angle) {
    this.pos = pos;
    this.dir = p5.Vector.fromAngle(angle);
  }

  lookAt(x, y) {
    this.dir.x = x - this.pos.x;
    this.dir.y = y - this.pos.y;
    this.dir.normalize();
  }

  show() {//cstart point
    push();
    translate(this.pos.x, this.pos.y);
fill(255,100)
    noStroke()
    line(0, 0, this.dir.x * 1, this.dir.y * 1);//
    pop();
  }

  cast(wall) {
    const x1 = wall.a.x;
    const y1 = wall.a.y;
    const x2 = wall.b.x;
    const y2 = wall.b.y;

    const x3 = this.pos.x;
    const y3 = this.pos.y;
    const x4 = this.pos.x + this.dir.x;
    const y4 = this.pos.y + this.dir.y;

    const den = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4);
    if (den == 0) {
      return;
    }

    const t = ((x1 - x3) * (y3 - y4) - (y1 - y3) * (x3 - x4)) / den;
    const u = -((x1 - x2) * (y1 - y3) - (y1 - y2) * (x1 - x3)) / den;
    if (t > 0 && t < 1 && u > 0) {
      const pt = createVector();
      pt.x = x1 + t * (x2 - x1);
      pt.y = y1 + t * (y2 - y1);
      return pt;
    } else {
      return;
    }
  }
}

class Boundary{
  constructor(x1, y1, x2, y2) {
    this.a = createVector(x1, y1);
    this.b = createVector(x2, y2);   
  }
  
  show() { //wall
  stroke(0); //black
  if (r3==1){
    stroke(255,0,0); //red
  }
   
    strokeWeight(1)

    line(this.a.x, this.a.y, this.b.x, this.b.y);
  }
} 

class Particle {
  constructor() {
    this.pos = createVector(width / 2, height / 2);
    this.rays = [];
    for (let a = 0; a < 360; a += 5) {//360
      this.rays.push(new Ray(this.pos, radians(a)));
    }
  }

  update(x,y) {
    this.pos.set(x, y);
  }

  look(walls) {
    for (let i = 0; i < this.rays.length; i++) {
      const ray = this.rays[i];
      let closest = null;
      let record = Infinity;
      for (let wall of walls) {
        const pt = ray.cast(wall);
        if (pt) {
          const d = p5.Vector.dist(this.pos, pt);
          if (d < record) {
            record = d;
            closest = pt;
          }
        }
      }
      if (closest) {//ray

        stroke(255,af);
        strokeWeight(cs/4);//25
        line(this.pos.x, this.pos.y, closest.x, closest.y);
      }
    }
  }

  show() {
    fill(255);
    ellipse(this.pos.x, this.pos.y, 4);
    for (let ray of this.rays) {
      ray.show();
    }
  }
}

class Particle2 {
  constructor() {
    this.pos = createVector(width / 2, height / 2);
    this.rays = [];
    for (let a = 0; a < 360; a += 5) {
      this.rays.push(new Ray(this.pos, radians(a)));
    }
  }

  update(x, y) {
    this.pos.set(x, y);
  }

  look(walls) {
    for (let i = 0; i < this.rays.length; i++) {
      const ray = this.rays[i];
      let closest = null;
      let record = Infinity;
      for (let wall of walls) {
        const pt = ray.cast(wall);
        if (pt) {
          const d = p5.Vector.dist(this.pos, pt);
          if (d < record) {
            record = d;
            closest = pt;
          }
        }
      }
      if (closest) {//ray

        stroke(255,af);
        strokeWeight(cs/4);//ray
        line(this.pos.x, this.pos.y, closest.x, closest.y);
      }
    }
  }

  show() {
    fill(255);
    ellipse(this.pos.x, this.pos.y, 4);
    for (let ray of this.rays) {
      ray.show();
    }
  }
}


class Particle3 {
  constructor() {
    this.pos = createVector(width / 2, height / 2);
    this.rays = [];
    for (let a = 0; a < 360; a += 5) {
      this.rays.push(new Ray(this.pos, radians(a)));
    }
  }

  update(x, y) {
    this.pos.set(x, y);
  }

  look(walls) {
    for (let i = 0; i < this.rays.length; i++) {
      const ray = this.rays[i];
      let closest = null;
      let record = Infinity;
      for (let wall of walls) {
        const pt = ray.cast(wall);
        if (pt) {
          const d = p5.Vector.dist(this.pos, pt);
          if (d < record) {
            record = d;
            closest = pt;
          }
        }
      }
      if (closest) {//ray

        stroke(255,af);
        strokeWeight(cs/4);//ray
        line(this.pos.x, this.pos.y, closest.x, closest.y);
      }
    }
  }

  show() {
    fill(255);
    ellipse(this.pos.x, this.pos.y, 4);
    for (let ray of this.rays) {
      ray.show();
    }
  }
}



class Particle4 {
  constructor() {
    this.pos = createVector(width / 2, height / 2);
    this.rays = [];
    for (let a = 0; a < 360; a += 5) {
      this.rays.push(new Ray(this.pos, radians(a)));
    }
  }

  update(x, y) {
    this.pos.set(x, y);
  }

  look(walls) {
    for (let i = 0; i < this.rays.length; i++) {
      const ray = this.rays[i];
      let closest = null;
      let record = Infinity;
      for (let wall of walls) {
        const pt = ray.cast(wall);
        if (pt) {
          const d = p5.Vector.dist(this.pos, pt);
          if (d < record) {
            record = d;
            closest = pt;
          }
        }
      }
      if (closest) {//ray

        stroke(255,af);
        strokeWeight(cs/4);//ray
        line(this.pos.x, this.pos.y, closest.x, closest.y);
      }
    }
  }

  show() {
    fill(255);
    ellipse(this.pos.x, this.pos.y, 4);
    for (let ray of this.rays) {
      ray.show();
    }
  }
}



 window.$fxhashFeatures = {	
   "Alpha": getAf3(fxrand()), 
"Red":getR3(fxrand()),
  
 } 


function draw() {
    
  if(frameCount%142==0){
  for(let i=0;i<7;i++){
    let x1=fxrand()*width
        let x2=fxrand()*width  
            let y1=fxrand()*height
                let y2=fxrand()*height
                walls[i]=new Boundary(x1,y1,x2,y2)
  }
  }
//ro=0.001
  translate(-cs/2,-cs/2)
  background(0) 
  if(r3==1){
  background(255,0,0); //red
  }
 // background(0)        //black 
  for (let wall of walls){
  wall.show();
  }


  particle.update(sin(frameCount*0.002)*cs/4+cs*1/4, tan(frameCount*0.03)*cs/8+cs/2)
// particle.update(-cs/2,-cs/2)
   particle2.update(cos(frameCount*0.025)*cs/4+cs/2, tan(frameCount*0.039)*cs/8+cs/4)
 //2 
    particle3.update(sin(frameCount*0.02)*cs/4+cs/3, tan(frameCount*0.035)*cs/8+cs/2)
  
    particle4.update(tan(frameCount*0.002)*cs/4+cs/2, tan(frameCount*0.045)*cs/8+cs/4)

  
  particle4.show()
  particle4.look(walls)
  
  particle3.show()
  particle3.look(walls)
  
  particle2.show()//
  particle2.look(walls)//
  particle.show()
  particle.look(walls)


}