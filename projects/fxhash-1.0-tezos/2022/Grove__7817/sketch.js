let Lx,Ly,dx,Lyp;
let st;
let CCC,T;
let rndv;
const NRND = 317;
var resizing=0;
var rsz_time=0;
var rsz_delay=500;

let palettes = [];
palettes.push([[359, 31, 56], [353, 19, 97], [6,20,96], [22, 21, 92], [20, 16, 98], [28, 21, 99], [6,20,96], [347,13,96]]); // pink marble
palettes.push([[208,49,38], [205,41,59], [192,29,45], [190,14,64], [220, 9, 78], [12, 4, 45], [167,16,81], [180,7,100]]); // blue gneiss
palettes.push([[222,86,22], [208,88,29], [203,61,57], [215, 49, 74], [211,68, 93], [236,100,24], [195,85,45]]); // sapphire
palettes.push([[4,100,34],[1,96,84],[26,92,94],[34,58,89],[48,100,99],[21,100,84],[8,100,17]]); // amber
palettes.push([[43,35,28],[46,39,42],[41,27,90],[39,46,49],[39,83,90],[46,6,96],[46,15,97]]); //pyrite
palettes.push([[209, 92, 15], [197, 98, 24], [195, 79, 37], [190, 42, 64], [189, 62, 90]]); //ocean
palettes.push([[88, 36, 9],[92, 86, 12],[73, 62, 14],[32, 47, 27],[90, 70, 13],[68, 48, 44],[85, 39, 49],[63, 71, 61]]); //iquitos
//palettes.push([[331,21,31], [265,23,40], [335,26,76], [163,32,22], [210, 24, 29], [180,31, 97], [49,30,63], [180,23,90], [170,13,48]]); // abalone
//palettes.push([[222, 75, 13], [221, 59, 20], [265, 23, 31], [4, 98, 66], [26, 97, 66], [48, 99, 72]]); //sunset
//palettes.push([[297, 34, 59], [317, 51, 70], [8, 72, 83], [21, 70, 88], [12, 80, 78], [359, 81, 76] ]); //desert
palettes.push([[26, 71, 17],[26, 78, 23],[42, 68, 60], [40, 46, 60], [42, 76, 74], [37, 62, 74]]) //ivory
palettes.push([[102,41,55], [123,37,63], [94,27,65], [121,30,69], [91, 26, 67], [125,37, 63]]); // jade
palettes.push([[250,17,13], [0,0,2], [260,30,31],[298,31,38],[0,0,11],[335,35,60],[287,32,19]]); // obsidian
//palettes.push([[0,0,0],[210,65,75],[1,68,76],[41,71,95],[0,0,100],[0,0,100]]); //Mondrian

//palettes.push([[191, 44, 66],[349, 83, 69],[27, 82, 72],[359, 100, 79],[45, 85, 70]]) //flamingo
palettes.push([[191, 44, 66],[349, 83, 69],[27, 82, 72],[45, 85, 70],[359, 100, 79]]) //flamingo
//palettes.push([[81, 40, 11],[69, 26, 28],[150, 2, 81],[140, 0, 100],[70, 0, 100],[75, 30, 43],[60, 0, 100],[83, 0, 100],[85, 43, 36],[85, 0, 100],[100, 0, 100]]) //huangshan
palettes.push([[221, 40, 11],[199, 26, 28],[190, 2, 81],[220, 0, 100],[190, 0, 100],[205, 30, 43],[160, 0, 100],[183, 0, 100],[215, 43, 36],[185, 0, 100],[200, 0, 100]]) //huangshan

let ox,oy,col;
let c1,s1,c2,s2,xe,ye,ze;

function setup() {
  console.log("Grove by pepe xyz");
  console.log("https://twitter.com/pepe__xyz");
  console.log("NFT License 2.0: https://www.nftlicense.org/");
  //let dim = Math.min(window.innerWidth, window.innerHeight)
  //CCC = createCanvas(dim, dim);

  Lx = window.innerWidth, Ly = window.innerHeight;
  if (sq) { Lx=min(Lx,Ly); Ly=Lx; }
  CCC = createCanvas(Lx,Ly);
  CCC.id('canv');
  frameRate(60);
  setAttributes('premultipliedAlpha', false);

//  background(0);
  //Lx = Math.min(width,height);
  //Ly = Lx; // floor(Lx*2/3);

  Lx = width;
  Ly = height;
  Lyp=Ly/Lx;
  dx = min(Lx,Ly)/200;
  dox=0;doy=0;
doz=0;

//  pixelDensity(1);
colorMode(HSB); // work in hue-sat-brightness space. colours are specified as 4-tuples, 4th one is opacity (0 to 1)
angleMode(RADIANS);
noStroke();

  init();
//  noLoop();
}

let e,f,b;
let palj,pal,JJ;
let tt0,ll;

function init() {
  let dxp = dx/Lx;
  palj = min(palettes.length-1,floor(palettes.length*rnd()));


inv=0;
if (rnd()<0.2 ||palj==2 || palj==5) { inv = 1; }
if (palj==0 || palj==3 || palj==6 || palj==7 || palj==10) { inv=0; }

  rndv=[];
  for (let k=0; k<NRND; k++) { rndv[k] = rnd(); }

  // depth/camera params
  //let rndth = -PI/8+PI/4*rnd(); //PI/2 + -0.1 + 0.2*rnd();
  let rndth = -PI/4+PI/2*rnd();
  c1 = Math.cos(rndth); s1 = Math.sin(rndth);
  //s1= 1; c1=0;
  //c1 = 1; s1 = 0;
  c2 = -0.7; //0.70;
  s2 = 0.7; //0.70;
  ze0 = -(1.3+1.5*rnd()); // -5*Lx;//-0.2*Lx; //Lx;
  //xe = 0.1*Lx; ye=-0.02*Lx; //-0.1*Lx;//xe=0.1*Lx; ye=0.1*Lx;//xe= Lx/2; ye=Lx/9;
  xe0 = dxp*(-1+2*rnd());
  ye0 = -1/3; //dx*3*(rnd());
  //ye0=0;

  ax=rnd();
  ay=rnd();
  if (rnd()<0.3) { ax=0.1; }

  //hx = 210;
  //if (rnd()<0.5) { hx = 30; }
  hx = 360*rnd();

  lo=1;

  speckle = 0;

  rr0 = 1; //*0.7/0.5;
  Nrad0 = 12; //12;
  st = 0;

  bubbly = 1 + floor(4*rnd());
  if (rnd<0.1) { bubbly = 0; }

  // refl = 1;
  // if (rnd()<0.3) { refl=0; }
  // if (refl) { rr0 *= 0.9; }

  phase = PI/2 +PI/6*rnd();
  dt = 0.1+1.2*rnd();

  //let satfac = 1-0.2*rnd();
  pal = [];
  JJ = palettes[palj].length;
  for (let k=0; k<JJ; k++) { pal[k] = palettes[palj][k].slice(); }  // pal[k][1]*=satfac;

  clarity=0;
  if (rnd()<0.5) { clarity = 0.5*rnd(); }

  kgx = 5+7*rnd();
  kgy = 5+7*rnd();
//  gfac = 0.5+rnd();
//  Nrad0 *= gfac;

  wild= 1;
  if (rnd()<0.2) { wild=0; }
//  if (XRAY) { wild=0; }

a1 = rnd(); a2=rnd();


miny=1;maxy=-1;
let v2=[]; ze=ze0;xe=xe0;ye=ye0;

st=1;
//if (rnd()<0.3) { st=2; } // if (rnd()<0.7) { st=3; }}
sphsh = 0.5*(1-rnd()*rnd()); //0.15;
st0 = st;

rain=0; if (rnd()<0.2) { rain=1; }
if (lo) { Nrad0*=0.7; }
//lo=0;

let asym=1;
if (rnd()<0.3) { asym = rnd(); }

dc = dx/Lx; //dx;
let dv = 0.3*(0.1+0.2*rnd());
let ds = dc*(1+rnd());
let R0 = 0.8;
let curv = 0.2*rnd();

//ze0 = -0.15*Lx; //Lx;
rlight = [-2+4*rnd(),-2+4*rnd(),-2+4*rnd()];

night=0;
if (rnd()<0.3) { night=1; }
//night =1;

wf0 = 1; //0.7+rnd();
if (st==2) { wf0*=0.5; }

ze = ze0-1;
xe=1/2;
ye=0;

Pcir = 0.03+0.04*exp(rnd());
hx = 10 + 270*rnd();
if (palj==9 || (palj==11 && !inv)) { hx = 170 + (360-170)*rnd(); } //obsidian or glacier
if (inv && palj==7) { hx = 260+(360-260)*rnd(); } //surf

dlum = 0.1*0.2*0.1*rnd(); //15/a.length+4*rnd();
drfa = 3*rnd();

ne = 5+floor(3*rnd());

ne = 10;

coltik = 0.3*0.2*(1+rnd());

swap=0;LR=0;UD=0;
if (rnd()<0.7) { swap=1; }
//swap=0;

if (rnd()<0.7) { LR=1; }
if (rnd()<0.3) { UD=1; }
if (swap==0 && LR==0 && UD==0) { LR=1; }
if (swap && LR==0 && UD==0) { UD=1; }
sgn=1; if (rnd()<0.5) { sgn=-1; }

UD=0; LR=0;
swap=0;
sgn=0;

lgfac = 0.5+1.5*rnd();
lnwght = 0.2+1.5*rnd();
ang = 0.1*(exp(2*rnd()));
circo = 0.9*exp(0.5*rnd());
invscl = 0.9*exp(0.5*rnd());
//sorz = (rnd()<0.3) ? 1 : 0;

//sorz=1;

bsat = 20;
if (palj==11 || rnd()<0.15) { bsat=4;night=1; if (palj==2) { bsat=20; }}
bsat/=10;


//dlum/=3;

echo = 1; if (bsat>10 && rnd()<0.04) { echo=0; }
if (palj==9) { echo=1; night=1; dlum*=1.4; }
let distance = rnd();
if (!echo) { distance *= 0.5; }
lam=0.6+0.4*rnd();
sincol=0; if (rnd()<0.3) { sincol=1; }
ealph=0.2+0.3*rnd();

mono=0; if (rnd()<0.2) { mono=1; }
mono=0;

let brr = 0.1*exp(2*rnd());

let Nc = 8+round(8*rnd()); //12 + floor(12*rnd()); // 12; //8;
let Nb = 12*floor(4*Nc+3*Nc*rnd()); // # of branches
let colht = 12+5*rnd(); //12; // # bricks/column
ct = dc*1.5;
let locrnd = rnd()<0.3 ? 0 : rnd();

popen = rnd();

popen=0.96;

let pbr = 0.8+0.2*rnd();
//let n0 = 25;
let pstr = 0.6+0.4*rnd();
let pcirc = 0.2+0.2*rnd();
//let sun = 0.8;
//if (rnd()<0.2) { sun=1-0.5*rnd(); }
loopang = PI/2*rnd();
circ=1; if (rnd()<0.3) { circ=0; }

ds *= 2*Nc/16;

pcirc=0;
asym=1;

let sun=0.1+0.2*exp(rnd());

rfac = 2*rnd(); // controls whether first leaves are much bigger

pmushroom = 0; //0.3; //0.04;

a=[];
// create initial lines
for (let i=0; i<Nc; i++) {
       let aa=[]; aa.x=[];aa.y=[];aa.z=[];
//       aa.x[0] = 0.07 + (i/Nc+0.1*locrnd*rnd())*0.85;
       aa.x[0] = 0 + (i/Nc+0.1*locrnd*rnd())*1;//0.85;
  aa.z[0] = 0.1*rnd();
  aa.y[0] = 0;
  aa.v = [];
  let vv = [0,1,0]; //if (rnd()>asym) { vv=vecscl(vv,-1); }
  aa.v[0] = rot3d(rot3d(vv,[1,0,0],curv*rnd()),[0,0,1],curv*rnd()); //[0,1,0];
  let n = colht+1;
  if (rnd()<pmushroom) { aa.mush=1; n = 5; } else { aa.mush=0; }
  for (let k=1; k<n; k++) {
    ds *= exp(-0.5+rnd());
    ds = min(max(0.3*dc,ds),5*dc);
    aa.x[k] = aa.x[k-1]+aa.v[k-1][0]*ds;
    aa.y[k] = aa.y[k-1]+aa.v[k-1][1]*ds;
    aa.z[k] = aa.z[k-1]+aa.v[k-1][2]*ds;
    aa.v[k] = unit(sumArrays(aa.v[k-1],vecscl([-0.5+rnd(),-0.5+rnd(),-0.5+rnd()],dv)));
  }
  aa.xav = aa.x[floor(n/2)];
  aa.yav = aa.y[floor(n/2)];
  aa.zav = aa.z[floor(n/2)];
  aa.open = 1; if (aa.mush) { aa.open=0; }
  aa.R = R0*(1+rnd());
  aa.treeid = i;
  aa.gen = 1;
  a.push(aa);
}

// now branch

let angrot1 = -0.03+0.06*rnd();
let angrot2 = 10*(-0.03+0.06*rnd());
let angrot3 = 10*(-0.01+0.02*rnd());

let canopy = 0.2;

let Rmin = 0.2;
let ncirc=0;
nbr = 0;
let nopen = Nc;
//while ((narch<Nb) && (nopen>2)) {
let rndvec = 2*[-0.5+rnd(),-0.5+rnd(),-0.5+rnd()];
while ((nbr<Nb) && (nopen>2)) {
  let lam = 0.9; //0.3*rnd();
  rndvec = sumArrays(vecscl([-0.5+rnd(),-0.5+rnd(),-0.5+rnd()],lam),vecscl(rndvec,1-lam));
  let i1 = floor(rnd()*a.length);
//  if (a[i1].R>Rmin && a[i1].open==1) {
    if (a[i1].open==1) {
    let aa=[]; aa.x=[];aa.y=[];aa.z=[];aa.v = [];
    aa.treeid = a[i1].treeid;
    aa.gen = a[i1].gen+1;
    if (rnd()<popen) { a[i1].open = 0; nopen--; }
    let nn = a[i1].x.length-1;
    aa.x[0] = a[i1].x[nn]; aa.y[0] = a[i1].y[nn]; aa.z[0] = a[i1].z[nn];
    //aa.v[0] = rot3d(rot3d([0,1,0],[1,0,0],0.1*rnd()),[0,0,1],0.1*rnd());
    //aa.v[0] = rot3d([0,1,0],[0,0,1],0.3*rnd());
//    let vv = [0,1,0]; if (rnd()>asym) { vv=vecscl(vv,-1); }
    let vv = sumArrays(vecscl(a[i1].v[nn],1-sun),vecscl([0,1,0],sun));
    if (rnd()<pstr) { aa.v[0] = rot3d(vv,[0,0,1],angrot1); } else {
    aa.v[0] = rot3d(a[i1].v[a[i1].v.length-1],[0,0,1],angrot2);
    aa.v[0] = unit(sumArrays(aa.v[0],[0,-0.1,0]));
    angrot1 += 0.1*(-0.025+0.05*rnd());
    angrot2 += 0.1*(-0.025+0.05*rnd());
    }
    if (rnd()<pbr) {
      //branch
      let vv = rot3d(aa.v[0],[0,0,1],angrot3*rnd());
      angrot3 += -0.1+0.2*rnd();
      let bb=[]; bb.x=[];bb.y=[];bb.z=[];bb.v=[];
      bb.treeid=a[i1].treeid;
      bb.gen = a[i1].gen+1;
      bb.v[0] = unit(sumArrays(vv,[0,-0.1,0]));
      bb.x[0] = aa.x[0]+aa.v[0][0]*ds; bb.y[0] = aa.y[0]+aa.v[0][1]*ds; bb.z[0] = aa.z[0]+aa.v[0][2]*ds;
      bb.R = a[i1].R*(0.8-0.6*rnd());
      let n = colht*bb.R/a[i1].R; //floor(n0*aa.R/R0);

        for (let j=1; j<n; j++) {
          ds *= exp(-0.5+rnd());
          ds = min(max(0.3*dc,ds),5*dc);
          bb.x[j] = bb.x[j-1] +bb.v[j-1][0]*ds; //*(1+bb.R);
          bb.y[j] = bb.y[j-1] +dc*bb.R +bb.v[j-1][1]*ds; //*(1+bb.R);
          bb.z[j] = bb.z[j-1] +bb.v[j-1][2]*ds; //*(1+bb.R);
          bb.v[j] = unit(sumArrays(bb.v[j-1],vecscl(rndvec,dv)));
        }


      bb.xav = bb.x[floor(n/2)];
      bb.zav = bb.z[floor(n/2)];
      bb.yav = bb.y[floor(n/2)];
    //  bb.maxy = aa.y[0]; bb.maxz = aa.z[0]; bb.maxx = aa.x[0];
      if (bb.R>Rmin) { bb.open=1; } else { bb.open = 0; }
      nopen++;
      a.push(bb);
      aa.R = sqrt(a[i1].R**2-bb.R**2);
    } else {
      aa.R = a[i1].R*0.96;
    }
    if (aa.R>Rmin) { aa.open=1; } else { aa.open = 0; }
    let n = colht; //floor(n0*aa.R/R0);
    for (let j=1; j<n; j++) {
      ds *= exp(-0.5+rnd());
      ds = min(max(0.3*dc,ds),5*dc);
      aa.x[j] = aa.x[j-1] +aa.v[j-1][0]*ds; //*(1+aa.R);
      aa.y[j] = aa.y[j-1] +dc +aa.v[j-1][1]*ds; //*(1+aa.R);
      aa.z[j] = aa.z[j-1] +aa.v[j-1][2]*ds; //*(1+aa.R);
      aa.v[j] = unit(sumArrays(aa.v[j-1],vecscl(rndvec,dv)));
    }
    aa.open=1;
    nopen++;
    aa.xav = aa.x[floor(n/2)];
    aa.zav = aa.z[floor(n/2)];
    aa.yav = aa.y[floor(n/2)];
    a.push(aa);
    nbr++;

    dc*=0.998;
  }
}

maxy=-1; miny=1;
for (let k=0; k<a.length; k++) { if (a[k].yav) { maxy=max(maxy,a[k].yav); miny=min(miny,a[k].yav);  } }

//reset min to 0 without rescaling
for (let j=0; j<a.length; j++) {
  for (let i=0; i<a[j].x.length; i++) {
//    a[j].y[i] -= miny; //(miny+maxy)/2 - (maxy-miny)/2;
    a[j].y[i] -= miny; //(miny+maxy)/2;
  }
}
// let cz = 0;

fac = 0.8/(maxy-miny);

// now add angle data
let NN=0;
for (let k=0; k<a.length; k++) {
  a[k].t1 = []; a[k].t2 = [];
  a[k].t1[0] = 0;
  for (let j=1; j<a[k].x.length; j++) {
    a[k].t1[j] = atan2(a[k].y[j]-a[k].y[j-1],a[k].x[j]-a[k].x[j-1])-PI/2;
    a[k].t2[j-1] = a[k].t1[j];
  }
  NN+= a[k].x.length;
//  a[k].t2[a[k].x.length-1] = (a[k].arch!=0) ? (PI*a[k].arch) : 0;
}
// maxz=0;
// for (let k=0; k<a.length; k++) { maxz=max(maxz,a[k].maxz); }

// shuffle tree order
let mm=[];
for (let i=0; i<Nc; i++) {
  mm[i]=i;
  // for (let j=0; j<Nc; j++) {
  //   if (i==j) { mm[j]=i; } else { mm[j]=0; }
  // }
}
let i,j;
for (let tt=0; tt<2*Nc; tt++) {
  i = floor(Nc*rnd());
  j = floor(Nc*rnd());
  [mm[i],mm[j]] = [mm[j],mm[i]];
}
for (let k=0; k<a.length; k++) {
  a[k].treeid = mm[a[k].treeid];
}


a.sort(function(a, b) {
    return parseFloat(a.treeid) - parseFloat(b.treeid);
});

aafac=40;

// measure from projected coords
maxy=-1; miny=1;
for (let k=0; k<a.length; k++) { if (a[k].yav) {
  p1 = proj([a[k].xav,a[k].yav,a[k].zav]);
  maxy=max(maxy,p1[1]); miny=min(miny,p1[1]);
}
}
fac = 0.8/(maxy-miny);

//scalefac = (1+1.1+ze0/Lx/3)*0.8*Ly/(maxy-miny);
scalefac = fac; //0.7/(maxy-0);
ox = 1/2-xe0; oy = 1/2-ye0;
//oy = 0.93; //miny;

distance = 0; //-0.2;

scalefac*= 1.3-0.3*distance;

oy = 0.9;

// let nin = 0; let NT=0;
// for (let k=0; k<a.length; k++) {
//   for (let j=0; j<a[k].x.length-1; j++) {
//     NT++;
//     pr = proj([a[k].x[j],a[k].y[j],a[k].z[j]]);
//     //if (inscr(ox+scalefac*pr[0],oy-scalefac*pr[1])) { nin++; }
//     if (inscr(oy-scalefac*pr[1],ox+scalefac*pr[0])) { nin++; }
//   }
// }
// infrac = nin/NT;
//



let pals;
switch (palj) {
  case 0: pals = "Pink marble"; break;
  case 1: pals = "Periwinkle"; break;
  case 2: pals = "Sapphire"; break;
  case 3: pals = "Pomegranate"; break; //amber
  case 4: pals = "Canary"; break; // pyrite
  case 5: pals = "Banff"; break; //ultramarine
  case 6: pals = "Iquitos"; break; //"Abalone"; break;
  case 7: pals = "Altamira"; break; //ivory
  case 8: pals = "Jade"; break;
  case 9: pals = "Obsidian"; break;
  case 10: pals = "Flamingo"; break;
  case 11: pals = "Glacier"; break;
}
if (inv) { pals = "Inverted " + pals; }
if (inv && palj==0) { pals = "Olive"; }
if (inv && palj==1) { pals = "Peach"; }
if (inv && palj==2) { pals = "Clementine"; }
if (inv && palj==3) { pals = "Calanque"; }
if (inv && palj==4) { pals = "Lavender"; }
if (inv && palj==5) { pals = "Velvet"; }
if (inv && palj==6) { pals = "Salmon"; }
if (inv && palj==7) { pals = "Surf"; }
if (inv && palj==8) { pals = "Magnolia"; }
if (inv && palj==11) { pals = "Granite"; }

winter=0;

palse = "Spring"
if (palj==0 && !inv) { palse = "Spring"; } //never inv
if (palj==1) { palse = "Spring"; }
if (palj==2 && inv) { palse = "Autumn"; } //2 always inv
if (palj==3 && !inv) { palse = "Autumn"; } // never inv
if (palj==4) { palse = "Winter"; winter=1; }
if (palj==5 && inv) { palse = "Summer"; } //5 always inv
if (palj==6 && !inv) { palse = "Summer"; } //never inv
if (palj==7 && !inv) { palse = "Autumn"; } //never inv
if (palj==8 && !inv) { palse = "Summer"; }
if (palj==8 && inv) { palse = "Spring"; }
if (palj==9) { palse = "Summer"; }
if (palj==10 && !inv) { palse = "Autumn"; } //never inv
if (palj==11) { palse = "Winter"; winter=1; }

if (winter) { bsat *= 0.2; Pcir = 1; }

hxs="Red";
if (hx<350) { hxs = "Carmine"; }
if (hx<335) { hxs = "Crimson"; }
if (hx<315) { hxs = "Magenta"; }
if (hx<290) { hxs = "Purple"; }
if (hx<275) { hxs = "Violet"; }
if (hx<260) { hxs = "Hyacinth"; }
if (hx<245) { hxs = "Ultramarine"; }
if (hx<230) { hxs = "Blue"; }
if (hx<215) { hxs = "Azure"; }
if (hx<200) { hxs = "Cerulean blue"; }
if (hx<185) { hxs = "Cyan"; }
if (hx<170) { hxs = "Turquoise green"; }
if (hx<155) { hxs = "Emerald green"; }
if (hx<140) { hxs = "Cobalt green"; }
if (hx<125) { hxs = "Green"; }
if (hx<95) { hxs = "Chartreuse"; }
if (hx<65) { hxs = "Lemon yellow"; }
if (hx<50) { hxs = "Golden yellow"; }
if (hx<35) { hxs = "Orange"; }
if (hx<20) { hxs = "Vermilion"; }
if (hx<5) { hxs = "Red"; }

if (bsat<10) { hxs = "Starch"; }

if (night) { hxs = "Black"; }

//if (st==1) { brush = "Star" } else { brush = "Triangle"; }
brush = "Shell"

los = night ? "Night" : "Day"
window.$fxhashFeatures = {
  "Season": palse,
  "Time": los,
  "Palette": pals,
  "Canvas": hxs,
  "Number of trees": Nc,
  "Number of branches": nbr,
  "Slenderness": ceil(10*sun),
  "Stroke precision": ceil(10*(1-ang)),
  "Stroke width": ceil(100*brr)
}

//drawing_preview = 1;
tik=0;
//noLoop();
loop();
anim=0;
//redraw();
//clear();
//fill(0,0,100,99.99);
//rect(0,0,Lx,Ly);
background(0,0,100,1);
blendMode(BLEND);

step = 3;
treeid0=a[0].treeid;
AN=a.length;
}

///////////////////////////////////////
let rndi1,rndi2,rndph,rndi3;
let dgrid,PLx,PLy,mm,nn,ri,zh,zh2,zh3,zr,a,ct,dc;
let night,rlight,wf0,rain,st0,scalefac,infrac,Pcir,lgfac;
let hx,lo,rr0,Nrad0,nt,inv,dt,phase,clarity;
let gfac, kgx, kgy, melt, wild, eye, sphsh, a1, a2;
let xe0,ye0,ze0;
let kz,kx,az,ax,ay,ky,om,nbr;
let tik, dlum, drfa, rad, coltik,rcfac, swap,LR,UD, lnwght, ang, circo,bsat,invscl, sincol, ealph, ne, echo, sgn, mono, brr, lam, rfac;
let miny, maxy;

let anim, step, AN, winter;

function fblend(x) { return sin(x/(x-0.333))**2; }

let layer1;

function draw() {
  let cnt=0;
  while (tik<AN+10 && cnt<step) {
    drawk(tik);
    tik++;
    cnt++;
  }
  if (tik>=AN+10) {
    //  drawing_preview=0;
    step=1;
    noLoop(); //redraw();
    //redraw();
    if (!anim) {
      blendMode(BLEND);
      //    fill(0,0,100,0.001);
      //      rect(0,0,Lx,Ly);

// loadPixels();
// let imgN = 4*(width*pixelDensity())*(height*pixelDensity());
// let lamm;
// let bgg = [hx,bsat,100];
// for (let i = 0; i < imgN; i += 4) {
//   lamm = min(1,pixels[i+3]/255);
//   // pixels[i]     = pixels[i]*255/pixels[i+3];
//   // pixels[i + 1] = pixels[i+1]*255/pixels[i+3];
//   // pixels[i + 2] = pixels[i+2]*255/pixels[i+3];
//   pixels[i]     = (1-lamm)*red(bgg) + pixels[i]*lamm;
//   pixels[i + 1] = (1-lamm)*green(bgg) + pixels[i+1]*lamm;
//   pixels[i + 2] = (1-lamm)*blue(bgg) + pixels[i+2]*lamm;
//   pixels[i + 3] = 255; //*255/pixels[i+3]; //alpha(pink);
// }
//
// updatePixels();

    //   var ctx = canv.getContext("2d");
    // //  ctx.globalAlpha = 1;
    //
    //   layer1 = document.createElement("canvas");
    //   layer1.id('l1');
    //   layer1.width = width;   // same size as the onscreen canvas
    //   layer1.height = height;
    //   layer1.ctx = layer1.getContext("2d");
    //   layer1.ctx.globalAlpha = 1;  // draw to this layer with alpha set to 1;
    //
    //   layer1.ctx.drawImage(canv,0,0);

      // draw the offscreen layer onto the onscreen canvas at the alpha wanted
//      ctx.drawImage(layer1,0,0);

      fxpreview();
      //  saveCanvas("Grove_preview_" + fxhash + ".png");
      anim=1;
    }
    tik=0;

  }
}

let treeid,treeid0,aafac;

function drawk(k) {
  let kfac = 1-k/(0.1+a.length);
  if (k==0) {
    //clear();
    background(0,0,100,1);
    if (night) {
    fill(hx,bsat,10,1);
  } else {
    fill(hx,bsat,70,1);
  }

    rect(0,0,Lx,Ly);
    //    background(hx,bsat,100);
  }
  let dxp = dx/Lx;

  if (k<AN) { treeid = a[k].treeid; }

  hxx = mod(hx + 5*(k-AN)*coltik,360);

  if (treeid!=treeid0 || rndv[(k+1)%NRND]<0.02) {
    blendMode(MULTIPLY);
    let aa= aafac*kfac*0.1*rndv[k%NRND];
    //if (night) { fill(hxx,bsat,100-dlum,aa); } else { fill(hxx,20,100-dlum,0.1*rndv[tik%NRND]); }
    fill(hxx,bsat,100-dlum,aa);
    rect(0,0,Lx,Ly);
    //  blendMode(OVERLAY);
    //  fill(0,00,3,0.1*rndv[tik%NRND]);
    // rect(0,0,Lx,Ly);
    blendMode(BLEND);
  }
  treeid0=treeid;

  if (k<AN) {
  noStroke();

  let v,p1,p2;
  let v2;
  let v3,v4,pr;
  let rr00 = rr0;

  let vlight=rlight.slice();
  vlight = rot3d(vlight,[0,0,1],kfac*PI);

  let vv;
  let ri;
  let ri0,rr,dr,xx,rref,aref;
  let aaa,hsb,col;
  //  fill(0,0,100,0.03);
  col=[];
  let cnt=0;

  let rc=1;

  //for (let k=0; k<a.length; k++) {
  //      if (lo) { stroke(0,0,100,0.1); }
  //      if (night) { stroke(240,0,10,0.1); }

  let p0 = []; let v0=[];
  for (let j=0; j<a[k].x.length; j++) {
    if (st==0) { lo=0; }
    //        if (lo) {  if (night) { stroke(240,0,10,0.05); } else { stroke(240,0,100,0.03);  } }


    let p = [a[k].x[j],a[k].y[j],a[k].z[j]];
    let wf = a[k].R*0.6*wf0; //(1+0.3*nn[i][j]);

    let v1p=a[k].v[0]; //[0,1,0];

    let vv=proj(a[k].v[j]);

noStroke();

if (j>0) {
  fill(hxx,6,90,0.98);
  let p1 = proj(p); let p10 = proj(p0); let RR= 2*dxp*a[k].R; let ve=[-vv[1],vv[0]]; let ve0=[-v0[1],v0[0]];
  let xxx = Lx*(ox+scalefac*p1[0]);
  let yyy = Ly*(oy-scalefac*p1[1]);
  let xxx0 = Lx*(ox+scalefac*p10[0]);
  let yyy0 = Ly*(oy-scalefac*p10[1]);
  let c1 = ve[0]*RR*scalefac*Lx;
  let s1 = ve[1]*RR*scalefac*Lx;
  let c10 = ve0[0]*RR*scalefac*Lx;
  let s10 = ve0[1]*RR*scalefac*Lx;
  let c2 = 0.01*vv[0]*RR*scalefac*Lx;
  let s2 = 0.01*vv[1]*RR*scalefac*Lx;
  let c20 = 0.01*v0[0]*RR*scalefac*Lx;
  let s20 = 0.01*v0[1]*RR*scalefac*Lx;
  let xx=0.4;
  //       push();
  //       translate(xxx,yyy);
  //       rotate(atan2(vv[1],vv[0]));
  //       ellipse(0,0,2*c1,3*s1);
  // //      ellip(xxx+c1-c2,yyy+s1-s2,xxx-c1-c2,yyy-s1-s2,xxx0-c10+c2,yyy0-s10+s2,xxx0+c10+c2,yyy0+s10+s2);
  // pop();
  //quad(xxx+c1-c2,yyy+s1-s2,xxx-c1-c2,yyy-s1-s2,xxx0-c10+c20,yyy0-s10+s20,xxx0+c10+c20,yyy0+s10+s20);
  quad(xxx+c1-c2,yyy-s2,xxx-c1-c2,yyy-s2,xxx0-c10*0.9+c20*0.9,yyy0+s20,xxx0+c10*0.9+c20*0.9,yyy0+s20);
  xx = 0.2;
  fill(hxx,6,70,0.4);
  quad(xxx+c1-c2,yyy+s1-s2,xxx-c1-c2,yyy-s1-s2,xxx0-c10+c20,yyy0-s10+s20,xxx0+c10+c20,yyy0+s10+s20);
  fill(hxx,6,50,0.3);
  quad(xxx+c1-c2,yyy+s1-s2,xxx-c1-c2,yyy-s1-s2,xxx0-c10+c20/2,yyy0-s10+s20,xxx0+c10+c20/2,yyy0+s10+s20);
  if (rndv[j%NRND]<0.1) {
    fill(30,30,400*rndv[j%NRND],0.5);
    push();
    translate(xxx,yyy);
    rotate(atan2(vv[1],vv[0]));
    ellipse(0,0,1.3*c1,3*s1);
    pop();
    ellipse(xxx,yyy,2*c1,(2+rndv[j%NRND])*s1);
  }
  fill(hxx,3,60,0.3);
  quad(xxx+c1*xx-c2,yyy+s1*xx-s2,xxx-c1-c2,yyy-s1-s2,xxx0-c10+c20,yyy0-s10+s20,xxx0+c10*xx+c20,yyy0+s10*xx+s20);
  let xx0=xx;
  xx = 0.1+0.1*rndv[(j+1)%NRND];
  fill(hxx,3,40,0.1+xx+0.2*night);
  quad(xxx+c1*xx0-c2,yyy+s1*xx0-s2,xxx-c1-c2,yyy-s1-s2,xxx0-c10+c20,yyy0-s10+s20,xxx0+c10*xx0+c20,yyy0+s10*xx0+s20);
  if (RR>0.01 && rndv[(j+3)%NRND]<0.4) {
    noStroke();
    fill(30,70,60*rndv[j%NRND],0.2);
    circle(xxx-c1*xx0,yyy,Lx*RR/2);
    circle(xxx-c2*xx0,yyy,Lx*RR/2);
  }
  // mushroom, but broken
  if (a[k].mush) {
    fill(0,80,60,1);
    for (let jj=0; jj<10; jj++) {
      circle(xxx+(-0.5+rnd())*RR,yyy+(-0.5+rnd())*RR,RR);
    }
    fill(0,100,60,0.4);
    for (let jj=0; jj<10; jj++) {
      circle(xxx+(-0.5+rnd())*RR,yyy+(-0.5+rnd())*RR,RR/3);
    }
    //bezier(xxx,yyy,xxx-RR,yyy+RR/3,xxx+RR,yyy+RR/3,xxx,yyy);
  }
}
v0=vv;

if (lo) {
  //    if (night) {
  stroke(mod(hxx+180,360),50,20,0.1*lnwght*kfac);
  // } else {
  //   stroke(mod(hxx+180,360),10,100,0.15*lnwght*kfac);
  // }
}
strokeWeight(dx/10*rcfac);


    if (a[k].R < 0.4) {
    for (let th=0; th<Nrad0; th++) {
      cnt++;
      rcfac=exp(0.02*(-0.5+rndv[k%NRND]));
      rc*=rcfac;
      //          rc=min(0.3*dx,rc); rc=max(0.06*dx,rc);
      //rc=min(0.15*dxp,rc); rc=max(1*dxp,rc);
      rc=min(0.15*dxp,rc); rc=max(0.5*dxp,rc);


//      let v1 = rot3d([1,0,0],a[k].v,(rndv[(k)%NRND]+th/Nrad)*TWO_PI);
      let v1 = rot3d([1,0,0],a[k].v[j],th/Nrad0*TWO_PI);
      let v11 = sumArrays(vecscl(v1,1-lam),vecscl(v1p,lam)); v1p=v11;
      //let v11=v1;
//      v11=[0,1,0];
      ri = clarity + (1-clarity)*(0.2+0.8*rndv[mod(cnt,NRND)]);
      ri0=ri;
      let ri2 = mod(237*ri,1);
      let ri3 = mod(191*ri,1);let ri4 = mod(257*ri,1);
      fac = 10*brr*exp(ri2)*exp(rndv[mod(27+cnt,NRND)]);
      pr = sumArrays(p,vecscl(v1,rc*dxp*fac*ri*wf));
      p1 = proj(pr);
      //fac = 0.5*exp(2*ri3);
      rr = (1+rfac*kfac)*a[k].R*2*(2-clarity)*rr00*ri*5*min(6,kfac);
      aaa = 7/Nrad0/(1+2*lgfac*(0.05+ri3)*rr);
      aaa *= 2/(2-clarity);
      //if (st==0) { aaa*=0.3; }
      rref = rr;
      aref = aaa;
      if (wild) { rr *= 0.5*exp(mod(57*ri0,1)*2.5); aaa*=2*exp(-1.5*mod(57*ri0,1)*2.5); }
      dr = sumArrays(vlight,[xe,ye,ze],neg(pr));

//      xx = -0.03+0.06*ri3 - 2*min(1 - 2*kfac, dot(v11,dr)/norm3(dr)/norm3(v11)) -1+ 0.3*exp(2*ri4);
//xx = -0.03+0.06*ri3 + 1.6 + kfac*dot(v11,dr)/norm3(dr)/norm3(v11) -1+ 0.3*exp(2*ri4);
xx = -0.03+0.06*ri3 + 1.3 + 1.4*kfac*kfac*dot(v11,dr)/norm3(dr)/norm3(v11) -1+ 0.4*exp(2*ri4);
      if (xx!==xx) { xx = 0; }
      let axx = abs(xx); axx=min(1,max(0,axx));
      //          let htmp = pallerp((0.7+0.3*ri2)*axx); //rnd());
      let htmp = pallerp(max(0.0001,min(0.9999,axx))); //rnd());
      //let htmp = pal[max(0,min(JJ-1,floor(JJ*abs(xx))))];
      hsb = [0,0,100];
      if (htmp) { hsb = htmp.slice(); }
      if (inv) {hsb[0] = (hsb[0]+180)%360; }
      if (xx<0) {
        hsb[0] = (hsb[0]+180-50+100*ri0)%360;
        hsb[1]*= 0.4+ri3; //rnd(); //0.5+rnd();
        hsb[2]*= 0.9+0.2*ri4; //rnd(); //+0.5*rnd();
        aaa *= 0.5;
      }
      //vv*= 1 + (1/2/rr)**2;
      aaa*= 1+min(3,(1/2/rr)**2);

      //hsb[1] *= 1 - 5*p[2];

      if (ri3<0.2) { lo = 1-lo; }

      dt = ang*exp(ri4);
      fac = exp(3*ri3);
      rr *= 1.5*0.3*fac;
      aaa*= 1.1/(fac*fac);

      rr = min(rr,1/dxp/5);

      vv = 4*hsb[2];
      if (night) { vv*= 0.8; aaa*=0.6; }
      if (lo) { vv *= 1.1; aaa=aaa*0.6; }
      vv = min(100,vv*(1-winter*0.7));

      //    vv*= 1-abs(sin(ri3));

      if (st==0) { aaa*=0.3*circo; }

      let t1=0,t2=0; let v2;
      v2 = proj(v1);
      t1 = phase + atan2(a[k].v[j][1],a[k].v[j][0]); //+ atan2(v2[1],v2[0]);
      if (xx<0) { t1 += PI; }
      t2 = t1 + dt;
      t1 -= dt;

      //if (cnt%3*Nrad==0) { vv*=3; }

      fill(hsb[0],0.95*hsb[1]*(1-0.95*winter),vv,min(1,aaa));

      if (rain && xx>0 && st>0) {rr*=exp(ri4);}
      //if (xx>0) {rr*=1+ri4;}

      // xxx = mod(ox+scalefac*p1[0],1);
      // yyy = mod(oy-scalefac*p1[1],1);
      xxx = ox+scalefac*p1[0];
      yyy = oy-scalefac*p1[1];

      if (ri4<0.1*invscl)  { hsb[0] = (hsb[0]+180)%360; }

      if (dx*rr>0.1) {
        ccircle(Lx*xxx,Ly*yyy,dx*rr,t1,t2);

        //        pr = sumArrays([p[0],-p[1],p[2]],vecscl(v1,dxp*fac*ri*wf));
        //        p1 = proj(pr);
        if (night) { fill(hsb[0],0.95*hsb[1],0.7*vv,0.8*min(1,aaa)); } else { fill(hsb[0],0.95*hsb[1],min(100,1.1*vv),0.7*min(1,aaa)); }

        if (swap) { [xxx,yyy]=[yyy,sgn*xxx]; }
        if (LR && ri2<0.3) { xxx=1-xxx; }
        if (UD && ri3<0.3) { yyy=1-yyy; }

        ccircle(Lx*xxx,Ly*yyy,dx*rr,t1,t2);

        if (winter && rnd()<0.1) {
          fill(hsb[0],3,100,ealph*aaa);
          circle(Lx*rnd(),Ly*rnd(),dx*rr);
        }
        // echo:
        if (echo) {
          if (!mono) { hsb[0] = (hsb[0]+180)%360; }
          fill(hsb[0],0.95*hsb[1],vv,ealph*aaa);
          xxx-= ox; yyy-=oy-scalefac*(miny+maxy)/2;
          let tt = atan2(yyy,xxx);
          //let Rmax= sqrt(1/4+xxx*xxx);
          //if (abs(tt)<=PI/4 || abs(tt-PI)<=PI/4) { Rmax= sqrt(1/4+yyy*yyy); }
          let Rmax = 1.1/sqrt(2);
          let RR = Rmax-sqrt(xxx*xxx+yyy*yyy)*0.9;
          ccircle(Lx/2-Lx*RR*cos(ne*tt),Ly/2-Ly*RR*sin(ne*tt),dx*rr,t1,t2);
        }

      }

      if (st==st0 && ri4<Pcir) { st=0; }
      if (st==0 && ri2<0.3) { st=st0; }


    }

  }
    p0 = p;
  }
  // tik++;
  // if (tik>=a.length) { tik = 0; noLoop(); }

}

if (resizing && (rsz_time+rsz_delay<millis())) {
  rsz_delay=500;
  ox += dox; oy += doy;
  scalefac *= 1 + doz;
  dox=0;doy=0;
  // dim = Math.min(window.innerWidth, window.innerHeight)
  // CCC = createCanvas(dim, dim);
  // Lx = Math.min(width,height);
  // Ly = Lx;
  Lx = window.innerWidth, Ly = window.innerHeight;
  if (sq) { Lx=min(Lx,Ly); Ly=Lx; }
  CCC = createCanvas(Lx,Ly);
  Lyp=Ly/Lx;
  dx = min(Lx,Ly)/200;

  background(0,0,100,1);
  if (night) {
  fill(hx,bsat,10,1);
} else {
  fill(hx,bsat,70,1);
}
  rect(0,0,Lx,Ly);

//  background(0,0,100,1);
//  background(hx,50,3,1);
  tik=0;
//  drawing_preview=1;
  loop();
//  redraw();
//  noLoop();
  resizing=0;
}

}

function ccircle(x,y,r,t1,t2) {
  let dr;
  switch (st) {
    case 0:
    circle(x+2*sphsh*r*cos(t1),y+2*sphsh*r*sin(t1),2*r); circle(x+1.5*sphsh*r*cos(t1),y+1.5*sphsh*r*sin(t1),1.5*r); circle(x+sphsh*r*cos(t1),y+sphsh*r*sin(t1),r); circle(x+0.5*sphsh*r*cos(t1),y+0.5*sphsh*r*sin(t1),0.5*r); break;
    case 1: dr = 0.65*r; bezier(x,y,x+dr/2*cos(t1),y+dr/2*sin(t1),x-dr/2*cos(t2)+r*cos((t1+t2)/2),y-dr/2*sin(t2)+r*sin((t1+t2)/2),x+r*cos((t1+t2)/2),y+r*sin((t1+t2)/2)); bezier(x,y,x+dr*cos(t1),y+dr*sin(t1),x-dr*cos(t2)+r*cos((t1+t2)/2),y-dr*sin(t2)+r*sin((t1+t2)/2),x+r*cos((t1+t2)/2),y+r*sin((t1+t2)/2)); bezier(x,y,x+dr*cos(t2),y+dr*sin(t2),x-dr*cos(t1)+r*cos((t1+t2)/2),y-dr*sin(t1)+r*sin((t1+t2)/2),x+r*cos((t1+t2)/2),y+r*sin((t1+t2)/2)); break;
  }
}

function proj(v) {
  let x=v[0]; let y=v[1]; let z=v[2]; return [(x-xe + c1*z)*ze/(ze+z), (y-ye + s1*z)*ze/(ze+z)];
}

function norm3(v) { return Math.sqrt(v[0]*v[0] + v[1]*v[1] + v[2]*v[2]) }
function vecscl(v,k) { let w=[]; for (let i=0; i<v.length; i++) { w[i] = v[i]*k; } return w }
function neg(v) { return vecscl(v,-1); }
function cross(v,w) { let z=[]; z[0] = v[1]*w[2]-w[1]*v[2]; z[1] = v[2]*w[0]-w[2]*v[0]; z[2] = v[0]*w[1]-w[0]*v[1]; return z }
function dot(v,w) { return v[0]*w[0] + v[1]*w[1] + v[2]*w[2]; }
function rot3d(v,k,theta) { // rotation of vector v about axis k, angle t with Rodrigues formula:
  return sumArrays(vecscl(v,cos(theta)), vecscl(cross(k,v),sin(theta)), vecscl(k,dot(k,v)*(1-cos(theta))) );
}
function sumArrays(...arrays) {
  const n = arrays.reduce((max, xs) => Math.max(max, xs.length), 0);
  const re = Array.from({ length: n });
  return re.map((_, i) => arrays.map(xs => xs[i] || 0).reduce((sum, x) => sum + x, 0));
}
function mod(x,n) { return ((x%n)+n)%n }
function rnd () { return fxrand() }
//   seed ^= seed << 13
//   seed ^= seed >> 17
//   seed ^= seed << 5
//
//   let result = (((seed < 0) ? ~seed + 1 : seed) % 1000) / 1000
//   return result
// }

function pallerp(x) {
  let j = floor(x*JJ); let lam = x*JJ-j;
  if (sincol) { lam = fblend(lam); }
  return sumArrays(vecscl(pal[j],lam),vecscl(pal[mod(j+1,JJ)],1-lam));
}

function unit(v) { return vecscl(v,1/norm3(v)); }


function windowResized() {
  resizing=1;
  rsz_time=millis();
  loop();
}

let keyst = 0;
let sq = 1;
function keyPressed() {
//  if (key=="a") { anim = 1-anim; tik=0; },
//    "a" == key && (anim = 1-anim, tik=0),
"1" == key && pixelDensity(1),
"2" == key && pixelDensity(2),
"3" == key && pixelDensity(3),
"4" == key && pixelDensity(4),
"5" == key && pixelDensity(5),
"6" == key && pixelDensity(6),
"7" == key && pixelDensity(7),
"8" == key && pixelDensity(8),
"9" == key && pixelDensity(9),
"f" == key && (sq=!sq, windowResized()),
"s" == key && saveCanvas("Grove_" + fxhash + ".png"),
LEFT_ARROW == keyCode && (dox+=0.025, rsz_delay=0, windowResized()), //left arrow
UP_ARROW == keyCode && (doy+=0.025, rsz_delay=0, windowResized()), //up arrow
RIGHT_ARROW == keyCode && (dox-=0.025, rsz_delay=0, windowResized()), //right arrow
DOWN_ARROW == keyCode && (doy-=0.025, rsz_delay=0, windowResized()), //down arrow
"+" == key && (doz+=0.025, rsz_delay=0, windowResized()), // + key
"-" == key && (doz-=0.025, rsz_delay=0, windowResized()) // - key
//    "p" == key && (keyst = !keyst, keyst ? noLoop() : loop())
    32 == keyCode && (step=1, keyst = !keyst, keyst ? noLoop() : loop())
}
function mousePressed() {
  step=1, keyst = !keyst, keyst ? noLoop() : loop()
}
