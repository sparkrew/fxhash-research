window.$fxhashFeatures = {
   "Population": getFeatureN(fxrand()),
   "Pad": getFeaturepadPercent(fxrand()),
   "Duration": getFeatureDuration(fxrand()),
   "Mutant": getFeatureMutant(fxrand()),
}

function getFeatureN(v){
  return Math.floor((v*15)+8);
}

function getFeaturepadPercent(v){
  return Math.floor((v*15)+8);
}

function getFeatureDuration(v){
  return Math.floor((v*15)+12);
}

function getFeatureMutant(v){
  return v > 0.88 ? true : false;
}
