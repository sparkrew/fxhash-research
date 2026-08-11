// ----------------------------------------------fxhash Features
window.$fxhashFeatures = {}
let cycl_snow = false;
let cycl_blood = false;
let cycl_ocean = false;
let cycl_bg;

function featuresAdd(){
    featuresType = int(random(100));
    if(featuresType < 60){
        cycl_snow = true;
    }
    if(featuresType >=60 && featuresType < 90){
        cycl_ocean = true;
    }
    if(featuresType >= 90){
        cycl_blood = true;
    }
    featuresType = int(random(100));
    let BG;
    if(featuresType >= 81){
        BG = "snow";
        cycl_bg = color(random(207,234));
    }else{
        BG = "night";
        cycl_bg = color(9);
    }
    

    $fxhashFeatures["cycl_snow"] = cycl_snow;
    $fxhashFeatures["cycl_ocean"] = cycl_ocean;
    $fxhashFeatures["cycl_blood"] = cycl_blood;
    $fxhashFeatures["cycl_bg"] = BG;
}

// ----------------------------------------------fx setup
function setupBat(){
	fxsetup();
	sceneSetup();
	featuresAdd();
}

function fxsetup(){
    //fxsetup
    _r = fxrand();
    _hash = fxhash;
    //demo: check for both mobile and desktop no difference between each other
    // _r = 0.7078199288807809;
    // _hash = "ooGYcY2ve1TXjer42LKodNHzabUfYpkeVR5dGQYkgie85ZaJBoc";
    print("fxrand(0,1) : ");
    print(_r);
    print("fxhash(string) : ");
    print(_hash);
    //random noise setup
    seed = _r * 100000000;
    randomSeed(seed);
    noiseSeed(seed);
    
    //system cpu level select
    //warning: make sure theres no difference between each other
    // if(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
    //     print("system: mobile.");
    // } else { 
    //     print("system: desktop.");
    // }

    //demo using fxrand
    let _s = str(_r);
    let temp_param = int(_s[3]);
}
// ----------------------------------------------RWD & canvas & graphic setup
function sceneSetup(){
	cnvSetup();
	mainSceneSetup();
	scaleSceneSize(sceneSizeScale);
}

function cnvSetup(){
    //canvas RWD setup
    let _canvasSize = windowResize();
    cnv = createCanvas(_canvasSize, _canvasSize);
    cnv.id('ezfx');
    frameRate(60);
}

function mainSceneSetup(){
    mainScene = createGraphics(mainSceneSizeW,mainSceneSizeH);
    mainScene.background(9,random(0,9),random(0,9));
}

let winW,winH;

function windowResize(){
    winW = window.innerWidth;
    winH = window.innerHeight;
    let DIM = min(winW,winH);
    print("window DIM Size: "+DIM);
    return DIM;
}

let mainSceneDisplay;       // the scale size of the mainscene in cnv

function scaleSceneSize(_m){
	// let _w = _m * width * mainSceneSizeW / mainSceneSizeH;
	// let _h = _m * height;
    let _max = max(mainSceneSizeW,mainSceneSizeH);
    let _mul =  (_m * width) / _max ;
    let _w = mainSceneSizeW * _mul;
	let _h = mainSceneSizeH * _mul;

	mainSceneDisplay = createVector(_w, _h);
}

// ----------------------------------------------finishedLog
let finishedStepCount = 0.0;

function finishedLog(_str){
    if(finishedStepCount < finishedStep){
        finishedStepCount += 1;
        let _done = finishedStepCount/finishedStep;
        let _f = nf(_done *100,2,2);
        print(_str + " (" + _f +"%)");

        if(_done == 1){
            fxpreview();
        }
    }
}

// ----------------------------------------------interative event

function keyPressed() {
    if (key == 'S' || key == 's') {
        save(cnv, workName + "_" + fxhash + "_cnv_ezFX.png");
    } else if (key == 'D' || key == 'd') {
        save(mainScene, workName + "_" + fxhash + "_mainScene_ezFX.png");
    } 
}

function mouseClicked(){
    // save(mainScene, workName + "_" + fxhash + "_pg_ezFX.png");
}