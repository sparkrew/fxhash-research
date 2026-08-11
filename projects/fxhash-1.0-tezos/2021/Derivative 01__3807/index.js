function getFeatureString(value) {
  if (value < 0.5) return "30%"
  if (value < 0.9) return "50%"
  else return "20%"
}
function getFeatureString2(value) {
  if (value < 0.5) return "0"
  else return "1"
}
function getFeatureString5(value) {
	if (value < 0.5) return "p"
  if (value < 0.9) return "k"
  else return "r"
}
window.$fxhashFeatures = {
  // feature can only be "low", "medium" or "high"
  "circular": getFeatureString(fxrand()),
	"":getFeatureString2(fxrand()),
	"Rare value": getFeatureString5(fxrand())
}