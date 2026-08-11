// note about the fxrand() function 
// when the "fxhash" is always the same, it will generate the same sequence of
// pseudo random numbers, always

//----------------------
// defining features
//----------------------
// You can define some token features by populating the $fxhashFeatures property
// of the window object.
// More about it in the guide, section features:
// [https://fxhash.xyz/articles/guide-mint-generative-token#features]
//

var c = document.getElementById('shaderCanvas');
var gl = c.getContext('experimental-webgl');

window.onerror = function(msg, url, lineno) {
   alert(url + '(' + lineno + '): ' + msg);
}
 
function createShader(str, type) {
   var shader = gl.createShader(type);
   gl.shaderSource(shader, str);
   gl.compileShader(shader);
   
   if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
	   throw gl.getShaderInfoLog(shader);
   }
 
   return shader;
}

function createProgram(vstr, fstr) {
   var program = gl.createProgram();
   var vshader = createShader(vstr, gl.VERTEX_SHADER);
   var fshader = createShader(fstr, gl.FRAGMENT_SHADER);
   gl.attachShader(program, vshader);
   gl.attachShader(program, fshader);
   gl.linkProgram(program);
   
   if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
     throw gl.getProgramInfoLog(program);
   }
   
   return program;
 }

gl.clearColor(0,0,0.8,1);
gl.clear(gl.COLOR_BUFFER_BIT);

var vertexPosBuffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, vertexPosBuffer);

var vertices = [-1, -1, 1, -1, -1, 1, 1, 1];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

var vs = `attribute vec2 pos;
 varying vec2 iUv;
 void main() {iUv = pos*.5;gl_Position = vec4(pos, 0, 1);}`;
	 

var fs = document.getElementById('fshader').textContent;
 
var program = createProgram(vs,fs);


const locRes = gl.getUniformLocation(program, "iRes");
const locTime = gl.getUniformLocation(program, "iTime");



function Render(time) {
	gl.useProgram(program);

	program.vertexPosAttrib = gl.getAttribLocation(program, 'pos');
	
	gl.enableVertexAttribArray(program.vertexPosAttrib);
	gl.vertexAttribPointer(program.vertexPosAttrib, 2, gl.FLOAT, false, 0, 0);
	
	var aspect = c.offsetWidth/c.offsetHeight;
	

	gl.uniform2f(locRes, c.offsetWidth, c.offsetHeight);
	gl.uniform1f(locTime, time * 0.001);
	
	gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
	
	requestAnimationFrame(Render);
}

requestAnimationFrame(Render);

