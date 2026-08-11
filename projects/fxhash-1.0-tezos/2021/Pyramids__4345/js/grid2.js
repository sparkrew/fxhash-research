
class GridManager2{
	//var cosos = [];

   

	constructor(){
		this.cosos = [];
		//maxpasadas = 9;
		this.name = "Grid";
		this.dir = "Grid";
		this.duration = 300;
		this.lasttime = 0;
		this.localUniformsNames = [];
		this.localUniformsValues = [];
        this.loaded = false;
        this.generate = true;

	}
	

	
    draw(_ps) {
        if (this.generate) {
        
            _ps.background(255, 255, genR(200, 255));
            this.generate = false;
           // grid_super(0, 0, 10, _ps);
            let cnt = 12;
            rectMode(CENTER);
            for (let i = 0; i < cnt; i++) {
                _ps.push();
                 _ps.translate(width / 2, height / 2);
            
                _ps.rotate(genR1(TWO_PI));
                _ps.scale(genR(-2,6));
                grid_super(0, 0, 4, _ps);
                _ps.pop();
            }
            //grid_super(0, 0, floor(random(cnt)),_ps);

          
            /*for (let i = 0; i < width; i+=10) {
                for (let j = 0; j < height ; j+=10) {
                    //let c = get(i,j);
                    //_ps.set(i, j, color(255,0,0));
                    fill(0, 10);
                    ps.rect(i, j, 1, 1);
                }
            }*/
            //_ps.updatePixels();

        }
        rectMode(CORNER);
       
    }


	
	update(){
	
	}
}

function grid_super(_x,_y, _cnt,_ps) {

    let col1 = color(genR(100, 250), genR1(100), genR1(255), genR1(255));
    //fill(col1);

    let grid = new Grid2(floor(genR(2, _cnt)), floor(genR(2, _cnt)),
        _x, _y,
        genR(2, 100),
        genR(100, 500), genR(100, 500),
        2,
        col1);
    grid.display(_ps);
    //supergrid();
    //_ps.fill(200, 0, 0);
    //_ps.ellipse(random(-width, width), random(-height, height), 150, 150);

}
class Grid2 {

    constructor(_cols, _rows, _x, _y, _circlesize, _ancho, _alto, _isfill, _col) {

        this.col = _col;

        this.col2 = color(0);
        this.cols = _cols;
        this.rows = _rows;
        this.x = _x;
        this.y = _y;
        this.circlesize = _circlesize;
        this.ancho = _ancho;
        this.alto = _alto;
        this.isfill = _isfill;
        this.xdif = int(genR1(this.cols));
        this.ydif = int(genR1(this.rows));
        this.sarasa = "aaaaaa";
    }

   display(pg) {
      // this.fill(col);
       this.isfill = floor(genR1(2));
       
       for (let i = 0; i < this.cols; i++) {
           for (let k = 0; k < this.rows; k++) {
               let xx = map(i, 0, this.cols - 1, -this.ancho / 2, this.ancho / 2);
               let yy = map(k, 0, this.rows - 1, -this.alto / 2, this.alto / 2);

               pg.push();
               pg.translate(this.x + xx, this.y + yy);
               //ellipse(0, 0, circlesize, circlesize);

               let col2 = this.col2;

               let cn3 = genR1(100);

               let st = genR(100,150);
               let pxr = genR(-st, st);

               let pyr = genR(-st, st);
               for (let o = 0; o < cn3; o++) {
                   //let colf = lerpColor(this.col, col2, random(1));
                   let colf = lerpColor(this.col, col2, map(o,0,cn3,0,1));
                   colf.setAlpha(map(o, 0, cn3, 0, 255));
                   if (this.isfill == 0) {
                       pg.noStroke();
                      
                       pg.fill(colf);
                   } else {
                       pg.noFill();
                       pg.stroke(colf);
                       pg.strokeWeight(3);
                   }
                   let h = map(o, 0, cn3, this.circlesize, 0);
                   let pxr2 = map(o, 0, cn3, 0, pxr);
                   let pyr2 = map(o, 0, cn3, 0, pyr);
                   pg.rect(-h / 2 + pxr2, -h / 2 + pyr2, h, h);
               }
               pg.pop();
           }
       }

    }
    
}