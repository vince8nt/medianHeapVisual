function reverseArr(arr) {
	var mods = [];
	reverse(arr, 0, arr.length - 1, mods)
	return mods;
}

function reverse(arr, begin, end, mods) {
	while (begin < end)
		swap(arr, begin++, end--, mods);
}