const PARAMS = generateSeededParams()

// Provide feature metadata derived entirely from the fxhash seed
$fx.features(deriveFeatures(PARAMS))

// helper exported globally so the sketch can read cached values
window.getFxParams = () => PARAMS

function generateSeededParams() {
  const ditherModes = ["floyd-steinberg", "bayer-4"]
  const dithering_mode = ditherModes[Math.floor($fx.rand() * ditherModes.length)]
  const grain_intensity = clamp($fx.rand() ** 0.6, 0.08, 0.98)
  const contrast_breakdown = clamp(Math.pow($fx.rand(), 0.8), 0.12, 0.95)
  const streak_density = clamp(Math.abs($fx.rand() - 0.3) * 1.25, 0.05, 0.9)
  const misalignment = clamp($fx.rand() * 12, 0.6, 10)
  const cube_depth = clamp($fx.rand(), 0.15, 0.95)
  const panel_density = clamp($fx.rand() * 1.15, 0.15, 1)
  const ink_variation = clamp(Math.pow($fx.rand(), 0.7), 0.05, 1)
  const tone_shift = clamp($fx.rand() * 0.8 - 0.4, -0.35, 0.35)
  const scanline_mode = $fx.rand() > 0.5 ? "tight" : "loose"
  return {
    dithering_mode,
    grain_intensity,
    contrast_breakdown,
    streak_density,
    misalignment,
    cube_depth,
    panel_density,
    ink_variation,
    tone_shift,
    scanline_mode,
  }
}

function deriveFeatures(params) {
  return {
    Dither: params.dithering_mode,
    Grain: params.grain_intensity < 0.25 ? "Clean" : params.grain_intensity > 0.6 ? "Heavy" : "Medium",
    Streaks: params.streak_density < 0.25 ? "Sparse" : params.streak_density > 0.6 ? "Dense" : "Moderate",
    Misalignment: params.misalignment < 2 ? "Tight" : params.misalignment > 6 ? "Wild" : "Balanced",
    CubeDepth: params.cube_depth < 0.35 ? "Shallow" : params.cube_depth > 0.7 ? "Tall" : "Standard",
    PanelDensity: params.panel_density < 0.35 ? "Minimal" : params.panel_density > 0.7 ? "Layered" : "Balanced",
  }
}

function clamp(v, min, max) {
  return Math.max(min, Math.min(max, v))
}

