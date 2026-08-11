'use strict'

var tigerImg
var theta = 0;
var frames = 160,
    num = 200,
    num2 = 6;

var blackBubble
let blackBubbles = []

var bubbleMonster
let bubbleMonsters = [] 

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(100);
	frameRate(60)
	for(var q=0;q<10;q++)
		blackBubbles.push({
			x:random(275,435),
			y:random(500,650),
			v:random(0.1,0.9),
			v2:random(1)
		})
	
	for(var g=0;g<30;g++)
		 bubbleMonsters.push({
			x:random(275,435),
			y:random(500,650),
			v:random(0.1,0.9),
			v2:random(1),
			clr:random(["#230007","#d7cf07","#d98324","#a40606","#5a0002","#e08dac","#6a7fdb","#57e2e5","#45cb85","#153131"]),
			mode:random(["happy","sad"])
		})
}

function drawBlackBubble(blackBubble){
	push()
		translate(blackBubble.x,blackBubble.y)
		for (var i=50;i>10;i-=10){
			colorMode(HSB)
			noStroke()
			fill(25,100,map(i,0,50,0,50))
			ellipse(0,0,i)				
		}
		blackBubble.x+=blackBubble.v
		blackBubble.y+=blackBubble.v2
		if (blackBubble.x>435){
			blackBubble.v = -abs(blackBubble.v)
		}else if(blackBubble.x<275){
			blackBubble.v = abs(blackBubble.v)
		}
	
		if (blackBubble.y>650){
			blackBubble.v2 = -abs(blackBubble.v2)
		}else if(blackBubble.y<300){
			blackBubble.v2 = abs(blackBubble.v2)
		}
		
	pop()
}

function drawBubbleMonster(bubbleMonster){
	push()
		noStroke()
		translate(bubbleMonster.x,bubbleMonster.y)
		var w = 50 
		fill(bubbleMonster.clr)
		
		if(bubbleMonster.mode == "happy"){
			ellipse(0,0,w)
			fill(255)
			ellipse(0,0,w/2,w/2)
			fill(0)
			ellipse(0,0,w/3,w/3)
		}else if (bubbleMonster.mode == "sad"){
			fill(bubbleMonster.clr)	
			ellipse(0,0,w)
			fill(255)
			arc(0,0,w/2,w/2,0,PI)
			fill(0)
			arc(0,0,w/3,w/3,0,PI)
	
		}
		bubbleMonster.x+=bubbleMonster.v
		bubbleMonster.y+=bubbleMonster.v2
		if (bubbleMonster.x>435){
			bubbleMonster.v = -abs(bubbleMonster.v)
		}else if(bubbleMonster.x<275){
			bubbleMonster.v = abs(bubbleMonster.v)
		}

		if (bubbleMonster.y>650){
			bubbleMonster.v2 = -abs(bubbleMonster.v2)
		}else if(bubbleMonster.y<300){
			bubbleMonster.v2 = abs(bubbleMonster.v2)
		}
		
	pop()
}
	

function drawfrontCover(){
	
		push()
			translate(width/2,height/2)
			scale(0.4)
			var i = 600
			fill(194,2,2)
			ellipse(0,0,i)
			fill(247,233,194)
			ellipse(0,0,i-10)
			fill(194,2,2)
			ellipse(0,0,i-20)
			fill(247,233,194)
			ellipse(0,0,i-30)
		pop()
		push()
			translate((width/2)-355, (height/2)-350)
			triangle(320, 336, 310, 346, 300, 318);
			triangle(394, 336, 400, 346, 414, 318);
		pop()
			// 外圍
			push()
				translate(width/2,height/2)
			scale(0.4)
				noStroke()
				fill("#D98324")
				var y=300
				ellipse(0,80,y)
				fill(255)
				arc(0,80,y/2,y/2,0,PI)
				fill(0)
				arc(0,80,y/3,y/3,0,PI)
			// logo
			
			fill(194,2,2)
			textSize(60)	
			text('Bubble',-100,-200)
			textSize(100)	
			fill("#B2AC06")
			text('Monster',-180,-110)
			// 文字
	pop()

}


function drawWaves(j) {
		push()
	translate((width/2)-355, (height/2)-390)
    var sz = height / (num2 * 9);
    var y3 = map(j, 0, num2 - 1, 0, 1000);
    noStroke()
		for (var i = 0; i < num; i++) {
        var x2 = map(i, 0, num - 1, 204, 507);
        var y2 = y3 + map(sin(theta + TWO_PI / num * i), -1, 1, -11, 0);
        fill(224,205,175);
        ellipse(x2, y2, sz, sz);
    }
		pop()
}


function draw() {
	push()
	background("#413c3b")
	noStroke()
	colorMode(HSB)
	translate(width/2, height/2)
	for(var o=-height/2; o<height/2; o+=100){
		for(var i=-width/2; i<width/2; i+=200){
			let delta = map(i, -width/2, width/2, 0, 20)
			let ratio = map(sin(frameCount/40+delta+o+height/60), -1, 1, 0, 1)
			fill(180*ratio, 80, 80)
			ellipse(i, ratio*0+o, (sin(frameCount/40+delta+o/50+width/10)+1)*30+10)
		}
	}
	pop()
	

	
	push()
		translate((width/2)-355, (height/2)-380)
		fill(224,205,175,0);
		fill("#f0e7e6")
		quad(180,150,250,675,460,675,530,150)
	pop()
	push()
		drawWaves(1.39);
		theta += TWO_PI / frames;
	pop()
	push()
		translate((width/2)-355, (height/2)-380)
		noStroke()
		fill(224, 205, 175);
		quad(194,254,250,675,460,675,516,254)
		fill("#6b6c76")
		rectMode(CENTER)
		rect(355,160,350,50);
	pop()
	//cup

	//Plastic cup lids
	

	fill(0)
	// textSize(20)
	// text(int(mouseX)+','+int(mouseY),50,50)
	
	
	push()
	translate((width/2)-355, (height/2)-380)
		for(var o=0;o<blackBubbles.length;o++){
			var blackBubble = blackBubbles[o]
			drawBlackBubble(blackBubble)
		}
	pop()
	// 黑珍珠
	
	
	push()
	translate((width/2)-355, (height/2)-380)
		for(var k=0;k<bubbleMonsters.length;k++){
			var bubbleMonster = bubbleMonsters[k]
			drawBubbleMonster(bubbleMonster)
		}
	pop()
	// 珍珠怪獸
	drawfrontCover()
	
	
}