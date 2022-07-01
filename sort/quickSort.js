function swap(arr, index1, index2) {
  const temp = arr[index1];

  arr[index1] = arr[index2];
  arr[index2] = temp;
}

function pivot(arr, start, end) {
  let pivotValue = arr[start];
  let swapIndex = start;

  for (let i = start + 1; i <= end; i++) {
    if (pivotValue > arr[i]) {
      swapIndex++;
      swap(arr, swapIndex, i);
    }
  }

  swap(arr, start, swapIndex);

  return swapIndex;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotInx = pivot(arr, left, right);

    quickSort(arr, left, pivotInx - 1);

    quickSort(arr, pivotInx + 1, right);
  }

  return arr;
}

console.log(quickSort([9, 3, 31, 3, 41, 1, 0]));
