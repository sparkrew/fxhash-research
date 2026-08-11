function initShaderProgram(gl, vsSource, fsSource) {
    const vertexShader = loadShader(gl, gl.VERTEX_SHADER, vsSource);
    const fragmentShader = loadShader(gl, gl.FRAGMENT_SHADER, fsSource);

    const shaderProgram = gl.createProgram();
    gl.attachShader(shaderProgram, vertexShader);
    gl.attachShader(shaderProgram, fragmentShader);
    gl.linkProgram(shaderProgram);

    if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
        alert(
            `Unable to initialize the shader program: ${gl.getProgramInfoLog(
                shaderProgram
            )}`
        );
        return null;
    }

    return shaderProgram;
}

function loadShader(gl, type, source) {
    const shader = gl.createShader(type);

    gl.shaderSource(shader, source);
    gl.compileShader(shader);

    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        alert(
            `An error occurred compiling the shaders: ${gl.getShaderInfoLog(shader)}`
        );
        gl.deleteShader(shader);
        return null;
    }

    return shader;
}


const vec3 = glMatrix.vec3,
    vec4 = glMatrix.vec4,
    mat4 = glMatrix.mat4,
    mat3 = glMatrix.mat3,
    quat = glMatrix.quat,
    vec2 = glMatrix.vec2;

const radians = degrees => degrees * Math.PI / 180;
const random = (b = 1, a = 0) => fxrand() * (b - a) + a;
const round_random = (b = 1, a = 0) => Math.round(random(b, a));
const choose = (arr) => arr[Math.floor(random() * arr.length)];
const HSBtoRGB = (h, s, v) => {
    const c = v * s
    const x = c * (1 - Math.abs((h / 60) % 2 - 1))
    const m = v - c
    let [r, g, b] = [c,0,x]
    if (h < 60) [r,g,b] = [c,x,0]
    else if (h < 120) [r,g,b] = [x,c,0]
    else if (h < 180) [r,g,b] = [0,c,x]
    else if (h < 240) [r,g,b] = [0,x,c]
    else if (h < 300) [r,g,b] = [x,0,c]
    [r,g,b] = [r+m,g+m,b+m]
    return new Vec3(r,g,b).toStrings();
}

class Vec3 {
    log(){
        console.log(this.x, this.y, this.z);
    }
    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
    add = v => new Vec3(this.x + v.x, this.y + v.y, this.z + v.z)
    sub = v => new Vec3(this.x - v.x, this.y - v.y, this.z - v.z);
    multV = v => new Vec3(this.x * v.x, this.y * v.y, this.z * v.z);
    multS = s => new Vec3(this.x * s, this.y * s, this.z * s);
    length(){
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
    }
    normalize(){
        const l = this.length();
        this.multS(1/l);
        return this
    }
    toRadians() {
        this.x = this.x * Math.PI / 180;
        this.y = this.y * Math.PI / 180;
        this.z = this.z * Math.PI / 180;
        return this
    }
    toDegrees(){
        this.x = this.x * 180 / Math.PI;
        this.y = this.y * 180 / Math.PI;
        this.z = this.z * 180 / Math.PI;
        return this
    }
    toStrings() {
        this.x = this.x.toFixed(2);
        this.y = this.y.toFixed(2);
        this.z = this.z.toFixed(2);
        return this
    }
    clone(){
        return new Vec3(this.x, this.y, this.z);
    }
}

class Object3D {
    constructor(type, data = []){
        this.position = new Vec3(0, 0, 0);
        this.rotation = new Vec3(0, 0, 0);
        this.scale = new Vec3(1, 1, 1);
        this.children = [];
        this.data = data
        this.type = type;
    }
    translate = v => this.position = this.position.add(v);
    rotate = v => this.rotation = this.rotation.add(v);
    addChild(child) {
        child.position = child.position.sub(this.position);
        child.rotation = child.rotation.sub(this.rotation);
        this.children.push(child);
    };

    extract() {
        const res = []
        if (this.type) {
            res.push({
                type: this.type,
                position: this.position,
                rotation: this.rotation,
                scale: this.scale,
                data: this.data
            });
        }
        this.children.forEach(child => {
            child.position = child.position.add(this.position);
            child.position = relativeRotation(child.position, this.rotation.multS(-1));
            child.rotation = child.rotation.add(this.rotation);
            child.data.push(...this.data);
            res.push(...child.extract())
        });
        this.elements = res;
        return res;
    }
    clone(){
        const res = new Object3D();
        res.position = this.position.clone();
        res.rotation = this.rotation.clone();
        res.scale = this.scale.clone();
        this.children.forEach(child => {
            res.addChild(child.clone());
        });
        res.type = this.type;
        res.data = this.data;
        return res;
    }
}
class Group extends Object3D {
    constructor(children) {
        super();
        this.position = children.reduce((acc, child) => acc.add(child.position), new Vec3(0, 0, 0)).multS(1 / children.length);
        children.forEach(child => this.addChild(child));
    }
    boundingBox(){
        const minX = this.children.reduce((acc, child) => Math.min(acc, child.position.x), Infinity) - 50;
        const minY = this.children.reduce((acc, child) => Math.min(acc, child.position.y), Infinity) - 50;
        const minZ = this.children.reduce((acc, child) => Math.min(acc, child.position.z), Infinity) - 50;
        const maxX = this.children.reduce((acc, child) => Math.max(acc, child.position.x), -Infinity) + 50;
        const maxY = this.children.reduce((acc, child) => Math.max(acc, child.position.y), -Infinity) + 50;
        const maxZ = this.children.reduce((acc, child) => Math.max(acc, child.position.z), -Infinity) + 50;
        const obj = new Object3D('box');
        obj.position = new Vec3((minX + maxX) / 2, (minY + maxY) / 2, (minZ + maxZ) / 2);
        obj.scale = new Vec3(maxX - minX, maxY - minY, maxZ - minZ);
        return obj.extract()[0];
    }
    clone(){
        const newChildren = this.children.map(child => child.clone());
        const newGroup = new Group(newChildren);
        newGroup.position = this.position.clone();
        newGroup.rotation = this.rotation.clone();
        newGroup.scale = this.scale.clone();
        return newGroup;
    }
}

function relativeRotation(pos, rot) {
    const x = pos.x;
    const y = pos.y;
    const z = pos.z;
    const a = radians(rot.x)
    const b = radians(rot.y)
    const c = radians(rot.z)
    const s1 = Math.sin(a)
    const c1 = Math.cos(a)
    const s2 = Math.sin(b)
    const c2 = Math.cos(b)
    const s3 = Math.sin(c)
    const c3 = Math.cos(c)
    const x1 = x * (c2 * c3) + y * (c3 * s1 * s2 - c1 * s3) + z * (s1 * s3 + c1 * c3 * s2);
    const y1 = x * (c2 * s3) + y * (c1 * c3 + s1 * s2 * s3) + z * (c1 * s2 * s3 - c3 * s1);
    const z1 = x * (-s2) + y * (c2 * s1) + z * (c1 * c2);
    return new Vec3(x1, y1, z1)
}