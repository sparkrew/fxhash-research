//RushGushBlush by Todemashi - Nov 2022
//This project uses fx(stdio) by @alt_escapism
const TITLE = "rushgushblush";
const SIZES = {
	Portrait: ["Portrait", 2100, 3000],
	Square: ["Square", 2400, 2400],
	Landscape: ["Landscape", 3000, 2200]
};
//
let defW, defH, defR;
//### Features
//##########################################
//--- Define the format
let format = stdio.random("Format", SIZES);
defW = format[1];
defH = format[2];
defR = defW/defH;
//--- Define the steps
let direction = stdio.random("Direction", [1, 2, 3, 4]);
let directionTX = direction<=2?"->":"<-"
//--- Define the multiplier for perspective
let multGrid = stdio.random("Grid Multiplier", [1, 3, 5, 6]);
if(format[0]=="Landscape"){
	if(multGrid>6){
		multGrid = 6;
	}
}
//--- Define the noise level
let nLevel = stdio.random("Noise Level", [
	stdio.weight(5, 1),
	stdio.weight(30, 2),
	stdio.weight(30, 3),
	stdio.weight(30, 4),
	stdio.weight(5, 5)
]);
//--- Define the grid size
let gridSize = stdio.random("Rays", {
	Many: 300,
	Medium: 120,
	Few: 70
});
if(format[0]=="Landscape"){
	if(gridSize<200){
		gridSize = 300;
	}
}
if(format[0]=="Square"){
	if(gridSize<100){
		gridSize = 300;
	}
	if(multGrid>6){
		multGrid = 6;
	}
}
//--- Adjust noise level if gridSize is large
if(gridSize<=80 && nLevel<=3){
	nLevel = 4;
}
//--- Define the height of the fall
let stretchHPerc = stdio.random("Fall %", 30, 70, Math.floor);
let stretchPercTxt = stretchHPerc<40? "[-]": stretchHPerc<50? "[--]": stretchHPerc<60? "[---]":"[----]";
//
//Define palettes
const PALETTES = {
	Spectrum: stdio.weight(30, ["Spectrum", "#ffffff", "#000000"]),
	WB: stdio.weight(5, ["WB", "#dedede", "#4b4b4b", "#b5b5b5", "#dddddd", "#303030"]),
	BW: stdio.weight(5, ["BW", "#888888", "#333333", "#777777", "#444444", "#888888"]),
	Ultra: stdio.weight(5, ["Ultra", "#ea698b", "#c05299", "#822faf", "#4e148c", "#3d0564"]),
	HeatMap: stdio.weight(5, ["HeatMap", "#c1e7e0", "#4590a8", "#4b426b", "#c20e38"]),
	Lantern: stdio.weight(5, ["Lantern", "#ed3030", "#d4b28b", "#992f2f", "#420d0d", "#180303"]),
	Vexed: stdio.weight(5, ["Vexed", "#4f2572", "#7b2231", "#d62828", "#feab3f", "#eae2b7"]),
	Silk: stdio.weight(5, ["Silk", "#ffac81", "#ff928b", "#fec3a6", "#efe9ae", "#cdeac0"]),
	Anicra: stdio.weight(5, ["Anicra", "#202c39", "#283845", "#7dcfb6", "#dd6e42", "#f29559"]),
	Zolfo: stdio.weight(5, ["Zolfo", "#8cb369", "#f4e285", "#f4a259", "#5b8e7d", "#bc4b51"]),
	Lime: stdio.weight(5, ["Lime", "#132a13", "#31572c", "#4f772d", "#90a955", "#ecf39e"]),
	Egadi: stdio.weight(5, ["Egadi", "#0d1b2a", "#0d3b66", "#355983", "#778da9", "#e0e1dd"]),
	Rust: stdio.weight(5, ["Rust", "#f3e9dc", "#c08552", "#5e3023", "#895737", "#dab49d"]),
	Void: stdio.weight(5, ["Void", "#bce784", "#5dd39e", "#348aa7", "#525174", "#513b56"]),
	Vibe: stdio.weight(5, ["Vibe", "#faa275", "#ff8c61", "#ce6a85", "#666a86", "#324376"]),
	Danaus: stdio.weight(5, ["Danaus", "#fffcf2", "#ccc5b9", "#403d39", "#252422", "#eb5e28"]),
	Socks: stdio.weight(5, ["Socks", "#959068", "#736f5f", "#544a66", "#515a75", "#6cb2bc"]),
};
let palette = stdio.random("Palette", PALETTES);
//--- Define the stretching of the texture
let stretchTexture = stdio.random("Falling Lines", {
	Yes: true,
	No: false
});
//--- Force falling lines for certain palettes
if(!stretchTexture){
	if(palette[0]=="BW" || palette[0]=="WB" || palette[0]=="Void"){
		stretchTexture = true;
	}
}
//--- Define a dummy value
let egg = stdio.random()>0.965? "♥ (^O^) ♥":"(•_•)";
//--- Set the features
window.$fxhashFeatures = {
	"Format": format[0],
	"Palette": palette[0],
	"Noise Level": nLevel,
	"Fall %": stretchPercTxt,
	"Direction": directionTX,
	"?": egg
}
//
console.log(window.$fxhashFeatures);
let bc, bcT, bcShadowH, bcShadowV, canvasW, canvasH, nSeed, cnv, col, darkGrainShader, lightGrainShader, startC, midC1, midC2, endC, minC, maxC, twoPassages, rangeCTot, rangeCFract, maxSectors, bcPreview;
let xSteps = [];
let ySteps = [];
const gridW = Math.ceil(defW/gridSize);
let nDeltaCol = 300;
//
class Random {
  random_dec() { return fxrand();}
  random_num(a, b) { return a+(b-a)*this.random_dec();}
  random_int(a, b) { return Math.floor(this.random_num(a, b+1));}
}
const R = new Random()
//
function setup() {
  noLoop();
  canvasW = window.innerWidth;
  canvasH = window.innerHeight;
  if(canvasW/canvasH > defR){
    canvasW = Math.round(canvasH*defR);
  }else{
    canvasH = Math.round(canvasW/defR);
  }
  nSeed = R.random_int(0,100000000);
  noiseSeed(nSeed);
  nLevel+=1;
  cnv = createCanvas(canvasW, canvasH);
  bc = createGraphics(defW, defH);
  bcT = createGraphics(defW, defH);
  bcPreview = createGraphics(defW/2, defH/2);
  bcPreview.id("previewcanvas");
  //
  defineColors();
  textureOverlay();
  createShadows();
  //
  drawOnBuffer();
  //
  generatePreview();
  //fxpreview();
}

function draw() {
	image(bc, 0, 0, canvasW, canvasH);
}

function drawOnBuffer(){
	rangeCTot = 256;
	maxSectors = palette.length-2;
	rangeCFract = Math.ceil(rangeCTot/maxSectors);
	generateGrid();
	if(twoPassages){
		rangeCTot = maxC-minC;
		rangeCFract = Math.ceil(rangeCTot/maxSectors);
		rangeCFract = Math.ceil(rangeCTot/maxSectors);
		generateGrid();
	}
	
	let bcDummy = createGraphics(defW, defH);
	bcDummy.image(bc, 0, 0, defW, defH);
	bc.blendMode(OVERLAY);
	bc.image(bcDummy, 0, 0, defW, defH);
	if(palette[0]=="Spectrum"){
		bc.image(bcDummy, 0, 0, defW, defH);
	}
	if(stretchTexture){
		bc.image(bcT, 0, 0, defW, defH);
	}
	//Stretch
	let startStretchPerc = R.random_int(18, 100-stretchHPerc-8);	
	let startStretchY = Math.floor(defH*(startStretchPerc/100));
	let stretchH = Math.floor(defH*(stretchHPerc/100));
	bcDummy.background(0);
	bcDummy.image(bc, 0, 0, defW, startStretchY, 0, 0, defW, startStretchY);
	bcDummy.image(bc, 0, startStretchY, defW, stretchH, 0, startStretchY, defW, 1);
	bcDummy.image(bc, 0, startStretchY+stretchH,defW, defH-stretchH-startStretchY,0, startStretchY, defW, defH-startStretchY);
	bc.blendMode(BLEND);
	bc.image(bcDummy, 0, 0, defW, defH);
	if(!stretchTexture){
		bc.blendMode(OVERLAY);
		bc.image(bcT, 0, 0, defW, defH);
	}
	bc.blendMode(MULTIPLY);
	bc.fill(235);
	bc.noStroke();
	bc.rect(0, startStretchY, defW, stretchH);
	addShadows();
	if(palette[0]=="Socks" || palette[0]=="Spectrum"){
		addGrainPixels(18);
	}else if(palette[0]=="Silk"){
		addGrainPixels(32);
	}else{
		addGrainPixels(25);
	}
	image(bc, 0, 0, canvasW, canvasH);
}

function generateGrid(){
	let nInc = nLevel/100;
	let xoff = 0;
	let yoffStart = 1000;
	let customGridW = gridW;
	let mult = multGrid;
	mult = 1+mult/100;
	bc.push();
	bc.noStroke();
	bc.background(0);
		if(direction == 1){
			for(let x=0;x<=defW+customGridW;x+=customGridW){
				customGridW = Math.ceil(customGridW*mult);
				let yoff = yoffStart;
				for(let y=0; y<=defH; y+=customGridW){
					generateColor(xoff, yoff);
					bc.fill(col);
					bc.rect(x, y, customGridW, customGridW);
					yoff+=nInc;
				}
				xSteps.push(x);
				xoff+=nInc;
			}
		}
	    if(direction==2){
	      for(let y=0; y<=defH+customGridW; y+=customGridW){
	        customGridW = Math.ceil(customGridW*mult);
	        let yoff = yoffStart;
	        for(let x=0; x<=defW+customGridW; x+=customGridW){
	          generateColor(xoff, yoff);
			bc.fill(col);
			bc.rect(x, y, customGridW, customGridW);
	          yoff += nInc;
	        }
			ySteps.push(y);
	        xoff += nInc;
	      }
	    }
	    if(direction==3){
	      for(let x=defW; x>-customGridW; x-=customGridW){
	        customGridW = Math.ceil(customGridW*mult);
	        let yoff = yoffStart;
	        for(let y=0; y<=defH+customGridW; y+=customGridW){
	          generateColor(xoff, yoff);
			bc.fill(col);
			bc.rect(x, y, customGridW, customGridW);
	          yoff += nInc;
	        }
			xSteps.push(x+customGridW);
	        xoff += nInc;
	      }
	    }
	    if(direction==4){
	      for(let y=0; y<=defH+customGridW; y+=customGridW){
	        customGridW = Math.ceil(customGridW*mult);
	        let yoff = yoffStart;
	        for(let x=defW; x>-customGridW; x-=customGridW){
	          generateColor(xoff, yoff);
			bc.fill(col);
			bc.rect(x, y, customGridW, customGridW);
	          yoff += nInc;
	        }
			ySteps.push(y);
	        xoff += nInc;
	      }
	    }
	bc.pop();
}

function defineColors(){
  if(palette[0]!="Spectrum"){
    startC = color(palette[1]);
    midC1 = color(palette[2]);
	midC2 = color(palette[3]);
    endC = color(palette[4]);
	minC = 300;
	maxC = -10;
	twoPassages = true;
  }else{
  	twoPassages = false;
  }
}

function generateColor(xoff, yoff){
	let c1 = Math.floor(noise(xoff, yoff)*256);
	let c2 = Math.floor(noise(xoff+nDeltaCol, yoff+nDeltaCol)*256);
	let c3 = Math.floor(noise(xoff+(nDeltaCol*2), yoff+(nDeltaCol*3))*256);
	if(palette[0]=="Spectrum"){
		col = color(c1, c2, c3);
	}else{
		let c = Math.floor(0.299*c1 + 0.587*c2 + 0.114*c3);
		if(c<minC){
			minC = c;
		}
		if(c>maxC){
			maxC=c;
		}
		
		let sector = Math.floor((c-minC)/rangeCFract);
		if(sector>=maxSectors){
			sector=maxSectors-1;
		}
		let colS = color(palette[sector+1]);
		let colE = color(palette[sector+2]);
		let cM = map(c, minC+(sector*rangeCFract), minC+((sector+1)*rangeCFract), 0, 1);
		col = lerpColor(colS, colE, cM);
		
	}
}

function textureOverlay(){
	bcT.strokeWeight(1);
	bcT.stroke(255, 3);
	bcT.noFill();
	let d = 10;
	for(x=0; x<=defW; x+=d){
		for(y=0; y<=defH; y+=d){
			bcT.line(x, y, defW+x, defW+y);
			bcT.line(x, y, x-defW, y+defW);
		}
	}
}

function createShadows(){
	let paletteName = palette[0];
	let sW = 40;
	let sC = 225;
	if(paletteName=="Ocean" || paletteName=="Socks"){
		sC = 230;
	}
	let stepC = Math.floor(255 - sC)/sW;
	if(stepC<1){
		stepC = 1;
	}
	//
	bcShadowV = createGraphics(sW, defH);
	bcShadowV.fill(sC);
	bcShadowV.noStroke();
	for(let i=0;i<sW;i++){
		bcShadowV.rect(i,0,i+1,defH)
		sC+=stepC;
		bcShadowV.fill(sC);
	}
	sC = 200;
	if(paletteName=="Ocean" || paletteName=="Socks" || paletteName=="Vibe" || paletteName=="BW"){
		sC = 230;
	}
	if(paletteName=="Vibe"){
		sC = 215;
	}
	stepC = Math.floor(255 - sC)/sW;
	if(stepC<1){
		stepC = 1;
	}
	//
	bcShadowH = createGraphics(defW, sW);
	bcShadowH.fill(sC);
	bcShadowH.noStroke();
	for(let i=0;i<sW;i++){
		bcShadowH.rect(0,i,defW,i+1)
		sC+=stepC;
		bcShadowH.fill(sC);
	}
}

function addShadows(){
	let nShadows = R.random_int(0, 5);
	bc.push();
	if(palette[0]=="Danaus"){
		bc.blendMode(MULTIPLY);
	}else{
		bc.blendMode(BURN);
	}
	for (let i=0; i<nShadows; i++){
		let xIndex = R.random_int(2, xSteps.length);
		bc.image(bcShadowV, xSteps[xIndex], 0);
	}
	for (let i=0; i<nShadows; i++){
		let yIndex = R.random_int(2, ySteps.length);
		bc.image(bcShadowH, 0, ySteps[yIndex]);
	}
	bc.pop();
}

function addGrainPixels(amount) {
	
    bc.loadPixels();
    const d = pixelDensity();
    const pixelsCount = 4 * (defW * d) * (defH * d);
    for (let i = 0; i < pixelsCount; i += 4) {
        const grainAmount = R.random_int(-amount, amount);
        bc.pixels[i] = bc.pixels[i] + grainAmount;
        bc.pixels[i+1] = bc.pixels[i+1] + grainAmount;
        bc.pixels[i+2] = bc.pixels[i+2] + grainAmount;
    }
    bc.updatePixels();
	bc.push();
	if(palette[0]=="Socks"){
		bc.fill(140);
	}else{
		bc.fill(155);
	}
	bc.blendMode(OVERLAY);
	bc.rect(0,0,defW,defH);
	bc.pop();
}

function generatePreview(){
	bcPreview.image(bc, 0, 0, defW/2, defH/2);
	fxpreview();
}

function windowResized() {
  canvasW = window.innerWidth;
  canvasH = window.innerHeight;
  if(canvasW/canvasH > defR){
    canvasW = canvasH*defR;
  }else{
    canvasH = canvasW/defR;
  }
  resizeCanvas(canvasW, canvasH);
}

function keyTyped() {
  if (key === 's') {
    let fileName = TITLE+"-"+fxhash+"---todemashi.png";
    bc.save(fileName);
  }
  if (key === 'e') {
	  alert(egg);
  }
}