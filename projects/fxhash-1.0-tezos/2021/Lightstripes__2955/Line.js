class Line {
    constructor(pointA, pointB, thickness, color,wobSpeed) {
        this.pointA = pointA;
        this.pointB = pointB;
        this.thickness = thickness;
        this.color = color;
        this.wobbleSpeed = wobSpeed;

        this.subdivision = 16;//Math.round(linearSize*16);
        this.isVertical = this.pointA.IsVertical;
    }


    setPointA(newPoint) {
        this.pointA = newPoint;
    }

    setPointB(newPoint) {
        this.pointB = newPoint;
    }

    get Color() {
        return this.color;
    }

    get PointA() {
        return this.pointA;
    }

    get PointB() {
        return this.pointB;
    }

    get Thickness() {
        return this.thickness;
    }


    drawCurved() {
        push();
        noFill();
        strokeWeight(this.thickness * screenRatioAdjustment);
        stroke(this.color);
        beginShape();

        curveVertex(this.pointA.Pos.x, this.pointA.Pos.y);
        
        for (var i = -1; i <= this.subdivision + 1; i++) {
            var sinOff = Math.PI * 2 / this.subdivision * i / 2;
            var xAdd = wobbleStrength * Math.sin((millis()-playOffset)* this.wobbleSpeed + sinOff);
            var yAdd = wobbleStrength * Math.sin((millis()-playOffset)* this.wobbleSpeed + sinOff);

            if (this.isVertical == false) yAdd = 0;
            if (this.isVertical == true) xAdd = 0;

            var p = p5.Vector.lerp(this.pointA.Pos, this.pointB.Pos, i / this.subdivision);
            curveVertex(p.x + xAdd, p.y + yAdd);
        }
        curveVertex(this.pointB.Pos.x, this.pointB.Pos.y);
        endShape();
        pop();
    }

    drawBlocks() {
        push();
        noFill();
        strokeWeight(this.thickness * screenRatioAdjustment);
        stroke(this.color);
       
        for (var i = -1; i <= this.subdivision + 1; i++) {
            var sinOff = Math.PI * 2 / this.subdivision * i / 2;
            var xAdd = wobbleStrength * Math.sin((millis()-playOffset) * this.wobbleSpeed + sinOff);
            var yAdd = wobbleStrength * Math.sin((millis()-playOffset) * this.wobbleSpeed + sinOff);
            var wob = screenRatioAdjustment*30 * Math.sin((millis()-playOffset) * this.wobbleSpeed*0.1 + sinOff);

            if (this.isVertical == false) yAdd = 0;
            if (this.isVertical == true) xAdd = 0;

            var p = p5.Vector.lerp(this.pointA.Pos, this.pointB.Pos, i / this.subdivision);
            var size = (sizeWobble) ? (wob) : this.thickness;
            square(p.x+xAdd,p.y+xAdd,size);
        }
       
        pop();
    }

    drawSpheres() {
        push();
        noFill();
        strokeWeight(this.thickness * screenRatioAdjustment*0.2);
        stroke(this.color);
       
        for (var i = -1; i <= this.subdivision + 1; i++) {
            var sinOff = Math.PI * 2 / this.subdivision * i / 2;
            var xAdd = screenRatioAdjustment*30 * Math.sin((millis()-playOffset) * this.wobbleSpeed + sinOff);
            var yAdd = screenRatioAdjustment*30 * Math.sin((millis()-playOffset) * this.wobbleSpeed + sinOff);
            var wob = screenRatioAdjustment*30 * Math.sin((millis()-playOffset) * this.wobbleSpeed*0.1 + sinOff);

            if (this.isVertical == false) yAdd = 0;
            if (this.isVertical == true) xAdd = 0;

            var p = p5.Vector.lerp(this.pointA.Pos, this.pointB.Pos, i / this.subdivision);
            var size = (sizeWobble) ? (wob) : this.thickness;
            circle(p.x+xAdd,p.y+yAdd,size);
        }
       
        pop();
    }

    drawStraight() {
        push();
        noFill();
        strokeWeight(this.thickness * screenRatioAdjustment);
        stroke(this.color);
        beginShape();
        vertex(this.pointA.X, this.pointA.Y);

        vertex(this.pointB.X, this.pointB.Y);
        endShape();
        pop();

    }

    draw() {
        switch(lineRenderStyle)
        {
            case 0:
                this.drawStraight();
            break;
            case 1:
                this.drawCurved();
            break;
            case 2:
                this.drawBlocks();
            break;
            case 3:
                this.drawSpheres();
            break;   
        }
    }
}
