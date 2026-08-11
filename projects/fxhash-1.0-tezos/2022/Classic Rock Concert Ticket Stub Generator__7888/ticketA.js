/// Aerosmith

/// Apply Type Print to Ticket
function ticket0() {
  colr = fxrand()*255;
  colg = fxrand()*255;
  colb = fxrand()*255;
  background(colr,
             colg,
             colb, 255);
  
  translate(width*0.02,
            height*0.04);
  image(pic[0], 0,
        0);
  textSize(35);
  noStroke();
  fill(25, 150);

  /// LEVEL
  push();
  translate(width*0.05, height * 0.47);
  rotate(-HALF_PI);
  text(ticketA.level, 0, 0);
  pop();

  /// SECTION
  push();
  translate(width*0.15, height * 0.71);
  rotate(-HALF_PI);
  text(ticketA.sec, 0, 0);
  pop();

  /// ROW
  push();
  translate(width*0.15, height * 0.51);
  rotate(-HALF_PI);
  text(ticketA.rowlet, 0, 0);
  pop();

  /// SEAT
  push();
  translate(width*0.15, height * 0.23);
  rotate(-HALF_PI);
  text(ticketA.seat, 0, 0);
  pop();

  /// DATE
  push();
  translate(width*0.2, height * 0.46);
  rotate(-HALF_PI);
  text("APR.  16,  1976", 0, 0);
  pop();
}


/// AEROSMITH

//// Find unit values to apply with type print
function ticketMakerA() {
  
  this.update = function () {
    let letter = 65;

    let level = ["ORCHESTRA", "FLOOR", "MEZZANINE", "BALCONY", "UPPER-BALCONY"];
    this.lvl = 0;
    let con = fxrand();
    if (con <= 0.0258) {
      this.lvl = 0;
    }
    if (con > 0.0258 && con <= 0.10007) {
      this.lvl = 1;
    }
    if (con > 0.10007 && con <= 0.37026) {
      this.lvl = 2;
    }
    if (con > 0.37026 && con <= 0.81805) {
      this.lvl = 3;
    }
    if (con > 0.81805 && con <= 1) {
      this.lvl = 4;
    }

    this.level = level[this.lvl];
    this.sec = 0;
    this.row = 0;

    if (this.lvl === 0) {
      this.sec = floor(fxrand() * 3) + 1;
      this.seat = floor(fxrand() * 20) + 1;
      this.row = floor(fxrand() * 9) + letter;
    }
    if (this.lvl === 1) {
      this.sec = floor(fxrand() * 3) + 1;
      this.seat = floor(fxrand() * 10) + 1;
      this.row = floor(fxrand() * 26) + letter;
    }
    if (this.lvl === 2) {
      this.sec = floor(fxrand() * 8) + 1;
      this.seat = floor(fxrand() * 10) + 1;
      this.row = floor(fxrand() * 20) + letter;
    }
    if (this.lvl === 3) {
      this.sec = floor(fxrand() * 8) + 1;
      this.seat = floor(fxrand() * 10) + 1;
      this.row = floor(fxrand() * 26) + letter;
    }
    if (this.lvl === 4) {
      this.sec = floor(fxrand() * 10) + 1;
      this.seat = floor(fxrand() * 10) + 1;
      this.row = floor(fxrand() * 10) + letter;
    }
    this.rowlet = char(this.row);
  };
}


