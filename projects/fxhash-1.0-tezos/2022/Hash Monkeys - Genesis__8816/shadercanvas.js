class ShaderCanvas {
	constructor(id, fs) {
		// id = id of the canvas to render into
		// fs = fragment shader code String
		
		this.id = id;
		this.canvas = document.getElementById(id);
		
		if(this.canvas==undefined) {
			console.error("Canvas '#"+id+"' not found!");
			return;
		}

		this.gl = this.canvas.getContext('experimental-webgl');
		this.gl.getExtension('OES_standard_derivatives');

		function createShader(str, type, gl) {
		   var shader = gl.createShader(type);
		   gl.shaderSource(shader, str);
		   gl.compileShader(shader);
		   
		   if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
			   throw gl.getShaderInfoLog(shader);
		   }
		 
		   return shader;
		}
	
		var gl = this.gl;
		
		var vertexPosBuffer = gl.createBuffer();
		gl.bindBuffer(gl.ARRAY_BUFFER, vertexPosBuffer);

		var vertices = [-1, -1, 1, -1, -1, 1, 1, 1];
		gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

		var vs = `attribute vec2 pos;
		 varying vec2 iUv;
		 void main() {iUv = pos*.5+.5;gl_Position = vec4(pos, 0, 1);}`;	 

	   this.program = gl.createProgram();
	   var program = this.program;
	   
	   var vshader = createShader(vs, gl.VERTEX_SHADER, gl);
	   var fshader = createShader(fs, gl.FRAGMENT_SHADER, gl);
	   gl.attachShader(program, vshader);
	   gl.attachShader(program, fshader);
	   gl.linkProgram(program);
	   
	   if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
		 throw gl.getProgramInfoLog(program);
	   }
	   
	   this.locs = {
			Aspect: gl.getUniformLocation(program, "iAspect"),
			Mouse: gl.getUniformLocation(program, "iMouse"),
			Res: gl.getUniformLocation(program, "iRes"),
			Time: gl.getUniformLocation(program, "iTime"),

			Spiral1: gl.getUniformLocation(program, "iSpiral1"),
			Spiral2: gl.getUniformLocation(program, "iSpiral2"),
			Type: gl.getUniformLocation(program, "iType"),
			Col: gl.getUniformLocation(program, "iCol"),
			Col2: gl.getUniformLocation(program, "iCol2"),
			BgCol1: gl.getUniformLocation(program, "iBgCol1"),
			BgCol2: gl.getUniformLocation(program, "iBgCol2")
		}
		
		this.params = {
			Type:[fxrand(), fxrand(), fxrand(), fxrand()],
			Spiral1:[fxrand(), fxrand(), fxrand(), fxrand()],
			Spiral2:[fxrand(), fxrand(), fxrand(), fxrand()],
			Col:[fxrand(), fxrand(), fxrand(), fxrand()],
			Col2:[fxrand(), fxrand(), fxrand(), fxrand()],
			BgCol1:chimp.bgCol1,
			BgCol2:chimp.bgCol2
		}
		
		var iCol = this.params.Col;
		if(Math.abs(iCol[0]-iCol[1])<.3) {
			var x = Math.min(iCol[0], iCol[1]);
			var y = 1-Math.max(iCol[0], iCol[1]);
			iCol[0] = x*x;
			iCol[1] = 1-y*y;
		}
		this.params.BgCol1[3] = 0;
		this.params.BgCol2[3] = 0;
	}
	
	Run() {
		requestAnimationFrame(this.Animate);
	}
	
	Animate = (time) => {
		var gl = this.gl;
		var loc = this.locs;
		var par = this.params;
		var program = this.program;
		
		gl.clear(gl.COLOR_BUFFER_BIT);
		
		gl.useProgram(program);

		program.vertexPosAttrib = gl.getAttribLocation(program, 'pos');
		
		gl.enableVertexAttribArray(program.vertexPosAttrib);
		gl.vertexAttribPointer(program.vertexPosAttrib, 2, gl.FLOAT, false, 0, 0);
		
		var c = this.canvas;
		var aspect = c.offsetWidth/c.offsetHeight;
		
		gl.uniform1f(loc.Time, time * 0.001);
		gl.uniform1f(loc.Aspect, aspect);
		gl.uniform2f(loc.Res, c.offsetWidth, c.offsetHeight);
		gl.uniform4fv(loc.Mouse, chimp.mouse);
		
		gl.uniform4fv(loc.Spiral1, par.Spiral1);
		gl.uniform4fv(loc.Spiral2, par.Spiral2);
		
		gl.uniform4fv(loc.Type, par.Type);
		gl.uniform4fv(loc.Col, par.Col);
		gl.uniform4fv(loc.Col2, par.Col2);
		
		gl.uniform4fv(loc.BgCol1, par.BgCol1);
		gl.uniform4fv(loc.BgCol2, par.BgCol2);
		
		gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
		
		requestAnimationFrame(this.Animate);
	}
}