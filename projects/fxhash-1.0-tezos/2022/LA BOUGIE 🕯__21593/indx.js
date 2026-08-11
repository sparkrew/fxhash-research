const _0x12f43b = _0x4cb1;
(function (_0x1f397b, _0x586f0f) {
  const _0x369737 = _0x4cb1,
    _0x3d8d1c = _0x1f397b();
  while (!![]) {
    try {
      const _0x1d080f = -parseInt(_0x369737(0x1b5)) / 0x1 + (-parseInt(_0x369737(0x34b)) / 0x2) * (parseInt(_0x369737(0x221)) / 0x3) + (-parseInt(_0x369737(0x1dd)) / 0x4) * (parseInt(_0x369737(0x212)) / 0x5) + (parseInt(_0x369737(0x287)) / 0x6) * (-parseInt(_0x369737(0x345)) / 0x7) + (parseInt(_0x369737(0x31f)) / 0x8) * (parseInt(_0x369737(0x263)) / 0x9) + -parseInt(_0x369737(0x2a5)) / 0xa + (-parseInt(_0x369737(0x249)) / 0xb) * (-parseInt(_0x369737(0x2e3)) / 0xc);
      if (_0x1d080f === _0x586f0f) break;
      else _0x3d8d1c["push"](_0x3d8d1c["shift"]());
    } catch (_0xb6e8e7) {
      _0x3d8d1c["push"](_0x3d8d1c["shift"]());
    }
  }
})(_0x223e, 0x1dd97);
let _obj,
  _basePos,
  _xy1,
  _xy2,
  _xy3,
  _xy4,
  pallet_ID,
  fx_horizontalpProbability,
  fx_splitProbability,
  background_color = "#cccccc",
  x_canv,
  pattern,
  shape,
  candel_resize_canvas,
  start_win_size,
  save_command = ![],
  seed,
  flame_model,
  noise_x1,
  noise_x2,
  noise_y1,
  noise_y2,
  noise_r1,
  noise_r2,
  noise_color_,
  noise_alpha = 0x4b,
  noise_number,
  Arr_color_noise_set_on_obj = [],
  Arr2_color_noise_set_on_obj = [],
  Arr_alpha_noise_set_on_obj = [],
  Arr_x_noise_set_on_obj = [],
  Arr2_x_noise_set_on_obj = [],
  Arr_y_noise_set_on_obj = [],
  Arr2_y_noise_set_on_obj = [],
  Arr_r_noise_set_on_obj = [],
  Arr2_r_noise_set_on_obj = [],
  Arr_rnd1_noise_set_on_obj = [],
  Arr_rnd2_noise_set_on_obj = [],
  Arr_x1_noise_set_on_obj = [],
  Arr_y1_noise_set_on_obj = [],
  Arr_x2_x1_noise_set_on_obj = [],
  Arr_y2_y1_noise_set_on_obj = [],
  Arr_color2_noise_set_on_obj = [],
  arr_monderian_colors = [_0x12f43b(0x1da), "#ffff00", _0x12f43b(0x278), "#ffffff", _0x12f43b(0x2f3)],
  Arr_monderian_colors_control = [],
  monderian_stroke_w = 0x14,
  monderian_stroke_color = _0x12f43b(0x229),
  Arr_color_monderian = [],
  Arr_x_monderian = [],
  Arr_y_monderian = [],
  Arr_w_monderian = [],
  Arr_h_monderian = [],
  floor_rec,
  x_p1,
  hight_p1,
  U_rect_round,
  D_rect_round,
  x_p2,
  hight_p2,
  UR_rect_round,
  x2_p3,
  y2_p3,
  hight_p3,
  Arr_candel_thread_X = [],
  Arr_candel_thread_Y = [],
  Arr_candel_thread_R = [],
  Arr_candel_thread_color = [_0x12f43b(0x2a1), "#ffffff", _0x12f43b(0x2a1), "#ffffff", _0x12f43b(0x2a1), _0x12f43b(0x2a1), _0x12f43b(0x2a1), _0x12f43b(0x2a1), _0x12f43b(0x2a1), _0x12f43b(0x2a1), _0x12f43b(0x2a1), _0x12f43b(0x2a1), _0x12f43b(0x2a1), _0x12f43b(0x2a1), "#ffffff", _0x12f43b(0x2a1), "#ffffff", "#ffffff", "#ffffff", _0x12f43b(0x2a1), "#ffffff", _0x12f43b(0x2a1), "#ffffff", _0x12f43b(0x2a1), _0x12f43b(0x2a1), _0x12f43b(0x2a1), "#ffffff", _0x12f43b(0x2a1), _0x12f43b(0x283), _0x12f43b(0x342), _0x12f43b(0x2f9), _0x12f43b(0x2df), _0x12f43b(0x18e), _0x12f43b(0x1f3), _0x12f43b(0x315)],
  Arr_fire_color = [],
  offset2,
  offset3,
  offset4,
  offset5,
  offset6,
  offset7,
  offcet,
  Arr_fire_data = [],
  pallete = [
    [_0x12f43b(0x1db), _0x12f43b(0x259), _0x12f43b(0x2b2), _0x12f43b(0x2d2), "#FFC43D", _0x12f43b(0x316), _0x12f43b(0x2b2), _0x12f43b(0x193), _0x12f43b(0x253), _0x12f43b(0x1a2), "#E91E63", _0x12f43b(0x18f), _0x12f43b(0x290), _0x12f43b(0x231), _0x12f43b(0x217)],
    [_0x12f43b(0x1fc), _0x12f43b(0x1a4), "#F6C28B", _0x12f43b(0x1ac), "#ffffff", _0x12f43b(0x314), _0x12f43b(0x1a4), "#ee726b", _0x12f43b(0x363), _0x12f43b(0x323), "#df5f50", _0x12f43b(0x210), "#07B8D2", "#009688", _0x12f43b(0x1b1), _0x12f43b(0x35f), _0x12f43b(0x290), _0x12f43b(0x274), "#8F123C", _0x12f43b(0x280), "#102A3F", _0x12f43b(0x2cf), _0x12f43b(0x274), _0x12f43b(0x1f7), _0x12f43b(0x1b9), _0x12f43b(0x2db)],
    ["#000000", _0x12f43b(0x30f), _0x12f43b(0x2e7), _0x12f43b(0x2e2), _0x12f43b(0x2e1), _0x12f43b(0x32f), "#F0F8FF", _0x12f43b(0x288), "#F5F5F5", "#FFF5EE", _0x12f43b(0x347), _0x12f43b(0x213), "#E4EFFD", _0x12f43b(0x2f3), _0x12f43b(0x206), _0x12f43b(0x27c), _0x12f43b(0x2d3), "#FFFFF0", _0x12f43b(0x1c8), "#FAF0E6", _0x12f43b(0x2f8), _0x12f43b(0x1f9), _0x12f43b(0x2c6), _0x12f43b(0x311), _0x12f43b(0x2ba), _0x12f43b(0x1ad)],
    [_0x12f43b(0x2bc), _0x12f43b(0x1dc), _0x12f43b(0x34c), _0x12f43b(0x1ee), _0x12f43b(0x2e9), _0x12f43b(0x218), "#4f7a44", _0x12f43b(0x1b4), "#3e6d49", _0x12f43b(0x2a1), _0x12f43b(0x2f0), _0x12f43b(0x244), _0x12f43b(0x358), "#215551", _0x12f43b(0x21c), "#4b5320", "#51c878", _0x12f43b(0x209), _0x12f43b(0x1a0), "#434c37", _0x12f43b(0x24a)],
    ["#0b6623", _0x12f43b(0x214), _0x12f43b(0x1bb), _0x12f43b(0x257), _0x12f43b(0x2c2), "#377448", _0x12f43b(0x2e8), _0x12f43b(0x21a), "#48713B", _0x12f43b(0x1cc), "#B1BDA8", _0x12f43b(0x22e), _0x12f43b(0x22b), _0x12f43b(0x2d8), _0x12f43b(0x24c), _0x12f43b(0x219), _0x12f43b(0x2a7), _0x12f43b(0x33e), _0x12f43b(0x28c), _0x12f43b(0x1cb), "#4CBB17", _0x12f43b(0x2a3), _0x12f43b(0x34f), "#023C28", _0x12f43b(0x2cd), _0x12f43b(0x2f2)],
    [_0x12f43b(0x2e0), _0x12f43b(0x333), "#FF0100", _0x12f43b(0x2f1), _0x12f43b(0x33f), _0x12f43b(0x2e5), "#F1F8E8", _0x12f43b(0x2e6), _0x12f43b(0x226), "#FF6611", _0x12f43b(0x20d), _0x12f43b(0x1a7), _0x12f43b(0x2c3), _0x12f43b(0x2f4), "#FFDEDE", _0x12f43b(0x337), _0x12f43b(0x1bc), "#008EFF", _0x12f43b(0x354), _0x12f43b(0x18f), _0x12f43b(0x1bd), _0x12f43b(0x1d7), "#02D0FF", _0x12f43b(0x322), _0x12f43b(0x30b), "#002573", "#b7032a", "#9D069E", _0x12f43b(0x1fe), "#BBDD38", _0x12f43b(0x2c7), _0x12f43b(0x361), _0x12f43b(0x18b), "#f39d6a", "#fb7324", "#993000", "#C9BC19", _0x12f43b(0x32d), "#51055D", _0x12f43b(0x236), _0x12f43b(0x324), _0x12f43b(0x1b7), _0x12f43b(0x360), _0x12f43b(0x27f), _0x12f43b(0x201), "#007f00", "#000000", "#FF0074", _0x12f43b(0x1c1), _0x12f43b(0x2da), _0x12f43b(0x320), _0x12f43b(0x1e6), _0x12f43b(0x253)],
    [_0x12f43b(0x1db), _0x12f43b(0x1ca), "#fd7045", _0x12f43b(0x188), _0x12f43b(0x25d), _0x12f43b(0x27b), _0x12f43b(0x195), _0x12f43b(0x269), _0x12f43b(0x317), _0x12f43b(0x199), _0x12f43b(0x228), _0x12f43b(0x187), _0x12f43b(0x215), _0x12f43b(0x35d), _0x12f43b(0x2f7), _0x12f43b(0x23f), "#FFE500", "#FF0000"],
    ["#cf200b", _0x12f43b(0x21d), _0x12f43b(0x1d0), "#7780a1", _0x12f43b(0x22a), _0x12f43b(0x1b8), _0x12f43b(0x252), "#a18c57", _0x12f43b(0x204), "#324798", _0x12f43b(0x1a1), _0x12f43b(0x32c), "#efc302", _0x12f43b(0x25a), _0x12f43b(0x346), _0x12f43b(0x1c4), "#903c22", "#652a24", _0x12f43b(0x250), "#6e92cc", _0x12f43b(0x341), _0x12f43b(0x198), "#de6c16", _0x12f43b(0x21e), _0x12f43b(0x2aa), _0x12f43b(0x2e4), _0x12f43b(0x272), _0x12f43b(0x191), "#ef5549", "#94a94c", _0x12f43b(0x305), "#fde180", _0x12f43b(0x1f4), _0x12f43b(0x1aa), _0x12f43b(0x27e), _0x12f43b(0x357), _0x12f43b(0x1c3)],
    ["#000000", _0x12f43b(0x30f), _0x12f43b(0x2d5), _0x12f43b(0x1ec), _0x12f43b(0x357), _0x12f43b(0x25e), _0x12f43b(0x1c3), _0x12f43b(0x1ff), _0x12f43b(0x29d), _0x12f43b(0x293), "#e65f7d", _0x12f43b(0x2ae), _0x12f43b(0x200), "#000000", _0x12f43b(0x206), _0x12f43b(0x27c), _0x12f43b(0x2d3), _0x12f43b(0x230), "#df9ec0", _0x12f43b(0x2b4), _0x12f43b(0x30a), _0x12f43b(0x1be), "#d9bed1", "#683c8b", _0x12f43b(0x2cb), _0x12f43b(0x19e), "#f49672", _0x12f43b(0x326), _0x12f43b(0x27a), _0x12f43b(0x328), _0x12f43b(0x343), "#b6d9d2", _0x12f43b(0x282), "#6c3427", _0x12f43b(0x197), _0x12f43b(0x1c6), _0x12f43b(0x19e)],
    [_0x12f43b(0x242), "#795548", "#F6C28B", _0x12f43b(0x2eb), "#82DDF0", _0x12f43b(0x318), _0x12f43b(0x18a), _0x12f43b(0x248), "#ffc5c7", _0x12f43b(0x323), _0x12f43b(0x260), _0x12f43b(0x210), _0x12f43b(0x2fc), _0x12f43b(0x23e), _0x12f43b(0x2b6), _0x12f43b(0x35f), _0x12f43b(0x2de), _0x12f43b(0x1f7), _0x12f43b(0x241), _0x12f43b(0x1fd), _0x12f43b(0x19b), _0x12f43b(0x25c), "#140f2d", _0x12f43b(0x1f7), _0x12f43b(0x1f2), _0x12f43b(0x1b9)],
    [_0x12f43b(0x242), _0x12f43b(0x23a), _0x12f43b(0x235), _0x12f43b(0x2eb), _0x12f43b(0x22c), "#4464a1", _0x12f43b(0x332), "#ee726b", _0x12f43b(0x2ac), "#fef9c6", "#df5f50", "#951A26", _0x12f43b(0x2fc), _0x12f43b(0x23e), _0x12f43b(0x276), _0x12f43b(0x35f), "#fed766", _0x12f43b(0x1f7), _0x12f43b(0x241), _0x12f43b(0x280), "#CDDC39", _0x12f43b(0x291), "#140f2d", _0x12f43b(0x1f7)],
    [_0x12f43b(0x1a6), _0x12f43b(0x1eb), _0x12f43b(0x1ef), "#010080", _0x12f43b(0x245), _0x12f43b(0x1a9), _0x12f43b(0x29e), _0x12f43b(0x255), _0x12f43b(0x297), _0x12f43b(0x2a1), "#6693f8", _0x12f43b(0x1ce), _0x12f43b(0x24b), _0x12f43b(0x310), "#589fd3", _0x12f43b(0x2d1), "#89cff0", "#7ef9ff", _0x12f43b(0x29c), "#b0dfe5", _0x12f43b(0x21f)],
    [_0x12f43b(0x2f3), _0x12f43b(0x30f), _0x12f43b(0x1f8), _0x12f43b(0x243), _0x12f43b(0x2f9), _0x12f43b(0x35a), _0x12f43b(0x2ff), "#404040", _0x12f43b(0x307), _0x12f43b(0x319), _0x12f43b(0x2f3)],
    ["#03A9F4", _0x12f43b(0x1f1), "#72D3FF", _0x12f43b(0x335), _0x12f43b(0x2d0), _0x12f43b(0x1af), _0x12f43b(0x34e), _0x12f43b(0x24d), _0x12f43b(0x1d3), _0x12f43b(0x334), _0x12f43b(0x271), _0x12f43b(0x1fa), _0x12f43b(0x2a1), _0x12f43b(0x1e2)],
    [_0x12f43b(0x242), _0x12f43b(0x1a2), _0x12f43b(0x1ba), _0x12f43b(0x2eb), _0x12f43b(0x33b), _0x12f43b(0x318), _0x12f43b(0x18a), "#ee726b", _0x12f43b(0x289), "#fef9c6", _0x12f43b(0x260), _0x12f43b(0x210), "#f5b800", "#ffcc4d", "#4b8a5f", _0x12f43b(0x35f), _0x12f43b(0x313), "#0000e6"],
    [_0x12f43b(0x362), _0x12f43b(0x30c), _0x12f43b(0x18d), _0x12f43b(0x2b9), _0x12f43b(0x294), "#e5e2d9", _0x12f43b(0x32a), _0x12f43b(0x1e5), _0x12f43b(0x186), _0x12f43b(0x2a1), _0x12f43b(0x270), _0x12f43b(0x351), _0x12f43b(0x20e), "#c9302d", _0x12f43b(0x1fb), "#f9ea37"],
    [_0x12f43b(0x205), _0x12f43b(0x285), _0x12f43b(0x203), _0x12f43b(0x2fd), _0x12f43b(0x29f), _0x12f43b(0x331), _0x12f43b(0x26f), _0x12f43b(0x1d1), _0x12f43b(0x31b), _0x12f43b(0x31b), _0x12f43b(0x2a1), _0x12f43b(0x2c1), _0x12f43b(0x1b2), _0x12f43b(0x1c9), "#e63e55", _0x12f43b(0x30d), _0x12f43b(0x189), _0x12f43b(0x359), _0x12f43b(0x355), "#F89700", "#933b17", "#24000C"],
    [_0x12f43b(0x202), _0x12f43b(0x290), _0x12f43b(0x1f6), _0x12f43b(0x2d4), _0x12f43b(0x33a), _0x12f43b(0x1d7), "#233DCA", _0x12f43b(0x256), "#00756A", "#ffffff", _0x12f43b(0x224), _0x12f43b(0x1de), _0x12f43b(0x2bb), _0x12f43b(0x2c5), _0x12f43b(0x2f3)],
    [_0x12f43b(0x2f3), _0x12f43b(0x32b), _0x12f43b(0x1ae), _0x12f43b(0x2b1), _0x12f43b(0x356), _0x12f43b(0x1ac), _0x12f43b(0x25b), _0x12f43b(0x25f), _0x12f43b(0x185), _0x12f43b(0x2a4), _0x12f43b(0x1c5), "#34B9F5", _0x12f43b(0x22d), "#009688", _0x12f43b(0x21b), "#009688", _0x12f43b(0x23e)],
    ["#a40000", _0x12f43b(0x312), _0x12f43b(0x2ea), _0x12f43b(0x1e0), "#b86092", _0x12f43b(0x24e), "#00b7a7", _0x12f43b(0x1d2), _0x12f43b(0x19f), "#03A43F", "#EBBD11", "#D75FA3", _0x12f43b(0x1c2), "#02D3C1", _0x12f43b(0x1e3), _0x12f43b(0x2f3), _0x12f43b(0x30f), _0x12f43b(0x1d9), _0x12f43b(0x24f), "#E4E0BE", _0x12f43b(0x1d6), "#BAAFCC", "#071741", _0x12f43b(0x243), _0x12f43b(0x1ed), "#DDDDDD", _0x12f43b(0x2a2), _0x12f43b(0x296), "#B0DEB0", _0x12f43b(0x254), _0x12f43b(0x23e), "#3F3F3F", _0x12f43b(0x216), _0x12f43b(0x327), _0x12f43b(0x1e8), _0x12f43b(0x33d), _0x12f43b(0x223)],
    ["#000000", _0x12f43b(0x246), _0x12f43b(0x1d4), _0x12f43b(0x257), _0x12f43b(0x211), "#E4E3E3", "#808080", _0x12f43b(0x34d), _0x12f43b(0x19c), _0x12f43b(0x34a), "#DCDCDC", _0x12f43b(0x213), "#E4EFFD", _0x12f43b(0x2f3), "#F0F8FF", _0x12f43b(0x1e4), _0x12f43b(0x20a), _0x12f43b(0x268), _0x12f43b(0x2f3), _0x12f43b(0x28e), "#ECECEC", _0x12f43b(0x298), "#6B718D", _0x12f43b(0x302), _0x12f43b(0x309), _0x12f43b(0x303)],
    [_0x12f43b(0x202), "#F42539", _0x12f43b(0x18c), _0x12f43b(0x192), _0x12f43b(0x1a5), _0x12f43b(0x1c9), _0x12f43b(0x284), _0x12f43b(0x2f3), "#9819FA", _0x12f43b(0x2a1), _0x12f43b(0x23b), "#3C8AAF", _0x12f43b(0x358), _0x12f43b(0x238), "#9B9B9B"],
    ["#FFC618", "#BAC929", _0x12f43b(0x350), _0x12f43b(0x192), _0x12f43b(0x349), _0x12f43b(0x261), "#607D8B", _0x12f43b(0x2bf), _0x12f43b(0x1b3), "#ffffff", _0x12f43b(0x233), "#D7F8CD", _0x12f43b(0x358), _0x12f43b(0x2a9), _0x12f43b(0x21c)],
    ["#2400FF", _0x12f43b(0x265), _0x12f43b(0x299), _0x12f43b(0x234), _0x12f43b(0x1ac), _0x12f43b(0x28f), _0x12f43b(0x2ca), "#995C57", _0x12f43b(0x364), _0x12f43b(0x2a1), _0x12f43b(0x1d5), _0x12f43b(0x23e), _0x12f43b(0x2bb), _0x12f43b(0x2c4), "#9C27B0"],
    [_0x12f43b(0x2ed), "#FFC107", _0x12f43b(0x253), "#FFE500", _0x12f43b(0x26c), _0x12f43b(0x2ee), _0x12f43b(0x301), _0x12f43b(0x2f3), _0x12f43b(0x2d7), "#ffffff", _0x12f43b(0x1d5), _0x12f43b(0x23e), "#E8FF00", _0x12f43b(0x281), _0x12f43b(0x2ca)],
    [_0x12f43b(0x1fc), "#5EADF2", _0x12f43b(0x35b), "#F44336", _0x12f43b(0x207), _0x12f43b(0x314), _0x12f43b(0x18a), _0x12f43b(0x258), "#ffc5c7", "#fef9c6", "#df5f50", _0x12f43b(0x210), _0x12f43b(0x2c8), "#009688", _0x12f43b(0x1b1), _0x12f43b(0x35f), "#9C27B0", _0x12f43b(0x1a8), "#8F123C", _0x12f43b(0x280), _0x12f43b(0x1b0), "#FF8A00", _0x12f43b(0x275), _0x12f43b(0x1f7), _0x12f43b(0x1cf)],
    [_0x12f43b(0x33c), _0x12f43b(0x295), _0x12f43b(0x184), "#CA19E9", _0x12f43b(0x26a), "#6A027C", _0x12f43b(0x29b), "#530061", _0x12f43b(0x2d9), _0x12f43b(0x19d), _0x12f43b(0x27d), _0x12f43b(0x1ab), _0x12f43b(0x237), _0x12f43b(0x29a), "#3CE9DA", "#FDF399", _0x12f43b(0x2d6), _0x12f43b(0x28b), "#267DC2", _0x12f43b(0x2f5), "#FF4AC3", _0x12f43b(0x1e7), _0x12f43b(0x2a6), _0x12f43b(0x248), "#86039C", "#FF009F"],
  ];
window[_0x12f43b(0x196)] = { "Pallet\x20Type": color_p(fxrand()), "َArrangement": arrangement_p(fxrand()), "Split\x20Type": split_p(fxrand()), "Candle\x20height": candle_height_p(fxrand()), "Candle\x20width": candle_width_p(fxrand()), "Dimensions\x20inside\x20the\x20candle": candle_dimensions_p(fxrand()), "Flame\x20type": flame_model_p(fxrand()) };
function candle_dimensions_p(_0x375d20) {
  const _0x3aafce = _0x12f43b;
  if (_0x375d20 < 0.1) return (candle_dim = 0x1388), "Large";
  else {
    if (_0x375d20 < 0.3) return (candle_dim = 0xdac), _0x3aafce(0x2af);
    else return _0x375d20 < 0.6 ? ((candle_dim = 0x7d0), "Little") : ((candle_dim = 0x3e8), _0x3aafce(0x1a3));
  }
}
function candle_height_p(_0x3b2c42) {
  const _0x28530e = _0x12f43b;
  if (_0x3b2c42 < 0.1) return (candle_height = 0x1), _0x28530e(0x1bf);
  else {
    if (_0x3b2c42 < 0.3) return (candle_height = 0x2), _0x28530e(0x1f5);
    else return _0x3b2c42 < 0.6 ? ((candle_height = 0x3), _0x28530e(0x2af)) : ((candle_height = 0x4), _0x28530e(0x352));
  }
}
function candle_width_p(_0x138a49) {
  const _0xe36e93 = _0x12f43b;
  if (_0x138a49 < 0.2) return (candle_width = 0x1), _0xe36e93(0x348);
  else return _0x138a49 < 0.45 ? ((candle_width = 0x2), "Medium") : ((candle_width = 0x3), "Narrow");
}
function split_p(_0xd08d50) {
  const _0x26fd47 = _0x12f43b;
  if (_0xd08d50 < 0.05) return (fx_splitProbability = 0.91), _0x26fd47(0x2ec);
  else {
    if (_0xd08d50 < 0.15) return (fx_splitProbability = 0.92), "Hybrid";
    else {
      if (_0xd08d50 < 0.25) return (fx_splitProbability = 0.93), _0x26fd47(0x2ec);
      else {
        if (_0xd08d50 < 0.35) return (fx_splitProbability = 0.94), _0x26fd47(0x2b8);
        else {
          if (_0xd08d50 < 0.5) return (fx_splitProbability = 0.9), "Low\x20complexity";
          else {
            if (_0xd08d50 < 0.65) return (fx_splitProbability = 0.88), _0x26fd47(0x2fe);
            else return _0xd08d50 < 0.8 ? ((fx_splitProbability = 0.89), "Simple") : ((fx_splitProbability = 0.95), _0x26fd47(0x2b0));
          }
        }
      }
    }
  }
}
function arrangement_p(_0x2f8388) {
  const _0x1db52a = _0x12f43b;
  if (_0x2f8388 < 0.05) return (fx_horizontalpProbability = 0.5), _0x1db52a(0x2ec);
  else {
    if (_0x2f8388 < 0.15) return (fx_horizontalpProbability = 0.45), "Hybrid";
    else {
      if (_0x2f8388 < 0.25) return (fx_horizontalpProbability = 0.4), "Complicated";
      else {
        if (_0x2f8388 < 0.35) return (fx_horizontalpProbability = 0.55), _0x1db52a(0x2b8);
        else {
          if (_0x2f8388 < 0.5) return (fx_horizontalpProbability = 0.35), _0x1db52a(0x365);
          else {
            if (_0x2f8388 < 0.65) return (fx_horizontalpProbability = 0.65), "Normal\x20";
            else return _0x2f8388 < 0.8 ? ((fx_horizontalpProbability = 0.8), _0x1db52a(0x31c)) : ((fx_horizontalpProbability = 0.7), "Very\x20simple");
          }
        }
      }
    }
  }
}
function color_p(_0x122b98) {
  const _0x335d94 = _0x12f43b;
  if (_0x122b98 < 0.001) return (pallet_ID = 0x0), _0x335d94(0x190);
  else {
    if (_0x122b98 < 0.025) return (pallet_ID = 0x1), _0x335d94(0x31d);
    else {
      if (_0x122b98 < 0.04) return (pallet_ID = 0x2), _0x335d94(0x306);
      else {
        if (_0x122b98 < 0.06) return (pallet_ID = 0x3), _0x335d94(0x2ce);
        else {
          if (_0x122b98 < 0.08) return (pallet_ID = 0x4), "\x20PIET\x20ZwART";
          else {
            if (_0x122b98 < 0.1) return (pallet_ID = 0x5), "Charmion\x20Von\x20Wiegand";
            else {
              if (_0x122b98 < 0.12) return (pallet_ID = 0x6), "Gerrit\x20Rietveld";
              else {
                if (_0x122b98 < 0.145) return (pallet_ID = 0x7), _0x335d94(0x344);
                else {
                  if (_0x122b98 < 0.17) return (pallet_ID = 0x8), _0x335d94(0x321);
                  else {
                    if (_0x122b98 < 0.2) return (pallet_ID = 0x9), "Kazimir\x20Malevich";
                    else {
                      if (_0x122b98 < 0.23) return (pallet_ID = 0xa), _0x335d94(0x183);
                      else {
                        if (_0x122b98 < 0.26) return (pallet_ID = 0xb), _0x335d94(0x2be);
                        else {
                          if (_0x122b98 < 0.29) return (pallet_ID = 0xc), "Vilmos\x20Huszár";
                          else {
                            if (_0x122b98 < 0.33) return (pallet_ID = 0xd), _0x335d94(0x20b);
                            else {
                              if (_0x122b98 < 0.37) return (pallet_ID = 0xe), _0x335d94(0x247);
                              else {
                                if (_0x122b98 < 0.42) return (pallet_ID = 0xf), _0x335d94(0x26e);
                                else {
                                  if (_0x122b98 < 0.47) return (pallet_ID = 0x10), _0x335d94(0x20f);
                                  else {
                                    if (_0x122b98 < 0.52) return (pallet_ID = 0x11), _0x335d94(0x1df);
                                    else {
                                      if (_0x122b98 < 0.57) return (pallet_ID = 0x12), _0x335d94(0x35c);
                                      else {
                                        if (_0x122b98 < 0.62) return (pallet_ID = 0x13), _0x335d94(0x2dd);
                                        else {
                                          if (_0x122b98 < 0.47) return (pallet_ID = 0x14), _0x335d94(0x340);
                                          else {
                                            if (_0x122b98 < 0.722) return (pallet_ID = 0x15), _0x335d94(0x239);
                                            else {
                                              if (_0x122b98 < 0.774) return (pallet_ID = 0x16), _0x335d94(0x266);
                                              else {
                                                if (_0x122b98 < 0.836) return (pallet_ID = 0x17), _0x335d94(0x2f6);
                                                else {
                                                  if (_0x122b98 < 0.888) return (pallet_ID = 0x18), _0x335d94(0x1c7);
                                                  else return _0x122b98 < 0.94 ? ((pallet_ID = 0x19), _0x335d94(0x1c0)) : ((pallet_ID = 0x1a), _0x335d94(0x329));
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
function flame_model_p(_0x15e00f) {
  const _0x2e87e0 = _0x12f43b;
  if (_0x15e00f < 0.05) return (flame_model = 0x3), _0x2e87e0(0x325);
  else return _0x15e00f < 0.15 ? ((flame_model = 0x2), _0x2e87e0(0x240)) : ((flame_model = 0x1), "Red\x20Yellow");
}
function candel() {
  const _0xa8ab6b = _0x12f43b;
  (floor_rec = aspect_ratio_calc(0x8c)), (x_p1 = aspect_ratio_calc(getRandomArbitrary(0xc8, 0x12c))), (hight_p1 = aspect_ratio_calc(getRandomArbitrary(0x3c, 0x64))), (U_rect_round = getRandomArbitrary(0x14, 0x28)), (D_rect_round = getRandomArbitrary(0x5, 0xf));
  switch (candle_width) {
    case 0x1:
      x_p2 = aspect_ratio_calc(getRandomArbitrary(0x8c, 0xa0));
      break;
    case 0x2:
      x_p2 = aspect_ratio_calc(getRandomArbitrary(0x64, 0x78));
      break;
    case 0x3:
      x_p2 = aspect_ratio_calc(getRandomArbitrary(0x32, 0x46));
      break;
  }
  switch (candle_height) {
    case 0x1:
      hight_p2 = aspect_ratio_calc(getRandomArbitrary(0xb4, 0xc8));
      break;
    case 0x2:
      hight_p2 = aspect_ratio_calc(getRandomArbitrary(0xc8, 0xfa));
      break;
    case 0x3:
      hight_p2 = aspect_ratio_calc(getRandomArbitrary(0x12c, 0x15e));
      break;
    case 0x4:
      hight_p2 = aspect_ratio_calc(getRandomArbitrary(0x17c, 0x1a4));
      break;
  }
  (UR_rect_round = getRandomArbitrary(0x14, 0x28)),
    (x2_p3 = aspect_ratio_calc(getRandomArbitrary(0x14, 0x3c))),
    (y2_p3 = aspect_ratio_calc(getRandomArbitrary(0x14, 0x3c))),
    (hight_p3 = aspect_ratio_calc(getRandomArbitrary(0x14, 0x28))),
    push(),
    fill(_0xa8ab6b(0x339)),
    shape[_0xa8ab6b(0x304)](windowSize2D_minXY / 0x2 - x_p1 / 0x2, windowSize2D_minXY - floor_rec, x_p1, -hight_p1, D_rect_round, D_rect_round, U_rect_round, U_rect_round),
    shape["rect"](windowSize2D_minXY / 0x2 - x_p2 / 0x2, windowSize2D_minXY - floor_rec, x_p2, -hight_p2, 0x0, 0x0, UR_rect_round, 0x0),
    shape[_0xa8ab6b(0x273)](windowSize2D_minXY / 0x2 - x_p2 / 0x2, windowSize2D_minXY - floor_rec - hight_p2, windowSize2D_minXY / 0x2 - x_p2 / 0x2 - x2_p3, windowSize2D_minXY - floor_rec - hight_p2 + y2_p3, windowSize2D_minXY / 0x2 - x_p2 / 0x2, windowSize2D_minXY - floor_rec - hight_p2 + y2_p3),
    shape["rect"](windowSize2D_minXY / 0x2 - x_p2 / 0x2 - x2_p3, windowSize2D_minXY - floor_rec - hight_p2 + y2_p3, windowSize2D_minXY / 0x2 - x_p2 / 0x2 - (windowSize2D_minXY / 0x2 - x_p2 / 0x2 - x2_p3), hight_p3),
    shape[_0xa8ab6b(0x304)](0x0, windowSize2D_minXY - aspect_ratio_calc(0x46), windowSize2D_minXY, aspect_ratio_calc(0x46)),
    pop();
}
function setup() {
  const _0x227da0 = _0x12f43b;
  randomSeed(fxrand() * 0xf423f),
    (seed = noiseSeed(fxrand() * 0xf423f)),
    (windowSize2D_minXY = Math["min"](window[_0x227da0(0x338)], window[_0x227da0(0x2a0)])),
    (start_win_size = windowSize2D_minXY),
    (x_canv = createCanvas(windowSize2D_minXY, windowSize2D_minXY)),
    (pattern = createGraphics(windowSize2D_minXY, windowSize2D_minXY)),
    (shape = createGraphics(windowSize2D_minXY, windowSize2D_minXY)),
    candel(),
    (_bgWidth = min(width, height)),
    (_minWidth = _bgWidth * 0x1),
    noFill(),
    stroke(0x4),
    strokeWeight(_minWidth / 0x2328),
    (_xy1 = createVector(-_minWidth / 0x2, -_minWidth / 0x2)),
    (_xy2 = createVector(+_minWidth / 0x2, -_minWidth / 0x2)),
    (_xy3 = createVector(+_minWidth / 0x2, +_minWidth / 0x2)),
    (_xy4 = createVector(-_minWidth / 0x2, +_minWidth / 0x2)),
    setObject(),
    translate(windowSize2D_minXY / 0x2, windowSize2D_minXY / 0x2),
    _obj[_0x227da0(0x20c)](_xy1, _xy2, _xy3, _xy4),
    _obj[_0x227da0(0x31a)](0x1),
    (pattern = x_canv),
    (pattern = pattern[_0x227da0(0x330)]()),
    pattern[_0x227da0(0x1d8)](shape),
    translate(-windowSize2D_minXY / 0x2, -windowSize2D_minXY / 0x2),
    imageMode(CENTER),
    fill(0x0),
    rect(0x0, 0x0, windowSize2D_minXY, windowSize2D_minXY),
    mondrian(),
    candel_thread(),
    push(),
    fill(monderian_stroke_color),
    strokeWeight(aspect_ratio_calc(monderian_stroke_w)),
    stroke(monderian_stroke_color),
    rect(windowSize2D_minXY / 0x2 - x_p1 / 0x2, windowSize2D_minXY - floor_rec, x_p1, -hight_p1, D_rect_round, D_rect_round, U_rect_round, U_rect_round),
    console["log"](_0x227da0(0x2bd) + x_p1),
    rect(windowSize2D_minXY / 0x2 - x_p2 / 0x2, windowSize2D_minXY - floor_rec, x_p2, -hight_p2, 0x0, 0x0, UR_rect_round, 0x5),
    fill(monderian_stroke_color),
    strokeCap(ROUND),
    strokeWeight(aspect_ratio_calc(monderian_stroke_w)),
    line(windowSize2D_minXY / 0x2 - x_p2 / 0x2, windowSize2D_minXY - floor_rec - hight_p2, windowSize2D_minXY / 0x2 - x_p2 / 0x2 - x2_p3, windowSize2D_minXY - floor_rec - hight_p2 + y2_p3),
    strokeCap(PROJECT),
    fill(monderian_stroke_color),
    strokeWeight(aspect_ratio_calc(monderian_stroke_w)),
    stroke(monderian_stroke_color),
    rect(windowSize2D_minXY / 0x2 - x_p2 / 0x2 - x2_p3, windowSize2D_minXY - floor_rec - hight_p2 + y2_p3, windowSize2D_minXY / 0x2 - x_p2 / 0x2 - (windowSize2D_minXY / 0x2 - x_p2 / 0x2 - x2_p3), hight_p3, 0x5, 0x0, 0x0, 0x0),
    pop(),
    translate(windowSize2D_minXY / 0x2, windowSize2D_minXY / 0x2),
    image(pattern, 0x0, 0x0, windowSize2D_minXY, windowSize2D_minXY),
    translate(-windowSize2D_minXY / 0x2, -windowSize2D_minXY / 0x2),
    border();
}
function setObject() {
  _obj = new Obj(0x1, random([-0x1, 0x3c]));
}
class Obj {
  constructor(_0x2dc98a, _0x39ac30) {
    const _0x36b54c = _0x12f43b;
    (this[_0x36b54c(0x262)] = _0x2dc98a), (this[_0x36b54c(0x2b3)] = 0xd), (this["innerLineNum"] = 0x3), (this[_0x36b54c(0x1cd)] = []), (this[_0x36b54c(0x2fb)] = _0x39ac30);
    let _0x4532d7 = fx_splitProbability;
    ((_0x2dc98a < this[_0x36b54c(0x2b3)] && random() < _0x4532d7) || this[_0x36b54c(0x262)] == 0x1) && this[_0x36b54c(0x208)]();
  }
  [_0x12f43b(0x208)]() {
    const _0x251139 = _0x12f43b;
    let _0x29b873 = fx_horizontalpProbability;
    random() < _0x29b873 ? (this[_0x251139(0x2b7)] = "horizontal") : (this["splitDirection"] = _0x251139(0x279));
    (this[_0x251139(0x225)] = 1.9215), (this[_0x251139(0x28a)] = 0x0), (this[_0x251139(0x227)] = 0.2), (this[_0x251139(0x35e)] = 0.8), (this[_0x251139(0x2c0)] = this[_0x251139(0x35e)] - this[_0x251139(0x227)]), (this["count"] = 0x0);
    let _0x4beb1a = 0x1;
    this[_0x251139(0x1cd)] = [new Obj(this[_0x251139(0x262)] + 0x1, _0x4beb1a), new Obj(this[_0x251139(0x262)] + 0x1, -_0x4beb1a)];
  }
  [_0x12f43b(0x20c)](_0x133920, _0x5c77fb, _0x6c7a30, _0x5d0b0e) {
    const _0x2123aa = _0x12f43b;
    (this[_0x2123aa(0x251)] = _0x133920), (this["xy2"] = _0x5c77fb), (this[_0x2123aa(0x2ef)] = _0x6c7a30), (this["xy4"] = _0x5d0b0e);
    if (this[_0x2123aa(0x1cd)][_0x2123aa(0x31e)] > 0x1) {
      let _0x2c33cd = [((sin(0x2 * PI * this["freq"] * noise(this[_0x2123aa(0x225)] * this[_0x2123aa(0x308)])) + 0x1) * this[_0x2123aa(0x2c0)]) / 0x2 + this[_0x2123aa(0x227)], ((sin(0x2 * PI * this[_0x2123aa(0x28a)] * noise(this[_0x2123aa(0x225)] * this[_0x2123aa(0x308)])) + 0x1) * this[_0x2123aa(0x2c0)]) / 0x2 + this[_0x2123aa(0x227)]];
      if (this[_0x2123aa(0x2b7)] == _0x2123aa(0x26b)) {
        let _0x3b1c62 = _0x133920,
          _0x1de0a2 = _0x5c77fb,
          _0x29058e = p5[_0x2123aa(0x2fa)][_0x2123aa(0x23d)](_0x5c77fb, _0x6c7a30, _0x2c33cd[0x0]),
          _0xbb1567 = p5[_0x2123aa(0x2fa)][_0x2123aa(0x23d)](_0x5d0b0e, _0x133920, _0x2c33cd[0x1]);
        this[_0x2123aa(0x1cd)][0x0][_0x2123aa(0x20c)](_0x3b1c62, _0x1de0a2, _0x29058e, _0xbb1567);
        let _0x2601e2 = _0xbb1567,
          _0x370e53 = _0x29058e,
          _0xbfb31a = _0x6c7a30,
          _0x17eaf7 = _0x5d0b0e;
        this[_0x2123aa(0x1cd)][0x1]["update"](_0x2601e2, _0x370e53, _0xbfb31a, _0x17eaf7);
      } else {
        if (this["splitDirection"] == _0x2123aa(0x279)) {
          let _0x4c3767 = _0x133920,
            _0x5926fc = p5[_0x2123aa(0x2fa)][_0x2123aa(0x23d)](_0x133920, _0x5c77fb, _0x2c33cd[0x1]),
            _0x5cd86e = p5[_0x2123aa(0x2fa)][_0x2123aa(0x23d)](_0x6c7a30, _0x5d0b0e, _0x2c33cd[0x1]),
            _0x1cb8d6 = _0x5d0b0e;
          this[_0x2123aa(0x1cd)][0x0]["update"](_0x4c3767, _0x5926fc, _0x5cd86e, _0x1cb8d6);
          let _0x2b9d3e = _0x5926fc,
            _0x3cf655 = _0x5c77fb,
            _0x18c82e = _0x6c7a30,
            _0x594311 = _0x5cd86e;
          this[_0x2123aa(0x1cd)][0x1][_0x2123aa(0x20c)](_0x2b9d3e, _0x3cf655, _0x18c82e, _0x594311);
        }
      }
    }
    this[_0x2123aa(0x308)]++;
  }
  [_0x12f43b(0x31a)]() {
    const _0x2ed28b = _0x12f43b;
    noLoop(), fill(pallete[pallet_ID][floor(random(pallete[pallet_ID][_0x2ed28b(0x31e)]))]), this["arySubObject"][_0x2ed28b(0x31e)] == 0x0 ? (beginShape(), vertex(this["xy1"]["x"], this[_0x2ed28b(0x251)]["y"]), vertex(this[_0x2ed28b(0x1ea)]["x"], this[_0x2ed28b(0x1ea)]["y"]), vertex(this[_0x2ed28b(0x2ef)]["x"], this[_0x2ed28b(0x2ef)]["y"]), vertex(this[_0x2ed28b(0x1e1)]["x"], this["xy4"]["y"]), endShape(CLOSE), this[_0x2ed28b(0x222)](0x1)) : (this[_0x2ed28b(0x1cd)][0x0][_0x2ed28b(0x31a)](), this[_0x2ed28b(0x1cd)][0x1][_0x2ed28b(0x31a)]());
  }
  [_0x12f43b(0x222)]() {
    const _0xc92c9d = _0x12f43b;
    if (this["innerLineDirection"] == 0x1)
      for (let _0x730d28 = 0x0; _0x730d28 < this[_0xc92c9d(0x2c9)]; _0x730d28++) {
        let _0x118e8f = p5[_0xc92c9d(0x2fa)]["lerp"](this[_0xc92c9d(0x251)], this["xy2"], (_0x730d28 + 0x1) / (this[_0xc92c9d(0x2c9)] + 0x1)),
          _0x27d872 = p5[_0xc92c9d(0x2fa)]["lerp"](this[_0xc92c9d(0x1e1)], this["xy3"], (_0x730d28 + 0x1) / (this["innerLineNum"] + 0x1));
        line(_0x118e8f["x"], _0x118e8f["y"], _0x27d872["x"], _0x27d872["y"]);
      }
    else {
      if (this[_0xc92c9d(0x2fb)] == -0x1)
        for (let _0x2d64e5 = 0x0; _0x2d64e5 < this[_0xc92c9d(0x2c9)]; _0x2d64e5++) {
          let _0x4d9cb1 = p5[_0xc92c9d(0x2fa)][_0xc92c9d(0x23d)](this["xy1"], this[_0xc92c9d(0x1e1)], (_0x2d64e5 + 0x1) / (this[_0xc92c9d(0x2c9)] + 0x1)),
            _0x4e3f84 = p5[_0xc92c9d(0x2fa)][_0xc92c9d(0x23d)](this[_0xc92c9d(0x1ea)], this[_0xc92c9d(0x2ef)], (_0x2d64e5 + 0x1) / (this["innerLineNum"] + 0x1));
          line(_0x4d9cb1["x"], _0x4d9cb1["y"], _0x4e3f84["x"], _0x4e3f84["y"]);
        }
    }
  }
}
function draw() {}
function setNoise1() {
  let _0x218c34 = color(0x2, 0x2, 0x1);
  loadPixels();
  for (let _0x4f9479 = 0x0; _0x4f9479 < width; _0x4f9479++) {
    for (let _0x404b59 = 0x0; _0x404b59 < height; _0x404b59++) {
      if (fxrand() > 0.6) {
        const _0x5d3d1f = (_0x4f9479 + _0x404b59 * width) * 0x1c;
        (pixels[_0x5d3d1f] = red(_0x218c34)), (pixels[_0x5d3d1f + 0x1] = green(_0x218c34)), (pixels[_0x5d3d1f + 0x2] = blue(_0x218c34)), (pixels[_0x5d3d1f + 0x3] = alpha(_0x218c34));
      }
    }
  }
  updatePixels();
}
function setNoise2() {
  let _0x13e28d = color(0x1, 0x1, 0x1, 0x6e);
  loadPixels();
  for (let _0x3abe7c = 0x0; _0x3abe7c < width; _0x3abe7c++) {
    for (let _0x2a2e74 = 0x0; _0x2a2e74 < height; _0x2a2e74++) {
      if (fxrand() > 0.6) {
        const _0x419e43 = (_0x3abe7c + _0x2a2e74 * width) * 0x1c;
        (pixels[_0x419e43] = red(_0x13e28d)), (pixels[_0x419e43 + 0x1] = green(_0x13e28d)), (pixels[_0x419e43 + 0x2] = blue(_0x13e28d)), (pixels[_0x419e43 + 0x3] = alpha(_0x13e28d));
      }
    }
  }
  updatePixels();
}
function _0x223e() {
  const _0x3d6a65 = [
    "#C99600",
    "#42c0c5",
    "Felrath\x20Hines",
    "#FFD6E7",
    "#709787",
    "#500BCE",
    "#fbedd3",
    "triangle",
    "#f71919",
    "#160085",
    "#1832C1",
    "#c40acb",
    "#0000ff",
    "vertical",
    "#fbcc96",
    "#1e9ce9",
    "#FDF5E6",
    "#FAD7FF",
    "#fa332e",
    "#D4C2C2",
    "#f22b29",
    "#FAFFC4",
    "#1c7bd5",
    "#e8e8e8",
    "#FF8119",
    "#fe2400",
    "\x20:\x20",
    "744CUWeun",
    "#F8F8FF",
    "#ffc5c7",
    "freq",
    "#DA00FF",
    "#4C542D",
    "Monderian-1000px",
    "#E0E0E0",
    "#903316",
    "#9C27B0",
    "#f49d37",
    "addEventListener",
    "#f4891d",
    "#c74847",
    "#9B11B2",
    "#FBD074",
    "#008dcb",
    "#192517",
    "#B6532F",
    "#342CB7",
    "#79C6E9",
    "#95c8db",
    "#debaac",
    "#0080ff",
    "#ce5c5c",
    "innerHeight",
    "#ffffff",
    "#FF9F4D",
    "#3CFC19",
    "#3C7279",
    "140320gZHiJK",
    "#FFE500",
    "#003218",
    "setAlpha",
    "#215551",
    "#293545",
    "++++2\x20",
    "#A3AEE8",
    "\x20>>>>>\x20",
    "#88ae97",
    "Medium",
    "Very\x20simple",
    "#F0F7EE",
    "#1B9AAA",
    "splitNumLimit",
    "#fae112",
    ">>++\x20",
    "#019b83",
    "splitDirection",
    "Medium\x20complexity",
    "#5b82c4",
    "#E6E6FA",
    "#E8FF00",
    "#01a573",
    "++++1\x20",
    "PIET\x20MONDRIAN\x20[Evening;\x20The\x20Red\x20Tree]",
    "#007C70",
    "gapNoiseVal",
    "#960019",
    "#C9FF00",
    "#2A040E",
    "#00DBC5",
    "#0C3D38",
    "#808080",
    "#3FD8D7",
    "#0E0C07",
    "innerLineNum",
    "#FF0057",
    "#683c8b",
    "Resize\x20...",
    "#7FAE7F",
    "PIET\x20MONDRIAN\x20[Farmyard\x20with\x20Chickens]",
    "#FF8A00",
    "#A2AFF5",
    "#81d8d0",
    "#EF476F",
    "#FFFAF0",
    "#783AE5",
    "#f8aa1f",
    "#CB78D9",
    "#8F8746",
    "#89F98A",
    "#F2B1FD",
    "#35E8FF",
    "#ffdd00",
    "push",
    "Burgoyne\x20Diller",
    "#fed766",
    "#6f6f6f",
    "#f1f1f1",
    "#F5FFFA",
    "#F0FFF0",
    "12MvArOo",
    "#1a1d26",
    "#127740",
    "#3CB66A",
    "#FFFAFA",
    "#009D64",
    "#aaba9f",
    "#00501E",
    "#5296A5",
    "Complicated",
    "#2400FF",
    "#CCC269",
    "xy3",
    "#3e6d49",
    "#003380",
    "#34EB90B5",
    "#000000",
    "#e2118f",
    "#3C53D1",
    "César\x20Domela",
    "#f0ece0",
    "#FFF0F5",
    "#909090",
    "Vector",
    "innerLineDirection",
    "#f5b800",
    "#ee293a",
    "Normal",
    "#5C5C5C",
    "#eff684",
    "#F1FF00",
    "#9EBCD4",
    "#272135",
    "rect",
    "#f0c8be",
    "J.J.P.\x20Oud",
    "#1D1D1D",
    "count",
    "#405042",
    "#e64358",
    "#270062",
    "#d5a035",
    "#b43757",
    "Monderian-4000px",
    "#FFFFFF",
    "#4f97a3",
    "#F0F8FF",
    "#203639",
    "#140f2d",
    "#BF3E21",
    "#2d2d2d",
    "#08E2FD",
    "#151618",
    "#4464a1",
    "#0F0F0F",
    "draw",
    "#b22222",
    "Simple",
    "Theo\x20van\x20Doesburg",
    "length",
    "8FqxFEO",
    "#6A72E0",
    "Cornelis\x20van\x20Eesteren",
    "#FF7407",
    "#fef9c6",
    "#DC389A",
    "Green\x20Blue",
    "#9d8a3b",
    "#7A6934",
    "#dae370",
    "Frank\x20Stella",
    "#e4b135",
    "#5D737E",
    "#f5e04f",
    "#8E00FF",
    "resize",
    "#F0FFFF",
    "get",
    "#c31807",
    "#97A228",
    "#E6612A",
    "#006AAC",
    "#5264C5",
    "++++3\x20",
    "#0093A4",
    "innerWidth",
    "#ff5e32",
    "#E292FF",
    "#00D3FF",
    "#0b6623",
    "#7e5522",
    "#00A572",
    "#F9B11B",
    "Marlow\x20Moss",
    "#cee2e1",
    "#d0cece",
    "#d42337",
    "Bart\x20van\x20der\x20Leck",
    "1841XAZyJc",
    "#ad4e6c",
    "#DCDCDC",
    "Wide",
    "#2EDACA",
    "#453535",
    "344214ybrzhA",
    "#99fa9b",
    "#A9A9A9",
    "#010F5A",
    "#444C38",
    "#00BCD4",
    "#201933",
    "Tall",
    "log",
    "#00FF70",
    "#420d09",
    "#87BBA2",
    "#f3aacc",
    "#8BC34A",
    "#c00a32",
    "#7A7A7A",
    "#F6C28B",
    "Jan\x20Wils",
    "#575761",
    "maxNoiseVal",
    "#e590b8",
    "#84ff84",
    "#5cb362",
    "#202020",
    "#FED602",
    "#A12650",
    "Low\x20complexity",
    "Amédée\x20Ozenfant",
    "#C352D6",
    "#795548",
    "#b20f70",
    "#f7df95",
    "#3ea891",
    "#ca3433",
    "#56a1c4",
    "#cc8449",
    "#CB9928",
    "#395ea3",
    "#595959",
    "#FFC107",
    "Piet\x20Mondrian",
    "#a3c5ce",
    "#007066",
    "#3700D4",
    "includes",
    "#b1cfc5",
    "$fxhashFeatures",
    "#68104c",
    "#94b0d8",
    "#8c74c0",
    "Monderian-3000px",
    "#3f88c5",
    "#C0C0C0",
    "#FFEA2F",
    "#e2c7a9",
    "#173CA4",
    "#39ff14",
    "#bda73a",
    "#3F51B5",
    "Tiny",
    "#0045E8",
    "#4178F4",
    "#111e6c",
    "#2054AE",
    "#0787C1",
    "#1135a7",
    "#a0ab43",
    "#0326EA",
    "#F44336",
    "#FBE632",
    "#CDDC39",
    "#3A1DC0",
    "#102A3F",
    "#00FF51",
    "#800000",
    "#009711",
    "#8e9778",
    "7236vKLNBZ",
    "#11ac56",
    "#f70202",
    "#f64712",
    "#ff4d4d",
    "#905619",
    "#7B8F3E",
    "#F89700",
    "#6b7f64",
    "#dc5f97",
    "Too\x20short",
    "Leon\x20Polk\x20Smith",
    "#ffff00",
    "#C7C3C5",
    "#ea5241",
    "#d53e1f",
    "#A751CE",
    "#5caf83",
    "Max\x20Bill",
    "#FAEBD7",
    "#FE84FE",
    "#eb8cae",
    "#4BB56E",
    "#29AB87",
    "arySubObject",
    "#73c2fb",
    "#00aeff",
    "#ffc351",
    "#e0115f",
    "#a40000",
    "#DBE9FD",
    "#768492",
    "#FF8665",
    "#6BB7C4",
    "#673AB7",
    "mask",
    "#8BD8FA",
    "#ff0000",
    "#F8FFE5",
    "#d0f0c1",
    "202732Tugtax",
    "#9882C0",
    "Friedrich\x20V.Gildewart",
    "#ffcd12",
    "xy4",
    "#62B0EE",
    "#888788",
    "#93D1D3",
    "#d17a85",
    "#EFFDA6",
    "#CA54DF",
    "#F3FFE5",
    "filter",
    "xy2",
    "#1c2a51",
    "#0099cf",
    "#D4B8B4",
    "#8a9a5b",
    "#003152",
    "::::::::\x20",
    "#0718FF",
    "#fdfbfc",
    "#444444",
    "#d19998",
    "Short",
    "#C32CBF",
    "#fe4a49",
    "#E5E5E5",
    "#FFE4E1",
    "#61688B",
    "#6d70ae",
    "#F27EA9",
    "#21449A",
    "#06C6D6",
    "#ece3d1",
    "#E4EFFD",
    "#000084",
    "#FFC618",
    "#7c0902",
    "#ad051f",
    "#fa8071",
    "#E8E8B8",
    "#8AA66F",
    "splitObject",
    "#4cbb17",
    "#A2B6AB",
    "Antony\x20Kok",
    "update",
    "#ffee22",
    "#c1b09b",
    "Jean\x20Gorin",
    "#5a3034",
    "#778899",
    "5wtwOAI",
    "#EEEEEE",
    "#87C15E",
    "#911f1e",
    "#2e77ab",
    "#A103CF",
    "#28ac87",
    "#008C7F",
    "#88936C",
    "#D30F62",
    "#37E5D5",
    "#b11b3e",
    "#ea970d",
    "#3ee1d0",
    "keyCode",
    "3YPxdiA",
    "drawInnerLine",
    "#9E9E9E",
    "#FF00A2",
    "noiseSpeed",
    "#9B9B9B",
    "minNoiseVal",
    "#d8ec4f",
    "#000",
    "#d0240e",
    "#93C4C4",
    "#8BB1B8",
    "#E5E6E6",
    "#87DFDF",
    "#df9b43",
    "#FFFFF0",
    "#010101",
    "#c5e8e8",
    "#21B201",
    "#E24379",
    "#00564E",
    "#D8003C",
    "#F7C5FF",
    "#25776F",
    "Ilya\x20Bolotowsky",
    "#FCD7AD",
    "#11016D",
    "blur(",
    "lerp",
    "#009688",
    "#0000FF",
    "Purple\x20Pink",
    "#d72638",
    "#A57548",
    "#C3C3C3",
    "#D7F8CD",
    "#0e4d94",
    "#2A4B4B",
    "Georges\x20Vantongerloo\x20",
    "#FF5722",
    "4081748WcxkQh",
    "#043927",
    "#7285a5",
    "#01796F",
    "#00137E",
    "#721b3e",
    "#EFEEEC",
    "#1e2639",
    "xy1",
    "#457055",
    "#FFEB3B",
    "#0070BD",
    "#0f52ba",
    "#B614FF",
    "#DBE3D9",
    "#ee726b",
    "#06D6A0",
    "#f6dfe7",
    "#FF6B00",
    "#CCC376",
    "#fb896e",
    "#509066",
    "#2100FE",
    "#df5f50",
    "#00FF0A",
    "splitNumCurrent",
    "250785bvOdGW",
    "png",
    "#BDBDBD",
    "Joseph\x20Csaky",
    "px)",
    "#57365D",
    "#ff4b40",
    "#975AA1",
    "horizontal",
  ];
  _0x223e = function () {
    return _0x3d6a65;
  };
  return _0x223e();
}
function getRandomArbitrary(_0x3cbf54, _0x2aa632) {
  return round(fxrand() * (_0x2aa632 - _0x3cbf54)) + _0x3cbf54;
}
function keyPressed(_0x4cb271) {
  const _0x23df6b = _0x12f43b;
  (_0x4cb271[_0x23df6b(0x220)] == 0x31 || _0x4cb271[_0x23df6b(0x220)] == 0x61) && ((save_command = !![]), (winsizeSave = 0x1f4), windowResized(), saveCanvas(_0x23df6b(0x28d), _0x23df6b(0x264))), (_0x4cb271["keyCode"] == 0x32 || _0x4cb271[_0x23df6b(0x220)] == 0x62) && ((save_command = !![]), (winsizeSave = 0x3e8), windowResized(), saveCanvas("Monderian-2000px", _0x23df6b(0x264))), (_0x4cb271[_0x23df6b(0x220)] == 0x33 || _0x4cb271[_0x23df6b(0x220)] == 0x63) && ((save_command = !![]), (winsizeSave = 0x5dc), windowResized(), saveCanvas(_0x23df6b(0x19a), _0x23df6b(0x264))), (_0x4cb271[_0x23df6b(0x220)] == 0x34 || _0x4cb271[_0x23df6b(0x220)] == 0x64) && ((save_command = !![]), (winsizeSave = 0x7d0), windowResized(), saveCanvas(_0x23df6b(0x30e), _0x23df6b(0x264)));
}
function aspect_ratio_calc(_0xb0311) {
  let _0x288c7c;
  return (_0x288c7c = (_0xb0311 * windowSize2D_minXY) / 0x2ea), _0x288c7c;
}
function aspect_ratio_calc2(_0x152de5) {
  let _0x184226;
  return (_0x184226 = (_0x152de5 * windowSize2D_minXY) / start_win_size), _0x184226;
}
function windowResized() {
  const _0x2e2da2 = _0x12f43b;
  save_command ? (windowSize2D_minXY = winsizeSave) : (windowSize2D_minXY = Math["min"](window[_0x2e2da2(0x338)], window[_0x2e2da2(0x2a0)])), resizeCanvas(windowSize2D_minXY, windowSize2D_minXY), background(background_color), noise_set_on_obj_resize(), candel_thread_resize(), candel_destile_resized(), border();
}
function _0x4cb1(_0x55298c, _0x2b0029) {
  const _0x223e09 = _0x223e();
  return (
    (_0x4cb1 = function (_0x4cb1b8, _0x1949ed) {
      _0x4cb1b8 = _0x4cb1b8 - 0x183;
      let _0x2c8667 = _0x223e09[_0x4cb1b8];
      return _0x2c8667;
    }),
    _0x4cb1(_0x55298c, _0x2b0029)
  );
}
window[_0x12f43b(0x292)](_0x12f43b(0x32e), function () {
  const _0x38efc4 = _0x12f43b;
  console[_0x38efc4(0x353)](_0x38efc4(0x2cc));
});
function mondrian() {
  const _0x5ddbc9 = _0x12f43b;
  let _0x2cf52e = [0x32, 0x64, 0x96, 0xc8, 0x12c, 0x190, 0x1c2, 0x1f4];
  strokeWeight(aspect_ratio_calc(monderian_stroke_w)), stroke(monderian_stroke_color);
  let _0xc49f1c = random(_0x2cf52e),
    _0x5eabd3 = random(_0x2cf52e),
    _0x203767 = 0x0,
    _0x29d87f = 0x0,
    _0x1e7b67 = 0xc8,
    _0x57dee8 = 0.1,
    _0x400146 = 1.2;
  while (_0x29d87f < 0x2ea) {
    _0x203767 = 0x0;
    while (_0x203767 < 0x2ea) {
      if (_0xc49f1c >= _0x1e7b67 || _0x5eabd3 >= _0x1e7b67) {
        if (_0xc49f1c >= _0x5eabd3) {
          let _0x74bffd = getRandomArbitrary(0x1, 0x2, 0x3, 0x4),
            _0x287bad = getRandomArbitrary(0x3, 0x4, 0x5, 0x6, 0x7, 0x8, 0x9),
            _0x151ba2 = _0xc49f1c / _0x287bad;
          switch (_0x74bffd) {
            case 0x1:
              let _0x411d7f = _0x203767;
              for (let _0x8ce203 = 0x0; _0x8ce203 < _0x287bad; _0x8ce203++) {
                let _0x2c6e48 = selected_color_in_order();
                Arr_color_monderian[_0x5ddbc9(0x2dc)](_0x2c6e48), Arr_x_monderian[_0x5ddbc9(0x2dc)](_0x411d7f), Arr_y_monderian[_0x5ddbc9(0x2dc)](_0x29d87f), Arr_w_monderian[_0x5ddbc9(0x2dc)](_0x151ba2), Arr_h_monderian[_0x5ddbc9(0x2dc)](_0x5eabd3), noise_set_on_obj(_0x411d7f, _0x411d7f + _0x151ba2, _0x29d87f, _0x29d87f + _0x5eabd3, _0x57dee8, _0x400146, (_0xc49f1c * _0x5eabd3 * 0xa) / _0x151ba2, _0x2c6e48), strokeWeight(aspect_ratio_calc(monderian_stroke_w)), stroke(monderian_stroke_color), noFill();
                let _0x28b710 = color(_0x2c6e48);
                _0x28b710[_0x5ddbc9(0x2a8)](0x32), fill(_0x28b710), (_0x411d7f = _0x411d7f + _0x151ba2);
              }
              break;
            default:
              let _0x56c9b4 = selected_color_in_order();
              Arr_color_monderian[_0x5ddbc9(0x2dc)](_0x56c9b4), Arr_x_monderian[_0x5ddbc9(0x2dc)](_0x203767), Arr_y_monderian[_0x5ddbc9(0x2dc)](_0x29d87f), Arr_w_monderian[_0x5ddbc9(0x2dc)](_0x203767 + _0xc49f1c), Arr_h_monderian["push"](_0x29d87f + _0x5eabd3), noise_set_on_obj(_0x203767, _0x203767 + _0xc49f1c, _0x29d87f, _0x29d87f + _0x5eabd3, _0x57dee8, _0x400146, (_0xc49f1c * _0x5eabd3 * 0xa) / _0x151ba2, _0x56c9b4), strokeWeight(aspect_ratio_calc(monderian_stroke_w)), stroke(monderian_stroke_color), noFill();
              let _0x338d1d = color(_0x56c9b4);
              _0x338d1d["setAlpha"](0x32), fill(_0x338d1d);
              break;
          }
        } else {
          let _0x21cf97 = getRandomArbitrary(0x1, 0x2, 0x3, 0x4),
            _0x313ec0 = getRandomArbitrary(0x3, 0x4, 0x5, 0x6, 0x7, 0x8, 0x9),
            _0x1b4272 = _0x5eabd3 / _0x313ec0;
          switch (_0x21cf97) {
            case 0x1:
              let _0x1afacb = _0x29d87f;
              for (let _0x18c6b8 = 0x0; _0x18c6b8 < _0x313ec0; _0x18c6b8++) {
                let _0x45192c = selected_color_in_order();
                Arr_color_monderian[_0x5ddbc9(0x2dc)](_0x45192c), Arr_x_monderian["push"](_0x203767), Arr_y_monderian["push"](_0x1afacb), Arr_w_monderian[_0x5ddbc9(0x2dc)](_0xc49f1c), Arr_h_monderian[_0x5ddbc9(0x2dc)](_0x1b4272), noise_set_on_obj(_0x203767, _0x203767 + _0xc49f1c, _0x1afacb, _0x1afacb + _0x1b4272, _0x57dee8, _0x400146, (_0xc49f1c * _0x5eabd3 * 0xa) / _0x1b4272, _0x45192c), strokeWeight(aspect_ratio_calc(monderian_stroke_w)), stroke(monderian_stroke_color), noFill();
                let _0x46f5c2 = color(_0x45192c);
                _0x46f5c2[_0x5ddbc9(0x2a8)](0x32), fill(_0x46f5c2), (_0x1afacb = _0x1afacb + _0x1b4272);
              }
              break;
            default:
              let _0x26ca66 = selected_color_in_order();
              Arr_color_monderian[_0x5ddbc9(0x2dc)](_0x26ca66), Arr_x_monderian["push"](_0x203767), Arr_y_monderian[_0x5ddbc9(0x2dc)](_0x29d87f), Arr_w_monderian[_0x5ddbc9(0x2dc)](_0x203767 + _0xc49f1c), Arr_h_monderian[_0x5ddbc9(0x2dc)](_0x29d87f + _0x5eabd3), noise_set_on_obj(_0x203767, _0x203767 + _0xc49f1c, _0x29d87f, _0x29d87f + _0x5eabd3, _0x57dee8, _0x400146, (_0xc49f1c * _0x5eabd3 * 0xa) / _0x1b4272, _0x26ca66), strokeWeight(aspect_ratio_calc(monderian_stroke_w)), stroke(monderian_stroke_color), noFill();
              let _0x197872 = color(_0x26ca66);
              _0x197872[_0x5ddbc9(0x2a8)](0x32), fill(_0x197872);
              break;
          }
        }
      } else {
        let _0x42abad = selected_color_in_order();
        Arr_color_monderian[_0x5ddbc9(0x2dc)](_0x42abad), Arr_x_monderian["push"](_0x203767), Arr_y_monderian[_0x5ddbc9(0x2dc)](_0x29d87f), Arr_w_monderian["push"](_0x203767 + _0xc49f1c), Arr_h_monderian[_0x5ddbc9(0x2dc)](_0x29d87f + _0x5eabd3), noise_set_on_obj(_0x203767, _0x203767 + _0xc49f1c, _0x29d87f, _0x29d87f + _0x5eabd3, _0x57dee8, _0x400146, (_0xc49f1c * _0x5eabd3 * 0xa) / _0xc49f1c, _0x42abad), strokeWeight(aspect_ratio_calc(0x1)), stroke(monderian_stroke_color), noFill();
        let _0x3374d9 = color(_0x42abad);
        _0x3374d9[_0x5ddbc9(0x2a8)](0x32), fill(_0x3374d9);
      }
      (_0x203767 = _0x203767 + _0xc49f1c), (_0xc49f1c = random(_0x2cf52e));
    }
    (_0x29d87f = _0x29d87f + _0x5eabd3), (_0x5eabd3 = random(_0x2cf52e));
  }
}
function mondrian_resize() {
  randomSeed(seed);
}
function noise_set_on_obj(_0x4e20a7, _0x599b85, _0x54f129, _0x4f2132, _0x233711, _0x2b2e66, _0x594b8a, _0x5c51a5) {
  const _0xa98c85 = _0x12f43b;
  push(), noFill(), strokeWeight(aspect_ratio_calc(monderian_stroke_w)), stroke(monderian_stroke_color), Arr_x1_noise_set_on_obj[_0xa98c85(0x2dc)](_0x4e20a7), Arr_y1_noise_set_on_obj[_0xa98c85(0x2dc)](_0x54f129), Arr_x2_x1_noise_set_on_obj["push"](_0x599b85 - _0x4e20a7), Arr_y2_y1_noise_set_on_obj[_0xa98c85(0x2dc)](_0x4f2132 - _0x54f129), Arr_color2_noise_set_on_obj["push"](_0x5c51a5), fill(color(_0x5c51a5)), rect(aspect_ratio_calc(_0x4e20a7), aspect_ratio_calc(_0x54f129), aspect_ratio_calc(_0x599b85 - _0x4e20a7), aspect_ratio_calc(_0x4f2132 - _0x54f129)), pop();
}
function noise_set_on_obj_resize() {
  const _0x5c1493 = _0x12f43b;
  for (let _0x3839a7 = 0x0; _0x3839a7 < Arr_x1_noise_set_on_obj[_0x5c1493(0x31e)]; _0x3839a7++) {
    noFill(), strokeWeight(aspect_ratio_calc(monderian_stroke_w)), stroke(monderian_stroke_color), fill(color(Arr_color2_noise_set_on_obj[_0x3839a7])), rect(aspect_ratio_calc(Arr_x1_noise_set_on_obj[_0x3839a7]), aspect_ratio_calc(Arr_y1_noise_set_on_obj[_0x3839a7]), aspect_ratio_calc(Arr_x2_x1_noise_set_on_obj[_0x3839a7]), aspect_ratio_calc(Arr_y2_y1_noise_set_on_obj[_0x3839a7]));
  }
}
function selected_color_in_order() {
  const _0x4b1459 = _0x12f43b;
  if (Arr_monderian_colors_control[_0x4b1459(0x31e)] != arr_monderian_colors[_0x4b1459(0x31e)]) {
    arr_monderian_colors = shuffle(arr_monderian_colors);
    let _0x3ba6ab = ![];
    for (let _0x5c8ca3 = 0x0; _0x5c8ca3 < arr_monderian_colors[_0x4b1459(0x31e)]; _0x5c8ca3++) {
      _0x3ba6ab = Arr_monderian_colors_control[_0x4b1459(0x194)](arr_monderian_colors[_0x5c8ca3]);
      if (!_0x3ba6ab) return Arr_monderian_colors_control[_0x4b1459(0x2dc)](arr_monderian_colors[_0x5c8ca3]), arr_monderian_colors[_0x5c8ca3];
    }
  } else {
    (Arr_monderian_colors_control[_0x4b1459(0x31e)] = []), (arr_monderian_colors = shuffle(arr_monderian_colors));
    let _0x514433 = ![];
    for (let _0x518057 = 0x0; _0x518057 < arr_monderian_colors["length"]; _0x518057++) {
      _0x514433 = Arr_monderian_colors_control["includes"](arr_monderian_colors[_0x518057]);
      if (!_0x514433) return Arr_monderian_colors_control["push"](arr_monderian_colors[_0x518057]), arr_monderian_colors[_0x518057];
    }
  }
}
function border() {
  stroke(0x0), strokeWeight(aspect_ratio_calc(monderian_stroke_w * 0x2)), fill(0x0), rect(0x0, windowSize2D_minXY - aspect_ratio_calc(0x78), windowSize2D_minXY, aspect_ratio_calc(0x1e)), noFill(), stroke(0x0), strokeWeight(aspect_ratio_calc(monderian_stroke_w * 0x2)), rect(0x0, 0x0, windowSize2D_minXY, windowSize2D_minXY), fxpreview();
}
function candel_destile_resized() {
  const _0x12cb85 = _0x12f43b;
  console[_0x12cb85(0x353)](_0x12cb85(0x2ab) + x_p1),
    push(),
    fill(monderian_stroke_color),
    strokeWeight(aspect_ratio_calc(monderian_stroke_w)),
    stroke(monderian_stroke_color),
    rect(windowSize2D_minXY / 0x2 - aspect_ratio_calc2(x_p1) / 0x2, windowSize2D_minXY - aspect_ratio_calc2(floor_rec), aspect_ratio_calc2(x_p1), aspect_ratio_calc2(-hight_p1), aspect_ratio_calc2(D_rect_round), aspect_ratio_calc2(D_rect_round), aspect_ratio_calc2(U_rect_round), aspect_ratio_calc2(U_rect_round)),
    console[_0x12cb85(0x353)](_0x12cb85(0x336) + x_p1),
    rect(windowSize2D_minXY / 0x2 - aspect_ratio_calc2(x_p2) / 0x2, windowSize2D_minXY - aspect_ratio_calc2(floor_rec), aspect_ratio_calc2(x_p2), aspect_ratio_calc2(-hight_p2), 0x0, 0x0, aspect_ratio_calc2(UR_rect_round), aspect_ratio_calc2(0x5)),
    fill(monderian_stroke_color),
    strokeCap(ROUND),
    strokeWeight(aspect_ratio_calc(monderian_stroke_w)),
    line(windowSize2D_minXY / 0x2 - aspect_ratio_calc2(x_p2) / 0x2, windowSize2D_minXY - aspect_ratio_calc2(floor_rec) - aspect_ratio_calc2(hight_p2), windowSize2D_minXY / 0x2 - aspect_ratio_calc2(x_p2) / 0x2 - aspect_ratio_calc2(x2_p3), windowSize2D_minXY - aspect_ratio_calc2(floor_rec) - aspect_ratio_calc2(hight_p2) + aspect_ratio_calc2(y2_p3)),
    strokeCap(PROJECT),
    fill(monderian_stroke_color),
    strokeWeight(aspect_ratio_calc(monderian_stroke_w)),
    stroke(monderian_stroke_color),
    rect(windowSize2D_minXY / 0x2 - aspect_ratio_calc2(x_p2) / 0x2 - aspect_ratio_calc2(x2_p3), windowSize2D_minXY - aspect_ratio_calc2(floor_rec) - aspect_ratio_calc2(hight_p2) + aspect_ratio_calc2(y2_p3), windowSize2D_minXY / 0x2 - aspect_ratio_calc2(x_p2) / 0x2 - (windowSize2D_minXY / 0x2 - aspect_ratio_calc2(x_p2) / 0x2 - aspect_ratio_calc2(x2_p3)), aspect_ratio_calc2(hight_p3), aspect_ratio_calc2(0x5), 0x0, 0x0, 0x0),
    pop(),
    push(),
    translate(windowSize2D_minXY / 0x2, windowSize2D_minXY / 0x2),
    image(pattern, 0x0, 0x0, windowSize2D_minXY, windowSize2D_minXY),
    translate(-windowSize2D_minXY / 0x2, -windowSize2D_minXY / 0x2),
    pop();
}
function candel_thread() {
  const _0x232327 = _0x12f43b;
  randomSeed(seed);
  let _0x366bbf = 0x0,
    _0x868871 = aspect_ratio_calc(0.1);
  noStroke(), (x_f = aspect_ratio_calc(0x172)), (y_f = windowSize2D_minXY - aspect_ratio_calc2(floor_rec + hight_p2) + aspect_ratio_calc(0x19));
  let _0x5cc478 = getRandomArbitrary(0x1, 0x2),
    _0x2d3a7a;
  switch (_0x5cc478) {
    case 0x1:
      _0x2d3a7a = 0x1;
      break;
    default:
      _0x2d3a7a = -0x1;
      break;
  }
  push();
  let _0x5a000a = aspect_ratio_calc(0.3);
  drawingContext[_0x232327(0x1e9)] = _0x232327(0x23c) + _0x5a000a + "px)";
  for (let _0x1eef9d = 0x0; _0x1eef9d < 0x23; _0x1eef9d++) {
    (y_f = y_f - _0x1eef9d * _0x868871), fill(color(Arr_candel_thread_color[_0x1eef9d])), Arr_candel_thread_X[_0x232327(0x2dc)](x_f), Arr_candel_thread_Y[_0x232327(0x2dc)](y_f), ellipse(x_f, y_f, aspect_ratio_calc(0x5)), (_0x366bbf = _0x366bbf + _0x2d3a7a * 0.3);
  }
  pop(), push(), console[_0x232327(0x353)](_0x232327(0x2ad) + round(x_f)), translate(aspect_ratio_calc(0x78), aspect_ratio_calc(0xa));
  let _0x6c20f0,
    _0x4ee9be = flame_model;
  for (let _0x56ecab = 0x0; _0x56ecab < 0x3; _0x56ecab++) {
    zarib = getRandomArbitrary(0x1, 0x2);
    switch (zarib) {
      case 0x1:
        zarib = 0x1;
        break;
      case 0x2:
        zarib = -0x1;
        break;
    }
    (x_tlorance = zarib * getRandomArbitrary(0x0, 0x5)), Arr_fire_data[_0x232327(0x2dc)](x_tlorance);
    switch (_0x4ee9be) {
      case 0x1:
        zarib = getRandomArbitrary(0x1, 0x3);
        switch (zarib) {
          case 0x1:
            _0x6c20f0 = "#c71717";
            break;
          case 0x2:
            _0x6c20f0 = _0x232327(0x22f);
            break;
          case 0x3:
            _0x6c20f0 = _0x232327(0x300);
            break;
        }
        break;
      case 0x2:
        zarib = getRandomArbitrary(0x1, 0x3);
        switch (zarib) {
          case 0x1:
            _0x6c20f0 = _0x232327(0x277);
            break;
          case 0x2:
            _0x6c20f0 = "#e4640f";
            break;
          case 0x3:
            _0x6c20f0 = _0x232327(0x26d);
            break;
        }
        break;
      case 0x3:
        zarib = getRandomArbitrary(0x1, 0x3);
        switch (zarib) {
          case 0x1:
            _0x6c20f0 = _0x232327(0x1b6);
            break;
          case 0x2:
            _0x6c20f0 = _0x232327(0x232);
            break;
          case 0x3:
            _0x6c20f0 = "#d7e445";
            break;
        }
        break;
    }
    Arr_fire_color["push"](_0x6c20f0), console[_0x232327(0x353)](Arr_fire_color[_0x56ecab]), push(), fill(color(_0x6c20f0)), (offset = getRandomArbitrary(0x0, 0x5)), Arr_fire_data[_0x232327(0x2dc)](offset);
    round(aspect_ratio_calc2(x_f)) == 0x16d ? (console[_0x232327(0x353)]("\x20>>>>>\x20365"), (offcet = 0x0)) : (offcet = aspect_ratio_calc(0xa));
    console[_0x232327(0x353)](_0x232327(0x1f0) + round(aspect_ratio_calc2(x_f))),
      Arr_fire_data[_0x232327(0x2dc)](offcet),
      (offset2 = cos(getRandomArbitrary(0x0, 0x16d)) * getRandomArbitrary(aspect_ratio_calc(0x5), aspect_ratio_calc(0xa))),
      (offset3 = sin(getRandomArbitrary(0x0, 0x16d)) * getRandomArbitrary(aspect_ratio_calc(0x5), aspect_ratio_calc(0x28))),
      (offset4 = cos(getRandomArbitrary(0x0, 0x16d)) * getRandomArbitrary(aspect_ratio_calc(0x5), aspect_ratio_calc(0xa))),
      (offset5 = sin(getRandomArbitrary(0x0, 0x16d)) * getRandomArbitrary(aspect_ratio_calc(0x5), aspect_ratio_calc(0x28))),
      (offset6 = cos(getRandomArbitrary(0x0, 0x16d)) * getRandomArbitrary(aspect_ratio_calc(0x5), aspect_ratio_calc(0xa))),
      (offset7 = cos(getRandomArbitrary(0x0, 0x16d)) * getRandomArbitrary(aspect_ratio_calc(0x5), aspect_ratio_calc(0xa))),
      Arr_fire_data[_0x232327(0x2dc)](offset2),
      Arr_fire_data[_0x232327(0x2dc)](offset3),
      Arr_fire_data[_0x232327(0x2dc)](offset4),
      Arr_fire_data["push"](offset5),
      Arr_fire_data[_0x232327(0x2dc)](offset6),
      Arr_fire_data[_0x232327(0x2dc)](offset7);
    let _0x3603c = aspect_ratio_calc2(0x5);
    (drawingContext[_0x232327(0x1e9)] = _0x232327(0x23c) + _0x3603c + _0x232327(0x267)),
      (y_f = windowSize2D_minXY - aspect_ratio_calc2(floor_rec) - aspect_ratio_calc2(hight_p2) - aspect_ratio_calc(0x64)),
      Arr_fire_data[_0x232327(0x2dc)](y_f),
      push(),
      translate(aspect_ratio_calc(0x4b), aspect_ratio_calc(0x4b)),
      beginShape(),
      vertex(aspect_ratio_calc((0xe6 * 0x46) / 0x64) + offcet + offset2, y_f - aspect_ratio_calc((0x91 * 0x46) / 0x64) - offset3),
      bezierVertex(aspect_ratio_calc((0xe6 * 0x46) / 0x64) + offcet + offset2, y_f - aspect_ratio_calc((0x91 * 0x46) / 0x64) - offset3, aspect_ratio_calc((0x140 * 0x46) / 0x64) + offcet + x_tlorance + offset4, y_f - aspect_ratio_calc((0x3c * 0x46) / 0x64) - offset4, aspect_ratio_calc((0xff * 0x46) / 0x64) + x_tlorance + offcet + offset5, y_f - offset5),
      bezierVertex(aspect_ratio_calc((0x118 * 0x46) / 0x64) + x_tlorance + offcet + offset6, y_f - aspect_ratio_calc((0x1e * 0x46) / 0x64) - offset6, aspect_ratio_calc((0xeb * 0x46) / 0x64) + offcet + x_tlorance + offset7, y_f - aspect_ratio_calc((0x69 * 0x46) / 0x64) - offset7, aspect_ratio_calc((0xe6 * 0x46) / 0x64) + offcet + offset2, y_f - aspect_ratio_calc((0x91 * 0x46) / 0x64) - offset3),
      endShape();
    let _0x2b65c1 = aspect_ratio_calc2(0xa);
    (drawingContext[_0x232327(0x1e9)] = _0x232327(0x23c) + _0x2b65c1 + "px)"), beginShape(), vertex(aspect_ratio_calc((0xe6 * 0x46) / 0x64) + offcet, y_f - aspect_ratio_calc((0x91 * 0x46) / 0x64) - x_tlorance), bezierVertex(aspect_ratio_calc((0x122 * 0x46) / 0x64) + offcet, y_f - aspect_ratio_calc((0x37 * 0x46) / 0x64), aspect_ratio_calc((0xf0 * 0x46) / 0x64) + offcet + x_tlorance, y_f - aspect_ratio_calc((0x87 * 0x46) / 0x64), aspect_ratio_calc((0xeb * 0x46) / 0x64) + offcet + x_tlorance, y_f), bezierVertex(aspect_ratio_calc((0xb4 * 0x46) / 0x64) + offcet + x_tlorance, y_f - aspect_ratio_calc((0x23 * 0x46) / 0x64), aspect_ratio_calc((0xe6 * 0x46) / 0x64) + offcet + x_tlorance, y_f - aspect_ratio_calc((0x69 * 0x46) / 0x64), aspect_ratio_calc((0xe6 * 0x46) / 0x64) + offcet, y_f - aspect_ratio_calc((0x91 * 0x46) / 0x64) - x_tlorance), endShape(), console["log"](_0x232327(0x2b5) + (0x7 + _0x56ecab * 0xa) + "\x20:\x20" + offset6), pop(), pop();
  }
  translate(-aspect_ratio_calc(0x78), -aspect_ratio_calc(0xa)), pop();
}
function candel_thread_resize() {
  const _0x49e8ed = _0x12f43b;
  randomSeed(seed), push();
  let _0x43e0b4 = aspect_ratio_calc(0.3);
  drawingContext[_0x49e8ed(0x1e9)] = _0x49e8ed(0x23c) + _0x43e0b4 + _0x49e8ed(0x267);
  for (let _0x43c6d8 = 0x0; _0x43c6d8 < Arr_candel_thread_X[_0x49e8ed(0x31e)]; _0x43c6d8++) {
    fill(color(Arr_candel_thread_color[_0x43c6d8])), noStroke(), ellipse(aspect_ratio_calc2(Arr_candel_thread_X[_0x43c6d8]), aspect_ratio_calc2(Arr_candel_thread_Y[_0x43c6d8]), aspect_ratio_calc(0x5));
  }
  pop(), push();
  for (let _0x22dae8 = 0x0; _0x22dae8 < 0x3; _0x22dae8++) {
    (x_tlorance = aspect_ratio_calc2(Arr_fire_data[0x0 + _0x22dae8 * 0xa])), noStroke(), fill(color(Arr_fire_color[_0x22dae8])), (offset = aspect_ratio_calc2(Arr_fire_data[0x1 + _0x22dae8 * 0xa])), (offcet = aspect_ratio_calc2(Arr_fire_data[0x2 + _0x22dae8 * 0xa])), (offset2 = aspect_ratio_calc2(Arr_fire_data[0x3 + _0x22dae8 * 0xa])), (offset3 = aspect_ratio_calc2(Arr_fire_data[0x4 + _0x22dae8 * 0xa])), (offset4 = aspect_ratio_calc2(Arr_fire_data[0x5 + _0x22dae8 * 0xa])), (offset5 = aspect_ratio_calc2(Arr_fire_data[0x6 + _0x22dae8 * 0xa])), (offset6 = aspect_ratio_calc2(Arr_fire_data[0x7 + _0x22dae8 * 0xa])), (offset7 = aspect_ratio_calc2(Arr_fire_data[0x8 + _0x22dae8 * 0xa])), console[_0x49e8ed(0x353)](_0x49e8ed(0x2b5) + (0x7 + _0x22dae8 * 0xa) + _0x49e8ed(0x286) + offset6);
    let _0x2cc468 = aspect_ratio_calc2(0x5);
    (drawingContext["filter"] = _0x49e8ed(0x23c) + _0x2cc468 + _0x49e8ed(0x267)),
      (y_f = aspect_ratio_calc2(Arr_fire_data[0x9 + _0x22dae8 * 0xa])),
      push(),
      translate(aspect_ratio_calc(0xc3), aspect_ratio_calc(0x55)),
      beginShape(),
      vertex(aspect_ratio_calc((0xe6 * 0x46) / 0x64) + offcet + offset2, y_f - aspect_ratio_calc((0x91 * 0x46) / 0x64) - offset3),
      bezierVertex(aspect_ratio_calc((0xe6 * 0x46) / 0x64) + offcet + offset2, y_f - aspect_ratio_calc((0x91 * 0x46) / 0x64) - offset3, aspect_ratio_calc((0x140 * 0x46) / 0x64) + offcet + x_tlorance + offset4, y_f - aspect_ratio_calc((0x3c * 0x46) / 0x64) - offset4, aspect_ratio_calc((0xff * 0x46) / 0x64) + x_tlorance + offcet + offset5, y_f - offset5),
      bezierVertex(aspect_ratio_calc((0x118 * 0x46) / 0x64) + x_tlorance + offcet + offset6, y_f - aspect_ratio_calc((0x1e * 0x46) / 0x64) - offset6, aspect_ratio_calc((0xeb * 0x46) / 0x64) + offcet + x_tlorance + offset7, y_f - aspect_ratio_calc((0x69 * 0x46) / 0x64) - offset7, aspect_ratio_calc((0xe6 * 0x46) / 0x64) + offcet + offset2, y_f - aspect_ratio_calc((0x91 * 0x46) / 0x64) - offset3),
      endShape();
    let _0x395a16 = aspect_ratio_calc2(0xa);
    (drawingContext["filter"] = "blur(" + _0x395a16 + _0x49e8ed(0x267)), beginShape(), vertex(aspect_ratio_calc((0xe6 * 0x46) / 0x64) + offcet, y_f - aspect_ratio_calc((0x91 * 0x46) / 0x64) - x_tlorance), bezierVertex(aspect_ratio_calc((0x122 * 0x46) / 0x64) + offcet, y_f - aspect_ratio_calc((0x37 * 0x46) / 0x64), aspect_ratio_calc((0xf0 * 0x46) / 0x64) + offcet + x_tlorance, y_f - aspect_ratio_calc((0x87 * 0x46) / 0x64), aspect_ratio_calc((0xeb * 0x46) / 0x64) + offcet + x_tlorance, y_f), bezierVertex(aspect_ratio_calc((0xb4 * 0x46) / 0x64) + offcet + x_tlorance, y_f - aspect_ratio_calc((0x23 * 0x46) / 0x64), aspect_ratio_calc((0xe6 * 0x46) / 0x64) + offcet + x_tlorance, y_f - aspect_ratio_calc((0x69 * 0x46) / 0x64), aspect_ratio_calc((0xe6 * 0x46) / 0x64) + offcet, y_f - aspect_ratio_calc((0x91 * 0x46) / 0x64) - x_tlorance), endShape(), pop();
  }
  pop();
}
