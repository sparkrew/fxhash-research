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
const nstep = 250//+Math.floor(250*fxrand());

//Size of each step (larger number = smaller step between each vertex)
const res = 2000;

//const neonstr = ['Polar','Solar','Verdant','Vaporwave','Blizzard']

const ca = [1,2,4,6]
const cawt = [0.25,0.25,0.25,0.25]
const castr = ['Small','Medium','Large','Extra Large']

const pnum = 1000//+Math.floor(500*fxrand())
let iters = [0,0,0,0]
const radius = 2*H//5*H/3///4//4*H//H/4*fxrand()+H/4
const cloud = [];
const cloudi = new Array(cloud.length).fill(0);
const cdif = 254


const lcolwt = [0.25,0.25,0.25,0.25]
let lcol = []
let bgcol = []

let llp = [[231,111,61],[254,171,107],[155,207,224],[0,167,199]] //Pastel 1 bg(240,238,239)
let bgp = [240,238,239]
lcol.push(llp)
bgcol.push(bgp)

llp = [[114,144,67],[75,77,38],[123,104,85],[149,130,112]] //Farm
bgp = [204,193,181]
lcol.push(llp)
bgcol.push(bgp)

llp = [[123,45,38],[171,74,67],[5,168,170],[11,122,117]]
bgp = [240,238,239]
lcol.push(llp)
bgcol.push(bgp)

llp = [[267,155,155],[74,70,68],[234,86,14],[156,208,255]] //Fall
bgp = [241,233,220]
lcol.push(llp)
bgcol.push(bgp)

llp = [[26,71,41],[42,98,61],[93,93,93],[170,170,170]] //Slytherin
bgp = [0,0,0]
lcol.push(llp)
bgcol.push(bgp)

const colwts = [0.25,0.1,0.25,0.25,0.5]
//const colwts = [0.25,0.25,0.25,0.25]
const psiz = [2,4,8,16,24]
const sitwt = [0.05,0.15,0.55,0.2,0.05]

//Vector field array
const vecs = new Array(NI).fill(0);
for(let ii = 0; ii < NI; ii++){
	vecs[ii] = new Array(NJ).fill(0);
}

const nia = new Array(NI).fill(0);
for(let ii = 0;ii < NI;ii++){
   nia[ii] = new Array(NJ).fill(0);
}
for(let ii = 0;ii< NI;ii++){
   for(let jj = 0;jj < NJ;jj++){
      nia[ii][jj] = []
   }
}

const ppt = [[0,0],[249,0],[0,249],[249,249],[10,10],[240,10],[10,240],[240,240],[128,128],[75,150],[150,75],[75,75],[150,150]]
const wpt = [0.075,0.075,0.075,0.075,0.075,0.075,0.075,0.075,0.08,0.08,0.08,0.08,0.08]
let pt = []
let ptx = []
let llnum = pnum
let lpc = 26
let colid = 0

//-------------------------------------//
//Function that sets the image features//
//-------------------------------------//
function setup(){
	
   createCanvas(H, W);
	
	////Randomly selecting comet angle
    //rnum = fxrand()
    //w1 = 0
    //for(let i = 0; i < cawt.length;i++) {
    //    w2 = w1 + cawt[i]
    //    if(rnum >= w1 && rnum < w2) {
    //        iters[3] = i
    //    }
    //    w1 = w2
    //}
   
    rnum = fxrand()
    w1 = 0
    for(let i = 0; i < wpt.length;i++) {
        w2 = w1 + wpt[i]
        if(rnum >= w1 && rnum < w2) {
            pt = ppt[i]
        }
        w1 = w2
    }
    ptx = [(pt[0]/NI)*H,(pt[1]/NJ)*W];


    //Randomly selecting color palette
    rnum = fxrand()
    w1 = 0
    for(let i = 0; i < colwts.length;i++) {
        w2 = w1 + colwts[i]
        if(rnum >= w1 && rnum < w2) {
            colid = i
        }
        w1 = w2
    }

	

	//Assigning Metadata
	window.$fxhashFeatures = {
		//"Line Color" : neonstr[iters[0]],
	}
	//Adding background color
   background(bgcol[colid])

   //Initialing angle of the vector field
   //Test vector field
   //Generating perlin noise
	const divisions = 0
    let np = 2+divisions;
    const grid = new Array(np-1).fill(0);
    for(let ii = 0; ii < np; ii++) {
        grid[ii] = new Array(np).fill(0)
    }
	let wtf = 1//Math.floor(fxrand())*2

    for(let ii = 0; ii < np; ii++){
        for(let jj = 0; jj < np; jj++){
		let angle = fxrand()*2*Math.PI
        grid[ii][jj] = [Math.cos(angle),Math.sin(angle)]
		}
    }
      for(let ii = 0; ii < NI; ii++){
      for(let jj = 0; jj < NJ;jj++){
        vecs[ii][jj] = [Math.cos(ca[iters[3]]),Math.sin(ca[iters[3]])]
		}
    }
   
   if(wtf == 1){
   num = 1
   for(let ii = 0; ii < NI; ii++){
      for(let jj = 0; jj < NJ; jj++){
         let xp = [(ii/NI)*H,(jj/NJ)*W];
         let dx = xp[0]-ptx[0]
         let dy = xp[1]-ptx[1]
         let rp = Math.sqrt( (dx*dx) + (dy*dy) )
         if(rp <= radius) {
           vecs[ii][jj] = [num*(dy/rp-(dx/(rp*2.5))),num*(-dx/rp-(dy/(rp*2.5)))]
         }
      }  
   }

   }
   //for(let ii = 0; ii < NI; ii++){
   //    for(let jj = 0; jj < NJ; jj++){
   //		//Finding location of ii and jj within noise grid
   //   	let i0 = Math.floor((ii/NI)*(np-1))
   //   	let j0 = Math.floor((jj/NJ)*(np-1))
   //    	let i1 = i0+1
   //   	let j1 = j0+1	
   //   	//enforcing periodicity
   //   	if(i0 == np-1){
   //   		let i1 = 0
   //   	}
   //   	if(j0 == np-1){
   //   		let j1 = 0
   //   	}
   //   	
   //   	//finding displacement vectors
   //   	let u = (ii/NI)-i0/(np-1)
   //   	let v = (jj/NJ)-j0/(np-1)
   //   	
   //   	//Finding dot product of gradient*displacement vectors
   //   	let n00 = grid[i0][j0][0]*u 	 + grid[i0][j0][1]*v
   //   	let n10 = grid[i1][j0][0]*(u-1)  + grid[i1][j0][1]*v
   //   	let n01 = grid[i0][j1][0]*u  	 + grid[i0][j1][1]*(v-1)
   //   	let n11 = grid[i1][j1][0]*(u-1)  + grid[i1][j1][1]*(v-1)
   //   	

   //   	//Interpolating with a smoothing step
   //   	let fu = 6*(u*u*u*u*u) - 15*(u*u*u*u) + 10*(u*u*u)
   //   	let fv = 6*(v*v*v*v*v) - 15*(v*v*v*v) + 10*(v*v*v)
   //   	let nx0 = n00*(1-fu) + n10*(fu)
   //   	let nx1 = n01*(1-fu) + n11*(fu)
   //   	let nxy = nx0*(1-fv) + nx1*(fv)
   //   	
   //   	//Converting gradient value [-1,1] to an angle
   //   	nxy = nxy*2*Math.PI
   //   	//finding flow field vectors
   //   	vecs[ii][jj] = [vecs[ii][jj][0]+Math.cos(nxy)/3,vecs[ii][jj][1]+Math.sin(nxy)/3]
   //   	
   //   }
   //}
   let lnum = 0
   let pii = 0
   for(pi = 0; pi < pnum; pi++){
      let pt = [Math.floor(fxrand()*NI),Math.floor(fxrand()*NJ)]
      let xx = [(pt[0]/NI)*H,(pt[1]/NJ)*W];
      let point = {x: xx[0],y: xx[1]} 
      let cont = 1
      if(nia[pt[0]][pt[1]].length > 0){
         cont = 0
      }
      if(nia[pt[0]][pt[1]].length = 0){
       for(ii = -lpc; ii < lpc; ii++){
         for(jj = -lpc; jj < lpc; jj++){
            if(nia[pt[0]+ii][pt[1]+jj].length > 0){
               cont = 0
            }
         }
       }
      }
      
	  rnum = fxrand()
      w1 = 0
      let lit = 0
      for(let cn = 0; cn < lcolwt.length; cn++) {
          w2 = w1 + lcolwt[cn]
          if(rnum >= w1 && rnum < w2) {
              lit = cn
          }
          w1 = w2
      }

      rnum = fxrand()
      w1 = 0
      let sit = 0
      for(let cn = 0; cn < sitwt.length; cn++) {
          w2 = w1 + sitwt[cn]
          if(rnum >= w1 && rnum < w2) {
              sit = cn
          }
          w1 = w2
      }     
     
	  if(cont == 1){
       nia[pt[0]][pt[1]].push([pii,xx[0],xx[1]])
       let point = {x: xx[0],y: xx[1],c: lit,s: psiz[sit]}
       cloud.push(point);
       pii=pii+1
      }
   }
   llnum = pii

}

let ttime = 0

function draw(){
   if(ttime > nstep) {
      noLoop()
     }
	
   for(let i = 0; i < llnum; i++){
       
      let xx =[cloud[i].x,cloud[i].y]
			
      pt = [Math.floor((xx[0]/W)*NI),Math.floor((xx[1]/H)*NJ)]
      let xstep = (vecs[pt[0]][pt[1]][0]*H)/res;
	  let ystep = (vecs[pt[0]][pt[1]][1]*W)/res;
	  xx = [xx[0] + xstep, xx[1] + ystep];
      pt = [Math.floor(xx[0]/H*NI),Math.floor(xx[1]/W*NJ)];
      if(pt[0] > lpc && pt[0] < NI-lpc){
       if(pt[1] > lpc && pt[1] < NJ-lpc){
        let cont = 1
        for(let jj = -lpc; jj < lpc; jj++){
         for(let kk = -lpc; kk < lpc; kk++){
           let pti = pt[0]+jj
           let ptj = pt[1]+kk
           let ptlen = nia[pti][ptj].length
           for(ii = 0; ii < ptlen; ii++){
             if(i != nia[pti][ptj][ii][0]){
              pdx = xx[0] - nia[pti][ptj][ii][1]
              pdy = xx[1] - nia[pti][ptj][ii][2]
              pdist = Math.sqrt(pdx*pdx + pdy*pdy)
              let pdif = pdist 
              if(pdif < cloud[nia[pti][ptj][ii][0]].s || pdif < cloud[i].s){
                 cont = 0
              }
             }
           }
          }
         }
	    let rdx = xx[0] - ptx[0]
		let rdy = xx[1] - ptx[1]
        if(cont == 1){
          nia[pt[0]][pt[1]].push([i,xx[0],xx[1]])
           
          let newcol = lcol[colid][cloud[i].c]
		  stroke(color(newcol))
          fill(color(newcol))   
          if(pt[0] > 0 && pt[0] < NI) {
	         if(pt[1] > 0 && pt[1] < NJ) {
			 strokeWeight(cloud[i].s)
		     strokeCap(SQUARE)
			 line(cloud[i].x,cloud[i].y,xx[0],xx[1])
			 cloud[i].x = xx[0]
             cloud[i].y = xx[1]
            } 
          }	
	     }
       }
      } 
    }

   
ttime = ttime+1
}
