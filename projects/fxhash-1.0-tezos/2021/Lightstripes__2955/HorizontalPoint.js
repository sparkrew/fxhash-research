class HorizontalPoint extends Point {
    constructor(side,  noiseSpeed) {
        super(side,noiseSpeed);
    }
    get IsVertical()
    {
        return false;
    }
    
    get X() {
        return this.x;
    }
    
    get Y() {
        return (this.side < 0) ? 0 : hD;
    }

    get Pos()
    {
        return createVector(this.X,this.Y);
    }

    get Color() {
        return this.color;
    }


    draw() {
        if(isPlaying)
        {
            this.x = wD*getNoise((millis()-playOffset)*this.noiseSpeed,(millis()-playOffset)*this.noiseSpeed);
        }
    }
}
