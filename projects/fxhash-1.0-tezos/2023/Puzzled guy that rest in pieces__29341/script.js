
let bufferResX = 1024;
let bufferResY = 1024;
const displayEngine = new DisplayEngine2d();
let simulationCount = 1024;

let mainObject = new MainObject(0, 0, bufferResX, bufferResY);

// for test not to be use in normal operation
function reroll() {
}

let rakeImage;

function preload() {
    mainObject.Preload();
}

function setup() {

    // carefull when using noise be sure we get the same a specific hash
    noiseSeed(fxrand());

    mainObject.Setup();
    displayEngine.items.push(mainObject);

    displayEngine.currentFrameRate = 60;
    displayEngine.CreateCanvas(bufferResX, bufferResY);

    setInterval(timeIt, 1000);
}

let firstDrawHappen = false;
let previousMillis = 0;
let secondToOpen = 4;

function draw() {

    background("black");

    push();
    //noSmooth();
    displayEngine.DrawItems();
    pop();

    if (mainObject.enableAnimation) {
        displayEngine.Refresh();
    }

    firstDrawHappen = true;
}

let isMousePressed = false;

let enableDebugMode = true;
let slideShowReroll = false;
let showAttributes = false;

let savedData = [];
savingMode = false;

function keyPressed() {

    if (key == 's') {

        console.info("saving...");
        save(displayEngine.renderer);
    }

    if (key == 'a') {
        mainObject.enableAnimation = !mainObject.enableAnimation;
        console.debug("animation:", mainObject.enableAnimation);
    }

    if (key == 'r') {
        mainObject.enableAnimation = true;
        mainObject.mainMatrix.currentStep = 0;
    }

    if (!enableDebugMode) {
        return;
    }

    if (key == 't') {
        simulation();
    }

    displayEngine.Refresh();
}

// simulate multiple creation of the object and test the attribute distribution
function simulation() {
    console.log("test simulation");

    let tableDic = [];
    for (let i = 0; i < simulationCount; i++) {
        let testObject = new MainObject(0, 0, bufferResX, bufferResY);
        testObject.Setup();
        let attributes = testObject.GetAttributes();

        for (var name in attributes) {
            if (tableDic[name] == null) {
                tableDic[name] = {};
            }
            incrementAttribDict(tableDic[name], attributes, name);
        }
    }

    for (var name in tableDic) {
        console.log(tableDic[name]);
    }

    console.log("simulation done");
}

function incrementAttribDict(dict, attributes, name) {
    let attribValue = attributes[name];
    if (dict[attribValue] == null) {
        dict[attribValue] = 0
    }

    dict[attributes[name]]++;
}


let debugKeyCount = 0;

function keyTyped() {

    // avoid interferences
    if ($fx.isPreview) {
        return;
    }

    if (!enableDebugMode) {
        displayEngine.Refresh();
        return;
    }



    displayEngine.Refresh();
}

let actualEventType;

let launchAnimation = false;
let currentDirection = 1;
let shiftY = 0;
function mousePressed() {

    // for chrome mobile that will fire this function two times
    // with two different event type
    if (actualEventType == null && event != null) {
        actualEventType = event.type;
    }

    if (event != null && event.type != actualEventType)
        return;

    if ($fx.isPreview) {
        return;
    }

    isMousePressed = true;

    let position = displayEngine.GetMousePixelPosition();
    console.debug("Clicked " + position);
    //----
    let block1 = mainObject.mainMatrix.GetBlock(position);
    console.debug(block1);
    //----
    displayEngine.Refresh();
}

function mouseReleased() {
    isMousePressed = false;
}

function mouseDragged() {

}

function mouseMoved() {

}

function mouseWheel(event) {

    // remove to enable
    return;
    let position = displayEngine.GetMousePixelPosition();
    //console.debug("Clicked " + position);
    //----    
    let block1 = mainObject.mainMatrix.GetBlock(position);
    if (block1 != null) {
        // use the displayengine zoom is faster and don't need a refresh
        displayEngine.zoomCenter = position;
        //console.debug(mainObject.zoomCenter + " " + mainObject.zoom);
        //print(event.delta);
        if (event.delta < 0) {
            displayEngine.zoom*=2;
        }
        else {
            displayEngine.zoom/=2;
        }

        if (displayEngine.zoom < 1) {
            displayEngine.zoom = 1;
        }

        let maxZoom = mainObject.mainMatrix.columns / 8;

        if (displayEngine.zoom > maxZoom) {
            displayEngine.zoom = maxZoom;
        }

        //displayEngine.Refresh();

        //block page scrolling        
        return false;        
    }


    //move the square according to the vertical scroll amount
    //pos += event.delta;

}

function initItems(value) {

}

function windowResized() {

    displayEngine.OnWindowResized();
}

let previewCounter = 0;
let previewDone = false;

function timeIt() {
    if (!firstDrawHappen) {
        return;
    }

    if (!previewDone) {
        previewCounter++;
        // wait 3 sec
        if (previewCounter > 2) {            
            $fx.preview();
            console.debug("Preview Called");
            previewDone = true;
        }
    }
}

function GetAttributes() {
    let table = mainObject.GetAttributes();
    return table;
}

function GetParams() {
    let table = mainObject.GetParams();
    return table;
}