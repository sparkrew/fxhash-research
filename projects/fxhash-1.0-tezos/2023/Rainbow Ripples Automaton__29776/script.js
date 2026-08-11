let bufferResX = 1024
let bufferResY = 1024;
const displayEngine = new DisplayEngine2d();
let simulationCount = 256;

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
    noiseSeed($fx.rand());
	
    mainObject.Setup();
    displayEngine.items.push(mainObject);

    displayEngine.currentFrameRate = 30;
    displayEngine.CreateCanvas(bufferResX, bufferResY);

    setInterval(timeIt, 1000);    
}

let firstDrawHappen = false;
let previousMillis = 0;
let secondToOpen = 4;

function draw() {

    background("black");

    push();
    displayEngine.DrawItems();
    pop();

    if (mainObject.enableAnimation && mainObject.needRefresh) {
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

        // set to the max pulse we cannot really predict the cycle
        // so best to have the jump after a long time
        saveGif('01.gif', 600, {delay: 0, units : 'frames'});
    }

    if (key == 'a') {
        mainObject.enableAnimation = !mainObject.enableAnimation;
        console.debug("animation:", mainObject.enableAnimation);
    }

    if (key == 'p') {
        mainObject.pulseEnable = !mainObject.pulseEnable;
        console.debug("pulse:", mainObject.pulseEnable);
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

function isPreview(){
    return $fx.isPreview || $fx.context === "capture";
}

function keyTyped() {

    // avoid interferences
    if (isPreview()) {
        return;
    }

    if (!enableDebugMode) {
        displayEngine.Refresh();
        return;
    }



    displayEngine.Refresh();
}

let actualEventType;

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

    if (isPreview()) {
        return;
    }

    isMousePressed = true;

    let position = displayEngine.GetMousePixelPosition();
    console.debug("Clicked " + position);
    //----
    mainObject.OnClick(position);
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