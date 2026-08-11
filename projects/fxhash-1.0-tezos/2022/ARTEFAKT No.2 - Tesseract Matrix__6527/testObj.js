
class testObj extends SceneElement {
	constructor(seed){
		super(seed);

		// STATIC PROPERTIES

		this.C_ELEM_REND_R = 0.5;
		this.C_ELEM_DRAW_R = 0.1;

		this.C_GRID_X = 5;
		this.C_GRID_Y = 5;
		this.C_GRID_Z = 4;

		this.C_COLOR_FLUX_MIN=1.8;
		this.C_COLOR_FLUX_MAX=2.5;

		this.C_GRID_DENS_MIN=0.12;
		this.C_GRID_DENS_MAX=0.5;

		// this.C_GRID_R = 0.15;

		// camera distance
		// v1
		
		
		// v2
		// this.C_CAM_LIM = 500;
		
		this.C_COLOR_BG = color('black');
		

		// RANDOM PROPERTIES

		this.C_COLOR_START = this.prand.R_lim_int(0,360);
		this.C_COLOR_INLINE = color(this.prand.R_lim_int(0,360),0,100,100);
		//this.C_COLOR_CHG_RATE = this.prand.R_lim(1.5,2.5);

		// FEATURE - Flux Rate / Color velocity
		let fmin=this.C_COLOR_FLUX_MIN;
		let fmax=this.C_COLOR_FLUX_MAX;
		this.C_COLOR_CHG_RATE = this.prand.R_lim(fmin,fmax);
		if(this.C_COLOR_CHG_RATE < (fmin+(fmax-fmin)*0.25)){
			window.$fxhashFeatures = {
				...window.$fxhashFeatures,
    			'Flux Rate':'0.Retrograde'
    		}
		}else if(this.C_COLOR_CHG_RATE < (fmin+(fmax-fmin)*0.50)){
			window.$fxhashFeatures = {
				...window.$fxhashFeatures,
    			'Flux Rate':'1.Slow'
    		}
		}else if(this.C_COLOR_CHG_RATE < (fmin+(fmax-fmin)*0.75)){
			window.$fxhashFeatures = {
				...window.$fxhashFeatures,
    			'Flux Rate':'2.Radiant'
    		}
		}else{
			window.$fxhashFeatures = {
				...window.$fxhashFeatures,
    			'Flux Rate':'3.Astronomical'
    		}
		}

		// FEATURE - Grid density
		let grmin=this.C_GRID_DENS_MIN;
		let grmax=this.C_GRID_DENS_MAX;
		this.C_GRID_R = this.prand.R_lim(grmin,grmax);
		if(this.C_GRID_R < (grmin+(grmax-grmin)*0.25)){
			window.$fxhashFeatures = {
				...window.$fxhashFeatures,
    			'Density':'0.Black Hole'
    		}
		}else if(this.C_GRID_R < (grmin+(grmax-grmin)*0.50)){
			window.$fxhashFeatures = {
				...window.$fxhashFeatures,
    			'Density':'1.Nutron Star'
    		}
		}else if(this.C_GRID_R < (grmin+(grmax-grmin)*0.75)){
			window.$fxhashFeatures = {
				...window.$fxhashFeatures,
    			'Density':'2.Gas Giant'
    		}
		}else{
			window.$fxhashFeatures = {
				...window.$fxhashFeatures,
    			'Density':'3.Nebula'
    		}
		}

		// v1
		this.C_CAM_UPROT = this.prand.R_lim(0,PI*2);
		this.C_CAM_UP = createVector(0,1,0).rotate(this.C_CAM_UPROT, createVector(0,0,1));
		//this.C_CAM_UP = createVector(0,1,0);
		
		this.C_CAM_TH = this.prand.R()*PI/4;
		this.C_CAM_PH = this.prand.R()*PI/2;

		this.C_CAM_D_R = this.prand.R_lim(0.2,0.8);

		// this.C_CAM_R = 400 * (this.prand.R() > 0.5 ? 2 : 1);
		// this.C_CAM_X = this.C_CAM_R * cos(this.C_CAM_PH) * sin(this.C_CAM_TH);
		// this.C_CAM_Y = this.C_CAM_R * sin(this.C_CAM_PH) * sin(this.C_CAM_TH);
		// this.C_CAM_Z = this.C_CAM_R * cos(this.C_CAM_TH);


		// v2
		// this.C_CAM_X = this.prand.R_lim(-this.C_CAM_LIM/5,this.C_CAM_LIM/5);
		// this.C_CAM_Y = this.prand.R_lim(-this.C_CAM_LIM/5,this.C_CAM_LIM/5);
		// this.C_CAM_Z = this.prand.R_lim(this.C_CAM_LIM/5,this.C_CAM_LIM);
		
		// this.C_CAM_X = this.C_CAM_LIM; //this.C_CAM_LIM/4;//this.C_CAM_LIM;;//this.C_CAM_LIM;
		// this.C_CAM_Y = 0; //this.C_CAM_LIM/2;//this.C_CAM_LIM;//this.C_CAM_LIM;
		// this.C_CAM_Z = this.C_CAM_LIM; //this.C_CAM_LIM;//this.C_CAM_LIM;//this.C_CAM_LIM;


		console.log('CAM',this.C_CAM_X,this.C_CAM_Y,this.C_CAM_Z);


		// VARIABLE PROPERTIES

		this.prop_elem_render_size = 0;
		this.prop_elem_draw_size = 0;
		this.prop_grid_size = 0;


		this.rot_deg = 0;
		this.elem_size = 0;

		this.pre_frame = 0;
		//this.elem = new LorenzAttractor(seed);
		this.elem = new Hypercube(seed);

		this.mat_trans = [];
		this.mat_rot = [];
		this.mat_d = [];

		// // OBJECT FEATURES
		// window.$fxhashFeatures = {
		// 	"Dark": true,
		// 	"Colors number": 7,
		// 	"Head size": "Big"
		// }
	}

	resize(x,y){
		// base resize
		super.resize(x,y);

		// recalculate size properties
		let dim = (this.dim.x>this.dim.y?this.dim.x:this.dim.y);
		this.prop_elem_render_size = this.C_ELEM_REND_R * dim;
		this.prop_elem_draw_size = this.C_ELEM_DRAW_R * dim;
		this.prop_grid_size = this.C_GRID_R * dim;


		this.C_CAM_R = this.C_CAM_D_R * this.dim.x;
		this.C_CAM_X = this.C_CAM_R * cos(this.C_CAM_PH) * sin(this.C_CAM_TH);
		this.C_CAM_Y = this.C_CAM_R * sin(this.C_CAM_PH) * sin(this.C_CAM_TH);
		this.C_CAM_Z = this.C_CAM_R * cos(this.C_CAM_TH);

		// resize image elements
		this.img = createGraphics(x,y);
		this.img.colorMode(HSB,100);

		//this.elem_size = (this.C_ELEM_REND_R;
		this.elem.resize(this.prop_elem_render_size,this.prop_elem_render_size);
		//this.elem.render();

		this.img_elem_buff = createGraphics(this.prop_elem_render_size,this.prop_elem_render_size);

		this.img_elem_comp = createGraphics(x,y,WEBGL);
		this.img_elem_comp.camera(this.C_CAM_X, this.C_CAM_Y, 20+this.C_CAM_Z, 0,0,0, ...vector_explode(this.C_CAM_UP) );

		this.img_elem_outline = createGraphics(x,y,WEBGL);
		this.img_elem_outline.camera(this.C_CAM_X, this.C_CAM_Y, 20+this.C_CAM_Z, 0,0,0, ...vector_explode(this.C_CAM_UP) );

		this.img_shader = createGraphics(x,y,WEBGL);
		//this.img_shader.camera(0,0,20,0,0,0,0,1,0);

		this.img_buff = createGraphics(x,y,WEBGL);
		//this.img_buff.camera(0,0,20,0,0,0,0,1,0);

		this.shader_basic = this.img_shader.createShader(vertShader_basic, fragShader_basic);
		this.shader_blur = this.img_shader.createShader(vertShader_basic, fragShader_blur3);
		this.shader_spread = this.img_shader.createShader(vertShader_basic, fragShader_spread);
		
		this.img.background(this.C_COLOR_BG);

		// Render fixed objects
		this.elem.render();
		this.precompute_matrix();
		this.render_elem_composition();


		// Camera position

	}


	generate(){
		this.elem.generate();
	}

	render(){
		// frameCount cannot be used in pre-rendering
		this.pre_frame += 1;

		//this.elem.render();
		//this.render_elem_composition();
		let t0 = performance.now();

		this.render_elem_outline();
		let t1 = performance.now();

		this.render_color_spread();
		let t2 = performance.now();

		this.render_compose();
		let t3 = performance.now();

		//console.log((t1-t0)/1000,(t2-t1)/1000,(t3-t2)/1000);
	}

	
	precompute_matrix(){
		let offset_x = 0-(this.prop_grid_size*(this.C_GRID_X-1) / 2);//-this.prop_elem_draw_size/2;
		let offset_y = 0-(this.prop_grid_size*(this.C_GRID_Y-1) / 2);//-this.prop_elem_draw_size/2;
		
		// let offset_x = 1;
		// let offset_y = 1;
		let offset_z = 1;

		this.mat_trans = [];
		this.mat_rot = [];
		this.mat_d = [];

		let vmax = createVector(this.C_GRID_X/2, this.C_GRID_Y/2, 0);

		for(let x=0; x<this.C_GRID_X; x++){

			let x_pos = x*this.prop_grid_size+offset_x;

			for(let y=0; y<this.C_GRID_Y; y++){

				let y_pos = y*this.prop_grid_size+offset_y;
				
				for(let z=this.C_GRID_Z-1; z>=0; z--){

					let idx = x*this.C_GRID_Y*this.C_GRID_Z + y*this.C_GRID_Z + z;

					// Translate to place in matrix
					
					
					let z_pos = 0-z*this.prop_grid_size*2+offset_z;

					this.mat_trans[idx] = [x_pos, y_pos, z_pos];


					// Rotate to face the camera
					let v1 = createVector(x_pos,y_pos,z_pos);
					//let v1 = createVector(0,0,1);
					let v2 = createVector(this.C_CAM_X, this.C_CAM_Y, this.C_CAM_Z);
					let vab = v2.sub(v1);
					
					// V3
					// let m3 = lookAt_matrix3(v2, createVector(0,0,0), createVector(0,1,0) );
					//img.applyMatrix(...m3[0],...m3[1],...m3[2]);

					// V2
					let th = 0;
					let ph = 0;
					//let rh = vab.mag();
					th = sqrt(vab.x*vab.x+vab.y*vab.y)/vab.z;
					if( vab.x > 0){
						ph = atan(vab.y/vab.x);
					}else if(vab.x<0){
						ph = atan(vab.y/vab.x)+PI;
					}else{
						ph = PI/2;
					}
					// img.applyMatrix(
					// 	sin(th)*cos(ph), rh*cos(th)*cos(ph), -rh*sin(th)*sin(ph),
					// 	sin(th)*sin(ph), rh*cos(th)*sin(ph), rh*sin(th)*cos(ph),
					// 	cos(th), -rh*sin(th), 0
					// );

					let rot_x = PI/2+th;
					let rot_y = PI/2+ph;
					let rot_z = 0;//ph;//th;
					this.mat_rot[idx] = [rot_x, rot_y, rot_z];


					// V1
					//console.log(v1,v2,vab, createVector(vab.x,vab.y).heading());
					// let rot_x = 0-createVector(vab.z,vab.y).heading();
					// let rot_y = 0-createVector(vab.z,vab.x).heading();
					// let rot_z = 0-createVector(vab.y,vab.x).heading(); 
					// img.rotateX(rot_x);
					// img.rotateY(rot_y);
					// img.rotateZ(rot_z);


					//console.log('render_matrix', m4);
					// let vmax = createVector(this.C_GRID_X/2, this.C_GRID_Y/2, 0);
					let vpos = createVector(
						abs(x-this.C_GRID_X/2),
						abs(y-this.C_GRID_Y/2),
						z);
					let d = vpos.mag()/vmax.mag()*100;
					this.mat_d[idx] = d;
				}
			}
		}
	}

	render_matrix(img, f_render){
		let offset_x = 0-(this.prop_grid_size*(this.C_GRID_X-1) / 2);//-this.prop_elem_draw_size/2;
		let offset_y = 0-(this.prop_grid_size*(this.C_GRID_Y-1) / 2);//-this.prop_elem_draw_size/2;
		
		// let offset_x = 1;
		// let offset_y = 1;
		let offset_z = 1;

		for(let x=0; x<this.C_GRID_X; x++){
			for(let y=0; y<this.C_GRID_Y; y++){
				for(let z=this.C_GRID_Z-1; z>=0; z--){
					
					let idx = x*this.C_GRID_Y*this.C_GRID_Z + y*this.C_GRID_Z + z;

					img.push();
					
					img.translate(
						this.mat_trans[idx][0], 
						this.mat_trans[idx][1],
						this.mat_trans[idx][2]
					);


					img.rotate(this.mat_rot[idx][0], createVector(1,0,0));
					img.rotate(this.mat_rot[idx][1], createVector(0,1,0));
					img.rotate(this.mat_rot[idx][2], createVector(0,0,1));

					f_render(this.mat_d[idx]);

					img.pop();
				}
			}
		}
	}

	render_elem_composition(){
		this.img_elem_comp.clear();
		this.img_elem_comp.noFill();
		this.img_elem_comp.noStroke();
		this.img_elem_comp.setAttributes('depth',false);

		//this.img_elem_comp.background(color('red'));

		let f = (d) => {
			//console.log('f: ',m3);
			let img = this.img_elem_comp;
			// img.texture(this.elem.img);

			// // V2
			//img.applyMatrix(...m3[0],...m3[1],...m3[2]);

			// // V1
			// let d = this.prop_elem_draw_size;
			// let v1 = createVector(-d/2,-d/2,0);
			// let v2 = createVector(d/2,-d/2,0);
			// let v3 = createVector(d/2,d/2,0);
			// let v4 = createVector(-d/2,d/2,0);

			// v1 = m3_v3_mult(m3, v1);
			// v2 = m3_v3_mult(m3, v2);
			// v3 = m3_v3_mult(m3, v3);
			// v4 = m3_v3_mult(m3, v4);

			// img.fill(color('red'));
			// img.beginShape();
			// img.vertex( v1.x, v1.y );
			// img.vertex( v2.x, v2.y ); //m3_v3_mult(m3,v2) );
			// img.vertex( v3.x, v3.y ); //m3_v3_mult(m3,v3) );
			// img.vertex( v4.x, v4.y ); //m3_v3_mult(m3,v4) );
			// img.endShape();


			//p5.normal(n);

			//this.img_elem_comp.texture(this.elem.img);
			//this.img_elem_comp.normalMaterial();
			//this.img_elem_comp.plane(70); //(0-this.prop_elem_draw_size/2,0-this.prop_elem_draw_size/2,this.prop_elem_draw_size,this.prop_elem_draw_size);
			this.img_elem_buff.clear();
			this.img_elem_buff.image(this.elem.img,0,0,this.prop_elem_render_size, this.prop_elem_render_size);
			this.img_elem_buff.fill(color(0,0,0,d));
			this.img_elem_buff.noStroke();//color('red'));
			this.img_elem_buff.circle(this.prop_elem_render_size/2,this.prop_elem_render_size/2,this.prop_elem_render_size);
			
			let r = this.elem.size_bfil;
			let step = r/10/2;
			this.img_elem_buff.strokeWeight(step/4);
			this.img_elem_buff.noFill();
			for(let i = r; i>r/2; i=i-step){
				// this.img_elem_buff.stroke(color(0,100,100,i/r*d));
				let c = color(
					hue(this.C_COLOR_INLINE),
					saturation(this.C_COLOR_INLINE),
					(1-i/r)*d,
					i/r*d
				);

				this.img_elem_buff.stroke(c);
				this.img_elem_buff.circle(this.prop_elem_render_size/2,this.prop_elem_render_size/2, i);
			}
			this.img_elem_comp.image(this.img_elem_buff,0-this.prop_elem_draw_size/2,0-this.prop_elem_draw_size/2,this.prop_elem_draw_size,this.prop_elem_draw_size);	
		}

		this.render_matrix(this.img_elem_comp, f );

	}

	render_elem_outline(){
		//this.img_elem_outline.background(color('red'));
		this.img_elem_outline.noFill();
		this.img_elem_outline.noSmooth();
		this.img_elem_outline.stroke( color(((this.C_COLOR_START+this.pre_frame+frameCount)*this.C_COLOR_CHG_RATE)%360,100, 100, 100 ));


		let f = (n) => {
			this.img_elem_outline.circle(0,0,this.prop_elem_draw_size);	
		}

		this.render_matrix(this.img_elem_outline, f );
	}

	render_color_spread(){
		// Draw color spread to img_buffer

		// Do not clear existing image data

		// Draw outline
		this.img_buff.image(this.img_elem_outline,0-this.dim.x/2,0-this.dim.y/2,this.dim.x,this.dim.y);

		// Apply color shader
		let myshader = this.shader_spread;
		this.img_shader.shader(myshader);
		myshader.setUniform('uTexture', this.img_buff);
		this.img_shader.rect(0,0,1);
		//this.img_shader.rect(0,0,1);


		// Copy shader to buffer
		this.img_buff.push();
		this.img_buff.scale(-1,1);
		this.img_buff.image(this.img_shader,0-this.dim.x/2,0-this.dim.y/2,this.dim.x,this.dim.y);
		this.img_buff.pop();
	}

	render_compose(){
		// Compose the output
		
		// Draw the buffer to output
		this.img.image(this.img_buff,0,0,this.dim.x,this.dim.y);
		
		// Draw the element composition
		this.img.image(this.img_elem_comp,0,0,this.dim.x,this.dim.y);
		
	}

	prerender_init(){
		this.pre_frame = 0;
		this.img_shader.clear();
		this.img_buff.clear();
	}
}

function vector_explode(vec){
	return [vec.x, vec.y, vec.z];
}