//background,brightness,colorsize,colorrange,texturesize,saturation
let debugmode=false;
let colordatabase=[
  [0x000000,100,2,120,30,100],

  [0x000000,100,4,90,25,100],
  [0x03020D,100,4,180,20,100],

  [0xF2EADF,20,4,90,20,100],
  [0xEEEEEE,0,4,90,15,100],
  [0xCCCCCC,10,4,90,25,100],
  [0xCCCCCC,0,4,90,25,100],

  [0x000000,100,2,120,20,0],
 
]
let colordice=Math.floor(fxrand()*colordatabase.length);
let dice=fxrand();
if(dice<0.3){
  colordice=0;
}else if(dice >=0.3 && dice < 0.5){
  colordice=1;
}else if(dice >=0.5 && dice < 0.7){
  colordice=2;
}else if(dice >=0.7 && dice < 0.8){
  colordice=3;
}else if(dice >=0.8 && dice < 0.9){
  colordice=4;
}else if(dice >=0.9 && dice < 0.95){
  colordice=5;
}else if(dice >=0.96 && dice < 0.975){
  colordice=6;
}else if(dice >=0.975 && dice < 1){
  colordice=7;
}
//colordice=0;
let colormode=colordatabase[colordice];
let shapechance=fxrand();
//phrase1,phrase2,phrase3,trackersize
let amountdatabase=[
  [800,1500,2000,120],
  [800,1800,2400,120],
  [600,1500,2400,120],
  [1000,2000,3000,120],
  [1000,2500,4000,200] 

]
dice=fxrand();
let amountdice=0;
if(dice<0.1){
  amountdice=0;
}else if(dice >=0.1 && dice < 0.5){
  amountdice=1;
}else if(dice >=0.5 && dice < 0.8){
  amountdice=2;
}else if(dice >=0.8 && dice < 0.9){
  amountdice=3;
}else if(dice >=0.9 && dice < 1){
  amountdice=4;
}

let amountmode=amountdatabase[amountdice];
let scene,camera,renderer;
let canvas,myplane,cube,goldblock;
let canvasSize;
let mytexture;
let particlesize=70;
let colorsize=colormode[2];
let materialgroupsize=particlesize*particlesize/(colorsize*10);
let pointLight;
var pp,pv,ps;
let arrtp=[];
let basehue=Math.floor(fxrand()*360);
var particles;
let dt=0;
var pavailable=[];
var dot=[];
let dotdataarray=[];
let materialarray=[];
var snapshot=false;
let desiredWidth=0,desiredHeight=0;
const vertices=new Float32Array(particlesize*particlesize*3);
const dotMap=new Int8Array(64*64);
let f=[0.0000,-0.00000,0];


var controls;

window.$fxhashFeatures = {
  "ColorMode": colordice,
  "AmountMode": amountdice,
  "BaseHue":basehue
}


  

let gpu;
if(isFxpreview==true){
  gpu = new GPU({mode: "cpu"});  
}else{
  gpu = new GPU({mode: "gpu"});  
}



const initstatic3 = gpu.createKernel(
  function(a,b,c) {
            let px=a;
            let py=b;
            let pz=c;
            return [px, py, pz];
  }
                                    
)
.setOutput([particlesize, particlesize]);

const initrandom3 = gpu.createKernel(
  function(w,h,d) {
            let px=(Math.random()-0.5)*w;
            let py=(Math.random()-0.5)*h;
            let pz=(Math.random()-0.5)*d;
            return [px, py, pz];
  }
                                    
)
.setOutput([particlesize, particlesize]);

const initrange3 = gpu.createKernel(
  function(a1,a2,b1,b2,c1,c2) {
            let px=Math.random()*(a1-a2)+a2;
            let py=Math.random()*(b1-b2)+b2;
            let pz=Math.random()*(c1-c2)+c2;
            return [px, py, pz];
  }
                                    
)
.setOutput([particlesize, particlesize]);
  
const initrandom4 = gpu.createKernel(
  function(a1,a2,a3,a4) {
            let r1=(Math.random()-0.5)*a1;
            let r2=(Math.random()-0.5)*a2;
            let r3=(Math.random()-0.5)*a3;
            let r4=(Math.random()-0.5)*a4;

            return [r1, r2, r3, r4];
  }
                                    
)
.setOutput([particlesize, particlesize]);

const updateposition = gpu.createKernel(function(p,v,s) {
            let px = p[this.thread.y][this.thread.x][0] + v[this.thread.y][this.thread.x][0]/4;
            let py = p[this.thread.y][this.thread.x][1] + v[this.thread.y][this.thread.x][1]/4;
            let pz = p[this.thread.y][this.thread.x][2] + v[this.thread.y][this.thread.x][2]/4;
            return [px, py, pz];
    })
    .setOutput([particlesize, particlesize]);

const updateff = gpu.createKernel(function(v,f,frac,dt) {
            let vx = v[this.thread.y][this.thread.x][0]*frac+f[0];
            let vy = v[this.thread.y][this.thread.x][1]*frac+f[1];
            let vz = v[this.thread.y][this.thread.x][2]*frac+f[2];
            vx*=dt;
            vy*=dt;
            vz*=dt;
            let vw = v[this.thread.y][this.thread.x][3];
            return [vx, vy, vz,vw];
    })
    .setOutput([particlesize, particlesize]);

const updateattractive = gpu.createKernel(function(p,v,s,a,asize,dt) {
      let px=p[this.thread.y][this.thread.x][0];
      let py=p[this.thread.y][this.thread.x][1];
      let pz=p[this.thread.y][this.thread.x][2];

      let vx=v[this.thread.y][this.thread.x][0];
      let vy=v[this.thread.y][this.thread.x][1];
      let vz=v[this.thread.y][this.thread.x][2];
      let vw=v[this.thread.y][this.thread.x][3];

      for(var i=0;i<asize;i++){
          let pvx = a[i][0] - px;
          let pvy = a[i][1] - py;
          let pvz = a[i][2] - pz;
          let factor=0;
          let force=0;
          let distance = Math.sqrt(pvx * pvx + pvy * pvy + pvz * pvz);
          if(vw==i){
              //force = a[i][3] * (1 / (distance * distance)); 
              force = a[i][3] * (1 / (distance * distance)); 

              if(distance<a[i][4]){
                
                //vw=Math.floor(Math.random()*asize);
                vw++;
                vw%=asize;
                vx+=(Math.random()-0.5)*0.001;
                vy+=(Math.random()-0.5)*0.001;
                vz+=(Math.random()-0.5)*0.001;
                factor=0;
              }else{
                factor=1;
              }
              vx = vx + pvx * distance * force*factor;
              vy = vy + pvy * distance * force*factor;
              vz = vz + pvz * distance * force*factor;
              vx*=dt;
              vy*=dt;
              vz*=dt;

          }else if(vw==i+1){
              //force = a[i][3] * (1 / (distance * distance)); 
              force = a[i][3] * (1 / (distance * distance))*0.98; 

              if(distance<a[i][4]){
                
                vw=Math.floor(Math.random()*asize);
                //vw++;
                //vw%=asize;
                vx+=(Math.random()-0.5)*0.00;
                vy+=(Math.random()-0.5)*0.00;
                vz+=(Math.random()-0.5)*0.00;
                factor=0;
              }else{
                factor=1;
              }
              vx = vx + pvx * distance * force*factor;
              vy = vy + pvy * distance * force*factor;
              vz = vz + pvz * distance * force*factor;
              vx*=dt;
              vy*=dt;
              vz*=dt;

          }else if(vw==i+2){
              //force = a[i][3] * (1 / (distance * distance)); 
              force = a[i][3] * (1 / (distance * distance))*0.96; 

              if(distance<a[i][4]){
                
                vw=Math.floor(Math.random()*asize);
                //vw++;
                //vw%=asize;
                vx+=(Math.random()-0.5)*0.00;
                vy+=(Math.random()-0.5)*0.00;
                vz+=(Math.random()-0.5)*0.00;
                factor=0;
              }else{
                factor=1;
              }
              vx = vx + pvx * distance * force*factor;
              vy = vy + pvy * distance * force*factor;
              vz = vz + pvz * distance * force*factor;
              vx*=dt;
              vy*=dt;
              vz*=dt;

          }else if(vw==i+3){
              //force = a[i][3] * (1 / (distance * distance)); 
              force = a[i][3] * (1 / (distance * distance))*0.92; 

              if(distance<a[i][4]){
                
                vw=Math.floor(Math.random()*asize);
                //vw++;
                //vw%=asize;
                vx+=(Math.random()-0.5)*0.00;
                vy+=(Math.random()-0.5)*0.00;
                vz+=(Math.random()-0.5)*0.00;
                factor=0;
              }else{
                factor=1;
              }
              vx = vx + pvx * distance * force*factor;
              vy = vy + pvy * distance * force*factor;
              vz = vz + pvz * distance * force*factor;
              vx*=dt;
              vy*=dt;
              vz*=dt;

          }
        
      }    
            return [vx, vy, vz,vw];
    })
    .setOutput([particlesize, particlesize]);

const updatestatus = gpu.createKernel(function(s,deltatime) {
            
            let life=s[this.thread.y][this.thread.x][0];
            if(life!=-10000){
              life -= 1;
              
            }
            let followindex = s[this.thread.y][this.thread.x][1];
            let unused = s[this.thread.y][this.thread.x][2];
            return [life, followindex, unused];
    })
    .setOutput([particlesize, particlesize]);


const generateMatrices = () => {
    const matrices = [];
    for (let j = 0; j < particlesize; j++) {
        matrices.push([]);
        for (let i = 0; i < particlesize; i++) {
                matrices[j].push([])
                matrices[j][i].push(75 + (noise(i / particlesize) - 0.5) * scale);
                matrices[j][i].push(20 + (noise(i / particlesize) - 0.5) * scale);
                matrices[j][i].push((noise(i / particlesize) - 0.5) * scale);
             
        }
    }
    return matrices;
}

function initpavailable(){
    for (let i = 0; i < particlesize; i++) {
      for (let j = 0; j < particlesize; j++) {
        pavailable.push(i*particlesize+j);
      }
    }  
}


function emitter(x,y,z,w,h,d,amount,vx1,vx2,vy1,vy2,vz1,vz2,life1,life2,dt){
  while(pavailable.length>0 && amount>0){
    current=pavailable[pavailable.length-1];
    currenti=Math.floor(current/particlesize);
    currentj=current%particlesize;
    pp[currenti][currentj][0]=(fxrand()-0.5)*w+x;
    pp[currenti][currentj][1]=(fxrand()-0.5)*h+y;
    pp[currenti][currentj][2]=(fxrand()-0.5)*d+z;
    ps[currenti][currentj][0]=fxrand()*(life1-life2)+life2;;
    pv[currenti][currentj][0]=(fxrand()*(vx1-vx2)+vx2)*dt;
    pv[currenti][currentj][1]=(fxrand()*(vy1-vy2)+vy2)*dt;
    pv[currenti][currentj][2]=(fxrand()*(vz1-vz2)+vz2)*dt;
    pv[currenti][currentj][3]=0;
    
    
    pavailable.pop();
    amount--;
  }

  
}

function cp(axis){
  return axis*(desiredWidth/8);
  
}
function setup() {
    if(windowWidth>windowHeight){
        canvasSize=windowHeight;
    }else{
        canvasSize=windowWidth;
    }
    canvas = createCanvas(canvasSize,canvasSize,WEBGL);
    //pixelDensity(1);
    let pixelRatio = window.devicePixelRatio;
    if(isFxpreview==true){
      //pixelRatio=2;
    }
    //pixelRatio=2;
    //console.log(pixelRatio);
    desiredWidth = canvasSize * pixelRatio*1 | 0;
    desiredHeight = canvasSize * pixelRatio*1 | 0;
  

    pp=initrandom3(1,1,1);
    pv=initrandom4(0,0,0,0);
    ps=initrange3(-5000,-5000,-5000,0,0,0);
    initpavailable();
    pixelDensity(1);
    

    for(var i=0;i<colorsize;i++){
      dot[i]= createGraphics(128, 128);
      dot[i].colorMode(HSB,360,50,100);
      dothue=basehue+Math.floor(fxrand()*colormode[3]);
      dothue%=360;
      dotcolor=color('hsb('+dothue+','+colormode[5]+'%,'+colormode[1]+'%)');
      dotcolor.setAlpha(8);
      //dot.background(0);
      dot[i].fill(dotcolor);  
      dot[i].stroke(dotcolor);
      dot[i].strokeWeight(colormode[4]);
      dot[i].noFill();
      if(shapechance<0.4){
          dot[i].circle(64,64,colormode[4]);
      }else if(shapechance>=0.4 && shapechance <0.6){
          dot[i].triangle(64,60,60,68,68,68);
      }else if(shapechance>=0.6 && shapechance <0.8){
          dot[i].rect(64,64,20,20,5,5);
      }else if(shapechance>=0.8 && shapechance <1){
          for(var j=0;j<2;j++){
            px=fxrand()*128;
            py=fxrand()*128;
            psize=fxrand()*2;
            dot[i].circle(px,py,psize);
          }
      }
      dot[i].loadPixels();
      
      }
    //console.log(dot.pixels);
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(45, canvasSize / canvasSize, 0.1, 10000);
    renderer = new THREE.WebGLRenderer({ canvas: defaultCanvas0,antialiasing:true,preserveDrawingBuffer: true  });
    renderer.setClearColor(colormode[0]);
    renderer.autoClear = false;
    renderer.shadowMap.enabled = true;
    renderer.shadowMapSoft = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap; 
    renderer.setSize(desiredWidth, desiredHeight, false);
    renderer.setViewport(0,0,desiredWidth,desiredHeight);
    renderer.clear();

  
  
  
    camera.position.x = cp(0);
    camera.position.y = cp(0);
    camera.position.z = cp(1);
    camera.lookAt(scene.position);
  
  
    
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute( 'position', new THREE.BufferAttribute( vertices, 3 )     );
    
    for(var i=0;i<colorsize;i++){
      geometry.addGroup(materialgroupsize*i,materialgroupsize*(i+1),i);
//      geometry.addGroup(3200,6400,1);
      
    }
  
    
    for(var i=0;i<colorsize;i++){
      dotdataarray[i]=new THREE.DataTexture(dot[i].pixels,128,128,THREE.RGBAFormat);
      dotdataarray[i].needsUpdate=true;
      materialarray[i]=new THREE.PointsMaterial( { map:dotdataarray[i], size: desiredWidth/400, sizeAttenuation: true, transparent: true } );
      
    }
    const dottexture=new THREE.DataTexture(dot[0].pixels,128,128,THREE.RGBAFormat);
    dottexture.needsUpdate = true;
    const material = new THREE.PointsMaterial( { map:dottexture, size: desiredWidth/400, sizeAttenuation: true, transparent: true } );
    //material.color.setHSL( 0.5, 0, 1.0 );

    particles = new THREE.Points( geometry, materialarray );
    //particles.sortParticles = true;
    scene.add( particles );
  
    //controls = new THREE.OrbitControls( camera, renderer.domElement );
  attrp=[];
  for(var i=0;i<amountmode[3];i++){
    attrp[i]=[];
    attrp[i].push((fxrand()-0.5)*1);
    attrp[i].push((fxrand()-0.5)*1);
    attrp[i].push((fxrand()-0.5)*1);
    attrp[i].push(0.0015);
    attrp[i].push(0.01);
    
  }
  attrp[0][0]=(fxrand()-0.5)*0.01;
  attrp[0][1]=(fxrand()-0.5)*0.01;
  attrp[0][2]=(fxrand()-0.5)*0.01;
  
  if(debugmode){
  console.log(colordice);
  console.log(amountdice);
  
  }

}

function draw(){
  if(frameCount<amountmode[0]){
    //pp=initrandom3(1,1,1);
    //pv=initrandom4(0,0,0,0);
    //ps=initrange3(-1000,-1000,0,0,0,0);
    //initpavailable();
    
    dt=1.1;
    dorender1();
  }else if(frameCount==amountmode[0]){
    pp=initrandom3(1,1,1);
    pv=initrandom4(0,0,0,0);
    //ps=initrange3(-1000,-1000,0,0,0,0);
    initpavailable();
    dt=1.001;
    dorender();
    
  }else if(frameCount>amountmode[0] &&frameCount<amountmode[1]){
    //pp=initrandom3(1,1,1);
    //pv=initrandom4(0,0,0,0);
    //ps=initrange3(-1000,-1000,0,0,0,0);
    //initpavailable();
    dt=1.001;
    dorender();
    
  }
  else if(frameCount==amountmode[1]){
    //pp=initrandom3(1,1,1);
    //pv=initrandom4(0,0,0,0);
    //ps=initrange3(-1000,-1000,0,0,0,0);
    initpavailable();
    dt=1.001;
    dorender();
    
  }else if(frameCount>amountmode[1]&&frameCount<amountmode[2]){
    //pp=initrandom3(1,1,1);
    //pv=initrandom4(0,0,0,0);
    //ps=initrange3(-1000,-1000,0,0,0,0);
    //initpavailable();
    dt=1.001;
    dorender();
    
  }

  
  else{
    if(snapshot==false){
      fxpreview();
      snapshot=true;
    }
  }
  
}

function dorender1(){
  
      emitter(attrp[0][0],attrp[0][1],attrp[0][2],0.0,0.0,0.0,100,-0.0,0.0,0.0,0.0,0.1,0.0,500,500,dt);
  // emitter-> x,y,z,w,h,d,amount,vx1,vx2,vy1,vy2,vz1,vz2,life1,life2;
    pp=updateposition(pp,pv,ps);
    f=[0,-0.0001,0];
    pv=updateff(pv,f,0.97,dt);
    for(var i=0;i<attrp.length;i++){
      attrp[i][0]+=(fxrand()-0.5)*0.005;
      attrp[i][1]+=(fxrand()-0.5)*0.005;
      attrp[i][2]+=(fxrand()-0.5)*0.005;
      //attrp[i][3]+=(fxrand()-0.5)*0.001;
      attrp[i][4]+=(fxrand()-0.5)*0.01;

    }
  //attrp -> x,y,z,force,cutoffrange
    pv=updateattractive(pp,pv,ps,attrp,attrp.length,dt);
    ps=updatestatus(ps,dt);

    updateparticles();
  
  //renderer.clear();
    //controls.update();
  //renderer.clear();
    renderer.render(scene, camera);
  
}

function dorender(){
  
      emitter(attrp[0][0],attrp[0][1],attrp[0][2],0.01,0.01,0.01,3500,-0.001,0.001,-0.001,0.001,-0.001,0.001,60000,80000,dt);
  // emitter-> x,y,z,w,h,d,amount,vx1,vx2,vy1,vy2,vz1,vz2,life1,life2;
    pp=updateposition(pp,pv,ps);
    f=[0,-0.0001,0];
    pv=updateff(pv,f,0.88,dt);
    for(var i=0;i<attrp.length;i++){
      attrp[i][0]+=(fxrand()-0.5)*0.003;
      attrp[i][1]+=(fxrand()-0.5)*0.003;
      attrp[i][2]+=(fxrand()-0.5)*0.003;
      //attrp[i][3]+=(fxrand()-0.5)*0.001;
      //attrp[i][4]+=(fxrand()-0.5)*0.001;
    attrp[i][4]=(fxrand()-0.5)*0.1;

    }
  //attrp -> x,y,z,force,cutoffrange
    pv=updateattractive(pp,pv,ps,attrp,attrp.length,dt);
    ps=updatestatus(ps,dt);

    updateparticles();
  
  //renderer.clear();
   // controls.update();
  //renderer.clear();
    renderer.render(scene, camera);
  
}
function updateparticles(){
  particles.geometry.attributes.position.needsUpdate = false;
  const positions = particles.geometry.attributes.position.array;
  particlesindex=0;
    for(var i=0;i<particlesize;i++){
      for(var j=0;j<particlesize;j++){
          if(ps[i][j][0]>0){
              positions[particlesindex++]=(pp[i][j][0]*desiredWidth/4);
              positions[particlesindex++]=(pp[i][j][1]*desiredWidth/4);
              positions[particlesindex++]=(pp[i][j][2]*desiredWidth/4); 
          }else{
              positions[particlesindex++]=-10000;
              positions[particlesindex++]=-10000;
              positions[particlesindex++]=-10000;
              pavailable.push(i*particlesize+j);
            
          }
      }
    }
  particles.geometry.attributes.position.needsUpdate = true;
  
}


function keyPressed() {
  if (keyCode === 65) {  
    saveCanvas('myCanvas', 'jpg');
  }
  if (keyCode === 66) {  
      
  }

}
