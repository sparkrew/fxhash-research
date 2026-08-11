class Random {
    constructor() {}
    random_dec() {
        return fxrand();
    }
    random_num(a, b) {
        return a + (b - a) * this.random_dec();
    }
    random_int(a, b) {
        return Math.floor(this.random_num(a, b + 1));
    }
    random_choice(list) {
        return list[this.random_int(0, list.length - 1)];
    }
    random_bool(p) {
        return this.random_dec() < p;
    }
}

let DIM, DEFAULT_SIZE = 1000, M, scene, camera, rgb_light_i=0, renderer, group, gem=[], init_=true, torus=[], R = new Random(), normals={}, max_length = {len:0}, stars;
function setSizes(){
    const canvas = renderer.domElement;
    const pixelRatio = window.devicePixelRatio;
    const width  = canvas.clientWidth  * pixelRatio | 0;
    const height = canvas.clientHeight * pixelRatio | 0;
    DIM = Math.min(width, height);
    M = DIM / DEFAULT_SIZE;
    const needResize = canvas.width !== width || canvas.height !== height;
    if (needResize) {
        renderer.setSize(width, height, false);
    }
    return needResize;
}
const options = {
    "gem_texture" : R.random_bool(0.5) ? 'clean' : 'random',
    "gem_symmetric": R.random_bool(0.01),
    "gem_colors_num" : R.random_int(1,5),
    "gem_opacity" : R.random_num(0.2,0.7),
    "gem_num" : R.random_int(3,7),
    "lights_rgb" : R.random_bool(0.5),
    "lights_strength" : R.random_num(1,10),
    "light_speed" : R.random_int(1,5),
    "stars_num" : R.random_int(1000, 10000)
};
window.$fxhashFeatures = {
    // here define the token features
    ...options
}
const gem_max_size = 1, global_colors = getColors(options.gem_colors_num),groups_rotation = { x:R.random_num(-0.005,0.005),y:R.random_num(-0.005,0.005),z:R.random_num(-0.005,0.005)},ring_width = R.random_num(0.05,0.1),lights_num = 4,distance = 10, sym_type = R.random_choice(['o','d']);

function init(){
    scene = new THREE.Scene();
    scene.background = 0x000000;
    camera = new THREE.PerspectiveCamera( 75, 1, 1, distance );
    camera.position.z = 6;
    renderer = new THREE.WebGLRenderer({antialias: true});
    document.body.appendChild( renderer.domElement );

    setSizes();
    createStars();
    multiGem();
    createBloom();
    animate();
}

function createBloom(){
    const m = new THREE.MeshPhongMaterial({
        color:getRandomColor(),
        transparent: true,
        opacity: 0.02,
        depthWrite: true,
        depthTest: false,
        side: THREE.DoubleSide
    });
    let g = new THREE.Group();
    for (let i = -3; i <= 3; i++) {
        let plane = new THREE.Mesh( new THREE.PlaneBufferGeometry( 20, 20 ), m );
        plane.position.z = i;
        plane.updateMatrix();
        g.add(plane);
    }
    scene.add(g);
}

function createLight(x,y,z,r,d){
    if(!global_colors[rgb_light_i]) rgb_light_i = 0;
    let c_ = global_colors[rgb_light_i++];
    let c = options.lights_rgb ? new THREE.Color(c_[0],c_[1],c_[2]) : 0xffffff;
    const light = new THREE.PointLight(c, options.lights_strength, r*2, d*2);
    light.position.x = x;
    light.position.y = y;
    light.position.z = z;
    return light;
}

function getColors(num){
    let res = [];
    for (let i = 0; i < num; i++) {
        let r = R.random_dec();
        let g = R.random_dec();
        let b = R.random_dec();
        let rgb = r+g+b;
        if(rgb < 0.5){
            i--;
            continue;
        }

        res.push([r,g,b]);
    }
    return res;
}

function createCanvas(w,h){
    const c = document.createElement('canvas');
    c.width = w;
    c.height = h;
    return c;
}

function createCanvasStar(){
    const c = createCanvas(50,50);
    const ctx = c.getContext('2d');
    ctx.fillStyle = '#ffffff';
    ctx.shadowColor = '#ffffff';
    ctx.shadowBlur = 12;
    ctx.arc(25,25,10,0,Math.PI*2);
    ctx.fill();
    return c;
}

function createStars(){
    const geometry = new THREE.BufferGeometry(), positions_ = [], colors_ = [];

    for ( let i = 0; i < options.stars_num; i ++ ) {
        let x = R.random_num(-distance*2, distance*2);
        let y = R.random_num(-distance*2, distance*2);
        let z = R.random_num(-distance, -distance/3);
        positions_.push( ...[x,y,z] );

        let c = R.random_choice([R.random_choice(global_colors),[1,1,1]]);
        colors_.push(c[0],c[1],c[2]);
    }

    setAttribute(geometry, 'position', positions_, 3);
    setAttribute(geometry, 'color', colors_, 3);

    const c = new THREE.CanvasTexture(createCanvasStar() , THREE.UVMapping);
    const material = new THREE.PointsMaterial( {
        size: R.random_num(0,0.2)*M,
        vertexColors: true,
        map: c,
        transparent: true,
        alphaTest: 0.1,
        opacity: 0.5,
        side: THREE.DoubleSide,
    } );
    stars = new THREE.Points( geometry, material );

    scene.add( stars );
}

function setAttribute(g, type, arr, v){
    g.setAttribute( type, new THREE.BufferAttribute( new Float32Array( arr ), v ) );
}

function getPoint(gem_type){
    let x,y,z;
    const m = (gem_type==='cube' || gem_type==='sphere') ? 0.9 : 1;
    switch (gem_type) {
        case 'sphere':
        case 'sphere_x':
        case 'sphere_xy':
            let theta = R.random_num(0,Math.PI*2);
            let phi = R.random_num(0,Math.PI);
            let r = R.random_num((gem_max_size/2)*m,gem_max_size*m);
            x = r * Math.sin(phi) * Math.cos(theta) * multiPoint(gem_type, 'x');
            y = r * Math.sin(phi) * Math.sin(theta) * multiPoint(gem_type, 'y');
            z = r * Math.cos(phi);
            return [x,y,z];
        case 'cube':
        case 'cube_x':
        case 'cube_xy':
            let max = (gem_max_size/1.25)*m;
            x = R.random_num(-max,max) * multiPoint(gem_type, 'x');
            y = R.random_num(-max,max) * multiPoint(gem_type, 'y');
            z = R.random_num(-max,max);
            return [x,y,z];
    }
}

function multiPoint(gem_type,search){
    return (gem_type.includes(search) ? 0.5 : 1);
}

function getMaterial(p, texture){
    if(texture && options.gem_texture === 'random'){

        if(options.gem_symmetric && R.random_bool(0.1)){
            p = addParams(p, {
                bumpMap: createTexture(),
                bumpScale: R.random_dec()
            });
        } else {
            p = addParams(p, {
                roughnessMap: createTexture(),
            });
        }
    }
    return new THREE.MeshPhysicalMaterial( {
        metalness: R.random_num(0.5,1),
        roughness: options.gem_texture==='clean'?R.random_num(0.25,0.5): R.random_num(0.5,1),
        transmission:R.random_dec(),
        clearcoat: R.random_dec(),
        depthTest: true,
        depthWrite: true,
        visible: true,
        ...p
    } );
}

function canvasColors(ctx,size, c1,c2, rnd){
    if(rnd){
        c1 = R.random_choice(['#fff','#000']);
        c2 = c1==='#fff'?'#000':'#fff';
    }
    ctx.fillStyle = c1;
    ctx.fillRect(0,0,size,size);
    ctx.strokeStyle = c2;
    ctx.fillStyle = c2;
    ctx.shadowColor = c2;
    return {c1,c2};
}

function allTextures(canvas, ctx, size){
    let colors = canvasColors(ctx,size,null,null,true);
    ctx.shadowBlur = R.random_num(5,10);
    ctx.lineWidth = size*0.1;
    let list = ['frame', 'noise', 'curve', 'cross', 'circle', 'mikbaz'];
    let textures = [];
    for (let i = 0; i < R.random_int(1,2); i++) {
        let c = R.random_choice(list);
        if(!textures.includes(c)) textures.push(c);
        else --i;
    }
    for (let i = 0; i < textures.length; i++) {
        let texture = textures[i];
        switch (texture){
            case 'curve':
                for (let i = 0; i < R.random_int(3,10); i++) {
                    ctx.beginPath();
                    ctx.moveTo(R.random_num(0,size),R.random_num(0,size));
                    ctx.quadraticCurveTo(R.random_num(0,size),R.random_num(0,size),R.random_num(0,size),R.random_num(0,size));
                    ctx.stroke();
                    ctx.closePath();
                }
                break;
            case 'frame':
                ctx.fillRect(size*0.1,size*0.1,size*0.8,size*0.8);
                ctx.moveTo(size,0);
                ctx.lineTo(0, size);
                ctx.strokeStyle = colors.c1;
                ctx.shadowColor = colors.c1;
                ctx.stroke();
                break;
            case 'cross':
                for (let j = 0; j <R.random_int(1,10); j++) {
                    ctx.fillRect(0, R.random_num(0,size),size, size*0.05);
                    ctx.fillRect(R.random_num(0,size),0,size*0.05,size);
                }
                break;
            case 'noise':
                perlinNoise(canvas, ctx);
                break;
            case 'circle':
                circleTexture(ctx, size);
                break;
            case 'mikbaz':
                mikbaz(ctx, size);
                break;
        }
    }
}

function mikbaz(ctx, size){
    let colors = ['#000','#fff'];
    let index = 0;
    let p = R.random_num(0.01, 0.25);
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            if(index===0)
                index = R.random_bool(p) ? 1 : 0;
            else
                index = R.random_bool(p) ? 0 : 1;
            ctx.fillStyle = colors[index];
            ctx.fillRect(i,j,1,1);
        }
    }
}

function circleTexture(ctx, size){
    let circles = [];
    for (let i = 0; i < 1000; i++) {
        circle(circles, ctx, size);
    }
}

function circleCollide(circle, circles) {
    const offset = 1;
    for (let i = 0; i < circles.length; i++) {
        if(
            Math.abs(circles[i].x - circle.x) < (circles[i].radius + circle.radius) + offset &&
            Math.abs(circles[i].y - circle.y) < (circles[i].radius + circle.radius) + offset
        ){
            return true;
        }
    }
    return false;
}

function circle(circles, ctx, size){
    ctx.globalAlpha = R.random_dec();
    let x = R.random_num(0,size);
    let y = R.random_num(0,size);
    let radius = R.random_num(0,10);

    if(circleCollide({x,y,radius}, circles)) return;

    ctx.beginPath();
    ctx.arc(x,y,radius,0,Math.PI * 2);
    circles.push({x,y,radius});
    ctx.fill();
}

function randomNoise(canvas, g) {
    let x = 0,
        y = 0,
        width = canvas.width,
        height = canvas.height,
        alpha = R.random_int(0,255),
        imageData = g.getImageData(x, y, width, height),
        pixels = imageData.data,
        n = pixels.length,
        i = 0;
    while (i < n) {
        pixels[i++] = pixels[i++] = pixels[i++] = (R.random_dec() * 256) | 0;
        pixels[i++] = alpha;
    }
    g.putImageData(imageData, x, y);
    return canvas;
}

function perlinNoise(canvas, g) {
    let noise = randomNoise(canvas, g);
    g.save();

    let size = R.random_int(1,10),
        x = (R.random_dec() * (noise.width - size)) | 0,
        y = (R.random_dec() * (noise.height - size)) | 0;
    g.globalAlpha = 4 / size;
    g.drawImage(noise, x, y, size, size, 0, 0, canvas.width, canvas.height);
    g.restore();
}

function createTexture(){
    const size = 256;
    const c = createCanvas(size,size);
    const ctx = c.getContext('2d');
    allTextures(c, ctx, size);

    return new THREE.CanvasTexture(c, THREE.RepeatWrapping);
}

function sum(arr) {
    return arr.reduce((sum, x) => sum + x);
}

function getFace(face){
    let p1 = new THREE.Vector3(face[0][0],face[0][1], face[0][2]);
    let p2 = new THREE.Vector3(face[1][0],face[1][1], face[1][2]);
    let p3 = new THREE.Vector3(face[2][0],face[2][1], face[2][2]);
    return [p1,p2,p3];
}

function setMaxLength(face){
    let dots = getFace(face);
    let center = new THREE.Vector3();

    for (let i = 0; i <dots.length; i++) {
        let len = center.distanceTo(dots[i]);
        if(len > max_length.len){
            max_length = {
                dot: dots[i],
                len : len
            }
        }
    }
}

function isPointExist(dots,dot) {
    for (let i = 0; i < dots.length; i++) {
        if(Math.abs(sum(dots[i]) - sum(dot)) < 0.02)
            return true;
    }
    return false;
}

function getFaceNormal(face){
    let f = getFace(face);
    let t = new THREE.Triangle(f[0],f[1],f[2]);
    let res = new THREE.Vector3();
    t.getNormal(res);
    return '_'+resAbs(res.x)+resAbs(res.y)+resAbs(res.z);
}

function resAbs(normal){
    return Math.abs(normal.toFixed(2));
}

function listToMatrix(list, elementsPerSubArray) {
    var matrix = [], i, k;

    for (i = 0, k = -1; i < list.length; i++) {
        if (i % elementsPerSubArray === 0) {
            k++;
            matrix[k] = [];
        }

        matrix[k].push(list[i]);
    }

    return matrix;
}

function symGem(){
    switch (sym_type){
        case 'd':
            return getDiamond();
        case 'o':
            return getOcta();
    }
}

function getOcta(){
    return new THREE.OctahedronGeometry(gem_max_size,R.random_int(3,10)).scale(R.random_num(0.25,0.9),R.random_num(0.25,0.9),1).attributes.position.array;
}

function getDiamond(){
    const bottom = R.random_num(-gem_max_size,-gem_max_size/2);
    const res = [
        0,bottom,0,
        0,bottom*0.8,0,
        0,bottom*0.5,0,
        0,bottom*0.3,0,
    ];
    const h = R.random_num(0.3,0.5);
    const options_ = [
        [1,0],
        [R.random_num(0.8,0.9),h, 0.5],
        [R.random_num(0.3,0.6),h*2, 0.25]
    ];
    createGemCircles(res, options_, gem_max_size/1.5, R.random_choice([11,13,15,17,19]), R.random_num(gem_max_size/3,gem_max_size/2));
    return res;
}

function createGemCircles(res, options_, r, cuts, top){
    for (let i = 0; i < options_.length; i++) {
        const g_ = new THREE.CircleGeometry(r*options_[i][0], cuts*(options_[i][2]||1)).rotateX(Math.PI/2).translate(0,top*options_[i][1],0);
        res.push(...g_.attributes.position.array);
    }
}

function createGem(m){
    max_length.len = 0
    let geometry = new THREE.BufferGeometry(),
        colors = [],
        uv = [],
        gem_dots = R.random_int(20,250),
        gem_faces = gem_dots*1000,
        gem_type_ = R.random_choice([  'sphere', 'sphere_x','sphere_xy', 'cube','cube_x','cube_xy']),
        dots = [],
        d = [];

    if(options.gem_symmetric) {
        dots = listToMatrix(symGem(),3);
    } else {
        for (let i = 0; i < gem_dots; i++) {
            let p = getPoint(gem_type_);
            if(isPointExist(dots, p)) continue;
            dots.push(p);
        }
    }

    for (let i = 0; i < gem_faces; i++) {
        let a = R.random_choice(dots);
        let b = R.random_choice(dots);
        let c = R.random_choice(dots);
        let is_same_dot = a===b||a===c||b===c;
        let faceNormal = getFaceNormal([a,b,c]);
        if(is_same_dot || normals[faceNormal]){
            continue;
        }

        setMaxLength([a,b,c]);
        normals[faceNormal] = true;
        d.push(...a,...b,...c);

        let c_ = R.random_choice(global_colors);
        colors.push(c_[0],c_[1],c_[2], options.gem_opacity,c_[0],c_[1],c_[2], options.gem_opacity,c_[0],c_[1],c_[2], options.gem_opacity);

        if(options.gem_texture) uv.push(...[0,0,0,1,1,1]);
    }

    normals = {};
    setAttribute(geometry, 'position', d, 3);

    geometry.computeVertexNormals();

    setAttribute(geometry, 'color', colors, 4);

    if(options.gem_texture) setAttribute(geometry, 'uv', uv, 2);

    return {
        mesh: new THREE.Mesh(geometry, m ),
        rotate:{
            x:R.random_num(-0.0025,0.0025),
            y:R.random_num(-0.0025,0.0025),
            z:R.random_num(-0.0025,0.0025)
        }
    };
}

function addParams(a,b){
    return {...a,...b};
}

function getRandomColor(attr, opacity){
    let c = R.random_choice(global_colors);
    let c_ = new THREE.Color(c[0],c[1],c[2]);
    let m = 255;
    if(attr) return 'rgb('+c_.r*m+','+c_.g*m+','+c_.b*m+ (opacity?(','+opacity):'') +')';
    return c_;
}

function getTorus(r, torus_tube, c){
    let torus_geometry = new THREE.TorusGeometry(r ,torus_tube, 100,100);
    const torus_material = getMaterial({color: c});
    return new THREE.Mesh( torus_geometry, torus_material );
}

function getPointOnCircle(r, angle){
    return [ r * Math.cos(angle),  r * Math.sin(angle) ];
}

function multiGem(){

    let l_ = gem_max_size*2 + 1;
    let positions = shuffle([
        [0,0,0],
        [-l_,0,0],
        [l_,0,0],
        [0,l_,0],
        [0,-l_,0],
        [0,0,-l_],
        [0,0,l_],
    ]);

    group = new THREE.Group();
    const gem_m = getMaterial({
        vertexColors:true,
        side: THREE.DoubleSide,
        transparent: true
    }, true);
    const c = getRandomColor();
    for (let i = 0; i < options.gem_num; i++) {

        let gem_ = createGem(gem_m);
        let torus_ = createTorus(c);

        setPos(gem_.mesh,positions,i);
        setPos(torus_.mesh,positions,i);

        group.add(gem_.mesh);
        group.add(torus_.mesh);

        gem.push(gem_);
        torus.push(torus_);
    }
    scene.add(group);

    group.rotation.x = R.random_num(-1,1);
    group.rotation.y = R.random_num(-1,1);
    group.rotation.z = R.random_num(-1,1);
}

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
    while (currentIndex !== 0) {
        randomIndex = Math.floor(R.random_dec() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
}

function setPos(g_, p, i){
    g_.position.x = p[i][0];
    g_.position.y = p[i][1];
    g_.position.z = p[i][2];
}

function createTorus(c){
    let r_offset = ring_width*2;
    let r = max_length.len*1.2*(options.gem_symmetric&&sym_type==='d'?1.25:1);
    let torus_group = new THREE.Group();
    let mesh = getTorus(r, ring_width, c);

    rgb_light_i = 0;
    for (let i = 0; i < 359; i+=(360/lights_num)) {
        let p = getPointOnCircle(r-r_offset, Math.PI*i/180);
        let l = createLight(p[0],p[1],0,r,r);
        torus_group.add( l );
    }

    torus_group.add(mesh);

    return {
        mesh: torus_group,
        rotate:{
            x:R.random_num(-0.002,0.002),
            y:R.random_num(-0.002,0.002),
            z:R.random_num(-0.002,0.002)
        }
    };
}

function animate() {

    requestAnimationFrame( animate );

    if (setSizes() || init_) {
        init_ = false;
        const canvas = renderer.domElement;
        camera.aspect = canvas.clientWidth / canvas.clientHeight;
        camera.updateProjectionMatrix();
    }

    animateGroups();
    rotate(stars, {x:0,y:0, z: 0.001});

    renderer.render( scene, camera );
}

function animateGroups(){
    for (let i = 0; i < gem.length; i++) {
        rotate(torus[i].mesh, torus[i].rotate, true);
        rotate(gem[i].mesh, gem[i].rotate);
    }
    rotate(group, groups_rotation);
}

function rotate(t, r, isLight){
    t.rotation.x += r.x;
    t.rotation.y += r.y;
    t.rotation.z += r.z*(isLight?options.light_speed:1);
}

init();
