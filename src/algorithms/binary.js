function insertionSort(arr) {
  let sortedArr = [...arr];

  for (let i = 1; i < sortedArr.length; i++) {
    let key = sortedArr[i];
    let j = i - 1;

    while (j >= 0 && sortedArr[j] > key) {
      sortedArr[j + 1] = sortedArr[j];
      j = j - 1;
    }
    sortedArr[j + 1] = key;
  }

  return sortedArr;
}

function binarySearch(arr, target) {
  let sortedArr = insertionSort(arr.slice());
  let left = 0;
  let right = sortedArr.length - 1;

  while (left <= right) {
    let middle = Math.floor((left + right) / 2);

    if (sortedArr[middle] === target) {
      return middle;
    } else if (sortedArr[middle] < target) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }
  return -1;
}
