function reverseArr(arr) {
	var mods = [];

	const flipTo = Math.floor(arr.length / 2);
	const back = arr.length - 1;
	for (var i = 0; i < flipTo; i++) {
		swap(arr, i, back - i, mods);
	}

	return mods;
}