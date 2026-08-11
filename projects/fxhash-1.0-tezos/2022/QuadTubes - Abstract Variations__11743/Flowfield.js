class Flowfield {
  constructor(dim) {
    this.dim = dim;
    this.ff = Array(dim)
      .fill(0)
      .map((row) =>
        Array(dim)
          .fill(0)
          .map((cell) => rndAng())
      );
  }

  getAng(x, y) {
    let ffCol = Math.max(
      0,
      Math.min(
        this.ff.length - 1,
        Math.floor((Math.abs(x - width / 2) / (width / 2)) * this.ff.length)
      )
    );
    let ffRow = Math.max(
      0,
      Math.min(this.ff.length - 1, Math.floor((y / height) * this.ff.length))
    );
    return this.ff[ffRow][ffCol];
  }
}
