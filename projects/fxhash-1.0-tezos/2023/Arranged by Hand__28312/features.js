palette = fxrand();
function choosecolours() {
  pbda = [];
  pbma = [];
  pbla = [];
  pbc = [];
  palc = [];
  shellcol = [];
  shelldcol = [];
  shellhcol = [];
  sky = [];
  sky1 = color("#589CAC");
  sky2 = color("#C6D1D3");
  fsandcol = shuffle([
    color("#D7CBA8"),
    color("#DCD6D0"),
    color("#DEDABC"),
    color("#CCC9B7"),
    color("#F3DECE"),
    color("#F1DCAC"),
    color("#C7BFB8"),
    color("#C3BDB0"),
    color("#F1ECCE"),
    color("#E7E3D8"),
    color("#F1E7AD"),
    color("#F8F5DF"),
  ]);
  pcds = shuffle([
    color("#372125"),
    color("#331E1B"),
    color("#2C2924"),
    color("#37393A"),
    color("#38393A"),
    color("#3A0C14"),
  ]);
  pcms = shuffle([
    color("#6A5C5F"),
    color("#8E5A53"),
    color("#615746"),
    color("#73797D"),
    color("#606161"),
    color("#61383E"),
  ]);
  pcls = shuffle([
    color("#E3D7D9"),
    color("#DCD1D0"),
    color("#E0D6C6"),
    color("#C6CACD"),
    color("#ABADB0"),
  ]);
  pcsd = shuffle([
    color("#2E2526"),
    color("#1E1D1D"),
    color("#35322D"),
    color("#252525"),
    color("#171B20"),
  ]);
  sandcol = shuffle([
    color("#9F8567"),
    color("#948371"),
    color("#F1CE87"),
    color("#B8A289"),
    color("#B59F72"),
    color("#E1CD8A"),
    color("#E1D7C0"),
    color("#EDEAD3"),
    color("#7B7770"),
    color("#4B331E"),
    color("#CBC3B2"),
    color("#E1DDB4"),
    color("#AA8B6B"),
    color("#FBD37F"),
    color("#82776C"),
    color("#DDDBD7"),
    color("#FAE2C3"),
    color("#FEDEA8"),
    color("#767259"),
    color("#7A6135"),
    color("#8D624A"),
  ]);
  shellc = shuffle([
    color("#A6A18D88"),
    color("#d7d8df88"),
    color("#A8808088"),
    color("#86767188"),
    color("#9BC5BE88"),
    color("#ACA7A188"),
    color("#cbc3b288"),
    color("#AD8D6F88"),
    color("#64737E88"),
    color("#c9c1a588"),
    color("#d1d0c788"),
    color("#91ABB388"),
    color("#B3868688"),
    color("#759B9E88"),
    color("#C59B7588"),
  ]);
  if (palette < 0.9) {
    sky1 = color("#4E88C9");
    sky2 = color("#CCD7E1");
    pcds = shuffle([
      color("#2e2717"),
      color("#4b4748"),
      color("#241608"),
      color("#724f46"),
      color("#42555c"),
      color("#533116"),
    ]);
    pcms = shuffle([
      color("#e7ae68"),
      color("#9e5b56"),
      color("#736f61"),
      color("#748495"),
      color("#eba47a"),
      color("#8d7d6c"),
    ]);
    pcls = shuffle([
      color("#e4ecf2"),
      color("#becde1"),
      color("#d5b4aa"),
      color("#e0cd98"),
      color("#F1DDC4"),
      color("#c1cdcd"),
    ]);
    pcsd = shuffle([
      color("#1D1A13"),
      color("#2D2A2B"),
      color("#21170D"),
      color("#292423"),
      color("#1D2528"),
      color("#281B12"),
    ]);
    sandcol = shuffle([
      color("#aa9f91"),
      color("#bd9f89"),
      color("#be5520"),
      color("#c6a293"),
      color("#2a2524"),
      color("#6c4c3c"),
      color("#f9efe7"),
      color("#a29fa3"),
      color("#f9e7c9"),
      color("#cf644b"),
      color("#d3a870"),
      color("#c88159"),
      color("#d6d5dc"),
      color("#ebdfe3"),
      color("#e4c3ac"),
      color("#6b4e2c"),
      color("#827688"),
      color("#b9816b"),
      color("#dbb2a4"),
      color("#d9b5a2"),
      color("#ad8271"),
    ]);
    shellc = shuffle([
      color("#16131e88"),
      color("#708ea688"),
      color("#b2657788"),
      color("#974d6888"),
      color("#a27a3488"),
      color("#25354588"),
      color("#59494988"),
      color("#22222488"),
      color("#d6a87688"),
      color("#e1e1df88"),
      color("#90756088"),
      color("#746e6288"),
      color("#8d776988"),
      color("#c7cacf88"),
      color("#e3c5ab88"),
    ]);
  }
  if (palette < 0.8) {
    sky1 = color("#8F95A8");
    sky2 = color("#D6D7D9");
    pcds = shuffle([
      color("#404951"),
      color("#4D5B6F"),
      color("#58524C"),
      color("#614e57"),
      color("#42555c"),
      color("#39342e"),
    ]);
    pcms = shuffle([
      color("#6B646D"),
      color("#878088"),
      color("#6A7A89"),
      color("#bca585"),
      color("#c09a8d"),
      color("#837891"),
    ]);
    pcls = shuffle([
      color("#eeecef"),
      color("#c2c8d4"),
      color("#ebd9c9"),
      color("#b9b4b8"),
      color("#a0a5ab"),
      color("#c2a791"),
    ]);
    pcsd = shuffle([
      color("#16202B"),
      color("#1B2738"),
      color("#322E2B"),
      color("#352B30"),
      color("#263236"),
      color("#252320"),
    ]);
    sandcol = shuffle([
      color("#899DAE"),
      color("#a8a3a9"),
      color("#878088"),
      color("#8794A1"),
      color("#c09a8d"),
      color("#827b8a"),
      color("#FFFBF8"),
      color("#DAD7D0"),
      color("#c2c8d4"),
      color("#ebd9c9"),
      color("#b9b4b8"),
      color("#a0a5ab"),
      color("#c2a791"),
      color("#788C9E"),
      color("#E4DBCC"),
      color("#9B909C"),
      color("#C2C0BA"),
      color("#D8B9AE"),
      color("#A399AD"),
      color("#E7DAD0"),
      color("#E5DECE"),
    ]);
    shellc = shuffle([
      color("#3a577288"),
      color("#a8a3a988"),
      color("#87808888"),
      color("#4c6a8588"),
      color("#c09a8d88"),
      color("#827b8a88"),
      color("#f9efe788"),
      color("#eeecef88"),
      color("#c2c8d488"),
      color("#ebd9c988"),
      color("#b9b4b888"),
      color("#a0a5ab88"),
      color("#c2a79188"),
      color("#788C9E88"),
      color("#C8C3C888"),
    ]);
  }
  if (palette < 0.7) {
    sky1 = color("#81AEB2");
    sky2 = color("#D4D6D6");
    pcds = shuffle([
      color("#473b44"),
      color("#3c3f51"),
      color("#535b6a"),
      color("#445875"),
      color("#5b585f"),
      color("#5e5751"),
    ]);
    pcms = shuffle([
      color("#8e6d43"),
      color("#858e76"),
      color("#a3985e"),
      color("#666f7b"),
      color("#b48e7f"),
      color("#546982"),
    ]);
    pcls = shuffle([
      color("#f0ece9"),
      color("#d7d1c5"),
      color("#d8d9dd"),
      color("#e0d1c2"),
      color("#e2c39f"),
      color("#bfc8a7"),
    ]);
    pcsd = shuffle([
      color("#20262A"),
      color("#262A2D"),
      color("#1E1B1B"),
      color("#191A1B"),
      color("#282C2B"),
      color("#272723"),
    ]);
    sandcol = shuffle([
      color("#a7b0b9"),
      color("#b7adab"),
      color("#bbc3b8"),
      color("#ceb5a1"),
      color("#d2caae"),
      color("#cca575"),
      color("#8e6d43"),
      color("#858e76"),
      color("#a3985e"),
      color("#666f7b"),
      color("#b48e7f"),
      color("#546982"),
      color("#f0ece9"),
      color("#d7d1c5"),
      color("#d8d9dd"),
      color("#e0d1c2"),
      color("#e2c39f"),
      color("#bfc8a7"),
      color("#445875"),
      color("#5b585f"),
      color("#5e5751"),
    ]);
    shellc = shuffle([
      color("#58616B88"),
      color("#7C737188"),
      color("#bbc3b888"),
      color("#ceb5a188"),
      color("#d2caae88"),
      color("#cca57588"),
      color("#8e6d4388"),
      color("#858e7688"),
      color("#a3985e88"),
      color("#666f7b88"),
      color("#b48e7f88"),
      color("#54698288"),
      color("#f0ece988"),
      color("#d7d1c588"),
      color("#d8d9dd88"),
    ]);
  }
  if (palette < 0.6) {
    sky1 = color("#4EAFC9");
    sky2 = color("#E5E5E5");
    pcds = shuffle([
      color("#3f2f20"),
      color("#404234"),
      color("#524137"),
      color("#734b3f"),
      color("#8b653e"),
      color("#7f6856"),
    ]);
    pcms = shuffle([
      color("#886d42"),
      color("#b68a63"),
      color("#a58471"),
      color("#ac9760"),
      color("#bfa252"),
      color("#b19259"),
    ]);
    pcls = shuffle([
      color("#ddd7c7"),
      color("#d5d5bd"),
      color("#c7c5b9"),
      color("#dcb387"),
      color("#cdc5b0"),
      color("#c3bfa6"),
    ]);
    pcsd = shuffle([
      color("#1E160E"),
      color("#191914"),
      color("#221A16"),
      color("#241713"),
      color("#291F14"),
      color("#3B322B"),
    ]);
    sandcol = shuffle([
      color("#c8c0a9"),
      color("#a39179"),
      color("#a19184"),
      color("#b3aa83"),
      color("#b1b4a1"),
      color("#c4bbb4"),
      color("#b2a26e"),
      color("#c3a55f"),
      color("#ae906a"),
      color("#c8af5b"),
      color("#c0b176"),
      color("#b8bbaa"),
      color("#ac9760"),
      color("#3f2f20"),
      color("#404234"),
      color("#524137"),
      color("#734b3f"),
      color("#c7c5b9"),
      color("#dcb387"),
      color("#cdc5b0"),
      color("#c3bfa6"),
    ]);
    shellc = shuffle([
      color("#3f2f2088"),
      color("#40423488"),
      color("#52413788"),
      color("#734b3f88"),
      color("#6A3E8B88"),
      color("#7f685688"),
      color("#886d4288"),
      color("#b68a6388"),
      color("#a5847188"),
      color("#ac976088"),
      color("#ddd7c788"),
      color("#d5d5bd88"),
      color("#c7c5b988"),
      color("#dcb38788"),
      color("#cdc5b088"),
    ]);
  }
  if (palette < 0.5) {
    sky1 = color("#63A6A4");
    sky2 = color("#DED7B2");
    pcds = shuffle([
      color("#663610"),
      color("#4e4868"),
      color("#4f4d4e"),
      color("#332B38"),
      color("#455f88"),
      color("#442F31"),
    ]);
    pcms = shuffle([
      color("#915E4E"),
      color("#974339"),
      color("#8A4F2E"),
      color("#795763"),
      color("#7B583D"),
      color("#805c59"),
    ]);
    pcls = shuffle([
      color("#e3e3eb"),
      color("#ebe4d4"),
      color("#e4d8c7"),
      color("#dbd9d5"),
      color("#cdc8ce"),
      color("#fad77d"),
    ]);
    pcsd = shuffle([
      color("#2A1007"),
      color("#180D0C"),
      color("#200F05"),
      color("#1F1F25"),
      color("#2A2732"),
      color("#2E261A"),
    ]);
    sandcol = shuffle([
      color("#e3e3eb"),
      color("#ebe4d4"),
      color("#e4d8c7"),
      color("#dbd9d5"),
      color("#cdc8ce"),
      color("#fad77d"),
      color("#a82f08"),
      color("#974339"),
      color("#b34002"),
      color("#b94914"),
      color("#995827"),
      color("#805c59"),
      color("#663610"),
      color("#4e4868"),
      color("#b5a1af"),
      color("#e09457"),
      color("#be8584"),
      color("#eec032"),
      color("#a7687b"),
      color("#ccc3bf"),
      color("#8a7f9d"),
    ]);
    shellc = shuffle([
      color("#6787b588"),
      color("#9f988688"),
      color("#aa744788"),
      color("#7999c288"),
      color("#efc28688"),
      color("#99582788"),
      color("#805c5988"),
      color("#66361088"),
      color("#4e486888"),
      color("#b5a1af88"),
      color("#e0945788"),
      color("#be858488"),
      color("#eec03288"),
      color("#a7687b88"),
      color("#ccc3bf88"),
    ]);
  }
  if (palette < 0.4) {
    sky1 = color("#8BB4C7");
    sky2 = color("#e9e9f1");
    pcds = shuffle([
      color("#2d2822"),
      color("#2a323d"),
      color("#514a52"),
      color("#374254"),
      color("#635c6e"),
      color("#586786"),
    ]);
    pcms = shuffle([
      color("#949bb7"),
      color("#d6afa0"),
      color("#7a8096"),
      color("#8b9cc7"),
      color("#b7abb7"),
      color("#92836e"),
    ]);
    pcls = shuffle([
      color("#dbeaff"),
      color("#e7e1ed"),
      color("#b4b6cf"),
      color("#c4b5a2"),
      color("#e9e9f1"),
      color("#ecd7d6"),
    ]);
    pcsd = shuffle([
      color("#2d2822"),
      color("#2a323d"),
      color("#241D25"),
      color("#1C2027"),
      color("#302C38"),
      color("#191D25"),
    ]);
    sandcol = shuffle([
      color("#949bb7"),
      color("#d6afa0"),
      color("#7a8096"),
      color("#8b9cc7"),
      color("#b7abb7"),
      color("#92836e"),
      color("#dbeaff"),
      color("#e7e1ed"),
      color("#b4b6cf"),
      color("#c4b5a2"),
      color("#e9e9f1"),
      color("#ecd7d6"),
      color("#574938"),
      color("#77808C"),
      color("#9A939B"),
      color("#64686F"),
      color("#A19EA6"),
      color("#A2A8B4"),
      color("#CED1DF"),
      color("#E0DDD5"),
      color("#E0DBD2"),
    ]);
    shellc = shuffle([
      color("#95A0CF88"),
      color("#AD867688"),
      color("#707BA288"),
      color("#8EA7E688"),
      color("#B38AB388"),
      color("#C9A97C88"),
      color("#62523F88"),
      color("#394B6288"),
      color("#7E608388"),
      color("#55617588"),
      color("#A0BDE588"),
      color("#E5D0FB88"),
      color("#D1D3EA88"),
      color("#E9D1B388"),
      color("#C1C1E188"),
    ]);
  }
  if (palette < 0.3) {
    sky1 = color("#767F9A");
    sky2 = color("#EBE1D4");
    pcds = shuffle([
      color("#482a1f"),
      color("#37343d"),
      color("#4d403a"),
      color("#503d39"),
      color("#303d4d"),
      color("#45392d"),
    ]);
    pcms = shuffle([
      color("#e19e8e"),
      color("#8e858a"),
      color("#af8a81"),
      color("#9a9899"),
      color("#897c6b"),
      color("#8e594b"),
    ]);
    pcls = shuffle([
      color("#fff8f9"),
      color("#eddfdf"),
      color("#bab7ca"),
      color("#d0c9e8"),
      color("#f3d3c6"),
      color("#d6c8c5"),
    ]);
    pcsd = shuffle([
      color("#261610"),
      color("#211E26"),
      color("#1C130F"),
      color("#20110E"),
      color("#13171B"),
      color("#271F18"),
    ]);
    sandcol = shuffle([
      color("#fff8f9"),
      color("#eddfdf"),
      color("#bab7ca"),
      color("#d0c9e8"),
      color("#f3d3c6"),
      color("#d6c8c5"),
      color("#e19e8e"),
      color("#8e858a"),
      color("#af8a81"),
      color("#9a9899"),
      color("#897c6b"),
      color("#8e594b"),
      color("#482a1f"),
      color("#37343d"),
      color("#4d403a"),
      color("#503d39"),
      color("#303d4d"),
      color("#45392d"),
      color("#7A5D57"),
      color("#55616C"),
      color("#664E3A"),
    ]);
    shellc = shuffle([
      color("#fff8f988"),
      color("#eddfdf88"),
      color("#bab7ca88"),
      color("#d0c9e888"),
      color("#f3d3c688"),
      color("#d6c8c588"),
      color("#e19e8e88"),
      color("#8e858a88"),
      color("#af8a8188"),
      color("#B295A488"),
      color("#BB935F88"),
      color("#8e594b88"),
      color("#482a1f88"),
      color("#574B6E88"),
      color("#664B3F88"),
    ]);
  }
  if (palette < 0.2) {
    sky1 = color("#84B4CE");
    sky2 = color("#D4EBE3");
    pcds = shuffle([
      color("#221912"),
      color("#7d5230"),
      color("#483829"),
      color("#50280e"),
      color("#5b371f"),
      color("#471e00"),
    ]);
    pcms = shuffle([
      color("#846747"),
      color("#cd9e58"),
      color("#a4926a"),
      color("#dfa856"),
      color("#c19c68"),
      color("#6f6252"),
    ]);
    pcls = shuffle([
      color("#feffe8"),
      color("#ead7ac"),
      color("#fbf4d7"),
      color("#f4e5ba"),
      color("#dbd2b5"),
      color("#ddd9a9"),
    ]);
    pcsd = shuffle([
      color("#221912"),
      color("#25160A"),
      color("#1D140B"),
      color("#1B0D04"),
      color("#110C09"),
      color("#200E01"),
    ]);
    sandcol = shuffle([
      color("#ABA48D"),
      color("#F3D1B6"),
      color("#CFC6A1"),
      color("#BEB79C"),
      color("#DDC8AD"),
      color("#B39C8B"),
      color("#f3d49d"),
      color("#cd9e58"),
      color("#a4926a"),
      color("#dfa856"),
      color("#c19c68"),
      color("#6f6252"),
      color("#feffe8"),
      color("#ead7ac"),
      color("#fbf4d7"),
      color("#f4e5ba"),
      color("#dbd2b5"),
      color("#ddd9a9"),
      color("#86624B"),
      color("#A39790"),
      color("#E7CAB5"),
    ]);
    shellc = shuffle([
      color("#B28E7188"),
      color("#CAC0A188"),
      color("#92746088"),
      color("#EDD4C388"),
      color("#DCD7C488"),
      color("#f3d49d88"),
      color("#cd9e5888"),
      color("#a4926a88"),
      color("#dfa85688"),
      color("#c19c6888"),
      color("#6f625288"),
      color("#feffe888"),
      color("#ead7ac88"),
      color("#fbf4d788"),
      color("#f4e5ba88"),
    ]);
  }
  if (palette < 0.1) {
    sky1 = color("#587890");
    sky2 = color("#D1D8D5");
    pcds = shuffle([
      color("#372125"),
      color("#2e2717"),
      color("#404951"),
      color("#473b44"),
      color("#3f2f20"),
      color("#663610"),
    ]);
    pcms = shuffle([
      color("#6A5C5F"),
      color("#e7ae68"),
      color("#6B646D"),
      color("#8e6d43"),
      color("#886d42"),
      color("#915E4E"),
    ]);
    pcls = shuffle([
      color("#E3D7D9"),
      color("#e4ecf2"),
      color("#eeecef"),
      color("#f0ece9"),
      color("#ddd7c7"),
      color("#fad77d"),
    ]);
    pcsd = shuffle([
      color("#2E2526"),
      color("#1D1A13"),
      color("#16202B"),
      color("#20262A"),
      color("#1E160E"),
      color("#2A1007"),
    ]);
    sandcol = shuffle([
      color("#9F8567"),
      color("#948371"),
      color("#F1CE87"),
      color("#aa9f91"),
      color("#bd9f89"),
      color("#be5520"),
      color("#899DAE"),
      color("#a8a3a9"),
      color("#878088"),
      color("#a7b0b9"),
      color("#b7adab"),
      color("#bbc3b8"),
      color("#c3a55f"),
      color("#ae906a"),
      color("#c8af5b"),
      color("#cdc8ce"),
      color("#fad77d"),
      color("#a82f08"),
      color("#b5a1af"),
      color("#e09457"),
      color("#e3e3eb"),
    ]);
    shellc = shuffle([
      color("#A6A18D88"),
      color("#d7d8df88"),
      color("#16131e88"),
      color("#708ea688"),
      color("#3a577288"),
      color("#a8a3a988"),
      color("#58616B88"),
      color("#7C737188"),
      color("#6A3E8B88"),
      color("#7f685688"),
      color("#a5847188"),
      color("#ac976088"),
      color("#805c5988"),
      color("#66361088"),
      color("#4e486888"),
    ]);
  }
  shelld = shuffle([
    color("#2324290e"),
    color("#1615140e"),
    color("#2021250e"),
    color("#1D1F220e"),
    color("#241E240e"),
    color("#1C1A180e"),
    color("#2927230e"),
    color("#2a323d0e"),
    color("#1714180e"),
    color("#1519200e"),
    color("#dbeaff0e"),
    color("#e7e1ed0e"),
    color("#b4b6cf0e"),
    color("#c4b5a20e"),
    color("#e9e9f10e"),
  ]);
  shellh = shuffle([
    color("#F7ECDE0e"),
    color("#E0E7F20e"),
    color("#F1D4F50e"),
    color("#DDE1E90e"),
    color("#E7EDF50e"),
    color("#e7e1ed0e"),
    color("#DDDFF30e"),
    color("#F5ECE10e"),
    color("#DFDFF80e"),
  ]);
  shads = shuffle([
    color("#00000004"),
    color("#00000005"),
    color("#00000006"),
    color("#00000007"),
  ]);
  highs = shuffle([
    color("#ffffff04"),
    color("#ffffff05"),
    color("#ffffff06"),
    color("#fff0ff07"),
  ]);
  for (let j = 0; j < 7; j++) {
    shellcol[j] = [];
    shelldcol[j] = [];
    shellhcol[j] = [];
    for (let c = 0; c < 20; c++) {
      s = lerpColor(shellc[j], shellc[j + 1], c / 20);
      t = lerpColor(shelld[j], shelld[j + 1], c / 20);
      u = lerpColor(shellh[j], shellh[j + 1], c / 20);
      shellcol[j].push(s);
      shelldcol[j].push(t);
      shellhcol[j].push(u);
    }
  }

  for (let i = 0; i < 800; i++) {
    sky.push(lerpColor(sky1, sky2, i / 500));
  }
  for (let c = 0; c < 40; c++) {
    pcd = lerpColor(pcds[0], pcms[0], c / 40);
    pcm = lerpColor(pcds[0], pcls[0], c / 40);
    pcl = lerpColor(pcms[0], pcls[0], c / 40);
    pcs = lerpColor(pcsd[0], pcls[0], c / 40);
    pbda.push(pcd);
    pbma.push(pcm);
    pbla.push(pcl);
    pbc.push(pcs);
    palc.push(pcd, pcm, pcl);
  }
  pbd = shuffle(pbda);
  pbm = shuffle(pbma);
  pbl = shuffle(pbla);
  dandl = shuffle([
    pcds[0],
    pcds[1],
    pcds[2],
    pcds[3],
    pcds[4],
    pcls[0],
    pcls[1],
    pcls[2],
    pcls[3],
    pcls[4],
  ]);
}
