var features = {};
rset = fxrand();
pal = fxrand();
strr = fxrand();
tile = fxrand();
tiletype = fxrand();
backgc = fxrand();
bug = fxrand();
sign = fxrand();
features.signed = "No";
if (sign < 0.02) features.signed = "Yes";
features.bug = "No";
fbug = "No";
if (bug < 0.7) {
  features.bug = "Yes";
  fbug = "Yes";
}
features.bgc = "Light";
fbgc = "Light";
if (backgc < 0.2) {
  features.bgc = "Dark";
  fbgc = "Dark";
}
features.tiles = "All the Tiles";
rrsa = [
  "s1ta()",
  "s2ta()",
  "s3ta()",
  "s4ta()",
  "s5ta()",
  "s6ta()",
  "s7ta()",
  "s8ta()",
  "s9ta()",
  "s10ta()",
  "s11ta()",
  "s12ta()",
  "s13ta()",
];
rrpa = [
  "p1ta()",
  "p2ta()",
  "p3ta()",
  "p4ta()",
  "p5ta()",
  "p6ta()",
  "p7ta()",
  "p8ta()",
  "p9ta()",
  "p10ta()",
  "p11ta()",
  "p12ta()",
  "p13ta()",
];
if (tile < 0.3) {
  features.tiles = "Just Thirteen";
  rrsa = ["s13ta()"];
  rrpa = ["p13ta()"];
}
if (tile < 0.28) {
  features.tiles = "Just Twelve";
  rrsa = ["s12ta()"];
  rrpa = ["p12ta()"];
}
if (tile < 0.24) {
  features.tiles = "All the Straights";
  rrsa = ["s3ta()", "s12ta()", "s13ta()", "s11ta()", "s7ta()"];
  rrpa = ["p3ta()", "p12ta()", "p13ta()", "p11ta()", "p7ta()"];
}
if (tile < 0.19) {
  features.tiles = "No Straights";
  rrsa = [
    "s1ta()",
    "s2ta()",
    "s4ta()",
    "s5ta()",
    "s6ta()",
    "s8ta()",
    "s9ta()",
    "s10ta()",
  ];
  rrpa = [
    "p1ta()",
    "p2ta()",
    "p4ta()",
    "p5ta()",
    "p6ta()",
    "p8ta()",
    "p9ta()",
    "p10ta()",
  ];
}
if (tile < 0.14) {
  features.tiles = "Just Symmetrical";
  rrsa = ["s10ta()", "s12ta()", "s13ta()", "s1ta()"];
  rrpa = ["p10ta()", "p12ta()", "p13ta()", "p1ta()"];
}
if (tile < 0.09) {
  features.tiles = "Just Four and Thirteen";
  rrsa = ["s4ta()", "s13ta()"];
  rrpa = ["p4ta()", "p13ta()"];
}
if (tile < 0.04) {
  features.tiles = "One, Five, Six and Ten";
  rrsa = ["s1ta()", "s5ta()", "s6ta()", "s10ta()"];
  rrpa = ["p1ta()", "p5ta()", "p6ta()", "p10ta()"];
}
features.tiletype = "Square";
if (tiletype < 0.5) {
  features.tiletype = "Hexagonal";
  features.tiles = "All Tiles";
  hrsa = ["h1ta()", "h2ta()", "h3ta()", "h4ta()", "h5ta()", "h7ta()"];
  hrpa = ["i1ta()", "i2ta()", "i3ta()", "i4ta()", "i5ta()", "i7ta()"];
  if (tile < 0.2) {
    features.tiles = "Just One";
    hrsa = ["h1ta()"];
    hrpa = ["i1ta()"];
  }
  if (tile < 0.15) {
    features.tiles = "Just Four";
    hrsa = ["h4ta()"];
    hrpa = ["i4ta()"];
  }
  if (tile < 0.1) {
    features.tiles = "One, Three and Four";
    hrsa = ["h1ta()", "h3ta()", "h4ta()"];
    hrpa = ["i1ta()", "i3ta()", "i4ta()"];
  }
  if (tile < 0.05) {
    features.tiles = "Two, Five and Seven";
    hrsa = ["h2ta()", "h5ta()", "h7ta()"];
    hrpa = ["i2ta()", "i5ta()", "i7ta()"];
  }
  if (features.signed == "Yes") hrpa.push("hexsign()");
}
if (features.signed == "Yes") rrpa.push("sqsign()");
function choosecolours() {
  print(fxhash);
  c1 = "#f7d3d7";
  c2 = "#f1b859";
  c3 = "#6D9B8E";
  c4 = "#c35a62";
  c5 = "#eb7e62";

  cb = "#ffffff";
  cl = "#eb7e62";
  if (fbgc == "Dark") {
    cb = "#000000";
    cl = "#221011";
  }
  if (pal < 0.98) {
    c11 = "#f7d3d7";
    c12 = "#70CED1";
    c13 = "#9B6D9A";
    c14 = "#C35A8D";
    c15 = "#ECC892";

    cb = "#ffffff";
    cl = "#70CED1";
    if (fbgc == "Dark") {
      cb = "#000000";
      cl = "#251A25";
    }
  }
  if (pal < 0.96) {
    c1 = "#BDBDBD";
    c2 = "#fcf8c4";
    c3 = "#632720";
    c4 = "#f6a50d";
    c5 = "#494949";

    cb = "#ffffff";
    cl = "#BDBDBD";
    if (fbgc == "Dark") {
      cb = "#000000";
      cl = "#272727";
    }
  }
  if (pal < 0.94) {
    c1 = "#FF6B00";
    c2 = "#FF00DE";
    c3 = "#0082FF";
    c4 = "#FFD500";
    c5 = "#8800FF";

    cb = "#ffffff";
    cl = "#FFD500";
    if (fbgc == "Dark") {
      cb = "#000000";
      cl = "#1D0036";
    }
  }
  if (pal < 0.92) {
    c1 = "#2E1600";
    c2 = "#3F7A8A";
    c3 = "#FF8006";
    c4 = "#FEB63B";
    c5 = "#FAD492";

    cb = "#ffffff";
    cl = "#FEB63B";
    if (fbgc == "Dark") {
      cb = "#000000";
      cl = "#2E1600";
    }
  }
  if (pal < 0.9) {
    c1 = "#E88B59";
    c2 = "#923d38";
    c3 = "#1775a6";
    c4 = "#122035";
    c5 = "#121119";

    cb = "#ffffff";
    cl = "#E88B59";
    if (fbgc == "Dark") {
      cb = "#000000";
      cl = "#121119";
    }
  }
  if (pal < 0.88) {
    c1 = "#0A101F";
    c2 = "#FFD999";
    c3 = "#FDA24B";
    c4 = "#24454E";
    c5 = "#355D72";

    cb = "#ffffff";
    cl = "#FDA24B";
    if (fbgc == "Dark") {
      cb = "#000000";
      cl = "#0A101F";
    }
  }
  if (pal < 0.86) {
    c1 = "#d4bf63";
    c2 = "#b16367";
    c3 = "#cb8866";
    c4 = "#1d2050";
    c5 = "#754968";

    cb = "#ffffff";
    cl = "#cb8866";
    if (fbgc == "Dark") {
      cb = "#000000";
      cl = "#11132C";
    }
  }
  if (pal < 0.84) {
    c1 = "#C8DD6C";
    c2 = "#35BE8E";
    c3 = "#3276C0";
    c4 = "#8844C4";
    c5 = "#C47E44";

    cb = "#ffffff";
    cl = "#C8DD6C";
    if (fbgc == "Dark") {
      cb = "#000000";
      cl = "#0C1E31";
    }
  }
  if (pal < 0.82) {
    c1 = "#FECBB1";
    c4 = "#FF7A8D";
    c5 = "#AD4465";
    c2 = "#653383";
    c3 = "#012344";

    cb = "#ffffff";
    cl = "#FECBB1";
    if (fbgc == "Dark") {
      cb = "#000000";
      cl = "#00162B";
    }
  }
  if (pal < 0.8) {
    c1 = "#B4D4B3";
    c2 = "#feceab";
    c3 = "#e84a5f";
    c4 = "#2a363b";
    c5 = "#493850";

    cb = "#ffffff";
    cl = "#B4D4B3";
    if (fbgc == "Dark") {
      cb = "#000000";
      cl = "#1B2225";
    }
  }
  if (pal < 0.78) {
    c1 = "#9FCFCA";
    c2 = "#eef3dc";
    c3 = "#FF8883";
    c4 = "#8F5553";
    c5 = "#4f6467";

    cb = "#ffffff";
    cl = "#9FCFCA";
    if (fbgc == "Dark") {
      cb = "#000000";
      cl = "#241514";
    }
  }
  if (pal < 0.76) {
    c1 = "#f2d682";
    c4 = "#de6e53";
    c5 = "#c83a53";
    c2 = "#622a3f";
    c3 = "#78B4B8";

    cb = "#ffffff";
    cl = "#78B4B8";
    if (fbgc == "Dark") {
      cb = "#000000";
      cl = "#240F17";
    }
  }
  if (pal < 0.74) {
    c1 = "#3d606b";
    c2 = "#51a7a0";
    c3 = "#B9A2B7";
    c4 = "#fcb67d";
    c5 = "#534972";

    cb = "#ffffff";
    cl = "#fcb67d";
    if (fbgc == "Dark") {
      cb = "#000000";
      cl = "#152225";
    }
  }
  if (pal < 0.72) {
    c1 = "#BDBDBD";
    c2 = "#0A3232";
    c3 = "#3E857B";
    c4 = "#ae895d";
    c5 = "#a26425";

    cb = "#ffffff";
    cl = "#ae895d";
    if (fbgc == "Dark") {
      cb = "#000000";
      cl = "#0A3232";
    }
  }
  if (pal < 0.7) {
    c1 = "#1F1C0F";
    c2 = "#878787";
    c3 = "#725801";
    c4 = "#F0EAB6";
    c5 = "#F1D76E";

    cb = "#ffffff";
    cl = "#878787";
    if (fbgc == "Dark") {
      cb = "#000000";
      cl = "#1F1C0F";
    }
  }
  if (pal < 0.68) {
    c1 = "#D01C5B";
    c2 = "#CD2CA8";
    c3 = "#FE2F03";
    c4 = "#FDA1B7";
    c5 = "#F67A03";

    cb = "#ffffff";
    cl = "#FA84A1";
    if (fbgc == "Dark") {
      cb = "#000000";
      cl = "#24040F";
    }
  }
  if (pal < 0.66) {
    c1 = "#061631";
    c2 = "#BD3F06";
    c3 = "#690A0A";
    c4 = "#F8EC92";
    c5 = "#DDDDDD";

    cb = "#ffffff";
    cl = "#BD3F06";
    if (fbgc == "Dark") {
      cb = "#000000";
      cl = "#061631";
    }
  }
  if (pal < 0.64) {
    c1 = "#522CC0";
    c2 = "#9C2DC2";
    c3 = "#C52D77";
    c4 = "#C4702C";
    c5 = "#2D89C4";

    cb = "#ffffff";
    cl = "#C4702C";
    if (fbgc == "Dark") {
      cb = "#000000";
      cl = "#150B33";
    }
  }
  if (pal < 0.62) {
    c1 = "#BBBBBB";
    c2 = "#88C2C4";
    c3 = "#434343";
    c4 = "#252525";
    c5 = "#25BEB9";

    cb = "#ffffff";
    cl = "#BBBBBB";
    if (fbgc == "Dark") {
      cb = "#000000";
      cl = "#252525";
    }
  }
  if (pal < 0.6) {
    c1 = "#161616";
    c2 = "#FFC1D7";
    c3 = "#3C3C3C";
    c4 = "#009B7B";
    c5 = "#E2E2E2";

    cb = "#ffffff";
    cl = "#FFC1D7";
    if (fbgc == "Dark") {
      cb = "#000000";
      cl = "#161616";
    }
  }
  if (pal < 0.58) {
    c1 = "#bec17d";
    c2 = "#9B546F";
    c3 = "#3a7a6a";
    c4 = "#F3F1EB";
    c5 = "#76AC9E";

    cb = "#ffffff";
    cl = "#76AC9E";
    if (fbgc == "Dark") {
      cb = "#000000";
      cl = "#0F201C";
    }
  }
  if (pal < 0.56) {
    c1 = "#FBFCA2";
    c2 = "#FFA7BC";
    c3 = "#9B4C62";
    c4 = "#81B2C9";
    c5 = "#3A595F";

    cb = "#ffffff";
    cl = "#81B2C9";
    if (fbgc == "Dark") {
      cb = "#000000";
      cl = "#172520";
    }
  }
  if (pal < 0.54) {
    c1 = "#5A646B";
    c2 = "#F8C583";
    c3 = "#2b0d0f";
    c4 = "#741837";
    c5 = "#B69CA5";

    cb = "#ffffff";
    cl = "#B69CA5";
    if (fbgc == "Dark") {
      cb = "#000000";
      cl = "#2b0d0f";
    }
  }
  if (pal < 0.51) {
    c1 = "#FFD691";
    c2 = "#1B698D";
    c3 = "#920458";
    c4 = "#C2C2C2";
    c5 = "#3A125D";

    cb = "#ffffff";
    cl = "#C2C2C2";
    if (fbgc == "Dark") {
      cb = "#000000";
      cl = "#210B36";
    }
  }
  if (pal < 0.48) {
    c1 = "#501E50";
    c2 = "#0A3036";
    c3 = "#977A97";
    c4 = "#6A8188";
    c5 = "#E7E3A1";

    cb = "#ffffff";
    cl = "#6A8188";
    if (fbgc == "Dark") {
      cb = "#000000";
      cl = "#072429";
    }
  }
  if (pal < 0.45) {
    c1 = "#08070d";
    c2 = "#88225B";
    c3 = "#ADC78F";
    c4 = "#f3e8e4";
    c5 = "#7f7e7c";

    cb = "#ffffff";
    cl = "#ADC78F";
    if (fbgc == "Dark") {
      cb = "#000000";
      cl = "#08070d";
    }
  }
  if (pal < 0.42) {
    c1 = "#F69933";
    c2 = "#144F69";
    c3 = "#92043E";
    c4 = "#5D1248";
    c5 = "#3A125D";

    cb = "#ffffff";
    cl = "#F69933";
    if (fbgc == "Dark") {
      cb = "#000000";
      cl = "#200A33";
    }
  }
  if (pal < 0.39) {
    c1 = "#391458";
    c2 = "#E9AB33";
    c3 = "#A1D632";
    c4 = "#5D1661";
    c5 = "#94391B";

    cb = "#ffffff";
    cl = "#E9AB33";
    if (fbgc == "Dark") {
      cb = "#000000";
      cl = "#1E0A2E";
    }
  }
  if (pal < 0.36) {
    c1 = "#7DB1C1";
    c2 = "#2B1C4B";
    c3 = "#7B4759";
    c4 = "#F0D99A";
    c5 = "#f6f6f8";

    cb = "#ffffff";
    cl = "#7DB1C1";
    if (fbgc == "Dark") {
      cb = "#000000";
      cl = "#140D24";
    }
  }
  if (pal < 0.33) {
    c1 = "#151922";
    c2 = "#B40808";
    c3 = "#EED7CE";
    c4 = "#434E66";
    c5 = "#BD7A7A";

    cb = "#ffffff";
    cl = "#BD7A7A";
    if (fbgc == "Dark") {
      cb = "#000000";
      cl = "#151922";
    }
  }
  if (pal < 0.3) {
    c1 = "#21B9CB";
    c2 = "#ADD161";
    c3 = "#480F6D";
    c4 = "#0A5353";
    c5 = "#071938";

    cb = "#ffffff";
    cl = "#ADD161";
    if (fbgc == "Dark") {
      cb = "#000000";
      cl = "#071938";
    }
  }

  if (pal < 0.27) {
    c1 = "#cf628c";
    c2 = "#F8D281";
    c3 = "#61175d";
    c4 = "#4ba5ba";
    c5 = "#F7EDD8";

    cb = "#ffffff";
    cl = "#F8D281";
    if (fbgc == "Dark") {
      cb = "#000000";
      cl = "#240922";
    }
  }
  if (pal < 0.24) {
    c1 = "#FFC172";
    c2 = "#C53159";
    c3 = "#FFEDA4";
    c4 = "#4E0F4E";
    c5 = "#608188";

    cb = "#ffffff";
    cl = "#608188";
    if (fbgc == "Dark") {
      cb = "#000000";
      cl = "#081825";
    }
  }
  if (pal < 0.21) {
    c1 = "#993B8C";
    c2 = "#FBEF9F";
    c3 = "#838383";
    c4 = "#F7F2E4";
    c5 = "#3B8C9C";

    cb = "#ffffff";
    cl = "#838383";
    if (fbgc == "Dark") {
      cb = "#000000";
      cl = "#1F1E1E";
    }
  }
  if (pal < 0.18) {
    c1 = "#568298";
    c2 = "#d2d1df";
    c3 = "#c1b2ad";
    c4 = "#091215";
    c5 = "#5a4f51";

    cb = "#ffffff";
    cl = "#c1b2ad";
    if (fbgc == "Dark") {
      cb = "#000000";
      cl = "#091215";
    }
  }
  if (pal < 0.15) {
    c1 = "#044350";
    c2 = "#C58282";
    c3 = "#3E114D";
    c4 = "#DBD095";
    c5 = "#6BA2AD";

    cb = "#E4E4E4";
    cl = "#C58282";
    if (fbgc == "Dark") {
      cb = "#000000";
      cl = "#1F0927";
    }
  }
  if (pal < 0.12) {
    c1 = "#EE981D";
    c2 = "#BDA921";
    c3 = "#2B5A9E";
    c4 = "#AF2A67";
    c5 = "#411A6F";

    cb = "#FFFFFF";
    cl = "#BDA921";
    if (fbgc == "Dark") {
      cb = "#000000";
      cl = "#1C0B30";
    }
  }
  if (pal < 0.09) {
    c1 = "#111A38";
    c2 = "#1C385C";
    c3 = "#eee5b1";
    c4 = "#38B4B4";
    c5 = "#48E2B2";

    cb = "#FFFFFF";
    cl = "#48E2B2";
    if (fbgc == "Dark") {
      cb = "#000000";
      cl = "#111A38";
    }
  }
  if (pal < 0.06) {
    c1 = "#afce59";
    c2 = "#E0A559";
    c3 = "#351A6D";
    c4 = "#F3EACB";
    c5 = "#8F4C80";

    cb = "#FFFFFF";
    cl = "#afce59";
    if (fbgc == "Dark") {
      cb = "#000000";
      cl = "#100822";
    }
  }

  if (pal < 0.03) {
    c1 = "#342ac2";
    c2 = "#afce59";
    c3 = "#612AC2";
    c4 = "#2A92C2";
    c5 = "#46C22A";

    cb = "#FFFFFF";
    cl = "#afce59";
    if (fbgc == "Dark") {
      cb = "#000000";
      cl = "#0B0929";
    }
  }
  ca = shuffle([c1, c2, c3, c4, c5]);
  ca = [c1, c2, c3, c4, c5];
  cal = shuffle([c1, c2, c3, c4, c5]);
}
window.$fxhashFeatures={
  "Default Bugged":features.bug,
  "Default Background":features.bgc,
  "Signed":features.signed,
  "Tile Shape":features.tiletype,
  "Tile Selection":features.tiles
}
