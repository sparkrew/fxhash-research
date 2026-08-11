function getMonsterType(x) {
    if (x < 0.25) {
        return "Fire";
    }
    if (x < 0.5) {
        return "Water";
    }
    if (x < 0.75) {
        return "Earth";
    }
    return "Wind";
}

function getRarity(x) {
    if (x < 0.02) {
        return "Rainbow";
    }
    return "Normal";
}

function getBackgroundColor(rarity, monsterType){
  if(rarity == "Rainbow"){
    return "linear-gradient("+Math.ceil(fxrand()*180)+"deg, LightSalmon, LightYellow, LightGreen, cyan, LightBlue, HotPink)";
  }
  if(monsterType == "Fire"){
    return "linear-gradient("+Math.ceil(fxrand()*180)+"deg, red, orange)";
  }
  if(monsterType == "Water"){
    return "linear-gradient("+Math.ceil(fxrand()*180)+"deg, blue, LightBlue)";
  }
  if(monsterType == "Earth"){
    return "linear-gradient("+Math.ceil(fxrand()*180)+"deg, brown, Chocolate)";
  }
  if(monsterType == "Wind"){
    return "linear-gradient("+Math.ceil(fxrand()*180)+"deg, DeepSkyBlue, DodgerBlue)";
  }
}

function getTypeEmoji(monsterType){
  if(monsterType == "Fire"){
    return "&#128293;";
  }
  if(monsterType == "Water"){
    return "&#128167;";
  }
  if(monsterType == "Earth"){
    return "&#127793;";
  }
  if(monsterType == "Wind"){
    return "&#128168;";
  }
}

function getWeakness(monsterType){
  if(monsterType == "Fire"){
    return "Water";
  }
  if(monsterType == "Water"){
    return "Earth";
  }
  if(monsterType == "Earth"){
    return "Wind";
  }
  if(monsterType == "Wind"){
    return "Fire";
  }
}

function getAttackNameFirst(x){
    if (x < 0.1) {
        return "Slow";
    }
    if (x < 0.2) {
        return "Fast";
    }
    if (x < 0.3) {
        return "Hyper";
    }
    if (x < 0.4) {
        return "Charging";
    }
    if (x < 0.5) {
        return "Breaking";
    }
    if (x < 0.6) {
        return "Low";
    }
    if (x < 0.7) {
        return "High";
    }
    if (x < 0.8) {
        return "Giga";
    }
    if (x < 0.9) {
        return "Ultra";
    }
    return "Spinning";
}

function getAttackNameSecond(x){
    if (x < 0.1) {
        return "punch";
    }
    if (x < 0.2) {
        return "kick";
    }
    if (x < 0.3) {
        return "swipe";
    }
    if (x < 0.4) {
        return "blow";
    }
    if (x < 0.5) {
        return "stab";
    }
    if (x < 0.6) {
        return "dodge";
    }
    if (x < 0.7) {
        return "claw";
    }
    if (x < 0.8) {
        return "blast";
    }
    if (x < 0.9) {
        return "throw";
    }
    return "explosion";
}
let rarity = getRarity(fxrand());
let multiplier = 1;
if(rarity == "Rainbow"){
  multiplier = 2;
}
let healthPoints = Math.ceil(fxrand()*999*multiplier);
let attackPower = Math.ceil(fxrand()*200*multiplier);
let monsterType = getMonsterType(fxrand());
let weakness = getWeakness(monsterType);
let attackName = getAttackNameFirst(fxrand())+" "+getAttackNameSecond(fxrand());

window.$fxhashFeatures = {
    "Health points": healthPoints + " HP",
    "Attack name": attackName,
    "Attack power": attackPower + " AP",
    "Type": monsterType,
    "Weakness": weakness,
    "Rarity": rarity
};

console.log(window.$fxhashFeatures);

let backgroundColor = getBackgroundColor(rarity, monsterType);

let cardNode = document.getElementById("card");
cardNode.className = monsterType+" "+rarity;
cardNode.style.background = backgroundColor;

document.getElementById("hp").innerHTML = healthPoints + " HP";
document.getElementById("attackName").innerHTML = attackName;
document.getElementById("ap").innerHTML = attackPower + " AP";
document.getElementById("typeTop").innerHTML = getTypeEmoji(monsterType);
document.getElementById("typeBottom").innerHTML = getTypeEmoji(monsterType);
if(rarity != "Rainbow"){
  document.getElementById("weakness").innerHTML = getTypeEmoji(weakness)+" weakness";
}

document.getElementById("monsterBody").style.width = 60+(fxrand()*200)+"px";

document.getElementById("monsterHead").style.width = 50+(fxrand()*100)+"px";
document.getElementById("monsterHead").style.height = 50+(fxrand()*100)+"px";

let eyeSize1=5+(fxrand()*25);
document.getElementById("monsterEye1").style.width = eyeSize1+"px";
document.getElementById("monsterEye1").style.height = eyeSize1+"px";
let eyeSize2=5+(fxrand()*25);
document.getElementById("monsterEye2").style.width = eyeSize2+"px";
document.getElementById("monsterEye2").style.height = eyeSize2+"px";