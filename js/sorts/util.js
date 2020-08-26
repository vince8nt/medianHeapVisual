function swap(arr, index1, index2, mods) {
	const temp = getIndex(arr, index1, mods);
	setIndex(arr, index1, getIndex(arr, index2, mods), mods);
	setIndex(arr, index2, temp, mods);
}

function lessThan(arr, index1, index2, mods) {
	if (index1 < index2)
		mods.push(["compare", index1, index2]);
	else
		mods.push(["compare", index2, index1]);
	return getIndex(arr, index1, mods) < getIndex(arr, index2, mods);
}

function setIndex(arr, index, value, mods) {
	mods.push(["write", index, value]);
	arr[index] = value;
}

function getIndex(arr, index, mods) {
	mods.push(["read", index]);
	return arr[index];
}