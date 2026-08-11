let focalPos;

let canvasWidth = 940;
let canvasHeight = 940;

let incramentOrd = 0;
let zValue = 0;


let color1;
let color2;

let colorLib =[];
let backGroundLib =[];

let amountOfCubes = 100;

let cubes = [];

function setup() {

    /*
    "#052f5f",
    "#06a77d",
    "#d5c67a",
    "#f49e4c",
    "#005377",
    "#ab3428",
    "#0b7a75",
    "#8dab7f",
    "#394032",
    "#90708c",
    "#7b6d8d",
    "#BD803B",
    "#518A2E",
    "#793598",
    "#C14687",
    "#D34C4C",
    "#D3CF5B",
    "#28C2E1",
    "#A296D5",
    "#DA884A"*/
    colorLib = ["#F08D7E", "#EFA18A", "#E2BAB1", "#DDA6B9", "#ACAEC5", // Cloud Color Palette
        "#BEFCFF", "#DEFFFA", "#FFDAF5", "#B0E1FF", "#E6C6FF", // Kawaii Pastel Color Palette
        "#596854", "#7F803E", "#CC9A52", "#AD794B", "#FCE4B4", // Cottagecore Color Palette
        "#A653F5", "#8F8CF2", "#65B8BF", "#F96CFF", "#FA92FB", // Vaporwave Color Palette
        "#674AB3" , "#A348A6" , "#9F63C4" , "#9075D8" , "#CEA2D7", // Lofi Aesthetic Color Palette
    "#461E52" , "#DD517F" , "#E68E36" , "#556DC8" , "#7998EE", // Synthwave Sunset Color Palette
    "#362FBB" , "#712275" , "#F97698" , "#FFB845", // Outrun Aesthetic Color Palette
    "#FF68A8" , "#64CFF7" , "#F7E752" , "#CA7CD8" , "#3968CB", // 80s Color Palette
    "#842D78" , "#174DB1", "#297EA1" , "#E5A836" , "#B2336C" // 90s Color Palette
];


    backGroundLib = [
        "#0F0E14",
        "#090C11",
        "#07070B",
        "#041115",
        "#15040B",
        "#150904",
        "#221211",
        "#151104",
        "#131504",
        "#140A01",
        "#1D0D12",
        "#25160F",
        "#161815",
        "#0C140E"];


    window.$fxhashFeatures = {
        "Number Of Background Cubes": fxrand() * 50 + 20,
        "Background Cube Size": fxrand() * 100 + 50,
        "CubeSize": fxrand() * 30 + 57,
        "Camera Offset": fxrand() * 75 - 25,
        "Color1": colorLib[parseInt(RandomNumber(0, colorLib.length))],
        "Color2": backGroundLib[parseInt(RandomNumber(0, backGroundLib.length))]
    }

    color1 = color(window.$fxhashFeatures.Color1);
    color2 = color(window.$fxhashFeatures.Color2);
    var size = window.$fxhashFeatures.CubeSize;
    var bgCubeSize = window.$fxhashFeatures["Background Cube Size"];
    var numOfCubes = window.$fxhashFeatures["Number Of Background Cubes"];
    var cameraOffset = window.$fxhashFeatures["Camera Offset"];

    rectMode(CENTER);
    angleMode(DEGREES);

    createCanvas(canvasWidth, canvasHeight);

    var scaleAmount = 2.2;

    //Used for changing brightness of colours that have been spawned first
    incramentOrd = amountOfCubes * 1.5;

    var color2RGB = decreaseHexBrightness(color1, incramentOrd / 4);
    background(color2RGB);


    //Sets focal point
    focalPos = createVector(width / 2,height / 2);


    //Creates black plane under boxes in case there is a gap

    fill(0);
    rect(width / 2, height + (height / 2), width, height);
    fill(0);


    push();

    blendMode(OVERLAY);
    var t = 20;
    patternColors([color("#b5b5b5"), color("#6e6e6e")]);

    pattern(PTN.wave(t /0.5, t / 10, t / 5, t / 10));
    rectPattern(width / 2, height / 2, width, height);

    pop();



    stroke(color(0,0,0,0));
    fill(color(255,255,255, 10));
    for(let i = 0; i < 5; i++){
        ellipse(i * RandomNumber(0,width / 7), i * RandomNumber(0,height / 7), 200, 200);

        //triangle(random(width, width + width), random(height, height + height), random(0, 0 - width), random(height), random(width), random(0, 0 - height));
    }

    //Creates triangles for bg
    noFill();
    setLineDash([5]);
    stroke(color1);

    strokeWeight(RandomNumber(0.5, 1));




    for(let i = 0; i < 20; i++){
        ellipse(i * RandomNumber(0,width / 7), i * RandomNumber(0,height / 7), 500, 500);

        //triangle(random(width, width + width), random(height, height + height), random(0, 0 - width), random(height), random(width), random(0, 0 - height));
    }

    //Cube stoke settings
    strokeWeight(1);
    stroke(color(0,0,0,20));

    setLineDash([1]);



    var Lx = 0;
    var Rx = width;



    //Y pos of starting Row
    var yRow = 150 * scaleAmount;

    var amountOfRows = 13;
    zValue = amountOfRows;

    push();
    var fogColour = decreaseHexBrightness(color1,-10);
    drawingContext.shadowColor = fogColour;

    drawingContext.shadowBlur = 10;

    for(let i = 0; i < numOfCubes; i++){
        var x = RandomNumber(0 - (50 * scaleAmount) , width + (50 * scaleAmount));
        var y = RandomNumber(0, 300);
        var s = RandomNumber(75, 200);

        var r = RandomNumber(0, 90);
        rotate(r);



        GenerateCube(x, y, bgCubeSize, 0.2, true);

    }
    drawingContext.shadowBlur = 0;

    pop();




    for(let i = 0; i < amountOfRows; i++){
        //Changes the y row every collumn drawn
        yRow += (20 * scaleAmount);

         Lx = 0;
         Rx = width;

         //Changes the x offset of the collumns
         var rowOffset = int(RandomNumber(-1 * (20 * scaleAmount), (scaleAmount * 20)));

         zValue--;

        for(let j = 0; j < 9; j++){
            incramentOrd -= 68;

            rotate(i / cameraOffset);

            var randInt = int(RandomNumber(0, 10));

            if(randInt == 1 && i < 10){
                continue;
            }

            //Generates an offset for y
            var y = RandomNumber(yRow - 10, yRow + 10);

            GenerateCube(Lx + rowOffset, y  + (Lx / 4) , size, 0.2, false);



            //Generates an offset for y

            var y = RandomNumber(yRow - 10, yRow + 10);


            GenerateCube(Rx + rowOffset, y + (Lx / 4) , size, 0.2, false);

            var offset = size;

            Lx += offset;
            Rx -= offset;

        }
    }



    //console.log(cubes);


    //frameRate(50);



    granulate(7);

    fxpreview();


}


function RandomNumber(min, max) {
    return fxrand() * (max - min) + min;
}



function setLineDash(list) {
    drawingContext.setLineDash(list);
}

function GenerateCube(x,y,size, t, floating){

    //Front vertices
    var p1 = new Point(x - (size / 2), y - (size / 2));
    var p2 = new Point(x + (size / 2), y - (size / 2));
    var p3 = new Point(x - (size / 2), y + (size / 2));
    var p4 = new Point(x + (size / 2), y + (size / 2));

    var vertices = [p1, p2, p3, p4];


    var _p1 = createVector(p1.x, p1.y);
    var p1Offset = DrawPointBetweenTwoVectors(_p1, focalPos, t);

    var _p2 = createVector(p2.x, p2.y);
    var p2Offset = DrawPointBetweenTwoVectors(_p2, focalPos, t);

    var _p3 = createVector(p3.x, p3.y);
    var p3Offset = DrawPointBetweenTwoVectors(_p3, focalPos, t);

    var _p4 = createVector(p4.x, p4.y);
    var p4Offset = DrawPointBetweenTwoVectors(_p4, focalPos, t);


    fill(0);
    if(!floating && (zValue > 10)){



        quad(p3.x, p3.y, p3.x, height, p4.x, height, p4.x, p4.y);
        quad(p4.x, p4.y , p4.x, height, p4Offset.x, height, p4Offset.x, p4Offset.y);


    }

    var dX = Math.abs( focalPos.x - x);
    var dY = Math.abs(focalPos.y - y);


    //If diference in x is bigger than y then render the side faces last

    var topFace;
    var leftFace;
    var bottomFace;
    var rightFace;

    if(dX > dY){

        if(y > focalPos.y){

            topFace = new Face(p1, p1Offset, p2, p2Offset);
            topFace.drawFace();

        }
        else{
            bottomFace = new Face(p3, p3Offset, p4, p4Offset);
            bottomFace.drawHorizontalFace();

        }
        if(x > focalPos.x){
            leftFace = new Face(p1, p1Offset, p3, p3Offset);
            leftFace.drawVerticalFace();
        }
        else
        {
            rightFace = new Face(p2, p2Offset, p4, p4Offset);
            rightFace.drawVerticalFace();
        }
    }
    else{
        if(x > focalPos.x){
            leftFace = new Face(p1, p1Offset, p3, p3Offset);
            leftFace.drawVerticalFace();
        }
        else
        {
            rightFace = new Face(p2, p2Offset, p4, p4Offset);
            rightFace.drawVerticalFace();
        }
        if(y > focalPos.y){
            topFace = new Face(p1, p1Offset, p2, p2Offset);
            topFace.drawFace();

        }
        else{
            bottomFace = new Face(p3, p3Offset, p4, p4Offset);
            bottomFace.drawHorizontalFace();

        }
    }


    var frontFace = new Face(p1, p2, p3, p4);
    frontFace.drawHorizontalFace();

    var cube = new Cube(x,y,size,topFace, frontFace, leftFace, rightFace, bottomFace);
    cubes.push(cube);


}

function DrawPointBetweenTwoVectors(v1, v2, t){


    var pointPos = p5.Vector.lerp(v1, v2, t);

    fill(color(255,0,0));
    //ellipse(pointPos.x, pointPos.y, 5);

    return new Point(pointPos.x, pointPos.y)
}


function decreaseHexBrightness(hex, amount) {


    return color(hex.levels[0] - amount, hex.levels[1] - amount, hex.levels[2] - amount);
}

function granulateRedShift(amount) {
    loadPixels();
    const d = pixelDensity();
    const pixelsCount = 4 * (width * d) * (height * d);
    for (let i = 0; i < pixelsCount; i += 4) {
        pixels[i] = pixels[i] + amount;
        pixels[i+1] = pixels[i+1] + random(-amount, amount);
        pixels[i+2] = pixels[i+2] + random(-amount*2, amount*2);
        // comment in, if you want to granulate the alpha value
        // pixels[i+3] = pixels[i+3] + random(-amount*2, amount*2);
    }
    updatePixels();
}

function granulate(amount){
    loadPixels();
    const d = pixelDensity();
    const pixelsCount = 4 * (width * d) * (height * d);
    for (let i = 0; i < pixelsCount; i += 4) {
        const grainAmount = random(-amount, amount);
        pixels[i] = pixels[i] + grainAmount;
        pixels[i+1] = pixels[i+1] + grainAmount;
        pixels[i+2] = pixels[i+2] + grainAmount;
        // comment in, if you want to granulate the alpha value
        // pixels[i+3] = pixels[i+3] + grainAmount;
    }
    updatePixels();
}

class Cube {
    constructor(x, y, size ,topFace, frontFace, leftFace, rightFace, bottomFace) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.topFace = topFace;
        this.frontFace = frontFace;
        this.leftFace = leftFace;
        this.rightFace = rightFace;
        this.bottomFace = bottomFace;
    }
}

class Face {
    constructor(p1, p2, p3, p4) {
        this.p1 = p1;
        this.p2 = p2;
        this.p3 = p3;
        this.p4 = p4;
    }

    drawHorizontalFace(){

        //Sets gradient and draw face
        // Gradient colours are adjusting depending on z value

        var color2RGB = decreaseHexBrightness(color2, incramentOrd)
        var color1RGB = decreaseHexBrightness(color1, incramentOrd)

        color2RGB = decreaseHexBrightness(color2, (zValue * 4));
        color1RGB = decreaseHexBrightness(color1, (zValue * 6));

        let gradient = drawingContext.createLinearGradient(this.p1.x,this.p1.y - 20, this.p3.x, this.p3.y);
        gradient.addColorStop(0, color1RGB);
        gradient.addColorStop(1, color2RGB);
        drawingContext.fillStyle = gradient;

        quad(this.p1.x, this.p1.y, this.p2.x, this.p2.y, this.p4.x, this.p4.y, this.p3.x, this.p3.y);

    }

    drawVerticalFace(){

        //Sets gradient and draw face
        // Gradient colours are adjusting depending on z value

        var color2RGB = decreaseHexBrightness(color2, incramentOrd)
        var color1RGB = decreaseHexBrightness(color1, incramentOrd)

        color2RGB = decreaseHexBrightness(color2, (zValue * 4));

        color1RGB = decreaseHexBrightness(color1, (zValue * 6));

        let gradient = drawingContext.createLinearGradient(this.p2.x,this.p2.y - 20, this.p4.x, this.p3.y);
        gradient.addColorStop(0, color1RGB);
        gradient.addColorStop(1, color2RGB);
        drawingContext.fillStyle = gradient;


        quad(this.p1.x, this.p1.y, this.p2.x, this.p2.y, this.p4.x, this.p4.y, this.p3.x, this.p3.y);

    }


    drawFace(){



        //This face has no gradient applied
        var color2RGB = decreaseHexBrightness(color1, (zValue * 4))

        fill(color2RGB)

        quad(this.p1.x, this.p1.y, this.p2.x, this.p2.y, this.p4.x, this.p4.y, this.p3.x, this.p3.y);
    }



}

class Point {
    constructor(x, y) {

        this.x = x;
        this.y = y;

    }

    drawPoint(){
        fill(color(255,0,0))
        ellipse(this.x, this.y, 5);

    }

    drawLineToFocal(){

        var pos = createVector(this.x, this.y);


        let newPoint = DrawPointBetweenTwoVectors(pos, focalPos, 0.4);

        line(pos.x, pos.y, newPoint.x, newPoint.y);
    }


}