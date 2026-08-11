// your code goes here
//
// 1.
// 我可以使用fxhash這個參數 用來設定為亂數種子 randomSeed 或是雜訊種子 noiseSeed。
// 2. 或是直接用fxrand()取代Math.random() 會回傳 0 - 1  之間的float
// 在此程式裡面每一次使用的fxrand()會有不同的結果，例如以下的三個R G B數值並不會一樣。
// colorR = fxrand() * 255;
//   colorG = fxrand() * 255;
//   colorB = fxrand() * 255;
// Copyright Jérôme Mercier
// https://www.pizza-punk.com
// Use and abuse...
//Bezier documentation: https://p5js.org/reference/#/p5/bezierVertex
var a1, a2, c1, c2, c3, c4;
var a1_1, a2_1, c1_1, c2_1, c3_1, c4_1;
var a1_2, a2_2, c1_2, c2_2, c3_2, c4_2;
let leafs = [];
let leafs_1 = [];
let leafs_2 = [];
let nb;
let nb_1;
let nb_2;
let help = 0; // toogle for showing the handles or not
let help_1 = 0; // toogle for showing the handles or not
let help_2 = 0; // toogle for showing the handles or not
let pg_1;
let pg_2;
var w;
let xoff = 0.0;
let backgroundR;
let backgroundG;
let backgroundB;
let layer_0_R;
let layer_0_G;
let layer_0_B;
let layer_1_R;
let layer_1_G;
let layer_1_B;
let layer_2_R;
let layer_2_G;
let layer_2_B;
let turnsOfFinalPetals;
let dice;

function setup() {
    dice = fxrand();
    //dice_ = fxrand();
    dice__ = fxrand();
    noiseSeed(fxrand() * 100);
    frameRate(40);
    //createCanvas(450, 450);
    w = min(windowWidth, windowHeight);
    createCanvas(w, w, P2D);
    backgroundR = fxrand() * 150;
    backgroundG = fxrand() * 150;
    backgroundB = fxrand() * 150;
    background(backgroundR, backgroundG, backgroundB);
    //
    layer_0_R = fxrand() * 155 + 100;
    layer_0_G = fxrand() * 155;
    layer_0_B = fxrand() * 155;
    //
    layer_1_R = fxrand() * 155;
    layer_1_G = fxrand() * 155;
    layer_1_B = fxrand() * 155 + 100;
    //
    layer_2_R = fxrand() * 155;
    layer_2_G = fxrand() * 155 + 100;
    layer_2_B = fxrand() * 155;
    //
    turnsOfFinalPetals = int(fxrand() * 10 + 5) * 3;
    // points and num of petals for basic layer 0 red
    var radius = height * (fxrand() * 0.2 + 0.25); // random(0.25, 0.45); // bigger
    var pointY = height * fxrand(); // 0.05-0.7 is good
    var pointX = height * (fxrand() * 0.3 + 0.01); //  random(0.01, 0.3);
    a1 = createVector(0, 0);
    a2 = createVector(0, radius);
    c1 = createVector(pointX - 90, pointX + 60);
    c3 = createVector(-pointX + 90, pointY); // point 100 - 500 is good ( height* 0.1 - 0.8)
    c2 = createVector(pointX + 60, pointY);
    c4 = createVector(-pointX - 60, pointX + 60);
    nb = int(fxrand() * 10 + 4); // int(random(4, 20)); // 2-9
    //
    //  points and num of petals for layer 1 blue
    var radius_1 = height * fxrand() * 0.4; // medium
    var pointY_1 = height * fxrand() * 0.7; // 0.05-0.7 is good
    var pointX_1 = height * (fxrand() * 0.4 + 0.01); //  random(0.01, 0.3);
    a1_1 = createVector(0, 0);
    a2_1 = createVector(0, radius_1);
    c1_1 = createVector(pointX_1 - 80, pointX_1 + 50);
    c3_1 = createVector(-pointX_1 + 80, pointY_1);
    c2_1 = createVector(pointX_1 + 50, pointY_1);
    c4_1 = createVector(-pointX_1 - 50, pointX_1 + 50);
    nb_1 = int(fxrand() * 6 + 3); // int(random(3, 8)); // 2-6
    //  points and num of petals for layer 2 green
    var radius_2 = height * fxrand() * 0.35; // small
    var pointY_2 = height * fxrand() * 0.4; // 0.05-0.7 is good
    var pointX_2 = height * (fxrand() * 0.2 + 0.01);
    a1_2 = createVector(0, 0);
    a2_2 = createVector(0, radius_2);
    c1_2 = createVector(pointX_2 - 70, pointX_2 + 60);
    c3_2 = createVector(-pointX_2 + 70, pointY_2);
    c2_2 = createVector(pointX_2 + 60, pointY_2);
    c4_2 = createVector(-pointX_2 - 60, pointX_2 + 60);
    nb_2 = int(fxrand() * 4 + 2); //int(random(2, 6)); // 2-6
    //console.log(nb);
    //console.log(nb_1);
    //console.log(nb_2);
    for (let i = 0; i < nb; i++) {
        l = new Leaf();
        leafs.push(l);
    }
    for (let j = 0; j < nb_1; j++) {
        l_1 = new Leaf_1();
        leafs_1.push(l_1);
    }
    for (let k = 0; k < nb_2; k++) {
        l_2 = new Leaf_2();
        leafs_2.push(l_2);
    }
    // layer 1 of canvas
    pg_1 = createGraphics(w, w, P2D);
    // another layer 2 of canvas
    pg_2 = createGraphics(w, w, P2D);
}

function draw() {
    xoff = xoff + 0.01;
    //let nX = sin(xoff) * width * 0.1;
    //let nY = cos(xoff) * width * 0.1;
    // make a random background
    if (frameCount < 10 || frameCount == 40) {
        push();
        translate(width / 2, height / 2);
        // rotate(random(1));
        rotate(radians(fxrand() * 360));
        for (let c = 0; c < width * 1.2; c += 20) {
            for (let d = 0; d < height * 1.2; d += 20) {
                //stroke(random(1)*255,random(1)*255,random(1)*255);
                //strokeWeight(3);
                //xPos = fxrand(-c, c);
                //yPos = fxrand(-d, d);
                xPos = fxrand() * c - (c / 2); //random(-c, c);
                yPos = fxrand() * d - (d / 2); //random(-d, d);
                strokeWeight(fxrand() * height * 0.005);
                //console.log(xPos);
                //if ((xPos = !0 && yPos != 0)) {
                // colorMode(HSB);
                if (dice >= 0 && dice < 0.2) {
                    drawingContext.shadowBlur = 3;
                    drawingContext.shadowColor = color(sin(radians(xPos)) * 255, cos(radians(yPos)) * 255, fxrand() * 255);
                    stroke(sin(radians(xPos)) * 255, cos(radians(yPos)) * 255, fxrand() * 255);
                } else if (dice >= 0.2 && dice < 0.4) {
                    drawingContext.shadowBlur = 3;
                    drawingContext.shadowColor = color(fxrand() * 255, sin(radians(xPos)) * 255, cos(radians(yPos)) * 255);
                    stroke(fxrand() * 255, sin(radians(xPos)) * 255, cos(radians(yPos)) * 255);
                } else if (dice >= 0.4 && dice < 0.6) {
                    drawingContext.shadowBlur = 3;
                    drawingContext.shadowColor = color(cos(radians(yPos)) * 255, fxrand() * 255, sin(radians(xPos)) * 255);
                    stroke(cos(radians(yPos)) * 255, fxrand() * 255, sin(radians(xPos)) * 255);
                } else if (dice >= 0.6 && dice < 0.8) {
                    drawingContext.shadowBlur = 3;
                    drawingContext.shadowColor = color(cos(radians(xPos + yPos)) * 255, sin(radians(yPos)) * 255, fxrand() * 255);
                    stroke(cos(radians(xPos + yPos)) * 255, sin(radians(yPos)) * 255, fxrand() * 255);
                } else {
                    drawingContext.shadowBlur = 3;
                    drawingContext.shadowColor = color(fxrand() * 255, cos(radians(xPos)) * 255, sin(radians(yPos)) * 255);
                    stroke(fxrand() * 255, cos(radians(xPos)) * 255, sin(radians(yPos)) * 255);
                }
                point(xPos, yPos);
                //}
            }
        }
        pop();
        /*
            
            if (frameCount % 15 == 0) {
              filter(ERODE); // nice
            }
            */
    }
    // draw petal pieces
    if (frameCount == 5 || frameCount == 60) {
        push();
        var numOfPetals = 2 + fxrand() * 5;
        translate(width * 0.5, height * 0.5);
        for (var i = 0; i < numOfPetals; i++) {
            rotate(TWO_PI / numOfPetals);
            let dice_ = fxrand();
            // console.log(dice_);
            if (dice_ < 0.1) {
                var color_1 = color(155 + fxrand() * 100, 0, 0, 150);
                drawPetal_1(0.9 + fxrand() * 0.6, color_1);
                var color_2 = color(0, 155 + fxrand() * 100, 0, 150);
                drawPetal_2(0.7 + fxrand() * 0.6, color_2);
            } else if (dice_ >= 0.1 && dice_ < 0.2) {
                var color_2 = color(0, 155 + fxrand() * 100, 0, 150);
                drawPetal_2(0.9 + fxrand() * 0.6, color_2);
                var color_3 = color(0, 0, 155 + fxrand() * 100, 150);
                drawPetal_3(0.7 + fxrand() * 0.6, color_3);
            } else if (dice_ >= 0.2 && dice_ < 0.3) {
                var color_3 = color(0, 0, 155 + fxrand() * 100, 150);
                drawPetal_3(0.9 + fxrand() * 0.6, color_3);
                var color_4 = color(155 + fxrand() * 100, 155 + fxrand() * 100, 0, 150);
                drawPetal_4(0.7 + fxrand() * 0.6, color_4);
            } else if (dice_ >= 0.3 && dice_ < 0.4) {
                var color_4 = color(155 + fxrand() * 100, 155 + fxrand() * 100, 0, 150);
                drawPetal_4(0.9 + fxrand() * 0.6, color_4);
                var color_1 = color(155 + fxrand() * 100, 0, 0, 150);
                drawPetal_1(0.7 + fxrand() * 0.6, color_1);
            } else if (dice_ >= 0.4 && dice_ < 0.5) {
                var color_1 = color(155 + fxrand() * 100, 0, 0, 150);
                var color_3 = color(0, 0, 155 + fxrand() * 100, 150);
                drawPetal_1(0.9 + fxrand() * 0.6, color_3);
                drawPetal_3(0.7 + fxrand() * 0.6, color_1);
            } else if (dice_ >= 0.5 && dice_ < 0.6) {
                var color_2 = color(0, 155 + fxrand() * 100, 0, 150);
                var color_4 = color(155 + fxrand() * 100, 155 + fxrand() * 100, 0, 150);
                drawPetal_4(0.7 + fxrand() * 0.6, color_2);
                drawPetal_2(0.9 + fxrand() * 0.6, color_4);
            } else if (dice_ >= 0.6 && dice_ < 0.7) {
                var color_4 = color(155 + fxrand() * 100, 155 + fxrand() * 100, 0, 150);
                var color_3 = color(0, 0, 155 + fxrand() * 100, 150);
                drawPetal_3(0.7 + fxrand() * 0.6, color_4);
                drawPetal_4(0.9 + fxrand() * 0.6, color_3);
            } else if (dice_ >= 0.7 && dice_ < 0.8) {
                var color_3 = color(0, 0, 155 + fxrand() * 100, 150);
                var color_2 = color(0, 155 + fxrand() * 100, 0, 150);
                drawPetal_2(0.7 + fxrand() * 0.6, color_3);
                drawPetal_3(0.9 + fxrand() * 0.6, color_2);
            } else if (dice_ >= 0.8 && dice_ < 0.9) {
                var color_1 = color(155 + fxrand() * 100, 0, 0, 150);
                var color_4 = color(155 + fxrand() * 100, 155 + fxrand() * 100, 0, 150);
                drawPetal_4(0.7 + fxrand() * 0.6, color_1);
                drawPetal_1(0.9 + fxrand() * 0.6, color_4);
            } else {
                var color_2 = color(0, 155 + fxrand() * 100, 0, 150);
                var color_1 = color(155 + fxrand() * 100, 0, 0, 150);
                drawPetal_1(0.7 + fxrand() * 0.6, color_2);
                drawPetal_2(0.9 + fxrand() * 0.6, color_1);
            }
        }
        pop();
    }
    if (frameCount == 9) {
        filter(ERODE);
        if (dice >= 0.5) {
            filter(INVERT);
            backgroundR = 255 - backgroundR;
            backgroundG = 255 - backgroundG;
            backgroundB = 255 - backgroundB;
        }
    }
    // draw red large  petal lines
    if (frameCount > 7 && frameCount < 160) {
        //spreadPoints();
        if (frameCount % 4 == 0) {
            //background(0);
            noFill();
            strokeWeight(height * 0.0006);
            stroke(255);
            //
            push();
            translate(width / 2, height / 2);
            scale(0.9 + fxrand() * 0.2);
            // draw many times, depends on the number of petals
            // let shapeVariation = fxrand() * 60;
            for (let i = 0; i < nb; i++) {
                leafs[i].update(sin(frameCount * 0.08) * 80);
                leafs[i].display();
                rotate(TAU / nb);
            }
            pop();
        }
    }
    // the second layer 1 of graphics
    // draw medium petal lines 
    if (frameCount % 2 == 0 && frameCount > 50 && frameCount < 140) {
        push();
        translate(width / 2, height / 2);
        scale(0.7 + fxrand() * 0.2);
        //ellipse(250, 250, 20, 20);
        // draw many times, depends on the number of petals
        for (let l = 0; l < nb_1; l++) {
            leafs_1[l].update(cos(frameCount * 0.07) * 100);
            leafs_1[l].display();
            rotate(TAU / nb_1);
        }
        image(pg_1, width, height, pg_1.width, pg_1.height);
        pop();
    }
    // draw green small  petal lines
    if (frameCount % 3 == 0 && frameCount > 60 && frameCount < 150) {
        push();
        translate(width / 2, height / 2);
        scale(0.5 + fxrand() * 0.2);
        //ellipse(250, 250, 20, 20);
        // draw many times, depends on the number of petals
        for (let h = 0; h < nb_2; h++) {
            leafs_2[h].update(-sin(frameCount * 0.06) * 160);
            leafs_2[h].display();
            rotate(TAU / nb_2);
        }
        image(pg_2, width, height, pg_2.width, pg_2.height);
        pop();
    }
    // draw some more small points on the center
    if (frameCount == 160 || frameCount == 161 || frameCount == 163 || frameCount == 183 || frameCount == 183) {
        push();
        translate(width / 2, height / 2);
        // rotate(random(1));
        rotate(radians(fxrand() * 60));
        for (let c = 0; c < width * 1.5; c += 30) {
            for (let d = 0; d < height * 1.5; d += 30) {
                //stroke(random(1)*255,random(1)*255,random(1)*255);
                xPos = fxrand() * c - (c / 2); //random(-c, c);
                yPos = fxrand() * d - (d / 2); //random(-d, d);
                strokeWeight(fxrand() * height * 0.004);
                //console.log(xPos);
                //if ((xPos = !0 && yPos != 0)) {
                // colorMode(HSB);
                if (dice >= 0 && dice < 0.2) {
                    drawingContext.shadowBlur = 2;
                    drawingContext.shadowColor = color(sin(radians(yPos)) * 255, cos(radians(xPos)) * 255, fxrand() * 255, 150);
                    stroke(sin(radians(yPos)) * 255, cos(radians(xPos)) * 255, fxrand() * 255, 150);
                } else if (dice > 0.2 && dice < 0.4) {
                    drawingContext.shadowBlur = 2;
                    drawingContext.shadowColor = color(fxrand() * 255, sin(radians(yPos)) * 255, cos(radians(xPos)) * 255, 150);
                    stroke(fxrand() * 255, sin(radians(yPos)) * 255, cos(radians(xPos)) * 255, 150);
                } else if (dice > 0.4 && dice < 0.6) {
                    drawingContext.shadowBlur = 2;
                    drawingContext.shadowColor = color(cos(radians(xPos)) * 255, fxrand() * 255, sin(radians(yPos)) * 255, 150);
                    stroke(cos(radians(xPos)) * 255, fxrand() * 255, sin(radians(yPos)) * 255, 150);
                } else if (dice > 0.6 && dice < 0.8) {
                    drawingContext.shadowBlur = 2;
                    drawingContext.shadowColor = color(sin(radians(yPos)) * 255, cos(radians(xPos)) * 255, fxrand() * 255, 150);
                    stroke(cos(radians(yPos)) * 255, sin(radians(xPos)) * 255, fxrand() * 255, 150);
                } else {
                    drawingContext.shadowBlur = 2;
                    drawingContext.shadowColor = color(fxrand() * 255, sin(radians(yPos)) * 255, cos(radians(xPos)) * 255, 150);
                    stroke(fxrand() * 255, cos(radians(yPos)) * 255, sin(radians(xPos)) * 255, 150);
                }
                point(yPos, xPos);
                //}
            }
        }
        pop();
    }
    // draw nice petals in the center 
    if (frameCount == 165) {
        push();
        var numOfPetals = 3 + fxrand() * 10;
        translate(width * 0.5, height * 0.5);
        // scale(fxrand()*1.5);
        for (var i = 0; i < numOfPetals; i++) {
            rotate(TWO_PI / numOfPetals);
            if (dice < 0.25) {
                var color_1 = color(150 + fxrand() * 100, 0, 0, 60);
                drawPetal_1(0.1 + fxrand() * 0.8, color_1);
                var color_3 = color(0, 0, 150 + fxrand() * 100, 60);
                drawPetal_3(fxrand() * 0.6, color_3);
            } else if (dice >= 0.25 && dice < 0.5) {
                var color_2 = color(0, 150 + fxrand() * 100, 0, 60);
                drawPetal_2(0.1 + fxrand() * 0.8, color_2);
                var color_4 = color(150 + fxrand() * 100, 150 + fxrand() * 100, 0, 60);
                drawPetal_4(fxrand() * 0.6, color_4);
            } else if (dice >= 0.5 && dice < 0.75) {
                var color_3 = color(0, 0, 150 + fxrand() * 100, 60);
                drawPetal_3(0.1 + fxrand() * 0.8, color_3);
                var color_4 = color(150 + fxrand() * 100, 150 + fxrand() * 100, 0, 60);
                drawPetal_4(fxrand() * 0.6, color_4);
            } else {
                var color_4 = color(150 + fxrand() * 100, 150 + fxrand() * 100, 0, 60);
                drawPetal_4(0.1 + fxrand() * 0.8, color_4);
                var color_2 = color(0, 150 + fxrand() * 100, 0, 60);
                drawPetal_2(fxrand() * 0.6, color_2);
            }
        }
        pop();
    }
    if (frameCount == 166) {
        copy(fxrand() * width, fxrand() * height, height * 0.01, height * 0.03, fxrand() * width, fxrand() * height, height * 0.01, height * 0.03);
        copy(fxrand() * width, fxrand() * height, height * 0.002, height * 0.08, fxrand() * width, fxrand() * height, height * 0.002, height * 0.08);
        copy(fxrand() * width, fxrand() * height, height * 0.002, height * 0.1, fxrand() * width, fxrand() * height, height * 0.002, height * 0.1);
        copy(fxrand() * width, fxrand() * height, height * 0.02, height * 0.02, fxrand() * width, fxrand() * height, height * 0.02, height * 0.02);
        copy(fxrand() * width, fxrand() * height, height * 0.01, height * 0.05, fxrand() * width, fxrand() * height, height * 0.01, height * 0.05);
        copy(fxrand() * width, fxrand() * height, height * 0.04, height * 0.04, fxrand() * width, fxrand() * height, height * 0.04, height * 0.04);
        copy(fxrand() * width, fxrand() * height, height * 0.03, height * 0.09, fxrand() * width, fxrand() * height, height * 0.03, height * 0.09);
        copy(fxrand() * width, fxrand() * height, height * 0.03, height * 0.05, fxrand() * width, fxrand() * height, height * 0.03, height * 0.05);
        copy(fxrand() * width, fxrand() * height, height * 0.02, height * 0.1, fxrand() * width, fxrand() * height, height * 0.02, height * 0.1);
        copy(fxrand() * width, fxrand() * height, height * 0.01, height * 0.01, fxrand() * width, fxrand() * height, height * 0.01, height * 0.01);
        copy(fxrand() * width, fxrand() * height, height * 0.035, height * 0.035, fxrand() * width, fxrand() * height, height * 0.035, height * 0.035);
        copy(fxrand() * width, fxrand() * height, height * 0.03, height * 0.03, fxrand() * width, fxrand() * height, height * 0.03, height * 0.03);
        copy(fxrand() * width, fxrand() * height, height * 0.003, height * 0.08, fxrand() * width, fxrand() * height, height * 0.003, height * 0.08);
        copy(fxrand() * width, fxrand() * height, height * 0.03, height * 0.05, fxrand() * width, fxrand() * height, height * 0.03, height * 0.05);
        copy(fxrand() * width, fxrand() * height, height * 0.001, height * 0.01, fxrand() * width, fxrand() * height, height * 0.001, height * 0.01);
        copy(fxrand() * width, fxrand() * height, height * 0.035, height * 0.035, fxrand() * width, fxrand() * height, height * 0.035, height * 0.035);
        copy(fxrand() * width, fxrand() * height, height * 0.03, height * 0.03, fxrand() * width, fxrand() * height, height * 0.03, height * 0.03);
    }
    if (frameCount > 166 && frameCount < 185) {
        // 遮蓋的外圍petals
        //erase();
        drawingContext.shadowBlur = 5;
        drawingContext.shadowColor = color(backgroundR, backgroundG, backgroundB, 205);
        push();
        translate(width / 2 + fxrand() * 50 - 25, height / 2 + fxrand() * 50 - 25);
        scale(1.5);
        let num = fxrand() * 20 + 30;
        for (let i = 0; i < num; i++) {
            beginShape();
            fill(backgroundR, backgroundG, backgroundB, 3);
            noStroke();
            let centerX = width * (fxrand() + 1); // 0.5-1
            let centerY = height * (fxrand() + 1);
            let outPosX = width * (fxrand() + 0.5); // * 0.5 - *1.5
            vertex(centerX, centerY);
            bezierVertex(centerX, centerY, outPosX, height * 0.07, width * 0.12, height * 0.12);
            //bezierVertex(width * 0.12, height * 0.12, width * 0.07, height*0.3, width*0.1, height * 0.9);
            endShape();
            //
            beginShape();
            fill(backgroundR, backgroundG, backgroundB, 6);
            noStroke();
            let centerX_1 = width * (fxrand() + 2); // 0.5-1
            let centerY_1 = height * (fxrand() + 2);
            let outPosX_1 = width * (fxrand() + 1.5); // * 0.5 - *1.5
            vertex(centerX, centerY);
            bezierVertex(centerX_1, centerY_1, outPosX_1, height * 0.15, width * 0.25, height * 0.25);
            //bezierVertex(width * 0.12, height * 0.12, width * 0.07, height*0.3, width*0.1, height * 0.9);
            endShape();
            //
            rotate(i * turnsOfFinalPetals); // 9 12 18 27 36
        }
        // 修改這個
        // line(0, 0, 300, 300);
        pop();
        // noErase();
    }
    // the final petals in the center
    noStroke();
    if (frameCount == 182) {
        push();
        var numOfPetals = 3 + fxrand() * 4;
        translate(width * 0.5, height * 0.5);
        // scale(fxrand()*1.5);
        for (var i = 0; i < numOfPetals; i++) {
            rotate(TWO_PI / numOfPetals);
            if (dice__ < 0.25) {
                var color_1 = color(170 + fxrand() * 100, 0, 0, 40);
                drawPetal_1(0.1 + fxrand() * 0.5, color_1);
                var color_3 = color(0, 0, 170 + fxrand() * 100, 40);
                drawPetal_3(fxrand() * 0.6, color_3);
            } else if (dice__ >= 0.25 && dice < 0.5) {
                var color_2 = color(0, 170 + fxrand() * 100, 0, 40);
                drawPetal_2(0.1 + fxrand() * 0.5, color_2);
                var color_4 = color(170 + fxrand() * 100, 170 + fxrand() * 100, 0, 40);
                drawPetal_4(fxrand() * 0.6, color_4);
            } else if (dice__ >= 0.5 && dice < 0.75) {
                var color_3 = color(0, 0, 170 + fxrand() * 100, 50);
                drawPetal_3(0.1 + fxrand() * 0.5, color_3);
                var color_4 = color(170 + fxrand() * 100, 170 + fxrand() * 100, 0, 40);
                drawPetal_4(fxrand() * 0.6, color_4);
            } else {
                var color_4 = color(170 + fxrand() * 100, 170 + fxrand() * 100, 0, 40);
                drawPetal_4(0.1 + fxrand() * 0.4, color_4);
                var color_2 = color(0, 170 + fxrand() * 100, 0, 50);
                drawPetal_2(fxrand() * 0.6, color_2);
            }
        }
        pop();
    }
    if (frameCount == 186) {
        copy(fxrand() * width, fxrand() * height, height * 0.01, height * 0.08, fxrand() * width, fxrand() * height, height * 0.01, height * 0.08);
        copy(fxrand() * width, fxrand() * height, height * 0.01, height * 0.05, fxrand() * width, fxrand() * height, height * 0.01, height * 0.05);
        copy(fxrand() * width, fxrand() * height, height * 0.02, height * 0.02, fxrand() * width, fxrand() * height, height * 0.02, height * 0.02);
        copy(fxrand() * width, fxrand() * height, height * 0.005, height * 0.02, fxrand() * width, fxrand() * height, height * 0.005, height * 0.02);
        //copy(fxrand() * width, fxrand() * height, height*0.04, height*0.04, fxrand() * width, fxrand() * height, height*0.04, height*0.04);
        copy(fxrand() * width, fxrand() * height, height * 0.06, height * 0.04, fxrand() * width, fxrand() * height, height * 0.06, height * 0.04);
        copy(fxrand() * width, fxrand() * height, height * 0.04, height * 0.03, fxrand() * width, fxrand() * height, height * 0.04, height * 0.03);
        copy(fxrand() * width, fxrand() * height, height * 0.03, height * 0.005, fxrand() * width, fxrand() * height, height * 0.03, height * 0.005);
        copy(fxrand() * width, fxrand() * height, height * 0.01, height * 0.01, fxrand() * width, fxrand() * height, height * 0.01, height * 0.01);
        copy(fxrand() * width, fxrand() * height, height * 0.035, height * 0.035, fxrand() * width, fxrand() * height, height * 0.015, height * 0.015);
        copy(fxrand() * width, fxrand() * height, height * 0.03, height * 0.005, fxrand() * width, fxrand() * height, height * 0.03, height * 0.005);
        copy(fxrand() * width, fxrand() * height, height * 0.05, height * 0.005, fxrand() * width, fxrand() * height, height * 0.05, height * 0.005);
        copy(fxrand() * width, fxrand() * height, height * 0.03, height * 0.01, fxrand() * width, fxrand() * height, height * 0.03, height * 0.01);
        //copy(fxrand() * width, fxrand() * height, height*0.035, height*0.035, fxrand() * width, fxrand() * height, height*0.035, height*0.035);
        copy(fxrand() * width, fxrand() * height, height * 0.04, height * 0.003, fxrand() * width, fxrand() * height, height * 0.04, height * 0.003);
        copy(fxrand() * width, fxrand() * height, height * 0.01, height * 0.08, fxrand() * width, fxrand() * height, height * 0.01, height * 0.08);
        //copy(fxrand() * width, fxrand() * height, height*0.035, height*0.035, fxrand() * width, fxrand() * height, height*0.035, height*0.035);
        copy(fxrand() * width, fxrand() * height, height * 0.03, height * 0.005, fxrand() * width, fxrand() * height, height * 0.03, height * 0.005);
        copy(fxrand() * width, fxrand() * height, height * 0.05, height * 0.005, fxrand() * width, fxrand() * height, height * 0.05, height * 0.005);
        copy(fxrand() * width, fxrand() * height, height * 0.03, height * 0.01, fxrand() * width, fxrand() * height, height * 0.03, height * 0.01);
        copy(fxrand() * width, fxrand() * height, height * 0.015, height * 0.085, fxrand() * width, fxrand() * height, height * 0.015, height * 0.085);
        copy(fxrand() * width, fxrand() * height, height * 0.04, height * 0.003, fxrand() * width, fxrand() * height, height * 0.04, height * 0.003);
        copy(fxrand() * width, fxrand() * height, height * 0.005, height * 0.1, fxrand() * width, fxrand() * height, height * 0.005, height * 0.1);
        copy(fxrand() * width, fxrand() * height, height * 0.005, height * 0.1, fxrand() * width, fxrand() * height, height * 0.005, height * 0.1);
        // 停止於600，約10秒內
        //filter(ERODE); // nice
        //filter(DILATE); // nice
        //isFxpreview = true;
    }
    if (frameCount == 187) {
        for (let z = 0; z < 20; z++) {
            stroke(fxrand() * 155 + 100, fxrand() * 155 + 100, fxrand() * 155 + 100);
            noFill();
            strokeWeight(height * 0.001);
            circle(fxrand() * width, fxrand() * height, fxrand() * height * 0.015, fxrand() * height * 0.015);
        }
        // 停止於600，約10秒內
        //filter(ERODE); // nice
        //filter(DILATE); // nice
        //isFxpreview = true;
    }
    if (frameCount == 188) {
        for (let v = 0; v < 200; v++) {
            push();
            translate(fxrand() * width, fxrand() * height);
            stroke(fxrand() * 155 + 100, fxrand() * 155 + 100, fxrand() * 155 + 100);
            noFill();
            strokeWeight(height * 0.001);

            line(0,0, fxrand() * height * 0.015, fxrand() * height * 0.015);
            pop();
        }
        // 停止於600，約10秒內
        //filter(ERODE); // nice
        //filter(DILATE); // nice
        //isFxpreview = true;
    }
    if (frameCount == 189) {
        noLoop();
        fxpreview();
    }
}
class Leaf {
    // redish
    constructor() {
        this.motion = 0;
    }
    update(m) {
        this.motion = m;
    }
    display(i) {
        //let layer_0_R = random() * 155 + 100;
        //let layer_0_G = random() * 155;
        //let layer_0_B = random() * 155;
        drawingContext.shadowBlur = 30;
        drawingContext.shadowColor = color(layer_0_R, layer_0_G, layer_0_B, 150);
        // basic layer is red
        // stroke(255, 0, 0, 100);
        // basic layer is random red
        strokeWeight(height * 0.002);
        stroke(layer_0_R, layer_0_G, layer_0_B, 150);
        //console.log(this.motion);
        beginShape();
        vertex(a1.x, a1.y);
        bezierVertex(c1.x - this.motion, c1.y + this.motion, c2.x - this.motion, c2.y + this.motion, a2.x, a2.y);
        bezierVertex(c3.x - this.motion, c3.y + this.motion, c4.x - this.motion, c4.y + this.motion, a1.x, a1.y);
        endShape();
    }
}
class Leaf_1 {
    // blueish
    constructor() {
        this.motion = 0;
    }
    update(m) {
        this.motion = m;
    }
    display(i) {
        // let layer_1_R = random() * 155;
        //let layer_1_G = random() * 155;
        // let layer_1_B = random() * 155 + 100;
        drawingContext.shadowBlur = 20;
        drawingContext.shadowColor = color(layer_1_R, layer_1_G, layer_1_B, 180);
        // layer 1 is blue
        //stroke(0, 0, 255, 60);
        stroke(layer_1_R, layer_1_G, layer_1_B, 150);
        fill(layer_1_R, layer_1_G, layer_1_B, 150);
        strokeWeight(height * 0.002);
        noFill();
        //console.log(this.motion);
        beginShape();
        vertex(a1_1.x, a1_1.y);
        bezierVertex(c1_1.x - this.motion, c1_1.y + this.motion, c2_1.x - this.motion, c2_1.y + this.motion, a2_1.x, a2_1.y);
        bezierVertex(c3_1.x - this.motion, c3_1.y + this.motion, c4_1.x - this.motion, c4_1.y + this.motion, a1_1.x, a1_1.y);
        endShape();
    }
}
class Leaf_2 {
    constructor() {
        this.motion = 0;
    }
    update(m) {
        this.motion = m;
    }
    display(i) {
        drawingContext.shadowBlur = 10;
        drawingContext.shadowColor = color(layer_2_R, layer_2_G, layer_2_B, 180);
        // layer 1 is blue
        //stroke(0, 0, 255, 60);
        stroke(layer_2_R, layer_2_G, layer_2_B, 180);
        fill(layer_2_R, layer_2_G, layer_2_B, 180);
        strokeWeight(height * 0.001);
        noFill();
        //console.log(this.motion);
        beginShape();
        vertex(a1_2.x, a1_2.y);
        bezierVertex(c1_2.x - this.motion, c1_2.y + this.motion, c2_2.x - this.motion, c2_2.y + this.motion, a2_2.x, a2_2.y);
        bezierVertex(c3_2.x - this.motion, c3_2.y + this.motion, c4_2.x - this.motion, c4_2.y + this.motion, a1_2.x, a1_2.y);
        endShape();
    }
}
// We use the key pressed function here
function keyPressed() {
    // If you hit the s key, save an image
    if (frameCount >= 189) {
        if (key == 's') {
            save("FlowerWorld.png");
        }
    }
}

function drawPetal_1(scale_, color_1_) {
    // shape 1
    var color = color_1_;
    fill(color_1_);
    push();
    //translate(0,0);
    // text("1",10,10);
    //background(150);
    strokeWeight(height * 0.002);
    scale(1);
    stroke(0);
    point(width * 0.05, width * 0.05);
    point(width * 0.05, width * 0.05);
    point(width * 0.1, width * 0.06);
    point(width * 0.25, width * 0.09);
    point(width * 0.3, width * 0.25);
    point(width * 0.2, width * 0.2);
    point(width * 0.1, width * 0.15);
    point(width * 0.05, width * 0.05);
    point(width * 0.1, width * 0.06);
    point(width * 0.1, width * 0.06);
    noStroke();
    //
    // fill(255,50);
    beginShape();
    curveVertex(width * 0.05, width * 0.05);
    curveVertex(width * 0.05, width * 0.05);
    curveVertex(width * 0.1, width * 0.06);
    curveVertex(width * 0.25, width * 0.09);
    curveVertex(width * 0.3, width * 0.25);
    curveVertex(width * 0.2, width * 0.2);
    curveVertex(width * 0.1, width * 0.15);
    curveVertex(width * 0.05, width * 0.05);
    curveVertex(width * 0.1, width * 0.06);
    curveVertex(width * 0.1, width * 0.06);
    endShape();
    pop();
}

function drawPetal_2(scale_, color_2_) {
    // shape 2
    var color = color_2_;
    fill(color_2_);
    push();
    // translate(0,height*0.5);
    //  text("2",10,10);
    //background(150);
    strokeWeight(height * 0.002);
    scale(1);
    stroke(0);
    point(width * 0.08, width * 0.08);
    point(width * 0.08, width * 0.08);
    point(width * 0.12, width * 0.08);
    point(width * 0.27, width * 0.2);
    point(width * 0.25, width * 0.28);
    point(width * 0.15, width * 0.25);
    point(width * 0.14, width * 0.18);
    point(width * 0.08, width * 0.08);
    point(width * 0.12, width * 0.08);
    point(width * 0.12, width * 0.08);
    noStroke();
    //
    // fill(255,50);
    beginShape();
    curveVertex(width * 0.08, width * 0.08);
    curveVertex(width * 0.08, width * 0.08);
    curveVertex(width * 0.12, width * 0.08);
    curveVertex(width * 0.27, width * 0.2);
    curveVertex(width * 0.25, width * 0.28);
    curveVertex(width * 0.15, width * 0.25);
    curveVertex(width * 0.14, width * 0.18);
    curveVertex(width * 0.08, width * 0.08);
    curveVertex(width * 0.12, width * 0.08);
    curveVertex(width * 0.12, width * 0.08);
    endShape();
    pop();
}

function drawPetal_3(scale_, color_3_) {
    // shape 3
    var color = color_3_;
    fill(color_3_);
    push();
    //translate(width*0.5,height*0);
    //textFont(font);
    //text("3",10,10);
    //background(150);
    strokeWeight(height * 0.002);
    scale(scale_);
    stroke(0);
    point(width * 0.03, width * 0.09);
    point(width * 0.03, width * 0.09);
    point(width * 0.12, width * 0.08);
    point(width * 0.27, width * 0.2);
    point(width * 0.25, width * 0.28);
    point(width * 0.12, width * 0.25);
    point(width * 0.05, width * 0.18);
    point(width * 0.03, width * 0.09);
    point(width * 0.12, width * 0.08);
    // point(120, 80);
    noStroke();
    //
    fill(255, width * 0.05);
    beginShape();
    curveVertex(width * 0.03, width * 0.09);
    curveVertex(width * 0.03, width * 0.09);
    curveVertex(width * 0.12, width * 0.08);
    curveVertex(width * 0.27, width * 0.2);
    curveVertex(width * 0.25, width * 0.28);
    curveVertex(width * 0.12, width * 0.25);
    curveVertex(width * 0.05, width * 0.18);
    curveVertex(width * 0.03, width * 0.09);
    curveVertex(width * 0.12, width * 0.08);
    //curveVertex(120, 80);
    endShape();
    pop();
}

function drawPetal_4(scale_, color_4_) {
    // shape 4
    var color = color_4_;
    fill(color_4_);
    push();
    strokeWeight(height * 0.002);
    scale(scale_);
    stroke(0);
    point(width * 0.05, width * 0.03);
    point(width * 0.05, width * 0.03);
    point(width * 0.12, width * 0.08);
    point(width * 0.2, width * 0.2);
    point(width * 0.2, width * 0.28);
    point(width * 0.12, width * 0.25);
    point(width * 0.05, width * 0.19);
    point(width * 0.03, width * 0.09);
    point(width * 0.12, width * 0.08);
    // point(120, 80);
    noStroke();
    //
    //fill(255,50);
    beginShape();
    curveVertex(width * 0.05, width * 0.03);
    curveVertex(width * 0.05, width * 0.03);
    curveVertex(width * 0.12, width * 0.08);
    curveVertex(width * 0.2, width * 0.2);
    curveVertex(width * 0.2, width * 0.28);
    curveVertex(width * 0.12, width * 0.25);
    curveVertex(width * 0.05, width * 0.19);
    curveVertex(width * 0.03, width * 0.09);
    curveVertex(width * 0.12, width * 0.08);
    endShape();
    pop();
}