const getLayout = () => {
  const r = $fx.rand();
  if (r < 0.2) return "landscape";
  if (r < 0.4) return "portrait";
  return "square";
};

const getDensity = () => {
  const r = $fx.rand();
  if (r < 0.15) return { label: "light", iterations: 1000 };
  if (r < 0.5) return { label: "heavy", iterations: 100000 };
  return { label: "normal", iterations: 10000 };
};

const getAlpha = (wispy = false) => (wispy ? 0.4 : 0.8 + $fx.rand() * 0.2);

const getCanvasWidth = (layout) =>
  ["portrait", "square"].includes(layout) ? "auto" : "100vh";

const getCanvasHeight = (layout) => (layout === "landscape" ? "auto" : "100vh");

const chooseColor = (palette) =>
  palette[Math.floor($fx.rand() * palette.length)];

const chooseColorExcept = (color, palette) =>
  palette.filter((c) => c !== color)[
    Math.floor($fx.rand() * (palette.length - 1))
  ];

const takeScreenshot = (canvas) => {
  const a = document.createElement("a");
  a.href = canvas.toDataURL();
  a.download = "fx_impressions.png";
  a.click();
  a.remove();
};

export {
  getLayout,
  getDensity,
  getAlpha,
  getCanvasWidth,
  getCanvasHeight,
  chooseColor,
  chooseColorExcept,
  takeScreenshot,
};
