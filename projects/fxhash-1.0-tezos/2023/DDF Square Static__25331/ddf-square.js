// DDF Multihead
// The Dope Dead Frog (DDF) multihead fxhash art drop
// by obxium, February 2022

var resolutions = [8,16,32,64];
var resolution = resolutions[Math.floor(fxrand()*resolutions.length)];
var grid = [];
var rows = 0;
var nextRow = 0;
var canvasSize = 600;
var canvas;
var isSigned;
var oSigSvg;
var palette = [
    "rgb(223,155,141)",
    "rgb(236,217,82)",
    "rgb(205,163,112)",
    "rgb(156,105,124)",
    "rgb(186,81,23)",
    "rgb(200,134,136)",
    "rgb(142,142,149)",
    "rgb(86,162,34)",
    "rgb(209,210,187)",
    "rgb(149,188,214)",
    "rgb(50,78,98)",
    "rgb(208,41,20)",
    "rgb(244,218,154)",
    "rgb(97,90,151)",
    "rgb(122,73,51)",
    "rgb(83,98,106)",
    "rgb(63,194,173)",
    "rgb(144,150,57)",
    "rgb(240,237,226)",
    "rgb(50,24,29)",
    "rgb(136,192,166)",
    "rgb(86,51,56)",
    "rgb(57,183,152)",
    "rgb(73,128,139)",
    "rgb(140,67,66)",
    "rgb(232,200,199)",
    "rgb(1,112,195)",
    "rgb(197,93,14)",
    "rgb(4,63,105)",
    "rgb(182,1,9)",
    "rgb(36,37,41)",
    "rgb(202,235,229)",
    "rgb(211,83,29)",
    "rgb(1,51,52)",
    "rgb(216,209,95)",
    "rgb(102,52,28)",
    "rgb(227,178,115)",
    "rgb(237,221,181)",
    "rgb(133,137,154)",
    "rgb(140,113,122)",
    "rgb(116,147,205)",
    "rgb(173,220,220)",
    "rgb(201,122,172)",
    "rgb(219,190,186)",
    "rgb(0,108,190)",
    "rgb(213,197,225)",
    "rgb(156,154,66)",
    "rgb(74,109,93)",
    "rgb(146,161,156)",
    "rgb(240,238,239)",
    "rgb(66,37,33)",
    "rgb(232,167,21)",
    "rgb(56,172,73)",
    "rgb(74,101,60)",
    "rgb(237,205,180)",
    "rgb(128,25,16)",
    "rgb(157,198,228)",
    "rgb(92,93,45)",
    "rgb(232,120,82)",
    "rgb(90,79,92)",
    "rgb(221,177,151)",
    "rgb(29,66,106)",
    "rgb(181,72,75)",
    "rgb(1,169,169)",
    "rgb(248,197,142)",
    "rgb(185,148,163)",
    "rgb(32,39,64)",
    "rgb(170,179,206)",
    "rgb(130,51,50)",
    "rgb(184,75,71)",
    "rgb(146,146,119)",
    "rgb(248,173,101)",
    "rgb(88,114,110)",
    "rgb(200,235,228)",
    "rgb(238,191,90)",
    "rgb(222,125,53)",
    "rgb(215,238,235)",
    "rgb(246,176,61)",
    "rgb(58,37,28)",
    "rgb(201,225,235)",
    "rgb(26,143,165)",
    "rgb(226,145,154)",
    "rgb(0,80,48)",
    "rgb(160,181,222)",
    "rgb(200,99,49)",
    "rgb(68,136,206)",
    "rgb(186,64,43)",
    "rgb(231,237,226)",
    "rgb(120,156,44)",
    "rgb(70,41,35)",
    "rgb(217,136,118)",
    "rgb(225,203,215)",
    "rgb(190,205,1)",
    "rgb(110,210,181)",
    "rgb(106,203,198)",
    "rgb(226,232,235)",
    "rgb(121,111,101)",
    "rgb(249,196,86)",
    "rgb(84,81,100)",
    "rgb(247,216,170)",
    "rgb(239,199,208)",
    "rgb(68,39,90)",
    "rgb(65,92,124)",
    "rgb(178,96,80)",
    "rgb(170,126,100)",
    "rgb(228,99,65)",
    "rgb(10,180,161)",
    "rgb(204,184,120)",
    "rgb(48,30,27)",
    "rgb(164,130,126)",
    "rgb(232,203,1)",
    "rgb(80,86,93)",
    "rgb(187,76,86)",
    "rgb(225,230,196)",
    "rgb(1,97,181)",
    "rgb(58,126,85)",
    "rgb(224,225,163)",
    "rgb(61,68,91)",
    "rgb(238,233,207)",
    "rgb(95,135,197)",
    "rgb(176,177,15)",
    "rgb(104,102,91)",
    "rgb(223,98,126)",
    "rgb(98,103,115)",
    "rgb(216,182,68)",
    "rgb(181,22,48)"
];

function preload() {
    frameRate(12);
    svg = loadSVG('ddf.svg');
    oSigSvg = loadSVG('O-sig.svg');
}

function setup() {
    angleMode(DEGREES);
    rectMode(CENTER);
    pixelDensity(2);
    background(palette[Math.floor(fxrand()*palette.length)]);
    createCanvas(canvasSize, canvasSize, SVG);
    createGrid();
    showGrid();
    ddf = new DDFHead();
}

function draw() {
    ddf.display();

    if (isSigned) {
        image(oSigSvg, 500, 500, 32, 32);
    }

    if (frameCount === 42) {
        noLoop();
        fxpreview();
    }
}

function keyPressed() {
	if (key.toLowerCase() === "s") save(); // right click, save as
	if (key === " ") reset(); // do over
}

// DDFHead
class DDFHead {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.size = 777;
        this.speed = 7;
        image(svg, -90, -20, this.size, this.size);
    }
  
    display() {    
      let squareSize = Math.floor(fxrand() * 128 - 96);
      fill(palette[Math.floor(fxrand()*palette.length)]);
      square(fxrand()*width, fxrand()*height, squareSize)
  
    }

  }

class Pixel {
    constructor() {
        this.size = canvasSize / resolution;
        this.color = palette[Math.floor(fxrand()*palette.length)];
        this.x = nextRow * this.size;
        this.y = rows * this.size;
    
        grid.push(this);
    
        if(grid.length % resolution == 0) rows++;
    
        nextRow++;
        if(nextRow == resolution) nextRow = 0;
    }
    show() {
        stroke(255);
        strokeWeight(1);
        fill(this.color);
        rect(this.x, this.y, this.size, this.size);
    }
  }
  
function showGrid() {
    for(var i = 0; i < grid.length; i++)
    {
        grid[i].show();
    }
}
  
function createGrid() {
    for(var i = 0; i < resolution * resolution; i++)
    {
        new Pixel();
    }
}

function getSigned(value) {
    if (value < 0.5) return "No"
    else 
    isSigned = true;
    return "Yes";
}

function getResolution(value) {
    return resolution;
}