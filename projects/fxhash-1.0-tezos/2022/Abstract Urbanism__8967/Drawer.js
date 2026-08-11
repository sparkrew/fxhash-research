class Drawer {

  startPos = createVector(); ///// star position
  endPos = createVector(); ///// end  position
  angle = 0.0; ///// angle direction in DEGREE
  angleDir = 0.0; ///// angle direction in RADIANS
  dir = createVector(); ///// step direction
  minLenght = 0;
  stop = false; /// stop growing

  borderStyle;
  anglesA = [0, 90, 180, 270]; //  STYLE 1
  anglesB = [0, 90, 180, 270, 45, 135, 225, 315]; //  STYLE 2
  anglesC = [0, 120, 240, 180]; //  STYLE 3
  anglesD = [0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330]; //  STYLE 4
  anglesE = [30, 60, 120, 150, 210, 240, 300, 330]; //  STYLE 5
  anglesF = [0, 60, 120, 180, 240, 300]; //  STYLE 6
  anglesG = [10, 190, 50, 220, 110, 300];//  STYLE 7
  style = 0;

  mother;
  id;

  constructor( _startPos, _minLenght, _style, mother, _borderStyle, id) {
    this.startPos = createVector(_startPos.x, _startPos.y); ///// star position
    this.minLenght = _minLenght;  /// minimun leght
    this.style = _style; /// style from choose the angles
    this.setAngle(this.style);
    this.mother = mother; //// where I born
  //  console.log("new angle " + this.angle);
  this.borderStyle = _borderStyle;
  this.id = id;
    if (this.mother != null) {

    }

  }
  setAngle( style ) {
    let index = 0;

    switch (style) {
      case 1:
        index = Math.floor(fxrand() * this.anglesA.length);
        this.angle = this.anglesA[index];
        this.angleDir = radians(this.angle);
        break;
      case 2:
        index = Math.floor(fxrand() * this.anglesB.length);
        this.angle = this.anglesB[index];
        this.angleDir = radians(this.angle);
        break;
      case 3:
        index = Math.floor(fxrand() * this.anglesC.length);
        this.angle = this.anglesC[index];
        this.angleDir = radians(this.angle);
        break;
      case 4:
        index = Math.floor(fxrand() * this.anglesD.length);
        this.angle = this.anglesD[index];
        this.angleDir = radians(this.angle);
        break;
      case 5:
        index = Math.floor(fxrand() * this.anglesE.length);
        this.angle = this.anglesE[index];
        this.angleDir = radians(this.angle);
        break;
        case 6:
          index = Math.floor(fxrand() * this.anglesF.length);
          this.angle = this.anglesF[index];
          this.angleDir = radians(this.angle);
          break;
          case 7:
            index = Math.floor(fxrand() * this.anglesG.length);
            this.angle = this.anglesG[index];
            this.angleDir = radians(this.angle);
            break;
      default:
      index = Math.floor(fxrand() * this.anglesA.length);
      this.angle = this.anglesA[index];
      this.angleDir = radians(this.angle);
        break;
    }
    this.dir = createVector(sin(this.angleDir), cos(this.angleDir));
    this.endPos.add(this.startPos, this.angleDir);

  }

  update() {
    if (this.stop == false) {
      let newPos = p5.Vector.add(this.endPos, this.dir);
      this.endPos = newPos.copy();
    }
    this.hitBorder();
  }

  draw() {
    noFill();
    stroke(mainCol[0]);
    line(this.startPos.x, this.startPos.y, this.endPos.x, this.endPos.y);
    // fill(0);
    // text(""+this.id,this.endPos.x, this.endPos.y)
  }
  getMinLenght() {
    return this.minLenght;
  }

  getLength() {
    return dist(this.startPos.x, this.startPos.y, this.endPos.x, this.endPos.y);
  }

hitBorder(){
  if( this.borderStyle =='square'){
      this.hitRectBorder();
  }else{
      this.hitCircularBorder();
  }
}

  hitRectBorder() {
    if (this.endPos.x > theSize - border || this.endPos.x < border || this.endPos.y > theSize - border || this.endPos.y < border) {
      this.stop = true;
    }
}
  hitCircularBorder(){
      let center = createVector(width / 2, height /2);
      if(aproxDist(this.endPos,center)>maxDistCircularBorder*maxDistCircularBorder){
      this.stop = true;
}

  }


  setEndPos(pos){
endPos = pos;

  }

}
