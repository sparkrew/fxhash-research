let sketch;
let started = false;
let finished = false;

const colorMap = {
  terra: ["424b54","93a8ac","ffffff","c05d71","9b6a6c"],
  flora: ["540d6e","ee4266","ffd23f","f3fcf0","1f271b"],
  fungi: ["50514f","cbd4c2","fffcff","247ba0","c3b299"],
  fauna: ["e08a00","a7a3b8","c2adb4","906764","6a4539"],
  vice: ["f25f5c","ffe066","50514f","247ba0","70c1b3"],
  fake: ["08090a","575a5e","a7a2a9","f7cb15","f4f7f5"],
  bill: ["211a1d","6320ee","8075ff","f8f0fb","fa7921"],
};
const keys = Object.keys(colorMap);

FEATURE_VALUES = {
  neighbor_range: parseInt(fxrand() * 5),

  // Named.
  noise_freq: parseInt(fxrand() * 3),
  neighbor_count: parseInt(fxrand() * 4),
  brush_size: parseInt(fxrand() * 3),
  brush_type: parseInt(fxrand() * 2),
  color_count: parseInt(fxrand() * 4),
  node_distancing: parseInt(fxrand() * 2),
}

// Naming.
window.$fxhashFeatures = {
  "mood": keys[parseInt(keys.length * fxrand())],
  "tone": ["playful", "casual", "dry"][FEATURE_VALUES.noise_freq],
  "flow": ["steady", "smooth", "lazy", "chunky"][FEATURE_VALUES.neighbor_count],
  "brow": ["meticulous", "fair", "bushy"][FEATURE_VALUES.brush_size],
  "delirium": ["off", "on"][FEATURE_VALUES.brush_type],
  "crowd": ["wild", "cheerful", "breezy", "chill"][FEATURE_VALUES.color_count],
  "distancing": ["off", "on"][FEATURE_VALUES.node_distancing],
}
let colors = [];

const S = function(n) { return n * 4; };

// Constant.
const NODE_COUNT = 1024;
const FRAME_CUTOFF = 1024;
const PUSHBACK_FORCE = -256;

// Param.
const NEIGHBORHOOD_RANGE =
  Math.pow(2, 4 + FEATURE_VALUES.neighbor_range); // 16 -> 256
const NEIGHBORHOOD_COUNT = 
  4 + FEATURE_VALUES.neighbor_count; // 4 -> 8
const NOISE_FREQ = 
  Math.pow(2, 8 + FEATURE_VALUES.noise_freq); // 256 -> 1024 
const BRUSH_SIZE = 
  1 + FEATURE_VALUES.brush_size; // 1, 2, 3
const BRUSH_TYPE = FEATURE_VALUES.brush_type; // 0, 1
const COLOR_COUNT = 
  [5, 7, 17, 27][FEATURE_VALUES.color_count]; // 5, 7, 17, 31
const NODE_DISTANCING = 
  [-1, 1][FEATURE_VALUES.node_distancing]; // -1, 1

// Computed.
const FORCE_DAMP = 1 / NODE_COUNT;

const toColor = (p, colorId) => {
  return colors[colorId % colors.length];
}

class Node {
  static id = 0;
  constructor(pos, color=0, radius=8) {
    this.id = Node.id++;
    this.pos = pos.copy();
    this.color = color;
    this.radius = S(radius);
    this.counter = 0;
    this.neighbors = [];
  }
  item() {
    return {
        minX: this.pos.x - this.radius / 2,
        minY: this.pos.y - this.radius / 2,
        maxX: this.pos.x + this.radius / 2,
        maxY: this.pos.y + this.radius / 2,
        node: this
    };
  }
  draw(p) {
    const gaussian = function(x) {
      return Math.exp(-Math.pow(x / FRAME_CUTOFF - 1, 2)) - 0.4;
    }
    const theta = Math.max(0, gaussian(this.counter));
    const n0 = p.noise(this.id + this.counter / NOISE_FREQ);
    const brush = (n0 - 0.3) * this.radius * (BRUSH_SIZE + 0.5) * theta;
    if (started && theta === 0) {
      finished = true;
    } else if (!started && theta > 0) {
      started = true;
    }

    if (brush > 0) {
      if (BRUSH_TYPE === 1) {
        p.fill(p.lerpColor(
          toColor(p, this.id),
          toColor(p, this.id + 1),
          this.counter / FRAME_CUTOFF
          ));
      } else {
        p.fill(toColor(p, this.id));
      }
      p.circle(this.pos.x, this.pos.y, S(brush));
    }
  }
}

const sketchHandler = function(p) {
  const width = 2048;
  const height = 2048;
  let nodes = [];
  let tree = new rbush();
  let cnv;
  let zoomBy = 1;

  p.setup = function() {
    // Setup.
    cnv = p.createCanvas(width, height);
    cnv.parent('sketch-holder');
    zoomBy = p.windowWidth > p.windowHeight
      ? p.windowHeight / height : p.windowWidth / width;
    cnv.style("zoom", zoomBy);
    addScreenPositionFunction(p);
    p.frameRate(60);

    // Parse colors.
    for (const colStr of Object.values(colorMap[
        window.$fxhashFeatures.mood])) {
      colors.push(p.color('#' + colStr));
    }

    // Seed noise.
    const noiseSeed = parseInt(fxrand() * 1024 * 1024);
    p.noiseSeed(noiseSeed);

    // Points.
    const points = [];

    const randPoint = () => p.createVector(fxrand() * width, fxrand() * height);
    while (points.length < NODE_COUNT) {
      points.push(randPoint());
    }

    nodes = points.map((q) =>
      new Node(q, 
        /*color=*/parseInt(fxrand() * COLOR_COUNT),
        /*radius=*/2 + Math.pow(fxrand(), 2) * 4));

    p.background(255);
    p.noStroke();
  }

  p.draw = function() {
    if (finished) {
      return;
    }
    // p.fill(255, 255, 255, 4);
    // p.rect(0, 0, p.width, p.height);

    // console.log(p.frameRate());

    const frameMult = 4;
    for (let f = 0; f < frameMult; ++f) {

      tree = new rbush();
      tree.load(nodes.map((n) => n.item()));

      let force = new p5.Vector();
      const center = new p5.Vector(width / 2, height / 2);

      for (const n of Object.values(nodes)) {
        force.mult(0);

        n.counter++;
        n.neighbors = knn(
          tree, n.pos.x, n.pos.y,
          NEIGHBORHOOD_COUNT, S(NEIGHBORHOOD_RANGE)).slice(1);
        for (const nn of Object.values(n.neighbors)) {
          const neighborNode = nn.node;
          
          let signMod = 0;
          if (n.color === neighborNode.color) {
            signMod = NODE_DISTANCING;
          } else if ((n.color + 1) % COLOR_COUNT === neighborNode.color) {
            signMod = 1;
          } else if ((n.color + 3) % COLOR_COUNT === neighborNode.color) {
            signMod = -1;
          } else {
            signMod = 0;
          }

          let forceMult = signMod * n.radius * neighborNode.radius;
          const nodeDist = neighborNode.pos.dist(n.pos);
          if (nodeDist < n.radius + neighborNode.radius) {
            forceMult = PUSHBACK_FORCE;
          }

          force.add(neighborNode.pos.copy()
            .sub(n.pos).normalize().mult(forceMult));
        }
        n.pos.add(force.mult(FORCE_DAMP));

      }

      if (f % 4 != 0) {
        continue;
      }
      for (const n of Object.values(nodes)) {
        n.draw(p);
      }
    }

  }

  p.windowResized = function() {
    zoomBy = p.windowWidth > p.windowHeight
      ? p.windowHeight / height : p.windowWidth / width;
    cnv.style("zoom", zoomBy);
  }
}

window.onload = function(e) {
  let canvas = document.getElementById('sketch-holder');
  sketch = new p5(sketchHandler, canvas);
}

// console.log(JSON.stringify(window.$fxhashFeatures));
