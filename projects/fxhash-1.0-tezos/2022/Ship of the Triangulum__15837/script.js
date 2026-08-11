
let bufferResX = 1024
let bufferResY = 1024;
const displayEngine = new DisplayEngine2d();

let mainObject = new SpaceShipItem(0, 0, bufferResX, bufferResY);
mainObject.Generate(32, 32);

//while (mainObject.shipLevels.length != 5) {
//    mainObject = new SpaceShipItem(0, 0, bufferResX, bufferResY);
//    mainObject.Generate(32, 32);
//}

//while (mainObject.GetAttributes()["Class"] != "Frigate") {
//    mainObject = new SpaceShipItem(0, 0, bufferResX, bufferResY);
//    mainObject.Generate(32, 32);
//}

// for test not to be use in normal operation
function reroll() {
}

let rakeImage;

function preload() {
    mainObject.Preload();
}

function setup() {
    displayEngine.currentFrameRate = 60;
    displayEngine.CreateCanvas(bufferResX, bufferResY);
    displayEngine.items.push(mainObject);

    setInterval(timeIt, 1000);

    console.info(window.$fxhashFeatures);
}

let firstDrawHappen = false;
let previousMillis = 0;
let secondToOpen = 4;

function draw() {

    background("black");

    push();
    translate(0, shiftY);
    displayEngine.DrawItems();
    pop();

    firstDrawHappen = true;
}

let isMousePressed = false;

let enableDebugMode = true;
let slideShowReroll = false;
let showAttributes = false;

function keyPressed() {

    if (key == 's') {
        console.info("saving...");
        save(displayEngine.renderer);
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
    for (let i = 0; i < 1024; i++) {
        let testObject = new SpaceShipItem(0, 0, bufferResX, bufferResY);
        testObject.Generate(32, 32);
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
    if (isFxpreview) {
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

    if (isFxpreview) {
        return;
    }

    isMousePressed = true;

    let position = displayEngine.GetMousePixelPosition();
    //----
    let block = mainObject.GetBlock(position);

    //----
    //displayEngine.Refresh();
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
    if (!previewDone) {
        previewCounter++;
        // wait 3 sec
        if (previewCounter > 2) {
            fxpreview();
            previewDone = true;
        }
    }
}

function GetAttributes() {
    let table = mainObject.GetAttributes();
    return table;
}

window.$fxhashFeatures = GetAttributes();
