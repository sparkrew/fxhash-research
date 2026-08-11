/*
DMT by UpOnlyFan August 2022

The Spirit Molecule, an experience out of this world, available in this world.

What will you see when you take your =DMT=? I wish you a great trip.

Groups of color palettes, lines and bezier curves combine to create what sometimes looks like a sun, an eye, a flower, an explosion, a pair of wings or a combination of these.

I hope in the future Psychedelics will be accessible to people in controlled settings with professional care and support. 
The Ayahuasca ceremonies happening around the world are a good step in this direction.

Press 's' to save a 3000x3000 px PNG.

Created by UpOnlyFan in August 2022 with p5js.

@(=_=)- @brainspinky2014 ¬(=_=)7

*/

let cnv;
let x,y,x2,y2;
let colorPalette1, colorPalette2;

let form;
let lines;
let variant;

let radMul;

let degPlus;

let radius;
let radiusMinus;
let multiOrDivi;
let multiplier;
let strokeW;
let strokeOrFill;
let strokeAlpha;
let fillAlpha;
let strokeColor;
let fillColor;
let solid;

let run;
let xyRndm;
let palettes;
let colors;
let formVariables;
let strokeOrFillVariables;
let linesChoice;
let variantChoice;
let strokeOrFillChoice;

let xRadRndm1;
let xRadRndm2;
let yRadRndm1;
let yRadRndm2;

let palettesName;
let colorsName;
let xyRndmName;
let linesName;
let variantName;
let formName;
let strokeOrFillName;
let sOFVariablesName;
let solidName;

function getRandomInt(max) {
    return Math.floor(fxrand() * max);
}

  
function mousePressed() {
    noLoop();
}

function keyTyped() {
    if (key === 's') {
        saveCanvas('=DMT=_' + fxhash, 'png');
    }
}

function chooseColors(){
    if(palettes === 0){
        colorPalette1 = getRandomInt(multiColor.length);
        colorPalette2 = getRandomInt(multiColor.length);
    }else if(palettes === 1){
        colorPalette1 = getRandomInt(highContrast.length);
        colorPalette2 = getRandomInt(highContrast.length);
    }else if(palettes === 2){
        colorPalette1 = getRandomInt(pastel.length);
        colorPalette2 = getRandomInt(pastel.length);
    }else{
        colorPalette1 = getRandomInt(monochrome.length);
        colorPalette2 = getRandomInt(monochrome.length);
    }
    //print("colorPalette1",colorPalette1);
    //print("colorPalette2",colorPalette2);
}

function chooseXYRndm(){
    xRadRndm1 = random(0.2,5);
    xRadRndm2 = random(0.2,5);
    yRadRndm1 = random(0.2,5);
    yRadRndm2 = random(0.2,5);
    //print("xRadRndm1",xRadRndm1);
    //print("xRadRndm2",xRadRndm2);
    //print("yRadRndm1",yRadRndm1);
    //print("yRadRndm2",yRadRndm2);
}

function chooseFormVariables(){
    radiusMinus = getRandomInt(49)+2;
    degPlus = random(0.4,5);
    //radiusMinus = 50;
    //degPlus = 0.4;
    //print("radiusMinus",radiusMinus);
    //print("degPlus",degPlus);
}

function chooseStrokeFillVariables(){
    strokeW = getRandomInt(9)+2;
    strokeAlpha = getRandomInt(13)+3;
    if(solid === 1){
        fillAlpha = getRandomInt(50)+150;
    }else{
        fillAlpha = getRandomInt(13)+3;
    }
    //print("strokeW",strokeW);
    //print("strokeAlpha",strokeAlpha);
    //print("fillAlpha",fillAlpha);
}

function setup() {
    let start = millis();

    Math.random = fxrand;
    randomSeed(fxrand() * 999999);
    noiseSeed(fxrand() * 999999);

    cnv = createCanvas(3000, 3000);
    background(0);
    angleMode(DEGREES);
    noLoop();

    getColors();
    drawColors();

    x = width/2;
    y = height/2;

    run = getRandomInt(2)+1;
    palettes = getRandomInt(4);
    colors = getRandomInt(4);
    xyRndm = getRandomInt(4);
    linesChoice = getRandomInt(2);
    variantChoice = getRandomInt(4);
    formVariables = getRandomInt(4);
    strokeOrFillChoice = getRandomInt(3);
    strokeOrFillVariables = getRandomInt(4);
    solid = getRandomInt(3);

    //run = 1;
    //palettes = 0;
    //colors = 0;
    //xyRndm = 0;
    //linesChoice = 0;
    //variantChoice = 0;
    //formVariables = 0;
    //strokeOrFillChoice = 0;
    //strokeOrFillVariables = 0;
    //solid = 1;
    radMul = 4001;

    print("run", run);
    print("palettes", palettes);
    print("colors", colors);
    print("xyRndm", xyRndm);
    print("linesChoice", linesChoice);
    print("variantChoice", variantChoice);
    print("formVariables", formVariables);
    print("strokeOrFillChoice", strokeOrFillChoice);
    print("strokeOrFillVariables", strokeOrFillVariables);
    print("solid", solid);

    print("------------------------");

    if(colors === 0){
        chooseColors();
    }
    if(xyRndm === 0){
        chooseXYRndm();
    }
    if(linesChoice === 0){
        lines = getRandomInt(6);
        //lines = 3;
        //print("lines",lines);
    }
    if(variantChoice === 0){
        variant = getRandomInt(8);
        //variant = 3;
        //print("variant",variant);
    }
    if(formVariables === 0){
        chooseFormVariables();
    }
    if(strokeOrFillChoice === 0){
        strokeOrFill = getRandomInt(3);
        //strokeOrFill = 1;
        //print("strokeOrFill",strokeOrFill);
    }
    if(strokeOrFillVariables === 0){
        chooseStrokeFillVariables();
    }

    if(palettes === 0){
        palettesName = "Multicolor";
    }else if(palettes === 1){
        palettesName = "High Contrast";
    }else if(palettes === 2){
        palettesName = "Pastel";
    }else{
        palettesName = "Monochrome";
    }
    if(colors === 0){
        colorsName = "Once";
    }else if(colors === 1){
        colorsName = "Once per Run";
    }else if(colors === 2){
        colorsName = "Once per Form";
    }else{
        colorsName = "Multiple";
    }
    if(xyRndm === 0){
        xyRndmName = "Once";
    }else if(xyRndm === 1){
        xyRndmName = "Once per Run";
    }else if(xyRndm === 2){
        xyRndmName = "Once per Form";
    }else{
        xyRndmName = "Multiple";
    }
    if(linesChoice === 0){
        linesName = "Once";
    }else if(linesChoice === 1){
        linesName = "Once per Run";
    }else if(linesChoice === 2){
        linesName = "Once per Form";
    }
    if(variantChoice === 0){
        variantName = "Once";
    }else if(variantChoice === 1){
        variantName = "Once per Run";
    }else if(variantChoice === 2){
        variantName = "Once per Form";
    }else{
        variantName = "Multiple per Form";
    }
    if(formVariables === 0){
        formName = "Once";
    }else if(formVariables === 1){
        formName = "Once per Run";
    }else if(formVariables === 2){
        formName = "Once per Form";
    }else{
        formName = "Multiple per Form";
    }
    if(strokeOrFillChoice === 0){
        strokeOrFillName = "Once";
    }else if(strokeOrFillChoice === 1){
        strokeOrFillName = "Once per Run";
    }else if(strokeOrFillChoice === 2){
        strokeOrFillName = "Once per Form";
    }
    if(strokeOrFillVariables === 0){
        sOFVariablesName = "Once";
    }else if(strokeOrFillVariables === 1){
        sOFVariablesName = "Once per Run";
    }else if(strokeOrFillVariables === 2){
        sOFVariablesName = "Once per Form";
    }else{
        sOFVariablesName = "Multiple per Form";
    }
    if(solid === 1){
        solidName = "True";
    }else{
        solidName = "False";
    }

    window.$fxhashFeatures = {
        "Runs": run,
        "Palette Group": palettesName,
        "Choose Colors": colorsName,
        "Choose Bezier Variables": xyRndmName,
        "Choose Lines": linesName,
        "Choose Bezier Variations": variantName,
        "Choose Radius and Degrees": formName,
        "Choose Stroke or Fill": strokeOrFillName,
        "Choose Alpha and Strokeweight": sOFVariablesName,
        "Opaque": solidName
    }

    let end = millis();
    let elapsed = end - start;
    print("______________________");
    print("setup: " + floor(elapsed) + "ms.")
    print("0----------------------0");
}

function draw(){
    let start = millis();
    for(let r = 0; r<run; r++){
        form = getRandomInt(3)+1;
        //form = 1;
        print("form",form);
 
        if(colors === 1){
            chooseColors();
        }
        if(xyRndm === 1){
            chooseXYRndm();
        }
        if(linesChoice === 1){
            lines = getRandomInt(6);
            //print("lines",lines);
        }
        if(variantChoice === 1){
            variant = getRandomInt(8);
            //print("variant",variant);
        }
        if(formVariables === 1){
            chooseFormVariables();
        }
        if(strokeOrFillChoice === 1){
            strokeOrFill = getRandomInt(3);
            //print("strokeOrFill",strokeOrFill);
        }
        if(strokeOrFillVariables === 1){
            chooseStrokeFillVariables();
        }
        
        print("1------------------1");

        for(let f = 0; f<form;f++){

            if(colors === 2){
                chooseColors();
            }
            if(xyRndm === 2){
                chooseXYRndm();
            }
            if(variantChoice === 2){
                variant = getRandomInt(8);
            }
            if(formVariables === 2){
                chooseFormVariables();
            }
            if(strokeOrFillChoice === 2){
                strokeOrFill = getRandomInt(3);
            }
            if(strokeOrFillVariables === 2){
                chooseStrokeFillVariables();
            }

            radius = getRandomInt(400)+400;
            multiplier = getRandomInt(5)+1;
            if(radMul === 4001){
                while(radius*multiplier < 1400){
                    radius = getRandomInt(400)+400;
                    multiplier = getRandomInt(5)+1;
                }    
            }else{
                while(radius*multiplier >= radMul){
                    if(radius*multiplier === radMul){
                        radMul += 20;
                    }
                    radius = getRandomInt(400)+400;
                    multiplier = getRandomInt(5)+1;
                }
            }
            
            radMul = radius*multiplier;
            print("radius",radius);
            print("multiplier",multiplier);
            print("radMul", radMul);
     
            print("2--------------------2");

            while(radius > 1){
                if(colors === 3){
                    chooseColors();
                }
                if(xyRndm === 3){
                    chooseXYRndm();
                }
                if(variantChoice === 3){
                    variant = getRandomInt(8);
                }
                if(formVariables === 3){
                    chooseFormVariables();
                }
                if(strokeOrFillVariables === 3){
                    chooseStrokeFillVariables();
                }

                radius-= radiusMinus;

                for(let deg = 1;deg<360;deg+=degPlus){
                    x2 = x+(radius*multiplier)*cos(deg);
                    y2 = y+(radius*multiplier)*sin(deg);

                    let x3 = x+(radMul/3)*cos(deg);
                    let y3 = y+(radMul/3)*sin(deg);
 
                    if(palettes === 0){
                        strokeColor = multiColor[colorPalette1][getRandomInt(multiColor[colorPalette1].length)];
                        fillColor = multiColor[colorPalette2][getRandomInt(multiColor[colorPalette2].length)];
                    }else if(palettes === 1){
                        strokeColor = highContrast[colorPalette1][getRandomInt(highContrast[colorPalette1].length)];
                        fillColor = highContrast[colorPalette2][getRandomInt(highContrast[colorPalette2].length)];
                    }else if(palettes === 2){
                        strokeColor = pastel[colorPalette1][getRandomInt(pastel[colorPalette1].length)];
                        fillColor = pastel[colorPalette2][getRandomInt(pastel[colorPalette2].length)];
                    }else{
                        strokeColor = monochrome[colorPalette1][getRandomInt(monochrome[colorPalette1].length)];
                        fillColor = monochrome[colorPalette2][getRandomInt(monochrome[colorPalette2].length)];
                    }
                    strokeColor.setAlpha(strokeAlpha);
                    fillColor.setAlpha(fillAlpha);
                    strokeWeight(strokeW);
                    if(strokeOrFill === 0){
                        fill(fillColor);
                        noStroke();
                    }else if(strokeOrFill === 1){
                        stroke(strokeColor);
                        noFill();
                    }else{
                        stroke(strokeColor);
                        fill(fillColor);
                    }
                    
                    if(deg<=90){     
                        if(variant === 0){
                            bezier(x,y,x+radius,y+radius,x+radius,y+radius,x2,y2);
                        }else if(variant === 1){
                            bezier(x,y,x+radius,y+radius,x+radius/xRadRndm2,y+radius/yRadRndm2,x2,y2);
                        }else if(variant === 2){
                            bezier(x,y,x+radius/xRadRndm1,y+radius/yRadRndm1,x+radius,y+radius,x2,y2);
                        }else if(variant === 3){
                            bezier(x,y,x+radius/xRadRndm1,y+radius/yRadRndm1,x+radius/xRadRndm2,y+radius/yRadRndm2,x2,y2);
                        }else if(variant === 4){
                            bezier(x,y,x+radius/xRadRndm1,y+radius,x+radius/xRadRndm2,y+radius,x2,y2);
                        }else if(variant === 5){
                            bezier(x,y,x+radius,y+radius/yRadRndm1,x+radius,y+radius/yRadRndm2,x2,y2);
                        }else if(variant === 6){
                            bezier(x,y,x+radius/xRadRndm1,y+radius,x+radius,y+radius/yRadRndm2,x2,y2);
                        }else{
                            bezier(x,y,x+radius,y+radius/yRadRndm1,x+radius/xRadRndm2,y+radius,x2,y2);
                        }
                        strokeColor.setAlpha(3);
                        strokeWeight(1);
                        if(lines === 1){
                            line(x2,y2,x,y);
                        }else if(lines === 2){
                            line(x2,y2,width,height);
                        }else if(lines === 3){
                            if(x2>x3 && y2>y3){
                                line(x2,y2,x3,y3);
                            }
                        }else if(lines === 4){
                            if(deg<45){
                                line(x2,y2,width,height/2);
                            }else{
                                line(x2,y2,width/2,height);
                            }
                        }                
                    }else if(deg<=180){
                        if(variant === 0){
                            bezier(x,y,x-radius,y+radius,x-radius,y+radius,x2,y2);
                        }else if(variant === 1){
                            bezier(x,y,x-radius,y+radius,x-radius/xRadRndm2,y+radius/yRadRndm2,x2,y2);
                        }else if(variant === 2){
                            bezier(x,y,x-radius/xRadRndm1,y+radius/yRadRndm1,x-radius,y+radius,x2,y2);
                        }else if(variant === 3){
                            bezier(x,y,x-radius/xRadRndm1,y+radius/yRadRndm1,x-radius/xRadRndm2,y+radius/yRadRndm2,x2,y2);
                        }else if(variant === 4){
                            bezier(x,y,x-radius/xRadRndm1,y+radius,x-radius/xRadRndm2,y+radius,x2,y2);
                        }else if(variant === 5){
                            bezier(x,y,x-radius,y+radius/yRadRndm1,x-radius,y+radius/yRadRndm2,x2,y2);
                        }else if(variant === 6){
                            bezier(x,y,x-radius/xRadRndm1,y+radius,x-radius,y+radius/yRadRndm2,x2,y2);
                        }else{
                            bezier(x,y,x-radius,y+radius/yRadRndm1,x-radius/xRadRndm2,y+radius,x2,y2);
                        }
                        strokeColor.setAlpha(3);
                        strokeWeight(1);
                        if(lines === 1){
                            line(x2,y2,x,y);
                        }else if(lines === 2){
                            line(x2,y2,0,height);
                        }else if(lines === 3){
                            if(x2<x3 && y2>y3){
                                line(x2,y2,x3,y3);
                            }
                        }else if(lines === 4){
                            if(deg<135){
                                line(x2,y2,width/2,height);
                            }else{
                                line(x2,y2,0,height/2);
                            }    
                        }
                    }else if(deg<=270){
                        if(variant === 0){
                            bezier(x,y,x-radius,y-radius,x-radius,y-radius,x2,y2);
                        }else if(variant === 1){
                            bezier(x,y,x-radius,y-radius,x-radius/xRadRndm2,y-radius/yRadRndm2,x2,y2);
                        }else if(variant === 2){
                            bezier(x,y,x-radius/xRadRndm1,y-radius/yRadRndm1,x-radius,y-radius,x2,y2);
                        }else if(variant === 3){
                            bezier(x,y,x-radius/xRadRndm1,y-radius/yRadRndm1,x-radius/xRadRndm2,y-radius/yRadRndm2,x2,y2);
                        }else if(variant === 4){
                            bezier(x,y,x-radius/xRadRndm1,y-radius,x-radius/xRadRndm2,y-radius,x2,y2);
                        }else if(variant === 5){
                            bezier(x,y,x-radius,y-radius/yRadRndm1,x-radius,y-radius/yRadRndm2,x2,y2);
                        }else if(variant === 6){
                            bezier(x,y,x-radius/xRadRndm1,y-radius,x-radius,y-radius/yRadRndm2,x2,y2);
                        }else{
                            bezier(x,y,x-radius,y-radius/yRadRndm1,x-radius/xRadRndm2,y-radius,x2,y2);
                        }
                        strokeColor.setAlpha(3);
                        strokeWeight(1);
                        if(lines === 1){
                            line(x2,y2,x,y);
                        }else if(lines === 2){
                            line(x2,y2,0,0);
                        }else if(lines === 3){
                            if(x2<x3 && y2<y3){
                                line(x2,y2,x3,y3);
                            }
                        }else if(lines === 4){
                            if(deg<225){
                                line(x2,y2,0,height/2);
                            }else{
                                line(x2,y2,width/2,0);
                            }  
                        }
                    }else if(deg<=360){
                        if(variant === 0){
                            bezier(x,y,x+radius,y-radius,x+radius,y-radius,x2,y2);
                        }else if(variant === 1){
                            bezier(x,y,x+radius,y-radius,x+radius/xRadRndm2,y-radius/yRadRndm2,x2,y2);
                        }else if(variant === 2){
                            bezier(x,y,x+radius/xRadRndm1,y-radius/yRadRndm1,x+radius,y-radius,x2,y2);
                        }else if(variant === 3){
                            bezier(x,y,x+radius/xRadRndm1,y-radius/yRadRndm1,x+radius/xRadRndm2,y-radius/yRadRndm2,x2,y2);
                        }else if(variant === 4){
                            bezier(x,y,x+radius/xRadRndm1,y-radius,x+radius/xRadRndm2,y-radius,x2,y2);
                        }else if(variant === 5){
                            bezier(x,y,x+radius,y-radius/yRadRndm1,x+radius,y-radius/yRadRndm2,x2,y2);
                        }else if(variant === 6){
                            bezier(x,y,x+radius/xRadRndm1,y-radius,x+radius,y-radius/yRadRndm2,x2,y2);
                        }else{
                            bezier(x,y,x+radius,y-radius/yRadRndm1,x+radius/xRadRndm2,y-radius,x2,y2);
                        }      
                        strokeColor.setAlpha(3);
                        strokeWeight(1);
                        if(lines === 1){
                            line(x2,y2,x,y);
                        }else if(lines === 2){
                            line(x2,y2,width,0);
                        }else if(lines === 3){
                            if(x2>x3 && y2<y3){
                                line(x2,y2,x3,y3);
                            }
                        }else if(lines === 4){
                            if(deg<315){
                                line(x2,y2,width/2,0);
                            }else{
                                line(x2,y2,width,height/2);
                            } 
                        }
                    }
                }
            }
        }
    }

    let end = millis();
    let elapsed = end - start;
    print("draw: " + floor(elapsed) + "ms.")
    fxpreview(); 
}