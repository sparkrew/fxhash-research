class Part {
  constructor(x, y) {
    this.p = createVector(x, y);
    this.v = createVector(0, 0);
    this.r = partRad;
    this.available = true;
    this.nodes = [];
    this.maxNeighbors = 1;
    this.maxSpeed = speed;
    this.done = false;
    let hu = fxrand()*128 + hueOffset;
    if (hu > 255) {
      hu -= 255;
    }
    this.col = color(hu, 255, 255);
    this.age = 0;
  }

  update() {
    if (!this.done) {
      this.age++;

      let i, n;
      let d, dx, dy;
      if (this.nodes.length != 0) {
        for (let i = this.nodes.length - 1; i >= 0; i--) {
          n = this.nodes[i];

          dx = n.p.x - this.p.x;
          dy = n.p.y - this.p.y;

          let d = sq(n.p.x - this.p.x) + sq(n.p.y - this.p.y);

          if (d < distThresh * distThresh) {
            let c;
            if (singleColor) {
              c = mainC;
            } else {
              c = this.col;
            }

            main.stroke(
              red(c),
              green(c),
              blue(c),
              dist(this.p.x, this.p.y, packLength / 2, packLength / 2) * 0.5
            );
            disp.stroke(
              red(c),
              green(c),
              blue(c),
              dist(this.p.x, this.p.y, packLength / 2, packLength / 2) * 0.5
            );

            if (!n.available) {
              main.push();
              main.scale(1 / mainBufferScale, 1 / mainBufferScale);
              main.line(this.p.x, this.p.y, n.p.x, n.p.y);
              main.pop();
              disp.push();
              disp.scale(
                float(width) / float(packLength),
                float(width) / float(packLength)
              );
              disp.line(this.p.x, this.p.y, n.p.x, n.p.y);
              disp.pop();
            }
            this.v.x += dx * 0.02;
            this.v.y += dy * 0.02;

            n.v.x -= dx * 0.02;
            n.v.y -= dy * 0.02;
          } else {
            this.nodes.splice(i);
          }
          if (n.done) {
            this.nodes.splice(i);
          }
        }
      }

      if (this.nodes.length < 5) {
        this.available = true;
      } else {
        this.available = false;
      }

      let nx = this.p.x; //map(this.p.x, 0, disp.width, 0, packLength);
      let ny = this.p.y; //map(this.p.y, 0, dispheight, 0, packLength);
      
      let angle =
        noise( nx * mapScale, ny * mapScale, frameCount * 0.1) *
          TWO_PI *
          3 +
        offset;
      this.v.x += sin(angle) * 10 * 0.01;
      this.v.y += cos(angle) * 10 * 0.01;
      this.p.add(this.v);
      this.v.x = constrain(this.v.x, -this.maxSpeed, this.maxSpeed);
      this.v.y = constrain(this.v.y, -this.maxSpeed, this.maxSpeed);

      if (
        this.p.x < -0 ||
        this.p.x > packLength + 0
      ) {
        this.done = true;
      }
      if (
        this.p.y < -0 ||
        this.p.y > packLength + 0
      ) {
        this.done = true;
      }
    }
  }

  draw() {
    if (!drawCircles) {
      main.noStroke();
      disp.noStroke();
    } else {
      if (dark) {
        main.stroke(white);
        disp.stroke(white);
      } else {
        main.stroke(0);
        disp.stroke(0);
      }
    }

    if (singleFill) {
      main.fill(fillC);
      disp.fill(fillC);
    } else {
      main.fill(this.col);
      disp.fill(this.col);
    }
    main.push();
    main.scale(1 / mainBufferScale, 1 / mainBufferScale);
    main.circle(this.p.x, this.p.y, this.r);
    main.pop();

    disp.push();
    disp.scale(
      float(width) / float(packLength),
      float(width) / float(packLength)
    );
    disp.circle(this.p.x, this.p.y, this.r);
    disp.pop();
  }
}
