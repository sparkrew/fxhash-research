
var GEN = {}

function characterizeArray(a,msg){
  let xmin = Infinity,xmax = -Infinity;
  let xs=0
  for(let i=0;i<a.length;i++){
    xs += a[i]
    xmin = Math.min(xmin,a[i])
    xmax = Math.max(xmax,a[i])
  }
  let b = [0,0,0,0,0,0,0,0,0,0]
  for(let i=0;i<a.length;i++){
    let j = Math.min(9,Math.floor(map(a[i],xmin,xmax,0,10)))
    b[j]++
  }

  let s = ''
  for(let i=0;i<10;i++){
    s += 'bin ' + (i+1) + ' range(' + map(i,0,10,xmin,xmax).toFixed(1)  + '-' + map(i+1,0,10,xmin,xmax).toFixed(1) + ' ' + (100*b[i]/a.length).toFixed(1) + '%\n'
  }
  let a2 = a.sort(function(v1,v2){return v2-v1})
  let n = a.length >= 5 ? 5 : a.length
  s += '\nLargest ' + n + ' values'
  for(let i=0;i<n;i++)
    s += '' + a2[i] + (i != n-1 ? ',' : '')
  s += '\nSmallest ' + n + ' values'
  for(let i=0;i<n;i++)
    s += '' + a2[a2.length-1-n] + (i != n-1 ? ',' : '')
  let ac = countValues(a)
  s += '\nMost Frequent values\n'
  n = ac.length >= 10 ? 10 : ac.length
  for(let i=0;i<n;i++)
    s += '' + ac[i].v + ' count=' + ac[i].n + '\n'
  console.log(msg == null ? '' : msg,' num points=',a.length,'min=',xmin,'max',xmax,'avg',xs/a.length,'\n',s)
}

function countValues(a){
  let o = {}
  for(let i=0;i<a.length;i++){
    if(o[a[i]] == null){
      o[a[i]] = {v:a[i],n:0}
    }
    o[a[i]].n++
  }
  let v=Object.values(o)
  return v.sort(function(a,b){return b.n - a.n})
}

function simplifyPoints(a){
  let a2 = []
  for(let i=0;i<a.length;i++){
    let pt = {x:Math.round(a[i].x),y:Math.round(a[i].y)}
    if(pt.x == -0) pt.x = 0
    if(pt.y == -0) pt.y = 0
    if(i==0 || pt.x != a2[a2.length-1].x || pt.y != a2[a2.length-1].y)
      a2.push(pt)
  }
  return a2
}

function getPathLength(a0){
  if(a0[0].sPerimeter == null)
    a = augmentPoints(a0)
  else
    a = a0
  return a[a.length-1].sPerimeter
}

function augmentPoints(a){
  // add distances between pts
  if(a.length == 0) return a
  let d
  let p0 = a[0]
  p0.sPerimeter = 0
  p0.dPrevious = 0
  for(let i=1;i<a.length;i++){
    d = distance(a[i],a[i-1])
    a[i].dPrevious = d
    a[i].sPerimeter = a[i-1].sPerimeter + d
  }
  return a
}

function processPoints(a){
  let xs = 0, ys = 0, xmin = Infinity, xmax = -Infinity, ymin = Infinity, ymax = -Infinity;
  let xminy,xmaxy;
  for(let i=0;i<a.length;i++){
    let p=a[i];
    if(Array.isArray(p))
      p = {x:p[0],y:p[1]}
    xs += p.x
    ys += p.y
    xmin = Math.min(xmin,p.x)
    xmax = Math.max(xmax,p.x)
    ymin = Math.min(ymin,p.y)
    ymax = Math.max(ymax,p.y)
    if(p.x == xmin) xminy = p.y
    if(p.x == xmax) xmaxy = p.y
  }
  let w = xmax-xmin
  let h = ymax-ymin
 let o = {xa:xs/a.length, ya:ys/a.length,
          xmin:xmin, xmax:xmax,
          ymin:ymin, ymax:ymax,
          xminy:xminy, xmaxy:xmaxy,
          width:w, height:h,
          s: Math.pow(w*w+h*h,.5),
          xm: xmin+.5*w,
          ym: ymin+.5*h
        }
  o.r0 = distance(o.xa,o.ya,a[0].x,a[0].y)
  return o
}

function sortPointsByAngle(centroid, points) {
  let centerPoint = centroid;
  let sorted = points.slice(0);
  let bUseArray = false
  if(Array.isArray(centerPoint))
    centerPoint = {x:centerPoint[0],y:centerPoint[1]}
  if(Array.isArray(sorted[0])){
    sorted = sorted.map(function(p){return {x:p[0],y:p[1]} })
    bUseArray = true
  }

  let sortByAngle = (p1, p2) => {
    return (
      (Math.atan2(p1.y - centerPoint.y, p1.x - centerPoint.x) * 180) /
        Math.PI -
      (Math.atan2(p2.y - centerPoint.y, p2.x - centerPoint.x) * 180) /
        Math.PI
    );
  };

  sorted = sorted.sort(sortByAngle);
  if(bUseArray)
    sorted = formatPoints(sorted,'array')

  return sorted;
}

function formatPoints(pts,modeWanted){
  modeWanted = modeWanted == null ? 'properties' : modeWanted
  let fmap = modeWanted == 'properties' ? function(p){return {x:p[0],y:p[1]}} : function(p){return [p.x,p.y]}
  return pts.map(fmap)
}

function paintBlobs(dc,aPolys,aClrs,dir,n,fVary,sd){
	// dir 0 = either(default), -1 shrink, +1 enlarge
	n = n == null ? 100 : n
	for(let i=0;i < n;i++){
		for(let j=0;j < aPolys.length;j++){
			let ff = typeof fVary == 'function' ? fVary(j,i) : fVary
			let fdir = typeof dir == 'function' ? dir(j,i) : dir
			paintWaterColorBlob2(dc,aPolys[j],aClrs[j],i,i+1,fdir,ff,sd)
		}
	}
}

function paintPolys(dc,aPolys,aClrs,op){
	op = op == null ? 'f' : op
	for(let i=0;i < aPolys.length;i++){
		dc.strokeStyle = dc.fillStyle = aClrs[i]
		drawCurve(dc,aPolys[i],null,op,true)
	}
}

function paintWaterColorBlob(dc,pts,c,a,nBase,n,fVary){
  a = a == null ? .04 : a
  c = c == null ? [255,255,255] : c
  nBase = nBase == null ? 5 : nBase
  n = n == null ? 25 : n
  fVary = fVary == null ? .8 : fVary

  let o = processPoints(pts)
  dc.fillStyle = rgbToString(c,a)
  ptsq = deformEdgesNormal(pts,nBase,fVary)
  for(let i=0;i<n;i++){
    let ptsqb = deformEdgesNormal(ptsq,4,fVary)
    if(i == n-1)
      dc.fillStyle = rgbToString(c,(a*.25).toFixed(3))
    // dc.save()
    // dc.beginPath()
    // for(let j=0;j < 500;j++){
    //   let pt = getRandomPointInPoly(ptsq)
    //   dc.arc(pt.x, pt.y, o.r0*.1, 0, Math.PI*2)
    // }
    // dc.clip()
    drawCurve(dc,ptsqb,0,'f',true)
    // dc.restore()
  }
}

function paintWaterColorBlob2(dc,pts,c,iStart,iStop,dir,fVary,sd){
	iStart = iStart == null ? 0 :  iStart
	iStop = iStop == null ? 100 :  iStop
	fVary = fVary == null ? .1 : fVary
  let pts2 = deformEdges(pts,sd,2,null,dir,fVary)
  // drawCurve(dc,pts,null,'f',true)
  if(Array.isArray(c))
    c = {r:c[0],g:c[1],b:c[2]}
  let tc = tinycolor(c)
  let a,ptsc
  let pts3 = pts2
  for(let i=iStart;i < iStop;i++){
  	if(i==0)
  		a = 1//.85
  	else if(i < 7)
  		a = .5
  	else
  		a = .035
	  tc.setAlpha(a)
	  dc.fillStyle = tc.toRgbString()
	  if(i > 0)
	  	pts3 = deformEdges(pts2,sd+i,i < 7 ? 2 : 4,1.25,dir,fVary)
  	ptsc = distance(pts3[0],pts3[1]) > 2 ? getCurvePoints(pts3, 0.2, true, 4) : pts3
  	drawCurve(dc,ptsc,null,'f',true)
  	if(i < iStop - 1){
	  	let c2 = varyColour(c,i < 7 ? 7 : 40)
	  	tc = tinycolor(c2)
  	}
  }
}

function drawFuzzyCircle(dc,x,y,r,b){
  var grd = dc.createRadialGradient(x, y, r*.2, x, y, r);
  if(b){
    grd.addColorStop(0, "rgba(205,255,200,.75)");
    grd.addColorStop(.1, "rgba(0,198,255,.7)");
  }
  else
    grd.addColorStop(0, "rgba(100,198,255,.5)");
  grd.addColorStop(.9, "rgba(200,255,255,.1)");
  grd.addColorStop(1, "rgba(255,255,255,0)");
  dc.fillStyle = grd;
  // dc.fillRect(x-r, y-r, 2*r, 2*r);
  dc.beginPath();
  dc.ellipse(x,y,r,r,0,0,2*Math.PI);
  dc.fill()
}

function getRandomPointInPoly(pts,o){
  if(o == null)
    o = processPoints(pts)
  let x,y,bOutside = true
  while(bOutside){
    x = random(o.xmin,o.xmax)
    y = random(o.ymin,o.ymax)
    bOutside = !isPointInPoly(pts,{x:x,y:y})
  }
  return {x:x,y:y}
}

function isPointInPoly(pts,pt) {
  let i,j,l,c;
  for(c = false, i = -1, l = pts.length, j = l - 1; ++i < l; j = i)
        ((pts[i].y <= pt.y && pt.y < pts[j].y) || (pts[j].y <= pt.y && pt.y < pts[i].y)) &&
        (pt.x < (pts[j].x - pts[i].x) * (pt.y - pts[i].y) / (pts[j].y - pts[i].y) + pts[i].x) &&
        (c = !c);
  return c;
};


function getSubTriangle(pts,s,f){
	f = f == null ? random(.5,.9) : f

	let pts2 = []
	for(let i=0;i<3;i++){
		pts2.push(lerpPath(random(),pts))
	}
	return dilatePoints(pts2,f)
}

function getSubPoly(pts,s,f,n){
	f = f == null ? random(.5,.9) : f
	n = n == null ? 5 : n
	
  if(s)
    randSeed(s)
	let af = []
	for(let i=0;i<n;i++){
		af.push(random())
	}
	af = af.sort(function(a,b){return a-b})

	let pts2 = []
	for(let i=0;i<n;i++){
		pts2.push(lerpPath(af[i],pts))
	}
	return dilatePoints(pts2,f)
}

function deformEdgesNormal(pts,n,fVary,bClosed){
  n = n == null ? 1 : n // number of iterations
  bClosed = bClosed == null ? true : bClosed
  fVary = fVary == null ? .5 : fVary // how much to change
  if(fVary === 0)
    return clonePoints(pts)
  let j,pts2 = []
  for(let i=0;i<pts.length;i++){
    pts2.push(clonePoint(pts[i]))
    if(!bClosed && i == pts.length-1)
      break
    j = i == pts.length - 1 ? 0 : i+1
    if(pts2[pts2.length-1].variance == null)
      pts2[pts2.length-1].variance = random(.5,2)
    pts2[pts2.length-1].variance *= .9*random(.9,1.1)
    let pta = lerp(.5,pts[i],pts[j])
    let d = distance(pts[i],pts[j])*fVary*pts2[pts2.length-1].variance
    pta.x = randomNormalRange(pta.x-d,pta.x+d)
    pta.y = randomNormalRange(pta.y-d,pta.y+d)
    pta.variance = pts2[pts2.length-1].variance*random(.9,1.1)
    pts2.push(pta)
  }
  if(n > 1)
    pts2 = deformEdgesNormal(pts2,n-1,fVary,bClosed)
  return pts2
}

function deformEdges(pts,s,n,m,dir,fVary){
	n = n == null ? 1 : n
	m = m == null ? 1 : m
	fVary = fVary == null ? .1 : fVary
	// dir 0 = either(default), -1 shrink, +1 enlarge
	dir = dir == null ? 0 : dir
	if(fVary === 0)
		return clonePoints(pts)
	if(s)
		randSeed(s)
	let pts2 = []
	let o = processPoints(pts)
	let ptCenter = {x:o.xa,y:o.ya}
	let j,d,fd,pa,nn,ff,pt,fd2,dPoints
	let afd2 = makeRandomList(0,fVary,pts.length,true,(s==null?random():s)+143,100)
	for(let i=0;i<pts.length;i++){
		j = i == pts.length - 1 ? 0 : i+1
		dPoints = distance(pts[i],pts[j])
		if(dPoints == 0){
			pts2.push(j==0 ? pts2[0] : pts[i])
			continue
		}

		pt = {x:pts[i].x,y:pts[i].y}
		fd2 = afd2[i]

		ff = random() < .5 ? 1 : -1
		if(dir != 0) ff = -dir
		nn = vectorFrom(pt,ptCenter)
		pt.x += ff*m*fd2*nn.x
		pt.y += ff*m*fd2*nn.y

		// add new point in between
		fd = random(.3,.7)
		pa = lerp(fd,pt,pts[j])
		d = Math.min(distance(pa,ptCenter),dPoints)
		nn = normalAtPointOnPath(fd,[pt,pts[j]])
		d = d * fd2
		ff = random() < .5 ? 1 : -1
		if(dir != 0) ff = -dir
		pa.x += ff*m*d*nn.x
		pa.y += ff*m*d*nn.y

		pts2.push(pt)
		pts2.push(pa)
	}
	if(n > 1)
		pts2 = deformEdges(pts2,null,n-1,m,dir,fVary)
	return pts2
}

function translatePoints(pts,dx,dy){
	let pts2 = []
	for(let i=0;i<pts.length;i++){
		pts2[i] = {x:pts[i].x+dx,y:pts[i].y+dy}
	}
	return pts2
}

function addIntermediatePoints(pts,n){
  let pts2 = []
  for(let i=0;i<n;i++){
    let pt = lerpPath(i/(n-1),pts)
    pts2.push(pt)
  }
  return pts2
}

function getPointNearestCoordinate(pts,pt){
  // set either x or y of pt, leave the other null
  let iMin = -1
  let dMin = Infinity
  let d
  for(let i=0;i<pts.length;i++){
    if(pt.x == null)
      d = Math.abs(pt.y-pts[i].y)
    else
      d = Math.abs(pt.x-pts[i].x)
    if(d<dMin){
      dMin=d
      iMin=i
    }
  }
  return pts[iMin]
}

function addNoiseToPoints(pts,dx1,dy1,dx2,dy2,bCumulative,skewx,skewy,bKeepFixedEnds){
  // dx1 is variation in x at beginning, dx2 is at end
  // skewx is in range [-.5,+.5]
  skewx = skewx == null ? 0 : skewx
  skewy = skewy == null ? 0 : skewy
  bKeepFixedEnds = bKeepFixedEnds == null ? false : bKeepFixedEnds
  if(dy2 == null && dx2 != null){
    bCumulative = dx2
    dx2 = null
  }
  dx2 = dx2 == null ? dx1 : dx2
  dy2 = dy2 == null ? dy1 : dy2
  bCumulative = bCumulative == null ? false : bCumulative
  let pts2 = []
  let cx,cy
  cx=cy=0
  let o = processPoints(pts)
  for(let i=0;i<pts.length;i++){
    let dx = map(i,0,pts.length-1,dx1,dx2)
    let dy = map(i,0,pts.length-1,dy1,dy2)
    cx += dx*(random()-.5+skewx)
    cy += dy*(random()-.5+skewy)
    if(bKeepFixedEnds && (i==0 || i==pts.length-1))
      pts2[i] = {x:pts[i].x,y:pts[i].y}
    else
      pts2[i] = {x:pts[i].x+cx,y:pts[i].y+cy}
    if(bKeepFixedEnds){
      pts2[i].x = constrain(pts2[i].x,o.xmin,o.xmax)
      pts2[i].y = constrain(pts2[i].y,o.ymin,o.ymax)
    }
    if(!bCumulative)
      cx=cy=0
  }
  return pts2
}

function transformPoints(pts,x0,y0,fx,fy){
  x0 = x0 == null ? 0 : x0
  y0 = y0 == null ? 0 : y0
  fx = fx == null ? 1 : fx
  fy = fy == null ? 1 : fy
  // change coords to those taken from x0,y0 and stretched by fx and fy
  let pts2 = []
  for(let i=0;i<pts.length;i++){
    pts2[i] = {x:(pts[i].x-x0)*fx,y:(pts[i].y-y0)*fy}
  }
  return pts2
}

function bezierParametricPath(pts,n,f1,f2){
  n = n == null ? 10 : n
  f1 = f1 == null ? 0 : f1
  f2 = f2 == null ? 1 : f2
  let ptsr = []
  for(let i=0; i < n; i++){
    let f = lerp(i/(n-1),f1,f2)
    ptsr.push(bezierParametric(f,pts))
  }
  return ptsr
}

function bezierParametric(t,pts){
  // 3 or 4 pts
  let pt = {x:0,y:0}
  let t1 = 1-t
  if(pts.length == 3){
    pt.x = t1*t1*pts[0].x + 2*t1*t*pts[1].x + t*t*pts[2].x
    pt.y = t1*t1*pts[0].y + 2*t1*t*pts[1].y + t*t*pts[2].y
  }
  else if(pts.length == 4){
    pt.x = t1*t1*t1*pts[0].x + 3*t1*t1*t*pts[1].x+3*t1*t*t*pts[2].x+t*t*t*pts[3].x
    pt.y = t1*t1*t1*pts[0].y + 3*t1*t1*t*pts[1].y+3*t1*t*t*pts[2].y+t*t*t*pts[3].y
  }
  return pt
}

function rotatePoints(pts,ptc,angle){
	let pts2 = []
	if(ptc == null){
		let o = processPoints(pts)
		ptc = {x:o.xmin+o.width/2,y:o.ymin+o.height/2}
	}
	for(let i=0;i<pts.length;i++){
		let ptr = rotate(ptc,pts[i],angle)
		pts2.push(ptr)
	}
	return pts2
}

function getPointsEnvelope(o0){
  let ptsL = []
  let ptsR = []
  for(let y = o0.miny; y < o0.maxy; y++){
    if(o0[y]){
      ptsL.push({x:o0[y].min,y:y})
      ptsR.push({x:o0[y].max,y:y})
    }
  }
  return [ptsL,ptsR]
}

function storePointsEnvelope(pts,bVertical,o0){
  bVertical = bVertical == null ? true : bVertical
  let o = processPoints(pts)
  let y0 = Math.floor(o.ymin)
  let y1 = Math.round(o.ymax)
  let o2 = o0 || {}
  if(o2.miny == null)
    o2.miny = Infinity
  if(o2.maxy == null)
    o2.maxy = -Infinity
  for(let i=0;i<pts.length;i++){
    let y = Math.round(pts[i].y)
    o2.miny = Math.min(o2.miny,y)
    o2.maxy = Math.max(o2.maxy,y)
    if(o2[y]==null)
      o2[y] = {min:Infinity,max:-Infinity}
    o2[y].min = Math.min(o2[y].min,pts[i].x)
    o2[y].max = Math.max(o2[y].max,pts[i].x)
  }
  return o2
}

function getEllipsePoints(xc,yc,r0x,r0y,rot,a1,a2,n){
  // does include last point which overlays the first
  if(xc.x != null){
    yc = xc.y
    r0x = xc.r1
    r0y = xc.r2
    rot = xc.rot
    a1 = xc.a1
    a2 = xc.a2
    n = xc.n
    xc = xc.x
  }
  n = n == null ? 96 : n
  rot = rot == null ? 0 : rot
  a1 = a1 == null ? 0 : a1
  a2 = a2 == null ? 2*Math.PI : a2
  let a
  let pts = []
  let fr = 1
  for(let i=0;i<n;i++){
    a = lerp(i/n,a1,a2)
    let x1 = xc + r0x * Math.cos(a)
    let y1 = yc + r0y * Math.sin(a)
    pts.push({x:x1,y:y1})
  }
  if(Math.abs(a2-a1-2*Math.PI) < .001)
    pts.push(clonePoint(pts[0]))
  if(rot != 0)
    pts = rotatePoints(pts,{x:xc,y:yc},rot)
  return pts
}

function clonePoints(pts){
	let pts2 = []
	for(let i=0;i<pts.length;i++){
		pts2[i] = clonePoint(pts[i])
	}
	return pts2
}

function clonePoint(pt){
  return Object.assign({}, pt)
  // return {x:pt.x,y:pt.y}
}

function makePolyRounder(pts,f){
  // move points so they have more similar distance from middle
  f = f == null ? .9 : f
  let o = processPoints(pts)
  var pts2 = [];
  for(let i=0;i<pts.length;i++){
    let d = distance({x:o.xa,y:o.ya},pts[i])
    let vecUnit = vectorFrom({x:o.xa,y:o.ya},pts[i],true)
    let rTarget = lerp(f,d,o.r0)
    pts2[i] = {x:o.xa + rTarget*vecUnit.x,y:o.ya + rTarget*vecUnit.y}
  }  
  return pts2
}

function dilatePoints(pts,f,bX,bY,bAbs){
  f = f || 1
  bX = bX == null ? true : bX
  bY = bY == null ? true : bY
  bAbs = bAbs == null ? false : bAbs
  let o = processPoints(pts)
  var pts2 = [];
  for(let i=0;i<pts.length;i++){
    pts2[i] = {x:pts[i].x,y:pts[i].y}
    if(bAbs){
    	// let vec = vectorFrom({x:o.xa,y:o.ya},pts[i])
    	let vecUnit = vectorFrom({x:o.xa,y:o.ya},pts[i],true)
	    if(bX)
	      pts2[i].x = pts[i].x - vecUnit.x*f
	    if(bY)
	      pts2[i].y = pts[i].y - vecUnit.y*f
    }
    else{
	    if(bX)
	      pts2[i].x = (pts2[i].x - o.xa)*f + o.xa
	    if(bY)
	      pts2[i].y = (pts2[i].y - o.ya)*f + o.ya
    }
  }
  return pts2
}

function getCurvePoly(poly,w0,w1,w2){
	// given a set of points that represents an unclosed curve convert it into
	// a closed shape whose width varies from w0 at the start to w1 at the end

	var newPolygont = [];
	var newPolygonb = [];
	var dir = {x:0,y:0};
	var t = {x:0,y:0};
	// var b = {x:0,y:0};
	let i,w,ph = Math.floor(poly.length/2)
	for(i=0; i < poly.length; i++){
    if(w2 == null)
		  w = map(i,0,poly.length-1,w0,w1)
    else{
      w = map3(i,0,ph,poly.length-1,w0,w1,w2,easeInOutQuad)
    }
		// find direction of line
		if(i==0)
			dir = vectorFrom(poly[i],poly[i+1],true)
		else if(i == poly.length-1)
			dir = vectorFrom(poly[i-1],poly[i],true)
		else
			dir = vectorFrom(poly[i-1],poly[i+1],true)
		t.x = -dir.y*w/2;
		t.y =  dir.x*w/2;
		// b.x =  dir.y*w/2;
		// b.y =  dir.x*w/2;
		newPolygont.push({x:poly[i].x+t.x,y:poly[i].y+t.y});
		newPolygonb.push({x:poly[i].x-t.x,y:poly[i].y-t.y});
	}
	var polyn = [];
	for(i=0; i < newPolygont.length; i++){
		polyn.push(newPolygont[i]);
	}
	// go backwards thru other set of points
	for(i=newPolygonb.length-1; i >= 0; i--){
		polyn.push(newPolygonb[i]);
	}
	return polyn;
}

function getCurvePoints(pts0, tension, isClosed, numOfSegments) {

    var pts=[]
    var bxy = false;
    if(pts0[0] && pts0[0].x != null){
      bxy = true;
      for(let i=0;i<pts0.length;i++){
        pts.push(pts0[i].x)
        pts.push(pts0[i].y)
      }
    }
    else
      pts=pts0

    // use input value if provided, or use a default value   
    tension = tension != null ? tension : 0.5;
    isClosed = isClosed ? isClosed : false;
    numOfSegments = numOfSegments ? numOfSegments : 16;

    var _pts = [], res = [],    // clone array
        x, y,           // our x,y coords
        t1x, t2x, t1y, t2y, // tension vectors
        c1, c2, c3, c4,     // cardinal points
        st, t, i;       // steps based on num. of segments

    // clone array so we don't change the original
    //
    _pts = pts.slice(0);

    // The algorithm require a previous and next point to the actual point array.
    // Check if we will draw closed or open curve.
    // If closed, copy end points to beginning and first points to end
    // If open, duplicate first points to befinning, end points to end
    if (isClosed) {
        _pts.unshift(pts[pts.length - 1]);
        _pts.unshift(pts[pts.length - 2]);
        _pts.unshift(pts[pts.length - 1]);
        _pts.unshift(pts[pts.length - 2]);
        _pts.push(pts[0]);
        _pts.push(pts[1]);
    }
    else {
        _pts.unshift(pts[1]);   //copy 1. point and insert at beginning
        _pts.unshift(pts[0]);
        _pts.push(pts[pts.length - 2]); //copy last point and append
        _pts.push(pts[pts.length - 1]);
    }

    // ok, lets start..

    // 1. loop goes through point array
    // 2. loop goes through each segment between the 2 pts + 1e point before and after
    for (i=2; i < (_pts.length - 4); i+=2) {
        for (t=0; t <= numOfSegments; t++) {

            // calc tension vectors
            t1x = (_pts[i+2] - _pts[i-2]) * tension;
            t2x = (_pts[i+4] - _pts[i]) * tension;

            t1y = (_pts[i+3] - _pts[i-1]) * tension;
            t2y = (_pts[i+5] - _pts[i+1]) * tension;

            // calc step
            st = t / numOfSegments;

            // calc cardinals
            c1 =   2 * Math.pow(st, 3)  - 3 * Math.pow(st, 2) + 1; 
            c2 = -(2 * Math.pow(st, 3)) + 3 * Math.pow(st, 2); 
            c3 =       Math.pow(st, 3)  - 2 * Math.pow(st, 2) + st; 
            c4 =       Math.pow(st, 3)  -     Math.pow(st, 2);

            // calc x and y cords with common control vectors
            x = c1 * _pts[i]    + c2 * _pts[i+2] + c3 * t1x + c4 * t2x;
            y = c1 * _pts[i+1]  + c2 * _pts[i+3] + c3 * t1y + c4 * t2y;

            //store points in array
            res.push(x);
            res.push(y);

        }
    }

    if(bxy){
      // convert back to objects with x,y properties
      var poly2 = []
      for(let i=0;i<res.length;i+=2)
        poly2.push({x:res[i],y:res[i+1]})
      res = poly2
    }
    return res;
}

function drawMultiStyleCurve(dc,poly, clr0, a0, lw0, clr1, a1, lw1) {
  clr0 = clr0 == null ? [0,0,0] : clr0
  clr1 = clr1 == null ? [0,0,0] : clr1
  a0 = a0 == null ? 1 : a0
  a1 = a1 == null ? 1 : a1
  lw0 = lw0 == null ? 1 : lw0
  lw1 = lw1 == null ? 1 : lw1

  var i, f, clr, lw, a;
  dc.save();
  dc.lineJoin = 'round'//"round";
  dc.lineCap = 'round' // butt round square

  var fColor = function(f,c0,c1,a){
    a = a == null ? 1 : a
    let r = Math.floor(c0[0]+(c1[0]-c0[0])*f);
    let g = Math.floor(c0[1]+(c1[1]-c0[1])*f);
    let b = Math.floor(c0[2]+(c1[2]-c0[2])*f);
    if(a==1)
      return `rgb(${r},${g},${b})`
    return `rgba(${r},${g},${b},${a})`
  }
  let bClosed = poly[0].x == poly[poly.length-1].x && poly[0].y == poly[poly.length-1].y
  for (i = 0; i < poly.length - 1; i++) {
    f = poly.length - 2 == 0 ? .5 : i / (poly.length - 2 + (bClosed ? 1 : 0));
    let lwn = (typeof lw0 == 'function') ? lw0(f) : lerp(f,lw0,lw1)
    dc.lineWidth = Number(lwn.toFixed(2))
    a = lerp(f,a0,a1)
    if(typeof clr0 == 'function'){
      clr = clr0(f,poly[i].x)
    }
    else
      clr = fColor(f,clr0, clr1,a);
    dc.beginPath();
    dc.moveTo(poly[i].x, poly[i].y);
    dc.lineTo(poly[i + 1].x, poly[i + 1].y);
    // dc.closePath()
    dc.strokeStyle = clr;
    dc.stroke();
  }
  dc.restore();
}

function makePoly(x,y,r,n){
	n = n || 3
	var pts = []
  for(let i=0;i<n;i++){
    var angle = i/n*2*Math.PI
    var x2 = x + r*Math.cos(angle)
    var y2 = y + r*Math.sin(angle)
    pts.push({x:x2,y:y2})
  }
  return pts
}

function makeRotatedRectangle(xm,ym,w,h,angle,distortion){
	angle = angle == null ? 0 : angle
	var pts = [{x:xm-w/2,y:ym-h/2},{x:xm+w/2,y:ym-h/2},{x:xm+w/2,y:ym+h/2},{x:xm-w/2,y:ym+h/2}]
	var ptc = {x:xm,y:ym}
	if(distortion != null){
		pts = pts.map(function(pt){
			pt.x += (random()-.5)*w*distortion*.5
			pt.y += (random()-.5)*h*distortion*.5
			return pt
		})
	}
	for(let i=0;i<pts.length;i++){
		let ptr = rotate(ptc,pts[i],angle)
		pts[i] = ptr
	}
	return pts
}

function rotate(ptc, pt, angle) {
    var cos = Math.cos(angle),
        sin = Math.sin(angle),
        nx = (cos * (pt.x - ptc.x)) + (sin * (pt.y - ptc.y)) + ptc.x,
        ny = (cos * (pt.y - ptc.y)) - (sin * (pt.x - ptc.x)) + ptc.y;
    return {x:nx, y:ny};
}

function clipPoly(dc,pts){
  dc.save()
  dc.beginPath()
  for(i=0;i<pts.length;i++){
    x = pts[i].x
    y = pts[i].y
    if(i==0)
      dc.moveTo(x,y)
    else
      dc.lineTo(x,y)
  }
  dc.closePath()
  dc.clip()
}

function drawLine(dc,x1,y1,x2,y2,c){
  if(c)
    dc.strokeStyle = c
  dc.beginPath()
  dc.moveTo(x1,y1)
  dc.lineTo(x2,y2)
  dc.stroke()
}

function drawCurve(dc,pts,pStart,op,bClose){
  let i,x,y;
  pStart = pStart == null ? 0 : pStart
  bClose = bClose == null ? false : bClose

  dc.beginPath();
  for(i=pStart;i<pts.length;i++){
    x = Math.round(pts[i].x)
    y = Math.round(pts[i].y)
    if(i==pStart)
      dc.moveTo(x,y);
    else
      dc.lineTo(x,y);
  }
  if(bClose){
  	dc.lineTo(pts[0].x,pts[0].y)
    dc.closePath()
  }
  if(op == null || op == 's' || op == 'sf' || op == 'fs')
    dc.stroke()
  if(op == 'f' || op == 'sf' || op == 'fs')
    dc.fill()
}

function scaleInDirection(dc,pt,f){
  let v = vectorFrom(pt,null,true)
  dc.scale(Math.abs(v.x)*f,Math.abs(v.y)*f)
}

function drawDot(dc,x,y,r,r2,rot){
  r2 = r2 == null ? r : r2
  rot = rot == null ? 0 : rot
  dc.beginPath()
  dc.ellipse(x,y,r,r2,rot,0,2*Math.PI)
  dc.fill()
}

function drawHeart(context, x, y, width, height) {
  context.save();
  context.beginPath();
  var topCurveHeight = height * 0.3;
  context.moveTo(x, y + topCurveHeight);
  // top left curve
  context.bezierCurveTo(
    x, y,
    x - width / 2, y,
    x - width / 2, y + topCurveHeight
  );

  // bottom left curve
  context.bezierCurveTo(
    x - width / 2, y + (height + topCurveHeight) / 2,
    x, y + (height + topCurveHeight) / 2,
    x, y + height
  );

  // bottom right curve
  context.bezierCurveTo(
    x, y + (height + topCurveHeight) / 2,
    x + width / 2, y + (height + topCurveHeight) / 2,
    x + width / 2, y + topCurveHeight
  );

  // top right curve
  context.bezierCurveTo(
    x + width / 2, y,
    x, y,
    x, y + topCurveHeight
  );

  context.closePath();
  // context.fillStyle = "rgb(220,0,40)";
  context.fill();
  context.restore();
}

function blob1(dc,x,y,r){
  var n = 20
  for(let i=0;i<n;i++){
    dc.beginPath();
    var angle = random()*2*Math.PI
    var x2 = x + (random()-.5)*r/3 + Math.cos(angle) * r/2
    var y2 = y + (random()-.5)*r/3 + Math.sin(angle) * r/2
    if(i==0)
      dc.arc(x, y, r/1.2, 0, 2*Math.PI, false);
    else
      dc.arc(x2, y2, 1+r*(n-i)/n, 0, 2*Math.PI, false);
    dc.fill()
  }
}

function roundedPoly(ctx,points,radius){
    var i, x, y, len, p1, p2, p3, v1, v2, sinA, sinA90, radDirection, drawDirection, angle, halfAngle, cRadius, lenOut;
    var asVec = function (p, pp, v) { // convert points to a line with len and normalised
        v.x = pp.x - p.x; // x,y as vec
        v.y = pp.y - p.y;
        v.len = Math.sqrt(v.x * v.x + v.y * v.y); // length of vec
        v.nx = v.x / v.len; // normalised
        v.ny = v.y / v.len;
        v.ang = Math.atan2(v.ny, v.nx); // direction of vec
    }
    v1 = {};
    v2 = {};
    len = points.length;                         // number points
    p1 = points[len - 1];                        // start at end of path
    for (i = 0; i < len; i++) {                  // do each corner
        p2 = points[(i) % len];                  // the corner point that is being rounded
        p3 = points[(i + 1) % len];
        // get the corner as vectors out away from corner
        asVec(p2, p1, v1);                       // vec back from corner point
        asVec(p2, p3, v2);                       // vec forward from corner point
        // get corners cross product (asin of angle)
        sinA = v1.nx * v2.ny - v1.ny * v2.nx;    // cross product
        // get cross product of first line and perpendicular second line
        sinA90 = v1.nx * v2.nx - v1.ny * -v2.ny; // cross product to normal of line 2
        angle = Math.asin(sinA);                 // get the angle
        radDirection = 1;                        // may need to reverse the radius
        drawDirection = false;                   // may need to draw the arc anticlockwise
        // find the correct quadrant for circle center
        if (sinA90 < 0) {
            if (angle < 0) {
                angle = Math.PI + angle; // add 180 to move us to the 3 quadrant
            } else {
                angle = Math.PI - angle; // move back into the 2nd quadrant
                radDirection = -1;
                drawDirection = true;
            }
        } else {
            if (angle > 0) {
                radDirection = -1;
                drawDirection = true;
            }
        }
        halfAngle = angle / 2;
        // get distance from corner to point where round corner touches line
        lenOut = Math.abs(Math.cos(halfAngle) * radius / Math.sin(halfAngle));
        if (lenOut > Math.min(v1.len / 2, v2.len / 2)) { // fix if longer than half line length
            lenOut = Math.min(v1.len / 2, v2.len / 2);
            // ajust the radius of corner rounding to fit
            cRadius = Math.abs(lenOut * Math.sin(halfAngle) / Math.cos(halfAngle));
        } else {
            cRadius = radius;
        }
        x = p2.x + v2.nx * lenOut; // move out from corner along second line to point where rounded circle touches
        y = p2.y + v2.ny * lenOut;
        x += -v2.ny * cRadius * radDirection; // move away from line to circle center
        y += v2.nx * cRadius * radDirection;
        // x,y is the rounded corner circle center
        ctx.arc(x, y, cRadius, v1.ang + Math.PI / 2 * radDirection, v2.ang - Math.PI / 2 * radDirection, drawDirection); // draw the arc clockwise
        p1 = p2;
        p2 = p3;
    }
    ctx.closePath();
}

function getColorBounds(dSrc,v){
  var data = dSrc.data;
  var bounds = {left:Infinity,right:-Infinity,top:Infinity,bottom:-Infinity};
  for(let x=0;x<dSrc.width;x++){
    for(let y=0;y<dSrc.height;y++){
      let index = (x + y * dSrc.width) * 4;
      if(dSrc.data[index] == v){
        bounds.left = Math.min(bounds.left,x);
        bounds.top = Math.min(bounds.top,y);
        bounds.right = Math.max(bounds.right,x);
        bounds.bottom = Math.max(bounds.bottom,y);
      }
    }
  }
  return bounds;
}

function darkenEdgesCanvas(c,f,bInvert){
	f = f == null ? .1 : f
	bInvert = bInvert == null ? false : bInvert
	let de = Math.round(Math.min(c.width,c.height)*f)
	let x,y,w,h,edge
	w = c.width
	h = c.height
	let dc = c.getContext('2d')
  var myData = dc.getImageData(0, 0, w, h);
  let v0 = bInvert ? 255 : 0
  let v1 = bInvert ? 0 : 255
	for(x=0;x<w;x++){
		for(y=0;y<h;y++){
			edge = Math.min(x,y,w-x,h-y)
			let vMax = edge > de ? 255 : map(edge,0,de,v0,v1)
			let vals = getPixelValues(myData,x,y)
			if(bInvert){
				if(vals[0] < vMax && edge <= de){
					dc.fillStyle = 'rgb('+vMax+','+vMax+','+vMax+')'
					dc.fillRect(x,y,1,1)
				}
			}
			else
				if(vals[0] > vMax){
					dc.fillStyle = 'rgb('+vMax+','+vMax+','+vMax+')'
					dc.fillRect(x,y,1,1)
				}
		}
	}
}

function makeNoiseCanvas(c,w,h,t,s,n,dx,dy,fDarkenEdges,bInvert){
	s = s == null ? 1 : s
	n = n == null ? 1000 : n
	dx = dx == null ? 0 : dx
	dy = dy == null ? 0 : dy
	bInvert = bInvert == null ? false : bInvert
	fDarkenEdges = fDarkenEdges == null ? 0 : fDarkenEdges
	var dc
	let bMadeCanvas = false
	if(c == null){
	  var c = document.createElement('canvas')
	  c.width = w
	  c.height = h
  	dc = c.getContext('2d')

	  dc.fillStyle = bInvert ? 'white' : 'black'
	  dc.fillRect(0,0,w,h)
	  bMadeCanvas = true
	}
	else
  	dc = c.getContext('2d')

  let i,j,r,x,y,rsq
  r = Math.max(Math.min(w,h)/100*s,.04)
  rsq = Math.pow(r,.5)

  if(t == 'splotches'){
  	for(i=0;i<25;i++){
  		let dx2 = random(w) - w/2
  		let dy2 = random(h) - h/2
  		c = makeNoiseCanvas(c,w,h,'dotsFade',s*.4,n*.4,dx2,dy2,0)//,bInvert)
  	}
	  if(fDarkenEdges > 0)
  		darkenEdgesCanvas(c,fDarkenEdges,bInvert)
  	return c
  }
  else if(t == 'roughedges'){
  	if(bMadeCanvas){
		  dc.fillStyle = bInvert ? 'black' : 'white'
		  dc.fillRect(0,0,w,h)
  	}
  	let w2 = w*.5 - Math.max(w,h)*.04
  	let h2 = h*.5 - Math.max(w,h)*.04
  	let path = [{x:-w2,y:-h2},{x:w2,y:-h2},{x:w2,y:h2},{x:-w2,y:h2},{x:-w2,y:-h2}]
  	let nc = 42
  	for(i=0;i<nc;i++){
  		let f = i/nc + .5*(random()-.5)/nc
  		let ptOutside = lerpPath(f,path)
  		ptOutside.x += (random()-.5)*w*.1
  		ptOutside.y += (random()-.5)*w*.1
  		c = makeNoiseCanvas(c,w,h,'dotsFade',s*.3,n*random(.4,.7),ptOutside.x,ptOutside.y,0,!bInvert)
	  		// darkenEdgesCanvas(c,random(.2),bInvert)
  	}
	  if(fDarkenEdges > 0)
  		darkenEdgesCanvas(c,fDarkenEdges,bInvert)
  	return c
  }
  else if(t == 'perlin'){
  	let field = makeFlowField(w,h,null,r*10) // between -Math.PI and +Math.PI
  	for(x=0;x<w;x++){
  		for(y=0;y<h;y++){
  			let v = Math.floor(map(field[x][y],-Math.PI,Math.PI,0,255))
  			dc.fillStyle = 'rgb('+v+','+v+','+v+')'
  			dc.fillRect(x,y,1,1)
  		}
  	}
	  if(fDarkenEdges > 0)
  		darkenEdgesCanvas(c,fDarkenEdges,bInvert)
  	return c
  }
  else if(t == 'drips'){
  	let state = 0
	  let a = random(.7,1)
	  let r1 = r
	  let x0,y0
	  let n2 = n * Math.pow(w/100,2)
  	for(i=0;i<n2*3;i++){
  		if(state == 0){
  			a = random(.7,1)
	  		x = random(-.1*w,1.1*w)
	  		y = random(-.1*h,.9*h)
	  		r1 = random(.3,1.2)*r
	  		x0 = x
	  		y0 = y
	  		state++
  		}
  		else if(state == 1){
  			a = random() < .7 ? a : random(.8,1.1)*a
  			x += random() < .85 ? 0 : (random()-.5)*2
  			y += 1
  			r1 = random() < .9 ? r1 : r1*.9
  			if(random() < .03 || a < .05 || r1 < .4){
  				if(random() < .4)
  					state = 0
  				else{
  					x = x0 + random(-1,1)
  					y = y0 + random(-2,2)
  				}
  			}
  		}
  		let a1 = random() < .9 ? a : a*.2
  		dc.beginPath()
 			dc.fillStyle = (bInvert ? 'rgba(0,0,0,' : 'rgba(255,255,255,') + a1.toFixed(1) + ')'
		  dc.ellipse(dx+x,dy+y,r1,r1,0,0,2*Math.PI)
		  dc.fill()
  	}
	  if(fDarkenEdges > 0)
  		darkenEdgesCanvas(c,fDarkenEdges,bInvert)
  	return c
  }

  dc.fillStyle = bInvert ? 'rgba(0,0,0,.6)' : 'rgba(255,255,255,.6)'
  dc.lineWidth = 1

  n = n * (w*h)/(10000)
  for(i=0;i < n;i++){
	  dc.beginPath()
	  if(t == 'dots'){
		  x = random(w)
		  y = random(h)
		  dc.ellipse(dx+x,dy+y,r,r,0,0,2*Math.PI)
		  dc.fill()
	  }
	  else if(t == 'dotsFade'){
		  x = randomNormal(w/2,rsq*20)
		  y = randomNormal(h/2,rsq*20)
		  dc.ellipse(dx+x,dy+y,r,r,0,0,2*Math.PI)
		  dc.fill()
	  }
	  else if(t == 'lines'){
		  x = randomNormal(w/2,rsq*20)
		  y = randomNormal(h/2,rsq*20)
		  len = random(.02,.1)*w*r
		  dc.fillRect(dx+x,dy+y-len/2,1,len)
	  }
	  else if(t == 'linesHorizontal'){
		  x = randomNormal(w/2,rsq*20)
		  y = randomNormal(h/2,rsq*20)
		  len = random(.02,.1)*w*r
		  dc.fillRect(dx+x-len/2,dy+y,len,1)
	  }
  }
  if(fDarkenEdges > 0)
  	darkenEdgesCanvas(c,fDarkenEdges,bInvert)

  return c

  // var myData = dc.getImageData(0, 0, w, h);
  // return myData;
}

function fillPoly(dc,pts){
	drawCurve(dc,pts,null,'f',true)
}

function fillNoisyPoly(dc,pts,nStrength,t,bInvert,size){
	nStrength = nStrength == null ? 1000 : nStrength
  size = size == null ? .6 : size
	t = t == null ? 'drips' : t
	let o = processPoints(pts)
  if(o.width < 1) o.width=1
    if(o.height < 1) o.height=1
  // let cNoise = makeNoiseCanvas(null,o.width,o.height,'lines',.6,4000,0,0,.1)
  let cNoise = makeNoiseCanvas(null,o.width,o.height,t,size,nStrength,0,0,0,bInvert)
  // let cNoise = makeNoiseCanvas(null,o.width,o.height,'perlin',.6,2000,0,0,0)

  var cTemp = document.createElement('canvas')
  cTemp.width = o.width
  cTemp.height = o.height
 	let dcTemp = cTemp.getContext('2d')
 	let pts00 = translatePoints(pts,-o.xmin,-o.ymin)

 	dcTemp.fillStyle = dc.fillStyle
  drawCurve(dcTemp,pts00,null,'f',true)
  setAlphaByCanvasBrightness(dcTemp,cNoise)

  dc.drawImage(cTemp,o.xmin,o.ymin,o.width,o.height)
}

function setAlphaByCanvasBrightness(dc,cAlpha){
	let w = cAlpha.width
	let h = cAlpha.height
 	let dcAlpha = cAlpha.getContext('2d')
	var dAlpha = dcAlpha.getImageData(0, 0, w, h);
	var d = dc.getImageData(0, 0, w, h);
  for(var i = 0; i <= d.data.length; i+=4){
  	d.data[i+3] = Math.min(d.data[i+3],dAlpha.data[i])
  }
	dc.putImageData(d, 0, 0 );
}

function getPaletteOrderForColor(colV,pal){
  // return palette indexes in order most similar to color,
  // colV is rgb(a) array, pal is array of rgb triples
  let ai = pal.map(function(e,i){
    return i
  })
  ai = ai.sort(function(i,j){
    return distance(colV,pal[i]) - distance(colV,pal[j])
  })
  return ai
}


function getPolyColor(dSrc,pts,f,o,bVal){
  f = f == null ? .6 : f
  bVal = bVal == null ? false : bVal
  if(o==null)
    o = processPoints(pts)
  let ptc =  {x:o.xa,y:o.ya}
  let av = [0,0,0,0]
  for(let i=0;i<pts.length;i++){
    let pt = lerp(f,ptc,pts[i])
    let v = getPixelValues(dSrc,Math.floor(pt.x),Math.floor(pt.y))
    for(let j=0;j<4;j++)
      av[j] += v[j] 
  }
  for(let i=0;i<4;i++)
    av[i] = Math.round(av[i]/pts.length)
  if(bVal)
    return av
  return 'rgba('+av[0]+','+av[1]+',' + av[2] + ',' + (av[3]/255).toFixed(2) + ')'
}

function getPointsColor(dSrc,pts,bVal){
  bVal = bVal == null ? false : bVal
  let av = [0,0,0,0]
  for(let i=0;i<pts.length;i++){
    let pt = pts[i]
    let v = getPixelValues(dSrc,Math.floor(pt.x),Math.floor(pt.y))
    for(let j=0;j<4;j++)
      av[j] += v[j] 
  }
  for(let i=0;i<4;i++)
    av[i] = Math.round(av[i]/pts.length)
  if(bVal)
    return av
  return 'rgba('+av[0]+','+av[1]+',' + av[2] + ',' + (av[3]/255).toFixed(2) + ')'
}

function getPixelColor(dSrc,x,y,a,n){
	if(n != null && n != 0){
		let av = getPixelValues(dSrc,x,y,n)
	  if(a == null)
	  	return 'rgb('+av[0]+','+av[1]+',' + av[2] + ')'
	  else	
	  	return 'rgba('+av[0]+','+av[1]+',' + av[2] + ',' + a + ')'
	}
  var data = dSrc.data;
  x = constrain(x,0,dSrc.width-1)
  y = constrain(y,0,dSrc.height-1)
  let index = (x + y * dSrc.width) * 4;
  let rgb
  if(a == null)
  	rgb = 'rgb('+dSrc.data[index]+','+dSrc.data[index+1]+',' + dSrc.data[index+2] + ')'
  else	
  	rgb = 'rgba('+dSrc.data[index]+','+dSrc.data[index+1]+',' + dSrc.data[index+2] + ',' + a + ')'
  return rgb
}

function getColorBrightness(cv){
  var color = tinycolor({r:cv[0],g:cv[1],b:cv[2]})
  return color.getBrightness()
}

function hsvToRgb(h,s,v){
  // h in [0,360], s and v in [0,1]
  let clr0 = tinycolor({h:h,s:s,v:v}).toRgb()
  return [clr0.r,clr0.g,clr0.b]
}

function getPixelValues(dSrc,x,y,n){
	if(n != null && n != 0){
		let av = [0,0,0,0]
		let nc = 0
		for(x0=x-n;x0 <= x+n;x0++){
			for(y0=y-n; y0 <= y+n; y0++){
				let v =  getPixelValues(dSrc,x0,y0)
				nc++
				for(let i=0;i<4;i++)
					av[i] += v[i] 
			}
		}
		for(let i=0;i<4;i++)
			av[i] = Math.round(av[i]/nc)
		return av
	}
  var data = dSrc.data;
  x=Math.round(x)
  y=Math.round(y)
  x = constrain(x,0,dSrc.width-1)
  y = constrain(y,0,dSrc.height-1)
  let index = (x + y * dSrc.width) * 4;
  return [dSrc.data[index],dSrc.data[index+1],dSrc.data[index+2],dSrc.data[index+3]]
}

async function getSubImage(img,x,y,width,height,dMax){
  if(x+width > img.width)
    width = img.width - x
  if(y+height > img.height)
    height = img.height - y
  dMax = dMax == null ? Math.max(width,height) : dMax
  let dWidth,dHeight
  if(height >= width){
    dHeight = dMax
    dWidth = Math.ceil(dMax/height*width)
  }
  else{
    dWidth = dMax
    dHeight = Math.ceil(dMax/width*height)
  }
  var backCanvas = document.createElement('canvas');
  backCanvas.width = dWidth;
  backCanvas.height = dHeight;
  var backCtx = backCanvas.getContext('2d');
  backCtx.drawImage(img, x, y, Math.round(width), Math.round(height), 0, 0, dWidth, dHeight)
  var imgn = await contextToImage(backCtx);
  return imgn;
}

async function getPathSubImage(img,pts,f,bTransparentEdge){
  bTransparentEdge = bTransparentEdge == null ? false : bTransparentEdge
  f = f || 1
  pts = getCurvePoints(pts,null,true,4)
  let imgInner;
  if(bTransparentEdge)
    imgInner = await getPathSubImage(img,pts,f*.5,false)
  pts = dilatePoints(pts,f)
  let oPart = processPoints(pts)
  
  var c=document.createElement('canvas');
  var dc=c.getContext('2d');

  // resize the new canvas to the size of the clipping area
  c.width=oPart.xmax - oPart.xmin;
  c.height=oPart.ymax - oPart.ymin;

  pts = translatePoints(pts,-oPart.xmin,-oPart.ymin)
  dc.save()
  dc.beginPath()
  dc.moveTo(pts[0].x,pts[0].y)
  for(let i=1;i<pts.length;i++){
    dc.lineTo(pts[i].x,pts[i].y)
  }
  dc.closePath()
  dc.clip()

  if(bTransparentEdge)
    dc.globalAlpha = 0.65
  dc.drawImage(img,-oPart.xmin,-oPart.ymin)
  dc.restore()

  if(bTransparentEdge){
    dc.globalAlpha = 1
    dc.drawImage(imgInner, 0,0,imgInner.width,imgInner.height, imgInner.width/2,imgInner.height/2,imgInner.width,imgInner.height);
  }
  return await contextToImage(dc);
}

async function getCircularSubImage(dc,pts,f){
  f = f || 1
  let oPart = processPoints(pts)
  dc.save()
  dc.clearRect(0,0,dc.canvas.width,dc.canvas.height);
  dc.beginPath()
  let r = Math.max(oPart.width,oPart.height)*f
  dc.arc(oPart.xa,oPart.ya,r,0,Math.PI*2);
  // dc.moveTo(pts[0].x,pts[0].y)
  // for(let i=1;i<pts.length;i++){
  //   dc.lineTo(pts[i].x,pts[i].y)
  // }
  dc.closePath()
  dc.clip()
  dc.drawImage(g.img2,0,0)
  dc.restore()

  var c=document.createElement('canvas');
  var cx=c.getContext('2d');

  // resize the new canvas to the size of the clipping area
  c.width=r*2;
  c.height=r*2;

  // draw the clipped image from the main canvas to the new canvas
  cx.drawImage(dc.canvas, oPart.xa-r,oPart.ya-r,r*2,r*2, 0,0,r*2,r*2);
  return await contextToImage(cx);
}

function drawTintedImage(dc,img, x,y,w,h,color, opacity = 0.5) {
  // not quite working yet
  dc.save();
  dc.fillStyle = color;
  dc.globalAlpha = opacity;
  dc.fillRect(x, y, w, h);

  dc.beginPath()
  dc.moveTo(x,y)
  dc.lineTo(x+w,y)
  dc.lineTo(x+w,y+h)
  dc.lineTo(x,y+h)
  dc.closePath()
  dc.clip()

  dc.globalCompositeOperation = "destination-atop";
  dc.globalAlpha = 1;
  dc.drawImage(img, 0,0,img.width,img.height,x, y, w, h);
  dc.restore();
}

function drawRotatedImage(dc,img,x,y,w,h,angle){
  dc.save()
  dc.translate(x,y)
  dc.rotate(angle)
  // dc.scale(sc2,sc2);
  dc.drawImage(img,-w/2,-h/2,w,h)
  dc.restore()
}

async function tintImage(img, color, opacity = 0.5) {
  var c=document.createElement('canvas');
  var dc=c.getContext('2d');

  // resize the new canvas to the size of the clipping area
  c.width=img.width;
  c.height=img.height;

  dc.save();
  dc.fillStyle = color;
  dc.globalAlpha = opacity;
  dc.fillRect(0, 0, dc.canvas.width, dc.canvas.height);
  dc.globalCompositeOperation = "destination-atop";
  dc.globalAlpha = 1;
  dc.drawImage(img, 0, 0);
  dc.restore();

  return await contextToImage(dc);
}

function tintImageReturnCanvas(img, color, opacity = 0.5) {
  var c=document.createElement('canvas');
  var dc=c.getContext('2d');

  // resize the new canvas to the size of the clipping area
  c.width=img.width;
  c.height=img.height;

  dc.save();
  dc.fillStyle = color;
  dc.globalAlpha = opacity;
  dc.fillRect(0, 0, dc.canvas.width, dc.canvas.height);
  dc.globalCompositeOperation = "destination-atop";
  dc.globalAlpha = 1;
  dc.drawImage(img, 0, 0);
  dc.restore();

  return c;
}


function makeGrayScaleImage(dSrc){
  var dBack = new ImageData(
    new Uint8ClampedArray(dSrc.data),
    dSrc.width,
    dSrc.height
  );
  var data = dBack.data;
  for(let x=0;x<dSrc.width;x++){
  	for(let y=0;y<dSrc.height;y++){
  		let index = (x + y * dSrc.width) * 4;
  		let gray = Math.floor(dSrc.data[index] * 0.3 + dSrc.data[index + 1] * 0.6 + dSrc.data[index + 2] * 0.1);
  		data[index] = data[index+1] = data[index+2] = gray;
  	}
  }
  return dBack;
}

function makeDitherImage(dSrc){
  var dBack = new ImageData(
    new Uint8ClampedArray(dSrc.data),
    dSrc.width,
    dSrc.height
  );
  var data = dBack.data;
  for(let x=0;x<dSrc.width;x++){
  	for(let y=0;y<dSrc.height;y++){
  		let index = (x + y * dSrc.width) * 4;
  		let gray = Math.floor(dSrc.data[index] * 0.3 + dSrc.data[index + 1] * 0.6 + dSrc.data[index + 2] * 0.1);
  		// gray = gray + Math.random() * 128 > 128 ? 255 : 0;
  		gray = gray > 255*Math.random() ? 255 : 0;
  		data[index] = data[index+1] = data[index+2] = gray;
  	}
  }
  return dBack;
}

function calculateAverageColorDistance(img1,img2,x1,y1,w,h,x2,y2){
  let d1 = img1 instanceof HTMLImageElement ? ImageToImageData(img1) : img1
  let d2 = img2 instanceof HTMLImageElement ? ImageToImageData(img2) : img2
  let np=0
  let totd=0
  x1 = Math.floor(x1)
  y1 = Math.floor(y1)
  w = Math.floor(w)
  h = Math.floor(h)
  x2 = Math.floor(x2)
  y2 = Math.floor(y2)
  for(let x=x1;x<x1+w;x++){
    for(let y=y1;y<y1+h;y++){
      if(x < 0 || x >= d1.width) continue
      if(y < 0 || y >= d1.height) continue
      let i1 = (x + y * d1.width) * 4;
      let i2 = (x-x1+x2 + (y-y1+y2) * d2.width) * 4;
      if(x-x1+x2 < 0 || x-x1+x2 >= d2.width) continue
      if(y-y1+y2 < 0 || y-y1+y2 >= d2.height) continue
      np++
      totd += distance([d1.data[i1],d1.data[i1+1],d1.data[i1+2]],[d2.data[i2],d2.data[i2+1],d2.data[i2+2]])
    }
  }
  return np == 0 ? Infinity : totd/np
}

function findBestImagePatchForColor(img1,colv,w,h,res){
  // find location of subimage of size w x h that best matches colv
  let d1 = img1 instanceof HTMLImageElement ? ImageToImageData(img1) : img1
  res = res == null ? 1 : res
  let oMin = {d:Infinity,x:null,y:null}
  for(let xo=0;xo<d1.width-w;xo+=res){
    for(let yo=0;yo<d1.height-h;yo+=res){
      let totd = 0
      let np = 0
      for(let x=xo;x<xo+w;x++){
        for(let y=yo;y<yo+h;y++){
          let i1 = (x + y * d1.width) * 4;
          // totd += distance([d1.data[i1],d1.data[i1+1],d1.data[i1+2]],colv)
          totd += Math.abs(d1.data[i1]-colv[0]) + Math.abs(d1.data[i1+1]-colv[1]) + Math.abs(d1.data[i1+2]-colv[2])
          np++
        }
      }
      totd = np == 0 ? 0 : totd/np
      if(totd < oMin.d){
        oMin.d = totd 
        oMin.x = xo
        oMin.y = yo 
      }
    }
  }
  return oMin
}

function countColors(d){
  if(d instanceof HTMLImageElement)
    d = ImageToImageData(d)
  else if(d instanceof CanvasRenderingContext2D)
    d = d.getImageData(0, 0, d.canvas.width, d.canvas.height)
  let s,oc = {}
  for(let i = 0; i < d.data.length; i+=4){
    s = 'rgba(' + d.data[i] + ',' + d.data[i+1] + ','+ d.data[i+2] + ','+ d.data[i+3] + ')'
    if(oc[s] == null){
      oc[s] = {c:0,clr:s,aval:[d.data[i],d.data[i+1],d.data[i+2],d.data[i+3]]}
    }
    oc[s].c++
  }
  return oc
}

function makePalette(aClr,n){
  // create palette of n colors from input list of rgb arrays, n > aClr.length
  let aPal = []
  for(let i=0;i<n;i++){
    let f=i/(n-1)
    let b = lerpArray(f,aClr,'i')
    aPal.push(b)
  }
  return aPal
}

function mixColors(color0, color1, value) {
  // by square of rgb values
  var s = 1 - value;
  return [Math.floor(Math.sqrt(s * color0[0]*color0[0] + value * color1[0]*color1[0])),
          Math.floor(Math.sqrt(s * color0[1]*color0[1] + value * color1[1]*color1[1])),
          Math.floor(Math.sqrt(s * color0[2]*color0[2] + value * color1[2]*color1[2]))];
};


function consoleShowPalette(a){
  for(let i=0;i<a.length;i++){
    console.log('%c'+rgbToString(a[i]),'background-color:'+rgbToString(a[i]))
  }
}

function rgbToString(a0,alpha){
  let a = a0
  if(alpha){
    alpha = Number(alpha).toFixed(2)
  }
  if(alpha != null){
    a = a0.slice()
    if(a.length == 4)
      a[3] = alpha
    else
      a.push(alpha)
  }
  let s = a.length == 3 ? 'rgb(' : 'rgba('
  for(let i=0;i<a.length;i++){
    s += a[i] + (i != a.length-1 ? ',' : '')
  }
  return s+')'
}

function calculateImageCharacteristics(dSrc,s){
  if(dSrc instanceof HTMLImageElement){
    dSrc = ImageToImageData(dSrc)
  }
  s = s==null ? 1 : s;
  let distMax = Math.sqrt(255*255*3);
  let totDist = 0
  let totBright = 0,totSat = 0
  let np = 0
  for(let x=0;x<dSrc.width;x++){
    for(let y=0;y<dSrc.height;y++){
      np++
      let dist = 0;
      let n = 0;
      let index = (x + y * dSrc.width) * 4;
      let color = tinycolor({r:dSrc.data[index],g:dSrc.data[index+1],b:dSrc.data[index+2]}).toHsv()
      totBright += color.v
      totSat += color.s
      for(let xi=x-s;xi <= x+s;xi++){
        if(xi < 0 || xi >= dSrc.width) continue;
        for(let yi=y-s;yi <= y+s;yi++){
          if(yi < 0 || yi >= dSrc.height) continue;
          if(xi == x && yi == y) continue;
          let indexi = (xi + yi * dSrc.width) * 4;
          n++;
          let d = Math.sqrt(Math.pow(dSrc.data[index]-dSrc.data[indexi],2) + 
                            Math.pow(dSrc.data[index+1]-dSrc.data[indexi+1],2) +
                            Math.pow(dSrc.data[index+2]-dSrc.data[indexi+2],2));
          dist += d;
        }
      }
      dist /= n;
      dist = Math.min(255,Math.floor(20*255*dist/distMax));
      totDist += dist
    }
  }
  let o = {
    colorVariability: Number( (totDist/np/255).toFixed(3) ),
    colorBrightness: Number( (totBright/np).toFixed(3) ),
    colorSaturation: Number( (totSat/np).toFixed(3) )
  }

  return o;
}

function makeRadialGradientCanvas(s,clr1,clr2,bNoise){
  var dBack = new ImageData(s,s);
  var data = dBack.data;
  let distMax = s/2;
  let m = Math.round(s/2)
  let field = bNoise ? makeFlowField(s,s,null,30,true) : null
  for(let x=0;x<s;x++){
    for(let y=0;y<s;y++){
      let f = distance(m,m,x,y)/distMax
      if(bNoise) f = map(f,0,1,.2*f+.8*field[x][y],.85*f+.25*field[x][y])
      f = Math.min(1,f)
      let i = (x + y * s) * 4;
      data[i] = lerp(f,clr1[0],clr2[0])
      data[i+1] = lerp(f,clr1[1],clr2[1])
      data[i+2] = lerp(f,clr1[2],clr2[2])
      data[i+3] = lerp(f,clr1[3],clr2[3])*255 // assume clr1 has alpha in [0-1]
    }
  }
  var c = document.createElement('canvas');
  var dc = c.getContext('2d');
  c.width = s;
  c.height = s;
  dc.putImageData(dBack, 0, 0 );
  return c
}

function makeColorVariationImage(dSrc,s){
	s = s==null ? 1 : s;
  var dBack = new ImageData(
    new Uint8ClampedArray(dSrc.data),
    dSrc.width,
    dSrc.height
  );
  var data = dBack.data;
  let distMax = Math.sqrt(255*255*3);
  for(let x=0;x<dSrc.width;x++){
  	for(let y=0;y<dSrc.height;y++){
  		let dist = 0;
  		let n = 0;
  		let index = (x + y * dSrc.width) * 4;
  		for(let xi=x-s;xi <= x+s;xi++){
  			if(xi < 0 || xi >= dSrc.width) continue;
  			for(let yi=y-s;yi <= y+s;yi++){
  				if(yi < 0 || yi >= dSrc.height) continue;
  				if(xi == x && yi == y) continue;
  				let indexi = (xi + yi * dSrc.width) * 4;
  				n++;
  				let d = Math.sqrt(Math.pow(dSrc.data[index]-dSrc.data[indexi],2) + 
  					                Math.pow(dSrc.data[index+1]-dSrc.data[indexi+1],2) +
  					                Math.pow(dSrc.data[index+2]-dSrc.data[indexi+2],2));
  				dist += d;
  			}
  		}
  		dist /= n;
  		dist = Math.min(255,Math.floor(20*255*dist/distMax));
  		data[index] = data[index+1] = data[index+2] = dist;
  	}
  }

  return dBack;
}

function blurImageInPlace(dSrc,radius,x0,y0,w,h){
  x0 =  x0 == null ? 0 : x0
  y0 =  y0 == null ? 0 : y0
  w = w == null ? dSrc.width : w
  h = h == null ? dSrc.height : h
  x0=Math.floor(x0)
  y0=Math.floor(y0)
  w=Math.round(w)
  h=Math.round(h)

  let s = radius
  let s2 = (2*s+1)*(2*s+1)
  var data = dSrc.data;
  let wt = 1/s2
  for(let x=x0;x<x0+w;x++){
    if(x < 0 || x >= dSrc.width) continue;
    for(let y=y0;y<y0+h;y++){
      if(y < 0 || y >= dSrc.height) continue;
      let r=0, g=0, b=0, a=0
      let n = 0;
      let index = (x + y * dSrc.width) * 4;
      for(let xi=x-s;xi <= x+s;xi++){
        if(xi < 0 || xi >= dSrc.width) continue;
        for(let yi=y-s;yi <= y+s;yi++){
          if(yi < 0 || yi >= dSrc.height) continue;
          let indexi = (xi + yi * dSrc.width) * 4;
          n++;
          r += dSrc.data[indexi]   * wt
          g += dSrc.data[indexi+1] * wt
          b += dSrc.data[indexi+2] * wt
          a += dSrc.data[indexi+3] * wt
        }
      }
      data[index]   = r*s2/n
      data[index+1] = g*s2/n 
      data[index+2] = b*s2/n
      data[index+3] = a*s2/n
    }
  }

  return dSrc;
}

function convoluteImage(dSrc,weights){
  let side = Math.round(Math.sqrt(weights.length))
  let s = Math.floor(side/2)
  var dBack = new ImageData(
    new Uint8ClampedArray(dSrc.data),
    dSrc.width,
    dSrc.height
  );
  var data = dBack.data;
  for(let x=0;x<dSrc.width;x++){
    for(let y=0;y<dSrc.height;y++){
      let r=0, g=0, b=0, a=0
      let n = 0;
      let index = (x + y * dSrc.width) * 4;
      for(let xi=x-s;xi <= x+s;xi++){
        if(xi < 0 || xi >= dSrc.width) continue;
        for(let yi=y-s;yi <= y+s;yi++){
          if(yi < 0 || yi >= dSrc.height) continue;
          let indexi = (xi + yi * dSrc.width) * 4;
          let wt = weights[(yi-y+s)*side+xi-x+s]
          n++;
          r += dSrc.data[indexi]   * wt
          g += dSrc.data[indexi+1] * wt
          b += dSrc.data[indexi+2] * wt
          a += dSrc.data[indexi+3] * wt
        }
      }
      data[index]   = r*weights.length/n
      data[index+1] = g*weights.length/n 
      data[index+2] = b*weights.length/n
      data[index+3] = a*weights.length/n
    }
  }

  return dBack;
}

async function getImageMaxDimension(img,dMax,bForce){
  // get an image whose biggest size is at most dMax, if it is smaller then leave as is unless bForce is true
  bForce = bForce == null ? false : bForce
  var w = img.naturalWidth;
  var h = img.naturalHeight;
  var d = Math.min(w,h);
  if(Math.max(w,h) > dMax || bForce){
    if(w > h){
      h = Math.floor(h*dMax/w)
      w = dMax
    }
    else{
      w = Math.floor(w*dMax/h)
      h = dMax
    }
  }
  var backCanvas = document.createElement('canvas');
  backCanvas.width = w;
  backCanvas.height = h;
  var backCtx = backCanvas.getContext('2d');
  backCtx.drawImage(img, 0,0,img.naturalWidth,img.naturalHeight,0,0,w,h);
  var imgn = await contextToImage(backCtx);
  return imgn;
}

async function getImageOfHeight(img,h0){
  let w0 = h0/img.naturalHeight*img.naturalWidth
  var backCanvas = document.createElement('canvas');
  backCanvas.width = w0;
  backCanvas.height = h0;
  var backCtx = backCanvas.getContext('2d');
  backCtx.drawImage(img, 0,0,img.naturalWidth,img.naturalHeight,0,0,w0,h0);
  var imgn = await contextToImage(backCtx);
  return imgn;
}

async function getMaxSquareImage(img){
  var w = img.naturalWidth;
  var h = img.naturalHeight;
  var d = Math.min(w,h);
  var backCanvas = document.createElement('canvas');
  backCanvas.width = d;
  backCanvas.height = d;
  var backCtx = backCanvas.getContext('2d');
  var x1 = Math.floor((w-d)/2);
  var y1 = Math.floor((h-d)/2);
  backCtx.drawImage(img, x1,y1,d,d,0,0,d,d);
  var imgn = await contextToImage(backCtx);
  return imgn;
}

function makeImageFromData(imgData) {
  if(imgData == null || imgData.width == null || imgData.width <= 0 || imgData.height <=0) return null;
  try {
    var can = document.createElement('canvas');
    var con = can.getContext('2d');
    can.width = imgData.width;
    can.height = imgData.height;
    con.putImageData(imgData, 0, 0 );
    var img = document.createElement('img');
    img.src = can.toDataURL("image/png");
  }
  catch(e){
    throw(e);
  }
  return img;
};

async function makeImageFromData2(imgData) {
  if(imgData == null || imgData.width == null || imgData.width <= 0 || imgData.height <=0) return null;
  try {
    var can = document.createElement('canvas');
    var con = can.getContext('2d');
    can.width = imgData.width;
    can.height = imgData.height;
    con.putImageData(imgData, 0, 0 );
    var img = await loadImageFromURL(can.toDataURL("image/png"))
  }
  catch(e){
    throw(e);
  }
  return img;
};


function ImageToImageData(img){
  var canvas = document.createElement('canvas');
  var context = canvas.getContext('2d');
  canvas.width = img.width;
  canvas.height = img.height;
  context.drawImage(img, 0, 0 );
  var myData = context.getImageData(0, 0, img.width, img.height);
  return myData;
}

var bayerThresholdMap = [
  [  15, 135,  45, 165 ],
  [ 195,  75, 225, 105 ],
  [  60, 180,  30, 150 ],
  [ 240, 120, 210,  90 ]
];

var lumR = [];
var lumG = [];
var lumB = [];
for (var i=0; i<256; i++) {
  lumR[i] = i*0.299;
  lumG[i] = i*0.587;
  lumB[i] = i*0.114;
}

// taken from https://github.com/meemoo/meemooapp/blob/main/src/nodes/image-monochrome-worker.js
function monochrome(imageData, threshold, type){

  var imageDataLength = imageData.data.length;

  // Greyscale luminance (sets r pixels to luminance of rgb)
  for (var i = 0; i <= imageDataLength; i += 4) {
    imageData.data[i] = Math.floor(lumR[imageData.data[i]] + lumG[imageData.data[i+1]] + lumB[imageData.data[i+2]]);
  }

  var w = imageData.width;
  var newPixel, err;

  for (var currentPixel = 0; currentPixel <= imageDataLength; currentPixel+=4) {

    if (type === "none") {
      // No dithering
      imageData.data[currentPixel] = imageData.data[currentPixel] < threshold ? 0 : 255;
    } else if (type === "bayer") {
      // 4x4 Bayer ordered dithering algorithm
      var x = currentPixel/4 % w;
      var y = Math.floor(currentPixel/4 / w);
      var map = Math.floor( (imageData.data[currentPixel] + bayerThresholdMap[x%4][y%4]) / 2 );
      imageData.data[currentPixel] = (map < threshold) ? 0 : 255;
    } else if (type === "floydsteinberg") {
      // Floyd–Steinberg dithering algorithm
      newPixel = imageData.data[currentPixel] < 129 ? 0 : 255;
      err = Math.floor((imageData.data[currentPixel] - newPixel) / 16);
      imageData.data[currentPixel] = newPixel;

      imageData.data[currentPixel       + 4 ] += err*7;
      imageData.data[currentPixel + 4*w - 4 ] += err*3;
      imageData.data[currentPixel + 4*w     ] += err*5;
      imageData.data[currentPixel + 4*w + 4 ] += err*1;
    } else {
      // Bill Atkinson's dithering algorithm
      newPixel = imageData.data[currentPixel] < 129 ? 0 : 255;
      err = Math.floor((imageData.data[currentPixel] - newPixel) / 8);
      imageData.data[currentPixel] = newPixel;

      imageData.data[currentPixel       + 4 ] += err;
      imageData.data[currentPixel       + 8 ] += err;
      imageData.data[currentPixel + 4*w - 4 ] += err;
      imageData.data[currentPixel + 4*w     ] += err;
      imageData.data[currentPixel + 4*w + 4 ] += err;
      imageData.data[currentPixel + 8*w     ] += err;
    }

    // Set g and b pixels equal to r
    imageData.data[currentPixel + 1] = imageData.data[currentPixel + 2] = imageData.data[currentPixel];
  }

  return imageData;
}

async function loadImageFromURL(url){
  return new Promise((resolve, reject) => {
    let img = new Image()
    img.onload = () => resolve(img)
    img.onerror = reject
    img.src = url
  })
}

async function contextToImage(context){
  var imgNew = new Image();
  let imgpromise = onload2promise(imgNew);
  imgNew.src = context.canvas.toDataURL('image/png');
  await imgpromise;
  return imgNew;
}

function onload2promise(obj){
    return new Promise((resolve, reject) => {
        obj.onload = () => resolve(obj);
        obj.onerror = reject;
    });
}

// drawing functions

function varyColour(sourceColour,varyBrightness) {
  const amount = Math.round(random() * 2 * varyBrightness);
  if(Array.isArray(sourceColour))
    sourceColour = {r:sourceColour[0],g:sourceColour[1],b:sourceColour[2]}
  const c = tinycolor(sourceColour);
  const varied = amount > varyBrightness
    ? c.brighten(amount - varyBrightness)
    : c.darken(amount);
  return varied.toRgbString();
  // return sourceColour
}

function makeBrush(size,colour,fgap) {
  const brush = [];
  let bristleCount = Math.round(size / 3);
  fgap = fgap == null ? 1 : fgap
  const gap = size / bristleCount;
  for (let i = 0; i < bristleCount; i++) {
    const distance = i === 0 ? 0 : gap * i + (Math.random() * gap * fgap) / 2 - gap * fgap / 2;
    brush.push({
      distance,
      thickness: gap*.75 + random()*gap,//Math.random() * 2 + 2,
      colour: varyColour(colour,8),
      startf: random(0,.05),
      endf: random(.95,1)
    });
  }
  return brush;
}

function strokeBristle(context,origin, destination, bristle, controlPoint) {
  context.beginPath();
  context.moveTo(origin.x, origin.y);
  context.strokeStyle = bristle.colour;
  context.lineWidth = bristle.thickness;
  context.lineCap = "round";
  context.lineJoin = "round";
  context.shadowColor = bristle.colour;
  context.shadowBlur = bristle.thickness / 2;
  context.quadraticCurveTo(
    controlPoint.x,
    controlPoint.y,
    destination.x,
    destination.y
  );
  context.lineTo(destination.x, destination.y);
  context.stroke();
}

function drawStroke(context,bristles, origin, destination, oldAngle, newAngle,seg,nseg) {
  bristles.forEach(bristle => {
    context.beginPath();
    const bristleOrigin = rotatePoint(
      bristle.distance - bristles.strokeWidth / 2,
      oldAngle,
      origin
    );

    const bristleDestination = rotatePoint(
      bristle.distance - bristles.strokeWidth / 2,
      newAngle,
      destination
    );
    const controlPoint = rotatePoint(
      bristle.distance - bristles.strokeWidth / 2,
      newAngle,
      origin
    );
    if(seg/nseg > bristle.startf && seg/nseg <= bristle.endf)
    	strokeBristle(context,bristleOrigin, bristleDestination, bristle, controlPoint);
  });
}

function paintStroke(dc,strokeWidth,clr,pts,brush,fgap){
	let a = pts
	if(pts.x != null){
		a = [pts,pts]
		strokeWidth /= 4
	}
  let currentBrush = brush || startStroke(a[0],strokeWidth,clr,fgap)
  for(let i=1; i<a.length;i++){
  	continueStroke(dc,currentBrush,a[i],i,a.length)
  }
  return currentBrush
}

function startStroke(point,size,colour,fgap) {
  currentBrush = makeBrush(size,colour,fgap);
  currentBrush.currentAngle = undefined
  currentBrush.latestPoint = point;
  currentBrush.strokeWidth = size
  return currentBrush
}

function continueStroke(context,currentBrush,newPoint,seg,nseg) {
  const newAngle = getNewAngle(currentBrush.latestPoint, newPoint, currentBrush.currentAngle);
  drawStroke(context,currentBrush, currentBrush.latestPoint, newPoint, currentBrush.currentAngle, newAngle,seg,nseg);
  currentBrush.currentAngle = newAngle % (Math.PI * 2);
  currentBrush.latestPoint = newPoint;
}

function pointsCollision(aPoints,pt,threshold,bAddIfNoCollide,nCheck){
  var bCollide = false;
  for(let i=0;i<aPoints.length && i<nCheck;i++){
    let d = Math.sqrt(Math.pow(aPoints[i].x - pt.x,2) + Math.pow(aPoints[i].y - pt.y,2));
    if(d < threshold){
      bCollide = true;
      break;
    }
  }
  if(bAddIfNoCollide && !bCollide)
    aPoints.push({x:pt.x,y:pt.y});
  return bCollide;
}

function makeRandomList(a0,a1,n,bWrap,seed,w){
	// smaller w is noisier
  var a = [];
  bWrap = bWrap == null ? false : bWrap

  noise.seed(seed || 42);
  w = w || 80
  for(let c=0;c<n;c++){
    a[c] = lerp((1+noise.simplex2(c/w, .234))/2,a0,a1)
  }
  if(bWrap)
  	a[n-1] = (a[0]+a[n-2])/2
  return a;
}

function addPropertyValue(a,p,v){
  a.forEach(e => e[p]=v)
}

function chooseRandomItemWithPropertyValue(a,p,v){
  let i = random(0,a.length-1,'i')
  let nTrials = 10000
  while(a[i][p] != v && nTrials > 0){
    i = random(0,a.length-1,'i')
    nTrials--
  }
  if(nTrials <= 0){
    console.log('chooseRandomItemWithPropertyValue unable to find matching value ',p,v)
    return null    
  }
  return a[i]
}

function makeFlowField(nCols,nRows,seed,w,bZeroToOne){
	// smaller w is noisier
  var grid = [];

  noise.seed(seed || 42);
  w = w || 80
  for(let c=0;c<nCols;c++){
    grid[c]=[];
    for(let r=0;r<nRows;r++){
      // grid[c][r] = r/nRows*Math.PI;
      grid[c][r] = Math.PI*noise.simplex2(c/w, r/w);
      if(bZeroToOne)
        grid[c][r] = map(grid[c][r],-Math.PI,Math.PI,0,1)
    }
  }
  return grid;
}

function extendPointInField(field,x0,y0,lw,maxLen,aPoints,w,h,dSeg){
  let i,j,x,y,r,c;
  w = w || 1000
  h = h || 1000
  maxLen = maxLen || 100
  aPoints = aPoints || []

  let nCols = field.length;
  let nRows = field[0].length;
  let d = w/nCols*1;
  d = dSeg || d

  let v = noise.simplex2(x0/200, y0/200)
  let b = Math.floor((v+1)/2*255)
  let threshold = Math.max(w/nCols*.2,lw) *1.0 ;
  x = x0
  y = y0
  let nLengthStart = aPoints.length;

  if(pointsCollision(aPoints,{x:x,y:y},threshold,true,nLengthStart)) return;
  for(i=0;i<200;i++){
    c = Math.floor(x*nCols/w-.5)
    r = Math.floor(y*nRows/h-.5)
    if(c < 0 || c >= nCols) break
    if(r < 0 || r >= nRows) break
    x += d * Math.cos(field[c][r]);
    y += d * Math.sin(field[c][r]);
    if(pointsCollision(aPoints,{x:x,y:y},threshold,true,nLengthStart))
      break;
    let dist = distance(x0,y0,x,y)
    if(dist > maxLen)
    	break;
  }
  return aPoints
}

function drawFlowField(dc,field){
  let i,j,x,y,r;
  let w=dc.canvas.width;
  let h=dc.canvas.height;
  dc.fillStyle='#f0f0f0';
  dc.fillRect(0,0,w,h);
  let nCols = field.length;
  let nRows = field[0].length;
  let d = w/nCols*.7;

  dc.fillStyle='#000000';
  for(let c=0;c<nCols;c++){
    x = w * (c+.5)/nCols
    for(let r=0;r<nRows;r++){
      y = h * (r+.5)/nRows
      dc.beginPath()
      dc.arc(x,y,1,0, 2*Math.PI, false)
      dc.fill()
      dc.closePath();
      dc.beginPath();
      dc.moveTo(x,y);
      dc.lineTo(x+d*Math.cos(field[c][r]),y+d*Math.sin(field[c][r]))
      dc.stroke();
    }
  }
}

// hash and random function with seed
// from https://stackoverflow.com/questions/521295/seeding-the-random-number-generator-in-javascript
var seed = xmur3(new Date().getTime())

function xmur3(str) {
    str=String(str);
    for(var i = 0, h = 1779033703 ^ str.length; i < str.length; i++) {
        h = Math.imul(h ^ str.charCodeAt(i), 3432918353);
        h = h << 13 | h >>> 19;
    } return function() {
        h = Math.imul(h ^ (h >>> 16), 2246822507);
        h = Math.imul(h ^ (h >>> 13), 3266489909);
        return (h ^= h >>> 16) >>> 0;
    }
}


var rand = mysfc32(seed(), seed(), seed(), seed());
function randSeed(s){
  // console.log('randSeed',s)
  GEN.lastNormal = null // for normal random generator
  seed = xmur3(s)
  rand = mysfc32(seed(), seed(), seed(), seed());
}

function mysfc32(a, b, c, d) {
    return function() {
      a >>>= 0; b >>>= 0; c >>>= 0; d >>>= 0; 
      var t = (a + b) | 0;
      a = b ^ b >>> 9;
      b = c + (c << 3) | 0;
      c = (c << 21 | c >>> 11);
      d = d + 1 | 0;
      t = t + d | 0;
      c = c + t | 0;
      return (t >>> 0) / 4294967296;
    }
}

function getDistances(a,pt){
  let d = []
  for(let i=0; i < a.length;i++){
    d.push(distance(a[i],pt))
  }
  return d
}

function distance(p1,p2,p3,p4){
	if(p3 != null && p4 != null)
		return Math.pow(Math.pow(p1-p3,2)+Math.pow(p2-p4,2),.5)
  if(Array.isArray(p1) && Array.isArray(p2)){
    let sum=0
    for(let i=0; i < p1.length && i < p2.length;i++)
      sum += Math.pow(p1[i]-p2[i],2)
    return Math.pow(sum,.5)
  }
  if(Array.isArray(p1) && !Array.isArray(p2)){
    let sum=0
    let min = Infinity
    let max = -Infinity
    for(let i=0; i < p1.length;i++){
      let d = distance(p1[i],p2)
      min = Math.min(min,d)
      max = Math.max(max,d)
      sum += d
    }
    if(p3 == 'max')
      return max
    if(p3 == 'average')
      return sum/p1.length
    return min
  }
  if(typeof p1 == 'number' && typeof p2 == 'number')
    return Math.abs(p1-p2)
  return Math.pow(Math.pow(p1.x-p2.x,2)+Math.pow(p1.y-p2.y,2),.5)
}

function point(x,y){
  let x0 = x
  let y0 = y
  if(y == null){
    if(x.x != null)
      x0=x.x;
    else if(x._x != null)
      x0=x._x;
    if(x.y != null)
      y0=x.y;
    else if(x._y != null)
      y0=x._y;
  }
  return {x:x0,y:y0}
}

function vectorFrom(pt1,pt2,bNormalize){
	bNormalize = bNormalize == null ? false : bNormalize
  if(pt2 == null){
    pt2 = clonePoint(pt1)
    pt1 = {x:0,y:0}
  }
	let pt = {x:pt2.x-pt1.x,y:pt2.y-pt1.y}
	if(bNormalize){
		let d = distance(pt1,pt2)
		if(d != 0){
			pt.x /= d
			pt.y /= d
		}
	}
	return pt
}

function sortRandom(a){
  let b = a.slice()
  let j,i=b.length;
  // Fisher-Yates shuffle
  while(--i > 0){
    j = Math.floor(random() * (i+1));
    [b[j],b[i]] = [b[i],b[j]]
  }
  return b;
}

function randomArray(a0,a1,n){
  let a=[]
  for(let i=0;i<n;i++)
    a.push(random(a0,a1))
  return a
}

function random(a0,a1,a2,a3){
  if(a0 == null)
    return rand();
  if(a0 == 'rgb')
    return 'rgb(' + random(0,255,'i') +',' + random(0,255,'i') + ',' + random(0,255,'i') + ')';
  let v;
  if(a1 == null)
    v = rand()*a0;
  else
    v = a0 + rand()*(a1-a0 + (a2 == 'i' ? 1 : 0));
  if(a2 == 'i')
    v = Math.floor(v);
  return v;
}

function randomNormalRange(a0,a1){
  // 99.7 % is within 3sd so use that as a guide
  let mean = (a0+a1)/2
  let sd = (a1-mean)/3
  let v = randomNormal(mean,sd)
  return Math.min(a1,Math.max(v,a0))
}

function randomTriangular(a,b,c){
  let pinflection = ( c - a ) / ( b - a )
  let fact1 = ( b - a ) * ( c - a)
  let fact2 = ( b - a ) * ( b - c )
  let u = rand()
  if(u < pinflection)
    return a + Math.sqrt(fact1*u)
  return b - Math.sqrt(fact2*(1-u))
}

function randomNormal(mean,sd) {
  var z = GEN.lastNormal;
  GEN.lastNormal = NaN;
  if (!z) {
    var a = random() * 2 * Math.PI;
    var b = Math.sqrt(-2.0 * Math.log(1.0 - random()));
    z = Math.cos(a) * b;
    GEN.lastNormal = Math.sin(a) * b;
  } 
  return mean + z * sd;
};

function choose(aSets,aWeights){
  aWeights = aWeights || aSets.map(x => 1);
  const sum = aWeights.reduce((partial_sum, a) => partial_sum + a, 0);
  let v = random()*sum;
  let acc = 0
  for(let i=0; i < aSets.length; i++){
    if(v <= acc + aWeights[i]) return aSets[i];
    acc += aWeights[i];
  }
  return aSets[aSets.length-1]
}

function constrain(v,min,max){
  return Math.min(Math.max(v,min),max);
}

function lerp(f,v0,v1,fnEase){
  if(v0.x != null && v1.x != null){
    return {x:lerp(f,v0.x,v1.x,fnEase),y:lerp(f,v0.y,v1.y,fnEase)}
  }
  if(typeof fnEase == 'function')
    f = fnEase(f)
  return v0 + f*(v1-v0)
}

function lerpCos(f, pa, pb){
	var ft = f * Math.PI,
		f2 = (1 - Math.cos(ft)) * 0.5;
	return pa * (1 - f2) + pb * f2;
}

function pointAlongPath(a0,dTarget){
  let a
  if(a0[0].sPerimeter == null)
    a = augmentPoints(a0)
  else
    a = a0
  let i,i0=0,i1
  for(i=1;i<a.length;i++){
    if(a[i].sPerimeter < dTarget)
      i0=i
    if(a[i].sPerimeter > dTarget){
      i1 = i
      break
    }
  }
  if(i1==null)
    return clonePoint(a0[a0.length-1])
  let f2=(dTarget-a[i0].sPerimeter)/(a[i1].sPerimeter-a[i0].sPerimeter)
  return lerp(f2,a[i0],a[i1])
}

function lerpPathDistance(f,a0){
  // a has points of form {x,y}
  if(f < 0) f=0
  if(f > 1) f=1
  if(f == 1) return a0[a0.length-1]
  let a
  if(a0[0].sPerimeter == null)
    a = augmentPoints(a0)
  else
    a = a0
  let dTotal = a[a.length-1].sPerimeter
  let dTarget = f*dTotal
  let i,i0=0,i1
  for(i=1;i<a.length;i++){
    if(a[i].sPerimeter < dTarget)
      i0=i
    if(a[i].sPerimeter > dTarget){
      i1 = i
      break
    }
  }
  let f2=(dTarget-a[i0].sPerimeter)/(a[i1].sPerimeter-a[i0].sPerimeter)
  let pt = lerp(f2,a[i0],a[i1])
  pt.angle = Math.atan2(a[i1].y-a[i0].y, a[i1].x-a[i0].x) + Math.PI
  return pt
}

function lerpPath(f,a){
  // a has points of form {x,y}
  if(f < 0) f=0
  if(f > 1) f=1
  if(f == 1) return a[a.length-1]
  let i0 = lerp(f,0,a.length-1)
  let fract = i0 - Math.floor(i0)
  i0 = Math.floor(i0)
  let o = {x:a[i0].x , y:a[i0].y}
  let dy = a[i0+1].y-a[i0].y
  let dx = a[i0+1].x-a[i0].x
  o.x += fract * dx
  o.y += fract * dy
  o.angle = Math.atan2(dy, dx) + Math.PI
  let z0 = a[i0].z == null ? 1 : a[i0].z
  let z1 = a[i0+1].z == null ? 1 : a[i0+1].z
  o.z  =  lerp(fract,z0,z1);
  return o
}

function lerpArray(f,a,t){
  // a has subarrays
  if(f < 0) f=0
  if(f > 1) f=1
  if(f == 1) return a[a.length-1]
  let i0 = lerp(f,0,a.length-1)
  let fract = i0 - Math.floor(i0)
  i0 = Math.floor(i0)
  let b = a[i0].slice()
  for(let i=0;i<b.length;i++){
    let d = a[i0+1][i] - a[i0][i]
    b[i] += fract * d
    if(t == 'i')
      b[i] = Math.round(b[i])
  }
  return b
}

function normalAtPointOnPath(f,a,delta){
  // a has points of form {x,y}
  if(f < 0) f=0
  if(f > 1) f=1
  delta = delta == null ? .05 : delta
  let f0 = Math.max(0,f-delta)
  let f1 = Math.min(1,f+delta)
  let p0 = lerpPath(f0,a)
  let p1 = lerpPath(f1,a)
  let dx = p1.x-p0.x
  let dy = p1.y-p0.y
  let d = distance({x:0,y:0},{x:dx,y:dy})
  return {x:-dy/d,y:dx/d}
}

function invLerp(v,v0,v1){
  return (v-v0) / (v1-v0);
}

function map(v,r0s,r0e,r1s,r1e,fnEase){
  let f = r0s == r0e ? 0.5 : invLerp(v,r0s,r0e);
  return lerp(f,r1s,r1e,fnEase);
}

function map3(v,r0s,r0m,r0e,r1s,r1m,r1e,fnEase){
  let f
  if(v < r0m){
    f = invLerp(v,r0s,r0m)
    return lerp(f,r1s,r1m,fnEase)
  }
  f = invLerp(v,r0m,r0e)
  return lerp(f,r1m,r1e,fnEase)
}

function dist(x1,y1,x2,y2){
  return Math.pow((x1-x2)*(x1-x2)+(y1-y2)*(y1-y2),.5)
}

function rotatePoint(distance, angle, origin) {
  return {
    x:origin.x + distance * Math.cos(angle),
    y:origin.y + distance * Math.sin(angle)
  };
}

function getBearing(origin, destination) {
  return (Math.atan2(destination.y - origin.y, destination.x - origin.x) -
    Math.PI / 2) %
    (Math.PI * 2);
}

function getNewAngle(origin, destination, oldAngle) {
  const bearing = getBearing(origin, destination);
  if (typeof oldAngle === "undefined") {
    // console.log(bearing);

    return bearing;
  }
  return oldAngle - angleDiff(oldAngle, bearing);
}

function angleDiff(angleA, angleB) {
  const twoPi = Math.PI * 2;
  const diff = ((angleA - (angleB > 0 ? angleB : angleB + twoPi) + Math.PI) % twoPi) -
    Math.PI;
  return diff < -Math.PI ? diff + twoPi : diff;
}

function ease(p,g) {
  if (p < 0.5) 
    return 0.5 * Math.pow(2*p, g);
  else
    return 1 - 0.5 * Math.pow(2*(1 - p), g);
}

function easeInOutQuad(x) {
  return x < 0.5 ? 2 * x * x : 1 - Math.pow(-2 * x + 2, 2) / 2;
}

function easeInOutCubic(x) {
  return x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
}

function easeInOutSine(x) {
  return -(Math.cos(Math.PI * x) - 1) / 2
}

function easeInCubic(x) {
  return x*x*x
}

function easeInOutExpo(x) {
    return x === 0
      ? 0
      : x === 1
      ? 1
      : x < 0.5
      ? Math.pow(2, 20 * x - 10) / 2
      : (2 - Math.pow(2, -20 * x + 10)) / 2;
}

function easeBounceOut(x) {
  const n1 = 7.5625;
  const d1 = 2.75;

  if (x < 1 / d1) {
    return n1 * x * x;
  } else if (x < 2 / d1) {
    return n1 * (x -= 1.5 / d1) * x + 0.75;
  } else if (x < 2.5 / d1) {
    return n1 * (x -= 2.25 / d1) * x + 0.9375;
  } else {
    return n1 * (x -= 2.625 / d1) * x + 0.984375;
  }
}

function easeInOutBack(x) {
  const c1 = 1.70158;
  const c2 = c1 * 1.525;
  return x < 0.5
    ? (Math.pow(2 * x, 2) * ((c2 + 1) * 2 * x - c2)) / 2
    : (Math.pow(2 * x - 2, 2) * ((c2 + 1) * (x * 2 - 2) + c2) + 2) / 2;
}

