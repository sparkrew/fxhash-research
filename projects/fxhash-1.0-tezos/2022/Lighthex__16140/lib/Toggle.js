class Toggle extends Cell {

    constructor(myGrid, xIndex, yIndex, xPos, yPos, width, height, backgroundColor, strokeColor) {
        super(myGrid, xIndex, yIndex, xPos, yPos, width, height);

        this.backgroundColor = backgroundColor;
        this.strokeColor = strokeColor;
        this.baseHexRadius = Math.max(this.width, this.height) * 0.5;
        this.hexRadius = this.baseHexRadius;
        this.maxTop = Math.round(noise(this.xIndex, this.yIndex) * 4);
        this.nScale = 0.1;
        //this.nSpeed = 0.0001+fxrand()*0.002;
        this.usedRadius = this.baseHexRadius;
        this.nSpeed = 0.1;
        this.outerShapePoints = []
        this.fillC = color(0,255,0)
        this.outlineC = color(0,255,0)
        this.compoundPointsOuter = []
        this.compoundPointsInner = []
    }

    getDynColor()
    {
        return this.fillC;
    }

    getOutlineColor()
    {
        return getRandomPaletteColor(this.xPaletteIndex, this.yPaletteIndex)
    }
    

    updateShapePoints()
    {
        this.outerShapePoints = [];

    }

    getLineVecA(mDir) {
        let alpha = Math.PI * 2;
        let alphaA = -2 * (Math.PI * 2 / 6) + (mDir - 0.5) / 6 * alpha;


        let xA = Math.cos(alphaA) * this.hexRadius;
        let yA = Math.sin(alphaA) * this.hexRadius;


        let lineVecA = createVector(xA, yA)
        return lineVecA;
    }

    getLineVecB(mDir) {
        let alpha = Math.PI * 2;
        let alphaB = -2 * (Math.PI * 2 / 6) + (mDir + 0.5) / 6 * alpha;


        let xB = Math.cos(alphaB) * this.hexRadius;
        let yB = Math.sin(alphaB) * this.hexRadius;

        let lineVecB = createVector(xB, yB)
        return lineVecB;
    }

    getDirPoints(mDir, rotOffset, absolutPosition = true) {
        let p = createVector(this.width+this.x, this.height/2+this.y);
        let xOff = (this.yIndex % 2 == 0) ? this.baseHexRadius : 0;
        let off = createVector(p.x + xOff + outterPadding + paddingLeft, p.y + outterPadding + this.myGrid.UpperOffset() + paddingTop);

        if (!absolutPosition) {
            off.x = 0;
            off.y = 0;
        }

        var res = [];

        let counterDir = this.getCounterDir(mDir);
        let alpha = TWO_PI / 6;

        let ii = counterDir + 0.5 + rotOffset;

        let a = ii * alpha;
        let b = (ii + 1) * alpha;

        let sx = cos(a) * this.usedRadius;
        let sy = sin(a) * this.usedRadius;

        let tx = cos(b) * this.usedRadius;
        let ty = sin(b) * this.usedRadius;


        res.push(createVector(off.x + sx, off.y + sy))
        res.push(createVector(off.x + tx, off.y + ty))

        return res;
    }


    update()
    {
        let n = 1;

        if (!this.isMerged) {
            n = 0.3+0.8*noise(this.xIndex * this.nScale + elapsed * this.nSpeed, this.yIndex * this.nScale + elapsed * this.nSpeed);
            this.hexRadius = this.baseHexRadius * n;
        } else {
            this.hexRadius = this.baseHexRadius;
        }
      
        var c = getRandomPaletteColor(this.xPaletteIndex, this.yPaletteIndex);
        this.fillC = noise(this.fadeOffsetX + elapsed / horizontalSpeed, this.fadeOffsetY + elapsed / verticalSpeed) > lightThreshold ? c : this.backgroundColor;
        
        if (fadeColors) this.fillC = lerpColor(c, this.backgroundColor, noise(this.fadeOffsetX + elapsed / horizontalSpeed, this.fadeOffsetY + elapsed / verticalSpeed));
    }

    drawOverlay() {

        push();
        let xOff1 = (this.yIndex % 2 == 0) ? this.baseHexRadius : 0;
        translate(outterPadding, outterPadding + this.myGrid.UpperOffset());
        translate(this.x + xOff1, this.y);
        translate(paddingLeft, paddingTop);
        textAlign(CENTER,BOTTOM);
        textSize(8);
        text(this.ID,0,0)
        pop();
    }


    draw() {
        //if(!this.IsRoot && this.isMerged) return;
       
        push();
        strokeCap(ROUND);

        let p = createVector(this.width+this.x, this.height/2+this.y);

        let xOff = (this.yIndex % 2 == 0) ? this.baseHexRadius : 0;
        strokeWeight(1)
        fill(this.fillC);
        stroke(this.fillC);

        let rotOffset = 0;
        //Start Filled BG Bridge
        if (this.isMerged) {
            for (var i = 0; i < this.mergedDirs.length; i++) {
                let mDir = this.mergedDirs[i];
                if (mDir > 2) continue;

                let neighbor = this.getNeighbor(mDir);
                let startPoints = this.getDirPoints(mDir, rotOffset);
                let endPoints = neighbor.getDirPoints(this.getCounterDir(mDir), rotOffset);
                beginShape();
                vertex(startPoints[0].x, startPoints[0].y)
                vertex(startPoints[1].x, startPoints[1].y)
                vertex(endPoints[0].x, endPoints[0].y)
                vertex(endPoints[1].x, endPoints[1].y)
                endShape(CLOSE);
            }
        }
        //End Filled BG Bridge
        noStroke()
        translate(outterPadding, outterPadding + this.myGrid.UpperOffset());
        translate(p.x + xOff, p.y);
        translate(paddingLeft, paddingTop);


        //Start Filled BG HEX
        rotate(Math.PI / 2);


        polygon(0, 0, this.usedRadius, 6);
        rotate(-Math.PI / 2);
        //End Filled BG HEX


        pop();
    }

    drawOutlines() {
        push();
        strokeCap(ROUND);

        var c = getRandomPaletteColor(this.xPaletteIndex, this.yPaletteIndex);
        
        if (plottableView) {
            c = this.fillC = color(0);
        }
        let p = createVector(this.width+this.x, this.height/2+this.y);

        let xOff = (this.yIndex % 2 == 0) ? this.baseHexRadius : 0;
        noFill()
        stroke(c);
        if (this.selected) {
            stroke(255);
        }
        if (!plottableView) {
            strokeWeight(strokeWidth * screenRatioAdjustment * 1.1);
        } else {
            strokeWeight(plotterStrokeWidth * screenRatioAdjustment);
        }
        //Start Outline Bridge
        if (this.isMerged) {
            let rotOffset = 0;
            for (var i = 0; i < this.mergedDirs.length; i++) {

                let mDir = this.mergedDirs[i];
                if (mDir > 2) continue;
                let ssW = (!plottableView) ? strokeWidth * screenRatioAdjustment * 1.1 : plotterStrokeWidth * screenRatioAdjustment;

                noFill();
                stroke(c);
                if (this.selected) {
                    stroke(255);
                }
                strokeWeight(ssW);

                let neighbor = this.getNeighbor(mDir);
                let startPoints = this.getDirPoints(mDir, rotOffset);
                let endPoints = neighbor.getDirPoints(this.getCounterDir(mDir), rotOffset);
                beginShape();
                vertex(startPoints[0].x, startPoints[0].y)
                vertex(endPoints[1].x, endPoints[1].y)
                endShape(CLOSE);

                beginShape();
                vertex(startPoints[1].x, startPoints[1].y)
                vertex(endPoints[0].x, endPoints[0].y)
                endShape(CLOSE);

            }
        }
        //End Outline Bridge

        translate(outterPadding, outterPadding + this.myGrid.UpperOffset());
        translate(p.x + xOff, p.y);
        translate(paddingLeft, paddingTop);

        //End Filled BG Bridge

        //Start Outline HEX
        rotate(Math.PI / 2);

        let alpha = TWO_PI / 6;

        for (var i = 0; i < 6; i++) {
            if (this.mergedDirs.indexOf(i) < 0) {
                let ii = i + 2;

                let a = ii * alpha;
                let b = (ii + 1) * alpha;

                let sx = cos(a) * this.usedRadius;
                let sy = sin(a) * this.usedRadius;

                let tx = cos(b) * this.usedRadius;
                let ty = sin(b) * this.usedRadius;

                line(sx, sy, tx, ty);
            }
        }

        if(this.isInSideOfSkipped)
        {
            color(255,0,0)
            circle(0,0,10);
        }

        rotate(-Math.PI / 2);
        //End Outline HEX
/* 
        if (!this.isMerged) {
            //Start Outline HEX
            rotate(Math.PI / 2);
            noFill()
            stroke(c);
            if (this.selected) {
                stroke(255);
            }
            if (!plottableView) {
                strokeWeight(strokeWidth * screenRatioAdjustment * 1.1);
            } else {
                strokeWeight(plotterStrokeWidth * screenRatioAdjustment);
            }

            let alpha = TWO_PI / 6;

            if (this.maxTop > 0) {
                for (let u = 0; u < this.maxTop; u++) {
                    let l = (u + 1) / this.maxTop;

                    let n = noise(this.xIndex + u * this.nScale + elapsed * this.nSpeed, this.yIndex + u * this.nScale + elapsed * this.nSpeed);
                    var radius = this.baseHexRadius * n;

                    for (var i = 0; i < 6; i++) {
                        if (this.mergedDirs.indexOf(i) < 0) {

                            let ii = i + 2;

                            let a = ii * alpha;
                            let b = (ii + 1) * alpha;

                            let sx = cos(a) * radius * 0.8 * l;
                            let sy = sin(a) * radius * 0.8 * l;

                            let tx = cos(b) * radius * 0.8 * l;
                            let ty = sin(b) * radius * 0.8 * l;

                            line(sx, sy, tx, ty);
                        }
                    }
                }
            }

            rotate(-Math.PI / 2);
            //End Outline HEX
        }
 */


        pop();


    }
}
