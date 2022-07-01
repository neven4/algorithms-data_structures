function binarySearch(arr, searchingNum) {
  let startIndex = 0;
  let endIndex = arr.length - 1;

  while (startIndex <= endIndex) {
    let middleIndex = Math.floor((startIndex + endIndex) / 2);

    if (arr[middleIndex] === searchingNum) {
      return middleIndex;
    }

    if (arr[middleIndex] < searchingNum) {
      startIndex = middleIndex + 1;
    } else {
      endIndex = middleIndex - 1;
    }
  }

  return -1;
}
