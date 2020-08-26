function bubbleSort(arr) {
	var mods = [];

	for (var max = arr.length - 1; max > -1; max--) {
		var noSwaps = true;
		for (var i = 0; i < max; i++) {
			if (arr[i] > arr[i + 1]) {
				mods.push([[i, i + 1], [i, i + 1]]);
				var temp = arr[i];
				arr[i] = arr[i + 1];
				arr[i + 1] = temp;
				noSwaps = false;
			}
			else {
				mods.push([[i, i + 1], [-1, -1]]);
			}
		}
		if (noSwaps) return mods; // terminate sorting because it is already finished
	}
	return mods;
}