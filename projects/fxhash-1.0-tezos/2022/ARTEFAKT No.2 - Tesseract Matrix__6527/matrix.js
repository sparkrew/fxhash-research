
class P4Vector {
    constructor(x, y, z, w) {
        this.x = x || 0;
        this.y = y || 0;
        this.z = z || 0;
        this.w = w || 0;
    }

    mult(f) {
        this.x *= f;
        this.y *= f;
        this.z *= f;
        this.w *= f;
    }
}


function vecToMatrix(v) {
  let m = [];
  for (let i = 0; i < 3; i++) {
    m[i] = [];
  }
  m[0][0] = v.x;
  m[1][0] = v.y;
  m[2][0] = v.z;
  return m;
}

function vec4ToMatrix(v) {
  let m = vecToMatrix(v);
  m[3] = [];
  m[3][0] = v.w;
  return m;
}

function matrixToVec(m) {
  return createVector(m[0][0], m[1][0], m[2][0]);
}

function matrixToVec4(m) {
  let r = new P4Vector(m[0][0], m[1][0], m[2][0], 0);
  if (m.length > 3) {
    r.w = m[3][0];
  }
  return r;
}

function logMatrix(m) {
  const cols = m[0].length;
  const rows = m.length;
  console.log(rows + "x" + cols);
  console.log("----------------");
  let s = '';
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      s += (m[i][j] + " ");
    }
    console.log(s);
  }
  console.log();
}

function matmulvec(a, vec) {
  let m = vecToMatrix(vec);
  let r = matmul(a, m);
  return matrixToVec(r);
}

function matmulvec4(a, vec) {
  let m = vec4ToMatrix(vec);
  let r = matmul(a, m);
  return matrixToVec4(r);
}

function matmul(a, b) {
  if (b instanceof p5.Vector) {
    return matmulvec(a, b);
  }
  if (b instanceof P4Vector) {
    return matmulvec4(a, b);
  }

  let colsA = a[0].length;
  let rowsA = a.length;
  let colsB = b[0].length;
  let rowsB = b.length;

  if (colsA !== rowsB) {
    console.error("Columns of A must match rows of B");
    return null;
  }

  result = [];
  for (let j = 0; j < rowsA; j++) {
    result[j] = [];
    for (let i = 0; i < colsB; i++) {
      let sum = 0;
      for (let n = 0; n < colsA; n++) {
        sum += a[j][n] * b[n][i];
      }
      result[j][i] = sum;
    }
  }
  return result;
}

function adotb(a, b){
  
}


// adopted from
// https://www.geertarien.com/blog/2017/07/30/breakdown-of-the-lookAt-function-in-OpenGL/
function lookAt_matrix1(vec3_eye, vec3_at, vec3_up){
    //console.log('lookAt_matrix',vec3_eye, vec3_at, vec3_up);

    let zaxis = vec3_at.sub(vec3_eye).normalize();
    let xaxis = zaxis.cross(vec3_up).normalize();
    let yaxis = xaxis.cross(zaxis);

    zaxis = createVector(0,0,0).sub(zaxis);

    let viewMatrix = [
      [xaxis.x, xaxis.y, xaxis.z, xaxis.dot(vec3_eye) ],
      [yaxis.x, yaxis.y, yaxis.z, yaxis.dot(vec3_eye) ],
      [zaxis.x, zaxis.y, zaxis.z, zaxis.dot(vec3_eye) ],
      [0,0,0,1]
    ];

    return viewMatrix;
  }

//https://stackoverflow.com/questions/57512176/dot-product-in-lookat-matrix-implementation
function lookAt_matrix2(eye, at, up){
  let f = at.sub(eye).normalize();
  let s = f.cross(up).normalize();
  let u = s.cross(f);

  let viewMatrix = [
    [s.x, u.x, -f.x, 1],
    [s.y, u.y, -f.y, 1],
    [s.z, u.z, f.z, 1],
    [0-s.dot(eye), 0-u.dot(eye), f.dot(eye)]
  ];

  return viewMatrix;
}

//https://stackoverflow.com/questions/21828801/how-to-find-correct-rotation-from-one-vector-to-another
function lookAt_matrix3(eye, at, up){
  let n = eye.sub(at).normalize();
  let c = n.cross(up).normalize();
  let u = c.cross(n).normalize();
  u.reflect(createVector(0,1,1));
  let x = u.cross(n).normalize();

  // let n = at.sub(eye).normalize();
  // let u = n.cross(up).normalize();
  // let x = u.cross(n);

  let viewMatrix = [
    [x.x, u.x, n.x],
    [x.y, u.y, n.y],
    [x.z, u.z, n.z]
  ];

  return viewMatrix;
}


function m4_v3_mult(m4, v3){

  if(v3 instanceof Array){
    var vin = [v3[0], v3[1], v3[2], 1];
  }else if(v3 instanceof Object){
    var vin = [v3.x, v3.y, v3.z, 1];
  }


  let vres = [
    m4[0][0]*vin[0] + m4[0][1]*vin[1] + m4[0][2]*vin[2] + m4[0][3]*vin[3],
    m4[1][0]*vin[0] + m4[1][1]*vin[1] + m4[1][2]*vin[2] + m4[1][3]*vin[3],
    m4[2][0]*vin[0] + m4[2][1]*vin[1] + m4[2][2]*vin[2] + m4[2][3]*vin[3]
  ];

  console.log('m4_v3_mult',m4,v3,vres);

  if(v3 instanceof Array){
    return vres;
  }else if(v3 instanceof Object){
    return createVector(vres[0], vres[1], vres[2]);
  }
}

//https://stackoverflow.com/questions/21828801/how-to-find-correct-rotation-from-one-vector-to-another
function m3_v3_mult(m3, v3){

  if(v3 instanceof Array){
    var vin = [v3[0], v3[1], v3[2]];
  }else if(v3 instanceof Object){
    var vin = [v3.x, v3.y, v3.z];
  }


  let vres = [
    m3[0][0]*vin[0] + m3[0][1]*vin[1] + m3[0][2]*vin[2],
    m3[1][0]*vin[0] + m3[1][1]*vin[1] + m3[1][2]*vin[2],
    m3[2][0]*vin[0] + m3[2][1]*vin[1] + m3[2][2]*vin[2]
  ];

  console.log('m3_v3_mult',m3,v3,vres);

  if(v3 instanceof Array){
    return vres;
  }else if(v3 instanceof Object){
    return createVector(vres[0], vres[1], vres[2]);
  }
}