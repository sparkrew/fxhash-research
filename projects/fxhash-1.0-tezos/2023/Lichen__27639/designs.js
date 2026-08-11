function lichen(mx, my) {
  a = ba;
  b = bb;
  c = bc;
  for (let p = 0; p < 3; p++) {
    colsh = shuffle(colours);
    lm.fill(colsh[2]);
    if (mc == "yes") nc = [];
    mn = int(random(800, 7000));
    grow(mx, my, mn, divw, divx, divy);
    lm.fill(colsh[3]);
    mn = int(random(800, 7000));
    if (random() < 0.25) nc = [];
    grow(mx, my, mn, divw, divx, divy);
    lm.fill(colsh[4]);
    mn = int(random(800, 7000));
    if (random() < 0.35) nc = [];
    grow(mx, my, mn, divw, divx, divy);
    lm.fill(colsh[5]);
    mn = int(random(800, 7000));
    if (random() < 0.35) nc = [];
    grow(mx, my, mn, divw, divx, divy);
    lm.fill(colsh[6]);
    mn = int(random(800, 7000));
    if (random() < 0.35) nc = [];
    grow(mx, my, mn, divw, divx, divy);
    lm.fill(colsh[7]);
    mn = int(random(800, 7000));
    if (random() < 0.35) nc = [];
    grow(mx, my, mn, divw, divx, divy);
    lm.fill(colsh[1]);
    mn = int(random(800, 7000));
    if (random() < 0.35) nc = [];
    grow(mx, my, mn, divw, divx, divy);
    lm.fill(colsh[8]);
    mn = int(random(800, 7000));
    if (random() < 0.35) nc = [];
    grow(mx, my, mn, divw, divx, divy);
  }
}
function llichen(mx, my) {
  ll = createGraphics(csw, csh);
  a = ba;
  b = bb;
  c = bc;
  colsh = shuffle(colours);
  ll.fill(colsh[2]);
  if (mc == "yes") nc = [];
  mn = int(random(800, 7000));
  llgrow(mx, my, mn, divw, divx, divy);
  ll.fill(colsh[3]);
  mn = int(random(800, 7000));
  if (random() < 0.05) nc = [];
  llgrow(mx, my, mn, divw, divx, divy);
  ll.fill(colsh[4]);
  mn = int(random(800, 7000));
  if (random() < 0.35) nc = [];
  llgrow(mx, my, mn, divw, divx, divy);
  ll.fill(colsh[5]);
  mn = int(random(800, 7000));
  if (random() < 0.35) nc = [];
  llgrow(mx, my, mn, divw, divx, divy);
  ll.fill(colsh[6]);
  mn = int(random(800, 7000));
  if (random() < 0.35) nc = [];
  llgrow(mx, my, mn, divw, divx, divy);
  ll.fill(colsh[7]);
  mn = int(random(800, 7000));
  if (random() < 0.35) nc = [];
  llgrow(mx, my, mn, divw, divx, divy);
  ll.fill(colsh[1]);
  mn = int(random(800, 7000));
  if (random() < 0.35) nc = [];
  llgrow(mx, my, mn, divw, divx, divy);
  ll.fill(colsh[8]);
  mn = int(random(800, 7000));
  if (random() < 0.35) nc = [];
  llgrow(mx, my, mn, divw, divx, divy);
  image(ll, 0, 0);
}
function lngrowth() {
  a = ba;
  b = bb;
  c = bc;
  nc = [];
  mx = int((csw * random()) / divw);
  my = int((csh * random()) / divw);
  ln.fill(colsh[int(random(8))]);
  nu = int(random(800, 7000));
  lngrow(mx, my, nu, divw, divx, divy);
  ln.fill(colsh[int(random(8))]);
  nu = int(random(800, 7000));
  lngrow(mx, my, nu, divw, divx, divy);
  mx = int((csw * random()) / divw);
  my = int((csh * random()) / divw);
}

function lichenback() {
  fc = random();
  if (fc <= 0.01) {
    mx = int(csw / (2 * bivw));
    my = int(csh / (2 * bivw));
    mc = "yes";
    lm.background(bk1);
    lm.stroke(bk2);
    lm.fill(bk2);
    grow(mx, my, 10000, bivw, bivx, bivy);
    mc = "no";
  }
  if (fc > 0.01) {
    mc = "yes";
    lm.background(bk1);
    lm.stroke(bk2);
    lm.fill(bk2);
    for (let i = 0; i < 3; i++) {
      mx = int((csw * random()) / bivw);
      my = int((csh * random()) / bivw);
      grow(mx, my, 5000, bivw, bivx, bivy);
    }
    mc = "no";
  }
}
