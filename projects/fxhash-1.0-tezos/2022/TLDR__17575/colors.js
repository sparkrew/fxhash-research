

//// 0-15 Hue Settings
//// 0-7 Shade Settings


function setStroke(setHue, setShade, a) {
  stroke(0, 0, 0, a);
  /// grey to white
  if (setHue === 0) {
    if (setShade === 0) {
      stroke(32, a);
    }
    if (setShade === 1) {
      stroke(64, a);
    }
    if (setShade === 2) {
      stroke(96, a);
    }
    if (setShade === 3) {
      stroke(128, a);
    }
    if (setShade === 4) {
      stroke(160, a);
    }
    if (setShade === 5) {
      stroke(192, a);
    }
    if (setShade === 6) {
      stroke(224, a);
    }
    if (setShade === 7) {
      stroke(255, a);
    }
  }

  /// dark blue to light blue
  if (setHue === 1) {
    if (setShade === 0) {
      stroke(0, 16, 32, a);
    }
    if (setShade === 1) {
      stroke(0, 32, 64, a);
    }
    if (setShade === 2) {
      stroke(0, 64, 96, a);
    }
    if (setShade === 3) {
      stroke(0, 96, 128, a);
    }
    if (setShade === 4) {
      stroke(0, 128, 160, a);
    }
    if (setShade === 5) {
      stroke(0, 160, 192, a);
    }
    if (setShade === 6) {
      stroke(0, 192, 224, a);
    }
    if (setShade === 7) {
      stroke(0, 224, 255, a);
    }
  }
  /// dark teal to bright teal
  if (setHue === 2) {
    if (setShade === 0) {
      stroke(0, 32, 16, a);
    }
    if (setShade === 1) {
      stroke(0, 64, 32, a);
    }
    if (setShade === 2) {
      stroke(0, 96, 64, a);
    }
    if (setShade === 3) {
      stroke(0, 128, 96, a);
    }
    if (setShade === 4) {
      stroke(0, 160, 128, a);
    }
    if (setShade === 5) {
      stroke(0, 192, 160, a);
    }
    if (setShade === 6) {
      stroke(0, 224, 192, a);
    }
    if (setShade === 7) {
      stroke(0, 255, 224, a);
    }
  }

  
   /// dark green to bright green
  if (setHue === 3) {
    if (setShade === 0) {
      stroke(0, 40, 0, a);
    }
    if (setShade === 1) {
      stroke(0, 72, 16, a);
    }
    if (setShade === 2) {
      stroke(0, 104, 32, a);
    }
    if (setShade === 3) {
      stroke(0, 136, 64, a);
    }
    if (setShade === 4) {
      stroke(0, 168, 96, a);
    }
    if (setShade === 5) {
      stroke(0, 200, 128, a);
    }
    if (setShade === 6) {
      stroke(0, 232, 160, a);
    }
    if (setShade === 7) {
      stroke(0, 255, 192, a);
    }
  }
  /// greens
  if (setHue === 4) {
    if (setShade === 0) {
      stroke(0, 40, 0, a);
    }
    if (setShade === 1) {
      stroke(0, 72, 0, a);
    }
    if (setShade === 2) {
      stroke(0, 104, 0, a);
    }
    if (setShade === 3) {
      stroke(0, 136, 0, a);
    }
    if (setShade === 4) {
      stroke(0, 168, 0, a);
    }
    if (setShade === 5) {
      stroke(0, 200, 0, a);
    }
    if (setShade === 6) {
      stroke(0, 232, 0, a);
    }
    if (setShade === 7) {
      stroke(0, 255, 0, a);
    }
  } 
  //// green to yellow green
  if (setHue === 5) {
    if (setShade === 0) {
      stroke(16,32,0, a);
    }
    if (setShade === 1) {
      stroke(32,64,0, a);
    }
    if (setShade === 2) {
      stroke(64,96,0, a);
    }
    if (setShade === 3) {
      stroke(96, 128,0, a);
    }
    if (setShade === 4) {
      stroke(128, 160,0, a);
    }
    if (setShade === 5) {
      stroke(160,192,0,a);
    }
    if (setShade === 6) {
      stroke(192, 224,0,a);
    }
    if (setShade === 7) {
      stroke(224, 255,0,a);
    }
  }

  //// golden to orange
  if (setHue === 6) {
    if (setShade === 0) {
      stroke(80,32,0, a);
    }
    if (setShade === 1) {
      stroke(108,64,0, a);
    }
    if (setShade === 2) {
      stroke(146,96,0, a);
    }
    if (setShade === 3) {
      stroke(176, 124,0, a);
    }
    if (setShade === 4) {
      stroke(208, 160,0, a);
    }
    if (setShade === 5) {
      stroke(240,192,0,a);
    }
    if (setShade === 6) {
      stroke(255, 224,0,a);
    }
    if (setShade === 7) {
      stroke(255, 240,0,a);
    }
  }
  
  /// brown to reddish
    if (setHue === 7) {
    if (setShade === 0) {
      stroke(64,16,0, a);
    }
    if (setShade === 1) {
      stroke(96,32,0, a);
    }
    if (setShade === 2) {
      stroke(128,64,0, a);
    }
    if (setShade === 3) {
      stroke(160, 96,0, a);
    }
    if (setShade === 4) {
      stroke(192, 128,0, a);
    }
    if (setShade === 5) {
      stroke(224,160,0,a);
    }
    if (setShade === 6) {
      stroke(240, 192,0,a);
    }
    if (setShade === 7) {
      stroke(255, 224,0,a);
    }
  }

  /// orange to red
    if (setHue === 8) {
    if (setShade === 0) {
      stroke(64,0,0, a);
    }
    if (setShade === 1) {
      stroke(96,16,0, a);
    }
    if (setShade === 2) {
      stroke(128,32,0, a);
    }
    if (setShade === 3) {
      stroke(160, 64,0, a);
    }
    if (setShade === 4) {
      stroke(192, 96,0, a);
    }
    if (setShade === 5) {
      stroke(224,128,0,a);
    }
    if (setShade === 6) {
      stroke(240, 160,0,a);
    }
    if (setShade === 7) {
      stroke(255, 192,0,a);
    }
  }
  
    /// orange to red
    if (setHue === 9) {
    if (setShade === 0) {
      stroke(64,0,0, a);
    }
    if (setShade === 1) {
      stroke(96,0,0, a);
    }
    if (setShade === 2) {
      stroke(128,0,0, a);
    }
    if (setShade === 3) {
      stroke(160, 0,0, a);
    }
    if (setShade === 4) {
      stroke(192, 0,0, a);
    }
    if (setShade === 5) {
      stroke(224,0,0,a);
    }
    if (setShade === 6) {
      stroke(240, 0,0,a);
    }
    if (setShade === 7) {
      stroke(255, 0,0,a);
    }
  }

      /// maroon to pink
    if (setHue === 10) {
    if (setShade === 0) {
      stroke(64,4,0, a);
    }
    if (setShade === 1) {
      stroke(96,8,8, a);
    }
    if (setShade === 2) {
      stroke(128,16,32, a);
    }
    if (setShade === 3) {
      stroke(160, 32,64, a);
    }
    if (setShade === 4) {
      stroke(192, 64,96, a);
    }
    if (setShade === 5) {
      stroke(224,96,128,a);
    }
    if (setShade === 6) {
      stroke(240, 128,160,a);
    }
    if (setShade === 7) {
      stroke(255, 160,192,a);
    }
  }

    /// wine peach purple
    if (setHue === 11) {
    if (setShade === 0) {
      stroke(128,0,32, a);
    }
    if (setShade === 1) {
      stroke(160,16,64, a);
    }
    if (setShade === 2) {
      stroke(192,32,96, a);
    }
    if (setShade === 3) {
      stroke(224, 64,128, a);
    }
    if (setShade === 4) {
      stroke(192, 64,160, a);
    }
    if (setShade === 5) {
      stroke(160,32,192,a);
    }
    if (setShade === 6) {
      stroke(128, 16,224,a);
    }
    if (setShade === 7) {
      stroke(92, 0,255,a);
    }
  }
  
    /// purple to brown
    if (setHue === 12) {
    if (setShade === 0) {
      stroke(64,32,0, a);
    }
    if (setShade === 1) {
      stroke(64,32,16, a);
    }
    if (setShade === 2) {
      stroke(64,32,32, a);
    }
    if (setShade === 3) {
      stroke(64, 32,64, a);
    }
    if (setShade === 4) {
      stroke(64, 32,96, a);
    }
    if (setShade === 5) {
      stroke(64,32,128,a);
    }
    if (setShade === 6) {
      stroke(64, 32,160,a);
    }
    if (setShade === 7) {
      stroke(64, 32,192,a);
    }
  }
    /// black to blue
    if (setHue === 13) {
    if (setShade === 7) {
      stroke(0,0,224, a);
    }
    if (setShade === 6) {
      stroke(0,0,192, a);
    }
    if (setShade === 5) {
      stroke(0,0,160, a);
    }
    if (setShade === 4) {
      stroke(0,0,128, a);
    }
    if (setShade === 3) {
      stroke(0,0,96, a);
    }
    if (setShade === 2) {
      stroke(0,0,64,a);
    }
    if (setShade === 1) {
      stroke(0,0,32,a);
    }
    if (setShade === 0) {
      stroke(0,0,0,a);
    }
  }
 
      /// lavender to cream
    if (setHue === 14) {
    if (setShade === 0) {
      stroke(32,32,160, a);
    }
    if (setShade === 1) {
      stroke(64,64,192, a);
    }
    if (setShade === 2) {
      stroke(96,96,192, a);
    }
    if (setShade === 3) {
      stroke(128, 128,192, a);
    }
    if (setShade === 4) {
      stroke(160, 160,192, a);
    }
    if (setShade === 5) {
      stroke(192,192,192,a);
    }
    if (setShade === 6) {
      stroke(224, 224,192,a);
    }
    if (setShade === 7) {
      stroke(255, 255,192,a);
    }
  }

    /// tan to burnt umber
    if (setHue === 15) {
    if (setShade === 7) {
      stroke(32,16,0, a);
    }
    if (setShade === 6) {
      stroke(64,32,16, a);
    }
    if (setShade === 5) {
      stroke(96,64,32, a);
    }
    if (setShade === 4) {
      stroke(128, 96,64, a);
    }
    if (setShade === 3) {
      stroke(160, 128,96, a);
    }
    if (setShade === 2) {
      stroke(192,160,128,a);
    }
    if (setShade === 1) {
      stroke(224, 192,160,a);
    }
    if (setShade === 0) {
      stroke(255, 224,192,a);
    }
  }
   /// grey to white
  if (setHue === 16) {
    if (setShade === 0) {
      stroke(32, a);
    }
    if (setShade === 1) {
      stroke(64, a);
    }
    if (setShade === 2) {
      stroke(96, a);
    }
    if (setShade === 3) {
      stroke(128, a);
    }
    if (setShade === 4) {
      stroke(160, a);
    }
    if (setShade === 5) {
      stroke(192, a);
    }
    if (setShade === 6) {
      stroke(224, a);
    }
    if (setShade === 7) {
      stroke(255, a);
    }
  }

  /// dark blue to light blue
  if (setHue === 17) {
    if (setShade === 0) {
      stroke(0, 16, 32, a);
    }
    if (setShade === 1) {
      stroke(0, 32, 64, a);
    }
    if (setShade === 2) {
      stroke(0, 64, 96, a);
    }
    if (setShade === 3) {
      stroke(0, 96, 128, a);
    }
    if (setShade === 4) {
      stroke(0, 128, 160, a);
    }
    if (setShade === 5) {
      stroke(0, 160, 192, a);
    }
    if (setShade === 6) {
      stroke(0, 192, 224, a);
    }
    if (setShade === 7) {
      stroke(0, 224, 255, a);
    }
  }
  /// dark teal to bright teal
  if (setHue === 18) {
    if (setShade === 0) {
      stroke(0, 32, 16, a);
    }
    if (setShade === 1) {
      stroke(0, 64, 32, a);
    }
    if (setShade === 2) {
      stroke(0, 96, 64, a);
    }
    if (setShade === 3) {
      stroke(0, 128, 96, a);
    }
    if (setShade === 4) {
      stroke(0, 160, 128, a);
    }
    if (setShade === 5) {
      stroke(0, 192, 160, a);
    }
    if (setShade === 6) {
      stroke(0, 224, 192, a);
    }
    if (setShade === 7) {
      stroke(0, 255, 224, a);
    }
  }

  
   /// dark green to bright green
  if (setHue === 19) {
    if (setShade === 0) {
      stroke(0, 40, 0, a);
    }
    if (setShade === 1) {
      stroke(0, 72, 16, a);
    }
    if (setShade === 2) {
      stroke(0, 104, 32, a);
    }
    if (setShade === 3) {
      stroke(0, 136, 64, a);
    }
    if (setShade === 4) {
      stroke(0, 168, 96, a);
    }
    if (setShade === 5) {
      stroke(0, 200, 128, a);
    }
    if (setShade === 6) {
      stroke(0, 232, 160, a);
    }
    if (setShade === 7) {
      stroke(0, 255, 192, a);
    }
  }
  if (setShade > 19) {
    stroke(0,0,0,255);
  }

}



//////////////////////////////////////////
///////////////////////////////////////////
//////////////////////////////////////////////////////////
///////////////////////////////////////////
function setFill(setHue, setShade, a) {
  fill(0, 0, 0, a);
  /// grey to white
  if (setHue === 0) {
    if (setShade === 0) {
      fill(32, a);
    }
    if (setShade === 1) {
      fill(64, a);
    }
    if (setShade === 2) {
      fill(96, a);
    }
    if (setShade === 3) {
      fill(128, a);
    }
    if (setShade === 4) {
      fill(160, a);
    }
    if (setShade === 5) {
      fill(192, a);
    }
    if (setShade === 6) {
      fill(224, a);
    }
    if (setShade === 7) {
      fill(255, a);
    }
  }

  /// dark blue to light blue
  if (setHue === 1) {
    if (setShade === 0) {
      fill(0, 16, 32, a);
    }
    if (setShade === 1) {
      fill(0, 32, 64, a);
    }
    if (setShade === 2) {
      fill(0, 64, 96, a);
    }
    if (setShade === 3) {
      fill(0, 96, 128, a);
    }
    if (setShade === 4) {
      fill(0, 128, 160, a);
    }
    if (setShade === 5) {
      fill(0, 160, 192, a);
    }
    if (setShade === 6) {
      fill(0, 192, 224, a);
    }
    if (setShade === 7) {
      fill(0, 224, 255, a);
    }
  }
  /// dark teal to bright teal
  if (setHue === 2) {
    if (setShade === 0) {
      fill(0, 32, 16, a);
    }
    if (setShade === 1) {
      fill(0, 64, 32, a);
    }
    if (setShade === 2) {
      fill(0, 96, 64, a);
    }
    if (setShade === 3) {
      fill(0, 128, 96, a);
    }
    if (setShade === 4) {
      fill(0, 160, 128, a);
    }
    if (setShade === 5) {
      fill(0, 192, 160, a);
    }
    if (setShade === 6) {
      fill(0, 224, 192, a);
    }
    if (setShade === 7) {
      fill(0, 255, 224, a);
    }
  }

  
   /// dark green to bright green
  if (setHue === 3) {
    if (setShade === 0) {
      fill(0, 40, 0, a);
    }
    if (setShade === 1) {
      fill(0, 72, 16, a);
    }
    if (setShade === 2) {
      fill(0, 104, 32, a);
    }
    if (setShade === 3) {
      fill(0, 136, 64, a);
    }
    if (setShade === 4) {
      fill(0, 168, 96, a);
    }
    if (setShade === 5) {
      fill(0, 200, 128, a);
    }
    if (setShade === 6) {
      fill(0, 232, 160, a);
    }
    if (setShade === 7) {
      fill(0, 255, 192, a);
    }
  }
  /// greens
  if (setHue === 4) {
    if (setShade === 0) {
      fill(0, 40, 0, a);
    }
    if (setShade === 1) {
      fill(0, 72, 0, a);
    }
    if (setShade === 2) {
      fill(0, 104, 0, a);
    }
    if (setShade === 3) {
      fill(0, 136, 0, a);
    }
    if (setShade === 4) {
      fill(0, 168, 0, a);
    }
    if (setShade === 5) {
      fill(0, 200, 0, a);
    }
    if (setShade === 6) {
      fill(0, 232, 0, a);
    }
    if (setShade === 7) {
      fill(0, 255, 0, a);
    }
  } 
  //// green to yellow green
  if (setHue === 5) {
    if (setShade === 0) {
      fill(16,32,0, a);
    }
    if (setShade === 1) {
      fill(32,64,0, a);
    }
    if (setShade === 2) {
      fill(64,96,0, a);
    }
    if (setShade === 3) {
      fill(96, 128,0, a);
    }
    if (setShade === 4) {
      fill(128, 160,0, a);
    }
    if (setShade === 5) {
      fill(160,192,0,a);
    }
    if (setShade === 6) {
      fill(192, 224,0,a);
    }
    if (setShade === 7) {
      fill(224, 255,0,a);
    }
  }

  //// golden to orange
  if (setHue === 6) {
    if (setShade === 0) {
      fill(80,32,0, a);
    }
    if (setShade === 1) {
      fill(108,64,0, a);
    }
    if (setShade === 2) {
      fill(146,96,0, a);
    }
    if (setShade === 3) {
      fill(176, 124,0, a);
    }
    if (setShade === 4) {
      fill(208, 160,0, a);
    }
    if (setShade === 5) {
      fill(240,192,0,a);
    }
    if (setShade === 6) {
      fill(255, 224,0,a);
    }
    if (setShade === 7) {
      fill(255, 240,0,a);
    }
  }
  
  /// brown to reddish
    if (setHue === 7) {
    if (setShade === 0) {
      fill(64,16,0, a);
    }
    if (setShade === 1) {
      fill(96,32,0, a);
    }
    if (setShade === 2) {
      fill(128,64,0, a);
    }
    if (setShade === 3) {
      fill(160, 96,0, a);
    }
    if (setShade === 4) {
      fill(192, 128,0, a);
    }
    if (setShade === 5) {
      fill(224,160,0,a);
    }
    if (setShade === 6) {
      fill(240, 192,0,a);
    }
    if (setShade === 7) {
      fill(255, 224,0,a);
    }
  }

  /// orange to red
    if (setHue === 8) {
    if (setShade === 0) {
      fill(64,0,0, a);
    }
    if (setShade === 1) {
      fill(96,16,0, a);
    }
    if (setShade === 2) {
      fill(128,32,0, a);
    }
    if (setShade === 3) {
      fill(160, 64,0, a);
    }
    if (setShade === 4) {
      fill(192, 96,0, a);
    }
    if (setShade === 5) {
      fill(224,128,0,a);
    }
    if (setShade === 6) {
      fill(240, 160,0,a);
    }
    if (setShade === 7) {
      fill(255, 192,0,a);
    }
  }
  
    /// orange to reg
    if (setHue === 9) {
    if (setShade === 0) {
      fill(64,0,0, a);
    }
    if (setShade === 1) {
      fill(96,0,0, a);
    }
    if (setShade === 2) {
      fill(128,0,0, a);
    }
    if (setShade === 3) {
      fill(160, 0,0, a);
    }
    if (setShade === 4) {
      fill(192, 0,0, a);
    }
    if (setShade === 5) {
      fill(224,0,0,a);
    }
    if (setShade === 6) {
      fill(240, 0,0,a);
    }
    if (setShade === 7) {
      fill(255, 0,0,a);
    }
  }

      /// maroon to pink
    if (setHue === 10) {
    if (setShade === 0) {
      fill(64,4,0, a);
    }
    if (setShade === 1) {
      fill(96,8,8, a);
    }
    if (setShade === 2) {
      fill(128,16,32, a);
    }
    if (setShade === 3) {
      fill(160, 32,64, a);
    }
    if (setShade === 4) {
      fill(192, 64,96, a);
    }
    if (setShade === 5) {
      fill(224,96,128,a);
    }
    if (setShade === 6) {
      fill(240, 128,160,a);
    }
    if (setShade === 7) {
      fill(255, 160,192,a);
    }
  }

    /// wine peach purple
    if (setHue === 11) {
    if (setShade === 0) {
      fill(255,0,32, a);
    }
    if (setShade === 1) {
      fill(255,16,64, a);
    }
    if (setShade === 2) {
      fill(255,32,96, a);
    }
    if (setShade === 3) {
      fill(255, 64,128, a);
    }
    if (setShade === 4) {
      fill(255, 32,128, a);
    }
    if (setShade === 5) {
      fill(255,16,96,a);
    }
    if (setShade === 6) {
      fill(255, 8,64,a);
    }
    if (setShade === 7) {
      fill(255, 0,32,a);
    }
  }
  
    /// purple to brown
    if (setHue === 12) {
    if (setShade === 0) {
      fill(64,32,0, a);
    }
    if (setShade === 1) {
      fill(64,32,16, a);
    }
    if (setShade === 2) {
      fill(64,32,32, a);
    }
    if (setShade === 3) {
      fill(64, 32,64, a);
    }
    if (setShade === 4) {
      fill(64, 32,96, a);
    }
    if (setShade === 5) {
      fill(64,32,128,a);
    }
    if (setShade === 6) {
      fill(64, 32,160,a);
    }
    if (setShade === 7) {
      fill(64, 32,192,a);
    }
  }
    /// magenta to blue
    if (setHue === 13) {
    if (setShade === 7) {
      fill(0,0,224, a);
    }
    if (setShade === 6) {
      fill(0,0,192, a);
    }
    if (setShade === 5) {
      fill(0,0,160, a);
    }
    if (setShade === 4) {
      fill(0,0,128, a);
    }
    if (setShade === 3) {
      fill(0, 0, 96,a);
    }
    if (setShade === 2) {
      fill(0,0,64,a);
    }
    if (setShade === 1) {
      fill(0,0,32,a);
    }
    if (setShade === 0) {
      fill(0,0,0,a);
    }
  }
 
      /// lavender to cream
    if (setHue === 14) {
    if (setShade === 0) {
      fill(32,32,160, a);
    }
    if (setShade === 1) {
      fill(64,64,192, a);
    }
    if (setShade === 2) {
      fill(96,96,192, a);
    }
    if (setShade === 3) {
      fill(128, 128,192, a);
    }
    if (setShade === 4) {
      fill(160, 160,192, a);
    }
    if (setShade === 5) {
      fill(192,192,192,a);
    }
    if (setShade === 6) {
      fill(224, 224,192,a);
    }
    if (setShade === 7) {
      fill(255, 255,192,a);
    }
  }

    /// tan to burnt umber
    if (setHue === 15) {
    if (setShade === 7) {
      fill(32,16,0, a);
    }
    if (setShade === 6) {
      fill(64,32,16, a);
    }
    if (setShade === 5) {
      fill(96,64,32, a);
    }
    if (setShade === 4) {
      fill(128, 96,64, a);
    }
    if (setShade === 3) {
      fill(160, 128,96, a);
    }
    if (setShade === 2) {
      fill(192,160,128,a);
    }
    if (setShade === 1) {
      fill(224, 192,160,a);
    }
    if (setShade === 0) {
      fill(255, 224,192,a);
    }
  }
   /// grey to white
  if (setHue === 16) {
    if (setShade === 0) {
      fill(32, a);
    }
    if (setShade === 1) {
      fill(64, a);
    }
    if (setShade === 2) {
      fill(96, a);
    }
    if (setShade === 3) {
      fill(128, a);
    }
    if (setShade === 4) {
      fill(160, a);
    }
    if (setShade === 5) {
      fill(192, a);
    }
    if (setShade === 6) {
      fill(224, a);
    }
    if (setShade === 7) {
      fill(255, a);
    }
  }

  /// dark blue to light blue
  if (setHue === 17) {
    if (setShade === 0) {
      fill(0, 16, 32, a);
    }
    if (setShade === 1) {
      fill(0, 32, 64, a);
    }
    if (setShade === 2) {
      fill(0, 64, 96, a);
    }
    if (setShade === 3) {
      fill(0, 96, 128, a);
    }
    if (setShade === 4) {
      fill(0, 128, 160, a);
    }
    if (setShade === 5) {
      fill(0, 160, 192, a);
    }
    if (setShade === 6) {
      fill(0, 192, 224, a);
    }
    if (setShade === 7) {
      fill(0, 224, 255, a);
    }
  }
  /// dark teal to bright teal
  if (setHue === 18) {
    if (setShade === 0) {
      fill(0, 32, 16, a);
    }
    if (setShade === 1) {
      fill(0, 64, 32, a);
    }
    if (setShade === 2) {
      fill(0, 96, 64, a);
    }
    if (setShade === 3) {
      fill(0, 128, 96, a);
    }
    if (setShade === 4) {
      fill(0, 160, 128, a);
    }
    if (setShade === 5) {
      fill(0, 192, 160, a);
    }
    if (setShade === 6) {
      fill(0, 224, 192, a);
    }
    if (setShade === 7) {
      fill(0, 255, 224, a);
    }
  }

  
   /// dark green to bright green
  if (setHue === 19) {
    if (setShade === 0) {
      fill(0, 40, 0, a);
    }
    if (setShade === 1) {
      fill(0, 72, 16, a);
    }
    if (setShade === 2) {
      fill(0, 104, 32, a);
    }
    if (setShade === 3) {
      fill(0, 136, 64, a);
    }
    if (setShade === 4) {
      fill(0, 168, 96, a);
    }
    if (setShade === 5) {
      fill(0, 200, 128, a);
    }
    if (setShade === 6) {
      fill(0, 232, 160, a);
    }
    if (setShade === 7) {
      fill(0, 255, 192, a);
    }
  }
  if (setHue > 19) {
    fill(0,0,0,a);
  }
}


