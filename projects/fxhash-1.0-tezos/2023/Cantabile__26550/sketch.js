//////////////////////////////////////////////////
// GENESIS PROJECT ON FXHASH
// Collection: CANTABILE
// Filename: sketch.js
// Project Author: Neverfamousartists, Jan Studio 
// Twitter: @nfamousartists, @jan_studio8
// Date: 1 April 2023
//////////////////////////////////////////////////

// +++++++++++++++++++ DO NOT CHANGE +++++++++++++++++
// PREPARE VARIABLE TO CONTROL PRNG FUNCTIONALITY
let seed = 0; // to hold random seed
//++++++++++++++++++++++++++++++++++++++++++++++++++++

let left_x; let right_x; let top_y; let bottom_y;
let left_margin; let right_margin; let top_margin; let bottom_margin;
let resolution; let num_columns; let num_rows; let scalingFactor;
let grid;

//let flowers=[];
let colorPalette;
let flowerColors=[]; let blobColors=[]; 
let bgColor;
let minRadius=5;

let totalFlows;
let flowCount=0;
let stepRange=[50,80];
let petalSizeRange=[20,50];

// PRE-LOAD
function preload()  
{
    // +++++++++++++++++++ DO NOT CHANGE +++++++++++++++++
    // SET SEED TO CONTROL PRNG FUNCTION REQUIRED BY fx(hash)
    seed = int(fxrand() * 999999999);
    // +++++++++++++++++++++++++++++++++++++++++++++++++++


    // +++++++++++++++++++ RECOMMENDATION ++++++++++++++++
    // Initialize color system
    colorMode(HSB, 360, 100, 100, 100);
    // you will have finer control over color in your work if you use the HSB model from the start
    // +++++++++++++++++++++++++++++++++++++++++++++++++++
}  

function setup() {
    
    // settings
    //createCanvas(2480, 3508); // 300dpi for A4 print
    //createCanvas(900, 1600); //token frame size
    createCanvas(1800, 3200); //token frame ratio
    left_margin=width*0.07; right_margin=width*0.07; top_margin=width*0.07; bottom_margin=width*0.07;
    angleMode(DEGREES);
    frameRate(6)
    
    // ++++++++++++ DO NOT CHANGE ++++++++++++++++++++++++++
    // Initialize PRNG environment required by fx(hash)
    randomSeed(seed);
    noiseSeed(seed);
    // DO NOT CALL ANY RANDOM FUNCTIONS PRIOR TO THESE TWO LINES!
    // You will see code in which these lines are placed in the setup function.
    // They need to go here in the draw function so that the resize and save functionality
    // given below work properly.  This will also be true of any code you
    // write that redraws the canvas.  Having these two statements in the draw
    // function will allow redrawing to occur while maintaining the 
    // deterministic quality required by fx(hash).
    // +++++++++++++++++++++++++++++++++++++++++++++++++++++
    
    // setup flow grids
    setupFlowGrids();
    
    // create color palette
    createColorPalette();
    
    // create background texture
    createBackground();
    
    // create watercolor blobs
    let n=5; // num of vertices
    let blobsRange=[10,15]; // min/max num of blobs
    createBlobs(n,blobsRange);
    
    totalFlows=50+floor(fxrand()*30);
    print('number of flows:', totalFlows)
}

function draw(){
    
    let x=floor(fxrand()*(width)); let y=floor(fxrand()*(height));
    let numSteps=floor(stepRange[0]+fxrand()*(stepRange[1]-stepRange[0]));
    let petalRadius=floor(petalSizeRange[0]+fxrand()*(petalSizeRange[1]-petalSizeRange[0]));
    drawSakura(x,y,numSteps,petalRadius);
    
    flowCount++;
    if(flowCount>=totalFlows){
        fxpreview();
        noLoop()
    }
    
    //fillwithSakura(floor(random(50,80)),[20,50],[50,80]) // fillwithSakura(numFlow,petalSizeRange,stepRange)
    
//    // +++++++++++++++++++ DO NOT CHANGE +++++++++++++++++
//    // REQUIRED BY FXHASH
//    // call fxpreview once confirmation that preview is ready
//    i = 0;
//    while (i != 1) 
//    {
//      if ((isFxpreview = true)) {fxpreview(); i = 1;}
//    }
//    // +++++++++++++++++++++++++++++++++++++++++++++++++++
    
//    noLoop();
}

function setupFlowGrids(){
    // set up grids
    left_x = 0; 
    right_x = floor(width);
    top_y = 0;
    bottom_y = floor(height);
    
    // let the flowers grow from 2 of 4 sides
    let c=random(1);
    if(c<0.25){
        left_x=floor(left_margin); 
        top_y = floor(top_margin);
    }else if(c<0.5){
        left_x=floor(left_margin);
        bottom_y = floor(height-bottom_margin);
    }else if(c<0.75){
        right_x = floor(width-right_margin);
        top_y = floor(top_margin);
    }else{
        right_x = floor(width-right_margin);
        bottom_y = floor(height-bottom_margin);
    }
    
    scalingFactor = 0.01;
    grid = new FlowGrid(left_x, right_x, top_y, bottom_y, scalingFactor);
}

function createColorPalette(){
    
    // define color palette
    let c=random(1);
    if(c<0.05){
        colorPalette=getBlueSakuraPalette();
    }
    else if(c<0.3){
        colorPalette=getYellowSakuraPalette();
    }
    else{
        colorPalette=getPinkSakuraPalette();
    }
    
    flowerColors=colorPalette[0];
    bgColor=colorPalette[1];
    blobColors=colorPalette[2];
    
}

function createBackground(){
    background(bgColor);
    noStroke();
    paperTexture(bgColor); // curve and points
}

function createBlobs(n,blobsRange){ //n: number of vertices. max: number of blobs
    
    const m=floor(random(blobsRange[0],blobsRange[1]));
    const blobs=[];
    const blobXYs=[];
    const blobSizes=[];
    for(let i=0;i<m;i++){// num of blobs
        blobs[i]=[]
        let blobXY=[width*(0.2+random([0,0.5])*0.5+random(0.3)),(height/(m+1))*i+height/(2*(m+1))+(random(height/(2*(m+1))))];
        let blobSize=random(height/(3*m),height/(m))
        blobXYs.push(blobXY); blobSizes.push(blobSize);
        //print('blobXY,blobSize', blobXY,blobSize)
        for(let j=0;j<n;j++){
            let a=j*(360/n);
            blobs[i].push(createVector(blobXY[0]+cos(a)*blobSize,blobXY[1]+sin(a)*blobSize));
        }
    }
    
    for(let i=0;i<blobs.length;i++){
        let c=blobColors[floor(random(blobColors.length))];
        waterColor(new POLYGON(blobs[i]),c)
    }
}

function fillwithSakura(numFlow,petalSizeRange,stepRange){
    for (let i=0; i<numFlow; i++){
        x=floor(random(width)); y=floor(random(height));
        numSteps=floor(random(stepRange[0],stepRange[1]));
        let petalRadius=floor(random(petalSizeRange[0],petalSizeRange[1]));
        drawSakura(x,y,numSteps,petalRadius);
    }
}

function drawSakura(x,y,numSteps,petalRadius){
    
    let x_offset; let y_offset; let stepLength; let fColor;
    for(let i=0; i<numSteps; i++){
        x_offset = x-grid.left_x;
        y_offset = y-grid.top_y;
        column_index = floor(x_offset / grid.resolution);
        row_index = floor(y_offset / grid.resolution);
        
        if (column_index<0 || row_index<0 || column_index>=grid.num_columns || row_index>=grid.num_rows){
            break;
        }
        grid_angle = grid.grid[column_index][row_index]; //grid angle
        
        stepLength=5*petalRadius;
        x_step = stepLength * cos(grid_angle);
        y_step = stepLength * sin(grid_angle);
        x_new = x + x_step;
        y_new = y + y_step;
        
        fColor=flowerColors[floor(random(flowerColors.length))];
        if(petalRadius<minRadius){
            push()
            fill(hue(fColor),saturation(fColor)*random(0.7,1.2),brightness(fColor)*random(0.7,1.0),alpha(fColor)*0.5)
            circle(x, y, petalRadius)
            fill(0,0,100,100)
            circle(x, y, petalRadius*0.3)
            pop()
        }
        else if(petalRadius<2*minRadius){
            let pColor;
            pColor=color(hue(fColor),saturation(fColor)*random(0.7,1.2),brightness(fColor)*random(0.7,1.0),alpha(fColor)*0.5);
            createWcPatch(pColor, x, y, [petalRadius*0.7,petalRadius*1.4])
            fill(0,0,100,100)
            circle(x, y, petalRadius*0.2)
        }
        else{
            let sakura=new SAKURA(fColor, x, y, [petalRadius*0.8,petalRadius*1.2])
            sakura.show()
        }
        x = x_new; y = y_new; 
        petalRadius=max(0.5,random(1.5))*petalRadius;       
    }
}

function paperTexture(pColor){
    noFill();
    textureNum = width*height/200;
    print('texture number:', textureNum)
    for(i=0;i<textureNum;i++){
        stroke(hue(pColor)*random(-1,1),saturation(pColor)*random(0.8,1.2),brightness(pColor)*random(0.8,1.2),alpha(pColor));
        x = random(-width*0.1,width*1.1);
        y = random(-height*0.1,height*1.1);
        push();
        translate(x,y);
        strokeWeight(3);
        point(0,0);
        strokeWeight(1);
        rotate(random(360));
        //curve(random(60,220),0,0,random(-50,50),random(-50,50),random(60,120),random(60,120),random(60,220));
        curve(random(120,440),0,0,random(-100,100),random(-100,100),random(120,240),random(120,240),random(120,440));
        pop();
    }
}

function rand() {
    return distribute(random(1));
}

function distribute(x) {
    return pow((x - 0.5) * 1.58740105, 3) + 0.5; // normal distribution around (x-0.5)
}

//function mouseClicked() {
//    saveCanvas('flowers', 'png')
//}

function keyPressed() {
	if (key.toLowerCase() === "s"){
        saveCanvas(seed+'.png')
    }
}