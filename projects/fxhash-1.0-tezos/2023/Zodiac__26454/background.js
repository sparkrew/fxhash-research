function drawStars() {  
  noStroke();
  let count = random(40, 80);
  for(let i = 0; i < count; i++) {
    //set star fill to warm or cool
    let fillMod = 0; if(random() < 0.5) { fillMod = 180; }
    let d = w(random(0.007, 0.017)); //.003-.005
    fill(random(60)+fillMod, randomGaussian(5, 5), strokeColor, random(0.1, 0.35));
    //fill(100, 100, 100);
    let x = random(width);
    let y = random(height);
    let nostar = dist(w(0.91), 0, w(0.5), 0);
    if(dist(x, y, w(0.5), h(0.5)) > nostar) {
      for(let s = d; s > 0; s-=2) {
        //console.log(d + " " + s);
        ellipse(x, y, s, s);
      }
    }
  }
}

function drawBackground() {
  noStroke();
  let count = 4000; //10000
  //make nebula clouds
  //possible to get no clouds, based on noise...
  for(let i = 0; i < count; i++) {
    let x = randomGaussian(0.5, 0.3);
    let y = randomGaussian(0.5, 0.3); // same as x
    let value = theta(x, y);
    push();
      translate(w(x), h(y));
      render(value);
    pop();
  }
}

function theta(x, y) {
  let res = 1; // lower is more chaotic, higher is more even
  let n = noise(x/res, y/res);
  let a = map(n, 0.0, 1.0, -0.35, 0.9);  //-0.5
  return a;
}

function render(value) { 
  rotate(value);
  fill(hueCircle(hues[huei]+value*80-random(20)), 100-value*50, 100, 0.01+value/30);
  if( value > 0.0) {  //this is what kills the nebula occasiaonally
    drawPoly(waterPolyEdge(makeCircle(0, 0, 6, w(value/10)))); //make elems smaller
  }
  noStroke();
}

function drawPoly(polygon) {
  beginShape();
  polygon.forEach(point => { //circle, distortedCircle, smoothCircle...
    curveVertex(point[0], point[1]);
  });
  endShape(CLOSE);
}

function makeCircle(ox, oy, numSides, radius) { // make a polygonal ellispe
  const points = [];
  const radiansPerStep = (Math.PI * 2) / numSides;
  for (let thet = 0; thet < Math.PI * 2; thet += radiansPerStep) {
    const x = ox + radius * Math.cos(thet);
    const y = oy + radius * Math.sin(thet);
    points.push([x, y]);
  }
  return points;
}

function waterPolyEdge(polygon) { //recursively deform polygon edges
    let newPts = [];
    for(let i = 0; i < polygon.length; i++) {
      let x1 = polygon[i][0];
      let y1 = polygon[i][1];
      let x2, y2;
      if(i < polygon.length-1) {
        x2 = polygon[i+1][0];
        y2 = polygon[i+1][1];
      } else {
        x2 = polygon[0][0];
        y2 = polygon[0][1];
      }
      newPts.push([x1, y1]); //keep existing points
      //add new point
      let newPt = [int((x1+x2)/2), int((y1+y2)/2)]; //midpoint
      let d = dist(x1, y1, newPt[0], newPt[1]); //distance to midpoint
      newPt[0] += int(random(d));
      newPt[1] += int(random(d));
      newPts.push(newPt);
    }
    //again?
    if(recur > 0) {
      recur--;
      return waterPolyEdge(newPts);
    } else {
      recur = 2;
      return newPts;
    }
}
