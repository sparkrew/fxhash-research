let palette;
let url = ["https://coolors.co/2176ae-57b8ff-b66d0d-fbb13c-fe6847",
	"https://coolors.co/0d0a0b-454955-f3eff5-72b01d-3f7d20",
	"https://coolors.co/e89005-ec7505-d84a05-f42b03-e70e02",
	"https://coolors.co/f46036-2e294e-1b998b-e71d36-c5d86d",
    "https://coolors.co/8eb1c7-b02e0c-eb4511-c1bfb5-fefdff",
	"https://coolors.co/96bbbb-618985-414535-f2e3bc-c19875",
	"https://coolors.co/545863-00e8fc-f96e46-f9c846-ffe3e3",
	"https://coolors.co/dee5e5-9dc5bb-17b890-5e807f-082d0f",
	"https://coolors.co/a80874-b7fdfe-5ef38c-2b9720-343a1a",
	"https://coolors.co/b24c63-5438dc-357ded-56eef4-32e875",
	"https://coolors.co/484349-f7f0f0-8af3ff-18a999-109648",
	"https://coolors.co/ffbe86-ffe156-ffe9ce-ffb5c2-3777ff",
	"https://coolors.co/bac7be-c2e1c2-7dcd85-80ab82-778472",
	"https://coolors.co/96adc8-d7ffab-fcff6c-d89d6a-6d454c",
	"https://coolors.co/14342b-60935d-bab700-bbdfc5-ff579f",
	"https://coolors.co/aaabbc-8b8982-373f47-6c91c2-c3c9e9",
	"https://coolors.co/1e91d6-0072bb-8fc93a-e4cc37-e18335",
	"https://coolors.co/bf4e30-c6ccb2-093824-e5eafa-78fecf",
	"https://coolors.co/2274a5-e7eb90-fadf63-e6af2e-632b30",
	"https://coolors.co/fffc31-5c415d-f6f7eb-e94f37-393e41",
	"https://coolors.co/bbdef0-00a6a6-efca08-f49f0a-f08700",
	"https://coolors.co/73877b-839788-bdbbb6-e5d1d0-f5e4d7",
	"https://coolors.co/ba2d0b-d5f2e3-73ba9b-003e1f-01110a",
	"https://coolors.co/ff9fb2-fbdce2-0acdff-60ab9a-dedee0",
	"https://coolors.co/272727-d4aa7d-efd09e-d2d8b3-90a9b7",
	"https://coolors.co/ffbc42-d81159-8f2d56-218380-73d2de",
	"https://coolors.co/220c10-506c64-77cbb9-75b8c8-cdd3d5",
	"https://coolors.co/000000-5d737e-fff07c-f0f7ee-87bba2",
	"https://coolors.co/6622cc-a755c2-b07c9e-b59194-d2a1b8",
	"https://coolors.co/420039-932f6d-e07be0-dcccff-f6f2ff",
	"https://coolors.co/2589bd-187795-38686a-a3b4a2-cdc6ae",
	"https://coolors.co/94ae89-a8bca1-c0da74-beedaa-d5ffd9",
	"https://coolors.co/3a405a-f9dec9-99b2dd-e9afa3-685044",
	"https://coolors.co/ff6666-ccff66-5d2e8c-2ec4b6-f1e8b8",
	"https://coolors.co/f72585-7209b7-3a0ca3-4361ee-4cc9f0",
	"https://coolors.co/2f2d2e-41292c-792359-d72483-fd3e81",
	"https://coolors.co/fe5d26-f2c078-faedca-c1dbb3-7ebc89",
	"https://coolors.co/d3f9b5-ddfc74-bf6900-3d0c11-000000",
	"https://coolors.co/f1dac4-a69cac-474973-161b33-0d0c1d",
	"https://coolors.co/b7ad99-ff4365-030301-00d9c0-fffff3"	
]
let width;
let height;


let colourPalettes = [['#2e2e2e', '#5e6668', '#c1c8c7', '#f6fafb', '#d49c6b', '#ff0ac6', '#e9e9ea'],
 									   ['#2e2e2e', '#aca69f', '#adab76', '#666b3a', '#dcdfe4', '#ff0ac6', '#e9e9ea'],
									   ['#2e2e2e', '#eac9d4', '#fcebae', '#c79e42', '#8b5824', '#010b8b', '#e9e9ea'],
									   ['#2e2e2e', '#b2d3e1', '#f2cfda', '#c66aab', '#68417f', '#fa448c', '#e9e9ea'],
									   ['#2e2e2e', '#ef6101', '#fdac07', '#47802b', '#045658', '#d9990b', '#e9e9ea'],
									   ['#2e2e2e', '#fa5c18', '#ffd881', '#d97b7a', '#7189bf', '#967c61', '#e9e9ea'],
									   ['#2e2e2e', '#b15258', '#e1764c', '#ffbb74', '#304b29', '#b2d3e1', '#e9e9ea'],
									   ['#2e2e2e', '#345c56', '#c85e6c', '#c43d56', '#600318', '#8682bd', '#e9e9ea'],
									   ['#ff0000', '#ff7700', '#ffdd00', '#00ff00', '#0000ff', '#4b0082', '#ee82ee']
									   
										 
										 ];


let currentPalette;


let queueNumber = [0, 1, 2, 3, 4];
let paletteIndex = 0;


let gridsNumber = 1;
let gridSize, vnut, curcolor;
let rndx = [];
let rndy = [];

let y = 0; 
let x = 0;

function setup() {
	
	height = windowHeight*.95;
	width = height;
	createCanvas(width, height);
	background(5);
	angleMode(DEGREES);
	colorMode(RGB, 255, 255, 255, 1);
    noStroke();
	noLoop();
}

function draw() {
	curcolor = int(fxrand()*url.length);
	palette = createPalette(url[curcolor]);

	gridSize = width / gridsNumber;
	queueNumber[0] = int(fxrand()*4.5); if (queueNumber[0]==5) {queueNumber[0]==0;}
			while (queueNumber[1] == queueNumber[0]) { queueNumber[1] = int(fxrand()*4.5);}
			while (queueNumber[2] == queueNumber[0] || queueNumber[2] == queueNumber[1]) { queueNumber[2] = int(fxrand()*4.5);}
			while (queueNumber[3] == queueNumber[0] || queueNumber[3] == queueNumber[1] || queueNumber[3] == queueNumber[2]) { queueNumber[3] = int(fxrand()*4);}
			while (queueNumber[4] == queueNumber[0] || queueNumber[4] == queueNumber[1] || queueNumber[4] == queueNumber[2] || queueNumber[4] == queueNumber[3]) { queueNumber[4] = int(fxrand()*4.1);}
			
	currentPalette = palette;

	
	
			fill(currentPalette[queueNumber[0]]);
			stroke(0);strokeWeight(height/75);
			rect(x, y, gridSize, gridSize);
			//for (let i=width/2-10; i>0;i-=1){
				fill(255, 255, 255, .5);
				strokeWeight(0);
				circle(width/2, height/2, width*2-height/70);
			//}
			
			fill(currentPalette[queueNumber[1]]);

			checker (x, y, gridSize); 
			
}



// Function for drawing blob in ax, ay, with sizex, sizey
function blob(ax, ay, sizex, sizey, sizemaxx, sizemaxy, strwei1, strwei2, coloi) {

  		
	stroke(coloi);
	strokeWeight(strwei1);
	for (let i = 0; i < 720; i += 1) {
	    rndx[i] = sizemaxx - (sizex + fxrand()*(sizemaxx - sizex));		
	 }
	if(strwei2!=0){
			strokeWeight(strwei2);
			stroke('black');
			for (let i = 0; i < 720; i += 1) {
				line(ax, ay,  ax + (sizex+rndx[i])*sin(i/2), ay+(sizey+rndx[i])*cos(i/2));
			}
			}//end if
		
		stroke(coloi);
		strokeWeight(strwei1);
        for (let i = 0; i < 720; i += 1) {
				line(ax, ay,  ax + (sizex+rndx[i])*sin(i/2), ay+(sizey+rndx[i])*cos(i/2));
			}
    
	
	noStroke();
}
//Drawing checker
function checker (x, y, gridSize) {
				//body	
					blob(x + gridSize/2, y + gridSize/2, gridSize*0.35, gridSize*0.35, gridSize*0.47, gridSize*0.47, 4, 8, currentPalette[queueNumber[1]]);
					//left eye
					blob(x + gridSize/3, y + gridSize/3, gridSize*(0.06+fxrand()*0.05), gridSize*(0.06+fxrand()*0.05), gridSize*0.14, gridSize*0.14, 2, 3, currentPalette[queueNumber[2]]);
					//left pupil
					blob(x + gridSize/3, y + gridSize/3, gridSize*(0.03+fxrand()*0.015), gridSize*(0.03+fxrand()*0.015), gridSize*0.055, gridSize*0.055, 1.5, 2, currentPalette[queueNumber[4]]);
					stroke(currentPalette[queueNumber[4]]); 
					fill(random(0, 1), .6);
					ellipse(x + gridSize/3 + (-0.5+fxrand())*gridSize*.04, y + gridSize/3 + (-0.5+fxrand())*gridSize*.04, gridSize*.04,gridSize*.04);
					//right eye
					stroke(currentPalette[queueNumber[2]]);
					blob(x + gridSize*2/3, y + gridSize/3, gridSize*(0.04+fxrand()*0.07), gridSize*(0.04+fxrand()*0.07), gridSize*0.14, gridSize*0.14, 2, 3,currentPalette[queueNumber[2]]);
					//right pupil
					stroke(currentPalette[queueNumber[4]]); 
					blob(x + gridSize*2/3, y + gridSize/3, gridSize*(0.03+fxrand()*0.015), gridSize*(0.03+fxrand()*0.015), gridSize*0.055, gridSize*0.055, 1.5, 2, currentPalette[queueNumber[4]]);
					ellipse(x + gridSize*2/3 + (-0.5+fxrand())*gridSize*.04, y + gridSize/3 + (-0.5+fxrand())*gridSize*.04, gridSize*.04,gridSize*.04);
					//nose
					stroke(currentPalette[queueNumber[3]]);
					blob(x + gridSize/2, y + gridSize/2, gridSize*(0.01+fxrand()*0.015), gridSize*(0.01+fxrand()*0.015), gridSize*0.03, gridSize*0.037, 1, 1.5, currentPalette[queueNumber[3]]);
					//rote
					stroke(currentPalette[queueNumber[0]]);
					blob(x + gridSize/2, y + gridSize*0.72, gridSize*(0.1+fxrand()*0.02), gridSize*(0.01+fxrand()*0.04), gridSize*0.16, gridSize*0.12, 2, 2.5, currentPalette[queueNumber[0]] );
}



function createPalette(_url) {
	let slash_index = _url.lastIndexOf('/');
	let pallate_str = _url.slice(slash_index + 1);
	let arr = pallate_str.split('-');
	for (let i = 0; i < arr.length; i++) {
		arr[i] = color('#' + arr[i]);
	}
	return arr;
}