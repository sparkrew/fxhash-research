var features = {};
//design
let designch=fxrand();
features.design="Fairy Circle"
if (designch<0.89)features.design="Pile of Buttons";
if (designch<0.78)features.design="Framed Flower";
if (designch<0.67)features.design="Sewing Buttons in a Line";
if (designch<0.56)features.design="Stripes";
if (designch<0.45)features.design="Mesh";
if (designch<0.34)features.design="Button Heart Flower";
if (designch<0.23)features.design="Sandbox";
if (designch<0.12)features.design="Many Buttons";
//daisy petals
let daisych=fxrand();
let daisyinout=fxrand();
features.daisyinout=daisyinout;
features.daisycol="Pure White";
features.daisy1="#ebf3f70d";
features.daisy2="#ebf3f70d";
features.daisy3="#ebf3f70d";
features.daisy4="#ebf3f70d";
features.daisy5="#ebf3f70d";
features.daisyw="#ebf3f722";
if (daisych<0.32){
features.daisycol="Pinked";
features.daisy1="#e9c6d704";
features.daisy2="#ebc5d704";
features.daisy3="#ebc1d504";
features.daisy4="#e5b8ce04";
features.daisy5="#eac9d904";
features.daisyw="#ebf3f7f2";
}
if (daisych<0.24){
features.daisycol="Purple Tipped";
features.daisy1="#bea2d902";
features.daisy2="#b99cd602";
features.daisy3="#bb9cd902";
features.daisy4="#bfa3da02";
features.daisy5="#be9fdc02";
features.daisyw="#ebf3f7f2";
}
if (daisych<0.16){
features.daisycol="Yellowish";
features.daisy1="#e5920703";
features.daisy2="#e7950a03";
features.daisy3="#e9940403";
features.daisy4="#ed9a0c03";
features.daisy5="#ef9d1003";
features.daisyw="#ebf3f704";
}
if (daisych<0.08){
features.daisycol="Lilac Tinged";
features.daisy1="#d4c4ec01";
features.daisy2="#d0bfe901";
features.daisy3="#d3c6e601";
features.daisy4="#d3c4e901";
features.daisy5="#d6c8eb01";
features.daisyw="#ebf3f780";
}
//fabric colours
features.cornshadowaa = "#00000010";
features.cornshadowa = "#00000018";
features.cornshadowab = "#0000002f";
features.cornshadow = "#00000044";
features.cornshadowd = "#00000088";
let fab1col=fxrand();
features.f1h = "#ffefd9";
features.f1sh1 = "#c8baa5";
features.f1sh2 = "#bcac96";
features.f1sh3 = "#bcb4aa";
features.f1sh1a = "#c8baa511";
features.f1sh2a = "#bcac9611";
features.f1sh3a = "#bcb4aa11";
if (fab1col<0.9){
features.f1h = "#dde2ef";
features.f1sh1 = "#9aa0b3";
features.f1sh2 = "#8993ae";
features.f1sh3 = "#969ba9";
features.f1sh1a = "#9aa0b311";
features.f1sh2a = "#8993ae11";
features.f1sh3a = "#969ba911";
}
if (fab1col<0.8){
features.f1h = "#f2e6fa";
features.f1sh1 = "#b1a3ba";
features.f1sh2 = "#aa9bb4";
features.f1sh3 = "#ac9ab8";
features.f1sh1a = "#b1a3ba11";
features.f1sh2a = "#aa9bb411";
features.f1sh3a = "#ac9ab811";
}
if (fab1col<0.7){
features.f1h = "#e6f4fa";
features.f1sh1 = "#83939a";
features.f1sh2 = "#7d929b";
features.f1sh3 = "#89979d";
features.f1sh1a = "#83939a11";
features.f1sh2a = "#7d929b11";
features.f1sh3a = "#89979d11";
}
if (fab1col<0.6){
features.f1h = "#eeeeee";
features.f1sh1 = "#a3a3a3";
features.f1sh2 = "#9b9b9b";
features.f1sh3 = "#a0a1a2";
features.f1sh1a = "#a3a3a311";
features.f1sh2a = "#9b9b9b11";
features.f1sh3a = "#a0a1a211";
}
if (fab1col<0.5){
features.f1h = "#006980";
features.f1sh1 = "#094653";
features.f1sh2 = "#023e4b";
features.f1sh3 = "#003844";
features.f1sh1a = "#09465311";
features.f1sh2a = "#023e4b11";
features.f1sh3a = "#00384411";
}
if (fab1col<0.4){
features.f1h = "#472570";
features.f1sh1 = "#18062d";
features.f1sh2 = "#220f38";
features.f1sh3 = "#10051e";
features.f1sh1a = "#18062d11";
features.f1sh2a = "#220f3811";
features.f1sh3a = "#10051e11";
}
if (fab1col<0.3){
features.f1h = "#e6d9af";
features.f1sh1 = "#9d9375";
features.f1sh2 = "#a59c7f";
features.f1sh3 = "#ab9f7b";
features.f1sh1a = "#9d937511";
features.f1sh2a = "#a59c7f11";
features.f1sh3a = "#ab9f7b11";
}
if (fab1col<0.2){
features.f1h = "#151c4f";
features.f1sh1 = "#0b0e2a";
features.f1sh2 = "#0a0e31";
features.f1sh3 = "#050928";
features.f1sh1a = "#0b0e2a11";
features.f1sh2a = "#0a0e3111";
features.f1sh3a = "#05092811";
}
if (fab1col<0.1){
features.f1h = "#481042";
features.f1sh1 = "#30082b";
features.f1sh2 = "#32062d";
features.f1sh3 = "#2c0a28";
features.f1sh1a = "#30082b11";
features.f1sh2a = "#32062d11";
features.f1sh3a = "#2c0a2811";
}
let fab2ch=fxrand();
features.fab2hor = "#e6dcb5";
features.fab2vert = "#645d8f";
if (fab2ch<0.91){
features.fab2hor = "#aca6a3";
features.fab2vert = "#1c1c1c";}
if (fab2ch<0.82){
features.fab2hor = "#1a79aa";
features.fab2vert = "#002b46";}
if (fab2ch<0.73){
features.fab2hor = "#b080a8";
features.fab2vert = "#23081e";}
if (fab2ch<0.64){
features.fab2hor = "#140b29";
features.fab2vert = "#716d7b";}
if (fab2ch<0.55){
features.fab2hor = "#d3cec8";
features.fab2vert = "#42353e";}
if (fab2ch<0.46){
features.fab2hor = "#1c2333";
features.fab2vert = "#99a1be";}
if (fab2ch<0.37){
features.fab2hor = "#4b4b5c";
features.fab2vert = "#a19fd4";}
if (fab2ch<0.28){
features.fab2hor = "#656265";
features.fab2vert = "#e1c8df";}
if (fab2ch<0.19){
features.fab2hor = "#6d5684";
features.fab2vert = "#d9d9da";}
if (fab2ch<0.1){
features.fab2hor = "#ccd2d3";
features.fab2vert = "#aea8b5";}
let denimch=fxrand();
features.denim1 = "#205490";
features.denim2 = "#003f84";
features.denim3 = "#003978";
features.denim4 = "#0b3468";
features.denim5 = "#154182";
features.denim6 = "#033773";
features.denim7 = "#083d81";
features.denimh1 = "#4eb3dd3d";
features.denimh2 = "#2e89b52d";
features.denimh3 = "#408ebe7d";
features.denimh4 = "#76cced3d";
features.denimh5 = "#5198c22d";
features.denimh6 = "#64b8e43d";
features.denimh7 = "#88d4eb7d";
features.denimd1 = "#06133d";
features.denimd2 = "#0f1e45";
features.denimd3 = "#0c1d49";
features.denimf = "#a0d4ea";
if (denimch<0.86){
features.denim1 = "#332859";
features.denim2 = "#342760";
features.denim3 = "#271b51";
features.denim4 = "#312850";
features.denim5 = "#3a2c6b";
features.denim6 = "#3d335f";
features.denim7 = "#483f68";
features.denimh1 = "#6c60973d";
features.denimh2 = "#796ca72d";
features.denimh3 = "#7c6bb47d";
features.denimh4 = "#a198bf3d";
features.denimh5 = "#988cc12d";
features.denimh6 = "#8979c03d";
features.denimh7 = "#857ba97d";
features.denimd1 = "#140e2a";
features.denimd2 = "#1d1340";
features.denimd3 = "#281f44";
features.denimf = "#e0ddec";
}
if (denimch<0.72){
features.denim1 = "#512b4f";
features.denim2 = "#562a54";
features.denim3 = "#4a1f48";
features.denim4 = "#441e42";
features.denim5 = "#4e2f4d";
features.denim6 = "#5d275b";
features.denim7 = "#552b53";
features.denimh1 = "#9473923d";
features.denimh2 = "#8e718c2d";
features.denimh3 = "#8464827d";
features.denimh4 = "#a48ca33d";
features.denimh5 = "#ac82aa2d";
features.denimh6 = "#b69cb53d";
features.denimh7 = "#c096bf7d";
features.denimd1 = "#3c143a";
features.denimd2 = "#290f27";
features.denimd3 = "#30132f";
features.denimf = "#dbc7da";
}
if (denimch<0.58){
features.denim1 = "#376d8f";
features.denim2 = "#30688b";
features.denim3 = "#2d6c94";
features.denim4 = "#406b87";
features.denim5 = "#1f577b";
features.denim6 = "#34698b";
features.denim7 = "#2e6a91";
features.denimh1 = "#779eb73d";
features.denimh2 = "#83a8c02d";
features.denimh3 = "#83b2d07d";
features.denimh4 = "#88acc43d";
features.denimh5 = "#9fbfd42d";
features.denimh6 = "#91bad43d";
features.denimh7 = "#82afcc7d";
features.denimd1 = "#102635";
features.denimd2 = "#122f42";
features.denimd3 = "#0b2b3f";
features.denimf = "#b6cfde";
}
if (denimch<0.44){
features.denim1 = "#272829";
features.denim2 = "#232627";
features.denim3 = "#262b2e";
features.denim4 = "#212122";
features.denim5 = "#373839";
features.denim6 = "#1e2021";
features.denim7 = "#2e3132";
features.denimh1 = "#6c6f713d";
features.denimh2 = "#8286892d";
features.denimh3 = "#9094967d";
features.denimh4 = "#99a2a83d";
features.denimh5 = "#b9babb2d";
features.denimh6 = "#bbc3c83d";
features.denimh7 = "#a9b3ba7d";
features.denimd1 = "#111314";
features.denimd2 = "#191a1b";
features.denimd3 = "#0b0c0d";
features.denimf = "#e9eff3";
}
if (denimch<0.3){
features.denim1 = "#4d4b84";
features.denim2 = "#59578d";
features.denim3 = "#42407f";
features.denim4 = "#4e4d7f";
features.denim5 = "#4e4c8d";
features.denim6 = "#494692";
features.denim7 = "#41407a";
features.denimh1 = "#979ec83d";
features.denimh2 = "#9aa2d32d";
features.denimh3 = "#7e87ba7d";
features.denimh4 = "#cacfed3d";
features.denimh5 = "#9297b72d";
features.denimh6 = "#babcc83d";
features.denimh7 = "#a6b0e97d";
features.denimd1 = "#1f1d4d";
features.denimd2 = "#110f4c";
features.denimd3 = "#1a1938";
features.denimf = "#d6daef";
}
if (denimch<0.12){
features.denim1 = "#237478";
features.denim2 = "#227d82";
features.denim3 = "#197074";
features.denim4 = "#2c7c80";
features.denim5 = "#2f7679";
features.denim6 = "#206568";
features.denim7 = "#1b797d";
features.denimh1 = "#62b8bc3d";
features.denimh2 = "#66cacf2d";
features.denimh3 = "#7ccfd37d";
features.denimh4 = "#7edee23d";
features.denimh5 = "#83cccf2d";
features.denimh6 = "#6cbec23d";
features.denimh7 = "#a0e4e77d";
features.denimd1 = "#11393b";
features.denimd2 = "#104144";
features.denimd3 = "#194749";
features.denimf = "#bee1e3";
}
//wood colours
var woodcolour =fxrand();
features.woodc="Oak Wood";
features.w1b1 = "#aca294";
features.w1b2 = "#b4ae9e";
features.w1d1 = "#706a5b1f";
features.w1d2 = "#6760521f";
features.w1l1 = "#d8d0b913";
features.w1l2 = "#dcd0bc13";
features.w1l3 = "#dcd0bc08";
features.w1d1d = "#706a5b55";
features.w1d2d = "#67605277";
if (woodcolour < 0.925) {
  features.woodc="Apple Wood";
  features.w1b1 = "#8c776b";
  features.w1b2 = "#886f5e";
  features.w1d1 = "#5b493d1f";
  features.w1d2 = "#5a4a3f1f";
  features.w1l1 = "#a9928413";
  features.w1l2 = "#bda29113";
  features.w1l3 = "#bda29108";
  features.w1d1d = "#5b493d55";
  features.w1d2d = "#5a4a3f77";
}
if (woodcolour < 0.85) {
  features.woodc="Elder Wood";
  features.w1b1 = "#34271f";
  features.w1b2 = "#3c2b24";
  features.w1d1 = "#28201e1f";
  features.w1d2 = "#261b151f";
  features.w1l1 = "#6b594f13";
  features.w1l2 = "#56453b13";
  features.w1l3 = "#56453b08";
  features.w1d1d = "#261b1555";
  features.w1d2d = "#28201e77";
}
if (woodcolour < 0.775) {
  features.woodc="Ash Wood";
  features.w1b1 = "#674a22";
  features.w1b2 = "#50341c";
  features.w1d1 = "#3322181f";
  features.w1d2 = "#2509001f";
  features.w1l1 = "#9a783913";
  features.w1l2 = "#7c5b2613";
  features.w1l3 = "#7c5b2608";
  features.w1d1d = "#33221855";
  features.w1d2d = "#25090077";
}
if (woodcolour < 0.7) {
  features.woodc="Birch Wood";
  features.w1b1 = "#8b8064";
  features.w1b2 = "#7a7562";
  features.w1d1 = "#25221d1f";
  features.w1d2 = "#3431281f";
  features.w1l1 = "#a9a79813";
  features.w1l2 = "#918a7713";
  features.w1l3 = "#918a7708";
  features.w1d1d = "#25221d55";
  features.w1d2d = "#34312877";
}
if (woodcolour < 0.625) {
  features.woodc="Poplar Wood";
  features.w1b1 = "#ab9c7f";
  features.w1b2 = "#c5b594";
  features.w1d1 = "#7a63434f";
  features.w1d2 = "#775c3f1f";
  features.w1l1 = "#d2cab313";
  features.w1l2 = "#cec5a813";
  features.w1l3 = "#cec5a808";
  features.w1d1d = "#7a634355";
  features.w1d2d = "#775c3f77";
}
if (woodcolour < 0.55) {
  features.woodc="Scots Pine";
  features.w1b1 = "#806b4c";
  features.w1b2 = "#95815e";
  features.w1d1 = "#422d0e4f";
  features.w1d2 = "#3429151f";
  features.w1l1 = "#9e917113";
  features.w1l2 = "#9f8e7213";
  features.w1l3 = "#cec5a808";
  features.w1d1d = "#422d0e55";
  features.w1d2d = "#9f8e7277";
}
if (woodcolour < 0.475) {
  features.woodc="Alder Wood";
  features.w1b1 = "#967b5b";
  features.w1b2 = "#866e4f";
  features.w1d1 = "#4b41314f";
  features.w1d2 = "#634a2a1f";
  features.w1l1 = "#e7d09d13";
  features.w1l2 = "#dbbd9013";
  features.w1l3 = "#dbbd9008";
  features.w1d1d = "#4b413155";
  features.w1d2d = "#634a2a77";
}
if (woodcolour < 0.4){
  features.woodc="Holly Wood";
  features.w1b1 = "#cfaf8b";
  features.w1b2 = "#d5b898";
  features.w1d1 = "#826b524f";
  features.w1d2 = "#82705b1f";
  features.w1l1 = "#e2c6a813";
  features.w1l2 = "#e6d2bc13";
  features.w1l3 = "#b8a4a508";
  features.w1d1d = "#826b5255";
  features.w1d2d = "#82705b77";
}
if (woodcolour < 0.325) {
  features.woodc="Willow Wood";
  features.w1b1 = "#ba9a69";
  features.w1b2 = "#bea473";
  features.w1d1 = "#9b7b4c4f";
  features.w1d2 = "#8b6b3a1f";
  features.w1l1 = "#c4a87913";
  features.w1l2 = "#bea77d13";
  features.w1l3 = "#bea77d08";
  features.w1d1d = "#9b7b4c55";
  features.w1d2d = "#5b4b3a77";
}
if (woodcolour < 0.25) {
  features.woodc="Hazel Wood";
  features.w1b1 = "#caa793";
  features.w1b2 = "#c09d89";
  features.w1d1 = "#ab876d4f";
  features.w1d2 = "#ac836f1f";
  features.w1l1 = "#dbb8a513";
  features.w1l2 = "#dfbda213";
  features.w1l3 = "#dfbda208";
  features.w1d1d = "#ab876d55";
  features.w1d2d = "#ac836f77";
}
if (woodcolour < 0.175) {
  features.woodc="Yew Wood";
  features.w1b1 = "#efbe83";
  features.w1b2 = "#f9c886";
  features.w1d1 = "#d79c404f";
  features.w1d2 = "#bb853d1f";
  features.w1l1 = "#fcd3b713";
  features.w1l2 = "#fadbac13";
  features.w1l3 = "#fadbac08";
  features.w1d1d = "#d79c4055";
  features.w1d2d = "#bb853d77";
}
if (woodcolour < 0.1) {
  features.woodc="Rowan Wood";
  features.w1b1 = "#807056";
  features.w1b2 = "#77674a";
  features.w1d1 = "#54452e4f";
  features.w1d2 = "#4b412f1f";
  features.w1l1 = "#a18f7213";
  features.w1l2 = "#9b866313";
  features.w1l3 = "#9b866308";
  features.w1d1d = "#54452e55";
  features.w1d2d = "#4b412f77";
}
//button colours
features.bchh2a = "#ffffff22";
features.ads="#a0a8ae";
features.ad = "#d4d8db";
features.ah1 = "#eef1f3";
features.ah2 = "#ffffff";
features.al = "#dee1e4";
features.bd = "#000000";
features.bh1 = "#5a5a5a";
features.bh2 = "#7e7e7e";
features.bl = "#111111";
features.cd = "#1d004b";
features.ch1 = "#5720b0";
features.ch2 = "#7439d2";
features.cl = "#2c0072";
features.dd = "#0e249a";
features.dh1 = "#7996ff";
features.dh2 = "#93b6ff";
features.dl = "#3652ec";
features.ed = "#023f65";
features.eh1 = "#5a8dad";
features.eh2 = "#6c94ad";
features.el = "#005284";
features.fd = "#7a7a7a";
features.fh1 = "#cdcdcd";
features.fh2 = "#dedede";
features.fl = "#a7a7a7";
features.gd = "#ae2e88";
features.gh1 = "#fe5ec3";
features.gh2 = "#ff8dd5";
features.gl = "#ef4ab2";
features.hd = "#360078";
features.hh1 = "#5a3ca5";
features.hh2 = "#805dd2";
features.hl = "#48019f";
features.id = "#cfbf83";
features.ih1 = "#fcf3d0";
features.ih2 = "#fef8e1";
features.il = "#fdeba9";
features.jd = "#a35c04";
features.jh1 = "#fbbf40";
features.jh2 = "#fac75b";
features.jl = "#f2a605";
features.kd = "#9c5604";
features.kh1 = "#e38920";
features.kh2 = "#f19831";
features.kl = "#bd6907";
features.md = "#ffffff05";
features.mh1 = "#ffffffee";
features.mh2 = "#ffffffee";
features.ml = "#ffffff00";
features.nd = "#3c0225";
features.nh1 = "#962268";
features.nh2 = "#9f3776";
features.nl = "#760248";
//ladybird
let backcolour = fxrand();
let spots =fxrand();
features.spots = "7 Spotted";
if (spots < 0.9) features.spots = "Transverse";
if (spots < 0.8) features.spots = "22 Spotted";
if (spots < 0.7) features.spots = "Convergent";
if (spots < 0.6) features.spots = "2 Spotted";
if (spots < 0.5) features.spots = "9 Spotted";
if (spots < 0.4) features.spots = "14 Spotted";
if (spots < 0.3) features.spots = "Eyed";
if (spots < 0.2) features.spots = "Striped!";
if (spots < 0.1) features.spots = "2 Eyed";
features.lbback = "Dark Red";
features.lbdr = "#790c0f";
features.lblr = "#b0120656";
features.lbws = "#f0ebe8";
features.lbwh = "#c4c4bc44";
features.lbl = "#191813";
features.lbe = "#e5d081";
features.lbbe = "#f0ebe8";
features.lblrf = "#e5d081";
if (backcolour < 0.9) {
  features.lbback = "Pink";
  features.lbdr = "#883441";
  features.lblr = "#ffb4d156";
  features.lblrf = "#ffb4d1";
  features.lbbe = "#f0ebe8";
}
if (backcolour < 0.8) {
  features.lbback = "Orange Red";
  features.lbdr = "#de4605";
  features.lblr = "#eb700656";
  features.lblrf = "#eb7006";
  features.lbbe = "#f6f1ee";
}
if (backcolour < 0.7) {
  features.lbback = "Orange";
  features.lbdr = "#ca6318";
  features.lblr = "#ffb84056";
  features.lblrf = "#ffb840";
  features.lbbe = "#f6f1ee";
}
if (backcolour < 0.6) {
  features.lbback = "Yellow";
  features.lbdr = "#985c05";
  features.lblr = "#eca00356";
  features.lblfr = "#ffcc00";
  features.lbbe="#b7520d";
}
if (backcolour < 0.5) {
  features.lbback = "Pale Yellow";
  features.lbdr = "#e0ad42";
  features.lblr = "#f5e29356";
  features.lblrf = "#f5e293";
  features.lbbe="#b7520d";
}
if (backcolour < 0.4) {
  features.lbback = "Black with Red Spots";
  features.lbdr = "#000000";
  features.lblr = "#33343556";
  features.lblrf = "#333435";
  features.spotc = "#b01206";
  features.lbbe="#f6f1ee";
}
if (backcolour < 0.3) {
  features.lbback = "Black with White Spots";
  features.lbdr = "#000000";
  features.lblr = "#494a4456";
  features.lblrf = "#494a44";
  features.spotc = "#f0ebe8";
  features.lbbe="#b7520d";
}
if (backcolour < 0.2) {
  features.lbback = "White";
  features.lbdr = "#968d7c";
  features.lblr = "#f2f6f756";
  features.lblrf = "#f2f6f7";
  features.lbbe="#b7520d";
}
if (backcolour < 0.1) {
  features.lbback = "Red with White Spots";
  features.lbdr = "#790c0f";
  features.lblr = "#b0120656";
  features.lblrf = "#b01206";
  features.spotc = "#f0ebe8";
  features.lbbe = "#111210";
}
window.$fxhashFeatures = {
'Design':features.design,
'Table':features.woodc,
'Pattern':features.spots,
'Ladybird' : features.lbback,
'Daisy' : features.daisycol
};