
//希望設定的畫布大小
let originCanvasWidth = 2400
let originCanvasHeight = 2000

//最終的畫布大小
let canvasWidth = 2400
let canvasHeight = 2000


function setupCanvasRatio() {
	let originRatio = originCanvasWidth / originCanvasHeight
	let screenRatio = windowWidth / windowHeight
	console.log(originRatio)
	console.log(screenRatio)

	if (screenRatio > originRatio) {
		canvasHeight = windowHeight
		canvasWidth = canvasHeight * originRatio
	}
	else {
		canvasWidth = windowWidth
		canvasHeight = canvasWidth / originRatio
	}
}
// function windowResized(){
//     resizeCanvas(windowWidth, windowHeight);
// }
var UFOcolor = ['#ffffff', '#c2f7ff', '#fccce8', '#ffe6f7', '#ffd454', '#cc2f3f']
function setup() {
	console.log(fxhash);
	noiseSeed(fxRandom(-10000, 10000));
	// setupCanvasRatio()
	createCanvas(windowWidth, windowHeight);
	background(89, 113, 156, 50);
	ellipseMode(RADIUS);
	drawMountain();
	drawMoon();
	drawStar1();
	drawStar3();
	drawTime()
	drawUFO(fxRandom(80, width - 100), fxRandom(height / 3, height - 50), 20, random(UFOcolor))
}


//畫幽浮
function drawUFO(UFOX, UFOY, UFOSize, UFOColor) {
	drawingContext.shadowColor = color(0, 30);
	drawingContext.shadowOffsetY = 2
	drawingContext.shadowOffsetX = 2
	// 身體
	fill(UFOColor);
	ellipse(UFOX, UFOY, UFOSize);
	//小腳腳
	fill(UFOColor);
	ellipse(UFOX - 30, UFOY + 20, UFOSize / 2.5, UFOSize / 2.5);
	fill(UFOColor);
	ellipse(UFOX + 30, UFOY + 20, UFOSize / 2.5, UFOSize / 2.5);
	// 底座
	fill(UFOColor);
	ellipse(UFOX, UFOY + 14, UFOSize * 3, UFOSize * 0.4);
}


//會不斷執行的程式(EX星星、時間)
function draw() {
	if (mouseIsPressed) {
		push()
		fill(255, 255, 255, 100)
		translate(fxRandom(width), fxRandom(height))
		rotate(fxRandom(PI / 3, PI / 4))
		let txt = "z"
		let rr = fxRandom(8)
		textSize(fxRandom(2, 15))
		for (var i = 0; i < rr; i++) {
			txt += "z"
		}
		text(txt, 0, 0)
		pop()
	} else {

	}
}

function drawTime() {
	drawingContext.shadowColor = color(0, 50);
	drawingContext.shadowOffsetY = 2
	drawingContext.shadowOffsetX = 2
	let h = hour()
	let m = minute()
	let sec = second()
	let millosecond = millis()
	fill(220)
	textSize(25)
	textStyle(BOLD)
	text(h + " : " + m + " : " + sec, width - 170, height - 40)
}

//畫月亮
function drawMoon() {
	noStroke()
	fill(245, 241, 181, 150)
	ellipse(fxRandom(70, width / 5), fxRandom(45, height / 4 - 45), 45)
}
//北斗七星
function drawStar1() {
	noStroke()
	//第一個
	beginShape()
	fill(252, 247, 247)
	vertex(width / 2 - 100, height / 5);
	vertex(width / 2 - 103, height / 5 + 3);
	vertex(width / 2 - 100, height / 5 + 7);
	vertex(width / 2 - 97, height / 5 + 3);
	vertex(width / 2 - 100, height / 5);
	endShape(CLOSE)
	//第二個
	beginShape()
	fill(252, 247, 247)
	vertex(width / 2 - 90, height / 5 - 15);
	vertex(width / 2 - 93, height / 5 - 12);
	vertex(width / 2 - 90, height / 5 - 8);
	vertex(width / 2 - 87, height / 5 - 12);
	vertex(width / 2 - 90, height / 5 - 15);
	endShape(CLOSE)
	// 第三個
	beginShape()
	fill(252, 247, 247)
	vertex(width / 2 - 80, height / 5 - 17);
	vertex(width / 2 - 83, height / 5 - 14);
	vertex(width / 2 - 80, height / 5 - 10);
	vertex(width / 2 - 77, height / 5 - 14);
	vertex(width / 2 - 80, height / 5 - 17);
	endShape(CLOSE)
	//第四個
	beginShape()
	fill(252, 247, 247)
	vertex(width / 2 - 65, height / 5 - 20);
	vertex(width / 2 - 68, height / 5 - 17);
	vertex(width / 2 - 65, height / 5 - 13);
	vertex(width / 2 - 62, height / 5 - 17);
	vertex(width / 2 - 65, height / 5 - 20);
	endShape(CLOSE)
	//第五個
	beginShape()
	fill(252, 247, 247)
	vertex(width / 2 - 53, height / 5 - 14);
	vertex(width / 2 - 56, height / 5 - 11);
	vertex(width / 2 - 53, height / 5 - 7);
	vertex(width / 2 - 50, height / 5 - 11);
	vertex(width / 2 - 53, height / 5 - 14);
	endShape(CLOSE)
	//第六個
	beginShape()
	fill(252, 247, 247)
	vertex(width / 2 - 44, height / 5 - 28);
	vertex(width / 2 - 47, height / 5 - 25);
	vertex(width / 2 - 44, height / 5 - 21);
	vertex(width / 2 - 41, height / 5 - 25);
	vertex(width / 2 - 44, height / 5 - 28);
	endShape(CLOSE)
	//第七個
	beginShape()
	fill(252, 247, 247)
	vertex(width / 2 - 50, height / 5 - 39);
	vertex(width / 2 - 53, height / 5 - 36);
	vertex(width / 2 - 50, height / 5 - 32);
	vertex(width / 2 - 47, height / 5 - 36);
	vertex(width / 2 - 50, height / 5 - 39);
	endShape(CLOSE)
}

//一般的星星
function drawStar3() {
	noStroke()
	let j = 40
	// fxRandom(10, 50);
	//第一個星星
	beginShape()
	// fill(0)
	fill(233, 247, 247)
	vertex(width - j * 1.2, height / 7 - j);
	vertex(width - 3 - j * 1.2, height / 7 + 3 - j);
	vertex(width - j * 1.2, height / 7 + 7 - j);
	vertex(width + 3 - j * 1.2, height / 7 + 3 - j);
	vertex(width - j * 1.2, height / 7 - j);
	endShape(CLOSE)
	//第二個星星
	beginShape()
	// fill(0)
	fill(255, 247, 247)
	vertex(width / 2 + j / 2, height / 7 - j / 2);
	vertex(width / 2 - 3 + j / 2, height / 7 + 3 - j / 2);
	vertex(width / 2 + j / 2, height / 7 + 7 - j / 2);
	vertex(width / 2 + 3 + j / 2, height / 7 + 3 - j / 2);
	vertex(width / 2 + j / 2, height / 7 - j / 2);
	endShape(CLOSE)
	//第三個星星
	beginShape()
	// fill(0)
	fill(255, 247, 247)
	vertex(width / 3 + j + 200, height / 7 - j / 2);
	vertex(width / 3 - 3 + j + 200, height / 7 + 3 - j / 2);
	vertex(width / 3 + j + 200, height / 7 + 7 - j / 2);
	vertex(width / 3 + 3 + j + 200, height / 7 + 3 - j / 2);
	vertex(width / 3 + j + 200, height / 7 - j / 2);
	endShape(CLOSE)
	//第四個星星
	beginShape()
	fill(242, 242, 223)
	vertex(width / 2 + j * 1.8, height / 7 - j * 1.2);
	vertex(width / 2 - 3 + j * 1.8, height / 7 + 3 - j * 1.2);
	vertex(width / 2 + j * 1.8, height / 7 + 7 - j * 1.2);
	vertex(width / 2 + 3 + j * 1.8, height / 7 + 3 - j * 1.2);
	vertex(width / 2 + j * 1.8, height / 7 - j * 1.2);
	endShape(CLOSE)
	//第五個星星
	beginShape()
	fill(242, 242, 223)
	vertex(width / 1.5 + j * 1.5, height / 8 - j);
	vertex(width / 1.5 - 3 + j * 1.5, height / 8 + 3 - j);
	vertex(width / 1.5 + j * 1.5, height / 8 + 7 - j);
	vertex(width / 1.5 + 3 + j * 1.5, height / 8 + 3 - j);
	vertex(width / 1.5 + j * 1.5, height / 8 - j);
	endShape(CLOSE)
	//第六個星星
	beginShape()
	fill(242, 242, 223)
	vertex(width / 4 + j * 1.5, height / 8 - j);
	vertex(width / 4 - 3 + j * 1.5, height / 8 + 3 - j);
	vertex(width / 4 + j * 1.5, height / 8 + 7 - j);
	vertex(width / 4 + 3 + j * 1.5, height / 8 + 3 - j);
	vertex(width / 4 + j * 1.5, height / 8 - j);
	endShape(CLOSE)
	//第七個星星
	beginShape()
	fill(242, 255, 255)
	vertex(width / 4 + j * 2 + 20, height / 7 - j * 1.5);
	vertex(width / 4 - 3 + j * 2 + 20, height / 7 + 3 - j * 1.5);
	vertex(width / 4 + j * 2 + 20, height / 7 + 7 - j * 1.5);
	vertex(width / 4 + 3 + j * 2 + 20, height / 7 + 3 - j * 1.5);
	vertex(width / 4 + j * 2 + 20, height / 7 - j * 1.5);
	endShape(CLOSE)
}

//畫山
function drawMountain() {
	// drawingContext.shadowColor = color(100);
	// drawingContext.shadowOffsetY =1
	// drawingContext.shadowOffsetX =1
	let r = 70;
	let g = fxRandom(30, 150);
	let b = 150;
	//山有幾座 
	for (let i = 0; i < 5; i++) {
		//山的顛簸程度
		let k = fxRandom(2, 4);
		strokeWeight(5);
		stroke(r, g, b, k + 4);
		let y = fxRandom(height / 4, height);
		for (let x = 0; x < width; x++) {
			line(x, y, x, height);
			y += fxRandom(-k, k);
			y = constrain(y, height / 100, height - 1)
		}
	}
}