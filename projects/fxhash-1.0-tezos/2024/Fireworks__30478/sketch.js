let DEBUG = false
let trebuchet = null
let easing =  new p5.Ease()
// ------- APP SPECIFIC
let pieceTitle = 'Fireworks'
let packs = []
let nPacks = 5
// NOTE : borders, bordersColor, pieceSpan are declared in custom_funcs.js

function preload(){
	trebuchet = loadFont("trebuc_bold.otf");
	// $fx.params([
		// {
		// 	id: "hue_0",
		// 	name: "Hue of the pack",
		// 	type: "number",
		// 	update: "sync",
		// 	default: 0,
		// 	options: {
		// 		min: 0,
		// 		max: 360,
		// 		step: 2,
		// 	},
		// }
	// ])
}
function setup() {
	// ------- CREATE CANVAS
	createWidth = min(windowWidth, windowHeight);
	createCanvas(createWidth, createWidth);
	rectMode(CORNER);
	ellipseMode(CENTER);
	colorMode(HSB, 360, 100, 100, 1);
	
	// ------- SIZES
	borderSpan = 1 / 15
	pieceSpan = 1 - 2 * borderSpan;
	
	// ------- BORDERS
	borders = makeBorders(borderSpan * width)
	bordersColor = color(210, 18, 13)
	drawBorders(borders)
	
	// ------- COLORS
	backColor = color(210, 18, 10, .2)
	
	// ------- FONT
	textFont(trebuchet)
	textSize(width / 40)
	textAlign(CENTER, CENTER)
	
	// ------- APPLICATION SPECIFIC
	frameRate(60)
}

function draw() {
	background(backColor)
	drawBorders(borders)
	// APPLICATION SPECIFIC
	push()
		translate(borderSpan * createWidth, borderSpan * createWidth)
		for(let i = 0; i < nPacks-packs.length; i++){
			packs.push(new Pack(int($fx.rand()*360),i+packs.length-1))
		}
		for(let [idx, pack] of packs.entries()) {
				if(pack.explosionFrame > -1 && frameCount - pack.explosionFrame > 100){
					pack.to_delete = true
				}
				pack.computeIter()
				if (pack.explodeEvent !== null){
					pack.explodeEvent.decrease()
				}
				if(DEBUG) pack.grid.show()
				pack.show()
		}
		packs = packs.filter((x) => {return !x.to_delete})
	pop()
	// ------- TITLE
	push()
		textAlign(LEFT)
		fill([190,0,90])
		text(pieceTitle + ' #' +str($fx.iteration), borderSpan * width, height - (borderSpan * width) * 3 / 5)
	pop()
	// ------- CAPTURE
	// Try to capture when at least 3 fireworks just exploded
	let minimalExplosion = packs.map(pack => {return pack.explodeEvent !== null ? pack.explodeEvent.isActive() : false}).filter(active => active).length > 3
	// frameCount > 2000 to add a safeguard if conditions never capture
	if ((minimalExplosion || frameCount > 2000) && $fx.context === 'capture'){
		granulate(30, borderSpan * width, 5)
		$fx.preview()
		noLoop()
	}
}

function windowResized() {
	createWidth = min(windowWidth, windowHeight);
	resizeCanvas(createWidth, createWidth);
	borders = makeBorders(borderSpan * width)
	textSize(width / 50)
}