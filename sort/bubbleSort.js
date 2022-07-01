function bubbleSort(arr) {
  let noSwap;

  function swap(index1, index2) {
    const temp = arr[index1];

    arr[index1] = arr[index2];
    arr[index2] = temp;
  }

  for (let i = arr.length; i > 0; i--) {
    noSwap = true;

    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(j, j + 1);

        noSwap = false;
      }
    }

    if (noSwap) {
      break;
    }
  }

  return arr;
}

console.log(bubbleSort([2, 5, 7, 1, 10, -1]));
