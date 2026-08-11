// Special functions:




// Map ranges

function upigrMap(value, low1, high1, low2, high2) {
    return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
}

// Random functions

function upigrRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(fxrand() * (max - min + 1) + min);
}

function upigrRandomFloat(min, max) {
  return fxrand() * (max - min) + min;
}

// Draw regular polygons

function upigrPoly(x, y, radius, npoints) {
	  let angle = TWO_PI / npoints;
	  beginShape();
	  for (let a = 0; a < TWO_PI; a += angle) {
		      let sx = x + cos(a) * radius;
		      let sy = y + sin(a) * radius;
		      vertex(sx, sy);
		    }
	  endShape(CLOSE);
}
// Function for shuffle array

function upigrArrayShuffle(array) {  
  var m = array.length, t, i;
while (m) {     
  i = Math.floor(fxrand() * m--);
	t = array[m];
	array[m] = array[i];
	array[i] = t;
			   }
	   return array;
}

// Select a random element from array without repeats

function randomNoRepeats(array) { 
  var copy = array.slice(0); 
  return function() { if (copy.length < 1) { 
    copy = array.slice(0); } 
    var index = Math.floor(fxrand() * copy.length); 
    var item = copy[index]; 
    copy.splice(index, 1); 
    return item; 
 }; 
};

// Function for shuffle only two elements of array

function upigrShuffleE(array){
  var rarray = [...array].slice(0);
  let aIndex = [];
  for(let i = 0; i<array.length;i++){
    aIndex.push(i);
  };
  indexSelect = randomNoRepeats(aIndex);
  let oneIndex = indexSelect();
  let twoIndex = indexSelect();
  rarray[oneIndex] = array[twoIndex]
  rarray[twoIndex] = array[oneIndex]
  return rarray;
};

// replace one character of string

function replaceAt(str, index, ch) { 
  return str.replace(/./g, (c, i) => i == index ? ch : c); 
};

// teoria note to abc

function t2abc(note) {
  if(note.length == 1){
    return note;
  };
  if(note.length == 2){
    if(note[1] == 'b'){
      note = "_"+note[0];
      return note;
    };
    if(note[1] == '#'){
      note = "^"+note[0];
      return note;
    };
  }
}

// Javascript program to find all combinations that
// sum to a given value
 

function combinationSum(arr, sum) {
    let ans = new Array();
    let temp = new Array();
 // first do hashing since hashset does not always
    // sort
    //  removing the duplicates using HashSet and
   // Sorting the arrayList
     let set = new Set([...arr]);
    arr = [...set];
   arr.sort()
     findNumbers(ans, arr, sum, 0, temp);
   return ans;
}
 

function findNumbers(ans, arr, sum, index, temp) {
    if (sum == 0) {
        // pushing deep copy of list to ans
         ans.push([...temp]);
        return;
   }
    for (let i = index; i < arr.length; i++) {
        // checking that sum does not become negative
        if ((sum - arr[i]) >= 0) {
             // pushing element which can contribute to
           // sum
            temp.push(arr[i]);
            findNumbers(ans, arr, sum - arr[i], i, temp);
     // removing element from list (backtracking)
	temp.splice(temp.indexOf(arr[i]), 1);

        }

    }
}

// Stars

function upigrStars(w,h,num){
  let starsColors = [
	[255,255,255],
 	[255,255,255],
 	[255,255,255], 
	[255,255,255], 
	[255,255,255], 
	[255,255,255],
	[212,227,250], 
	[212,227,250],
	[240,117,117]
  ];
  for(let i = 0;i < num;i++){
      let x = upigrRandomFloat(0,w);
      let y = upigrRandomFloat(0,h);
      let scolor = upigrRandomInt(0,starsColors.length -1);
	noStroke();
      fill(starsColors[scolor][0],starsColors[scolor][1],starsColors[scolor][2],upigrRandomFloat(0,155));
      ellipse(x,y,upigrRandomFloat(0.1,2.5));
  }
}
