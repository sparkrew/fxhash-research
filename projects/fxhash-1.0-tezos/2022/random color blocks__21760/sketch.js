// I have done Section A, B, C，D
// My own feature: if the cell is healthy, it will grow bigger. It stops growing once it is infected.

let cellSys;
let showCell;
let from;
let to;

function setup() {

	createCanvas(windowWidth, windowHeight);
    let seed = fxrand()*100000;
    randomSeed(seed)
    noiseSeed(seed)
	noSmooth();
    colorMode(HSB)
    let colorH = random(0, 360)
    from = color(colorH,50,100);
    to = color((colorH+50)%360,50,100);
	//Settings for drawing(these are the default values)

	//Set Cell Stroke Weight
	voronoiCellStrokeWeight(0);
	//Set Site Stroke Weight
	voronoiSiteStrokeWeight(0);
	//Set Cell Stroke
	voronoiCellStroke(0);
	//Set Site Stroke
	voronoiSiteStroke(0);
	//Set flag to draw Site
	voronoiSiteFlag(true); // set to false to remove dot from middle of cell
  
    cellSys = new CellSystem(100);
    showCell= false;

}

function draw(){
	background(150);	
    cellSys.update();

	voronoiClearSites(); // clears past voronoi sites

	//Add random points (aka voronoi sites)
	for (var i = 0; i < cellSys.cells.length; i++) {
        let c = lerpColor(from, to, map(cellSys.cells[i].health,0,255,0,1));
		//let c = color(random(100,255),0,random(25,75));
		voronoiSite(cellSys.cells[i].location.x, cellSys.cells[i].location.y, c);
	}
    voronoi(width, height, true); // need do call this to
	
	 //Draw diagram in coordinates 0, 0
	if (!showCell){
	    voronoiDraw(0, 0, true, false);
    }
    else if(showCell){
        cellSys.draw();
    }
    
    cellSys.infectCell(windowWidth/2, windowHeight/2);
    if (frameCount==500){
        fxpreview(); // line of code that tells fxhash to take pic of canvas
        noLoop(); //stop looping ->OPTIONAL: ONLY USE IF you don't want animation after 200 frames
    }
    
	//noLoop(); // stop looping. Need to click on mouse to re-allow
}

function windowResized() {
    setup();
}