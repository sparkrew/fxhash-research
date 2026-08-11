//ooNWNcmCSWx7bdGJFnKRoqMXK8CojUdAersLbTrKktFe5T3Hkdq




class FeedbackLimitManager{
	//var cosos = [];

   

	constructor(){
	
		this.name = "FeedbackLimit";
		this.dir = "FeedbackLimit";
		this.duration = 300;
		this.lasttime = 0;
		this.localUniformsNames = [];
		this.localUniformsValues = [];
        this.loaded = false;
		this.generate = true;

		this.RM = new RenderManager();
		this.RM.addShader('shaders/generative/feedbackpointer4.frag', 0, "fbp1.frag");
		this.RM2 = new RenderManager();
		this.RM2.addShader('shaders/generative/f3.frag', 0, "f4.frag");

		this.seed = genR(1);
		this.size = 0.5;


		this.mflag = 0.0;
		this.auto = 0.0;


		this.r1 = genR(1);

		this.g1 = genR(1);

		this.b1 = genR(1);
	}

	setup() {

		this.auto = 0.0;
		this.RM.objts[0].localUniformsValues[8] = 0.0;
	}	

	

	draw(_ps) {
		
		//console.log(this.size);

		let sped = 0.00025;
		let amp = 1.2;
		let x_1 = noise(millis() * sped + this.seed * 85355324.) * amp;
		let y_1 = noise(millis() * sped + this.seed * 62650.) * amp;

		let x_2 = noise(millis() * sped + this.seed * 1553.) * amp;
		let y_2 = noise(millis() * sped + this.seed * 6542.) * amp;

		let x_3 = noise(millis() * sped + this.seed * 98972554.) * amp;
		let y_3 = noise(millis() * sped + this.seed * 2984235.) * amp;

		let x_4 = noise(millis() * sped + this.seed * 7985752.) * amp;
		let y_4 = noise(millis() * sped + this.seed * 1231424.) * amp;

		let x_5 = noise(millis() * sped + this.seed * 9399751.) * amp;
		let y_5 = noise(millis() * sped + this.seed * 2354987.) * amp;

		let x_6 = noise(millis() * sped + this.seed * 2321432.) * amp;
		let y_6 = noise(millis() * sped + this.seed * 14741714.) * amp;

		//let x3 = noise(millis() * 0.0001 + this.seed * 85355324.) * 1.;
		//let y3 = noise(millis() * 0.0001 + this.seed * 62650.) * 1.;
		//let x4 = noise(millis() * 0.0001 + this.seed * 85355324.) * 1.;
		//let y4 = noise(millis() * 0.0001 + this.seed * 62650.) * 1.;

		if (!mouseIsPressed) {
			this.mflag = 0.0;

		}

		if (mouseIsPressed && this.mflag == 0) {
			//this.size = 1.0;
			this.auto = 1.0;
		}

		if (keyIsDown(87)) {
			this.mflag = 1.0;
		} else {
			this.mflag = 0.0;
        }
		
		if (this.auto == 0.0) {
			//this.size -= 0.001;
			if (this.size < 0.3) {
				this.size -= 0.0001;
			} else {
				this.size -= 0.001;
            }
			
			this.size = constrain(this.size, 0.0, 1.0);
			
		} else {
			if (keyIsDown(65)) {
				this.size += 0.001;
			}
			if (keyIsDown(83)) {
				this.size -= 0.001;
			}
			this.size = constrain(this.size, 0.0, 5.0);
		}
		
		console.log("SIZE : " + this.size);

		this.RM.objts[0].localUniformsValues[0] = [x_1, y_1];
		this.RM.objts[0].localUniformsValues[1] = [x_2, y_2];
		this.RM.objts[0].localUniformsValues[2] = [x_3, y_3];
		this.RM.objts[0].localUniformsValues[3] = [x_4, y_4];
		this.RM.objts[0].localUniformsValues[4] = [x_5, y_5];
		this.RM.objts[0].localUniformsValues[5] = [x_6, y_6];


		this.RM.objts[0].localUniformsValues[6] = this.r1;
		this.RM.objts[0].localUniformsValues[7] = this.g1;
		this.RM.objts[0].localUniformsValues[8] = this.b1;

		this.RM.objts[0].localUniformsValues[9] = this.size;
		this.RM.objts[0].localUniformsValues[10] = this.mflag;
		this.RM.objts[0].localUniformsValues[11] = this.auto;
		
		


		
	//	this.RM.objts[0].localUniformsValues[1] = [x2, y2];
		//this.RM.objts[0].localUniformsValues[2] = [x3, y3];
		//this.RM.objts[0].localUniformsValues[3] = [x4, y4];



		this.RM.update();
		this.RM.draw();
		this.RM2.update();
		this.RM2.draw();


		/*if(!this.loaded){				
			background(255,0,0);
			this.generate2(_ps);
			this.loaded = true;
			console.log("test");
		}*/
	}

	update(){
	
	}

}