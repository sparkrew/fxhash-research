/* *************************************************
    Cosmic Oscillations

    (c)2024 Dr. Bill Kolomyjec & Christopher Scussel
    
    All Rights Reserved.
************************************************* */

/* *************************** */
//Add the event listener to window for keypress
window.document.body.onkeypress = function() {myFunction()};
 
function myFunction() {         
    //alert("Hi");
    //isPressed = true;
    location.reload();    
}

/* ********************** */

class Params
{
    constructor(amp,freq,phase)
    {
	this.amp = amp ;
	this.freq = freq ;
	this.phase = phase ;
    }
}

var canvas = document.getElementById("tess") ;
var ctx = canvas.getContext("2d") ;

function draw()
{
    
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.fillStyle = 'black';
    ctx.fillRect(0,0,canvas.width,canvas.height);
    
    stars(150);
    
    let tFactor = rand(1,4);
    
    let rMin = 300;
    let rMax = 650;
    let color1= intRand(0,179);
    let color2= color1+360;
    
    drawOne(intRand(300,1300),intRand(300,1300),rMax, rMin, tFactor, 0.6, color1, color2);
    
    tFactor = rand(1,4);
    rMin = 150;
    rMax = 325;
    color1= intRand(0,179);
    color2= color1+360;
    
    drawOne(intRand(500,1100),intRand(500,1100),rMax, rMin, tFactor, 0.4, color1, color2);
    
    
    rMin = rand(7.5,15);
    rMax = rand(60,90);
    
    drawOne(intRand(600,1200),intRand(300,600),rMax, rMin, 1.5, 0.1, 0, 360);
    
}

function drawOne (xTr,yTr, rMin, rMax, tfactor, a){
    
    var Amp1 = Math.round($fx.rand()*rMax+rMax);
    var Amp2 = Math.round($fx.rand()*rMin+rMin);

    var somePI1 = $fx.rand()*Math.PI;
    var somePI2 = $fx.rand()*Math.PI;
    var twist1 = Math.round($fx.rand()*tfactor+1);
    var twist2 = Math.round($fx.rand()*tfactor+1);


    let xparams =
	[
        new Params(xTr,0,0),
	    new Params(Amp1,twist1,somePI1),
	    new Params(Amp2,twist2,somePI2),
	] ;
    
   
    somePI1 = $fx.rand()*Math.PI;
    somePI2 = $fx.rand()*Math.PI;
    twist1 = Math.round($fx.rand()*tfactor+1);
    twist2 = Math.round($fx.rand()*tfactor+1);
    Amp1 = Math.round($fx.rand()*rMax+rMax);
    Amp2 = Math.round($fx.rand()*rMin+rMin);

    
    let yparams =
	[

        new Params(yTr,0,0),
	    new Params(Amp1,twist1,somePI1),
	    new Params(Amp2,twist2,somePI2),
        
	] ;
    

    somePI1 = $fx.rand()*Math.PI;
    somePI2 = $fx.rand()*Math.PI;
    twist1 = Math.round($fx.rand()*2);
    twist2 = Math.round($fx.rand()*2);
    
    
    let zparams =
	[
	    new Params(rMax,twist1,somePI1),
	    new Params(rMin,twist2,somePI2),
	] ;
    
// show parameters 
    //show_params(xparams) ;
    //show_params(yparams) ;
    //show_params(zparams) ;

    //ctx.fillStyle = 'white' ;
    ctx.strokeStyle = 'white' ;
    ctx.lineWidth=1;
    
    
    let phase = rand(0,Math.PI*2);
    let color1= intRand(0,89);
    let color2= intRand(270,359);

    for ( let theta=0 ; theta<Math.PI*2 ; theta+=1e-5 )
    {
	var x = fourier(xparams,theta) ;
	var y = fourier(yparams,theta) ;
	let phi = $fx.rand()*Math.PI*2 ;
	x += fourier(zparams,theta) * Math.cos(phi) ;
	y += fourier(zparams,theta) * Math.sin(phi) ;
	ctx.beginPath() ;
        
    ctx.fillStyle=color( interp(theta/Math.PI + phase, color1, color2), a);
        
    ctx.rect(x,y,1,1);
 
	ctx.fill() ;

    }

}

function fourier(params,theta)
{
    let total = 0 ;

    for ( let p of params )
	total += p.amp * Math.cos(p.freq*theta+p.phase) ;

    return(total) ;
}

function stars(nStars) {
    //var nStars = 100;
    ctx.beginPath();
    ctx.fillStyle='white';  
    for (var ns=0; ns < nStars; ns++){
        ctx.globalAlpha = $fx.rand()*0.875 + 0.125;
        var x = Math.floor($fx.rand() * canvas.width);
        var y = Math.floor($fx.rand() * canvas.height);
        ctx.moveTo(x,y);
        ctx.arc(x,y,($fx.rand()*1.75 + 0.1), 0, 2*Math.PI, false);
        ctx.fill();
    }
    
    ctx.globalAlpha = 1;
}




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

/* ********************** */

function color(h,a)
{
    
    //let h = $fx.rand()*360 ;
    
    //let a = 0.75 ;
    
    //return(`hsla(${h}deg, 100%, 85%, ${a})`);
    return(`hsla(${h}deg, 100%, 50%, ${a})`);
}

/* *********************************** */	

/*
var texty = 20 ;

function show_params(params)
{
    for ( let p of params )
    {
	let str = "" ;
	str += p.amp.toFixed(2) ;
	str += ", " ;
	str += p.freq.toFixed(2) ;
	str += ", " ;
	str += p.phase.toFixed(2) ;
	console.log(str) ;
	ctx.fillStyle = 'white' ;
	ctx.font = "18px Helvetica" ;
	ctx.fillText(str,5,texty) ;
	texty += 15  ;
    }
    texty += 15 ;
}
*/
