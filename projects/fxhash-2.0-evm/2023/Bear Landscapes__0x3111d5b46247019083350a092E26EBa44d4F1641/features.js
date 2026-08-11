import { interpolateCool, interpolateWarm } from "d3-scale-chromatic";
import { rgb, hsl, color } from "d3-color";

class Features {
  constructor() {
    //color palette
    this.color = {
      name: "",
    };
    this.setColorPalette();
    this.setShaderColors();

    //steps and seed
    this.layers = {
      steps: 59,
      seed: 425,
      tag: "Medium",
    };
    this.setLayers();

    //speeds
    this.speed1 = {
      value: {
        x: 0.0,
        y: 0.0,
      },
    };
    this.speed2 = {
      value: {
        x: 0.0,
        y: 0.0,
      },
    };
    this.speedTagX = "Right";
    this.speedTagY = "Down";
    this.setSpeeds();

    //scales
    this.scale1 = 3.0;
    this.scale2 = 5.0;
    this.scaleTag = "Fine";
    this.setScales();

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
    if (val > 1.0) {
      val = 1.0;
    }
    if (val < 0.0) {
      val = 0.0;
    }
    let col;
    switch (this.color.name) {
      case "Cool":
        col = rgb(interpolateCool(1 - val));
        break;
      case "Warm":
        col = rgb(interpolateWarm(1 - val));
        break;
      default:
        col = rgb(interpolateWarm(1 - val));
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

  //return vec4 value of rgb color
  getXyzw(col) {
    return {
      x: col.r / 255,
      y: col.g / 255,
      z: col.b / 255,
      w: 1.0,
    };
  }

  //set color palette globally
  setColorPalette() {
    const c = $fx.rand();
    if (c < 0.666) {
      this.color.name = "Warm";
    } else {
      this.color.name = "Cool";
    }
    this.color.inverted = $fx.rand() < 0.888 ? true : false;
  }

  setShaderColors() {
    const c1 = this.interpolateFn(0.0);
    const c2 = this.interpolateFn(0.333);
    const c3 = this.interpolateFn(0.666);
    const c4 = this.interpolateFn(1.0);
    this.color1 = this.getXyzw(c1);
    this.color2 = this.getXyzw(c2);
    this.color3 = this.getXyzw(c3);
    this.color4 = this.getXyzw(c4);
  }

  setLayers() {
    this.layers.seed = Math.floor($fx.rand() * 10000);
    this.layers.steps = Math.floor(this.map($fx.rand(), 0, 1, 88, 155));
    if (this.layers.steps < 100) {
      this.layers.tag = "Coarse";
    } else if (this.layers.steps < 180) {
      this.layers.tag = "Medium";
    } else {
      this.layers.tag = "Fine";
    }
  }

  setSpeeds() {
    this.speed1.value = {
      x: this.map($fx.rand(), 0, 1, -0.01, 0.01),
      y: this.map($fx.rand(), 0, 1, -0.01, 0.01),
    };
    this.speed2.value = {
      x: this.map($fx.rand(), 0, 1, -0.01, 0.01),
      y: this.map($fx.rand(), 0, 1, -0.01, 0.01),
    };
    const x = this.speed1.value.x + this.speed2.value.x;
    const y = this.speed1.value.y + this.speed2.value.y;
    if (x < -0.01) {
      this.speedTagX = "Right";
    } else if (x > 0.01) {
      this.speedTagX = "Left";
    } else {
      this.speedTagX = "Level";
    }
    if (y < -0.01) {
      this.speedTagY = "Up";
    } else if (y > 0.01) {
      this.speedTagY = "Down";
    } else {
      this.speedTagY = "Steady";
    }
  }

  setScales() {
    this.scale1 = this.map($fx.rand(), 0, 1, 3.0, 6.0);
    this.scale2 = this.map($fx.rand(), 0, 1, 3.0, 6.0);
    const s = this.scale1 + this.scale2;
    if (s < 8.0) {
      this.scaleTag = "Sparse";
    } else if (s < 10.0) {
      this.scaleTag = "Medium";
    } else {
      this.scaleTag = "Dense";
    }
  }

  //populate fx features object
  populateFxFeatures() {
    $fx.features({
      Palette: this.color.inverted
        ? this.color.name + " Invert"
        : this.color.name,
      Strata: this.layers.tag,
      Scale: this.scaleTag,
      X: this.speedTagX,
      Y: this.speedTagY,
    });
  }
}

export { Features };
