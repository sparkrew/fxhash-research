//ooNWNcmCSWx7bdGJFnKRoqMXK8CojUdAersLbTrKktFe5T3Hkdq




class DesignManager{



	constructor(){
		this.cosos = [];
		this.name = "Design1";
		this.dir = "Design1";
		this.duration = 300;
		this.lasttime = 0;
		this.localUniformsNames = [];
		this.localUniformsValues = [];
        this.loaded = false;
        this.generate = true;
		document.getElementById("loading").style.visibility = "hidden";

		let col1 = color(genR(255), genR(255), genR(255));
		let col2 = color(genR(255), genR(255), genR(255));


		let cnt = 300;
		for (let i = 0; i < cnt; i++) {

			let cf = lerpColor(col1, col2, map(i, 0, cnt, 0, 1));
			this.cosos.push(new AM(0,0,cf));
        }
	}
	

	setup() {

    }
	draw(_ps) {
		
		_ps.background(234, 226, 211);
		//_ps.translate(width / 2, height / 2);
		_ps.push();
		_ps.translate(width / 2,height / 2);

		_ps.rotate(-PI / 4);
		_ps.translate(-width / 2,- height / 2);
		for (let i = 0; i < this.cosos.length; i++) {
			this.cosos[i].display(_ps);
			this.cosos[i].update();
		}
		_ps.pop();
	}

	update(){
	
	}
	generate2(_ps){


	}
}


class AM {

	constructor(x,y,_c1) {
		this.x = genR(-windowWidth*0.8,windowWidth*1.7);
		this.y = genR(-windowHeight*0.5,windowHeight*1.5);
		this.c1 = _c1;

		this.w = genR(20, 300);
		this.h = genR(10, 60);

		this.speed = genR(-2, 2);
	}
	display(_ps) {
		_ps.noStroke();
		_ps.fill(this.c1);
		_ps.rect(this.x, this.y, this.w, this.h, 150);
	}

	update() {
		this.x += this.speed;

		if (this.x > width * 1.5) {
			this.x = genR(-450,-200);
		}
		if (this.x > width * 1.5) {
			this.x = genR(windowWidth + 450, windowWidth + 150);
		}
		
    }

}