/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};

const sp = new URLSearchParams(window.location.search)

main()

$fx.params([
  {
    id : "Phrase",
    name : "Word",
    type : "string",
  },
])

const bgcolor = $fx.getParam("Phrase");

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