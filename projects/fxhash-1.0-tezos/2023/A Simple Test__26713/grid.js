class Grid {
  constructor(_columnCount, _rowCount, _marginFactor, _gridWidth, _gridHeight) {
    this.columnCount = _columnCount
    this.rowCount = _rowCount
    this.marginFactor = _marginFactor === undefined ? 0.1 : _marginFactor
    this.points = []
    this.bigPoints = []
    this.qubes = []
    this.scaleX = 1
    this.scaleY = 1
    this.startX = 0
    this.startY = 0
    this.gridWidth = 0
    this.gridHeight = 0
    this.gridArea = 0
    this.faceArea = 0

    this.qubeCount = 0
  }

  buildGrid() {
    let startX;
    let startY;
    this.points = []
    this.bigPoints = []

    scaleX = this.scaleX
    scaleY = this.scaleY
    startX = this.startX
    startY = this.startY

    nodeHDivisor1 = ceil(random(1, this.columnCount / 2));
    nodeHDivisor2 = ceil(random(1, this.columnCount / 2));
    nodeHDivisor3 = ceil(random(1, 5)); // ceil(random(1, this.columnCount/2))

    nodeVDivisor1 = ceil(random(1, this.rowCount - 4));
    nodeVDivisor2 = nodeVDivisor1 * floor(random(1, this.rowCount / nodeVDivisor1)); // horizontal offset - this many groups of nodeVDivisor3
    nodeVDivisor3 = ceil(random(1, floor(this.rowCount / 1.5 / nodeVDivisor2))); // horizontal offset - nodeVDivisor2 groups of this value

    let joff = random(1000);
    let jinc = random([0.01, 0.04, 0.08]);
    let iinc = jinc < 0.08 ? random(0.06, 0.1) : random([0.01, 0.04]);
    for (let j = 0; j < this.rowCount; j++) {
      let y = startY + j * scaleY;

      let ioff = random(1000);
      for (let i = 0; i < this.columnCount; i++) {
        let x = startX + i * scaleX;
        let gnoise = round(noise(ioff, joff), 2);

        noStroke();
        fill(255);
        // ellipse(x, y, 5, 5)

        // let nodeType
        // if ((j + 1 / 1) % nodeVDivisor1 > 0
        //         || ((j + 1) / nodeVDivisor3) % nodeVDivisor2 > 0 && i % nodeHDivisor2 == 1
        //         || ((j + 1) / nodeVDivisor3) % nodeVDivisor2 == 0 && i % nodeHDivisor2 == 0) {
        //     nodeType = "small"
        // } else {
        //   nodeType = "big"
        // }

        let nodeType;

        let pushNode = {
          origX: x,
          x: x,
          origY: y,
          y: y,
          i: i,
          j: j,
          nodeType: nodeType,
          noise: gnoise,
          lastPercDrawn: 0,
        };

        // if (nodeType == "big") {
        //   this.bigPoints.push(pushNode)
        // }

        this.points.push(pushNode);

        ioff += iinc;
      }
      joff += jinc;
    }
  }

  distortGrid() {

    if (featureText_distortion && switchDistortion == 1) {
      let xDistortion = featureText_distortion ? randomSV(0.12, 0.8) : 0;
      let yDistortion = featureText_distortion ? randomSV(0.12, 0.8) : 0;
      let columnDistortionCount = featureText_distortion
        ? floor(random(1, this.columnCount / 2))
        : 0;
      let rowDistortionCount = featureText_distortion
        ? floor(random(1, this.rowCount / 2))
        : 0;
      let distortedColumns = [];
      let distortedRows = [];
      let distortionTypeSelector = random([0, 1, 2, 3]);

      switch (distortionTypeSelector) {
        case 0:
          distortionType = "Consisent";
          break;
        case 1:
          distortionType = "Random";
          break;
        case 2:
          distortionType = "Noise";
          break;
        case 3:
          distortionType = "Increasing Vertical";
          xDistortion = random(0.1, 0.25);
          yDistortion = random(0.1, 0.25);
          columnDistortionCount = this.columnCount
          rowDistortionCount = this.colurowCountmnCount
          break;
        default:
          distortionType = "Wells";
      }
      while (distortedColumns.length < columnDistortionCount) {
        let chosenDistortion = floor(random(this.columnCount));
        if (!valueInArray(distortedColumns, chosenDistortion)) {
          distortedColumns.push(chosenDistortion);
        }
      }

      while (distortedRows.length < rowDistortionCount) {
        let chosenDistortion = floor(random(this.rowCount));
        if (!valueInArray(distortedRows, chosenDistortion)) {
          distortedRows.push(chosenDistortion);
        }
      }
      print("Distortion Type = " + distortionType)


      // mainBuffer.push()
      // mainBuffer.fill(255, 50)
      // mainBuffer.noFill()
      // mainBuffer.ellipse(wellCenter.x, wellCenter.y, wellSize, wellSize)
      // mainBuffer.pop()

      let dOffStart = random(10000);
      let iOffStart = random(10000);
      let jOffStart = random(10000);
      let dOff = dOffStart;
      let iOff = iOffStart;
      let jOff = jOffStart;
      let dOffInc = 0.01;

      let wellCount = gridCount == 1 ? floor(random(1, 5)) : 1
      let wells = []
      for (let i=0; i<wellCount; i++) {
        let wellCenter = createVector(
          this.startX + this.gridWidth * random(0.25, 0.75),
          this.startY + this.gridHeight * random(0.25, 0.75)
        );
        let wellSize = canvasMinSize * random(0.5, 0.75);

        let pushWell = {
          wellCenter: wellCenter,
          wellSize: wellSize
        }
        wells.push(pushWell)
        // mainBuffer.stroke(0)
        // mainBuffer.fill(0)
        // mainBuffer.ellipse(wellCenter.x, wellCenter.y, wellSize)
      }

      for (let point of this.points) {
        if (distortionType == "Wells") {
          let wellSize
          let wellCenter
          let distFromWellCenter

          let pointVector = createVector(point.x, point.y);

          for (let i=0; i<wells.length; i++) {
            if (wells[i].wellCenter.dist(pointVector) < distFromWellCenter || distFromWellCenter === undefined) {
              distFromWellCenter = wells[i].wellCenter.dist(pointVector);
              wellSize = wells[i].wellSize
              wellCenter = wells[i].wellCenter
            }
          }

          if (distFromWellCenter <= wellSize / 2) {
            let headingFromWellCenter = p5.Vector.sub(
              pointVector,
              wellCenter
            ).heading();
            let distortStrength = map(
              distFromWellCenter,
              0,
              wellSize / 2,
              (wellSize / 2 - distFromWellCenter) / 3,
              0
            );
            let distortVector = p5.Vector.fromAngle(
              headingFromWellCenter,
              distortStrength
            );
            pointVector.add(distortVector);
            point.x = pointVector.x;
            point.y = pointVector.y;
          }
        } else {
          if (point.i == 0 || point.j == 0) {
            dOff = dOffStart;
          }
          if (
            valueInArray(distortedColumns, point.i) ||
            valueInArray(distortedRows, point.j)
          ) {
            point.y +=
              this.scaleY *
              yDistortion *
              (distortionType == "Random" ? random() : 1) *
              (distortionType == "Noise" ? map(noise(dOff), 0, 1, -1, 1) : 1) *
              (distortionType == "Increasing Vertical" ? map(noise(iOff, jOff), 0, 1, -1, 1) : 1);
            point.x +=
              this.scaleX *
              xDistortion *
              (distortionType == "Random" ? random() : 1) *
              (distortionType == "Noise" ? map(noise(dOff), 0, 1, -1, 1) : 1) *
              (distortionType == "Increasing Vertical" ? map(noise(iOff, jOff), 0, 1, -1, 1) : 1);
          }
          iOff += dOffInc 
          if (point.i == this.columnCount - 1) {
            dOffInc += dOffInc * 0.8
            iOff = iOffStart
            jOff += dOffInc
            yDistortion = min(3, abs(yDistortion + yDistortion * 0.05)) * (yDistortion < 0 ? -1 : 1)
            xDistortion = min(3, abs(xDistortion + xDistortion * 0.05)) * (yDistortion < 0 ? -1 : 1)
          }
          dOff += dOffInc;
        }
      }
    }
  }

  assignBigNodes() {
    nodeHDivisor1 = ceil(max(3, random(2, this.columnCount - 1) / 3)); //big type 2 hdivisor, since type 2 usually creates more bigs
    nodeHDivisor2 =
      random() > 0.8
        ? ceil(max(2, random(1, this.columnCount - 1)))
        : ceil(max(2, random(1, (this.columnCount - 1) / 3))); //this controls how many columns between columns of bigs
    nodeHDivisor3 = 1; //only used if splitting the screen in portions, not in use right now

    nodeVDivisor1 = ceil(random(2, min(5, this.rowCount)));
    nodeVDivisor2 = ceil(random(1, this.rowCount - 4)); // vertical offset - this many groups of nodeVDivisor3
    nodeVDivisor3 = ceil(random(1, floor(this.rowCount / 1.1 / nodeVDivisor2))); // vertical offset - nodeVDivisor2 groups of this value

    if (perfect) {
      nodeHDivisor1 = 3;
      nodeHDivisor2 = 2;
      nodeHDivisor3 = 3;

      nodeVDivisor1 = 3;
      nodeVDivisor2 = 2;
      nodeVDivisor3 = 3;
    }

    // smallNodeIDistance = ceil(random(1, 6));
    // smallNodeJDistance = ceil(random(1, 6));
    // bigNodeIDistance = 1;
    // bigNodeJDistance = 4;
    // nodeDivisor1 = 3
    // nodeDivisor2 = 2
    // nodeDivisor3 = 3
    if (featureText_plopType == "Organic") {
      let nums = [];
      for (let point of this.points) {
        nums.push(point.noise);
      }
      let med = round(mode(nums), 2);

      for (let thisPoint of this.points) {
        // if (thisPoint.noise == med) {
        if (abs(med - thisPoint.noise) / med <= random(0, 0.1)) {
          thisPoint.nodeType = "big1";
          this.bigPoints.push(thisPoint);
        } else {
          thisPoint.nodeType = "small";
        }
      }
    } else if (featureText_plopType == "Perfect" && featureText_structureType == "Flag") {
      for (let thisPoint of this.points) {
        // for (let thisPoint of this.points) {
        if (
          floor(thisPoint.j + 1) % 3 == 0 && //if this row is ever third row
          //next two conditionals will stagger the columns that contain big nodes
          ((floor((thisPoint.j + 1) / 3) % 2 == 0 &&
            (thisPoint.i / 1) % 2 == 1) || //and this is the 2nd group of 3 and this column is every 2nd
            (floor((thisPoint.j + 1) / 3) % 2 > 0 && thisPoint.i % 2 == 0)) //or this is NOT the 2nd group of 3 and this column is not every 2nd
          // this set of conditionals is intending to duplicate the volumn of big nodes on the second half of columns
          // || (floor((j + 1) % (nodeVDivisor1 / 3)) == 0  // reduce how many vertical divisions there need to be
          //     && floor(i / (this.columnCount / nodeHDivisor3)) % nodeHDivisor3 >= nodeHDivisor3 - 1  // and if this column is in the second half (or last third)
          //       && ((floor((j + 1) / nodeVDivisor3)) % nodeVDivisor2 == 0 && (i / 1) % nodeHDivisor2 == 1 //and this is the 2nd group of 3 and this column is every 2nd
          //           || (floor((j + 1) / nodeVDivisor3)) % nodeVDivisor2 > 0 && i % nodeHDivisor2 == 0)) //or this is NOT the 2nd group of 3 and this column is not every 2nd
        ) {
          if (thisPoint.noise >= 0.0) {
            thisPoint.nodeType = "big1";
            this.bigPoints.push(thisPoint);
          } else {
            thisPoint.nodeType = "small";
          }
        }
      }
    } else if (featureText_plopType == "Test" && featureText_structureType == "Cube") {
      // for (let thisPoint of this.points) {
        // for (let thisPoint of this.points) {
        let thisPoint = this.points[0]

        
            thisPoint.nodeType = "big1";
            this.bigPoints.push(thisPoint);
      // }
    }  else if (featureText_plopType == "Perfect" && featureText_structureType == "Butterfly") {
      for (let thisPoint of this.points) {
        // for (let thisPoint of this.points) {
        if (
          floor(thisPoint.j + 0) % 3 == 0 && //if this row is ever third row starting with the second row
          //next two conditionals will stagger the columns that contain big nodes
          ((floor((thisPoint.j + 0) / 3) % 2 == 0 &&
            ((thisPoint.i + 1)/ 1) % 2 == 1) || //and this is the 2nd group of 3 and this column is every 2nd
            (floor((thisPoint.j + 0) / 3) % 2 > 0 && (thisPoint.i + 1) % 2 == 0)) //or this is NOT the 2nd group of 3 and this column is not every 2nd
        ) {
          if (thisPoint.noise >= 0.0) {
            thisPoint.nodeType = "big1";
            this.bigPoints.push(thisPoint);
          } else {
            thisPoint.nodeType = "small";
          }
        }
      }
    } else if (featureText_plopType == "Grid") {
      for (let thisPoint of this.points) {
        // for (let thisPoint of this.points) {
        if (
          //if this row is ever third row
          //next two conditionals will stagger the columns that contain big nodes
          floor((thisPoint.j + 0) / nodeVDivisor3) % nodeVDivisor2 == 0 &&
          (thisPoint.i / 1) % nodeHDivisor2 == 1 //and this is the 2nd group of 3 and this column is every 2nd //or this is NOT the 2nd group of 3 and this column is not every 2nd
          // this set of conditionals is intending to duplicate the volumn of big nodes on the second half of columns
          // || (floor((j + 1) % (nodeVDivisor1 / 3)) == 0  // reduce how many vertical divisions there need to be
          //     && floor(i / (this.columnCount / nodeHDivisor3)) % nodeHDivisor3 >= nodeHDivisor3 - 1  // and if this column is in the second half (or last third)
          //       && ((floor((j + 1) / nodeVDivisor3)) % nodeVDivisor2 == 0 && (i / 1) % nodeHDivisor2 == 1 //and this is the 2nd group of 3 and this column is every 2nd
          //           || (floor((j + 1) / nodeVDivisor3)) % nodeVDivisor2 > 0 && i % nodeHDivisor2 == 0)) //or this is NOT the 2nd group of 3 and this column is not every 2nd
        ) {
          if (thisPoint.noise >= 0.0) {
            thisPoint.nodeType = "big1";
            this.bigPoints.push(thisPoint);
          } else {
            thisPoint.nodeType = "small";
          }
        } else if (
          floor(thisPoint.j + 0) % nodeVDivisor1 == 0 &&
          (thisPoint.i / 1) % nodeHDivisor1 == 0
        ) {
          thisPoint.nodeType = "big2";
          this.bigPoints.push(thisPoint);
        }
      }
    } else if (featureText_plopType == "Circle") {
      let centerVector, circleMaxDist, circleMinDist

      if (random() > 0.0) {
        //circle center based on canvas 
        centerVector = createVector(outputWidth / 2, outputHeight / 2);
        circleMaxDist = canvasMinSize * random(0.25, 0.75);
        circleMinDist = circleMaxDist * 0.5;
      } else {
        //circle center based on grid
        centerVector = createVector(this.startX + this.gridWidth / 2, this.startY + this.gridHeight / 2);
        circleMaxDist = min(this.gridWidth , this.gridHeight) * random(0.50, 1);
        circleMinDist = circleMaxDist * random(0.2, 0.5);
      }

      this.centerVector = centerVector
      this.circleMaxDist = circleMaxDist
      this.circleMinDist = circleMinDist
        // qubesBuffer.push()
        // qubesBuffer.strokeWeight(2)
        // qubesBuffer.stroke(255, 0, 0, 255);
        // qubesBuffer.noFill()
        // qubesBuffer.ellipse(centerVector.x, centerVector.y, circleMaxDist*2)
        // qubesBuffer.ellipse(centerVector.x, centerVector.y, circleMinDist*2)
        // qubesBuffer.pop()

      for (let thisPoint of this.points) {
        
        if (
          centerVector.dist(createVector(thisPoint.x, thisPoint.y)) <
            circleMaxDist &&
          centerVector.dist(createVector(thisPoint.x, thisPoint.y)) >
            circleMinDist
           && (thisPoint.j + thisPoint.i) % 2 == 0
        ) {
          thisPoint.nodeType = "big1";
          this.bigPoints.push(thisPoint);
        } else {
          thisPoint.nodeType = "small";
        }
      }
    } else if (featureText_plopType == "Spiral") {
      // let centerVector = createVector(outputWidth / 2, outputHeight / 2);
      // let circleMaxDist = canvasMinSize * random(0.2, 0.8);
      // let circleMinDist = circleMaxDist * 0.5;
      // let thetaInc = random(0.075, 0.15)
      let thetaInc = max(this.scaleX, this.scaleY) * 0.001
      let radiusInc = max(this.scaleX, this.scaleY) * 0.05
      let bigPointsAdded = []

      let spiralPoints = []

      for (let theta = random(), radius = max(this.scaleX, this.scaleY) * 0.5; radius <= (outputHeight/2) / sin(PI/4); theta+=thetaInc) {
        let x = sin(theta) * radius + (outputWidth/2)
        let y = cos(theta) * radius + (height/2) 
        let vectorFromCenter = createVector(x - (outputWidth/2), y - (outputHeight/2))
        let heading = vectorFromCenter.heading() + PI/2

        // spiralPoints.push([createVector(x,y), heading, 0])

        // mainBuffer.push()
        // mainBuffer.noStroke
        // mainBuffer.fill(0)
        // mainBuffer.square(x,y,15)
        // mainBuffer.pop()

        x = -sin(theta) * radius + (outputWidth/2)
        y = -cos(theta) * radius + (height/2)
        vectorFromCenter = createVector(x - (outputWidth/2), y - (outputHeight/2))
        heading = vectorFromCenter.heading() - PI/2
        
        spiralPoints.push([createVector(x,y), heading, 1])

        // radius=radius * radiusInc
        radius+=radiusInc

        mainBuffer.push()
        mainBuffer.noStroke
        mainBuffer.fill(255)
        mainBuffer.square(x,y,15)
        mainBuffer.pop()
      }

      
      for(let i=1; i<spiralPoints.length; i++) {

        let nearestPoint=0
        let shortestDistanceFound = max(outputHeight, outputWidth)

        for (let j=1; j<this.points.length; j++) {
          let distance = dist(this.points[j].x, this.points[j].y, spiralPoints[i][0].x, spiralPoints[i][0].y)
          if (distance < shortestDistanceFound) {
            shortestDistanceFound = distance
            nearestPoint = j
          }
        } 
      //   if (
      //     centerVector.dist(createVector(thisPoint.x, thisPoint.y)) <
      //       circleMaxDist &&
      //     centerVector.dist(createVector(thisPoint.x, thisPoint.y)) >
      //       circleMinDist &&
      //     floor(thisPoint.j + 0) % 2 == 0 &&
      //     (thisPoint.i / 1) % 2 == 0
      //   ) {
      //     thisPoint.nodeType = "big1";
      //     this.bigPoints.push(thisPoint);
      //   } else {
      //     thisPoint.nodeType = "small";
      //   }
      // }

      // for(let i=1; i<spiralPoints.length; i++){
      //   let distance = dist(cellCenterX,cellCenterY,spiralPoints[i][0].x,spiralPoints[i][0].y)
      //   if (distance < shortestDistanceFound) {
      //     shortestDistanceFound = distance
      //     nearestPoint = i
      //   }
      // }    

        // if (spiralPoints[nearestPoint][2] == 1 && shortestDistanceFound < min(this.scaleX, this.scaleY) * 1.5) {
        //   thisPoint.nodeType = "big1";
        //   this.bigPoints.push(thisPoint);
        // } else {
        //   thisPoint.nodeType = "small";
        // }

        if (bigPointsAdded.indexOf(nearestPoint) == -1

        ) {
          bigPointsAdded.push(nearestPoint)
          this.points[nearestPoint].nodeType = "big1";
          this.bigPoints.push(this.points[nearestPoint]);
        } 


      // for (let thisPoint of this.points) {
      //   if (
      //     centerVector.dist(createVector(thisPoint.x, thisPoint.y)) <
      //       circleMaxDist &&
      //     centerVector.dist(createVector(thisPoint.x, thisPoint.y)) >
      //       circleMinDist &&
      //     floor(thisPoint.j + 0) % 2 == 0 &&
      //     (thisPoint.i / 1) % 2 == 0
      //   ) {
      //     thisPoint.nodeType = "big1";
      //     this.bigPoints.push(thisPoint);
      //   } else {
      //     thisPoint.nodeType = "small";
      //   }
      // }
      }
    } 
  }
}
