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

function quicksort2(arr) {
	var mods = [];
	splitQuick2(arr, 0, arr.length - 1, mods);
	return mods;
}

function splitQuick2(arr, begin, end, mods) {
	if (begin < end) {
		
		var p = partition2(arr, begin, end, mods);
		splitQuick2(arr, begin, p - 1, mods);
		splitQuick2(arr, p + 1, end, mods);
	}
}

function partition2(arr, begin, end, mods) {
	var p = end;
	while (begin < end) {
		if (lessThan(arr, p, begin, mods)) {
			if (lessThan(arr, end, p, mods)) {
				swap(arr, begin, end, mods);
			}
			else
				end--;
		}
		else
			begin++;
	}
	if (lessThan(arr, end, p, mods)) {
		swap(arr, p, end + 1, mods);
		return end + 1;
	}
	else {
		swap(arr, p, end, mods);
		return end;
	}
}













