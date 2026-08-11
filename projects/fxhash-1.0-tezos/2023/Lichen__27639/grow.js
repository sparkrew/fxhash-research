function grow(mx, my, nu, tdiv, tdivx, tdivy) {
  lm.noStroke();
  if (features.overlap == "Yes" && random() < 0.2) grid();
  newx = int(random(12, tdivx - 12));
  newy = int(random(12, tdivy - 12));
  lm.translate(c[newx][newy].x, c[newx][newy].y);
  if (b[newx][newy] != 0 && a[newx][newy] != 0 && b[newx][newy] != 1)
    square(-tdiv / 2, -tdiv / 2, tdiv);
  lm.translate(-c[newx][newy].x, -c[newx][newy].y);
  for (let k = 0; k < nu; k++) {
    if (newx > 1 && newx < tdivx - 2 && newy > 1 && newy < tdivy - 2) {
      lm.translate(c[newx][newy].x, c[newx][newy].y);
      b[newx][newy] = 0;
      newx1 = newx - 1;
      newx2 = newx;
      newx3 = newx + 1;
      newx4 = newx;
      newy1 = newy;
      newy2 = newy - 1;
      newy3 = newy;
      newy4 = newy + 1;
      if (
        b[newx1][newy1] != 0 &&
        b[newx1][newy1 + 1] != 0 &&
        b[newx1 - 1][newy1 + 1] != 0 &&
        b[newx1 - 1][newy1] != 0 &&
        b[newx1 - 1][newy1 - 1] != 0 &&
        b[newx1][newy1 - 1] != 0
      ) {
        lm.square((-tdiv * 3) / 2, -tdiv / 2, tdiv);
        b[newx1][newy1] = 0;
      } else {
        if (b[newx1][newy1] != 0) b[newx1][newy1] = 1;
        a[newx1][newy1] = 0;
      }
      if (
        b[newx2][newy2] != 0 &&
        b[newx2 - 1][newy2] != 0 &&
        b[newx2 - 1][newy2 - 1] != 0 &&
        b[newx2][newy2 - 1] != 0 &&
        b[newx2 + 1][newy2 - 1] != 0 &&
        b[newx2 + 1][newy2] != 0
      ) {
        lm.square(-tdiv / 2, (-tdiv * 3) / 2, tdiv);
        b[newx2][newy2] = 0;
      } else {
        if (b[newx2][newy2] != 0) b[newx2][newy2] = 1;
        a[newx2][newy2] = 0;
      }
      if (
        b[newx3][newy3] != 0 &&
        b[newx3][newy3 - 1] != 0 &&
        b[newx3 + 1][newy3 - 1] != 0 &&
        b[newx3 + 1][newy3] != 0 &&
        b[newx3 + 1][newy3 + 1] != 0 &&
        b[newx3][newy3 + 1] != 0
      ) {
        lm.square(tdiv / 2, -tdiv / 2, tdiv);
        b[newx3][newy3] = 0;
      } else {
        if (b[newx3][newy3] != 0) b[newx3][newy3] = 1;
        a[newx3][newy3] = 0;
      }
      if (
        b[newx4][newy4] != 0 &&
        b[newx4 + 1][newy4] != 0 &&
        b[newx4 + 1][newy4 + 1] != 0 &&
        b[newx4][newy4 + 1] != 0 &&
        b[newx4 - 1][newy4 + 1] != 0 &&
        b[newx4 - 1][newy4] != 0
      ) {
        lm.square(-tdiv / 2, tdiv / 2, tdiv);
        b[newx4][newy4] = 0;
      } else {
        if (b[newx4][newy4] != 0) b[newx4][newy4] = 1;
        a[newx4][newy4] = 0;
      }
      lm.translate(-c[newx][newy].x, -c[newx][newy].y);
      if (b[newx1][newy1] == 0 && a[newx1][newy1] != 0 && random() < limh) {
        nc.push(c[newx1][newy1]);
      }
      if (b[newx2][newy2] == 0 && a[newx2][newy2] != 0 && random() < limv) {
        nc.push(c[newx2][newy2]);
      }
      if (b[newx3][newy3] == 0 && a[newx3][newy3] != 0 && random() < limh) {
        nc.push(c[newx3][newy3]);
      }
      if (b[newx4][newy4] == 0 && a[newx4][newy4] != 0 && random() < limv) {
        nc.push(c[newx4][newy4]);
      }
    }
    nsh = shuffle(nc);
    if (nsh.length > 0) {
      newx = nsh[0].x / tdiv - 0.5;
      newy = nsh[0].y / tdiv - 0.5;
      nshn = [];
      for (let i = 1; i < nsh.length; i++) {
        nshn.push(nsh[i]);
      }
      nc = nshn;
    }
  }
}

function llgrow(mx, my, nu, tdiv, tdivx, tdivy) {
  ll.noStroke();
  if (mc == "yes") {
    newx = mx;
    newy = my;
  } else {
    newx = int(random(12, tdivx - 12));
    newy = int(random(12, tdivy - 12));
  }
  ll.translate(c[newx][newy].x, c[newx][newy].y);
  if (b[newx][newy] != 0 && a[newx][newy] != 0 && b[newx][newy] != 1)
    ll.square(-tdiv / 2, -tdiv / 2, tdiv);
  ll.translate(-c[newx][newy].x, -c[newx][newy].y);
  for (let k = 0; k < nu; k++) {
    if (newx > 2 && newx < tdivx - 2 && newy > 2 && newy < tdivy - 2) {
      ll.translate(c[newx][newy].x, c[newx][newy].y);
      b[newx][newy] = 0;
      newx1 = newx - 1;
      newx2 = newx;
      newx3 = newx + 1;
      newx4 = newx;
      newy1 = newy;
      newy2 = newy - 1;
      newy3 = newy;
      newy4 = newy + 1;
      if (
        b[newx1][newy1] != 0 &&
        b[newx1][newy1 + 1] != 0 &&
        b[newx1 - 1][newy1 + 1] != 0 &&
        b[newx1 - 1][newy1] != 0 &&
        b[newx1 - 1][newy1 - 1] != 0 &&
        b[newx1][newy1 - 1] != 0
      ) {
        ll.square((-tdiv * 3) / 2, -tdiv / 2, tdiv);
        b[newx1][newy1] = 0;
      } else {
        if (b[newx1][newy1] != 0) b[newx1][newy1] = 1;
        a[newx1][newy1] = 0;
      }
      if (
        b[newx2][newy2] != 0 &&
        b[newx2 - 1][newy2] != 0 &&
        b[newx2 - 1][newy2 - 1] != 0 &&
        b[newx2][newy2 - 1] != 0 &&
        b[newx2 + 1][newy2 - 1] != 0 &&
        b[newx2 + 1][newy2] != 0
      ) {
        ll.square(-tdiv / 2, (-tdiv * 3) / 2, tdiv);
        b[newx2][newy2] = 0;
      } else {
        if (b[newx2][newy2] != 0) b[newx2][newy2] = 1;
        a[newx2][newy2] = 0;
      }
      if (
        b[newx3][newy3] != 0 &&
        b[newx3][newy3 - 1] != 0 &&
        b[newx3 + 1][newy3 - 1] != 0 &&
        b[newx3 + 1][newy3] != 0 &&
        b[newx3 + 1][newy3 + 1] != 0 &&
        b[newx3][newy3 + 1] != 0
      ) {
        ll.square(tdiv / 2, -tdiv / 2, tdiv);
        b[newx3][newy3] = 0;
      } else {
        if (b[newx3][newy3] != 0) b[newx3][newy3] = 1;
        a[newx3][newy3] = 0;
      }
      if (
        b[newx4][newy4] != 0 &&
        b[newx4 + 1][newy4] != 0 &&
        b[newx4 + 1][newy4 + 1] != 0 &&
        b[newx4][newy4 + 1] != 0 &&
        b[newx4 - 1][newy4 + 1] != 0 &&
        b[newx4 - 1][newy4] != 0
      ) {
        ll.square(-tdiv / 2, tdiv / 2, tdiv);
        b[newx4][newy4] = 0;
      } else {
        if (b[newx4][newy4] != 0) b[newx4][newy4] = 1;
        a[newx4][newy4] = 0;
      }
      ll.translate(-c[newx][newy].x, -c[newx][newy].y);
      if (b[newx1][newy1] == 0 && a[newx1][newy1] != 0 && random() < lilh) {
        nc.push(c[newx1][newy1]);
      }
      if (b[newx2][newy2] == 0 && a[newx2][newy2] != 0 && random() < lilv) {
        nc.push(c[newx2][newy2]);
      }
      if (b[newx3][newy3] == 0 && a[newx3][newy3] != 0 && random() < lilh) {
        nc.push(c[newx3][newy3]);
      }
      if (b[newx4][newy4] == 0 && a[newx4][newy4] != 0 && random() < lilv) {
        nc.push(c[newx4][newy4]);
      }
    }
    nsh = shuffle(nc);
    if (nsh.length > 0) {
      newx = nsh[0].x / tdiv - 0.5;
      newy = nsh[0].y / tdiv - 0.5;
      nshn = [];
      for (let i = 1; i < nsh.length; i++) {
        nshn.push(nsh[i]);
      }
      nc = nshn;
    }
  }
}
function lngrow(mx, my, nu, tdiv, tdivx, tdivy) {
  ln.noStroke();
  lim = random(0.2, 0.7);
  newx = mx;
  newy = my;
  ln.translate(c[newx][newy].x, c[newx][newy].y);
  if (b[newx][newy] != 0 && a[newx][newy] != 0 && b[newx][newy] != 1)
    square(-tdiv / 2, -tdiv / 2, tdiv);
  ln.translate(-c[newx][newy].x, -c[newx][newy].y);
  for (let k = 0; k < nu; k++) {
    if (newx > 1 && newx < tdivx - 2 && newy > 1 && newy < tdivy - 2) {
      ln.translate(c[newx][newy].x, c[newx][newy].y);
      b[newx][newy] = 0;
      newx1 = newx - 1;
      newx2 = newx;
      newx3 = newx + 1;
      newx4 = newx;
      newy1 = newy;
      newy2 = newy - 1;
      newy3 = newy;
      newy4 = newy + 1;
      if (
        b[newx1][newy1] != 0 &&
        b[newx1][newy1 + 1] != 0 &&
        b[newx1 - 1][newy1 + 1] != 0 &&
        b[newx1 - 1][newy1] != 0 &&
        b[newx1 - 1][newy1 - 1] != 0 &&
        b[newx1][newy1 - 1] != 0
      ) {
        ln.square((-tdiv * 3) / 2, -tdiv / 2, tdiv);
        b[newx1][newy1] = 0;
      } else {
        if (b[newx1][newy1] != 0) b[newx1][newy1] = 1;
        a[newx1][newy1] = 0;
      }
      if (
        b[newx2][newy2] != 0 &&
        b[newx2 - 1][newy2] != 0 &&
        b[newx2 - 1][newy2 - 1] != 0 &&
        b[newx2][newy2 - 1] != 0 &&
        b[newx2 + 1][newy2 - 1] != 0 &&
        b[newx2 + 1][newy2] != 0
      ) {
        ln.square(-tdiv / 2, (-tdiv * 3) / 2, tdiv);
        b[newx2][newy2] = 0;
      } else {
        if (b[newx2][newy2] != 0) b[newx2][newy2] = 1;
        a[newx2][newy2] = 0;
      }
      if (
        b[newx3][newy3] != 0 &&
        b[newx3][newy3 - 1] != 0 &&
        b[newx3 + 1][newy3 - 1] != 0 &&
        b[newx3 + 1][newy3] != 0 &&
        b[newx3 + 1][newy3 + 1] != 0 &&
        b[newx3][newy3 + 1] != 0
      ) {
        ln.square(tdiv / 2, -tdiv / 2, tdiv);
        b[newx3][newy3] = 0;
      } else {
        if (b[newx3][newy3] != 0) b[newx3][newy3] = 1;
        a[newx3][newy3] = 0;
      }
      if (
        b[newx4][newy4] != 0 &&
        b[newx4 + 1][newy4] != 0 &&
        b[newx4 + 1][newy4 + 1] != 0 &&
        b[newx4][newy4 + 1] != 0 &&
        b[newx4 - 1][newy4 + 1] != 0 &&
        b[newx4 - 1][newy4] != 0
      ) {
        ln.square(-tdiv / 2, tdiv / 2, tdiv);
        b[newx4][newy4] = 0;
      } else {
        if (b[newx4][newy4] != 0) b[newx4][newy4] = 1;
        a[newx4][newy4] = 0;
      }
      ln.translate(-c[newx][newy].x, -c[newx][newy].y);
      if (b[newx1][newy1] == 0 && a[newx1][newy1] != 0 && random() < linh) {
        nc.push(c[newx1][newy1]);
      }
      if (b[newx2][newy2] == 0 && a[newx2][newy2] != 0 && random() < linv) {
        nc.push(c[newx2][newy2]);
      }
      if (b[newx3][newy3] == 0 && a[newx3][newy3] != 0 && random() < linh) {
        nc.push(c[newx3][newy3]);
      }
      if (b[newx4][newy4] == 0 && a[newx4][newy4] != 0 && random() < linv) {
        nc.push(c[newx4][newy4]);
      }
    }
    nsh = shuffle(nc);
    if (nsh.length > 0) {
      newx = nsh[0].x / tdiv - 0.5;
      newy = nsh[0].y / tdiv - 0.5;
      nshn = [];
      for (let i = 1; i < nsh.length; i++) {
        nshn.push(nsh[i]);
      }
      nc = nshn;
    }
  }
}
