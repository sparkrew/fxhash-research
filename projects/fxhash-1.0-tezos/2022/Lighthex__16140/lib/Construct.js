class Construct {
    constructor(rootCell,points)
    {
        this.rootCell = rootCell;
        this.points = [...points];
    }

    getDynColor()
    {
        return this.rootCell.getDynColor();
    }
    
    getOutlineColor()
    {
        return this.rootCell.getOutlineColor();
    }

    get Points()
    {
        return this.points;
    }

    setPoints(points)
    {
        this.points = points;
    }
}
