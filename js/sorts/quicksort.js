function quicksort(arr) {
	var mods = [];
	splitQuick(arr, 0, arr.length - 1, mods);
	return mods;
}

function splitQuick(arr, begin, end, mods) {
	if (begin < end) {
		var p = partition(arr, begin, end, mods);
		splitQuick(arr, begin, p - 1, mods);
		splitQuick(arr, p + 1, end, mods);
	}
}

function partition(arr, begin, end, mods) {
	var pivot = getIndex(arr, end, mods);
	var i = begin - 1;
	
	for (var j = begin; j < end; j++) {
		if (lessThanVal(arr, j, pivot, mods)) {
			i++;
			swap(arr, i, j, mods);
		}
	}
	swap(arr, i + 1, end, mods);
	return i + 1;
}