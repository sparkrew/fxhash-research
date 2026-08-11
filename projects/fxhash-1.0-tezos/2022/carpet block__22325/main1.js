function fxrandom(min, max){
return Math.round(fxrand() * (max-min) + min);
}

let wilderness = [[198, 79, 11],[212, 20, 28],[205, 42, 22],[201, 25, 38],[162, 6, 63] , [347, 38, 67],[356, 36, 81] , [24, 26, 88],[27,22, 92]]


// let wilderness = [[198, 79, 11],[212, 20, 28],[205, 42, 22],[201, 25, 38],[162, 6, 63] , [347, 38, 67],[356, 36, 81] , [24, 26, 88],[27,22, 92]]
let desolate = [[27, 61, 42],[22, 44, 76] , [24, 21, 93],[20, 38, 100],[16, 28, 99] , [300, 3, 10],[208, 31, 58],[199, 41, 38],[215, 11, 78]]
let northRiver = [[274, 20, 26],[288, 18, 43], [232, 22, 27],[221, 19, 39] , [310, 27, 62],[338, 32, 78] , [37, 22, 88],[36, 19, 91],[70, 4, 86]]
let village = [[253, 20, 17],[13, 45, 51],[21, 36, 79],[20, 20, 78],[39, 15, 79] , [213, 100, 21],[196, 54, 45],[176, 13, 90]]
let farmland = [[28, 14, 40],[37, 17, 53],[60, 11, 61] , [199, 1, 87],[83, 2, 90] , [48, 44, 50],[31, 22, 63],[35, 21, 71]]
let desertPlant = [[134, 12, 65],[115, 6, 79],[84, 7, 77],[60, 5, 94] , [26, 13, 85],[26, 13, 87],[45, 6, 90] , [199, 96, 23],[326, 48, 38],[300, 12, 56]]

let bloodRiver = [[355, 52, 39],[357, 81, 65] , [1, 75, 79],[1, 67, 81],[3, 24, 99] , [203, 26, 76],[330, 10, 82],[187, 6, 96]]
let beach = [[158, 94, 20],[176, 48, 30],[167, 38, 56],[169, 26, 58] , [301, 40, 50],[286, 35, 54],[261, 18, 52],[275, 17, 61] , [47, 10, 87],[37, 12, 94]]
let forbiddenMoun = [[196, 89, 29],[186, 84, 49],[194, 17, 74],[188, 6, 81] , [28, 68, 57],[19, 43, 89],[17, 34, 83],[18, 19, 90]]

let dreamPond = [[206, 98, 69],[202, 59, 69],[182, 65, 73] , [160, 44, 85],[159, 54, 80],[150, 54, 87] , [26, 70, 99],[26, 54, 95],[45, 65, 98]]
let saltLake = [[15, 7, 92] , [22, 26, 93],[26, 19, 87] , [247, 7, 93],[305, 5, 80] , [200, 20, 78],[204, 29, 76] , [275, 5, 86]]
let sweetDesert = [[21, 34, 94],[26, 32, 93] , [14, 15, 91],[8, 11, 93] , [180, 15, 68],[166, 15, 78],[175, 6, 86]]

let plateau  =[[16, 42, 35],[2, 32, 50],[9, 30, 64], [20, 28, 76] , [43, 42, 65],[51, 29, 65] , [23, 15, 98],[25, 8, 98] , [148, 39, 59],[153, 21, 45],[144, 12, 47]]
let iceHill = [[40, 41, 90],[45, 32, 90] , [217, 57, 50],[203, 38, 70],[213, 36, 85],[207, 16, 98],[232, 6, 98]]
let iceMountain = [[212, 5, 100],[200, 1, 88],[214, 100, 14],[42, 14, 18],[40, 4, 71]]

let oasis=[[195, 53, 5],[169, 46, 19],[165, 88, 14],[166, 44, 34],[175, 34, 50],[153, 19, 53],[178, 28, 66],[40, 36, 78],[76, 15, 83],[76, 15, 83]]
let algaeWorld = [[101, 75, 18],[109, 84, 43],[127, 63, 61],[133, 72, 59],[130, 24, 82] , [168, 73, 54],[153, 36, 80],[171, 20, 92] , [35, 38, 79],[21, 15, 98]]
let forest = [[176, 100, 13],[170, 100, 29],[165, 83, 41],[148, 63, 60], [45, 26, 29],[39, 40, 85],[38, 41, 86],[37, 17, 60],[44, 6, 96]]
let mountains = [[228, 15, 12],[23, 36, 32],[18, 31, 54],[32, 49, 68],[27, 23, 90],[28, 16, 89] , [206, 13, 25],[176, 11, 50],[220, 1, 75] , [60, 0, 98]]
let floatIsland = [[203, 97, 16],[203, 97, 16],[185, 46, 51],[193, 26, 94],[173, 20, 83] , [71, 62, 46],[83, 58, 65],[113, 8, 90]]

let clr = [wilderness,desolate,northRiver,village,farmland,desertPlant ,
					 bloodRiver,beach,forbiddenMoun,
					 dreamPond,saltLake,sweetDesert,
					 plateau,iceHill,iceMountain,
					 oasis,algaeWorld,forest,mountains,floatIsland]
let randomSelectClr

function setup(){
	randomSeed(fxrandom(0,1000));
	noiseSeed(fxrandom(0,1000));
	randomSelectClr = int(random(clr.length))
  win = min(windowWidth, windowHeight)
	colorMode(HSB,360,100,100,1)
	angleMode(DEGREES)
	pixelDensity(2)
  createCanvas(win, win);
  strokeWeight(4);
  padding = win/25;
  background(13)
	seed = 13
	spac = 1.8

}





function draw(){

  recurison(padding,padding , win-padding*2,win-padding*2 , seed)

  noLoop()
	// rect(w/20,w/20,40)
}

function singelPattern(posX,posY,wid,hei,seed){
	let len = 1
	push()
	translate(posX,posY)
		for(let o = 0;o< hei/spac ;o++){
			for(let i=0;i<wid;i++){
				if(random()>=0.25){
					// push()
						ellipse(random(i)*len, spac*o , randomGaussian(1,1.1)*seed)
					// pop()
				}else{
					translate(wid,hei)
					rotate(180)
					push()
						ellipse(random(i)*len , spac*o , randomGaussian(1,1.1)*seed)
					pop()
				}
			}
		}
	pop()
}
function recurison(posX, posY, wid, hei, seed){
  if(seed>0){
    var div = random(0, 1)
    if(random()>=0.5){
      recurison(posX, posY, wid, hei*div, seed-1)
      recurison(posX, posY+hei*div, wid, hei*(1-div), seed-1)
    }else{
      recurison(posX, posY, wid*div, hei, seed-1)
      recurison(posX+wid*div, posY, wid*(1-div), hei, seed-1)
    }

  }else{
		// fill(random(colorPalette))
		noStroke()
		// fill(random(colorPalette2))
		// rect(posX,posY,wid,hei)
		if(random()>0.015){fill(random(clr[randomSelectClr]))}else{fill(0,0,0)}
		singelPattern(posX,posY,wid,hei,seed+1)
  }
}
