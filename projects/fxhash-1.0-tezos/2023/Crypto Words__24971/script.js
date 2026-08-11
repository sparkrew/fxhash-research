let fxTextSize;
let numberShapes = 0;

let wordsBullish = Array(
	'hodl',
	'BTFD',
	'wagmi',
	'wgmi',
	'gmi',
	'fomo',
	'ape',
	'gm',
	'GM',
	'moon',
	'LFG',
	'whale',
	'bullish',
	'diamondhands',
	'iykyk',
	'flippening',
	'degen',
	'ATH',
	'up only',
	'blue chip',
	'grail',
	'floor is lava',
	'boolish',
	'send it',
	'bula',
	'hsbaf'
);

let wordsBearish = Array(
	'fud',
	'i have overinvested by a lot',
	'f***',
	'fml',
	'rugged',
	'rug pull',
	'broke',
	'devs do something',
	'founder died during mint',
	'down only',
	'paperhands',
	'down bad',
	'rekt',
	'ngmi',
	'bagholder',
	'pump and dump',
	'bad price',
	'price go down',
	'nuke',
	'hfsp',
	'exit liquidity',
	'shitcoin',
	'vaporware',
	'dump it',
	'bearish',
	'bera',
	'straight to 0',
	'mcdonalds',
	'gtd',
);

let words = Array();

let outlook;
let randomOutlook = fxrand();

if (randomOutlook < 0.9) {
	outlook = 'Mixed';
	words = wordsBullish;
} else if (randomOutlook > 0.9 && randomOutlook < 0.95) {
	outlook = 'Bullish';
	words = wordsBullish;
} else {
	outlook = 'Bearish';
	words = wordsBearish;
}

let paletteChoice = fxrand();
let colorPalette = Array();
let neonPalette = Array();
let chosenPalette;
let paletteColor;

if (outlook === 'Bullish') {
	colorPalette = Array('#4E944F', '#003B00', '#008F11', '#00FF41');
	chosenPalette = 'Matrix';
} else if (outlook === 'Mixed') {

	if (paletteChoice > 0 && paletteChoice < 0.03) {
		colorPalette = Array('#D61355', '#F94A29', '#FCE22A', '#30E3DF');
		chosenPalette = 'CP33434';
	} else if (paletteChoice > 0.03 && paletteChoice < 0.05) {
		colorPalette = Array('#3DB2FF', '#FFEDDA', '#FFB830', '#FF2442');
		chosenPalette = 'BORW';
	} else if (paletteChoice > 0.05 && paletteChoice < 0.07) {
		colorPalette = Array('#2FC4B2', '#12947F', '#E71414', '#F17808'); //check
		chosenPalette = 'RTO';
	} else if (paletteChoice > 0.07 && paletteChoice < 0.1) {
		colorPalette = Array('#FF1700', '#FF8E00', '#FFE400', '#06FF00');
		chosenPalette = 'CP1';
	} else if (paletteChoice > 0.1 && paletteChoice < 0.15) {
		colorPalette = Array('#7FB77E', '#B1D7B4', '#F7F6DC', '#FFC090');
		chosenPalette = 'CP2';
	} else if (paletteChoice > 0.15 && paletteChoice < 0.2) {
		colorPalette = Array('#26001B', '#810034', '#FF005C', '#FFF600');
		chosenPalette = 'CP3';
	} else if (paletteChoice > 0.2 && paletteChoice < 0.25) {
		colorPalette = Array('#ff77aa', '#ff99cc', '#ffbbee', '#ff5588', '#ff3377');
		chosenPalette = 'Pink Shades';
	} else if (paletteChoice > 0.25 && paletteChoice < 0.3) {
		colorPalette = Array('#E9EFC0', '#B4E197', '#83BD75', '#4E944F');
		chosenPalette = 'CP5';
	} else if (paletteChoice > 0.3 && paletteChoice < 0.35) {
		colorPalette = Array('#FF7396', '#B9F8D3', '#FFFFDE', '#C499BA');
		chosenPalette = 'CP6';
	} else if (paletteChoice > 0.35 && paletteChoice < 0.4) {
		colorPalette = Array('#40DFEF', '#B9F8D3', '#FFFBE7', '#E78EA9');
		chosenPalette = 'CP7';
	} else if (paletteChoice > 0.4 && paletteChoice < 0.45) {
		colorPalette = Array('#EFFFFD', '#B8FFF9', '#85F4FF', '#42C2FF');
		chosenPalette = 'Iced Out';
	} else if (paletteChoice > 0.45 && paletteChoice < 0.5) {
		colorPalette = Array('#1B262C', '#0F4C75', '#ff006e', '#3282B8', '#BBE1FA');
		chosenPalette = 'CP9';
	} else if (paletteChoice > 0.5 && paletteChoice < 0.55) {
		colorPalette = Array('#3330E4', '#F637EC', '#FBB454', '#FAEA48');
		chosenPalette = 'CP10';
	} else if (paletteChoice > 0.55 && paletteChoice < 0.6) {
		colorPalette = Array('#f72585', '#7209b7', '#3a0ca3', '#4361ee', '#4cc9f0');
		chosenPalette = 'Neon Blue and Purple';
	} else if (paletteChoice > 0.6 && paletteChoice < 0.65) {
		colorPalette = Array('#51EAEA', '#FFFDE1', '#FF9D76', '#FB3569');
		chosenPalette = 'CP13';
	} else if (paletteChoice > 0.65 && paletteChoice < 0.68) {
		colorPalette = Array('#2192FF', '#38E54D', '#9CFF2E', '#FDFF00');
		chosenPalette = 'Blue Yellow Green';
	} else if (paletteChoice > 0.68 && paletteChoice < 0.69) {
		colorPalette = Array('#242424', '#3c3c3c', '#1e1e1e', '#111111', '#E900FF');
		chosenPalette = 'Neon Purple';
	} else if (paletteChoice > 0.7 && paletteChoice < 0.75) {
		colorPalette = Array('#3d3d3d', '#666666', '#aaaaaa', '#e9ecef');
		chosenPalette = 'B&W Monochrome';
	} else if (paletteChoice > 0.75 && paletteChoice < 0.8) {
		colorPalette = Array('#FE9801', '#F4EEC7', '#CCDA46', '#697C37');
		chosenPalette = 'CP11';
	} else if (paletteChoice > 0.8 && paletteChoice < 0.85) {
		colorPalette = Array('#4E944F', '#003B00', '#008F11', '#00FF41');
		chosenPalette = 'Matrix';
	} else if (paletteChoice > 0.85 && paletteChoice < 0.9) {
		colorPalette = Array('#00FFAB', '#14C38E', '#B8F1B0', '#E3FCBF');
		chosenPalette = 'Wintergreen';
	} else if (paletteChoice > 0.9 && paletteChoice < 0.92) {
		colorPalette = Array('#FFDF00', '#FFCC00', '#ECBD00', '#CC9900', '#B8860B');
		chosenPalette = 'Gold';
	} else if (paletteChoice > 0.92 && paletteChoice < 0.94) {
		colorPalette = Array('#F2CD5C', '#F2921D', '#ECBD00', '#A61F69');
		chosenPalette = 'ABC34343';
	}  else if (paletteChoice > 0.94 && paletteChoice < 0.96) {
		colorPalette = Array('#FF1E00', '#E8F9FD', '#E8F9FD', '#000000');
		chosenPalette = 'ABC34343SDFASDFSD';
	} else if (paletteChoice > 0.96 && paletteChoice < 0.98) {
		colorPalette = Array('#fc3035', '#ff8642', '#f6c03a', '#111111');
		chosenPalette = 'Guy Fieri Flames';
	} else {
		colorPalette = Array('#242424', '#3c3c3c', '#1e1e1e', '#111111');
		neonPalette = Array('#E900FF', '#06FF00', '#FF3131', '#1F51FF', '#FFF01F');
		neonColor = neonPalette[Math.floor(fxrand()*neonPalette.length)];
		chosenPalette = 'Dark Neon';
	}
	
} else if (outlook === 'Bearish') {
	colorPalette = Array('#000000', '#3D0000', '#950101', '#FF0000');
	chosenPalette = 'Rekt';
}

let customFont;

function preload(){
	
  let randomFont = fxrand();
  
  if (randomFont > 0.05 && randomFont < 0.1) {
	  customFont = loadFont("DancingScript.ttf");
  } else if (randomFont > 0.1 && randomFont < 0.2) {
	  customFont = loadFont("PressStart2P-Regular.ttf");
  } else if (randomFont > 0.2 && randomFont < 0.3) {
	  customFont = loadFont("ShareTechMono-Regular.ttf");
  } else if (randomFont > 0.3 && randomFont < 0.4) {
	  customFont = loadFont("PoiretOne-Regular.ttf");
  } else if (randomFont > 0.4 && randomFont < 0.5) {
	  customFont = loadFont("Creepster-Regular.ttf");
  } else if (randomFont > 0.5 && randomFont < 0.6) {
	  customFont = loadFont("SpecialElite-Regular.ttf");
  } else if (randomFont > 0.6 && randomFont < 0.7) {
	  customFont = loadFont("Righteous-Regular.ttf");
  }  else if (randomFont > 0.7 && randomFont < 0.8) {
	   customFont = loadFont("Oxanium-VariableFont_wght.ttf");
  }  else if (randomFont > 0.8 && randomFont < 0.9) {
	  customFont = loadFont("Silkscreen-Regular.ttf");
  }  else if (randomFont > 0.9 && randomFont < 0.95) {
	  customFont = loadFont("KellySlab-Regular.ttf");
  } else {
	  customFont = loadFont("VT323-Regular.ttf");
  }
  
}

let canvasWidth;
let canvasHeight;

function setup() {
	canvasWidth = windowWidth;
	canvasHeight = windowHeight;
	let myCanvas = createCanvas(canvasWidth, canvasHeight);
	myCanvas.parent("cryptowords");
	noLoop();
}

function draw() {
	
	if (chosenPalette) {
		paletteColor = colorPalette[Math.floor(fxrand()*colorPalette.length)];
		background(paletteColor);
	}
	
	// text(chosenPalette, 30, canvasHeight - 60);
	
	noStroke();
	
	colorMode(HSB, 360, 100, 100, 100);
	noFill();
	stroke(207, 7, 99);
	strokeWeight(20);
	rectMode(CENTER);
	
	drawingContext.shadowBlur = 32;
	
	paletteColor = colorPalette[Math.floor(fxrand()*colorPalette.length)];
	drawingContext.shadowColor = paletteColor;
	noStroke();
	
	let randomShapes = fxrand();
	
	if (randomShapes < 0.5) {
		let randomShape = fxrand();
		if (randomShape < 0.33) {
			if (outlook === 'Bearish') {
				getTriangleDown();
			} else {
				getTriangleUp();
			}
		} else if (randomShape > 0.33 && randomShape < 0.66) {
			let randomSquareOrRectangle = fxrand();
			if (randomSquareOrRectangle < 0.5) {
				getRectangle();
			} else {
				getSquare();
			}
		} else {
			getCircle();
		}
		numberShapes++;
	}
	
	let numberWords = fxrand() * 100;
	
	for (i = 0; i < numberWords; i++) {
		drawingContext.shadowColor = ('orange');
		if (chosenPalette) {
			paletteColor = colorPalette[Math.floor(fxrand()*colorPalette.length)];
			drawingContext.shadowColor = paletteColor;
		}
		word = words[Math.floor(fxrand()*words.length)];
		
		fill('#' + genHexString(6));
		if (chosenPalette) {
			paletteColor = colorPalette[Math.floor(fxrand()*colorPalette.length)];
			fill(paletteColor);
		}
		stroke('orange');
		if (chosenPalette) {
			paletteColor = colorPalette[Math.floor(fxrand()*colorPalette.length)];
			stroke(paletteColor);
		}
		let textX = fxrand() * canvasWidth - 30;
		if (textX < 30) {
			textX = 30;
		}
		let textY = fxrand() * canvasHeight - 30;
		if (textY < 30) {
			textY = 30;
		}
		textAlign(CENTER);
		fxTextSize = fxrand() * 100;
		if (fxTextSize < 20) {
			fxTextSize = 20;
		}
		textFont(customFont);
		textSize(fxTextSize);
		let randomUppercase = fxrand();
		if (randomUppercase < 0.05) {
			word = word.toUpperCase();
		}
		text(word, textX, textY);
	}
	
	let rotationalText = fxrand();
	
	let newTextSize = fxTextSize;
	
	if (rotationalText < 0.25) {
		
		let increasingTextSize = fxrand();
	
		word = words[Math.floor(fxrand()*words.length)];
		let angle = 0;
		for (i = 0; i < 24; i++) {
			push();
				translate(canvasWidth / 2, canvasHeight / 2);
				rotate(angle);
				textSize(newTextSize);
				text(word, 0, 0);
			pop();
			angle = angle + 15;
			if (increasingTextSize < 0.25) {
				newTextSize = newTextSize + 6;
			}
			numberWords++;
		}
	
	} else if (rotationalText > 0.25 && rotationalText < 0.35) { 
	
		let increasingTextSize = fxrand();
		let textDirection = fxrand();
		
		if (textDirection < 0.5) {
	
			word = words[Math.floor(fxrand()*words.length)];
			let angle = 45;
			let spacer = 0;
			for (i = 0; i < 24; i++) {
				push();
					translate((canvasWidth - 60) - spacer, 30 + spacer);
					rotate(angle);
					textSize(newTextSize);
					text(word, 0, 0);
				pop();
				if (increasingTextSize < 0.5) {
					newTextSize = newTextSize + 6;
				}
				spacer = spacer + 50;
				numberWords++;
			}
		
		} else {
			
			word = words[Math.floor(fxrand()*words.length)];
			let angle = 225;
			let spacer = 0;
			for (i = 0; i < 24; i++) {
				push();
					translate(30 + spacer, 30 + spacer);
					rotate(angle);
					textSize(newTextSize);
					text(word, 0, 0);
				pop();
				if (increasingTextSize < 0.5) {
					newTextSize = newTextSize + 6;
				}
				spacer = spacer + 50;
				numberWords++;
			}
			
		}
	
	}
	
}

function getSquare() {
	
	paletteColor = colorPalette[Math.floor(fxrand()*colorPalette.length)];
	fill(paletteColor);
	let squareStartX = fxrand() * (canvasWidth - 60);
	if (squareStartX < 30) {
		squareStartX = 30;
	}
	let squareStartY = fxrand() * (canvasHeight - 60);
	if (squareStartY < 30) {
		squareStartY = 30;
	}
	let squareSize = fxrand() * 500;
	if (squareSize < 100) {
		squareSize = 100;
	}
	rect(squareStartX, squareStartY, squareSize, squareSize);

}

function getRectangle() {
	
	paletteColor = colorPalette[Math.floor(fxrand()*colorPalette.length)];
	fill(paletteColor);
	let squareStartX = fxrand() * (canvasWidth - 60);
	if (squareStartX < 30) {
		squareStartX = 30;
	}
	let squareStartY = fxrand() * (canvasHeight - 60);
	if (squareStartY < 30) {
		squareStartY = 30;
	}
	let squareSize = fxrand() * 500;
	if (squareSize < 100) {
		squareSize = 100;
	}
	rect(squareStartX, squareStartY, squareSize, squareSize / 2);

}

function getCircle() {
	
	paletteColor = colorPalette[Math.floor(fxrand()*colorPalette.length)];
	fill(paletteColor);
	let circleStartX = fxrand() * (canvasWidth - 60);
	if (circleStartX < 30) {
		circleStartX = 30;
	}
	let circleStartY = fxrand() * (canvasHeight - 60);
	if (circleStartY < 30) {
		circleStartY = 30;
	}
	let circleSize = fxrand() * 500;
	if (circleSize < 100) {
		circleSize = 100;
	}
	circle(circleStartX, circleStartY, circleSize, circleSize);

}

function getTriangleUp() {
	
	paletteColor = colorPalette[Math.floor(fxrand()*colorPalette.length)];
	fill(paletteColor);
	let triangleStartX = fxrand() * (canvasWidth - 60);
	if (triangleStartX < 30) {
		triangleStartX = 30;
	}
	let triangleStartY = fxrand() * (canvasHeight - 60);
	if (triangleStartY < 30) {
		triangleStartY = 30;
	}
	let triangleSize = fxrand() * 500;
	if (triangleSize < 100) {
		triangleSize = 100;
	}
	triangle(triangleStartX, triangleStartY, triangleStartX + triangleSize, triangleStartY, triangleStartX + (triangleSize / 2), triangleStartY - triangleSize);

}

function getTriangleDown() {
	
	paletteColor = colorPalette[Math.floor(fxrand()*colorPalette.length)];
	fill(paletteColor);
	let triangleStartX = fxrand() * (canvasWidth - 60);
	if (triangleStartX < 30) {
		triangleStartX = 30;
	}
	let triangleStartY = fxrand() * (canvasHeight - 60);
	if (triangleStartY < 30) {
		triangleStartY = 30;
	}
	let triangleSize = fxrand() * 500;
	if (triangleSize < 100) {
		triangleSize = 100;
	}
	triangle(triangleStartX, triangleStartY, triangleStartX + triangleSize, triangleStartY, triangleStartX + (triangleSize / 2), triangleStartY + triangleSize);

}

function genHexString(len) {
    const hex = '0123456789ABCDEF';
    let output = '';
    for (let i = 0; i < len; ++i) {
        output += hex.charAt(Math.floor(Math.random() * hex.length));
    }
    return output;
}