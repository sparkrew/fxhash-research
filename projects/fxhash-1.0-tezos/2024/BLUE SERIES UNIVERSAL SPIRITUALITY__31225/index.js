/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
// demonstrate seed reset
// for (let i = 0; i < 10; i++) {
//   console.log(i, $fx.rand(), $fx.randminter())
//   $fx.rand.reset();
//   $fx.randminter.reset();
// }

const sp = new URLSearchParams(window.location.search)
//  console.log(sp);

// this is how to define parameters
$fx.params([
  {
    id: "random_number",
    name: "random number",
    type: "number",
    //default: fxrand() * 9999999,
    options: {
      min: 0,
      max: 9999999,
      step: 1,
    },
  },

  {
    id: "number",
    name: "Object number",
    type: "number",
    default: 2,
    options: {
      min: 1,
      max: 5,
      step: 1,
    },
  },

  {
    id: "bigint_id",
    name: "A bigint",
    type: "bigint",
    update: "code-driven",
    //default: BigInt(Number.MAX_SAFE_INTEGER * 2),
    options: {
      min: Number.MIN_SAFE_INTEGER * 4,
      max: Number.MAX_SAFE_INTEGER * 4,
      step: 1,
    },
  },
  {
    id: "string_id_long",
    name: "A string long",
    type: "string",
    update: "code-driven",
    //default: "hello",
    options: {
      minLength: 1,
      maxLength: 512,
    },
  },
  {
    id: "select_id",
    name: "A selection",
    type: "select",
    update: "code-driven",
    //default: "pear",
    options: {
      options: ["apple", "orange", "pear"],
    },
  },
  {
    id: "color_id",
    name: "A color",
    type: "color",
    update: "code-driven",
    //default: "ff0000",
  },
  {
    id: "boolean_id",
    name: "A boolean",
    type: "boolean",
    update: "code-driven",
    //default: true,
  },
  {
    id: "string_id",
    name: "A string",
    type: "string",
    update: "code-driven",
    //default: "hello",
    options: {
      minLength: 1,
      maxLength: 512,
    },
  },
])

// this is how features can be defined
$fx.features({
  "A random feature": Math.floor($fx.rand() * 10),
  "A random boolean": $fx.rand() > 0.5,
  "A random string": ["A", "B", "C", "D"].at(Math.floor($fx.rand() * 4)),
  "Feature from params, its a number": $fx.getParam("number_id"),
})

function main() {
  // log the parameters, for debugging purposes, artists won't have to do that
  // console.log("Current param values:");
  // // Raw deserialize param values
  // console.log($fx.getRawParams());
  // // Added addtional transformation to the parameter for easier usage
  // // e.g. color.hex.rgba, color.obj.rgba.r, color.arr.rgb[0]
  // console.log($fx.getParams());

  // // how to read a single raw parameter
  // console.log("Single raw value:");
  // console.log($fx.getRawParam("color_id"));
  // // how to read a single transformed parameter
  // console.log("Single transformed value:");
  // console.log($fx.getParam("color_id"));
}

main()

$fx.on(
  "params:update",
  newRawValues => {
    // opt-out default behaviour
    if (newRawValues.number_id === 5) return false
    // opt-in default behaviour
    return true
  },
  (optInDefault, newValues) => main()
)

/******/ })()
;