class Pyramid extends IsoCube {
    constructor(x, y, size, dir, origin) {
        super(x, y, size, dir, origin);
    }
    init() {
        super.init();

    }

    display(c1 = color(50, 100, 40), c2 = color(0, 100, 80),c3) {
        //super.display()
        if (this.origin === "bottom") {
            fill(c1)
            beginShape()
            vertex(this.faces[2].corners.D.x, this.faces[2].corners.D.y);
            vertex(this.faces[0].midPoint.x, this.faces[0].midPoint.y);
            vertex(this.faces[2].corners.C.x, this.faces[2].corners.C.y);
            endShape();
            fill(c2)
            beginShape()
            vertex(this.faces[1].corners.D.x, this.faces[1].corners.D.y);
            vertex(this.faces[0].midPoint.x, this.faces[0].midPoint.y);
            vertex(this.faces[1].corners.C.x, this.faces[1].corners.C.y);
            endShape();
          
        }
        if (this.origin === "rightBack") {
            fill(c1)
            beginShape()
            vertex(this.faces[0].corners.B.x, this.faces[0].corners.B.y);
            vertex(this.faces[0].corners.C.x, this.faces[0].corners.C.y);
            vertex(this.faces[1].midPoint.x, this.faces[1].midPoint.y);
            endShape();
            fill(c2)
            beginShape()
            vertex(this.faces[2].corners.B.x, this.faces[2].corners.B.y);
            vertex(this.faces[2].corners.C.x, this.faces[2].corners.C.y);
            vertex(this.faces[1].midPoint.x, this.faces[1].midPoint.y);
            endShape();
        }

        if (this.origin === "leftBack") {
            fill(color(hue(c1),saturation(c1)+30,brightness(c1)+10))
            beginShape()
            vertex(this.faces[0].corners.C.x, this.faces[0].corners.C.y);
            vertex(this.faces[0].corners.D.x, this.faces[0].corners.D.y);
            vertex(this.faces[2].midPoint.x, this.faces[2].midPoint.y);
            endShape();
            fill(c2)
            beginShape()
            vertex(this.faces[1].corners.B.x, this.faces[1].corners.B.y);
            vertex(this.faces[1].corners.C.x, this.faces[1].corners.C.y);
            vertex(this.faces[2].midPoint.x, this.faces[2].midPoint.y);
            endShape();
        }

        this.faces[0].color =c1;
        this.faces[1].color =c2;
        this.faces[2].color =c3;
    }

    addDepth(opacity,blendType = SCREEN,size=1200,colorParams){
        this.faces[0].addDepth(opacity,blendType,size,colorParams)
    }
    addAntenna(o,ds){
        this.faces[0].addAntenna(o,ds)
    }
}





class Cube extends IsoCube {
    constructor(x, y, size, dir, origin) {
        super(x, y, size, dir, origin);
    }
    init() {
        super.init();
    }

    display(c1, c2, c3) {
       displayFace(this.faces[0],c1)
       displayFace(this.faces[1],c2)
       displayFace(this.faces[2],c3)
    }

    addAntenna(o,ds,colorParams,depth,style,bm,beaconSettings){
        this.faces[0].addAntenna(o,ds,colorParams,depth,style,bm,beaconSettings)
    }
    addDepth(opacity,blendType = SCREEN,size=1200,colorParams){
        this.faces[0].addDepth(opacity,blendType,size,colorParams)
    }
    displayDir(origin,palette,bm){
        super.displayDir(origin,palette,bm)
    }


}



class PyramidFace extends Face {
    constructor(base, edgelength, orientation, direction = "up") {
        super(base, edgelength, orientation, direction = "up")
    }
    createFace() {
        super.createFace();

    }



}


function displayFace(face,color){
    face.color = color
    noStroke()
    fill(color);
    beginShape()
    for(let i =0;i<face.points.length;i++){
    vertex(face.points[i].x,face.points[i].y)
    }
    endShape(CLOSE)
}
