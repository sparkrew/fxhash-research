const PARAMS = generateSeededParams()

// Provide feature metadata derived entirely from the fxhash seed
$fx.features(deriveFeatures(PARAMS))

// helper exported globally so the sketch can read cached values
window.getFxParams = () => PARAMS

function generateSeededParams() {
  const ditherModes = ["floyd-steinberg", "bayer-4"]
  const dithering_mode = ditherModes[Math.floor($fx.rand() * ditherModes.length)]
  const grain_intensity = clamp($fx.rand() ** 0.6, 0.1, 0.98)
  const contrast_breakdown = clamp(Math.pow($fx.rand(), 0.8), 0.15, 0.96)
  const pixel_scale = clamp($fx.rand(), 0.1, 0.95)
  const cluster_bias = clamp(Math.pow($fx.rand(), 0.7), 0.05, 1)
  const void_ratio = clamp(Math.pow($fx.rand(), 0.5), 0.05, 0.9)
  const pulse_wave = clamp($fx.rand(), 0.05, 0.95)
  const glitch_rate = clamp(Math.pow($fx.rand(), 0.45), 0.05, 1)
  return {
    dithering_mode,
    grain_intensity,
    contrast_breakdown,
    pixel_scale,
    cluster_bias,
    void_ratio,
    pulse_wave,
    glitch_rate,
  }
}

function deriveFeatures(params) {
  return {
    Dither: params.dithering_mode,
    Grain: params.grain_intensity < 0.25 ? "Clean" : params.grain_intensity > 0.65 ? "Heavy" : "Medium",
    PixelScale: params.pixel_scale < 0.35 ? "Micro" : params.pixel_scale > 0.7 ? "Macro" : "Balanced",
    Clusters: params.cluster_bias < 0.3 ? "Sparse" : params.cluster_bias > 0.7 ? "Dense" : "Layered",
    Glitch: params.glitch_rate < 0.3 ? "Calm" : params.glitch_rate > 0.7 ? "Erratic" : "Subtle",
  }
}

function clamp(v, min, max) {
  return Math.max(min, Math.min(max, v))
}

