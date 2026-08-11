import * as THREE from "three";

class MushroomCap {
  constructor(width, height, gillHeightFactor, gillDepthFactor) {
    //driving dimensions - should be passed in
    this.capWidth = width;
    this.capHeight = height;
    this.gillsFactor = gillDepthFactor;

    //computed dimensions - we need these to draw curves
    this.gillsHeight = this.capHeight * gillHeightFactor;
    this.lipWidth = this.capWidth * 0.3;
    this.stemTopWidth = this.capWidth * 0.65;
    this.stemBaseWidth = this.capWidth * 0.55;

    //curve objects
    this.capCurve = {};
    this.gillsCurve = {};
    this.stemCurve = {};

    //lathe geometry!
    this.fungualBufferGeometry = {};
    this.stemBufferGeometry = {};

    //call curve draw functions then build up the buffer
    this.drawCrvs();
    this.draw3dFungus();
  }

  drawCrvs() {
    //start from lip, move up to tippy top -- cap
    this.capCurve = new THREE.CubicBezierCurve(
      new THREE.Vector2(this.capWidth - this.lipWidth, 0),
      new THREE.Vector2(this.capWidth, 0),
      new THREE.Vector2(this.capWidth, this.capHeight),
      new THREE.Vector2(0.005, this.capHeight)
    );

    //lip to stem -- gils
    this.gillsCurve = new THREE.QuadraticBezierCurve(
      new THREE.Vector2(0.005, -this.gillsHeight * this.gillsFactor),
      new THREE.Vector2(this.capWidth - this.lipWidth, -this.gillsHeight),
      new THREE.Vector2(this.capWidth - this.lipWidth, 0)
    );

    //stem
    this.stemCurve = new THREE.CubicBezierCurve(
      new THREE.Vector2(this.stemBaseWidth * 0.4, -0.8),
      new THREE.Vector2(this.stemBaseWidth, -1.1),
      new THREE.Vector2(this.stemTopWidth, this.capHeight * 0.25),
      new THREE.Vector2(this.stemTopWidth * 0.4, this.capHeight * 0.1)
    );
  }

  draw3dFungus() {
    //lathe geometry needs an array of points - we get these from the curves
    let capPts = this.capCurve.getPoints(50);
    let gillsPts = this.gillsCurve.getPoints(50);
    let allPts = gillsPts.concat(capPts);

    //lathers
    this.fungualBufferGeometry = new THREE.LatheBufferGeometry(allPts, 50);

    let stemPts = this.stemCurve.getPoints(24);
    this.stemBufferGeometry = new THREE.LatheBufferGeometry(stemPts, 24);
  }
}

export { MushroomCap };
