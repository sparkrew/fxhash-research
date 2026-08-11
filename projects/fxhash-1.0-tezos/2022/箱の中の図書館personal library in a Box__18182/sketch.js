let bs = [];
let concatenation = [];
const section = 4000;
let position;
let rasen;
let tlg = true;
let gene = 0;
let lamp = [];
let lamp_concatenation = [];
let wall_lamp_dai;
let wall_lamp_light;
let view_angle;
let camera_near;
let room_radius;
let seed;

function preload(){
  rasen = loadModel("date/rasen.obj");
  wall_lamp_dai = loadModel("date/wall_lamp_2.obj");
  wall_lamp_light =loadModel("date/wall_lamp_2_.obj");
}

function setup() {
  let w = min(windowWidth,windowHeight);
  createCanvas(w, w,WEBGL);
  setAttributes("alpha",false);
  pixelDensity(3);
  frameRate(6);
  seed = fxrand() * 100000;
  randomSeed(seed);
  room_radius = random(800,1400);
  view_angle = PI/3;
  camera_near = 150;
  position = createVector(0,0,0);//画面中心
  for(let i=-1; i<2; i++){
    bs = [];
    lamp = [];
    randomSeed(seed+section*i);
    drawRect(section*i-section/2,
             section*i+section/2,
             0,TWO_PI,8);
    concatenation.push(bs);
    lamp_concatenation.push(lamp);
  }
  console.log('ようこそ！あなただけの図書館へ！Welcome to your own personal library.!');
  console.log("どうも、作者のメリーさんです。Hi, I'm Mary.sann, the author.");
  console.log("マウスの位置に合わせて視線が移動するよ。The eye moves with the position of the mouse.");
  console.log("マウスのホイールで視点が前後に移動するよ。遠くから眺めたい時に動かしてみて。The mouse wheel moves the viewpoint back and forth. Move the mouse wheel when you want to look at the scene from a distance.");
  console.log("マウスのボタンを押しながらホイールを動かすと、カメラの画角（視野角）が変わるよ。ズームイン、ズームアウト。Moving the wheel while holding down the mouse button will change the camera's angle of view (field of view). Zoom in and out.");
  console.log("Rキーでカメラを初期値へリセット R key resets the camera to the default value.");
  console.log("Lキーで▶︎再生■一時停止　Press L key to ▶︎play and ■stop ");
  console.log("Sキーでキャンバスをダウンロード保存　Press S key to save canvas");
}


function draw() {
  background(0);

  if(abs(position.z) < room_radius*0.4){
    camera_near = 100;//100
  }
  if(abs(position.z) >= room_radius*0.4){
    camera_near = 900;//room_radius;
  }
  
  perspective(view_angle, width / height, camera_near, 11000);//1000,10000
  rotateX(map(mouseY,0,height,PI,-PI));
  rotateZ(map(mouseX,0,width,PI/2,-PI/2));
  
  /** */
  position.y += 20;
  if(position.y > section){
    gene++;
    reGene();
    position.y = 0;
  }
  
  specularColor(255, 218, 162);
  ambientLight("#1C2747");
  lightFalloff(map(sin(frameCount*0.1),-1,1,0.4,1), map(sin(frameCount*0.15),-1,1,0.0003,0.0007), 0);
  pointLight(250, 250, 250, 0,1000*sin(frameCount*0.07),0);
  
  push();
  translate(0,position.y,position.z);
  rotateY(-frameCount*0.05);
  //本
  //colorMode(HSB);
  concatenation[0].forEach((b) => {displaySelf_only(b[0],b[1],b[2],b[3],b[4])});
  concatenation[1].forEach((b) => {displayBookself(b[0],b[1],b[2],b[3],b[4])});
  concatenation[2].forEach((b) => {displaySelf_only(b[0],b[1],b[2],b[3],b[4])});
  //階段
  //colorMode(RGB, 255);
  specularMaterial(50,100);
  shininess(5);//数値が大きいとグラデーションの領域が広い、小さいとベタ塗り
  fill("#9F9390");//BDB2B1
  noStroke();
  for(let i=-3; i<3; i++){
    push();
    translate(0,section*i+section/2,0);
    rotateZ(PI);
    scale(room_radius*0.072,64.46,room_radius*0.072);//true:17,20.96,17,65/900
    model(rasen);
    pop();
  }
  specularMaterial(200,200);
  shininess(3);
  //照明
  for(let i=0; i<lamp_concatenation.length; i++){
    for(let j=0; j<lamp_concatenation[i].length; j++){
      noStroke();
      push();
      translate(lamp_concatenation[i][j][1].x,lamp_concatenation[i][j][1].y,lamp_concatenation[i][j][1].z);
      rotateZ(PI);
      rotateY(-PI/2);
      rotateY(lamp_concatenation[i][j][2]);
      scale(40,45,40);
      fill(0);
      model(wall_lamp_dai);
      pop();
    }
  }
  noLights();
  for(let i=0; i<lamp_concatenation.length; i++){
    for(let j=0; j<lamp_concatenation[i].length; j++){
      noStroke();
      push();
      translate(lamp_concatenation[i][j][1].x,lamp_concatenation[i][j][1].y,lamp_concatenation[i][j][1].z);
      rotateZ(PI);
      rotateY(-PI/2);
      rotateY(lamp_concatenation[i][j][2]);
      scale(40,45,40);
      fill(255,210);
      model(wall_lamp_light);
      pop();
    }
  }
  pop();
}

function reGene(){
 concatenation = [];
 lamp_concatenation = [];
   for(let i=-1; i<2; i++){
     bs = [];
     lamp = [];
     randomSeed(seed+section*i-section*gene);
     drawRect(section*i-section/2,
              section*i+section/2,
              0,TWO_PI,8);
     concatenation.push(bs);
     lamp_concatenation.push(lamp);
    }
}

function mouseWheel(event) {
  //print(event.delta);
  //move the square according to the vertical scroll amount
  //uncomment to block page scrolling
  //position.y += event.delta;
  /** */
  if (mouseIsPressed === true) {
    view_angle += event.delta*0.01;
  } else {
    position.z -= event.delta;
  }
  
  return false;
}

function keyTyped() {
  if (key === 'l' || key === 'L') {
    tlg = !tlg;
    if(tlg){
      loop();
      console.log("▶︎play")
    }else{
      noLoop();
      console.log("■stop")
    }
  }
  if (key === 's' || key === 'S') {
    saveCanvas('PersonalLibrary', 'png');
  }
  if (key === 'r' || key === 'R') {
    view_angle = PI/3;
    position.z = 0;
  }
  // uncomment to prevent any default behavior
   return false;
}

function drawRect(top_,bottom_,angle_f,angle_s,num){//_first,_second,試行回数
  let rad = room_radius;//半径
  let pos = new Array(4);
  for(let i=0; i<pos.length; i++){
    pos[i] = createVector(0,0,0);
  }
  pos[0].x = rad*cos(angle_f);
  pos[0].y = top_;
  pos[0].z = rad*sin(angle_f);
  pos[1].x = rad*cos(angle_s);
  pos[1].y = top_;
  pos[1].z = rad*sin(angle_s);
  pos[2].x = rad*cos(angle_s);
  pos[2].y = bottom_;
  pos[2].z = rad*sin(angle_s);
  pos[3].x = rad*cos(angle_f);
  pos[3].y = bottom_;
  pos[3].z = rad*sin(angle_f);

  /** 
  //描写 ここを本棚に変えちゃえば良い　distで距離から横幅求めて　
  fill(random(255));
  //noFill();
  if(num == 1){
    beginShape();
    for(let i=0; i<pos.length; i++){
      vertex(pos[i].x,pos[i].y,pos[i].z);
    }
    endShape(CLOSE);
  }
  //10
  //23
  */

  let w = dist(pos[0].x,pos[0].y,pos[0].z,pos[1].x,pos[1].y,pos[1].z);//横幅
  let h_ = dist(pos[1].x,pos[1].y,pos[1].z,pos[2].x,pos[2].y,pos[2].z);//高さ
  let d = 100;//奥行き
  let a =10;//板の厚さ
  let b = int(h_/80);//棚の数,棚の高さ５０

  //ランプ座標
  if(num == 1){
    let rand = int(random(0,8));
    if(rand == 1){
      let path = int(random(0,4));
      lamp.push([path,createVector((rad-d/2)*cos(angle_f),top_,(rad-d/2)*sin(angle_f)),angle_f]);
    }
  }  
  
  
  //本棚作る
  if(num == 1){
    let bookself = getBookself(w,h_,d,a,b);
    let angle_center = angle_f+(angle_s-angle_f)/2;
    let x  = (rad+d/3)*cos(angle_center);
    let y = top_ + (bottom_-top_)/2;
    let z = (rad+d/3)*sin(angle_center);
    let bookselfgroup = [bookself,x,y,z,-PI/2-angle_center];
    bs.push(bookselfgroup);
    //displayBookself(bookself,x,y,z,-PI/2-angle_center);
  }

  //再帰
  let angle = angle_s - angle_f;
  let arc_ = TWO_PI*rad*(angle/TWO_PI);
  let h = dist(pos[1].x,pos[1].y,pos[1].z,pos[2].x,pos[2].y,pos[2].z);//高さ
  let ratio = random(0.4,0.6);
  num--;
  if(num > 1){
    if(arc_ >= h){
      drawRect(top_,bottom_,angle_f,angle_f+(angle*ratio),num);//縦
      drawRect(top_,bottom_,angle_f+(angle*ratio),angle_s,num);
    }
    if(arc_ < h){
      drawRect(top_,top_+(h*ratio),angle_f,angle_s,num);//横
      drawRect(top_+(h*ratio),bottom_,angle_f,angle_s,num);
    }
  }
  if(num == 1){
    if(arc_ >= h){
      drawRect(top_,bottom_,angle_f,angle_f+(angle*ratio),num);//縦
      drawRect(top_,bottom_,angle_f+(angle*ratio),angle_s,num);
    }
    if(arc_ < h){//最後の描写を縦にしたいので
      drawRect(top_,bottom_,angle_f,angle_s,num);//横
    }
  }
}

function getBookself(w,h,d,a,b){//横幅、高さ、奥行き、板の厚さ、棚の数
  let books_ = new Array(b);
  let self_ = new BookSelf3D(w,h,d,a,b);//横幅、高さ、奥行き、板の暑さ、棚の数
  let l = (h-a*(b+1))/b;
  for(let i = 0; i < books_.length; i++){
    books_[i] = new Books(0,0,0,l,l*0.6,int(w/random(15,20)));//一番上の本の中心の座標(x,y,z)、本の幅最大値、最小値、本の冊数
    }
  let bookself_ = [books_,self_];//[0]=books,[1]=self
  return bookself_;
}

function displayBookself(bookself,x,y,z,rttY){
  push();
  translate(x,y,z);
  rotateY(rttY);
  bookself[1].display();
  //rotateZ(radians(-90));//本を横向きに回転させるやつclassに移した
  for(let i = 0; i < bookself[0].length; i++){
    push();
    translate(-bookself[1].w_/2+bookself[1].a_+bookself[0][i].h[0],
              -bookself[1].h_/2+bookself[1].a_/2+bookself[1].t/2+bookself[1].t*i,
              0);
    scale((bookself[1].w_-bookself[1].a_*2)/bookself[0][i].totalW,0.9,1);
    //println(w__/books[i].totalW);
    bookself[0][i].display();
    pop();
  }
  pop();
}

function displaySelf_only(bookself,x,y,z,rttY){
  push();
  translate(x,y,z);
  rotateY(rttY);
  bookself[1].display();
  pop();
}

//function mousePressed(){
  //redraw();
//}

class Books{
  constructor(x,y,z,max,min,number){
    this.locationX = x;
    this.locationY = y;
    this.locationZ = z;
    this.numberOf = number;
    this.max_ = max;
    this.w = new Array(number);
    this.h = new Array(number);
    this.d = new Array(number);
    this.yH = new Array(number);
    this.a = new Array(number);
    this.p1 =  new Array(number);
    this.c = ["#000000","#ffffff","#9c6d38","#634f38","#b08f6a",
              "#a67a49","#5e4222","#59360e","#dba15e","#CC975A",
              "#5c4a35","#ab2247","#493666","#084670","#87354b",
              "#871634","#403311","#4f7051","#42121f","#10364f"];
    //
    //book_palette;
    this.totalW = 0;
    this.yH[0] = 0;
    for(let i = 0;i < number; i++){
      this.w[i] = random(min,max);
      this.h[i] = random(min/7,max/7);//100/12 = 8..,150/7 = 21.42..
      this.d[i] = random(this.w[i]/2,this.w[i]*3/4);
      this.a[i] = this.h[i]/6;
      this.p1[i] = int(random(0,this.c.length));
    }
    this.yH[0] = 0;
    for(let i = 1; i < number; i++){
      this.yH[i] = this.h[i-1]/2 + this.h[i]/2;
    }
    for(let i = 0; i < number; i++){
      this.totalW += this.h[i]; 
    }
    //println(totalW);
    this.trlZ = random(0,40);
    this.trlZ_2 = [];
    for(let i = 0;i < number; i++){
      this.trlZ_2[i] = random(-10,10);
    }
  }
  
  display(){
    push();
    translate(this.locationX,this.locationY,this.locationZ);
    rotateZ(radians(-90));//本を横向きに回転させるやつ
    //rotateZ(PI);
    translate(0,0,this.trlZ);
    for(let i = 0; i < this.numberOf; i++){
      fill(255);
      noStroke();
      translate(0,this.yH[i],0);
      push();
      translate(0,0,this.trlZ_2[i]);
      translate(-this.max_/2+this.w[i]/2,0,0);
      box(this.w[i]-2*this.a[i],this.h[i]-2*this.a[i],this.d[i]-2*this.a[i]);
      fill(this.c[this.p1[i]]);
      noStroke();
      translate(0,0,this.d[i]/2-this.a[i]/2);
      box(this.w[i],this.h[i],this.a[i]);
      translate(0,-(this.h[i]/2-this.a[i]/2),-(this.d[i]/2-this.a[i]/2));
      box(this.w[i],this.a[i],this.d[i]);
      translate(0,this.h[i]-this.a[i],0);
      box(this.w[i],this.a[i],this.d[i]);
      pop();
    }
    pop();
  }
  
}

class BookSelf3D{
  constructor(w,h,d,a,b){//横幅、高さ、奥行き、板の暑さ、棚の数
    this.w_ = w;
    this.h_ = h;
    this.d_ = d;
    this.a_ = a;
    this.b_ = b;
    this.t = (h-a)/b;
  }
  display(){
    stroke(0);
    //fill(255);
    fill("#786056");
    //top
    push();
    translate(0,-this.h_/2+this.a_/2,0);
    box(this.w_,this.a_,this.d_);
    pop();
    //bottom
    push();
    translate(0,this.h_/2-this.a_/2,0);
    box(this.w_,this.a_,this.d_);
    pop();
    //left
    push();
    translate(-this.w_/2+this.a_/2,0,0);
    box(this.a_,this.h_-this.a_*2,this.d_);
    pop();
    //right
    push();
    translate(this.w_/2-this.a_/2,0,0);
    box(this.a_,this.h_-this.a_*2,this.d_);
    pop();
    //back
    push();
    translate(0,0,-this.d_/2+this.a_/2);
    box(this.w_-this.a_*2,this.h_-this.a_*2,this.a_);
    pop();
    //tana
    for(let i = 1; i < this.b_; i++){
      push();
      translate(0,-this.h_/2-this.a_/2+this.t*i,0);
      box(this.w_-this.a_*2,this.a_,this.d_);
      pop();
    }
  }
}