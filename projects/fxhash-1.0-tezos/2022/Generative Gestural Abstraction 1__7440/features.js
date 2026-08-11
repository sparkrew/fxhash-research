function calculateFeatures() {
  
  const scribbleLayers = pseudorandom.weightedPick(["1", "2", "3", "4", "5", "6", "7"], [4, 10, 40, 30, 10, 4, 2]);
 
  const closedLoops = pseudorandom.weightedPick(["No", "Yes"], [30, 70]);
  
  const darkMode = pseudorandom.weightedPick(["No", "Yes"], [90, 10]); 
  
  const transparency = pseudorandom.weightedPick(["No", "Yes"], [90, 10]);  
  
    
    const features = {
    "Layers": scribbleLayers, /* "Color Palette": colorPalette, "Layer 1 Complexity": complexity1, "Layer 2 Complexity": complexity2, "Layer 3 Complexity": complexity3, "Layer 4 Complexity": complexity4, "Layer 5 Complexity": complexity5, "Layer 6 Complexity": complexity6, "Layer 7 Complexity": complexity7,*/ "ClosedLoops": closedLoops, "DarkMode": darkMode, "Transparency": transparency,
    }

  // Sends the features to fxhash for processing
  window.$fxhashFeatures = features;
  return features;
}