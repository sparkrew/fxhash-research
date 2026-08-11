/************
 * Dimensionless function
 * yepayepayepa 💥 EmProps
 * https://emprops.io/
 *****/

 const CENTER = "center";

 class DimensionlessCanvas {
   constructor(position, sizex, sizey = sizex, reference = 1) {
     this.position = position;
     this.reference = reference;
     this.sizex = sizex;
     this.sizey = sizey;
   }
   d(value) {
     return value * (this.sizey || sizex || this.dimensions()) / this.reference;
   }
   x(value) {
     return this.d(value) +
       // If position is centered
       (this.position === CENTER ? 1 : 0) * (
         ((width - this.dimensions()) / 2) +
         ((this.dimensions() - (this.sizex || this.dimensions())) / 2)
       );
   }
   y(value) {
     return this.d(value) +
       // If position is centered
       (this.position === CENTER ? 1 : 0) * (
         ((height - this.dimensions()) / 2) +
         ((this.dimensions() - (this.sizex || this.dimensions())) / 2)
       );
   }
   dimensions() {
     return Math.min(width, height);
   }
 }
 
 export const dimensionlessCanvas = new DimensionlessCanvas(CENTER);
 
 /**
  * Transforms a normalized value to its proportional dimension into the canvas.
  * Note that for coordinates x and y dimensionless x and dimensionless y must be used.
  * @param {number} value the normalized value to be transformed
  * @returns the transformed value  
  */
 export const dimensionless = (value) => {
   return dimensionlessCanvas.d(value);
 }
 
 /**
  * Transforms a normalized value into its proportional x coordinate.
  * This function exists so a centered canvas can be rendered taking in count the 
  * shortest side between width and height.
  */
 export const dimensionlessx = (value) => {
   return dimensionlessCanvas.x(value);
 };
 
 /**
  * Transforms a normalized value into its proportional y coordinate.
  * This function exists so a centered canvas can be rendered taking in count the 
  * shortest side between width and height.
  */
 export const dimensionlessy = (value) => {
   return dimensionlessCanvas.y(value);
 }
 
 if(typeof(p5) !== 'undefined') {
   p5.prototype.dimensionlessCanvas = dimensionlessCanvas;
   p5.prototype.dimensionless = dimensionless;
   p5.prototype.dimensionlessx = dimensionlessx;
   p5.prototype.dimensionlessy = dimensionlessy;
 }