var s = c.width = c.height = 800,
		ctx = c.getContext( '2d' ),
		
		opts = {
			octaves: Math.floor(fxrand() * 6+1),
			cells: Math.floor(fxrand() * 12+2),
			renderedCellSize: 2,
			colorYIncrement: .58,
			colorPerlin: 1.2,
			cosValues: 100,
			colorValues: 200,
			
			tickIncrement: .005,
		},
		
		cells = [],
		cos = [],
		colors = [],
		
		tick = 0;

// setup

// supposed to reduce later payload by precalculating some cos values and not using the high-definition cos function, that takes quite some processing power to compute
var cosIncrement = 1 / opts.cosValues;
for( var i = 0; i < opts.cosValues; ++i )
	cos.push( Math.cos( i * cosIncrement * Math.PI ) );

// to get less computations needed when drawing every pixel;
var image = ctx.getImageData( 0, 0, s, s ),
		data = image.data;

// generating a [0,1] y value to interpolate with for the center of every cell
for( i = 0; i < opts.cells; ++i ){
	cells.push( [] );
	for( var j = 0; j < opts.cells; ++j ){
		cells[ i ].push( Math.random() );
	}
	// avoid checking boundaries later
	cells[ i ].push( cells[ i ][ 0 ] );
}
cells.push( cells[ 0 ] );

function valueAt( x, y ){
	
	var result = y * opts.colorYIncrement,
			factor;
	
	for( var octave = 0; octave < opts.octaves; ++octave ){
		
		factor = Math.pow( 2, octave + 1 );
		result += octaveValueAt( x * factor % opts.cells, ( y + tick ) * factor % opts.cells ) / factor;
	}
	
	return result;
}
function octaveValueAt( x, y ){
	
	var px = x |0,
			py = y |0,
			nx = px + 1,
			ny = py + 1,
			
			dx = x - px,
			dy = y - py;
	
	return cosInterpolation(
		cosInterpolation( cells[ px ][ py ], cells[ px ][ ny ], dy ),
		cosInterpolation( cells[ nx ][ py ], cells[ nx ][ ny ], dy ),
		dx
	);
}
function cosInterpolation( y, Y, x ){
	
	var armonic = -cos[ x * opts.cosValues |0 ] / 2 + .5;
	return y * ( 1 - armonic ) + Y * armonic; // same as y + armonic * ( Y - y ), c + xm
}

var red = [ 255, 255, 251, 14, 0, 123 ].reverse(),
		gre = [ 21, 152, 253, 121, 219, 49 ].reverse(),
		blu = [ 0, 0, 0, 227, 149 ].reverse(),
		
		colorPhases = red.length;
/*
for( var i = 0; i < colorPhases; ++i ){
	red[ i ] *= 255;
	gre[ i ] *= 255;
	blu[ i ] *= 255;
}
*/
// avoid checking boundaries later
red.push( red[ 0 ] );
gre.push( gre[ 0 ] );
blu.push( blu[ 0 ] );

function linearColorInterpolation( color, x ){
	var part = x |0;
	x -= part;
	return color[ part ] + ( color[ part + 1 ] - color[ part ] ) * x;
}
// precalculate the color values
// thanks to Maik for pointing it out
for( var i = 0; i < opts.colorValues / 2 ; ++i ){
	colors.push({
		r: linearColorInterpolation( red, i / opts.colorValues * 2 * colorPhases ) |0,
		g: linearColorInterpolation( gre, i / opts.colorValues * 2 * colorPhases ) |0,
		b: linearColorInterpolation( blu, i / opts.colorValues * 2 * colorPhases ) |0
	});
}
for( var i = 0; i < opts.colorValues / 2; ++i )
	colors.push( colors[ opts.colorValues / 2 - i | 0 ] );
if( colors[ opts.colorValues / 2 |0 ] === undefined )
	colors[ opts.colorValues / 2 |0 ] = colors[ opts.colorValues / 2 - 1 |0 ];

var renderedCells = [],
		positionMultiplier = opts.cells / ( s * opts.renderedCellSize ) / 2;

for( var i = 0; i < s; i += opts.renderedCellSize ){
	renderedCells.push( [] );
	for( var j = 0; j < s; j += opts.renderedCellSize ){
		renderedCells[ i / opts.renderedCellSize ].push( { } );
	}
}

function anim(){
	
	window.requestAnimationFrame( anim );
	
	tick += opts.tickIncrement;
	
	// linear hsl approximation, least computationally expensive I know of
	// https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/HSV-RGB-comparison.svg/300px-HSV-RGB-comparison.svg.png
	var color,
			pt;
	
	for( var i = 0; i < renderedCells.length; ++i ){
		for( var j = 0; j < renderedCells[ i ].length; ++j ){
			renderedCells[ i ][ j ] = colors[ ( valueAt( i * positionMultiplier, j * positionMultiplier ) * opts.colorPerlin % 1 ) * opts.colorValues |0 ];
		}
	}
	
	for( var i = 0; i < data.length; i += 4 ){ // r, g, b, a
		
		pt = i / 4;
		color = renderedCells[ ( pt % s ) / opts.renderedCellSize |0 ][ ( pt / s |0 ) / opts.renderedCellSize |0 ];
		data[ i     ] = color.r;
		data[ i + 1 ] = color.g;
		data[ i + 2 ] = color.b;
		data[ i + 3 ] = 255;
	}
	
	ctx.putImageData( image, 0, 0 );
}
anim();