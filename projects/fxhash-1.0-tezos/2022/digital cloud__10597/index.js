window.$fxhashFeatures = {
   "cloud speed": getSpeed(fxrand()),
   "color": getColor(fxrand())
} 

function getSpeed(value){
   switch(Math.floor(value*100)%3){
      case 0:
        return "slow";
        break;
      case 1:
        return "medium";
        break;
      case 2:        
        return "fast";
        break;
     }
}

function getColor(value){
   switch(Math.floor(value*100)%3){
      case 0:
        return "gray";
        break;
      case 1:
        return "sunset";
        break;
      case 2:        
        return "sunny";
        break;
     }
}