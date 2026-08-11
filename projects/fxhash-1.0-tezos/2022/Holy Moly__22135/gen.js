
var GEN = {}

function characterizeArray(a,msg,bLog=true,dec=1){
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

function processPoints(a,bCalcArea=false){
  let xs = 0, ys = 0, xmin = Infinity, xmax = -Infinity, ymin = Infinity, ymax = -Infinity;
  let xminy,xmaxy;
  let total=0
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

function getRandomPointsInPoly(pts,n=10,mode=0,bInteger,fRandScale=1){
  // 0 random, 1 grid, 2 hex grid, 3 hex grid with noise, 4 gaussian
  // will return ~ n pts
  let x,y,p;
  let ptsr = []
  let o = processPoints(pts)
  if(n < 1)
    n = Math.round(o.width*o.height*n)
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
  let ne = mode == 3 ? n*1.1 : n
  let cols = Math.ceil(Math.sqrt(ne*Math.sqrt(o.width/o.height)));
  let rows = Math.ceil(ne/cols);
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

function getRandomPointInRect(x,y,w,h,bInteger){
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

function getRandomPointInPoly(pts,o){
  if(o == null)
    o = processPoints(pts)
  let x,y,bOutside = true
  // this can loop forever if all pts are along a line
  // for now we just try 1000 times and if none found return first pt
  let n=0
  while(bOutside && n < 1000){
    x = random(o.xmin,o.xmax)
    y = random(o.ymin,o.ymax)
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

function assignPropertyToElements(a,p,v){
  for(let i=0;i<a.length;i++){
    a[i][p] = v
  }
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

function polySignedDistance(pts,pt){
  let bInPoly = isPointInPoly(pts,pt)
  let ptn = getPointNearestCoordinate(pts,pt)
  let d = distance(pt,ptn)
  if(bInPoly && d > 0)
    d = -d
  return d
}

function circleSignedDistance(o,pt){
  let d = distance(o.x,o.y,pt.x,pt.y)
  if(d > o.r)
    return d-o.r
  return d - o.r
}

function setZ(pt,z){
  if(pt.x != null){
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
};

function getPolyLineIntersection(poly,ptsLine){
  for(let i=0;i<poly.length;i++){
    let pt1 = poly[i]
    let j = i == poly.length-1 ? 0 : i+1
    let pt2 = poly[j]
    let b = lineIntersect(pt1.x,pt1.y,pt2.x,pt2.y,ptsLine[0].x,ptsLine[0].y,ptsLine[1].x,ptsLine[1].y)
    if(b != false) return b
  }
  return false
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

function lineIntersect(x1, y1, x2, y2, x3, y3, x4, y4) {

  if ((x1 == x2 && y1 == y2) || (x3 == x4 && y3 == y4))
    return false

  let den = (y4 - y3) * (x2 - x1) - (x4 - x3) * (y2 - y1)

  // parallel
  if (den === 0)
    return false

  let ua = ((x4 - x3) * (y1 - y3) - (y4 - y3) * (x1 - x3)) / den
  let ub = ((x2 - x1) * (y1 - y3) - (y2 - y1) * (x1 - x3)) / den

  // along the segments ?
  if (ua < 0 || ua > 1 || ub < 0 || ub > 1)
    return false

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

function translatePoints(pts,dx,dy,dz){
  let pts2 = []
  for(let i=0;i<pts.length;i++){
    pts2[i] = {x:pts[i].x+dx,y:pts[i].y+dy}
    if(dz != null)
      pts2[i].z = pts[i].z+dz
  }
  return pts2
}

function addNoiseToPoints_simple(pts,dx,dy){
  let pts2 = []
  for(let i=0;i<pts.length;i++){
    pts2[i] = {x:pts[i].x+random(-dx,dx),y:pts[i].y+random(-dy,dy)}
  }
  return pts2
}

function splitPoly(poly,res=.01,fDilate,bSimple=false){
  let t1 = random()
  t2 = constrain(t1 + random(.4,.6),0,1,true)
  if(t2 < t1)
    [t1,t2] = [t2,t1]
  let pts1 = []
  let pts2 = []
  let eps = res/2
  if(poly[poly.length-1].x  != poly[0].x || poly[poly.length-1].y != poly[0].y){
    poly = clonePoints(poly)
    poly.push(clonePoint(poly[0]))
  }
  let bLastInt2 = false
  for(let t=0;t<=1;t+=res){
    let pt = lerpPathDistance(t,poly)
    if(t <= t1 || t >= t2){
      pts1.push(pt)
      if(bLastInt2)
        pts2.push(clonePoint(pt))
      bLastInt2 = false
    }
    if(t1 <= t && t <= t2){
      pts2.push(pt)
      bLastInt2 = true
      if(pts2.length == 1)
        pts1.push(clonePoint(pt))
    }
  }
  let n = Math.round(1/res)
  if(!bSimple){
    pts1 = addIntermediatePoints(pts1,n,true)
    pts2 = addIntermediatePoints(pts2,n,true)
    pts1 = getCurvePoints(pts1, .5, true, 16)
    pts2 = getCurvePoints(pts2, .5, true, 16)
  }
  if(fDilate){
    pts1 = dilatePoints(pts1,fDilate)
    pts2 = dilatePoints(pts2,fDilate)
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

function addWiggles(pts,nPeriods,amp,n,t0 = 0){
  n = n == null ? pts.length : n

  let pts2 = []
  for(let i=0;i<n;i++){
    let t = i/(n-1)
    let pt = lerpPathDistance(t,pts)
    let d = amp * Math.cos((t+t0)*Math.PI*2*nPeriods)
    pt =  extendPoint(pt,pt.angle - Math.PI/2,d)
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

function getPointNearestCoordinate(pts,pt,bGetFarthest=false){
  // set either x or y of pt, you can leave the other null
  let iMin = -1
  let dMin = bGetFarthest ? -Infinity : Infinity
  let d
  for(let i=0;i<pts.length;i++){
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
  return pts[iMin]
}

function addNoiseToPoints(pts,dx1,dy1,dx2,dy2,bCumulative,skewx,skewy,bKeepFixedEnds,bNoSelfIntersection){
  // dx1 is variation in x at beginning, dx2 is at end
  // skewx is in range [-.5,+.5]

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

function rotatePoints(pts,ptc,angle){
  let pts2 = []
  if(ptc == null){
    let o = processPoints(pts)
    ptc = {x:o.xm,y:o.ym}
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

function getTornadoPoints3D(xc,y0,y1,zc,r0,r1,n=96,revs=10){
  let a
  let pts = []
  for(let rev=0; rev < revs; rev++){
    for(let i=0;i<n;i++){
      let f = (rev*n+i)/(revs*n)
      let yc = lerp(f,y0,y1)
      let r = lerp(f,r0,r1)
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

function getRandomPointsInSphere(n,pto,r,bNearSurface=false){
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

function getEllipsePoints(xc,yc,r0x,r0y,rot,a1,a2,n){
  // does not include last point which overlays the first
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
    let d = distance({x:o.xa,y:o.ya},pts[i])
    let vecUnit = vectorFrom({x:o.xa,y:o.ya},pts[i],true)
    let rTarget = lerp(f,d,o.r0)
    pts2[i] = {x:o.xa + rTarget*vecUnit.x,y:o.ya + rTarget*vecUnit.y}
  }  
  return pts2
}

function dilatePoints(pts,f,bX,bY,bAbs,aVar,p='m'){
  // p is m or a, f < 0 -> make bigger, >0 make smaller
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
  if(poly.length < 4)
    poly = addIntermediatePoints(poly,19)
  let i,w,ph = Math.floor(poly.length/2)
  for(i=0; i < poly.length; i++){
    if(typeof w0 == 'function')
      w = w0(i/(poly.length-1),poly[i],poly,i)
    else{
      if(w2 == null)
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
    dc.lineWidth = Number(lwn.toFixed(2))
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

function makeRectPoly(x,y,w,h,bClose){
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
    return {x:nx, y:ny};
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

function setPolyPath(dc,pts){
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
  dc.closePath()
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
    x = Math.round(pts[i].x)
    y = Math.round(pts[i].y)
    if(i==pStart)
      dc.moveTo(x,y);
    else
      dc.lineTo(x,y);
  }
  if(bClose){
    dc.lineTo(pts[pStart].x,pts[pStart].y)
    // dc.closePath()
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

function drawCurveDots(dc,pts,r,n){
  n = n == null ? pts.length : n
  for(let i=0;i<n;i++){
    let pt = n != pts.length ? lerpPathDistance(i/(n-1),pts) : pts[i]
    drawDot(dc,pt.x,pt.y,r)
  }
}

function drawDot(dc,x,y,r,r2,rot,bStroke=false){
  r2 = r2 == null ? r : r2
  rot = rot == null ? 0 : rot
  // g.aDots.push(Math.max(r,r2))
  dc.beginPath()
  dc.ellipse(x,y,r,r2,rot,0,2*Math.PI)
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

function fillPoly(dc,pts,c,alpha,fvar,bCurvy=false,bReverse){
  let pts0 = pts
  if(fvar != null){
    pts0 = addIntermediatePoints(pts,pts.length*20)
    pts0 = deformEdgesNormal(pts0,1,fvar,true)
  }
  if(c)
    dc.fillStyle = rgbToString(c,alpha)
  if(bCurvy){
    setPolyPath(dc,pts0)
    dc.fill()
  }
  else
    drawCurve(dc,pts0,null,'f',true,null,bReverse)
}

function strokePoly(dc,pts,c,alpha,bClose=true,lw){
  // pts = simplifyPoints(pts)
  if(c)
    dc.strokeStyle = rgbToString(c,alpha)
  if(lw)
    dc.lineWidth = lw
  drawCurve(dc,pts,null,'s',bClose)
}

function dotsPoly(dc,pts,c,alpha=1,r=2){
  c = c == null ? [128,128,128] : c
  dc.fillStyle = rgbToString(c,alpha)
  for(let i=0;i<pts.length;i++)
    drawDot(dc,pts[i].x,pts[i].y,r)
}

function sortPoints(pts){
  pts = pts.sort(function(p1,p2){
    if(p1.y == p2.y)
      return p1.x-p2.x
    return p1.y-p2.y
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

function fillTexturePoly(dc,pts,type,c,nStrength,angle,alpha,angleVar,alphaFill,fSize=1,cvar,bClip=true){
  // if cvar defined then color varies from c to cvar rather than black/white
  nStrength = nStrength == null ? 1 : nStrength
  alpha = alpha == null ? 0.15 : alpha
  angle = angle == null ? 0 : angle
  angleVar = angleVar == null ? 0 : angleVar
  type = type == null ? 'lines' : type
  let bSegments = typeof type == 'function' ? false : type.indexOf('Segments') >= 0
  let o = processPoints(pts)
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
    else
      dc.strokeStyle = rgbToString(mixColors(c,cvar,random(.3,.7)),alpha)
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
    if(type == 'spots'){
      let e = random() < .5 ? random(1,2) : random(1/2,1)
      r = randomNormalRange(1,4)*fSize
      dc.fillStyle = dc.strokeStyle
      drawDot(dc,pt.x,pt.y,r,r*e,random()*Math.PI*2)
    }
    if(type == 'dots'){
      dc.fillStyle = dc.strokeStyle
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

function contextSetColor(dc,x0,y0,w,h,c){
  let dSrc = dc.getImageData(x0, y0, w, h)
  let data = dSrc.data

  for(let x=x0;x < x0+w;x++){
    for(let y=y0;y < y0+h;y++){
      let index = (x + y * w) * 4;
      dSrc.data[index  ] = c[0]
      dSrc.data[index+1] = c[1]
      dSrc.data[index+2] = c[2]
    }
  }
  dc.putImageData(dSrc,x0,y0)
}

function addGrain(dc,pts,strength,bNoise,sz=1,fNoise=1){
  let w = dc.canvas.width
  let h = dc.canvas.height
  let dSrc = dc.getImageData(0, 0, w, h)
  let data = dSrc.data

  let field = bNoise ? makeFlowField(w,h,null,80*fNoise,true) : null
  let grid = []
  if(sz !=  1){
    for(let x=0;x < w/sz+1; x++){
      grid[x]=[]
      for(let y=0;y<h/sz + 1; y++)
        grid[x][y] = randomNormalRange(-strength,strength,'i')
    }
  }
  let o = processPoints(pts)
  o.xmin = Math.round(o.xmin)
  o.xmax = Math.round(o.xmax)
  o.ymin = Math.round(o.ymin)
  o.ymax = Math.round(o.ymax)
  let s=0
  for(let x=o.xmin;x<dSrc.width && x < o.xmax;x++){
    for(let y=o.ymin;y<dSrc.height && y < o.ymax;y++){
      if(!isPointInPoly(pts,{x:x,y:y})) continue
      let index = (x + y * dSrc.width) * 4;
      if(sz != 1)
        s = grid[Math.floor(x/sz)][Math.floor(y/sz)]
      else
        s = randomNormalRange(-strength,strength,'i')
      if(bNoise){
        // let f = 1
        // f = map(f,0,1,.2*f+.8*field[x][y],.85*f+.25*field[x][y])
        s *= Math.min(1,.2+.8*field[x][y])
      }
      dSrc.data[index  ] += s
      dSrc.data[index+1] += s
      dSrc.data[index+2] += s
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

function hsvToRgb(h,s,v,bComplement=false){
  // h in [0,360], s and v in [0,1]
  s = constrain(s,0,1)
  v = constrain(v,0,1)
  let clr0 = bComplement ? tinycolor({h:h,s:s,v:v}).complement() : tinycolor({h:h,s:s,v:v})
  clr0 = clr0.toRgb()
  return [clr0.r,clr0.g,clr0.b]
}

function rgbToHsv(r,g,b){
  // rgb in [0,255] , h in [0,360], s and v in [0,1]
  if(Array.isArray(r))
    [r,g,b] = r
  let clr0 = tinycolor({r:r,g:g,b:b})
  clr0 = clr0.toHsv()
  return {h:clr0.h,s:clr0.s,v:clr0.v}
}

function colorVaryBrightness(c,f=.1){
  f = constrain(f,0,1)
  let hsv = rgbToHsv(c)
  let v2 = constrain(hsv.v+random(-f,f),0,1)
  c = hsvToRgb(hsv.h, hsv.s, v2)
  return c
}

function colorAverage(ac){
  let c = [0,0,0]
  let n = ac.length
  for(let i=0;i<n;i++){
    c[0] += ac[i][0]
    c[1] += ac[i][1]
    c[2] += ac[i][2]
  }
  c[0] = constrain(Math.round(c[0]/n),0,255)
  c[1] = constrain(Math.round(c[1]/n),0,255)
  c[2] = constrain(Math.round(c[2]/n),0,255)
  return c
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
    colors.push(tinycolor({h:h2,s:s,v:v}))
    colors.push(tinycolor({h:h3,s:s,v:v}))
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
  if(angle != null){
    dc.save()
    dc.translate(x,y)
    dc.rotate(angle)
    // dc.scale(sc2,sc2);
    dc.drawImage(img,-w/2,-h/2,w,h)
    dc.restore()
  }
  else{
    dc.drawImage(img,x,y,w,h)
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

function pickClosestColor(aPal,c){
  let minD = 100000;
  let ic = -1;
  for(let i=0;i<aPal.length;i++){
    let d = Math.sqrt(Math.pow(aPal[i][0]-c[0],2)+Math.pow(aPal[i][1]-c[1],2)+Math.pow(aPal[i][2]-c[2],2))
    if(d<minD){
      ic=i
      minD=d
    }
  }
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

function mixColors(color0, color1, value, color2) {
  if(color2 != null){
    if(value <= .5)
      return mixColors(color0,color1,map(value,0,.5,0,1))
    else
      return mixColors(color1,color2,map(value,.5,1,0,1))
  }
  // by square of rgb values
  value = constrain(value,0,1)
  var s = 1 - value;
  let a = [Math.floor(Math.sqrt(s * color0[0]*color0[0] + value * color1[0]*color1[0])),
          Math.floor(Math.sqrt(s * color0[1]*color0[1] + value * color1[1]*color1[1])),
          Math.floor(Math.sqrt(s * color0[2]*color0[2] + value * color1[2]*color1[2]))];
  if(color0[3] != null || color1[3]!= null){
    let v1 = color0[3] != null ? color0[3] : 1
    let v2 = color1[3] != null ? color1[3] : 1
    a[3] = Math.floor(Math.sqrt(s * v1*v1 + value * v2*v2))
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

function getPalette(palStart,palTrans,bUseExclusions=true){
  // palStart in [0,aPal.length-1], palTrans in [0,6]
  let aPal = [
    [[0, 93, 194],[111, 117, 208],[192, 170, 219],[250,250,250],[64,64,64]], // blue mauve
    // [[0,245,118],[255, 53, 53],[252, 231, 3],[20, 56, 148]], // red blue yellow
    [[0,128,255],[252, 3, 48],[252, 231, 3],[3, 198, 252],[30,30,30]], // red blue yellow
    [[245, 86, 0],[243, 244, 0],[244, 0, 0],[182, 1, 0],[20,20,20]], // fire
    [[17, 92, 2],[99, 53, 7],[250, 250, 2],[7, 168, 106],[128,128,128]], // brown green yellow
    [[215, 198, 138],[245, 215, 84],[20, 64, 87],[5, 35, 37],[1, 3, 0]], // blue green yellow
    [[184, 11, 40],[5, 181, 250],[4, 50, 217],[95, 103, 135],[1, 3, 0]], // red blue grey
    [[252, 3, 94],[150, 3, 57],[240, 129, 170],[95, 103, 135],[1, 3, 0]], // crimson pink grey
    [[0, 145, 255],[0, 72, 128],[136, 163, 184],[211, 230, 245],[1, 16, 28]], // blues
    [[255,1,1],[166, 0, 0],[62, 1, 1],[212, 152, 152],[41, 25, 24]], // reds
    [[240, 235, 227],[228, 220, 207],[126, 157, 156],[88, 112, 115],[29, 37, 38]] // 
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

function rgbToGrayLevel(c,b255=true){
  let v = constrain(Math.round(c[0]*.3+c[1]*.59+c[2]*.11),0,255)
  if(!b255)
    v = Number( (v/255).toFixed(3))
  return v
}

function rgbAdjustBrightness(c,f){
  let c2 = [
    Math.round(constrain(c[0]*f,0,255)),
    Math.round(constrain(c[1]*f,0,255)),
    Math.round(constrain(c[2]*f,0,255))
  ]
}

function  rgbComplement(c){
  return [255-c[0],255-c[1],255-c[2]]
}

function  rgbDesaturate(c,f=.5){
  let cg = rgbToGrayLevel(c)
  return mixColors(c,[cg,cg,cg],f)
}

function  rgbBrightest(c){
  let m = Math.max(c[0],c[1],c[2],1)
  let f = 255/m
  let fn=function(v){
    return constrain(Math.round(v),0,255)
  }
  return [fn(f*c[0]),fn(f*c[1]),fn(f*c[2])]
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

function makeRadialGradientCanvas(s,clr1,clr2,bNoise,noiseStrength=30){
  var dBack = new ImageData(s,s);
  var data = dBack.data;
  let distMax = s/2;
  let m = Math.round(s/2)
  let field = bNoise ? makeFlowField(s,s,null,noiseStrength,true) : null
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

function addNoiseToColor(c,n,bGreenLimit){
  let cn = c.slice()
  cn[0] = constrain(c[0] + random(-n,n,'i'),0,255)
  cn[2] = constrain(c[2] + random(-n,n,'i'),0,255)
  if(bGreenLimit){
    let d = Math.max(Math.abs(cn[0]-c[0]),Math.abs(cn[2]-c[2]))
    let dg = cn[0]-c[0] + cn[2]-c[2] > 0 ? d*random(.25,.5) : -d*random(1,1.5)
    cn[1] = constrain(c[1] + Math.round(dg),0,255)
  }
  else
    cn[1] = constrain(c[1] + random(-n,n,'i'),0,255)
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

function makeFlowField(nCols,nRows,seed,w,bZeroToOne,bWrap=false,flatten=1,nLevels){
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
    let c2 = Math.floor(nCols/2)
    let r2 = Math.floor(nRows/2)
    for(let c=0;c<nCols;c++){
      for(let r=0;r<nRows;r++){
        let cn = c < c2 ? c : nCols - c 
        let rn = r < r2 ? r : nRows - r
        grid[c][r] = grid[cn][rn]
      }
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
function randSeed(s){
  // console.log('randSeed',s)
  GEN.lastNormal = null // for normal random generator
  GEN.n = 0
  seed = xmur3(s)
  rand = mysfc32(seed(), seed(), seed(), seed());
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

function addPoint(p1,p2){
  let p = clonePoint(p1)
  p.x += p2.x
  p.y += p2.y
  if(p1.z != null)
    p.z += p2.z
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

function vectorFrom(pt1,pt2,bNormalize){
  bNormalize = bNormalize == null ? false : bNormalize
  if(pt2 == null){
    pt2 = clonePoint(pt1)
    pt1 = {x:0,y:0,z:0}
  }
  let pt = pt1.z == null ? {x:pt2.x-pt1.x,y:pt2.y-pt1.y} : {x:pt2.x-pt1.x,y:pt2.y-pt1.y,z:pt2.z-pt1.z}
  if(bNormalize){
    let d = distance(pt1,pt2)
    if(d != 0){
      pt.x /= d
      pt.y /= d
      if(pt.z != null)
       pt.z /= d
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

function randomTail(aPeak,aTail,a2,spread=1){
  // use Normal distribution but reflect one side of curve
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
};

function choose(aSets,aWeights,v0){
  aWeights = (aWeights && Array.isArray(aWeights)) ? aWeights : aSets.map(x => 1)
  const sum = aWeights.reduce((partial_sum, a) => partial_sum + a, 0)
  let v = v0 == null ? random()*sum : v0
  let acc = 0
  for(let i=0; i < aSets.length; i++){
    if(v <= acc + aWeights[i]) return aSets[i]
    acc += aWeights[i]
  }
  return aSets[aSets.length-1]
}

function constrain(v,min,max,bWrap){
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

function cycle(t,v0,v1,nPeriods=1,fnEase){
  if(t>1)
    t = t - Math.floor(t)
  // t = easeSlowMiddle(t)
  let f = Math.sin(Math.PI*.5 + t*Math.PI*2*nPeriods)
  return map3(f,1,-1,1,v0,v1,v0,fnEase)
}

function lerp(f,v0,v1,fnEase){
  if(v0.x != null && v1.x != null){
    let o = {x:lerp(f,v0.x,v1.x,fnEase),y:lerp(f,v0.y,v1.y,fnEase)}
    if(v0.z != null)
      o.z = lerp(f,v0.z,v1.z,fnEase)
    return o
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
  let a
  if(a0[0].sPerimeter == null)
    a = augmentPoints(a0)
  else
    a = a0
  let dTotal = a[a.length-1].sPerimeter
  let dTarget = f*dTotal
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
    pt.angle = Math.atan2(a[a.length-1].y-a[a.length-2].y, a[a.length-1].x-a[a.length-2].x) + Math.PI
  }
  else{
    let f2=(dTarget-a[i0].sPerimeter)/(a[i1].sPerimeter-a[i0].sPerimeter)
    pt = lerp(f2,a[i0],a[i1])
    pt.angle = Math.atan2(a[i1].y-a[i0].y, a[i1].x-a[i0].x) + Math.PI
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
  return v1==v0 ? 0 : (v-v0) / (v1-v0);
}

function map(v,r0s,r0e,r1s,r1e,fnEase){
  let f = r0s == r0e ? 0.5 : invLerp(v,r0s,r0e)
  return lerp(f,r1s,r1e,fnEase)
}

function mapc(v,r0s,r0e,r1s,r1e,fnEase){
  return constrain(map(v,r0s,r0e,r1s,r1e,fnEase),r1s,r1e)
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

function easeInQuad(x){
  return x * x
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

function easeOutCubic(x) {
  return 1 - Math.pow(1-x,3)
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

