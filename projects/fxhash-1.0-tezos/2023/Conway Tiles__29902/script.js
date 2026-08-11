//             Conway's Tiles

var canvas = document.getElementById("tess") ;
var ctx = canvas.getContext("2d") ;

class Point
{
    constructor(x,y)
    {
	this.x = x ;
	this.y = y ;
    }
} ;

//define variables and initialize
let width = 960;
let height = 960;

let intvl = [2,4,8,10,12,16,24];

intvlPick = Math.floor($fx.rand()*7);

let nx = intvl[intvlPick];
let ny = intvl[intvlPick]; 

let w = width/nx;
let h = height/ny;  

var nodes = [ new Point(0,  0),            
             new Point (w/2,0),
             new Point (w,  0),
             new Point (w,  h/2),
             new Point (w,  h),
             new Point (w/2,h),
             new Point (0,  h),
             new Point (0,  h/2)          
            ];

/* *************************** */

//Add the event listener to window for keypress
window.document.body.onkeypress = function() {myFunction()};
 
function myFunction() {         
    //alert("Hi");
    //isPressed = true;
    location.reload();
     
}

/* ********************** */

function draw()
{
    ctx.fillStyle = 'white' ;
    ctx.fillRect(0,0,canvas.width,canvas.height) ;
    //ctx.fillStyle = 'black' ;
    //ctx.strokeStyle = 'white' ;
    
    for(let i=0;i<ny;i++){

        for(let j=0;j<nx;j++){
 
            let xCorner = (j* w) ;               
            let yCorner = (i* h) ; 
            let pick = Math.floor($fx.rand()*8);
            //let pick = Math.floor((i + j) % 8);
            //let pick = 0;
            
            tile(pick,xCorner, yCorner);    
            
        }
        
    }
 
    //triangle(1, new Point(100,500), new Point(700,500), new Point(100,200)) ;

}

/* ***************************** */

function tile(pick, xCorner, yCorner) {
    
    switch (pick) {
        case 0:
            
            triangle(1, new Point(nodes[7].x + xCorner, nodes[7].y + yCorner), 
                     new Point(nodes[3].x + xCorner, nodes[3].y + yCorner), 
                     new Point(nodes[0].x + xCorner, nodes[0].y + yCorner)
                    ) ;        
            triangle(1, new Point(nodes[2].x + xCorner, nodes[2].y + yCorner), 
                     new Point(nodes[0].x + xCorner, nodes[0].y + yCorner), 
                     new Point(nodes[3].x + xCorner, nodes[3].y + yCorner)
                    ) ;
            triangle(1, new Point(nodes[7].x + xCorner, nodes[7].y + yCorner), 
                     new Point(nodes[3].x + xCorner, nodes[3].y + yCorner), 
                     new Point(nodes[6].x + xCorner, nodes[6].y + yCorner)
                    ) ;
            triangle(1, new Point(nodes[4].x + xCorner, nodes[4].y + yCorner), 
                     new Point(nodes[6].x + xCorner, nodes[6].y + yCorner), 
                     new Point(nodes[3].x + xCorner, nodes[3].y + yCorner)
                    ) ;
            break;
            
        case 1:
            
            triangle(1, new Point(nodes[0].x + xCorner, nodes[0].y + yCorner), 
                     new Point(nodes[2].x + xCorner, nodes[2].y + yCorner), 
                     new Point(nodes[7].x + xCorner, nodes[7].y + yCorner)
                    ) ;
            triangle(1, new Point(nodes[3].x + xCorner, nodes[3].y + yCorner), 
                     new Point(nodes[7].x + xCorner, nodes[7].y + yCorner), 
                     new Point(nodes[2].x + xCorner, nodes[2].y + yCorner)
                    ) ;
            triangle(1, new Point(nodes[3].x + xCorner, nodes[3].y + yCorner), 
                     new Point(nodes[7].x + xCorner, nodes[7].y + yCorner), 
                     new Point(nodes[4].x + xCorner, nodes[4].y + yCorner)
                    ) ;
            triangle(1, new Point(nodes[6].x + xCorner, nodes[6].y + yCorner), 
                     new Point(nodes[3].x + xCorner, nodes[4].y + yCorner), 
                     new Point(nodes[7].x + xCorner, nodes[7].y + yCorner)
                    ) ;
            break;
            
        case 2:
            
            triangle(1, new Point(nodes[0].x + xCorner, nodes[0].y + yCorner), 
                     new Point(nodes[2].x + xCorner, nodes[2].y + yCorner), 
                     new Point(nodes[7].x + xCorner, nodes[7].y + yCorner)
                    ) ;
            triangle(1, new Point(nodes[3].x + xCorner, nodes[3].y + yCorner), 
                     new Point(nodes[7].x + xCorner, nodes[7].y + yCorner), 
                     new Point(nodes[2].x + xCorner, nodes[2].y + yCorner)
                    ) ;
            triangle(1, new Point(nodes[7].x + xCorner, nodes[7].y + yCorner), 
                     new Point(nodes[3].x + xCorner, nodes[3].y + yCorner), 
                     new Point(nodes[6].x + xCorner, nodes[6].y + yCorner)
                    ) ;
            triangle(1, new Point(nodes[4].x + xCorner, nodes[4].y + yCorner), 
                     new Point(nodes[6].x + xCorner, nodes[6].y + yCorner), 
                     new Point(nodes[3].x + xCorner, nodes[3].y + yCorner)
                    ) ;
            break;
            
        case 3:
            
            triangle(1, new Point(nodes[7].x + xCorner, nodes[7].y + yCorner), 
                     new Point(nodes[3].x + xCorner, nodes[3].y + yCorner), 
                     new Point(nodes[0].x + xCorner, nodes[0].y + yCorner)
                    ) ;
            triangle(1, new Point(nodes[2].x + xCorner, nodes[2].y + yCorner), 
                     new Point(nodes[0].x + xCorner, nodes[0].y + yCorner), 
                     new Point(nodes[3].x + xCorner, nodes[3].y + yCorner)
                    ) ;
            triangle(1, new Point(nodes[3].x + xCorner, nodes[3].y + yCorner), 
                     new Point(nodes[7].x + xCorner, nodes[7].y + yCorner), 
                     new Point(nodes[4].x + xCorner, nodes[4].y + yCorner)
                    ) ;   
            triangle(1, new Point(nodes[6].x + xCorner, nodes[6].y + yCorner), 
                     new Point(nodes[3].x + xCorner, nodes[4].y + yCorner), 
                     new Point(nodes[7].x + xCorner, nodes[7].y + yCorner)
                    ) ;    
            break;
            
        case 4:
            
            triangle(1, new Point(nodes[0].x + xCorner, nodes[0].y + yCorner), 
                     new Point(nodes[6].x + xCorner, nodes[6].y + yCorner), 
                     new Point(nodes[1].x + xCorner, nodes[1].y + yCorner)
                    ) ;
            triangle(1, new Point(nodes[5].x + xCorner, nodes[5].y + yCorner), 
                     new Point(nodes[1].x + xCorner, nodes[1].y + yCorner), 
                     new Point(nodes[6].x + xCorner, nodes[6].y + yCorner)
                    ) ;
            triangle(1, new Point(nodes[5].x + xCorner, nodes[5].y + yCorner), 
                     new Point(nodes[1].x + xCorner, nodes[1].y + yCorner), 
                     new Point(nodes[4].x + xCorner, nodes[4].y + yCorner)
                    ) ;
            triangle(1, new Point(nodes[2].x + xCorner, nodes[2].y + yCorner), 
                     new Point(nodes[4].x + xCorner, nodes[4].y + yCorner), 
                     new Point(nodes[1].x + xCorner, nodes[1].y + yCorner)
                    ) ;           
            break;
            
        case 5:
            
            triangle(1, new Point(nodes[6].x + xCorner, nodes[6].y + yCorner), 
                     new Point(nodes[0].x + xCorner, nodes[0].y + yCorner), 
                     new Point(nodes[5].x + xCorner, nodes[5].y + yCorner)
                    ) ;  
            triangle(1, new Point(nodes[1].x + xCorner, nodes[1].y + yCorner), 
                     new Point(nodes[5].x + xCorner, nodes[5].y + yCorner), 
                     new Point(nodes[0].x + xCorner, nodes[0].y + yCorner)
                    ) ;
            triangle(1, new Point(nodes[1].x + xCorner, nodes[1].y + yCorner), 
                     new Point(nodes[5].x + xCorner, nodes[5].y + yCorner), 
                     new Point(nodes[2].x + xCorner, nodes[2].y + yCorner)
                    ) ;
            triangle(1, new Point(nodes[4].x + xCorner, nodes[4].y + yCorner), 
                     new Point(nodes[2].x + xCorner, nodes[2].y + yCorner), 
                     new Point(nodes[5].x + xCorner, nodes[5].y + yCorner)
                    ) ;    
            break;
            
        case 6:
            
            triangle(1, new Point(nodes[6].x + xCorner, nodes[6].y + yCorner), 
                     new Point(nodes[0].x + xCorner, nodes[0].y + yCorner), 
                     new Point(nodes[5].x + xCorner, nodes[5].y + yCorner)
                    ) ;
            triangle(1, new Point(nodes[1].x + xCorner, nodes[1].y + yCorner), 
                     new Point(nodes[5].x + xCorner, nodes[5].y + yCorner), 
                     new Point(nodes[0].x + xCorner, nodes[0].y + yCorner)
                    ) ;
            triangle(1, new Point(nodes[5].x + xCorner, nodes[5].y + yCorner), 
                     new Point(nodes[1].x + xCorner, nodes[1].y + yCorner), 
                     new Point(nodes[4].x + xCorner, nodes[4].y + yCorner)
                    ) ;
            triangle(1, new Point(nodes[2].x + xCorner, nodes[2].y + yCorner), 
                     new Point(nodes[4].x + xCorner, nodes[4].y + yCorner), 
                     new Point(nodes[1].x + xCorner, nodes[1].y + yCorner)
                    ) ;   
            break;
            
        case 7:
            
            triangle(1, new Point(nodes[0].x + xCorner, nodes[0].y + yCorner), 
                     new Point(nodes[6].x + xCorner, nodes[6].y + yCorner), 
                     new Point(nodes[1].x + xCorner, nodes[1].y + yCorner)
                    ) ;
            triangle(1, new Point(nodes[5].x + xCorner, nodes[5].y + yCorner), 
                     new Point(nodes[1].x + xCorner, nodes[1].y + yCorner), 
                     new Point(nodes[6].x + xCorner, nodes[6].y + yCorner)
                    ) ;        
            triangle(1, new Point(nodes[1].x + xCorner, nodes[1].y + yCorner), 
                     new Point(nodes[5].x + xCorner, nodes[5].y + yCorner), 
                     new Point(nodes[2].x + xCorner, nodes[2].y + yCorner)
                    ) ;
            triangle(1, new Point(nodes[4].x + xCorner, nodes[4].y + yCorner), 
                     new Point(nodes[2].x + xCorner, nodes[2].y + yCorner), 
                     new Point(nodes[5].x + xCorner, nodes[5].y + yCorner)
                    ) ;   
            break;
            
        default:
            alert('this should never happen!');
            break;
            
    } // end switch
    
}

/* *********** color stuff ************ */

let stroke = ['white','black'];
let strokePick = Math.floor($fx.rand() * 2);
let drawStroke = Math.floor($fx.rand() * 2);

let phase = Math.floor($fx.rand() * 360);
let step = Math.floor($fx.rand()*71 + 3);
let c = [];
for (let i=0; i<5; i++){
    c[i] = color( Math.floor(i * step) + phase );
}

/* ************************************* */

function triangle(depth, pt0, pt1, pt2)
{
    //let myColor = color( Math.floor($fx.rand() * 8) * step + phase );
    //let myColor = bhColor[ Math.floor($fx.rand() * 8) ];
    //let myColor = color(Math.floor($fx.rand() * 360));
    //ctx.strokeStyle = myColor;
    //ctx.fillStyle = myColor;
    ctx.strokeStyle = stroke[strokePick];
    
    if ( depth > 0 )
    {
	let pt3 = interp(1/2,pt0,pt1) ;
	let pt4 = interp(2/5,pt1,pt2) ;
	let pt5 = interp(4/5,pt1,pt2) ;
	let pt6 = interp(1/2,pt0,pt5) ;
        ctx.fillStyle = c[0];
	triangle(depth-1, pt5, pt0, pt2) ;
        ctx.fillStyle = c[1];
	triangle(depth-1, pt6, pt3, pt0) ;
        ctx.fillStyle = c[2];
	triangle(depth-1, pt6, pt3, pt5) ;
        ctx.fillStyle = c[3];
	triangle(depth-1, pt4, pt5, pt3) ;
        ctx.fillStyle = c[4];
	triangle(depth-1, pt4, pt1, pt3) ;
    }
    else
    {
	ctx.beginPath() ;
	ctx.moveTo(pt0.x,pt0.y) ;
	ctx.lineTo(pt1.x,pt1.y) ;
	ctx.lineTo(pt2.x,pt2.y) ;
	ctx.closePath() ;
	ctx.fill() ;
	if (drawStroke == 0) ctx.stroke() ;
    }
}

/* ************************************* */

function interp(p, pt1, pt2)
{
    return(new Point(pt1.x+p*(pt2.x-pt1.x),pt1.y+p*(pt2.y-pt1.y))) ;
}

function rand(a,b)
{
    return(a+(b-a)*$fx.rand()) ;
}

/* ************************************************* */

function color(h)
{
    let s = 85;
    let l = 45; 
    let a = 1;
    return(`hsla(${h}deg, ${s}%, ${l}%, ${a})`);
}


