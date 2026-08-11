/**
 * Copyright © 2022 Lander Debreyne
 * Stone Composition By Lander Debreyne (0x3739.tez)
 * 
 * Released under CC-BY-NC-SA 4.0:
 * For more information see: https://creativecommons.org/licenses/by-nc-sa/4.0/
 * 
 * Libraries or code snippets used in this code with their respective licenses:
 * ---
 * twgl.js 4.21.2 Copyright (c) 2015, Gregg Tavares All Rights Reserved.
 * Available via the MIT license.
 * see: https://github.com/greggman/twgl.js/blob/master/LICENSE.md for details
 * Copyright 2019 Gregg Tavares
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 * ---
 * Inigo Quilez:  2D distance functions
 * https://www.iquilezles.org/www/articles/distfunctions2d/distfunctions2d.htm
 * The MIT License
 * Copyright © 2020 Inigo Quilez
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions: The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software. THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 * ---
 * psrddnoise2.glsl
 * Authors: Stefan Gustavson (stefan.gustavson@gmail.com)
 * and Ian McEwan (ijm567@gmail.com)
 * Version 2021-12-02, published under the MIT license (see below)
 * https://github.com/stegu/psrdnoise/
 * 
 * Copyright (c) 2021 Stefan Gustavson and Ian McEwan.
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a
 * copy of this software and associated documentation files (the "Software"),
 * to deal in the Software without restriction, including without limitation
 *  the rights to use, copy, modify, merge, publish, distribute, sublicense,
 *  and/or sell copies of the Software, and to permit persons to whom the
 *  Software is furnished to do so, subject to the following conditions:
 * 
 *  The above copyright notice and this permission notice shall be included
 *  in all copies or substantial portions of the Software.
 * 
 *  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
 *  THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 *  FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
 *  DEALINGS IN THE SOFTWARE.
 * 
 * -----
 * isMobile check taken from http://detectmobilebrowsers.com/about
 * Unlicense: This is free and unencumbered software released into the public domain. 
 * see: https://unlicense.org/
 * 
 * @license
 **/
// For readers of the code
// Concept: use randomness and non-determinism in javascript to compose a single fragment shader that runs deterministically
// How: use string concatenation to inject (pseudo)random or constrained parameters
// and to compose snippets of fragment shader code
// Example: injecting the correct color values for the palette, injecting the position/dimensions of shapes, 
// injecting the parameters for the composition, setting the noise offset, ...
let screen = "fullScreen", quality = 1, running = true, stopTime, pausedTime = 0, framerate = 30,previousTimestamp=0, preview = true, resize = false, roll1 = fxrand(), roll2 = fxrand(), roll3 = fxrand(), roll4 = fxrand(), rerolls= 1, firstRender = true, renderTimer = 0., autoReroll = false;
console.log("Stone Composition\nBy 0x3739.tez\nRELEASE: February 10 2022\nPlatform: fxhash\nLicense for code: CC-BY-NC-SA 4.0\nsee: https://creativecommons.org/licenses/by-nc-sa/4.0/\nLicense for visual outputs: NFT license\nsee: https://www.nftlicense.org/\nDetailed license information in @license comment in ./index.js\nhttps://www.twitter.com/0x3739\nhttps://fxhash.xyz/u/0x3739");
console.log("f,1,a,w to change aspect ratio\ns to save screenshot\nh to increase the quality modifier (maximum is 5)\nl to decrease the quality modifier (minimum is 1)\ndefault quality modifier is 1\ndimensions of canvas are multiplied by quality modifier\np to pause\nr to render a new iteration with the same color palette and composition\nt to toggle timed re-rendering (timer is 5 seconds)");
console.log("Touch command\ntriple tap to toggle rendering a new iteration with the same color palette and composition every 5 seconds\ntap timer is 0.7 seconds\nthis means triple tapping is tapping three times within 0.7 seconds");
window.addEventListener("resize", rs);
window.addEventListener("keypress", hke);
let whiteBlack = [[[0.99,0.99,0.99,0.99,0.99,0.99,0.01,0.01,0.01],[0.01,0.01,0.01,0.99,0.99,0.99,0.50,0.50,0.50],[0.01,0.01,0.01,0.99,0.99,0.99,0.50,0.50,0.50],[0.01,0.01,0.01,0.99,0.99,0.99,0.50,0.50,0.50],[0.01,0.01,0.01,0.99,0.99,0.99,0.99,0.99,0.99]],"Black on White"];
let blackWhite = [[[0.01,0.01,0.01,0.99,0.99,0.99,0.01,0.01,0.01],[0.99,0.99,0.99,0.99,0.99,0.99,0.01,0.01,0.01],[0.99,0.99,0.99,0.99,0.99,0.99,0.01,0.01,0.01],[0.99,0.99,0.99,0.99,0.99,0.99,0.01,0.01,0.01],[0.99,0.99,0.99,0.99,0.99, 0.99,0.01,0.01,0.01]],"White on Black"];
let deepOcean = [[[0.06,0.10,0.17,0.11,0.21,0.34,0.30,0.07,0.09],[0.06,0.10,0.17,0.90,0.93,0.93,0.27,0.48,0.62],[0.05,0.10,0.12,0.77,0.93,0.78,0.27,0.48,0.62],[0.06,0.10,0.17,0.27,0.48,0.62,0.60,0.62,0.62],[0.11,0.21,0.34,0.26,0.47,0.26,0.90,0.93,0.93]],"Deep Ocean"];
let capri= [[[0.363, 0.174, 0.127, 0.165, 0.616, 0.561, 0.149, 0.275, 0.325],[0.149, 0.275, 0.325, 0.165, 0.616, 0.561, 0.272, 0.131, 0.095],[0.149, 0.275, 0.325, 0.165, 0.616, 0.561, 0.914, 0.769, 0.416],[0.634, 0.538, 0.291, 0.149, 0.275, 0.325, 0.165, 0.616, 0.561],[0.165, 0.616, 0.561, 0.914, 0.769, 0.416, 0.149, 0.275, 0.325]], "Capri"];
let carbon = [[[0.085, 0.088, 0.100, 0.276, 0.300, 0.322, 0.310, 0.316, 0.319],[0.169, 0.176, 0.209, 0.553, 0.600, 0.623, 0.414, 0.188, 0.134],[0.085, 0.088, 0.093, 0.465, 0.475, 0.479, 0.290, 0.132, 0.094],[0.169, 0.176, 0.209, 0.414, 0.188, 0.134, 0.553, 0.600, 0.623],[0.169, 0.176, 0.209, 0.933, 0.424, 0.302, 0.553, 0.600, 0.623]], "Carbon"];
let desert = [[[0.0, 0.564, 0.868, 0.847, 0.157, 0.157, 0.969, 0.498, 0.0],[0.988, 0.749, 0.286, 0.847, 0.157, 0.157, 0.0, 0.188, 0.286],[0.0, 0.564, 0.868, 0.988, 0.749, 0.286, 0.969, 0.498, 0.0],[0.918, 0.886, 0.718, 0.0, 0.188, 0.286, 0.969, 0.498, 0.0],[0.969, 0.498, 0.0, 0.847, 0.157, 0.157, 0.918, 0.886, 0.718],],"Desert Oasis"];
let industry = [[[0.078, 0.129, 0.239, 0.775, 0.775, 0.775, 0.988, 0.639, 0.067],[0.0, 0.0, 0.0, 0.078, 0.129, 0.23, 0.988, 0.639, 0.067],[0.078, 0.129, 0.239,0.0, 0.0, 0.0, 0.988, 0.639, 0.067],[0.988, 0.639, 0.067, 0.775, 0.775, 0.775,0.078, 0.129, 0.239],[1.0, 1.0, 1.0, 0.078, 0.129, 0.23, 0.988, 0.639, 0.067],], "Royal Industry"];
let prototype = [[[0.965, 0.776, 0.184, 0.757, 0.691, 0.737, 0.180, 0.769, 0.714],[0.633, 0.133, 0.199, 0.180, 0.769, 0.714, 0.757, 0.691, 0.737],[0.643, 0.517, 0.123, 0.949, 0.199, 0.298, 0.180, 0.769, 0.714],[0.120, 0.513, 0.476, 0.633, 0.133, 0.199, 0.643, 0.517, 0.123],[0.757, 0.691, 0.737, 0.000, 0.086,0.153, 0.180, 0.769, 0.714]], "<Prototype>"];
let neo = [[[0.196, 0.533, 1.00, 0.455, 0.255, 0.867, 0.196, 0.533, 1.00],[0.990, 0.745, 0.043, 0.985, 0.337, 0.027, 0.995, 0.0, 0.431],[0.196, 0.533, 1.00,0.455, 0.995, 0.0, 0.455, 0.255, 0.867],[0.995, 0.0, 0.431, 0.985, 0.337, 0.027, 0.990, 0.745, 0.043, ],[0.196, 0.533, 1.00, 0.985, 0.337, 0.027, 0.995, 0.0, 0.431,]], "Neo"];
let cupcake = [[[0.965, 0.886, 0.776, 0., 0.750, 1., 0.710, 0.399, 0.462],[0.312, 0.471, 0.657, 0.710, 0.399, 0.462, 0.965, 0.886, 0.776],[0., 0.750, 1., 0.965, 0.886, 0.776, 0.428, 0.350, 0.478],[0.965, 0.886, 0.776, 0.428, 0.350, 0.478, 0.710, 0.399, 0.462],[0.428, 0.350, 0.478, 0., 0.750, 1., 0.965, 0.886, 0.776],], "Cupcakes"];
let vesuvius = [[[0.929, 0.867, 0.831, 0.098, 0.447, 0.471, 0.467, 0.180, 0.145],[0.467, 0.180, 0.145,0.769, 0.270, 0.211, 0.157, 0.239, 0.231],[0.098, 0.447, 0.471, 0.467, 0.180, 0.145, 0.929, 0.867, 0.831],[0.929, 0.867, 0.831, 0.769, 0.270, 0.211, 0.098, 0.447, 0.471],[0.157, 0.239, 0.231, 0.467, 0.180, 0.145, 0.769, 0.270, 0.211],], "Vesuvius"];
let mystique = [[[0.314, 0.318, 0.31, 0.141, 0.482, 0.627, 0.439, 0.757, 0.702],[0.439, 0.757, 0.702, 0.949, 0.373, 0.361, 0.141, 0.482, 0.627],[0.141, 0.482, 0.627, 0., 0., 0., 1., 0.878, 0.4],[0.141, 0.482, 0.627, 0.949, 0.373, 0.361, 0., 0., 0.],[1., 0.878, 0.4, 0.949, 0.373, 0.361, 0., 0., 0.]], "Mystique"]
let autumn = [[[0.565, 0.745, 0.427, 0.01, 0.01, 0.01, 0.976, 0.255, 0.267],[0.01, 0.01, 0.01, 0.565, 0.745, 0.427, 0.976, 0.78, 0.31],[0.973, 0.588, 0.118, 0.953, 0.447, 0.173, 0.01, 0.01, 0.01],[0.973, 0.588, 0.118, 0.565, 0.745, 0.427, 0.01, 0.01, 0.01],[0.565, 0.745, 0.427, 0.976, 0.255, 0.267, 0.01, 0.01, 0.01]], "Autumn Sun"];
let vulcanic = [[[0.922, 0.369, 0.157, 0.01, 0.01, 0.01, 1., 0.988, 0.949],[0.01, 0.01, 0.01, 0.922, 0.369, 0.157, 0.145, 0.141, 0.133],[0.251, 0.239, 0.224, 0.8, 0.773, 0.725, 0.01, 0.01, 0.01],[0.251, 0.239, 0.224, 0.922, 0.369, 0.157, 0.01, 0.01, 0.01],[0.922, 0.369, 0.157, 1., 0.988, 0.949, 0.01, 0.01, 0.01]],"Vulcanic"];
let marina = [[[0.99, 0.404, 0.01, 0.227, 0.431, 0.647, 0.922, 0.922, 0.922],[0.227, 0.431, 0.647, 0.99, 0.404, 0.01, 0.753, 0.753, 0.753],[0.753, 0.753, 0.753, 0.01, 0.01, 0.01, 0, 0.306, 0.596],[0.01, 0.01, 0.01, 0.99, 0.404, 0.01, 0.922, 0.922, 0.922],[0, 0.306, 0.596, 0.753, 0.753, 0.753, 0.99, 0.404, 0.01]], "Marina"];
let bauhaus = [[[0.09, 0.494, 0.537, 0.990, 0.784, 0.341, 0.031, 0.298, 0.38],[0.99, 0.784, 0.341, 0.09, 0.494, 0.537, 0.859, 0.227, 0.204],[0.859, 0.227, 0.204, 0.01, 0.01, 0.01, 0.196, 0.188, 0.192],[0.01, 0.01, 0.01, 0.09, 0.494, 0.537, 0.031, 0.298, 0.38],[0.196, 0.188, 0.192, 0.859, 0.227, 0.204, 0.09, 0.494, 0.537]], "Bauhaus"];
let uviol = [[[0.031, 0.298, 0.38, 0.990, 0.784, 0.341, 0.01, 0.01, 0.01],[0.99, 0.784, 0.341, 0.196, 0.188, 0.192, 0.031, 0.298, 0.38],[0.99, 0.784, 0.341, 0.01, 0.01, 0.01, 0.031, 0.298, 0.38],[0.196, 0.188, 0.192, 0.09, 0.494, 0.537, 0.99, 0.784, 0.341],[0.196, 0.188, 0.192, 0.09, 0.494, 0.537, 0.031, 0.298, 0.38]], "Ultra Violence"];
let gusto =[[[0.99, 0.784, 0.341, 0.031, 0.298, 0.38, 0.859, 0.227, 0.204],[0.99, 0.784, 0.341, 0.196, 0.188, 0.192, 0.031, 0.298, 0.38],[0.031, 0.298, 0.38, 0.859, 0.227, 0.204, 0.01, 0.01, 0.01],[0.196, 0.188, 0.192, 0.99, 0.784, 0.341, 0.01, 0.01, 0.01],[0.09, 0.494, 0.537, 0.859, 0.227, 0.204, 0.01, 0.01, 0.01]], "Gusto"];
let academics = [[[0.01, 0.149, 0.259, 0.898, 0.855, 0.855, 0.008, 0.016, 0.059],[0.008, 0.016, 0.059, 0.518, 0, 0.196, 0.01, 0.149, 0.259],[0.008, 0.016, 0.059, 0.898, 0.855, 0.855, 0.518, 0, 0.196],[0.01, 0.01, 0.01, 0.898, 0.584, 0.01, 0.898, 0.855, 0.855],[0.01, 0.149, 0.259, 0.518, 0, 0.196, 0.898, 0.584, 0.01]], "Academics"];
let reef = [[[0.106, 0.604, 0.667, 0.99, 0.769, 0.239, 0.01, 0.01, 0.01],[0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.106, 0.604, 0.667],[0.01, 0.01, 0.01, 0.024, 0.839, 0.627, 0.106, 0.604, 0.667],[0.01, 0.01, 0.01, 0.937, 0.278, 0.435, 0.106, 0.604, 0.667],[0.01, 0.01, 0.01, 0.937, 0.278, 0.435, 0.024, 0.839, 0.627]], "Reef"];
let comfort = [[[0.702, 0.247, 0.384, 0.047, 0.039, 0.243, 0.482, 0.118, 0.478],[0.702, 0.247, 0.384, 0.482, 0.118, 0.478, 0.953, 0.776, 0.467],[0.953, 0.776, 0.467, 0.702, 0.247, 0.384, 0.047, 0.039, 0.243],[0.482, 0.118, 0.478, 0.953, 0.776, 0.467, 0.01, 0.01, 0.01],[0.976, 0.337, 0.31, 0.047, 0.039, 0.243, 0.953, 0.776, 0.467]], "Comfort"];
let warmth = [[[0.047, 0.039, 0.243, 0.976, 0.337, 0.31, 0.482, 0.118, 0.478],[0.482, 0.118, 0.478, 0.702, 0.247, 0.384, 0.047, 0.039, 0.243],[0.01, 0.01, 0.01, 0.702, 0.247, 0.384, 0.976, 0.337, 0.31],[0.953, 0.776, 0.467, 0.01, 0.01, 0.01, 0.047, 0.039, 0.243],[0.702, 0.247, 0.384, 0.047, 0.039, 0.243, 0.01, 0.01, 0.01]], "Warmth"];
let icebath = [[[0.722, 0.047, 0.035, 0.984, 0.984, 1, 0.043, 0.31, 0.424],[0.043, 0.31, 0.424, 0.004, 0.729, 0.937, 0.722, 0.047, 0.035],[0.01, 0.01, 0.01, 0.004, 0.729, 0.937, 0.984, 0.984, 1],[0.016, 0.059, 0.086, 0.01, 0.01, 0.01, 0.722, 0.047, 0.035],[0.004, 0.729, 0.937, 0.722, 0.047, 0.035, 0.01, 0.01, 0.01]], "Ice Bath"];
let antwerp = [[[0.957, 0.835, 0.553, 0.439, 0.553, 0.506, 0, 0.078, 0.153],[0, 0.078, 0.153, 0.957, 0.835, 0.553, 0.01, 0.01, 0.01],[0.439, 0.553, 0.506, 0.01, 0.01, 0.01, 0.957, 0.835, 0.553],[0, 0.078, 0.153, 0.01, 0.01, 0.01, 0.957, 0.835, 0.553],[0.439, 0.553, 0.506, 0.01, 0.01, 0.01, 0, 0.078, 0.153]], "Antwerp"];
let rome = [[[0.122, 0.153, 0.106, 0.01, 0.01, 0.01, 0.957, 0.827, 0.369],[0.01, 0.01, 0.01, 0.957, 0.827, 0.369, 0.933, 0.588, 0.294],[0.933, 0.588, 0.294, 0.157, 0.686, 0.69, 0.01, 0.01, 0.01],[0.01, 0.01, 0.01, 0.933, 0.588, 0.294, 0.098, 0.392, 0.494],[0.957, 0.827, 0.369, 0.933, 0.588, 0.294, 0.01, 0.01, 0.01]], "Rome"];
let napels =[[[0.99, 0.624, 0.11, 0.004, 0.086, 0.153, 0.906, 0.114, 0.212],[0.01, 0.01, 0.01, 0.18, 0.769, 0.714, 0.004, 0.086, 0.153],[0.01, 0.01, 0.01, 0.99, 0.624, 0.11, 0.18, 0.769, 0.714],[0.004, 0.086, 0.153, 0.99, 0.624, 0.11, 0.01, 0.01, 0.01],[0.004, 0.086, 0.153, 0.992, 0.99, 0.988, 0.99, 0.624, 0.11]], "Naples"];
let cyber = [[[0.01, 0.01, 0.01, 0.984, 0.337, 0.027, 0.227, 0.525, 0.99],[0.984, 0.337, 0.027, 0.01, 0.01, 0.01, 0.514, 0.22, 0.925],[0.01, 0.01, 0.01, 0.514, 0.22, 0.925, 0.227, 0.525, 0.99],[0.01, 0.01, 0.01, 0.984, 0.337, 0.027, 0.227, 0.525, 0.99],[0.01, 0.01, 0.01, 0.99, 0, 0.431, 0.99, 0.745, 0.043]], "Cyber"];
let coldmetal = [[[0.145, 0.196, 0.216, 0.616, 0.706, 0.753, 0.761, 0.875, 0.89],[0.761, 0.875, 0.89, 0.01, 0.01, 0.01, 0.878, 0.984, 0.988],[0.01, 0.01, 0.01, 0.878, 0.984, 0.988, 0.145, 0.196, 0.216],[0.616, 0.706, 0.753, 0.145, 0.196, 0.216, 0.761, 0.875, 0.89],[0.761, 0.875, 0.89, 0.361, 0.42, 0.451, 0.145, 0.196, 0.216]], "Cold Metal"];
let brussels = [[[0.553, 0.031, 0.004, 0.01, 0.01, 0.01, 0.957, 0.835, 0.553],[0.957, 0.835, 0.553, 0.553, 0.031, 0.004, 0.439, 0.553, 0.506],[0, 0.078, 0.153, 0.439, 0.553, 0.506, 0.749, 0.024, 0.012],[0, 0.078, 0.153, 0.01, 0.01, 0.01, 0.957, 0.835, 0.553],[0.01, 0.01, 0.01, 0.957, 0.835, 0.553, 0.749, 0.024, 0.012]], "Brussels"];
let bruges = [[[0.918, 0.886, 0.718, 0.988, 0.749, 0.286, 0.969, 0.498, 0],[0, 0.188, 0.286, 0.839, 0.157, 0.157, 0.988, 0.749, 0.286],[0.918, 0.886, 0.718, 0.969, 0.498, 0, 0, 0.188, 0.286],[0.01, 0.01, 0.01, 0.969, 0.498, 0, 0.918, 0.886, 0.718],[0, 0.188, 0.286, 0.988, 0.749, 0.286, 0.839, 0.157, 0.157]], "Bruges"];
let vienna = [[[0.333, 0.867, 0.878, 0.2, 0.396, 0.541, 0.949, 0.392, 0.098],[0.965, 0.682, 0.176, 0.2, 0.396, 0.541, 0.184, 0.282, 0.345],[0.01, 0.01, 0.01, 0.333, 0.867, 0.878, 0.2, 0.396, 0.541],[0.965, 0.682, 0.176, 0.01, 0.01, 0.01, 0.333, 0.867, 0.878],[0.949, 0.392, 0.098, 0.01, 0.01, 0.01, 0.2, 0.396, 0.541]], "Vienna"];
let punk = [[[0.01, 0.01, 0.01, 0.247, 0.533, 0.773, 0.012, 0.169, 0.263],[0.01, 0.01, 0.01, 0.247, 0.533, 0.773, 0.012, 0.169, 0.263],[0.012, 0.169, 0.263, 0.99, 0.729, 0.031, 0.01, 0.01, 0.01],[0.01, 0.01, 0.01, 0.816, 0, 0, 0.012, 0.169, 0.263],[0.816, 0, 0, 0.247, 0.533, 0.773, 0.012, 0.169, 0.263]], "Punk"];
let cream = [[[0.004, 0.388, 0.553, 0.99, 0.949, 0.804, 0.671, 0.808, 0.8],[0.99, 0.949, 0.804, 0.01, 0.01, 0.01, 0.99, 0.01, 0.298],[0.99, 0.949, 0.804, 0.004, 0.388, 0.553, 0.671, 0.808, 0.8],[0.99, 0.949, 0.804, 0.671, 0.808, 0.8, 0.01, 0.01, 0.01],[0.01, 0.01, 0.01, 0.671, 0.808, 0.8, 0.004, 0.388, 0.553]], "Cream"];
let beach = [[[0.984, 0.996, 0.976, 0.749, 0.075, 0.388, 0.953, 0.573, 0.216],[0.01, 0.01, 0.01, 0.055, 0.475, 0.698, 0.098, 0.098, 0.137],[0.055, 0.475, 0.698, 0.098, 0.098, 0.137, 0.01, 0.01, 0.01],[0.953, 0.573, 0.216, 0.01, 0.01, 0.01, 0.984, 0.996, 0.976],[0.984, 0.996, 0.976, 0.055, 0.475, 0.698, 0.01, 0.01, 0.01]], "Beaches"];
let ghent = [[[0.949, 0.953, 0.682, 0.01, 0.01, 0.01, 0.988, 0.62, 0.31],[0.988, 0.62, 0.31, 0.929, 0.827, 0.51, 0.008, 0.004, 0.133],[0.01, 0.01, 0.01, 0.949, 0.953, 0.682, 0.008, 0.004, 0.133],[0.949, 0.953, 0.682, 0.957, 0.267, 0.18, 0.008, 0.004, 0.133],[0.01, 0.01, 0.01, 0.957, 0.267, 0.18, 0.929, 0.827, 0.51]], "Ghent"];
let counterfeit= [[[0.01, 0.01, 0.01, 0.961, 0.933, 0.62, 0.957, 0.62, 0.298],[0.01, 0.01, 0.01, 0.961, 0.933, 0.62, 0.957, 0.62, 0.298],[0.671, 0.204, 0.157, 0.231, 0.557, 0.647, 0.01, 0.01, 0.01],[0.01, 0.01, 0.01, 0.176, 0.447, 0.561, 0.671, 0.204, 0.157],[0.176, 0.447, 0.561, 0.961, 0.933, 0.62, 0.957, 0.62, 0.298]], "Counterfeit"];
let lost = [[[0.902, 0.224, 0.275, 0.945, 0.98, 0.933, 0.01, 0.01, 0.01],[0.114, 0.208, 0.341, 0.659, 0.855, 0.863, 0.271, 0.482, 0.616],[0.114, 0.208, 0.341, 0.271, 0.482, 0.616, 0.01, 0.01, 0.01],[0.945, 0.98, 0.933, 0.01, 0.01, 0.01, 0.902, 0.224, 0.275],[0.271, 0.482, 0.616, 0.659, 0.855, 0.863, 0.01, 0.01, 0.01]], "Lost"];
let athens = [[[0.031, 0.239, 0.467, 0.922, 0.922, 0.827, 0.01, 0.01, 0.01],[0.976, 0.341, 0.22, 0.957, 0.827, 0.369, 0.933, 0.588, 0.294],[0.976, 0.341, 0.22, 0.933, 0.588, 0.294, 0.01, 0.01, 0.01],[0.922, 0.922, 0.827, 0.01, 0.01, 0.01, 0.031, 0.239, 0.467],[0.933, 0.588, 0.294, 0.957, 0.827, 0.369, 0.01, 0.01, 0.01]], "Athens"];
let corfu = [[[0.922, 0.922, 0.827, 0.976, 0.341, 0.22, 0.01, 0.01, 0.01],[0.933, 0.588, 0.294, 0.957, 0.827, 0.369, 0.01, 0.01, 0.01],[0.957, 0.827, 0.369, 0.922, 0.922, 0.827, 0.031, 0.239, 0.467],[0.957, 0.827, 0.369, 0.922, 0.922, 0.827, 0.933, 0.588, 0.294],[0.01, 0.01, 0.01, 0.976, 0.341, 0.22, 0.922, 0.922, 0.827]], "Corfu"];
let occult = [[[0.01, 0.188, 0.286, 0.988, 0.749, 0.286, 0.918, 0.886, 0.718],[0.01, 0.188, 0.286, 0.918, 0.886, 0.718, 0.56, 0.103, 0.103],[0.01, 0.188, 0.286, 0.988, 0.749, 0.286, 0.969, 0.498, 0.01],[0.01, 0.01, 0.01, 0.56, 0.103, 0.103, 0.01, 0.188, 0.286],[0.988, 0.749, 0.286, 0.56, 0.103, 0.103, 0.01, 0.01, 0.01]], "Occult"];
let construction = [[[0.99, 0.827, 0.01, 0.01, 0.01, 0.01, 0.655, 0.298, 0.01],[0.01, 0.01, 0.01, 0.945, 0.949, 0.945, 0.655, 0.298, 0.01],[0.99, 0.827, 0.01, 0.99, 0.631, 0.01, 0.945, 0.949, 0.945],[0.01, 0.01, 0.01, 0.99, 0.827, 0.01, 0.99, 0.631, 0.01],[0.945, 0.949, 0.945, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01]], "Construction"];
let ashes = [[[0.957, 0.173, 0.016, 0.01, 0.01, 0.01, 0.678, 0.635, 0.588],[0.01, 0.01, 0.01, 0.059, 0.102, 0.125, 0.678, 0.635, 0.588],[0.957, 0.173, 0.016, 0.886, 0.522, 0.431, 0.059, 0.102, 0.125],[0.01, 0.01, 0.01, 0.957, 0.173, 0.016, 0.886, 0.522, 0.431],[0.059, 0.102, 0.125, 0.01, 0.01, 0.01, 0.533, 0.635, 0.667]], "Ashes"];
let herculaneum = [[[0.01, 0.01, 0.01, 0.035, 0.047, 0.008, 0.902, 0.933, 0.839],[0.867, 0.886, 0.776, 0.01, 0.01, 0.01, 0.733, 0.773, 0.667],[0.655, 0.149, 0.031, 0.733, 0.773, 0.667, 0.867, 0.886, 0.776],[0.867, 0.886, 0.776, 0.01, 0.01, 0.01, 0.655, 0.149, 0.031],[0.01, 0.01, 0.01, 0.733, 0.773, 0.667, 0.655, 0.149, 0.031]], "Herculaneum"];
let crimson = [[[0.671, 0.808, 0.8, 0.99, 0.01, 0.298, 0.01, 0.01, 0.01],[0.01, 0.01, 0.01, 0.671, 0.808, 0.8, 0.99, 0.01, 0.298],[0.01, 0.01, 0.01, 0.004, 0.388, 0.553, 0.99, 0.01, 0.298],[0.671, 0.808, 0.8, 0.38, 0.051, 0.294, 0.01, 0.01, 0.01],[0.01, 0.01, 0.01, 0.38, 0.051, 0.294, 0.99, 0.01, 0.298]], "Crimson"];
let reason = [[[0.086, 0.016, 0.016, 0.427, 0.01, 0.02, 0.99, 0.99, 0.99],[0.99, 0.99, 0.99, 0.957, 0.714, 0.278, 0.71, 0.086, 0.157],[0.086, 0.016, 0.016, 0.71, 0.086, 0.157, 0.99, 0.99, 0.99],[0.086, 0.016, 0.016, 0.99, 0.99, 0.99, 0.957, 0.714, 0.278],[0.99, 0.99, 0.99, 0.957, 0.714, 0.278, 0.086, 0.016, 0.016]], "Reason"];
let soft = [[[0.812, 0.306, 0.267, 0.949, 0.812, 0.667, 0.686, 0.737, 0.718],[0.922, 0.647, 0.541, 0.812, 0.306, 0.267, 0.686, 0.737, 0.718],[0.686, 0.737, 0.718, 0.922, 0.647, 0.541, 0.333, 0.51, 0.478],[0.812, 0.306, 0.267, 0.686, 0.737, 0.718, 0.922, 0.647, 0.541],[0.949, 0.812, 0.667, 0.812, 0.306, 0.267, 0.333, 0.51, 0.478]], "Soft"];
let inferno = [[[0.01, 0.01, 0.01, 0.749, 0.024, 0.012, 0.01, 0.078, 0.153],[0.01, 0.01, 0.01, 0.749, 0.024, 0.012, 0.957, 0.835, 0.553],[0.957, 0.835, 0.553, 0.439, 0.553, 0.506, 0.01, 0.01, 0.01],[0.01, 0.01, 0.01, 0.553, 0.031, 0.004, 0.439, 0.553, 0.506],[0.01, 0.01, 0.01, 0.749, 0.024, 0.012, 0.957, 0.835, 0.553]], "Inferno"];
let retro = [[[0.537, 0.682, 0.886, 0.01, 0.01, 0.01, 0.91, 0.953, 0.349],[0.831, 0.427, 0.902, 0.49, 0.953, 0.824, 0.01, 0.01, 0.01],[0.49, 0.953, 0.824, 0.831, 0.427, 0.902, 0.01, 0.01, 0.01],[0.537, 0.682, 0.886, 0.91, 0.953, 0.349, 0.01, 0.01, 0.01],[0.49, 0.953, 0.824, 0.624, 0.996, 0.722, 0.01, 0.01, 0.01]], "Retro"];
let colorPalettes = [capri, deepOcean, desert, carbon, prototype, industry, neo, cupcake,
vesuvius, mystique, autumn, vulcanic, marina, uviol, bauhaus, gusto, academics, reef, comfort, warmth, icebath, 
antwerp, rome, napels, cyber, coldmetal, brussels, bruges, vienna, punk, cream, beach, ghent, counterfeit, athens,
corfu, occult, construction, ashes, herculaneum, crimson, reason, soft, inferno, lost, retro, whiteBlack, blackWhite];
let colP = colorPalettes[Math.floor(fxrand()*colorPalettes.length)];
let comp = roll1<0.5?1:9;
comp += roll2<0.5?0:4;
comp += roll3<0.5?0:2;
comp += roll4<0.15?0:1;
window.$fxhashFeatures = {"Color Palette": colP[1], "Composition": comp};
console.log("Color Palette: " + colP[1] + " in Composition: " + comp);
let isMobile = false;
// isMobile check taken from http://detectmobilebrowsers.com/about under Unlicense: This is free and unencumbered software released into the public domain. 
// see: https://unlicense.org/
if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(navigator.userAgent)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))){
    isMobile = true;
    framerate = 12;
}
const dpr = (isMobile)?1:window.devicePixelRatio;
const cv = document.getElementById("glc");
const bgcv = document.getElementById("bg");
bgcv.style.display = 'none';
scd();
document.getElementById('bgfs').innerHTML = gbgfsc();
const bggl = bgcv.getContext("webgl2",{preserveDrawingBuffer: true, powerPreference: "high-performance"});
const gl = cv.getContext("webgl2",{preserveDrawingBuffer: true, powerPreference: "high-performance"});
const arrays = {position: [-1, -1, 0, 1, -1, 0, -1, 1, 0, -1, 1, 0, 1, -1, 0, 1, 1, 0]};;
const bgbufferInfo = twgl.createBufferInfoFromArrays(bggl, arrays);
const bgprogramInfo = twgl.createProgramInfo(bggl, ['vs', 'bgfs']);
let programInfo, bufferInfo;
mkProgram();
function mkProgram(){
  document.getElementById('fs').innerHTML = gfsc();
  programInfo = twgl.createProgramInfo(gl, ['vs', 'fs']);
  bufferInfo = twgl.createBufferInfoFromArrays(gl, arrays);
  firstRender = true;
}
function render(time) {
if(!running) return;
if(firstRender){console.log("Now rendering sketch " + rerolls);}
requestAnimationFrame(render);
if(firstRender){
  console.log("Time to first render: " + Math.round(performance.now() - renderTimer)/1000 + " seconds");
  firstRender = false;
}
if(previousTimestamp && time-previousTimestamp <= 1000/framerate) return;
if(resize){
  scd();
  if(screen != "fullScreen"){
    bggl.viewport(0, 0, bgcv.width, bgcv.height);
    const bguniforms = {resolution:[bgcv.width, bgcv.height]};
    bggl.useProgram(bgprogramInfo.program);
    twgl.setBuffersAndAttributes(bggl, bgprogramInfo, bgbufferInfo);
    twgl.setUniforms(bgprogramInfo, bguniforms);
    twgl.drawBufferInfo(bggl, bgbufferInfo);
    document.querySelector('body').style.backgroundImage = "url(" + bgcv.toDataURL("image/png")+ ")";
  }
  resize = false;}
previousTimestamp = time;
gl.viewport(0, 0, cv.width, cv.height);
const uniforms = {time: (time-pausedTime)*0.001, resolution:[cv.width, cv.height]};
gl.useProgram(programInfo.program);
twgl.setBuffersAndAttributes(gl, programInfo, bufferInfo);
twgl.setUniforms(programInfo, uniforms);
twgl.drawBufferInfo(gl, bufferInfo);
if(preview){fxpreview();preview = false;}
}
requestAnimationFrame(render);
function gbgfsc(){return ghe()+grnf()+gsdpp()+gbgfn()}
function gfsc(){return ghah()+gdf()+gdp();}
function ghah(){return ghe()+grnf()+gsdpp()+gldf();}
function ghe(){return `
  #ifdef GL_ES
  precision highp float;
  #endif
  uniform vec2 resolution;uniform float time;`
}
function grnf(){return gnf()+gfbm();}
function gnf(){
// psrddnoise2.glsl
//
// Authors: Stefan Gustavson (stefan.gustavson@gmail.com)
// and Ian McEwan (ijm567@gmail.com)
// Version 2021-12-02, published under the MIT license
// https://github.com/stegu/psrdnoise/
//
// Copyright (c) 2021 Stefan Gustavson and Ian McEwan.
return `float psrdnoise(vec2 x, vec2 period, float alpha, out vec2 gradient){
    vec2 uv = vec2(x.x+x.y*0.5, x.y);
    vec2 i0 = floor(uv), f0 = fract(uv);
    float cmp = step(f0.y, f0.x);
    vec2 o1 = vec2(cmp, 1.0-cmp);
    vec2 i1 = i0 + o1, i2 = i0 + 1.0;
    vec2 v0 = vec2(i0.x - i0.y*0.5, i0.y);
    vec2 v1 = vec2(v0.x + o1.x - o1.y*0.5, v0.y + o1.y);
    vec2 v2 = vec2(v0.x + 0.5, v0.y + 1.0);
    vec2 x0 = x - v0, x1 = x - v1, x2 = x - v2;
    vec3 iu, iv, xw, yw;
    if(any(greaterThan(period, vec2(0.0)))) {
      xw = vec3(v0.x, v1.x, v2.x);
      yw = vec3(v0.y, v1.y, v2.y);
      if(period.x > 0.0)
      xw = mod(vec3(v0.x, v1.x, v2.x), period.x);
      if(period.y > 0.0)
        yw = mod(vec3(v0.y, v1.y, v2.y), period.y);
      iu = floor(xw + 0.5*yw + 0.5); iv = floor(yw + 0.5);
    } else {
      iu = vec3(i0.x, i1.x, i2.x); iv = vec3(i0.y, i1.y, i2.y);
    }
    vec3 hash = mod(iu, 289.0);
    hash = mod((hash*51.0 + 2.0)*hash + iv, 289.0);
    hash = mod((hash*34.0 + 10.0)*hash, 289.0);
    vec3 psi = hash*0.07482 + alpha;
    vec3 gx = cos(psi); vec3 gy = sin(psi);
    vec2 g0 = vec2(gx.x, gy.x);
    vec2 g1 = vec2(gx.y, gy.y);
    vec2 g2 = vec2(gx.z, gy.z);
    vec3 w = 0.8 - vec3(dot(x0, x0), dot(x1, x1), dot(x2, x2));
    w = max(w, 0.0); vec3 w2 = w*w; vec3 w4 = w2*w2;
    vec3 gdotx = vec3(dot(g0, x0), dot(g1, x1), dot(g2, x2));
    float n = dot(w4, gdotx);
    vec3 w3 = w2*w; vec3 dw = -8.0*w3*gdotx;
    vec2 dn0 = w4.x*g0 + dw.x*x0;
    vec2 dn1 = w4.y*g1 + dw.y*x1;
    vec2 dn2 = w4.z*g2 + dw.z*x2;
    gradient = 10.9*(dn0 + dn1 + dn2);
    return 10.9*n;
  }`
}
function gfbm(){return `mat2 r=mat2(0.75,0.63,-0.63,0.75);float fbm(vec2 p){float f=0.0;float h=0.55;for(int i=0; i<4; i++){vec2 outg = vec2(0.,0.); f += h*abs(psrdnoise((p+vec2(`+rf(797979.7979)+`,`+rf(797979.7979)+`))*0.27, vec2(5.,5.), 0.52, outg));p*=r*(2.0079);h/=2.;}f/=1.11038;return f;}`}
// signed distance functions (sdf) for primitives
// based on https://iquilezles.org/www/articles/distfunctions2d/distfunctions2d.htm (MIT license)
// Disk (modified to move center position)
// Line Segment (unmodified version and modified to half open line segment and line)
// Hexagon (modified to move center position)
// Rhombus (modified to move center position)
function gsdpp(){
  return`float sdc(in vec2 p,in vec2 c,float r ){return length(p-c)-r;}
  float sdr(in vec2 p,in vec2 c,in vec2 w){vec2 d=abs(p-c)-w;return length(max(d,0.0))+min(max(d.x,d.y),0.0);}
  float uds( in vec2 p, in vec2 a, in vec2 b ){
    vec2 ba = b-a;
    vec2 pa = p-a;
    float h = dot(pa,ba)/dot(ba,ba);
    return length(pa-h*ba);
  }float uds1( in vec2 p, in vec2 a, in vec2 b ){
    vec2 ba = b-a;
    vec2 pa = p-a;
    float h = max(0.,dot(pa,ba)/dot(ba,ba));
    return length(pa-h*ba);
  }
  float uds2( in vec2 p, in vec2 a, in vec2 b ){
    vec2 ba = b-a;
    vec2 pa = p-a;
    float h = clamp(dot(pa,ba)/dot(ba,ba), 0., 1.);
    return length(pa-h*ba);
  }
  float sdHexagon( in vec2 p, in vec2 c , in float r ){
    const vec3 k = vec3(-0.866025404,0.5,0.577350269);
    p = abs(p-c);
    p -= 2.0*min(dot(k.xy,p),0.0)*k.xy;
    p -= vec2(clamp(p.x, -k.z*r, k.z*r), r);
    return length(p)*sign(p.y);
  }
  float ndot(vec2 a, vec2 b ) { return a.x*b.x - a.y*b.y; }
  float sdRhombus( in vec2 p, in vec2 c, in vec2 b ){
    p = abs(p-c);
    float h = clamp( ndot(b-2.0*p,b)/dot(b,b), -1.0, 1.0 );
    float d = length( p-0.5*b*vec2(1.0-h,1.0+h) );
    return d * sign( p.x*b.y + p.y*b.x - b.x*b.y );
  }`
}
function gdf(){
  return gdf1(roll1)+gdf2(roll2)+gdf3(roll3)+gdf4(roll4);
}
function gdf1(roll){
  let df =`float sd1(in vec2 p){`;
  df += roll<.5?mkGr():mkPln();
  df += `return d;}`;
  return df;
}
function gdf2(roll){
  let df =`float sd2(in vec2 p){`;
  df += roll<.5?mkGr():mkPln();
  df += `return d;}`;
  return df;
}
function gdf3(roll){
  let df =`float sd3(in vec2 p){`;
  df +=  roll<.5?mkGr():mkPln();
  df += `return d;}`;
  return df;
}
function gdf4(roll){
  let df =`float sd4(in vec2 p){`;
  df += roll>.15?mkCD():mkBigSh();
  df += `return d;}`;
  return df;
}
function mkPln(){
  let r = `float d = 20.;`
  r += mkPn();
  if(fxrand()<.5){
    r+= `float td = d;`
    r+= mkPn();
    r+= `d=min(td,d);`
  }
  return r;
}
function mkPn(){
  let r = `d =(`;
  r += fxrand()<.5?``:`-`
  r += fxrand()<.5?
  (`p.x`+ (fxrand()<.5?``:fxrand()<.5?`+p.y`:`-p.y`)+`)`):
  (`p.y` + (fxrand()<.5?``:fxrand()<.5?`+p.x`:`-p.x`)+`)`);
  r += (fxrand() <.5)?`+`:`-`;
  r += rf(.5)+ `;`;
  return r;
}
function mkGr(){
  let r = `float d = 20.; float td = 20.;`;
  if(fxrand()<.5){
    r += mkGrX();
    if(fxrand()<.25){
      r += mkGrY();
    }
  }else{
    r += mkGrY();
    if(fxrand()<.25){
      r += mkGrX();
    }
  }
  return r;
}
function mkGrX(){
  let r = ``;
  let sy = rf(.4) - .2;
  let gap = 0.;
  let lw = .03 + rf(0.12);
  let lg = 0.06 + rf(lw);
  let a = (fxrand()<.5)?rf(Math.PI/4):0;
  let maxGap = 6./Math.cos(a);
  r += `float lwx =`+lw+`;`;
  while(gap < maxGap){
    r += `td=uds(p,vec2(`+(-1.)+`,`+(sy+gap+Math.tan(a)) +`),vec2(`+(1.)+`,`+(sy + gap - Math.tan(a))  +`)) - lwx; d=min(td,d);`
    if(gap != 0)r+=`td=uds(p,vec2(`+(-1.)+`,`+(sy - gap + Math.tan(a)) +`),vec2(`+(1.)+`,`+(sy - gap - Math.tan(a))+`)) - lwx; d=min(td,d);`
    gap += 2*lw + lg;
  }
  return r;
}
function mkGrY(){
  let r = ``;
  let sy = rf(.4) - .2;
  let gap = 0.;
  let lw = .03 + rf(0.15);
  let lg = 0.05 + rf(lw);
  let a = (fxrand()<.5)?rf(Math.PI/4):0;
  let maxGap = 6./Math.cos(a);
  r += `float lwy =`+lw+`;`;
  while(gap < maxGap){
    r += `td=uds(p,vec2(`+(sy + gap + Math.tan(a))+`,`+-1.+`),vec2(`+(sy + gap - Math.tan(a)) +`,`+(1.)+`)) - lwy; d=min(td,d);`
    if(gap != 0)r+=`td=uds(p,vec2(`+(sy - gap + Math.tan(a)) +`,`+(-1.)+`),vec2(`+(sy - gap - Math.tan(a)) +`,`+(1.)+`)) - lwy; d=min(td,d);`
    gap += 2*lw+lg;
  }
  return r;
}
function mkCD(){
  let r = `vec2 c=vec2(0.,0.);float r=0.;float d = 20.; float td = 20.;vec2 dim = vec2(0.,0.);`;
  let dr = fxrand();
  let sr = fxrand();
  let d = dr<.35?0:(dr<.7?1:2);
  let sh = sr<.35?0:(sr<.7?1:2);
  let connection = d==0?(fxrand()<.25?0:1):(fxrand()<.5?0:1);
  let centers = [];
  let number = 1 + Math.floor(rf(9));
  let cdr = .2 + rf(.8);
  let cdc1 = rf(.5)-.25;
  let cdc2 = rf(.5)-.25;
  let cdan = rf(2*Math.PI);
  let cwid = 0.03 + rf(.03);
  let usizer = fxrand()<.5;
  let usize = 0.2+rf(0.5/number);
  let fullSh = fxrand()<.8;
  let nfssz = 0.15 + rf(0.20);
  if(!fullSh && connection == 0 && d != 2){
    connection = 2;
  }
  for(let i = 0; i < number; i++){
    if(d==0){
      let shsize = usizer?usize:(0.15+rf(0.5/number));
      let [n1, n2] = bmt();
      let disP = number>4?2:4;
      n1 = Math.max(Math.min(n1, 4), -4)/disP;
      n2 = Math.max(Math.min(n2, 4), -4)/disP;
      if(sh == 0){r += fullSh?ac([n1,n2],shsize):ac2([n1,n2],shsize, nfssz);}
      else if(sh==1){r += fullSh?ah([n1,n2],shsize):ah2([n1,n2],shsize, nfssz);}
      else if(sh==2){let rsize = shsize;r+= fullSh?ar([n1,n2],[rsize,rsize]):ar2([n1,n2],[rsize,rsize], nfssz);}
      centers.push([n1,n2]);
    } else if(d==1){
      let shsize = usizer?usize:(0.2+rf(0.5/number));
      let [c1, c2] = [rf(1.5)-0.75,rf(1.5)-0.75];
      if(sh==0){r += fullSh?ac([c1,c2],shsize):ac2([c1,c2],shsize, nfssz);}
      else if(sh==1){r += fullSh?ah([c1,c2],shsize):ah2([c1,c2],shsize, nfssz);}
      else if(sh==2){let rsize = shsize;r += fullSh?ar([c1,c2],[rsize,rsize]):ar2([c1,c2],[rsize,rsize], nfssz);}
      centers.push([c1,c2]);
    } else if (d == 2){
      let shsize = usizer?usize:(0.2+rf(0.5/number));
      let [c1, c2] = [cdc1 + Math.cos(cdan)*cdr, cdc2 + Math.sin(cdan)*cdr];
      if(sh==0){r += fullSh?ac([c1,c2],shsize):ac2([c1,c2],shsize, nfssz);}
      else if(sh==1){r += fullSh?ah([c1,c2],shsize):ah2([c1,c2],shsize, nfssz);}
      else if(sh==2){let rsize = shsize;r += fullSh?ar([c1,c2],[rsize,rsize]):ar2([c1,c2],[rsize,rsize], nfssz);}
      centers.push([c1,c2]);
      cdan += 2*Math.PI/(number);
    }
    if(connection == 0){
      if(centers.length !=1 ) {
        r += `td = uds2(p,vec2(`+centers[centers.length-1][0]+`,`+centers[centers.length-1][1]+`), vec2(`+centers[centers.length-2][0]+`,`+centers[centers.length-2][1]+`)) - `+cwid+`;
        d = min(td,d);`
      }
    }
    else if (connection == 1){
      let c2 = [-1., centers[centers.length-1][1]];
      let cm = Math.abs(centers[centers.length-1][0] + 5.);
      let tm = Math.abs(centers[centers.length-1][0] - 5.);
      if(tm<cm){c2 = [1., centers[centers.length-1][1]]; cm = tm;}
      tm = Math.abs(centers[centers.length-1][1] - 5.);
      if(tm<cm){c2 = [centers[centers.length-1][0], 1.]; cm = tm;}
      tm = Math.abs(centers[centers.length-1][1] + 5.);
      if(tm<cm){c2 = [centers[centers.length-1][0], -1.];}
      r += `td = uds1(p,vec2(`+centers[centers.length-1][0]+`,`+centers[centers.length-1][1]+`), vec2(`+c2[0]+`,`+c2[1]+`)) - `+cwid+`;
      d = min(td,d);`
    }
    }
    if(connection == 0){
      r += `td = uds2(p,vec2(`+centers[centers.length-1][0]+`,`+centers[centers.length-1][1]+`), vec2(`+centers[0][0]+`,`+centers[0][1]+`)) -`+cwid+`;
      d = min(td,d);`
    }
  return r;
}
function mkBigSh(){
  let cr = .8 + rf(0.5);
  let cc1 = rf(.5)-.25;
  let cc2 = rf(.5)-.25;
  let r = `vec2 c=vec2(0.,0.);float d = 20.; float td = 20.;vec2 dim = vec2(0.,0.);float r =0.;`;
  let roll = fxrand();
  let connectionroll = fxrand();
  let cwid = 0.05 + rf(0.10);
  let cx = fxrand()<.5?-20.:20.;
  let cy = fxrand()<.5?-20.:20.;
  let cOp = fxrand()<.5;
  if(roll<.35){
    r += ah2([cc1,cc2],cr, (0.03 + rf(0.15)));
  } else if (roll<.7){
    r += ac2([cc1,cc2],cr, (0.03 + rf(0.15)));
  }else{
    r += ar2([cc1,cc2],[cr,cr], (0.03 + rf(0.15)));
  }
  if(connectionroll<.1){
    r += `td = uds`+(cOp?`1`:``)+`(p,vec2(`+cc1+`,`+cc2+`), vec2(`+cx+`,`+cc2+`)) - `+cwid+`;
    d = min(td,d);`
  } else if (connectionroll<.2){
    r += `td = uds`+(cOp?`1`:``)+`(p,vec2(`+cc1+`,`+cc2+`), vec2(`+cc1+`,`+cy+`)) - `+cwid+`;
    d = min(td,d);`
  }else if(connectionroll<.4){
    r += `td = uds`+(cOp?`1`:``)+`(p,vec2(`+cc1+`,`+cc2+`), vec2(`+cx+`,`+cc2+`)) - `+cwid+`;
    d = min(td, d);
    td = uds`+(cOp?`1`:``)+`(p,vec2(`+cc1+`,`+cc2+`), vec2(`+cc1+`,`+cy+`)) - `+cwid+`;
    d = min(td,d);`
  }
  return r}
function gldf(){return`float gldf(in vec2 p){return uds(p, vec2(-1.,sin(`+rf(Math.PI)+`+time/45.)),vec2(1.,cos(`+rf(Math.PI)+`+time/35.)))-.175;}`}
function bmt(){let v1 = fxrand(), v2 = fxrand();return [Math.sqrt(-2*Math.log(v1))*Math.cos(2*Math.PI*v2), Math.sqrt(-2*Math.log(v1))*Math.sin(2*Math.PI*v2)];}
function ac(c,r){return`c=vec2(`+(c[0])+`,`+(c[1])+`);r=`+r+`;td=sdc(p,c,r);d=min(td,d);`}
function ah(c,r){return`c=vec2(`+(c[0])+`,`+(c[1])+`);r=`+r+`;td=sdHexagon(p,c,r);d=min(td,d);`}
function ar(c,dim){return`c=vec2(`+(c[0])+`,`+(c[1])+`); dim = vec2(`+dim[0]+`,`+dim[1]+`);td=sdRhombus(p,c,dim);d=min(td,d);`}
function ac2(c,r, offset){return`c=vec2(`+(c[0])+`,`+(c[1])+`);r=`+r+`;td=sdc(p,c,r); td=abs(td)-`+r*(offset)+`;d=min(td,d);`}
function ah2(c,r, offset){return`c=vec2(`+(c[0])+`,`+(c[1])+`);r=`+r+`;td=sdHexagon(p,c,r); td=abs(td)-`+r*(offset)+`;d=min(td,d);`}
function ar2(c,dim, offset){return`c=vec2(`+(c[0])+`,`+(c[1])+`); dim = vec2(`+dim[0]+`,`+dim[1]+`);td=sdRhombus(p,c,dim); td=abs(td)-`+dim[0]*(offset)+`;d=min(td,d);`}
function gdp(){return gsu() + gcc() + gpp();}
function gsu(){return`void main(void){
  vec2 q = gl_FragCoord.xy/resolution;
  vec2 p = q;
  if(resolution.x*1.11 > resolution.y && resolution.x*0.9 < resolution.y){
    p = -2.5 + 5.0*q;
    p.x *= resolution.x/resolution.y;
  }
  else if(resolution.x>resolution.y){
    p = -2.0 + 4.0*q;
    p.x *= resolution.x/resolution.y;
  }
  else{
    p = -1.5 + 3.0*q;
    p.y *= resolution.y/resolution.x;
  }
  float d1 = sd1(p);
  float d2 = sd2(p);
  float d3 = sd3(p);
  float d4 = sd4(p);
  float md = 20.;
  if(d3<0.){md=d4;}
  else if(d2<0.){md=min(d3, d4);}
  else if(d1<0.){md=min(min(d2,d3),d4);}
  float d12 = abs(d1-d2);
  float d = min(min(d1,d2), min(d3,d4));
  if(d4<0.){d = d4;}
  else if(d3<0.){d=d3;}
  else if(d2<0.){d=d2;}
  else if(d1<0.){d=d1;}
  float is = (d>0.)?0.:(d4<0.)?4.:(d3<0.)?3.:(d2<0.)?2.:1.;
  float f = fbm(25.*p);
  float ld = gldf(p);`}
function gcc(){return`vec3 col = (is==0.)?vec3(`+colP[0][0][0]+`,`+colP[0][0][1]+`,`+colP[0][0][2]+`):
  (is==1.)?vec3(`+colP[0][1][0]+`,`+colP[0][1][1]+`,`+colP[0][1][2]+`):
  (is==2.)?vec3(`+colP[0][2][0]+`,`+colP[0][2][1]+`,`+colP[0][2][2]+`):
  (is==3.)?vec3(`+colP[0][3][0]+`,`+colP[0][3][1]+`,`+colP[0][3][2]+`):
  vec3(`+colP[0][4][0]+`,`+colP[0][4][1]+`,`+colP[0][4][2]+`);
  vec3 hcol1 = (is==0.)?vec3(`+colP[0][0][3]+`,`+colP[0][0][4]+`,`+colP[0][0][5]+`):
  (is==1.)?vec3(`+colP[0][1][3]+`,`+colP[0][1][4]+`,`+colP[0][1][5]+`):
  (is==2.)?vec3(`+colP[0][2][3]+`,`+colP[0][2][4]+`,`+colP[0][2][5]+`):
  (is==3.)?vec3(`+colP[0][3][3]+`,`+colP[0][3][4]+`,`+colP[0][3][5]+`):
  vec3(`+colP[0][4][3]+`,`+colP[0][4][4]+`,`+colP[0][4][5]+`);
  vec3 hcol2 = (is==0.)?vec3(`+colP[0][0][6]+`,`+colP[0][0][7]+`,`+colP[0][0][8]+`):
  (is==1.)?vec3(`+colP[0][1][6]+`,`+colP[0][1][7]+`,`+colP[0][1][8]+`):
  (is==2.)?vec3(`+colP[0][2][6]+`,`+colP[0][2][7]+`,`+colP[0][2][8]+`):
  (is==3.)?vec3(`+colP[0][3][6]+`,`+colP[0][3][7]+`,`+colP[0][3][8]+`):
  vec3(`+colP[0][4][6]+`,`+colP[0][4][7]+`,`+colP[0][4][8]+`);`}
function gpp(){
  return `float dis = p.y + fbm(20.*p);
  f = smoothstep(0.5, 1.0, fbm(vec2(250.*p)));
  col = mix(col, vec3(0.0), f);
  f = smoothstep(0.1, 1.0, fbm(vec2(20.*d,(20.)*(dis))));
  col = mix(col, hcol1, f);
  f = smoothstep(0.1, 1.0, fbm(vec2(10.*d,(15.)*(dis))));
  col = mix(col, hcol2, f);
  if(d<0. && d4>0.)col *= 1.0 - .95*exp(-15.*abs(md));
  col *= 1.0 - .9*exp(-15.*abs(d));
  f = smoothstep(-3., .75, ld);
  col = mix(vec3(1.),col, f);
  gl_FragColor = vec4(col, 1.0);}`
};
function gbgfn(){
  return `void main(void){
    vec2 q = gl_FragCoord.xy/resolution;
    vec2 p = q;
    if(resolution.x>resolution.y){
      p = -2. + 4.0*q;
      p.x *= resolution.x/resolution.y;
    }
    else{
      p = -1.5 + 3.0*q;
      p.y *= resolution.y/resolution.x;
    }`+mkGr()+`
    vec3 col = (d>0.)?vec3(`+colP[0][0][0]+`,`+colP[0][0][1]+`,`+colP[0][0][2]+`):
    vec3(`+colP[0][4][0]+`,`+colP[0][4][1]+`,`+colP[0][4][2]+`);
    vec3 hcol1 = (d>0.)?vec3(`+colP[0][0][3]+`,`+colP[0][0][4]+`,`+colP[0][0][5]+`):
    vec3(`+colP[0][4][3]+`,`+colP[0][4][4]+`,`+colP[0][4][5]+`);
    vec3 hcol2 = (d>0.)?vec3(`+colP[0][0][6]+`,`+colP[0][0][7]+`,`+colP[0][0][8]+`):
    vec3(`+colP[0][4][6]+`,`+colP[0][4][7]+`,`+colP[0][4][8]+`);
    float dis = p.y + fbm(20.*p);
    float f = smoothstep(0.5, 1.0, fbm(vec2(250.*p)));
    col = mix(col, vec3(0.0), f);
    f = smoothstep(0.1, 1.0, fbm(vec2(20.*d,(20.)*(dis))));
    col = mix(col, hcol1, f);
    f = smoothstep(0.1, 1.0, fbm(vec2(10.*d,(15.)*(dis))));
    col = mix(col, hcol2, f);
    col *= 1.0 - .9*exp(-15.*abs(d));
    gl_FragColor = vec4(col, 1.0);
  }`
}
function dtsave(){
  let png = cv.toDataURL("image/png");
  let img = document.createElement("a");
  img.href = png;
  img.download = "stone"+rerolls+fxhash.slice(2)+".png";
  img.click();
  URL.revokeObjectURL(png);
}
function scd(){
  if(screen == "1"){let w = Math.min(window.innerHeight, window.innerWidth);cv.style.width = w+'px';cv.style.height = w+'px';cv.width = w*dpr;cv.height = w*dpr;} 
  else if(screen == "Aformat"){let h=0,w=0;if (window.innerWidth < window.innerHeight*210/297){w = window.innerWidth;h = w*297/210;}else{h = window.innerHeight;w = h*210/297;}cv.style.width = w+'px';cv.style.height = h+'px';cv.width = w*dpr;cv.height = h*dpr;
  }else if(screen == "Wallpaper"){let h=0,w=0;if (window.innerWidth < window.innerHeight*16/9){w = window.innerWidth;h = w*9/16;}else{h = window.innerHeight;w = h*16/9;}cv.style.width = w+'px';cv.style.height = h+'px';cv.width = w*dpr;cv.height = h*dpr;
  }else{let w = window.innerWidth;let h = window.innerHeight;cv.style.width = w + 'px';cv.style.height = h + 'px';cv.width = w*dpr;cv.height = h*dpr;if(isMobile){let ratio = h/w; if(ratio<1.){cv.height = 2000.*ratio; cv.width = 2000.} cv.width = 2000./ratio, cv.height = 2000.;};}cv.width *= quality;cv.height *= quality; bgcv.width = window.innerWidth*dpr; bgcv.height = window.innerHeight*dpr; bgcv.style.width = window.innerWidth;bgcv.style.height = window.innerHeight;}
function rf(f){return fxrand()*f;}
function rs(){resize = true;}
function hke(e){
  if(e.key === 's'){dtsave();};
  if(e.key === 'r'){reroll();}
  if(e.key === 't'){toggleTimeredReroll();}
  if(e.key === 'f'){screen = "fullScreen"; rs();}
  if(e.key === '1'){screen = "1"; rs();}
  if(e.key === 'a'){screen = "Aformat"; rs();}
  if(e.key === 'w'){screen = "Wallpaper"; rs();}
  if(e.key === 'h'){if(quality<5){quality++;rs();}}
  if(e.key === 'l'){if(quality>1){quality--;rs();}}
  if(e.key === 'p'){pause();}}
let lastTouch = 0;
let stLastTouch = 0;
window.addEventListener("touchstart", event => {
  const touchTime = performance.now();
  if(touchTime - stLastTouch < 700){toggleTimeredReroll();}
  stLastTouch = lastTouch;
  lastTouch = touchTime;});
function pause(){
  if(running){running=false;stopTime=performance.now();
  }else{running=true;pausedTime+=(performance.now()-stopTime);render();}
}
function toggleTimeredReroll(){
  if(autoReroll){autoReroll=false;}else{autoReroll = true; timeredReroll()};
}
function timeredReroll(){
  if(autoReroll){
    reroll();
    setTimeout(timeredReroll, 5000);
  }
}
function reroll(){
  renderTimer = performance.now();
  rerolls++;
  mkProgram();
}