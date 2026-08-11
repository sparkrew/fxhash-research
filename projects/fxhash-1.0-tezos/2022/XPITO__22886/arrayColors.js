// create brightlist and darklist
// assign wheight to palettes
let colorArrays = [];
let highContrast = [];
let pastel = [];
let multiColor = [];
let monochrome = [];
let colorsArray = [];
let graph;
let graphLAD;
let brightList = [];
let darkList = [];

function getColors(){
    // B&W
    colorsArray.push(color("#000000"));
    colorsArray.push(color("#FFFFFF"));
    colorsArray.push(color("#120a09"));
    colorsArray.push(color("#F1FaF3"));
    colorArrays.push(colorsArray);
    colorsArray = [];
   
    // Farbkreis by Itten
    colorsArray.push(color("#FFE500")); 
    colorsArray.push(color("#007AC3"));
    colorsArray.push(color("#E20612"));
    colorsArray.push(color("#00963F"));
    colorsArray.push(color("#F07D00"));
    colorsArray.push(color("#6F2282"));
    colorsArray.push(color("#FBBA00"));
    colorsArray.push(color("#E84E0E"));
    colorsArray.push(color("#E40613"));
    colorsArray.push(color("#C8057F"));
    colorsArray.push(color("#01509F"));
    colorsArray.push(color("#019BA5"));
    colorsArray.push(color("#97C11F"));
    colorArrays.push(colorsArray);
    colorsArray = [];
/*
    // Matrica Labs Colors
    //Pythagoras
    colorsArray.push(color("#001219"));
    colorsArray.push(color("#005F73"));
    colorsArray.push(color("#0A9396"));
    colorsArray.push(color("#94D2BD"));
    colorsArray.push(color("#E9D8A6"));
    colorsArray.push(color("#EE9B00"));
    colorsArray.push(color("#CA6702"));
    colorsArray.push(color("#AE2012"));
    colorsArray.push(color("#9B2226"));
    colorArrays.push(colorsArray);
    colorsArray = [];
  
    //Euclid
    colorsArray.push(color("#FFFFFF"));
    colorsArray.push(color("#265999"));
    colorsArray.push(color("#F3B319"));
    colorsArray.push(color("#D94C19"));
    colorsArray.push(color("#000000"));
    colorArrays.push(colorsArray);
    colorsArray = [];

    //Lovelace
    colorsArray.push(color("#FFFFFF"));
    colorsArray.push(color("#60A1BB"));
    colorsArray.push(color("#F48EAC"));
    colorsArray.push(color("#000000"));
    colorArrays.push(colorsArray);
    colorsArray = [];
    
    //Fibonacci
    colorsArray.push(color("#FFFFFF"));
    colorsArray.push(color("#081214"));
    colorsArray.push(color("#2E6A78"));
    colorsArray.push(color("#4DB1C8"));
    colorsArray.push(color("#000000"));
    colorArrays.push(colorsArray);
    colorsArray = [];

    //Mandelbrot
    colorsArray.push(color("#8A50FF"));
    colorsArray.push(color("#2793FE"));
    colorsArray.push(color("#11C987"));
    colorsArray.push(color("#FFFF00"));
    colorsArray.push(color("#FF9900"));
    colorsArray.push(color("#FF5253"));
    colorArrays.push(colorsArray);
    colorsArray = [];
/*
     //Escher
     colorsArray.push(color("#03071E"));
     colorsArray.push(color("#370617"));
     colorsArray.push(color("#6A040F"));
     colorsArray.push(color("#9D0208"));
     colorsArray.push(color("#DC2F02"));
     colorsArray.push(color("#D00000"));
     colorsArray.push(color("#E85D04"));
     colorsArray.push(color("#F48C06"));
     colorsArray.push(color("#FAA307"));
     colorsArray.push(color("#FFBA08"));
     colorArrays.push(colorsArray);
     colorsArray = [];

     //Nakamoto
     colorsArray.push(color("#FFFFFF"));
     colorsArray.push(color("#F7931A"));
     colorsArray.push(color("#4D4D4D"));
     colorsArray.push(color("#1A1A1A"));
     colorsArray.push(color("#010101"));
     colorArrays.push(colorsArray);
     colorsArray = [];
    
/*    colorsArray.push(color("#000000"));
    colorsArray.push(color("#ffffff"));
    colorArrays.push(colorsArray);
    colorsArray = [];
*/

/////////////////////////////////////////////////////////////  4 Colors ////////////////////////////////////////

    colorsArray.push(color('#F9ED69'));
    colorsArray.push(color('#F08A5D'));
    colorsArray.push(color('#B83B5E'));
    colorsArray.push(color('#6A2C70'));
    colorArrays.push(colorsArray);
    multiColor.push(colorsArray);
    colorsArray = [];

    colorsArray.push(color('#F38181'));
    colorsArray.push(color('#FCE38A'));
    colorsArray.push(color('#EAFFD0'));
    colorsArray.push(color('#95E1D3'));
    colorArrays.push(colorsArray);
    pastel.push(colorsArray);
    colorsArray = [];

    colorsArray.push(color('#08D9D6'));
    colorsArray.push(color('#252A34'));
    colorsArray.push(color('#FF2E63'));
    colorsArray.push(color('#EAEAEA'));
    colorArrays.push(colorsArray);
    highContrast.push(colorsArray);
    colorsArray = [];

    colorsArray.push(color('#A8D8EA'));
    colorsArray.push(color('#AA96DA'));
    colorsArray.push(color('#FCBAD3'));
    colorsArray.push(color('#FFFFD2'));
    colorsArray.push(color('#03110A'));
    colorArrays.push(colorsArray);
    pastel.push(colorsArray);
    colorsArray = [];

    colorsArray.push(color('#293462'));
    colorsArray.push(color('#D61C4E'));
    colorsArray.push(color('#FEB139'));
    colorsArray.push(color('#FFF80A'));
    colorArrays.push(colorsArray);
    highContrast.push(colorsArray);
    colorsArray = [];

    colorsArray.push(color('#100720'));
    colorsArray.push(color('#31087B'));
    colorsArray.push(color('#FA2FB5'));
    colorsArray.push(color('#FFC23C'));
    colorArrays.push(colorsArray);
    highContrast.push(colorsArray);
    colorsArray = [];

    colorsArray.push(color('#FF1E00'));
    colorsArray.push(color('#E8F9FD'));
    colorsArray.push(color('#59CE8F'));
    colorsArray.push(color('#000000'));
    colorArrays.push(colorsArray);
    highContrast.push(colorsArray);
    colorsArray = [];

    colorsArray.push(color('#2A0944'));
    colorsArray.push(color('#3FA796'));
    colorsArray.push(color('#FEC260'));
    colorsArray.push(color('#A10035'));
    colorArrays.push(colorsArray);
    multiColor.push(colorsArray);
    colorsArray = [];



/////////////////////////////////////////////////////////////  5 Colors ////////////////////////////////////////
    /*    
    colorsArray.push(color("#"));
    colorsArray.push(color("#"));
    colorsArray.push(color("#"));
    colorsArray.push(color("#"));
    colorsArray.push(color("#"));
    colorArrays.push(colorsArray);
    colorsArray = [];
    */

    //Mondrian
    colorsArray.push(color("#fff001"));
    colorsArray.push(color("#ff0101"));
    colorsArray.push(color("#0101fd"));
    colorsArray.push(color("#f9f9f9"));
    colorsArray.push(color("#30303a"));
    colorArrays.push(colorsArray);
    colorsArray = [];

    //Custom 2
    colorsArray.push(color("#176DBF"));
    colorsArray.push(color("#F7BC1C"));
    colorsArray.push(color("#2B926E"));
    colorsArray.push(color("#E50916"));
    colorsArray.push(color("#041114"));
    colorArrays.push(colorsArray);
    colorsArray = [];

    //Custom 1
    colorsArray.push(color("#0C4258"));
    colorsArray.push(color("#F1C312"));
    colorsArray.push(color("#AF0211"));
    colorsArray.push(color("#051A19"));
    colorsArray.push(color("#E0C18A"));
    colorArrays.push(colorsArray);
    colorsArray = [];

    colorsArray.push(color("#0b3954"));
    colorsArray.push(color("#087e8b"));
    colorsArray.push(color("#bfd7ea"));
    colorsArray.push(color("#ff5a5f"));
    colorsArray.push(color("#c81d25"));
    colorArrays.push(colorsArray);
    multiColor.push(colorsArray);
    colorsArray = [];

    colorsArray.push(color("#004777"));
    colorsArray.push(color("#a30000"));
    colorsArray.push(color("#ff7700"));
    colorsArray.push(color("#efd28d"));
    colorsArray.push(color("#00afb5"));
    colorArrays.push(colorsArray);
    multiColor.push(colorsArray);
    colorsArray = [];

    colorsArray.push(color("#2274a5"));
    colorsArray.push(color("#f75c03"));
    colorsArray.push(color("#f1c40f"));
    colorsArray.push(color("#d90368"));
    colorsArray.push(color("#00cc66"));
    colorArrays.push(colorsArray);
    multiColor.push(colorsArray);
    colorsArray = [];

    colorsArray.push(color("#6699cc"));
    colorsArray.push(color("#fff275"));
    colorsArray.push(color("#ff8c42"));
    colorsArray.push(color("#ff3c38"));
    colorsArray.push(color("#a23e48"));
    colorArrays.push(colorsArray);
    pastel.push(colorsArray);
    colorsArray = [];

    colorsArray.push(color("#06aed5"));
    colorsArray.push(color("#086788"));
    colorsArray.push(color("#f0c808"));
    colorsArray.push(color("#fff1d0"));
    colorsArray.push(color("#dd1c1a"));
    colorArrays.push(colorsArray);
    multiColor.push(colorsArray);
    colorsArray = [];

    colorsArray.push(color("#bf2e21"));
    colorsArray.push(color("#be9c77"));
    colorsArray.push(color("#e7c561"));
    colorsArray.push(color("#548db5"));
    colorsArray.push(color("#7a2f1c"));
    colorArrays.push(colorsArray);
    pastel.push(colorsArray);
    colorsArray = [];

    colorsArray.push(color("#e4572e"));
    colorsArray.push(color("#17bebb"));
    colorsArray.push(color("#ffc914"));
    colorsArray.push(color("#2e282a"));
    colorsArray.push(color("#76b041"));
    colorArrays.push(colorsArray);
    multiColor.push(colorsArray);
    colorsArray = [];

    colorsArray.push(color("#1f2041"));
    colorsArray.push(color("#4b3f72"));
    colorsArray.push(color("#ffc857"));
    colorsArray.push(color("#119da4"));
    colorsArray.push(color("#19647e"));
    colorArrays.push(colorsArray);
    multiColor.push(colorsArray);
    colorsArray = [];

    colorsArray.push(color("#f79256"));
    colorsArray.push(color("#fbd1a2"));
    colorsArray.push(color("#7dcfb6"));
    colorsArray.push(color("#00b2ca"));
    colorsArray.push(color("#1d4e89"));
    colorArrays.push(colorsArray);
    pastel.push(colorsArray);
    colorsArray = [];

    colorsArray.push(color("#171219"));
    colorsArray.push(color("#225560"));
    colorsArray.push(color("#edf060"));
    colorsArray.push(color("#f0803c"));
    colorsArray.push(color("#310d20"));
    colorArrays.push(colorsArray);
    highContrast.push(colorsArray);
    colorsArray = [];

    colorsArray.push(color("#071e22"));
    colorsArray.push(color("#1d7874"));
    colorsArray.push(color("#679289"));
    colorsArray.push(color("#f4c095"));
    colorsArray.push(color("#ee2e31"));
    colorArrays.push(colorsArray);
    pastel.push(colorsArray);
    colorsArray = [];

    colorsArray.push(color("#3d348b"));
    colorsArray.push(color("#7678ed"));
    colorsArray.push(color("#f7b801"));
    colorsArray.push(color("#f18701"));
    colorsArray.push(color("#f35b04"));
    colorArrays.push(colorsArray);
    multiColor.push(colorsArray);
    colorsArray = [];

    colorsArray.push(color("#233d4d"));
    colorsArray.push(color("#fe7f2d"));
    colorsArray.push(color("#fcca46"));
    colorsArray.push(color("#a1c181"));
    colorsArray.push(color("#619b8a"));
    colorArrays.push(colorsArray);
    multiColor.push(colorsArray);
    colorsArray = [];

    colorsArray.push(color("#540d6e"));
    colorsArray.push(color("#ee4266"));
    colorsArray.push(color("#ffd23f"));
    colorsArray.push(color("#3bceac"));
    colorsArray.push(color("#0ead69"));
    colorArrays.push(colorsArray);
    multiColor.push(colorsArray);
    colorsArray = [];

    colorsArray.push(color("#798F84"));
    colorsArray.push(color("#504884"));
    colorsArray.push(color("#D39169"));
    colorsArray.push(color("#879AAE"));
    colorsArray.push(color("#B55883"));
    colorArrays.push(colorsArray);
    pastel.push(colorsArray);
    colorsArray = [];

    colorsArray.push(color("#ffbc42"));
    colorsArray.push(color("#d81159"));
    colorsArray.push(color("#8f2d56"));
    colorsArray.push(color("#218380"));
    colorsArray.push(color("#73d2de"));
    colorArrays.push(colorsArray);
    multiColor.push(colorsArray);
    colorsArray = [];

    colorsArray.push(color("#177e89"));
    colorsArray.push(color("#084c61"));
    colorsArray.push(color("#db3a34"));
    colorsArray.push(color("#ffc857"));
    colorsArray.push(color("#323031"));
    colorArrays.push(colorsArray);
    highContrast.push(colorsArray);
    colorsArray = [];

    colorsArray.push(color("#2a3366"));
    colorsArray.push(color("#3d348b"));
    colorsArray.push(color("#7678ed"));
    colorsArray.push(color("#f7b801"));
    colorsArray.push(color("#f18701"));
    colorArrays.push(colorsArray);
    pastel.push(colorsArray);
    colorsArray = [];

    //18
    colorsArray.push(color("#2b2d42"));
    colorsArray.push(color("#8d99ae"));
    colorsArray.push(color("#edf2f4"));
    colorsArray.push(color("#ef233c"));
    colorsArray.push(color("#d90429"));
    colorArrays.push(colorsArray);
    highContrast.push(colorsArray);
    colorsArray = [];
    //19
    colorsArray.push(color("#f4f1de"));
    colorsArray.push(color("#e07a5f"));
    colorsArray.push(color("#3d405b"));
    colorsArray.push(color("#81b29a"));
    colorsArray.push(color("#f2cc8f"));
    colorArrays.push(colorsArray);
    highContrast.push(colorsArray);
    colorsArray = [];
    //21
    colorsArray.push(color("#0081a7"));
    colorsArray.push(color("#00afb9"));
    colorsArray.push(color("#fdfcdc"));
    colorsArray.push(color("#fed9b7"));
    colorsArray.push(color("#f07167"));
    colorArrays.push(colorsArray);
    pastel.push(colorsArray);
    colorsArray = [];
    
    colorsArray.push(color("#8ecae6"));
    colorsArray.push(color("#219ebc"));
    colorsArray.push(color("#023047"));
    colorsArray.push(color("#ffb703"));
    colorsArray.push(color("#fb8500"));
    colorArrays.push(colorsArray);
    multiColor.push(colorsArray);
    colorsArray = [];
    
/*    // monochrome lilac
    colorsArray.push(color("#231942"));
    colorsArray.push(color("#5e548e"));
    colorsArray.push(color("#9f86c0"));
    colorsArray.push(color("#be95c4"));
    colorsArray.push(color("#e0b1cb"));
    colorArrays.push(colorsArray);
    monochrome.push(colorsArray);
    colorsArray = [];    
*/ 
/*   
    colorsArray.push(color("#006d77"));
    colorsArray.push(color("#83c5be"));
    colorsArray.push(color("#edf6f9"));
    colorsArray.push(color("#ffddd2"));
    colorsArray.push(color("#e29578"));
    colorArrays.push(colorsArray);
    pastel.push(colorsArray);
    colorsArray = [];
      
    colorsArray.push(color("#ffbe0b"));
    colorsArray.push(color("#fb5607"));
    colorsArray.push(color("#ff006e"));
    colorsArray.push(color("#8338ec"));
    colorsArray.push(color("#3a86ff"));
    colorArrays.push(colorsArray);
    multiColor.push(colorsArray);
    colorsArray = [];

    colorsArray.push(color("#f6bd60"));
    colorsArray.push(color("#f7ede2"));
    colorsArray.push(color("#f5cac3"));
    colorsArray.push(color("#84a59d"));
    colorsArray.push(color("#f28482"));
    colorArrays.push(colorsArray);
    pastel.push(colorsArray);
    colorsArray = [];
   
    colorsArray.push(color("#9b5de5"));
    colorsArray.push(color("#f15bb5"));
    colorsArray.push(color("#fee440"));
    colorsArray.push(color("#00bbf9"));
    colorsArray.push(color("#00f5d4"));
    colorArrays.push(colorsArray);
    multiColor.push(colorsArray);
    colorsArray = [];

      //24
    colorsArray.push(color("#ff99c8"));
    colorsArray.push(color("#fcf6bd"));
    colorsArray.push(color("#d0f4de"));
    colorsArray.push(color("#a9def9"));
    colorsArray.push(color("#e4c1f9"));
    colorArrays.push(colorsArray);
    pastel.push(colorsArray);
    colorsArray = [];
    
    //26
    colorsArray.push(color("#390099"));
    colorsArray.push(color("#9e0059"));
    colorsArray.push(color("#ff0054"));
    colorsArray.push(color("#ff5400"));
    colorsArray.push(color("#ffbd00"));
    colorArrays.push(colorsArray);
    multiColor.push(colorsArray);
    colorsArray = [];
    
    //28
    colorsArray.push(color("#000814"));
    colorsArray.push(color("#001d3d"));
    colorsArray.push(color("#003566"));
    colorsArray.push(color("#ffc300"));
    colorsArray.push(color("#ffd60a"));
    colorArrays.push(colorsArray);
    highContrast.push(colorsArray);
    colorsArray = [];
    //3
    colorsArray.push(color("#e63946"));
    colorsArray.push(color("#f1faee"));
    colorsArray.push(color("#a8dadc"));
    colorsArray.push(color("#457b9d"));
    colorsArray.push(color("#1d3557"));
    colorArrays.push(colorsArray);
    highContrast.push(colorsArray);
    colorsArray = [];
    //4
    colorsArray.push(color("#000000"));
    colorsArray.push(color("#14213d"));
    colorsArray.push(color("#fca311"));
    colorsArray.push(color("#e5e5e5"));
    colorsArray.push(color("#ffffff"));
    colorArrays.push(colorsArray);
    highContrast.push(colorsArray);
    colorsArray = [];
    //0
    colorsArray.push(color("#cdb4db"));
    colorsArray.push(color("#ffc8dd"));
    colorsArray.push(color("#ffafcc"));
    colorsArray.push(color("#bde0fe"));
    colorsArray.push(color("#a2d2ff"));
    colorArrays.push(colorsArray);
    pastel.push(colorsArray);
    colorsArray = [];
    //1
    colorsArray.push(color("#264653"));
    colorsArray.push(color("#2a9d8f"));
    colorsArray.push(color("#e9c46a"));
    colorsArray.push(color("#f4a261"));
    colorsArray.push(color("#e76f51"));
    colorArrays.push(colorsArray);
    multiColor.push(colorsArray);
    colorsArray = [];
    /*
    colorsArray.push(color("#ffe5ec"));
    colorsArray.push(color("#ffc2d1"));
    colorsArray.push(color("#ffb3c6"));
    colorsArray.push(color("#ff8fab"));
    colorsArray.push(color("#fb6f92"));
    colorArrays.push(colorsArray);
    pastel.push(colorsArray);
    colorsArray = [];
    */
/*
    //34
    colorsArray.push(color("#f72585"));
    colorsArray.push(color("#7209b7"));
    colorsArray.push(color("#3a0ca3"));
    colorsArray.push(color("#4361ee"));
    colorsArray.push(color("#4cc9f0"));
    colorArrays.push(colorsArray);
    multiColor.push(colorsArray);
    colorsArray = [];
    //35
    colorsArray.push(color("#70d6ff"));
    colorsArray.push(color("#ff70a6"));
    colorsArray.push(color("#ff9770"));
    colorsArray.push(color("#ffd670"));
    colorsArray.push(color("#e9ff70"));
    colorArrays.push(colorsArray);
    pastel.push(colorsArray);
    colorsArray = [];
   
    //40
    colorsArray.push(color("#27187e"));
    colorsArray.push(color("#758bfd"));
    colorsArray.push(color("#aeb8fe"));
    colorsArray.push(color("#f1f2f6"));
    colorsArray.push(color("#ff8600"));
    colorArrays.push(colorsArray);
    highContrast.push(colorsArray);
    colorsArray = [];
    //41
    colorsArray.push(color("#5f0f40"));
    colorsArray.push(color("#9a031e"));
    colorsArray.push(color("#fb8b24"));
    colorsArray.push(color("#e36414"));
    colorsArray.push(color("#0f4c5c"));
    colorArrays.push(colorsArray);
    multiColor.push(colorsArray);
    colorsArray = [];
    //42
    colorsArray.push(color("#335c67"));
    colorsArray.push(color("#fff3b0"));
    colorsArray.push(color("#e09f3e"));
    colorsArray.push(color("#9e2a2b"));
    colorsArray.push(color("#540b0e"));
    colorArrays.push(colorsArray);
    multiColor.push(colorsArray);
    colorsArray = [];
    //43
    colorsArray.push(color("#003049"));
    colorsArray.push(color("#d62828"));
    colorsArray.push(color("#f77f00"));
    colorsArray.push(color("#fcbf49"));
    colorsArray.push(color("#eae2b7"));
    colorArrays.push(colorsArray);
    multiColor.push(colorsArray);
    colorsArray = [];
    //44
    colorsArray.push(color("#283d3b"));
    colorsArray.push(color("#197278"));
    colorsArray.push(color("#edddd4"));
    colorsArray.push(color("#c44536"));
    colorsArray.push(color("#772e25"));
    colorArrays.push(colorsArray);
    multiColor.push(colorsArray);
    colorsArray = [];
    //45
    colorsArray.push(color("#011627"));
    colorsArray.push(color("#fdfffc"));
    colorsArray.push(color("#2ec4b6"));
    colorsArray.push(color("#e71d36"));
    colorsArray.push(color("#ff9f1c"));
    colorArrays.push(colorsArray);
    highContrast.push(colorsArray);
    colorsArray = [];

    //47
    colorsArray.push(color("#fb8b24"));
    colorsArray.push(color("#d90368"));
    colorsArray.push(color("#820263"));
    colorsArray.push(color("#291720"));
    colorsArray.push(color("#04a777"));
    colorArrays.push(colorsArray);
    multiColor.push(colorsArray);
    colorsArray = [];
    
    //48
    colorsArray.push(color('#780000'));
    colorsArray.push(color('#c1121f'));
    colorsArray.push(color('#fdf0d5'));
    colorsArray.push(color('#003049'));
    colorsArray.push(color('#669bbc'));
    colorArrays.push(colorsArray);
    multiColor.push(colorsArray);
    colorsArray = [];

    //52
    colorsArray.push(color('#0d3b66'));
    colorsArray.push(color('#faf0ca'));
    colorsArray.push(color('#f4d35e'));
    colorsArray.push(color('#ee964b'));
    colorsArray.push(color('#f95738'));
    colorArrays.push(colorsArray);
    multiColor.push(colorsArray);
    colorsArray = [];

     //54
    colorsArray.push(color('#0c0f0a'));
    colorsArray.push(color('#ff206e'));
    colorsArray.push(color('#fbff12'));
    colorsArray.push(color('#41ead4'));
    colorsArray.push(color('#ffffff'));
    colorArrays.push(colorsArray);
    highContrast.push(colorsArray);
    colorsArray = [];

    //55
    colorsArray.push(color('#562c2c'));
    colorsArray.push(color('#f2542d'));
    colorsArray.push(color('#f5dfbb'));
    colorsArray.push(color('#0e9594'));
    colorsArray.push(color('#127475'));
    colorArrays.push(colorsArray);
    multiColor.push(colorsArray);
    colorsArray = [];

    //56
    colorsArray.push(color('#721817'));
    colorsArray.push(color('#fa9f42'));
    colorsArray.push(color('#2b4162'));
    colorsArray.push(color('#0b6e4f'));
    colorsArray.push(color('#e0e0e2'));
    colorArrays.push(colorsArray);
    multiColor.push(colorsArray);
    colorsArray = [];

    colorsArray.push(color('#8cb369'));
    colorsArray.push(color('#f4e285'));
    colorsArray.push(color('#f4a259'));
    colorsArray.push(color('#5b8e7d'));
    colorsArray.push(color('#bc4b51'));
    colorArrays.push(colorsArray);
    pastel.push(colorsArray);
    colorsArray = [];
/*
    //17    monochrome red
    colorsArray.push(color("#f08080"));
    colorsArray.push(color("#f4978e"));
    colorsArray.push(color("#f8ad9d"));
    colorsArray.push(color("#fbc4ab"));
    colorsArray.push(color("#ffdab9"));
    colorArrays.push(colorsArray);
    monochrome.push(colorsArray);
    colorsArray = [];

    //27    monochrome blue/green/gray
    colorsArray.push(color("#01161e"));
    colorsArray.push(color("#124559"));
    colorsArray.push(color("#598392"));
    colorsArray.push(color("#aec3b0"));
    colorsArray.push(color("#eff6e0"));
    colorArrays.push(colorsArray);
    monochrome.push(colorsArray);
    colorsArray = [];

    // Monochrome Red
    colorsArray.push(color("#f7b267"));
    colorsArray.push(color("#f79d65"));
    colorsArray.push(color("#f4845f"));
    colorsArray.push(color("#f27059"));
    colorsArray.push(color("#f25c54"));
    colorArrays.push(colorsArray);
    monochrome.push(colorsArray);
    colorsArray = [];

    // Monochrome Green
    colorsArray.push(color("#87AE20"));
    colorsArray.push(color("#558138"));
    colorsArray.push(color("#7FBC57"));
    colorsArray.push(color("#5EA627"));
    colorsArray.push(color("#19340B"));
    colorArrays.push(colorsArray);
    monochrome.push(colorsArray);
    colorsArray = [];

    // Monochrome Blue
    colorsArray.push(color("#03045e"));
    colorsArray.push(color("#0077b6"));
    colorsArray.push(color("#00b4d8"));
    colorsArray.push(color("#90e0ef"));
    colorsArray.push(color("#caf0f8"));
    colorArrays.push(colorsArray);
    monochrome.push(colorsArray);
    colorsArray = [];
*/


/////////////////////////////////////////////////////////////  6 Colors ////////////////////////////////////////
    colorsArray.push(color(228,3,3));
    colorsArray.push(color(255,140,0));
    colorsArray.push(color(255,237,0));
    colorsArray.push(color(0,128,38));
    colorsArray.push(color(0,77,255));
    colorsArray.push(color(117,7,135));
    colorArrays.push(colorsArray);
    multiColor.push(colorsArray);
    colorsArray = [];



/////////////////////////////////////////////////////////////  7 Colors ////////////////////////////////////////
    colorsArray.push(color("#f94144"));
    colorsArray.push(color("#f3722c"));
    colorsArray.push(color("#f8961e"));
    colorsArray.push(color("#f9c74f"));
    colorsArray.push(color("#90be6d"));
    colorsArray.push(color("#43aa8b"));
    colorsArray.push(color("#577590"));
    colorArrays.push(colorsArray);
    multiColor.push(colorsArray);
    colorsArray = [];

    //mirror1
    colorsArray.push(color("#DDFF00"));
    colorsArray.push(color("#C900FF"));
    colorsArray.push(color("#1600FF"));
    colorsArray.push(color("#00FFBB"));
    colorsArray.push(color("#FF1600"));
    colorsArray.push(color("#000000"));
    colorsArray.push(color("#FFA800"));
    colorArrays.push(colorsArray);
    colorsArray = [];

/*
/////////////////////////////////////////////////////////////  9 Colors ////////////////////////////////////////
    //  monochrome blue
    colorsArray.push(color("#03045e"));
    colorsArray.push(color("#023e8a"));
    colorsArray.push(color("#0077b6"));
    colorsArray.push(color("#0096c7"));
    colorsArray.push(color("#00b4d8"));
    colorsArray.push(color("#48cae4"));
    colorsArray.push(color("#90e0ef"));
    colorsArray.push(color("#ade8f4"));
    colorsArray.push(color("#caf0f8"));
    colorArrays.push(colorsArray);
    monochrome.push(colorsArray);
    colorsArray = [];

/////////////////////////////////////////////////////////////  10 Colors ////////////////////////////////////////   
    // monochrome green
/*    
    colorsArray.push(color("#99e2b4"));
    colorsArray.push(color("#88d4ab"));
    colorsArray.push(color("#78c6a3"));
    colorsArray.push(color("#67b99a"));
    colorsArray.push(color("#56ab91"));
    colorsArray.push(color("#469d89"));
    colorsArray.push(color("#358f80"));
    colorsArray.push(color("#248277"));
    colorsArray.push(color("#14746f"));
    colorsArray.push(color("#036666"));
    colorArrays.push(colorsArray);
    multiColor.push(colorsArray);
    colorsArray = [];

    colorsArray.push(color("#f94144"));
    colorsArray.push(color("#f3722c"));
    colorsArray.push(color("#f8961e"));
    colorsArray.push(color("#f9844a"));
    colorsArray.push(color("#f9c74f"));
    colorsArray.push(color("#90be6d"));
    colorsArray.push(color("#43aa8b"));
    colorsArray.push(color("#4d908e"));
    colorsArray.push(color("#577590"));
    colorsArray.push(color("#277da1"));
    colorArrays.push(colorsArray);
    multiColor.push(colorsArray);
    colorsArray = [];
    
    colorsArray.push(color("#ff6d00"));
    colorsArray.push(color("#ff7900"));
    colorsArray.push(color("#ff8500"));
    colorsArray.push(color("#ff9100"));
    colorsArray.push(color("#ff9e00"));
    colorsArray.push(color("#240046"));
    colorsArray.push(color("#3c096c"));
    colorsArray.push(color("#5a189a"));
    colorsArray.push(color("#7b2cbf"));
    colorsArray.push(color("#9d4edd"));
    colorArrays.push(colorsArray);
    multiColor.push(colorsArray);
    colorsArray = [];
    
    colorsArray.push(color("#ff0000"));
    colorsArray.push(color("#ff8700"));
    colorsArray.push(color("#ffd300"));
    colorsArray.push(color("#deff0a"));
    colorsArray.push(color("#a1ff0a"));
    colorsArray.push(color("#0aff99"));
    colorsArray.push(color("#0aefff"));
    colorsArray.push(color("#147df5"));
    colorsArray.push(color("#580aff"));
    colorsArray.push(color("#be0aff"));
    colorArrays.push(colorsArray);
    multiColor.push(colorsArray);
    colorsArray = [];
    
    colorsArray.push(color("#ff5400"));
    colorsArray.push(color("#ff6d00"));
    colorsArray.push(color("#ff8500"));
    colorsArray.push(color("#ff9100"));
    colorsArray.push(color("#ff9e00"));
    colorsArray.push(color("#00b4d8"));
    colorsArray.push(color("#0096c7"));
    colorsArray.push(color("#0077b6"));
    colorsArray.push(color("#023e8a"));
    colorsArray.push(color("#03045e"));
    colorArrays.push(colorsArray);
    multiColor.push(colorsArray);
    colorsArray = [];

    colorsArray.push(color("#001219"));
    colorsArray.push(color("#005f73"));
    colorsArray.push(color("#0a9396"));
    colorsArray.push(color("#94d2bd"));
    colorsArray.push(color("#e9d8a6"));
    colorsArray.push(color("#ee9b00"));
    colorsArray.push(color("#ca6702"));
    colorsArray.push(color("#bb3e03"));
    colorsArray.push(color("#ae2012"));
    colorsArray.push(color("#9b2226"));
    colorArrays.push(colorsArray);
    multiColor.push(colorsArray);
    colorsArray = [];

    //25    gradient pink to light blue
    colorsArray.push(color("#f72585"));
    colorsArray.push(color("#b5179e"));
    colorsArray.push(color("#7209b7"));
    colorsArray.push(color("#560bad"));
    colorsArray.push(color("#480ca8"));
    colorsArray.push(color("#3a0ca3"));
    colorsArray.push(color("#3f37c9"));
    colorsArray.push(color("#4361ee"));
    colorsArray.push(color("#4895ef"));
    colorsArray.push(color("#4cc9f0"));
    colorArrays.push(colorsArray);
    monochrome.push(colorsArray);
    colorsArray = [];

    //30
    colorsArray.push(color("#03071e"));
    colorsArray.push(color("#370617"));
    colorsArray.push(color("#6a040f"));
    colorsArray.push(color("#9d0208"));
    colorsArray.push(color("#d00000"));
    colorsArray.push(color("#dc2f02"));
    colorsArray.push(color("#e85d04"));
    colorsArray.push(color("#f48c06"));
    colorsArray.push(color("#faa307"));
    colorsArray.push(color("#ffba08"));
    colorArrays.push(colorsArray);
    highContrast.push(colorsArray);
    colorsArray = [];

    //32
    colorsArray.push(color("#fbf8cc"));
    colorsArray.push(color("#fde4cf"));
    colorsArray.push(color("#ffcfd2"));
    colorsArray.push(color("#f1c0e8"));
    colorsArray.push(color("#cfbaf0"));
    colorsArray.push(color("#a3c4f3"));
    colorsArray.push(color("#90dbf4"));
    colorsArray.push(color("#8eecf5"));
    colorsArray.push(color("#98f5e1"));
    colorsArray.push(color("#b9fbc0"));
    colorArrays.push(colorsArray);
    pastel.push(colorsArray);
    colorsArray = [];
/*
    //49    gradient green to blue
    colorsArray.push(color('#d9ed92'));
    colorsArray.push(color('#b5e48c'));
    colorsArray.push(color('#99d98c'));
    colorsArray.push(color('#76c893'));
    colorsArray.push(color('#52b69a'));
    colorsArray.push(color('#34a0a4'));
    colorsArray.push(color('#168aad'));
    colorsArray.push(color('#1a759f'));
    colorsArray.push(color('#1e6091'));
    colorsArray.push(color('#184e77'));
    colorArrays.push(colorsArray);
    monochrome.push(colorsArray);
    colorsArray = [];
*/
    //50    gradient green to lilac
    colorsArray.push(color("#006466"));
    colorsArray.push(color("#065a60"));
    colorsArray.push(color("#0b525b"));
    colorsArray.push(color("#144552"));
    colorsArray.push(color("#1b3a4b"));
    colorsArray.push(color("#212f45"));
    colorsArray.push(color("#272640"));
    colorsArray.push(color("#312244"));
    colorsArray.push(color("#3e1f47"));
    colorsArray.push(color("#4d194d"));
    colorArrays.push(colorsArray);
    monochrome.push(colorsArray);
    colorsArray = [];

    //53    gradient lilac to light blue
    colorsArray.push(color("#7400b8"));
    colorsArray.push(color("#6930c3"));
    colorsArray.push(color("#5e60ce"));
    colorsArray.push(color("#5390d9"));
    colorsArray.push(color("#4ea8de"));
    colorsArray.push(color("#48bfe3"));
    colorsArray.push(color("#56cfe1"));
    colorsArray.push(color("#64dfdf"));
    colorsArray.push(color("#72efdd"));
    colorsArray.push(color("#80ffdb"));
    colorArrays.push(colorsArray);
    monochrome.push(colorsArray);
    colorsArray = [];

    colorsArray.push(color("#0b090a"));
    colorsArray.push(color("#161a1d"));
    colorsArray.push(color("#660708"));
    colorsArray.push(color("#a4161a"));
    colorsArray.push(color("#ba181b"));
    colorsArray.push(color("#e5383b"));
    colorsArray.push(color("#b1a7a6"));
    colorsArray.push(color("#d3d3d3"));
    colorsArray.push(color("#f5f3f4"));
    colorsArray.push(color("#ffffff"));
    colorArrays.push(colorsArray);
    highContrast.push(colorsArray);
    colorsArray = [];
/*
    colorsArray.push(color(getRandomInt(256),getRandomInt(256),getRandomInt(256)));
    colorsArray.push(color(getRandomInt(256),getRandomInt(256),getRandomInt(256)));
    colorsArray.push(color(getRandomInt(256),getRandomInt(256),getRandomInt(256)));
    colorsArray.push(color(getRandomInt(256),getRandomInt(256),getRandomInt(256)));
    colorsArray.push(color(getRandomInt(256),getRandomInt(256),getRandomInt(256)));
    colorArrays.push(colorsArray);
    colorsArray = [];

    colorsArray.push(color(getRandomInt(256),getRandomInt(256),getRandomInt(256)));
    colorsArray.push(color(getRandomInt(256),getRandomInt(256),getRandomInt(256)));
    colorsArray.push(color(getRandomInt(256),getRandomInt(256),getRandomInt(256)));
    colorsArray.push(color(getRandomInt(256),getRandomInt(256),getRandomInt(256)));
    colorsArray.push(color(getRandomInt(256),getRandomInt(256),getRandomInt(256)));
    colorArrays.push(colorsArray);
    colorsArray = [];
*/
}

function drawColors(){
    let reds,greens,blues;
    graph = createGraphics(width, colorArrays.length*30);
    for(let a = 0; a < colorArrays.length; a++){
        for(let b = 0; b < colorArrays[a].length; b++){
            graph.stroke(0);
            graph.fill(colorArrays[a][b]);
            //print("colorArrays[", a, "][", b,"])",colorArrays[a][b]);
            reds = red(colorArrays[a][b]);
            greens = green(colorArrays[a][b]);
            blues = blue(colorArrays[a][b]);
            //print("red",reds);
            //print("green",greens);
            //print("blue",blues);
            if(reds > 200 && greens > 200 && blues > 200){
                brightList.push(a);
            }
            if(reds < 75 && greens < 75 && blues < 75){
                darkList.push(a);
            }
            graph.rect(b*180,a*30,180,30);
            graph.textSize(25);
            graph.fill(125);
            let hexColor = color(colorArrays[a][b]);
            if(a === 0){
                if(b === 0){
                    graph.text(hexColor.toString('#rrggbb'), 35, a+30);
                    graph.text(a, 0, a+30);
                }else{
                    graph.text(hexColor.toString('#rrggbb'), b*180, a+30);
                }
            }else{
                if(b === 0){
                    graph.text(hexColor.toString('#rrggbb'), 35, a*30+30);
                    graph.text(a, 0, a*30+30);
                }else{
                    graph.text(hexColor.toString('#rrggbb'), b*180, a*30+30);
                }

                
            }
        }
    }

    //multiColor,highContrast,pastel,monochrome
    graphLAD = createGraphics(width, multiColor.length*30);
    for(let a = 0; a < multiColor.length; a++){
        for(let b = 0; b < multiColor[a].length; b++){
            graphLAD.stroke(0);
            graphLAD.fill(multiColor[a][b]);
            graphLAD.rect(b*180,a*30,180,30);
            graphLAD.textSize(25);
            graphLAD.fill(125);
            let hexColor = color(multiColor[a][b]);
            if(a === 0){
                if(b === 0){
                    graphLAD.text(hexColor.toString('#rrggbb'), 35, a+30);
                    graphLAD.text(a, 0, a+30);
                }else{
                    graphLAD.text(hexColor.toString('#rrggbb'), b*180, a+30);
                }
            }else{
                if(b === 0){
                    graphLAD.text(hexColor.toString('#rrggbb'), 35, a*30+30);
                    graphLAD.text(a, 0, a*30+30);
                }else{
                    graphLAD.text(hexColor.toString('#rrggbb'), b*180, a*30+30);
                }
            }
        }
    }
    //print("brightList", brightList);
    //print("darkList", darkList);
}

function printRGBs(){
    let reds,greens,blues;
    for(let a = 0; a < colorArrays.length; a++){
        for(let b = 0; b < colorArrays[a].length; b++){
            print("colorArrays[", a, "][", b,"])",colorArrays[a][b]);
            reds = red(colorArrays[a][b]);
            greens = green(colorArrays[a][b]);
            blues = blue(colorArrays[a][b]);
            print("red",reds);
            print("green",greens);
            print("blue",blues);
        }
    }
}

//image(graph,0,0,width,height); 
