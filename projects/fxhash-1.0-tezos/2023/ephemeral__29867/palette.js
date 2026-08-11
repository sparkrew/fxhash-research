import * as THREE from "three";

export function generativePalette() {
  let colors = [];
  let n = Math.floor($fx.rand() * 3) + 3;
  let div = 3;

  let h, s, l;
  s = $fx.rand() * 0.25 + 0.25;
  console.log("s : " + s);
  let initialH;
  let maxL = 0.0;
  for (let i = 0; i < n; i++) {
    let color = new THREE.Color();
    h = $fx.rand();
    if (i == 0) initialH = h;
    else {
      if (Math.abs(h - initialH) > 0.25) {
        h = initialH + (h - initialH) * 0.5;
      }
    }
    l = $fx.rand() * 0.2 + 0.75;
    color.setHSL(h, s, l);
    colors.push(color);
    if (l > maxL) maxL = l;
  }

  let baseH = $fx.rand();
  let baseS = 0.1;
  let baseL = $fx.rand() * (1.0 - maxL - $fx.rand() * 0.1) + maxL;
  // let baseL = maxL + 0.2;
  if (maxL > 0.94) baseL = maxL - 0.1;

  if ($fx.rand() > 0.5)
    colors.unshift(new THREE.Color().setHSL(baseH, baseS, baseL));
  else colors.push(new THREE.Color().setHSL(baseH, baseS, baseL));

  // lを基準にソート
  colors.sort(function (a, b) {
    // 彩度が大きい順にソート
    if (a.s > b.s) return -1;
    if (a.s < b.s) return 1;

    // 彩度が同じ場合、輝度が小さい順にソート
    if (a.l < b.l) return -1;
    if (a.l > b.l) return 1;

    return 0;
  });

  console.log(colors);

  return colors;
}
