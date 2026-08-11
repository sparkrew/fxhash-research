let index;
let shape, x1, y1, x2, y2, x3, y3, smallColor;
let allObjects;
let centerObject, cicleSize;
let centerRotation, centerRotationFactor, centerRotationDirection;
let outerTriangles, innerShapes;
let smallCenterObjects;

function randomValue(){
    return fxrand();
    // return Math.random();
}

function setup() {
    captured = false;
    dimension = Math.min(windowWidth, windowHeight)
    centerObjectSize = (250/600)*dimension;
    smallObjecSize = (10/600)*dimension;
    
    createCanvas(dimension,dimension);
    background('#A9A9A9');
    const colors = ['#90F5BE', '#739FFF', '#E0A3E6', '#FAA77D','#F5E15D'];
    const originalColors = ['#90F5BE', '#739FFF', '#E0A3E6', '#FAA77D','#F5E15D'];

    const shapes = ['square', 'circle'];

    const outerColor = colors[Math.floor(randomValue() * colors.length)];
    index = colors.indexOf(outerColor);

    if (index > -1) {
        colors.splice(index, 1);
    }

    const containerColor = colors[Math.floor(randomValue() * colors.length)]
    index = colors.indexOf(containerColor);
    if (index > -1) {
        colors.splice(index, 1);
    }
    
    centerX = width/2;
    centerY = height/2;
    
    outerTriangles = Math.floor(randomValue() * 50) + 30;
    innerShapes = Math.floor(randomValue() * 15) + 10;

    fill(containerColor);
    stroke(containerColor);
    shape = shapes[Math.floor(randomValue() * shapes.length)];
    if (shape === 'square') {
        x1 = centerX - (125*dimension); 
        y1 = centerY - (125*dimension); 
        centerObject = ['square', x1, y1, centerObjectSize, centerObjectSize, containerColor]
    } else {
        centerObject = ['circle', centerX, centerY, centerObjectSize, containerColor]
    }
    centerRotation = 0;
    centerRotationFactor = randomValue() * (0.01 - 0.001) + 0.001;
    centerRotationDirection = 1*Math.round(randomValue()) ? 1 : -1;
    
    allObjects = [];
    smallCenterObjects = [];

    for (let outerCount = 0; outerCount < outerTriangles; outerCount += 1){
        smallColor = originalColors[Math.floor(randomValue() * originalColors.length)]
        fill(smallColor);
        stroke(smallColor);
        shape = shapes[Math.floor(randomValue() * shapes.length)];
        rotationFactor = randomValue() * (0.01 - 0.001) + 0.001
        rotationDirection = 1*Math.round(randomValue()) ? 1 : -1;
        rotationStartPoint = Math.floor(randomValue() * 359)
        x1 = Math.floor(randomValue() * ((400/600)*dimension)) - (dimension/2)
        y1 = Math.floor(randomValue() * dimension) - (dimension/2)
        x2 = centerX-((Math.sqrt(3)*125)/2)
        y2 = centerY+((3*125)/2 - 125)
        x3 = centerX+((Math.sqrt(3)*125)/2)
        y3 = y1
        allObjects.push(['triangle', x1, y1, x2, y2, x3, y3, rotationDirection, rotationFactor, rotationStartPoint, smallColor])
    }
    for (let outerCount = 0; outerCount < innerShapes; outerCount += 1){
        smallColor = originalColors[Math.floor(randomValue() * originalColors.length)]
        fill(smallColor);
        stroke(smallColor);
        shape = shapes[Math.floor(randomValue() * shapes.length)];
        rotationFactor = randomValue() * (0.01 - 0.001) + 0.001
        rotationDirection = 1*Math.round(randomValue()) ? 1 : -1;
        rotationStartPoint = Math.floor(randomValue() * 359)
        x1 = Math.floor(randomValue() * ((centerObjectSize*0.2) - 10)) + 10
        y1 = Math.floor(randomValue() * ((centerObjectSize*0.2) - 10)) + 10
        if (shape === 'square') {
            width = smallObjecSize;
            height = smallObjecSize;
            smallCenterObjects.push(['square', x1, y1, width, height, rotationDirection, rotationFactor, rotationStartPoint, smallColor])
        } else {
            diameter = smallObjecSize;
            smallCenterObjects.push(['circle', x1, y1, diameter, rotationDirection, rotationFactor, rotationStartPoint, smallColor])
        }
    }

    // Set fxhashFeatures
    window.$fxhashFeatures = {
        "Outer triangles": outerTriangles,
        "Inner shapes": innerShapes,
    }
}

function draw() {
    background('#A9A9A9');

    for (let i = 0; i < allObjects.length; i += 1){
        push();
        shape = allObjects[i]
        smallColor = shape[shape.length - 1]
        rotationFactor = shape[shape.length - 3]
        rotationDegree = shape[shape.length - 2]
        rotationDirection = shape[shape.length - 4]
        translate(centerX, centerY);
        if (rotationDegree > 359) {
            rotationDegree = 0;
        } else {
            rotationDegree += rotationFactor;
        }
        rotate(rotationDegree*rotationDirection);
        allObjects[i][shape.length - 2] = rotationDegree
        fill(smallColor);
        stroke(smallColor);
        rectMode(CENTER);
        if (shape[0] === 'square') {
            rect(shape[1], shape[2], shape[3], shape[4]);
        } else if (shape[0] === 'triangle') {
            triangle(shape[1], shape[2], shape[3], shape[4], shape[5], shape[6]);
        } else {
            circle(shape[1], shape[2], shape[3]);
        }
        pop();
    }

    shape = centerObject
    fill('#ffffff');
    stroke('#ffffff')
    cicleSize = centerObjectSize*0.6;
    circle(centerX, centerY, cicleSize);
    c = shape[shape.length - 1];

    for (let i = 0; i < smallCenterObjects.length; i += 1){
        push();
        rectMode(CENTER);
        shape = smallCenterObjects[i]
        smallColor = shape[shape.length - 1]
        rotationFactor = shape[shape.length - 3]
        rotationDegree = shape[shape.length - 2]
        rotationDirection = shape[shape.length - 4]
        translate(centerX, centerY);
        if (rotationDegree > 359) {
            rotationDegree = 0;
        } else {
            rotationDegree += rotationFactor;
        }
        rotate(rotationDegree*rotationDirection);
        smallCenterObjects[i][shape.length - 2] = rotationDegree
        fill(smallColor);
        stroke(smallColor);
        rectMode(CENTER);
        if (shape[0] === 'square') {
            rect(shape[1], shape[2], shape[3], shape[4]);
        } else if (shape[0] === 'triangle') {
            triangle(shape[1], shape[2], shape[3], shape[4], shape[5], shape[6]);
        } else {
            circle(shape[1], shape[2], shape[3]);
        }
        pop();

        if (!captured){
            fxpreview()
            captured = true;
        }
    }
}