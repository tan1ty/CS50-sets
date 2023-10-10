function bubbleSort(arr) {
  const sortedArr = [...arr];
  const n = sortedArr.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (sortedArr[j] > sortedArr[j + 1]) {
        [sortedArr[j], sortedArr[j + 1]] = [sortedArr[j + 1], sortedArr[j]];
      }
    }
  }
  return sortedArr;
}
