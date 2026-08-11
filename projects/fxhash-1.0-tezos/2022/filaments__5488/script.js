const S = (v) => v * 1.0;

const WIDTH = S(1024);
const HEIGHT = S(1024);

let sketch;

const SIZE_SETTINGS = [1, 2, 3, 4];
const SIZE_UNIFORM_SETTINGS = [0, 1];
const GRAVITY_SETTINGS = [0, 1];
const COUNT_SETTINGS = [32, 48, 64];
const COLOR_SETTINGS = [
  ["3ab795","a0e8af","86baa1","edead0","ffcf56","071e22","f4c095","ee2e31","6564db","232ed1"],
  ["c7eae4","a7e8bd","fcbcb8","efa7a7","ffd972","202c39","283845","586994","67779e","7583a7"],
  ["272838","f3de8a","eb9486","7e7f9a","f9f8f8","65afff","5899e2","9eb7e5","648de5","1f7a8c"],
  ["322e18","d9dcd6","81c3d7","f64740","6b0504","5f5b6b","5f4b66","ea9010","bd632f","101d42"],
  ["000000","000000","000000","000000","000000","e75a7c","d1495b","a71d31","090c9b","f7b538"],
  ["f7f0f5","decbb7","8f857d","5c5552","433633","1d1e2c","353535","342e37","160c28","000411"],
  ["403f4c","e84855","f9dc5c","3185fc","efbcd5","f2d7ee","708d81","337357","6d9f71","97abb1"],
  ["0c0a3e","7b1e7a","b33f62","f9564f","f3c677","c6ddf0","f1e4e8","e2dcde","ceb1be","f7c1bb"],
  ["083d77","ebebd3","f4d35e","ee964b","f95738","7c7a7a","ff5d73","393424","504b3a","09459A"],
  ["242038","725ac1","8d86c9","cac4ce","f7ece1","55d6be","acfcd9","dddddd","fc6471","ede7e3"],
];

// Feature values.
const FEATURES = {
  size: (fxrand() * SIZE_SETTINGS.length) | 0,
  sizeUniform: (fxrand() * SIZE_UNIFORM_SETTINGS.length) | 0,
  color: (fxrand() * COLOR_SETTINGS.length) | 0,
  gravity: (fxrand() * GRAVITY_SETTINGS.length) | 0,
  count: (fxrand() * COUNT_SETTINGS.length) | 0,
};

// Named features.
window.$fxhashFeatures = {
  vibe: ["wax", "lint", "atoll", "autumn", "night", "winter", "hachi", "lozenge", "mirage", "miles"][FEATURES.color],
  size: ["pea", "grape", "lime", "melon"][FEATURES.size],
  uniform: ["true", "false"][FEATURES.sizeUniform],
  gravity: ["off", "on"][FEATURES.gravity],
  pool: ["pond", "lake", "sea"][FEATURES.count],
};

const CONFIG = {
  colors: COLOR_SETTINGS[FEATURES.color],
  pointLimit: S(2048.0),
  radius: S(16.0 + FEATURES.size * 8.0), // 32 - 60
  strokeSize: S(12.0 + FEATURES.size * 7.0),
  strokeMult: FEATURES.sizeUniform * FEATURES.size * 1, // 8 - 32
  rdMax: 8,
  nodeSize: S(0.0),
  forceMult: 1.0,
  pullM: 12.0, // 16 - 32
  pushM: 0.375,
  gravityRadius: S(512.0),
  gravityMult: (0.00001 + FEATURES.gravity * 0.0001) * (2.5 - FEATURES.size / 2) * 0.5, // 0.01 -> 0.0
  frameLimit: 256.0,
  filamentCount: COUNT_SETTINGS[FEATURES.count], // 64 -> 32
};

class PointCloud {
  constructor() {
    this.points = new Map();
  }
}

const clouds = [
  new PointCloud(), // new PointCloud(), // new PointCloud(),
];

class Point {
  static id = 0;
  constructor(pos) {
    this.id = Point.id++;
    this.pos = pos;
    this.neighborMap = new Map();
    this.rC = (fxrand() * CONFIG.colors.length) | 0;
    this.rD = (fxrand() * CONFIG.rdMax) | 0;
    this.rawColor = CONFIG.colors[this.rC];

    this.seq = null;
    this.maxSeqNum = null;
  }
  item() {
    return {
        minX: this.pos.x - 1,
        minY: this.pos.y - 1,
        maxX: this.pos.x + 1,
        maxY: this.pos.y + 1,
        node: this
    };
  }
  connect(n) {
    this.neighborMap.set(n.id, n);
  }
  disconnect(id) {
    this.neighborMap.delete(id);
  }
  first() {
    return this.neighborMap.entries().next().value.at(1);
  }
  draw(p) {
    if (CONFIG.nodeSize > 0) {
      p.circle(this.pos.x, this.pos.y, CONFIG.nodeSize);
    }

    for (const [k, v] of this.neighborMap) {
      p.line(this.pos.x, this.pos.y, v.pos.x, v.pos.y);
    }
  }
  fillKeys(keys, seen) {
    keys.push(this.id);
    seen.push(this.id);
    for (const [k, v] of this.neighborMap) {
      if (seen.indexOf(k) !== -1) {
        continue;
      }
      seen.push(k);
      v.fillKeys(keys, seen);
    }
  }
  colorize(points) {
    const keys = [];
    const seen = [];
    this.fillKeys(keys, seen);
    const minKey = Math.min(...keys) | 0;
    this.groupId = minKey;
    this.rC = points.get(minKey).rC;
    this.rD = points.get(minKey).rD;
    this.rawColor = CONFIG.colors[this.rC];
  }
  calcSeqNum(lastSeq) {
    let maxSeq = lastSeq;
    for (const [k, v] of this.neighborMap) {
      let newSeq = lastSeq;
      if (v.seq !== null) {
        newSeq = v.seq
      } else {
        v.seq = lastSeq + 1;
        newSeq = v.calcSeqNum(lastSeq + 1);
      }
      if (newSeq > maxSeq) {
        maxSeq = newSeq;
      }
    }
    return maxSeq;
  }
}

const connectPoints = (p0, p1) => {
  p0.connect(p1);
  p1.connect(p0);
}

const disconnectPoints = (p0, p1) => {
  p0.disconnect(p1.id);
  p1.disconnect(p0.id);
}

const sketchHandler = function(p) {
  let cnv;
  let zoomBy = 1;

  p.setup = function() {
    // Setup.
    cnv = p.createCanvas(WIDTH, HEIGHT);
    p.pixelDensity(1);
    cnv.parent('sketch-holder');
    zoomBy = p.windowWidth > p.windowHeight
      ? p.windowHeight / HEIGHT : p.windowWidth / WIDTH;
    cnv.style("zoom", zoomBy);
    p.frameRate(30);
    p.smooth(8);

    const seed = 0xdeadbeef * fxrand();
    p.noiseSeed(seed);
    p.noiseDetail(7);
    // Just to be safe.
    p.randomSeed(seed);

    const setupSystem = (cloud) => {
      for (let i = 0; i < CONFIG.filamentCount; ++i) {
        const addPoint = (x, y) => {
          const newPoint = new Point(p.createVector(x, y));
          cloud.points.set(newPoint.id, newPoint);
        }
        const x = (fxrand() * WIDTH / 2) - WIDTH / 4;
        const y = (fxrand() * HEIGHT / 2) - HEIGHT / 4;

        const id = cloud.points.size;
        addPoint(x, y); // C = 0


        if (i % 24 == 0) {
          addPoint(x - 10, y + 10); // A = 1
          addPoint(x - 10, y - 10); // B = 2
          addPoint(x + 10, y); // D = 3
          addPoint(x + 10, y + 10); // E = 4
          addPoint(x + 10, y - 10); // F = 5
          addPoint(x + 20, y); // G = 6
          addPoint(x + 20, y + 1); // H = 7
          addPoint(x + 21, y + 1); // I = 8
          addPoint(x + 21, y - 1); // J = 9
          addPoint(x + 21, y - 1); // K = 10

          connectPoints(cloud.points.get(id + 1), cloud.points.get(id + 0)); // A - C
          connectPoints(cloud.points.get(id + 2), cloud.points.get(id + 0)); // B - C
          connectPoints(cloud.points.get(id + 0), cloud.points.get(id + 3)); // C - D
          connectPoints(cloud.points.get(id + 3), cloud.points.get(id + 4)); // D - E
          connectPoints(cloud.points.get(id + 3), cloud.points.get(id + 5)); // D - F
          connectPoints(cloud.points.get(id + 3), cloud.points.get(id + 6)); // D - G
          connectPoints(cloud.points.get(id + 6), cloud.points.get(id + 7)); // G - H
          connectPoints(cloud.points.get(id + 7), cloud.points.get(id + 8)); // H - I
          connectPoints(cloud.points.get(id + 8), cloud.points.get(id + 9)); // I - J
          connectPoints(cloud.points.get(id + 9), cloud.points.get(id + 10)); // J - K
          connectPoints(cloud.points.get(id + 10), cloud.points.get(id + 6)); // K - G

        } else {

          addPoint(x - 10, y + 10); // A = 1
          addPoint(x - 10, y - 10); // B = 2
          connectPoints(
            cloud.points.get(id + 1),
            cloud.points.get(id + 0)); // A - C
          connectPoints(
            cloud.points.get(id + 2),
            cloud.points.get(id + 0)); // B - C
          if (i % 4 == 0) {
            connectPoints(
              cloud.points.get(id + 1),
              cloud.points.get(id + 2)); // A - B
          }
          
          /*
          const id = cloud.points.size - 1;
          const pp = cloud.points.get(id);
          for (let j = 0; j < 2; ++j) {
            const rot = fxrand();
            const px = Math.sin(rot * p.TAU) * S(2.0) * fxrand();
            const py = Math.cos(rot * p.TAU) * S(2.0) * fxrand();
            addPoint(x + px, y + py);
            connectPoints(pp, cloud.points.get(id + j + 1));
          }
          */

          /*
          if (i % 2 == 1) {
            addPoint(x + S(2.0), y);
            connectPoints(pp, cloud.points.get(cloud.points.size - 1));
          }
          */
        }
      }
    }

    const colorizeSystem = (cloud) => {
      for (const [k, point] of cloud.points) {
        point.colorize(cloud.points);
      }
    };

    for (const cloud of Object.values(clouds)) {
      Point.id = 0;
      setupSystem(cloud);
      colorizeSystem(cloud);
    }

    // Setup end.

  };

  p.draw = function() {

    if (p.frameCount > CONFIG.frameLimit * 2) {
      return;
    }

    // Simulation.
    const simulateSystem = (cloud) => {
      for (let i = 0; i < 2; ++i) {

        // Tree.
        const tree = new rbush();
        tree.load(Array.from(cloud.points)
          .map(([k, v]) => v.item()));
        
        for (const [k, point] of cloud.points) {
          // Forces:
          let fM = CONFIG.forceMult;
          const pullM = fM * CONFIG.pullM; // fM * (1 + point.id / cloud.points.size) * 4; // 
          const pushM = fM - fM / 4.0; // (fM - (fM / 8) * (1 + point.id / cloud.points.size)); // 
          let gravM = CONFIG.gravityMult * fM;
          if (point.pos.mag() > CONFIG.gravityRadius) {
            gravM *= p.lerp(1.0, 64.0, point.pos.mag() / CONFIG.gravityRadius)
          }

          const pull = p.createVector(0, 0);
          for (const [kk, neighbor] of point.neighborMap) {
            pull.add(neighbor.pos.copy().sub(point.pos)
              .mult( // 1));
                p.lerp(0.8, 0.2, point.rD / CONFIG.rdMax)));

            for (const [oops, nNeigh] of neighbor.neighborMap) {
              pull.add(nNeigh.pos.copy().sub(point.pos)
                .mult( // 0));
                  p.lerp(0.2, 0.8, point.rD / CONFIG.rdMax)));
            }
          }
          if (point.neighborMap.size !== 0) {
            pull.mult(pullM / point.neighborMap.size);
          }

          const push = p.createVector(0, 0);
          const rad = CONFIG.radius;
          const neighbors = knn(tree, point.pos.x, point.pos.y,
                  16, rad).slice(1);
          for (const n of Object.values(neighbors)) {
            const dif = n.node.pos.copy().sub(point.pos);
            push.add(
              dif.mult(-pushM * CONFIG.pushM));
          }

          const gravity = point.pos.copy().mult(-1).mult(gravM);
          /*
          const n = p.noise(
            WIDTH + point.pos.x / 256,
            HEIGHT +  point.pos.y / 256,
            p.frameCount / 64.0);
          const noise = p.createVector(fM * 4, 0)
            .rotate(p.TAU * point.id / cloud.points.size).rotate(n * p.TAU);
          */
          const force = pull.add(push).add(gravity); // .add(noise);
          if (force.mag() > S(1.0)) {
            force.normalize().mult(S(1.0));
          }

          if (p.frameCount > CONFIG.frameLimit) {
            const phi = (p.frameCount - CONFIG.frameLimit) / CONFIG.frameLimit;
            force.mult(1 - phi);
            if (phi > 1.0) {
              force.mult(0);
            }
          }

          point.pos.add(force);
        }

        if (cloud.points.size > CONFIG.pointLimit) {
          continue;
        }

        const split = () => {
          // Split random edge.
          let found = false;
          let index = 0;
          while (!found) {
            index = (fxrand() * cloud.points.size) | 0; 
            if (cloud.points.get(index) === undefined) {
              continue;
            }
            if (cloud.points.get(index).first() === undefined) {
              continue;
            }
            found = true;
          }

          cloud.points.get(index);
          const randomStart = cloud.points.get(index).id;
          const randomEndPoint = cloud.points.get(randomStart).first();
          if (randomEndPoint === undefined) {
            return;
          }
          const randomEnd = randomEndPoint.id;

          disconnectPoints(
            cloud.points.get(randomStart),
            cloud.points.get(randomEnd));

          const startPoint = cloud.points.get(randomStart);
          const endPoint = cloud.points.get(randomEnd);
          const newPos = endPoint.pos.copy().add(startPoint.pos).mult(0.5);
          const newPoint = new Point(newPos);
          cloud.points.set(newPoint.id, newPoint);

          connectPoints(cloud.points.get(randomStart), newPoint);
          connectPoints(newPoint, cloud.points.get(randomEnd));
          newPoint.colorize(cloud.points);
        };
        split();
        // split();
      }
    }

    // Calculate sequence numbrs.
    const numberSystem = (cloud) => {
      for (const [k, point] of cloud.points) {
        point.seq = null;
      }
      let maxSeq = 0;
      for (const [k, point] of cloud.points) {
        cloud.points.get(point.groupId).seq = 0;
        const newSeq = cloud.points.get(point.groupId).calcSeqNum(0);
        if (newSeq > maxSeq) {
          maxSeq = newSeq;
        }
      }
      for (const [k, point] of cloud.points) {
        point.maxSeqNum = maxSeq;
      }

    }

    // Render
    const renderSystem = (cloud, i) => {
      p.strokeWeight(CONFIG.strokeSize);
      
      p.push();

      // const center = p.createVector(0, 0);
      let maxY = 0;
      let minY = 0;
      let maxX = 0;
      let minX = 0;
      for (const [k, point] of cloud.points) {
        // center.add(point.pos);
        if (point.pos.x < minX) {
          minX = point.pos.x;
        }
        if (point.pos.x > maxX) {
          maxX = point.pos.x;
        }
        if (point.pos.y < minY) {
          minY = point.pos.y;
        }
        if (point.pos.y > maxY) {
          maxY = point.pos.y;
        }
      }
      // center.mult(1.0 / cloud.points.size);

      const maxSize = Math.max(maxX - minX, maxY - minY);

      p.translate(WIDTH / 2, HEIGHT / 2);
      // p.translate(center.x, center.y);
      // p.translate(minX + (maxX - minX) / 2, minY + (maxY - minY) / 2);

      p.scale(0.75 * WIDTH / maxSize);

      for (const [k, point] of cloud.points) {
        p.stroke('#' + point.rawColor);
        p.fill('#' + point.rawColor);

        p.strokeWeight(
          CONFIG.strokeSize -
          point.rD * CONFIG.strokeMult
          ); // CONFIG.radius * (0.1 + 1.9 * Math.pow(point.seq / point.maxSeqNum, 2)));
        // p.strokeWeight(CONFIG.strokeSize);
        point.draw(p);
      }
      p.pop();
    }

    p.background("#f5f5f5");

    let counter = 0;
    for (const cloud of Object.values(clouds)) {
      simulateSystem(cloud);
      numberSystem(cloud);
      renderSystem(cloud, counter);
      counter++;
    }
  };

  p.windowResized = function() {
    zoomBy = p.windowWidth > p.windowHeight
      ? p.windowHeight / HEIGHT : p.windowWidth / WIDTH;
    cnv.style("zoom", zoomBy);
  };
};

window.onload = function(e) {
  let canvas = document.getElementById('sketch-holder');
  sketch = new p5(sketchHandler, canvas);
}

console.log(JSON.stringify(window.$fxhashFeatures));
