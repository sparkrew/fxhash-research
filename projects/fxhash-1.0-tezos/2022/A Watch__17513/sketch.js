// A Watch by Ross Goodwin
// Software text clock
// Copyright (C) 2022  Ross Goodwin

// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with this program.  If not, see <https://www.gnu.org/licenses/>.

const romanNumeralLookup = {
	1: 'I',
	2: 'II',
	3: 'III',
	4: 'IV',
	5: 'V',
	6: 'VI',
	7: 'VII',
	8: 'VIII',
	9: 'IX',
	10: 'X',
	11: 'XI',
	12: 'XII'
};

function getWatchFacePositions() {

	let canvasLen = getCanvasSize();

	let radius = canvasLen/2;

	let centerX = radius;
	let centerY = radius;

	let indentation;

	if (numeralType === 'Arabic') {
		indentation = 0.1;
	}
	else if (numeralType === 'Roman') {
		indentation = 0.1;
	}
	else {
		indentation = 0.1;
	}

	let posObj = {
		12: [ radius, radius*indentation ],
		6: [ radius, 2*radius-radius*indentation ],
		3: [ 2*radius-radius*indentation, radius ],
		9: [ radius*indentation, radius ],
		2: [ radius+cos(TWO_PI/12.0)*(radius-radius*indentation), radius-sin(TWO_PI/12.0)*(radius-radius*indentation) ],
		1: [ radius+cos(TWO_PI/6.0)*(radius-radius*indentation), radius-sin(TWO_PI/6.0)*(radius-radius*indentation) ],
		4: [ radius+cos(TWO_PI/12.0)*(radius-radius*indentation), radius+sin(TWO_PI/12.0)*(radius-radius*indentation) ],
		5: [ radius+cos(TWO_PI/6.0)*(radius-radius*indentation), radius+sin(TWO_PI/6.0)*(radius-radius*indentation) ],
		7: [ radius-cos(TWO_PI/6.0)*(radius-radius*indentation), radius+sin(TWO_PI/6.0)*(radius-radius*indentation) ],
		8: [ radius-cos(TWO_PI/12.0)*(radius-radius*indentation), radius+sin(TWO_PI/12.0)*(radius-radius*indentation) ],
		10: [ radius-cos(TWO_PI/12.0)*(radius-radius*indentation), radius-sin(TWO_PI/12.0)*(radius-radius*indentation) ],
		11: [ radius-cos(TWO_PI/6.0)*(radius-radius*indentation), radius-sin(TWO_PI/6.0)*(radius-radius*indentation) ]
	}

	return posObj;

}

function getCanvasSize() {
	const shortSideLen = Math.min(windowWidth, windowHeight);
	return shortSideLen*0.96;
}

function getTextSize() {
	const shortSideLen = Math.min(windowWidth, windowHeight);

	if (numeralType === 'Arabic') {
		return shortSideLen*0.0225;			
	}
	else if (numeralType === 'dots') {
		return shortSideLen*0.01;
	}
	else {
		return shortSideLen*0.02125;
	}
}

function drawPointHand(canvRad, handWth, handLen, handAngle, soY=0) {
	beginShape();
	vertex( canvRad - (handWth/2.0)*cos(handAngle), canvRad - (handWth/2.0)*sin(handAngle) + soY );
	vertex( canvRad + handLen*sin(handAngle), canvRad - handLen*cos(handAngle) + soY );
	vertex( canvRad + (handWth/2.0)*cos(handAngle), canvRad + (handWth/2.0)*sin(handAngle) + soY );
	endShape(CLOSE);

	ellipseMode(CENTER);
	arc( canvRad, canvRad+soY, handWth, handWth, handAngle, PI+handAngle, OPEN);
}

function drawDiamondHand(canvRad, diamondAngle, handLen, handAngle, diamondRatio, soY=0) {

	beginShape();
	vertex( canvRad, canvRad+soY );
	vertex( canvRad + sin( handAngle - diamondAngle )*handLen*diamondRatio, canvRad - cos( handAngle - diamondAngle )*handLen*diamondRatio + soY );
	vertex( canvRad + sin( handAngle )*handLen, canvRad - cos( handAngle )*handLen + soY );
	vertex( canvRad + sin( handAngle + diamondAngle )*handLen*diamondRatio, canvRad - cos( handAngle + diamondAngle )*handLen*diamondRatio + soY );
	endShape(CLOSE);

	ellipseMode(CENTER);
	circle( canvRad, canvRad+soY/2.0, diamondRatio*handLen*sin(diamondAngle) );

}

function windowResized() {
	const canvasLen = getCanvasSize();
	resizeCanvas(canvasLen, canvasLen);
}

function doubleClicked() {
	let fs = fullscreen();
	fullscreen(!fs);
}

function keyTyped() {
	if (key === 'd') {
		let ts = new Date();
		let regex = /(<([^>]+)>)/ig;
		downloadText( `A_Watch_by_Ross_Goodwin_${fxhash}_${ts.getTime()}.txt`, currentText.replace(regex, "") );
	}
}


function setup() {
	const canvasLen = getCanvasSize();

	let cnv = createCanvas(canvasLen, canvasLen);
	cnv.parent('page-container');

	// frameRate(30);
}

function draw() {
	// set canvas length

	let canvasLen = getCanvasSize();
	let canvasRadius = canvasLen/2.0;

	// shadow params

	let shadowOffsetY = canvasLen*0.0025;
	let microShadowOffsetY = shadowOffsetY/2.0;
	let shadowColorStr = 'rgba(0,0,0,0.25)';

	// draw watch face background

	background(palette.background);

	let bgColor = color(palette.grafText);
	bgColor.setAlpha(128);

	background(bgColor);

	// draw watch face numerals

	let numeralFontSize = getTextSize();

	let textColor = color(numeralColor);
	textColor.setAlpha(255);

	// fill(textColor);
	noStroke();
	textFont(fontChoice.cssName, numeralFontSize);
	textAlign(CENTER, CENTER);
	ellipseMode(CENTER);

	let numeralPosObj = getWatchFacePositions();

	for (let [k,v] of Object.entries(numeralPosObj)) {


		if (numeralType === 'Arabic') {
			fill(shadowColorStr);
			text(k, v[0], v[1]+microShadowOffsetY);
			fill(textColor);
			text(k, v[0], v[1]);			
		}
		else if (numeralType === 'Roman') {

			if (romanLowerCase) {
				fill(shadowColorStr);
				text(romanNumeralLookup[k].toLowerCase(), v[0], v[1]+microShadowOffsetY);
				fill(textColor);
				text(romanNumeralLookup[k].toLowerCase(), v[0], v[1]);
			}
			else {
				fill(shadowColorStr);
				text(romanNumeralLookup[k], v[0], v[1]+microShadowOffsetY);
				fill(textColor);
				text(romanNumeralLookup[k], v[0], v[1]);
			}

		}
		else if (numeralType === 'dots') {
			fill(shadowColorStr);
			circle(v[0], v[1]+microShadowOffsetY, numeralFontSize);
			fill(textColor);
			circle(v[0], v[1], numeralFontSize);
		}

	}

	// draw minute marks

	// stroke(textColor);
	// strokeWeight(canvasLen*0.001);
	strokeCap(SQUARE);



	let markLen;

	for (let i=0; i<60; i++) {

		if ((hasHourMarks && i%5 ===0) || hasMinuteMarks) {

			if (i%5 === 0) {
				strokeWeight(canvasLen*0.0025);
				markLen = canvasRadius*0.953125;
			}
			else {
				strokeWeight(canvasLen*0.001);
				markLen = canvasRadius*0.96875;
			}

			let markAngle = TWO_PI * i/60.0;
			// console.log(markAngle);

			// draw shadow


			stroke( shadowColorStr );
			line( canvasRadius+canvasRadius*sin(markAngle), canvasRadius-canvasRadius*cos(markAngle)+microShadowOffsetY, canvasRadius+markLen*sin(markAngle), canvasRadius-markLen*cos(markAngle)+microShadowOffsetY );

			// draw mark

			stroke(textColor);
			line( canvasRadius+canvasRadius*sin(markAngle), canvasRadius-canvasRadius*cos(markAngle), canvasRadius+markLen*sin(markAngle), canvasRadius-markLen*cos(markAngle) );

		}
	}

	// draw hands

	let now = new Date();
	let hr = now.getHours();
	let mn = now.getMinutes();
	let sc = now.getSeconds();
	let ms = now.getMilliseconds();

	let hrFloat = hr + mn/60.0 + sc/3600.0 + ms/3600000.0;
	let mnFloat = mn + sc/60.0 + ms/60000.0;
	let scFloat = sc + ms/1000.0;

	let hrAngle = TWO_PI*2*hrFloat/24.0;
	let mnAngle = TWO_PI*mnFloat/60.0;
	let scAngle = TWO_PI*scFloat/60.0;

	// lines

	if (handsType === 'lines') {

		strokeCap(PROJECT);

		// hour

		let hourHandLen = canvasRadius*0.7;


		strokeWeight(canvasLen*0.016);

		// hour hand shadow

		stroke( shadowColorStr );
		line( canvasRadius, canvasRadius+shadowOffsetY, canvasRadius+hourHandLen*sin(hrAngle), canvasRadius-hourHandLen*cos(hrAngle)+shadowOffsetY )

		// hour hand

		let handColor = color(palette.background);
		handColor.setAlpha(222);

		stroke(handColor);

		line( canvasRadius, canvasRadius, canvasRadius+hourHandLen*sin(hrAngle), canvasRadius-hourHandLen*cos(hrAngle) );


		// minute

		let minuteHandLen = canvasRadius*0.96875;
		strokeWeight(canvasLen*0.008);

		// minute hand shadow

		stroke( shadowColorStr );
		line( canvasRadius, canvasRadius+shadowOffsetY, canvasRadius+minuteHandLen*sin(mnAngle), canvasRadius-minuteHandLen*cos(mnAngle)+shadowOffsetY );		

		// minute hand

		stroke(handColor);
		line( canvasRadius, canvasRadius, canvasRadius+minuteHandLen*sin(mnAngle), canvasRadius-minuteHandLen*cos(mnAngle) );

		// second

		if (hasSecondHand) {

			let secondHandLen = canvasRadius*0.945;
			strokeWeight(canvasLen*0.002);

			// second hand shadow

			stroke( shadowColorStr );
			line( canvasRadius, canvasRadius+shadowOffsetY/2, canvasRadius+secondHandLen*sin(scAngle), canvasRadius-secondHandLen*cos(scAngle)+shadowOffsetY/2 );

			// second hand

			stroke(handColor);

			if (secondHandAccentColor) {
				let secondHandColor = color(palette.clockText);
				secondHandColor.setAlpha(128);
				stroke(secondHandColor);			
			}

			line( canvasRadius, canvasRadius, canvasRadius+secondHandLen*sin(scAngle), canvasRadius-secondHandLen*cos(scAngle) );
		
		}

	}

	else if (handsType === 'points') {

		noStroke();

		let handColor = color(palette.background);
		handColor.setAlpha(222);

		// hour

		let hourHandLen = canvasRadius*0.7;
		let hourHandWth = canvasRadius*0.09;

		// hour hand shadow

		fill(shadowColorStr);
		drawPointHand( canvasRadius, hourHandWth, hourHandLen, hrAngle, shadowOffsetY );

		// hour hand

		fill(handColor);
		drawPointHand( canvasRadius, hourHandWth, hourHandLen, hrAngle );

		// minute

		let minuteHandLen = canvasRadius*0.96875;
		let minuteHandWth = canvasRadius*0.05;

		// minute hand shadow

		fill(shadowColorStr);
		drawPointHand( canvasRadius, minuteHandWth, minuteHandLen, mnAngle, shadowOffsetY );

		// minute hand

		fill(handColor)
		drawPointHand( canvasRadius, minuteHandWth, minuteHandLen, mnAngle );

		// second

		if (hasSecondHand) {

			let secondHandLen = canvasRadius*0.945;
			let secondHandWth = canvasRadius*0.02;

			// second hand shadow

			fill( shadowColorStr );
			drawPointHand( canvasRadius, secondHandWth, secondHandLen, scAngle, shadowOffsetY );

			// second hand

			fill( handColor );

			if (secondHandAccentColor) {
				let secondHandColor = color(palette.clockText);
				secondHandColor.setAlpha(128);
				fill(secondHandColor);			
			}

			drawPointHand( canvasRadius, secondHandWth, secondHandLen, scAngle );

		}

	}

	else if (handsType === 'diamonds') {

		noStroke();

		let handColor = color(palette.background);
		handColor.setAlpha(222);

		// hour

		let hourHandLen = canvasRadius*0.7;
		let hourHandAngle = HALF_PI*0.05;

		// hour hand shadow

		fill(shadowColorStr);
		drawDiamondHand( canvasRadius, hourHandAngle, hourHandLen, hrAngle, 0.75, shadowOffsetY );		

		// hour hand

		fill(handColor);
		drawDiamondHand( canvasRadius, hourHandAngle, hourHandLen, hrAngle, 0.75 );	

		// minute

		let minuteHandLen = canvasRadius*0.96875;
		let minuteHandAngle = HALF_PI*0.025;

		// minute hand shadow

		fill(shadowColorStr);
		drawDiamondHand( canvasRadius, minuteHandAngle, minuteHandLen, mnAngle, 0.666, shadowOffsetY );	

		// minute hand

		fill(handColor);
		drawDiamondHand( canvasRadius, minuteHandAngle, minuteHandLen, mnAngle, 0.666 );

		// second

		if (hasSecondHand) {

			let secondHandLen = canvasRadius*0.945;
			let secondHandAngle = HALF_PI*0.00875;

			// second hand shadow

			fill(shadowColorStr);
			drawDiamondHand( canvasRadius, secondHandAngle, secondHandLen, scAngle, 0.9, shadowOffsetY )

			// second hand

			fill( handColor );

			if (secondHandAccentColor) {
				let secondHandColor = color(palette.clockText);
				secondHandColor.setAlpha(128);
				fill(secondHandColor);			
			}

			drawDiamondHand( canvasRadius, secondHandAngle, secondHandLen, scAngle, 0.9 )

		}

	}




}