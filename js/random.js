//Phase 1: Create random array
let arr = new Array();

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

for(let i=0; i<10; i++){
    arr.push(getRandomInt(100));
    console.log(arr);
}

//Phase 2: Finde low, hight and mid
let low = Math.floor((arr.length - 1) / 2);
let hight = Math.ceil((arr.length - 1) / 2);
let median = (arr[low] + arr[hight]) / 2;

//Phase 3: QuickSort
function quickSort(array, left, right) {
	var centr = array[Math.floor((right + left) / 2)];
	var i = left;
	var k = right;
	while (i < k) {
		while (array[i] < centr) {
			i++;
		}
		while (array[k] > centr) {
			k--;
		}
		if (i <= k) {
			var tmp = array[i];
			array[i] = array[k];
			array[k] = tmp;
			i++;
			k--;
		}
	}
	if (left < k) {
		quickSort(array, left, k);
		
	}
	if (i < right) {
		quickSort(array, i, right);
	}
	return array;
}
var res = quickSort(arr, 0, arr.length-1);
console.log(res);

alert(arr)

//Phase4: Find tags
alert(document.getElementsByClassName("a").length);