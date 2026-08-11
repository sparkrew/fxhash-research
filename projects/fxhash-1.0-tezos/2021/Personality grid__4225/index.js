function getFeatureString(value) {
  if (value < 0.5) return "50%"
  if (value < 0.9) return "30%"
  else return "20%"
}
function getFeatureString2(value) {
  if (value < 0.5) return "grim"
  else return "Magic"
}
function getFeatureString4(value) {
	return Math.floor(fxrand()*1000)
}
function getFeatureString5(value) {
	if (value < 0.5) return "fear"
  if (value < 0.9) return "lovely"
  else return "charming"
}
window.$fxhashFeatures = {
  // feature can only be "low", "medium" or "high"
  "Grid power": getFeatureString(fxrand()),
	"personality":getFeatureString2(fxrand()),
	"Grid power value":getFeatureString4(fxrand()),
	"features": getFeatureString5(fxrand())
}