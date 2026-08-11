import blocks from "./configs/blocks.js";
import confetti from "./configs/confetti.js";
import darkMatter from "./configs/dark-matter.js";
import elements from "./configs/elements.js";
import infrarred from "./configs/infrarred.js";
import starry from "./configs/starry.js";
import highVoltage from "./configs/high-voltage.js";
import colorful from "./configs/colorful.js";
import orange from "./configs/orange.js";
import rB from "./configs/r-b.js";
import lkmx from "./configs/lkmx.js";
import green from "./configs/green.js";
import renaissance from "./configs/lo-fi.js";
import blue from "./configs/blue.js";
import africana from "./configs/africana.js";
import saturated from "./configs/saturated.js";
import praslin from "./configs/praslin.js";
import glitch from "./configs/glitch.js";
import nebula from "./configs/nebula.js";
import pillars from "./configs/pillars.js";
import mustard from "./configs/mustard.js";
import life from "./configs/life.js";
import chonps from "./configs/chonps.js";
import dinner from "./configs/dinner.js";

export default {
    options: [ 
        ...elements,        // Rot-Blau-Gelb        3 
        ...darkMatter,      // Dark Matter          0.7
        ...infrarred,       // Bacchus              0.7
        // ...mustard,         // Untitled             0.4
        ...confetti,        // Tutti                2
        ...starry,          // Starry Night         4
        ...blocks,          // Chalk                1
        ...highVoltage,     // High Voltage         0.3
        ...colorful,        // Party                0.4
        // ...orange,          // Orange               0.4
        ...chonps,
        ...rB,              // Circulatory System   1
        // ...lkmx,            // LKMX                 0.7
        ...green,           // Life                 0.5
        ...renaissance,     // Infrarred            2.5
        ...blue,            // Indigo               1.2
        ...africana,        // Africana             2.5
        ...saturated,       // Pink                 0.3
        ...praslin,         // Praslin Dawn         1
        ...glitch,          // Glitch               0.1
        ...nebula,          // Nébula               4
        ...pillars,         // Ice And Fire         4
        ...dinner,          // Two Strangers...     3
        // ...life,
    ],
}