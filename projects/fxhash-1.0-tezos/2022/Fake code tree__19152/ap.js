// ==============
// VARS & CONSTS
// ==============

var RADIUS = 40;

var canvas;
var context;
var color = "#000";
var root;
var slices = [];
var options = {
	radius: random(10,50),
	branching: random(0.1, 1),
	size: 0.001
};

var Stage = {
	width: 1000,
	height: 1000,
};




const colors10 = ["#fec5bb"]//amarillo
const colors11 = ["#fcd5ce"]//rojo
const colors12 = ["#fae1dd"]//rosa
const colors13 = ["#e8e8e4"]
const colors14 = ["#d8e2dc"]
const colors15 = ["#ffd7ba"]
const colors16 = ["#fec89a"]
const colors17 = ["#ffd6a5"]

const colors1 = ["#664D00"]
const colors2 = ["#6E2A0C"]
const colors3 = ["#691312"] 
const colors4 = ["#540fff"]
const colors5 = ["#540fff"]
const colors6= ["#ff0ebc"]
const colors7 = ["#ff0e41"]
const colors8 = ["#ff510b"]
const colors9 = ["#ffca09"] 

const colors24 = ["#f08080"]
const colors25 = ["#5D0933"]
const colors26 = ["#291938"]
const colors27 = ["#042D3A"]
const colors28 = ["#12403C"]
const colors29 = ["#475200"]

const colors18 = ["#75435c"]//
const colors19 = ["#652a2f"]//
const colors20 = ["#3f6447"]//
const colors21 = ["#34261e"]//
const colors22 = ["#215959"]//
const colors23 = ["#0b0a09"]//
function randomFromList(items){
    return items[Math.floor(fxrand()*items.length)];
    }




const coloresFondos = [ colors10,colors11,colors12,colors13,colors14,colors15,colors16,colors17]
const colorFondos = randomFromList(coloresFondos)


const colores = [  colors1,colors2,colors3,colors4,colors5,colors6,colors7,colors8,colors9,colors18,colors19,colors20,colors21,colors22,colors23, colors24,colors25,colors26,colors27,colors28,colors29]
const colore = randomFromList(colores)


xw = random(100,900)
yh = random (100,700)
tam = random(50,300)
// ==============
// SETUP
// ==============

	

// function init() {
	canvas = document.getElementById( "canvas" );
	context = canvas.getContext( "2d" );
	

	
	
	
	rebuild();






function rebuild() {
	root = new Slice( null );
	render();
}

function clear() {
	canvas.width = Stage.width;
	canvas.height = Stage.height;
}

function render() {
	clear();
	context.fillStyle =colore;
    context.fillRect(0, 0, 1000, 1000);
	context.beginPath();
	context.strokeStyle =colorFondos;
	context.fillStyle = colorFondos;
	context.arc(xw, yh, tam, 0, 2 * Math.PI);
	context.lineWidth = 5;
	context.stroke();
	
	


	context.fillStyle ='rgb('+
	Math.floor(fxrand()*256)+','+
	Math.floor(fxrand()*256)+','+
	Math.floor(fxrand()*256)+')';
	context.strokeStyle = colorFondos;
	context.lineWidth = 2;


	root.update();
	root.render();
}

function onResize() {
	Stage.width = 1000;
	Stage.height =1000;
	
	render();
}

// =============
// UTILS
// =============

// function ellipse( x, y, width, height ) {
// 	var halfWidth = width / 2;
// 	var halfHeight = height / 2;

// 	context.moveTo( x -halfWidth, y );
// 	context.bezierCurveTo( x - halfWidth, y + halfHeight, x - halfWidth, y - halfHeight, x + halfWidth, y );
// 	context.bezierCurveTo( x + halfWidth, y - halfHeight, x + halfWidth, y - halfHeight, x + halfWidth, y );
// }

function ellipse( x, y, width, height ) {
	var halfWidth = width /2;
	var halfHeight = height / 2;

	context.moveTo( x -halfWidth, y );
	context.bezierCurveTo( x - halfWidth, y + halfHeight, x - halfWidth, y - halfHeight, x + halfWidth, y );
	context.bezierCurveTo( x + halfWidth, y - halfHeight, x + halfWidth, y - halfHeight, x + halfWidth, y );
}

// context.bezierCurveTo( x - halfWidth, y + halfHeight, x - halfWidth, y - halfHeight, x + halfWidth, y );
// 	context.bezierCurveTo( x + halfWidth, y - halfHeight, x + halfWidth, y - halfHeight, x + halfWidth, y );


function random( min, max ) {
	return min + fxrand() * ( max - min );
}

// function random(min, max) {
//   return Math.floor((fxrand() * (max - min + 1)) + min);
// }
  

function angleToCoordinates( angle ) {
	return {
		x: Math.cos( angle ),
		y: Math.sin( angle )
	}
}

function distance( a, b ) {
	var x = b.x - a.x;
	var y = b.y - a.y;

	return Math.sqrt( x * x + y * y );
}




// ==============
// SLICE
// ==============

function Slice( predecesor, angle, branchingOffset ) {

	var x, y;
	var factor;
	var radius;
	var children = [];
	var self = this;

	function init() {
		angle += random( -0.1, 0.1 );
		slices.push( self );

		if ( predecesor === null ) {
			let fac = random(1.2,1.4)

			x = Stage.width / 2;
			y = Stage.height * 0.8;
			factor = fac;
			radius = options.radius;
			angle = Math.PI / 2;//negativo al revez
			branchingOffset = Math.max( 0, options.branching + random( -0.2, 0.2 ) );

		} else {

			var values = angleToCoordinates( angle );

			x = predecesor.getX() + values.x * 10;
			y = predecesor.getY() - values.y * 10;
			factor = predecesor.getFactor() - ( options.size + random( 0.001, 0.04 ) );
			radius = factor * options.radius + random( 1, 8);
		}

		createChild();
	}
    
	function createChild() {
		if ( factor < 0 ) return;

		branchingOffset -= 0.1;

		if ( branchingOffset < 0 ) {

			children.push( new Slice( self, angle + random( 0, 0.5 ), random( 0.5, 1 ) ) );
			children.push( new Slice( self, angle - random( 0, 0.5 ), random( 0.5, 1 ) ) );

		} else {

			children.push( new Slice( self, angle, branchingOffset ) );

		}
	}

	self.update = function() {
		radius = factor * options.radius + random( 10, 20 );

		if ( predecesor === null ) {
			x = Stage.width / 2;
			y = Stage.height * 0.97;
		} else {
			var values = angleToCoordinates( angle );

			x = predecesor.getX() + values.x * 10;
			y = predecesor.getY() - values.y * 10;
		}

		children.forEach( function( child ) {
			child.update();
		} );
	}

	self.render = function() {

		

		context.beginPath();
		
		ellipse( x, y, radius, radius );
		
		context.closePath();
		context.fill();
		context.stroke();
		

		children.forEach( function( child ) {
			child.render();
		} );
	};

	self.getFactor = function() {
		return factor;
	};

	self.getX = function() {
		return x;
	};

	self.getY = function() {
		return y;
	};

	init.call( self );

	
}



fxpreview()

