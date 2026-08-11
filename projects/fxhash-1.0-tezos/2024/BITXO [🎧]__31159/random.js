function getRandomInt(min,max) {
    let a=Math.round(mmap($fx.rand(), 0,1, min,max));
    return a;
}
function getRandomBool() {
    let v=getRandomInt(0,1)
    if(v==1){
      return true;
    }else{
      return false;
    }
}
function getRandomBoolN(n) {
    let v=getRandomInt(0,n)
    if(v==1){
      return true;
    }else{
      return false;
    }
}

function getRandomNegatiu() {
    let v=getRandomInt(0,1)
    if(v==1){
      return 1;
    }else{
      return -1;
    }
}

function ompleVRandom() {
  for(let i=0;i<10000;i++){
    vrandoms.push($fx.rand())
  }
}

function ompleDRandom() {
  for(let i=0;i<10000;i++){
    drandoms.push($fx.rand())
  }
}

function vfxrand(){
  let r=vrandoms[contvrand];
  contvrand+=1;
  if(contvrand>=vrandoms.length){
    contvrand=0;
    
  } 
  return r;
}
function dfxrand(){
  let r=drandoms[contdrand];
  contdrand+=1;
  if(contdrand>=drandoms.length){
    contdrand=0;
    
  } 
  return r;
}

function getVRandomInt(min,max){
  let r=vrandoms[contvrand];
  let a=int(map(r, 0,1, min,max));
  contvrand+=1;
  if(contvrand>=vrandoms.length){
    contvrand=0;
    
  } 
  return a;
}

function getDRandomInt(min,max){
  let r=drandoms[contdrand];
  let a=int(map(r, 0,1, min,max));
  contdrand+=1;
  if(contdrand>=drandoms.length){
    contdrand=0;
    
  } 
  return a;
}

function getVRandomNegatiu() {
    let v=getVRandomInt(0,2)
    if(v==1){
      return 1;
    }else{
      return -1;
    }
}
function getDRandomNegatiu() {
    let v=getDRandomInt(0,2)
    if(v==1){
      return 1;
    }else{
      return -1;
    }
}

function getVRandomBool() {
    let v=getVRandomInt(0,1)
    if(v==1){
      return true;
    }else{
      return false;
    }
}
function getVRandomBoolN(n) {
    let v=getVRandomInt(0,n)
    if(v==1){
      return true;
    }else{
      return false;
    }
}
function mmap (value, a, b, c, d) {
    // first map value from (a..b) to (0..1)
    value = (value - a) / (b - a);
    // then map it from (0..1) to (c..d) and return it
    return c + value * (d - c);
}

function randomize(values) {
  let index = values.length;
  let randomIndex;

  while (index != 0) {
    // Pick a remaining element.
  
      randomIndex = Math.floor(vfxrand() * index);

    
    index--;

    // And swap it with the current element.
    [values[index], values[randomIndex]] = [values[randomIndex], values[index]];
  }

  return values;
}