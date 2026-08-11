/*
----------------------------------------------
 ___ _   _ _____ ___ _   _ ___ _____ _____  __     _____ ___ ____  ____  
|_ _| \ | |  ___|_ _| \ | |_ _|_   _| ____| \ \   / / _ \_ _|  _ \/ ___| 
 | ||  \| | |_   | ||  \| || |  | | |  _|    \ \ / / | | | || | | \___ \ 
 | || |\  |  _|  | || |\  || |  | | | |___    \ V /| |_| | || |_| |___) |
|___|_| \_|_|   |___|_| \_|___| |_| |_____|    \_/  \___/___|____/|____/ 

Tittle  | Infinite Voids 
Version | @v.1.0
Author  | Jorge Dabaliña

This program is the source code for the 
generation of an NFT collection in FXHash
minting platfortm.

---------------------------------------------- */

const colors = [{
        bg: 0,
        fill: 255,
        stroke: "none"
    }, {
        bg: 255,
        fill: (255, 0, 0),
        stroke: "none"
    },
    {
        bg: 255,
        fill: 0,
        stroke: 255
    },
    {
        bg: 0,
        fill: 255,
        stroke: 255
    },
    {
        bg: 0,
        fill: 255,
        stroke: 0,
    },
    {
        bg: 255,
        fill: 0,
        stroke: 0,
    },
    {
        bg: 255,
        fill: 255,
        stroke: 0,
    },
    {
        bg: 0,
        fill: 0,
        stroke: 255,
    },
    {
        bg: 200,
        fill: 150,
        stroke: 255,
    }
];

let divisions;
let inc;
let animationSpeed = 0.2;
let sided = false;
let shape;
let shapeW, shapeH;
let colorIndex;
let fill, bg, strokeC;
let strokeSizes;

let speed = 0;
let angle = 0;
let drawing = true;
let mode = true;
let filled = true;

let canvas, canvasSize, s;
let leftPart, rightPart;

let w2, w3, w4, w9;
let w = window.innerWidth;
let h = window.innerHeight;

let colorFeature;
let strokeFeature;
let shapeSizeFeature;
let reversedFeature;
let features;

new Object(features);

features = {
    colorFeatures: ["Dark", "Light", "Ultra Dark", "Ultra Light", "Grey"],
    strokeFeatures: ["No stroke", "Regular stroke", "Big stroke"],
    shapeSizeFeatures: ["Average", "Big", "small", "Extreme", "Perfect big", "Perfect Small", "Randomly perfect!!"],
    reversedFeatures: ["Classic", "Reversed"],
};

function setup() {


    if (w < h) {
        s = w;
    } else {
        s = h;
    }

    canvas = createCanvas(s, s);

    pixelDensity(1);

    w2 = s / 2;
    w3 = s / 3;
    w4 = s / 4;
    w9 = s / 9;
    w16 = s / 16;

    setupRndm();
    displayParts();
    setupClrs();

    myfeatures();

    window.$fxhashFeatures = {
        "Palette": colorFeature,
        "Stroke": strokeFeature,
        "Shape": shape,
        "Shape size": shapeSizeFeature,
        "Simetry": divisions,
        "Density": inc,
        "Speed": speed,
        "Composition": reversedFeature,
    };
};



function draw() {
    w = window.innerWidth;
    h = window.innerHeight;

    leftPart.background(bg);
    rightPart.background(bg);

    angle = animationSpeed;
    mode = true;
    drawing = true;

    while (drawing == true) {
        let x = cos(radians(angle)) * w4 + w2;
        let y = sin(radians(angle)) * w4 + w2;

        let rotation = radians(angle) * divisions;

        if (mode) {
            leftPart.fill(fill);
            rightPart.fill(fill);
        } else {
            leftPart.fill(bg);
            rightPart.fill(bg);
        }

        if (angle <= 360) {
            leftPart.push();
            leftPart.translate(x, y);
            leftPart.rotate(rotation);
            if (shape == "Rounded") {
                leftPart.ellipse(0, 0, shapeW, shapeH);
            };
            if (shape == "Squared") {
                leftPart.rect(0, 0, shapeW, shapeH);
            }
            leftPart.pop();
        }
        if (angle <= 540) {
            rightPart.push();
            rightPart.translate(x - w2, y);
            rightPart.rotate(rotation);
            if (shape == "Rounded") {
                rightPart.ellipse(0, 0, shapeW, shapeH);
            };
            if (shape == "Squared") {
                rightPart.rect(0, 0, shapeW, shapeH);
            }
            rightPart.pop();

        }

        angle += inc;
        mode = !mode;

        if (angle > 540) drawing = false;

    }

    if (!sided) {
        image(leftPart, 0, 0);
        image(rightPart, w2, 0);
    } else {
        image(leftPart, w2, 0);
        image(rightPart, 0, 0);
        noFill();
        strokeWeight(40);
        rect(0, 0, s, s);
    }



    animationSpeed -= speed;

}

function windowResized() {
    // don't forget to resize the canvas when the window changes
    w = window.innerWidth;
    h = window.innerHeight;

    if (w < h) {
        s = w;
    } else {
        s = h;
    }

    resizeCanvas(s, s);

    w2 = s / 2;
    w3 = s / 3;
    w4 = s / 4;
    w9 = s / 9;
    w16 = s / 16;

    leftPart = createGraphics(w2, s);
    rightPart = createGraphics(w2, s);

    redraw();

}