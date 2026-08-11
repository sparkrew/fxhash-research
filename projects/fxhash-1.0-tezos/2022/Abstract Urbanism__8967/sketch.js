////////////////////////////////////////////////
let theSize;  /// the side lenght of the canvas
let border;   /// the space from the side to the end of the drawings
let MIN_LENGHT = 1; // minimun distance between the seeds of the branches
let STYLE = 0; /// style is the index of the angles arrays
let populate = true; /// if is false it will no put any seed
let MAX_LINES = 15000; /// not to many lines

let myLines = new Array(); /// array containing all the banches


let renderAnim = false;

let canBeCaptured = false;

///// LOOK AND FEEL/////////////////////////////
  let bkgCol;
  let mainCol = new Array();
  let borderCol;

//////////////////////// border stuff
  let borderStyle = {style:''};
  let maxDistCircularBorder;

/////////////////////////////////////////////////


////////////////////////////////////////////////

let seed = 0; //seed Hash


function setup() {
  theSize = min(windowWidth, windowHeight);
  createCanvas(theSize, theSize);

  seed = int(fxrand() * 100000000); // FXHASH seed rand
  randomSeed( seed );

  let featColorPalette = setColorPalette( fxrand() );


  ///////////////////////////////////// BORDER STYLE

    if ( fxrand() > 0.4 ) {
      borderStyle.style = "square";
    } else {
      borderStyle.style = "circular";
    }
//  console.log("border style " +borderStyle.style );
//  console.log("color palette "+ featColorPalette)
    maxDistCircularBorder = width*map(fxrand(),0,1,0.1,0.45);
    /////////////////////////////////////////////////
  border = theSize * 0.05;

////////////////////////////////////////// NEARSNESS
MIN_LENGHT = map( fxrand(), 0,1, 0.1,5 );
let nearNess;
//console.log("NEARNESS " + MIN_LENGHT);
if (MIN_LENGHT < 2) {
  nearness = "tight";
}

if (MIN_LENGHT >= 2 && MIN_LENGHT < 5 ) {
  nearness = "normal";
}

if (MIN_LENGHT >= 5 && MIN_LENGHT < 10 ) {
  nearness = "sparse";
}

/////////////////////////////////////////////////////

//////////////////////////////////////// ANGLE style(property)

STYLE = Math.floor( map( fxrand(),0,1,0,7) );
//console.log(STYLE);

  let styleN = styleNames[ STYLE  ];
  //console.log("angle style "+ styleN);
if ( styleN == null ){

styleN="-----";

}
/////////////////////////////////////////

let firstSeed = initialSetup( fxrand() );
  // FX Features
  window.$fxhashFeatures = {
    "borders": borderStyle.style,
    "first seed": firstSeed,
    "style": styleN,
    "Color palette": featColorPalette,
    "Density":nearness
  };

//  initialSetup_singleCenter();
  // initialSetup_totalRandom();
  // initialSetup_singleColumn();

  ////////////////////////////////////////////////
  ///////////////////////////////////////////////
  strokeWeight(.5); // Default
}

function windowResized() {
  let s = min(windowWidth, windowHeight);
  resizeCanvas(s, s);
}

function draw() {
  background(bkgCol);

if (canBeCaptured == false){
//  console.log("myLines.lenght" + myLines.length);

if (myLines.length > 1500 ){

  fxpreview();
  canBeCaptured = true;
}

}

  for (const oneLine of myLines) {
    oneLine.draw();
    if (oneLine.stop == false) {
      oneLine.update();
      //oneLine.hitRectBorder();
    //  oneLine.hitCircularBorder();
      for (const otherLine of myLines) {

        /// if I am differnet to the OTHER
        /// if MYMOTHER is differnter to the OTHER
        /// if the OTHER MOTHER is diffent than ME
        if (oneLine != otherLine && oneLine.mother != otherLine && otherLine.mother != oneLine) {
          if (segment_intersection(oneLine.startPos, oneLine.endPos, otherLine.startPos, otherLine.endPos) != false) {
            let x = segment_intersection(oneLine.startPos, oneLine.endPos, otherLine.startPos, otherLine.endPos).x;
            let y = segment_intersection(oneLine.startPos, oneLine.endPos, otherLine.startPos, otherLine.endPos).y;
            let cros = createVector(x, y);
            //    noFill();
            ///// draw a point into intersection point for debug puposes
                  // stroke(255,0,0);
                  // point(cros.x, cros.y);

            // console.log("oneLine.id " + oneLine.id);
            // console.log("oneLine.mother.id " + oneLine.mother.id);
            // console.log("otherLine.id " + otherLine.id);


if(aproxDist(oneLine.endPos,cros) < 1){
//  oneLine.setEndPos(cros);
  oneLine.stop = true;
}
            // if (oneLine.endPos.dist(cros) < 1) {
            //   oneLine.stop = true;
            // }
            //  console.log("evviva");

          }


        } else if (oneLine.mother == otherLine) {

          //console.log("oneLine.mother == otherLine");
        } else if (oneLine == otherLine) {

          //console.log("oneLine == otherLine");
        }
      }
    }

  }

  if ( myLines.length > MAX_LINES) {
    populate = false;
    //console.log("max lines" + myLines.length);
  }
  //// automatic spawn every freq frames
  if( populate ){
  let freq = 2;
  if (frameCount % freq == 0) {
    for (let i = 0; i < myLines.length; i++) {
      if (fxrand() > 0.9) {
        addBranch(i);
      }
    }
  }

}


  // rectMode(CENTER);
  // rect(width / 2, height / 2, sizee, sizee);

/////// draw the border perimeter
//   if (  borderStyle.style == "square"){
//   noFill();
//   stroke(borderCol);
//   line(border, border, width - border, border); /// up
//   line(border, height - border, width - border, height - border); /// down
//   line(border, border, border, height - border); /// left
//   line(width - border, border, width - border, height - border); /// right
// }

}
function mouseReleased() {
//  let ran = Math.floor(fxrand() * myLines.length);
///  addBranch(ran);
}

function addBranch(index) {
  if (myLines.length > 0) {
    let currLine = myLines[index];
    if (currLine.getLength() > currLine.getMinLenght()) {

      let x1 = currLine.startPos.x;
      let y1 = currLine.startPos.y;
      let x2 = currLine.endPos.x;
      let y2 = currLine.endPos.y;

      let pos = fxrand();
      let x = lerp(x1, x2, pos);
      let y = lerp(y1, y2, pos);

      let newPos = createVector(x, y);

      for (const dCheck of myLines) {
        let startCheck = createVector(dCheck.startPos.x, dCheck.startPos.y);
        let endCheck = createVector(dCheck.endPos.x, dCheck.endPos.y);
        if (startCheck.dist(newPos) < currLine.getMinLenght() || endCheck.dist(newPos) < currLine.getMinLenght()) {
          return;
        }
      }

      let angleOpposite = (currLine.angle + 180) % 360;
      let id = myLines.length;

      let d = new Drawer(newPos, MIN_LENGHT, STYLE, currLine,borderStyle.style, id);

      if (d.angle != currLine.angle && d.angle != angleOpposite) {

        myLines.push(d);
      }


    }
  }
}


function aproxDist(a,b){
      dx = a.x - b.x;
      dy = a.y - b.y;
      return dx*dx + dy*dy;
}
