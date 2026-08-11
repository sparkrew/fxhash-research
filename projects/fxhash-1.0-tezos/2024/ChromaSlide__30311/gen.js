
var GEN = {}

function characterizeArray(a,msg,bLog=true,dec=1,ncMax=10,bDetail=true){
  if(typeof a[0] == 'string'){
    // we have string elements, count uniques, sort
    let o,dict = {},n=0
    for(let i=0;i<a.length;i++){
      o = dict[a[i]]
      if(o == null){
        o = {c:0,v:a[i],order:n}
        n++
        dict[a[i]] = o
      }
      o.c++
    }
    let av = Object.values(dict)
    av = av.sort(function(x,y){
      if(x.c == y.c)
        return x.n-y.n
      return y.c-x.c
    })
    if(bLog){
      let s=''
      if(msg)
        s += msg + '\n'
      av.forEach(e => s += JSON.stringify(e)+'\n')
      console.log(s)
    }
    console.log('Num array entries',a.length,'Num uniques',av.length)
    return av
  }
  let xmin = Infinity,xmax = -Infinity;
  let xs=0
  let imin=0,imax=0
  for(let i=0;i<a.length;i++){
    xs += a[i]
    xmin = Math.min(xmin,a[i])
    if(a[i]==xmin)
      imin=i
    xmax = Math.max(xmax,a[i])
    if(a[i]==xmax)
      imax=i
  }
  let b = [0,0,0,0,0,0,0,0,0,0]
  for(let i=0;i<a.length;i++){
    let j = Math.min(9,Math.floor(map(a[i],xmin,xmax,0,10)))
    b[j]++
  }

  let s = ''
  for(let i=0;i<10;i++){
    s += 'bin ' + (i+1) + ' range(' + map(i,0,10,xmin,xmax).toFixed(dec)  + '-' + map(i+1,0,10,xmin,xmax).toFixed(dec) + ' ' + (100*b[i]/a.length).toFixed(1) + '%\n'
  }
  let a2 = a.sort(function(v1,v2){return v2-v1})
  if(bDetail){
    let n = a.length >= 5 ? 5 : a.length
    s += '\nLargest ' + n + ' values'
    for(let i=0;i<n;i++)
      s += '' + a2[i] + (i != n-1 ? ',' : '')
    s += '\nSmallest ' + n + ' values'
    for(let i=0;i<n;i++)
      s += '' + a2[a2.length-1-n] + (i != n-1 ? ',' : '')
    let ac = countValues(a)
    s += '\nMost Frequent values\n'
    n = ac.length >= ncMax ? ncMax : ac.length
    for(let i=0;i<n;i++)
      s += '' + ac[i].v + ' count=' + ac[i].n + '\n'
  }
  o = {
    n:a.length,
    min:xmin,
    max:xmax,
    imin:imin,
    imax:imax,
    avg:xs/a.length
  }
  if(bLog)
    console.log(msg == null ? '' : msg,' num points=',a.length,'min=',xmin,'max',xmax,'avg',xs/a.length,'\n',s)
  return o
}

function countValues(a){
  let o = {}
  for(let i=0;i<a.length;i++){
    let s = a[i]
    if(typeof s != 'number' && typeof s != 'string')
      s = JSON.stringify(a[i])
    if(o[s] == null){
      o[s] = {v:s,n:0}
    }
    o[s].n++
  }
  let v=Object.values(o)
  return v.sort(function(a,b){return b.n - a.n})
}

function calculateMeanAndStandardDeviation(numbers) {
  const n = numbers.length;

  // Calculate mean (average)
  const mean = numbers.reduce((sum, value) => sum + value, 0) / n;

  // Calculate squared differences from the mean
  const squaredDifferences = numbers.map(value => Math.pow(value - mean, 2));

  // Calculate variance (average of squared differences)
  const variance = squaredDifferences.reduce((sum, squaredDiff) => sum + squaredDiff, 0) / n;

  // Standard deviation is the square root of variance
  const standardDeviation = Math.sqrt(variance);

  return {mean,standardDeviation};
}

function cleanIntermediatePoints(pts,eps = .01){
  // get rid of colinear points
  let mLast
  if(pts.length < 3)
    return pts
  let pts2 = [clonePoint(pts[0])]
  for(let i=1;i<pts.length;i++){
    let m = (pts[i].y-pts[i-1].y)/(pts[i].x-pts[i-1].x)
    if(m == mLast || Math.abs(m - mLast) < eps)
      pts2[pts2.length-1] = clonePoint(pts[i])
    else
      pts2.push(clonePoint(pts[i]))
    if(pts2.length > 1 && Math.abs(pts2[pts2.length-2].x - pts2[pts2.length-1].x) < eps && Math.abs(pts2[pts2.length-2].y - pts2[pts2.length-1].y) < eps)
      pts2.pop()
    mLast = m
  }
  return pts2
}

function simplifyPoints(a,nDec=0){
  let a2 = [],pt
  let bz = a.length > 0 && a[0].z != null
  for(let i=0;i<a.length;i++){
    if(nDec != 0){
      pt = {x:Number(a[i].x.toFixed(nDec)),y:Number(a[i].y.toFixed(nDec))}
      if(bz)
        pt.z = Number(a[i].z.toFixed(nDec))
    }
    else{
      pt = {x:Math.round(a[i].x),y:Math.round(a[i].y)}
      if(bz)
        pt.z = Math.round(a[i].z)
    }
    if(pt.x == -0) pt.x = 0
    if(pt.y == -0) pt.y = 0
    if(pt.z == -0) pt.z = 0
    if(i==0 || pt.x != a2[a2.length-1].x || pt.y != a2[a2.length-1].y || (bz && pt.z != a2[a2.length-1].z) )
      a2.push(pt)
  }
  return a2
}

function repeat(a,n=2){
  let b = a
  for(let i=1; i<n;i++)
    b = b.concat(a)
  return b
}

function getPathLength(a0){
  let a
  if(a0[0].sPerimeter == null)
    a = augmentPoints(a0)
  else
    a = a0
  return a[a.length-1].sPerimeter
}

function getLongestSideDistance(a0){
  let i = getLongestSideIndex(a0)
  let j = i == a0.length-1 ? 0 : i+1
  return a0[j].dPrevious
}

function getLongestSideIndex(a0){
  let a
  // if(a0[0].sPerimeter == null || a0[0].sPerimeter != 0)
    a = augmentPoints(a0)
  // else
    // a = a0
  let iMax = 0
  let dMax = 0
  for(let i=0;i<a.length;i++){
    if(a[i].dPrevious > dMax){
      iMax = i
      dMax = a[i].dPrevious
    }
  }
  if(iMax == 0)
    iMax = a.length
  return iMax-1
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
    if(i == a.length-1){
      d = distance(a[i],a[0])
      a[0].sPerimeterFull = a[i].sPerimeter + d
      a[0].dPrevious = d
    }
  }
  return a
}

function averageZ(pts){
  return averageP(pts,'z')
}

function averageP(pts,p,dec=4,op){
  let s=0
  let smin = Infinity
  let smax = -Infinity
  for(let i=0;i<pts.length;i++){
    s+=pts[i][p]
    smin =Math.min(smin,pts[i][p])
    smax =Math.max(smax,pts[i][p])
  }
  let v = (s/pts.length)
  if(op=='min')
    v=smin
  else if(op =='max')
    v=smax
  return pts.length == 0 ? 0 : Number(v.toFixed(dec))
}

function processPoints(a,bCalcArea=false){
  let xs = 0, ys = 0, xmin = Infinity, xmax = -Infinity, ymin = Infinity, ymax = -Infinity;
  let zs = 0, zmin = Infinity, zmax = -Infinity
  let xminy,xmaxy;
  let total=0
  for(let i=0;i<a.length;i++){
    let p=a[i]
    if(Array.isArray(p))
      p = {x:p[0],y:p[1],z:p[2]}
    xs += p.x
    ys += p.y
    xmin = Math.min(xmin,p.x)
    xmax = Math.max(xmax,p.x)
    ymin = Math.min(ymin,p.y)
    ymax = Math.max(ymax,p.y)
    if(p.z != null){
      zs += p.z
      zmin = Math.min(zmin,p.z)
      zmax = Math.max(zmax,p.z)
    }
    if(p.x == xmin) xminy = p.y
    if(p.x == xmax) xmaxy = p.y
    if(bCalcArea){
      let addX = a[i].x
      let addY = a[i == a.length - 1 ? 0 : i + 1].y
      let subX = a[i == a.length - 1 ? 0 : i + 1].x
      let subY = a[i].y

      total += (addX * addY * 0.5)
      total -= (subX * subY * 0.5)
    }
  }
  if(a.length==0){
    return {
      xa:0,ya:0,xmin:0,xmax:0,ymin:0,ymax:0,xminy:0,xmaxy:0,
      width:0,height:0,s:0,xm:0,ym:0,area:0,ptc:{x:0,y:0},ptcm:{x:0,y:0},r0:0
    }
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
          ym: ymin+.5*h,
          area:Math.abs(total)
        }
  o.ptc = {x:o.xa,y:o.ya}
  o.ptcm = {x:o.xm,y:o.ym}
  if(a[0].z != null){
    o.zmin = zmin
    o.zmax = zmax
    o.depth = zmax - zmin
    o.zm = zmin +.5*o.depth
    o.za = zs/a.length
    o.ptc.z = o.za
    o.ptcm.z = o.zm
  }
  let pn = getPointNearestCoordinate(a,o.ptc)
  o.r0 = distance(o.ptc,pn)
  return o
}

function areaOfTriangle(pts){
  let a = pts[0].x*(pts[1].y-pts[2].y) + pts[1].x*(pts[2].y-pts[0].y) + pts[2].x*(pts[0].y-pts[1].y)
  return Math.abs(a/2)
}

function areaOfQuad(pts){
  let a1 = areaOfTriangle([pts[0],pts[1],pts[2]])
  let a2 = areaOfTriangle([pts[2],pts[3],pts[0]])
  return a1+a2
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

function convert3DToPolarXYZ(origin,radius,pt){
  origin = origin == null ? {x:0,y:0,z:0} : origin
  radius = radius == null ? 1 : radius
  let pt2 = subtractPoint(pt,origin)
  pt2 = scalePoint(pt2,1/radius)
  let azimuth = Math.atan2(pt2.y, pt2.x)
  let inclination = Math.acos(constrain(pt2.z,-1,1))
  let pto = clonePoint(pt)
  pto.fxy = map(azimuth,-Math.PI,Math.PI,0,1)
  pto.fz = easeInOutQuad(map(inclination,0,Math.PI,0,1))
  return pto
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

function paintWaterColorBlob(dc,pts,c,a,nBase,n,fVary,c2){
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
    else if(c2 != null)
      dc.fillStyle = rgbToString(i % 2 == 0 ? c :  c2,a)
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

function createColorStopsForGradient(aClr,alpha,n,aWeights,nColorVary=0,ftVary=1,aStops0){
  // ftVary >= 1
  // aStops0 if defined then use the same t values
  let aStops = []
  let t=0
  n = Math.floor(n)
  for(let i=0; i < n; i++){
    let c = choose(aClr,aWeights)
    if(nColorVary!=0)
      c = addNoiseToColor(c,nColorVary)
    if(i==n-1)
      t=1
    if(aStops0 != null)
      t = aStops0[i].t
    let a = typeof alpha == 'function' ? alpha(i,n,t) : (Array.isArray(alpha) ? choose(alpha) : alpha)
    let o ={
      t:t,
      cs:rgbToString(c,a),
      c:c,
      alpha:a
    }
    aStops.push(o)
    t += 1/(n-1) * (ftVary == 1 ? 1 : random(1/ftVary,ftVary))
    t = constrain(t,0,Math.min(1,(i+1)/(n-1)))
  }
  return aStops
}

function drawRadialGradient(dc,x,y,r,aStops,aClr,aAlpha){
  var gradient = dc.createRadialGradient(x, y, 0, x, y, r)
  for(let i=0;i<aStops.length;i++){
    gradient.addColorStop(aStops[i], rgbToString(aClr[i],aAlpha[i]))
  }
  dc.fillStyle = gradient
  dc.beginPath()
  dc.ellipse(x,y,r,r,0,0,2*Math.PI)
  dc.fill()
}

function drawStarburst(dc,x,y,r,c,alpha=1,n=12,fVar=0,fSkinny=1,a0=0,a1=Math.PI*2,bAlternate=true){
  // fVar in [0,1]
  c = c == null ? [200,235,255] : c
  for(let k=0;k<n;k++){
    let a = lerp(k/n,0,2*Math.PI)
    if(fVar!=0)
      a += random(-fVar*.025,fVar*.025)*Math.PI*2
    if(a < a0 || a > a1) continue
    let r0 = fVar == 0 ? r : r*random(1-fVar,1+fVar)
    let rm = (k % 2 == 1) ? 1 : 1.6
    if(!bAlternate)
      rm = 1
    let xh = x + rm*r0*Math.cos(a)
    let yh = y + rm*r0*Math.sin(a)
    let ptsn = addIntermediatePoints([{x:x,y:y},{x:xh,y:yh}],10)
    // drawMultiStyleCurve(dc,ptsn, c, 1, r*.15, c, .1, .1)
    ptsn = getCurvePoly(ptsn,r*.15*fSkinny,.1)
    fillPoly(dc,ptsn,c,alpha)
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

function getConvexHull(pts){
  pts = pts.sort(function(a,b){
    if (a.x < b.x) return -1
    if (a.x > b.x) return 1
    if (a.y < b.y) return -1
    if (a.y > b.y) return +1
    return 0
  })

  if(pts.length <= 1) return pts
  // monotone chain algorithm
  let UHull = []
  for (let i = 0; i < pts.length; i++) {
    let p = pts[i]
    while (UHull.length >= 2) {
      let q = UHull[UHull.length - 1]
      let r = UHull[UHull.length - 2]
      if ((q.x - r.x) * (p.y - r.y) >= (q.y - r.y) * (p.x - r.x))
        UHull.pop()
      else
        break
    }
    UHull.push(p)
  }
  UHull.pop()
  let LHull = []
  for (let i = pts.length - 1; i >= 0; i--){
    let p = pts[i]
    while (LHull.length >= 2){
      let q = LHull[LHull.length - 1]
      let r = LHull[LHull.length - 2]
      if ((q.x - r.x) * (p.y - r.y) >= (q.y - r.y) * (p.x - r.x))
        LHull.pop()
      else
        break
    }
    LHull.push(p)
  }
  LHull.pop()
  if(UHull.length == 1 && LHull.length == 1 && UHull[0].x == LHull[0].x && UHull[0].y == LHull[0].y)
    return UHull
  else
    return UHull.concat(LHull);
}

function getRandomPointsInRect(x,y,w,h,n,bInteger){
  let a = []
  for(let i=0;i<n;i++)
    a.push(getRandomPointInRect(x,y,w,h,bInteger))
  return a
}

function getRandomPointsOnPoly(poly,n){
  let pts=[]
  for(let i=0;i<n;i++){
    pts.push(lerpPathDistance(random(),poly))
  }
  return pts
}

function getRegularPointsInSphere(center, r, n, fAdjust=1) {
  let nCube = 6/Math.PI*n
  let nSide = Math.ceil(Math.pow(nCube,1/3))
  // generated a cube of evenly spaced points with nSide points along each side
  let square = makeRectPoly(center.x-r*fAdjust,center.y-r*fAdjust,2*r*fAdjust,2*r*fAdjust)
  let pts = getRandomPointsInPoly(square,nSide*nSide,2,null,null,1/1.5)
  let ptsAll = []
  for(let layer=0;layer < nSide;layer++){
    let z = map(layer,0,nSide-1,center.z - r*fAdjust,center.z + r*fAdjust)
    ptsAll = ptsAll.concat(assignPropertyToElements(pts,'z',z,true))
  }
  // filter to only keep ones inside sphere
  let aKeep = ptsAll.filter(function(e){
    let d = distance(e,center)
    return d <= r
  })
  if(aKeep.length < n && n > 0)
    return getRegularPointsInSphere(center, r, n, fAdjust*.8)
  else if(aKeep.length > n)
    aKeep = aKeep.slice(0,n)
  return aKeep
}

function getRandomPointsInSphere(center, radius, n, bOnSurface=false) {
  let pts = []
  let u,v
  for (let i = 0; i < n; i++) {
    // Generate random spherical coordinates
    u = random() // Random number between 0 and 1
    v = random() // Random number between 0 and 1

    // Convert to spherical coordinates
    let theta = 2 * Math.PI * u // Azimuthal angle (longitude)
    let phi = Math.acos(2 * v - 1) // Polar angle (latitude)

    let r = bOnSurface ? radius : Math.cbrt(random())*radius
    // Convert spherical coordinates to Cartesian coordinates
    let x = center.x + r * Math.sin(phi) * Math.cos(theta)
    let y = center.y + r * Math.sin(phi) * Math.sin(theta)
    let z = center.z + r * Math.cos(phi)

    pts.push({ x, y, z })
  }

  return pts
}

function getEvenlySpacedPointsOnSphere(center, radius, n) {
  const points = []

  for (let i = 0; i < n; i++) {
    const phi = Math.acos(1 - (2 * i) / n)
    const theta = Math.PI * (1 + Math.sqrt(5)) * i

    const x = center.x + radius * Math.cos(theta) * Math.sin(phi)
    const y = center.y + radius * Math.sin(theta) * Math.sin(phi)
    const z = center.z + radius * Math.cos(phi)

    points.push({ x, y, z })
  }

  return points
}

function addNoiseToMesh(m,d){
  if(d==0)return
  m.vertices.forEach(function(pt){
    pt.x += d*random(-1,1)
    pt.y += d*random(-1,1)
    pt.z += d*random(-1,1)
  })
}

function generateMeshFromPath(path,nAlong,nAround,radius,fn){
  const vertices = []
  const faces = []

  let bOneSided = false
  if(nAround == 1){
    nAround = 2
    bOneSided = true
  }
  let fnAddFacesFromRings = function(r1,r2){
    for(let k=0;k<r1.length;k++){
      let k2 = (k+1)%r1.length
      faces.push([{i:r1[k]},{i:r2[k]},{i:r2[k2]},{i:r1[k2]}])
      if(bOneSided)
        break
    }
  }
  let vAlong,ptPrev,vNormal,r=radius,ptAround,angle,ringPrev
  for(let i=0;i<nAlong;i++){
    let t = i/(nAlong-1)
    let pt = lerpPathDistance(t,path)
    if(i == 0)
      vAlong = vectorFrom(pt,lerpPathDistance(t+1/(nAlong-1),path),true)
    else
      vAlong = vectorFrom(ptPrev,pt,true)
    vNormal = getOrthogonalUnitVectors(vAlong)[1]
    let ring = []
    for(let j=0;j<nAround;j++){
      let tAround = j/nAround // does not go to 1
      if(typeof radius == 'function')
        r = radius(pt,i,j,t,tAround)
      angle = tAround*Math.PI*2
      ptAround = addPoint(pt,vNormal,r)
      rotateAroundAxis(ptAround, vAlong, angle, pt, true)
      ptAround.i = i
      ptAround.j = j
      vertices.push(ptAround)
      ring.push(vertices.length-1)
    }
    if(ringPrev != null)
      fnAddFacesFromRings(ringPrev,ring)
    ringPrev = ring.slice()
    ptPrev = pt
  }
  let ptc = {
    x: averagePropertyValue(vertices,'x'),
    y: averagePropertyValue(vertices,'y'),
    z: averagePropertyValue(vertices,'z')
  }
  return {type:'mesh',vertices:vertices,faces:faces,ptc:ptc}
}

function generatePlaneMesh(nAcross,nDown,x,y,w,h,z,bQuads=true,fn){
  const vertices = []
  const faces = []

  for(let i=0;i<nAcross;i++){
    let fx = i/(nAcross-1)
    let x1 = lerp(fx,x,x+w)
    for(let j=0;j<nDown;j++){
      let fy = j/(nDown-1)
      let y1 = lerp(fy,y,y+h)
      let pt = {x:x1,y:y1,z:z}
      if(fn != null)
        pt = fn(pt,i,j,fx,fy)
      pt.i=i 
      pt.j=j
      vertices.push(pt)
      if(i < nAcross-1 && j < nDown-1){
        let i0 = i*nDown + j
        let i1 = (i+1)*nDown + j
        let i2 = (i+1)*nDown + j+1
        let i3 = i*nDown + j+1
        if(bQuads)
          faces.push([{i:i0},{i:i1},{i:i2},{i:i3}])
        else{
          faces.push([{i:i0},{i:i1},{i:i2}])
          faces.push([{i:i2},{i:i3},{i:i0}])
        }
      }
    }
  }

  let ptc = {
    x: averagePropertyValue(vertices,'x'),
    y: averagePropertyValue(vertices,'y'),
    z: averagePropertyValue(vertices,'z')
  }
  return {type:'mesh',vertices:vertices,faces:faces,ptc:ptc}
}

function generateIcosphereMesh(origin, radius, subdivisionLevel) {
  // old algorithm produced redundant vertices
    const cache = {};
    let vertices = [];
    const faces = [];

    // Define icosahedron vertices
    const phi = (1 + Math.sqrt(5)) / 2;

    let icosahedronVertices = [
        { x: -1, y: phi, z: 0 },
        { x: 1, y: phi, z: 0 },
        { x: -1, y: -phi, z: 0 },
        { x: 1, y: -phi, z: 0 },

        { x: 0, y: -1, z: phi },
        { x: 0, y: 1, z: phi },
        { x: 0, y: -1, z: -phi },
        { x: 0, y: 1, z: -phi },

        { x: phi, y: 0, z: -1 },
        { x: phi, y: 0, z: 1 },
        { x: -phi, y: 0, z: -1 },
        { x: -phi, y: 0, z: 1 },
    ]

    icosahedronVertices = icosahedronVertices.map(pt => normalize(pt))
    // Create initial icosahedron faces
    let icosahedronFaces = [
        [0, 11, 5],
        [0, 5, 1],
        [0, 1, 7],
        [0, 7, 10],
        [0, 10, 11],

        [1, 5, 9],
        [5, 11, 4],
        [11, 10, 2],
        [10, 7, 6],
        [7, 1, 8],

        [3, 9, 4],
        [3, 4, 2],
        [3, 2, 6],
        [3, 6, 8],
        [3, 8, 9],

        [4, 9, 5],
        [2, 4, 11],
        [6, 2, 10],
        [8, 6, 7],
        [9, 8, 1],
    ];

    vertices.push(...icosahedronVertices)

    let middlePoint = function(point1, point2, cache, vertices) {
      const vertex1 = vertices[point1]
      const vertex2 = vertices[point2]

      const middle = {
          x: (vertex1.x + vertex2.x) / 2,
          y: (vertex1.y + vertex2.y) / 2,
          z: (vertex1.z + vertex2.z) / 2,
      };

      const normalized = normalize(middle)
      normalized.x = Number(normalized.x.toFixed(3))
      normalized.y = Number(normalized.y.toFixed(3))
      normalized.z = Number(normalized.z.toFixed(3))
      key = JSON.stringify(normalized)
      if(cache[key])
        return cache[key]

      vertices.push(normalized)
      cache[key] = vertices.length-1

      return cache[key]
    }

    let middlePoint2 = function(point1, point2, cache, vertices) {
      const smallerIndex = Math.min(point1, point2);
      const greaterIndex = Math.max(point1, point2);
      const key = smallerIndex + ',' + greaterIndex;

      if (cache[key]) {
        // return clonePoint(cache[key])
        return cache[key]
      }

      const vertex1 = vertices[smallerIndex];
      const vertex2 = vertices[greaterIndex];

      const middle = {
          x: (vertex1.x + vertex2.x) / 2,
          y: (vertex1.y + vertex2.y) / 2,
          z: (vertex1.z + vertex2.z) / 2,
      };

      const normalized = normalize(middle)
      cache[key] = normalized;

      return normalized
    }

    let fn1 = function(a){
      return a.map(function(i){
        return {i:i}
      })
    }
    // Subdivide each face
    for (let i = 0; i < subdivisionLevel; i++) {
        const newFaces = [];
        for (const face of icosahedronFaces) {
            const i1 = middlePoint(face[0], face[1], cache, vertices);
            const i2 = middlePoint(face[1], face[2], cache, vertices);
            const i3 = middlePoint(face[2], face[0], cache, vertices);

            newFaces.push([face[0], i1, i3])
            newFaces.push([face[1], i2, i1])
            newFaces.push([face[2], i3, i2])
            newFaces.push([i1, i2, i3])
        }
        icosahedronFaces.length = 0;
        icosahedronFaces.push(...newFaces);
    }

    // position vertices and scale by radius
    vertices = vertices.map(function(vertex){
      let v2
      if(typeof radius == 'function')
        v2 = radius(vertex,origin)
      else
        v2 = addPoint(origin,vertex,radius)
      return v2
    })
    // convert to my format
    icosahedronFaces = icosahedronFaces.map(function(face){
      return fn1(face)
    })
    let ptc = {
      x: averagePropertyValue(vertices,'x'),
      y: averagePropertyValue(vertices,'y'),
      z: averagePropertyValue(vertices,'z')
    }

    return {type:'mesh', vertices:vertices, faces: icosahedronFaces, ptc:ptc }
}

function generateIcosphereMesh2(origin, radius, subdivisionLevel) {
    const cache = {};
    let vertices = [];
    const faces = [];

    // Define icosahedron vertices
    const phi = (1 + Math.sqrt(5)) / 2;

    let icosahedronVertices = [
        { x: -1, y: phi, z: 0 },
        { x: 1, y: phi, z: 0 },
        { x: -1, y: -phi, z: 0 },
        { x: 1, y: -phi, z: 0 },

        { x: 0, y: -1, z: phi },
        { x: 0, y: 1, z: phi },
        { x: 0, y: -1, z: -phi },
        { x: 0, y: 1, z: -phi },

        { x: phi, y: 0, z: -1 },
        { x: phi, y: 0, z: 1 },
        { x: -phi, y: 0, z: -1 },
        { x: -phi, y: 0, z: 1 },
    ]

    icosahedronVertices = icosahedronVertices.map(pt => normalize(pt))
    // Create initial icosahedron faces
    let icosahedronFaces = [
        [0, 11, 5],
        [0, 5, 1],
        [0, 1, 7],
        [0, 7, 10],
        [0, 10, 11],

        [1, 5, 9],
        [5, 11, 4],
        [11, 10, 2],
        [10, 7, 6],
        [7, 1, 8],

        [3, 9, 4],
        [3, 4, 2],
        [3, 2, 6],
        [3, 6, 8],
        [3, 8, 9],

        [4, 9, 5],
        [2, 4, 11],
        [6, 2, 10],
        [8, 6, 7],
        [9, 8, 1],
    ];

    vertices.push(...icosahedronVertices)

    let middlePoint = function(point1, point2, cache, vertices) {
      const smallerIndex = Math.min(point1, point2);
      const greaterIndex = Math.max(point1, point2);
      const key = smallerIndex + ',' + greaterIndex;

      if (cache[key]) {
        // return clonePoint(cache[key])
        return cache[key]
      }

      const vertex1 = vertices[smallerIndex];
      const vertex2 = vertices[greaterIndex];

      const middle = {
          x: (vertex1.x + vertex2.x) / 2,
          y: (vertex1.y + vertex2.y) / 2,
          z: (vertex1.z + vertex2.z) / 2,
      };

      const normalized = normalize(middle)
      cache[key] = normalized;

      return normalized
    }

    let fn1 = function(a){
      return a.map(function(i){
        return {i:i}
      })
    }
    // Subdivide each face
    for (let i = 0; i < subdivisionLevel; i++) {
        const newFaces = [];
        for (const face of icosahedronFaces) {
            const mid1 = middlePoint(face[0], face[1], cache, vertices);
            const mid2 = middlePoint(face[1], face[2], cache, vertices);
            const mid3 = middlePoint(face[2], face[0], cache, vertices);

            const newIndex1 = vertices.length;
            const newIndex2 = vertices.length + 1;
            const newIndex3 = vertices.length + 2;

            vertices.push(mid1, mid2, mid3);

            newFaces.push([face[0], newIndex1, newIndex3])
            newFaces.push([face[1], newIndex2, newIndex1])
            newFaces.push([face[2], newIndex3, newIndex2])
            newFaces.push([newIndex1, newIndex2, newIndex3])
        }
        icosahedronFaces.length = 0;
        icosahedronFaces.push(...newFaces);
    }

    // position vertices and scale by radius
    vertices = vertices.map(function(vertex){
      let v2
      if(typeof radius == 'function')
        v2 = radius(vertex,origin)
      else
        v2 = addPoint(origin,vertex,radius)
      return v2
    })
    // convert to my format
    icosahedronFaces = icosahedronFaces.map(function(face){
      return fn1(face)
    })
    let ptc = {
      x: averagePropertyValue(vertices,'x'),
      y: averagePropertyValue(vertices,'y'),
      z: averagePropertyValue(vertices,'z')
    }

    return {type:'mesh', vertices:vertices, faces: icosahedronFaces, ptc:ptc }
}

function generateSphereMesh(origin, radius, numDivisions, bQuads) {
  const vertices = [];
  const faces = [];

  // Generate vertices
  let x,y,z,r=radius
  let bRadiusFunction = typeof radius == 'function'
  for (let i = 0; i <= numDivisions; i++) {
    const phi = (i / numDivisions) * Math.PI;
    y = origin.y + r * Math.cos(phi);

    for (let j = 0; j <= numDivisions; j++) {
      const theta = (j / numDivisions) * 2 * Math.PI;
      if(bRadiusFunction){
        r = radius(theta,phi,i,j,numDivisions)
        y = origin.y + r * Math.cos(phi)
      }
      x = origin.x + r * Math.sin(phi) * Math.cos(theta);
      z = origin.z + r * Math.sin(phi) * Math.sin(theta);

      vertices.push({ x, y, z, i, j })
      vertices[vertices.length-1].aFaces = []
    }
  }
  // note that .aFaces is not set in all mesh geenrating functions and gets messed up when splitting faces
  let fnAddFace = function(a){
    let face = []
    for(let k=0;k<a.length;k++){
      face.push({i:a[k]})
      vertices[a[k]].aFaces.push(faces.length)
    }
    faces.push(face)
  }
  // Generate faces (triangles or quads)
  for (let i = 0; i < numDivisions; i++) {
    for (let j = 0; j < numDivisions; j++) {
      const vertexIndex = i * (numDivisions + 1) + j;
      const nextRowVertexIndex = vertexIndex + numDivisions + 1;

      if (bQuads) {
        // Create quads
        fnAddFace([vertexIndex,vertexIndex + 1,nextRowVertexIndex + 1,nextRowVertexIndex])
        // faces.push([{i:vertexIndex}, {i:vertexIndex + 1}, {i:nextRowVertexIndex + 1}, {i:nextRowVertexIndex}]);
      } else {
        // Create triangles
        fnAddFace([vertexIndex,nextRowVertexIndex,vertexIndex + 1])
        fnAddFace([vertexIndex+1,nextRowVertexIndex,nextRowVertexIndex + 1])
        // faces.push([{i:vertexIndex}, {i:nextRowVertexIndex}, {i:vertexIndex + 1}]);
        // faces.push([{i:vertexIndex + 1}, {i:nextRowVertexIndex}, {i:nextRowVertexIndex + 1}]);
      }
    }
  }

  let ptc = {
    x: averagePropertyValue(vertices,'x'),
    y: averagePropertyValue(vertices,'y'),
    z: averagePropertyValue(vertices,'z')
  }
  return {type:'mesh',vertices:vertices,faces:faces,ptc:ptc}
}

function generateCubicalMesh(origin, width, height, depth, dx, dy, dz, bOutsideOnly=false, bTriangular=false) {
  // origin is top left front
  const vertices = [];
  let faces = [];

  let isOutside=function(x,y,z){
    if( (x==0 || x==width) || (y==0 || y==height) || (z==0 || z==depth))
      return true
    return false
  }

  // Generate vertices
  let a = []
  for (let x = 0; x <= width; x++) {
    a[x] = []
    for (let y = 0; y <= height; y++) {
      a[x][y] = []
      for (let z = 0; z <= depth; z++) {
        if(bOutsideOnly && !isOutside(x,y,z))
          continue
        a[x][y][z] = vertices.length
        const vertex = {
            x: origin.x + x * dx,
            y: origin.y + y * dy,
            z: origin.z + z * dz,
            i:x,
            j:y,
            k:z
        };
        vertices.push(vertex);
      }
    }
  }

  let fCache = {}
  let fn1 = function(a,ic){
    if(bOutsideOnly){
      // if any are null then skip
      let bAllGood=true
      a.forEach(function(v){if(v==null) bAllGood=false})
      if(!bAllGood)
        return
    }
    let key=''
    a.toSorted(function(b1,b2){return b1-b2}).forEach(function(e){key+=e+','})
    if(fCache[key]==null){
      fCache[key] = a.map(function(i){return {i:i}})
      fCache[key].ic = ic
      faces.push(fCache[key])
    }
  }
  // Generate faces
  let ic=0
  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      for (let z = 0; z < depth; z++) {
        const v0 = a[x][y][z]
        const v1 = a[x][y][z+1]
        const v2 = a[x][y+1][z]
        const v3 = a[x][y+1][z+1]
        const v4 = a[x+1][y][z]
        const v5 = a[x+1][y][z+1]
        const v6 = a[x+1][y+1][z]
        const v7 = a[x+1][y+1][z+1]

        // Left face
        fn1([v0, v1, v3, v2],ic)

        // Right face
        fn1([v4, v5, v7, v6],ic)

        // Top face
        fn1([v0, v1, v5, v4],ic)

        // Bottom face
        fn1([v2, v3, v7, v6],ic)

        // Front face
        fn1([v0, v4, v6, v2],ic)

        // Back face
        fn1([v1, v5, v7, v3],ic)
        ic++
      }
    }
  }
  if(bTriangular){
    // split all the faces into 2 triangles
    let faces2 = []
    faces.forEach(function(face){
      faces2.push([face[0],face[1],face[2]])
      faces2.push([face[2],face[3],{i:face[0].i}])
    })
    faces = faces2
  }

  let ptc = {
    x: averagePropertyValue(vertices,'x'),
    y: averagePropertyValue(vertices,'y'),
    z: averagePropertyValue(vertices,'z')
  }

  return {type:'mesh',vertices:vertices,faces:faces,ptc:ptc}
}

function generateSphereMesh2(origin, radius, numDivisions,bQuads) {
  const vertices = []
  const triangles = []
  // const numDivisions = Math.ceil(Math.sqrt(n/2))
  let bFn = typeof radius == 'function'
  let r = radius
  let v1,v2,v3,v4
  let av = []
  for (let i = 0; i <= numDivisions; i++) {
    const theta1 = ((i - 0) / numDivisions) * Math.PI
    const theta2 = ((i + 1) / numDivisions) * Math.PI

    v2 = v4 = null
    for (let j = 0; j < numDivisions * 2; j++) {
      if(av[j] == null)
        av[j]=[]
      // phi is 'x'
      const phi1 = ((j - 0)/ (numDivisions * 2)) * (2 * Math.PI)
      const phi2 = ((j + 1) / (numDivisions * 2)) * (2 * Math.PI)

      r = bFn ? radius(theta1,phi1,i,j,numDivisions) : r
      // Vertices
      if(i > 0){
        v1 = clonePoint(av[j][i-1][3]) // old v3
        v2 = clonePoint(av[j][i-1][2]) // old v4
      }
      else{
        v1 = v2 != null ? v2 : {
          x: origin.x + r * Math.sin(theta1) * Math.cos(phi1),
          y: origin.y + r * Math.sin(theta1) * Math.sin(phi1),
          z: origin.z + r * Math.cos(theta1),
        }
        r = bFn ? radius(theta1,phi2,i,j,numDivisions) : r
        v2 = {
          x: origin.x + r * Math.sin(theta1) * Math.cos(phi2),
          y: origin.y + r * Math.sin(theta1) * Math.sin(phi2),
          z: origin.z + r * Math.cos(theta1),
        }
      }
      r = bFn ? radius(theta2,phi1,i,j,numDivisions) : r
      v3 = v4 != null ? v4 : {
        x: origin.x + r * Math.sin(theta2) * Math.cos(phi1),
        y: origin.y + r * Math.sin(theta2) * Math.sin(phi1),
        z: origin.z + r * Math.cos(theta2),
      }
      r = bFn ? radius(theta2,phi2,i,j,numDivisions) : r
      v4 = {
        x: origin.x + r * Math.sin(theta2) * Math.cos(phi2),
        y: origin.y + r * Math.sin(theta2) * Math.sin(phi2),
        z: origin.z + r * Math.cos(theta2),
      }
      av[j][i] = [v1,v2,v4,v3]
      if(bQuads){
        let quad = [v1,v2,v4,v3]
        quad.x = j
        quad.y = i
        triangles.push(quad)
      }
      else{
        // Define two triangles
        // if(!equalPoints(v1,v2) && !equalPoints(v2,v3) && !equalPoints(v1,v3))
        let tri = [v1,v2,v3]
        tri.x = j
        tri.y = i
        triangles.push(tri)
        // if(!equalPoints(v4,v2) && !equalPoints(v2,v3) && !equalPoints(v3,v4))
        tri = [v3, v2, v4]
        tri.x = j
        tri.y = i
        triangles.push(tri)
      }
    }
  }

  return triangles
}

function generateTorusMesh(ptc, radius = 1, tube = 0.4, radialSegments = 12, tubularSegments = 48, arc = Math.PI * 2, bQuads=false ){

  radialSegments = Math.floor( radialSegments );
  tubularSegments = Math.floor( tubularSegments );

  // buffers

  const indices = [];
  const vertices = [];
  const normals = [];
  const uvs = [];

  // helper variables

  const center = {};
  const vertex = {};
  const normal = {};

  // generate vertices, normals and uvs
  let radius0 = radius
  let tube0 = tube
  for ( let j = 0; j <= radialSegments; j ++ ) {

    for ( let i = 0; i <= tubularSegments; i ++ ) {
      if(typeof radius == 'function'){
        let oTemp = radius(j/radialSegments,i/tubularSegments)
        radius0 = oTemp.radius
        tube0 = oTemp.tube
      }
      const u = i / tubularSegments * arc;
      const v = j / radialSegments * Math.PI * 2;

      // vertex

      vertex.x = ptc.x + ( radius0 + tube0 * Math.cos( v ) ) * Math.cos( u );
      vertex.y = ptc.y + ( radius0 + tube0 * Math.cos( v ) ) * Math.sin( u );
      vertex.z = ptc.z + tube0 * Math.sin( v );

      vertices.push( {x:vertex.x, y:vertex.y, z:vertex.z, iTube:i, iSeg:j} );

      // normal

      // center.x = radius * Math.cos( u );
      // center.y = radius * Math.sin( u );
      // normal.subVectors( vertex, center ).normalize();

      // normals.push( normal.x, normal.y, normal.z );

      // uv

      // uvs.push( i / tubularSegments );
      // uvs.push( j / radialSegments );

    }

  }

  // generate indices

  let faces=[]
  for ( let j = 1; j <= radialSegments; j ++ ) {

    for ( let i = 1; i <= tubularSegments; i ++ ) {

      // indices

      const a = ( tubularSegments + 1 ) * j + i - 1;
      const b = ( tubularSegments + 1 ) * ( j - 1 ) + i - 1;
      const c = ( tubularSegments + 1 ) * ( j - 1 ) + i;
      const d = ( tubularSegments + 1 ) * j + i;

      // faces
      if(bQuads){
        faces.push([{i:a},{i:b},{i:c},{i:d}])
      }
      else{
        // indices.push( a, b, d );
        // indices.push( b, c, d );
        faces.push([{i:a},{i:b},{i:d}])
        faces.push([{i:b},{i:c},{i:d}])
      }
    }

  }
  let ptcm = {
    x: averagePropertyValue(vertices,'x'),
    y: averagePropertyValue(vertices,'y'),
    z: averagePropertyValue(vertices,'z')
  }
  return {type:'mesh',vertices:vertices,faces:faces,ptc:ptcm}
}

function generateTorusMesh2(ptc, radius = 1, tube = 0.4, radialSegments = 12, tubularSegments = 48, arc = Math.PI * 2 ){

  radialSegments = Math.floor( radialSegments );
  tubularSegments = Math.floor( tubularSegments );

  // buffers

  const indices = [];
  const vertices = [];
  const normals = [];
  const uvs = [];

  // helper variables

  const center = {};
  const vertex = {};
  const normal = {};

  // generate vertices, normals and uvs

  for ( let j = 0; j <= radialSegments; j ++ ) {

    for ( let i = 0; i <= tubularSegments; i ++ ) {

      const u = i / tubularSegments * arc;
      const v = j / radialSegments * Math.PI * 2;

      // vertex

      vertex.x = ptc.x + ( radius + tube * Math.cos( v ) ) * Math.cos( u );
      vertex.y = ptc.y + ( radius + tube * Math.cos( v ) ) * Math.sin( u );
      vertex.z = ptc.z + tube * Math.sin( v );

      vertices.push( {x:vertex.x, y:vertex.y, z:vertex.z, iTube:i, iSeg:j} );

      // normal

      // center.x = radius * Math.cos( u );
      // center.y = radius * Math.sin( u );
      // normal.subVectors( vertex, center ).normalize();

      // normals.push( normal.x, normal.y, normal.z );

      // uv

      // uvs.push( i / tubularSegments );
      // uvs.push( j / radialSegments );

    }

  }

  // generate indices

  let faces=[]
  for ( let j = 1; j <= radialSegments; j ++ ) {

    for ( let i = 1; i <= tubularSegments; i ++ ) {

      // indices

      const a = ( tubularSegments + 1 ) * j + i - 1;
      const b = ( tubularSegments + 1 ) * ( j - 1 ) + i - 1;
      const c = ( tubularSegments + 1 ) * ( j - 1 ) + i;
      const d = ( tubularSegments + 1 ) * j + i;

      // faces

      indices.push( a, b, d );
      indices.push( b, c, d );
      faces.push([vertices[a],vertices[b],vertices[d]])
      faces.push([vertices[b],vertices[c],vertices[d]])
    }

  }
  return faces
}

function generateDinisSurfaceFaces(origin, a, b, numU, numV) {
  const dinisVertices = [];
  const dinisFaces = [];

  for (let i = 0; i < numU; i++) {
    const u = (i / numU) * Math.PI * 2;

    for (let j = 0; j < numV; j++) {
      const v = (j / numV) * (Math.PI * 2 * b);

      const x = a * Math.cos(u) * Math.sin(v) + origin.x;
      const y = a * Math.cos(u) * Math.cos(v) + origin.y;
      const z = a * (Math.sin(u) + b * v) + origin.z;

      dinisVertices.push({ x, y, z });
    }
  }

  for (let i = 0; i < numU - 1; i++) {
    for (let j = 0; j < numV - 1; j++) {
      const currentVertex = i * numV + j;
      const nextVertex = currentVertex + 1;
      const belowVertex = (i + 1) * numV + j;
      const belowNextVertex = belowVertex + 1;

      dinisFaces.push([
        dinisVertices[currentVertex],
        dinisVertices[nextVertex],
        dinisVertices[belowNextVertex],
        dinisVertices[belowVertex]
      ]);
    }
  }

  // Close the surface by connecting the last row to the first row
  for (let j = 0; j < numV - 1; j++) {
    const currentVertex = (numU - 1) * numV + j;
    const nextVertex = currentVertex + 1;
    const belowVertex = j;
    const belowNextVertex = belowVertex + 1;

    dinisFaces.push([
      dinisVertices[currentVertex],
      dinisVertices[nextVertex],
      dinisVertices[belowNextVertex],
      dinisVertices[belowVertex]
    ]);
  }

  return dinisFaces
  // return { vertices: dinisVertices, faces: dinisFaces };
}

function rotatePoints3D_new(points, origin, alpha, beta, gamma) {
  // alpha, beta, gamma are ax,ay,az and in radians
  const { x: ox, y: oy, z: oz } = origin // Origin point

  // Rotation matrix for X-axis
  const xRotationMatrix = [
    [1, 0, 0],
    [0, Math.cos(alpha), -Math.sin(alpha)],
    [0, Math.sin(alpha), Math.cos(alpha)]
  ]

  // Rotation matrix for Y-axis
  const yRotationMatrix = [
    [Math.cos(beta), 0, Math.sin(beta)],
    [0, 1, 0],
    [-Math.sin(beta), 0, Math.cos(beta)]
  ]

  // Rotation matrix for Z-axis
  const zRotationMatrix = [
    [Math.cos(gamma), -Math.sin(gamma), 0],
    [Math.sin(gamma), Math.cos(gamma), 0],
    [0, 0, 1]
  ]

  const rotatedPoints = []

  for (const point of points) {
    const { x, y, z } = point

    // Translate the point to the origin
    const translatedX = x - ox
    const translatedY = y - oy
    const translatedZ = z - oz

    // Rotate the translated point using the rotation matrices
    const rotatedX = xRotationMatrix[0][0] * translatedX + xRotationMatrix[0][1] * translatedY + xRotationMatrix[0][2] * translatedZ
    const rotatedY = yRotationMatrix[1][0] * translatedX + yRotationMatrix[1][1] * translatedY + yRotationMatrix[1][2] * translatedZ
    const rotatedZ = zRotationMatrix[2][0] * translatedX + zRotationMatrix[2][1] * translatedY + zRotationMatrix[2][2] * translatedZ

    // Translate the rotated point back to its original position
    const finalX = rotatedX + ox
    const finalY = rotatedY + oy
    const finalZ = rotatedZ + oz

    rotatedPoints.push({ x: finalX, y: finalY, z: finalZ })
  }

  return rotatedPoints
}

function rotatePoints3D(pts, origin, ax,ay,az) {
    let cosa = Math.cos(ay)
    let sina = Math.sin(ay)

    let cosb = Math.cos(ax)
    let sinb = Math.sin(ax)

    let cosc = Math.cos(az)
    let sinc = Math.sin(az)

    let Axx = cosa*cosb
    let Axy = cosa*sinb*sinc - sina*cosc
    let Axz = cosa*sinb*cosc + sina*sinc

    let Ayx = sina*cosb
    let Ayy = sina*sinb*sinc + cosa*cosc
    let Ayz = sina*sinb*cosc - cosa*sinc

    let Azx = -sinb
    let Azy = cosb*sinc
    let Azz = cosb*cosc

    let pts2 = []
    for (let i = 0; i < pts.length; i++) {
        let px = pts[i].x - origin.x
        let py = pts[i].y - origin.y
        let pz = pts[i].z - origin.z
        pts2[i] = clonePoint(pts[i])
        pts2[i].x = origin.x - (Axx*px + Axy*py + Axz*pz)
        pts2[i].y = origin.y - (Ayx*px + Ayy*py + Ayz*pz)
        pts2[i].z = origin.z - (Azx*px + Azy*py + Azz*pz)
    }
    return pts2
}

function rotatePoints3D_old(point, origin, ax,ay,az) {
  if(Array.isArray(point)){
    let pts = point.map(e => rotatePoints3D_old(e, origin, ax,ay,az))
    return pts
  }
  const { x, y, z } = point;
  const alpha = ax
  const beta = ay
  const gamma = az

  // Translate the point to the origin
  const translatedX = x - origin.x;
  const translatedY = y - origin.y;
  const translatedZ = z - origin.z;

  // Rotation matrix for X-axis
  const xRotationMatrix = [
    [1, 0, 0],
    [0, Math.cos(alpha), -Math.sin(alpha)],
    [0, Math.sin(alpha), Math.cos(alpha)]
  ];

  // Rotation matrix for Y-axis
  const yRotationMatrix = [
    [Math.cos(beta), 0, Math.sin(beta)],
    [0, 1, 0],
    [-Math.sin(beta), 0, Math.cos(beta)]
  ];

  // Rotation matrix for Z-axis
  const zRotationMatrix = [
    [Math.cos(gamma), -Math.sin(gamma), 0],
    [Math.sin(gamma), Math.cos(gamma), 0],
    [0, 0, 1]
  ];

  // Rotate the translated point using the rotation matrices
  const rotatedX = xRotationMatrix[0][0] * translatedX + xRotationMatrix[0][1] * translatedY + xRotationMatrix[0][2] * translatedZ;
  const rotatedY = yRotationMatrix[1][0] * translatedX + yRotationMatrix[1][1] * translatedY + yRotationMatrix[1][2] * translatedZ;
  const rotatedZ = zRotationMatrix[2][0] * translatedX + zRotationMatrix[2][1] * translatedY + zRotationMatrix[2][2] * translatedZ;

  // Translate the rotated point back to its original position
  const finalX = rotatedX + origin.x;
  const finalY = rotatedY + origin.y;
  const finalZ = rotatedZ + origin.z;

  return { x: finalX, y: finalY, z: finalZ };
}

function getRandomPointsInPoly(pts,n=10,mode=0,bInteger,fRandScale=1,fnTune=1){
  // 0 random, 1 grid, 2 hex grid, 3 hex grid with noise, 4 gaussian, 5 better hex grid with noise
  // will return ~ n pts
  let x,y,p;
  let ptsr = []
  let o = processPoints(pts)
  if(n < 1)
    n = Math.round(o.width*o.height*n)
  if(n*o.width*o.height < 1)
    return ptsr
  if(mode == 0){
    let maxtrials = 20 * n
    let nTrials = 0
    while(nTrials < maxtrials && ptsr.length < n){
      x = random(o.xmin,o.xmax)
      y = random(o.ymin,o.ymax)
      p = {x:x,y:y}
      if(isPointInPoly(pts,p)){
        if(bInteger){
          p.x = Math.round(p.x)
          p.y = Math.round(p.y)
        }
        ptsr.push(p);
      }
      nTrials++
    }
    return ptsr
  }
  if(mode == 4){
    let maxtrials = 10 * n
    let nTrials = 0
    while(nTrials < maxtrials && ptsr.length < n){
      x = randomNormalRange(o.xmin,o.xmax)
      y = randomNormalRange(o.ymin,o.ymax)
      p = {x:x,y:y}
      if(isPointInPoly(pts,p)){
        if(bInteger){
          p.x = Math.round(p.x)
          p.y = Math.round(p.y)
        }
        ptsr.push(p);
      }
      nTrials++
    }
    return ptsr
  }
  let ne = setValue(mode,[2,3],[1.6*n,1.1*n],n)*fnTune
  let cols = Math.ceil(Math.sqrt(ne*Math.sqrt(o.width/o.height)));
  let rows = Math.ceil(ne/cols);
  if(mode == 5){
    ptsr = getRandomPointsInPoly(pts,n,2,null,null,1/1.2)
    let d = (o.width/cols + o.height/rows)*.14*fRandScale
    for(let i=0;i<ptsr.length;i++){
      let p = ptsr[i]
      let p0 = clonePoint(p)
      p.x += random(-d,d)
      p.y += random(-d,d)
      if(!isPointInPoly(pts,p))
        ptsr[i] = p0
    }
    return ptsr
  }
  let bx = Math.max(0.01,0.25/Math.pow(2,cols-2))*o.width;
  let by = Math.max(0.01,0.25/Math.pow(2,rows-2))*o.height;
  let w=(o.width-2*bx)/(cols - (mode == 1 ? 1 : 0.5) );
  let h=(o.height-2*by)/(rows-1);
  let h1=(o.height-2*by)/(rows-1.75);
  let fRand = mode > 2 ? fRandScale*.5 : 0;
  let nMissing = cols*rows-ne;
  let nLimit =  n*1.1
  for(let c=0;c<=cols && ptsr.length < nLimit;c++){
    for(let r=0;r<=rows && ptsr.length < nLimit;r++){
      let i=r*cols+c;
      if(i >= 2*n) continue;
      if(mode == 0){
        x = random(o.xmin,o.xmax)
        y = random(o.ymin,o.ymax)
      }
      else{
        x = o.xmin + c*(w+2*bx/cols) + ( (mode > 1 && r%2 == 1) ? w/2 : 0) + 2*fRand*w*(.5-random());
        let h2 = (mode != 3 || c < cols - nMissing) ? h : h1;
        y = o.ymin + r*(h2+2*by/rows) + 2*fRand*h2*(.5-random());
      }
      if(!isPointInPoly(pts,{x:x,y:y})) continue
      p = {x:x,y:y}
      if(mode == 3){
        p.x = constrain(p.x,o.xmin,o.xmax)
        p.y = constrain(p.y,o.ymin,o.ymax)
      }
      if(bInteger){
        p.x = Math.round(p.x)
        p.y = Math.round(p.y)
      }
      ptsr.push(p);
    }
  }
  if(ptsr.length < n && (mode == 0 || mode == 3) ){
    let maxtrials = 2 * n
    let nTrials = 0
    while(nTrials < maxtrials && ptsr.length < n){
      x = random(o.xmin,o.xmax)
      y = random(o.ymin,o.ymax)
      p = {x:x,y:y}
      if(isPointInPoly(pts,p)){
        if(bInteger){
          p.x = Math.round(p.x)
          p.y = Math.round(p.y)
        }
        ptsr.push(p);
      }
      nTrials++
    }
  }
  return ptsr
}

function reorderPointsByDistance(pts,dMax,bReturnLongest=false){
  // connect 1st point to closest, then each in turn
  pts = clonePoints(pts) // so we don't impact input array
  let pts2 = [pts.shift()]
  let aMulti = []
  while(pts.length > 0){
    let ptNearest = getPointNearestCoordinate(pts,pts2[pts2.length-1],false,true)
    if(dMax != null){
      let d = distance(ptNearest,pts2[pts2.length-1])
      if(d>dMax){
        // skip single points
        if(pts2.length > 1)
          aMulti.push(pts2)
        pts2 = []
      }
    }
    pts2.push(ptNearest)
  }
  if(aMulti.length > 0){
    if(pts2.length>1)
      aMulti.push(pts2)
    aMulti.type = 'multiPoly'
    if(bReturnLongest){
      aMulti = aMulti.sort(function(a,b){return b.length-a.length})
      return aMulti[0]
    }
    return aMulti
  }
  return pts2
}

function getRandomPointInRect(x,y,w,h,bInteger){
  if(x.x != null){
    // simple rectangle object
    if(typeof y == 'boolean')
      bInteger = y
    y = x.y
    w = x.width
    h = x.height
    x = x.x
  }
  let x1 = x+random(w)
  let y1 = y+random(h)
  if(bInteger === true){
    x1 = Math.round(x1)
    y1 = Math.round(y1)
  }
  else if(!isNaN(bInteger)){
    x1 = Number(x1.toFixed(bInteger))
    y1 = Number(y1.toFixed(bInteger))
  }
  return {x:x1,y:y1}
}

function getRandomPointInPoly(pts,o,bNormal=false){
  // does not support 3d
  if(o == null)
    o = processPoints(pts)
  let x,y,bOutside = true
  // this can loop forever if all pts are along a line
  // for now we just try 1000 times and if none found return first pt
  let n=0
  let fnr = bNormal ? randomNormalRange : random
  while(bOutside && n < 1000){
    x = fnr(o.xmin,o.xmax)
    y = fnr(o.ymin,o.ymax)
    bOutside = !isPointInPoly(pts,{x:x,y:y})
    n++
  }
  if(n>1000){
    x=pts[0].x
    y=pts[0].y
  }
  return {x:x,y:y}
}

function getIntersectingPoly(pts1,polys,bSimpleCheck=false){
  for(let i=0;i<polys.length;i++){
    if(doPolysIntersect(pts1,polys[i],bSimpleCheck))
      return i
  }
  return -1
}

function overlap(a1,a2,b1,b2){
  if(a1 > a2){
    let t=a2
    a2=a1
    a1=t
  }
  if(b2 == null){
    return (a1 <= b1 && b1 <= a2)
  }
  if(b1 > b2){
    let t=b2
    b2=b1
    b1=t
  }
  return overlap(a1,a2,b1) || overlap(a1,a2,b2) || overlap(b1,b2,a1) || overlap(b1,b2,a2)
}

function pointInEllipseTest(x0,y0,rx,ry,x,y){
  if(x.x != null){
    y = x.y
    x = x.x
  }
  let d = Math.pow(x - x0, 2) / Math.pow(rx, 2)
        + Math.pow(y - y0, 2) / Math.pow(ry, 2)
  // d < 1 inside ellipse, d ~= 1, on ellipse, d > 1 outside
  return d;  
}

function swapPropertyValues(pts,p1,p2){
  pts = clonePoints(pts)
  for(let i=0;i<pts.length;i++){
    let t = pts[i][p1]
    pts[i][p1] = pts[i][p2]
    pts[i][p2] = t
  }
  return pts
}

function polyContainsAnother(ptsOuter,ptsTest,bSimpleCheck=false){
  for(let i=0;i<ptsTest.length;i++){
    if(!isPointInPoly(ptsOuter,ptsTest[i])) return false
  }
  return true
}

function doPolysIntersect(pts1,pts2,bSimpleCheck=false){
  // need to test pairs of line segments
  if(bSimpleCheck){
    if(pts1.o == null)
      pts1.o = processPoints(pts1)
    if(pts2.o == null)
      pts2.o = processPoints(pts2)
    let d = distance(pts1.o.ptcm,pts2.o.ptcm)
    return d < pts1.o.s + pts2.o.s
  }
  if(pts1.o == null)
    pts1.o = processPoints(pts1)
  if(pts2.o == null)
    pts2.o = processPoints(pts2)
  if(pts1.o.xmin > pts2.o.xmax || pts1.o.xmax < pts2.xmin || 
     pts1.o.ymin > pts2.o.ymax || pts1.o.ymax < pts2.ymin)
    return false

  let fnIntDist = function(min1, max1, min2, max2) {
    if (min1 < min2)
      return min2 - max1
    return min1 - max2
  }

  let a=[]
  for(let i=0;i<pts1.length;i++){
    let j = (i + 1) % pts1.length
    a.push({x:pts1[j].x-pts1[i].x,y:pts1[j].y-pts1[i].y})
  }
  for(let i=0;i<pts2.length;i++){
    let j = (i + 1) % pts2.length
    a.push({x:pts2[j].x-pts2[i].x,y:pts2[j].y-pts2[i].y})
  }

  for(let i=0;i<a.length;i++){
    let len = distance({x:0,y:0},a[i])
    let axis = {x: -a[i].y / len, y: a[i].x / len}
    let ss = Math.sqrt(axis.x*axis.x + axis.y*axis.y)
    let {min: minA, max: maxA} = polyProjectInAxis(pts1,axis.x,axis.y,ss)
    let {min: minB, max: maxB} = polyProjectInAxis(pts2,axis.x,axis.y,ss)
    if(fnIntDist(minA,maxA,minB,maxB) > 0)
      return false
  }

  return true
}

function crossProduct(vectorA, vectorB,bNormalize=true){
  let v = {
    x: vectorA.y * vectorB.z - vectorA.z * vectorB.y,
    y: vectorA.z * vectorB.x - vectorA.x * vectorB.z,
    z: vectorA.x * vectorB.y - vectorA.y * vectorB.x
  }
  if(bNormalize)
    v = normalize(v)
  return v
}

function polyProjectInAxis(pts,x,y,ss){
  o = {
    min:Infinity,
    max:-Infinity
  }
  ss = ss==null ? Math.sqrt(x*x + y*y) : ss
  for (let i = 0; i < pts.length; i++) {
    let px = pts[i].x
    let py = pts[i].y
    var proj = (px*x + py*y) / ss
    o.max = Math.max(o.max,proj)
    o.min = Math.min(o.min,proj)
  }
  return o
}

function assignPropertyToElements(a,p,v,bClone=false){
  if(bClone)
    a = clonePoints(a)
  for(let i=0;i<a.length;i++){
    a[i][p] = v
  }
  return a
}

function pathToSegments(pts,bSkipAlternate){
  let asegs = []
  for(let i=0;i<pts.length-1;i++){
    if(i % 2 == 1 && bSkipAlternate) continue
    let o = {
      pt1: pts[i],
      pt2: pts[i+1],
      i: i,
      bEnd: i==pts.length-2
    }
    asegs.push(o)
  }
  return asegs
}

function pointProjectTo2D(pt,perspective,x,y){
  // perspective is field of view of 3D scene, same order as width/height
  // small values of perspective magnify the effect
  if(perspective.perspective != null){
    x = perspective.x
    y = perspective.y
    perspective = perspective.perspective
  }
  if(Array.isArray(pt)){
    let pts = []
    for(let i=0;i<pt.length;i++)
      pts.push(pointProjectTo2D(pt[i],perspective,x,y))
    return pts
  }
  let scale = perspective/(perspective + pt.z)
  let ptp = {x: ((pt.x-x) *scale) + x,
             y: ((pt.y-y) *scale) + y,
             z: pt.z,
             scale:scale}
  return ptp
}

function pointProjectFrom2D(pt,perspective,x,y){
  // perspective is field of view of 3D scene, same order as width/height
  // small values of perspective magnify the effect
  if(perspective.perspective != null){
    x = perspective.x
    y = perspective.y
    perspective = perspective.perspective
  }
  if(Array.isArray(pt)){
    let pts = []
    for(let i=0;i<pt.length;i++)
      pts.push(pointProjectFrom2D(pt[i],perspective,x,y))
    return pts
  }
  let z = pt.z == null ? 0 : pt.z
  let scale = perspective/(perspective + z)
  let ptp = {x: (pt.x-x)/scale + x,
             y: (pt.y-y)/scale + y,
             z: z,
             scale:scale}
  return ptp
}

function convertFromView2D(pts2D,oProjection,w,h,ww=1000,hw=1000,zoom=1){
  pts2D = rescalePoints(pts2D,{x:-zoom*.5*w,y:-zoom*.5*h,width:(zoom+1)*w,height:(zoom+1)*h},{x:0,y:0,width:w,height:h})
  pts2D = rescalePoints(pts2D,{x:0,y:0,width:w,height:h},{x:0,y:0,width:ww,height:hw})

  let pts3D = pointProjectFrom2D(pts2D,oProjection)
  return pts3D
}

function convertToView2D(pts,oProjection,w,h,ww=1000,hw=1000,zoom=1){
  let path2D = pointProjectTo2D(pts,oProjection)
  path2D = rescalePoints(path2D,{x:0,y:0,width:ww,height:hw},{x:0,y:0,width:w,height:h})
  // stretch some more
  // path2D = rescalePoints(path2D,{x:0,y:0,width:g.w,height:g.h},{x:-4*g.w,y:-5*g.h,width:9*g.w,height:11*g.h})
  // path2D = rescalePoints(path2D,{x:0,y:0,width:g.w,height:g.h},{x:-1*g.w,y:-.5*g.h,width:3*g.w,height:2*g.h})
  path2D = rescalePoints(path2D,{x:0,y:0,width:w,height:h},{x:-zoom*.5*w,y:-zoom*.5*h,width:(zoom+1)*w,height:(zoom+1)*h})
  
  return path2D
}

function polySignedDistance(pts,pt){
  let bInPoly = isPointInPoly(pts,pt)
  let ptn = getPointNearestCoordinate(pts,pt)
  let d = distance(pt,ptn)
  if(bInPoly && d > 0)
    d = -d
  return d
}

function softMin(a, b, k) {
  // k==0 sharp like standard min, in [0,1] smoother as larger, can be > 1 also for very smooth

  let h = Math.max( k-Math.abs(a-b), 0.0 )/k
  return Math.min( a, b ) - h*h*k*(1.0/4.0)
  // if (a === Infinity) return b
  // if (b === Infinity) return a
  // const h = Math.max(0, Math.min(1, (b - a) / k + 0.5))
  // return a * (1 - h) + b * h - k * h * (1 - h)
}

function getRandomPointsInBlob3D(n, radii, origins, smoothness=0){
  let ax=[Infinity,-Infinity],ay=[Infinity,-Infinity],az=[Infinity,-Infinity]
  let fn=function(rad,p){
    if(rad[p] != null)
      return rad[p]
    return rad
  }
  for(let i=0;i<radii.length;i++){
    ax[0] = Math.min(ax[0],origins[i].x-fn(radii[i],'rx'))
    ax[1] = Math.max(ax[1],origins[i].x+fn(radii[i],'rx'))
    ay[0] = Math.min(ay[0],origins[i].y-fn(radii[i],'ry'))
    ay[1] = Math.max(ay[1],origins[i].y+fn(radii[i],'ry'))
    az[0] = Math.min(az[0],origins[i].z-fn(radii[i],'rz'))
    az[1] = Math.max(az[1],origins[i].z+fn(radii[i],'rz'))
  }
  let pts=[]
  let maxTrialsNoHit = 1000
  let nTrials = 0
  while(pts.length < n && nTrials<maxTrialsNoHit){
    let pt = {
      x:random(ax[0],ax[1]),
      y:random(ay[0],ay[1]),
      z:random(az[0],az[1])
    }
    let d = multiSphereSignedDistance(pt,radii, origins, smoothness)
    if(d <= 0){
      pts.push(pt)
      nTrials=0
    }
    else
      nTrials++
  }
  return pts
}

function ellipsoidSDF(point, origin, radii) {
  const { x, y, z } = point;
  const { rx, ry, rz } = radii; // Radii along the x, y, and z axes
  const { x: ox, y: oy, z: oz } = origin; // Origin point

  // Translate the point to the ellipsoid's local coordinates
  const translatedX = x - ox;
  const translatedY = y - oy;
  const translatedZ = z - oz;

  // Calculate the SDF value
  const normalizedPoint = {
    x: translatedX / rx,
    y: translatedY / ry,
    z: translatedZ / rz
  };

  const distanceToSurface = Math.sqrt(
    normalizedPoint.x ** 2 +
    normalizedPoint.y ** 2 +
    normalizedPoint.z ** 2
  ) - 1.0;

  // Scale the distance back to the original coordinate system
  const maxRadius = Math.max(rx, ry, rz);
  return distanceToSurface * maxRadius;
}

function multiSphereSignedDistance(point, radii, origins, smoothness=0) {
  const { x, y, z } = point
  const numBlobs = radii.length
  let minDistance = Number.POSITIVE_INFINITY

  let blob
  let bEllipsoid = radii[0].rx != null
  for (let i = 0; i < numBlobs; i++) {
    if(bEllipsoid){
      blob = ellipsoidSDF(point, origins[i], radii[i])
    }
    else
      blob = Math.sqrt((x - origins[i].x) ** 2 + (y - origins[i].y) ** 2 + (z - origins[i].z) ** 2) - radii[i]
    minDistance = smoothness == 0 ? Math.min(minDistance, blob) : softMin(minDistance, blob, smoothness)
  }

  return minDistance
}

function polyToPolySignedDistance(poly1,poly2,bReturnIndexes){
  let dMin = Infinity
  let iMin = -1
  let jMin = -1
  for(let i=0;i<poly1.length;i++){
    for(let j=0;j<poly2.length;j++){
      let bInPoly = isPointInPoly(poly1,poly2[j])
      let d = distance(poly1[i],poly2[j])
      d = bInPoly ? -d : d
      if(d < dMin){
        dMin = d
        iMin=i
        jMin=j
      }
    }
  }
  if(bReturnIndexes)
    return [iMin,jMin]
  return dMin
}

function circleSignedDistance(o,pt){
  let d = distance(o.x,o.y,pt.x,pt.y)
  if(d > o.r)
    return d-o.r
  return d - o.r
}

function setZ(pt,z){
  if(!Array.isArray(pt)){
    let pt2 = clonePoint(pt)
    pt2.z=z
    return pt2
  }
  let pts2 = clonePoints(pt)
  for(let i=0;i<pts2.length;i++){
    pts2[i].z=z
  }
  return pts2
}

function isPointInPolys(polys,pt) {
  for(let i=0;i<polys.length;i++){
    if(isPointInPoly(polys[i],pt))
      return true
  }
  return false
}

function isPointInPoly(pts,pt) {
  let i,j,l,c;
  for(c = false, i = -1, l = pts.length, j = l - 1; ++i < l; j = i)
        ((pts[i].y <= pt.y && pt.y < pts[j].y) || (pts[j].y <= pt.y && pt.y < pts[i].y)) &&
        (pt.x < (pts[j].x - pts[i].x) * (pt.y - pts[i].y) / (pts[j].y - pts[i].y) + pts[i].x) &&
        (c = !c);
  return c;
}

function isCircleInPoly(pt,r,poly,n=20){
  let pts = getEllipsePoints(pt.x,pt.y,r,r,null,null,null,n)
  for(let i=0;i<pts.length;i++){
    if(!isPointInPoly(poly,pts[i]))
      return false
  }
  return true
}

function getPolyLineIntersection(poly,ptsLine,bInfinite=false){
  for(let i=0;i<poly.length;i++){
    let pt1 = poly[i]
    let j = i == poly.length-1 ? 0 : i+1
    let pt2 = poly[j]
    let b = lineIntersect(pt1.x,pt1.y,pt2.x,pt2.y,ptsLine[0].x,ptsLine[0].y,ptsLine[1].x,ptsLine[1].y,bInfinite)
    if(b != false) return b
  }
  return false
}

function getPolyLineIntersectionPoints(poly,ptsLine,bInfinite=false){
  let a = []
  for(let i=0;i<poly.length;i++){
    let pt1 = poly[i]
    let j = i == poly.length-1 ? 0 : i+1
    let pt2 = poly[j]
    let b = lineIntersect(pt1.x,pt1.y,pt2.x,pt2.y,ptsLine[0].x,ptsLine[0].y,ptsLine[1].x,ptsLine[1].y,bInfinite)
    if(b != false)
      a.push(b)
  }
  return a
}

function isPolySelfIntersecting(pts){
  for(let i=0;i<pts.length;i++){
    let j = i == pts.length-1 ? 0 : i+1
    for(let k = i+2; k < pts.length - 1;k++){
      let k2 = k == pts.length-1 ? 0 : k+1
      if(lineIntersect(pts[i].x,pts[i].y,pts[j].x,pts[j].y,pts[k].x,pts[k].y,pts[k2].x,pts[k2].y))
        return true
    }
  }
  return false
}

function findPointOnLine(aLine,pt){
  // pt is the reference point
  // returns point on the line closest to pt

  if(aLine[0].x == aLine[1].x && aLine[0].y == aLine[1].y) aLine[0].x -= 0.00001

  let Unumer = ((pt.x - aLine[0].x) * (aLine[1].x - aLine[0].x)) + ((pt.y - aLine[0].y) * (aLine[1].y - aLine[0].y))
  let Udenom = Math.pow(aLine[1].x - aLine[0].x, 2) + Math.pow(aLine[1].y - aLine[0].y, 2)
  let U = Unumer / Udenom

  let ptr = {
    x: aLine[0].x + (U * (aLine[1].x - aLine[0].x)),
    y: aLine[0].y + (U * (aLine[1].y - aLine[0].y))
  }

  let minx = Math.min(aLine[0].x, aLine[1].x)
  let maxx = Math.max(aLine[0].x, aLine[1].x)
  let miny = Math.min(aLine[0].y, aLine[1].y)
  let maxy = Math.max(aLine[0].y, aLine[1].y)

  let bValid = (ptr.x >= minx && ptr.x <= maxx) && (ptr.y >= miny && ptr.y <= maxy)
  if(!bValid){
    // return closest end point of line
    if(distance(pt,aLine[0]) < distance(pt,aLine[1]))
      return aLine[0]
    else
      return aLine[1]
  }

  return bValid ? ptr : null
}

function pointToLineDistance(line,pt,bInfinite=false){
  // not sure it works in 3d yet or with bInfinite= false
  let d
  let v = vectorFrom(line[0],line[1],true)
  let aUnit = getOrthogonalUnitVectors(v)
  let pt2 = addPoint(pt,aUnit[1])
  let pi = lineIntersect(line[0].x,line[0].y,line[1].x,line[1].y,pt.x,pt.y,pt2.x,pt2.y,true)
  if(!bInfinite){
    let pi2 = lineIntersect(line[0].x,line[0].y,line[1].x,line[1].y,pt.x,pt.y,pi.x,pi.y,false)
    if(pi2 == false){
      let d1 = distance(pt,line[0])
      let d2 = distance(pt,line[1])
      d = Math.min(d1,d2)
    }
    else
      d = distance(pt,pi)
    return d
  }
  d = distance(pt,pi)
  return d
}

function lineIntersect(x1, y1, x2, y2, x3, y3, x4, y4, bInfinite=false) {

  if ((x1 == x2 && y1 == y2) || (x3 == x4 && y3 == y4))
    return false

  let den = (y4 - y3) * (x2 - x1) - (x4 - x3) * (y2 - y1)

  // parallel
  if (den === 0)
    return false

  let ua = ((x4 - x3) * (y1 - y3) - (y4 - y3) * (x1 - x3)) / den
  let ub = ((x2 - x1) * (y1 - y3) - (y2 - y1) * (x1 - x3)) / den

  if(!bInfinite){
    // along the segments ?
    if (ua < 0 || ua > 1 || ub < 0 || ub > 1)
      return false
  }

  let x = x1 + ua * (x2 - x1)
  let y = y1 + ua * (y2 - y1)

  return {x, y}
}

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
  let o = processPoints(pts)
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
    d = Math.min(d,distance(pta,o.ptc))
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

function rescalePoints(pts,r0,r1){
  let bSingle = pts.x != null && typeof pts == 'object'
  if(bSingle){
    return rescalePoints([pts],r0,r1)[0]
  }
  let pts2 = []
  for(let i=0;i<pts.length;i++){
    let pt = {
      x: map(pts[i].x,r0.x,r0.x+r0.width,r1.x,r1.x+r1.width),
      y: map(pts[i].y,r0.y,r0.y+r0.height,r1.y,r1.y+r1.height)
    }
    if(pts[i].z != null)
      pt.z = pts[i].z
    if(pts[i].scale != null)
      pt.scale = pts[i].scale * r1.width/r0.width
    pts2.push(pt)
  }
  return pts2
}

function translatePoints(pts,dx=0,dy=0,dz=0,bInPlace=false){
	let pts2 = bInPlace ? pts : []
  if(dx.x != null){
    dy = dx.y
    if(dx.z)
      dz = dx.z
    dx = dx.x
  }
	for(let i=0;i<pts.length;i++){
    if(!bInPlace)
      pts2[i] = {x:pts[i].x+dx,y:pts[i].y+dy}
    else{
      pts2[i].x += dx
      pts2[i].y += dy
    }
    if(pts[i].z != null)
      pts2[i].z = pts[i].z
    if(dz != null && dz != 0)
      pts2[i].z = pts[i].z+dz
	}
	return pts2
}

function clipPoints(pts,ptsRectBound,o){
  o = o == null ? processPoints(ptsRectBound) : o
  pts = clonePoints(pts)
  for(let i=0;i<pts.length;i++){
    pts[i].x = constrain(pts[i].x,o.xmin,o.xmax)
    pts[i].y = constrain(pts[i].y,o.ymin,o.ymax)
  }
  return pts
}

function addNoiseToPoints_simple(pts,dx,dy,dz,p=1){
  // p is prob of applying to each point
  if(!Array.isArray(pts)){
    return addNoiseToPoints_simple([pts],dx,dy,dz,p)[0]
  }
  let pts2 = []
  for(let i=0;i<pts.length;i++){
    if(dz!=null)
      pts2[i] = (p==1 || random()<p) ? {x:pts[i].x+random(-dx,dx),y:pts[i].y+random(-dy,dy),z:pts[i].z+random(-dz,dz)} : clonePoint(pts[i])
    else  
      pts2[i] = (p==1 || random()<p) ? {x:pts[i].x+random(-dx,dx),y:pts[i].y+random(-dy,dy)} : clonePoint(pts[i])
  }
  return pts2
}

function circleInsidePoly(poly,n=72){
  let o = processPoints(poly)
  let ad = []
  for(let i=0;i<poly.length;i++){
    let d = distance(poly[i],o.ptc)
    ad.push(d)
  }
  let oa = characterizeArray(ad,null,false,1)
  return getEllipsePoints(o.ptc.x,o.ptc.y,oa.min*.98,null,null,null,null,n)
}

function circlePackPoly(poly,frMax=.5,rMin=4,bCirclePoints=true,maxCircles=100,bStartMaxCentral=true,maxTrials=1000,fVar){
  let a = []
  let o = processPoints(poly)
  let r = o.r0*frMax
  let d,pt,fr,trials = 0,lastR=r
  if(bStartMaxCentral)
    a.push({pt:o.ptc,r:r})

  while(trials < maxTrials && a.length < maxCircles){
    if(a.length > maxCircles*.1)
      trials++
    else
      trials += .01
    pt = getRandomPointInPoly(poly,o)
    d = distanceToNearestCircle(pt,a)
    if(d > .9*lastR || trials > .3*maxTrials)
      if(d > rMin){
        // check that all points would be inside poly
        fr = fVar == null ? frMax : frMax * random(fVar,1)
        d = Math.min(d,o.r0*fr)
        if(isCircleInPoly(pt,d,poly,20)){
          a.push({pt:pt,r:d})
          lastR = d
          trials = 0
        }
      }
  }
  if(bCirclePoints){
    let aPolys = []
    for(let i=0;i<a.length;i++){
      let poly = getEllipsePoints(a[i].pt.x,a[i].pt.y,a[i].r,null)
      poly.bCircle = true
      poly.r = a[i].r
      poly.pt = a[i].pt
      aPolys.push(poly)
    }
    return aPolys
  }
  return a
}

function distanceToNearestCircle(pt,aCircles){
  let d,i
  let dMin = Infinity
  for(i=0;i<aCircles.length;i++){
    d = distance(pt,aCircles[i].pt) - aCircles[i].r
    if(d < dMin)
      dMin=d
  }
  return dMin
}

function pointInCircle(pt,aCircles){
  let d,i
  for(i=0;i<aCircles.length;i++){
    d = distance(pt,aCircles[i].pt)
    if(d <= aCircles[i].r)
      return true
  }
  return false
}

function splitTriangle(poly,iSplitMode=0,ar,fDilate){
  // iSplitMode = 0 -> random corner, 1 -> across from longest side
  ar = ar==null ? [.1,.9] : ar
  let pi,p1,p2
  let ci = random(0,2,'i')
  if(iSplitMode == 1){
    ci = getLongestSideIndex(poly)
    ci = (ci + 2) % 3
  }
  pi = poly[ci]
  if(ci == 0){
    p1 = poly[1]
    p2 = poly[2]
  }
  else if(ci == 1){
    p1 = poly[2]
    p2 = poly[0]
  }
  else{
    p1 = poly[0]
    p2 = poly[1]
  }
  let t1 = random(ar[0],ar[1])
  let pn = lerp(t1,p1,p2)
  let a = [augmentPoints(clonePoints([pi,p1,pn])),augmentPoints(clonePoints([pi,pn,p2]))]
  if(fDilate != null){
    a = a.map(e => dilatePoints(e,fDilate))
  }
  return a
}

function splitQuad(poly,iSplitMode=0,ar){
  // iSplitMode = 0 -> random corner, 1 -> across from longest side
  ar = ar==null ? [.1,.9] : ar
  let p = []
  let ci = random(0,3,'i')
  if(iSplitMode == 1){
    ci = getLongestSideIndex(poly)
    ci = (ci + 2) % 4
  }
  for(let i=0;i<4;i++){
    p[i] = poly[(ci + i) % 4]
  }
  let t1 = random(ar[0],ar[1])
  let t2 = random(ar[0],ar[1])
  let pt1 = lerp(t1,p[0],p[1])
  let pt2 = lerp(t2,p[2],p[3])
  let poly1 = [p[0],pt1,pt2,p[3]]
  let poly2 = [pt1,p[1],p[2],pt2]
  return [clonePoints(poly1),clonePoints(poly2)]
}

function splitPoly(poly,res=.01,fDilate,bSimple=false,bDilateAbsolute=false,iSplitMode=0,fRange=.1,curveType){
  // fRange in [0,.5] curveType is straight,simple,jagged
  curveType = curveType == null ? 'straight' : curveType
  let t1
  if(iSplitMode == 1){
    // split longest side
    let iMax = getLongestSideIndex(poly)
    let t1a = poly[iMax].sPerimeter / poly[0].sPerimeterFull
    let t1b = iMax == poly.length-1 ? 1 : poly[iMax+1].sPerimeter / poly[0].sPerimeterFull
    t1 = (t1a+t1b)/2
    if(isNaN(t1)){
      let iMax = getLongestSideIndex(poly)
      let t1a = poly[iMax].sPerimeter / poly[0].sPerimeterFull
      let t1b = iMax == poly.length-1 ? 1 : poly[iMax+1].sPerimeter / poly[0].sPerimeterFull
      // looks unfinished
    }
    t2 = constrain(t1 + random(.5-fRange,.5+fRange),0,1,true)
    if(t2 < t1){
      let temp = t1
      t1 = t2
      t2 = temp
    }
  }
  else{
    // random
    let bOK = false
    let nTrials = 0
    while(!bOK && nTrials < 100){
      nTrials++
      t1 = random(1-res*2)
      t2 = constrain(t1 + random(.5-fRange,.5+fRange),0,1,true)
      if(t2 < t1)
        [t1,t2] = [t2,t1]
      if(t2-t1 < res)
        t2 = t1+res
      // check to see intermediate points are inside poly, if not pick a new split point
      let p1 = lerpPathDistance(t1,poly)
      let p2 = lerpPathDistance(t2,poly)
      let pCheck = addIntermediatePoints([p1,p2],10).slice(2,7)
      bOK = polyContainsAnother(poly,pCheck)
    }
  }
  // t2 = constrain(t1 + .5,0,1,true)
  let pts1 = []
  let pts2 = []
  let eps = res/2
  if(poly[poly.length-1].x  != poly[0].x || poly[poly.length-1].y != poly[0].y){
    poly = clonePoints(poly)
    poly.push(clonePoint(poly[0]))
    poly[0].sPerimeter = null
  }
  let bLastInt2 = false
  let i1Cut
  for(let t=0;t<=1;t+=res){
    let pt = lerpPathDistance(t,poly)
    if(t <= t1 || t >= t2){
      pts1.push(pt)
      if(bLastInt2)
        pts2.push(clonePoint(pt))
      bLastInt2 = false
    }
    if(t1 <= t && t <= t2){
      if(pts2.length == 0)
        i1Cut = pts1.length - 1
      pts2.push(pt)
      bLastInt2 = true
      if(pts2.length == 1)
        pts1.push(clonePoint(pt))
    }
  }
  if(curveType == 'simple' || curveType == 'jagged'){
    let ptsNew,i0,i1
    if(curveType == 'simple'){
      ptsNew = getSimpleCurvePoints(pts2[0],pts2[pts2.length-1],.25,.5,Math.round(Math.max(pts1.length,pts2.length)*.55))
      i0 = Math.floor(ptsNew.length/2)-2
      i1 = i0+3
    }
    else{
      // jagged
      ptsNew = getJaggedLine(pts2[0],pts2[pts2.length-1],.06,4,.6)
      i0 = 1
      i1 = ptsNew.length-1
    }  
    // check middle points are inside poly, otherwise straight
    let bOutside = false
    for(let i=i0;!bOutside && i<ptsNew.length && i<i1;i++){
      if(!isPointInPoly(poly,ptsNew[i])){
        bOutside = true
      }
    }
    if(!bOutside){
      pts1 = pts1.slice(0,i1Cut+2).concat(ptsNew).concat(pts1.slice(i1Cut+2))
      let ptst = clonePoints(ptsNew).reverse()
      // ptst[0].c = 'green'
      // ptst[ptst.length-1].c = 'yellow'
      pts2 = pts2.concat(ptst)
      pts2.pop()
    }
  }
  let n = Math.round(1/res)
  if(!bSimple){
    pts1 = addIntermediatePoints(pts1,n,true)
    pts2 = addIntermediatePoints(pts2,n,true)
    pts1 = getCurvePoints(pts1, .85, true, 16)
    pts2 = getCurvePoints(pts2, .85, true, 16)
  }
  if(fDilate && fDilate != 1){
    pts1 = dilatePoints(pts1,fDilate,null,null,bDilateAbsolute)
    pts2 = dilatePoints(pts2,fDilate,null,null,bDilateAbsolute)
  }
  return [pts1,pts2]
}

function addIntermediatePoints(pts,n,bClose){
  let pts2 = []
  let pts0 = pts
  if(n < 2)
    n=2
  if(bClose && (pts[0].x != pts[pts.length-1].x || pts[0].y != pts[pts.length-1].y) ){
    pts0 = clonePoints(pts)
    pts0.push(clonePoint(pts[0]))
  }
  pts0 = augmentPoints(pts0)
  for(let i=0;i<n;i++){
    let pt = lerpPathDistance(i/(n-1),pts0)
    pts2.push(pt)
  }
  return pts2
}

function lerpPolys(t,pts,pts2,n=100){
  let ptsm = []
  if(t == 0)
    return clonePoints(pts)
  else if(t == 1)
    return clonePoints(pts2)
  for(let i=0;i<n;i++){
    let pt = lerpPathDistance(i/(n-1),pts)
    let pt2 = lerpPathDistance(i/(n-1),pts2)
    ptsm.push(lerp(t,pt,pt2))
  }
  return ptsm
}

function addWiggles(pts,nPeriods,amp,n,t0 = 0,axis,bDampenAtEnds=true){
  n = n == null ? pts.length : n
  if(amp == null)
    amp = .1*distance(pts[0],pts[pts.length-1])
  if(pts[0].z != null && axis == null){
    // for 3d points but no axis specified we pick one orthogonal to direction
    let av = getOrthogonalUnitVectors(vectorFrom(pts[0],pts[pts.length-1]))
    axis = av[1]
  }
  if(axis)
    axis = normalize(axis)
  let pts2 = []
  let ampc = amp
  for(let i=0;i<n;i++){
    let t = i/(n-1)
    let pt = lerpPathDistance(t,pts)
    if(bDampenAtEnds){
      let ff = cycle(t,0,1)
      ampc = ff*amp
    }
    let d = ampc * Math.cos((t+t0)*Math.PI*2*nPeriods)
    if(axis){
      // 3d case, axis is direction of amplitude change
      pt = addPoint(pt,axis,d)
    }
    else
      pt =  extendPoint(pt,pt.angle - Math.PI/2,d,axis)
    pts2.push(pt)
  }
  return pts2
}

function getBoundsAtX(poly,x){
  // find the upper and lower y vals in poly for a given x
  // get segments that cross given x val
  let f,j,aSegs = []
  for(let i=0;i<poly.length;i++){
    j = i == poly.length-1 ? 0 : i+1
    if( (poly[i].x <= x &&  x <= poly[j].x) ||
        (poly[j].x <= x &&  x <= poly[i].x)){
      f = invLerp(x,poly[i].x,poly[j].x)
      let pt = lerp(f,poly[i],poly[j])
      aSegs.push({i:i,j:j,pt:pt})
    }
  }
  if(aSegs.length == 0)
    return null
  aSegs = aSegs.sort(function(a,b){
    return a.pt.y-b.pt.y
  })
  let oRet = {
    iMin: aSegs[0].i,
    jMin: aSegs[0].j,
    ptMin: aSegs[0].pt,
    iMax: aSegs[aSegs.length-1].i,
    jMax: aSegs[aSegs.length-1].j,
    ptMax: aSegs[aSegs.length-1].pt,
    n:aSegs.length
  }
  return oRet
}

function getPointNearestCoordinate(pts,pt,bGetFarthest=false,bRemovePoint=false,bReturnIndex,iStart,iEnd){
  // set either x or y of pt, you can leave the other null
  let iMin = -1
  let dMin = bGetFarthest ? -Infinity : Infinity
  let d
  iStart = iStart == null ? 0 : Math.max(0,Math.floor(iStart))
  iEnd = iEnd == null ? pts.length : Math.min(pts.length,Math.ceil(iEnd))
  for(let i=iStart;i<iEnd;i++){
    if(pt.x == null)
      d = Math.abs(pt.y-pts[i].y)
    else if(pt.y == null)
      d = Math.abs(pt.x-pts[i].x)
    else
      d = distance(pt,pts[i])
    if( (bGetFarthest && d > dMin) || (!bGetFarthest && d < dMin) ){
      dMin=d
      iMin=i
    }
  }
  if(iMin == -1)
    return null
  let pret = clonePoint(pts[iMin])
  if(bRemovePoint){
    pts.splice(iMin, 1)
  }
  if(bReturnIndex == 'distance')
    return dMin
  if(bReturnIndex == 'all'){
    pret.i = iMin
    pret.d = dMin
    return pret
  }
  if(bReturnIndex)
    return iMin
  return pret
}

function addNoiseToPoints(pts,dx1,dy1,dx2,dy2,bCumulative,skewx,skewy,bKeepFixedEnds,bNoSelfIntersection){
  // dx1 is variation in x at beginning, dx2 is at end
  // skewx is in range [-.5,+.5]

  if(!Array.isArray(pts)){
    let res = addNoiseToPoints([pts],dx1,dy1,dx2,dy2,bCumulative,skewx,skewy,bKeepFixedEnds,bNoSelfIntersection)
    return res[0]
  }

  if(bNoSelfIntersection){
    let pTest = addNoiseToPoints(pts,dx1,dy1,dx2,dy2,bCumulative,skewx,skewy,bKeepFixedEnds)
    let maxTrials = 1000,nTrials=0
    let bInt = isPolySelfIntersecting(pTest)
    while(bInt && nTrials<maxTrials){
      nTrials++
      pTest = addNoiseToPoints(pts,dx1,dy1,dx2,dy2,bCumulative,skewx,skewy,bKeepFixedEnds)
      bInt = isPolySelfIntersecting(pTest)
    }
    if(bInt)
      console.log('Error! Unable to make polygon non self intersecting')
    return pTest
  }
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
    if(!bCumulative)
      cx=cy=0
    else if(bKeepFixedEnds){
      cx = constrain(cx,-.25*dx,.25*dx)
      cy = constrain(cy,-.25*dy,.25*dy)
    }
  }
  return pts2
}

function transformPoints(pts,x0,y0,fx,fy){
  if(typeof x0 == 'function'){
    // then just process them all with function
    let o = processPoints(pts)
    let pts2 = []
    for(let i=0;i<pts.length;i++){
      fx = map(pts[i].x,o.xmin,o.xmax)
      fy = map(pts[i].y,o.ymin,o.ymax)
      pts2.push(x0(pts[i],o,fx,fy))
    }
    return pts2
  }
  x0 = x0 == null ? 0 : x0
  y0 = y0 == null ? 0 : y0
  fx = fx == null ? 1 : fx
  fy = fy == null ? 1 : fy
  // change coords to those taken from x0,y0 and stretched by fx and fy
  let pts2 = []
  let fxp,fyp
  let o = processPoints(pts)
  let pt0 = {x:x0,y:y0}
  for(let i=0;i<pts.length;i++){
    fxp = typeof fx == 'function' ? fx(pt0,pts[i],i,o,'x') : fx
    fyp = typeof fy == 'function' ? fy(pt0,pts[i],i,o,'y') : fy
    pts2[i] = {x:(pts[i].x-x0)*fxp,y:(pts[i].y-y0)*fyp}
  }
  return pts2
}

function makeHeartPoly(x0,y0,r0=100,n=64){
  let pts = []
  let fr = .65*r0/16
  for(let i=0;i<n;i++){
    let theta = map(i,0,n,-Math.PI,Math.PI)
    x = x0 + fr*12*Math.pow(Math.sin(theta),3)
    y = y0 - fr*.82*(13*Math.cos(theta) - 5*Math.cos(2*theta) - Math.cos(4*theta)) - fr*3.5
    pts.push({x:x,y:y})
  }
  return pts
}

function makeSuperShape(ptc,m,n1,n2,n3,rMax,n=100){
  // from http://paulbourke.net/geometry/supershape/
  let pts = []
  let theta
  let t1,t2,a=1,b=1,r
  let x,y
  let aMax = n1 < 1 ? Math.PI*12 : Math.PI*2
  for(let i=0;i<n;i++){
    theta = i*aMax/n
    t1 = Math.cos(m*theta/4)/a
    t1 = Math.pow(Math.abs(t1),n2)
    t2 = Math.sin(m*theta/4)/b 
    t2 = Math.pow(Math.abs(t2),n3)
    r = Math.pow(t1+t2,1/n1)
    if(Math.abs(r) == 0){
      x = 0
      y = 0
    }
    else{
      r = r*rMax
      x = r*Math.cos(theta) + ptc.x
      y = r*Math.sin(theta) + ptc.y
    }
    pts.push({x:x,y:y})
  }
  return pts
}


function makeStarPoly(x0,y0,r0=100){
  let pts = makePoly(x0,y0,r0*.35,5)
  pts = rotatePoints(pts,{x:x0,y:y0},-Math.PI/2)
  let pts2 = []
  let n=pts.length
  for(let i=0;i<n;i++){
    let p1 = pts[i]
    let p2 = pts[(i+1)%n]
    let pm = lerp(.5,p1,p2)
    let pn = lerp(2.7,{x:x0,y:y0},pm)
    pts2.push(p1)
    pts2.push(pn)
  }
  return pts2
}

function makeRandomBezierControlPoints(pts0,xvar,yvar,xvar2,yvar2,zvar,zvar2){
  // pts0 has either 2 or 3 points, will generate random control points
  // xvar,yvar is variation at start, xvar2,yvar2 at end, values are fraction of total distance
  xvar = xvar == null ? .2 : xvar
  yvar = yvar == null ? .2 : yvar
  zvar = zvar == null ? .2 : zvar
  xvar2 = xvar2 == null ? xvar : xvar2
  yvar2 = yvar2 == null ? yvar : yvar2
  zvar2 = zvar2 == null ? zvar : zvar2

  let pts = pts0
  if(pts.length == 2){
    pts = [clonePoint(pts0[0]),clonePoint(pts0[0]),clonePoint(pts0[0])]
    pts.push(clonePoint(pts0[1]))
    let d = distance(pts0[0],pts0[1])
    pts[1] = lerp(.35,pts0[0],pts0[1])
    pts[1].x += d*random(-xvar,xvar)
    pts[1].y += d*random(-yvar,yvar)
    pts[2] = lerp(.65,pts0[0],pts0[1])
    pts[2].x += d*random(-xvar2,xvar2)
    pts[2].y += d*random(-yvar2,yvar2)
    if(pts[1].z != null){
      if(zvar!=null)
        pts[1].z += d*random(-zvar,zvar)
      if(zvar2!=null)
        pts[2].z += d*random(-zvar2,zvar2)
    }
  }
  if(pts.length == 3){
    pts = [clonePoint(pts0[0]),clonePoint(pts0[1]),clonePoint(pts0[0])]
    pts.push(clonePoint(pts0[2]))
    let d = distance(pts0[0],pts0[2])
    pts[2] = lerp(.65,pts0[0],pts0[1])
    pts[2].x += d*random(-xvar,xvar)
    pts[2].y += d*random(-yvar,yvar)
    if(pts[2].z != null && zvar!=null){
      pts[2].z += d*random(-zvar,zvar)
    }
  }
  return pts
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
  let bz = pts[0].z != null

  let t1 = 1-t
  if(pts.length == 3){
    pt.x = t1*t1*pts[0].x + 2*t1*t*pts[1].x + t*t*pts[2].x
    pt.y = t1*t1*pts[0].y + 2*t1*t*pts[1].y + t*t*pts[2].y
    if(bz)
      pt.z = t1*t1*pts[0].z + 2*t1*t*pts[1].z + t*t*pts[2].z
  }
  else if(pts.length == 4){
    pt.x = t1*t1*t1*pts[0].x + 3*t1*t1*t*pts[1].x+3*t1*t*t*pts[2].x+t*t*t*pts[3].x
    pt.y = t1*t1*t1*pts[0].y + 3*t1*t1*t*pts[1].y+3*t1*t*t*pts[2].y+t*t*t*pts[3].y
    if(bz)
      pt.z = t1*t1*t1*pts[0].z + 3*t1*t1*t*pts[1].z+3*t1*t*t*pts[2].z+t*t*t*pts[3].z
  }
  return pt
}

function smoothPath(points, tension, numSegments, shouldConnectEnds) {
  // tension near 1 give curves that stay closer to input points
  if (points.length < 2) {
    return points; // Not enough points to create a curve
  }

  if (numSegments < 1) {
    numSegments = 1;
  }

  const result = [];
  const numPoints = points.length;

  const interpolate = (p0, p1, p2, p3, t) => {
    const t2 = t * t
    const t3 = t2 * t

    return {
      x: 0.5 * (
        (2 * p1.x) +
        (-p0.x + p2.x) * tension * t +
        (2 * p0.x - 5 * p1.x + 4 * p2.x - p3.x) * tension * t2 +
        (-p0.x + 3 * p1.x - 3 * p2.x + p3.x) * tension * t3
      ),
      y: 0.5 * (
        (2 * p1.y) +
        (-p0.y + p2.y) * tension * t +
        (2 * p0.y - 5 * p1.y + 4 * p2.y - p3.y) * tension * t2 +
        (-p0.y + 3 * p1.y - 3 * p2.y + p3.y) * tension * t3
      ),
      z: 0.5 * (
        (2 * p1.z) +
        (-p0.z + p2.z) * tension * t +
        (2 * p0.z - 5 * p1.z + 4 * p2.z - p3.z) * tension * t2 +
        (-p0.z + 3 * p1.z - 3 * p2.z + p3.z) * tension * t3
      ),
    }
  }

  points = clonePoints(points)
  let ap=[]
  for (let i = 0; i < numPoints; i++) {
    ap[0] = points[i-1 < 0 ? 0 : i-1]
    ap[1] = points[i]
    ap[2] = points[i+1 >= numPoints ? (shouldConnectEnds ? 0 : numPoints-1) : i+1]
    ap[3] = points[i+2 >= numPoints ? (shouldConnectEnds ? 1 : numPoints-1) : i+2]
    for (let s = 0; s < numSegments; s++) {
      let t = s/numSegments
      if(i == numPoints-1 && s == numSegments - 1 && !shouldConnectEnds) continue
      result.push(interpolate(ap[0],ap[1],ap[2],ap[3], t))
    }
  }

  if(shouldConnectEnds)
    result.push(clonePoint(points[0]))

  return result;
}

function smoothPath2(points, tension, numSegments,bClosed=false) {
  if (points.length < 2) {
    return points // Not enough points to create a curve
  }

  if (numSegments < 1) {
    numSegments = 1
  }
  let b3D = points[0].z != null

  const result = []

  points = clonePoints(points)
  if(bClosed){
    // for closed cases we expect the last point and first to be identical
    // points.unshift(clonePoint(points[points.length-1]))
    let p0 = clonePoint(points[0])
    let p1 = clonePoint(points[1])
    points.unshift(clonePoint(points[points.length-2]))
    // points.push(p0)
    points.push(p1)
  }
  else{
    points.unshift(clonePoint(points[0]))
    points.push(clonePoint(points[points.length-1]))
  }

  for (let i = 1; i < points.length - 2; i++) {
    const p0 = points[i - 1]
    const p1 = points[i]
    const p2 = points[i + 1]
    const p3 = points[i + 2]

    for (let t = 0; t <= 1; t += 1 / numSegments) {
      const t2 = t * t
      const t3 = t2 * t

      const m0 = (1 - tension) / 2
      const m1 = (1 - tension) / 2

      const x = 0.5 * (
        (2 * p1.x) +
        (-p0.x + p2.x) * t +
        (2 * p0.x - 5 * p1.x + 4 * p2.x - p3.x) * t2 +
        (-p0.x + 3 * p1.x - 3 * p2.x + p3.x) * t3
      )

      const y = 0.5 * (
        (2 * p1.y) +
        (-p0.y + p2.y) * t +
        (2 * p0.y - 5 * p1.y + 4 * p2.y - p3.y) * t2 +
        (-p0.y + 3 * p1.y - 3 * p2.y + p3.y) * t3
      )

      if(b3D){
        const z = 0.5 * (
          (2 * p1.z) +
          (-p0.z + p2.z) * t +
          (2 * p0.z - 5 * p1.z + 4 * p2.z - p3.z) * t2 +
          (-p0.z + 3 * p1.z - 3 * p2.z + p3.z) * t3
        )
        result.push({ x, y, z })
        continue
      }

      result.push({ x, y})
    }
  }

  // Add the last point in the path
  result.push(points[points.length - 2])
  
  if(bClosed){
    result.shift()
    result.pop()
    result.pop()
  }

  return result
}

function putFirstPointAtAngle(poly,ang){
  // shift the points in poly so poly[0] is at ang from the middle
  // ang is from top
  let o = processPoints(poly)
  let i0=0
  let aLast = getBearing(o.ptc,poly[poly.length-1]) + Math.PI
  for(let i=0;i<poly.length;i++){
    let a = getBearing(o.ptc,poly[i]) + Math.PI
    if(aLast <= ang && ang <= a){
      i0=i
      break
    }
    if(a <= ang && ang <= aLast){
      i0=i
      break
    }
    aLast = a
  }
  let pts2 = []
  for(let i=i0; i < i0+poly.length;i++){
    pts2.push(clonePoint(poly[i % poly.length]))
  }
  return pts2
}

function rotatePoint2(pt,ptc,angle,axis='z'){
  // single point version, already have a rotatePoint
  let a = rotatePoints([pt],ptc,angle,axis)
  return a[0]
}

function rotatePoints(pts,ptc,angle,axis='z'){
	let pts2 = []
  if(axis == 'x')
    pts = swapPropertyValues(pts,'x','z')
  else if(axis == 'y')
    pts = swapPropertyValues(pts,'y','z')
  if(ptc == null){
    let o = processPoints(pts)
    ptc = o.ptc//{x:o.xm,y:o.ym}
  }
	for(let i=0;i<pts.length;i++){
		let ptr = rotate(ptc,pts[i],angle)
		pts2.push(ptr)
	}
  if(axis == 'x')
    pts2 = swapPropertyValues(pts2,'x','z')
  else if(axis == 'y')
    pts2 = swapPropertyValues(pts2,'y','z')
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

function getTornadoPoints3DFromPoints(p1,p2,r0,r1,n=96,revs=10,radiusVar,ySpacingVar){
  let a
  let pts = []
  let fnNoiseRadius,fnNoiseYSpacing
  let mag = 1
  let magy
  if(radiusVar){
    fnNoiseRadius = makeNoiseFunction(r0,r1,radiusVar.steps,radiusVar.smooth,radiusVar.seed)
    if(radiusVar.mag != null)
      mag = radiusVar.mag
  }
  if(ySpacingVar){
    fnNoiseYSpacing = makeNoiseFunction(p1.y,p2.y,ySpacingVar.steps,ySpacingVar.smooth,ySpacingVar.seed)
    if(ySpacingVar.mag != null)
      magy = ySpacingVar.mag
    else
      magy = 1*Math.abs(p1.y-p2.y)/revs
  }
  let xc,yc,zc,r
  for(let rev=0; rev < revs; rev++){
    for(let i=0;i<n;i++){
      let f = (rev*n+i)/(revs*n-1)
      xc = lerp(f,p1,p2).x
      yc = lerp(f,p1,p2).y
      if(ySpacingVar)
        yc += magy*(.5-fnNoiseYSpacing(yc))
      zc = lerp(f,p1,p2).z
      r = lerp(f,r0,r1)
      if(radiusVar != null)
        r *=  1 + mag*(.5-fnNoiseRadius(r))
      a = lerp(i/(n-1),-Math.PI/2,Math.PI*1.5)
      let x = xc + r * Math.cos(a)
      let z = zc + r * Math.sin(a)
      pts.push({x:x,y:yc,z:z})
    }
  }
  return pts
}

function getTornadoPoints3D(xc,y0,y1,zc,r0,r1,n=96,revs=10,rVary=.5){
  // along y-axis from y0 to y1
  let a
  let pts = []
  for(let rev=0; rev < revs; rev++){
    let rr = lerp(rVary,1,.2)
    let rf = random(rr,1/rr)
    for(let i=0;i<n;i++){
      let f = (rev*n+i)/(revs*n)
      let rf2 = cycle(i/n-1,1,rf)
      let yc = lerp(f,y0,y1)
      let r = lerp(f,r0,r1)*rf2
      a = lerp(i/n,-Math.PI/2,Math.PI*1.5)
      let x = xc + r * Math.cos(a)
      let z = zc + r * Math.sin(a)
      pts.push({x:x,y:yc,z:z})
    }
  }
  return pts
}


function getTornadoPoints(xc,y0,y1,r0x,r0y,n=96,revs=10){
  let a
  let pts = []
  let fc = r0y/r0x
  for(let rev=0; rev < revs; rev++){
    for(let i=0;i<n;i++){
      let f = (rev*n+i)/(revs*n)
      let yc = lerp(f,y0,y1)
      let rx = lerp(f,r0x,r0x*.1)
      let ry = rx*fc
      a = lerp(i/n,-Math.PI/2,Math.PI*1.5)
      let x = xc + rx * Math.cos(a)
      let y = yc + ry * Math.sin(a)
      pts.push({x:x,y:y})
    }
  }
  return pts
}

function getRandomPointsInSphere_old(n,pto,r,bNearSurface=false){
  let pts = []

  while(pts.length < n){
    let x = random(pto.x-r,pto.x+r)
    let y = random(pto.y-r,pto.y+r)
    let z = random(pto.z-r,pto.z+r)
    let pt = {x:x,y:y,z:z}
    let d = distance(pto,pt)
    if(bNearSurface){
      if(r*.95 <= d && d <= r*1.05)
        pts.push(pt)
    }
    else if(d <= r)
      pts.push(pt)
  }
  return pts
}

function getCylinderPolys(xc,yc,r0x,r0y,dy,rot,n,bUseTopAsEdge=false){
  r0y = r0y == null ? r0x : r0y
  n = n == null ? 96 : n
  if(n % 2 == 1)
    n++
  rot = rot == null ? 0 : rot
  let a
  let pts = getEllipsePoints(xc,yc,r0x,r0y,0,0,Math.PI*2,n)
  let ptsb = [clonePoint(pts[0])]
  let ptsTopFrontRim = [clonePoint(pts[0])]
  for(let i=0; i < pts.length/2;i++){
    ptsb.push({x:pts[i].x,y:pts[i].y+dy})
    ptsTopFrontRim.push({x:pts[i].x,y:pts[i].y})
  }
  let ptsTopBackRim = []
  for(let i=pts.length/2; i >= 0;i--){
    let i0 = i
    if(bUseTopAsEdge)
      i0 = pts.length - i - 1
    ptsb.push({x:pts[i0].x,y:pts[i0].y})
    ptsTopBackRim.push({x:pts[pts.length - i - 1].x,y:pts[pts.length - i - 1].y})
  }
  if(rot != null){
    pts = rotatePoints(pts,{x:xc,y:yc},rot)
    ptsb = rotatePoints(ptsb,{x:xc,y:yc},rot)
    ptsTopFrontRim = rotatePoints(ptsTopFrontRim,{x:xc,y:yc},rot)
    ptsTopBackRim = rotatePoints(ptsTopBackRim,{x:xc,y:yc},rot)
  }
  return [pts,ptsb,ptsTopFrontRim,ptsTopBackRim]
}

function makeGridFromPoly(poly,nMin=2){
  let o = processPoints(poly)
  let w,nx,ny,mx,my
  if(o.width==0 || o.height==0)
    return [[makeRectPoly(0,0,0,0)]]
  if(o.width < o.height){
    w = o.width/nMin
    nx = nMin
    mx = 0
    ny = Math.floor(nMin*o.height/o.width)
    my = (o.height - ny*w) / 2
  }
  else{
    w = o.height/nMin
    ny = nMin
    nx = Math.floor(nMin*o.width/o.height)
    my = 0
    mx = (o.width - nx*w) / 2
  }
  let a = []
  for(let x=0;x<nx;x++){
    a[x] = []
    for(let y=0;y<ny;y++){
      a[x][y] = makeRectPoly(o.xmin+mx+x*w,o.ymin+my+y*w,w,w)
    }
  }
  return a
}

function getTeardropPoints(xc,yc,r,a=2,rot,n=100,wobble=0,nWobble=2){
  // a in [0.5,9], wobble in [0,.9], nWobble usually 1,2,4,6
  let rw,pts = []
  for(let i=0; i<360; i++)
  {
    let rad = map(i,0,360,0,Math.PI*2)
    rw = wobble==0 ? r : Math.sin(rad*nWobble)*wobble*r + (1-wobble)*r
    let x = xc + Math.cos( rad ) * rw
    let y = yc + Math.sin( rad ) * Math.pow(Math.sin(rad/2), a) * rw
    pts.push({x:x,y:y})
  }
  let ang = Math.PI*.5 + (rot == null ? 0 : rot)
  pts = rotatePoints(pts,{x:xc,y:yc},ang)
  pts = addIntermediatePoints(pts,n)
  return pts
}

function getPetalPoints(xc,yc,r0,nPetals=8,rPetal,n,phase=0){
  // does not include last point which overlays the first
  n = n == null ? 96 : n
  rPetal = rPetal == null ? r0*.3 : rPetal
  let r,a
  let pts = []
  for(let i=0;i<n;i++){
    a = lerp(i/(n-1),0,Math.PI*2)
    r = r0 + rPetal*Math.cos(a*nPetals+phase)
    let x1 = xc + r * Math.cos(a)
    let y1 = yc + r * Math.sin(a)
    pts.push({x:x1,y:y1})
  }
  return pts
}

function rotateAroundAxis(point, axis, angle, origin, bModifyInPlace) {
  // point can be single point or array
  if(origin == null && Array.isArray(point)){
    origin = {
      x: averagePropertyValue(point,'x'),
      y: averagePropertyValue(point,'y'),
      z: averagePropertyValue(point,'z')
    }
  }
  const { x: ox, y: oy, z: oz } = origin
  const { x: ax, y: ay, z: az } = normalize(axis);

  const cosAngle = Math.cos(angle);
  const sinAngle = Math.sin(angle);
  const oneMinusCos = 1 - cosAngle;

  // Construct the rotation matrix
  const rotationMatrix = [
    [
      cosAngle + ax * ax * oneMinusCos,
      ax * ay * oneMinusCos - az * sinAngle,
      ax * az * oneMinusCos + ay * sinAngle,
    ],
    [
      ay * ax * oneMinusCos + az * sinAngle,
      cosAngle + ay * ay * oneMinusCos,
      ay * az * oneMinusCos - ax * sinAngle,
    ],
    [
      az * ax * oneMinusCos - ay * sinAngle,
      az * ay * oneMinusCos + ax * sinAngle,
      cosAngle + az * az * oneMinusCos,
    ],
  ];

  let pts = Array.isArray(point) ? point : [point]

  let ptsRot = []
  for(let i=0;i<pts.length;i++){
    let pt = pts[i]
    // Translate the point to the origin
    const translatedPoint = {
      x: pt.x - ox,
      y: pt.y - oy,
      z: pt.z - oz,
    };

    const { x, y, z } = translatedPoint;

    // Multiply the translated point by the rotation matrix
    const rotatedX = rotationMatrix[0][0] * x + rotationMatrix[0][1] * y + rotationMatrix[0][2] * z;
    const rotatedY = rotationMatrix[1][0] * x + rotationMatrix[1][1] * y + rotationMatrix[1][2] * z;
    const rotatedZ = rotationMatrix[2][0] * x + rotationMatrix[2][1] * y + rotationMatrix[2][2] * z;

    // Translate the rotated point back to its original position
    const finalX = rotatedX + ox;
    const finalY = rotatedY + oy;
    const finalZ = rotatedZ + oz;
    if(bModifyInPlace){
      pt.x = finalX
      pt.y = finalY
      pt.z = finalZ
      ptsRot.push(pt)
    }
    else{
      let pt2 = clonePoint(pt) // to get properties
      pt2.x = finalX
      pt2.y = finalY
      pt2.z = finalZ
      ptsRot.push(pt2)
    }
  }
  if(!Array.isArray(point))
    return ptsRot[0]
  return ptsRot
}

function get3DArcPoints(point, origin, axis, angleStart=0, angleEnd=Math.PI*2, numPoints=100) {
  const points = []
  const { x: sx, y: sy, z: sz } = point

  if(axis == null)
    axis = randomPoint()
  else
    axis = normalize(axis)
  const angleRange = angleEnd - angleStart;
  const angleIncrement = angleRange / (numPoints - 1);

  for (let i = 0; i < numPoints; i++) {
    const angle = angleStart + i * angleIncrement
    let pt = rotateAroundAxis(point, axis, angle, origin)

    points.push(pt);
  }

  return points;
}

function pointsForGreatCircle(pointA, pointB, center, numPoints) {
  // Calculate the normal vector from the center to pointA
  const normal = {
    x: pointA.x - center.x,
    y: pointA.y - center.y,
    z: pointA.z - center.z,
  }

  // Calculate the radius of the sphere
  const radius = Math.sqrt(normal.x * normal.x + normal.y * normal.y + normal.z * normal.z)

  // Normalize the normal vector
  const normalizedNormal = {
    x: normal.x / radius,
    y: normal.y / radius,
    z: normal.z / radius,
  }

  // Calculate the axis of rotation as the cross product between normal and pointB
  const axis = {
    x: normal.y * pointB.z - normal.z * pointB.y,
    y: normal.z * pointB.x - normal.x * pointB.z,
    z: normal.x * pointB.y - normal.y * pointB.x,
  }

  // Normalize the axis vector
  const axisLength = Math.sqrt(axis.x * axis.x + axis.y * axis.y + axis.z * axis.z)
  const normalizedAxis = {
    x: axis.x / axisLength,
    y: axis.y / axisLength,
    z: axis.z / axisLength,
  }

  // Generate points along the great circle
  const points = []
  for (let i = 0; i < numPoints; i++) {
    const angle = (i / (numPoints - 1)) * Math.PI * 2 // Angle in radians
    const cosAngle = Math.cos(angle)
    const sinAngle = Math.sin(angle)

    // Calculate the position on the great circle
    const position = {
      x: center.x + radius * (cosAngle * normalizedNormal.x + sinAngle * normalizedAxis.x),
      y: center.y + radius * (cosAngle * normalizedNormal.y + sinAngle * normalizedAxis.y),
      z: center.z + radius * (cosAngle * normalizedNormal.z + sinAngle * normalizedAxis.z),
    }

    points.push(position)
  }

  return points
}

function getEllipsePoints3D(origin, rx,ry, normal, startAngle, stopAngle,n) {
  const { x: ox, y: oy, z: oz } = origin; // Origin point
  const { x: nx, y: ny, z: nz } = normal; // Normal vector

  const points = [];

  for (let i = 0; i < n; i++) {
    const angle = startAngle + (i / (n - 1)) * (stopAngle - startAngle);
    const cosA = Math.cos(angle);
    const sinA = Math.sin(angle);

    const pointX = ox + rx * cosA;
    const pointY = oy + ry * sinA;
    const pointZ = oz;

    // Rotate the point to match the specified normal vector orientation
    const rotatedX = pointX * (1 - nx ** 2) + pointY * (-nx * ny) + pointZ * (-nx * nz);
    const rotatedY = pointX * (-nx * ny) + pointY * (1 - ny ** 2) + pointZ * (-ny * nz);
    const rotatedZ = pointX * (-nx * nz) + pointY * (-ny * nz) + pointZ * (1 - nz ** 2);

    points.push({ x: rotatedX, y: rotatedY, z: rotatedZ });
  }

  return points;
}
function getEllipsePoints(xc,yc,r0x,r0y,rot,a1,a2,n){
  // does not include last point which overlays the first
  r0y = r0y == null ? r0x : r0y
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
    a = lerp(i/(n-1),a1,a2)
    let x1 = xc + r0x * Math.cos(a)
    let y1 = yc + r0y * Math.sin(a)
    pts.push({x:x1,y:y1})
  }
  // if(Math.abs(a2-a1-2*Math.PI) < .001)
  //   pts.push(clonePoint(pts[0]))
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
}

function extendPoint(pt,angle,len){
  if(angle == null)
    angle = random(0,Math.PI*2)
  if(pt == null)
    pt = {x:0,y:0}
  let x = pt.x + len*Math.cos(angle)
  let y = pt.y + len*Math.sin(angle)
  return {x,y}
}

function movePointRelativeToAnother(pto,pt,f,bAbs=false,bDoNotExtendPast=false){
  let x,y,v
  if(bAbs){
    v = vectorFrom(pto,pt,true)
    if(bDoNotExtendPast)
      f = Math.min(f,distance(pto,pt))
    x = pto.x + f*v.x
    y = pto.y + f*v.y
  }
  else{
    v = vectorFrom(pto,pt,false)
    if(bDoNotExtendPast)
      f = Math.min(f,1)
    x = pto.x + f*v.x
    y = pto.y + f*v.y
  }
  return {x,y}
}

function makePolyRounder(pts,f){
  // move points so they have more similar distance from middle
  f = f == null ? .9 : f
  let o = processPoints(pts)
  var pts2 = [];
  for(let i=0;i<pts.length;i++){
    let d = distance(o.ptc,pts[i])
    let vecUnit = vectorFrom(o.ptc,pts[i],true)
    let rTarget = lerp(f,d,o.r0)
    pts2[i] = addPoint(o.ptc,vecUnit,rTarget)//{x:o.xa + rTarget*vecUnit.x,y:o.ya + rTarget*vecUnit.y}
  }  
  return pts2
}

function stretchPoints(points, pivot, scaleX, scaleY, scaleZ) {
  // Calculate the translation vector for the pivot point
  const translation = { x: -pivot.x, y: -pivot.y, z: -pivot.z };

  // Create a scaling transformation matrix
  const transformationMatrix = [
    [scaleX, 0, 0, 0],
    [0, scaleY, 0, 0],
    [0, 0, scaleZ, 0],
    [0, 0, 0, 1],
  ];

  // Apply the transformation to each point
  const stretchedPoints = points.map(point => {
    // Apply translation
    point.x += translation.x;
    point.y += translation.y;
    point.z += translation.z;

    // Represent the point as a 4D vector
    const vector = [point.x, point.y, point.z, 1];

    // Multiply by the transformation matrix
    const result = [0, 0, 0, 0];
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        result[i] += vector[j] * transformationMatrix[j][i];
      }
    }

    // Update the point's coordinates
    point.x = result[0];
    point.y = result[1];
    point.z = result[2];
    
    // Apply reverse translation
    point.x -= translation.x;
    point.y -= translation.y;
    point.z -= translation.z;

    return point;
  });

  return stretchedPoints;
}

function dilatePoints3D(pts,f,bAbsolute=false,p='m'){
  if(pts.length==0) return pts
  f = f || 1
  let o = processPoints(pts)
  var pts2 = []
  for(let i=0;i<pts.length;i++){
    if(bAbsolute){
      let v = vectorFrom(o.ptc,pts[i],true)
      let d = distance(o.ptc,pts[i])
      pts2[i] = addPoint(o.ptc,v,d+f)
    }
    else{
      let v = vectorFrom(o.ptc,pts[i])
      pts2[i] = addPoint(o.ptc,v,f)
    }
  }
  return pts2
}

function dilatePoints(pts,f,bX,bY,bAbs,aVar,p='m',bOneDirectional){
  // p is m or a, f < 0 -> make bigger, >0 make smaller (only for bAbs!)
  if(pts.length==0) return pts
  f = f || 1
  bX = bX == null ? true : bX
  bY = bY == null ? true : bY
  bAbs = bAbs == null ? false : bAbs
  let o = processPoints(pts)
  var pts2 = [];
  for(let i=0;i<pts.length;i++){
    pts2[i] = {x:pts[i].x,y:pts[i].y}
    let fv = aVar == null ? f : f*random(aVar[0],aVar[1])
    if(bAbs){
    	// let vec = vectorFrom({x:o.xa,y:o.ya},pts[i])
    	let vecUnit = vectorFrom({x:o['x'+p],y:o['y'+p]},pts[i],true)
      if(bOneDirectional)
        vecUnit = {x:o['x'+p] > pts[i].x ? -1 : 1,y:o['y'+p] > pts[i].y ? -1 : 1}
	    if(bX)
	      pts2[i].x = pts[i].x - vecUnit.x*fv
	    if(bY)
	      pts2[i].y = pts[i].y - vecUnit.y*fv
    }
    else{
	    if(bX)
	      pts2[i].x = (pts2[i].x - o['x'+p])*fv + o['x'+p]
	    if(bY)
	      pts2[i].y = (pts2[i].y - o['y'+p])*fv + o['y'+p]
    }
    if(pts[i].z != null)
      pts2[i].z = pts[i].z
  }
  return pts2
}

function getFunctionPoly(fx,n,w,x1,x2,bPathOnly=false){
  let pts = [],poly
  for(let i=0;i<n;i++){
    let t = map(i,0,n-1,0,1)
    let x = lerp(t,x1,x2)
    let pt = fx(x,t)
    pts.push(pt)
  }
  if(bPathOnly)
    return pts
  return getCurvePoly(pts,w)
}

function getCurvePoly(poly,w0,w1,w2,n=19){
	// given a set of points that represents an unclosed curve convert it into
	// a closed shape whose width varies from w0 at the start to w1 at the end

	var newPolygont = [];
	var newPolygonb = [];
	var dir = {x:0,y:0};
	var t = {x:0,y:0};
	// var b = {x:0,y:0};
  if(poly.length < 4)
    poly = addIntermediatePoints(poly,n)
	let i,w,ph = Math.floor(poly.length/2)
	for(i=0; i < poly.length; i++){
    if(typeof w0 == 'function')
      w = w0(i/(poly.length-1),poly[i],poly,i)
    else{
      if(w1 == null)
        w = w0
      else if(w2 == null)
  		  w = map(i,0,poly.length-1,w0,w1)
      else{
        w = map3(i,0,ph,poly.length-1,w0,w1,w2,easeInOutQuad)
      }
    }
		// find direction of line
		if(i==0)
			dir = vectorFrom(poly[i],poly[i+1],true)
		else if(i == poly.length-1)
			dir = vectorFrom(poly[i-1],poly[i],true)
		else
			dir = vectorFrom(poly[i-1],poly[i+1],true)
		t.x = -dir.y*w/2
		t.y =  dir.x*w/2
		// b.x =  dir.y*w/2;
		// b.y =  dir.x*w/2;
    let p = {x:poly[i].x+t.x,y:poly[i].y+t.y}
    // assumes all in the same value of z
    if(poly[i].z) p.z=poly[i].z
    if(i==0)
      p.pos = 't0'
    else if(i==poly.length-1)
      p.pos = 'tn'
    newPolygont.push(p)
    p = {x:poly[i].x-t.x,y:poly[i].y-t.y}
    if(poly[i].z) p.z=poly[i].z
    if(i==0)
      p.pos = 'b0'
    else if(i==poly.length-1)
      p.pos = 'bn'
		newPolygonb.push(p)
	}
	var polyn = [];
	for(i=0; i < newPolygont.length; i++){
		polyn.push(newPolygont[i]);
	}
	// go backwards thru other set of points
	for(i=newPolygonb.length-1; i >= 0; i--){
		polyn.push(newPolygonb[i]);
	}
	return polyn.reverse()
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
    let iStart = 2
    if (isClosed) {
        _pts.unshift(pts[pts.length - 1]);
        _pts.unshift(pts[pts.length - 2]);
        _pts.unshift(pts[pts.length - 1]);
        _pts.unshift(pts[pts.length - 2]);
        _pts.push(pts[0]);
        _pts.push(pts[1]);
        _pts.push(pts[2]);
        _pts.push(pts[3]);
        iStart = 4
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
    for (i=iStart; i < (_pts.length - 4); i+=2) {
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

    if(res[0] == res[res.length-2] && res[1] == res[res.length-1]){
      res.splice(res.length-2,2)
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
    let c = mixColors(c0,c1,f)
    return rgbToString(c,a)
  }
  let bClosed = poly[0].x == poly[poly.length-1].x && poly[0].y == poly[poly.length-1].y
  for (i = 0; i < poly.length - 1; i++) {
    f = poly.length - 2 == 0 ? .5 : i / (poly.length - 2 + (bClosed ? 1 : 0));
    let lwn = (typeof lw0 == 'function') ? lw0(f,poly[i]) : lerp(f,lw0,lw1)
    dc.lineWidth = Math.max(.01,Number(lwn.toFixed(2)))
    a = lerp(f,a0,a1)
    if(typeof clr0 == 'function'){
      clr = clr0(f,poly[i].x,poly[i].y,poly[i])
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

function makeRectPoly(x,y,w,h,bClose,bMiddle){
  if(bMiddle){
    x -= w/2
    y -= h/2
  }
  var pts = [{x:x,y:y},{x:x+w,y:y},{x:x+w,y:y+h},{x:x,y:y+h}]
  if(bClose)
    pts.push(clonePoint(pts[0]))
  return pts
}

function makeCutTriangle(p1,p2,pTarget,f,f2){
  let pts = []
  f = constrain(f,0,1)
  if(f2 == null){
    pts.push(clonePoint(p1))
    pts.push(lerp(f,p1,pTarget))
    pts.push(lerp(f,p2,pTarget))
    pts.push(clonePoint(p2))
  }
  else{
    f2 = constrain(f2,f,1)
    pts.push(lerp(f,p1,pTarget))
    pts.push(lerp(f2,p1,pTarget))
    pts.push(lerp(f2,p2,pTarget))
    pts.push(lerp(f,p2,pTarget))
  }
  return pts
}

function makePoly(x,y,r,n,bClose,fVar=1){
	n = n || 3
	var pts = []
  for(let i=0;i<n;i++){
    var angle = i/n*2*Math.PI
    let rx = fVar == 1 ? r : r*random(1/fVar,fVar)
    let ry = fVar == 1 ? r : r*random(1/fVar,fVar)
    var x2 = x + rx*Math.cos(angle)
    var y2 = y + ry*Math.sin(angle)
    pts.push({x:x2,y:y2})
  }
  if(bClose)
    pts.push(clonePoint(pts[0]))
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
  let o  = {x:nx, y:ny}
  if(pt.z != null)
    o.z = pt.z
  return o
}

function clipPoly(dc,pts,bSave=true){
  if(bSave)
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

function processPolyPoints(pts,fn){
  let o=processPoints(pts)
  let a = [],bFirstInRow
  for(let y = Math.floor(o.ymin); y <= Math.ceil(o.ymax); y++){
    bFirstInRow = true 
    for(let x = Math.floor(o.xmin); x <= Math.ceil(o.xmax); x++){
      a.push(fn({x:x,y:y},bFirstInRow))
      bFirstInRow = false
    }
  }
  return a
}

function setPolyPath(dc,pts,bClose=true){
  if(bClose){
    // only if first and last are not the same
    let j = pts.length-1
    if(Math.abs(pts[0].x - pts[j].x) > .001 || Math.abs(pts[0].y - pts[j].y) > .001){
      pts = clonePoints(pts)
      pts.push(pts[0])
    }
  }
  let p1 = pts[0]
  let p2 = pts[1]
  let o = processPoints(pts)
  dc.beginPath()
  dc.moveTo(p1.x,p1.y)
  let cp1,cp2,cp1Start,pt
  for(i=1;i<pts.length;i++){
    if(i==1){
      pt = lerp(.3,p1,p2)
      cp1 = lerp(1,o.ptc,pt)
      cp1Start = cp1
    }
    else{
      cp1 = lerp(2,cp2,p1)
    }
    if(i == pts.length-1 && bClose){
      cp2 = lerp(2,cp1Start,pts[0])
    }
    else{
      pt = lerp(.7,p1,p2)
      cp2 = lerp(1,o.ptc,pt)
    }
    dc.bezierCurveTo(cp1.x, cp1.y, cp2.x, cp2.y, p2.x, p2.y)
    p1 = pts[i];
    p2 = pts[i+1];
  }
  // if(bClose)
  //   dc.closePath()
}

function setPolyPath0(dc,pts,bClose=true){
  let p1 = pts[0];
  let p2 = pts[1];
  dc.beginPath()
  dc.moveTo(p1.x,p1.y)
  for(i=1;i<pts.length;i++){
    let pm = lerp(.5,p1,p2)
    dc.quadraticCurveTo(p1.x, p1.y, pm.x, pm.y);
    p1 = pts[i];
    p2 = pts[i+1];
  }
  if(bClose)
    dc.closePath()
}

function spiralPath(ptc,rMax,n=100,theta,theta0=0){
  theta = theta == null ? Math.PI*(3-Math.sqrt(5)) : theta
  let pts = []
  for(let i=0;i<n;i++){
    let t = i*theta+theta0
    let r = rMax*Math.sqrt(i/n)
    pts.push({x:ptc.x + r*Math.cos(t),y:ptc.y + r*Math.sin(t)})
  }
  return pts
}

function spiralPathx(p1,p2){
  // incomplete
  // https://stackoverflow.com/questions/65166421/simplest-way-to-make-a-spiral-line-go-through-an-arbitrary-point
  // p2 is the end curl point
  // let maxRadius = (p2.x ** 2 + p2.y ** 2) ** 0.5 // dist from origin to corner
  let maxRadius = distance(p1,p2) // dist from origin to corner
  let pointAngle = (p1, p2) => Math.atan2(p1.y - p2.y, p1.x - p2.x)

  let radius = (ang, spiral) =>  spiral.A * ang ** spiral.P + spiral.C
  let startAngle = (origin, point, spiral) => {
    let dist = distance(origin, point);
    let ang = pointAngle(origin, point);
    // Da math
    // from radius function A * x ** P  + C 
    // where x is ang
    // A * x ** P + C = dist
    // A * x ** P = dist - C 
    // x ** P = (dist - C) / A 
    // x = ((dist - C) / A) ** (1 / p)
    return ((dist - spiral.C) / spiral.A) ** (1 / spiral.P) - ang;
  }

  let turns = 5 * Math.PI * 2
  let oSpiral = {P:1.5,A:1,C:.1}
  // let oSpiral = {P:1.8,A:.5,C:.1}

  let start = startAngle(p2, p1, oSpiral)

  let i = 0
  let pts = []
  while (i < turns) {
      let r = radius(i, oSpiral)
      let ang = i - start - Math.PI
      let x = Math.cos(ang) * r + p2.x
      let y = Math.sin(ang) * r + p2.y
      pts.push({x:x,y:y})
      if (r > maxRadius) { break }
      i += 0.05 
  }
  return pts
}

function generateJaggedLine(point1, point2, numSegments, jaggedness) {
  const line = []
  line.push({ x: point1.x, y: point1.y, z: point1.z })

  for (let i = 1; i < numSegments; i++) {
    const t = i / numSegments;
    const smoothPoint = {
        x: (1 - t) * point1.x + t * point2.x,
        y: (1 - t) * point1.y + t * point2.y,
        z: (1 - t) * point1.z + t * point2.z,
    }

    const jaggedPoint = {
        x: smoothPoint.x + (random() - 0.5) * jaggedness,
        y: smoothPoint.y + (random() - 0.5) * jaggedness,
        z: smoothPoint.z + (random() - 0.5) * jaggedness,
    }

    line.push(jaggedPoint)
  }

  line.push({ x: point2.x, y: point2.y, z: point2.z });

  return line;
}


function getJaggedLine(p1,p2,fDeflection=.1,minSplit=10,fDecay=.7,dir,ptsAvoid){
  ptsAvoid = ptsAvoid || []
  let d = distance(p1,p2)
  if(d < minSplit || d*fDeflection < 1*minSplit)
    return clonePoints([p1,p2])
  let cp1
  let bInvalid = true
  while(bInvalid){
    let pm = lerp(random(.45,.55),p1,p2)
    let v = vectorFrom(p1,p2)
    let aUnit = getOrthogonalUnitVectors(v)
    dir = dir == null ? choose([1,-1]) : dir
    let vDef = scalePoint(aUnit[1],d*fDeflection*dir)
    cp1 = addPoint(pm,vDef)
    if(d*fDeflection < minSplit*.001)
      break
    // check to make sure [p1,cp1] and [cp1,p2]  does not intersect path defined by ptsAvoid
    bInvalid = false
    if(getPolyLineIntersection(ptsAvoid,[p1,cp1]) != false || getPolyLineIntersection(ptsAvoid,[cp1,p2]) != false){
      bInvalid = true
      fDeflection *= .95
      dir = choose([1,-1])
    }
  }

  let a1 = getJaggedLine(p1,cp1,fDeflection*fDecay,minSplit,fDecay,-dir,ptsAvoid)
  ptsAvoid = ptsAvoid.concat(a1.slice(0,a1.length-1))
  let a2 = getJaggedLine(cp1,p2,fDeflection*fDecay,minSplit,fDecay,dir,ptsAvoid)
  ptsAvoid = ptsAvoid.concat(a2)
  a1 = a1.concat(a2.slice(1))
  a1[0].sPerimeter = null
  return a1
}

function geti(a,f){
  // fractional indexing
  return a[constrain(Math.round(f*a.length),0,a.length-1)]
}

function getSimpleCurvePoints(p1,p2,fDeflection=.5,fm=.5,n=20){
  let d = distance(p1,p2)
  let v = vectorFrom(p1,p2)
  let aUnit = getOrthogonalUnitVectors(v)
  let vDef = scalePoint(aUnit[1],d*fDeflection)
  let pm = lerp(fm,p1,p2)
  let cp1 = addPoint(pm,vDef)
  let pts = bezierParametricPath([p1,cp1,cp1,p2],n)
  return pts
}

function drawSimpleCurve(dc,p1,p2,fDeflection=.5,c,fm=.5){
  if(c){
    if(Array.isArray(c))
      c = rgbToString(c)
    dc.strokeStyle = c
  }
  let d = distance(p1,p2)
  let v = vectorFrom(p1,p2)
  let aUnit = getOrthogonalUnitVectors(v)
  let vDef = scalePoint(aUnit[1],d*fDeflection)
  let pm = lerp(fm,p1,p2)
  let cp1 = addPoint(pm,vDef)
  dc.beginPath()
  dc.moveTo(p1.x,p1.y)
  dc.bezierCurveTo(cp1.x, cp1.y, cp1.x, cp1.y, p2.x, p2.y)
  dc.stroke()
}

function drawLine(dc,x1,y1,x2,y2,c){
  if(c){
    if(Array.isArray(c))
      c = rgbToString(c)
    dc.strokeStyle = c
  }
  if(x1.x != null && x1.y != null){
    x2 = y1.x
    y2 = y1.y
    let t = x1
    x1 = t.x
    y1 = t.y
  }
  dc.beginPath()
  dc.moveTo(x1,y1)
  dc.lineTo(x2,y2)
  dc.stroke()
}

function strokePolySketchy(dc,pts,c,alpha,bClose=true,lw,fSketchy=.5){
  // fSketchy in [0,1] 1 more sketchy
  let n = bClose ? pts.length : pts.length-1
  for(let i=0;i<n;i++){
    let p1 = pts[i]
    let p2 = i == pts.length-1 ? pts[0] : pts[i+1]
    drawSketchyLine(dc,p1,p2,c,alpha,lw,fSketchy)
  }
}

function drawSketchyLine(dc,p1,p2,c,alpha=1,lw=1,fSketchy=.5){
  let n = Math.round(lerp(fSketchy,1,10))
  if(n==1){
    dc.strokeStyle = rgbToString(c,alpha)
    dc.lineWidth = lw
    drawLine(dc,p1,p2)
    return
  }
  dc.strokeStyle = rgbToString(c,alpha*.5)
  dc.lineWidth = lw*.5
  let v = vectorFrom(p1,p2)
  let aUnit = getOrthogonalUnitVectors(v)
  let d = distance(p1,p2)
  let vDef = scalePoint(aUnit[1],.25*d*lerp(fSketchy,0,.05))
  let f3 = lerp(fSketchy,.002,.04)
  for(let i=0;i<n;i++){
    for(let j=0;j<4;j++){
      let f = map(i,0,n-1,j!=0 ? 0 : .25,j!=0 ? .5 : .75) + random(.02)
      f += random(-.04,.04)
      let pt1 = lerp(f,p1,p2)
      let f2 = constrain(f+random(.45,.55),0,1)
      let pt2 = lerp(f2,p1,p2)
      pt1.x += vDef.x*random(-1,1)
      pt1.y += vDef.y*random(-1,1)
      pt2.x += vDef.x*random(-1,1)
      pt2.y += vDef.y*random(-1,1)
      drawSimpleCurve(dc,pt1,pt2,random(-f3,f3))
    }
  }
}

function drawSegmentedCurve(dc,pts,aSeg){
  // each item of aSeg looks like {t:.1,s:'rgba(0,0,0,.5)',lw:1} , lw optional
  let start=0,end
  for(let i=0;i<aSeg.length;i++){
    dc.strokeStyle = aSeg[i].s
    end = Math.round(pts.length*aSeg[i].t)
    if(aSeg[i].lw !=  null)
      dc.lineWidth = aSeg[i].lw
    drawCurve(dc,pts,start,'s',false,end)
    start = end
  }
}

function fillBetween(dc,ptsInner,ptsOuter){
  dc.beginPath()
  let i,x,y
  for(i=0;i<ptsOuter.length;i++){
    x=ptsOuter[i].x
    y=ptsOuter[i].y
    if(i==0)
      dc.moveTo(x,y);
    else
      dc.lineTo(x,y);
  }
  dc.lineTo(ptsOuter[0].x,ptsOuter[0].y)
  for(i=ptsInner.length-1;i>=0;i--){
    x=ptsInner[i].x
    y=ptsInner[i].y
    if(i==ptsInner.length-1)
      dc.moveTo(x,y);
    else
      dc.lineTo(x,y);
  }
  dc.lineTo(ptsInner[ptsInner.length-1].x,ptsInner[ptsInner.length-1].y)
  dc.fill()
}

function drawCurve(dc,pts,pStart,op,bClose=false,pEnd,bReverse=false,bSkipBegin=false){
  pStart = pStart == null ? 0 : pStart
  let i,x,y;
  if(pts.length==0) return

  pEnd = pEnd == null ? pts.length-1 : pEnd
  if(pEnd >= pts.length)
    pEnd = pts.length-1

  if(!bReverse && !bSkipBegin)
    dc.beginPath();
  let inc=1
  if(bReverse){
    inc=-1
    let temp=pStart
    pStart=pEnd
    pEnd=temp
  }
  for(i=pStart;bReverse ? i>=pEnd : i<=pEnd;i+=inc){
    // x = Math.round(pts[i].x)
    // y = Math.round(pts[i].y)
    x = pts[i].x
    y = pts[i].y
    if(i==pStart)
      dc.moveTo(x,y);
    else
      dc.lineTo(x,y);
  }
  if(bClose){
  	// dc.lineTo(pts[pStart].x,pts[pStart].y)
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

function drawCurveNearestSegments(dc,pts,n,fnStroke,pts2,pts3){
  let pt2,pt3
  for(let i=0;i<n;i++){
    let pt = lerpPathDistance(i/(n),pts)
    pt2 = getPointNearestCoordinate(pts2,pt)
    if(pts3){
      pt3 = getPointNearestCoordinate(pts3,pt)
      if(distance(pt,pt3) < distance(pt,pt2))
        pt2 = pt3
    }
    if(fnStroke)
      fnStroke(i/n,pt,pt2)
    dc.beginPath()
    dc.moveTo(pt.x,pt.y)
    dc.lineTo(pt2.x,pt2.y)
    dc.stroke()
  }
}

function drawCurveCrossSegments(dc,pts,n,fGap = .5,fnStroke,pts2,pts3,fnTest){
  // if both pts2 and pts3 defined then use nearest
  let pt2
  for(let i=0;i<n;i++){
    let pt = lerpPathDistance(i/(n),pts)
    let f = i/(n)+fGap
    if(f > 1)
      f = f - Math.floor(f)
    pt2 = pts2 == null ? lerpPathDistance(f,pts) : lerpPathDistance(f,pts2)
    if(pts2 && pts3){
      let d2 = distance(pt,pt2)
      let pt3 = lerpPathDistance(f,pts3)
      let d3 = distance(pt,pt3)
      pt2 = d2 < d3 ? pt2 : pt3
    }
    if(fnStroke)
      fnStroke(i/n,pt,pt2)
    if(fnTest !=  null){
      let res = fnTest(pt,pt2)
      if(res != false){
        pt = res[0]
        pt2 = res[1]
      }
    }
    dc.beginPath()
    dc.moveTo(pt.x,pt.y)
    dc.lineTo(pt2.x,pt2.y)
    dc.stroke()
  }
}

function drawCurveDots(dc,pts,r,n,c){
  n = n == null ? pts.length : n
  if(c)
    dc.fillStyle = rgbToString(c)
  for(let i=0;i<n;i++){
    let pt = n != pts.length ? lerpPathDistance(i/(n-1),pts) : pts[i]
    drawDot(dc,pt.x,pt.y,r)
  }
}

function drawDot(dc,x,y,r,r2,rot,bStroke=false,a0=0,a1=2*Math.PI){
  r2 = r2 == null ? r : r2
  rot = rot == null ? 0 : rot
  // g.aDots.push(Math.max(r,r2))
  dc.beginPath()
  dc.ellipse(x,y,r,r2,rot,a0,a1)
  if(bStroke)
    dc.stroke()
  else
    dc.fill()
}

function drawArrow(dc,x,y,len=20,dir,thickness=1,c){
  // dir can be a scalar (angle in radians), or a 2D vector
  if(c)
    dc.strokeStyle = rgbToString(c)
  dc.lineWidth = thickness
  let ang = dir == null ? 0 : dir
  if(dir.x != null && dir.y != null)
    ang = Math.atan2(dir.y, dir.x)

  let ptHead = extendPoint({x:x,y:y},ang,len*.5)
  let ptTail = extendPoint({x:x,y:y},ang,-len*.5)
  drawLine(dc,ptTail,ptHead)
  let pt = extendPoint(ptHead,ang - Math.PI*3/4,len*.35)
  drawLine(dc,ptHead,pt)
  pt = extendPoint(ptHead,ang + Math.PI*3/4,len*.35)
  drawLine(dc,ptHead,pt)
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
        sinA = constrain(v1.nx * v2.ny - v1.ny * v2.nx,-1,1);    // cross product
        // get cross product of first line and perpendicular second line
        sinA90 = constrain(v1.nx * v2.nx - v1.ny * -v2.ny,-1,1); // cross product to normal of line 2
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

/**
 * Draws a polygon with rounded corners 
 * @param {CanvasRenderingContext2D} ctx The canvas context
 * @param {Array} points A list of `{x, y}` points
 * @radius {number} how much to round the corners
 */
function roundedPoly2(ctx, points, radius) {
    const distance = (p1, p2) => Math.sqrt((p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2)

    const lerp = (a, b, x) => a + (b - a) * x

    const lerp2D = (p1, p2, t) => ({
        x: lerp(p1.x, p2.x, t),
        y: lerp(p1.y, p2.y, t)
    })

    const numPoints = points.length

    let corners = []
    for (let i = 0; i < numPoints; i++) {
        let lastPoint = points[i]
        let thisPoint = points[(i + 1) % numPoints]
        let nextPoint = points[(i + 2) % numPoints]

        let lastEdgeLength = distance(lastPoint, thisPoint)
        let lastOffsetDistance = Math.min(lastEdgeLength / 2, radius)
        let start = lerp2D(
            thisPoint,
            lastPoint,
            lastOffsetDistance / lastEdgeLength
        )

        let nextEdgeLength = distance(nextPoint, thisPoint)
        let nextOffsetDistance = Math.min(nextEdgeLength / 2, radius)
        let end = lerp2D(
            thisPoint,
            nextPoint,
            nextOffsetDistance / nextEdgeLength
        )

        corners.push([start, thisPoint, end])
    }

    ctx.moveTo(corners[0][0].x, corners[0][0].y)
    for (let [start, ctrl, end] of corners) {
        ctx.lineTo(start.x, start.y)
        ctx.quadraticCurveTo(ctrl.x, ctrl.y, end.x, end.y)
    }

    ctx.closePath()
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

function clearPoly(dc,pts){
  dc.globalCompositeOperation = 'destination-out'
  fillPoly(dc,pts)
  dc.globalCompositeOperation = 'source-over'
}

function fillPoly(dc,pts,c,alpha,fvar,bCurvy=false,bReverse,fBlur = 0){
  let pts0 = pts
  if(fBlur != 0){
    alpha = alpha == null ? 1 : alpha
    let n = Math.ceil(lerp(fBlur,4,10))
    let a = constrain(alpha / (n+1) * lerp(fBlur,1,.25),.07,1)
    let o = processPoints(pts)
    let d = o.r0 * .2 * lerp(fBlur,.7,4)
    let pts2,a2
    for(let i=0;i<n;i++){
      // pts2 = i==0 ? dilatePoints(pts,.9) : translatePoints(pts,random(-d,d),random(-d,d))
      pts2 = i==0 ? pts : translatePoints(pts,random(-d,d),random(-d,d))
      if(i==1)
        pts2 = dilatePoints(pts,-d*3,null,null,true)
      a2 = i==0 ? alpha : a
      fillPoly(dc,pts2,c,a2,fvar,bCurvy,bReverse)
    }
    return
  }
  if(fvar != null){
    pts0 = addIntermediatePoints(pts,pts.length*20)
    pts0 = deformEdgesNormal(pts0,1,fvar,true)
  }
  if(c)
    dc.fillStyle = rgbToString(c,alpha)
  if(bCurvy){
    setPolyPath(dc,pts0,true)
    dc.fill()
  }
  else
    drawCurve(dc,pts0,null,'f',true,null,bReverse)
}

function splitPathIntoStraightSegments(pts,dKeep,eps=.01,bFindAverageSlope){
  // any points closer than dKeep are always kept together no matter what slope change
  let a = []
  let mLast,dLast
  if(pts.length < 3)
    return [pts]
  let fn = function(p,m){
    let p2 = clonePoint(p)
    p2.m=m
    return p2
  }
  let pts2 = [fn(pts[0])]
  for(let i=1;i<pts.length;i++){
    let m = (pts[i].y-pts[i-1].y)/(pts[i].x-pts[i-1].x)
    let d = distance(pts[i],pts[i-1])
    if(m == mLast || Math.abs(m - mLast) < eps || mLast == null || Math.abs(d-dLast) < dKeep){
      // same slope
      pts2.push(fn(pts[i],d < dKeep ? null : m))
    }
    else{
      // new slope
      if(bFindAverageSlope){
        let t=0,n=0
        for(let j=0;j<pts2.length;j++){
          if(pts2[j].m != null){
            t+=pts2[j].m
            n++
          }
        }
        pts2.mAvg = t/n // slope average but doesn't count close point changes
      }
      a.push(pts2)
      pts2 = [fn(pts[i-1],m),fn(pts[i],m)]
    }
    if(pts2.length > 1 && Math.abs(pts2[pts2.length-2].x - pts2[pts2.length-1].x) < eps && Math.abs(pts2[pts2.length-2].y - pts2[pts2.length-1].y) < eps)
      pts2.pop()
    mLast = m
    dLast = d
  }
  if(pts2.length > 1)
    a.push(pts2)
  return a
}

function extendPath(path,d,bExtendStart=true,bExtendEnd=true){
  // return new version of path with beginning/end stretched by d
  if(path.length < 2) return path
  let path2 = clonePoints(path)
  let L = path.length
  if(bExtendStart){
    let d0 = distance(path2[0],path2[1])
    if(d0 == 0 && path2.length > 2)
      d0 = distance(path2[0],path2[2])
    path2[0] = lerp(d0 == 0 ? 1 : d/d0,path2[1],path2[0])
  }
  if(bExtendEnd){
    let d0 = distance(path2[L-1],path2[L-2])
    if(d0 == 0 && path2.length > 2)
      d0 = distance(path2[L-1],path2[L-3])
    path2[L-1] = lerp(d0 == 0 ? 1 : d/d0,path2[L-2],path2[L-1])
  }
  return path2
}

function splitPath(pts,n=10,f=.1,p=.2){
  // f is how random to make the split points, p is probability of skipping a segment
  n = Math.round(n)
  // if(pts.length < 3 || n < 2)
  if(n < 2)
    return [pts]
  let a = []
  pts = augmentPoints(pts)
  let dFull = pts[0].sPerimeterFull
  // let n = pts[0].sPerimeterFull/d
  let d = pts[0].sPerimeterFull/n
  let fdelta = d/pts[0].sPerimeterFull
  for(let i=0;i<n;i++){
    if(random()<p)
      continue
    let f0 = i/n
    let f1 = f0+fdelta
    if(i!=0 && i != n-1){
      f0 = constrain(f0+random(-f,f)*fdelta,0,1)
      f1 = constrain(f1+random(-f,f)*fdelta,0,1)
    }
    let n2 = Math.max(2,Math.ceil(pts.length*(f1-f0)))
    let b = []
    for(let fn=f0; fn <= f1; fn += (f1-f0)/n2){
      let p1 = lerpPathDistance(fn,pts)
      b.push(p1)
    }
    // let p2 = lerpPathDistance(f1,pts)
    a.push(b)
  }
  return a
}

function linefillPoly(dc,pts,c,alpha,d,angle,lw,fSketchy=0){
  // pts = simplifyPoints(pts)
  if(pts == null || pts.length == 0) return
  let o = processPoints(pts)
  if(c)
    dc.strokeStyle = rgbToString(c,alpha)
  if(lw)
    dc.lineWidth = lw
  if(d==null)
    d = o.s*.1
  
  clipPoly(dc,pts)

  let dx = d*Math.cos(angle)
  let dy = d*Math.sin(angle)
  let ptDelta = {x:dy,y:-dx} //reversed
  let ptc =  clonePoint(o.ptc)
  let ptc2 =  clonePoint(o.ptc)
  ptc2 = subtractPoint(ptc2,ptDelta)
  let nMax = Math.abs(Math.max(Math.abs(dx) < .001 ? 0 : o.width/dx, Math.abs(dy) < .001 ? 0 : o.height/dy))
  let pt1,pt2,n=0
  while(n < nMax) {
    pt1 = extendPoint(ptc,angle,o.s*.6)
    pt2 = extendPoint(ptc,angle,-o.s*.6)
    if(fSketchy != 0)
      strokePolySketchy(dc,[pt1,pt2],c,alpha,false,lw,fSketchy)
    else
      drawCurve(dc,[pt1,pt2],null,'s',false)
    pt1 = extendPoint(ptc2,angle,o.s*.6)
    pt2 = extendPoint(ptc2,angle,-o.s*.6)
    if(fSketchy != 0)
      strokePolySketchy(dc,[pt1,pt2],c,alpha,false,lw,fSketchy)
    else
      drawCurve(dc,[pt1,pt2],null,'s',false)

    ptc = addPoint(ptc,ptDelta)
    ptc2 = subtractPoint(ptc2,ptDelta)
    n++
  }
  dc.restore()
}

function strokePoly(dc,pts,c,alpha,bClose=true,lw,bCurvy=false,rDots=0){
  // pts = simplifyPoints(pts)
  if(pts == null || pts.length == 0) return
  if(c){
    if(typeof c[0] == 'number')
      dc.strokeStyle = rgbToString(c,alpha)
    else{
      // assume a palette and use a linear gradient
      dc.strokeStyle = createSimpleLinearGradient(dc,pts[0].x,pts[0].y,pts[pts.length-1].x,pts[pts.length-1].y,c,alpha)
    }
  }
  if(lw)
    dc.lineWidth = lw
  if(bCurvy){
    setPolyPath(dc,pts,bClose)
    dc.stroke()
  }
  else
    drawCurve(dc,pts,null,'s',bClose)
  if(rDots != 0){
    dotsPoly(dc,pts,c,1,rDots)
  }
}

function dotsPoly(dc,pts,c,alpha=1,r=2){
  c = c == null ? [128,128,128] : c
  dc.fillStyle = rgbToString(c,alpha)
  for(let i=0;i<pts.length;i++)
    drawDot(dc,pts[i].x,pts[i].y,r)
}

function sortPoints(pts){
  if(pts[0].z == null)
    pts = pts.sort(function(p1,p2){
      if(p1.y == p2.y)
        return p1.x-p2.x
      return p1.y-p2.y
    })
  else
    pts = pts.sort(function(p1,p2){
      if(p1.z == p2.z)
        return p1.y-p2.y
      return p1.z-p2.z
    })
  return pts  
}

function fillPolyWithSpheres(dc,poly,c,alpha,ravg,fn,shift,highlightWhiteness=1,sizevar){
  ravg = ravg == null ? 3 : ravg
  shift = shift == null ? [.16,.16] : shift
  sizevar = sizevar == null ? [.5,5.5] : sizevar
  fn = fn == null ? 1 : fn
  let o=processPoints(poly)
  let n = Math.round(fn*1.4*o.width*o.height/(Math.PI*ravg*ravg))
  let pts = getRandomPointsInPoly(poly,n,2,true)
  pts = sortPoints(pts)
  if(shift[1] < 0)
    pts = pts.reverse()
  if(c == null){
    for(let i=0;i<pts.length;i++)
      pts[i].c = dc.getImageData(Math.round(pts[i].x), Math.round(pts[i].y), 1, 1).data
  }

  for(let i=0;i<pts.length;i++){
    let xs = -shift[0]*random(ravg*.1,ravg)
    let ys = -shift[1]*random(ravg*.1,ravg)
    let c0 = c != null ? c : pts[i].c
    let r0 = ravg/3*random(sizevar[0],sizevar[1])
    drawSphere(dc,pts[i].x,pts[i].y,r0,null,null,c0,alpha,xs,ys,highlightWhiteness)
  }
  return pts
}

// better
function drawShadedSphere(dc, circleCenter, r, c,a,ptLightSource,fHighlightIntensity=1,fShadowIntensity=1,fHighlightEdge=.5,fShadow=1.5,fnCustomPath,aHighlight) {
  // fHighlightEdge in [0,1] 0 in middle, 1 at edge
  // fShadow in [1,2] 1 heavy shadow, 2 very light
  // vShift in fractions of radius
  aHighlight = aHighlight==null ? a : aHighlight
  dc.beginPath()
  if(fnCustomPath)
    fnCustomPath(dc,circleCenter, r)
  else
    dc.arc(circleCenter.x, circleCenter.y, r*.99, 0, 2 * Math.PI)
  // dc.ellipse(circleCenter.x, circleCenter.y,r,.7*r,0,0, 2 * Math.PI)
  dc.fillStyle = rgbToString(c,a)
  dc.fill();

  let vLight = vectorFrom(circleCenter,ptLightSource,true)
  let vShift = scalePoint(vLight,fHighlightEdge)

  let ptLight = translatePoints([circleCenter],r*vShift.x,r*vShift.y)[0]
  let ptLight2 = translatePoints([circleCenter],-r*vShift.x,-r*vShift.y)[0]

  // Calculate shading based on light direction
  const gradient = dc.createRadialGradient(
    ptLight.x,
    ptLight.y,
    r * 0.05,
    ptLight.x,
    ptLight.y,
    r * fShadow
  );

  let hsv = rgbToHsv(c)
  let hh = inRange(hsv.h,55,65) ? hsv.h - 40 : hsv.h

  gradient.addColorStop(0, rgbToString(hsvToRgb(hsv.h,hsv.s-fHighlightIntensity,hsv.v+fHighlightIntensity),aHighlight))
  gradient.addColorStop(.35, rgbToString(hsvToRgb(hsv.h,hsv.s-.1*fHighlightIntensity,hsv.v+.3*fHighlightIntensity),lerp(.5,a,aHighlight)))
  gradient.addColorStop(.7, rgbToString(hsvToRgb(hh,hsv.s-.1*fShadowIntensity,hsv.v-.2*fShadowIntensity),a));
  gradient.addColorStop(.9, rgbToString(hsvToRgb(hh,hsv.s-.3*fShadowIntensity,hsv.v-.93*fShadowIntensity),lerp(.25,a,aHighlight)));
  gradient.addColorStop(1, rgbToString([0,0,0],lerp(.85,a,aHighlight)*fShadowIntensity));

  // gradient.addColorStop(0, rgbToString([255,255,255],.9*a*fHighlightIntensity))
  // gradient.addColorStop(.35, rgbToString([255,255,255],.3*a*fHighlightIntensity))
  // gradient.addColorStop(.7, rgbToString([0,0,0],.3*a*fShadowIntensity));
  // gradient.addColorStop(.9, rgbToString([0,0,0],.7*a*fShadowIntensity));
  // gradient.addColorStop(1, rgbToString([0,0,0],1*a*fShadowIntensity));

  // Apply the shading to the circle
  dc.beginPath()
  if(fnCustomPath)
    fnCustomPath(dc,circleCenter, r)
  else
    dc.arc(circleCenter.x, circleCenter.y, r, 0, 2 * Math.PI)
  // dc.ellipse(circleCenter.x, circleCenter.y,r,.7*r,0,0, 2 * Math.PI)
  dc.fillStyle = gradient;
  dc.fill();
}

function drawSphere(dc,x,y,r,r2,rot,c,alpha=1,xshift=0,yshift=0,highlightWhiteness=1,alphad=1){
  let cL = mixColors(c,[255,255,255],highlightWhiteness)
  let cD = mixColors(c,[0,0,0],.9)
  // let poly = makePoly(x,y,r,48,null)//,1.4)
  // let o = processPoints(poly)
  // r = Math.max(o.width,o.height)/2
  let gradient = dc.createRadialGradient(x+r*xshift,y+r*yshift,0,x+r*xshift,y+r*yshift,r*.9)
  gradient.addColorStop(0, rgbToString(cL,alpha))
  gradient.addColorStop(.2, rgbToString(cL,alpha))
  gradient.addColorStop(.7, rgbToString(c,alpha*alphad))
  gradient.addColorStop(.85, rgbToString(c,alpha*alphad))
  gradient.addColorStop(1, rgbToString(cD,.9*alpha*alphad))
  dc.fillStyle = gradient

  dc.beginPath()
  dc.arc(x,y,r,0, 2*Math.PI, false)
  dc.fill()
  // dc.closePath();


  // fillPoly(dc,poly,null,null)
  
  // drawDot(dc,x,y,r,r2,rot)


  // dc.fillStyle = rgbToString(cL,alpha)
  // drawDot(dc,x+r*xshift,y+r*yshift,r*.3,r2,rot)
}

function createSimpleLinearGradient(dc,x0,y0,x1,y1,c0,a0,c1,a1){
  let gradient = dc.createLinearGradient(x0,y0,x1,y1)
  if(Array.isArray(c0[0])){
    // c0 is array of colors, a0 array of alphas (opt), c1 array of t vals (opt)
    for(let i=0;i<c0.length;i++){
      let t = c1 == null ? map(i,0,c0.length-1,0,1) : c1[i]
      gradient.addColorStop(t,rgbToString(c0[i],typeof a0 == 'number' ? a0 : a0[i]))
    }
  }
  else{
    gradient.addColorStop(0,rgbToString(c0,a0))
    gradient.addColorStop(1,rgbToString(c1,a1))
  }
  return gradient
}

function assignStopsToGradient(gradient,aStops,alpha){
  for(let i=0;i<aStops.length;i++){
    let cs = alpha == null ? aStops[i].cs : rgbToString(aStops[i].c,alpha)
    gradient.addColorStop(aStops[i].t, cs)
  }
  return gradient
}

function fillTexturePoly(dc,pts,type,c,nStrength,angle,alpha,angleVar,alphaFill,fSize=1,cvar,bClip=true,ptc,bInteger=false){
  // if cvar defined then color varies from c to cvar rather than black/white
  nStrength = nStrength == null ? 1 : nStrength
  alpha = alpha == null ? 0.15 : alpha
  angle = angle == null ? 0 : angle
  angleVar = angleVar == null ? 0 : angleVar
  type = type == null ? 'lines' : type
  let bSegments = typeof type == 'function' ? false : type.indexOf('Segments') >= 0
  let o = processPoints(pts)
  if(ptc == null)
    ptc = o.ptc
  let n = Math.round(nStrength*1000*Math.pow((o.width*o.height)/10000,bSegments ? 1 : 1))
  if(bSegments)
    n *= 2
  if(n > 0  && bClip)
    clipPoly(dc,pts)
  if(alphaFill == null && c!= null && c[3] != null)
    alphaFill = c[3] != null ? (0 <= c[3] && c[3] <= 1 ? c[3] : c[3]/255) : 1
  if(alphaFill != 0 && c != null){
    dc.fillStyle = rgbToString(c,alphaFill)
    fillPoly(dc,pts)
  }
  if(type == 'dots'){
    alpha=1
    n *= 4
  }
  let i,r,pt,pt2,pt3
  let r0 = 8//Math.max(o.width,o.height)*.05
  let r1 = 40//Math.max(o.width,o.height)*.2
  // let ptsr = getRandomPointsInPoly(pts,n,3,false)
  for(i=0;i<n;i++){
    pt = getRandomPointInPoly(pts,o)
    if(typeof type == 'function'){
      type(dc,pt,c,angle,alpha,angleVar,fSize,i,n)
      continue
    }
    if(cvar == null)
      dc.strokeStyle = random() < .5 ? rgbToString(mixColors(c,[0,0,0],random(.2,.4)),alpha) : rgbToString(mixColors(c,[255,255,255],random(.2,.4)),alpha)
    else if(typeof cvar == 'function')
      dc.strokeStyle = cvar(c,alpha,pt,i)
    else{
      let aa0 = c[3] != null ? alpha*c[3]/255 : alpha
      dc.strokeStyle = rgbToString(mixColors(c,cvar,random(.3,.7)),aa0)
    }
    // if(i < ptsr.length)
    //   pt = ptsr[i]
    // else
    // let pt = extendPoint({x,y},random(-Math.PI,Math.PI),r)
    if(type == 'lines' || type == 'linesSegments'){
      r = bSegments ? randomNormalRange(r0,r1) : Math.max(o.width,o.height)
      r *= fSize
      let a = angle + (angleVar == 0 ? 0 : randomNormalRange(-angleVar/2,angleVar/2) )
      pt2 = extendPoint(pt,a,-r)
      pt3 = extendPoint(pt,a,r)
      drawLine(dc,pt2.x,pt2.y,pt3.x,pt3.y)
    }
    if(type == 'curls'){
      r = randomNormalRange(r0,r1)
      r *= fSize
      let a = angle + (angleVar == 0 ? 0 : randomNormalRange(-angleVar/2,angleVar/2) )
      pt2 = extendPoint(pt,a,-r)
      pt3 = extendPoint(pt,a,r)
      drawSimpleCurve(dc,pt2,pt3,random(.1,.35),null,random(.5,.9))
    }
    if(type == 'rays'){
      r = randomNormalRange(r0,r1)
      r *= fSize
      let ptm = ptc
      if(Array.isArray(ptc)){
        // pick closest
        ptm = getPointNearestCoordinate(ptc,pt)
      }
      v = vectorFrom(pt,ptm,true)
      let pt2 = clonePoint(pt)
      pt2.x += r*v.x
      pt2.y += r*v.y
      // drawLine(dc,pt,pt2)
      // drawSimpleCurve(dc,pt,pt2,random(.1,.35),null,random(.5,.9))
      drawSimpleCurve(dc,pt,pt2,.15,null,.5)
    }
    if(type == 'spots'){
      let e = random() < .5 ? random(1,2) : random(1/2,1)
      r = randomNormalRange(1,4)*fSize
      dc.fillStyle = dc.strokeStyle
      drawDot(dc,pt.x,pt.y,r,r*e,random()*Math.PI*2)
    }
    if(type == 'dots'){
      dc.fillStyle = dc.strokeStyle
      if(bInteger)
        dc.fillRect(Math.round(pt.x),Math.round(pt.y),1,1)
      else
        dc.fillRect(pt.x,pt.y,1,1)
    }
    if(type == 'dilate'){
      let pts0 = dilatePoints(addIntermediatePoints(pts,100),i/n)
      drawCurve(dc,pts0,0,'s',true)
    }
  }
  if(n > 0 && bClip)
    dc.restore()
}

function getPixelValue(dc,x,y){
  x = Math.round(x)
  y = Math.round(y)
  if(x < 0 || x >= dc.canvas.width || y < 0 || y >= dc.canvas.height)
    return [0,0,0,1]
  let dSrc = dc.getImageData(x,y,1,1)
  let a = [dSrc.data[0],dSrc.data[1],dSrc.data[2],dSrc.data[3]]
  return a
}

function noiseFill(dc,pts,c,smoothness=1,strength=1,seed,flatten=1){
  seed = seed == null ? random(100) : seed
  let w = dc.canvas.width
  let h = dc.canvas.height

  pts = simplifyPoints(pts)
  let o = processPoints(pts)
  o.xmin = constrain(Math.floor(o.xmin),0,w)
  o.xmax = constrain(Math.ceil(o.xmax),0,w)
  o.ymin = constrain(Math.floor(o.ymin),0,h)
  o.ymax = constrain(Math.ceil(o.ymax),0,h)
  if(o.xmax-o.xmin < 2 || o.ymax-o.ymin < 2) return
  let dSrc = dc.getImageData(o.xmin, o.ymin, o.xmax-o.xmin, o.ymax-o.ymin)
  let data = dSrc.data
  let field = makeFlowField(dSrc.width,dSrc.height,seed,100*smoothness,true,false,flatten)
  let a = c[3] != null ? (0 <= c[3] && c[3] <= 1 ? c[3]*255 : c[3]) : 255
  let fa = a/255
  for(let x=0;x<dSrc.width;x++){
    for(let y=0;y<dSrc.height;y++){
      if(!isPointInPoly(pts,{x:x+o.xmin,y:y+o.ymin})) continue
      let index = (x + y * dSrc.width) * 4;
      let f = Math.max(0,1+2*(.5 - field[x][y])*strength/fa)
      if(fa != 1){
        dSrc.data[index  ] = (1-fa)*dSrc.data[index  ]+c[0]*f*fa
        dSrc.data[index+1] = (1-fa)*dSrc.data[index+1]+c[1]*f*fa
        dSrc.data[index+2] = (1-fa)*dSrc.data[index+2]+c[2]*f*fa
      }
      else{
        dSrc.data[index  ] = c[0]*f
        dSrc.data[index+1] = c[1]*f
        dSrc.data[index+2] = c[2]*f
      }
      dSrc.data[index+3] = 255//a
    }
  }
  dc.putImageData(dSrc,o.xmin, o.ymin)
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

function contextSetColor(dc,x0,y0,w,h,c,a){
  let dSrc = dc.getImageData(x0, y0, w, h)
  let data = dSrc.data

  for(let x=x0;x < x0+w;x++){
    for(let y=y0;y < y0+h;y++){
      let index = (x-x0 + (y-y0) * w) * 4;
      dSrc.data[index  ] = c[0]
      dSrc.data[index+1] = c[1]
      dSrc.data[index+2] = c[2]
      if(a)
        dSrc.data[index+3] = a
    }
  }
  dc.putImageData(dSrc,x0,y0)
}

function fisheyeCanvas(dc){
  let w = dc.canvas.width
  let h = dc.canvas.height
  let dSrc = dc.getImageData(0, 0, w, h)
  let data = dSrc.data

  var dBack = new ImageData(
    new Uint8ClampedArray(dSrc.data),
    dSrc.width,
    dSrc.height
  )
  var data2 = dBack.data;

  let s=0,x2,y2
  for(let x=0;x<w;x++){
    for(let y=0;y<h;y++){
      let ny = 2*y/h-1
      let ny2 = ny*ny
      let nx = 2*x/w-1
      let nx2 = nx*nx
      let r = Math.sqrt(nx2+ny2)
      x2 = x
      y2 = y
      if(0.0 <= r && r <= 1.0){                            
        let nr = Math.sqrt(1.0-r*r)            
        nr = (r + (1.0-nr)) / 2.0
        if(nr <= 1.0){
          let theta = Math.atan2(ny,nx)         
          let nxn = nr*Math.cos(theta)        
          let nyn = nr*Math.sin(theta)        
          x2 = parseInt(((nxn+1)*w)/2)        
          y2 = parseInt(((nyn+1)*h)/2)        
        }
      }

      let index = (x + y * dSrc.width) * 4
      let index2 = (x2 + y2 * dSrc.width) * 4

      data2[index2] = data[index  ]
      data2[index2+1] = data[index+1]
      data2[index2+2] = data[index+2]
      data2[index2+3] = data[index+3]
    }
  }
  dc.putImageData(dBack,0,0)
}

function addGrain(dc,pts,strength,bNoise,sz=1,fNoise=1,fnTest){
  let w = dc.canvas.width
  let h = dc.canvas.height
  let dSrc = dc.getImageData(0, 0, w, h)
  let data = dSrc.data

  let field = bNoise ? makeFlowField(w,h,random(),80*fNoise,true) : null
  let grid = []
  if(sz !=  1){
    for(let x=0;x < w/sz+1; x++){
      grid[x]=[]
      for(let y=0;y<h/sz + 1; y++){
        let ss = typeof strength == 'function' ? strength(x,y) : strength
        grid[x][y] = randomNormalRange(-ss,ss,'i')
      }
    }
  }
  let o = processPoints(pts)
  o.xmin = Math.round(o.xmin)
  o.xmax = Math.round(o.xmax)
  o.ymin = Math.round(o.ymin)
  o.ymax = Math.round(o.ymax)
  let s=0,m
  for(let x=o.xmin;x<dSrc.width && x < o.xmax;x++){
    for(let y=o.ymin;y<dSrc.height && y < o.ymax;y++){
      if(!isPointInPoly(pts,{x:x,y:y})) continue
      let index = (x + y * dSrc.width) * 4
      let ss = typeof strength == 'function' ? strength(x,y) : strength
      if(sz != 1)
        s = grid[Math.floor(x/sz)][Math.floor(y/sz)]
      else
        s = ss == 0 ? 0 : randomNormalRange(-ss,ss,'i')
      if(bNoise){
        // let f = 1
        // f = map(f,0,1,.2*f+.8*field[x][y],.85*f+.25*field[x][y])
        s *= Math.min(1,.2+.8*field[x][y])
      }
      m = fnTest == null ? s : fnTest(x,y,s,[dSrc.data[index],dSrc.data[index+1],dSrc.data[index+2]])
      if(m == 0) continue
      dSrc.data[index  ] += m
      dSrc.data[index+1] += m
      dSrc.data[index+2] += m
    }
  }
  dc.putImageData(dSrc,0,0)
}

function fillRectDots(dc,x,y,w,h,c,a,cBase){
  // a is prob of a dot being filled
  if(cBase){
    dc.fillStyle = rgbToString(cBase)
    dc.fillRect(x,y,w,h)
  }
  if(a == 1){
    dc.fillStyle = rgbToString(c)
    dc.fillRect(x,y,w,h)
    return
  }
  let can = makeRandomPercentCanvas(w,h,c,a)
  dc.drawImage(can,x,y)
}

function fillPolyDots(dc,poly,c,a,bSkipTest=false){
  let o=processPoints(poly)
  o.xmin = Math.round(o.xmin)
  o.xmax = Math.round(o.xmax)
  o.ymin = Math.round(o.ymin)
  o.ymax = Math.round(o.ymax)
  dc.fillStyle = rgbToString(c,1)
  for(let x=o.xmin;x <= o.xmax;x++){
    for(let y=o.ymin;y <= o.ymax;y++){
      if(!bSkipTest && !isPointInPoly(poly,{x:x,y:y})) continue
      if(random() < a)
        dc.fillRect(x,y,1,1)
    }
  }
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

function hsvToRgbString(h,s,v,alpha){
  if(h < 0)
    h += 360
  if(h > 360)
    h -= 360
  s = constrain(s,0,1)
  v = constrain(v,0,1)
  let c = hsvToRgb(h,s,v)
  return rgbToString(c,alpha)
}

function hsvToRgb(h=0, s=0, v=0,vsLower=.01) {
  let r,g,b,i,f,p,q,t
  if(h.h != null){
    s = h.s
    v = h.v
    h = h.h
  }
  h = constrain(h,0,360)
  // setting s or v to 0 always sets h to 0 (red), by default we only go down to .01
  s = constrain(s,vsLower,1)
  v = constrain(v,vsLower,1)
  if(s == 0) {
    r = g = b = v
    return [Math.floor(r * 255), Math.floor(g * 255), Math.floor(b * 255)]
  }
  h /= 60
  i = Math.floor(h)
  f = h - i
  p = v * (1 - s)
  q = v * (1 - s * f)
  t = v * (1 - s * (1 - f))
  rgb = setValue(i,[0,1,2,3,4],[[v,t,p],[q,v,p],[p,v,t],[p,q,v],[t,p,v]],[v,p,q])
  return rgb.map(e => constrain(Math.round(e*255),0,255))
}

function hsvToRgb_old(h,s,v,bComplement=false){
  // h in [0,360], s and v in [0,1]
  s = constrain(s,0,1)
  v = constrain(v,0,1)
  let clr0 = bComplement ? tinycolor({h:h,s:s,v:v}).complement() : tinycolor({h:h,s:s,v:v})
  clr0 = clr0.toRgb()
  return [clr0.r,clr0.g,clr0.b]
}

function rgbToHex(r,g,b,a){
  if(Array.isArray(r)){
    [r,g,b,a] = [r[0],r[1],r[2],r[3]]
  }
  let fn = function(c) {let hex = c.toString(16); return hex.length == 1 ? '0' + hex : hex;}
  let h = fn(r) + fn(g) + fn(b)
  if(a)
    h += fn(a)
  return h
}

function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? [
    parseInt(result[1], 16),
    parseInt(result[2], 16),
    parseInt(result[3], 16)
  ] : null
}

function rgbDesaturate(c,sat=0){
  if(Array.isArray(c[0])){
    return c.map(e => rgbDesaturate(e,sat))
  }
  let hsv = rgbToHsv(c)
  return hsvToRgb(hsv.h,sat,hsv.v)
}

function rgbSetMinValue(c,val=.5){
  let hsv = rgbToHsv(c)
  return hsvToRgb(hsv.h,hsv.s,Math.max(hsv.v,val))
}

function tintRgb(c,cTint,f=1){
  let oc = rgbToHsv(c)
  let oTint = rgbToHsv(cTint)
  let cTintn = hsvToRgb(oTint.h,oc.s,oc.v)
  if(f==1)
    return cTintn
  return mixColors(c,cTint,f)
}

function colorToHsv(c){
  return rgbToHsv(c[0],c[1],c[2])
}

function colorToHue(c){
  return rgbToHsv(c[0],c[1],c[2]).h
}

function colorToSaturation(c){
  return rgbToHsv(c[0],c[1],c[2]).s
}

function colorToValue(c){
  return rgbToHsv(c[0],c[1],c[2]).v
}

function rgbToHsv(r,g,b){
  // rgb in [0,255] , h in [0,360], s and v in [0,1]
  if(Array.isArray(r)){
    g = r[1]
    b = r[2]
    r = r[0]
  }
  let h,s,v
  let max = Math.max(r, g, b)
  let min = Math.min(r, g, b)
  v = max / 255
  var diff = max - min
  if(diff == 0) return {h:0, s:0, v:r / 255}
  if(max == 0)
    return {h:-1, s:0, v:v}
  else
    s = diff / max
  if(r == max)
    h = (g - b) / diff
  else if(g == max)
    h = 2 + (b - r) / diff
  else
    h = 4 + (r - g) / diff
  h *= 60
  if(h < 0)
    h += 360
  return {h:h,s:s,v:v}
}

function rgbToHsv_old(r,g,b){
  // rgb in [0,255] , h in [0,360], s and v in [0,1]
  if(Array.isArray(r))
    [r,g,b] = r
  let clr0 = tinycolor({r:r,g:g,b:b})
  clr0 = clr0.toHsv()
  return {h:clr0.h,s:clr0.s,v:clr0.v}
}

function colorAdjustSAndV(c,s=1,v=1){
  if(Array.isArray(c[0]))
    return c.map(cc => colorAdjustSAndV(cc,s,v))
  let hsv = rgbToHsv(c[0],c[1],c[2])
  let cn = hsvToRgb(hsv.h,s,v)
  return cn
}

function colorVaryBrightness(c,f=.1){
  f = constrain(f,0,1)
  let hsv = rgbToHsv(c)
  let v2 = constrain(hsv.v+random(-f,f),0,1)
  c = hsvToRgb(hsv.h, hsv.s, v2)
  return c
}

function colorAverage(ac,aw){
  let c = [0,0,0]
  let n = ac.length
  let tot = 0
  for(let i=0;i<n;i++){
    let w = aw == null ? 1 : aw[i]
    c[0] += ac[i][0] * w
    c[1] += ac[i][1] * w
    c[2] += ac[i][2] * w
    tot += w
  }
  c[0] = constrain(Math.round(c[0]/tot),0,255)
  c[1] = constrain(Math.round(c[1]/tot),0,255)
  c[2] = constrain(Math.round(c[2]/tot),0,255)
  return c
}

function findFarthestColor(aInput,aChoices,dNoise=0){
  // return which c from aChoices is most different from all aInput
  let iMax = -1
  let dMax = -Infinity
  for(let i=0;i<aChoices.length;i++){
    let d = 0
    for(let j=0;j<aInput.length;j++){
      d += distance(aInput[j],aChoices[i])
      if(dNoise > 0)
        d += random(dNoise)
    }
    // d += distanceManhattan(g.cMoon,aClrAccents[i])
    d /= aInput.length
    // console.log('color d ',d,' for ',JSON.stringify(aChoices[i]))
    if(d > dMax){
      dMax=d
      iMax=i
    }
  }
  return aChoices[iMax]
}

function hsvToCombination(h,s,v,t='splitcomplement',bhsv){
  // h in [0,360], s and v in [0,1]
  let clr0 = tinycolor({h:h,s:s,v:v})
  let colors
  if(t=='splitcomplement')
    colors = clr0.splitcomplement()
  if(t=='triad')
    colors = clr0.triad()
  if(t=='tetrad')
    colors = clr0.tetrad()
  if(t=='analogous')
    colors = clr0.analogous(3,12)
  if(t=='random'){
    colors = [clr0]
    let h2 = h
    while(Math.abs(h2-h) < 30)
      h2 = random(0,360,'i')
    let h3 = h
    while(Math.abs(h3-h) < 30 || Math.abs(h3-h2) < 30)
      h3 = random(0,360,'i')
    let h4 = h
    while(Math.abs(h4-h) < 30 || Math.abs(h4-h2) < 30 || Math.abs(h4-h3) < 30)
      h4 = random(0,360,'i')
    colors.push(tinycolor({h:h2,s:s,v:v}))
    colors.push(tinycolor({h:h3,s:s,v:v}))
    colors.push(tinycolor({h:h4,s:s,v:v}))
  }
  if(t=='silverandgold'){
    colors = [tinycolor({h:48,s:s,v:v}),tinycolor({h:39,s:s,v:v}),tinycolor({h:0,s:0,v:v})]
  }
  if(bhsv)
    return colors.map(function(t) { let c = t.toHsv(); return {h:Math.round(c.h),s:Math.round(c.s),v:Math.round(c.v)} })
  return colors.map(function(t) { let c = t.toRgb(); return [c.r,c.g,c.b] })
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
  x=Math.round(x)
  y=Math.round(y)
  x = constrain(x,0,dSrc.canvas.width-1)
  y = constrain(y,0,dSrc.canvas.height-1)
  return getPixelValue(dSrc,x,y)
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
  if(angle != null && angle != 0){
    dc.save()
    dc.translate(x,y)
    dc.rotate(angle)
    dc.drawImage(img,0,0,img.width,img.height,-w/2,-h/2,w,h)
    dc.restore()
  }
  else{
    dc.drawImage(img,x-w/2,y-h/2,w,h)
  }
}

function drawCenteredImage(dc,img,x,y,rot){
  if(x.x != null){
    if(rot == null && y != null)
      rot = y
    y = x.y
    x = x.x
  }
  if(rot!=null){
    dc.save()
    dc.translate(x,y)
    dc.rotate(rot)
    dc.drawImage(img,-img.width/2,-img.height/2)
    dc.restore()
  }
  else
    dc.drawImage(img,x-img.width/2,y-img.height/2)
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

function pickClosestColor(aPal,c,bReturnIndex){
  let minD = 100000;
  let ic = -1;
  for(let i=0;i<aPal.length;i++){
    let d = Math.sqrt(Math.pow(aPal[i][0]-c[0],2)+Math.pow(aPal[i][1]-c[1],2)+Math.pow(aPal[i][2]-c[2],2))
    if(d<minD){
      ic=i
      minD=d
    }
  }
  if(bReturnIndex)
    return ic
  return aPal[ic]
}

function ditherWithPallete(imageData, aPal){
  let type = 'Atkinson'
  var imageDataLength = imageData.data.length;

  var w = imageData.width;
  var newPixel, err;

  for (var currentPixel = 0; currentPixel < imageDataLength; currentPixel+=4) {

    // Bill Atkinson's dithering algorithm
    let cnew = pickClosestColor(aPal,[imageData.data[currentPixel],imageData.data[currentPixel+1],imageData.data[currentPixel+1]])
    err = []
    for(let j=0;j<3;j++){
      err[j] = Math.floor((imageData.data[currentPixel+j] - cnew[j]) / 8);
      imageData.data[currentPixel+j] = cnew[j]
      imageData.data[currentPixel       + 4 +j] += err[j];
      imageData.data[currentPixel       + 8 +j] += err[j];
      imageData.data[currentPixel + 4*w - 4 +j] += err[j];
      imageData.data[currentPixel + 4*w     +j] += err[j];
      imageData.data[currentPixel + 4*w + 4 +j] += err[j];
      imageData.data[currentPixel + 8*w     +j] += err[j];
    }


    // // Set g and b pixels equal to r
    // imageData.data[currentPixel + 1] = imageData.data[currentPixel + 2] = imageData.data[currentPixel];
  }

  return imageData;
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

function lerpColors(f,c1,c2){
  let c = []
  c[0] = constrain(Math.floor(lerp(f,c1[0],c2[0])),0,255)
  c[1] = constrain(Math.floor(lerp(f,c1[1],c2[1])),0,255)
  c[2] = constrain(Math.floor(lerp(f,c1[2],c2[2])),0,255)
  return c
}

function mixColors(color0, color1, value, color2, mpoint=.5,bLinear=false) {
  if(color2 != null){
    if(value <= mpoint)
      return mixColors(color0,color1,map(value,0,mpoint,0,1),null,null,bLinear)
    else
      return mixColors(color1,color2,map(value,mpoint,1,0,1),null,null,bLinear)
  }
  // by square of rgb values
  value = constrain(value,0,1)
  var s = 1 - value
  let a
  if(bLinear)
    a = [Math.floor(s * color0[0] + value * color1[0]),
         Math.floor(s * color0[1] + value * color1[1]),
         Math.floor(s * color0[2] + value * color1[2])];
  else
    a = [Math.floor(Math.sqrt(s * color0[0]*color0[0] + value * color1[0]*color1[0])),
          Math.floor(Math.sqrt(s * color0[1]*color0[1] + value * color1[1]*color1[1])),
          Math.floor(Math.sqrt(s * color0[2]*color0[2] + value * color1[2]*color1[2]))];
  if(color0[3] != null || color1[3]!= null){
    let v1 = color0[3] != null ? color0[3] : 1
    let v2 = color1[3] != null ? color1[3] : 1
    if(bLinear)
      a[3] = Math.floor(s * v1 + value * v2)
    else
      a[3] = Number(Math.sqrt(s * v1*v1 + value * v2*v2).toFixed(3))
  }
  a[0] = constrain(a[0],0,255)
  a[1] = constrain(a[1],0,255)
  a[2] = constrain(a[2],0,255)
  return a
};


function consoleShowPalette(a){
  for(let i=0;i<a.length;i++){
    console.log('%c'+rgbToString(a[i]),'background-color:'+rgbToString(a[i]))
  }
}

function removePaletteDuplicates(aPal){
  let a2 = []
  aPal.forEach(function(c){
    let i = a2.findIndex(c2 => equalArrays(c,c2))
    if(i==-1)
      a2.push(c.slice(0))
  })
  return a2
}

function getPalette(palStart,palTrans,bUseExclusions=true){
  // palStart in [0,aPal.length-1], palTrans in [0,6]
  // palStart = 10
  // palTrans=0
  let aPal = [
    [[0, 93, 194],[111, 117, 208],[192, 170, 219],[250,250,250],[64,64,64]], // blue mauve
    [[0,128,255],[252, 3, 48],[252, 231, 3],[3, 198, 252],[30,30,30]], // red blue yellow
    [[245, 86, 0],[243, 244, 0],[244, 0, 0],[182, 1, 0],[20,20,20]], // fire
    [[17, 92, 2],[99, 53, 7],[250, 250, 2],[7, 168, 106],[128,128,128]], // brown green yellow
    [[215, 198, 138],[245, 215, 84],[20, 64, 87],[5, 35, 37],[1, 3, 0]], // blue green yellow
    [[184, 11, 40],[5, 181, 250],[4, 50, 217],[95, 103, 135],[3, 0, 1]], // 5 red blue grey
    [[252, 3, 94],[150, 3, 57],[240, 129, 170],[95, 103, 135],[3, 0, 1]], // crimson pink grey
    [[0, 145, 255],[0, 72, 128],[136, 163, 184],[211, 230, 245],[1, 16, 28]], // blues
    [[255,1,1],[166, 0, 0],[62, 1, 1],[212, 152, 152],[41, 25, 24]], // reds
    [[240, 235, 227],[228, 220, 207],[126, 157, 156],[88, 112, 115],[29, 37, 38]], // 
    [[250, 134, 5],[250, 181, 105],[35, 68, 252],[35, 176, 252],[88, 112, 115]], // 10
    [[255,0,0],[255,255,0],[0, 40, 255]],
    [[180,0,60],[0, 145, 181]]
  ]
  palStart = palStart == null ? random(0,aPal.length-1,'i') : palStart
  palTrans = palTrans == null ? random(0,6,'i') : palTrans
  // palStart = 6
  // palTrans = 0

  let aExclusions = [[1,2],[4,1],[2,1],[0,3],[3,1],[4,4],[1,3],[2,2],[1,1],[2,5],[2,3],[1,5],[0,1],
    [4,5],[3,5],[5,2],[5,3],[7,1],[6,2],[8,6],[8,2]]
  let aFavorites = [[0,0],[1,0],[1,0],[2,0],[5,0],[7,0],[8,0],[7,6],[9,0]]
  let bNope=true
  while(bNope && bUseExclusions){
    bNope=false
    for(let i=0;!bNope && i<aExclusions.length;i++){
      if(aExclusions[i][0] == palStart && aExclusions[i][1] == palTrans)
        bNope=true
    }
    if(bNope){
      [palStart,palTrans] = aFavorites[random(0,aFavorites.length-1,'i')]
      // palStart = random(0,aPal.length-1,'i')
      // palTrans = random(0,6,'i')
    }
  }

  let aClrs = aPal[palStart]
  aClrs = scramblePalette(aClrs,palTrans)
  // console.log('palStart=',palStart,'palTrans=',palTrans)
  aClrs.palStart = palStart
  aClrs.palTrans = palTrans
  return aClrs
}

function scramblePalette(aPal,mode){
  // 6 is invert
  mode = mode == null ? choose([0,1,2,3,4,5,6]) : mode
  let a=[],t
  for(let i=0;i<aPal.length;i++){
    let b=[aPal[i][0],aPal[i][1],aPal[i][2]]
    if(mode==0){
      // noop
    }
    else if(mode==1){
      t = b[0]
      b[0]=b[1]
      b[1]=b[2]
      b[2]=t
    }
    else if(mode==2){
      t=b[2]
      b[2]=b[1]
      b[1]=b[0]
      b[0]=t
    }
    else if(mode==3){
      t=b[0]
      b[0]=b[1]
      b[1]=t
    }
    else if(mode==4){
      t=b[0]
      b[0]=b[2]
      b[2]=t
    }
    else if(mode==5){
      t=b[1]
      b[1]=b[2]
      b[2]=t
    }
    else if(mode==6){
      b[0]=255-b[0]
      b[1]=255-b[1]
      b[2]=255-b[2]
    }
    a.push(b)
  }
  return a
}

function rgbToGrayLevelColor(c){
  let g = rgbToGrayLevel(c)
  return [g,g,g]
}

function rgbToGrayLevel(c,b255=true){
  // I have also seen .2126 * R + .7152 * G + .0722 * B
  let v = constrain(Math.round(c[0]*.3+c[1]*.59+c[2]*.11),0,255)
  // let v = constrain(Math.round(c[0]*.2126+c[1]*.7152+c[2]*.0722),0,255)
  if(!b255)
    v = Number( (v/255).toFixed(3))
  return v
}

function getAverageColor(aPal){
  let a = [0,0,0]
  let n = aPal.length
  for(let i=0;i<n;i++){
    a[0] += aPal[i][0]
    a[1] += aPal[i][1]
    a[2] += aPal[i][2]
  }
  a[0] = Math.round(a[0]/n)
  a[1] = Math.round(a[1]/n)
  a[2] = Math.round(a[2]/n)
  return a
}

function clonePalette(aPal){
  return aPal.map(function(c){
    return c.map(function(v){return v})
  })
}

function makeCyclePalette(aPal){
  // make pallete so that beginning and end blends
  if(aPal.length == 1) return aPal
  let aPal2 = []
  for(let i=0;i<aPal.length;i++){
    aPal2.push(aPal[i])
    aPal2.push(mixColors(aPal[i],aPal[(i+1)%aPal.length],.5))
  }
  aPal2.push(aPal[0])
  return aPal2
}

function paletteStatistics(aPal){
  if(aPal.length<2)
    return {h:0,s:0,v:0}
  let c=0
  let ad=[0,0,0,0,0,0]
  for(let i=0;i<aPal.length;i++){
    let hsvi = rgbToHsv(aPal[i])
    ad[3] += hsvi.h
    ad[4] += hsvi.s
    ad[5] += hsvi.v
    for(let j=0;j<aPal.length;j++){
      if(i==j) continue
      let hsvj = rgbToHsv(aPal[j])
      c++
      ad[0] += Math.abs(hsvi.h-hsvj.h)
      ad[1] += Math.abs(hsvi.s-hsvj.s)
      ad[2] += Math.abs(hsvi.v-hsvj.v)
    }
  }
  let f=function(n){return Number(n.toFixed(2))}
  let n=aPal.length
  return {ha:f(ad[3]/n),sa:f(ad[4]/n),va:f(ad[5]/n),hv:f(ad[0]/c),sv:f(ad[1]/c),vv:f(ad[2]/c)}
}

function countHues(aPal,q=16){
  let oc = {}
  aPal.forEach(function(c){
    let hsv = rgbToHsv(c)
    if(hsv.s > .25 && hsv.v > .25){
      let qh = Math.round(quantize(hsv.h,0,360,q))
      oc[qh] = 1
    }
  })
  return Object.keys(oc).length
}

function makeBrightnessPalette(aPal){
  // map color brightness to grey levels
  let aPal2 = []
  for(let i=0;i<aPal.length;i++){
    let hsv = rgbToHsv(aPal[i])
    aPal2.push(hsvToRgb(hsv.h,0,hsv.v))
    // aPal2.push(rgbToGrayLevelColor(aPal[i]))
  }
  return aPal2
}

function rgbSaturation(c){
  // number in [0,1] -> 0 is all values the same, 1 is as different as possible from each other
  // my own version, not sure if it matches the proper one
  let ca = Math.round((c[0]+c[1]+c[2])/3)
  let v = Math.abs(ca-c[0]) + Math.abs(ca-c[1]) + Math.abs(ca-c[2])
  return Number((v/340).toFixed(2))
}

function rgbDistance(c1,c2){
  // in [0,255]
  return Math.round((Math.abs(c1[0]-c2[0]) + Math.abs(c1[1]-c2[1]) + Math.abs(c1[2]-c2[2]))/3)
}

function rgbAdjustSaturation(c,f){
  let hsv = rgbToHsv(c)
  return hsvToRgb(hsv.h,hsv.s*f,hsv.v)
}

function rgbAdjustContrast(c,f){
  // f usually in [-5,5]
  // adjust f based on average c value, want closer to 1 for very low or very high values
  let ca = (c[0]+c[1]+c[2])/3
  f = map3(ca,0,128,255,1+.2*(f-1),1+2.5*(f-1),1+.2*(f-1))
  let c2 = c.map(function(v){
    return constrain(Math.round((v-128)*f+128),0,255)
  })
  return c2
}

function rgbAdjustContrast0(c,f){
  // f usually in [-5,5]
  let c2 = c.map(function(v){
    return constrain(Math.round((v-128)*f+128),0,255)
  })
  return c2
}

function rgbVaryHue(c,f){
  let hsv = rgbToHsv(c)
  let hue = constrain(hsv.h + random(-f,f,'i'),0,360,true)
  return hsvToRgb(hue,hsv.s,hsv.v)
}

function rgbVarySaturation(c,f){
  let hsv = rgbToHsv(c)
  return hsvToRgb(hsv.h,hsv.s + random(-f,f),hsv.v)
}

function rgbVaryValue(c,f){
  let hsv = rgbToHsv(c)
  return hsvToRgb(hsv.h,hsv.s,hsv.v + random(-f,f))
}

function rgbShiftHue(c,f){
  let hsv = rgbToHsv(c)
  let hue = constrain(hsv.h + f,0,360,true)
  return hsvToRgb(hue,hsv.s,hsv.v)
}

function rgbHueVariedPalette(c,n=5,vhue=60){
  let hsv = rgbToHsv(c)
  let aPal=[]
  for(let i=0;i<n;i++){
    aPal.push(hsvToRgb(constrain(map(i,0,n-1,hsv.h-vhue,hsv.h+vhue),0,360,true),hsv.s,hsv.v))
  }
  return aPal
}

function rgbAdjustBrightness(c,f){
  let hsv = rgbToHsv(c)
  return hsvToRgb(hsv.h,hsv.s,hsv.v+f,0)
  // let c2 = [
  //   Math.round(constrain(c[0]*f,0,255)),
  //   Math.round(constrain(c[1]*f,0,255)),
  //   Math.round(constrain(c[2]*f,0,255))
  // ]
  // return c2
}

function  rgbComplement(c){
  return [255-c[0],255-c[1],255-c[2]]
}

function  rgbOpposite(c0,c1){
  // return a color that is on 'the other side' of c0 from c1
  let c2 = []
  for(let i=0;i<3;i++){
    c2[i] = constrain(c0[i] - (c1[i]-c0[i]),0,255)
  }
  return c2
}

function  rgbBrightest(c,maxV=255){
  let m = Math.max(c[0],c[1],c[2],1)
  let f = maxV/m
  let fn=function(v){
    return constrain(Math.round(v),0,255)
  }
  return [fn(f*c[0]),fn(f*c[1]),fn(f*c[2])]
}

function rgbToString(a0,alpha){
  let a = a0
  if(alpha){
    alpha = constrain(alpha,0,1)
    alpha = Number(alpha).toFixed(2)
  }
  if(alpha != null){
    a = a0.slice()
    if(a.length == 3)
      a[3] = alpha
    // else
    //   a.push(alpha)
  }
  else{
    if(a[3] != null && a[3] > 1)
      a[3] = a[3]/255
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

function makeSubsetCanvas(dc,x,y,w,h){
  var canvas = document.createElement('canvas');
  var context = canvas.getContext('2d');
  canvas.width = w;
  canvas.height = h;
  context.drawImage(dc.canvas, 0, 0,w,h,x,y,w,h );
  return canvas
}

function makeCanvas(w,h){
  var canvas = document.createElement('canvas');
  var context = canvas.getContext('2d');
  canvas.width = w;
  canvas.height = h;
  return canvas
}

function fillPixels(dc,fnFill){
  let w = dc.canvas.width
  let h = dc.canvas.height
  let dBack = dc.getImageData(0,0,w,h)
  let data = dBack.data
  for(let x=0;x<w;x++){
    for(let y=0;y<h;y++){
      let i = (x + y * w) * 4
      let a = fnFill(data,i,x,y,w,h)
      if(a){
        data[i] = a[0]
        data[i+1] = a[1]
        data[i+2] = a[2]
        data[i+3] = a[3]
      }
    }
  }
  dc.putImageData(dBack, 0, 0)
  return dBack
}

function makeRadialGradientCanvas(s,clr1,clr2,bNoise,noiseStrength=30,dc,rf=1,seed){
  let dBack = dc != null ? dc.getImageData(0,0,s,s) : new ImageData(s,s);
  let data = dBack.data;
  let distMax = s/2;
  let m = Math.round(s/2)
  let field = bNoise ? makeFlowField(s,s,seed,noiseStrength,true) : null
  for(let x=0;x<s;x++){
    for(let y=0;y<s;y++){
      let f = distance(m,m,x,y)/distMax
      if(bNoise) f = map(f,0,1,.2*f+.8*field[x][y],.85*f+.25*field[x][y])
      f = Math.max(0,Math.min(1,f/rf))
      let i = (x + y * s) * 4;
      data[i] = lerp(f,clr1[0],clr2[0])
      data[i+1] = lerp(f,clr1[1],clr2[1])
      data[i+2] = lerp(f,clr1[2],clr2[2])
      data[i+3] = lerp(f,clr1[3],clr2[3])*255 // assume clr1 has alpha in [0-1]
    }
  }
  if(dc != null){
    dc.putImageData(dBack, 0, 0 )
    return dc.canvas
  }
  var c = document.createElement('canvas');
  var dc = c.getContext('2d');
  c.width = s;
  c.height = s;
  dc.putImageData(dBack, 0, 0 );
  return c
}

function makeRandomPercentCanvas(w,h,clr1,p){
  // p=.2 means fill 20% of pixels with color randomly
  // or if clr1 is of the form [[r,g,b],[r,g,b]] and p like [p1,p2] then choose accordingly
  let bMulti = Array.isArray(clr1[0])
  var dBack = new ImageData(w,h);
  var data = dBack.data;
  let c1 =  clr1
  for(let x=0;x<w;x++){
    for(let y=0;y<h;y++){
      // if(random() > p) continue
      let i = (x + y * w) * 4
      c1 = bMulti ? choose(clr1,p) : c1
      data[i] = c1[0]
      data[i+1] = c1[1]
      data[i+2] = c1[2]
      data[i+3] = (bMulti || random() <= p) ? 255 : 0
    }
  }
  var c = document.createElement('canvas');
  var dc = c.getContext('2d');
  c.width = w;
  c.height = h;
  dc.putImageData(dBack, 0, 0 );
  return c
}

function makeGrainCanvas(s,strength,bNoise){
  var dBack = new ImageData(s,s);
  var data = dBack.data;
  let distMax = s/2;
  let m = Math.round(s/2)
  let field = bNoise ? makeFlowField(s,s,null,30,true) : null
  for(let x=0;x<s;x++){
    for(let y=0;y<s;y++){
      let f = 1
      if(bNoise) f = map(f,0,1,.2*f+.8*field[x][y],.85*f+.25*field[x][y])
      f = Math.min(1,f)
      let i = (x + y * s) * 4;
      let v = random(0,f*strength,'i')
      let a = random() < .5 ? 0 : Math.round(255*v/strength)
      data[i  ] = v
      data[i+1] = v
      data[i+2] = v
      data[i+3] = a
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

function blurFunctionalVarying(dc,fnRadius,fnTransform,bAheadOnly=false){
  // fnRadius gives radius of blurring from x,y
  let w = dc.canvas.width
  let h = dc.canvas.height

  let bSimple = typeof fnRadius == 'number'
  let dSrc = dc.getImageData(0,0,w,h)
  var data = dSrc.data;
  for(let x=0;x<dSrc.width;x++){
    for(let y=0;y<dSrc.height;y++){
      let s = bSimple ? fnRadius : fnRadius(x,y)
      if(s<=0) continue
      let s0 = bAheadOnly ? 0 : s
      let r=0, g=0, b=0, a=0
      let n = 0
      let index = (x + y * dSrc.width) * 4;
      for(let xi=x-s0;xi <= x+s;xi++){
        if(xi < 0 || xi >= dSrc.width) continue;
        for(let yi=y-s0;yi <= y+s;yi++){
          if(yi < 0 || yi >= dSrc.height) continue;
          let indexi = (xi + yi * dSrc.width) * 4;
          n++;
          r += dSrc.data[indexi]
          g += dSrc.data[indexi+1]
          b += dSrc.data[indexi+2]
          a += dSrc.data[indexi+3]
        }
      }
      data[index]   = r/n
      data[index+1] = g/n 
      data[index+2] = b/n
      data[index+3] = a/n
      if(fnTransform){
        let c = fnTransform([data[index],data[index+1],data[index+2],data[index+3]])
        data[index]   = c[0]
        data[index+1] = c[1] 
        data[index+2] = c[2]
        data[index+3] = c[3] == null ? 255 : c[3]
      }
    }
  }
  if(false && fnTransform)
    for(let x=0;x<dSrc.width;x++){
      for(let y=0;y<dSrc.height;y++){
        let index = (x + y * dSrc.width) * 4
        let c = fnTransform([data[index],data[index+1],data[index+2],data[index+3]])
        data[index]   = c[0]
        data[index+1] = c[1] 
        data[index+2] = c[2]
        data[index+3] = c[3] == null ? 255 : c[3]
      }
    }
  dc.putImageData(dSrc,0, 0)
}

function blurPoly(dc,pts,radius){
  if(radius == 0) return
  let w = dc.canvas.width
  let h = dc.canvas.height

  pts = simplifyPoints(pts)
  let o = processPoints(pts)
  let buf = 3
  o.xmin = constrain(Math.floor(o.xmin-buf),0,w)
  o.xmax = constrain(Math.ceil(o.xmax+buf),0,w)
  o.ymin = constrain(Math.floor(o.ymin-buf),0,h)
  o.ymax = constrain(Math.ceil(o.ymax+buf),0,h)
  if(o.xmax-o.xmin < 2 || o.ymax-o.ymin < 2) return
  let dSrc = dc.getImageData(o.xmin, o.ymin, o.xmax-o.xmin, o.ymax-o.ymin)
  let s = radius
  let s2 = (2*s+1)*(2*s+1)
  var data = dSrc.data;
  let wt = 1/s2
  // wt = s2 = 1 // this seems better
  pts = dilatePoints(pts,-2,true,true,true)
  for(let x=0;x<dSrc.width;x++){
    for(let y=0;y<dSrc.height;y++){
      if(!isPointInPoly(pts,{x:x+o.xmin,y:y+o.ymin})) continue

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
  dc.putImageData(dSrc,o.xmin, o.ymin)
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

function insertColorIfNotPresent(aClrs,c){
  let bIn = false
  for(let i=0;i<aClrs.length;i++){
    if(aClrs[i][0] == c[0] && aClrs[i][1] == c[1] && aClrs[i][2] == c[2]){
      bIn = true
      break
    }
  }
  if(!bIn)
    aClrs.push(c)
  return aClrs
}

function randomColor(){
  return [random(0,255,'i'),random(0,255,'i'),random(0,255,'i')]
}

function addNoiseToColor(c,n,bGreenLimit,bConsistent=false){
  if(Array.isArray(c[0]))
    return c.map(cc => addNoiseToColor(cc,n,bGreenLimit,bConsistent))
  if(bConsistent){
    let mn = Math.min(c[0],c[1],c[2],255-c[0],255-c[1],255-c[2])
    n = Math.min(n,mn)
  }
  let cn = c.slice()
  let c0 = random(-n,n,'i')
  let c1 = bConsistent ? c0 : random(-n,n,'i') 
  let c2 = bConsistent ? c0 : random(-n,n,'i') 
  cn[0] = constrain(c[0] + c0,0,255)
  cn[2] = constrain(c[2] + c2,0,255)
  if(bGreenLimit){
    let d = Math.max(Math.abs(cn[0]-c[0]),Math.abs(cn[2]-c[2]))
    let dg = cn[0]-c[0] + cn[2]-c[2] > 0 ? d*random(.25,.5) : -d*random(1,1.5)
    cn[1] = constrain(c[1] + Math.round(dg),0,255)
  }
  else
    cn[1] = constrain(c[1] + c1,0,255)
  return cn
}

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
  if(aPoints instanceof CanvasRenderingContext2D){
    let c = getPixelValues(aPoints,pt.x,pt.y,threshold <= 1 ? 0 : Math.round(threshold-1))
    // let c = getPixelValues(aPoints,pt.x,pt.y,0)
    if(c[0] > 0)
      return true
    if(bAddIfNoCollide){
      dc.fillStyle = 'white'
      dc.fillRect(pt.x,pt.y,1,1)
    }
    return false
  }
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

function processArray(a,fn){
  // up to 3 dimensions
  for(let x=0;x<a.length;x++){
    if(Array.isArray(a[x]))
      for(let y=0;y<a[x].length;y++){
        if(Array.isArray(a[x][y]))
          for(let z=0;z<a[x][y].length;z++){
            fn(a[x][y][z],x,y,z)
          }
        else
          fn(a[x][y],x,y)
      }
    else
      fn(a[x],x)
  }
}

function addPropertyValue(a,p,v){
  a.forEach(e => e[p]=v)
}

function averagePropertyValue(a,p){
  let tot = 0
  let n = 0
  a.forEach(function(e){
    if(e[p] != null){
      tot += e[p]
      n++
    }
  })
  return n==0 ? null : tot/n
}

function getBounds(o,pt,prec,weight=1){
  if(o['count']==null)
    o['count']=0
  if(o['weight']==null)
    o['weight']=0
  for(const p in pt){
    if(typeof pt[p] != 'number') continue
    if(o[p+'avg']==null)
      o[p+'avg']=0
    if(o[p+'wavg']==null)
      o[p+'wavg']=0
    o[p+'avg'] = (o[p+'avg']*o['count'] + pt[p])/(o['count']+1)
    o[p+'wavg'] = (o[p+'wavg']*o['weight'] + pt[p]*weight)/(o['weight']+weight)

    if(o[p+'min']==null)
      o[p+'min']=Infinity  
    if(o[p+'max']==null)
      o[p+'max']=-Infinity  
    o[p+'min'] = Math.min(o[p+'min'],pt[p])
    o[p+'max'] = Math.max(o[p+'max'],pt[p])
    if(prec != null){
      o[p+'min'] = Number(o[p+'min'].toFixed(prec))
      o[p+'max'] = Number(o[p+'max'].toFixed(prec))
      o[p+'avg'] = Number(o[p+'avg'].toFixed(prec))
      o[p+'wavg'] = Number(o[p+'wavg'].toFixed(prec))
    }
  }
  o['count']++
  o['weight']+=weight
  return o
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

function makeNoiseFunction(r0,r1,steps=100,smooth=50,seed,bFixedEnds=false){
  // returns a function that accepts v in [r0,r1] and returns smooth noise value in [0,1]
  // if bFixedEnds is true then both ends have a fixed value of .5 and values near ends get smoothed towards .5
  seed = seed == null ? random() : seed
  let field = makeFlowField(1,steps,seed,smooth,true)
  if(bFixedEnds){
    let nSmoothSteps = Math.max(2,Math.round(steps*.1))
    for(let j=0;j<steps;j++){
      let f = 0
      if(j < nSmoothSteps)
        f = map(j,0,nSmoothSteps-1,1,.75)
      else if(j >= steps - nSmoothSteps)
        f = map(j,steps - nSmoothSteps,steps-1,.75,1)
      field[0][j] = lerp(f,field[0][j],.5)
    }
  }
  let fn = function(v){
    v = constrain(v,r0,r1)
    let f = invLerp(v,r0,r1)
    return lerpArray(f,field[0])
    // let i = map(v,r0,r1,0,steps-1)
    // let i = constrain(Math.floor(mapc(v,r0,r1,0,steps)),0,steps-1)
    // return field[0][i]
  }
  return fn
}

function createField(w,h,fn,bRescale,d){
  let field = []
  for(let x=0;x<w;x++){
    field[x] = []
    for(let y=0;y<h;y++){
      if(d!=null){
        field[x][y] = []
        for(let z=0;z<d;z++)
          field[x][y][z] = fn(x,y,z,w,h,d)
      }
      else
        field[x][y] = fn(x,y,w,h)
    }
  }
  if(bRescale)
    field = rescaleField(field)
  return field
}

function addFields(field1,field2,f1=1,f2=1,bRescale){
  // same lengths
  let f = []
  for(let x=0;x<field1.length;x++){
    f[x] = []
    for(let y=0;y<field1[x].length;y++){
      f[x][y] = f1*field1[x][y] + f2*field2[x][y]
    }
  }
  if(bRescale)
    f = rescaleField(f)
  return f
}

function fieldAverage(field){
  let tot = 0, n=0
  for(let x=0;x<field.length;x++){
    for(let y=0;y<field[x].length;y++){
      n++
      tot += field[x][y]
    }
  }
  return tot/n
}


function rescaleField(field,r0=0,r1=1,bSetAverageToMid,bClampEdgesToMid,fnProcess){
  let min = Infinity, max = -Infinity,n=0,tot=0
  for(let x=0;x<field.length;x++){
    for(let y=0;y<field[x].length;y++){
      min = Math.min(min,field[x][y])
      max = Math.max(max,field[x][y])
    }
  }
  if(isNaN(min) || isNaN(max))
    console.log('Error in rescaleField')
  let f = []
  let mid = lerp(.5,r0,r1)
  let nClampx = Math.round(field.length*.02)
  let nClampy = Math.round(field[0].length*.02)
  for(let x=0;x<field.length;x++){
    f[x] = []
    for(let y=0;y<field[x].length;y++){
      f[x][y] = map(field[x][y],min,max,r0,r1)
      if(fnProcess)
        f[x][y] = fnProcess(f[x][y],x,y)
      if(bClampEdgesToMid){
        let fm = 0
        if(x <= nClampx)
          fm = map(x,0,nClampx,1,.1)
        else if(x >= field.length - nClampx)
          fm = map(x,field.length - 1,field.length - nClampx,1,.1)
        f[x][y] = lerp(fm,f[x][y],mid)
        if(y <= nClampy)
          fm = map(y,0,nClampy,1,.1)
        else if(y >= field[0].length - nClampy)
          fm = map(y,field[0].length - 1,field[0].length - nClampy,1,.1)
        f[x][y] = lerp(fm,f[x][y],mid)
      }
      n++
      tot+=f[x][y]
    }
  }
  if(!bSetAverageToMid)
    return f
  let shift = lerp(.5,r0,r1)-(tot/n)
  // not correct for pathological cases
  for(let x=0;x<f.length;x++){
    for(let y=0;y<f[x].length;y++){
      f[x][y] = constrain(f[x][y]+shift,r0,r1)
      if(bClampEdgesToMid){
        let fm = 0
        if(x <= nClampx)
          fm = map(x,0,nClampx,1,.1)
        else if(x >= field.length - nClampx)
          fm = map(x,field.length - 1,field.length - nClampx,1,.1)
        f[x][y] = lerp(fm,f[x][y],mid)
        if(y <= nClampy)
          fm = map(y,0,nClampy,1,.1)
        else if(y >= field[0].length - nClampy)
          fm = map(y,field[0].length - 1,field[0].length - nClampy,1,.1)
        f[x][y] = lerp(fm,f[x][y],mid)
      }
    }
  }
  return f
}

function smoothField(field,bZeroToOne=false,f=1,d=1){
  let field2 = createField(field.length,field[0].length,function(x,y,w,h){
    let v = getFieldValue(field,x,y)
    let v1 = getFieldValue(field,x-d,y)
    let v2 = getFieldValue(field,x,y-d)
    let v3 = getFieldValue(field,x+d,y)
    let v4 = getFieldValue(field,x,y+d)
    v = combineAngles(v,v1,1,f)
    v = combineAngles(v,v2,1,f)
    v = combineAngles(v,v3,1,f)
    v = combineAngles(v,v4,1,f)
    return v
  },null,null,bZeroToOne)
  return field2
}

function smoothFlowFieldAtBoundaries(data, iterations, edgeSize) {
  // so that we can use the field with spheres etc and have it be continuous
  if(iterations == null)
    iterations = 1
  if(edgeSize == null)
    edgeSize = Math.ceil(data.length*.05)
  const numCols = data.length;
  const numRows = data[0].length;

  // Create a new array to store the smoothed field
  let smoothedData = [];

  for (let iter = 0; iter < iterations; iter++) {
    smoothedData = []
    for (let j = 0; j < numCols; j++) {
      const smoothedColumn = [];

      for (let i = 0; i < numRows; i++) {
        // Check if the current cell is within the specified edgeSize
        const isEdgeCell =
          j < edgeSize || j >= numCols - edgeSize || i < edgeSize || i >= numRows - edgeSize;

        if (isEdgeCell) {
          // Calculate average of neighboring values with wrapping
          const neighbors = [
            data[j][i],
            data[(j + 1) % numCols][i],
            data[(j - 1 + numCols) % numCols][i],
            data[j][(i + 1) % numRows],
            data[j][(i - 1 + numRows) % numRows],
          ];

          // const smoothedValue = neighbors.reduce((acc, val) => acc + val, 0) / neighbors.length;
          let smoothedValue = 0
          neighbors.forEach(function(v){smoothedValue+=v})
          smoothedValue /= neighbors.length
          smoothedColumn.push(smoothedValue);
        } else {
          // If not an edge cell, retain the original value
          smoothedColumn.push(data[j][i]);
        }
      }

      smoothedData.push(smoothedColumn);
    }

    // Set smoothed data as the input for the next iteration
    data = smoothedData // Copy the smoothed data
  }

  return smoothedData;
}

function makeFlowField(nCols,nRows,seed,w,bZeroToOne,bWrap=false,flatten=1,nLevels,bRescale){
	// smaller w is noisier
  var grid = [];

  noise.seed(seed || 42);
  w = w || 80
  for(let c=0;c<nCols;c++){
    grid[c]=[];
    for(let r=0;r<nRows;r++){
      if(nLevels != null){
        grid[c][r]=[]
        for(let k=0;k<nLevels;k++){
          grid[c][r][k] = Math.PI*noise.simplex3(c/w, r/w*flatten,k/w);
          if(bZeroToOne)
            grid[c][r][k] = map(grid[c][r][k],-Math.PI,Math.PI,0,1)
        }
      }
      else{
        grid[c][r] = Math.PI*noise.simplex2(c/w, r/w*flatten);
        if(bZeroToOne)
          grid[c][r] = map(grid[c][r],-Math.PI,Math.PI,0,1)
      }
    }
  }
  if(bWrap){
    // move end values towards beginning, move beginning values towards end
    let c2 = Math.floor(nCols/2)
    let r2 = Math.floor(nRows/2)
    for(let c=0;c<nCols;c++){
      for(let r=0;r<nRows;r++){
        if(c == 0)
          grid[c][r] = lerp(.5,grid[c][r],grid[nCols-1][r]) 
        else if(c == nCols-1)
          grid[c][r] = lerp(.35,grid[c][r],grid[0][r]) 
        
        if(r == 0)
          grid[c][r] = lerp(.5,grid[c][r],grid[c][nRows - 1]) 
        else if(r == nRows - 1)
          grid[c][r] = lerp(.35,grid[c][r],grid[c][0]) 
      }
    }
  }
  if(bRescale)
    grid = bZeroToOne ? rescaleField(grid) : rescaleField(grid,-Math.PI,Math.PI)
  return grid;
}

function trimOutOfBounds3D(pts,r){
  // removes all points after last in bounds point, r is a 3d rectangle
  let iLast=null
  for(let i=0;i<pts.length;i++){
    if(inRectangle(pts[i],r))
      iLast = i
  }
  if(iLast == null)
    return []
  pts = clonePoints(pts)
  return pts.slice(0,iLast+1)
}

function trimOutOfBounds(pts,x0,y0,w,h){
  // removes all points after last in bounds point
  // also removes all leading points that are out of bounds
  // todo: clip to boundaries
  let iLast=null,iFirst,pInt
  for(let i=0;i<pts.length;i++){
    if(x0 <= pts[i].x && pts[i].x < x0+w && y0 <= pts[i].y && pts[i].y < y0+h){
      iLast = i
      if(iFirst == null)
        iFirst = i
    }
  }
  if(iLast == null)
    return []
  let poly = makeRectPoly(x0,y0,w,h)
  if(iLast == pts.length-1){
    if(iFirst != 0){
      // we have leading points not in bounds
      pInt = getPolyLineIntersection(poly,[pts[iFirst-1],pts[iFirst]])
      pts[iFirst-1] = pInt
      return pts.slice(iFirst-1)
    }
    return pts.slice(0)
  }

  // find intersection with boundary
  pInt = getPolyLineIntersection(poly,[pts[iLast],pts[iLast+1]])
  pts[iLast+1] = pInt
  if(iFirst != 0){
    // we have leading points not in bounds
    pInt = getPolyLineIntersection(poly,[pts[iFirst-1],pts[iFirst]])
    pts[iFirst-1] = pInt
    return pts.slice(iFirst-1,iLast+2)
  }
  return pts.slice(0,iLast+2)
}

function extendPointInField(field,x0,y0,lw,maxLen,aPoints,w,h,dSeg,bReturnNewPoints=false,bIgnoreBounds,bReverseFieldDirection,maxPoints,fNoise=0,bKeepLastCollision=false){
  // dSeg is distance between segments, will be set by default
  let i,j,x,y,r,c;
  w = w || 1000
  h = h || 1000
  maxLen = maxLen || 100
  aPoints = aPoints || []
  let bCanvasTest = !Array.isArray(aPoints)
  let bFieldFunction = typeof field == 'function'

  let nCols = bFieldFunction ? field('width') : field.length;
  let nRows = bFieldFunction ? field('height') : field[0].length;
  let d = w/nCols*1;
  d = dSeg || d

  let threshold = Math.max(w/nCols*.2,lw) *1.0 ;
  x = x0
  y = y0
  let nLengthStart = bCanvasTest ? 0 : aPoints.length;
  let newPoints = []

  if(pointsCollision(aPoints,{x:x,y:y},threshold,!bReturnNewPoints,nLengthStart))
    return
  else
    newPoints.push({x:x,y:y})
  for(i=0;i<2000;i++){
    c = Math.floor(x*nCols/w)
    r = Math.floor(y*nRows/h)
    if(bIgnoreBounds){
      if(Array.isArray(bIgnoreBounds)){
        if(!isPointInPoly(bIgnoreBounds,{x:x,y:y}))
          break
      }
      else{
        c = constrain(c,0,nCols-1)
        r = constrain(r,0,nRows-1)
      }
    }
    if(c < 0 || c >= nCols) break
    if(r < 0 || r >= nRows) break
    let vf = bFieldFunction ? field(c,r) : field[c][r]
    let ang = bReverseFieldDirection ? vf + Math.PI: vf
    if(fNoise != 0)
      ang += random(-fNoise,fNoise)*Math.PI*4
    x += d * Math.cos(ang);
    y += d * Math.sin(ang);
    if(pointsCollision(aPoints,{x:x,y:y},threshold,!bReturnNewPoints,nLengthStart)){
      if(bKeepLastCollision)
        newPoints.push({x:x,y:y})
      break
    }
    else{
      if(newPoints.length > 20 && newPoints.length % 20 == 0){
        // self check to catch discontinuities in field
        if(pointsCollision(newPoints,{x:x,y:y},threshold*.9,!bReturnNewPoints,0))
          break
      }
      newPoints.push({x:x,y:y})
    }
    let dist = distance(x0,y0,x,y)
    if(dist > maxLen || (maxPoints!= null && i > maxPoints))
    	break;
  }
  return bReturnNewPoints ? newPoints : aPoints
}

function setSparseFieldValues(f,x,y,w,h,v,wMax,hMax){
  x = Math.floor(x)
  y = Math.floor(y)
  w = Math.ceil(w)
  h = Math.ceil(w)
  for(let x1=x;x1<x+w;x1++){
    if(0 > x1 || x1 > wMax) continue
    for(let y1=y;y1<y+h;y1++){
      if(0 > y1 || y1 > hMax) continue
      if(f[x1] == null){
        f[x1] = []
        f[x1].yMin = hMax
      }
      f[x1][y1] = v
      f[x1].yMin = Math.min(f[x1].yMin,y1)
    }
  }
}

function getArrayValueNeighbourhood(a,x,y,rMax,def){
  // not efficient
  x = Math.floor(x)
  y = Math.floor(y)
  if(a[x] != null && a[x][y] != null) return a[x][y]
  for(let r=1;r <= rMax;r++){
    for(let x2=x-r;x2<=x+r;x2++){
      for(let y2=y-r; y2<=y+r;y2++){
        if(Math.abs(x2-x)+Math.abs(y2-y) != r) continue
        if(a[x2] != null && a[x2][y2] != null) return a[x2][y2]
      }
    }
  }
  return def
}

function getSparseFieldValue(f,x,y,def,lookUpDistance=0,xVary=0){
  x = Math.floor(x)
  y = Math.floor(y)
  if(f[x] == null) return def
  if(f[x][y] == null){
    for(let y2=y-1; y2 >= y - lookUpDistance && y2 >= f[x].yMin; y2--){
      if(xVary == 0){
        if(f[x][y2]!=null)
          return f[x][y2]
      }
      else{
        let x2 = x+random(-xVary,xVary,'i')
        if(f[x2]!= null && f[x2][y2]!=null) return f[x2][y2]
      }
    }
    return def
  }
  return f[x][y]
}

function drawFlowField(dc,field,bZeroToOne,res=2){
  let i,j,x,y,r;
  let w=dc.canvas.width;
  let h=dc.canvas.height;
  dc.fillStyle='#f0f0f0';
  dc.fillRect(0,0,w,h);
  let nCols = field.length;
  let nRows = field[0].length;
  let d = w/nCols*.7*res;

  dc.fillStyle=rgbToString([0,0,0],.75)
  dc.strokeStyle=rgbToString([0,0,0],.75)
  dc.lineWidth = .75
  for(let c=0;c<nCols;c+=res){
    x = w * (c+.5)/nCols
    for(let r=0;r<nRows;r+=res){
      y = h * (r+.5)/nRows
      drawDot(dc,x,y,1)
      let a = bZeroToOne ? lerp(field[c][r],0,Math.PI*2) : field[c][r]
      drawLine(dc,{x:x,y:y},{x:x+d*Math.cos(a),y:y+d*Math.sin(a)})
      // dc.lineTo(x+d*Math.cos(a),y+d*Math.sin(a))
      // dc.stroke();
    }
  }
}

function equalPoints(p1,p2){
  return p1.x==p2.x && p1.y==p2.y && p1.z==p2.z
}

function equalColors(c1,c2){
  if(c1[0] == c2[0] && c1[1] == c2[1] && c1[2] == c2[2])
    return true
  return false
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
function randSeed(s,name){
  GEN.lastNormal = null // for normal random generator
  GEN.n = 0
  seed = xmur3(s)
  rand = mysfc32(seed(), seed(), seed(), seed())
  if(name != null){
    if(GEN.dict == null)
      GEN.dict = {}
    GEN.dict[name] = {fn:rand,last:GEN.lastNormal,n:GEN.n}
    GEN.nameCurrent = name
  }
}

function setRandGenerator(name){
  if(GEN.dict[name] == null)
    console.log('ERROR! Invalid named random generator')
  else{
    GEN.dict[GEN.nameCurrent] = {fn:rand,last:GEN.lastNormal,n:GEN.n}
    let o = GEN.dict[name]
    rand = o.fn
    GEN.lastNormal = o.last
    GEN.n = o.n
    GEN.nameCurrent = name
  }
}

var ARANDOM = []
function pushRandomFunction(){
  ARANDOM.push({fn:rand,last:GEN.lastNormal,n:GEN.n})
}
function popRandomFunction(){
  let o = ARANDOM.pop()
  rand = o.fn
  GEN.lastNormal = o.last
  GEN.n = o.n
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
      GEN.n++
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

function limitMagnitude(pt,v){
  let d = distance(pt)
  if(d<=v)
    return pt
  let ptr = clonePoint(pt)
  ptr.x = ptr.x/d*v
  ptr.y = ptr.y/d*v
  if(pt.z != null)
    ptr.z = ptr.z/d*v
  return ptr
}

function randomPoint(p0,mag=1,b2D){
  // if p0 is null then just a random point with mag length
  // if p0 defined then a random point exactly mag distance away from p0
  let v1 = {x:random(-1,1),y:random(-1,1),z:random(-1,1)}
  if(b2D===0)
    v1.z = 0
  else if(b2D)
    v1.z = null
  let pRand = normalize(v1,mag)
  if(p0==null)
    return pRand
  return addPoint(p0,pRand)
}

function addPoint(p1,p2,m=1,bInPlace=false){
  let p = bInPlace ? p1 : clonePoint(p1)
  p.x += p2.x*m
  p.y += p2.y*m
  if(p1.z != null)
    p.z += p2.z*m
  return p
}

function subtractPoint(p1,p2){
  let p = clonePoint(p1)
  p.x -= p2.x
  p.y -= p2.y
  if(p1.z != null)
    p.z -= p2.z
  return p
}

function scalePoint(p1,v){
  let p = clonePoint(p1)
  p.x *= v
  p.y *= v
  if(p1.z != null)
    p.z *= v
  return p
}

function normalize(p,m=1){
  let d = distance(p)
  if(d == 0) return p
  let p2 = {
    x: p.x/d*m,
    y: p.y/d*m
  }
  if(p.z != null)
    p2.z = p.z/d*m
  return p2
}

function distanceManhattan(p1,p2){
  if(Array.isArray(p1) && Array.isArray(p2)){
    let sum=0
    for(let i=0; i < p1.length && i < p2.length;i++)
      sum += Math.abs(p1[i]-p2[i])
    return sum
  }
  return Math.abs(p1.x-p2.x) + Math.abs(p1.y-p2.y)
}

function distance(p1,p2,p3,p4){
  if(p2 == null && p3 == null && p4 == null)
    return p1.z == null ? Math.sqrt(p1.x*p1.x+p1.y*p1.y) : Math.sqrt(p1.x*p1.x+p1.y*p1.y+p1.z*p1.z)
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
  return (p1.z != null && p2.z != null) ? Math.sqrt(Math.pow(p1.x-p2.x,2)+Math.pow(p1.y-p2.y,2)+Math.pow(p1.z-p2.z,2))
                                        : Math.sqrt(Math.pow(p1.x-p2.x,2)+Math.pow(p1.y-p2.y,2))
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

function getOrthogonalUnitVectors(v){
  let v1,v2,v3
  v1 = clonePoint(v)
  v1 = normalize(v1)
  if(v.z == null){
    v2 = normalize({x:-v1.y,y:v1.x})
    return [v1,v2]
  }
  if(v1.y != 0 || v1.x != 0){
    v2 = normalize({x:-v1.y,y:v1.x,z:0})
    if(v1.y == 0)
      v3 = normalize({x:-v1.z,y:0,z:v1.x})
    else
      v3 = normalize({x:0,y:-v1.z,z:v1.y})
  }
  else{
    v2 = normalize({x:-v1.z,y:0,z:v1.x})
    v3 = normalize({x:0,y:-v1.z,z:v1.y})
  }
  return [v1,v2,v3]
} 

function addFaceToMesh(m,iVertex,pts,bUpdateMesh=false,faceLast){
  // add new face (assume pts has 2 for now)
  let n = m.vertices.length
  m.vertices.push(pts[0])
  m.vertices.push(pts[1])
  let facen = [{i:iVertex},{i:n},{i:n+1}]
  if(faceLast != null)
    facen.faceLast = faceLast
  m.faces.push(facen)
  if(bUpdateMesh){
    m.ptc = {
      x: averagePropertyValue(m1.vertices,'x'),
      y: averagePropertyValue(m1.vertices,'y'),
      z: averagePropertyValue(m1.vertices,'z')
    }
  }
  return facen
}

function extendMesh(m,pt){
  // find face closest to pt, remove that face and add new faces from its vertices to target pt
  let polys = meshToPolys(m,false)
  polys.forEach(e => setPolyAverageCoordinates(e))
  let iNearest = getPointNearestCoordinate(polys,pt,false,false,true)
  let faceNearest = m.faces[iNearest]
  let iNew = m.vertices.length
  m.vertices.push(pt)
  for(let i=0;i<faceNearest.length;i++){
    let j = (i + 1) % faceNearest.length
    let face = [{i:faceNearest[i].i},{i:iNew},{i:faceNearest[j].i}]
    m.faces.push(face)
  }
  // remove old face
  m.faces.splice(iNearest,1)
}

function isPointInsideMeshBoundingBox(m,pt){
  let o = processPoints(m.vertices)
  if(!inRange(pt.x,o.xmin,o.xmax) || !inRange(pt.y,o.ymin,o.ymax) || !inRange(pt.z,o.zmin,o.zmax))
    return false
  return true
}

function getRandomPointInMesh(m){
  let o = processPoints(m.vertices)
  let nTrials = 1000
  let pt = null
  while(pt == null || !isPointInsideMesh(m,pt)){
    nTrials--
    if(nTrials < 0){
      console.log('ERROR,cant get random point in mesh')
      return null
    }
    pt = {x:random(o.xmin,o.xmax),y:random(o.ymin,o.ymax),z:random(o.zmin,o.zmax)}
  }
  return pt
}

function isPointInsideMesh(m,point) {
  // Define a ray from the point along a specific direction
  const rayDirection = { x: 1, y: 0, z: 0 }
  const rayOrigin = { x: point.x, y: point.y, z: point.z }

  let intersections = 0;

  // Iterate over each face of the shape
  for (const face of m.faces) {
    const vertices = face.map(ov => m.vertices[ov.i]);

    // Check if the ray intersects with the face
    if (isRayIntersectingFace(rayOrigin, rayDirection, vertices)) {
      intersections++
    }
  }

  // Point is inside if the number of intersections is odd
  return intersections % 2 === 1
}

// Helper function to check if a ray intersects with a face
function isRayIntersectingFace(rayOrigin, rayDirection, vertices) {
  const epsilon = 1e-6 // Small value to avoid precision issues

  const v0 = vertices[0]
  const v1 = vertices[1]
  const v2 = vertices[2]

  const edge1 = subtractPoint(v1, v0)
  const edge2 = subtractPoint(v2, v0)
  const h = crossProduct(rayDirection, edge2)
  const a = dotProduct(edge1, h)

  if (a > -epsilon && a < epsilon) {
    return false // Ray is parallel to the face
  }

  const f = 1.0 / a
  const s = subtractPoint(rayOrigin, v0)
  const u = f * dotProduct(s, h)

  if (u < 0.0 || u > 1.0) {
    return false
  }

  const q = crossProduct(s, edge1)
  const v = f * dotProduct(rayDirection, q)

  if (v < 0.0 || u + v > 1.0) {
    return false
  }

  const t = f * dotProduct(edge2, q)

  return t > epsilon
}

function dotProduct(a, b) {
  return a.x * b.x + a.y * b.y + (a.z == null ? 0 : a.z * b.z)
}

function reflect(incident, normal) {
  const dot = dotProduct(incident, normal)
  return subtractPoint(scalePoint(normal, 2 * dot), incident)
}

function calculatePolygonArea3D(vertices) {
  const numVertices = vertices.length;
  if (numVertices < 3) {
    // At least 3 vertices are required to form a polygon.
    return 0;
  }

  // Initialize the total area vector.
  let totalAreaVector = { x: 0, y: 0, z: 0 };

  for (let i = 0; i < numVertices; i++) {
    const currentVertex = vertices[i];
    const nextVertex = vertices[(i + 1) % numVertices]; // Wrap around to the first vertex.

    // Calculate the edge vectors.
    const edgeVector = {
      x: nextVertex.x - currentVertex.x,
      y: nextVertex.y - currentVertex.y,
      z: nextVertex.z - currentVertex.z,
    };

    // Calculate the cross product and add it to the total area vector.
    totalAreaVector.x += edgeVector.y * currentVertex.z - edgeVector.z * currentVertex.y;
    totalAreaVector.y += edgeVector.z * currentVertex.x - edgeVector.x * currentVertex.z;
    totalAreaVector.z += edgeVector.x * currentVertex.y - edgeVector.y * currentVertex.x;
  }

  // Calculate the magnitude of the total area vector to get the area.
  const area = 0.5 * Math.sqrt(
    totalAreaVector.x * totalAreaVector.x +
    totalAreaVector.y * totalAreaVector.y +
    totalAreaVector.z * totalAreaVector.z
  );

  return area;
}

function getRandomPointInPolygon3D(vertices) {
  const numVertices = vertices.length

  if (numVertices < 3) {
    // At least 3 vertices are required to form a polygon.
    return null
  }

  // Calculate the total area of the polygon.
  const totalArea = calculatePolygonArea3D(vertices)

  if (totalArea === 0) {
    // The polygon has zero area, so there's no valid point to pick.
    return null
  }

  // Generate random values for u and v.
  const u = random() // Random value between 0 and 1.
  const v = random() // Random value between 0 and 1.

  // Select three random vertices.
  const randomVertices = getRandomElements(vertices,3)

  // Calculate the random point inside the polygon.
  const sqrtU = Math.sqrt(u)
  const oneMinusV = 1 - v
  const sqrtUV = sqrtU * v
  const point = {
    x: (1 - sqrtU) * randomVertices[0].x + sqrtU * oneMinusV * randomVertices[1].x + sqrtU * sqrtUV * randomVertices[2].x,
    y: (1 - sqrtU) * randomVertices[0].y + sqrtU * oneMinusV * randomVertices[1].y + sqrtU * sqrtUV * randomVertices[2].y,
    z: (1 - sqrtU) * randomVertices[0].z + sqrtU * oneMinusV * randomVertices[1].z + sqrtU * sqrtUV * randomVertices[2].z,
  }

  return point
}

function getRandomPointsOnMeshSurface(m,n){
  // weight faces by area, pick face by weighted choice, then pt inside face
  let w = [],ai=[]
  m.faces.forEach(function(face,i){
    let poly = getPolyForFaceInMesh(face,m)
    let a = calculatePolygonArea3D(poly)
    w.push(a)
    ai.push(i)
  })
  let pts = []
  for(let i=0;i<n;i++){
    // choose a face, (this could be faster)
    let k = choose(ai,w)
    let poly = getPolyForFaceInMesh(m.faces[k],m)
    let pt = getRandomPointInPolygon3D(poly)
    pts.push(pt)
  }
  return pts
}

function getPolyLongestSide(poly){
  let iMax = 0
  let dMax = distance(poly[0],poly[1])
  for(let i=1; i < poly.length; i++){
    let d = distance(poly[i],poly[(i+1)%poly.length])
    if(d>dMax){
      iMax=i
      dMax = d
    }
  }
  return {i:iMax,d:dMax,i2:(iMax+1)%poly.length}
}

function splitFaceInMeshIfTooBig(m,iFace,dMax){
  let face = m.faces[iFace]
  let poly = getPolyForFaceInMesh(face,m)
  let o = getPolyLongestSide(poly)
  if(o.dMax < dMax)
    return
  m.vertices.push(lerp(.5,poly[o.iMax],poly[o.i2]))
  let iNew = m.vertices.length-1
  for(let i=0;i<face.length;i++){
    let facen = [face[i],face[(i+1)%face.length],{i:iMid}]
    let faceni = i == 0 ? iFace : m.faces.length
    m.faces[faceni] = facen
    splitFaceInMeshIfTooBig(m,faceni,dMax) // recursive
  }
}

function splitFaceInMesh(m,iFace,n1,n2,bRemove=true){
  // n1 and n2 are number of segments in the two directions
  // changes m directly, triangular faces get split to quads (which may have overlapping vertices)
  let v,pt1,pt2,pt,v1,v2,v1b,v2b
  let face = m.faces[iFace]
  if(face.length == 3){
    face[3] = face[2]
  }
  let grid = []
  // create any necessary new vertices
  for(let i1=0;i1<=n1;i1++){
    grid[i1] = []
    for(let i2=0;i2<=n2;i2++){
      if(i1==0 && i2==0)
        grid[i1][i2] = face[0]
      else if(i1==n1 && i2==0)
        grid[i1][i2] = face[1]
      else if(i1==n1 && i2==n2)
        grid[i1][i2] = face[2]
      else if(i1==0 && i2==n2)
        grid[i1][i2] = face[3]
      else{
        // in between
        v1 = vectorFrom(m.vertices[face[0].i],m.vertices[face[1].i],i1/n1)
        v1b = vectorFrom(m.vertices[face[3].i],m.vertices[face[2].i],i1/n1)
        v1 = lerp(i2/n2,v1,v1b)
        v2 = vectorFrom(m.vertices[face[0].i],m.vertices[face[3].i],i2/n2)
        v2b = vectorFrom(m.vertices[face[1].i],m.vertices[face[2].i],i2/n2)
        v2 = lerp(i1/n1,v2,v2b)
        pt = addPoint(lerp(i2/n2,m.vertices[face[0].i],m.vertices[face[3].i]),v1)
        m.vertices.push(pt)
        grid[i1][i2] = {i:m.vertices.length-1}
      }
    }
  }
  // remove existing face
  if(bRemove)
    m.faces.splice(iFace,1)
  // add new faces
  for(let i1=0;i1<n1;i1++){
    for(let i2=0;i2<n2;i2++){
      let facen = [grid[i1][i2],grid[i1+1][i2],grid[i1+1][i2+1],grid[i1][i2+1]]
      m.faces.push(facen)
    }
  }
}

function splitLargeFacesInMesh2(m,dMax,bInPlace=false){
  if(!bInPlace){
    m = cloneMesh(m)
  }

  let nFacesToProcess = m.faces.length
  for(let i=0;i<nFacesToProcess;i++){
    splitFaceInMeshIfTooBig(m,i,dMax)
  }
  return m
}

function splitMeshFaceIntoTriangles(m,iFace){
  let face = m.faces[iFace]
  if(face.length == 3)
    return false
  let poly = getPolyForFaceInMesh(face,m)
  let o = processPoints(poly)
  m.vertices.push(o.ptc)
  let iv = m.vertices.length-1
  let facesn=[]
  for(let j=0;j<face.length;j++){
    let facen = [face[j],face[(j+1)%face.length],{i:iv}]
    facesn.push(facen)
  }
  m.faces.splice(iFace,1)
  m.faces = m.faces.concat(facesn)
  return true
}

function splitMeshFacesIntoTriangles(m,bInPlace=false){
  if(!bInPlace){
    m = cloneMesh(m)
  }
  for(let i=0;i<m.faces.length;i++){
    let bSplit = splitMeshFaceIntoTriangles(m,i)
    // removed
    if(bSplit){
      i--
    }
  }
  return m
}

function splitLargeFacesInMesh(m,dMax,bInPlace=false){
  if(!bInPlace){
    m = cloneMesh(m)
  }
  m = splitMeshFacesIntoTriangles(m,true)
  let nFacesToProcess = m.faces.length
  let aFacesToRemove = []
  for(let i=0;i<nFacesToProcess;i++){
    let face = m.faces[i]
    let poly = getPolyForFaceInMesh(face,m)
    // works for quads and tris for now
    let n1 = Math.ceil(distance(poly[0],poly[1])/dMax)
    let n2 = Math.ceil(distance(poly[1],poly[2])/dMax)
    if(n1*n2 == 1){
      // will keep original face
      continue
    }
    // changes m.faces and m.vertices, faces always go up, we only process the existing ones
    splitFaceInMesh(m,i,n1,n2,false)
    aFacesToRemove.push(i)
  }
  m.faces = m.faces.filter((val,index) => !aFacesToRemove.includes(index))
  return m
}

function getPolyForFaceInMesh(face,m){
  let poly = []
  if(typeof face == 'number')
    face = m.faces[face]
  for(let i=0;i<face.length;i++){
    poly.push(clonePoint(m.vertices[face[i].i]))
  }
  return poly
}

function fastAddPolyToMesh(m,poly,bUpdateptc=true){
  let face=[]
  let n=m.vertices.length
  for(let i=0;i<poly.length;i++){
    m.vertices.push(clonePoint(poly[i]))
    face.push({i:n+i})
  }
  m.faces.push(face)
  if(bUpdateptc)
    m.ptc = {
      x: averagePropertyValue(m.vertices,'x'),
      y: averagePropertyValue(m.vertices,'y'),
      z: averagePropertyValue(m.vertices,'z')
    }
  return m
}

function mergeMeshes(m1,m2,fn,bPlaceInM1=false){
  // does not merge identical vertices
  if(!bPlaceInM1)
    m1 = cloneMesh(m1)
  if(fn!=null)
    m1.faces.forEach(face => fn(face,1))
  let avNew = []
  m2.faces.forEach(function(face){
    let facen = []
    for(let i=0;i<face.length;i++){
      i2 = avNew[face[i].i]
      if(i2 == null){
        m1.vertices.push(clonePoint(m2.vertices[face[i].i]))
        avNew[face[i].i] = m1.vertices.length-1
        i2 = avNew[face[i].i]
      }
      facen.push({i:i2})
    }
    if(fn!=null)
      fn(facen,2)
    m1.faces.push(facen)
  })
  m1.ptc = {
    x: averagePropertyValue(m1.vertices,'x'),
    y: averagePropertyValue(m1.vertices,'y'),
    z: averagePropertyValue(m1.vertices,'z')
  }
  return m1
}

function cloneMesh(m){
  let m2 = Object.assign({},m)
  m2.ptc = clonePoint(m.ptc)
  m2.vertices = clonePoints(m.vertices)
  m2.faces = m.faces.map(face => face.slice())
  return m2
}

function makeMeshFromPolygon(poly){
  // make a single faced mesh
  let vertices = []
  let faces = []
  let face=[]
  for(let i=0;i<poly.length;i++){
    vertices.push(clonePoint(poly[i]))
    face.push({i:i})
  }
  faces.push(face)
  let ptc = {
    x: averagePropertyValue(vertices,'x'),
    y: averagePropertyValue(vertices,'y'),
    z: averagePropertyValue(vertices,'z')
  }
  return {type:'mesh',vertices:vertices,faces:faces,ptc:ptc}
}

function makePyramidMesh(poly,d,bSkipBase){
  // poly is polygon base
  // d is either a distance, then point is from centroid along normal for d, or a point
  // d can also be a second poly with same number of points, they can connected up in order
  // returns a set of faces, pts inside faces are independent

  let pts=[],aFaces = []
  if(Array.isArray(d)){
    let poly2 = d
    let base1 = []
    let base2 = []
    for(let i=0; i < poly.length; i++){
      let j = (i + 1) % poly.length
      pts.push(clonePoint(poly[i]))
      pts.push(clonePoint(poly2[i]))
      let face =  [{i:2*i},{i:2*i+1},j == 0 ? {i:1} : {i:2*i+3},j == 0 ? {i:0} : {i:2*i+2}]
      base1.push({i:2*i,base:true})
      base2.push({i:2*i+1,base:true})
      aFaces.push(face)
    }
    if(!bSkipBase){
      aFaces.push(base1)
      aFaces.push(base2)
    }
  }
  else if(d==null){
    // single face only
    pts = clonePoints(poly)
    let face = pts.map(function(pt,i){return {i:i}})
    aFaces.push(face)
  }
  else{
    let ptTop
    if(d.x != null)
      ptTop = clonePoint(d)
    else{
      let normal = calculatePolygonNormal(poly.slice(0).reverse())
      let o = processPoints(poly)
      ptTop = addPoint(o.ptc,normal,d)
    }
    pts.push(ptTop)

    let faceBase = []
    for(let i=0; i < poly.length; i++){
      let j = (i + 1) % poly.length
      pts.push(clonePoint(poly[i]))
      let face = [{i:i+1},j == 0 ? {i:1} : {i:i+2} ,{i:0}]
      faceBase.push({i:i+1,base:true})
      aFaces.push(face)
    }
    if(!bSkipBase)
      aFaces.push(faceBase)
  }
  let ptc = {
    x: averagePropertyValue(pts,'x'),
    y: averagePropertyValue(pts,'y'),
    z: averagePropertyValue(pts,'z')
  }
  return {type:'mesh',vertices:pts,faces:aFaces,ptc:ptc}
}

function assignProperties(oFrom,oTo,aProps){
  aProps.forEach(function(p){oTo[p] = oFrom[p]})
}

function setPolyAverageCoordinates(poly,a2){
  poly.x = averagePropertyValue(poly,'x')
  poly.y = averagePropertyValue(poly,'y')
  poly.z = averagePropertyValue(poly,'z')
  if(a2!=null){
    a2.forEach(function(p){
      if(poly[0][p]!=null)
        poly[p] = averagePropertyValue(poly,p)
    })
  }
}

function meshToPolys(mesh,bIndependentPoints=true,aPropertiesToPreserve){
  let aPolys = []
  mesh.faces.forEach(function(face,iFace){
    let poly = []
    for(let i=0;i<face.length;i++){
      // poly.push(bIndependentPoints ? clonePoint(mesh.vertices[face[i].i]) : mesh.vertices[face[i].i])
      poly.push(bIndependentPoints ? JSON.parse(JSON.stringify(mesh.vertices[face[i].i])) : mesh.vertices[face[i].i])
    }
    poly.iFace = iFace
    setPolyAverageCoordinates(poly,aPropertiesToPreserve)
    if(aPropertiesToPreserve != null)
      aPropertiesToPreserve.forEach(function(p){
        if(face[p] != null)
          poly[p]=face[p]
      })
    aPolys.push(poly)
  })
  return aPolys
}

function colorFaces(vertices, faces) {
  // Create an adjacency matrix to represent face adjacency.
  const adjacencyMatrix = createAdjacencyMatrix(vertices, faces);

  // Initialize an array to store the assigned colors for each face.
  const faceColors = new Array(faces.length).fill(-1);

  // Function to check if a color is valid for a face.
  function isColorValid(faceIndex, color) {
    for (let i = 0; i < faces.length; i++) {
      if (adjacencyMatrix[faceIndex][i] && faceColors[i] === color) {
        return false;
      }
    }
    return true;
  }

  // Function to recursively color faces using backtracking.
  function colorWithBacktracking(faceIndex) {
    if (faceIndex === faces.length) {
      return true; // All faces have been colored.
    }

    for (let color = 0; color < faces.length; color++) {
      if (isColorValid(faceIndex, color)) {
        faceColors[faceIndex] = color;

        if (colorWithBacktracking(faceIndex + 1)) {
          return true; // If coloring succeeds, exit the loop.
        }

        faceColors[faceIndex] = -1; // Backtrack.
      }
    }

    return false; // If no valid color is found, return false.
  }

  // Start the coloring process.
  if (colorWithBacktracking(0)) {
    return faceColors;
  } else {
    return null; // Coloring failed.
  }
}

function createAdjacencyMatrix(vertices, faces) {
  const numFaces = faces.length;
  const adjacencyMatrix = Array.from({ length: numFaces }, () =>
    new Array(numFaces).fill(false)
  );

  // Iterate through all pairs of faces and check if they share an edge.
  for (let i = 0; i < numFaces; i++) {
    for (let j = i + 1; j < numFaces; j++) {
      if (shareEdge(vertices, faces[i], faces[j])) {
        adjacencyMatrix[i][j] = true;
        adjacencyMatrix[j][i] = true;
      }
    }
  }

  return adjacencyMatrix;
}

function shareEdge(vertices, face1, face2) {
  for(let i=0;i<face1.length;i++){
    let v1 = face1[i].i
    let v2 = face1[(i+1)%face1.length].i
    let j1 = face2.findIndex(e => e.i == v1)
    let j2 = face2.findIndex(e => e.i == v2)
    if(j1 == -1 || j2 == -1) continue
      // j1 and j2 must be beside each other
    if(Math.abs(j1-j2) == 1 || (j1 == 0 && j2 == face2.length-1) || (j2 == 0 && j1 == face2.length-1))
      return true
  }
  return false
}

function makePyramid(poly,d){
  // poly is polygon base
  // d is either a distance, then point is from centroid along normal for d, or a point
  // returns a set of faces, pts inside faces are independent
  let aPolys = []
  let ptTop
  if(d.x != null)
    ptTop = clonePoint(d)
  else{
    let normal = calculatePolygonNormal(poly.slice(0).reverse())
    let o = processPoints(poly)
    ptTop = addPoint(o.ptc,normal,d)
  }
  for(let i=0; i < poly.length; i++){
    let j = (i + 1) % poly.length
    let face = [clonePoint(poly[i]),clonePoint(poly[j]),ptTop]
    aPolys.push(face)
  }
  return aPolys
}

function calculatePolygonNormal(poly) {
    if (poly.length < 3) {
        throw new Error("A polygon must have at least three vertices.");
    }

    // Ensure the polygon is defined in counterclockwise order
    // to make sure the normal vector points outward.
    // You may need to adjust this based on your coordinate system.
    
    const AB = {
        x: poly[1].x - poly[0].x,
        y: poly[1].y - poly[0].y,
        z: poly[1].z - poly[0].z
    }

    const BC = {
        x: poly[2].x - poly[1].x,
        y: poly[2].y - poly[1].y,
        z: poly[2].z - poly[1].z
    }

    const crossProduct = {
        x: AB.y * BC.z - AB.z * BC.y,
        y: AB.z * BC.x - AB.x * BC.z,
        z: AB.x * BC.y - AB.y * BC.x
    }

    // Normalize the cross product to get the unit normal vector
    const length = Math.sqrt(
        crossProduct.x * crossProduct.x +
        crossProduct.y * crossProduct.y +
        crossProduct.z * crossProduct.z
    )
    if(length==0)
      return {x:0,y:0,z:0} // coplanar

    const normalVector = {
        x: crossProduct.x / length,
        y: crossProduct.y / length,
        z: crossProduct.z / length
    }

    return normalVector
}

function vectorFrom(pt1,pt2,bNormalize){
  // if bNormalize is numeric then scale based on it as a factor
	bNormalize = bNormalize == null ? false : bNormalize
  if(pt2 == null){
    pt2 = clonePoint(pt1)
    pt1 = {x:0,y:0,z:0}
  }
	let pt = pt1.z == null ? {x:pt2.x-pt1.x,y:pt2.y-pt1.y} : {x:pt2.x-pt1.x,y:pt2.y-pt1.y,z:pt2.z-pt1.z}
	if(bNormalize === 0){
    return pt1.z == null ? {x:0,y:0} : {x:0,y:0,z:0}
  }
  else if(bNormalize != false){
		let d = distance(pt1,pt2)
    if(typeof bNormalize == 'number')
      d = 1/bNormalize
		if(d != 0){
			pt.x /= d
      pt.y /= d
      if(pt.z != null)
			 pt.z /= d
		}
	}
	return pt
}

function pushLimitedSize(a,e,n){
  if(a==null)
    a=[]
  a.push(e)
  if(a.length > n){
    a = a.slice(a.length-n)
  }
  return a
}

function removeDuplicates(a){
  let b=[]
  for(let i=0;i<a.length;i++){
    if(!b.includes(a[i]))
      b.push(a[i])
  }
  return b
}

function countUniqueValues(v,oState,w){
  if(oState.oAll == null){
    oState.oAll = {}
    oState.cMax = 0
    oState.vMax = null
  }
  let o = oState.oAll[v]
  if(o==null){
    o = {key:v,c:0}
    oState.oAll[v] = o
  }
  o.c += w==null ? 1 : w
  if(o.c >= oState.cMax){
    oState.cMax = o.c
    oState.vMax = v
  }
  // always return the most common value
  return oState.vMax
}

function assignMappedValue(v,aOutputs,oState){
  // assign values from aOutputs to a given input value in order encountered, excess v values get last aOutput
  if(oState.Assigned == null){
    oState.Assigned = []
  }
  let i = oState.Assigned.indexOf(v)
  if(i != -1)
    return aOutputs[i]
  // not found yet
  if(oState.Assigned.length >= aOutputs.length)
    return aOutputs[aOutputs.length-1]
  oState.Assigned.push(v)
  return aOutputs[oState.Assigned.length-1]
}

function sortRandom(a,f=1){
  let b = a.slice()
  let j,i=b.length
  // Fisher-Yates shuffle
  while(--i > 0){
    j = Math.floor(random() * (i+1))
    if(f == 1 || random() < f)
      [b[j],b[i]] = [b[i],b[j]]
  }
  return b;
}

function equalArrays(a1,a2){
  if(a1 != a2 && (a1==null || a2==null)) return false
  if(a1.length != a2.length) return false
  for(let i=0;i<a1.length;i++){
    if(a1[i] != a2[i]) return false
  }
  return true
}

function getIndexesOrdering(a0,bMaxFirst=true){
  // return indexes of largest items first
  let a1 = a0.map(function(e,i){
    return {v:e,i:i}
  })
  a1 = a1.sort(function(a,b){
    if(a.v == b.v)
      return a.i-b.i
    return b.v-a.v
  })
  if(!bMaxFirst)
    a1 = a1.reverse()
  return a1.map(e => e.i)
}

function rotateArray(arr, count) {
  const len = arr.length
  arr.push(...arr.splice(0, (-count % len + len) % len))
  return arr
}

function getRandomElements(a,n,bKeepOrder=false){
  n =  Math.round(n)
  if(bKeepOrder){
    let ai = a.map((e,i)=>i)
    ai = getRandomElements(ai,n)
    return a.filter((e,i)=>ai.includes(i))
  }
  let b = sortRandom(a)
  return b.slice(0,n)
}

function randomArray(a0,a1,n){
  let a=[]
  for(let i=0;i<n;i++)
    a.push(random(a0,a1))
  return a
}

function splitRange(x1,x2,n,bInteger){
  let a = []
  for(let i=0;i<n;i++){
    let v = map(i,0,n-1,x1,x2)
    if(bInteger)
      v = Math.round(v)
    a.push(v)
  }
  return a
}

function sign(n){
  if(n == 0) return 0
  return n < 0 ? -1 : 1
}

function vary(v){
  // v a number, just returns it, an array then 
  if(!Array.isArray(v)) return v
  if(v[2] == 'n')
    return randomNormalRange(v[0],v[1])
  return random(v[0],v[1])
}

function nearQuantizedVal(f,nSegments,tol=.02, bIncludeFirstAndLast = false){
  // f in [0,1]
  f = constrain(f)
  let q = quantize(f,0,1,nSegments)
  if(!bIncludeFirstAndLast && (q == 0 || q == 1) )
    return false
  return Math.abs(f-q) < tol
}

function quantize(v,r0,r1,n,bWrap=false,bSimpleIndexReturn,pAlternate=0){
  // return 1 of n distinct values,  v in range [r0,r1]
  // when bWrap then first and last value of range mean the same thing
  // bSimpleIndexReturn true means just return one of [0,1,...,n-1]
  v = constrain(v,r0,r1)
  let f = constrain(Math.floor(invLerp(v,r0,r1)*n),0,n-1)
  if(pAlternate !=0 && random() < pAlternate){
    f = constrain(choose([f-1,f+1]),0,n-1)
  }
  if(bSimpleIndexReturn)
    return f
  let q = lerp(f/(n-1),r0,r1)
  if(bWrap)
    q = map(q,r0,r1,r0,r1 - (r1-r0)/n)
  return q
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
  if(a3 != null){
    // a3 is number of discrete values to take on
    let i = random(0,a3-1,'i')
    v = a0 + i/(a3-1)*(a1-a0)
  }
  if(a2 == 'i')
    v = Math.floor(v);
  if(a2 != null && !isNaN(a2))
    v = Number(v.toFixed(a2))
  return v;
}

function randomIntegerFromDecimal(v){
  // v = 1.25 will return 1 75% of time and 2 25% of time
  let min = Math.floor(v)
  let max = Math.ceil(v)
  if(min==max) return v
  if(random() < v-min) return max
  return min
}

function randomTail(aPeak,aTail,a2,spread=1){
  // use Normal distribution but reflect one side of curve, a2 is 'i' for integers
  let v
  if(aTail < aPeak){
    v = randomNormalRange(aTail,aPeak+(aPeak-aTail),a2,spread)
    if(v > aPeak)
      v = aPeak - (v-aPeak)
  }
  else{
    v = randomNormalRange(aPeak-(aTail-aPeak),aTail,a2,spread)
    if(v < aPeak)
      v = aPeak + (aPeak-v)
  }
  return v
}

function randomNormalRange(a0,a1,a2,spread=1){
  // 99.7 % is within 3sd so use that as a guide
  if(a0 > a1)
    [a0,a1] = [a1,a0]
  let mean = (a0+a1)/2
  let sd = (a1-mean)/3*spread
  let v = randomNormal(mean,sd)
  v = Math.min(a1,Math.max(v,a0))
  if(a2 == 'i')
    v = Math.round(v)
  return v
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
}

function setValue(test,aVals,aRet,other,op){
  if(op == '<='){
    for(let i=0;i<aVals.length;i++){
      if(test <= aVals[i]){
        return aRet == null ? i : Array.isArray(aRet) ? (i < aRet.length ? aRet[i] : aRet[0]) : aRet
      }
    }
    return other
  }
  let i = aVals.indexOf(test)
  if(i==-1)// || (Array.isArray(aRet) && i >= aRet.length) )
    return other
  return aRet == null ? i : Array.isArray(aRet) ? (i < aRet.length ? aRet[i] : aRet[0]) : aRet
}

function getArray2DSafe(a,i,j,k){
  i = constrain(Math.round(i),0,a.length-1)
  j = constrain(Math.round(j),0,a[i].length-1)
  if(k!=null){
    k = constrain(Math.round(k),0,a[i][j].length-1)
    return a[i][j][k]
  }
  return a[i][j]
}

function setFieldValue(a,i,j,v){
  i = constrain(Math.round(i),0,a.length-1)
  j = constrain(Math.round(j),0,a[0].length-1)
  a[i][j] = v
}

function getFieldValue(a,i,j,bInterpolate=true,k){
  if(!bInterpolate)
    return getArray2DSafe(a,i,j,k)
  let fi = i%1
  let fj = j%1
  let fk = k == null ? null : k%1
  if(fi==0 && fj==0 && (fk == null || fk == 0))
    return getArray2DSafe(a,i,j,k)
  if(k==null){
    // 2d case  
    let av = [[getArray2DSafe(a,Math.floor(i),Math.floor(j)),getArray2DSafe(a,Math.ceil(i),Math.floor(j))]
             ,[getArray2DSafe(a,Math.floor(i),Math.ceil(j)),getArray2DSafe(a,Math.ceil(i),Math.ceil(j))]]
    let vx0 = lerp(fj,av[0][0],av[1][0])
    let vx1 = lerp(fj,av[0][1],av[1][1])
    return lerp(fi,vx0,vx1)
  }
  // 3D case
  let c000 = getArray2DSafe(a, Math.floor(i), Math.floor(j), Math.floor(k))
  let c001 = getArray2DSafe(a, Math.floor(i), Math.floor(j), Math.ceil(k))
  let c010 = getArray2DSafe(a, Math.floor(i), Math.ceil(j), Math.floor(k))
  let c011 = getArray2DSafe(a, Math.floor(i), Math.ceil(j), Math.ceil(k))
  let c100 = getArray2DSafe(a, Math.ceil(i), Math.floor(j), Math.floor(k))
  let c101 = getArray2DSafe(a, Math.ceil(i), Math.floor(j), Math.ceil(k))
  let c110 = getArray2DSafe(a, Math.ceil(i), Math.ceil(j), Math.floor(k))
  let c111 = getArray2DSafe(a, Math.ceil(i), Math.ceil(j), Math.ceil(k))

  // Interpolate along the x-axis
  let c00 = lerp(fi, c000, c100)
  let c01 = lerp(fi, c001, c101)
  let c10 = lerp(fi, c010, c110)
  let c11 = lerp(fi, c011, c111)

  // Interpolate along the y-axis
  let c0 = lerp(fj, c00, c10)
  let c1 = lerp(fj, c01, c11)

  // Interpolate along the z-axis
  let c = lerp(fk, c0, c1)
  return c
}

function normalizeArray(a,sum=1,bAccumulate){
  let total = 0
  for(let i=0;i<a.length;i++)
    total += a[i]
  let b = []
  for(let i=0;i<a.length;i++)
    b[i] = sum*a[i]/total
  if(bAccumulate){
    for(let i=1;i<a.length;i++)
      b[i] = b[i-1] + b[i]
  }
  return b
}

function choose(aSets,aWeights,v0,n=1,bNoRepeats=false){
  if(aSets == null)
    aSets = [true,false]
  if(n != 1){
    if(bNoRepeats){
      if(n > aSets.length){
        console.log('WARNING: choose wants too many without repeats',n,aSets.length)
        bNoRepeats = false
      }
    }
    let b = []
    for(let i=0;i<n;i++){
      let s = choose(aSets,aWeights,v0)
      if(bNoRepeats && b.includes(s)){
        i-- 
        continue
      }
      b.push(s)
    }
    return b
  }
  if(aWeights == null && v0 == null)
    return aSets[random(0,aSets.length-1,'i')]
  aWeights = (aWeights && Array.isArray(aWeights)) ? aWeights : aSets.map(x => 1/aSets.length)
  const sum = aWeights.reduce((partial_sum, a) => partial_sum + a, 0)
  let v = v0 == null ? random()*sum : v0*sum
  let acc = 0
  for(let i=0; i < aSets.length; i++){
    if(v <= acc + aWeights[i]) return aSets[i]
    acc += aWeights[i]
  }
  return aSets[aSets.length-1]
}

function constrain(v,min,max,bWrap,s){
  min = min == null ? 0 : min
  max = max == null ? 1 : max
  if(s == 'i')
    v = Math.round(v)
  if(min > max)
    [min,max] = [max,min]
  if(bWrap){
    while(true){
      if(v > max)
        v = min + v - max
      if(v < min)
        v = max - (min - v)
      if(min <= v && v <= max)
        return v
    }
  }
  return Math.min(Math.max(v,min),max);
}

function constrainAngle(a){
  if(a > Math.PI*2)
    a = a - Math.PI*2
  if(a < 0)
    a = a + Math.PI*2
  return a
}

function constrainHue(a){
  if(a > 360)
    a = a - 360
  if(a < 0)
    a = a + 360
  return a
}

function cycle(t,v0=0,v1=1,nPeriods=1,fnEase,bWrap=false){
  if(t>1)
    t = t - Math.floor(t)
  if(bWrap){
    let t2 = t == 1 ? 1 : t*nPeriods % 1
    return lerp(t2,v0,v1)
  }
  // t = easeSlowMiddle(t)
  if(nPeriods == 0)
    return (v0+v1)/2
  let f = Math.sin(Math.PI*.5 + t*Math.PI*2*nPeriods)
  return map3(f,1,-1,1,v0,v1,v0,fnEase)
}

function lerpc(f,v0,v1,fnEase){
  return lerp(constrain(f,0,1),v0,v1,fnEase)
}

function lerp(f,v0,v1,fnEase,q){
  if(v0.x != null && v1.x != null){
    let o = {x:lerp(f,v0.x,v1.x,fnEase),y:lerp(f,v0.y,v1.y,fnEase)}
    if(v0.z != null)
      o.z = lerp(f,v0.z,v1.z,fnEase)
    return o
  }
  if(typeof fnEase == 'function')
    f = fnEase(f)
  let v = v0 + f*(v1-v0)
  if(q)
    v = quantize(v,v0,v1,q)
  return v
}

function lerpCos(f, pa, pb){
  pa = pa == null ? 0 : pa
  pb = pb == null ? 1 : pb
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

function getPathStraightLinesx(pts,res=.01,maxD=.1,maxAngleDelta=Math.PI*.1){
  // return a new path that approximates the initial but with points at important corners or after some max distance
  if(pts[0].sPerimeter == null)
    pts = augmentPoints(pts)
  let pStart = lerpPathDistance(0,pts)
  let fStart = 0
  let pts2 = [clonePoint(pStart)]
  let sPerimeter = pts[0].sPerimeterFull
  for(let i=1; i < pts.length; i++){
    let fc = pts[i].sPerimeter/sPerimeter
    let ptc = lerpPathDistance(fc,pts)
    let angleDelta = Math.abs(pStart.angle - ptc.angle)
    if(angleDelta > maxAngleDelta){
      fc -= .5*res
      ptc = lerpPathDistance(fc,pts)
      pStart = ptc
      pts2.push(pStart)
      fStart = fc
    }
    if(fc - fStart > maxD){
      fc = fStart+maxD
      ptc = lerpPathDistance(fc,pts)
      pStart = ptc
      pts2.push(pStart)
      fStart = fc
      continue
    }
  }
  pts2.push(clonePoint(pts[pts.length-1]))
  return pts2
}

function getPathStraightLines(pts,res=.01,maxD=.1,maxAngleDelta=Math.PI*.1){
  // return a new path that approximates the initial but with points at important corners or after some max distance
  if(pts.length == 2) return pts
  if(pts[0].sPerimeter == null)
    pts = augmentPoints(pts)
  let pStart = lerpPathDistance(0,pts)
  let fStart = 0
  let pts2 = [clonePoint(pStart)]
  for(let fc=res; fc <= 1; fc+=res){
    let ptc = lerpPathDistance(fc,pts)
    let angleDelta = Math.abs(pStart.angle - ptc.angle)
    if(angleDelta > maxAngleDelta){
      fc -= .5*res
      ptc = lerpPathDistance(fc,pts)
      pStart = ptc
      pts2.push(pStart)
      fStart = fc
    }
    if(fc - fStart >= maxD){
      fc = fStart+maxD
      ptc = lerpPathDistance(fc,pts)
      pStart = ptc
      pts2.push(pStart)
      fStart = fc
      continue
    }
  }
  pts2.push(clonePoint(pts[pts.length-1]))
  return pts2
}

function getSubPath(pts,t1,t2,n=32){
  t1 = constrain(t1,0,1)
  t2 = constrain(t2,0,1)
  let nMin = Math.ceil(1/(t2-t1))
  if(pts.length < nMin)
    pts = addIntermediatePoints(pts,nMin)
  let pts2 = []
  for(let i=0;i<n;i++){
    let t = map(i,0,n-1,t1,t2)
    let p = lerpPathDistance(t,pts)
    pts2.push(p)
  }
  return pts2
}

function lerpPathDistance(f,a0){
  // a has points of form {x,y}
  if(f < 0) f=0
  if(f > 1) f=1
  let a
  if(a0[0].sPerimeter == null || a0[0].sPerimeterFull == null || a0[a0.length-1].sPerimeter == null)
    a = augmentPoints(a0)
  else
    a = a0
  let da = 0//Math.PI
  let dTotal = a[a.length-1].sPerimeter
  let dTarget = f*dTotal
  if(dTarget == 0){
    let p0 = clonePoint(a[0])
    p0.angle = a[1] == null ? 0 : Math.atan2(a[1].y-a[0].y, a[1].x-a[0].x) + da
    return p0
  }
  let i,i0=0,i1,pt
  for(i=1; f != 1 && i<a.length;i++){
    if(a[i].sPerimeter <= dTarget)
      i0=i
    if(a[i].sPerimeter > dTarget){
      i1 = i
      break
    }
  }
  if(f==1){
    pt = clonePoint(a[a.length-1])
    pt.angle = Math.atan2(a[a.length-1].y-a[a.length-2].y, a[a.length-1].x-a[a.length-2].x) + da
  }
  else{
    let iper = i0 == 0 ? 0 : a[i0].sPerimeter
    if(a[i1] == null)
      console.log('stop')
    let f2=(dTarget-iper)/(a[i1].sPerimeter-iper)
    pt = lerp(f2,a[i0],a[i1])
    pt.sPerimeter = lerp(f2,a[i0].sPerimeter,a[i1].sPerimeter)
    pt.angle = Math.atan2(a[i1].y-a[i0].y, a[i1].x-a[i0].x) + da
    // let a0 = i0 == 0 ? Math.atan2(a[1].y-a[0].y, a[1].x-a[0].x) + da : Math.atan2(a[i0].y-a[i0-1].y, a[i0].x-a[i0-1].x) + da
    // let a1 = Math.atan2(a[i1].y-a[i1-1].y, a[i1].x-a[i1-1].x) + da
    // pt.angle = lerp(f2,a0,a1)
  }
  return pt
}

function lerpPath(f,a){
  // a has points of form {x,y}
  if(f < 0) f=0
  if(f > 1) f=1
  if(f == 1) return clonePoint(a[a.length-1])
  let i0 = lerp(f,0,a.length-1)
  let fract = i0 - Math.floor(i0)
  i0 = Math.floor(i0)
  let o = {x:a[i0].x , y:a[i0].y}
  let dy = a[i0+1].y-a[i0].y
  let dx = a[i0+1].x-a[i0].x
  o.x += fract * dx
  o.y += fract * dy
  o.angle = Math.atan2(dy, dx) + Math.PI
  if(a[i0].z != null && a[i0+1].z != null){
    o.z  =  lerp(fract,a[i0].z,a[i0+1].z);
  }
  return o
}

function lerpPalette(t,a){
  // a has subarrays
  if(t < 0) t=0
  if(t > 1) t=1
  if(t == 1 || a.length==1) return a[a.length-1]
  let i0 = lerp(t,0,a.length-1)
  let fract = i0 - Math.floor(i0)
  i0 = Math.floor(i0)
  let b =mixColors(a[i0],a[i0+1],fract)
  return b
}

function lerpArray(f,a,t){
  // a can have subarrays
  if(f < 0) f=0
  if(f > 1) f=1
  if(f == 1) return a[a.length-1]
  let i0 = lerp(f,0,a.length-1)
  let fract = i0 - Math.floor(i0)
  i0 = Math.floor(i0)
  let b
  if(Array.isArray(a[i0])){
    b = a[i0].slice()
    for(let i=0;i<b.length;i++){
      let d = a[i0+1][i] - a[i0][i]
      b[i] += fract * d
      if(t == 'i')
        b[i] = Math.round(b[i])
    }
  }
  else
    b = lerp(fract,a[i0],a[i0+1])
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
  if(d == 0)
    return {x:-1,y:0}
  return {x:-dy/d,y:dx/d}
}

function invLerp(v,v0,v1){
  return v1==v0 ? 0 : (v-v0) / (v1-v0);
}

function inRectangle(pt,r){
  if(pt.xmin != null && pt.ymax != null){
    // we have a process object, check the corners
    let b = inRange(pt.xmin,r.x,r.x+r.width) && inRange(pt.xmax,r.x,r.x+r.width) &&
            inRange(pt.ymin,r.y,r.y+r.height) && inRange(pt.ymax,r.y,r.y+r.height)
    if(b && r.depth != null)
      b = b && inRange(pt.zmin,r.z,r.z+r.depth) && inRange(pt.zmax,r.z,r.z+r.depth)
    return b
  }
  if(!inRange(pt.x,r.x,r.x+r.width))
    return false
  if(!inRange(pt.y,r.y,r.y+r.height))
    return false
  if(pt.z != null && r.z != null && !inRange(pt.z,r.z,r.z+r.depth))
    return false
  return true
}

function inRange(v,r0,r1,bInclusive=true){
  if(r1 < r0)
    [r0,r1] = [r1,r0]
  if(bInclusive)
    return  r0 <= v && v <= r1
  return r0 < v && v < r1
}

function map(v,r0s,r0e,r1s,r1e,fnEase){
  r1s = r1s==null ? 0 : r1s
  r1e = r1e==null ? 1 : r1e
  let f = r0s == r0e ? 0.5 : invLerp(v,r0s,r0e)
  return lerp(f,r1s,r1e,fnEase)
}

function mapc(v,r0s,r0e,r1s,r1e,fnEase,bWrap){
  return constrain(map(v,r0s,r0e,r1s,r1e,fnEase,bWrap),r1s,r1e)
}

function softmap(v,target,range,softness,vTarget,vOutside){
  let d = Math.abs(v-target)
  if(d <= range)
    vr = vTarget
  else if (target - range*(1+softness) < v && v < target - range)
    vr = map(v,target - range*(1+softness),target-range,vOutside,vTarget)
  else if (target + range < v && v < target + range*(1+softness) )
    vr = map(v,target+range,target + range*(1+softness),vTarget,vOutside)
  else
    vr = vOutside
  return vr
}

function mapRanges(v,aS,aE,fnEase){
  let f
  v = constrain(v,aS[0],aS[aS.length-1])
  let n = aS.length
  for(let i=1;i<n;i++){
    if(v <= aS[i]){
      f = invLerp(v,aS[i-1],aS[i])
      return lerp(f,aE[i-1],aE[i],fnEase)
    }
  }
  // should not reach
  f = invLerp(v,aS[n-2],aS[n-1])
  return lerp(f,aE[n-2],aE[n-1],fnEase)
}

function map3(v,r0s,r0m,r0e,r1s,r1m,r1e,fnEase){
  let f
  if(inRange(v,r0s,r0m)){
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

function combineAngles(a1,a2,w1=1,w2=1){
  // w2 is weight of a2 compared to a1
  // do vector math
  let p = {x:0,y:0}
  let p2 = extendPoint(p,a1,w1)
  let p3 = extendPoint(p2,a2,w2)
  let a = getBearing(p,p3) + Math.PI/2
  return a
}

function getBearing(origin, destination) {
  let dx,dy
  if(destination == null && typeof origin == 'number'){
    // we have a simple slope
    dx = 1
    dy = origin
  }
  else{
    dy = destination.y - origin.y
    dx = destination.x - origin.x
  }
  return (Math.atan2(dy, dx) -
    Math.PI / 2) %
    (Math.PI * 2);
}

function normalizeAngle(a){
  // make in range [0,Math.PI*2]
  while(a < 0)
    a += Math.PI*2
  while(a > Math.PI*2)
    a -= Math.PI*2
  return a
}

function getNewAngle(origin, destination, oldAngle) {
  const bearing = getBearing(origin, destination);
  if (typeof oldAngle === "undefined") {
    // console.log(bearing);

    return bearing;
  }
  return oldAngle - angleDiff(oldAngle, bearing);
}

function hueDiff(h1,h2){
  // h in [0,360] but 0 is equiv to 360
  if(h2 < h1){
    let t=h1
    h1=h2
    h2=t
  }
  let d = Math.abs(h1-h2)
  let d2 = Math.abs((h1+360)-h2)
  return Math.min(d,d2)
}

function angleDiff(angleA, angleB) {
  const twoPi = Math.PI * 2
  const diff = ((angleA - (angleB > 0 ? angleB : angleB + twoPi) + Math.PI) % twoPi) - Math.PI
  return diff < -Math.PI ? diff + twoPi : diff
}

function ease(p,g) {
  if (p < 0.5) 
    return 0.5 * Math.pow(2*p, g);
  else
    return 1 - 0.5 * Math.pow(2*(1 - p), g);
}

function easeInQuad(x){
  return x * x
}

function easeInOutQuad(x) {
  return x < 0.5 ? 2 * x * x : 1 - Math.pow(-2 * x + 2, 2) / 2;
}

function easeInOutCubic(x) {
  return x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
}

function easeInOutQuart(t) {
    return t < 0.5 ? 8 * Math.pow(t, 4) : 1 - 8 * Math.pow(1 - t, 4);
}

function easeInOutSine(x,per=1) {
  return -(Math.cos(Math.PI * x) - 1) / 2
}

function easeInCubic(x) {
  return x*x*x
}

function easeInQuint(x) {
  return x*x*x*x*x
}

function easeOutCubic(x) {
  return 1 - Math.pow(1-x,3)
}

function easeOutQuad(x) {
  return 1 - Math.pow(1-x,2)
}

function easeOutElastic(x) {
  let c = (2 * Math.PI) / 3
  return x === 0
  ? 0
  : x === 1
  ? 1
  : Math.pow(2, -10 * x) * Math.sin((x * 10 - 0.75) * c) + 1
}

function easeInExpo(x) {
  return x == 0 ? 0 : Math.pow(2,10*x - 10)
}

function easeOutExpo(x) {
  return x === 1 ? 1 : 1 - Math.pow(2, -10 * x)
}

function easeSlowMiddle(x){
  if(x <= .5){
    let x2 = map(x,0,.5,0,1)
    let v = easeOutCubic(x2)*.5
    return v
  }
  let x2 = map(x,.5,1,0,1)
  let v = .5 + easeInCubic(x2)*.5
  return v
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

function easeInElastic(x) {
  let c4 = (2 * Math.PI) / 3

  return x === 0
    ? 0
    : x === 1
    ? 1
    : -Math.pow(2, 10 * x - 10) * Math.sin((x * 10 - 10.75) * c4)
}
