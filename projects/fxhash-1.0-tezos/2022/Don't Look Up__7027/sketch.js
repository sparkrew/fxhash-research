//////////////////////////////////////////////////////////
//------------------------------------------------------//
//Vector Based Generative Art							//
//Created by Moist Kitteh with a GNU free to use license//
//------------------------------------------------------//
//////////////////////////////////////////////////////////


//Pixel size of the canvas
const H = 1080;
const W = 1080;

//Size of the vector field (more vectors == smoother lines, slower run time)
const NI = 250;
const NJ = 250;

//Number of steps in each line (e.g., line length)
const nstep = 100//50+Math.floor(100*fxrand());

//Size of each step (larger number = smaller step between each vertex)
const res = 1000;

//const neon = [[37,43,49],[94,102,104],[193,200,199]]
//const neonstr = ['Black','Grey','Light Grey']
//const neonwt = [0.98,0.01,0.01]
const neon = [[68,214,44,1],[77,77,255,1],[225,0,245,1],[254,50,24,1],[255,240,31,1],[255,145,26,1]]
const neonstr = ['Emerald','Sapphire','Amethyst','Ruby','Golden Beryl','Sunstone']
const neonwt = [0.2,0.2,0.15,0.15,0.15,0.15]

const psstr = ['Small','Medium','Large','Massive']
const pswt = [H/16,H/16,H/16,H/16]

const comet = [[255,255,255,1]]
const cometstr = ['White']
const cometwt = [1.0]

const ca = [0, Math.PI/4, Math.PI/2, 3*Math.PI/4, Math.PI, 5*Math.PI/4, 3*Math.PI/2, 7*Math.PI/4]
const cawt = [0.125,0.125,0.125,0.125,0.125,0.125,0.125,0.125]
const castr = ['0 deg', '45 deg', '90 deg', '135 deg', '180 deg', '225 deg', '270 deg', '315 deg']

const pnum = 250+Math.floor(500*fxrand())
let iters = [0,0,0,0]
const radius = H/4*fxrand()+H/4
const cloud = [];
const cloudi = new Array(cloud.length).fill(0);
const cdif = 254

//Vector field array
const vecs = new Array(NI).fill(0);
for(let ii = 0; ii < NI; ii++){
	vecs[ii] = new Array(NJ).fill(0);
}

let pt = [Math.floor(fxrand()*NI),Math.floor(fxrand()*NJ)];
let ptx = [(pt[0]/NI)*H,(pt[1]/NJ)*W];

//-------------------------------------//
//Function that sets the image features//
//-------------------------------------//
function setup(){
	createCanvas(H, W);
	
	//Randomly selecting planet color
	let rnum = fxrand()
	let w1 = 0
	for(let i = 0; i<neonwt.length; i++) {
		let w2 = w1 + neonwt[i]
		if(rnum >= w1 && rnum < w2) {
			iters[0] = i
		}
		w1 = w2
	}

   stroke(neon[iters[0]]) 
	//Randomly selecting planet size
    w1 = H/4
    for(let i = 0; i < pswt.length; i++) {
        w2 = w1 + pswt[i]
        if(radius >= w1 && radius < w2) {
            iters[1] = i
        }
        w1 = w2
    }

	//Randomly selecting comet color
    rnum = fxrand()
    w1 = 0
    for(let i = 0; i < cometwt.length; i++) {
        w2 = w1 + cometwt[i]
        if(rnum >= w1 && rnum < w2) {
            iters[2] = i
        }
        w1 = w2
    }

	//Randomly selecting comet angle
    rnum = fxrand()
    w1 = 0
    for(let i = 0; i < cawt.length;i++) {
        w2 = w1 + cawt[i]
        if(rnum >= w1 && rnum < w2) {
            iters[3] = i
        }
        w1 = w2
    }
	
   //Assigning Metadata
	window.$fxhashFeatures = {
		"Planet Color" : neonstr[iters[0]],
      "Planet Size" : psstr[iters[1]],
		"Comet Angle" : castr[iters[3]],
	}
	//Adding background color
   background(20,47,72);


   //Initialing angle of the vector field

   for(let ii = 0; ii < NI; ii++){
      for(let jj = 0; jj < NJ;jj++){
         vecs[ii][jj] = [Math.cos(ca[iters[3]]),Math.sin(ca[iters[3]])]
      }
   }
   
   for(let ii = 0; ii < NI; ii++){
      for(let jj = 0; jj < NJ; jj++){
         let xp = [(ii/NI)*H,(jj/NJ)*W];
         let dx = xp[0]-ptx[0]
         let dy = xp[1]-ptx[1]
         let rp = Math.sqrt( (dx*dx) + (dy*dy) )
         if(rp <= radius) {
            vecs[ii][jj] = [dy/rp,-dx/rp]
         }
      }  
   }
   
   for(pi = 0; pi < pnum; pi++){
    	let pt = [Math.floor(fxrand()*NI),Math.floor(fxrand()*NJ)];
      let xx = [(pt[0]/NI)*H,(pt[1]/NJ)*W];
      let point = {x: xx[0],y: xx[1]} 
      cloud.push(point);
   }
   
   for(pi = 0; pi < pnum; pi++){
      cloudi[pi] = [cloud[pi].x,cloud[pi].y]
   }



}

let ttime = 0

function draw(){
   if(ttime > nstep) {
      noLoop()
     }
   let pcol = neon[iters[0]]
   pcol[3] = ttime*(cdif/(nstep));    
   
   let ccol = comet[iters[2]]
   ccol[3] = ttime*(cdif/nstep);
	 for(let i = 0; i < pnum; i++){
    
      let xx =[cloud[i].x,cloud[i].y]
		pt = [Math.floor((xx[0]/W)*NI),Math.floor((xx[1]/H)*NJ)]
      let xstep = (vecs[pt[0]][pt[1]][0]*H)/res;
		let ystep = (vecs[pt[0]][pt[1]][1]*W)/res;
		xx = [xx[0] + xstep, xx[1] + ystep];
      pt = [Math.floor(xx[0]/H*NI),Math.floor(xx[1]/W*NJ)];
      dx = xx[0]-ptx[0]
      dy = xx[1]-ptx[1]
      xrad = Math.sqrt(dx*dx + dy*dy)
      if(xrad <= radius) {
         fill(color(pcol))   
      }
      else{
         fill(color(ccol))
      }
      if(pt[0] > 0 && pt[0] < NI) {
	     if(pt[1] > 0 && pt[1] < NJ) {
         circle(xx[0],xx[1],2) 
		   cloud[i].x = xx[0]
         cloud[i].y = xx[1]
        } 
      }	
	 
    }

   
ttime = ttime+1
setTimeout(500)
}
