
const rand = fastRandom(fxrand() * 100000);


function readGridDirection(x, y, gw, grid) {
  const darr = [ [ 0, -1], [ 1, -1], [ 1,  0], [ 1,  1], [ 0,  1], [-1,  1], [-1,  0], [-1, -1] ];
  const ni = 8/(Math.PI*2);
  const step = Math.PI/4;
  const dir = Math.round(Math.floor(grid[y*gw+x]/step)*step * ni);
  return darr[Math.max(Math.min(dir, 7), 0)];
}


function createGrid(gw = 8, gh = gw, noise = [0.0017, 0.0012]) {
  const grid = [];
  const gmax = Math.max(gw, gh);
  const dw = gx.width/gmax;
  const dh = gx.height/gmax;
  for (let y=0; y<gh; y++) {
    for (let x=0; x<gw; x++) {
      const nx = x * dw * noise[0];
      const ny = y * dh * noise[1];
      grid.push(gx.noise(nx, ny)*Math.PI*2);
    }
  }
  return grid;
}


function createPaths(grid, pathsAmount, gw, gh) {
  const paths = [];
  
  for (let i=0; i<pathsAmount; i++) {
    const rx = Math.floor(1+rand.nextFloat()*(gw-1));
    const ry = Math.floor(1+rand.nextFloat()*(gh-1));

    let lastDirection = null;
    const path = [];
    let cx = rx;
    let cy = ry;
    for (let step=0; step<LENGTH; step++) {
      const direction = readGridDirection(cx, cy, gw, grid);
      cx += direction[0];
      cy += direction[1];
      if (cx <= 0 || cx >= gw || cy <= 0 || cy >= gh || (path.length>0 && cx===path[path.length-1][0] && cy===path[path.length-1][1])) {
        path.push([cx-direction[0], cy-direction[1]]);
        break;
      }
      // optimisation
      if (lastDirection===null || !(lastDirection[0]===direction[0] && lastDirection[1]===direction[1])) {
        path.push([cx-direction[0], cy-direction[1]]);
      }
      lastDirection = direction;
    }
    paths.push(path);
  }
  return paths;
}


function renderPaths(gx, paths, gw, gh, time) {
  const gmax = Math.max(gw, gh);
  const dw = gx.width/gmax;
  const dh = gx.height/gmax;
  const offset = createVector(
    (gx.width/gh) * Math.max((gh-gw)/2, 0),
    (gx.height/gw) * Math.max((gw-gh)/2, 0)
  );

  for (let i=time*PPF; i<time*PPF+PPF && i<paths.length; i++) {
    const path = paths[i];
    for (let step=1; step<path.length; step++) {
      const from = path[step-1];
      const to = path[step];
      gx.line(from[0]*dw+offset.x, from[1]*dh+offset.y, to[0]*dw+offset.x, to[1]*dh+offset.y);
    }
  }
}