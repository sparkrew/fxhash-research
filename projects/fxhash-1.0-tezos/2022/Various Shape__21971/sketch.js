// let SEGMENT_LENGTH = 1;
const letters = `abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ`;
let seed = "";
let shape;

function setup() {
    Math.random = fxrand
  randomSeed(fxrand()*999999);
  noiseSeed(fxrand()*999999);
    randSeed();
    console.log(seed);
    sha256seed = sha256(seed);
    gene = [];
    for (var v = 0; v < 64; v++) {
	gene[v] = parseInt(sha256seed.slice(v, v + 1), 16);
    }
    rand = new Randomizer(fxrand()*999999)
    noiseSeed(fxrand()*999999)

    createCanvas(windowWidth, windowHeight);
    sizing();

    density = (800**2) / (gene[6] + 1);
    noLoop();
    angle = TWO_PI / (gene[8] + 1);
background(230)

    gens = [gen0, gen1, gen2, gen3, gen4, gen5, gen6, gen7];
    spheres = [sphere_spherical,dodeca_spherical, icosa_spherical,cube_spherical, octa_spherical,tetra_spherical ]
    to_spherical = spheres[gene[9]%spheres.length]

    downThreshold = 0.005*(gene[10]+1);
    upThreshold = 0.01*(gene[11]+1);
    dxoff = 0.8**gene[12]; 
    generate = gens[gene[14]%gens.length]
    theta0 = map(gene[15],0,16,0,TWO_PI)
    phi0 = map(gene[16],0,16,-PI,PI)

  
    alph = 0;
    beta = HALF_PI/3;//(23 * PI) / 180;
    gamma =(113 * PI) / 180;
    roll = [
	[cos(alph), -sin(alph), 0],
	[sin(alph), cos(alph), 0],
	[0, 0, 1],
    ];
    pitch = [
	[cos(beta), 0, -sin(beta)],
	[0, 1, 0],
	[sin(beta), 0, cos(beta)],
    ];
    yaw = [
	[1, 0, 0],
	[0, cos(gamma), -sin(gamma)],
	[0, sin(gamma), cos(gamma)],
    ];

    generate();
    shape.push([]);
    ushape++;
    for (utheta = 0; utheta <= 360; utheta++) {
    	theta = map(utheta, 0, 180, 0, PI);
    	shape[ushape].push([cos(theta), sin(theta), 0.001]);
    }

    shapetmp = []

  
    u = -1;
    for( ss of shape ) {
	shapetmp.push([])
	u++;
	for( s of ss ) {
	    theta = acos(s[2]/sqrt(s[0]**2+s[1]**2+s[2]**2))
	    phi = atan2(s[1],s[0])
	    r = to_spherical(theta-theta0,phi-phi0)
	    shapetmp[u].push([ r*sin(theta)*cos(phi),r*sin(theta)*sin(phi), r*cos(theta)])
	}
    }
    shape = shapetmp
}

function gen0() {
    shape = [];
    ushape = -1;
    nphi = 50;
    shape.push([]);
    ushape++;
    uphi = 0;
    for (utheta = 0; utheta <= nphi * 360; utheta++) {
	phi = map(1 / (1 + exp(-(uphi - 90) / 10)), 0, 1, -HALF_PI, HALF_PI);
	theta = map(utheta, 0, 180, 0, PI);
	shape[ushape].push([
	    cos(phi) * cos(theta),
	    cos(phi) * sin(theta),
	    sin(phi),
	]);
	uphi += 180 / nphi / 360;
    }
    shape[ushape] = multiply(shape[ushape], multiply(multiply(roll, yaw), pitch));
}

function gen1() {
    shape = [];
    ushape = -1;
    nphi = 50;
    for (uphi = -90; uphi <= 90; uphi += 5) {
	shape.push([]);
	ushape++;
	phi = map(uphi, -90, 90, -HALF_PI, HALF_PI);
	for (utheta = 0; utheta <= 360; utheta++) {
	    theta = map(utheta, 0, 180, 0, PI);
	    shape[ushape].push([
		cos(phi) * cos(theta),
		cos(phi) * sin(theta),
		sin(phi),
	    ]);
	}
	shape[ushape] = multiply(
	    shape[ushape],
	    multiply(multiply(roll, yaw), pitch)
	);
    }
    for (utheta = 0; utheta <= 360; utheta += 5) {
	theta = map(utheta, 0, 180, 0, PI);
	shape.push([]);
	ushape++;
	for (uphi = -90; uphi <= 90; uphi += 1) {
	    phi = map(uphi, -90, 90, -HALF_PI, HALF_PI);
	    shape[ushape].push([
		cos(phi) * cos(theta),
		cos(phi) * sin(theta),
		sin(phi),
	    ]);
	}
	shape[ushape] = multiply(
	    shape[ushape],
	    multiply(multiply(roll, yaw), pitch)
	);
    }
}

function gen2() {
    shape = [];
    ushape = -1;
    nphi = 50;
    for (uphi = -90; uphi <= 90; uphi += 5) {
	shape.push([]);
	ushape++;
	phi = map(uphi, -90, 90, -HALF_PI, HALF_PI);
	for (utheta = 0; utheta <= 360; utheta++) {
	    theta = map(utheta, 0, 180, 0, PI);
	    shape[ushape].push([
		cos(phi) * cos(theta),
		cos(phi) * sin(theta),
		sin(phi),
	    ]);
	}
	shape[ushape] = multiply(
	    shape[ushape],
	    multiply(multiply(roll, yaw), pitch)
	);
    }
    for (utheta = 0; utheta <= 360; utheta += 5) {
	theta = map(utheta, 0, 180, 0, PI);
	shape.push([]);
	ushape++;
	for (uphi = -90; uphi <= 90; uphi += 1) {
	    phi = map(uphi, -90, 90, -HALF_PI, HALF_PI);
	    shape[ushape].push([
		cos(phi) * cos(theta),
		cos(phi) * sin(theta),
		sin(phi),
	    ]);
	}
	shape[ushape] = multiply(
	    shape[ushape],
	    multiply(multiply(roll, yaw), pitch)
	);
    }
}

function gen3() {
    shape = [];
    ushape = -1;
    nphi = 20;
    shape.push([]);
    ushape++;

    uphi = 0;
    for (utheta = 0; utheta <= nphi * 360; utheta++) {
	phi = map(1 / (1 + exp(-(uphi - 90) / 20)), 0, 1, -HALF_PI, HALF_PI);
	phi = map(uphi, 0, 180, -HALF_PI, HALF_PI);
	theta = map(utheta, 0, 180, 0, PI);
	shape[ushape].push([
	    cos(phi) * cos(theta),
	    cos(phi) * sin(theta),
	    sin(phi),
	]);
	uphi += 180 / nphi / 360;
    }
    shape[ushape] = multiply(shape[ushape], multiply(multiply(roll, yaw), pitch));
}

function gen4() {
    shape = [];
    ushape = -1;
    for (uphi = -90; uphi <= 90; uphi += 5) {
	shape.push([]);
	ushape++;
	phi = map(uphi, 0, 180, 0, PI);
	for (utheta = 0; utheta <= 360; utheta++) {
	    theta = map(utheta, 0, 180, 0, PI);
	    shape[ushape].push([
		cos(phi) * cos(theta),
		cos(phi) * sin(theta),
		sin(phi),
	    ]);
	}
	shape[ushape] = multiply(
	    shape[ushape],
	    multiply(multiply(roll, yaw), pitch)
	);
    }
}

function gen5() {
    shape = [];
    ushape = -1;
    x0 = createVector(rand.random(-1, 1), rand.random(-1, 1), rand.random(-1, 1));
    x0.normalize();
    x1 = createVector(rand.random(-1, 1), rand.random(-1, 1), rand.random(-1, 1));
    x1.normalize();
    x1c = x1.copy();
    for (var u = 0; u < 5000; u++) {
	uu = 5 * u;
	x1c.mult(rand.random(0.2));
	x0.add(x1c);
	x0.normalize();
	x1 = createVector(rand.random(-1, 1), rand.random(-1, 1), rand.random(-1, 1));
	x1.normalize();
	x1c = x1.copy();
	x1.mult(rand.random(0.1));
	x1.add(x0);
	x1.normalize();
	shape.push([])
	ushape ++;
	for( var v = 0; v <= 10; v ++ ) {
	    var x = map(v,0,10,x0.x,x1.x);
	    var y = map(v,0,10,x0.y,x1.y);
	    var z = map(v,0,10,x0.z,x1.z);
	    shape[ushape].push([x,y,abs(z)])
	}
    }
}

function gen6() {
    shape = [];
    ushape = -1;
    for (var u = 0; u < 5000; u++) {
	var x0 = createVector(rand.random(-1, 1), rand.random(-1, 1), rand.random(-1, 1));
	x0.normalize();
	var x1 = createVector(rand.random(-1, 1), rand.random(-1, 1), rand.random(-1, 1));
	x1.normalize();
	x1.mult(rand.random(0.1));
	x1.add(x0);
	x1.normalize();
	shape.push([])
	ushape ++;
	for( var v = 0; v <= 10; v ++ ) {
	    var x = map(v,0,10,x0.x,x1.x);
	    var y = map(v,0,10,x0.y,x1.y);
	    var z = map(v,0,10,x0.z,x1.z);
	    shape[ushape].push([x,y,abs(z)])
	}
    }
}

function gen7() {
    generateShape(1000);
    cube = multiply(shape,multiply(multiply(roll,yaw),pitch));


    wstring = []

    walls_to_draw = []
    for( var u = 0; u < shapeS.length; u ++ ) {
	//shapes_to_draw.push([])
	for( var v = 0; v < 3; v ++ ) {
            if( walls[u][v] ) {
		arr = [ shapeS[u][v],shapeS[u][(v+1)%3] ]
		arr.sort()
		if( ! wstring.includes( arr.toString()  ) ) {
		    walls_to_draw.push(arr)
		    wstring.push(arr.toString())
		}
            }
	}
    }

    lines = []
    for( var u = 0; u < walls_to_draw.length; u ++ ) {
	w = walls_to_draw[u]
	ok = false
	for( var ul = 0; ul < lines.length; ul ++ ) {
            l = lines[ul]
            if(( l[l.length-1] == w[0] )  & (l[l.length-2] != w[1] ) ){
		lines[ul].push(w[1])
		if( ok ) {
		    lines[ul].push(-1)
		}
		ok = true
                break;
            }
            if(( l[l.length-1] == w[1] )  & (l[l.length-2] != w[0] ) ){
		lines[ul].push(w[0])
		if( ok ) {
		    lines[ul].push(-1)
		}
		ok = true
                break;
            }
            if(( l[0] == w[0] )  & (l[1] != w[1] ) ){
		lines[ul].unshift(w[1])
		if( ok ) {
		    lines[ul].unshift(-1)
		}
		ok = true
                break;
            }
            if(( l[0] == w[1] )  & (l[1] != w[0] ) ){
		lines[ul].unshift(w[0])
		if( ok ) {
		    lines[ul].unshift(-1)
		}
		ok = true
                break;
            }
	}
	if( !ok ) {
            lines.push([w[0],w[1]])
	}
    }    
    
    
    for( var ul = 0; ul < lines.length; ul ++ ) {
	for( var vl = 0; vl < lines.length; vl ++ ) {
	    if( lines[ul][0] == lines[vl][lines[vl].length-1]) {
		print(ul,vl)
	    }
	    if( lines[vl][0] == lines[ul][lines[ul].length-1]) {
		print('rev',vl,ul)
	    }
	}      
    }

    
    c = lines.length
    ended = false
    while(!ended) {
	newlines = []
	ended = true
	rem = []
	for( var ul = 0; ul < lines.length; ul ++ ) {
            if( !rem.includes(ul) ) {
		rem.push(ul)
		done = false
		for( var vl = 0; vl < lines.length; vl ++ ) {
		    if( !rem.includes(vl) ) {
			if( lines[vl][0] == lines[ul][lines[ul].length-1]) {
			    lines[ul].pop()
			    newlines.push(lines[ul].concat(lines[vl]))
			    rem.push(vl)
			    done = true
			    ended = false
			    break;
			}

			if( lines[ul][0] == lines[vl][lines[vl].length-1]) {
			    lines[vl].pop()
			    newlines.push(lines[vl].concat(lines[ul]))
			    rem.push(vl)
			    done = true
			    ended = false
			    break;
			}
			if( lines[ul][0] == lines[vl][0]) {
			    lines[vl].reverse()
			    lines[vl].pop()
			    newlines.push(lines[vl].concat(lines[ul]))
			    rem.push(vl)
			    done = true
			    ended = false
			    break;
			}
			if( lines[ul][lines[ul].length-1] == lines[vl][lines[vl].length-1]) {
			    lines[vl].pop()
			    lines[ul].reverse()
			    newlines.push(lines[vl].concat(lines[ul]))
			    rem.push(vl)
			    done = true
			    ended = false
			    break;
			}

			
		    }
		}
		if( ! done ) {
		    newlines.push(lines[ul])
		}
            }
	}
	lines = []
	for( l of newlines ) {
            lines.push(l)
	}
	c = lines.length
    }
    
  
  
    for( var ul = 0; ul < lines.length; ul ++ ) {
      break0 = false
      break1 = false
	  for( var vl = 0; vl < lines.length; vl ++ ) {
        if( ul != vl ){
          if( lines[vl].includes(lines[ul][0]) & !break0 ) {
            isequal = (element) => element == lines[ul][0];
            vvl = lines[vl].findIndex(isequal)
            lines[ul].unshift(lines[vl][vvl+1])
            lines[ul].unshift(-1)
            break0 = true;  
          }
          if( lines[vl].includes(lines[ul][lines[ul].length-1]) & !break1 ) {
            isequal = (element) => element == lines[ul][lines[ul].length-1];
            vvl = lines[vl].findIndex(isequal)
            lines[ul].push(lines[vl][vvl+1])
            lines[ul].push(-1)
            break1 = true;  
          }
          if( break0 & break1 ) {
            break
          }
          }
      }
    }


    shape = [];
    ushape = -1;
    for( l of lines ) {
	lp = undefined
	shape.push([])
	ushape ++;
	// if( l[0]  != -1 ) {
    	//     shape[ushape].push([cube[l[0]][0],cube[l[0]][1],cube[l[0]][2]]);
	//     lp = [cube[l[0]][0],cube[l[0]][1],cube[l[0]][2]]
	// }
	
	for(var v = 0; v < l.length-1; v ++ ) {
	    if( ( l[v]  != -1 ) & ( l[v+1]  != -1 )) {
		c = [(cube[l[v]][0]+cube[l[v+1]][0])/2,
    		     (cube[l[v]][1]+cube[l[v+1]][1])/2,
    		     (cube[l[v]][2]+cube[l[v+1]][2])/2
    		    ]
		if( lp ) {
		    for( var uu = 0; uu < 20; uu ++ ) {
			var t = map(uu,0,20,0,1);
			cc = [ cube[l[v]][0] + (1-t)**2*(lp[0]-cube[l[v]][0]) + t**2*(lp[0]-c[0]),
			       cube[l[v]][1] + (1-t)**2*(lp[1]-cube[l[v]][1]) + t**2*(lp[1]-c[1]),
			       cube[l[v]][2] + (1-t)**2*(lp[2]-cube[l[v]][2]) + t**2*(lp[2]-c[2]) ]
		    
			shape[ushape].push(cc);
		    }
		}
		//else {
    		    //shape[ushape].push([c[0],c[1],c[2]]);
		    lp = c;
    		    //shape[ushape].push([cube[l[0]][0],cube[l[0]][1],cube[l[0]][2]]);
		//}
	    }
	}
    }
}

function generateShape(npoints) {
    var jitter = 0.1;
    var dz = 2/npoints;
    var s = 3.6/sqrt(npoints); 
    z = 1-dz/2
    lon = 0;
    shape = []
    dlong = PI * (3-Math.sqrt(5));  /* ~2.39996323 */
    for( var u = 0; u < npoints; u++ ) {
	r = sqrt(1-z**2)
	var lat = asin(z)
	lat += jitter*(rand.random()-rand.random())*(lat-asin(max(-1,z-dz*TWO_PI*r/s)))
	lon += jitter*(rand.random()-rand.random())*(s/r)
	shape.push([cos(lon)*cos(lat),sin(lon)*cos(lat),max(-0.999,min(0.999,sin(lat)))])
	z -= dz
	lon += dlong //s/r
    }
    triangulate()
    mazeGeneration()
}

function triang(sh,signe) {
    // projection
    var projected = []
    var minX = 0,
	maxX = 0,
	minY = 0,
	maxY = 0;
    for( u = 0; u < sh.length; u++) {
	var x = sh[u][0]/(1+signe*sh[u][2])
	var y = sh[u][1]/(1+signe*sh[u][2])
	minX = min(minX,x)
	minY = min(minY,y)
	maxX = max(maxX,x)
	maxY = max(maxY,y)
	projected.push([x,y])
    }
    var real_length = projected.length
    triangulation = [[projected.length,projected.length+1,projected.length+2]]
    projected.push([minX - 100*(maxX-minX),minY - 100*(maxY-minY)])
    projected.push([maxX + 100*(maxX-minX),minY - 100*(maxY-minY)])
    projected.push([(minX+maxX)/2,maxY + 10*(maxY-minY)])

    for( var u = 0; u < projected.length; u ++ ) {
	var badTriangles = []
	for( var t = 0; t < triangulation.length; t ++ ) {
            var isInCircle = inCircle(projected[triangulation[t][0]],
				      projected[triangulation[t][1]],
				      projected[triangulation[t][2]],
				      projected[u] )
            if( isInCircle ) {
		badTriangles.push(t)
            }
	}
	var polygon = []
	for( var t = 0; t < badTriangles.length; t ++ ) {
            for( var e = 0; e < triangulation[badTriangles[t]].length; e++) {
		var shared = false;
		for( var t2 = 0; t2 < badTriangles.length; t2 ++ ) {
		    if( t != t2 ) {
			for( var e2 = 0; e2 < triangulation[badTriangles[t2]].length; e2++) {
			    if((( triangulation[badTriangles[t]][e] == triangulation[badTriangles[t2]][e2] ) &
				( triangulation[badTriangles[t]][(e+1)%3] == triangulation[badTriangles[t2]][(e2+1)%3] )) ||
			       (( triangulation[badTriangles[t]][e] == triangulation[badTriangles[t2]][e2] ) &
				( triangulation[badTriangles[t]][(e+1)%3] == triangulation[badTriangles[t2]][(e2+2)%3] )) ){
				shared = true
				break;
			    }
			    if( shared ) {
				break;
			    }
			}
			if( shared ) {
			    break;
			}
		    }
		}
		if( !shared ) {
		    polygon.push([triangulation[badTriangles[t]][e],triangulation[badTriangles[t]][(e+1)%3]]);
		}
            }
	}
	new_triangulation = []
	for( var t = 0; t < triangulation.length; t ++ ) {
            if( !badTriangles.includes(t) ) {
		new_triangulation.push(triangulation[t])
            }
	}
	triangulation = new_triangulation
	for( var p = 0; p < polygon.length; p ++ ) {
            triangulation.push([polygon[p][0],polygon[p][1],u])
	}
    }
    new_triangulation = []
    for( var t = 0; t < triangulation.length; t ++ ) {
	if(( triangulation[t][0] < real_length ) &
           ( triangulation[t][1] < real_length  ) &
           ( triangulation[t][2] < real_length  ) ){
            new_triangulation.push(triangulation[t])
	}
    }
    return new_triangulation
}

function triangulate() {
    shapeS = triang(shape,1)

    neighbors = []
    for( var u = 0; u < shapeS.length; u ++ ) {
	neighbors.push([])
    }
    for( var u = 0; u < shapeS.length; u ++ ) {
	for( var v = u+1; v < shapeS.length; v ++ ) {
            com = 0;
            for( var uu = 0; uu < 3; uu ++) {
		for( var vv = 0; vv < 3; vv ++) {
		    if( shapeS[u][uu] == shapeS[v][vv] ) {
			com ++;
		    }
		}
            }
            if( com == 2 ) {
		neighbors[u].push(v)
		neighbors[v].push(u)
            }
	}
    }
    toadd = []
    for( var u = 0; u < shapeS.length; u ++ ) {
	if( neighbors[u].length < 3) {
            toadd.push(u)
	}
    }

    points_toadd = []
    for( var u = 0; u < toadd.length; u ++ ) {
	for( var v = u+1; v < toadd.length; v ++ ) {
            for( var uu = 0; uu < 3; uu ++) {
		for( var vv = 0; vv < 3; vv ++) {
		    if( shapeS[toadd[u]][uu] == shapeS[toadd[v]][vv] ) {
			points_toadd.push(shapeS[toadd[u]][uu])
		    }
		}
            }
	}
    }

    shape2 = []
    for( v = 0; v < points_toadd.length; v ++) {
	shape2.push(shape[points_toadd[v]])
    }
    // reverse triangulate points_toadd
    shapeS2 = triang(shape2,-1)
    for( v = 0; v < shapeS2.length; v ++) {
	shapeS.push([points_toadd[shapeS2[v][0]],
		     points_toadd[shapeS2[v][1]],
		     points_toadd[shapeS2[v][2]]])
    }

    // neigbors again
    neighbors = []
    for( var u = 0; u < shapeS.length; u ++ ) {
	neighbors.push([])
    }
    for( var u = 0; u < shapeS.length; u ++ ) {
	for( var v = u+1; v < shapeS.length; v ++ ) {
            com = 0;
            for( var uu = 0; uu < 3; uu ++) {
		for( var vv = 0; vv < 3; vv ++) {
		    if( shapeS[u][uu] == shapeS[v][vv] ) {
			com ++;
		    }
		}
            }
            if( com == 2 ) {
		neighbors[u].push(v)
		neighbors[v].push(u)
            }
	}
    }


    nneighbors = neighbors[0].length
}

function inCircle (a,b,c,d) {
    let ax_ = a[0]-d[0];
    let ay_ = a[1]-d[1];
    let bx_ = b[0]-d[0];
    let by_ = b[1]-d[1];
    let cx_ = c[0]-d[0];
    let cy_ = c[1]-d[1];
    return (
        (ax_*ax_ + ay_*ay_) * (bx_*cy_-cx_*by_) -
            (bx_*bx_ + by_*by_) * (ax_*cy_-cx_*ay_) +
            (cx_*cx_ + cy_*cy_) * (ax_*by_-bx_*ay_)
    ) > 0;
}

function mazeGeneration() {
    visited = []
    walls = []
    for( var u = 0; u < shapeS.length; u ++ ) {
	visited.push(false)
	walls.push([true,true,true])
    }
    current = 0
    visited[current] = true
    unvisited = shapeS.length-1
    stack = []
    while(unvisited) {
	if( typeof(current) === 'undefined' ) {
            break;
	}
	// get rnd neighbor
	possible_neighbors = []
	for( un = 0; un < neighbors[current].length; un ++ ) {
            if( !visited[neighbors[current][un]] ) {
		possible_neighbors.push(neighbors[current][un])
            }
	}
	if( possible_neighbors.length > 0 ) {
            neighbor = possible_neighbors[floor(rand.random(possible_neighbors.length))]
            stack.push(current);
            // removeWall
            for( var uu = 0; uu < 3; uu ++) {
		for( var vv = 0; vv < 3; vv ++) {
		    if((( shapeS[current][uu] == shapeS[neighbor][vv] ) &
			( shapeS[current][(uu+1)%3] == shapeS[neighbor][(vv+1)%3] )) ||
                       (( shapeS[current][(uu+1)%3] == shapeS[neighbor][vv] ) &
			( shapeS[current][uu] == shapeS[neighbor][(vv+1)%3] )))  
		    {
			walls[current][uu] = false
			walls[neighbor][vv] = false
		    }
		}
            }
            current = neighbor
            if( !visited[current] ) {
		visited[current] = true;
		--unvisited
            }
	} else {
            current = stack.pop();
	}
    }

    possible_neighbors = []
    for( var u = 0; u < shapeS.length; u ++ ) {
	possible_neighbors.push([])
	for( var v0 = 0; v0 < neighbors[u].length; v0 ++ ) {
            v = neighbors[u][v0]
            for( var uu = 0; uu < 3; uu ++) {
		for( var vv = 0; vv < 3; vv ++) {
		    if((( shapeS[u][uu] == shapeS[v][vv] ) &
			( shapeS[u][(uu+1)%3] == shapeS[v][(vv+1)%3] )) ||
                       (( shapeS[u][(uu+1)%3] == shapeS[v][vv] ) &
			( shapeS[u][uu] == shapeS[v][(vv+1)%3] )))  
		    {
			if( !walls[u][uu] ) {
			    possible_neighbors[u].push(v)
			}
		    }
		}
            }
	}
    }

}
function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
}

function projection(sh) {
    sh2 = []
    for( var u = 0; u < sh.length; u ++) {
	var x = sh[u][0]/(1+sh[u][2])/5
	var y = sh[u][1]/(1+sh[u][2])/5
	sh2.push([x,y,1])
    }
    return sh2
}




function show_shape() {
    push();
    noFill();
    lastPos = [0, 0];
    first = true;
    var counter = 0;
    penDown = false;
    xoff = 0;
    for (var u = 0; u < shape.length; u++) {
	first = true;
	if (shape[u][0][2] > 0) {
	    front = true;
	} else {
	    front = false;
	}
	for (var v = 0; v < shape[u].length; v++) {

      if( counter%100 == 0) {
        line(-cx,-cy,-cx+10,-cy+10)
      }

      if (penDown) {
		if (rand.random() < downThreshold) {
		    penDown = false;
		    first = true;
		}
	    } else {
		if (rand.random() < upThreshold) {
		    penDown = true;
		    first = true;
		}
	    }
	    if (penDown) {
		if (shape[u][v][2] > 0) {
		    if (!front) {
			first = true;
			front = true;
		    }
		} else {
		    if (front) {
			front = false;
		    }
		}
		if (
		    (abs(shape[u][v][0] - lastPos[0]) > 1e-5) |
			(abs(shape[u][v][1] - lastPos[1]) > 1e-5)
		) {
		    if (front) {
			// stroke(20 ,240-20 * noise(xoff));
			// strokeWeight(ds * noise(xoff));
			if (first) {
			    first = false;
			} else {
			    line(
				cw2 * lastPos[0],
				cw2 * lastPos[1],
				cw2 * shape[u][v][0],
				cw2 * shape[u][v][1]
			    );
                counter +=1

			}
		    }
		    xoff += dxoff;
		    lastPos = [shape[u][v][0], shape[u][v][1]];
		}
	    }
	}
      // console.log('test')
    }
    pop();
}

function draw() {
    // background(20)
    push();
    translate(cx, cy);
    // fill(255)
    // noStroke();
    // square(-cw0/2,-cw0/2,cw0)
    // stroke(20);
    // noFill();//fill(224,222,222);
    // circle(0,0,cw)

    show_shape();

    pop();

    // fill(31,41,68)
    // circle(cx,cy,cw)

    push();
    translate(cx-cw0/2,cy - cw0/2);
    noFill();
    // texturize(density);
    pop();
    //save('circle_'+seed+'.svg')
}

function randSeed() {
    seed = "";
    for (var v = 0; v < 16; v++) {
	seed = seed + letters[int(random(0, letters.length - 1))];
    }
}

function texturize(density) {
    for (var u = 0; u < 5000; u++) {
	strokeWeight(rand.random(W / 2, W));
	var x = rand.random(cw0);
	var y = rand.random(cw0);
	var x0 = rand.random(-X, X);
	var y0 = rand.random(-YY, YY);

	stroke(G, G - rand.random(5), G - rand.random(8), rand.random(2, 5));
	// stroke(G+rand.random(-5,5),G+rand.random(-5,5),G+rand.random(-5,5),rand.random(2,5));
	line(x-x0/2, y-y0/2, x+x0/2, y + y0/2);
	x = rand.random(cw0);
	y = rand.random(cw0);
	x0 = rand.random(-XX, XX);
	y0 = rand.random(-Y, Y);
	strokeWeight(rand.random(W / 2, W));
	stroke(G, G - rand.random(5), G - rand.random(8), rand.random(2, 5));
	// stroke(G+rand.random(-5,5),G+rand.random(-5,5),G+rand.random(-5,5),rand.random(2,5));
	line(x-x0/2, y-y0/2, x+x0/2, y + y0/2);
    }
    
    for (let i = 0; i < density; i++) {
	stroke(G, G - rand.random(5), G - rand.random(8), rand.random(10, 15));
	strokeWeight(rand.random()*cw0/400);

	let x1 = rand.random() * cw0;
	let y1 = rand.random() * cw0;
	let theta = rand.random(-angle, angle) + floor(rand.random(2)) * PI;
	let segmentLength = rand.random(SEGMENT_LENGTH) + 2 * SEGMENT_LENGTH;
	let x2 = cos(theta) * segmentLength + x1;
	let y2 = sin(theta) * segmentLength + y1;

	line(x1, y1, x2, y2);
    }
}

var sha256 = function sha256(ascii) {
    function rightRotate(value, amount) {
	return (value >>> amount) | (value << (32 - amount));
    }

    var mathPow = Math.pow;
    var maxWord = mathPow(2, 32);
    var lengthProperty = "length";
    var i, j; // Used as a counter across the whole file
    var result = "";

    var words = [];
    var asciiBitLength = ascii[lengthProperty] * 8;

    //* caching results is optional - remove/add slash from front of this line to toggle
    // Initial hash value: first 32 bits of the fractional parts of the square roots of the first 8 primes
    // (we actually calculate the first 64, but extra values are just ignored)
    var hash = (sha256.h = sha256.h || []);
    // Round constants: first 32 bits of the fractional parts of the cube roots of the first 64 primes
    var k = (sha256.k = sha256.k || []);
    var primeCounter = k[lengthProperty];
    /*/
      var hash = [], k = [];
      var primeCounter = 0;
    //*/

    var isComposite = {};
    for (var candidate = 2; primeCounter < 64; candidate++) {
	if (!isComposite[candidate]) {
	    for (i = 0; i < 313; i += candidate) {
		isComposite[i] = candidate;
	    }
	    hash[primeCounter] = (mathPow(candidate, 0.5) * maxWord) | 0;
	    k[primeCounter++] = (mathPow(candidate, 1 / 3) * maxWord) | 0;
	}
    }

    ascii += "\x80"; // Append Ƈ' bit (plus zero padding)
    while ((ascii[lengthProperty] % 64) - 56) ascii += "\x00"; // More zero padding
    for (i = 0; i < ascii[lengthProperty]; i++) {
	j = ascii.charCodeAt(i);
	if (j >> 8) return; // ASCII check: only accept characters in range 0-255
	words[i >> 2] |= j << (((3 - i) % 4) * 8);
    }
    words[words[lengthProperty]] = (asciiBitLength / maxWord) | 0;
    words[words[lengthProperty]] = asciiBitLength;

    // process each chunk
    for (j = 0; j < words[lengthProperty]; ) {
	var w = words.slice(j, (j += 16)); // The message is expanded into 64 words as part of the iteration
	var oldHash = hash;
	// This is now the undefinedworking hash", often labelled as variables a...g
	// (we have to truncate as well, otherwise extra entries at the end accumulate
	hash = hash.slice(0, 8);

	for (i = 0; i < 64; i++) {
	    var i2 = i + j;
	    // Expand the message into 64 words
	    // Used below if
	    var w15 = w[i - 15],
		w2 = w[i - 2];

	    // Iterate
	    var a = hash[0],
		e = hash[4];
	    var temp1 =
		hash[7] +
		(rightRotate(e, 6) ^ rightRotate(e, 11) ^ rightRotate(e, 25)) + // S1
		((e & hash[5]) ^ (~e & hash[6])) + // ch
		k[i] +
		// Expand the message schedule if needed
		(w[i] =
		 i < 16
		 ? w[i]
		 : (w[i - 16] +
                    (rightRotate(w15, 7) ^ rightRotate(w15, 18) ^ (w15 >>> 3)) + // s0
                    w[i - 7] +
                    (rightRotate(w2, 17) ^ rightRotate(w2, 19) ^ (w2 >>> 10))) | // s1
		 0);
	    // This is only used once, so *could* be moved below, but it only saves 4 bytes and makes things unreadble
	    var temp2 =
		(rightRotate(a, 2) ^ rightRotate(a, 13) ^ rightRotate(a, 22)) + // S0
		((a & hash[1]) ^ (a & hash[2]) ^ (hash[1] & hash[2])); // maj

	    hash = [(temp1 + temp2) | 0].concat(hash); // We don't bother trimming off the extra ones, they're harmless as long as we're truncating when we do the slice()
	    hash[4] = (hash[4] + temp1) | 0;
	}

	for (i = 0; i < 8; i++) {
	    hash[i] = (hash[i] + oldHash[i]) | 0;
	}
    }

    for (i = 0; i < 8; i++) {
	for (j = 3; j + 1; j--) {
	    var b = (hash[i] >> (j * 8)) & 255;
	    result += (b < 16 ? 0 : "") + b.toString(16);
	}
    }
    return result;
};
// utils
function multiply(a, b) {
    let aRows = a.length;
    let aCols = a[0].length;
    let bCols = b[0].length;
    let result = new Array(aRows);
    for (let r = 0; r < aRows; ++r) {
	const row = new Array(bCols);
	result[r] = row;
	const ar = a[r];
	for (let c = 0; c < bCols; ++c) {
	    let sum = 0;
	    for (let i = 0; i < aCols; ++i) {
		sum += ar[i] * b[i][c];
	    }
	    row[c] = sum;
	}
    }
    return result;
}


function sphere_spherical(theta,phi) {
    return 1
}

function ellipse_spherical(theta,phi) {
    return sqrt(1/(4*cos(theta)**2-sin(theta)**2))
}


function cube_spherical(theta,phi) {
    pp = 20
    G0 = abs(sin(theta)*cos(phi))**pp+abs(sin(theta)*sin(phi))**pp+abs(cos(theta))**pp
    return 0.7*1/(G0**(1/pp))
}

function g(a,b,c,theta,phi) {
    return abs(a*sin(theta)*cos(phi)+b*sin(theta)*sin(phi)+c*cos(theta))
}


function h(a,b,c,theta,phi) {
    gg = a*sin(theta)*cos(phi)+b*sin(theta)*sin(phi)+c*cos(theta)
    return ( abs(gg) - gg ) /2
}

function octa_spherical(theta,phi) {
    pp = 20
    gamm = 1/sqrt(3)
    GI = g(gamm,gamm,gamm,theta,phi)**pp + g(-gamm,gamm,gamm,theta,phi)**pp + g(gamm,-gamm,gamm,theta,phi)**pp + g(gamm,gamm,-gamm,theta,phi)**pp 
    return 0.5*1/(GI**(1/pp))
}

function dodeca_spherical(theta,phi) {
    pp = 20
    delta = sqrt((5-sqrt(5))/10)
    epsilon = sqrt((5+sqrt(5))/10)

    GII = g(delta,epsilon,0,theta,phi)**pp + g(delta,-epsilon,0,theta,phi)**pp + g(0,delta,epsilon,theta,phi)**pp + g(0,delta,-epsilon,theta,phi)**pp + g(epsilon,0,delta,theta,phi)**pp + g(epsilon,0,-delta,theta,phi)**pp 
    return 0.5*1/(GII**(1/pp))
}

function icosa_spherical(theta,phi) {
    pp = 20
    zeta = sqrt((3-sqrt(5))/6)
    eta = sqrt((3+sqrt(5))/6)

    gamm = 1/sqrt(3)
    GI = g(gamm,gamm,gamm,theta,phi)**pp + g(-gamm,gamm,gamm,theta,phi)**pp + g(gamm,-gamm,gamm,theta,phi)**pp + g(gamm,gamm,-gamm,theta,phi)**pp 
    GII = g(zeta,eta,0,theta,phi)**pp + g(zeta,-eta,0,theta,phi)**pp + g(0,zeta,eta,theta,phi)**pp + g(0,zeta,-eta,theta,phi)**pp + g(eta,0,zeta,theta,phi)**pp + g(eta,0,-zeta,theta,phi)**pp 
    return 1/((GII+GI)**(1/pp))
}

function tetra_spherical(theta,phi) {
    pp = 20
    gamm = 1/sqrt(3)
    H0 = h(gamm,gamm,gamm,theta,phi)**pp + h(-gamm,-gamm,gamm,theta,phi)**pp + h(gamm,-gamm,-gamm,theta,phi)**pp + h(-gamm,gamm,-gamm,theta,phi)**pp  
    gamm = -gamm
    H1 = h(gamm,gamm,gamm,theta,phi)**pp + h(-gamm,-gamm,gamm,theta,phi)**pp + h(gamm,-gamm,-gamm,theta,phi)**pp + h(-gamm,gamm,-gamm,theta,phi)**pp  


    return (0.5/(H0+(1/pp)**(pp-2)*H1)**(1/pp))/1.4
}



class Randomizer {

    constructor(seed) {
      this._seed = seed % 2147483647;
	  if (this._seed <= 0) this._seed += 2147483646;
    }

    random() {
	return rand.random(0,1)
    }

    random(b) {
	return rand.random(0,b);
    }
    
    random(a,b) {
	this._seed = this._seed * 48271 % 2147483647;
	if(arguments.length === 0){
            return this._seed/2147483647;
	} else if(arguments.length === 1){
            return (this._seed/2147483647)*a;
	}else{
            return (this._seed/2147483647)*(b-a)+a;
	}
    }

}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);   
    sizing();
    redraw();
    // fsshow.setButton();

}

function mousePressed() {
    if (mouseX > width - cw/10 && mouseY > height - cw/10) {
	let fs = fullscreen();
	fullscreen(!fs);
    } else {
	setup();
	redraw();
    }
}

function sizing() {
    cx = width / 2;
    cy = height / 2;
    cw0 = min(width, height);
    cw = min(width, height) * 0.8;
    cw2 = cw / 2;

    X = cw0 / 2 / (gene[0] + 1);
    XX = X / (gene[1] + 1);
    Y = cw0 / 2 / (gene[2] + 1);
    YY = Y / (gene[3] + 1);
    G = 200 + 2 * gene[4] - 32;
    W = cw0 / 10 / (gene[5]+1);
    SEGMENT_LENGTH = (gene[7] + 1)*cw0/800;
    ds = (3 + gene[13])*cw0/800;
    
}
