
/// Lou Reed

function ticket1() {
  colr = fxrand()*255;
  colg = fxrand()*255;
  colb = fxrand()*255;
  background(colr,
             colg,
             colb, 255);
  
  translate(width*0.02,
            height*0.04);
  
  image(pic[tickno], 0,
        0);
  noStroke();
  fill(25, 150);

  /// LEVEL
  push();
  textSize(50);
  translate(65, height * 0.47);
  rotate(-HALF_PI);
  text(ticketB.level, 0, 0);
  pop();

  /// SECTION
  push();
  textSize(40);
  translate(width*0.77, height * 0.1);
  if (ticketB.lvl === 0 ||
      ticketB.lvl === 1) {
    if (ticketB.sec === 1) {
      textSize(40);
      text('LEFT',0,0);
      textSize(30);
      text("CENT'R",0,33);
    }
    if (ticketB.sec === 2) {
      textSize(40);
      text("R'GHT",0,0);
      textSize(30);
      text("CENT'R",0,33);
    }
    if (ticketB.sec === 3) {
      textSize(30);
      text("CENT'R",0,0);
    }
  } else {
    text(ticketB.sec, 0, 0);
  }
   pop();
  
  /// ROW
  push();
  textSize(85);
  translate(width*0.76, height * 0.48);
  rotate(HALF_PI);
  text(ticketB.rowlet, 0, 0);
  pop();

  /// SEAT
  push();
  textSize(85);
  translate(width*0.76, height * 0.77);
  rotate(HALF_PI);
  text(ticketB.seat, 0, 0);
  pop();


}


/// Lou Reed
function ticketMakerB() {
   this.update = function () {
    let letter = 65;

    let level = ["ORCHESTRA"];
    this.lvl = 0;  
    this.level = level[this.lvl];
    this.sec = 0;
    this.row = 0;

    if (this.lvl === 0) {
      this.sec = floor(fxrand() * 3) + 1;
      this.seat = floor(fxrand() * 20) + 1;
      this.row = floor(fxrand() * 9) + letter;
    }

    this.rowlet = char(this.row);
  };
}
