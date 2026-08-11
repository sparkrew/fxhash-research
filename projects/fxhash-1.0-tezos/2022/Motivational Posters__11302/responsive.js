// RESPONSIVE SQUARE TEMPLATE

// This template shows a combination of three useful tricks:
//
//   1. draw a square canvas that fits in the current window
//   2. scale the content based on the canvas size
//   3. center the canvas within the page
//
// Try resizing your sketch window to see the effect

// p5.js template for minting on Hic et Nunc
// Made for Processing's 20th anniversary Fundraiser
// By Raphaël de Courville (@sableraph)
// Find the latest version at https://github.com/SableRaf/HicEtNunc-p5js-templates

// 🤓 Note: replace thumbnail.png with your own thumbnail (512×512 pixels is best)

// **************************
// *       PARAMETERS       *
// **************************

// Set this to true when minting
p5.disableFriendlyErrors = true;

// The title of your piece goes here (not visible on hicetnunc)
document.title = "Space";

// if true, then the canvas cannot be larger than the reference size
const hasMaxSize = true;

// if true the canvas will be vertically and horizontally centered inside the window
const isCentered = true;

// **************************
// *    GLOBAL VARIABLES    *
// **************************

var canvasSize;
var windowScale;
var fullScreen;



// **************************
// *        RESIZE          *
// **************************

function windowResized() {
  setDimensions();
  resizeCanvas(canvasSize, canvasSize);
  DrawAll();

}

// **************************
// *         INPUT          *
// **************************



// **************************
// *         UTILS          *
// **************************

function setDimensions() {
  fullScreen = isFullscreen();

  // This is how we constrain the canvas to the smallest dimension of the window
  // Thanks to Maxim Schoemaker for this trick! twitter.com/MaximSchoemaker - maximschoemaker.com
  canvasSize = min(windowWidth, windowHeight);

  if (hasMaxSize) {
    canvasSize = min(referenceSize, canvasSize);
  }

  // windowScale goes from 0.0 to 1.0 as canvasSize goes from 0.0 to referenceSize
  // if hasMaxSize is set to true, it will be clamped to 1.0 otherwise it keeps growing over 1.0
  windowScale = map(canvasSize, 0, referenceSize, 0, 1, hasMaxSize);
}

function centerCanvas() {
  var s = document.body.style;

  s.display = "flex";
  s.overflow = "hidden";
  s.height = "100vh";
  s.alignItems = "center";
  s.justifyContent = "center";
}

function isFullscreen() {
  if (
    document.fullscreenElement ||
    window.screen.height - window.innerHeight <= 3 ||
    isEdgeFullscreen() ||
    isSafariFullscreen()
  ) {
    return true;
  }
  return false;
}

function isSafariFullscreen() {
  if (document.webkitIsFullScreen) {
    return true;
  }
  return false;
}

function isEdgeFullscreen() {
  if (isUserAgent("Edge") && window.screen.height - window.innerHeight <= 235) {
    return true;
  }
  return false;
}

function isUserAgent(name) {
  if (window.navigator.userAgent.indexOf(name) > -1) {
    return true;
  }
  return false;
}

// toggle fullscreen (for testing)
// function mousePressed() {
//   let fs = fullscreen();
//   fullscreen(!fs);
// }