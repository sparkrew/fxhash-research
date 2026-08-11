import { chooseColor, chooseColorExcept, getAlpha } from "./utils";

export const createWalker = (ctx, x, y, { palette, bg, wispy, density }) => {
  const walker = {
    x,
    y,
    color: chooseColorExcept(bg, palette),
    display: () => {
      ctx.fillStyle = walker.color;
      ctx.fillRect(walker.x, walker.y, 1, getAlpha(wispy));
    },
    step: () => {
      const x = Math.floor($fx.rand() * 3) - 1;
      const y = Math.floor($fx.rand() * 3) - 1;
      walker.x += x;
      walker.y += y;
    },
    reset: () => {
      if (density.label === "heavy") walker.color = chooseColor(palette);
      else if (density.label === "light")
        walker.color = chooseColorExcept(walker.color, palette);
      else walker.color = $fx.rand() < 0.1 ? bg : chooseColorExcept(bg, palette);
      walker.x = x;
      walker.y = y;
    },
  };
  return walker;
};
