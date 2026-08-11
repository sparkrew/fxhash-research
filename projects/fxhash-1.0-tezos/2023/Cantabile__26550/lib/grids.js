//////////////////////////////////////////////////
// GENESIS PROJECT ON FXHASH
// Collection: CANTABILE
// Filename: grids.js
// Project Author: Neverfamousartists, Jan Studio 
// Twitter: @nfamousartists, @jan_studio8
// Date: 1 April 2023
//////////////////////////////////////////////////
class Grid{
    constructor(left_x, right_x, top_y, bottom_y, scalingFactor){
        this.left_x = left_x; 
        this.right_x = right_x;
        this.top_y = top_y;
        this.bottom_y = bottom_y;
        this.scalingFactor = scalingFactor;
        this.resolution = floor(width * scalingFactor);
        this.num_columns = (right_x - left_x)/this.resolution;
        this.num_rows = (bottom_y - top_y) /this.resolution;
        this.grid=[];
        print('width', width)
        print('resolution', this.resolution)
    }
}

class FlowGrid extends Grid{
    constructor(left_x, right_x, top_y, bottom_y, scalingFactor){
        super(left_x, right_x, top_y, bottom_y, scalingFactor);
        this.createGrid();
    }
    createGrid(){
        let scaled_x; let scaled_y; let noise_val; let angle;
        for(let x=0; x<this.num_columns; x++){
            this.grid[x]=[];
            for(let y=0; y<this.num_rows; y++){
                scaled_x = x*this.scalingFactor; scaled_y = y*this.scalingFactor;
                noise_val = noise(scaled_x, scaled_y);
                angle = map(noise_val, 0.0, 1.0, 0.0, 360.0); //angle in deg
                this.grid[x][y] = angle;
            }
        }
    } 
}