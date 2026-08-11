class CellSystem{

    constructor(num){
        this.cells = [];
		this.numOfCells = num;
        this.infectRate = 0.5;

        for (let i=0; i<this.numOfCells; i++)
        {
            let b = new Cell();
            this.cells.push(b);
        }
    }

    update(){
        for (let i=0; i<this.cells.length; i++)
        {
            this.cells[i].move();
            this.cells[i].borders();
            this.cells[i].cure();
        }
        this.checkInfections();
        this.removeDeadCells();
    }

    draw(){
        push();
        for (let i=0; i<this.cells.length; i++)
        {
            this.cells[i].draw();
        }
        pop();
    }

    addCell(x, y){
        let new_cell = new Cell();
        new_cell.location = createVector(x,y);
        this.cells.push(new_cell);
    }

    infectCell(mX, mY){
        for (let i=0; i<this.cells.length; i++)
        {
            if (this.cells[i].isInside(mX, mY)==true)
            {
                this.cells[i].health=0;
            }
        }
    }

    checkInfections()
    {
        for (let i=0; i<this.cells.length; i++)
        {
            for (let j=0; j<this.cells.length; j++)
            {
                if (i!=j) // if it's not the same cell
                {
                    if (this.cells[i].health<255 && this.cells[j].health==255) // if one of the two cells is infected
                    {
                        let b2b_distance = dist(this.cells[i].location.x, this.cells[i].location.y, this.cells[j].location.x, this.cells[j].location.y);  //calculate distance between their centers
                        let sumRad = this.cells[i].radius + this.cells[j].radius;

                        if (b2b_distance < sumRad && random(1) < this.infectRate) // if they are touching infect both
                        {
                            // this.cells[i].health = 0;
                            this.cells[j].health = 0;
                        }
                    }
                    else if(this.cells[i].health == 255 && this.cells[j].health < 255)
                    {
                        let b2b_distance = dist(this.cells[i].location.x, this.cells[i].location.y, this.cells[j].location.x, this.cells[j].location.y);  //calculate distance between their centers
                        let sumRad = this.cells[i].radius + this.cells[j].radius;

                        if (b2b_distance < sumRad && random(1) < this.infectRate) // if they are touching infect both
                        {
                            this.cells[i].health = 0;
                        }
                        
                    }
                }
            }
        }
    }
        
    removeDeadCells()
    {
        for (let i=this.cells.length-1; i>=0; i--) // counting backwards because we are removing items from the array. Think why!
        {
            if (this.cells[i].isAlive==false)
            {
                this.cells.splice(i, 1);
            }
        }
    }

    getPoints(){
        let pts = [];
        for (let i=0; i<this.cells.length; i++) {
            pts.push(this.cells[i].location);
        }
        return pts;
    }

    printStats(x, y){
        push();
        fill(255,0,0);
        let infectionCounter = 0;
        for (let i=0; i<this.cells.length; i++) {
            if (this.cells[i].health<255) infectionCounter++;
        }
        text(nf(cellSys.cells.length, 3, 0) + " number of live cells", x, y);
        text(nf(infectionCounter, 3, 0) + " number of sick cells", x, y+10);
        pop();
    }

    getNearestCell(p)
    {
        let record = 99999999;
        let recordCellIndex=0;
        for (let i=0; i<this.cells.size(); i++) {
            let d = dist(p.x, p.y, this.cells[i].location.x, this.cells[i].location.y);
            if (d<record){
                record = d;
                recordCellIndex = i;
            }
        }
        return this.cells[recordCellIndex];
    }

}
