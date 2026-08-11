let h = 800;
let d = (x1, y1, x2, y2) => Math.sqrt((x2-x1)**2 + (y2-y1)**2)
let g;
let padding = 100;

function setup() {
  Math.random = fxrand;
  randomSeed(fxrand()*999999);
  noiseSeed(fxrand()*999999);

	createCanvas(800, 800);
	background(250);
	g = new grid_p();
}

function draw() {
	background(250);
	for (let i = 0; i < 5; i += 1){
		g.add_point_to_front()
	}
	g.draw()
}

function test1() {
	let g = new grid_p()
	for (let i = 0; i < 100; i += 1){
		g.add_point_to_front()
	}
	g.draw()
}

class node {
	constructor(a,b, pa,pb, w) {
		this.a = a;
		this.b = b;
		
		this.pa = pa;
		this.pb = pb;
		
		this.w = w
	}
}


class grid_p {
	constructor() {
		this.seed = new node(h/2, h/2, h/2, h/2, 1);
		this.r_point = 5;
		this.dist_step = this.r_point*2 +  20;
		this.try_n = 50;
		this.points = [this.seed,];
		this.front = [this.seed,];
	}
	
	draw(){
		fill(0)
		stroke(0)
		strokeWeight(2)
		for (let i = 0; i < this.points.length; i += 1) {
			circle(this.points[i].a,this.points[i].b, this.r_point*2)
			line(this.points[i].a,this.points[i].b, this.points[i].pa,this.points[i].pb)
		}
	}
	
	add_point_to_front(){
		if(this.front.length == 0){return}
		
		let t = floor(random(this.front.length))
		
		let a = this.front[t].a
		let b = this.front[t].b
		
		if( a<padding || a>h-padding || b<padding || b>h-padding){
			this.front.splice(t, 1);
			return
		}
		
		let discard = true;
		
		for (let i = 0; i < this.try_n; i += 1){
			let ang = random(0, TWO_PI)
			
			let t_a = a + cos(ang)*this.dist_step
			let t_b = b + sin(ang)*this.dist_step
			
			let s = true
			
			for (let j = 0; j < this.points.length; j += 1){
				if(d(t_a, t_b, this.points[j].a, this.points[j].b) < this.dist_step){
					s = false
					break
				}
			}
			
			if(s){
				let new_one = new node(t_a, t_b, a, b, 1)
				this.points.push(new_one);
				this.front.push(new_one);
				discard = false
				break
			}
			
		}
		
		if(discard){
			this.front.splice(t, 1);
		}
	}
	
}










