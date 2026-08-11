let cols;
let colsBG;

var cb;

window.onload = function () {
  setup()
  draw()
};

function setup() {

	let seed = $fx.rand()
	noiseSeed(seed);

	cols = ColorBox(cb);
	bgColIndex = Math.floor($fx.rand() * cols.length)
	cols.splice(bgColIndex, 1);

	colsBG = ColorBox(cb);
	bgColIndex = Math.floor($fx.rand() * colsBG.length)
	colsBG.splice(bgColIndex, 1);

	var area = min(windowWidth, windowHeight);
	createCanvas(area, area);

	noFill();

	background(colsBG[Math.floor($fx.rand() * colsBG.length)]);

}

function draw() {

	var area = min(windowWidth, windowHeight);

	for (var n = 0; n <= 600; n++) {

		var stroke_color = cols[Math.floor($fx.rand() * cols.length)]
		var shadowColor = colsBG[Math.floor($fx.rand() * colsBG.length)]

		while (stroke_color == shadowColor) {
			stroke_color = cols[Math.floor($fx.rand() * cols.length)]
		}


		drawingContext.shadowBlur = floor(3 + $fx.rand() * 5); //シャドウのサイズの大きさ
		drawingContext.shadowOffsetX = 0; //X軸正方向へのズレ
		drawingContext.shadowOffsetY = 0; //Y軸正方向へのズレ
		drawingContext.shadowColor = color(shadowColor); //シャドウの色
		
		stroke(stroke_color);
		
		var mar = 1
		var x = floor(area / mar + $fx.rand() * (area * (mar - 1) / mar - area / mar))
		var y = floor(area / mar + $fx.rand() * (area * (mar - 1) / mar - area / mar))

		var angle_start = floor($fx.rand() *  TWO_PI);
		var angle_end = angle_start + floor(PI * 1.5 + $fx.rand() * (TWO_PI - PI * 1.5));

		var number_circle = int(30 + $fx.rand() * 20);

		for (let i = 0; i < number_circle; i++) {

			strokeWeight(int(1 + $fx.rand() * 4));

			var gapX = floor(6 + $fx.rand() * 10)
			var gapY = floor(6 + $fx.rand() * 10)

			var rad = floor(area * (0.05 + $fx.rand() * 0.15));

			var arcX = x + floor(-gapX + $fx.rand() * gapX * 2)
			var arcY = y + floor(-gapY + $fx.rand() * gapY * 2)

			arc(
				arcX,
				arcY,
				rad,
				rad,
				angle_start,
				angle_end,
			);
		}
	}
	noLoop();
}
	
//--------------------------------------------

function ColorBox(cb) {

	var cb_array = [
		"f8ffe5-06d6a0-1b9aaa-ef476f-ffc43d",
		"ff6f59-254441-43aa8b-b2b09b-ef3054",
		"e53d00-ffe900-fcfff7-21a0a0-046865",
		"f2dc5d-f2a359-db9065-a4031f-240b36",
		"12355b-420039-d72638-ffffff-ff570a",
		"cae7b9-f3de8a-eb9486-7e7f9a-97a7b3",
		"022b3a-1f7a8c-bfdbf7-e1e5f2-ffffff",
		"c1aba6-533b4d-f564a9-faa4bd-fae3c6",
		"dd7373-3b3561-ead94c-d1d1d1-51a3a3",
		"266dd3-344055-888098-cfb3cd-dfc2f2",

		"2b303a-92dce5-eee5e9-7c7c7c-d64933",
		"44ffd1-6153cc-a60067-961d4e-360a14",
		"c33c54-254e70-37718e-8ee3ef-aef3e7",
		"ecebe4-cc998d-16f4d0-429ea6-153b50",
		"23f0c7-ef767a-7d7abc-6457a6-ffe347",
		"0a122a-698f3f-fbfaf8-e7decd-804e49",
		"ff8360-e8e288-7dce82-3cdbd3-00fff5",
		"fb5012-01fdf6-cbbaed-e9df00-03fcba",
		"321325-5f0f40-9a031e-cb793a-fcdc4d",
		"7fb069-fffbbd-e6aa68-ca3c25-1d1a05",

		"00fddc-2e5339-495f41-ff5666-ffccc9",
		"0d1321-ffeddf-c5d86d-86615c-afe0ce",
		"2b303a-92dce5-eee5e9-7c7c7c-d64933",
		"04e762-f5b700-00a1e4-dc0073-89fc00",
		"07004d-2d82b7-42e2b8-f3dfbf-eb8a90",
		"463f1a-60492c-f9ebe0-208aae-0d2149",
		"631d76-9e4770-fbfbfb-2e2532-201a23",
		"ff595e-ffca3a-8ac926-1982c4-6a4c93",
		"a57548-fcd7ad-f6c28b-5296a5-82ddf0",
		"221d23-4f3824-d1603d-ddb967-d0e37f",

		"f7c1bb-885a5a-353a47-84b082-dc136c",
		"160c28-efcb68-e1efe6-aeb7b3-000411",
		"9ad5ca-acdde7-adb9e3-a379c9-b744b8",
		"5fad56-f2c14e-f78154-4d9078-b4436c",
		"b8d8d8-7a9e9f-4f6367-eef5db-fe5f55",
		"0081a7-00afb9-fdfcdc-fed9b7-f07167",
		"084b83-42bfdd-bbe6e4-f0f6f6-ff66b3",
		"05299e-5e4ae3-947bd3-f0a7a0-f26ca7",
		"ca054d-3b1c32-a4d4b4-ffcf9c-b96d40",
		"db504a-ff6f59-254441-43aa8b-b2b09b",

		"2b2d42-8d99ae-edf2f4-ef233c-d90429",
		"85ffc7-297373-ff8552-e6e6e6-39393a",
		"321325-5f0f40-9a031e-cb793a-fcdc4d",
		"f06449-ede6e3-dadad9-36382e-5bc3eb",
		"3d0814-e7f9a9-c6b38e-9a9b73-442f38",
		"6a8d73-f4fdd9-e4ffe1-ffe8c2-f0a868",
		"2d3142-4f5d75-bfc0c0-ffffff-ef8354",
		"26547c-ef476f-ffd166-06d6a0-fffcf9",
		"e54b4b-ffa987-f7ebe8-444140-1e1e24",
		"3f0d12-a71d31-f1f0cc-d5bf86-8d775f",

		"9bc995-98b9ab-5171a5-3f3047-eef36a",
		"00bfb2-1a5e63-028090-f0f3bd-c64191",
		"acbea3-40476d-826754-ad5d4e-eb6534",
		"bce7fd-c492b1-af3b6e-424651-21fa90",
		"000000-fffffc-beb7a4-ff7f11-ff1b1c",
		"80a1c1-eee3ab-d9cfc1-a77e58-ba3f1d",
		"042a2b-5eb1bf-54f2f2-fcfcfc-f4e04d",
		"7fb069-fffbbd-e6aa68-ca3c25-1d1a05",
		"c2b2b4-6b4e71-3a4454-53687e-f5dddd",
		"f7f052-f28123-d34e24-563f1b-38726c",

		"f6f7eb-e94f37-393e41-3f88c5-44bba4",
		"721121-a5402d-f15156-ffc07f-ffcf99",
		"ff9fb2-fbdce2-0acdff-60ab9a-dedee0",
		"2e86ab-a23b72-f18f01-c73e1d-3b1f2b",
		"e0acd5-3993dd-f4ebe8-29e7cd-6a3e37",
		"28536b-c2948a-7ea8be-f6f0ed-bbb193",
		"d00000-ffba08-3f88c5-032b43-136f63",
		"0b2027-40798c-70a9a1-cfd7c7-f6f1d1",
		"6e2594-ecd444-808080-000000-ffffff",
		"f49097-dfb2f4-f5e960-f2f5ff-55d6c2",

		"14281d-355834-6e633d-c2a878-f1f5f2",
		"393e41-d3d0cb-e7e5df-44bba4-e7bb41",
		"561643-6c0e23-c42021-f3ffb9-3c1742",
		"70d6ff-ff70a6-ff9770-ffd670-e9ff70",
		"ea638c-b33c86-190e4f-03012c-002a22",
		"bce7fd-c492b1-af3b6e-424651-21fa90",
		"5aa9e6-7fc8f8-f9f9f9-ffe45e-ff6392",
		"ffbf00-e83f6f-2274a5-32936f-ffffff",
		"12355b-420039-d72638-ffffff-ff570a",
		"eec643-141414-eef0f2-0d21a1-011638",

		"f03a47-af5b5b-f6f4f3-276fbf-183059",
		"fffd82-ff9b71-e84855-b56b45-2b3a67",
		"fbf2c0-48392a-43281c-c06e52-f96f5d",
		"6369d1-60e1e0-d8d2e1-b88e8d-34435e",
		"f9c80e-f86624-ea3546-662e9b-43bccd",
		"0f0a0a-f5efed-2292a4-bdbf09-d96c06",
		"731dd8-48a9a6-e4dfda-d4b483-c1666b",
		"3f84e5-f0e2e7-b20d30-c17817-3f784c",
		"ed6a5a-f4f1bb-9bc1bc-5ca4a9-e6ebe0",
		"053225-e34a6f-f7b2bd-b2a198-60a561",

		"4c1e4f-b5a886-fee1c7-fa7e61-f44174",
		"e1d89f-cd8b76-c45baa-7d387d-27474e",
		"1e152a-4e6766-5ab1bb-a5c882-f7dd72",
		"ac3931-e5d352-d9e76c-537d8d-482c3d",
		"ad343e-474747-f2af29-000000-e0e0ce",
		"e5e059-bdd358-ffffff-999799-e5625e",
		"3d348b-7678ed-f7b801-f18701-f35b04",
		"393e41-d3d0cb-e2c044-587b7f-1e2019",
		"b2aa8e-0c1b33-7a306c-03b5aa-dbfe87",
		"0081a7-00afb9-fdfcdc-fed9b7-f07167",
	]

	cb = cb_array[int($fx.rand() * cb_array.length)];

	let slash_index = cb.lastIndexOf('/');
	let pallate_str = cb.slice(slash_index + 1);
	let arr = pallate_str.split('-');
	for (let i = 0; i < arr.length; i++) {
		arr[i] = '#' + arr[i] //+ 'AA';
	}
	return arr;
}