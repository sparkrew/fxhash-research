/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
const sp = new URLSearchParams(window.location.search)
$fx.params([
])

$fx.features({
})

function main() {
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
/******/ })()
;