SIZE = 512;
DIVIDER = 2.0;
MAX_LEVEL = 8;
BORDER = 0.9;

COLORS = ["#432371", "#714674", "#9f6976", "#cc8b79", "#faae7b"]
CURRENT_COLOR = 0;

COLORS = createCoolor("https://coolors.co/ef476f-ffd166-06d6a0-118ab2-073b4c");

function setup() {
  Math.random = fxrand
  randomSeed(fxrand()*999999);
  noiseSeed(fxrand()*999999);
	SIZE = min(windowWidth, windowHeight);
	createCanvas(SIZE, SIZE);
	background(0);
	noStroke();
	noLoop();
}

function draw() {
	drawRect(0, 0, 0, SIZE);
}

function setRandomColor(){
	/*let prevColor = CURRENT_COLOR;
	while(CURRENT_COLOR == prevColor)
		CURRENT_COLOR = int(random(COLORS.length));*/
	CURRENT_COLOR = (CURRENT_COLOR + 1) % COLORS.length
	fill(COLORS[CURRENT_COLOR]);
}

function drawRect(level, x, y, size){
	setRandomColor();
	rect(x, y, size, size);
	
	if(level >= MAX_LEVEL)
		return;
	else if(random() < (0.07 * level)){
		setRandomColor();
		circle(x + size / 2, y + size / 2, size * BORDER);
		return;
	}
	else if(random() < (0.1 * level)){
		drawRect(level + 1, x + size * 0.1, y + size * 0.1, size * 0.8);
		return;
	}
	else{
		let s = size / DIVIDER;
		for(let i = 0; i < 2; i++)
			for(let j = 0; j < 2; j++)
				drawRect(level + 1, x + s * i, y + s * j, s);
	}
}

function createCoolor(url){
	return url.split("/")[3].split("-").map(x => "#" + x);
}