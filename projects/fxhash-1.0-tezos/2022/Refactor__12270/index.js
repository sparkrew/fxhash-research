/* Keep Creating generative art token by artist Robert Matheson of Newberry, SC www.RobertMatheson.com - If you're reading this code then you're likely an artist or engineer interested in exploring generative art. I wish you all the success in the world (and in the metaverse ;) */

//var randomizer = Math.round(fxrand() * 10);
var randomizer = Math.round(fxrand() * 10);
var fxNum = fxrand();

const rgbArray1 = ["100|100|0","100|0|0","100|75|80","100|65|0","0|100|100","50|100|0","0|100|0","100|39|28","100|0|100","0|0|100"];
const rgbArray2 = ["33|42|18","94|87|80","18|31|31","37|62|63","100|89|71","82|71|55","86|86|86","86|86|86","82|71|55","100|94|96","18|31|31"];
const RareArray = ["0|0|255","220|20|60","250|235|215","127|255|212","0|0|0","127|255|0","255|127|80","0|255|255","255|140|0","255|99|71"];
const BorderArray = ["33|42|18","94|87|80","18|31|31","37|62|63","100|89|71","82|71|55","86|86|86","86|86|86","82|71|55","100|94|96","18|31|31"];
const rgbSet1 = rgbArray1[Math.round(fxNum*(rgbArray1.length-1))].split("|");
const rgbSet2 = rgbArray2[Math.round(fxNum*(rgbArray2.length-1))].split("|");
const rareSet = RareArray[Math.round(fxNum*(RareArray.length-1))].split("|");
const borderSet = BorderArray[Math.round(fxNum*(BorderArray.length-1))].split("|");

if (fxNum >= 0.3) { //portrait
	var cHeight = window.innerHeight; //canvas height
	var cWidth = cHeight/1.618; //canvas width
	var cMargin = cWidth*0.12;
	var cBorder = cWidth*0.04;
	var signatureYpos = cHeight*0.94;
	var signatureXpos = cWidth*0.9;
	var signatureDiameter = cWidth*0.02;
	var variationOrientation = "Portrait"
	}	
else { //landscape
	var cWidth = window.innerWidth; //canvas width
	var cHeight = cWidth/1.618; //canvas width
	var cMargin = cHeight*0.12;
	var cBorder = cHeight*0.04;
	var signatureYpos = cHeight*0.9;
	var signatureXpos = cWidth*0.94;
	var signatureDiameter = cHeight*0.02;
	var variationOrientation = "Landscape"
}
 
function setVariations(variationOrientation,variationTheme,variationNoise,variationAmbiance,variationEmotion,variationBorder) {
	window.$fxhashFeatures = {
		"Orientation": variationOrientation,
		"Theme": variationTheme,
		"Noise": variationNoise,
		"Ambiance": variationAmbiance,
		"Emotion": variationEmotion,		
		"Border": String(variationBorder)
	}

}

function setup() { //shock the eye with random bg color
	createCanvas(cWidth, cHeight, SVG);
	background(Math.ceil(fxrand()*255),Math.ceil(fxrand()*255),Math.ceil(fxrand()*255));
	
	// set fxhash variations
	if (randomizer >= 5) { //circle noise with rect overlays and stroked circles/ellipses
		var variationTheme = "Ethereal";
		var variationNoise = "Speckture";

		if (fxNum >= 0.7) {
			var variationAmbiance = "Intangible"; 
		} else if (fxNum <= 0.4) {
			var variationAmbiance = "Immaterial";
		} else {
			var variationAmbiance = "Curious";
		}
			
		if (fxNum >= 0.3) {	
			var variationEmotion = "Hyped"; 
		} else {
			var variationEmotion = "Calm"; 
		}
		
	}
	
	if (randomizer == 4) { //circle or squares with wandering quads
		var variationTheme = "Emergent";
		var variationNoise = "Skratch";
		
		if (fxNum >= 0.5){
			var variationEmotion = "Hyped"; 
			var variationAmbiance = "Blast"; 
		} else {
			var variationEmotion = "Hyped"; 
			var variationAmbiance = "Blokt"; 
		}				
	}
	if (randomizer <= 3) { //circle noise with vertex drawing overlay
		
		var variationTheme = "Serene";
		var variationNoise = "Speckture";
	
			if (fxNum >= 0.1) {
				if (randomizer % 2 == 0){
						var variationAmbiance = "Restrained"; 
						var variationEmotion = "Hopeful"; 
				} else {
						var variationAmbiance = "Closed"; 
						var variationEmotion = "Restrained"; 
				}
				
			} else {
				var variationEmotion = "Meditative"; 
				var variationAmbiance = "Vast"; 		
			}
			
	}
	
	setVariations(variationOrientation,variationTheme,variationNoise,variationAmbiance,variationEmotion,borderSet);
} 


function draw() {
	
	if (randomizer >= 5) { //circle noise with rect overlays and stroked circles/ellipses
		noiseRandom(5000,Math.ceil(fxrand()*255),Math.ceil(fxrand()*255),Math.ceil(fxrand()*255),10,Math.ceil(fxrand()*255),Math.ceil(fxrand()*255),Math.ceil(fxrand()*255),0,1,"circle",Math.ceil(cWidth*0.02));
		
		translate(-(Math.ceil(cWidth/4)),-(Math.ceil(cHeight/4))); //25% negative offset
		
		for (let b=0; b<10; b++) {
			
			if (fxrand() >= 0.3) {
				fillR = rgbSet2[0];
				fillG = rgbSet2[1];
				fillB = rgbSet2[2];
				fillOpacity = 40;
				strokeR = rgbSet2[0];
				strokeG = rgbSet2[1];
				strokeB = rgbSet2[2];
			} else {
				fillR = rgbSet1[0];
				fillG = rgbSet1[1];
				fillB = rgbSet1[2];
				fillOpacity = 40;
				strokeR = rgbSet2[0];
				strokeG = rgbSet2[1];
				strokeB = rgbSet2[2];
			} 
			if (fxNum >= 0.7) {
				shapeToUse = "rect";
				translate((Math.ceil(cWidth/4)),(Math.ceil(cHeight/4)));
			} else if (fxrand() <= 0.4) {
				shapeToUse = "circle";
				translate((Math.ceil(cWidth/2)),(Math.ceil(cHeight/2)));
			} else {
				shapeToUse = "ellipse";
				translate((Math.ceil(cWidth/2)),(Math.ceil(cHeight/2)));
			}
			noiseRandom(15,fillR,fillG,fillB,fillOpacity,strokeR,strokeG,strokeB,0,0,shapeToUse,Math.ceil(fxrand()*cHeight));
			if (shapeToUse === "rect") {
				translate(-(Math.ceil(cWidth/4)),-(Math.ceil(cHeight/4)));
			} else if (shapeToUse === "circle") {
				translate(-(Math.ceil(cWidth/2)),-(Math.ceil(cHeight/2)));
			} else {
				translate(-(Math.ceil(cWidth/2)),-(Math.ceil(cHeight/2)));
			}
			
		}
		if (fxNum >= 0.3) {	
			strokeR = rareSet[0];
			strokeG = rareSet[1];
			strokeB = rareSet[2];
			fillOpacity = 25;
		} else {
			strokeR = 0;
			strokeG = 0;
			strokeB = 0;
			fillR = borderSet[0];
			fillG = borderSet[1];
			fillB = borderSet[2];
			fillOpacity = 50;
		}
		noiseRandom(30,fillR,fillG,fillB,fillOpacity,strokeR,strokeG,strokeB,200,Math.ceil(cWidth*0.001),shapeToUse,Math.ceil((cHeight*2)*fxrand()));
		translate((Math.ceil(cWidth/4)),(Math.ceil(cHeight/4)));//reset offset
	}
	
	if (randomizer == 4) { //circle or squares with wandering quads

		noiseRandom(5000,Math.ceil(fxrand()*255),Math.ceil(fxrand()*255),Math.ceil(fxrand()*255),10,Math.ceil(fxrand()*255),Math.ceil(fxrand()*255),Math.ceil(fxrand()*255),0,1,"rect",Math.ceil(cWidth*0.1));
						
		for (let f=0; f<Math.ceil(200+(fxrand()*1000)); f++) {
							
			if (fxNum >= 0.5){
				stroke(rareSet[0],rareSet[1],rareSet[2],80);
				fill(borderSet[0],borderSet[1],borderSet[2],150);
				if (variationOrientation === "Portrait") {
					circle(fxrand()*cWidth,fxrand()*cHeight,Math.ceil((fxrand()*cHeight))/10);
				} else {
					circle(fxrand()*cWidth,fxrand()*cHeight,Math.ceil((fxrand()*cWidth))/10);
				}
			} else {
				noStroke(0);
				fill(borderSet[0],borderSet[1],borderSet[2],200);
				if (variationOrientation === "Portrait") {
					rect(fxrand()*cWidth,fxrand()*cHeight,Math.ceil((fxrand()*cHeight))/10);
				} else {
					rect(fxrand()*cWidth,fxrand()*cHeight,Math.ceil((fxrand()*cWidth))/10);
				}
			}				
			
			noFill(0);
			stroke(rareSet[0],rareSet[1],rareSet[2],90);		
			quad(cMargin+Math.floor((cWidth-(cMargin*2))*fxrand()),cMargin+Math.floor((cHeight-(cMargin*2))*fxrand()),cMargin+Math.floor((cWidth-(cMargin*2))*fxrand()),cMargin+Math.floor((cHeight-(cMargin*2))*fxrand()),cMargin+Math.floor((cWidth-(cMargin*2))*fxrand()),cMargin+Math.floor((cHeight-(cMargin*2))*fxrand()),cMargin+Math.floor((cWidth-(cMargin*2))*fxrand()),cMargin+Math.floor((cHeight-(cMargin*2))*fxrand()));
			
		}
	}
	if (randomizer <= 3) { //circle noise with vertex drawing overlay
		
		noiseRandom(5000,Math.ceil(fxrand()*255),Math.ceil(fxrand()*255),Math.ceil(fxrand()*255),10,Math.ceil(fxrand()*255),Math.ceil(fxrand()*255),Math.ceil(fxrand()*255),0,0,"circle",Math.ceil(cWidth*0.02)); 
		
		for (let c=0; c<40; c++) {
			noiseRandom(1,Math.ceil(fxrand()*255),Math.ceil(fxrand()*255),Math.ceil(fxrand()*255),40,Math.ceil(fxrand()*255),Math.ceil(fxrand()*255),Math.ceil(fxrand()*255),0,0,"circle",cWidth*1.5);
		}
	
			if (fxNum >= 0.1) {
				if (randomizer % 2 == 0){
						fill(255,255,255,80);
						stroke(borderSet[0],borderSet[1],borderSet[2],80);
						strokeWeight(Math.ceil(cWidth*0.001));
				} else {
						fill(0,0,0,60);
						stroke(0,0,0,80);
						strokeWeight(Math.ceil(cWidth*0.001));
				}
				vtxStartOriginX=Math.floor((cMargin+(cWidth-(cMargin*2))*fxrand()));
				vtxStartOriginY=Math.floor((cMargin+(cHeight-(cMargin*2))*fxrand()));
				beginShape();
				vertex(vtxStartOriginX,vtxStartOriginY);
				
				// Specifying all the vertices
				for (let d=0; d<Math.ceil((fxrand()*150)+5); d++) {
					vertex(cMargin+Math.floor((cWidth-(cMargin*2))*fxrand()),cMargin+Math.floor((cHeight-(cMargin*2))*fxrand()));
				} 

				vertex(vtxStartOriginX,vtxStartOriginY);
				endShape();
				
			}
			
	}
	
	var drawBorderColorR = borderSet[0];
	var drawBorderColorG = borderSet[1];
	var drawBorderColorB = borderSet[2];
	
	drawBorder(drawBorderColorR,drawBorderColorG,drawBorderColorB,255,cBorder,cWidth,cHeight);
	
	//sign it with red dot - a throwback to my first genart project on fxhash
	fill('red');
	circle(signatureXpos, signatureYpos,signatureDiameter);
	keyReleased();
	noLoop();
	
}

//noise functions

function noiseRandom(noiseCycles,noiseFillR,noiseFillG,noiseFillB,noiseFillOpacity,noiseStrokeR,noiseStrokeG,noiseStrokeB,noiseStrokeOpacity,noiseStrokeWeight,noiseShape,noiseShapeMax) {
	
	for (let i=0; i<noiseCycles; i++) {
		
		fill(noiseFillR,noiseFillG,noiseFillB,noiseFillOpacity);
		stroke(noiseStrokeR,noiseStrokeG,noiseStrokeB,noiseStrokeOpacity);
		strokeWeight(noiseStrokeWeight);
	
		if (noiseShape === "circle") {
			circle(fxrand()*cWidth,fxrand()*cHeight,Math.ceil(fxrand()*noiseShapeMax));
		}
		if (noiseShape === "ellipse") {
			ellipse(fxrand()*cWidth,fxrand()*cHeight,fxrand()*noiseShapeMax,Math.ceil(fxrand()*noiseShapeMax));
		}
		if (noiseShape === "rect") {
			rect(Math.ceil(fxrand()*cWidth),Math.ceil(fxrand()*cHeight),Math.ceil(fxrand()*noiseShapeMax),Math.ceil(fxrand()*noiseShapeMax));
		}
		if (noiseShape === "quad") {
			quad(fxrand()*cWidth,fxrand()*cHeight,fxrand()*cWidth,fxrand()*cHeight,fxrand()*cWidth,fxrand()*cHeight,fxrand()*cWidth,fxrand()*cHeight);
		}
		noStroke();
		noFill();
		
	}
}

function drawBorder(borderFillR,borderFillG,borderFillB,borderFillOpacity,borderWidth,canvasWidth,canvasHeight) {

	fill(borderFillR,borderFillG,borderFillB,borderFillOpacity)
	noStroke();
	rect(0,0,canvasWidth,borderWidth); //top border
	rect(0,0,borderWidth,canvasHeight); //left border
	rect(canvasWidth-borderWidth,0,borderWidth,canvasHeight); //left border
	rect(0,canvasHeight-borderWidth,canvasWidth,borderWidth); //bottom border

}

function keyReleased() {
    if (key == 's' || key == 'S') saveSVG(fxhash);
}

function saveSVG(filename) {
    save(filename + ".svg")
}



