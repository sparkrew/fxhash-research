class Cell {
    constructor(myGrid, xIndex, yIndex, xPos, yPos, width, height) {

        this.rootID = "";
        this.isInSideOfSkipped = false;
        this.myGrid = myGrid;
        this.x = xPos;
        this.y = yPos;
        this.xIndex = xIndex;
        this.yIndex = yIndex;
        this.width = width;
        this.height = height;
        this.selected = false;
        this.fadeOffsetX = xPos;
        this.fadeOffsetY = yPos;
        this.skippable = false;

        this.xPaletteIndex = xIndex;
        this.yPaletteIndex = yIndex;

        this.showDir = -1;
        this.rightTopNeighbor;
        this.leftTopNeighbor;

        this.rightBottomNeighbor;
        this.leftBottomNeighbor;

        this.leftNeighbor;
        this.rightNeighbor;

        this.isMerged = false;
        this.mergedDirs = [];

        this.color = color(255);
    }

    setSkippable()
    {
        this.skippable = true;
    }

    get Skippable()
    {
        return this.skippable;
    }

    get MergeDirs()
    {
        return this.mergedDirs;
    }

    setRootId(newId)
    {
        this.rootID = newId;
    }

    get RootID()
    {
        return this.rootID;
    }

    get IsRoot()
    {
        return this.rootID == this.ID;
    }

    get ID() {
        return this.xIndex + "-" + this.yIndex;
    }

    get FadeOffsetX() {
        return this.fadeOffsetX;
    }

    get FadeOffsetY() {
        return this.fadeOffsetY;
    }

    get XPaletteIndex() {
        return this.xPaletteIndex;
    }

    get YPaletteIndex() {
        return this.yPaletteIndex;
    }

    SetFadeOffsetX(val) {
        this.fadeOffsetX = val;
    }

    SetFadeOffsetY(val) {
        this.fadeOffsetY = val;
    }

    SetPaletteIndexX(val) {
        this.xPaletteIndex = val;
    }

    SetPaletteIndexY(val) {
        this.yPaletteIndex = val;
    }


    get Color() {
        return this.color;
    }

    get X() {
        return this.x;
    }

    get Y() {
        return this.y;
    }

    get XIndex() {
        return this.xIndex;
    }

    get YIndex() {
        return this.yIndex;
    }

    get W() {
        return this.width;
    }

    get H() {
        return this.height;
    }

    get IsMerged() {
        return this.isMerged;
    }


    addTopLeftNeighbor(cell) {
        this.leftTopNeighbor = (cell);
    }

    addBottomLeftNeighbor(cell) {
        this.leftBottomNeighbor = (cell);
    }

    addTopRightNeighbor(cell) {
        this.rightTopNeighbor = (cell);
    }

    addBottomRightNeighbor(cell) {
        this.rightBottomNeighbor = (cell);
    }

    addRightNeighbor(cell) {
        this.rightNeighbor = (cell);
    }

    addLeftNeighbor(cell) {
        this.leftNeighbor = (cell);
    }

    //  0 Top Left
    //  1 Top Right
    //  2 Right
    //  3 Bottom Right
    //  4 Bottom Left
    //  5 Left
    getNeighbor(mDir) {
        switch (mDir) {
            case 0:
                return this.getTopLeftNeighbor();
            case 1:
                return this.getTopRightNeighbor();
            case 2:
                return this.getRightNeighbor();
            case 3:
                return this.getBottomRightNeighbor();
            case 4:
                return this.getBottomLeftNeighbor();
            case 5:
                return this.getLeftNeighbor();
        }
        return null;
    }

    getTopLeftNeighbor() {
        return this.leftTopNeighbor;
    }

    getTopRightNeighbor() {
        return this.rightTopNeighbor;
    }

    getBottomLeftNeighbor() {
        return this.leftBottomNeighbor;
    }

    getBottomRightNeighbor() {
        return this.rightBottomNeighbor;
    }

    getRightNeighbor() {
        return this.rightNeighbor;
    }

    getLeftNeighbor() {
        return this.leftNeighbor;
    }

    updateShapePoints()
    {
    }

    get IsInSideOfSkipped()
    {
        return this.isInSideOfSkipped;
    }

    checkIsInSideOfSkipped()
    {
        if(this.mergedDirs.length > 0)
        {
            for(var i = 0; i < this.mergedDirs.length;i++)
            {
                let cell = this.getNeighbor(this.mergedDirs[i]);
                if(cell.Skippable == false)
                {
                    return false;
                }
            }
            
            this.isInSideOfSkipped = true;
            this.skippable = true;
            
            return true;
        } else {
            return false;
        }
    }

    markMerged(dir) {
        if (this.mergedDirs.indexOf(dir) < 0) {
            this.mergedDirs.push(dir);
        }
        this.isMerged = true;
        this.updateShapePoints();
    }

    getDynColor()
    {
        return this.color(255,0,0)
    }

    getOutlineColor()
    {
        return this.color(0,255,0)
    }

    show(dir) {
        this.showDir = dir;
    }

    SetSelected(select = true) {
        this.selected = select;
    }


    getCounterDir(dir) {
        //  0 Top Left
        //  1 Top Right
        //  2 Right
        //  3 Bottom Right
        //  4 Bottom Left
        //  5 Left
        switch (dir) {
            default:
            case 0:
                return 3;
            case 1:
                return 4;
            case 2:
                return 5;
            case 3:
                return 0;
            case 4:
                return 1;
            case 5:
                return 2;
        }
    }


    applyDirection(tempMarked, fadeOffsetX, fadeOffsetY, xPaletteIndex, yPaletteIndex,rootID) {

        if (tempMarked.indexOf(this.ID) >= 0) {
            return;
        }
        this.setRootId(rootID);

        tempMarked.push(this.ID);
        this.SetFadeOffsetX(fadeOffsetX);
        this.SetFadeOffsetY(fadeOffsetY);

        this.SetPaletteIndexX(xPaletteIndex);
        this.SetPaletteIndexY(yPaletteIndex);

        if (this.mergedDirs.length > 0) {
            for (var i = 0; i < this.mergedDirs.length; i++) {
                let neighborInDir = this.getNeighbor(this.mergedDirs[i]);

                if (neighborInDir != null) {
                    neighborInDir.applyDirection(tempMarked, fadeOffsetX, fadeOffsetY, xPaletteIndex, yPaletteIndex,rootID);
                }
            }
        }
    }

    mergeSelection(selection, dir) {
        let counterDir = this.getCounterDir(dir);

        let rootID = (this.rootID != "") ? this.rootID : (this.rootID == "" && selection.RootID != "") ? selection.rootID : this.ID;

        
        this.setRootId(rootID);
        selection.setRootId(rootID);

        this.markMerged(dir);
        selection.markMerged(counterDir);

        let tempMarked = []
        tempMarked.push(this.ID);
        selection.applyDirection(tempMarked, this.fadeOffsetX, this.fadeOffsetY, this.xPaletteIndex, this.yPaletteIndex,rootID);
    }

    //  0 Top Left
    //  1 Top Right
    //  2 Right
    //  3 Bottom Right
    //  4 Bottom Left
    //  5 Left

    getDirPoints(mDir) {
        return null;
    }

    merge(mDir) {
        var selection = this.getNeighbor(mDir);

        if (selection != null) 
        {
            this.mergeSelection(selection, mDir);
        }
    }

    update()
    {
        
    }

    draw() {
        if (DEBUG) {
            push();
            fill(color(getNoise(this.xIndex, this.yIndex) * 30));
            stroke(color(0))
            strokeWeight(2);
            rect(this.x, this.y, this.width, this.height);
            pop();
        }
    }
}
