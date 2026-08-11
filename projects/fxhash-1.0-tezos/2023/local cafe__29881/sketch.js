let counter1;
let counter2;
let counter3;
let chance;
let scribble;
let pavementHeight;
let buildingHeight;
let buildingWidth;

//FONTS
let DancingScript;
let HomemadeApple;
let MsMadi;
let ArchitectsDaughter;

let backgroundCol = ["#FDF6EC", "#FDF2EC"];
let bg; // background color picker

let palette1 = [
  "#FFF785",
  "#FA7D4C",
  "#FEF1EB",
  "#B09E99",
  "#7F6862",
  "#6BAA75",
];
let palette2 = [
  "#F7BFA1",
  "#90CBC4",
  "#FDF2EC",
  "#B09E99",
  "#7F6862",
  "#003E1F",
];
let palette3 = [
  "#D9E7E8",
  "#D4340C",
  "#FCFDED",
  "#3E2F5B",
  "#261132",
  "#92C998",
];
let palette4 = [
  "#FFB199",
  "#EB6F8E",
  "#FEF1EB",
  "#706C61",
  "#2A2B2A",
  "#6BAA75",
];
let palette5 = [
  "#E9AFBF",
  "#8AA5E5",
  "#EEF2FB",
  "#706C61",
  "#2A2B2A",
  "#788038",
];
let palette6 = ["#8EA604", "#F5BB00", "#FFF8EB", "#BF3100", "#7A1F00",  "#788038"]
let palette7 = ["#D5C6E0", "#967AA1", "#F5E6E8", "#22386D", "#18284E", "#6BAA75"]
let palette8 = ["#E6B89C", "#FE938C", "#F7E8DE", "#407FA0", "#295166", "#6BAA75"]

let palettes = [
  palette1,
  palette2,
  palette3,
  palette4,
  palette5,
  palette6,
  palette7, 
  palette8
];


let col;
let c1; // color of the building
let c2; // second color of building
let c3; // glass color
let c4; // chair color
let c5; // table color
let c6; // plant


function preload() {
  randomSeed($fx.rand()*999999999999)
  DancingScript = loadFont("DancingScript-Regular.ttf");
  HomemadeApple = loadFont("HomemadeApple-Regular.ttf");
  MsMadi = loadFont("MsMadi-Regular.ttf");
  ArchitectsDaughter = loadFont("ArchitectsDaughter-Regular.ttf");
}

function setup() {
  let canvas = random(2);
  if (canvas < 1) {
    createCanvas(3000, 3000);
  } else {
    createCanvas(4000, 3000);
  }
  counter1 = 0;
  counter2 = 0;
  counter3 = 0;
  chance = random(3);

  scribble = new Scribble();
  pavementHeight = height * random(0.7, 0.8);

  bg = random(backgroundCol);

  col = random(palettes);
  c1 = col[0];
  c2 = col[1];
  c3 = col[2];
  c4 = col[3];
  c5 = col[4];
  c6 = col[5];

  background(bg);
  angleMode(DEGREES);
  rectMode(CENTER);
}

function draw() {
  if (chance < 1) {
    scenario1();
  } else if (chance > 1 && chance < 2) {
    scenario2();
  } else if (chance > 2 && chance < 3) {
    scenario3();
  }
}

function scene() {}

function scenario1() {
  // building on the right, table on the left

  if (counter1 == 1) {
    let chance = random(2);
    if (chance < 1) {
      building1();
    } else {
      building2();
    }
  }
  if (counter1 == 2) {
    pavement();
  }
  if (counter1 == 3) {
    table(width * 0.25, pavementHeight + height * 0.15);
    let chance = random(3);
    if (chance < 1) {
      leftChair(width * 0.05, pavementHeight + height * 0.04);
      rightChair(width * 0.37, pavementHeight + height * 0.05);
    } else if (chance > 1 && chance < 2) {
      leftChair(width * 0.05, pavementHeight + height * 0.04);
    } else if (chance > 2 && chance < 3) {
      rightChair(width * 0.37, pavementHeight + height * 0.05);
    }
  }
  if (counter1 == 4) {
    grain(50);
    noLoop();
  }

  counter1++;
}

function scenario2() {
  // building on the left, table on the right
  if (counter2 == 1) {
    let chance = random(2);
    if (chance < 1) {
      building1Left();
    } else {
      building2Left();
    }
  }
  if (counter2 == 2) {
    pavement();
  }
  if (counter2 == 3) {
    table(width * 0.75, pavementHeight + height * 0.15);
    let chance = random(3);
    if (chance < 1) {
      leftChair(width * 0.55, pavementHeight + height * 0.04);
      rightChair(width * 0.87, pavementHeight + height * 0.05);
    } else if (chance > 1 && chance < 2) {
      leftChair(width * 0.55, pavementHeight + height * 0.04);
    } else if (chance > 2 && chance < 3) {
      rightChair(width * 0.87, pavementHeight + height * 0.05);
    }
  }
  if (counter2 == 4) {
    grain(50);
    noLoop();
  }
  counter2++;
}

function scenario3() {
  if (counter3 == 1) {
    let chance = random(2);
    if (chance < 1) {
      building1Center();
    } else {
      building2Center();
    }
  }
  if (counter3 == 2) {
    pavement();
  }
  if (counter3 == 3) {
    let chance = random(3);
    if (chance < 1) {
      lamp(width * 0.1, pavementHeight);
      lamp(width * 0.9, pavementHeight);
    } else if (chance > 1 && chance < 2) {
      lamp(width * 0.1, pavementHeight);
    } else if (chance > 2 && chance < 3) {
      lamp(width * 0.9, pavementHeight);
    }
  }

  if (counter3 == 4) {
    let chance = random(4);
    if (chance < 1) {
      plant(width * 0.2, pavementHeight);
      plant(width * 0.8, pavementHeight);
    } else if (chance > 1 && chance < 2) {
      plant(width * 0.2, pavementHeight);
    } else if (chance > 2 && chance < 3) {
      plant(width * 0.8, pavementHeight);
    }
  }
  if (counter3 == 5) {
    grain(50);
    noLoop();
  }

  counter3++;
}
function rightChair(x, y) {
  let w = width * 0.08;
  let h = width * 0.025;
  strokeWeight(10);

  fill(c4);
  beginShape();
  vertex(x, y);
  vertex(x + w / 2, y - h);
  vertex(x + w, y);
  vertex(x + w / 2, y + h);
  endShape(CLOSE); // seat

  beginShape();
  vertex(x + w / 2, y - h);
  vertex(x + w / 2, y - h * 3);
  vertex(x + w, y - h * 2);
  vertex(x + w, y);
  endShape(); //back

  scribble.scribbleLine(x, y, x, y + h * 2); //left leg
  scribble.scribbleLine(x + w / 2, y + h, x + w / 2, y + h * 3); // middle leg
  scribble.scribbleLine(x + w, y, x + w, y + h * 2); // right leg
}

function leftChair(x, y) {
  let w = width * 0.075;
  let h = width * 0.025;
  strokeWeight(10);
  fill(c4);
  beginShape();
  vertex(x, y);
  vertex(x + w / 2, y - h);
  vertex(x + w, y);
  vertex(x + w / 2, y + h);
  endShape(CLOSE); // seat

  beginShape();
  vertex(x + w / 2, y - h);
  vertex(x + w / 2, y - h * 3);
  vertex(x, y - h * 2);
  vertex(x, y);
  endShape(); //back

  scribble.scribbleLine(x, y, x, y + h * 2); //left leg
  scribble.scribbleLine(x + w / 2, y + h, x + w / 2, y + h * 3); // middle leg
  scribble.scribbleLine(x + w, y, x + w, y + h * 2); // right leg
}

function table(x, y) {
  let h = y - width * 0.3;
  console.log(y - width * 0.4);
  stroke(0);
  strokeWeight(5);

  scribble.scribbleLine(x - width * 0.003, y, x - width * 0.003, h);
  scribble.scribbleLine(x + width * 0.0025, y, x + width * 0.0025, h); // stand

  if (width == 4000) {
    push();
    fill(c5);
    ellipse(x, y - h * 0.33, width * 0.25, width * 0.05); //table
    pop();
  } else {
    push();
    fill(c5);
    ellipse(x, y - h * 0.22, width * 0.25, width * 0.05); //table
    pop();
  }

  // umbrella
  fill(c2);
  let d = (width * 0.35) / 10;
  arc(x, h + 100, width * 0.35, width * 0.3, 180, 0);

  for (let x1 = x - width * 0.175; x1 < x + width * 0.175; x1 += d) {
    push();
    fill(bg);
    noStroke();
    scribble.scribbleCurve(
      x1,
      h + 100,
      x1 + d,
      h + 100,
      x1 + d / 2,
      h + 50,
      x1 + d / 2,
      h + 50
    );

    stroke(c3);
    scribble.scribbleLine(x1 + d / 2, h + 50, x, h - width * 0.125 + 20);
    pop();
  }

  //first and last umbrella lines
  push();
  stroke(255);

  scribble.scribbleLine(x - width * 0.1748, h - 50, x, h - width * 0.125 + 20); // first
  scribble.scribbleLine(x + width * 0.1748, h - 50, x, h - width * 0.125 + 20); // first

  pop();

  // base
  fill(c5);
  arc(x, y, width * 0.07, width * 0.05, 180, 0, CHORD);
}

function plant(x, y) {
  stroke(0);
  strokeWeight(5);
  let potH = y - height * 0.06;
  let stemH = y - height * 0.12;

  //POT

  scribble.scribbleLine(x - width * 0.02, y, x + width * 0.02, y); //base
  scribble.scribbleLine(x - width * 0.02, y, x - width * 0.03, potH); //left wall
  scribble.scribbleLine(x + width * 0.02, y, x + width * 0.03, potH); //rigth wall
  scribble.scribbleLine(x - width * 0.03, potH, x + width * 0.03, potH);

  // pot filling
  stroke("#7F6862");
  let pot = random(2);
  if (pot < 1) {
    // X filling
    let potX = [
      x - width * 0.02,
      x + width * 0.02,
      x - width * 0.03,
      x + width * 0.03,
    ];
    let potY = [y, y, potH, potH];
    scribble.scribbleFilling(potX, potY, 10, 45);
  } else {
    let potX = [
      x - width * 0.02,
      x + width * 0.02,
      x + width * 0.03,
      x - width * 0.03,
    ];
    let potY = [y, y, potH, potH];
    scribble.scribbleFilling(potX, potY, 10, 45);
  }
  //stem
  scribble.scribbleLine(x, potH, x, stemH);

  // circle
  let r = width * random(0.025, 0.04);
  push();
  stroke(c6);
  translate(x, stemH - r);
  beginShape();
  for (let a = 0; a < 360; a += 1) {
    let x1 = r * cos(a);
    let y1 = r * sin(a);
    vertex(x1, y1);
    vertex(x1 + random(-10, 10), y1 + random(-10, 10));
  }
  endShape();

  pop();
}

function lamp(x, y) {
  stroke(0);
  strokeWeight(5);
  let h = y - height * 0.3;

  scribble.scribbleLine(x - width * 0.0025, y, x - width * 0.0025, h);
  scribble.scribbleLine(x + width * 0.0025, y, x + width * 0.0025, h); // stand

  push();
  strokeWeight(10);
  scribble.scribbleLine(x - width * 0.015, h, x + width * 0.015, h); // base
  scribble.scribbleLine(
    x - width * 0.015,
    h,
    x - width * 0.025,
    h - height * 0.05
  ); // left
  scribble.scribbleLine(
    x + width * 0.015,
    h,
    x + width * 0.025,
    h - height * 0.05
  ); // right
  scribble.scribbleLine(
    x - width * 0.025,
    h - height * 0.05,
    x - width * 0.01,
    h - height * 0.07
  ); // left upper
  scribble.scribbleLine(
    x + width * 0.025,
    h - height * 0.05,
    x + width * 0.01,
    h - height * 0.07
  ); // left upper
  scribble.scribbleLine(
    x - width * 0.01,
    h - height * 0.07,
    x + width * 0.01,
    h - height * 0.07
  ); // roof
  scribble.scribbleLine(
    x - width * 0.025,
    h - height * 0.05,
    x + width * 0.025,
    h - height * 0.05
  ); // horizontal
  scribble.scribbleLine(
    x - width * 0.01,
    h - height * 0.07,
    x - width * 0.01,
    h
  );
  scribble.scribbleLine(
    x + width * 0.01,
    h - height * 0.07,
    x + width * 0.01,
    h
  );
  pop();

  fill(c5);
  arc(x, y, width * 0.05, width * 0.03, 180, 0, CHORD);
}

function building2() {
  buildingHeight = height * random(0.4, 0.5);
  let buildingWidth = width * 0.5;
  strokeWeight(5);

  let x = width * 0.7;
  let y = pavementHeight - buildingHeight / 2;

  fill(c1);
  rect(x, y, buildingWidth, buildingHeight);
  scribble.scribbleRect(x, y, buildingWidth, buildingHeight); // main block

  scribble.scribbleRect(x, y, buildingWidth * 0.99, buildingHeight * 0.99);

  fill(c1);
  rect(
    x,
    pavementHeight - buildingHeight - buildingHeight / 12,
    buildingWidth,
    buildingHeight / 6
  );
  scribble.scribbleRect(
    x,
    pavementHeight - buildingHeight - buildingHeight / 12,
    buildingWidth,
    buildingHeight / 6
  ); // sign

  //"CAFE" sign
  push();
  fill(0);
  textAlign(CENTER);

  let font = random(3);
  if (font < 1) {
    textSize(150);
    textFont(MsMadi);
    text("CAFE", x, pavementHeight - buildingHeight - buildingHeight / 20);
  } else if (font > 1 && font < 2) {
    textSize(150);
    textFont(DancingScript);
    text("CAFE", x, pavementHeight - buildingHeight - buildingHeight / 20);
  } else if (font > 2 && font < 3) {
    textSize(120);
    textFont(HomemadeApple);
    text("CAFÉ", x, pavementHeight - buildingHeight - buildingHeight / 19);
  }
  pop();

  // DOOR

  fill(c3);
  rect(
    x,
    y + buildingHeight * 0.145,
    buildingWidth * 0.25,
    buildingHeight * 0.65
  );
  scribble.scribbleRect(
    x,
    y + buildingHeight * 0.145,
    buildingWidth * 0.25,
    buildingHeight * 0.65
  ); //main door frame

  scribble.scribbleRect(
    x,
    y + buildingHeight * 0.145,
    buildingWidth * 0.21,
    buildingHeight * 0.61
  ); // smaller door frame

  //reflection
  push();
  stroke(150, 50);
  let rx3 = [
    x - buildingWidth * 0.1,
    x + buildingWidth * 0.1,
    x - buildingWidth * 0.1,
    x + buildingWidth * 0.1,
  ];
  let ry3 = [
    y - buildingHeight * 0.15,
    y - buildingHeight * 0.15,
    y + buildingHeight * 0.4,
    y + buildingHeight * 0.4,
  ];

  scribble.scribbleFilling(rx3, ry3, random(50, 100), 50);
  pop();

  scribble.scribbleRect(
    x,
    y + buildingHeight * 0.05,
    buildingWidth * 0.08,
    buildingHeight * 0.03
  ); //sign

  //"OPEN" TEXT
  push();
  fill(0);
  textAlign(CENTER);
  textSize(45);
  textFont(ArchitectsDaughter);

  text("OPEN", x, y + buildingHeight * 0.063);
  pop();
  scribble.scribbleLine(
    x - buildingWidth * 0.04,
    y + buildingHeight * 0.032,
    x,
    y
  ); // left string
  scribble.scribbleLine(
    x + buildingWidth * 0.04,
    y + buildingHeight * 0.032,
    x,
    y
  );

  //  WINDOWS

  fill(c3);
  rect(
    x - buildingWidth * 0.3,
    y - buildingHeight * 0.1,
    buildingWidth * 0.29,
    buildingHeight * 0.5
  );
  scribble.scribbleRect(
    x - buildingWidth * 0.3,
    y - buildingHeight * 0.1,
    buildingWidth * 0.29,
    buildingHeight * 0.5
  ); // left window
  scribble.scribbleRect(
    x - buildingWidth * 0.3,
    y - buildingHeight * 0.1,
    buildingWidth * 0.27,
    buildingHeight * 0.48
  );

  // reflection
  push();
  stroke(150, 50);
  let rx1 = [
    x - buildingWidth * 0.4,
    x - buildingWidth * 0.17,
    x - buildingWidth * 0.17,
    x - buildingWidth * 0.4,
  ];
  let ry1 = [
    y - buildingHeight * 0.3,
    y - buildingHeight * 0.3,
    y + buildingHeight * 0.1,
    y + buildingHeight * 0.1,
  ];

  scribble.scribbleFilling(rx1, ry1, random(50, 100), 50);
  pop();

  fill(c3);
  rect(
    x + buildingWidth * 0.3,
    y - buildingHeight * 0.1,
    buildingWidth * 0.29,
    buildingHeight * 0.5
  );
  scribble.scribbleRect(
    x + buildingWidth * 0.3,
    y - buildingHeight * 0.1,
    buildingWidth * 0.29,
    buildingHeight * 0.5
  ); // right window
  scribble.scribbleRect(
    x + buildingWidth * 0.3,
    y - buildingHeight * 0.1,
    buildingWidth * 0.27,
    buildingHeight * 0.48
  );

  //reflection
  push();
  stroke(150, 50);
  let rx2 = [
    x + buildingWidth * 0.43,
    x + buildingWidth * 0.2,
    x + buildingWidth * 0.2,
    x + buildingWidth * 0.43,
  ];
  let ry2 = [
    y - buildingHeight * 0.3,
    y - buildingHeight * 0.3,
    y + buildingHeight * 0.1,
    y + buildingHeight * 0.1,
  ];

  scribble.scribbleFilling(rx2, ry2, random(50, 100), 50);
  pop();

  // tent
  push();
  fill(bg);
  quad(
    x - buildingWidth * 0.5,
    y - buildingHeight * 0.5,
    x + buildingWidth * 0.5,
    y - buildingHeight * 0.5,
    x + buildingWidth * 0.55,
    y - buildingHeight * 0.25,
    x - buildingWidth * 0.55,
    y - buildingHeight * 0.25
  );
  pop();

  stroke(c2);
  strokeWeight(20);
  scribble.scribbleLine(
    x - buildingWidth * 0.5,
    y - buildingHeight * 0.5,
    x - buildingWidth * 0.55,
    y - buildingHeight * 0.25
  ); //left
  scribble.scribbleLine(
    x + buildingWidth * 0.5,
    y - buildingHeight * 0.5,
    x + buildingWidth * 0.55,
    y - buildingHeight * 0.25
  );
  scribble.scribbleLine(
    x - buildingWidth * 0.5,
    y - buildingHeight * 0.5,
    x + buildingWidth * 0.5,
    y - buildingHeight * 0.5
  );

  let d = x + buildingWidth * 0.55 - (x - buildingWidth * 0.55);
  let p1 = x - buildingWidth * 0.55;
  let p2 = x + buildingWidth * 0.55;
  let y1 = y - buildingHeight * 0.25;

  push();
  for (let x1 = p1; x1 < p2; x1 += d / 20) {
    fill(c2);
    scribble.scribbleCurve(
      x1,
      y1,
      x1 + d / 20,
      y1,
      x1 + d / 40,
      y1 + height * 0.02,
      x1 + d / 40,
      y1 + height * 0.02
    );
    if (x1 > x - buildingWidth * 0.55) {
      push();
      stroke(c2);
      strokeWeight(30);
      scribble.scribbleLine(x1, y1, x1, y - buildingHeight / 2);
      pop();
    }
  }
  pop();
}

function building2Center() {
  buildingHeight = height * random(0.4, 0.5);
  let buildingWidth = width * 0.5;
  strokeWeight(5);

  let x = width * 0.5;
  let y = pavementHeight - buildingHeight / 2;

  fill(c1);
  rect(x, y, buildingWidth, buildingHeight);
  scribble.scribbleRect(x, y, buildingWidth, buildingHeight); // main block

  scribble.scribbleRect(x, y, buildingWidth * 0.99, buildingHeight * 0.99);

  fill(c1);
  rect(
    x,
    pavementHeight - buildingHeight - buildingHeight / 12,
    buildingWidth,
    buildingHeight / 6
  );
  scribble.scribbleRect(
    x,
    pavementHeight - buildingHeight - buildingHeight / 12,
    buildingWidth,
    buildingHeight / 6
  ); // sign

  //"CAFE" sign
  push();
  fill(0);
  textAlign(CENTER);

  let font = random(3);
  if (font < 1) {
    textSize(150);
    textFont(MsMadi);
    text("CAFE", x, pavementHeight - buildingHeight - buildingHeight / 20);
  } else if (font > 1 && font < 2) {
    textSize(150);
    textFont(DancingScript);
    text("CAFE", x, pavementHeight - buildingHeight - buildingHeight / 20);
  } else if (font > 2 && font < 3) {
    textSize(120);
    textFont(HomemadeApple);
    text("CAFÉ", x, pavementHeight - buildingHeight - buildingHeight / 19);
  }
  pop();

  // DOOR

  fill(c3);
  rect(
    x,
    y + buildingHeight * 0.145,
    buildingWidth * 0.25,
    buildingHeight * 0.65
  );
  scribble.scribbleRect(
    x,
    y + buildingHeight * 0.145,
    buildingWidth * 0.25,
    buildingHeight * 0.65
  ); //main door frame

  scribble.scribbleRect(
    x,
    y + buildingHeight * 0.145,
    buildingWidth * 0.21,
    buildingHeight * 0.61
  ); // smaller door frame

  //reflection
  push();
  stroke(150, 50);
  let rx3 = [
    x - buildingWidth * 0.1,
    x + buildingWidth * 0.1,
    x - buildingWidth * 0.1,
    x + buildingWidth * 0.1,
  ];
  let ry3 = [
    y - buildingHeight * 0.15,
    y - buildingHeight * 0.15,
    y + buildingHeight * 0.4,
    y + buildingHeight * 0.4,
  ];

  scribble.scribbleFilling(rx3, ry3, random(50, 100), 50);
  pop();

  scribble.scribbleRect(
    x,
    y + buildingHeight * 0.05,
    buildingWidth * 0.08,
    buildingHeight * 0.03
  ); //sign

  //"OPEN" TEXT
  push();
  fill(0);
  textAlign(CENTER);
  textSize(45);
  textFont(ArchitectsDaughter);

  text("OPEN", x, y + buildingHeight * 0.063);
  pop();
  scribble.scribbleLine(
    x - buildingWidth * 0.04,
    y + buildingHeight * 0.032,
    x,
    y
  ); // left string
  scribble.scribbleLine(
    x + buildingWidth * 0.04,
    y + buildingHeight * 0.032,
    x,
    y
  );

  //  WINDOWS

  fill(c3);
  rect(
    x - buildingWidth * 0.3,
    y - buildingHeight * 0.1,
    buildingWidth * 0.29,
    buildingHeight * 0.5
  );
  scribble.scribbleRect(
    x - buildingWidth * 0.3,
    y - buildingHeight * 0.1,
    buildingWidth * 0.29,
    buildingHeight * 0.5
  ); // left window
  scribble.scribbleRect(
    x - buildingWidth * 0.3,
    y - buildingHeight * 0.1,
    buildingWidth * 0.27,
    buildingHeight * 0.48
  );

  // reflection
  push();
  stroke(150, 50);
  let rx1 = [
    x - buildingWidth * 0.4,
    x - buildingWidth * 0.17,
    x - buildingWidth * 0.17,
    x - buildingWidth * 0.4,
  ];
  let ry1 = [
    y - buildingHeight * 0.3,
    y - buildingHeight * 0.3,
    y + buildingHeight * 0.1,
    y + buildingHeight * 0.1,
  ];

  scribble.scribbleFilling(rx1, ry1, random(50, 100), 50);
  pop();

  fill(c3);
  rect(
    x + buildingWidth * 0.3,
    y - buildingHeight * 0.1,
    buildingWidth * 0.29,
    buildingHeight * 0.5
  );
  scribble.scribbleRect(
    x + buildingWidth * 0.3,
    y - buildingHeight * 0.1,
    buildingWidth * 0.29,
    buildingHeight * 0.5
  ); // right window
  scribble.scribbleRect(
    x + buildingWidth * 0.3,
    y - buildingHeight * 0.1,
    buildingWidth * 0.27,
    buildingHeight * 0.48
  );

  //reflection
  push();
  stroke(150, 50);
  let rx2 = [
    x + buildingWidth * 0.43,
    x + buildingWidth * 0.2,
    x + buildingWidth * 0.2,
    x + buildingWidth * 0.43,
  ];
  let ry2 = [
    y - buildingHeight * 0.3,
    y - buildingHeight * 0.3,
    y + buildingHeight * 0.1,
    y + buildingHeight * 0.1,
  ];

  scribble.scribbleFilling(rx2, ry2, random(50, 100), 50);
  pop();

  // tent
  push();
  fill(bg);
  quad(
    x - buildingWidth * 0.5,
    y - buildingHeight * 0.5,
    x + buildingWidth * 0.5,
    y - buildingHeight * 0.5,
    x + buildingWidth * 0.55,
    y - buildingHeight * 0.25,
    x - buildingWidth * 0.55,
    y - buildingHeight * 0.25
  );
  pop();

  stroke(c2);
  strokeWeight(20);
  scribble.scribbleLine(
    x - buildingWidth * 0.5,
    y - buildingHeight * 0.5,
    x - buildingWidth * 0.55,
    y - buildingHeight * 0.25
  ); //left
  scribble.scribbleLine(
    x + buildingWidth * 0.5,
    y - buildingHeight * 0.5,
    x + buildingWidth * 0.55,
    y - buildingHeight * 0.25
  );
  scribble.scribbleLine(
    x - buildingWidth * 0.5,
    y - buildingHeight * 0.5,
    x + buildingWidth * 0.5,
    y - buildingHeight * 0.5
  );

  let d = x + buildingWidth * 0.55 - (x - buildingWidth * 0.55);
  let p1 = x - buildingWidth * 0.55;
  let p2 = x + buildingWidth * 0.55;
  let y1 = y - buildingHeight * 0.25;

  push();
  for (let x1 = p1; x1 < p2; x1 += d / 20) {
    fill(c2);
    scribble.scribbleCurve(
      x1,
      y1,
      x1 + d / 20,
      y1,
      x1 + d / 40,
      y1 + height * 0.02,
      x1 + d / 40,
      y1 + height * 0.02
    );
    if (x1 > x - buildingWidth * 0.55) {
      push();
      stroke(c2);
      strokeWeight(30);
      scribble.scribbleLine(x1, y1, x1, y - buildingHeight / 2);
      pop();
    }
  }
  pop();
}

function building2Left() {
  buildingHeight = height * random(0.4, 0.5);
  let buildingWidth = width * 0.5;
  strokeWeight(5);

  let x = width * 0.3;
  let y = pavementHeight - buildingHeight / 2;

  fill(c1);
  rect(x, y, buildingWidth, buildingHeight);
  scribble.scribbleRect(x, y, buildingWidth, buildingHeight); // main block

  scribble.scribbleRect(x, y, buildingWidth * 0.99, buildingHeight * 0.99);

  fill(c1);
  rect(
    x,
    pavementHeight - buildingHeight - buildingHeight / 12,
    buildingWidth,
    buildingHeight / 6
  );
  scribble.scribbleRect(
    x,
    pavementHeight - buildingHeight - buildingHeight / 12,
    buildingWidth,
    buildingHeight / 6
  ); // sign

  //"CAFE" sign
  push();
  fill(0);
  textAlign(CENTER);

  let font = random(3);
  if (font < 1) {
    textSize(150);
    textFont(MsMadi);
    text("CAFE", x, pavementHeight - buildingHeight - buildingHeight / 20);
  } else if (font > 1 && font < 2) {
    textSize(150);
    textFont(DancingScript);
    text("CAFE", x, pavementHeight - buildingHeight - buildingHeight / 20);
  } else if (font > 2 && font < 3) {
    textSize(120);
    textFont(HomemadeApple);
    text("CAFÉ", x, pavementHeight - buildingHeight - buildingHeight / 19);
  }
  pop();

  // DOOR

  fill(c3);
  rect(
    x,
    y + buildingHeight * 0.145,
    buildingWidth * 0.25,
    buildingHeight * 0.65
  );
  scribble.scribbleRect(
    x,
    y + buildingHeight * 0.145,
    buildingWidth * 0.25,
    buildingHeight * 0.65
  ); //main door frame

  scribble.scribbleRect(
    x,
    y + buildingHeight * 0.145,
    buildingWidth * 0.21,
    buildingHeight * 0.61
  ); // smaller door frame

  //reflection
  push();
  stroke(150, 50);
  let rx3 = [
    x - buildingWidth * 0.1,
    x + buildingWidth * 0.1,
    x - buildingWidth * 0.1,
    x + buildingWidth * 0.1,
  ];
  let ry3 = [
    y - buildingHeight * 0.15,
    y - buildingHeight * 0.15,
    y + buildingHeight * 0.4,
    y + buildingHeight * 0.4,
  ];

  scribble.scribbleFilling(rx3, ry3, random(50, 100), 50);
  pop();

  scribble.scribbleRect(
    x,
    y + buildingHeight * 0.05,
    buildingWidth * 0.08,
    buildingHeight * 0.03
  ); //sign

  //"OPEN" TEXT
  push();
  fill(0);
  textAlign(CENTER);
  textSize(45);
  textFont(ArchitectsDaughter);

  text("OPEN", x, y + buildingHeight * 0.063);
  pop();
  scribble.scribbleLine(
    x - buildingWidth * 0.04,
    y + buildingHeight * 0.032,
    x,
    y
  ); // left string
  scribble.scribbleLine(
    x + buildingWidth * 0.04,
    y + buildingHeight * 0.032,
    x,
    y
  );

  //  WINDOWS

  fill(c3);
  rect(
    x - buildingWidth * 0.3,
    y - buildingHeight * 0.1,
    buildingWidth * 0.29,
    buildingHeight * 0.5
  );
  scribble.scribbleRect(
    x - buildingWidth * 0.3,
    y - buildingHeight * 0.1,
    buildingWidth * 0.29,
    buildingHeight * 0.5
  ); // left window
  scribble.scribbleRect(
    x - buildingWidth * 0.3,
    y - buildingHeight * 0.1,
    buildingWidth * 0.27,
    buildingHeight * 0.48
  );

  // reflection
  push();
  stroke(150, 50);
  let rx1 = [
    x - buildingWidth * 0.4,
    x - buildingWidth * 0.17,
    x - buildingWidth * 0.17,
    x - buildingWidth * 0.4,
  ];
  let ry1 = [
    y - buildingHeight * 0.3,
    y - buildingHeight * 0.3,
    y + buildingHeight * 0.1,
    y + buildingHeight * 0.1,
  ];

  scribble.scribbleFilling(rx1, ry1, random(50, 100), 50);
  pop();

  fill(c3);
  rect(
    x + buildingWidth * 0.3,
    y - buildingHeight * 0.1,
    buildingWidth * 0.29,
    buildingHeight * 0.5
  );
  scribble.scribbleRect(
    x + buildingWidth * 0.3,
    y - buildingHeight * 0.1,
    buildingWidth * 0.29,
    buildingHeight * 0.5
  ); // right window
  scribble.scribbleRect(
    x + buildingWidth * 0.3,
    y - buildingHeight * 0.1,
    buildingWidth * 0.27,
    buildingHeight * 0.48
  );

  //reflection
  push();
  stroke(150, 50);
  let rx2 = [
    x + buildingWidth * 0.43,
    x + buildingWidth * 0.2,
    x + buildingWidth * 0.2,
    x + buildingWidth * 0.43,
  ];
  let ry2 = [
    y - buildingHeight * 0.3,
    y - buildingHeight * 0.3,
    y + buildingHeight * 0.1,
    y + buildingHeight * 0.1,
  ];

  scribble.scribbleFilling(rx2, ry2, random(50, 100), 50);
  pop();

  // tent
  push();
  fill(bg);
  quad(
    x - buildingWidth * 0.5,
    y - buildingHeight * 0.5,
    x + buildingWidth * 0.5,
    y - buildingHeight * 0.5,
    x + buildingWidth * 0.55,
    y - buildingHeight * 0.25,
    x - buildingWidth * 0.55,
    y - buildingHeight * 0.25
  );
  pop();

  stroke(c2);
  strokeWeight(20);
  scribble.scribbleLine(
    x - buildingWidth * 0.5,
    y - buildingHeight * 0.5,
    x - buildingWidth * 0.55,
    y - buildingHeight * 0.25
  ); //left
  scribble.scribbleLine(
    x + buildingWidth * 0.5,
    y - buildingHeight * 0.5,
    x + buildingWidth * 0.55,
    y - buildingHeight * 0.25
  );
  scribble.scribbleLine(
    x - buildingWidth * 0.5,
    y - buildingHeight * 0.5,
    x + buildingWidth * 0.5,
    y - buildingHeight * 0.5
  );

  let d = x + buildingWidth * 0.55 - (x - buildingWidth * 0.55);
  let p1 = x - buildingWidth * 0.55;
  let p2 = x + buildingWidth * 0.55;
  let y1 = y - buildingHeight * 0.25;

  push();
  for (let x1 = p1; x1 < p2; x1 += d / 20) {
    fill(c2);
    scribble.scribbleCurve(
      x1,
      y1,
      x1 + d / 20,
      y1,
      x1 + d / 40,
      y1 + height * 0.02,
      x1 + d / 40,
      y1 + height * 0.02
    );
    if (x1 > x - buildingWidth * 0.55) {
      push();
      stroke(c2);
      strokeWeight(30);
      scribble.scribbleLine(x1, y1, x1, y - buildingHeight / 2);
      pop();
    }
  }
  pop();
}

function building1Left() {
  // double door on the left, window on the right

  buildingHeight = height * random(0.35, 0.45);
  buildingWidth = width * 0.5;
  strokeWeight(5);

  let x = width * 0.3;
  let y = pavementHeight - buildingHeight / 2;

  fill(c1);

  rect(x, y, buildingWidth, buildingHeight);
  scribble.scribbleRect(x, y, buildingWidth, buildingHeight); // main block

  scribble.scribbleRect(x, y, buildingWidth * 0.99, buildingHeight * 0.99);

  fill(c1);
  rect(
    x,
    pavementHeight - buildingHeight - buildingHeight / 12,
    buildingWidth,
    buildingHeight / 6
  );
  scribble.scribbleRect(
    x,
    pavementHeight - buildingHeight - buildingHeight / 12,
    buildingWidth,
    buildingHeight / 6
  ); // sign

  scribble.scribbleRect(
    x - buildingWidth * 0.29,
    pavementHeight - buildingHeight * 0.45,
    buildingWidth * 0.35,
    buildingHeight * 0.85
  ); // door main

  scribble.scribbleLine(
    x - buildingWidth * 0.29,
    y - buildingHeight * 0.38,
    x - buildingWidth * 0.29,
    y + buildingHeight * 0.49
  ); // line through the middle

  fill(c3);
  rect(
    x - buildingWidth * 0.37,
    pavementHeight - buildingHeight * 0.53,
    buildingWidth * 0.13,
    buildingHeight * 0.56
  );
  scribble.scribbleRect(
    x - buildingWidth * 0.37,
    pavementHeight - buildingHeight * 0.53,
    buildingWidth * 0.13,
    buildingHeight * 0.56
  ); // left upper

  //reflection
  push();
  stroke(150, 50);
  let rx1 = [
    x - buildingWidth * 0.45,
    x - buildingWidth * 0.3,
    x - buildingWidth * 0.45,
    x - buildingWidth * 0.3,
  ];
  let ry1 = [
    y - buildingHeight * 0.15,
    y - buildingHeight * 0.15,
    y + buildingHeight * 0.4,
    y + buildingHeight * 0.4,
  ];

  scribble.scribbleFilling(rx1, ry1, random(50, 100), 50);
  pop();

  fill(c3);
  rect(
    x - buildingWidth * 0.21,
    pavementHeight - buildingHeight * 0.53,
    buildingWidth * 0.13,
    buildingHeight * 0.56
  );
  scribble.scribbleRect(
    x - buildingWidth * 0.21,
    pavementHeight - buildingHeight * 0.53,
    buildingWidth * 0.13,
    buildingHeight * 0.56
  ); // upper right

  //reflection
  push();
  stroke(150, 50);
  let rx2 = [
    x - buildingWidth * 0.28,
    x - buildingWidth * 0.15,
    x - buildingWidth * 0.28,
    x - buildingWidth * 0.15,
  ];
  let ry2 = [
    y - buildingHeight * 0.15,
    y - buildingHeight * 0.15,
    y + buildingHeight * 0.4,
    y + buildingHeight * 0.4,
  ];

  scribble.scribbleFilling(rx2, ry2, random(50, 100), 50);
  pop();

  // Open Sigh
  fill(c3);
  scribble.scribbleRect(
    x - buildingWidth * 0.21,
    pavementHeight - buildingHeight * 0.55,
    buildingWidth * 0.06,
    buildingHeight * 0.03
  ); //the sign

  //"OPEN" TEXT
  push();
  fill(0);
  textAlign(CENTER);
  textSize(40);
  textFont(ArchitectsDaughter);

  text(
    "OPEN",
    x - buildingWidth * 0.21,
    pavementHeight - buildingHeight * 0.54
  );
  pop();

  scribble.scribbleLine(
    x - buildingWidth * 0.24,
    pavementHeight - buildingHeight * 0.56,
    x - buildingWidth * 0.21,
    pavementHeight - buildingHeight * 0.6
  );

  scribble.scribbleLine(
    x - buildingWidth * 0.18,
    pavementHeight - buildingHeight * 0.57,
    x - buildingWidth * 0.21,
    pavementHeight - buildingHeight * 0.61
  );

  fill(c3);
  rect(
    x - buildingWidth * 0.37,
    pavementHeight - buildingHeight * 0.15,
    buildingWidth * 0.13,
    buildingHeight * 0.15
  );

  scribble.scribbleRect(
    x - buildingWidth * 0.37,
    pavementHeight - buildingHeight * 0.15,
    buildingWidth * 0.13,
    buildingHeight * 0.15
  ); // left lower

  fill(c3);
  rect(
    x - buildingWidth * 0.21,
    pavementHeight - buildingHeight * 0.15,
    buildingWidth * 0.13,
    buildingHeight * 0.15
  );
  scribble.scribbleRect(
    x - buildingWidth * 0.21,
    pavementHeight - buildingHeight * 0.15,
    buildingWidth * 0.13,
    buildingHeight * 0.15
  ); // right lower

  ellipse(x - buildingWidth * 0.33, y + height * 0.022, 20, 90); // left handle
  ellipse(x - buildingWidth * 0.25, y + height * 0.022, 20, 90); // right handle

  // LOWER APPLICATION
  scribble.scribbleRect(
    x + buildingWidth * 0.19,
    pavementHeight - buildingHeight * 0.13,
    buildingWidth * 0.56,
    buildingHeight * 0.2
  ); // outer frame

  scribble.scribbleRect(
    x + buildingWidth * 0.19,
    pavementHeight - buildingHeight * 0.13,
    buildingWidth * 0.5,
    buildingHeight * 0.15
  ); // inner frame

  // WINDOW

  fill(c3);
  rect(
    x + buildingWidth * 0.19,
    pavementHeight - buildingHeight * 0.56,
    buildingWidth * 0.56,
    buildingHeight * 0.6
  );
  scribble.scribbleRect(
    x + buildingWidth * 0.19,
    pavementHeight - buildingHeight * 0.56,
    buildingWidth * 0.56,
    buildingHeight * 0.6
  );

  //"CAFE" sign
  push();
  fill(0);
  textAlign(CENTER);
  textSize(150);
  textFont(MsMadi);

  text(
    "CAFÉ",
    x + buildingWidth * 0.19,
    pavementHeight - buildingHeight * 0.56
  );
  pop();

  //reflection
  push();
  stroke(150, 50);
  let rx3 = [
    x - buildingWidth * 0.05,
    x + buildingWidth * 0.45,
    x + buildingWidth * 0.45,
    x - buildingWidth * 0.05,
  ];
  let ry3 = [
    y - buildingHeight * 0.1,
    y - buildingHeight * 0.1,
    y + buildingHeight * 0.2,
    y + buildingHeight * 0.2,
  ];

  scribble.scribbleFilling(rx3, ry3, random(50, 100), 50);
  pop();

  arc(
    x + buildingWidth * 0.185,
    y - buildingHeight * 0.07,
    buildingWidth * 0.45,
    buildingWidth * 0.25,
    180,
    0
  );

  scribble.scribbleLine(
    x - buildingWidth * 0.04,
    y - buildingHeight * 0.08,
    x - buildingWidth * 0.04,
    y - buildingHeight * 0.36
  );
  scribble.scribbleLine(
    x + buildingWidth * 0.41,
    y - buildingHeight * 0.08,
    x + buildingWidth * 0.41,
    y - buildingHeight * 0.36
  );

  // tent
  push();
  fill(bg);
  quad(
    x - buildingWidth * 0.5,
    y - buildingHeight * 0.5,
    x + buildingWidth * 0.5,
    y - buildingHeight * 0.5,
    x + buildingWidth * 0.55,
    y - buildingHeight * 0.25,
    x - buildingWidth * 0.55,
    y - buildingHeight * 0.25
  );
  pop();

  stroke(c2);
  strokeWeight(20);
  scribble.scribbleLine(
    x - buildingWidth * 0.5,
    y - buildingHeight * 0.5,
    x - buildingWidth * 0.55,
    y - buildingHeight * 0.25
  ); //left
  scribble.scribbleLine(
    x + buildingWidth * 0.5,
    y - buildingHeight * 0.5,
    x + buildingWidth * 0.55,
    y - buildingHeight * 0.25
  );
  scribble.scribbleLine(
    x - buildingWidth * 0.5,
    y - buildingHeight * 0.5,
    x + buildingWidth * 0.5,
    y - buildingHeight * 0.5
  );

  let d = x + buildingWidth * 0.55 - (x - buildingWidth * 0.55);
  let p1 = x - buildingWidth * 0.55;
  let p2 = x + buildingWidth * 0.55;
  let y1 = y - buildingHeight * 0.25;

  push();
  for (let x1 = p1; x1 < p2; x1 += d / 20) {
    fill(c2);
    scribble.scribbleCurve(
      x1,
      y1,
      x1 + d / 20,
      y1,
      x1 + d / 40,
      y1 + height * 0.02,
      x1 + d / 40,
      y1 + height * 0.02
    );
    if (x1 > x - buildingWidth * 0.55) {
      push();
      stroke(c2);
      strokeWeight(30);
      scribble.scribbleLine(x1, y1, x1, y - buildingHeight / 2);
      pop();
    }
  }
  pop();
}

function building1Center() {
  // double door on the left, window on the right

  buildingHeight = height * random(0.35, 0.45);
  buildingWidth = width * 0.5;
  strokeWeight(5);

  let x = width * 0.5;
  let y = pavementHeight - buildingHeight / 2;

  fill(c1);

  rect(x, y, buildingWidth, buildingHeight);
  scribble.scribbleRect(x, y, buildingWidth, buildingHeight); // main block

  scribble.scribbleRect(x, y, buildingWidth * 0.99, buildingHeight * 0.99);

  fill(c1);
  rect(
    x,
    pavementHeight - buildingHeight - buildingHeight / 12,
    buildingWidth,
    buildingHeight / 6
  );
  scribble.scribbleRect(
    x,
    pavementHeight - buildingHeight - buildingHeight / 12,
    buildingWidth,
    buildingHeight / 6
  ); // sign

  scribble.scribbleRect(
    x - buildingWidth * 0.29,
    pavementHeight - buildingHeight * 0.45,
    buildingWidth * 0.35,
    buildingHeight * 0.85
  ); // door main

  scribble.scribbleLine(
    x - buildingWidth * 0.29,
    y - buildingHeight * 0.38,
    x - buildingWidth * 0.29,
    y + buildingHeight * 0.49
  ); // line through the middle

  fill(c3);
  rect(
    x - buildingWidth * 0.37,
    pavementHeight - buildingHeight * 0.53,
    buildingWidth * 0.13,
    buildingHeight * 0.56
  );
  scribble.scribbleRect(
    x - buildingWidth * 0.37,
    pavementHeight - buildingHeight * 0.53,
    buildingWidth * 0.13,
    buildingHeight * 0.56
  ); // left upper

  //reflection
  push();
  stroke(150, 50);
  let rx1 = [
    x - buildingWidth * 0.45,
    x - buildingWidth * 0.3,
    x - buildingWidth * 0.45,
    x - buildingWidth * 0.3,
  ];
  let ry1 = [
    y - buildingHeight * 0.15,
    y - buildingHeight * 0.15,
    y + buildingHeight * 0.4,
    y + buildingHeight * 0.4,
  ];

  scribble.scribbleFilling(rx1, ry1, random(50, 100), 50);
  pop();

  fill(c3);
  rect(
    x - buildingWidth * 0.21,
    pavementHeight - buildingHeight * 0.53,
    buildingWidth * 0.13,
    buildingHeight * 0.56
  );
  scribble.scribbleRect(
    x - buildingWidth * 0.21,
    pavementHeight - buildingHeight * 0.53,
    buildingWidth * 0.13,
    buildingHeight * 0.56
  ); // upper right

  //reflection
  push();
  stroke(150, 50);
  let rx2 = [
    x - buildingWidth * 0.28,
    x - buildingWidth * 0.15,
    x - buildingWidth * 0.28,
    x - buildingWidth * 0.15,
  ];
  let ry2 = [
    y - buildingHeight * 0.15,
    y - buildingHeight * 0.15,
    y + buildingHeight * 0.4,
    y + buildingHeight * 0.4,
  ];

  scribble.scribbleFilling(rx2, ry2, random(50, 100), 50);
  pop();

  // Open Sigh
  fill(c3);
  scribble.scribbleRect(
    x - buildingWidth * 0.21,
    pavementHeight - buildingHeight * 0.55,
    buildingWidth * 0.06,
    buildingHeight * 0.03
  ); //the sign

  //"OPEN" TEXT
  push();
  fill(0);
  textAlign(CENTER);
  textSize(40);
  textFont(ArchitectsDaughter);

  text(
    "OPEN",
    x - buildingWidth * 0.21,
    pavementHeight - buildingHeight * 0.54
  );
  pop();

  scribble.scribbleLine(
    x - buildingWidth * 0.24,
    pavementHeight - buildingHeight * 0.56,
    x - buildingWidth * 0.21,
    pavementHeight - buildingHeight * 0.6
  );

  scribble.scribbleLine(
    x - buildingWidth * 0.18,
    pavementHeight - buildingHeight * 0.57,
    x - buildingWidth * 0.21,
    pavementHeight - buildingHeight * 0.61
  );

  fill(c3);
  rect(
    x - buildingWidth * 0.37,
    pavementHeight - buildingHeight * 0.15,
    buildingWidth * 0.13,
    buildingHeight * 0.15
  );

  scribble.scribbleRect(
    x - buildingWidth * 0.37,
    pavementHeight - buildingHeight * 0.15,
    buildingWidth * 0.13,
    buildingHeight * 0.15
  ); // left lower

  fill(c3);
  rect(
    x - buildingWidth * 0.21,
    pavementHeight - buildingHeight * 0.15,
    buildingWidth * 0.13,
    buildingHeight * 0.15
  );
  scribble.scribbleRect(
    x - buildingWidth * 0.21,
    pavementHeight - buildingHeight * 0.15,
    buildingWidth * 0.13,
    buildingHeight * 0.15
  ); // right lower

  ellipse(x - buildingWidth * 0.33, y + height * 0.022, 20, 90); // left handle
  ellipse(x - buildingWidth * 0.25, y + height * 0.022, 20, 90); // right handle

  // LOWER APPLICATION
  scribble.scribbleRect(
    x + buildingWidth * 0.19,
    pavementHeight - buildingHeight * 0.13,
    buildingWidth * 0.56,
    buildingHeight * 0.2
  ); // outer frame

  scribble.scribbleRect(
    x + buildingWidth * 0.19,
    pavementHeight - buildingHeight * 0.13,
    buildingWidth * 0.5,
    buildingHeight * 0.15
  ); // inner frame

  // WINDOW

  fill(c3);
  rect(
    x + buildingWidth * 0.19,
    pavementHeight - buildingHeight * 0.56,
    buildingWidth * 0.56,
    buildingHeight * 0.6
  );
  scribble.scribbleRect(
    x + buildingWidth * 0.19,
    pavementHeight - buildingHeight * 0.56,
    buildingWidth * 0.56,
    buildingHeight * 0.6
  );

  //"CAFE" sign
  push();
  fill(0);
  textAlign(CENTER);
  textSize(150);
  textFont(MsMadi);

  text(
    "CAFÉ",
    x + buildingWidth * 0.19,
    pavementHeight - buildingHeight * 0.56
  );
  pop();

  //reflection
  push();
  stroke(150, 50);
  let rx3 = [
    x - buildingWidth * 0.05,
    x + buildingWidth * 0.45,
    x + buildingWidth * 0.45,
    x - buildingWidth * 0.05,
  ];
  let ry3 = [
    y - buildingHeight * 0.1,
    y - buildingHeight * 0.1,
    y + buildingHeight * 0.2,
    y + buildingHeight * 0.2,
  ];

  scribble.scribbleFilling(rx3, ry3, random(50, 100), 50);
  pop();

  arc(
    x + buildingWidth * 0.185,
    y - buildingHeight * 0.07,
    buildingWidth * 0.45,
    buildingWidth * 0.25,
    180,
    0
  );

  scribble.scribbleLine(
    x - buildingWidth * 0.04,
    y - buildingHeight * 0.08,
    x - buildingWidth * 0.04,
    y - buildingHeight * 0.36
  );
  scribble.scribbleLine(
    x + buildingWidth * 0.41,
    y - buildingHeight * 0.08,
    x + buildingWidth * 0.41,
    y - buildingHeight * 0.36
  );

  // tent
  push();
  fill(bg);
  quad(
    x - buildingWidth * 0.5,
    y - buildingHeight * 0.5,
    x + buildingWidth * 0.5,
    y - buildingHeight * 0.5,
    x + buildingWidth * 0.55,
    y - buildingHeight * 0.25,
    x - buildingWidth * 0.55,
    y - buildingHeight * 0.25
  );
  pop();

  stroke(c2);
  strokeWeight(20);
  scribble.scribbleLine(
    x - buildingWidth * 0.5,
    y - buildingHeight * 0.5,
    x - buildingWidth * 0.55,
    y - buildingHeight * 0.25
  ); //left
  scribble.scribbleLine(
    x + buildingWidth * 0.5,
    y - buildingHeight * 0.5,
    x + buildingWidth * 0.55,
    y - buildingHeight * 0.25
  );
  scribble.scribbleLine(
    x - buildingWidth * 0.5,
    y - buildingHeight * 0.5,
    x + buildingWidth * 0.5,
    y - buildingHeight * 0.5
  );

  let d = x + buildingWidth * 0.55 - (x - buildingWidth * 0.55);
  let p1 = x - buildingWidth * 0.55;
  let p2 = x + buildingWidth * 0.55;
  let y1 = y - buildingHeight * 0.25;

  push();
  for (let x1 = p1; x1 < p2; x1 += d / 20) {
    fill(c2);
    scribble.scribbleCurve(
      x1,
      y1,
      x1 + d / 20,
      y1,
      x1 + d / 40,
      y1 + height * 0.02,
      x1 + d / 40,
      y1 + height * 0.02
    );
    if (x1 > x - buildingWidth * 0.55) {
      push();
      stroke(c2);
      strokeWeight(30);
      scribble.scribbleLine(x1, y1, x1, y - buildingHeight / 2);
      pop();
    }
  }
  pop();
}

function building1() {
  // double door on the left, window on the right

  buildingHeight = height * random(0.35, 0.45);
  buildingWidth = width * 0.5;
  strokeWeight(5);

  let x = width * 0.7;
  let y = pavementHeight - buildingHeight / 2;

  fill(c1);

  rect(x, y, buildingWidth, buildingHeight);
  scribble.scribbleRect(x, y, buildingWidth, buildingHeight); // main block

  scribble.scribbleRect(x, y, buildingWidth * 0.99, buildingHeight * 0.99);

  fill(c1);
  rect(
    x,
    pavementHeight - buildingHeight - buildingHeight / 12,
    buildingWidth,
    buildingHeight / 6
  );
  scribble.scribbleRect(
    x,
    pavementHeight - buildingHeight - buildingHeight / 12,
    buildingWidth,
    buildingHeight / 6
  ); // sign

  scribble.scribbleRect(
    x - buildingWidth * 0.29,
    pavementHeight - buildingHeight * 0.45,
    buildingWidth * 0.35,
    buildingHeight * 0.85
  ); // door main

  scribble.scribbleLine(
    x - buildingWidth * 0.29,
    y - buildingHeight * 0.38,
    x - buildingWidth * 0.29,
    y + buildingHeight * 0.49
  ); // line through the middle

  fill(c3);
  rect(
    x - buildingWidth * 0.37,
    pavementHeight - buildingHeight * 0.53,
    buildingWidth * 0.13,
    buildingHeight * 0.56
  );
  scribble.scribbleRect(
    x - buildingWidth * 0.37,
    pavementHeight - buildingHeight * 0.53,
    buildingWidth * 0.13,
    buildingHeight * 0.56
  ); // left upper

  //reflection
  push();
  stroke(150, 50);
  let rx1 = [
    x - buildingWidth * 0.45,
    x - buildingWidth * 0.3,
    x - buildingWidth * 0.45,
    x - buildingWidth * 0.3,
  ];
  let ry1 = [
    y - buildingHeight * 0.15,
    y - buildingHeight * 0.15,
    y + buildingHeight * 0.4,
    y + buildingHeight * 0.4,
  ];

  scribble.scribbleFilling(rx1, ry1, random(50, 100), 50);
  pop();

  fill(c3);
  rect(
    x - buildingWidth * 0.21,
    pavementHeight - buildingHeight * 0.53,
    buildingWidth * 0.13,
    buildingHeight * 0.56
  );
  scribble.scribbleRect(
    x - buildingWidth * 0.21,
    pavementHeight - buildingHeight * 0.53,
    buildingWidth * 0.13,
    buildingHeight * 0.56
  ); // upper right

  //reflection
  push();
  stroke(150, 50);
  let rx2 = [
    x - buildingWidth * 0.28,
    x - buildingWidth * 0.15,
    x - buildingWidth * 0.28,
    x - buildingWidth * 0.15,
  ];
  let ry2 = [
    y - buildingHeight * 0.15,
    y - buildingHeight * 0.15,
    y + buildingHeight * 0.4,
    y + buildingHeight * 0.4,
  ];

  scribble.scribbleFilling(rx2, ry2, random(50, 100), 50);
  pop();

  // Open Sigh
  fill(c3);
  scribble.scribbleRect(
    x - buildingWidth * 0.21,
    pavementHeight - buildingHeight * 0.55,
    buildingWidth * 0.06,
    buildingHeight * 0.03
  ); //the sign

  //"OPEN" TEXT
  push();
  fill(0);
  textAlign(CENTER);
  textSize(40);
  textFont(ArchitectsDaughter);

  text(
    "OPEN",
    x - buildingWidth * 0.21,
    pavementHeight - buildingHeight * 0.54
  );
  pop();

  scribble.scribbleLine(
    x - buildingWidth * 0.24,
    pavementHeight - buildingHeight * 0.56,
    x - buildingWidth * 0.21,
    pavementHeight - buildingHeight * 0.6
  );

  scribble.scribbleLine(
    x - buildingWidth * 0.18,
    pavementHeight - buildingHeight * 0.57,
    x - buildingWidth * 0.21,
    pavementHeight - buildingHeight * 0.61
  );

  fill(c3);
  rect(
    x - buildingWidth * 0.37,
    pavementHeight - buildingHeight * 0.15,
    buildingWidth * 0.13,
    buildingHeight * 0.15
  );

  scribble.scribbleRect(
    x - buildingWidth * 0.37,
    pavementHeight - buildingHeight * 0.15,
    buildingWidth * 0.13,
    buildingHeight * 0.15
  ); // left lower

  fill(c3);
  rect(
    x - buildingWidth * 0.21,
    pavementHeight - buildingHeight * 0.15,
    buildingWidth * 0.13,
    buildingHeight * 0.15
  );
  scribble.scribbleRect(
    x - buildingWidth * 0.21,
    pavementHeight - buildingHeight * 0.15,
    buildingWidth * 0.13,
    buildingHeight * 0.15
  ); // right lower

  ellipse(x - buildingWidth * 0.33, y + height * 0.022, 20, 90); // left handle
  ellipse(x - buildingWidth * 0.25, y + height * 0.022, 20, 90); // right handle

  // LOWER APPLICATION
  scribble.scribbleRect(
    x + buildingWidth * 0.19,
    pavementHeight - buildingHeight * 0.13,
    buildingWidth * 0.56,
    buildingHeight * 0.2
  ); // outer frame

  scribble.scribbleRect(
    x + buildingWidth * 0.19,
    pavementHeight - buildingHeight * 0.13,
    buildingWidth * 0.5,
    buildingHeight * 0.15
  ); // inner frame

  // WINDOW

  fill(c3);
  rect(
    x + buildingWidth * 0.19,
    pavementHeight - buildingHeight * 0.56,
    buildingWidth * 0.56,
    buildingHeight * 0.6
  );
  scribble.scribbleRect(
    x + buildingWidth * 0.19,
    pavementHeight - buildingHeight * 0.56,
    buildingWidth * 0.56,
    buildingHeight * 0.6
  );

  //"CAFE" sign
  push();
  fill(0);
  textAlign(CENTER);
  textSize(150);
  textFont(MsMadi);

  text(
    "CAFÉ",
    x + buildingWidth * 0.19,
    pavementHeight - buildingHeight * 0.56
  );
  pop();

  //reflection
  push();
  stroke(150, 50);
  let rx3 = [
    x - buildingWidth * 0.05,
    x + buildingWidth * 0.45,
    x + buildingWidth * 0.45,
    x - buildingWidth * 0.05,
  ];
  let ry3 = [
    y - buildingHeight * 0.1,
    y - buildingHeight * 0.1,
    y + buildingHeight * 0.2,
    y + buildingHeight * 0.2,
  ];

  scribble.scribbleFilling(rx3, ry3, random(50, 100), 50);
  pop();

  arc(
    x + buildingWidth * 0.185,
    y - buildingHeight * 0.07,
    buildingWidth * 0.45,
    buildingWidth * 0.25,
    180,
    0
  );

  scribble.scribbleLine(
    x - buildingWidth * 0.04,
    y - buildingHeight * 0.08,
    x - buildingWidth * 0.04,
    y - buildingHeight * 0.36
  );
  scribble.scribbleLine(
    x + buildingWidth * 0.41,
    y - buildingHeight * 0.08,
    x + buildingWidth * 0.41,
    y - buildingHeight * 0.36
  );

  // tent
  push();
  fill(bg);
  quad(
    x - buildingWidth * 0.5,
    y - buildingHeight * 0.5,
    x + buildingWidth * 0.5,
    y - buildingHeight * 0.5,
    x + buildingWidth * 0.55,
    y - buildingHeight * 0.25,
    x - buildingWidth * 0.55,
    y - buildingHeight * 0.25
  );
  pop();

  stroke(c2);
  strokeWeight(20);
  scribble.scribbleLine(
    x - buildingWidth * 0.5,
    y - buildingHeight * 0.5,
    x - buildingWidth * 0.55,
    y - buildingHeight * 0.25
  ); //left
  scribble.scribbleLine(
    x + buildingWidth * 0.5,
    y - buildingHeight * 0.5,
    x + buildingWidth * 0.55,
    y - buildingHeight * 0.25
  );
  scribble.scribbleLine(
    x - buildingWidth * 0.5,
    y - buildingHeight * 0.5,
    x + buildingWidth * 0.5,
    y - buildingHeight * 0.5
  );

  let d = x + buildingWidth * 0.55 - (x - buildingWidth * 0.55);
  let p1 = x - buildingWidth * 0.55;
  let p2 = x + buildingWidth * 0.55;
  let y1 = y - buildingHeight * 0.25;

  push();
  for (let x1 = p1; x1 < p2; x1 += d / 20) {
    fill(c2);
    scribble.scribbleCurve(
      x1,
      y1,
      x1 + d / 20,
      y1,
      x1 + d / 40,
      y1 + height * 0.02,
      x1 + d / 40,
      y1 + height * 0.02
    );
    if (x1 > x - buildingWidth * 0.55) {
      push();
      stroke(c2);
      strokeWeight(30);
      scribble.scribbleLine(x1, y1, x1, y - buildingHeight / 2);
      pop();
    }
  }
  pop();
}

function pavement() {
  let w;
  let h;

  fill(bg);
  for (let x = 0; x < width; x += w) {
    for (let y = pavementHeight + random(50); y < height; y += h) {
      w = random(40, 60);
      h = random(65, 80);
      stroke(random(150, 200));
      strokeWeight(random(10, 15));
      rect(x, y, w, h, 30);
      strokeWeight(2);
      point(x + random(w), y + random(h));
      point(x + random(w), y + random(h));
      line(x + random(w), y + random(h), x + random(w), y + random(h));
    }
  }
}

function grain(amount) {
  loadPixels();
  const d = pixelDensity();
  const pixelsCount = 4 * (width * d) * (height * d);
  for (let i = 0; i < pixelsCount; i += 4) {
    const grainAmount = random(-amount, amount);
    pixels[i] = pixels[i] + grainAmount;
    pixels[i + 1] = pixels[i + 1] + grainAmount;
    pixels[i + 2] = pixels[i + 2] + grainAmount;
    pixels[i + 3] = pixels[i + 3] + grainAmount;
  }
  updatePixels();
}

function keyTyped() {
  if (key === "s") {
    save("local_cafe.jpg");
  }
}
