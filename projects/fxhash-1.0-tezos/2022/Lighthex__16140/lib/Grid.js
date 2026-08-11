class Grid {
    constructor(cellCountX, cellCountY) {
        this.xCount = cellCountX;
        this.yCount = cellCountY;
        this.selectedCell = null;
        this.cells;
        this.totalCount;

        this.cellWidth = (squareSize - 2 * outterPadding) / (this.xCount+2);
        this.cellHeight = (squareSize - 2 * outterPadding) / (this.yCount+1) * 0.875;

        this.upperOffset = (hD <= wD) ? (hD - ((this.yCount) * this.cellHeight)) / 2 : 0;
        this.setup();
        this.manualIterate = 0;
        this.mergeRandomCells(mergeIterations);
        this.isAtLastOne = false;
        this.cellID = 0;
        this.constructDir = 0;
        this.startDir = 0;
        this.tempPoints = [];
        this.constructs = [];
        this.currentCell = this.cells[this.cellID];

        this.startID = this.currentCell.ID;
        this.skippables = []
        this.skippables.push(this.currentCell.ID);
        this.currentCell.setSkippable();
        this.sameCellTouched = []

    }

    get SelectedCell() {
        return this.selectedCell;
    }

    UpperOffset() {
        return this.upperOffset;
    }


    XCount() {
        return this.xCount;
    }

    YCount() {
        return this.yCount;
    }

    GetCellIndex(xx, yy) {
        let xCount = this.xCount;
        let ind = 0;

        for (var y = 0; y < yy; y++) {
            if (y % 2 == 1) {
                xCount = this.xCount + 1;
            } else {
                xCount = this.xCount;
            }
            /* for (var x = 0; x < xCount; x++) {
            } */
            ind += xCount;
        }
        return ind + xx;
    }

    GetCellIndex_OLD(x, y) {
        let inde = 0;
        if (y > 0) {
            for (var i = 0; i < y; i++) {
                if (i % 2 == 1) {
                    inde += this.xCount + 1;
                } else {
                    inde += this.xCount;
                }
            }
            let add = 0//Math.floor((y-2)/2);
            return inde + x - 1 + add;
        } else {
            return x;
        }
    }

    setup() {
        //clear data
        this.cells = [];
        this.totalCount


        let xCount = this.xCount;

        for (var y = 0; y < this.yCount; y++) {
            if (y % 2 == 1) {
                xCount = this.xCount + 1;
            } else {
                xCount = this.xCount;
            }
            for (var x = 0; x < xCount; x++) {
                var xPos = x * this.cellWidth;
                var yPos = y * this.cellHeight;

                this.cells.push(new Toggle(this, x, y, xPos, yPos, this.cellWidth, this.cellHeight, bgColor, 180));
            }
        }

        //cache cell count
        this.totalCount = this.cells.length;


        //set neighbors
        var theIndex = 0;
        for (var y = 0; y < this.yCount; y++) {
            let shifted = y % 2 == 0;
            let xCount = shifted ? this.xCount : this.xCount + 1;
            for (var x = 0; x < xCount; x++) {
                if (!shifted) {
                    if (x > 0 && y > 0) {
                        var leftX = x - 1;
                        var leftY = y - 1;
                        var c = this.GetCellIndex(leftX, leftY);
                        this.cells[theIndex].addTopLeftNeighbor(this.cells[c]);
                    }

                    if (y > 0 && x < xCount - 1) {
                        var leftY = y - 1;
                        var c = this.GetCellIndex(x, leftY);
                        this.cells[theIndex].addTopRightNeighbor(this.cells[c]);
                    }

                    if (x < xCount - 1 && y < this.yCount - 1) {
                        var leftY = y + 1;
                        var c = this.GetCellIndex(x, leftY);
                        this.cells[theIndex].addBottomRightNeighbor(this.cells[c]);
                    }

                    if ((x > 0) && y < this.yCount - 1) {
                        var leftX = x - 1;
                        var leftY = y + 1;
                        var c = this.GetCellIndex(leftX, leftY);
                        this.cells[theIndex].addBottomLeftNeighbor(this.cells[c]);
                    }
                } else {
                    if (y > 0) {
                        var leftY = y - 1;
                        var c = this.GetCellIndex(x, leftY);
                        this.cells[theIndex].addTopLeftNeighbor(this.cells[c]);
                    }

                    if ((x < xCount) && y > 0) {
                        var leftX = x + 1;
                        var leftY = y - 1;
                        var c = this.GetCellIndex(leftX, leftY);
                        this.cells[theIndex].addTopRightNeighbor(this.cells[c]);
                    }


                    if (x < xCount && y < this.yCount - 1) {
                        var leftX = x + 1;
                        var leftY = y + 1;
                        var c = this.GetCellIndex(leftX, leftY);
                        this.cells[theIndex].addBottomRightNeighbor(this.cells[c]);
                    }

                    if (y < this.yCount - 1) {

                        var leftY = y + 1;
                        var c = this.GetCellIndex(x, leftY);
                        this.cells[theIndex].addBottomLeftNeighbor(this.cells[c]);
                    }
                }

                if (x > 0) {
                    var leftX = x - 1;
                    var c = this.GetCellIndex(leftX, y);
                    this.cells[theIndex].addLeftNeighbor(this.cells[c]);
                }


                if (x < xCount - 1) {
                    var rightX = x + 1;
                    var c = this.GetCellIndex(rightX, y);
                    this.cells[theIndex].addRightNeighbor(this.cells[c]);
                }
                theIndex++;
            }
        }

        /* this.selectedCell = this.cells[20];
        this.selectedCell.SetSelected(); */
    }



    mergeRandomCells(iterations) {
        let maxDirs = 5;
        for (var o = 0; o < iterations; o++) {
            for (var i = 0; i < this.totalCount; i++) {
                var mergeOrNot = fxrand() > 0.5;
                if (mergeOrNot) {
                    var mergeDir = Math.round(fxrand() * maxDirs);
                    this.cells[i].merge(mergeDir);
                }
            }
        }
    }

    getNextUntouchedCell() {

        this.cellID++;
        if (this.cellID > this.cells.length - 1) 
        {
            this.cellID = 0;
            this.isAtLastOne = true;
        }

        let cell = this.cells[this.cellID];

        if (this.isAtLastOne) return cell;

         if(cell.Skippable)
         {
             return this.getNextUntouchedCell();
         }

        if (cell.checkIsInSideOfSkipped()) {
            if (this.skippables.indexOf(cell.ID) < 0) {

                this.skippables.push(cell.ID);
            }
            return this.getNextUntouchedCell();
        }

        return cell;
    }

    instantPlot() {
        while (this.isAtLastOne == false) {
            this.iterateConstruct();
        }
    }

    pushConstruction() {
        //create a Construction object from the tempArray
        this.constructs.push(new Construct(this.currentCell, this.tempPoints));

        //Empty the temp array
        this.tempPoints = [];

        //Let's check if we got all
        this.isAtLastOne = (this.skippables.length == this.cells.length);

        //If we still haven't got all, let's set the params to start over with this thing
        if (!this.isAtLastOne) {
            //Get the next cell that hasn't been touched yet
            this.currentCell = this.getNextUntouchedCell();
            if (this.currentCell != null) {
                //Reset current and startDirections and set new start-ID
                this.constructDir = 0;
                this.startDir = 0;
                this.startID = this.currentCell.ID;

                //If this cell hasn't been added to the skippables array, lets add it and mark the cell!
                if (this.skippables.indexOf(this.currentCell.ID) < 0) {
                    this.skippables.push(this.currentCell.ID);
                    this.currentCell.setSkippable();
                }
            }
        }
    }

    iterateConstruct() {

        if(!playing) return;
        //If last one has been drawn, return
        if (this.isAtLastOne) return;

        //Get the two points that make up a side of 1 hexagon
        let points = this.currentCell.getDirPoints(this.constructDir, 0);

        //Check if in "currentDirection" there is a bridge
        if (this.currentCell.MergeDirs.indexOf(this.constructDir) < 0) {
            //No bridge
            if (this.constructDir == this.startDir && this.currentCell.ID == this.startID) {
                //Push "left Point" of the line to temp-array if it's the first side.
                this.tempPoints.push(points[0]);
            }
            //Always push second point to tempArray
            this.tempPoints.push(points[1]);

            //Next direction
            this.constructDir++;
            //If it's above 5, go to 0 because we only have 6 sides (0-5)
            if (this.constructDir > 5) this.constructDir = 0;

            //If the currentDirection and the startDirection are the same AND if currentCell-ID and startID are the same
            //Shape is closed, push it to the cached constructions, empty temp array, find next hex to begin with and start over
            if (this.constructDir == this.startDir && this.currentCell.ID == this.startID) {
                this.pushConstruction();
            }

        } else {
            //There is a bridge!

            //Let's switch over to the adjacent cell
            this.currentCell = this.currentCell.getNeighbor(this.constructDir);

            //And reverse the currentDirection since we're on the other side of the bride
            this.constructDir = this.currentCell.getCounterDir(this.constructDir);

            //Getting the two points that make up the side where the bridge is
            let newPoint = this.currentCell.getDirPoints(this.constructDir, 0);


            //if(this.isAtLastOne) this.tempPoints.push(newPoint[0]);

            //Push "right point" of the line to the tempArray
            this.tempPoints.push(newPoint[1]);

            //Next direction
            this.constructDir++;

            //Round-robin to 0
            if (this.constructDir > 5) this.constructDir = 0;

            //If this cell hasn't been added to the skippables array, lets add it and mark the cell!
            if (this.skippables.indexOf(this.currentCell.ID) < 0) {
                this.skippables.push(this.currentCell.ID);
                this.currentCell.setSkippable();
            }

            if (this.constructDir == this.startDir && this.currentCell.ID == this.startID) {
                this.pushConstruction();
            }
        }




    }

    iterateMergeRandomCells(forcedDir = -1) {
        let maxDirs = 5;
        var mergeOrNot = (forcedDir < 0) ? fxrand() > 0.5 : true;
        if (mergeOrNot) {
            var mergeDir = Math.round(fxrand() * maxDirs);
            if (forcedDir >= 0) {
                mergeDir = forcedDir;
            }
            this.cells[this.manualIterate].merge(mergeDir);
        }

        this.cells[this.manualIterate].SetSelected(false);

        if (this.manualIterate < this.totalCount - 1) {
            this.manualIterate++;
        } else {
            this.manualIterate = 0;
        }
        this.cells[this.manualIterate].SetSelected();
    }





    draw() {

        for (var i = 0; i < this.totalCount; i++) {
            this.cells[i].update();
        }

        let lenT = this.tempPoints.length
        push();

        let z = 0;
        this.constructs.forEach(c => {
            if (!plottableView) {
                let colFill = c.getDynColor();
                let colStroke = c.getOutlineColor();
                stroke(colStroke);
                fill(colFill);
                //fill(getRandomPaletteColor(noise(z),0))
            } else {
                stroke(0);
            }
            let len = c.Points.length;
            beginShape();
            for (var i = 0; i < len; i++) {
                vertex(c.Points[i].x, c.Points[i].y)
            }
            endShape(CLOSE);
            z++;

        });

        noFill()
        if (!plottableView) {
            strokeWeight(strokeWidth * screenRatioAdjustment * 1.1);
        } else {
            strokeWeight(plotterStrokeWidth * screenRatioAdjustment);
        }

        if (!plottableView) {
            stroke(255);
        } else {
            stroke(0);
        }


        beginShape();
        for (var i = 0; i < lenT; i++) {
            vertex(this.tempPoints[i].x, this.tempPoints[i].y)
        }
        endShape();
        pop();

       /*  push()
        noStroke();

        fill(10, 10, 10, 200);
        rect(5, 5, 200, 115)
        fill(255);
        text("Start ID: " + this.startID, 10, 10);
        text("Cell-ID: " + this.currentCell.ID, 10, 30);
        text("Start Dir: " + this.startDir, 10, 50);
        text("Current Dir: " + this.constructDir, 10, 70);
        text("Constructs: " + this.constructs.length, 10, 90);
        text("Compare: " + this.skippables.length + " - " + this.cells.length, 10, 110);

        for (var i = 0; i < this.skippables.length; i++) {
            text(this.skippables[i], 10, 130 + i * 10)
        }
        pop(); */
    }


}
