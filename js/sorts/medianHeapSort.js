function medianHeapSort(arr) {
	var mods = [];
	medianHeapSortR(arr, 0, arr.length - 1, mods);
	return mods;
}

function medianHeapSortR(arr, begin, end, mods) {
		if (end > begin) {
			// split sub-array in half and make each side a heap
			var mid = Math.floor((begin + end) / 2);
			buildBackMaxHeap(arr, begin, mid, mods);
			buildMinHeap(arr, mid + 1, end, mods);

			// make elements of the left heap <= elements of the right heap
			while (lessThan(arr, mid + 1, mid, mods)) {
				// swap arr[mid] and arr[mid + 1] (the roots of the two heaps)
				swap(arr, mid, mid + 1, mods);
				// heapify both heaps
				backMaxHeapify(arr, mid, mid - begin + 1, mid, mods);
				minHeapify(arr, mid + 1, end - mid, mid + 1, mods);
			}
			// arr[mid] is the median of the sub-array and is on the correct final index

			// recursively call medianHeapSort() on each side of the sub-array
			medianHeapSortR(arr, begin, mid - 1, mods);
			medianHeapSortR(arr, mid + 1, end, mods);
		}
	}

// creates a min heap on the sub-array of arr
function buildMinHeap(arr, begin, end, mods) {
	var n = end - begin + 1;
	for (var i = Math.floor(n / 2) - 1 + begin; i >= begin; i--)
		minHeapify(arr, begin, n, i, mods);
}

// heapify the sub-tree at root of the sub-array
function minHeapify(arr, start, size, root, mods) {
	var smallest = root;
	var l = 2 * root - start + 1; // left child of root
	var r = 2 * root - start + 2; // right child of root

	// set smallest to the smallest of the root and its 2 children (l and r)
	if (l < start + size && lessThan(arr, l, smallest, mods))
		smallest = l;
	if (r < start + size && lessThan(arr, r, smallest, mods))
		smallest = r;

	if (smallest != root) {
		// swap arr[root] and arr[smallest]
		swap(arr, root, smallest, mods);
		// heapify the subtree
		minHeapify(arr, start, size, smallest, mods);
	}
}

// creates a backwards max heap on the sub-array of arr
function buildBackMaxHeap(arr, begin, end, mods) {
	var n = end - begin + 1;
	for (var i = Math.floor((n + 1) / 2) + begin; i <= end; i++)
		backMaxHeapify(arr, end, n, i, mods);
}

// heapify the sub-tree at root of the sub-array
function backMaxHeapify(arr, end, size, root, mods) {
	var largest = root;
	var l = 2 * root - end - 1; // left child of root
	var r = 2 * root - end - 2; // right child of root

	// set largest to the largest of the root and its 2 children (l and r)
	if (l > end - size && lessThan(arr, largest, l, mods))
		largest = l;
	if (r > end - size && lessThan(arr, largest, r, mods))
		largest = r;

	if (largest != root) {
		// swap arr[root] and arr[largest]
		swap(arr, root, largest, mods);
		// heapify the subtree
		backMaxHeapify(arr, end, size, largest, mods);
	}
}
