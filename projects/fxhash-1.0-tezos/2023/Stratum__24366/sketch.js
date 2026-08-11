const colorPaletteStrings = [
  "c1b098-e9d2f4-9b9b93-39393a-63b0cd",
  "5c415d-694966-74526c-dbd053-c89933",
  "4c1a57-ff3cc7-f0f600-00e5e8-007c77",
  "462255-313b72-62a87c-7ee081-c3f3c0",
  "d3f8e2-e4c1f9-f694c1-ede7b1-a9def9",
  "fefeff-d6efff-fed18c-fed99b-fe654f",
  "072ac8-1e96fc-a2d6f9-fcf300-ffc600",
  "eaf0ce-c0c5c1-7d8491-574b60-3f334d",
  "0b132b-1c2541-3a506b-5bc0be-#FEFEFF",
  "582707-972d07-ff4b3e-ffb20f-ffe548",
  "080f0f-a4bab7-eff2c0-bea57d-a52422",
  "313715-d16014-939f5c-bbce8a-e2f9b8",
  "61a0af-96c9dc-f06c9b-f9b9b7-f5d491",
  "ef476f-ffd166-06d6a0-118ab2-073b4c",
  "2c1320-5f4b66-a7adc6-8797af-56667a",
  "d6f8d6-7fc6a4-5d737e-55505c-faf33e",
  "4059ad-6b9ac4-97d8c4-eff2f1-f4b942",
  "585123-eec170-f2a65a-f58549-772f1a",
  "0d1f22-264027-3c5233-6f732f-b38a58",
  "55dde0-33658a-2f4858-f6ae2d-f26419",
  "edf67d-f896d8-ca7df9-724cf9-564592",
  "fff275-ff8c42-ff3c38-a23e48-6c8ead",
  "1f2421-216869-49a078-9cc5a1-dce1de",
  "160c28-efcb68-e1efe6-aeb7b3-000411",
  "d33f49-d7c0d0-eff0d1-77ba99-262730",
  "020202-0d324d-7f5a83-a188a6-9da2ab",
  "f3b700-faa300-e57c04-ff6201-f63e02",
  "1446a0-db3069-f5d547-ebebd3-3c3c3b",
  "ffbe0b-fb5607-ff006e-8338ec-3a86ff",
  "442b48-726e60-98b06f-b6dc76-dbff76",
  "000000-14213d-fca311-e5e5e5-fffafb",
  "540d6e-ee4266-ffd23f-3bceac-0ead69",
  "565554-2e86ab-f6f5ae-f5f749-f24236",
  "133c55-386fa4-59a5d8-84d2f6-91e5f6",
  "a54657-582630-f7ee7f-f1a66a-f26157",
  "131515-2b2c28-339989-7de2d1-fffafb",
  "32213a-383b53-66717e-d4d6b9-d1caa1",
  "2b2d42-92dce5-f8f7f9-f7ec59-ff66d8",
  "83781b-95b46a-709255-3e5622-172815",
  "221d23-4f3824-d1603d-ddb967-d0e37f",
  "1b998b-2d3047-fffd82-ff9b71-e84855",
  "7c9eb2-52528c-372554-231123-000000",
  "f8c7cc-81a684-57886c-466060-0e0f19",
  "d72638-3f88c5-f49d37-140f2d-f22b29",
  "333333-666a86-95b8d1-e8ddb5-edafb8",
  "e0e2db-d2d4c8-b8bdb5-889696-5f7470",
  "721121-a5402d-f15156-ffc07f-ffcf99",
  "60463b-856a5d-ccc9e7-6c6f7d-2e3138",
  "095256-087f8c-5aaa95-86a873-bb9f06",
  "dbcdc6-ead7d1-dd99bb-7b506f-1f1a38",
  "420039-932f6d-e07be0-dcccff-f6f2ff",
  "540d6e-ee4266-ffd23f-f3fcf0-1f271b",
  "f7b267-f79d65-f4845f-f27059-f25c54",
  "6f1d1b-bb9457-432818-99582a-ffe6a7",
  "bfd7ea-91aec1-508ca4-0a8754-004f2d",
  "03045e-0077b6-00b4d8-90e0ef-caf0f8",
  "ff6b35-f7c59f-efefd0-004e89-1a659e",
  "f0a202-f18805-d95d39-202c59-581f18",
  "e2c2c6-b9929f-9c528b-610f7f-2f0147",
  "17bebb-2e282a-cd5334-edb88b-fad8d6",
  "b3001b-262626-255c99-7ea3cc-ccad8f",
  "8ea604-f5bb00-ec9f05-d76a03-bf3100",
  "d6c3c9-b49082-98473e-a37c40-07090f",
  "001219-005f73-0a9396-94d2bd-e9d8a6-ee9b00-ca6702-bb3e03-ae2012-9b2226",
  "582f0e-7f4f24-936639-a68a64-b6ad90-c2c5aa-a4ac86-656d4a-414833-333d29",
  "7400b8-6930c3-5e60ce-5390d9-4ea8de-48bfe3-56cfe1-64dfdf-72efdd-80ffdb",
  "006466-065a60-0b525b-144552-1b3a4b-212f45-272640-312244-3e1f47-4d194d",
];

let colorPalette;
let bgColor;
let frameColor = "#ffffff";
let sinOff = 0;

function setup() {
  a = fxrand() * 9999999999999
  noiseSeed(a);
  createCanvas(1600, 2400);
  colorMode(HSB, 360, 100, 100, 100);
  pixelDensity(2);
  angleMode(DEGREES);
  const firstFrameSize = (width > height) ? height * 0.05 : width * 0.05;
  colorPalette = colorPaletteStrings[Math.floor(fxrand() * colorPaletteStrings.length)].split("-").map((color) => "#" + color);
  bgColor = colorPalette[Math.floor(fxrand() * colorPalette.length)];
  generateBackground();
}

function draw() {
  let frameSize = width / 25;
  fill(frameColor);
  rect(0, 0, width, frameSize);
  rect(0, height - frameSize, width, frameSize);
  rect(0, 0, frameSize, height);
  rect(width - frameSize, 0, frameSize, height);
  let sinVal = sin(sinOff);
  sinVal = map(sinVal, -1, 1, -frameSize / 2, frameSize / 2);
  rect(0, sinVal, width, frameSize / 2);
  rect(0, height - frameSize / 2 + sinVal, width, frameSize / 2);
  rect(sinVal, 0, frameSize / 2, height);
  rect(width - frameSize / 2 + sinVal, 0, frameSize / 2, height);
  sinOff += 1;
}

function generateBackground() {
  strokeWeight(0);
  scale(1);
  fill(bgColor)
  rect(0, 0, width, height)

  for (let row = -1 * (width / 36); row < height + (width / 50); row += 1) {
    const randColor1 = colorPalette[Math.floor(fxrand() * colorPalette.length)];
    const randColor2 = colorPalette[Math.floor(fxrand() * colorPalette.length)];
    push();
    translate(0, row);

    const noiseValue = noise(row / (width / 40));
    fill(lerpColor(color(randColor1), color(randColor2), noiseValue));

    beginShape();
    let y2;
    let angle = fxrand() * 360;
    let noiseScale = 44 + (fxrand() * 200);
    for (let i = 0; i < 2000; i += 36) {
      let noiseX = i / noiseScale;
      let noiseY = angle / noiseScale;
      let noiseValue = noise(noiseX, noiseY);
      let shapeSize = map(noiseValue, 0, 1, 0, width / 20);
      let shapeRotation = noiseValue * 360 + (-45 + (fxrand() * 45));
      let shapeColor = color(lerpColor(color(randColor1), color(randColor2), noiseValue));
      push();
      translate(i, height / 2);
      rotate(shapeRotation);
      fill(shapeColor);
      switch (int(fxrand() * 3)) {
        case 0:
          ellipse(0, 0, shapeSize, shapeSize);
          break;
        case 1:
          rect(0, 0, shapeSize, shapeSize);
          break;
        case 2:
          triangle(0, 0, shapeSize, 0, shapeSize / 2, shapeSize);
          break;
      }
      pop();
      angle += 0.1;
    }
  }
}

function keyPressed() {
  if (key == 's') {
    save("save.png");
  } else if (key == 'r') {
    frameColor = colorPalette[Math.floor(Math.random() * colorPalette.length)];
  } else if (key == 'w') {
    frameColor = "#ffffff";
  }
}
