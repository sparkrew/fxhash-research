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
var gl = c.getContext('experimental-webgl',{preserveDrawingBuffer:true});

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

const locAnt1 = gl.getUniformLocation(program, "iAnt1");
const locAnt2 = gl.getUniformLocation(program, "iAnt2");
const locAspect = gl.getUniformLocation(program, "iAspect");
const locBody = gl.getUniformLocation(program, "iBody");
const locCol1 = gl.getUniformLocation(program, "iCol1");
const locCol2 = gl.getUniformLocation(program, "iCol2");
const locDetail = gl.getUniformLocation(program, "iDetail");
const locGlobal = gl.getUniformLocation(program, "iGlobal");
const locN1 = gl.getUniformLocation(program, "iN1");
const locN2 = gl.getUniformLocation(program, "iN2");
const locN3 = gl.getUniformLocation(program, "iN3");
const locPattern = gl.getUniformLocation(program, "iPattern");
const locRes = gl.getUniformLocation(program, "iRes");
const locShape = gl.getUniformLocation(program, "iShape");
const locSpecial = gl.getUniformLocation(program, "iSpecial");
const locSuper = gl.getUniformLocation(program, "iSuper");
const locTime = gl.getUniformLocation(program, "iTime");

var iAnt1 = [fxrand(), fxrand(), fxrand(), fxrand()];
var iAnt2 = [fxrand(), fxrand(), fxrand(), fxrand()];
var iBody =[fxrand(), fxrand(), fxrand(), fxrand()];
var iCol1 = [fxrand(), fxrand(), fxrand(), fxrand()];
var iCol2 = [fxrand(), fxrand(), fxrand(), fxrand()];
var iDetail = [fxrand(), fxrand(), fxrand(), fxrand()];
var iGlobal = [fxrand(), fxrand(), fxrand(), fxrand()];
var iN1 = [fxrand(), fxrand(), fxrand(), fxrand()];
var iN2 = [fxrand(), fxrand(), fxrand(), fxrand()];
var iN3 = [fxrand(), fxrand(), fxrand(), fxrand()];
var iPattern = [fxrand(), fxrand(), fxrand(), fxrand()];
var iShape =[fxrand(), fxrand(), fxrand(), fxrand()];
var iSpecial = [fxrand(), fxrand(), fxrand(), fxrand()];
var iSuper = [fxrand(), fxrand(), fxrand(), fxrand()];

function Render(time) {
	gl.useProgram(program);

	program.vertexPosAttrib = gl.getAttribLocation(program, 'pos');
	
	gl.enableVertexAttribArray(program.vertexPosAttrib);
	gl.vertexAttribPointer(program.vertexPosAttrib, 2, gl.FLOAT, false, 0, 0);
	
	var aspect = c.offsetWidth/c.offsetHeight;
	
	gl.uniform4fv(locAnt1, iAnt1);
	gl.uniform4fv(locAnt2, iAnt2);
	gl.uniform1f(locAspect, aspect);
	gl.uniform4fv(locBody, iBody);
	gl.uniform4fv(locCol1, iCol1);
	gl.uniform4fv(locCol2, iCol2);
	gl.uniform4fv(locDetail, iDetail);
	gl.uniform4fv(locGlobal, iGlobal);
	gl.uniform4fv(locN1, iN1);
	gl.uniform4fv(locN2, iN2);
	gl.uniform4fv(locN3, iN3);
	gl.uniform4fv(locPattern, iPattern);
	gl.uniform2f(locRes, c.offsetWidth, c.offsetHeight);
	gl.uniform4fv(locShape, iShape);
	gl.uniform4fv(locSpecial, iSpecial);
	gl.uniform4fv(locSuper, iSuper);
	gl.uniform1f(locTime, time * 0.001);
	
	gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
	
	requestAnimationFrame(Render);
}

requestAnimationFrame(Render);

function GetColorString(col) {
	var colors = {
		"Onyx":[0,0,0], "Cobalt":[0,0,1], "Emerald":[0,1,0],  "Violet":[1,0,1], "Ruby":[1,0,0], "Yellow":[1,1,0], "Vermillion":[1,0.5,0], "Turquoise":[0,1,1], "Pearl":[1,1,1], 
		"Azure":[0.5,0.5,1], "Lime":[0.5,1,0.5], "Rose":[1,0.5,0.5], "Gold":[1,1,0.5], "Honey":[1,0.8,0], "Aquamarine":[0.5,1,1],
		"Saphire":[0,0,0.5], "Jade":[0,0.5,0], "Garnet":[0.5,0,0], "Ochre":[0.5,0.5,0], "Amber":[0.5, 0.25,0], "Teal":[0,0.5,0.5]
	}
	var minDist = 10
	var output = "";
	
	for (const [key, v] of Object.entries(colors)) {
	  var red = v[0]-col[0], green = v[1]-col[1], blue = v[2]-col[2];
	  var dist = red*red + green*green + blue*blue;
	  if(dist<minDist) {
		minDist=dist;
		output = key;
	  }
	}
	return output;
}

function GetColorFeature() {
	var col1 = GetColorString(iCol1);
	var col2 = GetColorString(iCol2);
	
	return col1==col2 ? col1 : col1 + " " + col2;
}

window.$fxhashFeatures = {
   "Colors": GetColorFeature(),
   "Body": (iBody[3]<0.3 ? "Fat" : iBody[3]<0.6 ? "Medium" : "Skinny")+(iBody[2]<0.2?" Spotted":"")+(iSuper[1]>.99?((iSuper[2]<.1?" Saphire":iSuper[2]<.4?" Emerald":" Ruby")+" Laser Eyes"):""),
   "Wings":iSpecial[3]<.1?"Ragged":"Smooth"+(iSuper[0]<0.01?" Transparent":"")+(iSpecial[2]<0.1 || iSpecial[1]<0.1?" Ocelli":""),
   "Antennae":(iAnt1[0]<.3?"Short":iAnt1[0]<.6?"Medium":"Long") + " " + (iAnt1[3]<.3?"Segmented":iAnt1[3]<.6?"Tipped":"Smooth") + (iAnt1[2]>.8?" Curled":"")
}

document.addEventListener("keypress", function onPress(event) {
    if (event.key === "s") {
         let downloadLink = document.createElement('a');
		downloadLink.setAttribute('download', 'Vlinder.png');
		let canvas = document.getElementById('shaderCanvas');
		canvas.toBlob(function(blob) {
		  let url = URL.createObjectURL(blob);
		  downloadLink.setAttribute('href', url);
		  downloadLink.click();
		});
		console.log("Image Captured!");
    }
});