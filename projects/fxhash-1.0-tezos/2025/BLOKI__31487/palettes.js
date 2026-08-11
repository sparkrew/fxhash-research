// Color palettes inspired by famous artists
window.PALETTES = {
  mondrian: {
    background: [252, 252, 252],
    colors: [
      [252, 252, 252], // Background (white)
      [20, 20, 20],    // Lines (black)
      [230, 30, 35],   // Primary red
      [0, 75, 165],    // Primary blue
      [250, 210, 0],   // Primary yellow
    ]
  },

  picasso_blue: {
    background: [245, 248, 250],
    colors: [
      [245, 248, 250], // Background (off-white)
      [20, 20, 20],    // Lines
      [25, 45, 90],    // Deep blue
      [65, 95, 140],   // Medium blue
      [145, 170, 195], // Light blue
      [90, 105, 135],  // Muted blue
      [195, 205, 215]  // Pale blue
    ]
  },

  miro: {
    background: [250, 248, 240],
    colors: [
      [250, 248, 240], // Background (cream)
      [20, 20, 20],    // Lines
      [230, 40, 35],   // Vibrant red
      [0, 115, 185],   // Bright blue
      [250, 200, 0],   // Sunny yellow
      [0, 140, 55],    // Green
      [20, 20, 95]     // Dark blue
    ]
  },

  matisse: {
    background: [246, 244, 240],
    colors: [
      [246, 244, 240], // Background (off-white)
      [30, 28, 26],    // Lines
      [226, 71, 69],   // Red
      [12, 67, 134],   // Blue
      [241, 183, 42],  // Yellow
      [26, 115, 54],   // Green
      [212, 102, 65]   // Orange
    ]
  },

  kandinsky: {
    background: [248, 246, 242],
    colors: [
      [248, 246, 242], // Background
      [20, 20, 20],    // Lines
      [195, 35, 35],   // Red
      [15, 75, 165],   // Blue
      [245, 195, 40],  // Yellow
      [30, 120, 45],   // Green
      [175, 65, 165]   // Purple
    ]
  },

  vanGogh: {
    background: [250, 248, 235],
    colors: [
      [250, 248, 235], // Background (cream)
      [20, 20, 20],    // Lines
      [35, 45, 135],   // Deep blue
      [245, 200, 35],  // Golden yellow
      [140, 165, 50],  // Olive green
      [230, 175, 45],  // Ochre
      [85, 115, 165]   // Sky blue
    ]
  },

  rothko: {
    background: [245, 242, 238],
    colors: [
      [245, 242, 238], // Background
      [20, 20, 20],    // Lines
      [165, 45, 35],   // Deep red
      [185, 135, 45],  // Burnt orange
      [140, 55, 45],   // Maroon
      [90, 35, 30],    // Dark brown
      [195, 145, 85]   // Tan
    ]
  },

  dali: {
    background: [250, 248, 245],
    colors: [
      [250, 248, 245], // Background (warm white)
      [20, 20, 20],    // Lines
      [195, 155, 105], // Sand
      [85, 115, 155],  // Sky blue
      [165, 95, 45],   // Rust
      [215, 175, 115], // Pale gold
      [95, 75, 65]     // Dark brown
    ]
  },

  soviet_brutalism: {
    background: [220, 220, 215],
    colors: [
      [220, 220, 215], // Background (concrete gray)
      [45, 45, 45],    // Lines (dark gray)
      [180, 175, 170], // Weathered concrete
      [95, 85, 80],    // Aged metal
      [140, 65, 45],   // Rust
      [70, 80, 90],    // Industrial blue-gray
      [165, 155, 145]  // Dust-covered surface
    ]
  },

  abandoned_factory: {
    background: [200, 195, 190],
    colors: [
      [200, 195, 190], // Background (dusty gray)
      [35, 35, 35],    // Lines (darker gray)
      [155, 75, 65],   // Oxidized metal
      [85, 95, 90],    // Moldy walls
      [130, 125, 115], // Broken plaster
      [60, 70, 75],    // Shadow areas
      [175, 165, 155]  // Peeling paint
    ]
  },

  metro_2033: {
    background: [25, 28, 30],
    colors: [
      [25, 28, 30],    // Background (deep darkness)
      [15, 15, 15],    // Lines (pure black)
      [255, 65, 35],   // Emergency lights
      [45, 55, 65],    // Tunnel walls
      [75, 85, 95],    // Metal surfaces
      [145, 35, 25],   // Warning signs
      [95, 105, 115]   // Wet concrete
    ]
  },

  chernobyl: {
    background: [210, 205, 195],
    colors: [
      [210, 205, 195], // Background (aged white)
      [30, 30, 30],    // Lines (dark)
      [255, 215, 35],  // Radiation warning yellow
      [65, 85, 55],    // Moss green
      [145, 140, 130], // Old concrete
      [90, 85, 75],    // Contaminated metal
      [165, 155, 140]  // Deteriorated surfaces
    ]
  },

  night_industrial: {
    background: [15, 17, 20],
    colors: [
      [15, 17, 20],    // Background (near black)
      [10, 10, 10],    // Lines (pure black)
      [45, 52, 58],    // Industrial metal
      [255, 88, 0],    // Warning orange
      [90, 25, 15],    // Rust in darkness
      [30, 35, 40],    // Shadow metal
      [70, 75, 85]     // Moonlit steel
    ]
  },

  nuclear_winter: {
    background: [40, 45, 50],
    colors: [
      [40, 45, 50],    // Background (dark gray)
      [20, 20, 20],    // Lines
      [180, 190, 195], // Snow-covered ruins
      [55, 80, 85],    // Toxic puddles
      [95, 100, 105],  // Dead trees
      [35, 55, 60],    // Contaminated ice
      [70, 80, 90]     // Heavy clouds
    ]
  },

  rust_belt: {
    background: [35, 32, 30],
    colors: [
      [35, 32, 30],    // Background (dark brown)
      [15, 15, 15],    // Lines
      [120, 45, 25],   // Deep rust
      [75, 65, 60],    // Aged steel
      [155, 65, 35],   // Fresh rust
      [45, 40, 35],    // Oil stains
      [95, 85, 80]     // Weathered metal
    ]
  },

  acid_rain: {
    background: [28, 35, 32],
    colors: [
      [28, 35, 32],    // Background (toxic dark)
      [15, 15, 15],    // Lines
      [65, 155, 35],   // Toxic green
      [45, 60, 55],    // Corroded metal
      [95, 185, 45],   // Chemical spill
      [35, 45, 40],    // Contaminated walls
      [75, 95, 85]     // Acid-etched surface
    ]
  },

  dead_city: {
    background: [45, 42, 40],
    colors: [
      [45, 42, 40],    // Background (urban darkness)
      [20, 20, 20],    // Lines
      [85, 75, 70],    // Concrete ruins
      [55, 50, 45],    // Burnt remains
      [95, 85, 80],    // Ash-covered
      [35, 32, 30],    // Scorched earth
      [65, 60, 55]     // Debris
    ]
  },

  night_windows: {
    background: [12, 15, 18],
    colors: [
      [12, 15, 18],    // Background (night sky)
      [10, 10, 10],    // Lines (black)
      [255, 225, 165], // Warm window light
      [25, 28, 32],    // Building facade
      [185, 170, 130], // Dimmed windows
      [35, 38, 42],    // Concrete walls
      [95, 85, 65]     // Distant lights
    ]
  },

  soviet_housing: {
    background: [18, 20, 25],
    colors: [
      [18, 20, 25],    // Background (evening)
      [12, 12, 12],    // Lines
      [245, 215, 165], // Living room lights
      [28, 32, 38],    // Panel walls
      [205, 175, 125], // Kitchen windows
      [38, 42, 48],    // Building shadow
      [165, 145, 105]  // TV-lit windows
    ]
  },

  power_plant: {
    background: [15, 18, 22],
    colors: [
      [15, 18, 22],    // Background (industrial night)
      [10, 10, 10],    // Lines
      [255, 95, 35],   // Warning lights
      [25, 30, 35],    // Cooling towers
      [225, 185, 145], // Control room
      [35, 40, 45],    // Steel structures
      [185, 55, 25]    // Emergency lights
    ]
  },

  research_facility: {
    background: [20, 22, 25],
    colors: [
      [20, 22, 25],    // Background (secure facility)
      [12, 12, 12],    // Lines
      [145, 225, 215], // Laboratory lights
      [30, 35, 40],    // Reinforced walls
      [95, 185, 175],  // Clean rooms
      [40, 45, 50],    // Blast doors
      [65, 155, 145]   // Equipment glow
    ]
  },

  blast_door: {
    background: [45, 48, 52],
    colors: [
      [45, 48, 52],    // Background (bunker walls)
      [25, 25, 25],    // Lines
      [255, 85, 25],   // Warning stripes
      [75, 78, 82],    // Heavy steel
      [185, 65, 15],   // Rust spots
      [55, 58, 62],    // Door frame
      [125, 128, 132]  // Reinforced panels
    ]
  },

  emergency_exit: {
    background: [32, 35, 38],
    colors: [
      [32, 35, 38],    // Background (corridor)
      [15, 15, 15],    // Lines
      [215, 45, 35],   // Exit sign
      [62, 65, 68],    // Door metal
      [35, 165, 55],   // Emergency markings
      [42, 45, 48],    // Frame
      [85, 88, 92]     // Push bar
    ]
  },

  vault_door: {
    background: [38, 42, 45],
    colors: [
      [38, 42, 45],    // Background (vault)
      [18, 18, 18],    // Lines
      [195, 175, 145], // Brass elements
      [58, 62, 65],    // Steel door
      [145, 125, 95],  // Mechanism
      [48, 52, 55],    // Frame
      [95, 85, 65]     // Locking wheels
    ]
  },

  maintenance_access: {
    background: [35, 38, 42],
    colors: [
      [35, 38, 42],    // Background (service area)
      [15, 15, 15],    // Lines
      [255, 215, 25],  // Warning label
      [55, 58, 62],    // Metal surface
      [185, 165, 15],  // Hazard stripes
      [45, 48, 52],    // Hinges
      [75, 78, 82]     // Handle
    ]
  },

  prison_door: {
    background: [42, 45, 48],
    colors: [
      [42, 45, 48],    // Background (corridor)
      [20, 20, 20],    // Lines
      [165, 55, 45],   // Rust stains
      [62, 65, 68],    // Cell door
      [125, 35, 25],   // Deep rust
      [52, 55, 58],    // Bars
      [82, 85, 88]     // Lock mechanism
    ]
  }
}; 