/// Queen
function ticket2() {
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
  textSize(35);
  noStroke();
  fill(25, 150);

  /// LEVEL
  push();
  translate(65, height * 0.47);
  rotate(-HALF_PI);
  text(ticketC.level, 0, 0);
  pop();

  /// SECTION
  push();
  translate(width*0.13, height * 0.71);
  rotate(-HALF_PI);
  if (ticketC.lvl === 0 ||
      ticketC.lvl === 1) {
    if (ticketC.sec === 1) {
      text('L/C',0,0);
      text('L/C',0,width*0.7);
    }
    if (ticketC.sec === 2) {
      text('R/C',0,0);
      text('R/C',0,width*0.7);
    }
    if (ticketC.sec === 3) {
      text('CNTR',0,0);
      text('CNTR',0,width*0.7);
    }
  } else {
    text(ticketC.sec, 0, 0);
    text(ticketC.sec, 0, width*0.7);
  }
   pop();

  /// ROW
  push();
  translate(width*0.13, height * 0.51);
  rotate(-HALF_PI);
  text(ticketC.rowlet, 0, 0);
  text(ticketC.rowlet, 0, width*0.7);
  pop();

  /// SEAT
  push();
  translate(width*0.13, height * 0.23);
  rotate(-HALF_PI);
  text(ticketC.seat, 0, 0);
  text(ticketC.seat, 0, width*0.7);
  pop();

  /// DATE
  push();
  translate(width*0.17, height * 0.46);
  rotate(-HALF_PI);
  text("FEB.  23,  1977", 0, 0);
  text("FEB.  23,  1977", 0, width*0.695);
  let price = 8;
  price -= ticketC.lvl;
  text("$"+price+".00",0,width*0.56);
  pop();

}

/// Queen
function ticketMakerC() {
  
  this.update = function () {
    let letter = 65;

    let level = ["ORCHESTRA","MAIN FLOOR", "MEZZANINE", "BALCONY", "UPPER-BALCONY"];
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
