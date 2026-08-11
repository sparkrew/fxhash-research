function genR(min, max) {
   return fxrand() * (max - min) + min;
}
function genR1(max) {
    return fxrand() * (max - 0) + 0;
}
class GridManager{
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
            grid_lerp(_ps, width / 2, height / 2);
            this.generate = false;
            var cnt =genR(1,10);
            _ps.background(0);
            for (var i = 0; i < cnt; i++) {
                _ps.push();
             
                if (fxrand() > 0.5) {
                    _ps.rotate(genR(0, PI));
                } else {
                    _ps.rotate(0);

                }
                _ps.translate(width / 2, height / 2);
                //pg.rotateX(random(0, PI));
                //pg.rotateY(random(0, PI));
                //_ps.translate(width / 2, height / 2);
              //  _ps.rotate(random(0, PI));
                //_ps.translate(-width / 2, -height / 2);
                //var sc = 15;
               // scale(sc);
                //pg.scale(random(sc));
                //rotate(random(PI));

                //pg.scale(random(1, 3));
                //grid_super(0, 0);
                grid_lerp(_ps,0, 0);
                _ps.pop();
            }
            //pg.endDraw();
        }
	}
	
	update(){
	
	}
}


function grid_lerp(pg,_x,_y) {
    
    let x1 = genR(0,width);
    let x2 = genR(0,width);
    let y1 = genR(0,height);
    let y2 = genR(0,height);

    col1 = color(genR(100, 250), genR1(250), genR1(255), 255);
    //fill(col1);


    let gsize = 15;

    let grid = new Grid(floor(genR(1, 20)), floor(genR(1, 20)),
        _x, _y,
        genR(2, 50),
        genR1(width), genR1(height / 2),
        0,
        col1);

    col1 = color(genR(100, 250), genR1(100), genR1(255), genR(0, 255));
    //fill(col1);

    let grid2 = new Grid(floor(genR(1, 10)), floor(genR(1, 10)),
        _x, _y,
        genR(2, 30),
        genR1(width), genR1(height / 2),
        0,
        col1);

    let pasadas = floor(genR(10, 20));
    pasadas =80;

    //setTimeout(console.log(grid.sarasa), 5000);
  //  grid.display(pg);
    for (let u = 0; u < pasadas; u++) {
        let index = map(u, 0, pasadas - 1, 0, 1);

        let col = lerpColor(grid.col, grid2.col, index);
       // let col = lerpColor(color(255,0,255,255), color(0,0,255,255), index);


        let ancho = map(u, 0, pasadas - 1, grid.ancho, grid2.ancho);
        let alto = map(u, 0, pasadas - 1, grid.ancho, grid2.ancho);

        let globalx = map(u, 0, pasadas - 1, grid.x, grid2.x);
        let globaly = map(u, 0, pasadas - 1, grid.y, grid2.y);

        let circlesize = map(u, 0, pasadas - 1, grid.circlesize, grid2.circlesize);

        //console.log(grid.cols);
        for (let i = 0; i < grid.cols; i++) {
            for (let k = 0; k < grid.rows; k++) {

                let xx = map(i, 0, grid.cols - 1, -ancho / 2, ancho / 2);
                let yy = map(k, 0, grid.rows - 1, -alto / 2, alto / 2);

                if (u > pasadas / 2) {
                    if (grid.isfill == 0) {
                        pg.noStroke();
                        pg.fill(col);
                    } else {
                        pg.noFill();
                        pg.strokeWeight(int(genR(1, 5)));
                        pg.stroke(col);
                    }
                } else {
                    if (grid2.isfill == 0) {
                        pg.noStroke();
                        pg.fill(col);
                    } else {
                        pg.noFill();
                        pg.strokeWeight(int(genR(1, 5)));
                        pg.stroke(col);
                    }
                }
                pg.push();
                pg.translate(globalx + xx-width/2, globaly + yy-height/2);
                pg.ellipse(0, 0, circlesize, circlesize);
                pg.pop();

               // pg.ellipse(random(width) - width / 2, random(height) - height / 2, 50, 50);
            }
          
        }
     
    }

   // pg.ellipse(random(width) - width / 2, random(height) - height / 2, 50, 50);
    //grid.display(pg);
}




class Grid {

    constructor(_cols, _rows, _x, _y, _circlesize, _ancho, _alto, _isfill, _col) {

        this.col = _col;
        this.cols = _cols;
        this.rows = _rows;
        this.x = _x;
        this.y = _y;
        this.circlesize = _circlesize;
        this.ancho = _ancho;
        this.alto = _alto;
        this.isfill = _isfill;
        this.xdif = int(random(this.cols));
        this.ydif = int(random(this.rows));
        this.sarasa = "aaaaaa";
    }

   display(pg) {
        //fill(this.col);
     //  pg.ellipse(random(width) - width / 2, random(height) - height / 2, 50, 50);

      // console.log(this.cols);
        if (this.isfill == 0) {
            pg.noStroke();
            pg.fill(255);
        } else {
            pg.noFill();
            pg.stroke(255);
            pg.stroke(color(0));
            pg.strokeWeight(2);
        }
        for (let i = 0; i < this.cols; i++) {
            for (let k = 0; k < this.rows; k++) {
                let xx = map(i, 0, this.cols - 1, -this.ancho / 2, this.ancho / 2);
                let yy = map(k, 0, this.rows - 1, -this.alto / 2, this.alto / 2);
                let a = map(i, 0, this.cols - 1, 0, TWO_PI) + map(k, 0, this.rows - 1, 0, TWO_PI);
                pg.push();
                pg.translate(this.x + xx, this.y + yy);
                pg.ellipse(- width / 2, - height / 2, this.circlesize, this.circlesize);
                //rect(0,0,circlesize,circlesize);
                //poly(0, 0, PI/4, circlesize, 20, col);
                pg.pop();
            }
       }
      // pg.fill(255, 0, 0);
      // pg.ellipse(random(width) - width / 2, random(height) - height / 2, 50, 50);
    }
    
}