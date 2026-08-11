class Face {
  constructor(base, edgelength, orientation, direction = "up") {
    this.base = base;
    this.edgelength = edgelength;
    this.points = [];
    this.debugMode = false;
    this.orientation = orientation
    this.angle;
    this.midPoint;
    this.corners = {};
    this.direction = direction;
    this.color;
    this.hasPyramid = false;
    this.hasInvertedTop = false;
    this.antennaBase;
  }
  createFace() {
    if (this.orientation === "right" || this.orientation === "left") {

      if (this.direction === "up") {
        if (this.orientation === "right") {
          this.angle = 330;
        }
        if (this.orientation === "left") {
          this.angle = 210;
        }
      }

      if (this.direction === "down") {
        if (this.orientation === "right") {
          this.angle = 30;
        }
        if (this.orientation === "left") {
          this.angle = 150;
        }
      }
      let A = this.base;
      let D = createVector(A.x, A.y + this.edgelength);
      let B = getPoints(this.base.x, this.base.y, this.angle, this.edgelength)
      let C = getPoints(D.x, D.y, this.angle, this.edgelength)
      this.points = [A, B, C, D]
      this.corners = { A: A, B: B, C: C, D: D }
      this.midPoint = getPoints(this.base.x, this.base.y + this.edgelength / 2, this.angle, this.edgelength / 2)
    }

    if (this.orientation === "top") {
      let A, B, C, D;

      if (this.direction === "up") {
        A = this.base;
        B = getPoints(this.base.x, this.base.y, 210, this.edgelength);
        C = getPoints(B.x, B.y, 330, this.edgelength);
        D = getPoints(C.x, C.y, 30, this.edgelength)
        this.midPoint = createVector(this.base.x, this.base.y - this.edgelength / 2);
      }
      if (this.direction === "down") {
        A = createVector(this.base.x, this.base.y + this.edgelength);
        B = getPoints(A.x, A.y, 150, this.edgelength);
        C = getPoints(B.x, B.y, 30, this.edgelength);
        D = getPoints(C.x, C.y, 330, this.edgelength)
        this.midPoint = createVector(this.base.x, this.base.y + this.edgelength / 2);
      }

      this.points = [A, B, C, D]
      this.corners = { A: A, B: B, C: C, D: D }
    }



  }
  display(top = "#fcba03", right = "#750014", left = "#fc032c", colorStyle = "color") {

    if (colorStyle === "color") {
      blendMode(BLEND)
      if (this.orientation === "top") {
        fill(top)
        this.color = color(top);
      }
      if (this.orientation === "right") {
        fill(right)
        this.color = color(right);
      }
      if (this.orientation === "left") {
        fill(left)
        this.color = color(left);
      }
    }

    if (colorStyle === "gradient") {

      if (this.orientation === "right") {

        var gradient = drawingContext.createLinearGradient(width / 2, 0, width / 2, height);
        gradient.addColorStop(0.2, right[0]);
        gradient.addColorStop(0.5, right[1]);
        gradient.addColorStop(1, right[2]);
        drawingContext.fillStyle = gradient;
        drawingContext.strokeStyle = gradient;
        this.color = getColor(this.midPoint.x, this.midPoint.y)
      }
      if (this.orientation === "left") {

        var gradient = drawingContext.createLinearGradient(width / 2, 0, width / 2, height);
        gradient.addColorStop(0.2, left[0]);
        gradient.addColorStop(0.5, left[1]);
        gradient.addColorStop(1, left[2]);
        drawingContext.fillStyle = gradient;
        drawingContext.strokeStyle = gradient;
        this.color = getColor(this.midPoint.x, this.midPoint.y)
      }
      if (this.orientation === "top") {

        var gradient = drawingContext.createLinearGradient(width / 2, 0, width / 2, height);
        gradient.addColorStop(0.2, top[0]);
        gradient.addColorStop(0.5, top[1]);
        gradient.addColorStop(1, top[2]);
        drawingContext.fillStyle = gradient;
        drawingContext.strokeStyle = gradient;
        this.color = getColor(this.midPoint.x, this.midPoint.y)
      }
      // console.log(this.color)
    }


    beginShape();
    noStroke()
    for (let i = 0; i < this.points.length; i++) {

      vertex(this.points[i].x, this.points[i].y)

    }
    endShape(CLOSE);
    //stroke(0)


  }

  displayCenter() {
    drawingContext.fillStyle = color(0, 0, 100)
    if (this.orientation === "right") {
      ellipse(this.midPoint.x, this.midPoint.y, 10, 10)
    }

  }

  logLengths() {
    console.log("A->D: " + this.points[0].dist(this.points[2]))
  }

  displayCorners() {
    let corners = ["A", "B", "C", "D"];
    for (let i = 1; i < this.points.length; i++) {
      textAlign(CENTER);
      fill(255);
      noStroke();
      text(corners[i], this.points[i].x, this.points[i].y)
    }
  }

  displayDirection(origin = "bottom", palette,bm=BLEND) {
    blendMode(bm)
    let trcolor;
    if (palette === "undefined") {
      trcolor = color(this.color._getHue(), this.color._getSaturation() - 50, this.color._getBrightness() + 10)
    } else
      trcolor = (color(this.orientation === "right" ? palette.right : palette.left, this.color._getSaturation() - palette.sat, this.color._getBrightness() - palette.bri))

    if (origin === "bottom") {
      if (this.orientation === "right" || this.orientation === "left") {
        fill(trcolor)
        push();
        noStroke();
        beginShape();
        vertex(this.corners.C.x, this.corners.C.y);
        vertex(this.midPoint.x, this.midPoint.y - this.edgelength / 2);
        vertex(this.corners.D.x, this.corners.D.y)
        endShape();
        pop();
      }
    }
    if (origin === "rightBack") {
      if (this.orientation === "left") {
        fill(trcolor)
        push();
        noStroke();
        beginShape();
        vertex(this.corners.B.x, this.corners.B.y);
        let topPoint = getPoints(this.base.x, this.base.y + this.edgelength / 2, this.angle, this.edgelength / 8)
        vertex(topPoint.x, topPoint.y);
        vertex(this.corners.C.x, this.corners.C.y)
        endShape();
        pop();
      }
    }
    if (origin === "leftBack") {
      if (this.orientation === "right") {
        fill(trcolor)
        push();
        noStroke();
        beginShape();
        vertex(this.corners.B.x, this.corners.B.y);
        let topPoint = getPoints(this.base.x, this.base.y + this.edgelength / 2, this.angle, this.edgelength / 8)
        vertex(topPoint.x, topPoint.y);
        vertex(this.corners.C.x, this.corners.C.y)
        endShape();
        pop();
      }
    }
    blendMode(BLEND)
  }

  addAntenna(opacity = 0.5, dishSize = 5, colorParams, depth, style, BLENDMode,beaconSettings) {


    strokeWeight(0.8 * width / 1000)
    let randomHeight = IntRandRange(2, 8)
    stroke(color(colorParams.c3[0], colorParams.c3[1], colorParams.c3[2], 0.8))

    

    
    let topPoint;
    if (this.hasInvertedTop || this.hasPyramid) {
      topPoint = this.antennaBase
    } else topPoint = this.midPoint

    line(topPoint.x, topPoint.y, topPoint.x, topPoint.y - this.edgelength * randomHeight);
    blendMode(BLEND)

    push();
    translate(topPoint.x, topPoint.y - this.edgelength * randomHeight)
    let a = randomFromArray([300,60]);
   if(style==="dish"){
   
    rotate(a);
   }if(style==="circle"){
    rotate(0);
   }else{
    rotate(90)
   }
   
    let gradient = drawingContext.createRadialGradient(0, 0, 1620.5 * width / 1000, 0, 0, 1000 * width / 1000);
    gradient.addColorStop(0.2, color(colorParams.c1[0], colorParams.c1[1], colorParams.c1[2], opacity * 0.3));
    gradient.addColorStop(0.5, color(colorParams.c2[0], colorParams.c2[1], colorParams.c2[2], opacity));
    gradient.addColorStop(0.9, color(colorParams.c3[0], colorParams.c3[1], colorParams.c3[2], opacity * 0.4));
    drawingContext.fillStyle = gradient

    noStroke()
    blendMode(DARKEST)
    //stroke(color(hue(this.color),saturation(this.color),brightness(this.color)-60));
    if (depth) {
      ellipse(0, 0, 4000 * width / 1000, 8000 * width / 1000)
    }

    blendMode(BLEND)
    blendMode(BLENDMode)
    //noFill();
    stroke(colorParams.c2[0],colorParams.c2[1] , colorParams.c2[2], 0.5)
    strokeWeight(2 * width / 1000)
    let sf = int(dishSize * this.edgelength);

    if (style === "Elliptic") {
      for (let i = 0; i < sf; i += this.edgelength * 0.20 * 4) {
        //rotate(a)
        ellipse(i * -0.2, 0, i * 0.35, i)
      }
    }
    if (style === "Circular") {
     
      
      for (let i = sf; i > 0; i -= this.edgelength * 0.20 * 5) {
        ellipse(0, 0, i, i )
      }
     
    }
    if (style === "Chatra") {
      for(let j=0;j<10;j++){

      
      for (let i = sf; i > 0; i -= this.edgelength * 0.20 * 5) {
        ellipse(j*-15*height/1080, 0, i*0.5/j, i/j )
      }
      }
      if(this.hasPyramid) this.chatraTop  = createVector(this.antennaBase.x,this.antennaBase.y-9*-15*height/1080)
    }
    if (style === "Galactic") {
     
      
      for(let j=0;j<60;j++){

       rotate(random(0,360))
        for (let i = sf; i > 0; i -= this.edgelength * 0.20 * 8) {
         // rotate(a)
          ellipse(j*-5*height/1080, 0, i*0.5/j, i/j )
        }
        }
     
    }
    if(beaconSettings.hasBeacon){
      let nextPoint2 = getPoints(0, 0, -180 , 12000 * width / 1000)
   
       blendMode(ADD)
   
       //stroke(330, 100, 100, 0.5)
       stroke(colorParams.c2[0],colorParams.c2[1] , colorParams.c2[2], 0.2)
       strokeWeight(beaconSettings.thickness * width / 1000)
       line(0, 0, nextPoint2.x, nextPoint2.y)
       strokeWeight((beaconSettings.thickness-2) * width / 1000)
       stroke(colorParams.c2[0],colorParams.c2[1] , colorParams.c2[2], 1)
       line(0, 0, nextPoint2.x, nextPoint2.y)
       strokeWeight((beaconSettings.thickness-6) * width / 1000)
       //stroke(30, 0, 100, 1.0)
       stroke(colorParams.c2[0],colorParams.c2[1] , colorParams.c2[2], 1)
       line(0, 0, nextPoint2.x, nextPoint2.y)
       //line(0,0,0,-1000)
       blendMode(BLEND)
       }

    blendMode(BLEND)
    //  let nextPoint = getPoints(0, 0, a , 1200 * width / 1000)

    //   blendMode(ADD)

    //   stroke(330, 100, 100, 0.5)
    //   strokeWeight(10.5 * width / 1000)
    //   line(0, 0, nextPoint.x, nextPoint.y)
    //   strokeWeight(5.5 * width / 1000)
    //   stroke(30, 100, 100, 1.0)
    //   line(0, 0, nextPoint.x, nextPoint.y)
    //   strokeWeight(3.5 * width / 1000)
    //   stroke(30, 0, 100, 1.0)
    //   line(0, 0, nextPoint.x, nextPoint.y)
    //   //line(0,0,0,-1000)
    //   blendMode(BLEND)


    pop();
    // console.log("antenna")
    noStroke()

  }

  addDepth(opacity, blendType = SCREEN, size = 1200, colorParams) {

    if (this.orientation === "top") {

      let randomHeight = IntRandRange(2, 10)
      let randPTop1 = getPoints(this.base.x, this.base.y, 210, random(this.edgelength * 0.1, this.edgelength * 0.9))
      let randPTop = getPoints(randPTop1.x, randPTop1.y, 330, random(this.edgelength * 0.1, this.edgelength * 0.9));
      push();
      translate(randPTop.x, randPTop.y - this.edgelength * randomHeight)
      blendMode(blendType)


      let gradient = drawingContext.createRadialGradient(0, 0, size / 2 * width / 1000, 0, 0, size / 16 * width / 1000);

      gradient.addColorStop(colorParams.c1[3], color(colorParams.c1[0], colorParams.c1[1], colorParams.c1[2], opacity));
      gradient.addColorStop(colorParams.c2[3], color(colorParams.c2[0], colorParams.c2[1], colorParams.c2[2], opacity));
      gradient.addColorStop(colorParams.c3[3], color(colorParams.c3[0], colorParams.c3[1], colorParams.c3[2], opacity));
      drawingContext.fillStyle = gradient

      noStroke()


      ellipse(0, 0, size * width / 1000, size * width / 1000)
      pop();
      blendMode(BLEND)
    }
  }

  addPyramid(colorR, colorL, hasInvertedTop = false,heightSettings) {

    if (this.orientation === "top") {
      this.hasPyramid = true;
      let randomHeight = IntRandRange(heightSettings.min, heightSettings.max)
      let topPoint = createVector(this.base.x, this.base.y - this.edgelength * randomHeight );
      // fill(hue(this.color),saturation(this.color)+50,brightness(this.color))
      fill(colorL)
      beginShape();
      vertex(this.corners.A.x, this.corners.A.y);
      vertex(topPoint.x, topPoint.y)
      vertex(this.corners.B.x, this.corners.B.y)
      endShape();
      fill(hue(colorR) + 20, saturation(colorR), brightness(colorR))
      //fill(colorR)
      beginShape();
      vertex(this.corners.A.x, this.corners.A.y);
      vertex(topPoint.x, topPoint.y)
      vertex(this.corners.D.x, this.corners.D.y)
      endShape();
     
      this.antennaBase = topPoint;
      if (hasInvertedTop) {
        this.hasInvertedTop = true;
        let newFaceLoc = createVector(topPoint.x, topPoint.y - random(5, 18) * height / 1080);
        let newFace = new Face(newFaceLoc, 20 * height / 1080, "top", "up");
        newFace.createFace()
        newFace.display(this.color,this.color,this.color,"color");
        beginShape()
        fill(colorL)
        vertex(newFace.corners.A.x, newFace.corners.A.y)
        vertex(topPoint.x, topPoint.y)
        vertex(newFace.corners.B.x, newFace.corners.B.y)
        endShape();

        fill(colorR)
        vertex(newFace.corners.A.x, newFace.corners.A.y)
        vertex(topPoint.x, topPoint.y)
        vertex(newFace.corners.D.x, newFace.corners.D.y)
        endShape();
        this.antennaBase = newFace.midPoint;
      }

    }



  }


  addDroid(h, hs = 15) {
    if (this.hasInvertedTop === false || this.hasPyramid === false) {

      let points = [];
      for (let i = 0; i < 8; i++) {
        let randPTop1 = getPoints(this.base.x, this.base.y, 210, random(this.edgelength * 0.1, this.edgelength * 0.9))
        let randPTop = getPoints(randPTop1.x, randPTop1.y, 330, random(this.edgelength * 0.1, this.edgelength * 0.9));
        points.push(randPTop);
        noFill()
        blendMode(ADD)
        stroke(20, 10, 100)
        strokeWeight(this.edgelength / 80)
        beginShape()
        points.forEach(element => {
          curveVertex(element.x, element.y)
        })
        endShape(CLOSE)
        blendMode(BLEND)
      }


      // let legLength = h;
      //  let randPTop1 = getPoints(this.base.x,this.base.y,210,random(this.edgelength*0.1,this.edgelength*0.9))
      // let randPTop = getPoints(randPTop1.x,randPTop1.y,330,random(this.edgelength*0.1,this.edgelength*0.9));
      // fill(0,0,0)
      // stroke(0)
      // let leftlegTop = createVector(randPTop.x-6*height/1080,randPTop.y-legLength*height/1080);
      // let rightlegTop = createVector(randPTop.x+11*height/1080,randPTop.y-legLength*height/1080)
      // line(randPTop.x,randPTop.y,leftlegTop.x,leftlegTop.y)
      // line(randPTop.x+8*height/1080,randPTop.y,rightlegTop.x,rightlegTop.y)
      // beginShape()
      // vertex(leftlegTop.x,leftlegTop.y);
      // vertex(rightlegTop.x,rightlegTop.y);
      // vertex(randPTop.x,randPTop.y-legLength*2*height/1080)
      // endShape(CLOSE)
      // fill(255)
      // circle(randPTop.x,randPTop.y-legLength*2*height/1080-hs*height/1080,hs*height/1080)
    }

  }

  subDivide(count) {
    let step = this.edgelength / count;
    if (this.orientation === "right" || this.orientation === "left") {
      for (let j = 0; j < count; j++) {
        for (let i = 0; i < count; i++) {
          let p = getPoints(this.base.x, this.base.y + j * step, this.angle, step * i);
          let f = new Face(p, step, this.orientation, "up");
          f.createFace();

          f.display(color(random(0, 360), 100, 100), color(random(0, 360), 100, 100), color(random(60, 90), 100, 100))
        }
      }

    }

  }

}


