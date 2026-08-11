
//Shadow Polys

class Prueba{
	
	constructor(){
		this.cosos = [];
		//maxpasadas = 9;
		this.name = "Prueba";
		this.dir = "Prueba";
		this.localUniformsNames = [];
		this.localUniformsValues = [];
		
		this.RM = new RenderManager();
		this.RM.addShader('shaders/generative/rxrpure.frag', 0, "rxr.frag");

		this.c1 = color(genR(255), genR(255), genR(255));
	}
	
	draw(_ps) {


		this.RM.update();
		this.RM.updateDrawOnBuffers();
		_ps.background(255, 0, 0);
		_ps.image(this.RM.pgs[0],0,0,width,height);
		
		fill(this.c1);
		_ps.ellipse(width / 2, height / 2, 150, 150);
		

    }
	update(){
	
	}
}