/*

*/

const referenceSize = 1000;

const config = {
	
}


var cnv;

let spaceShader;
let spaceTexture;

// * in the future include a definition, or something invented by an AI
let motivationalWords = [];
let motivationalNouns = [];
let motivationalAdjectives = [];

let myFont;

var _textCanvas;

// **************************
// *        PRELOAD         *
// **************************
function preload()
{
    motivationalWords = motivationWords.map(val => val.toUpperCase());
    motivationalNouns = positiveNouns.map(val => val.toUpperCase());
    motivationalAdjectives = positiveAdjectives.map(val => val.toUpperCase());

    myFont = loadFont('./Roboto.ttf');

    spaceShader = loadShader('space.vert', 'space.frag');
}

let seed = 0;
let fxRandVal = 0;

let mainColor;

function setup()
{
    setDimensions();
    if (isCentered) {
        centerCanvas();
    }
    
    pixelDensity(1);

    cnv = createCanvas(canvasSize, canvasSize, WEBGL);
    _textCanvas = createGraphics(canvasSize, canvasSize);

    _textCanvas.textAlign(CENTER);
    _textCanvas.textFont(myFont);

    textFont(myFont);
    smooth();

    fxRandVal = window.$fxhashFeatures.seed;
    seed = fxRandVal * 10000000;
    randomSeed(seed);

    textAlign(CENTER, CENTER);

    spaceTexture = createGraphics(canvasSize, canvasSize, WEBGL);
    spaceTexture.noStroke();

    DrawAll();

    fxpreview();
}

function draw()
{
    _textCanvas.fill('YELLOW');
    _textCanvas.stroke('YELLOW');

    // _textCanvas.textFont(myFont);


    // _textCanvas.textStyle(NORMAL);
    // _textCanvas.text("Hola chicos", 200, 50);

    // texture(_textCanvas);
    rect(0, 0, canvasSize, canvasSize);
}

function DrawAll()
{
    randomSeed(seed);
    background(0);
    // _textCanvas.background(0);
    _textCanvas.clear();
    mainColor = color(random(255), random(255), random(255));

    DrawStars();

    DrawSpace();

    DrawRoad();

    Quote();
}

function DrawSpace()
{
    spaceTexture.shader(spaceShader);
    spaceShader.setUniform("u_Resolution", [canvasSize, canvasSize]);
    spaceShader.setUniform("u_Pixels", [canvasSize]);

    spaceShader.setUniform("u_MainColor", [red(mainColor) / 255.0, green(mainColor) / 255.0, blue(mainColor) / 255.0]);

    spaceShader.setUniform("u_Seed", [seed]);


    let time = millis() / 1000.0;
    spaceShader.setUniform("u_Time", time);

    spaceTexture.rect(0, 0, referenceSize, referenceSize);
    texture(spaceTexture);

    rectMode(CENTER);
    // rect(0 + (canvasSize / 2 * (1 - windowScale)), 100, canvasSize, canvasSize);
    rect(0, 100, referenceSize * windowScale, referenceSize * windowScale);
}

// draw a circle using vertices
function drawVertexCircle(radius, numVertices) {
    let angle = 0;
    let angleStep = TWO_PI / numVertices;

    beginShape();
    for (let angle = 0; angle < TWO_PI; angle += angleStep) {
        let x = cos(angle) * radius;
        let y = sin(angle) * radius;
        vertex(x, y);
    }
    endShape(CLOSE);
}
    

function DrawStars()
{
    strokeWeight(1);

    let starsAmount = floor(random(750, 1000));
    fill(255);
    noStroke();
    let minMaxStarSize = createVector(1, 1.5);

    // * or distribute them better, I'm kinda lazy though
    for (let i = 0; i < starsAmount; i++) {

        let starSize = random(minMaxStarSize.x, minMaxStarSize.y);
        
        circle(random(-canvasSize / 2, canvasSize / 2),
               random(-canvasSize / 2, canvasSize / 2), 
               starSize,
               starSize);
    }

}

function DrawRoad()
{
    fill(50, 50, 50);

    let startHeight = canvasSize / 4;
    let endHeight = canvasSize / 2;

    let startWidth = canvasSize / 50;
    let endWidth = canvasSize * 0.7;

    beginShape();

    // * top left
    vertex(-startWidth, startHeight);
    // * top right
    vertex(startWidth, startHeight);
    // * bottom right
    vertex(endWidth, endHeight);
    // * bottom left
    vertex(-endWidth, endHeight);

    endShape(CLOSE)

    stroke('YELLOW');
    fill('YELLOW');
    let lineOffset = 7.5;

    strokeWeight(5);

    line(-lineOffset / 2, startHeight, -lineOffset, canvasSize / 2)
    line(lineOffset / 2, startHeight, lineOffset, canvasSize / 2)

    stroke(255);
    fill(255);
    strokeWeight(2);
    line(-startWidth, startHeight, -endWidth, endHeight);
    line(startWidth, startHeight, endWidth, endHeight);

}

function Quote()
{
    rectMode(CENTER);
    fill(0);
    noStroke();
    push();
    translate(0, 0, 10);
    rect(0, -canvasSize / 2, canvasSize, canvasSize / 5)

    noFill();
    strokeWeight(5);
    stroke('YELLOW');
    rect(0, 0, canvasSize - 15,  canvasSize - 15);
    pop();

    randomSeed(seed);

    // * draw lines to outline it
    let randomIndex = floor(random(motivationalWords.length));

    let textDimensions = 32 * windowScale;
    textSize(textDimensions);

    _textCanvas.textSize(textDimensions);

    strokeWeight(1);
    fill('YELLOW');
    stroke('YELLOW');

    textStyle(NORMAL);

    push();
    translate(0, 0, 15);

    let randomWord = motivationalAdjectives[randomIndex];
    let randomNoun = motivationalNouns[floor(random(motivationalNouns.length))];
    let randomAdjective = motivationalAdjectives[floor(random(motivationalAdjectives.length))];

    // let mantra = generateRandomMantra(mantras, floor(random(4, 6)), seed);
    // let mantra = randomWord;

    let mantra = randomWord + "\n" + "THE " + randomAdjective+ " " + randomNoun;
    // text(mantra, 0, -canvasSize / 2 + textDimensions + 15);

    strokeWeight(3);
    line(-canvasSize / 2 + 15, -canvasSize / 2 + textDimensions + 15,
         -mantra.length / 3 * textDimensions, -canvasSize / 2 + textDimensions + 15);

    line(mantra.length / 3 * textDimensions, -canvasSize / 2 + textDimensions + 15,
         canvasSize / 2 - 15, -canvasSize / 2 + textDimensions + 15);
    pop();


    _textCanvas.fill('YELLOW');
    _textCanvas.stroke('YELLOW');

    _textCanvas.textFont(myFont);


    _textCanvas.textStyle(NORMAL);
    _textCanvas.text(mantra, canvasSize / 2, textDimensions);

    texture(_textCanvas);
    rect(0, 0, canvasSize, canvasSize);
}

function keyPressed() {
    if (key === ' ') {
        // DrawAll();
    }

    if (key === "s") {
        saveCanvas(cnv, "space", "png");
    }
}  