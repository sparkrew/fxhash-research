class VerticalPoint extends Point {
    constructor(side,  noiseSpeed) {
        super(side,noiseSpeed);
    }

    get IsVertical()
    {
        return true;
    }
    
    get X() {
        return (this.side < 0) ? 0 : wD;
    }

    get Y() {
        return this.y;
    }

    get Pos()
    {
        return createVector(this.X,this.Y);
    }

    draw() {
        if(isPlaying)
        {
            this.y = hD*getNoise((millis()-playOffset)*this.noiseSpeed,(millis()-playOffset)*this.noiseSpeed);
        }
    }
}
