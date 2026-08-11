let colsX;
let colsY;
let colsZ;

var cb;

let myCamera;
var start = 0;
var number_of_color = 11
var judgment_number = [];

var box_size

var color_arreyX = [];
var color_arreyY = [];
var color_arreyZ = [];

var denominator = [];

var noise_feild_maker;


function setup() {
	let seed = $fx.rand()
	noiseSeed(seed);

	angleMode(DEGREES);

	colsX = ColorBox(cb);
	colsY = ColorBox(cb);
	colsZ = ColorBox(cb);

	var mysize = min(windowWidth, windowHeight);
	createCanvas(mysize, mysize, WEBGL);
	
	var w = floor(0.1 + $fx.rand() * 0.5);
	noiseDetail(int(5 + $fx.rand() * 10), w); // 0.35
	angleMode(DEGREES)

	box_size = 12 + $fx.rand() * 15

	camera_setup(mysize)
	noStroke();
	pixelDensity(5)
	
	background("#f2cc8f")
}

var ortho_function = 1.8

function camera_setup(mysize) {
	myCamera = createCamera();
	myCamera.setPosition(mysize, -mysize, mysize); //正六角形の様に表示できる
	myCamera.lookAt(0, 0, 0);
	myCamera.ortho(-mysize * ortho_function, mysize * ortho_function, -mysize * ortho_function, mysize * ortho_function, -1000, 10000);
	//ortho([左]、[右]、[下]、[上]、[近く]、[遠い])
}

function style_selecter(spaceX, spaceY, spaceZ, color_arreyX, color_arreyY, color_arreyZ, style_selecter_number) {
	push()
	translate(0, 0, spaceZ / 2)
	fill(color_arreyX[style_selecter_number]);
	plane(spaceY, spaceZ); //X
	pop()

	push()
	translate(0, -spaceY / 2, 0)
	rotateX(90)
	fill(color_arreyY[style_selecter_number]);
	plane(spaceX, spaceZ); //Y
	pop()

	push()
	translate(spaceX / 2, 0, 0)
	rotateY(90)
	fill(color_arreyZ[style_selecter_number]);
	plane(spaceX, spaceY); //Z
	pop()

}

function color_selecter() {
	for (var a = 0; a < number_of_color; a++) { //色の選別（1つ前の色と同じにならない）
		color_arreyX[a] = colsX[Math.floor($fx.rand() * colsX.length)];
		while (color_arreyX[a - 1] == color_arreyX[a]) {
			color_arreyX[a] = colsX[Math.floor($fx.rand() * colsX.length)]
		}
	}

	for (var b = 0; b < number_of_color; b++) { //色の選別（1つ前の色と同じにならない）
		color_arreyY[b] = colsY[Math.floor($fx.rand() * colsY.length)];
		while (color_arreyY[b - 1] == color_arreyY[b]) {
			color_arreyY[b] = colsY[Math.floor($fx.rand() * colsY.length)]
		}
	}

	for (var c = 0; c < number_of_color; c++) { //色の選別（1つ前の色と同じにならない）
		color_arreyZ[c] = colsZ[Math.floor($fx.rand() * colsZ.length)];
		while (color_arreyZ[c - 1] == color_arreyZ[c]) {
			color_arreyZ[c] = colsZ[Math.floor($fx.rand() * colsZ.length)]
		}
	}
	return [color_arreyX, color_arreyY, color_arreyZ];
}

function draw() {

	cols = ColorBox(cb);
	bgColIndex = int($fx.rand() * cols.length);
	cols.splice(bgColIndex, 1);

	colsX = ColorBox(cb);
	colsY = ColorBox(cb);
	colsZ = ColorBox(cb);
	// clear();

	var mysize = min(windowWidth, windowHeight);

	push()

	translate(-mysize, -mysize, -mysize)

	judgment_number = [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0];

	var spaceX = box_size;
	var spaceY = box_size;
	var spaceZ = box_size;

	var gap_number = 1

	color_selecter();

	// noprotect

	denominator = [
		[1000, 1000, 1000],
		[1000, 7500, 7500],
		[7500, 1000, 7500],
		[7500, 7500, 1000],
		[1000, 3250, 3250],
		[3250, 1000, 3250],
		[3250, 3250, 1000],
		[2000, 2000, 2000],
		[2000, 10000, 10000],
		[10000, 2000, 10000],
	];

	var random_denominator = int($fx.rand() * denominator.length);
	const vary = 2

	for (var x = 0; x < mysize * vary; x += spaceX * gap_number) {

		for (var y = 0; y < mysize * vary; y += spaceX * gap_number) {

			for (var z = 0; z < mysize * vary; z += spaceX * gap_number) {
				push()
				translate(x, y, z);
				noise_feild_maker = round(
					noise(
						x / denominator[random_denominator][0], 
						y / denominator[random_denominator][1], 
						z / denominator[random_denominator][2])
						 * 100);

				if (noise_feild_maker % number_of_color == 0) {
					if (judgment_number[0] == 0) {
						var style_selecter_number = 0;
						print(style_selecter_number)
						style_selecter(spaceX, spaceY, spaceZ, color_arreyX, color_arreyY, color_arreyZ, style_selecter_number);

					} else if (judgment_number[0] == 1) {
						noFill();
					}
					//x += spaceX * gap_number
				} else if (noise_feild_maker % number_of_color == 1) {
					if (judgment_number[1] == 0) {
						var style_selecter_number = 1;
						style_selecter(spaceX, spaceY, spaceZ, color_arreyX, color_arreyY, color_arreyZ, style_selecter_number);

					} else if (judgment_number[1] == 1) {
						noFill();
					}
				} else if (noise_feild_maker % number_of_color == 2) {
					if (judgment_number[2] == 0) {
						var style_selecter_number = 2;
						style_selecter(spaceX, spaceY, spaceZ, color_arreyX, color_arreyY, color_arreyZ, style_selecter_number);

					} else if (judgment_number[2] == 1) {
						noFill();
					}
				} else if (noise_feild_maker % number_of_color == 3) {
					if (judgment_number[3] == 0) {
						var style_selecter_number = 3;
						style_selecter(spaceX, spaceY, spaceZ, color_arreyX, color_arreyY, color_arreyZ, style_selecter_number);

					} else if (judgment_number[3] == 1) {
						noFill();
					}
				} else if (noise_feild_maker % number_of_color == 4) {
					if (judgment_number[4] == 0) {
						var style_selecter_number = 4;
						style_selecter(spaceX, spaceY, spaceZ, color_arreyX, color_arreyY, color_arreyZ, style_selecter_number);

					} else if (judgment_number[4] == 1) {
						noFill();
					}
				} else if (noise_feild_maker % number_of_color == 5) {
					if (judgment_number[5] == 0) {
						var style_selecter_number = 5;
						style_selecter(spaceX, spaceY, spaceZ, color_arreyX, color_arreyY, color_arreyZ, style_selecter_number);

					} else if (judgment_number[5] == 1) {
						noFill();
					}
				} else if (noise_feild_maker % number_of_color == 6) {
					if (judgment_number[6] == 0) {
						var style_selecter_number = 6;
						style_selecter(spaceX, spaceY, spaceZ, color_arreyX, color_arreyY, color_arreyZ, style_selecter_number);

					} else if (judgment_number[6] == 1) {
						noFill();
					}
				} else if (noise_feild_maker % number_of_color == 7) {
					if (judgment_number[7] == 0) {
						var style_selecter_number = 7;
						style_selecter(spaceX, spaceY, spaceZ, color_arreyX, color_arreyY, color_arreyZ, style_selecter_number);

					} else if (judgment_number[7] == 1) {
						noFill();
					}
				} else if (noise_feild_maker % number_of_color == 8) {
					if (judgment_number[8] == 0) {
						var style_selecter_number = 8;
						style_selecter(spaceX, spaceY, spaceZ, color_arreyX, color_arreyY, color_arreyZ, style_selecter_number);

						//spaceZ = spaceZ * 3
					} else if (judgment_number[8] == 1) {
						noFill();
					}
				} else if (noise_feild_maker % number_of_color == 9) {
					if (judgment_number[9] == 0) {
						var style_selecter_number = 0;
						style_selecter(spaceX, spaceY, spaceZ, color_arreyX, color_arreyY, color_arreyZ, style_selecter_number);
					} else if (judgment_number[9] == 1) {
						noFill();
					}
				} else if (noise_feild_maker % number_of_color == 10) {
					if (judgment_number[10] == 0) {
						var style_selecter_number = 0;
						style_selecter(spaceX, spaceY, spaceZ, color_arreyX, color_arreyY, color_arreyZ, style_selecter_number);
					} else if (judgment_number[10] == 1) {
						noFill();
					}
				}

				//初期状態に戻す
				noStroke()
				spaceX = box_size;
				spaceY = box_size;
				spaceZ = box_size;
				
				pop()

			}
		}
	}
	pop();
	noLoop()
}

//--------------------------------------------

function ColorBox(cb) {

	var cb_array = [
		"f73939-ffda33-0c4896-48b7f7-f7f7f7-2b2b2b-f78e2c-3BD89F-a4459f-177e89-084c61-db3a34-ffc857-f73939-ffda33-0c4896-48b7f7-a480cf-f18701-f35b04-eb9486-ee92c2-3e000c-f9f8f8-E46424-E50009-14B7DA-0881E6-FF75A5-FCD232",


		"2364aa-3da5d9-73bfb8-fec601-ea7317-ba1200-031927-9dd1f1-508aa8-c8e0f4-171219-225560-edf060-f0803c-310d20-006ba6-0496ff-ffbc42-d81159-8f2d56",
		"fff05a-ffd25a-ffaa5a-ff785a-191919-638475-90e39a-ddf093-f6d0b1-ce4760-331832-d81e5b-f0544f-c6d8d3-fdf0d5-2d3047-419d78-e0a458-ffdbb5-c04abc",
		"ef6f6c-465775-56e39f-59c9a5-5b6c5d-2274a5-f75c03-f1c40f-d90368-00cc66-1b998b-ed217c-2d3047-fffd82-ff9b71-11151c-212d40-364156-7d4e57-d66853",
		"9ba2ff-a499be-9e8576-7a542e-2a2e45-efb0a1-f4afb4-c9b7ad-94a89a-797d81-27187e-758bfd-aeb8fe-f1f2f6-ff8600-ff499e-d264b6-a480cf-779be7-49b6ff",
		"ff9f1c-ffbf69-ffffff-cbf3f0-2ec4b6-646e78-8d98a7-dcccbb-eab464-a7754d-ef3e36-17bebb-2e282a-edb88b-fad8d6-d81159-8f2d56-218380-fbb13c-73d2de",
		"104547-4b5358-727072-af929d-d2d6ef-033f63-28666e-7c9885-b5b682-fedc97-d9d0de-bc8da0-a04668-ab4967-0c1713-3c1642-086375-1dd3b0-affc41-b2ff9e",
		"3f3f37-d6d6b1-494331-878472-de541e-ac3931-e5d352-d9e76c-537d8d-482c3d-7c6a0a-babd8d-ffdac6-fa9500-eb6424-241e4e-960200-ce6c47-ffd046-eadaa2",
		"a62639-db324d-56494e-a29c9b-511c29-44af69-f8333c-fcab10-2b9eb3-dbd5b5-ed254e-f9dc5c-c2eabd-011936-465362-065143-129490-70b77e-e0a890-ce1483",
		"190b28-685762-9b9987-efa9ae-e55381-F27EA9-366CD9-5EADF2-636E73-F2E6D8-D962AF-58A6A6-8AA66F-F29F05-F26D6D-222940-D98E04-F2A950-BF3E21-F2F2F2",
		"1B618C-55CCD9-F2BC57-F2DAAC-F24949-074A59-F2C166-F28241-F26B5E-F2F2F2-023059-459DBF-87BF60-D9D16A-F2F2F2-632973-02734A-F25C05-F29188-F2E0DF",
		"8D95A6-0A7360-F28705-D98825-F2F2F2-4146A6-063573-5EC8F2-8C4E03-D98A29-034AA6-72B6F2-73BFB1-F2A30F-F26F63-303E8C-F2AE2E-F28705-D91414-F2F2F2",
		"424D8C-84A9BF-C1D9CE-F2B705-F25C05-D9D7D8-3B5159-5D848C-7CA2A6-262321-906FA6-025951-252625-D99191-F2F2F2",

		"202c39-283845-b8b08d-f2d492-f29559-c4d6b0-477998-291f1e-f64740-a3333d",
		"272727-fed766-009fb7-696773-eff1f3-12355b-420039-d72638-ffffff-ff570a-ffffff-ffcad4-b0d0d3-c08497-f7af9d",
		"7b7554-17183b-a11692-ff4f79-ffb49a-dd7373-3b3561-ead94c-d1d1d1-51a3a3-ff6b35-f7c59f-efefd0-004e89-1a659e",
		"f75c03-d90368-820263-291720-04a777-aa8f66-ed9b40-ffeedb-61c9a8-ba3b46-1c110a-e4d6a7-e9b44c-9b2915-50a2a7",
		"58355e-e03616-fff689-cfffb0-5998c5-ef476f-ffd166-06d6a0-118ab2-073b4c",
		"095256-087f8c-5aaa95-86a873-bb9f06-0a2463-fb3640-605f5e-247ba0-e2e2e2",
		"d4e09b-9cb380-94a89a-c7ac92-a44a3f-ad343e-474747-f2af29-e0e0ce-4da1a9-2e5077-611c35",
		"403f4c-e84855-f9dc5c-3185fc-efbcd5-bf1a2f-f00699-454e9e-018e42-f7d002",
		"1e3888-47a8bd-f5e663-ffad69-9c3848-087e8b-ff5a5f-3c3c3c-f5f5f5-c1839f",
		"b2aa8e-0c1b33-7a306c-03b5aa-dbfe87-c6c5b9-62929e-4a6d7c-393a10-475657-b4edd2-a0cfd3-8d94ba-9a7aa0-87677b",
		"d00000-ffba08-3f88c5-032b43-136f63-3b1f2b-db162f-dbdfac-5f758e-383961-fbaf00-ffd639-ffa3af-007cbe-00af54",
		"b1740f-ffd07b-fdb833-296eb4-1789fc-982649-7c8483-71a2b6-60b2e5-53f4ff-022f40-38aecc-0090c1-183446-046e8f",
		"fcaa67-b0413e-ffffc7-548687-473335-ff69eb-ff86c8-ffa3a5-ffbf81-ffdc5e-084c61-db504a-e3b505-4f6d7a-56a3a6-ffcad4-b0d0d3-c08497-f7af9d",
		"885053-fe5f55-777da7-94c9a9-c6ecae-48639c-4c4c9d-712f79-976391-f7996e-562c2c-f2542d-f5dfbb-0e9594-127475",

		"f9e0d9-e6dbd0-7d6167-754f5b-5d4954-381d2a-3e6990-aabd8c-e9e3b4-f39b6d",
		"cabac8-ff101f-b2ddf7-81d6e3-4cb5ae-000000-cf5c36-eee5e9-7c7c7c-efc88b",
		"4392f1-ece8ef-e3ebff-e7f0ff-dc493a-2e6171-556f7a-798086-b79fad-d4afcd",
		"c33c54-254e70-37718e-8ee3ef-aef3e7-eac8ca-f2d5f8-e6c0e9-bfabcb-8d89a6",
		"d8ddef-a0a4b8-7293a0-45b69c-21d19f-6a8d73-f4fdd9-e4ffe1-ffe8c2-f0a868",
		"483c46-3c6e71-70ae6e-beee62-f4743b-f3e8ee-bacdb0-729b79-475b63-2e2c2f",
		"f0b67f-fe5f55-d6d1b1-c7efcf-eef5db-e8c547-30323d-4d5061-5c80bc-cdd1c4",
		"30bced-303036-fffaff-fc5130-050401-f59ca9-f6828c-df57bc-a03e99-371e30",
		"edc9ff-fed4e7-f2b79f-e5b769-d8cc34-cbff8c-e3e36a-c16200-881600-4e0110",
		"ffac81-ff928b-fec3a6-efe9ae-cdeac0-383f51-dddbf1-3c4f76-d1beb0-ab9f9d",
		"161032-faff81-ffc53a-e06d06-b26700-ccf5ac-bad29f-808a9f-2c497f-3d2b56",
		"177e89-084c61-db3a34-ffc857-323031-0a0908-22333b-eae0d5-c6ac8f-5e503f",
		"091e05-004f2d-d87cac-f9b9c3-ffda22-8fbfe0-7c77b9-1d8a99-0bc9cd-14fff7",
		"6a041d-f5b841-f4ff52-53ff45-1e2ede-003049-d62828-f77f00-fcbf49-eae2b7",
		"524948-57467b-7cb4b8-70f8ba-cafe48-484349-f7f0f0-8af3ff-18a999-109648",
		"93032e-c69f89-a6a15e-84894a-034c3c-f6511d-ffb400-00a6ed-7fb800-0d2c54",
		"fcaa67-b0413e-ffffc7-548687-473335-cbe896-aac0aa-fcdfa6-a18276-f4b886",
		"fcfcfc-f7567c-fffae3-99e1d9-5d576b-30bced-303036-fffaff-fc5130-050401",
		"606c38-283618-fefae0-dda15e-bc6c25-cdb4db-ffc8dd-ffafcc-bde0fe-a2d2ff",
		"dad7cd-a3b18a-588157-3a5a40-344e41-ccd5ae-e9edc9-fefae0-faedcd-d4a373",
		"edede9-d6ccc2-f5ebe0-e3d5ca-d5bdaf-f4f1de-e07a5f-3d405b-81b29a-f2cc8f",
		"cad2c5-84a98c-52796f-354f52-2f3e46-264653-2a9d8f-e9c46a-f4a261-e76f51",
		"8ecae6-219ebc-023047-ffb703-fb8500-2b2d42-8d99ae-edf2f4-ef233c-d90429",
		"003049-d62828-f77f00-fcbf49-eae2b7-edafb8-f7e1d7-dedbd2-b0c4b1-4a5759",
		"000000-14213d-fca311-e5e5e5-ffffff-0fa3b1-b5e2fa-f9f7f3-eddea4-f7a072",
		"ffbe0b-fb5607-ff006e-8338ec-3a86ff-000814-001d3d-003566-ffc300-ffd60a",
		"ff99c8-fcf6bd-d0f4de-a9def9-e4c1f9-ffcdb2-ffb4a2-e5989b-b5838d-6d6875",
		"880d1e-dd2d4a-f26a8d-f49cbb-cbeef3-353535-3c6e71-ffffff-d9d9d9-284b63",
		"f72585-7209b7-3a0ca3-4361ee-4cc9f0-8cb369-f4e285-f4a259-5b8e7d-bc4b51",
		"006d77-83c5be-edf6f9-ffddd2-e29578-0081a7-00afb9-fdfcdc-fed9b7-f07167",
		"386641-6a994e-a7c957-f2e8cf-bc4749-5f0f40-9a031e-fb8b24-e36414-0f4c5c",
		"9b5de5-f15bb5-fee440-00bbf9-00f5d4-ffba49-20a39e-ef5b5b-23001e-a4a9ad",
		"390099-9e0059-ff0054-ff5400-ffbd00-335c67-fff3b0-e09f3e-9e2a2b-540b0e",

		"f94144-f3722c-f8961e-f9844a-f9c74f-90be6d-43aa8b-4d908e-577590-277da1",
		"001219-005f73-0a9396-94d2bd-e9d8a6-ee9b00-ca6702-bb3e03-ae2012-9b2226",
		"fbf8cc-fde4cf-ffcfd2-f1c0e8-cfbaf0-a3c4f3-90dbf4-8eecf5-98f5e1-b9fbc0",
	]

	cb = cb_array[int($fx.rand() * cb_array.length)];

	let slash_index = cb.lastIndexOf('/');
	let pallate_str = cb.slice(slash_index + 1);
	let arr = pallate_str.split('-');
	for (let i = 0; i < arr.length; i++) {
		arr[i] = '#' + arr[i] // + 'E6';
	}
	return arr;
}