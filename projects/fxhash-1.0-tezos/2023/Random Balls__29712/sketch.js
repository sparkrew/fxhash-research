// fxhash 2.0
// Code by Julien Lacroix
// Twitter: @JulienLacr0ix
// https://www.fxhash.xyz/u/Julien+Lacroix

const widthOfBackground = 6000
const heightOfBackground = 8000
const marginOfBackground = 100
const marginBottomOfBackground = 400
const maxWidthOfPainting = widthOfBackground - (marginOfBackground * 2)
const maxHeightOfPainting = heightOfBackground - (marginBottomOfBackground * 2)
const paddingOfPainting = 200

const colorOfBackground = '#ffffff'

const random = (value) => {
    return Math.floor($fx.rand() * value)
}

const paintingColors = [
	'#212121',
	'#212121',
	'#212121',
	'#212121',
	'#212121',
	'#212121',
	'#212121',
	'#212121',
	'#212121',
	'#212121',
	'#212121',
	'#212121',
	'#212121',
	'#212121',
	'#212121',
	'#212121',
	'#212121',
	'#212121',
	'#A3A3A3',
	'#212121',
	'#212121',
	'#212121',
	'#212121',
	'#212121',
	'#212121',
	'#212121',
	'#212121',
	'#212121',
	'#212121',
	'#D6BFA6',
	'#212121',
	'#212121',
	'#212121',
	'#212121',
	'#212121',
	'#212121',
	'#212121',
	'#212121',
	'#212121',
	'#212121'
]

let canvas
let font1
let font2
let colorOfPainting = []
let colors = []

function preload() {
	font1 = loadFont("./RobotoMono-SemiBold.ttf")
	font2 = loadFont("./RobotoMono-Regular.ttf")
}

function setup() {
	colorOfPainting = paintingColors[random(paintingColors.length)]
	colors = [
		colorOfPainting,
		colorOfPainting,
		colorOfPainting,
		'#FEFEFE',
		colorOfPainting,
		colorOfPainting,
		colorOfPainting,
		'#B2DBDE', 
		colorOfPainting,
		colorOfPainting,
		colorOfPainting,
		'#27AB9E', 
		colorOfPainting,
		colorOfPainting,
		colorOfPainting,
		'#F8D432', 
		colorOfPainting,
		colorOfPainting,
		colorOfPainting,
		'#ABCB5E', 
		colorOfPainting,
		colorOfPainting,
		colorOfPainting,
		'#F488A1',
		colorOfPainting,
		colorOfPainting,
		colorOfPainting,
		'#FA8202', 
		colorOfPainting,
		colorOfPainting,
		colorOfPainting,
		'#ED572E', 
		colorOfPainting,
		colorOfPainting,
		colorOfPainting,
		'#2B67AD',
		colorOfPainting,
		colorOfPainting,
		colorOfPainting,
	]
	
    pixelDensity(1)
    canvas = createCanvas(
		widthOfBackground, 
		heightOfBackground
	)
	drawBackground()
	applyGeneralStroke()
	drawBackgroundOfPainting()
	
	textFont(font1)
	textAlign(LEFT, LEFT)
	textSize(250)
	fill('#212121')
	text("Random Balls", marginOfBackground, maxHeightOfPainting + (marginOfBackground * 4) + 50)
	
	textFont(font2)
	textAlign(LEFT, LEFT)
	textSize(110)
	fill('#212121')
	text($fx.hash, marginOfBackground, maxHeightOfPainting + (marginOfBackground * 6) + 50)
	
   	noLoop() //TODO: Need to modify this line for the wiper
}

function draw() {
	drawCircles()
    $fx.preview()
}

// We used the a general stroke value to avoid glitch on the painting.
function applyGeneralStroke() {
	stroke(colorOfPainting)
}

function drawBackground() {
    background(colorOfBackground)
}

function drawBackgroundOfPainting() {
	fill(colorOfPainting)
	rect(
		marginOfBackground,
		marginOfBackground,
		maxWidthOfPainting,
		maxHeightOfPainting
	)
}


function drawCircles() {
	const marginOfPainting = marginOfBackground + paddingOfPainting
	const sizeOfBall = 200
	let xPosition = marginOfPainting
	let yPosition = marginOfPainting
	
	while (yPosition <= maxHeightOfPainting) {
		while (xPosition <= maxWidthOfPainting) {
			const color = colors[random(colors.length)]
			fill(color)
			circle(xPosition, yPosition, sizeOfBall)
			xPosition += sizeOfBall
		}
		xPosition = marginOfPainting
		yPosition += sizeOfBall
	}
}

// p5js function that fires when
// a key is types
function keyTyped() {
	// save the image
    if (key === 's' || key === 'S') {
        save(canvas, 'wiper_'+$fx.iteration+'.jpeg')
    }
    if (key === 'p' || key === 'P') {
        save(canvas, 'wiper_'+$fx.iteration+'.png')
    }
}