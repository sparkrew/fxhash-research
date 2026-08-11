import {
  interpolateYlOrRd,
  interpolateInferno,
  interpolateMagma,
  interpolatePuBuGn,
  interpolatePlasma,
  interpolateRdPu,
  interpolateViridis,
  interpolateCividis,
  interpolateYlGnBu,
  interpolateYlGn,
  interpolateYlOrBr,
  interpolateSinebow,
  interpolateRainbow,
  interpolateWarm,
} from "d3-scale-chromatic";
import { rgb, color } from "d3-color";
import * as THREE from "three";

class Features {
  constructor() {
    //color palette
    this.color = {
      name: "",
      background: {},
      cero: {},
      uno: {},
      dos: {},
      tres: {},
      quatro: {},
      cinco: {},
      sies: {},
      siete: {},
    };
    this.setColorPalette();
    this.setColors();

    //background color
    this.background = {
      tag: "",
      value: {},
    };
    this.setBackground();

    //pixelation
    this.pixelation = 0;
    this.setPixelation();

    //toon steps
    this.steps = 0;
    this.setSteps();

    //populate fx features object
    this.populateFxFeatures();
  }

  //map function logic from processing <3
  map(n, start1, stop1, start2, stop2) {
    const newval =
      ((n - start1) / (stop1 - start1)) * (stop2 - start2) + start2;
    return newval;
  }

  //color palette interpolation
  interpolateFn(val) {
    let col;
    switch (this.color.name) {
      case "Ylorrd":
        col = rgb(interpolateYlOrRd(1 - val));
        break;
      case "Rdpu":
        col = rgb(interpolateRdPu(1 - val));
        break;
      case "Viridis":
        col = rgb(interpolateViridis(val));
        break;
      case "Magma":
        col = rgb(interpolateMagma(val));
        break;
      case "Inferno":
        col = rgb(interpolateInferno(val));
        break;
      case "Plasma":
        col = rgb(interpolatePlasma(val));
        break;
      case "Cividis":
        col = rgb(interpolateCividis(val));
        break;
      case "Ylgn":
        col = rgb(interpolateYlGn(1 - val));
        break;
      case "Ylgnbu":
        col = rgb(interpolateYlGnBu(1 - val));
        break;
      case "Pubugn":
        col = rgb(interpolatePuBuGn(1 - val));
        break;
      case "Ylorbr":
        col = rgb(interpolateYlOrBr(1 - val));
        break;
      case "Sinebow":
        col = rgb(interpolateSinebow(val));
        break;
      case "Rainbow":
        col = rgb(interpolateRainbow(val));
        break;
      case "Warm":
        col = rgb(interpolateWarm(val));
        break;
      default:
        col = rgb(interpolateMagma(val));
    }

    if (this.color.inverted) {
      col = this.invertColor(col);
    }

    return col;
  }

  //color inverter
  invertColor(rgb, bw) {
    let hex = color(rgb).formatHex();
    if (hex.indexOf("#") === 0) {
      hex = hex.slice(1);
    }
    // convert 3-digit hex to 6-digits.
    if (hex.length === 3) {
      hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }
    if (hex.length !== 6) {
      throw new Error("Invalid HEX color.");
    }
    var r = parseInt(hex.slice(0, 2), 16),
      g = parseInt(hex.slice(2, 4), 16),
      b = parseInt(hex.slice(4, 6), 16);
    if (bw) {
      // https://stackoverflow.com/a/3943023/112731
      return r * 0.299 + g * 0.587 + b * 0.114 > 186 ? "#000000" : "#FFFFFF";
    }
    // invert color components
    r = (255 - r).toString(16);
    g = (255 - g).toString(16);
    b = (255 - b).toString(16);
    // pad each with zeros and return
    let inverted = color("#" + padZero(r) + padZero(g) + padZero(b)).rgb();
    return inverted;

    function padZero(str, len) {
      len = len || 2;
      var zeros = new Array(len).join("0");
      return (zeros + str).slice(-len);
    }
  }

  //desaturate by some %
  desaturateColor(col, percent) {
    //let h = hsl(col);
    //h -= percent;
    return col.darker(percent);
  }

  //set color palette globally
  setColorPalette() {
    let c = $fx.rand();

    //set palette

    if (c < 0.07) {
      //1
      this.color.name = "Ylorrd";
    } else if (c < 0.11) {
      //2
      this.color.name = "Rdpu";
    } else if (c < 0.19) {
      //3
      this.color.name = "Ylgn";
    } else if (c < 0.25) {
      //4
      this.color.name = "Pubugn";
    } else if (c < 0.32) {
      //5
      this.color.name = "Ylgnbu";
    } else if (c < 0.41) {
      //6
      this.color.name = "Viridis";
    } else if (c < 0.49) {
      //7
      this.color.name = "Inferno";
    } else if (c < 0.56) {
      //8
      this.color.name = "Plasma";
    } else if (c < 0.63) {
      //9
      this.color.name = "Cividis";
    } else if (c < 0.71) {
      //11
      this.color.name = "Ylorbr";
    } else if (c < 0.76) {
      //12
      this.color.name = "Rainbow";
    } else if (c < 0.82) {
      //13
      this.color.name = "Sinebow";
    } else if (c < 0.92) {
      //13
      this.color.name = "Warm";
    }
    //...
    else {
      //12
      this.color.name = "Magma";
    }

    //inverted?
    if ($fx.rand() > 0.22) {
      this.color.inverted = true;
    }
  }

  //set individual colors for background and shader
  setColors() {
    this.color.background = this.interpolateFn(
      this.map($fx.rand(), 0, 1, 0.2, 0.8)
    );
    this.color.cero = this.interpolateFn(this.map($fx.rand(), 0, 1, 0, 0.125));
    this.color.uno = this.interpolateFn(this.map($fx.rand(), 0, 1, 0, 0.25));
    this.color.dos = this.interpolateFn(
      this.map($fx.rand(), 0, 1, 0.25, 0.375)
    );
    this.color.tres = this.interpolateFn(this.map($fx.rand(), 0, 1, 0.25, 0.5));
    this.color.quatro = this.interpolateFn(
      this.map($fx.rand(), 0, 1, 0.5, 0.625)
    );
    this.color.cinco = this.interpolateFn(
      this.map($fx.rand(), 0, 1, 0.5, 0.75)
    );
    this.color.sies = this.interpolateFn(
      this.map($fx.rand(), 0, 1, 0.75, 0.875)
    );
    this.color.siete = this.interpolateFn(this.map($fx.rand(), 0, 1, 0.75, 1));
  }

  //background
  setBackground() {
    let b = $fx.rand();
    b = 0.45;
    if (b < 0.444) {
      this.background.tag = "Rolling Paper";
      this.background.value = new THREE.Color(235 / 255, 213 / 255, 179 / 255);
    } else if (b < 0.555) {
      this.background.tag = "fxhash Dark";
      this.background.value = new THREE.Color(38 / 255, 38 / 255, 38 / 255);
    } else if (b < 0.666) {
      this.background.tag = "Newspaper";
      this.background.value = new THREE.Color(245 / 255, 242 / 255, 232 / 255);
    } else if (b < 0.888) {
      this.background.tag = "Brown Paper Bag";
      this.background.value = new THREE.Color(181 / 255, 155 / 255, 124 / 255);
    } else if (b < 0.91) {
      this.background.tag = "Palette Light";
      let col = this.interpolateFn(this.map($fx.rand(), 0, 1, 0.66, 0.99));
      this.background.value = new THREE.Color(
        col.r / 255,
        col.g / 255,
        col.b / 255
      );
    } else if (b < 0.94) {
      this.background.tag = "Palette Dark";
      let col = this.interpolateFn(this.map($fx.rand(), 0, 1, 0.01, 0.33));
      this.background.value = new THREE.Color(
        col.r / 255,
        col.g / 255,
        col.b / 255
      );
    } else if (b < 0.97) {
      this.background.tag = "Palette Invert Light";
      let col = this.interpolateFn(this.map($fx.rand(), 0, 1, 0.66, 0.99));
      col = this.invertColor(col);
      this.background.value = new THREE.Color(
        col.r / 255,
        col.g / 255,
        col.b / 255
      );
    } else {
      this.background.tag = "Palette Invert Dark";
      let col = this.interpolateFn(this.map($fx.rand(), 0, 1, 0.01, 0.33));
      col = this.invertColor(col);
      this.background.value = new THREE.Color(
        col.r / 255,
        col.g / 255,
        col.b / 255
      );
    }
  }

  //set pixelation
  setPixelation() {
    this.pixelation = Math.round(this.map($fx.rand(), 0, 1, 16, 64));
  }

  //set toon steps
  setSteps() {
    this.steps = Math.round(this.map($fx.rand(), 0, 1, 2, 8));
  }

  //populate fx features object
  populateFxFeatures() {
    $fx.features({
      Background: this.background.tag,
      Palette: this.color.inverted
        ? this.color.name + " Invert"
        : this.color.name,
      Cells: this.pixelation,
      "Toon Steps": this.steps,
    });
  }
}

export { Features };
