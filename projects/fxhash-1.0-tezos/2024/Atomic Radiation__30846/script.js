// copyright 2024 Dr. Bill Kolomyjec. All rights reserved.

/* *************************** */
//Add the event listener to window for keypress
window.document.body.onkeypress = function() {myFunction()};
 
function myFunction() {         
    //alert("Hi");
    //isPressed = true;
    location.reload();   
}

/* ********************** */     

/* Bauhaus color palette */
var bhColor = [ '#1a1616', '#4f186b', '#3e4db4', '#91144e',
                '#ea1f25', '#ad6d37', '#f1ca00', '#ecddbe'];

let canvas = document.getElementById("tess");  
let ctx = canvas.getContext("2d");   

let draw = function() {
 
    let nx = 8;
    let ny = 9; 

    let xsize = canvas.width / nx;
    let ysize = canvas.height / ny;                     

    //clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    shuffleArray(bhColor);
    
    ctx.fillStyle = bhColor[0];
    ctx.fillRect(0, 0, canvas.width, canvas.height);	
               
    let rad = xsize;  
    
    for(let i=0;i<ny;i++){
        
        yCorner = i* ysize;

        for(let j=0;j<nx;j++){                 
            xCorner = j* xsize;  
        
            vert(xCorner, yCorner, xsize, ysize, bhColor[1], 0.1);
            
            vert(xCorner, yCorner, xsize, ysize, bhColor[2], 0.25);
            
            vert(xCorner, yCorner, xsize, ysize, bhColor[3], 0.4);              
        }
    }
    
    spots(xCorner, yCorner, xsize, ysize, '#ffffff', bhColor[4]);
        
} //end draw 

/* ********************************* */

function vert(xCorner, yCorner, xsize, ysize, myColor, sf){
    ctx.fillStyle = myColor;
    ctx.strokeStyle = myColor;
    ctx.lineWidth = 1;
    
    let q1 = xsize*sf;
    let q3 = xsize - q1;

    let nSamp = 18;
    
    let amp = intRand(12,20);
    //let amp = 12;
    
    // left
    ctx.beginPath();
    
    for (let i = 0; i < nSamp ; i++){
        let pct = i/(nSamp-1);
        let ang = Math.PI * 2 * pct;
        
        if ( i == 0) {
            ctx.moveTo(xCorner+q1, yCorner);
        } else {
            let xOff = amp * Math.sin(ang);
            ctx.lineTo(xCorner+q1+xOff, yCorner+interp(pct,0,ysize) );
        }
    }
    
    ctx.lineTo(xCorner+q3, yCorner+ysize);
      
    //right
    for (let i = 0; i < nSamp ; i++){
        let pct = i/(nSamp-1);
        let ang = Math.PI * 2 * pct;
        
        if ( i == 0) {
            //ctx.moveTo(xCorner+q3, yCorner+ysize);
        } else {
            let xOff = amp * Math.sin(ang);
            ctx.lineTo(xCorner+q3+xOff, yCorner+interp(pct,ysize,0) );
        }
    }
    
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    
}

/* ********************************* */

function spots(xCorner, yCorner, xsize, ysize, glowColor, nucColor)
{  
    let nx = 9;
    let ny = 9; 
    
    let rad = xsize/8;
    
    let margin = 0;
        
    let xMin = margin;
    let xMax = canvas.width ;
        
    let yMin = margin;
    let yMax = canvas.height - 100;
        
    let xOff = 0;
    let yOff = 25;
    
    ctx.fillStyle= glowColor;
             
    for ( let j = 0; j< ny; j++) {
        let yPct = j/(ny-1);
        let y = interp(yPct, yMin, yMax);
             
        for ( let k = 0; k< nx; k++) {
            let xPct = k/(nx-1);
            let x = interp(xPct, xMin, xMax);
            
            ctx.beginPath()
            
            ctx.filter = "blur(4px)";
            ctx.arc(x + xOff, y+yOff, rad, 0, Math.PI*2, false);
            ctx.fill();
            
            ctx.filter = "none";
            
            atom(x + xOff, y+yOff, rad*2, rad*2, nucColor);
            
        }  
        
    }

} //end spots

/* ********************************* */

function atom(xCtr, yCtr, xSize, ySize, nucColor){
    
    ctx.translate(xCtr, yCtr); 
    
    //ctx.scale(0.66,0.66);
 
    ctx.rotate($fx.rand() * Math.PI/2);
    
    let nOrbits = intRand(2,4);
    let dotRad = 4;
    let xSf = xSize/2.25;
    let ySf = ySize/4;
      
    ctx.lineWidth = 1;
    ctx.strokeStyle = 'black';
    
    ctx.fillStyle = nucColor;
    
    ctx.beginPath();
    ctx.moveTo(0,0); 
    ctx.arc(0,0,dotRad*1.66,0,Math.PI*2, false);
    ctx.fill();
     
    ctx.fillStyle = 'black';
    
    ctx.beginPath();
    
    //let phase = $fx.rand() * Math.PI/2;
    
    for (let i = 0; i<nOrbits; i++) {
        let pct = i/(nOrbits-1);
        let oAngle = pct* Math.PI/2;
        
        ctx.moveTo(xSf*Math.cos(oAngle), xSf*Math.sin(oAngle) );
        ctx.ellipse(0,0,xSf,ySf,oAngle,0,Math.PI*2,false)
        ctx.stroke();
        
        ctx.beginPath();
 
        let phase = rand(0, Math.PI*2);
        
        ctx.rotate(oAngle);
        
        let x = xSf*Math.cos(oAngle+phase);
        let y = ySf*Math.sin(oAngle+phase);
        ctx.moveTo(x,y);
        ctx.arc(x, y, dotRad, 0, Math.PI*2, false)
  
        ctx.fill();       
    }
    
    ctx.fillStyle = 'white';
    
    ctx.resetTransform();

}  // end atom


/* ********************************* */
/*            Utilities              */
/* ********************************* */

function rand(a,b)
{
    return(a+(b-a)*$fx.rand()) ;
}

/* *************************** */

function intRand(a,b)
{
    return(Math.floor(rand(a,b+1))) ;
}

/* ****************************** */

function interp(p, a, b)
{
    return(a + p*(b-a)) ;
}

/* *********************************** 	

function color(a)
{
    
    let h = $fx.rand()*360 ;
    
    //let a = 1 ;
    
    //return(`hsla(${h}deg, 85%, 85%, ${a})`);
    return(`hsla(${h}deg, 50%, 50%, ${a})`);
}

 *************************************************** */

//Randomize array in-place using Durstenfeld shuffle algorithm 
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor($fx.rand() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

/* *************************************************** */



