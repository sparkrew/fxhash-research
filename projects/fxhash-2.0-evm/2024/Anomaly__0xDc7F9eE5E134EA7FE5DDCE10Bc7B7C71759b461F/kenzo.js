console.log('%c*** Kenzo da barra **********************************','background-color: green; color: white');
console.log('%c*** Anomaly *****************************************','background-color: green; color: white');
console.log('%c*** 05 03 2024 **************************************','background-color: white; color: black');
console.log('%c*** link: *******************************************','background-color: red; color: white');
console.log('%c*** https://twitter.com/Kenzodabarra  ***************','background-color: red; color: white');

let anomalySha;
let scambio=false;
let x1=0;
let x2=0;
let luci=false;
let luci2=false;
let xx=0;
let ad=0;
let selectedNumber = null;
let popupVisible = false;

function preload(){
	anomalySha = loadShader('vert.glsl', 'frag.glsl');
}

function setup() {
	rS=int($fx.rand()*987654321);
	nS=int($fx.rand()*987654321);
	randomSeed(rS);
	noiseSeed(nS);
	console.log('randomSeed: '+rS);	
	console.log('noiseSeed: '+ nS);
	createCanvas(windowWidth, windowHeight, WEBGL);
	colore1_1=random();colore1_2=random();colore1_3=random();
	colore2_1=random();colore2_2=random();colore2_3=random();
	colore3_1=random();colore3_2=random();colore3_3=random();
	epsNormal=random(0.1,0.8);
	epsNormal = parseFloat(epsNormal.toFixed(1));
	scaleBox=int(random(8,800));
	cameraZ=int(random(0,5));
	minRadius=random(10);
	minRadius = parseFloat(minRadius.toFixed(2));
	casoupdown=[1,2,3];
	casoUD=random(casoupdown);
	la1=[0.1,0.01,0.001];
	la2=[0.5,0.05,0.005];
	la3=[0.9,0.09,0.009];
	layer1R=random(la1);
	layer2R=random(la2);
	layer3R=random(la3);
	sfumatura1=random();
	sfumatura2=random();
	returnScene=random();
	lPos=random();
	lCol=random();
	scelta=2;
}

function draw() {
if (selectedNumber){scelta=selectedNumber;}else{}
x1+=0.1+xx;
x2+=0.001+ad;
shader(anomalySha);
anomalySha.setUniform("u_resolution", [width, height]);
anomalySha.setUniform("u_scelta", scelta);
anomalySha.setUniform("u_epsNormal", epsNormal);
anomalySha.setUniform("u_tempo", x2);
anomalySha.setUniform("u_time", x1);
anomalySha.setUniform("u_mouse", [mouseX, map(mouseY, 0, height, height, 0)]);
anomalySha.setUniform("u_colore1_1", colore1_1);anomalySha.setUniform("u_colore1_2", colore1_2);anomalySha.setUniform("u_colore1_3", colore1_3);
anomalySha.setUniform("u_colore2_1", colore2_1);anomalySha.setUniform("u_colore2_2", colore2_2);anomalySha.setUniform("u_colore2_3", colore2_3);
anomalySha.setUniform("u_colore3_1", colore3_1);anomalySha.setUniform("u_colore3_2", colore3_2);anomalySha.setUniform("u_colore3_3", colore3_3);
anomalySha.setUniform("u_scaleBox", scaleBox);
anomalySha.setUniform("u_cameraZ", cameraZ);
anomalySha.setUniform("u_minRadius", minRadius);
anomalySha.setUniform("u_casoUD", casoUD);
anomalySha.setUniform("u_returnScene", returnScene);
anomalySha.setUniform("u_layer1R", layer1R);
anomalySha.setUniform("u_layer2R", layer2R);
anomalySha.setUniform("u_layer3R", layer3R);
anomalySha.setUniform("u_sfumatura1", sfumatura1);
anomalySha.setUniform("u_sfumatura2", sfumatura2);
anomalySha.setUniform("u_lPos", lPos);
anomalySha.setUniform("u_lCol", lCol);
anomalySha.setUniform("u_scambio", scambio);
anomalySha.setUniform("u_luci", luci);
anomalySha.setUniform("u_luci2", luci2);
rect(0,0,width,height);
}

function keyPressed() {
if (key === '1') {
luci = !luci;
}
if (key === '2') {
luci2 = !luci2;
}
if (key === 'w' || key === 'W') {
xx+=0.1
}
if (key === 's' || key === 'S') {
xx-=0.1
}
if (keyCode === 32) {
scambio = !scambio;
}
if (key === 'a' || key === 'A') {
ad+=0.01
}
if (key === 'd' || key === 'D') {
ad-=0.01
}	
if (key === 'q' || key === 'Q') {
document.getElementById('popup').style.display = 'block';
popupVisible = true;
 }
}

function closePopup() {
            let numberSelect = document.getElementById("numberSelect");
            selectedNumber = parseInt(numberSelect.value);
            redraw(); 
            document.getElementById('popup').style.display = 'none';
            popupVisible = false;
        }