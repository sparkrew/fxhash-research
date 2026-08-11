function preload() {
  Aelia = loadFont("./Aelia.otf");
  Arapey = loadFont("./Arapey.ttf");
  Argentile = loadFont("./Argentile.otf");
  ArgentileD = loadFont("./ArgentileD.otf");
  ArundellB = loadFont("./ArundellB.otf");
  ArundellBI = loadFont("./ArundellBI.otf");
  Aurebesh = loadFont("./Aurebesh.otf");
  Bebas = loadFont("./Bebas.otf");
  Bluegrass = loadFont("./Bluegrass.otf");
  Bootle = loadFont("./Bootle.ttf");
  Buyan = loadFont("./BuyanRegular.ttf");
  Droid = loadFont("./Droid.ttf");
  DroidB = loadFont("./DroidB.ttf");
  DroidBI = loadFont("./DroidBI.ttf");
  DroidI = loadFont("./DroidI.ttf");
  Earth = loadFont("./Earth.otf");
  Elmessiri = loadFont("./Elmessiri.otf");
  Foglihtenno = loadFont("./Foglihtenno.otf");
  Jufatti = loadFont("./Jufatti.otf");
  LicensePlate = loadFont("./LicensePlate.ttf");
  Loja = loadFont("./Loja.otf");
  Mangabey = loadFont("./Mangabey.otf");
  Muli = loadFont("./Muli.ttf");
  NegarHI = loadFont("./NegarHI.otf");
  Nugie = loadFont("./Nugie.ttf");
  Orgreave = loadFont("./Orgreave.ttf");
  Oxford = loadFont("./Oxford.ttf");
  Pasti = loadFont("./Pasti.otf");
  Playfair = loadFont("./Playfair.ttf");
  Quango = loadFont("./Quango.otf");
  Quicksand = loadFont("./Quicksand.otf");
  Quinngothic = loadFont("./Quinngothic.ttf");
  Raffles = loadFont("./Raffles.otf");
  RafflesB = loadFont("./RafflesB.otf");
  RafflesO = loadFont("./RafflesO.otf");
  Regencie = loadFont("./Regencie.ttf");
  Rogue = loadFont("./Rogue.ttf");
  RogueB = loadFont("./RogueB.ttf");
  Rondal = loadFont("./Rondal.otf");
  RondalB = loadFont("./RondalB.otf");
  RondalSB = loadFont("./RondalSB.otf");
  Sanlulus = loadFont("./Sanlulus.otf");
  Satella = loadFont("./Satella.ttf");
  Simvoni = loadFont("./Simvoni.otf");
  Stompb = loadFont("./Stompb.otf");
  Stompf = loadFont("./Stompf.otf");
  Swansea = loadFont("./Swansea.ttf");
  Tatty = loadFont("./Tatty.otf");
  TattyB = loadFont("./TattyB.otf");
  Understock = loadFont("./Understock.otf");
  Vollkorn = loadFont("./Vollkorn.otf");
}
function myRandom(low, high) {
  let r = fxrand();
  let t = map(r, 0, 1, low, high);
  return t;
}
function myRandomA(i) {
  let t = i.length * fxrand();
  return i[Math.floor(t)];
}
function shuffleArray(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(fxrand() * (i + 1));
    let temp = a[i];
    a[i] = a[j];
    a[j] = temp;
  }
  return a;
}
