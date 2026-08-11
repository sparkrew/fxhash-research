
class Hypercube extends SceneElement {
  constructor(seed){
    super(seed);

    // CONSTANTS
    this.C_COLOR_BG = color(0,0,0,0);
    this.C_COLOR_FL = color(0,0,0,100);
    this.C_COLOR_PT = color('red');
    this.C_COLOR_LN = color('white');

    this.C_SIZE_POINT = 0.03;
    this.C_SIZE_LINE = 0.01;

    this.C_SIZE_BFIL = 0.8;

    this.C_VIEW_DIST = 2.7;
    this.C_SIZE_SCALE = 1.0/3.0;


    // GENERATIVE TRAITS
    this.C_ANGLE_TRANS = this.prand.R();
    this.C_VIEW_X = this.prand.R();
    this.C_VIEW_Y = this.prand.R();
    this.C_VIEW_Z = this.prand.R();
   

    // PROPERTIES
    this.points = [];
    this.angle = 0;
    this.size_point = 0;
    this.size_line = 0;
    this.size_bfil = 0;
  }

  generate(){
    this.points[0] = new P4Vector(-1, -1, -1, 1);
    this.points[1] = new P4Vector(1, -1, -1, 1);
    this.points[2] = new P4Vector(1, 1, -1, 1);
    this.points[3] = new P4Vector(-1, 1, -1, 1);
    this.points[4] = new P4Vector(-1, -1, 1, 1);
    this.points[5] = new P4Vector(1, -1, 1, 1);
    this.points[6] = new P4Vector(1, 1, 1, 1);
    this.points[7] = new P4Vector(-1, 1, 1, 1);
    this.points[8] = new P4Vector(-1, -1, -1, -1);
    this.points[9] = new P4Vector(1, -1, -1, -1);
    this.points[10] = new P4Vector(1, 1, -1, -1);
    this.points[11] = new P4Vector(-1, 1, -1, -1);
    this.points[12] = new P4Vector(-1, -1, 1, -1);
    this.points[13] = new P4Vector(1, -1, 1, -1);
    this.points[14] = new P4Vector(1, 1, 1, -1);
    this.points[15] = new P4Vector(-1, 1, 1, -1);
  }

  resize(x,y){
    super.resize(x,y);

    this.buff = createGraphics(x,y,WEBGL);

    //this.img.background(this.C_COLOR_BG);

    let dim = this.dim.x > this.dim.y ? this.dim.x : this.dim.y;
    this.size_point = dim * this.C_SIZE_POINT;
    this.size_line = dim * this.C_SIZE_LINE;
    this.size_bfil = dim * this.C_SIZE_BFIL;
    this.size_scale = dim * this.C_SIZE_SCALE;
  }

  render(){
    //super.render();

    // clear background
    // alpha = 0
    this.img.clear();
    //this.img.background(this.C_COLOR_BG);
    //this.img.background(color('blue'));

    // back fill
    // alpha = 1
    this.img.fill(this.C_COLOR_FL);
    this.img.noStroke();
    this.img.circle(this.dim.x/2,this.dim.y/2,this.size_bfil);

    // render object
    this.buff.background(this.C_COLOR_BG);
    //this.buff.background(color('green'));

    this.buff.push();
    //this.buff.translate(this.dim.x/2,this.dim.y/2);

    //this.buff.rotateX(-PI/2);
    //this.buff.rotateY(-PI/3);
    this.buff.rotateX(this.C_VIEW_X);
    this.buff.rotateY(this.C_VIEW_Y);
    this.buff.rotateZ(this.C_VIEW_Z);
    let angle = this.C_ANGLE_TRANS+this.angle;

    let projected3d = [];

    for (let i = 0; i < this.points.length; i++) {
      const v = this.points[i];

      const rotationXY = [
        [cos(angle), -sin(angle), 0, 0],
        [sin(angle), cos(angle), 0, 0],
        [0, 0, 1, 0],
        [0, 0, 0, 1],
      ];

      const rotationZW = [
        [1, 0, 0, 0],
        [0, 1, 0, 0],
        [0, 0, cos(angle), -sin(angle)],
        [0, 0, sin(angle), cos(angle)]
      ];

      let rotated = matmul(rotationXY, v);
      rotated = matmul(rotationZW, rotated);

      //let distance = 3;
      let w = 1 / (this.C_VIEW_DIST - rotated.w);

      const projection = [
        [w, 0, 0, 0],
        [0, w, 0, 0],
        [0, 0, w, 0],
      ];

      let projected = matmul(projection, rotated);
      projected.mult(this.size_scale);
      projected3d[i] = projected;

      this.buff.stroke(color(frameCount%360,100,100,100));
      this.buff.strokeWeight(this.size_point);
      //this.buff.noFill();
      //this.buff.fill(color('red'));

      this.buff.point(projected.x, projected.y, projected.z);
    }

    // Connecting
    for (let i = 0; i < 4; i++) {
      this.connect(0, i, (i + 1) % 4, projected3d);
      this.connect(0, i + 4, ((i + 1) % 4) + 4, projected3d);
      this.connect(0, i, i + 4, projected3d);
    }

    for (let i = 0; i < 4; i++) {
      this.connect(8, i, (i + 1) % 4, projected3d);
      this.connect(8, i + 4, ((i + 1) % 4) + 4, projected3d);
      this.connect(8, i, i + 4, projected3d);
    }

    for (let i = 0; i < 8; i++) {
      this.connect(0, i, i + 8, projected3d);
    }

    //angle = map(mouseX, 0, width, 0, TWO_PI);

    this.angle += 0.02;

    this.buff.pop();

    // render object to image
    this.img.image(this.buff,0,0,this.dim.x,this.dim.y);

  }

  connect(offset, i, j, points) {
    this.buff.strokeWeight(this.size_line);
    this.buff.stroke(this.C_COLOR_LN);
    const a = points[i + offset];
    const b = points[j + offset];
    this.buff.line(a.x, a.y, a.z, b.x, b.y, b.z);
  }
}

