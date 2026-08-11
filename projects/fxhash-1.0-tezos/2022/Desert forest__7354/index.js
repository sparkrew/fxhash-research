function getFeatureString(value) {
  if (value < 0.5) return "99%"
  if (value < 0.9) return "99%"
  else return "99%"
}
function getFeatureString2(value) {
  if (value < 0.5) return "happy"
  else return "colorful"
}
function getFeatureString4(value) {
	return Math.floor(fxrand()*1000+1)
}
function getFeatureString5(value) {
	if (value < 0.5) return "sunshine"
  if (value < 0.9) return "charming"
  else return "natural"
}
window.$fxhashFeatures = {
  // feature can only be "low", "medium" or "high"
  "perfect": getFeatureString(fxrand()),
	"wonderful":getFeatureString2(fxrand()),
	"Rare value":getFeatureString4(fxrand()),
	"features": getFeatureString5(fxrand())
}